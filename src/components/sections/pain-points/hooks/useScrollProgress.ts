/**
 * @file: useScrollProgress.ts
 * @responsibility: scroll progress tracking
 * @exports: useScrollProgress hook
 * @imports: framer-motion
 * @layer: hooks
 */

import { useMotionValue, useTransform } from "framer-motion";

export function useScrollProgress() {
  const scrollY = useMotionValue(0);
  
  // Background darkness based on scroll
  const backgroundDarkness = useTransform(scrollY, [0, 1000], [0, 0.7]);
  
  // Background gradient transition
  const backgroundGradient = useTransform(
    scrollY, 
    [0, 1000], 
    [
      "linear-gradient(to bottom, #ffffff, #f8fafc)",
      "linear-gradient(to bottom, #0f172a, #1e293b)"
    ]
  );
  
  // Grid opacity
  const gridOpacity = useTransform(scrollY, [0, 600], [0, 0.1]);
  
  // Base gradient opacity
  const baseGradientOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return {
    scrollY,
    backgroundDarkness,
    backgroundGradient,
    gridOpacity,
    baseGradientOpacity
  };
}