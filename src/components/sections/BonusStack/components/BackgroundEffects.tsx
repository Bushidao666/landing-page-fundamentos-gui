/**
 * @file: BackgroundEffects.tsx
 * @responsibility: optimized background animations and particles
 * @exports: BackgroundEffects
 * @imports: framer-motion, lucide-react
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface BackgroundEffectsProps {
  reducedMotion?: boolean;
}

export default function BackgroundEffects({ reducedMotion = false }: BackgroundEffectsProps) {
  // Otimização: reduzir partículas em mobile/reduced motion
  const particleCount = reducedMotion ? 4 : 8;  // Reduzido de 15 para 8
  const starCount = reducedMotion ? 2 : 3;      // Reduzido de 6 para 3

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Camadas Base - Gradientes Premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100" />
      
      {/* Overlay de Transição */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/5 to-[#0A192F]/15" />
      
      {/* Grid Pattern Sutil - Otimizado */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      {/* Nebulosa Premium - Performance Optimized */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/3 w-96 h-64 md:w-[600px] md:h-[400px] bg-gradient-to-l from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-48 md:w-[500px] md:h-[300px] bg-gradient-to-r from-slate-400/10 via-slate-500/5 to-transparent rounded-full blur-2xl" />
      </div>
      
      {/* Partículas Explosivas - OTIMIZADAS */}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -60, -20],
            x: [-15, 15, -15],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: 6 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/60" />
        </motion.div>
      ))}

      {/* Estrelas Especiais - REDUZIDAS E OTIMIZADAS */}
      {[...Array(starCount)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        >
          <Star className="w-2 h-2 md:w-3 md:h-3 text-[#D4AF37] fill-[#D4AF37]" />
        </motion.div>
      ))}
    </div>
  );
} 