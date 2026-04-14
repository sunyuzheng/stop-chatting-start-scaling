export const shippingPolicy = {
  oversizedDefaultWindow: "3-5 business days",
  primeMetroWindow: "2-day delivery",
  primeMetroCount: 20,
  remoteStatesWindow: "5-7 business days",
  remoteStates: ["Alaska", "Hawaii"]
};

export function getCheckoutMessage() {
  return `Oversized items arrive in ${shippingPolicy.oversizedDefaultWindow}.`;
}

export function getPrimeExceptionMessage() {
  return `Prime members in the top ${shippingPolicy.primeMetroCount} metro areas still receive ${shippingPolicy.primeMetroWindow} on oversized items.`;
}

export function getOrderConfirmationMessage() {
  return `Your oversized order will arrive in ${shippingPolicy.oversizedDefaultWindow}, unless it qualifies for the Prime metro exception.`;
}

export function getHelpCenterSummary() {
  return `Oversized items ship in ${shippingPolicy.oversizedDefaultWindow}. Prime members in the top ${shippingPolicy.primeMetroCount} metro areas still receive ${shippingPolicy.primeMetroWindow} on oversized items.`;
}

export function getRemoteStatesMessage() {
  return `${shippingPolicy.remoteStates.join(" and ")} oversized orders may take ${shippingPolicy.remoteStatesWindow}.`;
}
