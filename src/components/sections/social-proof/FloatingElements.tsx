"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createDeterministicRandom } from "@/utils/deterministic-random";

interface Particle {
  id: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
}

export const FloatingElements = React.memo(() => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Generate particles only on client side
    const generateParticles = () => {
      const isMobile = window.innerWidth < 640;
      const particleCount = isMobile ? 8 : 12;
      const random = createDeterministicRandom(999);
      
      return Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: `${random() * 100}%`,
        top: `${random() * 100}%`,
        delay: random() * 3,
        duration: 3 + random() * 2,
      }));
    };

    setParticles(generateParticles());

    // Handle window resize
    const handleResize = () => {
      setParticles(generateParticles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render particles until client-side hydration is complete
  if (!isClient || particles.length === 0) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

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