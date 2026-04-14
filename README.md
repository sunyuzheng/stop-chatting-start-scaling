# Stop Chatting, Start Scaling

English Reveal.js deck and demo repo for the Amazon talk on **April 22, 2026**.

## Files

- `deck/index.html` — presentation
- `oversized-shipping-demo/` — local demo repo used in the talk
- `sources/ai-individual.md` — structured markdown notes from the Superlinear article for individuals
- `sources/ai-mastery.md` — structured markdown notes from the Superlinear article for tech workers / teams
- `sources/presentation-building-notes.md` — synthesis used to build the deck

## Run Locally

```bash
pip install -r requirements.txt
uvicorn app:app --reload
```

Open `http://localhost:8000`.

For a quick static preview:

```bash
python3 -m http.server 8765
```

Open `http://127.0.0.1:8765/deck/index.html`.

## Live URLs

- Presentation preview: `https://skill-deploy-aalsmugt8c-codex-agent-deploys.vercel.app`
- Demo preview: `https://skill-deploy-chek4qx7xg-codex-agent-deploys.vercel.app`

## Demo

The talk includes a local demo repo:

- `oversized-shipping-demo/starter/` — the starting point used live
- `oversized-shipping-demo/solved/` — the answer key and deployable version
- `oversized-shipping-demo/DEMO_SCRIPT.md` — concise speaking script
- `oversized-shipping-demo/WALKTHROUGH.md` — step-by-step operator guide

## Framing

This version removes the live-demo section and focuses on the operating model behind reliable AI agent work:

- calibration before automation
- context over clever prompting
- evaluation and diagnosis over vibe-based review
- agentic loops over step-by-step babysitting
- memory and standards over isolated chat sessions
- capability expansion, not just speed
