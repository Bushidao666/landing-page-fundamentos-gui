"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";
import Image from "next/image";
import { TestimonialCardProps } from "./types";

export const TestimonialCard = React.memo<TestimonialCardProps>(({ 
  testimonial, 
  isCenter, 
  position 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Pré-carregamento inteligente - apenas para cards visíveis
  useEffect(() => {
    if (position === 'center') {
      // Pré-carrega imagem central imediatamente
      const img = new window.Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageError(true);
      img.src = testimonial.image;
    } else if (position === 'left' || position === 'right') {
      // Lazy loading para cards laterais
      const timer = setTimeout(() => {
        const img = new window.Image();
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageError(true);
        img.src = testimonial.image;
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [testimonial.image, position]);

  // Detectar se é mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  
  return (
    <div className="w-full max-w-xs mx-auto">
      <motion.div
        className="relative"
        style={{
          aspectRatio: isMobile ? '3/4' : '9/16',
          willChange: 'transform',
        }}
        whileHover={isCenter && !isMobile ? { y: -3, scale: 1.01 } : {}}
        layout={!isMobile}
        layoutId={`testimonial-${testimonial.id}`}
      >
        
        {/* Badge de Destaque - Sempre Visível */}
        {testimonial.highlight && (
          <motion.div
            className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 
              w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 
              bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full 
              flex items-center justify-center 
              border-2 sm:border-3 md:border-4 border-white shadow-xl z-20"
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            layoutId={`badge-${testimonial.id}`}
          >
            <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#0A192F] fill-[#0A192F]" />
          </motion.div>
        )}

        {/* Container da Imagem com Border Destacado Responsivo */}
        <div className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 
          rounded-xl sm:rounded-2xl border-2 border-[#D4AF37]/30 overflow-hidden
          hover:border-[#D4AF37]/50 transition-all duration-300 h-full w-full
          shadow-lg sm:shadow-2xl">
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
          
          {/* Container da Imagem ocupando o resto do espaço */}
          <div className="relative bg-white flex-1 h-full">
            {!imageError ? (
              <Image
                src={testimonial.image}
                alt={`Print do depoimento de ${testimonial.name} no WhatsApp`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className={`
                  object-cover transition-all duration-500
                  ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                priority={position === 'center'}
                quality={position === 'center' ? 85 : 75}
                loading={position === 'center' ? 'eager' : 'lazy'}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div className="text-center text-gray-500">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 
                    bg-gray-200 rounded-full flex items-center justify-center">
                    📱
                  </div>
                  <p className="text-xs sm:text-sm">Imagem indisponível</p>
                </div>
              </div>
            )}
            
            {/* Loading State */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <motion.div
                  className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-[#D4AF37] 
                    border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";