/**
 * @file: FloatingElements.tsx
 * @responsibility: animated floating particles component
 * @exports: FloatingElements
 * @imports: MotionWrapper, FloatingElementsProps, createDeterministicRandom
 * @layer: components
 */

"use client";

import { MotionWrapper } from "@/components/ui/motion-wrapper";
import type { FloatingElementsProps } from "../types";
import { createDeterministicRandom } from "@/utils/deterministic-random";

export function FloatingElements({ count = 15, className = "" }: FloatingElementsProps) {
  // Create a unique random generator for this component instance
  const random = createDeterministicRandom(123);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => {
        // Generate deterministic random values for each particle
        const left = random() * 100;
        const top = random() * 100;
        const duration = 4 + random() * 2;
        const delay = random() * 3;
        
        return (
          <MotionWrapper
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [-15, -60, -15],
              x: [-10, 10, -10],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.6, 1.1, 0.6],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            <div className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/60" />
          </MotionWrapper>
        );
      })}
    </div>
  );
}