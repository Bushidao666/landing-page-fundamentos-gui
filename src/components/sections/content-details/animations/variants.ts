/**
 * @file: variants.ts
 * @responsibility: animation variants for content details
 * @exports: containerVariants, itemVariants, accordionVariants
 * @imports: none
 * @layer: animations
 */

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

export const itemVariants = {
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

export const accordionVariants = {
  hidden: { x: -30, y: 20, opacity: 0, rotateY: -5 },
  visible: (index: number) => ({
    x: 0,
    y: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const floatingVariants = {
  animate: {
    y: [-15, -60, -15],
    x: [-10, 10, -10],
    opacity: [0.1, 0.5, 0.1],
    scale: [0.6, 1.1, 0.6],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const shimmerVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  },
};