"use client";

import Script from "next/script";

/**
 * @file: FAQBreadcrumbs.tsx
 * @responsibility: Breadcrumbs structured data for FAQ section
 * @exports: FAQBreadcrumbs
 * @imports: Script (next)
 * @layer: components
 */

const FAQBreadcrumbs = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": typeof window !== 'undefined' ? window.location.origin : ''
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Perguntas Frequentes",
        "item": typeof window !== 'undefined' ? `${window.location.origin}#faq` : ''
      }
    ]
  };

  return (
    <Script
      id="faq-breadcrumbs"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema)
      }}
    />
  );
};

export default FAQBreadcrumbs;