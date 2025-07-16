"use client";

import Script from "next/script";
import type { FAQItem } from "@/lib/faq-data";

/**
 * @file: FAQSchema.tsx
 * @responsibility: Generate structured data for FAQ page SEO
 * @exports: FAQSchema
 * @imports: Script (next), FAQItem
 * @layer: components
 */

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  // Clean text by removing HTML tags and markdown
  const cleanText = (text: string) => {
    return text
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
      .replace(/\*(.*?)\*/g, '$1') // Remove italic markdown
      .trim();
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Perguntas Frequentes - Curso Fundamentos",
    "description": "Respostas para as principais dúvidas sobre o curso Fundamentos de Tráfego Pago",
    "url": typeof window !== 'undefined' ? window.location.href : '',
    "inLanguage": "pt-BR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Curso Fundamentos",
      "url": typeof window !== 'undefined' ? window.location.origin : ''
    },
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "name": cleanText(faq.question),
      "position": index + 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": cleanText(faq.answer),
        "author": {
          "@type": "Organization",
          "name": "Equipe Curso Fundamentos"
        }
      }
    }))
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  );
}