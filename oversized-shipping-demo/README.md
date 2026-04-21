# Oversized Shipping Demo

This repo is a live demo for the talk:

**Stop Chatting, Start Scaling: How AI Agents Transform Work**

Parent GitHub repo: <https://github.com/sunyuzheng/stop-chatting-start-scaling>

It is designed to show the difference between:

- `chat` as an advice layer
- `agent` as an execution system
- `compounding` as the result of context, tests, and reusable assets

## Structure

- `starter/` — the live demo starting point
- `solved/` — the answer key and the deployable version
- `DEMO_SCRIPT.md` — concise stage script
- `WALKTHROUGH.md` — detailed operator guide

## Fresh Computer Quick Start

```bash
git clone https://github.com/sunyuzheng/stop-chatting-start-scaling.git
cd stop-chatting-start-scaling/oversized-shipping-demo
```

Run the starter:

```bash
cd starter
npm test
python3 -m http.server 9001
```

Open `http://127.0.0.1:9001`.

Run the solved version in a second terminal:

```bash
cd solved
npm test
python3 -m http.server 9002
```

Open `http://127.0.0.1:9002`.

## Scenario

The business has a shipping policy change:

- oversized items should change from `2-day delivery` to `3-5 day delivery`
- Prime members in the top 20 metro areas should still get `2-day delivery`
- all customer-facing surfaces must stay consistent
- the repo should stop relying on scattered hardcoded copy

This task is ideal for the talk because it requires:

- reading multiple files
- changing implementation and copy together
- adding checks
- leaving reusable assets behind

## How to Use It On Stage

### 1. Start from `starter/`

Show that the current site works, but the policy is duplicated across multiple files.

Relevant files:

- `index.html`
- `checkout.html`
- `order-confirmation.html`
- `help-center.html`
- `docs/shipping-policy.md`
- `docs/change-request.md`

### 2. Explain what chat would do

Give the same request to a chat product. It can suggest:

- where to make changes
- sample code
- rough wording

But it cannot:

- inspect the repo directly
- apply the edits
- run the checks
- leave a working system behind

### 3. Run the same request in Cursor / agent mode

Ask the agent to:

- implement the policy change
- centralize the policy logic
- update all customer-facing surfaces
- add or update tests
- run the tests and fix failures

### 4. Make the compounding point

After the first change lands, give a second request:

See `starter/docs/follow-up-request.md`

That is the moment to explain that the second change is cheaper because the first run created:

- a policy module
- a shared copy system
- tests
- a cleaner shape for future changes

## Commands

### Starter

```bash
cd starter
npm test
python3 -m http.server 9001
```

### Solved

```bash
cd solved
npm test
python3 -m http.server 9002
```

## Deploy

Both folders are static sites with `vercel.json`.

```bash
cd starter
vercel --yes --prod
```

```bash
cd solved
vercel --yes --prod
```

## What To Say

- `Chat gives you an answer.`
- `Agents work inside the environment.`
- `Chat resets every time.`
- `Agents can leave assets behind.`
- `That is why agents can capture compounding value.`
