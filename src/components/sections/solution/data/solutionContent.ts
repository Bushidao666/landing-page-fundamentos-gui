/**
 * @file: solutionContent.ts
 * @responsibility: Content data for Solution Section
 * @exports: solutionContent
 * @imports: none
 * @layer: data
 */

export const solutionContent = {
  // Product Mockup
  product: {
    imageSrc: "/images/Mockups/mockup box curso.png",
    imageAlt: "Kit de Inteligência Google Ads - Fundamentos para E-commerce",
    badgeText: "Acesso Vitalício"
  },

  // Solution Badge
  badge: {
    text: "A Solução Inteligente"
  },

  // Headline
  headline: {
    preTitle: "Apresentando: O",
    mainTitle: "Fundamentos do Google Ads",
    subTitle: "para E-commerce"
  },

  // Positioning Text
  positioning: {
    text: "Não é mais um &quot;cursinho&quot; genérico. É um",
    highlight: "Kit de Inteligência Estratégica",
    continuation: "que te dá exatamente o que você precisa: controle total sobre suas campanhas e a capacidade de transformar cada clique em",
    emphasis: "lucro real"
  },

  // Comparison Card
  comparison: {
    title: "A diferença crucial:",
    items: [
      {
        type: "traditional" as const,
        label: "Cursos tradicionais",
        description: "Teoria sem fim, sem aplicação prática"
      },
      {
        type: "intelligent" as const,
        label: "Kit de Inteligência",
        description: "Sistema step-by-step para resultados imediatos"
      }
    ]
  },

  // CTA Button
  cta: {
    desktopText: "Quero Começar a Anunciar com Inteligência por",
    mobileText: "Começar Agora por",
    price: "R$ 47"
  }
};