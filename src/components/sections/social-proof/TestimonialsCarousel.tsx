"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";
import { carouselVariants } from "./animations";
import { testimonials } from "./data";

export const TestimonialsCarousel = React.memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Debounced navigation para evitar clicks múltiplos
  const debouncedNavigation = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    
    // Reset transitioning state após animação
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % testimonials.length;
    debouncedNavigation(newIndex);
  }, [currentSlide, debouncedNavigation]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + testimonials.length) % testimonials.length;
    debouncedNavigation(newIndex);
  }, [currentSlide, debouncedNavigation]);
  
  // Auto-play inteligente mobile-optimized
  useEffect(() => {
    if (!isAutoPlaying) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const interval = setInterval(nextSlide, isMobile ? 3000 : 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play no hover
  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  return (
    <div 
      className="relative w-full flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Container do Carrossel Responsivo */}
      <div className="relative w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 
        flex items-center justify-center mb-8 sm:mb-10 md:mb-12 
        min-h-[400px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[580px]">
        <LayoutGroup>
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map((testimonial, index) => {
              let variant: 'center' | 'left' | 'right' | 'hidden' = "hidden";
              const distance = index - currentSlide;

              if (index === currentSlide) {
                variant = "center";
              } else if (index === (currentSlide - 1 + testimonials.length) % testimonials.length) {
                variant = "left";
              } else if (index === (currentSlide + 1) % testimonials.length) {
                variant = "right";
              }

              // Renderiza apenas os cards visíveis
              if (variant === "hidden" && Math.abs(distance) > 1) {
                return null;
              }

              return (
                <motion.div
                  key={testimonial.id}
                  variants={carouselVariants}
                  animate={variant}
                  initial="hidden"
                  exit="hidden"
                  className="absolute w-full h-full flex items-center justify-center"
                  style={{
                    cursor: variant === "center" ? "default" : "pointer",
                    willChange: 'transform, opacity, filter',
                  }}
                  onClick={() => variant !== "center" && !isTransitioning && debouncedNavigation(index)}
                  whileHover={variant !== "center" ? { scale: 0.85, y: -5 } : {}}
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isCenter={variant === 'center'} 
                    position={variant}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </LayoutGroup>
      </div>

      {/* Controles e Indicadores Mobile-Optimized */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full">
        {/* Controles de Navegação Touch-Friendly */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <motion.button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
              bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full 
              flex items-center justify-center shadow-lg hover:shadow-xl 
              transition-all duration-300 disabled:opacity-50 
              disabled:cursor-not-allowed touch-manipulation"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#0A192F]" />
          </motion.button>
          
          {/* Auto-play Toggle */}
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
              bg-gray-200 hover:bg-gray-300 rounded-full 
              flex items-center justify-center transition-all duration-300 
              touch-manipulation"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlaying ? (
              <Pause className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700" />
            ) : (
              <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700 ml-0.5" />
            )}
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
              bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full 
              flex items-center justify-center shadow-lg hover:shadow-xl 
              transition-all duration-300 disabled:opacity-50 
              disabled:cursor-not-allowed touch-manipulation"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#0A192F]" />
          </motion.button>
        </div>
        
        {/* Indicadores de Posição Touch-Friendly */}
        <div className="flex justify-center gap-2 sm:gap-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => !isTransitioning && debouncedNavigation(index)}
              disabled={isTransitioning}
              className={`relative overflow-hidden rounded-full transition-all duration-300 
                disabled:cursor-not-allowed touch-manipulation ${
                index === currentSlide
                  ? 'w-8 h-3 sm:w-10 sm:h-3 md:w-12 md:h-3 bg-gradient-to-r from-[#D4AF37] to-yellow-400'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent 
                    via-white/40 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ 
                    duration: typeof window !== 'undefined' && window.innerWidth < 640 ? 3 : 5, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
});

TestimonialsCarousel.displayName = "TestimonialsCarousel";