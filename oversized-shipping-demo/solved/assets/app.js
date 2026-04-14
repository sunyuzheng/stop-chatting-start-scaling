import {
  getCheckoutMessage,
  getHelpCenterSummary,
  getOrderConfirmationMessage,
  getPrimeExceptionMessage,
  getRemoteStatesMessage,
  shippingPolicy
} from "./shipping-policy.js";

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = value;
  }
}

setText("checkout-default", getCheckoutMessage());
setText("checkout-prime", getPrimeExceptionMessage());
setText("confirmation-default", getOrderConfirmationMessage());
setText("confirmation-prime", getPrimeExceptionMessage());
setText("help-summary", getHelpCenterSummary());
setText("help-prime", getPrimeExceptionMessage());
setText("help-remote", getRemoteStatesMessage());
setText(
  "overview-summary",
  `The system now runs on one shared policy source. Oversized default: ${shippingPolicy.oversizedDefaultWindow}. Prime metro exception: ${shippingPolicy.primeMetroWindow}.`
);
