/**
 * @file: animationsV2.ts
 * @responsibility: Animações otimizadas para Social Proof Section com Swiper.js
 * @exports: containerVariants, itemVariants, optimizedTransitions
 * @imports: framer-motion variants
 * @layer: components/animations
 */

import { Variants } from "framer-motion";

/**
 * Container animations - Otimizadas para performance
 */
export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Cubic bezier otimizado
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Item animations - Para elementos individuais
 */
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Hover animations para elementos interativos
 */
export const hoverVariants: Variants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};

/**
 * Fade animations para transições suaves
 */
export const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

/**
 * Scale animations para elementos que aparecem
 */
export const scaleVariants: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Slide animations para elementos laterais
 */
export const slideVariants: Variants = {
  hiddenLeft: {
    x: -50,
    opacity: 0,
  },
  hiddenRight: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Transições otimizadas para diferentes dispositivos
 */
export const optimizedTransitions = {
  // Mobile - animações mais rápidas
  mobile: {
    duration: 0.3,
    ease: "easeOut",
  },
  // Desktop - animações mais suaves
  desktop: {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  },
  // Reduced motion - animações mínimas
  reducedMotion: {
    duration: 0.1,
    ease: "linear",
  },
};

/**
 * Spring configurations para animações físicas
 */
export const springConfigs = {
  gentle: {
    type: "spring" as const,
    stiffness: 120,
    damping: 14,
    mass: 1,
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
    mass: 0.8,
  },
  stiff: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
    mass: 0.6,
  },
};

/**
 * Utility para detectar preferência de movimento reduzido
 */
export const getAnimationPreference = () => {
  if (typeof window === "undefined") return "normal";
  
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "reduced"
    : "normal";
};

/**
 * Hook para aplicar animações responsivas
 */
export const getResponsiveVariants = (
  baseVariants: Variants,
  isMobile: boolean,
  prefersReducedMotion: boolean
): Variants => {
  if (prefersReducedMotion) {
    // Remover ou minimizar animações
    return Object.fromEntries(
      Object.entries(baseVariants).map(([key, value]) => [
        key,
        {
          ...value,
          transition: optimizedTransitions.reducedMotion,
        },
      ])
    );
  }

  if (isMobile) {
    // Otimizar para mobile
    return Object.fromEntries(
      Object.entries(baseVariants).map(([key, value]) => [
        key,
        {
          ...value,
          transition: {
            ...value.transition,
            ...optimizedTransitions.mobile,
          },
        },
      ])
    );
  }

  // Desktop normal
  return baseVariants;
};

/**
 * Configurações de animação para diferentes contextos
 */
export const animationConfigs = {
  // Para seção principal
  section: {
    initial: "hidden",
    animate: "visible",
    variants: containerVariants,
  },
  // Para cards de depoimento
  testimonialCard: {
    initial: "hidden",
    animate: "visible",
    whileHover: "hover",
    whileTap: "tap",
    variants: itemVariants,
  },
  // Para elementos flutuantes
  floatingElement: {
    initial: "hidden",
    animate: "visible",
    variants: fadeVariants,
  },
  // Para botões e controles
  button: {
    initial: "initial",
    whileHover: "hover",
    whileTap: "tap",
    variants: hoverVariants,
  },
};