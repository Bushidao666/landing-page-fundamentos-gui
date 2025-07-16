/**
 * @file: BackgroundEffects.tsx
 * @responsibility: optimized background animations and particles with performance enhancements
 * @exports: BackgroundEffects
 * @imports: framer-motion, lucide-react, react hooks
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface BackgroundEffectsProps {
  reducedMotion?: boolean;
}

export default function BackgroundEffects({ reducedMotion = false }: BackgroundEffectsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detectar prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer para performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Lógica adaptativa para quantidade de partículas
  const shouldReduceMotion = reducedMotion || prefersReducedMotion;
  const getParticleCount = () => {
    if (shouldReduceMotion) return 2;
    if (isMobile) return 4;
    return 6; // Desktop com motion
  };
  
  const getStarCount = () => {
    if (shouldReduceMotion) return 1;
    if (isMobile) return 2;
    return 3; // Desktop com motion
  };

  const particleCount = getParticleCount();
  const starCount = getStarCount();

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ 
        willChange: isVisible ? 'transform' : 'auto',
        transform: 'translateZ(0)' // Force GPU layer
      }}
    >
      {/* Camadas Base - Gradientes Premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100" />
      
      {/* Overlay de Transição */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/5 to-[#0A192F]/15" />
      
      {/* Grid Pattern Sutil - Sempre visível */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      {/* Nebulosa Premium - Conditional Animation */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className={`absolute top-1/4 right-1/3 w-96 h-64 md:w-[600px] md:h-[400px] bg-gradient-to-l from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl ${
            !shouldReduceMotion && isVisible ? 'animate-pulse' : ''
          }`}
          style={{ willChange: 'opacity' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-80 h-48 md:w-[500px] md:h-[300px] bg-gradient-to-r from-slate-400/10 via-slate-500/5 to-transparent rounded-full blur-2xl"
          style={{ willChange: 'opacity' }}
        />
      </div>
      
      {/* Partículas Explosivas - Performance Optimized */}
      {isVisible && !shouldReduceMotion && [...Array(particleCount)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)', // GPU acceleration
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

      {/* Estrelas Especiais - Conditional & Optimized */}
      {isVisible && !shouldReduceMotion && [...Array(starCount)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)', // GPU acceleration
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

      {/* Fallback estático para reduced motion */}
      {shouldReduceMotion && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] opacity-50" />
          </div>
          <div className="absolute top-1/3 right-1/3">
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full opacity-30" />
          </div>
        </div>
      )}
    </div>
  );
} 