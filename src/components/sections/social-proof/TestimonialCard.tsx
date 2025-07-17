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

  // Pré-carregamento da imagem para melhor performance
  useEffect(() => {
    if (position === 'center' || position === 'left' || position === 'right') {
      const img = new window.Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageError(true);
      img.src = testimonial.image;
    }
  }, [testimonial.image, position]);

  return (
    <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-3 sm:px-4">
      <motion.div
        className={`
          relative bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl 
          rounded-2xl sm:rounded-3xl border shadow-2xl transition-all duration-300 overflow-hidden
          ${testimonial.highlight 
            ? 'border-[#D4AF37]/50 shadow-[#D4AF37]/20' 
            : 'border-gray-200/50'
          }
        `}
        style={{
          minHeight: typeof window !== 'undefined' ? 
            (window.innerWidth < 640 ? '450px' : 
             window.innerWidth < 768 ? '500px' : 
             window.innerWidth < 1024 ? '550px' : '600px') : '600px',
          willChange: 'transform',
        }}
        whileHover={isCenter ? { y: -3, scale: 1.01 } : {}}
        layout
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

        {/* Grid Container com Altura Controlada */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch h-full p-4 sm:p-6 md:p-8"
          style={{
            gridTemplateRows: 'minmax(0, 1fr)',
          }}
        >
          
          {/* Coluna da Imagem - Lado Esquerdo */}
          <div className="order-2 md:order-1 flex flex-col justify-between">
            
            {/* Container da Imagem com Altura Flexível e Border Destacado */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 
                rounded-xl sm:rounded-2xl border-2 border-[#D4AF37]/30 shadow-2xl overflow-hidden
                hover:border-[#D4AF37]/50 transition-all duration-300">
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
                
                {/* Container da Imagem com Aspect Ratio Otimizado para 9:16 */}
                <div className="relative bg-white h-[280px] sm:h-[340px] md:h-[400px] w-full">
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
                      quality={85}
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
            </div>
          </div>

          {/* Coluna do Conteúdo - Lado Direito */}
          <div className="order-1 md:order-2 flex flex-col justify-between 
            text-center md:text-left h-full">
            
            {/* Quote Principal - Parte Superior */}
            <div className="flex-1 flex flex-col justify-center">
              <blockquote className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl 
                  font-bold text-[#0A192F] mb-3 sm:mb-4 leading-tight">
                  &ldquo;{testimonial.quote}&rdquo;
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 
                  leading-relaxed italic line-clamp-3">
                  &ldquo;{testimonial.description}&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Seção Inferior - Sempre Visível */}
            <div className="flex-shrink-0 space-y-3 sm:space-y-4">
              {/* Divisor */}
              <div className="w-full h-px bg-gradient-to-r from-transparent 
                via-[#D4AF37]/30 to-transparent" />
              
              {/* Autor */}
              <div>
                <p className="font-bold text-[#0A192F] text-base sm:text-lg md:text-xl">
                  {testimonial.name}
                </p>
                <p className="text-[#D4AF37] font-medium text-sm sm:text-base">
                  {testimonial.title}
                </p>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center md:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.5 + i * 0.1,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  </motion.div>
                ))}
              </div>

              {/* Badge de Autenticidade - Sempre Visível */}
              <div className="flex justify-center md:justify-start">
                <div className="inline-flex items-center gap-1 sm:gap-2 
                  bg-green-100 border border-green-200 
                  px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  <span className="text-green-700 font-medium text-xs sm:text-sm">
                    Depoimento Verificado
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";