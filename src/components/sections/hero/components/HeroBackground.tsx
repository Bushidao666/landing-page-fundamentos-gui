/**
 * @file: HeroBackground.tsx
 * @responsibility: Hero Section background layers and effects
 * @exports: HeroBackground
 * @imports: HERO_COLORS (from constants)
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { HERO_COLORS } from "../constants";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Layer 1: Base Gradient - Tech Premium */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${HERO_COLORS.background.base}`}
        aria-hidden="true"
      />
      
      {/* Layer 2: Digital Velvet Texture - Optimized */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${HERO_COLORS.background.accent}`} 
        />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>
      
      {/* Layer 3: Subtle Grid Pattern - Performance Optimized */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(to right, ${HERO_COLORS.primary} 1px, transparent 1px), linear-gradient(to bottom, ${HERO_COLORS.primary} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          willChange: 'auto'
        }}
      />
      
      {/* Layer 4: Premium Nebula - Simplified for Performance */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className={`absolute top-1/4 left-1/3 w-[30vw] max-w-[500px] h-[40vh] max-h-[300px] bg-gradient-to-r ${HERO_COLORS.background.accent} rounded-full blur-3xl`}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-[25vw] max-w-[400px] h-[30vh] max-h-[250px] bg-gradient-to-l from-slate-400/10 via-slate-500/5 to-transparent rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      {/* Layer 5: Depth Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${HERO_COLORS.background.overlay} pointer-events-none`}
        aria-hidden="true"
      />
      
      {/* Performance Enhancement: CSS Containment */}
      <style jsx>{`
        div {
          contain: layout style paint;
        }
        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}