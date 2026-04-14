# Change Request

Update the oversized shipping policy across the system.

## New Requirements

- Oversized items should promise `3-5 business day delivery`.
- Prime members in the top 20 metro areas should still get `2-day delivery`.
- Update all customer-facing surfaces:
  - checkout
  - order confirmation email preview
  - help center
- Remove scattered hardcoded policy copy.
- Introduce a shared policy source so the next change is cheaper.
- Update the tests and run them.

## What Good Looks Like

- one obvious place to change policy rules
- consistent customer-facing copy
- tests that fail if surfaces drift again
