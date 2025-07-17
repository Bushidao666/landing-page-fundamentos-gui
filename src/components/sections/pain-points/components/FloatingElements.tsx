/**
 * @file: FloatingElements.tsx
 * @responsibility: floating background particles
 * @exports: FloatingElements component
 * @imports: framer-motion, animation variants
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { floatingVariants } from "../styles/animations";

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

// Deterministic pseudo-random function
function deterministicRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function FloatingElements({ count = 12, className = "" }: FloatingElementsProps) {
  // Generate positions deterministically based on index
  const positions = useMemo(() => {
    return [...Array(count)].map((_, i) => ({
      left: `${deterministicRandom(i * 137) * 100}%`,
      top: `${deterministicRandom(i * 239) * 100}%`,
      duration: 3.5 + deterministicRandom(i * 353) * 2,
      delay: deterministicRandom(i * 457) * 3,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: pos.left,
            top: pos.top,
          }}
          animate={floatingVariants.animate}
          transition={{
            ...floatingVariants.transition,
            duration: pos.duration,
            delay: pos.delay,
          }}
        >
          <div className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50" />
        </motion.div>
      ))}
    </div>
  );
}