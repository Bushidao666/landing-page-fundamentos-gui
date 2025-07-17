/**
 * @file: FloatingElements.tsx
 * @responsibility: Animated floating particles for visual enhancement
 * @exports: FloatingElements
 * @imports: motion (from framer-motion), createDeterministicRandom (from utils)
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { createDeterministicRandom } from "@/utils/deterministic-random";

interface FloatingElementsProps {
  particleCount?: number;
  className?: string;
}

export default function FloatingElements({ 
  particleCount = 8,
  className = "" 
}: FloatingElementsProps) {
  // Create a unique random generator for this component instance
  const random = createDeterministicRandom(42);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(particleCount)].map((_, i) => {
        // Generate deterministic random values for each particle
        const left = random() * 100;
        const top = random() * 100;
        const duration = 3 + random() * 1.5;
        const delay = random() * 2;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [-10, -40, -10],
              x: [-8, 8, -8],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/60" />
          </motion.div>
        );
      })}
    </div>
  );
}