/**
 * @file: StaticMosaic.tsx
 * @responsibility: Mosaico estático com todas as provas sociais
 * @exports: StaticMosaic
 * @imports: React, MosaicCard, testimonials
 * @layer: components
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MosaicCard } from "./MosaicCard";
import { testimonials } from "./data";
import "./styles/mosaic.css";

/**
 * Hook para detectar mobile
 */
const useResponsive = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    let rafId = 0 as number | 0;
    const onResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        checkMobile();
        rafId = 0 as number | 0;
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (rafId) cancelAnimationFrame(rafId as number);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return { isMobile };
};

/**
 * Componente StaticMosaic - Mosaico estático de depoimentos
 */
export const StaticMosaic: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { isMobile } = useResponsive();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isMobile ? (
          /* Mobile Layout - Stack Vertical */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 sm:gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="w-full max-w-sm mx-auto"
              >
                <MosaicCard
                  testimonial={testimonial}
                  size={testimonial.highlight ? 'large' : 'medium'}
                  isActive={testimonial.highlight}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Desktop Layout - Simplified Grid */
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                className="break-inside-avoid mb-6"
              >
                <MosaicCard
                  testimonial={testimonial}
                  size={testimonial.highlight ? 'large' : 'medium'}
                  isActive={testimonial.highlight}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Estatísticas de Impacto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Isso é só uma amostra...
            </h3>
            <p className="text-lg text-gray-300">
              Temos <strong className="text-[#D4AF37]">centenas</strong> de depoimentos como esses
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: "2.847+", label: "Alunos Transformados" },
              { number: "98%", label: "Taxa de Satisfação" },
              { number: "4.9/5", label: "Avaliação Média" },
              { number: "100%", label: "Depoimentos Reais" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl 
                  border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

StaticMosaic.displayName = "StaticMosaic";