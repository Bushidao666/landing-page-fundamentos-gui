/**
 * @file: FloatingElements.tsx
 * @responsibility: Animated floating particles for visual enhancement
 * @exports: FloatingElements
 * @imports: motion (from framer-motion)
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";

interface FloatingElementsProps {
  particleCount?: number;
  className?: string;
}

export default function FloatingElements({ 
  particleCount = 8,
  className = "" 
}: FloatingElementsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, -40, -10],
            x: [-8, 8, -8],
            opacity: [0.1, 0.5, 0.1],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 1.5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/60" />
        </motion.div>
      ))}
    </div>
  );
}