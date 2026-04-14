import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

const files = {
  checkout: readFileSync(resolve(root, "checkout.html"), "utf8"),
  confirmation: readFileSync(resolve(root, "order-confirmation.html"), "utf8"),
  help: readFileSync(resolve(root, "help-center.html"), "utf8"),
  policy: readFileSync(resolve(root, "docs/shipping-policy.md"), "utf8")
};

function assertIncludes(name, text, expected) {
  if (!text.includes(expected)) {
    throw new Error(`${name} is missing: ${expected}`);
  }
}

assertIncludes("checkout", files.checkout, "Oversized items arrive in 2 business days.");
assertIncludes("order confirmation", files.confirmation, "2-day delivery");
assertIncludes("help center", files.help, "2-day delivery promise");
assertIncludes("policy doc", files.policy, "2-day delivery promise");

console.log("Starter policy checks passed.");
