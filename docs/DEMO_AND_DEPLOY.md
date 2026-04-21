# Demo And Deploy Guide

This is the operational guide for using the deck and demo from a fresh computer.

Short link for the talk: <https://go.ai-builders.com/amazon>

GitHub repo: <https://github.com/sunyuzheng/stop-chatting-start-scaling>

Production deck: <https://deck-pi-three.vercel.app>

## 1. Fresh Computer Setup

Install prerequisites:

- Git
- Node.js and npm
- Python 3
- Vercel CLI, only if you need to deploy

Clone the repo:

```bash
git clone https://github.com/sunyuzheng/stop-chatting-start-scaling.git
cd stop-chatting-start-scaling
```

If the repo is already on the computer:

```bash
cd stop-chatting-start-scaling
git pull
```

## 2. Run The Deck

The deck is a static Reveal.js page. The simplest local run path is:

```bash
python3 -m http.server 8765
```

Open:

```text
http://127.0.0.1:8765/deck/index.html
```

Use speaker notes from the browser by pressing `s` in Reveal.js.

Optional FastAPI path:

```bash
pip install -r requirements.txt
uvicorn app:app --reload
```

Open:

```text
http://127.0.0.1:8000
```

## 3. Run The Demo Locally

Use two terminal windows if you want starter and solved versions available at the same time.

Starter:

```bash
cd oversized-shipping-demo/starter
npm test
python3 -m http.server 9001
```

Open:

```text
http://127.0.0.1:9001
```

Solved:

```bash
cd oversized-shipping-demo/solved
npm test
python3 -m http.server 9002
```

Open:

```text
http://127.0.0.1:9002
```

## 4. Stage Demo Flow

Use `oversized-shipping-demo/DEMO_SCRIPT.md` for the short talk track.

Use `oversized-shipping-demo/WALKTHROUGH.md` for the detailed operator flow.

## 4A. Audience Follow-Along Flow

Give participants this repo:

```text
https://go.ai-builders.com/amazon
```

Ask them to run:

```bash
git clone https://github.com/sunyuzheng/stop-chatting-start-scaling.git
cd stop-chatting-start-scaling/oversized-shipping-demo/starter
npm test
python3 -m http.server 9001
```

Explain `npm test` before asking people to run it:

- It is an optional baseline check, not a build step.
- It runs `tests/check-policy.mjs`.
- It confirms the starter repo still has the old duplicated `2-day delivery` policy.
- If someone does not have Node/npm installed, they can skip it and still follow along by reading `docs/change-request.md` and inspecting the HTML files.

If they already cloned the repo before the session:

```bash
cd stop-chatting-start-scaling
git pull
cd oversized-shipping-demo/starter
npm test
python3 -m http.server 9001
```

Open:

```text
http://127.0.0.1:9001
```

Ask them to read:

```text
docs/change-request.md
```

Then give them a few minutes to explore the ChatGPT version mentally or directly:

- Which files would you paste into ChatGPT?
- How would you ask it to find all duplicated policy copy?
- How would you verify checkout, order confirmation, help center, and docs all changed?
- How would you ask it to create one shared policy source?
- Which parts would still require you to copy, edit, run, and debug manually?

Then run the same request in Cursor / agent mode and compare the workflow.

The key files to open on stage:

- `oversized-shipping-demo/starter/checkout.html`
- `oversized-shipping-demo/starter/order-confirmation.html`
- `oversized-shipping-demo/starter/help-center.html`
- `oversized-shipping-demo/starter/docs/shipping-policy.md`
- `oversized-shipping-demo/starter/docs/change-request.md`
- `oversized-shipping-demo/starter/docs/follow-up-request.md`
- `oversized-shipping-demo/solved/assets/shipping-policy.js`
- `oversized-shipping-demo/solved/tests/check-policy.mjs`

The live agent prompt:

```text
Implement the policy change across the repo.
Update the oversized shipping promise to 3-5 business days.
Preserve the Prime exception for the top 20 metro areas.
Remove scattered hardcoded copy.
Create one shared policy source.
Update tests, run them, and fix failures.
```

The follow-up request:

```text
Expand the Prime metro exception from top 20 to top 40.
Add Alaska and Hawaii as a remote-state exception.
```

The message to land:

```text
Chat resets.
Agents can compound.
```

## 5. Deploy The Deck

The `deck/` directory is already linked to Vercel.

From the repo root:

```bash
cd deck
vercel --yes --prod
```

Current production alias:

```text
https://deck-pi-three.vercel.app
```

If the Vercel CLI is not installed:

```bash
npm install -g vercel
vercel login
```

## 6. Deploy The Demo

Both demo folders are static sites with `vercel.json`.

Deploy the starter:

```bash
cd oversized-shipping-demo/starter
vercel --yes --prod
```

Deploy the solved version:

```bash
cd oversized-shipping-demo/solved
vercel --yes --prod
```

For the talk, local demo is usually safer than relying on Wi-Fi. Keep the production deck URL ready as backup.

## 7. Pre-Talk Checklist

Run these from the repo root:

```bash
cd oversized-shipping-demo/starter && npm test
cd ../solved && npm test
```

Then start local servers:

```bash
python3 -m http.server 8765
```

In separate terminals:

```bash
cd oversized-shipping-demo/starter && python3 -m http.server 9001
cd oversized-shipping-demo/solved && python3 -m http.server 9002
```

Open and pin:

- Deck: `http://127.0.0.1:8765/deck/index.html`
- Starter: `http://127.0.0.1:9001`
- Solved: `http://127.0.0.1:9002`
- Demo repo short link: `https://go.ai-builders.com/amazon`
- GitHub repo: `https://github.com/sunyuzheng/stop-chatting-start-scaling`
