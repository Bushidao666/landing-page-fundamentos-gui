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
  slidesPerView: isMobile ? 1 : 'auto',
  spaceBetween: isMobile ? 20 : 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: autoplayDelay,
    disableOnInteraction: false,
    pauseOnMouseEnter: !isMobile, // Apenas desktop
  },
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    enabled: true,
  },
  breakpoints: {
    // Mobile
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      centeredSlides: true,
    },
    // Mobile landscape
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    // Tablet
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
    },
    // Tablet landscape
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
      centeredSlides: true,
    },
    // Desktop
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
      centeredSlides: true,
    },
    // Large desktop
    1280: {
      slidesPerView: 1,
      spaceBetween: 60,
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
    enabled: !isMobile, // Apenas desktop
    forceToAxis: true,
  },
  touchRatio: isMobile ? 1 : 0.8,
  threshold: isMobile ? 5 : 10,
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

  // Handlers para controles com debounce
  const handlePrevSlide = useCallback(() => {
    if (swiperRef.current && isReady) {
      swiperRef.current.slidePrev();
    }
  }, [isReady]);

  const handleNextSlide = useCallback(() => {
    if (swiperRef.current && isReady) {
      swiperRef.current.slideNext();
    }
  }, [isReady]);

  const handleToggleAutoplay = useCallback(() => {
    if (swiperRef.current && isReady) {
      try {
        if (isAutoPlaying) {
          swiperRef.current.autoplay.stop();
          setIsAutoPlaying(false);
        } else {
          swiperRef.current.autoplay.start();
          setIsAutoPlaying(true);
        }
      } catch (error) {
        console.warn('Autoplay toggle error:', error);
      }
    }
  }, [isAutoPlaying, isReady]);

  const handleSlideToIndex = useCallback((index: number) => {
    if (swiperRef.current && isReady && index !== currentSlide) {
      swiperRef.current.slideToLoop(index);
    }
  }, [currentSlide, isReady]);

  // Swiper event handlers
  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsReady(true);
    
    // Configurar autoplay inicial
    if (autoplay) {
      swiper.autoplay.start();
    }
  }, [autoplay]);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex);
  }, []);

  const handleAutoplayStart = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  const handleAutoplayStop = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleAutoplayPause = useCallback(() => {
    if (!isMobile) {
      setIsAutoPlaying(false);
    }
  }, [isMobile]);

  const handleAutoplayResume = useCallback(() => {
    if (!isMobile) {
      setIsAutoPlaying(true);
    }
  }, [isMobile]);

  // Cleanup ao desmontar
  useEffect(() => {
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
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
            onAutoplayPause={handleAutoplayPause}
            onAutoplayResume={handleAutoplayResume}
            className="w-full h-full testimonials-swiper"
            watchSlidesProgress={true}
            watchOverflow={true}
            preventInteractionOnTransition={true}
            allowTouchMove={true}
            simulateTouch={true}
            grabCursor={true}
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
                    {/* Badge de destaque */}
                    {testimonial.highlight && (
                      <div className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 
                        w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 
                        bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full 
                        flex items-center justify-center 
                        border-2 sm:border-3 md:border-4 border-white shadow-xl z-20">
                        <span className="text-[#0A192F] text-sm sm:text-base md:text-lg font-bold">⭐</span>
                      </div>
                    )}

                    {/* Header WhatsApp Style */}
                    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 
                      border-b border-gray-200 bg-gradient-to-r from-green-50 to-green-100">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full 
                        flex items-center justify-center">
                        <span className="text-white text-xs sm:text-sm font-bold">💬</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A192F] text-xs sm:text-sm">
                          Depoimento WhatsApp
                        </h4>
                        <p className="text-xs text-gray-500">Aluno Verificado ✓</p>
                      </div>
                    </div>

                    {/* Placeholder para imagem */}
                    <div className="flex-1 flex items-center justify-center h-full bg-white">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">📱</span>
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
                        <div className="mt-4 text-xs text-[#D4AF37] font-medium">
                          ⚡ Carregamento com Swiper.js
                        </div>
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
          --swiper-navigation-color: #D4AF37;
          padding: 0 !important;
        }
        
        .testimonials-swiper .swiper-pagination-bullet {
          display: none; /* Usamos indicadores customizados */
        }
        
        .testimonials-swiper .swiper-button-prev,
        .testimonials-swiper .swiper-button-next {
          display: none; /* Usamos botões customizados */
        }
        
        .testimonials-swiper .swiper-slide {
          transition-property: transform, opacity;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 0.4s;
          opacity: 0.8;
          transform: scale(0.95);
        }
        
        .testimonials-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 10;
        }
        
        .testimonials-swiper .swiper-slide-prev,
        .testimonials-swiper .swiper-slide-next {
          opacity: 0.6;
          transform: scale(0.85);
        }
        
        .testimonials-swiper .swiper-slide-duplicate {
          opacity: 0.4;
          transform: scale(0.8);
        }
        
        @media (max-width: 640px) {
          .testimonials-swiper .swiper-slide {
            opacity: 0.9;
            transform: scale(0.98);
          }
          
          .testimonials-swiper .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
          }
          
          .testimonials-swiper .swiper-slide-prev,
          .testimonials-swiper .swiper-slide-next {
            opacity: 0.7;
            transform: scale(0.9);
          }
        }
        
        /* Smooth touch feedback */
        .testimonials-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Prevent text selection during swipe */
        .testimonials-swiper .swiper-slide * {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>
    </div>
  );
};

SwiperCarousel.displayName = "SwiperCarousel";