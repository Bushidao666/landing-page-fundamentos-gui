/**
 * @file: index.ts
 * @responsibility: Hero Section animation variants and utilities
 * @exports: heroAnimations, createShimmerAnimation, createFloatingAnimation
 * @layer: animations
 */

import { Variants } from "framer-motion";
import { HeroAnimationVariants } from "../types";
import { HERO_ANIMATION_TIMING } from "../constants";

export const heroAnimations: HeroAnimationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: HERO_ANIMATION_TIMING.staggerChildren,
        delayChildren: HERO_ANIMATION_TIMING.delayChildren,
      },
    },
  },
  item: {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: HERO_ANIMATION_TIMING.itemDuration,
        ease: "easeOut",
      },
    },
  },
  floating: {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: HERO_ANIMATION_TIMING.floatingDelay,
      },
    },
  },
  shimmer: {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  },
};

export const createShimmerAnimation = (duration: number = 3) => ({
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  },
  transition: {
    duration,
    repeat: Infinity,
    ease: "linear",
  },
});

export const createFloatingAnimation = (yOffset: number = 12) => ({
  animate: { y: [0, -yOffset, 0] },
  transition: { duration: 2.5, repeat: Infinity },
});

export const createPulseAnimation = () => ({
  animate: {
    opacity: [1, 0.3, 1],
    scale: [1, 0.95, 1],
  },
  transition: { duration: 2.5, repeat: Infinity },
});

export const createStaggeredEntrance = (staggerDelay: number = 0.1): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * staggerDelay,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
});

export const createHoverScale = (scale: number = 1.05) => ({
  whileHover: { scale, y: -2 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
});

export const createGlowEffect = () => ({
  initial: { filter: "drop-shadow(0 0 0 rgba(212, 175, 55, 0))" },
  animate: {
    filter: [
      "drop-shadow(0 0 0 rgba(212, 175, 55, 0))",
      "drop-shadow(0 0 20px rgba(212, 175, 55, 0.4))",
      "drop-shadow(0 0 0 rgba(212, 175, 55, 0))",
    ],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

export const createParallaxEffect = (offset: number = 100) => ({
  initial: { y: 0 },
  animate: { y: offset },
  transition: {
    type: "tween",
    ease: "linear",
    duration: 0,
  },
});