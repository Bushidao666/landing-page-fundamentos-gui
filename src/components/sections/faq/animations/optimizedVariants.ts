import { Variants } from "framer-motion";

/**
 * @file: optimizedVariants.ts
 * @responsibility: Optimized animation variants for FAQ section
 * @exports: Various animation configurations
 * @layer: animations
 */

// Reduced motion variants for accessibility
const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

// GPU-accelerated transforms only
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 10,
    transition: { duration: 0.2 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Optimized FAQ item animations
export const faqItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.98,
    y: 10
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  hover: {
    scale: 1.01,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

// Optimized expand/collapse animation
export const answerVariants: Variants = {
  collapsed: { 
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.2 }
    }
  },
  expanded: { 
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.2, delay: 0.1 }
    }
  }
};

// Badge rotation with GPU acceleration
export const badgeRotationVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Search appearance animation
export const searchVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: -10,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Utility function to check for reduced motion preference
export const shouldReduceMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Get appropriate variants based on motion preference
export const getMotionVariants = (variants: Variants): Variants => {
  return shouldReduceMotion() ? reducedMotionVariants : variants;
};

// Animation config for performance
export const animationConfig = {
  // Use transform instead of x/y for better performance
  transformTemplate: ({ x, y, scale }: any) => 
    `translate3d(${x}, ${y}, 0) scale(${scale})`,
  
  // Reduce layout thrashing
  layoutDependency: false,
  
  // Enable hardware acceleration
  style: {
    willChange: "transform, opacity"
  }
};