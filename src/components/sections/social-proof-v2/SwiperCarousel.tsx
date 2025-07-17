/**
 * @file: SwiperCarousel.tsx
 * @responsibility: Carrossel profissional de depoimentos usando Swiper.js
 * @exports: SwiperCarousel
 * @imports: Swiper components, types, data
 * @layer: components
 */

"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Lazy, Keyboard, Mousewheel } from "swiper/modules";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";

// Types
import type { SwiperCarouselProps, CarouselConfig } from "./types";

/**
 * Configuração otimizada do Swiper para testimonials
 */
const createCarouselConfig = (
  autoplayDelay: number,
  isMobile: boolean
): CarouselConfig => ({
  slidesPerView: 1,
  spaceBetween: isMobile ? 20 : 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: autoplayDelay,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    enabled: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
      centeredSlides: true,
    },
  },
  lazy: {
    loadPrevNext: true,
    loadOnTransitionStart: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: false,
    forceToAxis: true,
  },
  touchRatio: 1,
  threshold: 10,
  longSwipesRatio: 0.5,
});

/**
 * Componente SwiperCarousel - Carrossel profissional de depoimentos
 */
export const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  testimonials,
  autoplay = true,
  autoplayDelay = 4000,
  showControls = true,
  showIndicators = true,
  className = "",
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Detectar mobile e configurar responsividade
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Configuração do Swiper
  const carouselConfig = createCarouselConfig(
    isMobile ? autoplayDelay : autoplayDelay + 1000,
    isMobile
  );

  // Handlers para controles
  const handlePrevSlide = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }, []);

  const handleNextSlide = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, []);

  const handleToggleAutoplay = useCallback(() => {
    if (swiperRef.current) {
      if (isAutoPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsAutoPlaying(!isAutoPlaying);
    }
  }, [isAutoPlaying]);

  const handleSlideToIndex = useCallback((index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  }, []);

  // Swiper event handlers
  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsReady(true);
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex);
  }, []);

  const handleAutoplayStart = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  const handleAutoplayStop = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Container do Swiper */}
      <div className="relative w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        
        {/* Altura responsiva para manter proporção */}
        <div className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[520px] lg:min-h-[580px] mb-8 sm:mb-10 md:mb-12">
          
          {/* Swiper Component */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation, Lazy, Keyboard, Mousewheel]}
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
            onAutoplayStart={handleAutoplayStart}
            onAutoplayStop={handleAutoplayStop}
            className="w-full h-full testimonials-swiper"
            {...carouselConfig}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={testimonial.id}
                className="flex items-center justify-center"
              >
                {/* Placeholder para TestimonialCard - será implementado na Etapa 3 */}
                <div className="w-full max-w-xs mx-auto">
                  <div
                    className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 
                      rounded-xl sm:rounded-2xl border-2 border-[#D4AF37]/30 shadow-lg sm:shadow-2xl 
                      overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300"
                    style={{
                      aspectRatio: isMobile ? "3/4" : "9/16",
                      minHeight: "300px",
                    }}
                  >
                    {/* Temporary placeholder content */}
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">💬</span>
                        </div>
                        <h3 className="text-lg font-bold text-[#0A192F] mb-2">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {testimonial.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          Slide {index + 1} de {testimonials.length}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Controles personalizados */}
        {showControls && isReady && (
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full">
            
            {/* Controles de Navegação */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <motion.button
                onClick={handlePrevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                  bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full 
                  flex items-center justify-center shadow-lg hover:shadow-xl 
                  transition-all duration-300 touch-manipulation"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#0A192F]" />
              </motion.button>
              
              {/* Auto-play Toggle */}
              <motion.button
                onClick={handleToggleAutoplay}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                  bg-gray-200 hover:bg-gray-300 rounded-full 
                  flex items-center justify-center transition-all duration-300 
                  touch-manipulation"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isAutoPlaying ? "Pausar reprodução automática" : "Iniciar reprodução automática"}
              >
                {isAutoPlaying ? (
                  <Pause className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700" />
                ) : (
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700 ml-0.5" />
                )}
              </motion.button>
              
              <motion.button
                onClick={handleNextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                  bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full 
                  flex items-center justify-center shadow-lg hover:shadow-xl 
                  transition-all duration-300 touch-manipulation"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#0A192F]" />
              </motion.button>
            </div>
            
            {/* Indicadores personalizados */}
            {showIndicators && (
              <div className="flex justify-center gap-2 sm:gap-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSlideToIndex(index)}
                    className={`relative overflow-hidden rounded-full transition-all duration-300 
                      touch-manipulation ${
                      index === currentSlide
                        ? 'w-8 h-3 sm:w-10 sm:h-3 md:w-12 md:h-3 bg-gradient-to-r from-[#D4AF37] to-yellow-400'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Ir para slide ${index + 1}`}
                  >
                    {index === currentSlide && (
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

      {/* Estilos customizados para Swiper */}
      <style jsx global>{`
        .testimonials-swiper {
          --swiper-theme-color: #D4AF37;
          --swiper-pagination-color: #D4AF37;
        }
        
        .testimonials-swiper .swiper-pagination-bullet {
          display: none; /* Usamos indicadores customizados */
        }
        
        .testimonials-swiper .swiper-button-prev,
        .testimonials-swiper .swiper-button-next {
          display: none; /* Usamos botões customizados */
        }
        
        .testimonials-swiper .swiper-slide {
          transition-property: transform;
          transition-timing-function: ease-out;
          transition-duration: 0.3s;
        }
        
        .testimonials-swiper .swiper-slide-active {
          transform: scale(1);
        }
        
        .testimonials-swiper .swiper-slide-prev,
        .testimonials-swiper .swiper-slide-next {
          transform: scale(0.9);
          opacity: 0.8;
        }
        
        @media (max-width: 640px) {
          .testimonials-swiper .swiper-slide-prev,
          .testimonials-swiper .swiper-slide-next {
            transform: scale(0.95);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

SwiperCarousel.displayName = "SwiperCarousel";