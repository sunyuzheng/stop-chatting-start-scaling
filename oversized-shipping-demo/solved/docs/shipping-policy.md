# Oversized Shipping Policy

## Current Policy

- Oversized items ship in `3-5 business days`.
- Prime members in the top `20` metro areas still receive `2-day delivery` for oversized items.
- Alaska and Hawaii oversized orders may take `5-7 business days`.

## Implementation Notes

- Customer-facing copy is generated from one shared policy source.
- The policy source lives in `assets/shipping-policy.js`.
- The test suite validates the policy values and the generated customer-facing copy.

## Why This Matters

The first change is never the full story.

Once policy logic, copy, and tests are centralized, the next change becomes:

- cheaper
- safer
- easier to verify
