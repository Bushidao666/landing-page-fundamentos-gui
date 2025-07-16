/**
 * @file: FloatingElements.tsx
 * @responsibility: floating background particles
 * @exports: FloatingElements component
 * @imports: framer-motion, animation variants
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { floatingVariants } from "../styles/animations";

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export function FloatingElements({ count = 12, className = "" }: FloatingElementsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={floatingVariants.animate}
          transition={{
            ...floatingVariants.transition,
            duration: 3.5 + Math.random() * 2,
            delay: Math.random() * 3,
          }}
        >
          <div className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50" />
        </motion.div>
      ))}
    </div>
  );
}