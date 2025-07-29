/**
 * @file: index.ts
 * @responsibility: Hero Section constants and configuration
 * @exports: HERO_BREAKPOINTS, HERO_TYPOGRAPHY, HERO_SPACING, HERO_COLORS, HERO_CONTENT
 * @layer: constants
 */

import { 
  HeroBreakpoints, 
  HeroTypography, 
  HeroSpacing, 
  HeroColors, 
  HeroContent 
} from "../types";

export const HERO_BREAKPOINTS: HeroBreakpoints = {
  xs: "375px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const HERO_TYPOGRAPHY: HeroTypography = {
  headline: {
    xs: "text-3xl",
    sm: "text-4xl",
    md: "text-5xl",
    lg: "text-6xl",
    xl: "text-7xl",
  },
  subheadline: {
    xs: "text-base",
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  },
  body: {
    xs: "text-sm",
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-xl",
  },
  caption: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-base",
    xl: "text-base",
  },
};

export const HERO_SPACING: HeroSpacing = {
  section: {
    xs: "py-16",
    sm: "py-20",
    md: "py-24",
    lg: "py-28",
    xl: "py-32",
  },
  gap: {
    xs: "gap-4",
    sm: "gap-6",
    md: "gap-8",
    lg: "gap-10",
    xl: "gap-12",
  },
  component: {
    xs: "p-3",
    sm: "p-4",
    md: "p-5",
    lg: "p-6",
    xl: "p-8",
  },
};

export const HERO_COLORS: HeroColors = {
  primary: "#D4AF37",
  primaryGradient: "from-[#D4AF37] via-[#FFD700] to-[#FFA500]",
  background: {
    base: "from-[#0A192F] via-[#1a2444] to-[#0f1419]",
    overlay: "from-black/30 via-transparent to-black/50",
    accent: "from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent",
  },
  text: {
    primary: "text-white",
    secondary: "text-gray-200",
    accent: "text-[#D4AF37]",
  },
};

export const HERO_CONTENT: HeroContent = {
  headline: {
    prefix: "Seu E-commerce Desperdiça Dinheiro com um",
    highlight: "Sócio Sanguessuga",
    suffix: "Chamado Google Ads?",
  },
  metric: {
    icon: "Zap",
    text: "+R$ 2,3M desperdiçados por e-commerces brasileiros só este mês",
  },
  valueProp: {
    main: "Descubra como transformar cliques em",
    highlight1: "lucro real",
    highlight2: "controle absoluto",
  },
  usps: [
    { icon: "Award", text: "Sem Desperdício" },
    { icon: "Target", text: "ROI Garantido" },
    { icon: "TrendingUp", text: "Escala Inteligente" },
  ],
  cta: {
    text: "Vou Te Mostrar a Realidade",
    icon: "Target",
    trailingIcon: "TrendingUp",
    action: "scroll-to-pain-points",
  },
  trust: [
    { icon: "Shield", text: "Pagamento 100% Seguro" },
    { icon: "Clock", text: "Acesso Imediato e Vitalício" },
    { icon: "CheckCircle", text: "Garantia Blindada 7 Dias" },
  ],
};

export const HERO_ANIMATION_TIMING = {
  staggerChildren: 0.2,
  delayChildren: 0.3,
  itemDuration: 0.8,
  floatingDelay: 1.5,
  shimmerDuration: 3,
};