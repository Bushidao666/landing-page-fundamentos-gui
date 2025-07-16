/**
 * @file: FloatingElements.tsx
 * @responsibility: animated floating particles component
 * @exports: FloatingElements
 * @imports: MotionWrapper, FloatingElementsProps, floatingVariants
 * @layer: components
 */

"use client";

import { MotionWrapper } from "@/components/ui/motion-wrapper";
import type { FloatingElementsProps } from "../types";

export function FloatingElements({ count = 15, className = "" }: FloatingElementsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <MotionWrapper
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-15, -60, -15],
            x: [-10, 10, -10],
            opacity: [0.1, 0.5, 0.1],
            scale: [0.6, 1.1, 0.6],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/60" />
        </MotionWrapper>
      ))}
    </div>
  );
}