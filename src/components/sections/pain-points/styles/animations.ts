/**
 * @file: animations.ts
 * @responsibility: Framer Motion animation variants
 * @exports: containerVariants, itemVariants, cascadeVariants, hoverVariants
 * @imports: none
 * @layer: styles
 */

import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const cascadeVariants: Variants = {
  hidden: { x: -60, y: 30, opacity: 0, rotateY: -10 },
  visible: (index: number) => ({
    x: 0,
    y: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.9,
      delay: index * 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const hoverVariants = {
  card: {
    rest: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.02,
      rotateY: 1,
      transition: { duration: 0.4 }
    }
  },
  
  icon: {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 10,
      transition: { duration: 0.3 }
    }
  },
  
  badge: {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -2,
      transition: { duration: 0.2 }
    }
  },
  
  connector: {
    rest: { scale: 1 },
    hover: { 
      scale: 1.3,
      transition: { duration: 0.3 }
    }
  }
} as const;

export const statisticsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const transformationVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const floatingVariants = {
  animate: {
    y: [-15, -60, -15],
    x: [-8, 8, -8],
    opacity: [0.1, 0.5, 0.1],
    scale: [0.8, 1.1, 0.8],
  },
  
  transition: {
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut",
    repeatDelay: 0
  }
} as const;