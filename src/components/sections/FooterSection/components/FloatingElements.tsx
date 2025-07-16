/**
 * @file: FloatingElements.tsx
 * @responsibility: animated floating particles background
 * @exports: FloatingElements
 * @imports: motion from framer-motion, useReducedMotion hook
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const PARTICLE_COUNT = 12; // Reduced from 20 for better performance

interface Particle {
  id: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
}

export function FloatingElements() {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Generate particles only on client side to avoid hydration mismatch
    const generateParticles = () => {
      return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 10 + Math.random() * 5,
        delay: Math.random() * 5,
      }));
    };

    setParticles(generateParticles());
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  // Don't render particles until client-side hydration is complete
  if (!isClient || particles.length === 0) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-20"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [-20, -60, -20],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}