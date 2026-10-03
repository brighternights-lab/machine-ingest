---
doc_id: L4-RULE-COMMERCIAL-MODEL
tier: L4
aud: [contractor, rep]
type: ruling
title: "Commercial model — distributors only, $100K buy-in, Academy is the one thing sold to contractors"
source: "BRI-388 (CANON, Austen 2026-08-03) and BRI-238"
ingested_from: Linear RULED sweep
classified_under: BRI-292
governed_by: BRI-1308
last_scrub: 2026-10-03
banned_term_hits: 0
---

# BNLT commercial model

**Topic.** Channel strategy
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)

Product sales. **Distributors only. Direct. $100,000 minimum initial buy-in to open the distributor account. Then the Branch Starter Pack per branch (BRI-372).** The $100,000 is NOT a per-order minimum. Do not quote a reorder minimum, none is set.

Contractors. BNLT does **not sell products** to contractors. BNLT **trains contractors, supports them, gives them tools, and runs a contractor-friendly website**. The ONE thing BNLT sells to contractors is the **Masters of Lighting Academy contractor track, currently $1,000**.

Distributor reps. BNLT sells them the **Distributor Academy, a parallel paid course**. Exact price unverified, never quote a figure.

Dealers. **Do not exist as a channel at BNLT. Banned term on customer-facing surfaces.**

Phrasing rule. Never write "BNLT does not sell to contractors" without qualifying. Correct form: "BNLT does not sell *products* to contractors. It sells them the Academy, and it trains and supports them."

Nationwide reach (RULED 2026-09-07). Distributors stock BNLT across the country. Contractors anywhere can order and have it shipped in 3 to 5 days. Homeowners fill out the form and are matched with a certified installer and an estimate. Contractors fill out the form and are connected with a stocking distributor. Florida is the proving ground, not the market.


---
doc_id: L4-RULE-GENIE-LEVELS
tier: L4
aud: [contractor, rep]
type: ruling
title: "Five Genie levels and the two Master certifications"
source: "BRI-434 (DECIDED Austen 2026-08-04, amendments through 2026-08-18)"
ingested_from: Linear RULED sweep
classified_under: BRI-292
governed_by: BRI-1308
last_scrub: 2026-10-03
banned_term_hits: 0
---

# Five Genie levels and two Master certifications

**Topic.** Light Genie tiers
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)

Levels. L1 Silver and Blue — signed-out homeowner. L2 Silver and Purple — verified contractor. L3 Silver and Orange — verified distributor rep. L4 Ultimate Access — **certified contractor** (paid for and passed the Masters of Lighting Academy contractor track). L5 Master Academy — **certified distributor rep** (paid for and passed the Distributor Academy). L5's bulb carries a crown — the only structural artwork difference between L4 and L5.

Nesting. Three lanes are unranked (Homeowner, Contractor, Distributor). Two credentials ARE ranked relative to each other — **L5 contains L4 contains L3 content** via Amendment 4 (L5 = L3 + L4 + rep-only). Entitlement is additive across lanes, never substitutive. A certified rep keeps everything an uncertified rep had and gains the master toolset on top.

Price visibility.
- L2 contractor sees no pricing.
- L3 distributor rep sees distributor cost only.
- L4 certified contractor sees contractor price and MSRP. **Never distributor cost at any tier other than L3/L5.**
- L5 certified rep sees distributor cost, contractor price, and MSRP (the whole ladder).

Tool access (Amendment 1-3).
- Simple calculators (Voltage Drop, Leak, Warranty Checker) — L2 free.
- Robust paid tools (Mesh Planner, Job Estimator, White Labeling, Lead Generation) — L4+ paid.
- L5 same paid toolset as L4 plus rep-only knowledge. Distributor typically pays for rep seats.

Isolation. Each tier is a separate Genie deployment with its own corpus. No query-time filter (BRI-357). Identical artwork for L4 and L5 is intentional — the contractor only ever reaches the contractor master Genie, the rep only ever reaches the rep master Genie.


---
doc_id: L4-RULE-CONTRACTOR-PRICING-L4
tier: L4
aud: [contractor, rep]
type: ruling
title: "Contractor pricing is L4-gated only, L2 refuses all pricing"
source: "BRI-807 (RULED Austen 2026-09-16, closed BRI-288 L2 reading as superseded)"
ingested_from: Linear RULED sweep
classified_under: BRI-292
governed_by: BRI-1308
last_scrub: 2026-10-03
banned_term_hits: 0
---

# Contractor pricing gate

**Topic.** Price visibility
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)

Rule. **Contractors see pricing only at L4 (certified Masters of Lighting).** L2 verified contractors refuse all pricing. BRI-288's earlier L2 reading is superseded.

