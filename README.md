# Stop Chatting, Start Scaling

English Reveal.js deck and demo repo for the Amazon talk on **April 22, 2026**.

Short link for the talk: <https://go.ai-builders.com/amazon>

GitHub repo: <https://github.com/sunyuzheng/stop-chatting-start-scaling>

## Files

- `deck/index.html` — presentation
- `oversized-shipping-demo/` — local demo repo used in the talk
- `docs/DEMO_AND_DEPLOY.md` — tomorrow-ready setup, demo, and deploy guide
- `sources/ai-individual.md` — structured markdown notes from the Superlinear article for individuals
- `sources/ai-mastery.md` — structured markdown notes from the Superlinear article for tech workers / teams
- `sources/presentation-building-notes.md` — synthesis used to build the deck
- `docs/LAUNCH_READINESS.md` — release and QA notes
- `docs/LEARNINGS.md` — final messaging and structure learnings
- `docs/PRESENTATION_PLAYBOOK.md` — reusable playbook for future AI agent talks

## New Computer Quick Start

```bash
git clone https://github.com/sunyuzheng/stop-chatting-start-scaling.git
cd stop-chatting-start-scaling
```

Run the deck:

```bash
python3 -m http.server 8765
```

Open `http://127.0.0.1:8765/deck/index.html`.

Run the live demo starter:

```bash
cd oversized-shipping-demo/starter
npm test
python3 -m http.server 9001
```

Open `http://127.0.0.1:9001`.

`npm test` is an optional baseline check. It runs a tiny Node script that confirms the starter repo still contains the old duplicated `2-day delivery` policy before the agent changes it. If you do not have Node/npm installed, skip this step and continue by reading `docs/change-request.md`.

Run the solved demo in a second terminal:

```bash
cd oversized-shipping-demo/solved
npm test
python3 -m http.server 9002
```

Open `http://127.0.0.1:9002`.

For the full stage checklist, see [docs/DEMO_AND_DEPLOY.md](docs/DEMO_AND_DEPLOY.md).

## Run Locally With FastAPI

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

- Presentation production: `https://deck-pi-three.vercel.app`
- Demo preview: `https://skill-deploy-chek4qx7xg-codex-agent-deploys.vercel.app`

## Demo

The talk includes a local demo repo:

- `oversized-shipping-demo/starter/` — the starting point used live
- `oversized-shipping-demo/solved/` — the answer key and deployable version
- `oversized-shipping-demo/DEMO_SCRIPT.md` — concise speaking script
- `oversized-shipping-demo/WALKTHROUGH.md` — step-by-step operator guide

## Framing

This version focuses on the operating model behind reliable AI agent work:

- calibration before automation
- context over clever prompting
- evaluation and diagnosis over vibe-based review
- agentic loops over step-by-step babysitting
- memory and standards over isolated chat sessions
- capability expansion, not just speed
