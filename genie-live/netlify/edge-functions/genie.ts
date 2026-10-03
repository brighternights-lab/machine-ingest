import type { Context, Config } from "@netlify/edge-functions";

/**
 * BNLT Light Genie — L4 Certified Contractor tier serving function.
 *
 * On every request:
 *   1. Fetch L4-manifest.json from the brighternights-lab/machine-ingest repo
 *   2. Fetch every chunk file listed in the manifest
 *   3. Build the system prompt from the concatenated corpus + behavior rules
 *   4. Call Anthropic Messages API with prompt caching enabled
 *   5. Stream the response back as Server-Sent Events
 *
 * Governed by BRI-1308. Isolation by construction per BRI-357.
 * Doctrine notes in the manifest override voice/page content on conflicts.
 * The Anthropic API key is read from ANTHROPIC_API_KEY env var (never in code).
 */

const MANIFEST_URL =
  "https://raw.githubusercontent.com/brighternights-lab/machine-ingest/main/genie/L4-manifest.json";
const CORPUS_BASE =
  "https://raw.githubusercontent.com/brighternights-lab/machine-ingest/main/genie/";

const SYSTEM_PREAMBLE = `You are the L4 Brighter Nights Light Genie.

AUDIENCE. You answer certified contractors (L4, Masters of Lighting) and certified distributor reps (L5). Nobody else. If the question is clearly from a signed-out homeowner or an uncertified contractor, say the Genie tier does not match and route them to the public form.

GROUND RULES.
1. Cite every answer. End each answer with "(ID <doc_id>)" naming the corpus doc you drew from. Multiple docs are allowed, separated by commas.
2. Doctrine notes override voice content and page content. If a corpus doc has a doctrine_note, and the content conflicts with the ruling the note points at, defer to the ruling and explain the override in one sentence.
3. Warranty registration window is 60 days from install, FINAL (BRI-484). Never answer 90 days even if the website or an older email says so. If the user asserts 90 days, correct it and cite BRI-484.
4. Never quote distributor cost. L4 can discuss contractor price and MSRP only. If asked for distributor cost on any SKU, refuse and cite BRI-434 Amendment 3.
5. Never surface vendor or supplier names (MeshTek, ilumi, etc.). All BNLT products are branded Brighter Nights Lighting Technologies.
6. Banned on this surface: BlueHopper, Blue Roots, Christmas lights, BH Installer, dealer. Use "permanent lighting" not "Christmas lights," "distributor" not "dealer," and "BNLT Pro app" not "BlueHopper." Trimlight is permitted when comparing (BRI-312).
7. If the answer isn't in the corpus, say so and log the question as a kb-gap candidate.

VOICE. Short, direct, contractor-friendly. Austen voice when voice docs apply.

CORPUS. The L4 corpus follows below. Treat it as ground truth within the rules above.
---
`;

interface ManifestChunk {
  file: string;
  source: string;
  docs_covered: string;
}

interface Manifest {
  tier: string;
  version: number;
  chunks: ManifestChunk[];
  doctrine_notes: Array<{ applies_to_prefix: string; note: string }>;
}

async function fetchCorpus(): Promise<string> {
  const manifestRes = await fetch(MANIFEST_URL);
  if (!manifestRes.ok) {
    throw new Error(`manifest fetch failed: ${manifestRes.status}`);
  }
  const manifest = (await manifestRes.json()) as Manifest;

  const chunks = await Promise.all(
    manifest.chunks.map(async (c) => {
      const r = await fetch(CORPUS_BASE + c.file);
      if (!r.ok) throw new Error(`chunk fetch failed ${c.file}: ${r.status}`);
      return `\n\n<!-- SOURCE: ${c.source} -->\n` + (await r.text());
    })
  );

  const doctrine = manifest.doctrine_notes
    .map(
      (d) =>
        `- Any doc with id starting \`${d.applies_to_prefix}\`: ${d.note}`
    )
    .join("\n");

  return (
    `## Manifest doctrine notes (apply before any conflicting doc below)\n\n${doctrine}\n\n` +
    chunks.join("\n")
  );
}

export default async (req: Request, context: Context) => {
  const url = new URL(req.url);

  if (url.pathname === "/api/health" && req.method === "GET") {
    const key = Netlify.env.get("ANTHROPIC_API_KEY");
    return new Response(
      JSON.stringify({
        ok: true,
        tier: "L4",
        has_key: !!key,
        time: new Date().toISOString(),
      }),
      { headers: { "content-type": "application/json" } }
    );
  }

  if (url.pathname !== "/api/genie" || req.method !== "POST") {
    return new Response("Not found", { status: 404 });
  }

  const key = Netlify.env.get("ANTHROPIC_API_KEY");
  if (!key) {
    return new Response(
      JSON.stringify({
        error:
          "ANTHROPIC_API_KEY not set. Austen, open your Netlify project settings and paste the key.",
      }),
      { status: 503, headers: { "content-type": "application/json" } }
    );
  }

  let body: { messages?: Array<{ role: string; content: string }> };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid JSON body" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  if (!body.messages || !Array.isArray(body.messages)) {
    return new Response(
      JSON.stringify({ error: "body must include messages: [...]" }),
      { status: 400, headers: { "content-type": "application/json" } }
    );
  }

  let corpus: string;
  try {
    corpus = await fetchCorpus();
  } catch (e) {
    return new Response(
      JSON.stringify({ error: `corpus fetch failed: ${(e as Error).message}` }),
      { status: 502, headers: { "content-type": "application/json" } }
    );
  }

  const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-opus-4-7",
      max_tokens: 2048,
      stream: true,
      system: [
        {
          type: "text",
          text: SYSTEM_PREAMBLE + corpus,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: body.messages,
    }),
  });

  if (!anthropicRes.ok) {
    const txt = await anthropicRes.text();
    return new Response(
      JSON.stringify({ error: `anthropic ${anthropicRes.status}`, detail: txt }),
      {
        status: anthropicRes.status,
        headers: { "content-type": "application/json" },
      }
    );
  }

  // Pass the SSE stream through untouched.
  return new Response(anthropicRes.body, {
    status: 200,
    headers: {
      "content-type": "text/event-stream",
      "cache-control": "no-cache",
      "x-genie-tier": "L4",
    },
  });
};

export const config: Config = {
  path: ["/api/genie", "/api/health"],
};