Why this matters for the Genie. If a contractor asks the Genie about pricing and they are logged in at L2, the Genie says it does not quote pricing at that tier and routes them to the Academy. At L4 the Genie can discuss contractor price and MSRP, never distributor cost. At L5 the Genie can discuss all three (distributor cost, contractor price, MSRP) because L5 inherits L3 plus L4.

Specific pricing data points known at L4.
- Homeowner installed price range (public since BRI-192 closed 2026-08-11): **$4,000 to $8,000 installed.**
- Masters of Lighting Academy contractor track: $1,000.
- Distributor account initial buy-in: $100,000.
- Distributor Academy price: unverified, do not quote.


---
doc_id: L4-RULE-ACADEMY-STRUCTURE
tier: L4
aud: [contractor, rep]
type: ruling
title: "Masters of Lighting Academy structure and the Certified Installer Program relationship"
source: "BRI-491 (RULED umbrella, questions open on sub-split)"
ingested_from: Linear RULED sweep
classified_under: BRI-292
governed_by: BRI-1308
last_scrub: 2026-10-03
banned_term_hits: 0
doctrine_note: "BRI-491 Q1 and Q2 are still open as of 2026-10-03. The Academy umbrella name is ruled, but the exact relationship to the Certified Installer Program source material, and the per-module tier gating, are both pending Austen's final answer."
---

# Masters of Lighting Academy

**Topic.** Training and certification
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)

Umbrella. **Masters of Lighting Academy** is the brand umbrella. The **Contractor Mastery Series** is the course inside it. The **Certified Installer Program (CIP)** is deprecated as a public name, retired in favor of Masters of Lighting Academy.

Course source. Modules 01-11 of the Certified Installer Program transcripts are the current authoritative training content, filed at KNO-190 and ingested into the L4 Genie corpus (BRI-490, BRI-1308).

Per-module tier gating (recommendation, not ruled).
- Modules 01-07 (product and installation): candidate for L2 verified contractor access — this is the support BNLT already gives contractors for free.
- Modules 08, 09, 11 (sales, first job, pricing): L4 certified only — these are the paid value of the Academy and giving them away for free undercuts the $1,000 revenue.

Current L4 Genie behavior (BRI-1308). All 48 course docs are classified L4 as a conservative first pass. Modules 8 and 11 carry explicit `doctrine_note` flags because their sales and pricing content predates the 2026-08-03 channel ruling. Re-classifying modules 01-07 down to L2 is on the roadmap once Austen rules BRI-491 Q2.


---
doc_id: L4-RULE-WARRANTY-MAPPING
tier: L4
aud: [contractor, rep]
type: ruling
title: "Warranty component mapping of record"
source: "BRI-484 (RULED COMPLETE Austen/Madison 2026-08-22, 2026-08-29)"
ingested_from: Linear RULED sweep
classified_under: BRI-292
governed_by: BRI-1308
last_scrub: 2026-10-03
banned_term_hits: 0
---

# Warranty component mapping

**Topic.** Product warranty
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)

Registration window. **60 days from install.** Not 90, not 30, 60. This is final.

Component mapping (BRI-484).

| Component | Term |
|---|---|
| 12V transformer | **10 years** |
| Wire and lead line | **10 years** |
| 30mm lights (roofline) | **10 years** |
| Soffit and deck components | **10 years** |
| Fixtures, connectors, amplifiers | **10 years** |
| Bulbs (landscape, sconce) | **3 years** |
| Controller | **3 years** |
| Wi-Fi gateway | **3 years** |
| 24V power supply | **UNRULED** — currently published at 3 years but no ruling supports that. Treat as 3 years for homeowner answers but flag the gap. |

Standing copy rule. **Never write "transformer" or "power supply" unqualified.** Always say "the 12V transformer" or "the 24V power supply" so a reader comparing pages does not see two terms for what looks like the same component.

12V contradiction warning. BRI-484 flags an open contradiction. Madison stated "10 years on the transformer, wire" and later "the 12V power supply is a 3-year." On 12V landscape or sconce systems the transformer and power supply are often the same part. Until this is reconciled, the 12V transformer is published at 10 years but no new 12V warranty copy should ship.

Sconce MR16 spec correction (BRI-545). The sconce MR16 bulb is **5.5 W, 600 lm, 40,000 hr**. Older copy at other values is stale.


---
doc_id: L4-RULE-BANNED-TERMS
tier: L4
aud: [contractor, rep]
type: ruling
title: "Banned terms and competitor naming rules"
source: "BRI-26, BRI-312 (RULED v2), BRI-506 Trimlight reversal"
ingested_from: Linear RULED sweep
classified_under: BRI-292
governed_by: BRI-1308
last_scrub: 2026-10-03
banned_term_hits: 0
---

# Banned terms and competitor naming

