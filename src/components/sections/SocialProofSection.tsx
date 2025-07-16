"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import modularized components
import { 
  TestimonialsCarousel, 
  PatternSection, 
  FloatingElements,
  containerVariants, 
  itemVariants 
} from "./social-proof";

// Motion components
const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionSpan = motion.span;
const MotionP = motion.p;

export default function SocialProofSection() {
  return (
    <MotionSection
      id="social-proof"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Tech-Aristocrático Responsivo */}
      <div className="absolute inset-0">
        {/* Camada Base - Gradiente Premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100" />
        
        {/* Overlay de Transição */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/5 to-[#0A192F]/15" />
        
        {/* Grid Pattern Sutil */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        {/* Nebulosa Premium Responsiva */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/3 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-l from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[150px] sm:h-[250px] md:h-[300px] bg-gradient-to-r from-slate-400/10 via-slate-500/5 to-transparent rounded-full blur-2xl" />
        </div>
        
        {/* Partículas Flutuantes */}
        <FloatingElements />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          
          {/* Header da Seção */}
          <MotionDiv className="text-center mb-12 sm:mb-16 md:mb-20" variants={itemVariants}>
            {/* Badge Premium */}
            <MotionDiv
              className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-[#D4AF37]/30 via-[#FFD700]/20 to-[#D4AF37]/30 backdrop-blur-2xl border border-[#D4AF37]/50 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-2xl mb-6 sm:mb-8 md:mb-12"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                Quem experimentou, aprova
              </span>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#D4AF37]" />
            </MotionDiv>

            {/* Headline Provocativa */}
            <MotionH2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-black leading-[0.9] tracking-tight text-[#0A192F] mb-6 sm:mb-8"
              variants={itemVariants}
            >
              Não Precisa Acreditar Só na{" "}
              <MotionSpan 
                className="text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text bg-[length:200%_100%]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background: "linear-gradient(to right, #D4AF37, #FFD700, #D4AF37)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 3s ease-in-out infinite"
                }}
              >
                Minha Palavra
              </MotionSpan>
            </MotionH2>

            <MotionP 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 font-light max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto"
              variants={itemVariants}
            >
              Veja o Que Dizem Quem Já Colocou em Prática:
            </MotionP>
          </MotionDiv>

          {/* Carrossel de Depoimentos Estratégicos */}
          <MotionDiv className="mb-12 sm:mb-16 md:mb-20" variants={itemVariants}>
            <TestimonialsCarousel />
          </MotionDiv>

          {/* Seção "Percebeu o Padrão?" */}
          <PatternSection />

          {/* Pergunta Provocativa Final */}
          <MotionDiv className="text-center mb-10 sm:mb-12 md:mb-16" variants={itemVariants}>
            <MotionDiv 
              className="bg-gradient-to-br from-gray-50 via-white to-gray-50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200/50 shadow-2xl"
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#D4AF37] mb-6 sm:mb-8 uppercase tracking-wide">
                A Pergunta Que Não Quer Calar:
              </h3>
              
              <div className="space-y-4 sm:space-y-6 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#0A192F] leading-relaxed font-medium">
                  <span className="font-bold">Se profissionais experientes, que já fizeram outros cursos e mentorias, tiveram resultados tão impactantes...</span>
                </p>
                
                <MotionP 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#D4AF37] leading-relaxed font-bold"
                  animate={{ 
                    textShadow: ["0 0 10px rgba(212, 175, 55, 0.3)", "0 0 20px rgba(212, 175, 55, 0.6)", "0 0 10px rgba(212, 175, 55, 0.3)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ...imagine o que pode acontecer com você, que vai receber essa base desde o início?
                </MotionP>
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* CTA Contextualizado Mobile-Optimized */}
          <MotionDiv
            className="text-center"
            variants={itemVariants}
          >
            <MotionDiv
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Button 
                size="lg" 
                className="relative overflow-hidden w-full sm:w-auto text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 lg:py-8 h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-black shadow-2xl shadow-[#D4AF37]/50 border-2 sm:border-3 md:border-4 border-[#D4AF37]/30 rounded-xl sm:rounded-2xl md:rounded-3xl transition-all duration-500 backdrop-blur-sm"
              >
                {/* Efeito de Brilho */}
                <MotionDiv
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />
                
                <span className="relative flex items-center justify-center gap-2 sm:gap-3 md:gap-4 z-10">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="tracking-wide text-center leading-tight">
                    <span className="hidden md:inline">EU QUERO FAZER PARTE DESSE GRUPO DE SUCESSO POR R$ 47!</span>
                    <span className="md:hidden">QUERO FAZER PARTE! R$ 47</span>
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#0A192F] group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </MotionDiv>

            {/* Indicadores de Pertencimento */}
            <MotionDiv 
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 text-gray-600"
              variants={itemVariants}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                <span className="text-xs sm:text-sm">Junte-se aos Vencedores</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500" />
                <span className="text-xs sm:text-sm">Resultados Comprovados</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                <span className="text-xs sm:text-sm">Satisfação Garantida</span>
              </div>
            </MotionDiv>
          </MotionDiv>

        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      `}</style>
    </MotionSection>
  );
}