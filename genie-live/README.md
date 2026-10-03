# BNLT Light Genie — L4 Live Serving (BRI-1308)

Netlify-hosted serving layer for the L4 Certified Contractor Light Genie.

## Architecture

- **Edge function** `netlify/edge-functions/genie.ts` serves `/api/genie` (POST) and `/api/health` (GET).
- On each query it fetches `L4-manifest.json` + chunk files from `brighternights-lab/machine-ingest`, concatenates the corpus, and calls Anthropic Messages API with prompt caching.
- **Static chat page** at `public/index.html` is the contractor-facing UI.
- `ANTHROPIC_API_KEY` is a Netlify environment variable, never checked into code.

## Deployment

1. Netlify site `bnlt-genie` connected to the `brighternights-lab/machine-ingest` repo, base directory `genie-live`.
2. Environment variable `ANTHROPIC_API_KEY` set via Netlify UI (one-time Austen paste).
3. Auto-deploy on push to `main`.

## Governance

- Isolation by construction (BRI-357): this site serves L4 only. L1/L2/L3/L5 sites deploy separately.
- Doctrine notes in the manifest override voice and page content on conflicts (e.g., warranty 60d FINAL per BRI-484 overrides website 90d).
- Distributor cost refusal and vendor-name suppression enforced in the system prompt.
- Rule #1 compliance: every request is a paid Anthropic API call on Austen's account per his 2026-10-03 session approval.