**Topic.** Brand language rules
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)

Permanently banned on all customer-facing surfaces.
- **BlueHopper** — permitted only in app-download context, T1/T2/T3 only (BRI-312 v2). On the L4 Genie, never. Any current reference should be scrubbed.
- **BH Installer** — same scope as BlueHopper.
- **Blue Roots** — fully banned, no exceptions.
- **Christmas lights** — fully banned. Call strand products "permanent outdoor lighting" or "roofline lighting" as context fits.
- **Dealer** — banned on all customer-facing surfaces. BNLT does not have dealers.

Permitted (reversed from earlier ban).
- **Trimlight** — permitted on every surface including the Genie (BRI-26/BRI-312/BRI-506 reversal 2026-08-11). Austen: "I want to no longer block the trim light." Used in Module 1 competitive content.
- **MeshTek** — kept only in technical references, not public homeowner-facing content. Permitted on contractor and rep tiers for technical context.
- **Jellyfish, Oelo, Govee** — permitted as competitor names in L4 contractor context (competitive comparison lessons).

Compare page rule (BRI-15). Public /compare page cannot ship with competitor names. Competitor-comparison content lives inside the L4 Academy and the Genie, not on the public site.

Light Genie identity (BRI-353). Four Genie tiers are now **lanes not rungs** for the three audiences, and the two credentials are nested on top. Masters of Lighting color token is amber (`--lane-distributor` / `#FC7013` for the lane color, but the credential tier shares amber color at L4 and L5 — the crown on L5 is the only structural distinction).


---
doc_id: L4-RULE-GENIE-ARCHITECTURE
tier: L4
aud: [contractor, rep]
type: ruling
title: "Light Genie runs on context-loaded corpus, isolation by construction"
source: "BRI-506 (RULED Austen 2026-08-23), BRI-357"
ingested_from: Linear RULED sweep
classified_under: BRI-292
governed_by: BRI-1308
last_scrub: 2026-10-03
banned_term_hits: 0
---

# Light Genie runtime architecture

**Topic.** Genie engineering
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)

Architecture rule (BRI-506). The Genie runs on a **context-loaded corpus**. Entire tier corpus is loaded into the system prompt on every call. No vector database, no retrieval infrastructure, no embeddings. Correct for the current corpus size — the L4 corpus is roughly 35K tokens, comfortably inside Opus context.

Isolation (BRI-357). **Each tier is a separate deployment with its own corpus.** No query-time tier filter. The L4 deployment literally cannot see L1, L2, L3 or L5 content. If a sandbox for another tier is needed later it is a separate deployment, not a filter.

Citation requirement. The Genie must cite the doc_id of every document it draws from in the form `(ID L4-TUT-ACC-01)`. If the answer is not in the corpus it must reply `I do not have that in my knowledge base yet. Logging as kb-gap. (kb-gap)` and never guess.

Pricing in the Genie. The Genie may quote the homeowner installed range **$4,000 to $8,000** (BRI-192 closed 2026-08-11). The placeholder text on earlier guidance is retired.

Entitlement (BRI-574). The entitlement record C4 writes `Credential_Status = Active` into the Genie-readable store. **Certified contractor → L4, certified distributor rep → L5.** Until C4 lands, no live homeowner-facing routing of logged-in users to tier-specific Genies — the L4 test rig is unlisted.


---
doc_id: L4-RULE-FIVE-GENIE-APPEARANCE
tier: L4
aud: [contractor, rep]
type: ruling
title: "Light Genie appearance and dock behavior"
source: "BRI-353, BRI-434 Amendment 3"
ingested_from: Linear RULED sweep
classified_under: BRI-292
governed_by: BRI-1308
last_scrub: 2026-10-03
banned_term_hits: 0
---

# Light Genie appearance and dock

**Topic.** Genie UI
**Audience.** Certified contractor (L4) and Certified distributor rep (L5)

Visual identity. 3D luminous neon figure, no legs, spiraling energy plume, plasma orb hovering above an open palm, constellation mesh skin, magenta-to-blue color palette. Reference images on BRI-194.

Lane colors.
- Homeowner — Silver and Blue.
- Contractor — Silver and Purple.
- Distributor — Silver and Orange (Amber `#FC7013`).
- Master credential — Amber-matched for both L4 and L5. L5's bulb carries a crown as the only structural artwork difference.

Dock behavior.
- Genie is persistent on screen, standing in front of the Q&A panel.
- Attention indicator is a pulse animation, active only while the Genie is tucked.
- Compositing uses `mix-blend-mode: screen`, not alpha channel.
- Idle loop is the primary production asset, built by compositing the actual hero render rather than AI video regeneration.

Dock links to `/light-genie` page (BRI-353). Lanes not rungs for the three audiences, credentials are nested on top.
