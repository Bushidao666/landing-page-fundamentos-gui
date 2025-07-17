/**
 * @file: animations.ts
 * @responsibility: Optimized animation utilities for PriceAnchoring section
 * @exports: Animation variants, helpers, and performance utilities
 * @layer: utils
 */

import { Variants } from "framer-motion";
import { ANIMATION } from "../data/constants";

// Check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Base animation config with reduced motion support
export const getAnimationConfig = (duration: number, delay = 0) => {
  const reducedMotion = prefersReducedMotion();
  return {
    duration: reducedMotion ? 0 : duration / 1000,
    delay: reducedMotion ? 0 : delay / 1000,
  };
};

// Fade in variants
export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0,
    transition: getAnimationConfig(0)
  },
  visible: (custom?: number) => ({
    opacity: 1,
    transition: {
      ...getAnimationConfig(ANIMATION.duration.normal, custom || 0),
      ease: ANIMATION.easing.smooth
    }
  })
};

// Slide up variants
export const slideUpVariants: Variants = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  visible: (custom?: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      ...getAnimationConfig(ANIMATION.duration.normal, custom || 0),
      ease: ANIMATION.easing.smooth
    }
  })
};

// Scale variants
export const scaleVariants: Variants = {
  hidden: { 
    scale: 0.9, 
    opacity: 0 
  },
  visible: (custom?: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      ...getAnimationConfig(ANIMATION.duration.normal, custom || 0),
      ease: ANIMATION.easing.bounce
    }
  })
};

// Stagger container variants
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion() ? 0 : ANIMATION.stagger.normal,
      delayChildren: prefersReducedMotion() ? 0 : 0.1,
    }
  }
};

// Price reveal animation
export const priceRevealVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: prefersReducedMotion() ? "blur(0px)" : "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      ...getAnimationConfig(ANIMATION.duration.fast),
      ease: ANIMATION.easing.expo,
      staggerChildren: prefersReducedMotion() ? 0 : ANIMATION.stagger.fast,
    }
  }
};

// Hover animation helper
export const createHoverAnimation = (scale = 1.05, duration = 200) => ({
  whileHover: prefersReducedMotion() ? {} : {
    scale,
    transition: { duration: duration / 1000 }
  },
  whileTap: prefersReducedMotion() ? {} : {
    scale: scale * 0.95
  }
});

// Performance optimization: Debounced animation trigger
export const createDebouncedAnimation = (callback: () => void, delay = 100) => {
  let timeoutId: NodeJS.Timeout;
  
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
};

// GPU-optimized transform properties
export const gpuOptimizedProps = {
  transform: 'translateZ(0)',
  willChange: 'transform',
  backfaceVisibility: 'hidden' as const,
  perspective: 1000
};

// Animation sequence builder
export const createAnimationSequence = (
  steps: Array<{ props: Record<string, unknown>; duration: number; delay?: number }>
) => {
  if (prefersReducedMotion()) {
    return { animate: steps[steps.length - 1].props };
  }
  
  return {
    animate: steps.map((step, index) => ({
      ...step.props,
      transition: {
        duration: step.duration / 1000,
        delay: (step.delay || 0) / 1000 + 
          steps.slice(0, index).reduce((acc, s) => acc + s.duration / 1000, 0)
      }
    }))
  };
};