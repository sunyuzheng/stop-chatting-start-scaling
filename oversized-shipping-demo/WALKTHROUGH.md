# Walkthrough Guide

This guide is the operational version of the demo.

Use it when you want to:

- rehearse the live demo
- hand the repo to a teammate
- explain clearly what the audience is supposed to notice

## What The Demo Is Proving

This demo is not about whether AI can write some HTML or JavaScript.

It is proving three specific claims:

1. Chat gives advice, but agents can work inside an environment.
2. The first useful agent run should leave reusable assets behind.
3. The second request is where compounding becomes visible.

## Repo Layout

- `starter/` — the repo state you show before the agent does anything
- `solved/` — the version after the system has been cleaned up

## Demo Flow

### Step 1: Show The Starter State

Open:

- `starter/index.html`
- `starter/checkout.html`
- `starter/order-confirmation.html`
- `starter/help-center.html`
- `starter/docs/shipping-policy.md`

What to say:

- the same business rule appears in multiple files
- the copy is duplicated
- the policy has no shared source of truth
- every change will be more expensive than it should be

What the audience should notice:

- this is realistic
- this is not a toy “make me a landing page” task
- the pain is organizational, not only technical

### Step 2: Show The Request

Open:

- `starter/docs/change-request.md`

What to say:

- the task is not only to update words
- the task is to update the system safely
- the business also wants the next change to be cheaper

What the audience should notice:

- this needs context
- this needs execution
- this needs consistency
- this needs verification

### Step 3: Explain What Chat Would Do

Say:

- chat can suggest likely files
- chat can draft code
- chat can draft copy
- but chat does not inspect the repo, execute the changes, run the checks, and leave structure behind by itself

Keep this short. Do not actually spend much time in ChatGPT.

### Step 4: Run The Agent

Use Cursor / agent mode with a request like:

> Implement the policy change across the repo.  
> Update the oversized shipping promise to 3-5 business days.  
> Preserve the Prime exception for the top 20 metro areas.  
> Remove scattered hardcoded copy.  
> Create one shared policy source.  
> Update tests, run them, and fix failures.

What to say while it runs:

- it is reading the repo, not guessing from one prompt
- it is changing code and content together
- it is creating a reusable policy source
- it is testing its own work

### Step 5: Show What Changed

Open:

- `solved/assets/shipping-policy.js`
- `solved/tests/check-policy.mjs`
- `solved/checkout.html`
- `solved/order-confirmation.html`
- `solved/help-center.html`

What to say:

- the first run left assets behind
- one policy source
- aligned customer-facing copy
- tests that guard the next change

What the audience should notice:

- this is no longer a pile of edits
- the system shape improved

### Step 6: Show The Follow-up Request

Open:

- `starter/docs/follow-up-request.md`

What to say:

- now expand the Prime exception from top 20 to top 40
- now add Alaska and Hawaii as a slower-delivery exception

Then make the key point:

- if the first run only patched files, the second run is expensive again
- if the first run created structure, the second run is cheap

This is the moment to say:

> Chat resets.  
> Agents can compound.

## Commands

### Starter

```bash
cd oversized-shipping-demo/starter
npm test
python3 -m http.server 9001
```

### Solved

```bash
cd oversized-shipping-demo/solved
npm test
python3 -m http.server 9002
```

## Live URL

The solved demo is deployed separately so you can show the final result without relying on local execution.

## Common Mistakes

- spending too much time in chat mode
- describing the code instead of explaining the system change
- skipping the second request
- talking about speed instead of compounding
- treating the first successful run as the main proof

## One-Sentence Summary

This demo works because it shows that the value of agents is not that they answer better in one moment, but that they leave behind a better system for the next moment.
