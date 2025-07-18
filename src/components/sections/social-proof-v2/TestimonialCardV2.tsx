/**
 * @file: TestimonialCardV2.tsx
 * @responsibility: Card individual otimizado para trabalhar com Swiper.js
 * @exports: TestimonialCardV2
 * @imports: React, Image, tipos
 * @layer: components
 */

"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { TestimonialCardProps } from "./types";

/**
 * Hook para detectar se o card está visível (intersection observer)
 */
const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);
        
        if (isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, hasBeenVisible, options]);

  return { isVisible, hasBeenVisible };
};

/**
 * Hook para detectar mobile de forma otimizada
 */
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return { isMobile };
};

/**
 * Componente TestimonialCardV2 - Otimizado para Swiper.js
 */
export const TestimonialCardV2: React.FC<TestimonialCardProps> = ({
  testimonial,
  isCenter,
  position,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [loadImage, setLoadImage] = useState(false);
  
  const { isMobile } = useResponsive();
  const { isVisible, hasBeenVisible } = useIntersectionObserver(cardRef, {
    threshold: 0.1,
    rootMargin: "100px",
  });

  // Lazy loading inteligente baseado na posição do card
  useEffect(() => {
    if (position === 'center') {
      // Card central sempre carrega imediatamente
      setLoadImage(true);
    } else if (position === 'left' || position === 'right') {
      // Cards laterais carregam quando visíveis
      if (isVisible || hasBeenVisible) {
        setLoadImage(true);
      }
    }
  }, [position, isVisible, hasBeenVisible]);

  // Preload da imagem quando necessário
  useEffect(() => {
    if (loadImage && !imageLoaded && !imageError) {
      const img = new window.Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageError(true);
      img.src = testimonial.image;
    }
  }, [loadImage, imageLoaded, imageError, testimonial.image]);

  // Handlers para imagem
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Classes CSS para animações suaves
  const cardClasses = `
    relative transition-all duration-300 ease-out
    ${hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    ${isCenter ? 'scale-100' : 'scale-95'}
  `;

  const imageClasses = `
    object-cover transition-all duration-500 ease-out
    ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
  `;

  return (
    <div className="w-full max-w-xs mx-auto" ref={cardRef}>
      <div
        className={cardClasses}
        style={{
          minHeight: isMobile ? "400px" : "500px",
          maxHeight: isMobile ? "600px" : "700px",
          willChange: 'transform, opacity',
        }}
      >
        {/* Badge de Destaque - Animado */}
        {testimonial.highlight && (
          <div 
            className={`
              absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 
              w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 
              bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full 
              flex items-center justify-center 
              border-2 sm:border-3 md:border-4 border-white shadow-xl z-20
              transition-all duration-300 ease-out
              ${hasBeenVisible ? 'animate-pulse' : ''}
            `}
          >
            <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#0A192F] fill-[#0A192F]" />
          </div>
        )}

        {/* Container Principal do Card */}
        <div 
          className={`
            relative bg-gradient-to-br from-gray-100 via-white to-gray-50 
            rounded-xl sm:rounded-2xl border-2 border-[#D4AF37]/30 overflow-hidden
            hover:border-[#D4AF37]/50 transition-all duration-300 h-full w-full
            shadow-lg sm:shadow-2xl flex flex-col
            ${isCenter ? 'hover:shadow-[#D4AF37]/20' : ''}
          `}
        >
          {/* Header WhatsApp Style */}
          <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 
            border-b border-gray-200 bg-gradient-to-r from-green-50 to-green-100
            transition-all duration-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full 
              flex items-center justify-center shadow-sm">
              <span className="text-white text-xs sm:text-sm font-bold">💬</span>
            </div>
            <div>
              <h4 className="font-bold text-[#0A192F] text-xs sm:text-sm">
                Depoimento WhatsApp
              </h4>
              <p className="text-xs text-gray-500">Aluno Verificado ✓</p>
            </div>
          </div>
          
          {/* Container da Imagem */}
          <div className="relative bg-white p-2 sm:p-3 flex-1 flex items-center justify-center">
            {loadImage && !imageError ? (
              <div className="relative w-full max-h-[450px] sm:max-h-[550px] bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={`Print do depoimento de ${testimonial.name} no WhatsApp`}
                  width={300}
                  height={0}
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
                  className={`${imageClasses} w-full h-auto object-contain`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  priority={position === 'center'}
                  quality={position === 'center' ? 90 : 80}
                  loading={position === 'center' ? 'eager' : 'lazy'}
                />
              </div>
            ) : imageError ? (
              // Estado de erro
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div className="text-center text-gray-500">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 
                    bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">📱</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium">
                    Imagem indisponível
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ) : (
              // Estado de carregamento
              <div className="w-full h-full flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-[#D4AF37] 
                    border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    Carregando...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialCardV2.displayName = "TestimonialCardV2";