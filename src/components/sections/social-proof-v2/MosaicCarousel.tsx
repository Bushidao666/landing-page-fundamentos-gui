/**
 * @file: MosaicCarousel.tsx
 * @responsibility: Carrossel de mosaico simétrico para depoimentos
 * @exports: MosaicCarousel
 * @imports: React, animations, types
 * @layer: components
 */

"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { MosaicCarouselProps } from "./types";
import { MosaicCard } from "./MosaicCard";

/**
 * Hook para detectar mobile
 */
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return { isMobile };
};

/**
 * Componente MosaicCarousel - Sistema de mosaico simétrico
 */
export const MosaicCarousel: React.FC<MosaicCarouselProps> = ({
  mosaicGroups,
  autoplay = true,
  autoplayDelay = 5000,
  showControls = true,
  showIndicators = true,
  className = "",
}) => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);
  const [direction, setDirection] = useState(0);
  const { isMobile } = useResponsive();

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentGroup((prev) => 
      prev === 0 ? mosaicGroups.length - 1 : prev - 1
    );
  }, [mosaicGroups.length]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentGroup((prev) => 
      prev === mosaicGroups.length - 1 ? 0 : prev + 1
    );
  }, [mosaicGroups.length]);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentGroup, autoplayDelay, handleNext]);

  const handleGoToGroup = useCallback((index: number) => {
    if (index === currentGroup) return;
    setDirection(index > currentGroup ? 1 : -1);
    setCurrentGroup(index);
  }, [currentGroup]);

  const handleToggleAutoplay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying]);

  const currentMosaicGroup = mosaicGroups[currentGroup];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  if (!currentMosaicGroup) return null;

  return (
    <div className={`relative w-full ${className}`}>
      {/* Container Principal */}
      <div className="relative w-full max-w-6xl mx-auto">
        
        {/* Mosaico Grid */}
        <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] mb-8 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentGroup}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              {/* Grid Layout Adaptativo */}
              <div className={`
                w-full h-full grid gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8
                ${isMobile 
                  ? 'grid-cols-1 grid-rows-3' 
                  : 'grid-cols-12 grid-rows-6'
                }
              `}>
                
                {/* Mobile Layout - Stack Vertical */}
                {isMobile ? (
                  <>
                    {currentMosaicGroup.testimonials.map((testimonial, index) => (
                      <motion.div
                        key={`${testimonial.id}-${index}`}
                        variants={containerVariants}
                        className="w-full"
                      >
                        <MosaicCard
                          testimonial={testimonial}
                          size={index === 1 ? 'large' : 'medium'}
                          position={index === 0 ? 'left' : index === 1 ? 'center' : 'right'}
                          isActive={index === 1}
                        />
                      </motion.div>
                    ))}
                  </>
                ) : (
                  /* Desktop Layout - Grid Patterns */
                  <>
                    {/* Card Esquerdo */}
                    <motion.div
                      variants={containerVariants}
                      className={`
                        ${currentMosaicGroup.pattern === 'A' ? 'col-span-3 row-span-4' : // Horizontal
                          currentMosaicGroup.pattern === 'B' ? 'col-span-2 row-span-6' : // Vertical  
                          'col-span-3 row-span-3'} // Square
                        flex items-center
                      `}
                    >
                      <MosaicCard
                        testimonial={currentMosaicGroup.testimonials[0]}
                        size="medium"
                        position="left"
                        isActive={false}
                      />
                    </motion.div>

                    {/* Card Central (Destaque) */}
                    <motion.div
                      variants={containerVariants}
                      className="col-span-6 row-span-6 flex items-center justify-center"
                    >
                      <MosaicCard
                        testimonial={currentMosaicGroup.testimonials[1]}
                        size="large"
                        position="center"
                        isActive={true}
                      />
                    </motion.div>

                    {/* Card Direito */}
                    <motion.div
                      variants={containerVariants}
                      className={`
                        ${currentMosaicGroup.pattern === 'A' ? 'col-span-3 row-span-6' : // Vertical
                          currentMosaicGroup.pattern === 'B' ? 'col-span-3 row-span-4' : // Horizontal
                          'col-span-3 row-span-4'} // Horizontal
                        flex items-center
                      `}
                    >
                      <MosaicCard
                        testimonial={currentMosaicGroup.testimonials[2]}
                        size="medium"
                        position="right"
                        isActive={false}
                      />
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles */}
        {showControls && (
          <div className="flex flex-col items-center gap-6 w-full">
            
            {/* Controles de Navegação */}
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <motion.button
                onClick={handlePrev}
                className="w-12 h-12 md:w-14 md:h-14 
                  bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full 
                  flex items-center justify-center shadow-lg hover:shadow-xl 
                  transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Mosaico anterior"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-[#0A192F]" />
              </motion.button>
              
              {/* Auto-play Toggle */}
              <motion.button
                onClick={handleToggleAutoplay}
                className="w-10 h-10 md:w-12 md:h-12 
                  bg-gray-200 hover:bg-gray-300 rounded-full 
                  flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isAutoPlaying ? "Pausar" : "Reproduzir"}
              >
                {isAutoPlaying ? (
                  <Pause className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                ) : (
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-gray-700 ml-0.5" />
                )}
              </motion.button>
              
              <motion.button
                onClick={handleNext}
                className="w-12 h-12 md:w-14 md:h-14 
                  bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full 
                  flex items-center justify-center shadow-lg hover:shadow-xl 
                  transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Próximo mosaico"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-[#0A192F]" />
              </motion.button>
            </div>
            
            {/* Indicadores */}
            {showIndicators && (
              <div className="flex justify-center gap-3">
                {mosaicGroups.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleGoToGroup(index)}
                    className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                      index === currentGroup
                        ? 'w-10 h-3 md:w-12 md:h-3 bg-gradient-to-r from-[#D4AF37] to-yellow-400'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Ir para mosaico ${index + 1}`}
                  >
                    {index === currentGroup && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent 
                          via-white/40 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ 
                          duration: autoplayDelay / 1000, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

MosaicCarousel.displayName = "MosaicCarousel";