"use client";

import Script from "next/script";

/**
 * Carrega o script do Hotmart Checkout Elements uma única vez
 * em afterInteractive. Pode ser usado no topo da página de upsell.
 */
export default function HotmartScript() {
  return (
    <Script
      id="hotmart-checkout-elements"
      src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
      strategy="afterInteractive"
    />
  );
}


