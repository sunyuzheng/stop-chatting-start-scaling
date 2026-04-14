# Demo Script

## Goal

Use one concrete workflow to show:

1. chat gives advice
2. agents work inside an environment
3. compounding appears only when the first run leaves reusable assets behind

## Assets

- Starter repo: [starter](./starter)
- Solved repo: [solved](./solved)
- Live solved site: https://skill-deploy-chek4qx7xg-codex-agent-deploys.vercel.app

## Timing

Target length: 5 to 7 minutes

## Minute 0 to 1

Open the starter repo and say:

> This is a deliberately small system.  
> One policy shows up in checkout, order confirmation, the help center, and the internal policy doc.  
> The business asks for a policy change. The question is not whether AI can write text. The question is whether AI can change the system.

Show:

- `starter/checkout.html`
- `starter/order-confirmation.html`
- `starter/help-center.html`
- `starter/docs/shipping-policy.md`

Point out:

- same policy, multiple files
- copy is duplicated
- there is no obvious shared source of truth

## Minute 1 to 2

Show `starter/docs/change-request.md` and say:

> This is the task.  
> Change the default oversized shipping promise.  
> Preserve the Prime exception.  
> Update every customer-facing surface.  
> Remove hardcoded drift.  
> Add checks.

Then say:

> A chat product can help me think about this.  
> It can suggest edit locations, sample code, and wording.  
> But it stops at the advice layer.

## Minute 2 to 4

Run the same request in Cursor / agent mode.

What to ask:

> Implement the policy change across the repo.  
> Update the oversized shipping promise to 3-5 business days.  
> Preserve the Prime exception for the top 20 metro areas.  
> Remove scattered hardcoded copy.  
> Create one shared policy source.  
> Update tests, run them, and fix failures.

While the agent works, narrate:

> Notice the difference.  
> It is reading the repo, finding the duplicated policy, creating a shared module, updating the surfaces, running tests, and repairing if needed.  
> This is not a better answer. It is a different work method.

## Minute 4 to 5

Open the solved version or the deployed site.

Use:

- `solved/assets/shipping-policy.js`
- `solved/tests/check-policy.mjs`
- `https://skill-deploy-chek4qx7xg-codex-agent-deploys.vercel.app`

Say:

> The first run left assets behind.  
> One policy source.  
> Shared copy generation.  
> Tests.  
> That means the next change is no longer a fresh problem.

## Minute 5 to 6

Show `starter/docs/follow-up-request.md` and say:

> This is the real test.  
> Expand the Prime exception from top 20 to top 40.  
> Add Alaska and Hawaii as a remote-state exception.  
> If the first run only patched files, the second change is expensive again.  
> If the first run created structure, the second change is cheap.

Then land the message:

> Chat resets.  
> Agents can compound.

## Close

Use one of these endings:

> Chat helps with tasks. Agents change the operating model.

or

> The point of agents is not autonomy theater.  
> The point is that good work leaves behind a better system.

## One-line transitions for the deck

- `This is where chat stalls.`
- `This is where agents start to matter.`
- `The second request is the real demo.`
- `That is what compounding looks like.`
