import {
  getCheckoutMessage,
  getHelpCenterSummary,
  getOrderConfirmationMessage,
  getPrimeExceptionMessage,
  getRemoteStatesMessage,
  shippingPolicy
} from "../assets/shipping-policy.js";

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label}\nExpected: ${expected}\nActual:   ${actual}`);
  }
}

assertEqual(shippingPolicy.oversizedDefaultWindow, "3-5 business days", "Default oversized window should be updated.");
assertEqual(shippingPolicy.primeMetroWindow, "2-day delivery", "Prime metro exception should preserve 2-day service.");
assertEqual(shippingPolicy.primeMetroCount, 20, "Prime metro count should be 20.");
assertEqual(shippingPolicy.remoteStatesWindow, "5-7 business days", "Remote state window should exist.");

assertEqual(
  getCheckoutMessage(),
  "Oversized items arrive in 3-5 business days.",
  "Checkout message should come from shared policy."
);

assertEqual(
  getOrderConfirmationMessage(),
  "Your oversized order will arrive in 3-5 business days, unless it qualifies for the Prime metro exception.",
  "Order confirmation message should come from shared policy."
);

assertEqual(
  getPrimeExceptionMessage(),
  "Prime members in the top 20 metro areas still receive 2-day delivery on oversized items.",
  "Prime exception message should come from shared policy."
);

assertEqual(
  getHelpCenterSummary(),
  "Oversized items ship in 3-5 business days. Prime members in the top 20 metro areas still receive 2-day delivery on oversized items.",
  "Help center summary should stay aligned."
);

assertEqual(
  getRemoteStatesMessage(),
  "Alaska and Hawaii oversized orders may take 5-7 business days.",
  "Remote states message should stay aligned."
);

console.log("Solved policy checks passed.");
