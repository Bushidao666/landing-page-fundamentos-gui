/**
 * @file: MosaicCard.tsx
 * @responsibility: Card individual otimizado para layout de mosaico
 * @exports: MosaicCard
 * @imports: React, Image, tipos
 * @layer: components
 */

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MosaicCardProps } from "./types";

/**
 * Hook para detectar se o card está visível
 */
const useCardVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return { isVisible };
};

/**
 * Configurações de tamanho baseadas no size
 */
const getSizeConfig = (size: 'large' | 'medium' | 'small') => {
  if (size === 'large') {
    return {
      container: 'w-full',
      imageWidth: 400,
      imageHeight: 600,
      maxHeight: 'max-h-[600px]'
    };
  }
  
  if (size === 'medium') {
    return {
      container: 'w-full',
      imageWidth: 320,
      imageHeight: 480,
      maxHeight: 'max-h-[480px]'
    };
  }
  
  return {
    container: 'w-full',
    imageWidth: 240,
    imageHeight: 360,
    maxHeight: 'max-h-[360px]'
  };
};

/**
 * Componente MosaicCard - Card otimizado para mosaico
 */
export const MosaicCard: React.FC<MosaicCardProps> = ({
  testimonial,
  size,
  isActive,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { isVisible } = useCardVisibility();
  
  const sizeConfig = getSizeConfig(size);

  // Handlers para imagem
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Classes de animação
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
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

  const imageClasses = `
    transition-all duration-500 ease-out
    ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
  `;

  return (
    <motion.div
      className={sizeConfig.container}
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover={isActive ? { scale: 1.02, y: -4 } : { scale: 1.01, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="relative h-full transition-all duration-300 ease-out"
        style={{
          willChange: 'transform, opacity',
        }}
      >
        {/* Badge de Destaque */}
        {testimonial.highlight && (
          <motion.div 
            className={`
              absolute -top-2 sm:-top-3 -right-2 sm:-right-3 z-20
              w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
              bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full 
              flex items-center justify-center 
              border-2 border-white shadow-xl
              transition-all duration-300 ease-out
              ${isActive ? 'animate-pulse' : ''}
            `}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0A192F] fill-[#0A192F]" />
          </motion.div>
        )}

        {/* Container Principal do Card */}
        <div 
          className={`
            relative bg-gradient-to-br from-gray-100 via-white to-gray-50 
            rounded-lg sm:rounded-xl border-2 overflow-hidden
            transition-all duration-300 h-full w-full flex flex-col
            shadow-lg hover:shadow-xl
            ${isActive 
              ? 'border-[#D4AF37]/50 shadow-[#D4AF37]/20' 
              : 'border-[#D4AF37]/30 hover:border-[#D4AF37]/40'
            }
          `}
        >
          {/* Header WhatsApp Style */}
          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 
            border-b border-gray-200 bg-gradient-to-r from-green-50 to-green-100
            transition-all duration-300 flex-shrink-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full 
              flex items-center justify-center shadow-sm">
              <span className="text-white text-xs font-bold">💬</span>
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-[#0A192F] text-xs sm:text-sm truncate">
                Depoimento WhatsApp
              </h4>
              <p className="text-xs text-gray-500">Aluno Verificado ✓</p>
            </div>
          </div>
          
          {/* Container da Imagem */}
          <div className="relative bg-gray-50 p-4 flex-1 overflow-hidden">
            {!imageError ? (
              <div className={`relative w-full ${sizeConfig.maxHeight} flex items-center justify-center rounded-lg overflow-hidden bg-white`}>
                <Image
                  src={testimonial.image}
                  alt={`Print do depoimento de ${testimonial.name} no WhatsApp`}
                  width={sizeConfig.imageWidth}
                  height={sizeConfig.imageHeight}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className={`${imageClasses} w-auto h-auto max-w-full max-h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-105`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  priority={isActive}
                  quality={isActive ? 95 : 85}
                  loading={isActive ? 'eager' : 'lazy'}
                />
              </div>
            ) : (
              // Estado de erro
              <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg min-h-[200px]">
                <div className="text-center text-gray-500">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 
                    bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg sm:text-xl">📱</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium">
                    Imagem indisponível
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            )}

            {/* Loading State */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 border-3 border-[#D4AF37] 
                    border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    Carregando...
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Overlay para cards não ativos */}
          {!isActive && (
            <div className="absolute inset-0 bg-black/10 rounded-lg pointer-events-none" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

MosaicCard.displayName = "MosaicCard";