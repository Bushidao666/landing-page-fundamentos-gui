"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export const FloatingElements = React.memo(() => {
  const particles = useMemo(() => 
    Array.from({ length: typeof window !== 'undefined' && window.innerWidth < 640 ? 8 : 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [-10, -50, -10],
            x: [-8, 8, -8],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/60" />
        </motion.div>
      ))}
    </div>
  );
});

FloatingElements.displayName = "FloatingElements";