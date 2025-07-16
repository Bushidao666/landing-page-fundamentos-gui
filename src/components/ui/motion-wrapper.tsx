"use client";

import { motion, MotionProps } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ReactNode } from "react";

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  reduceMotion?: boolean;
}

export function MotionWrapper({ 
  children, 
  reduceMotion = true,
  initial,
  animate,
  whileHover,
  whileTap,
  transition,
  ...props 
}: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // If user prefers reduced motion and we should respect it
  if (prefersReducedMotion && reduceMotion) {
    // Return a simple div with no animations
    return <div {...props}>{children}</div>;
  }
  
  // Otherwise, return the full motion component
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}