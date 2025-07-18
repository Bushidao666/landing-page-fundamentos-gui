/**
 * @file: SocialProofSection.tsx
 * @responsibility: Seção principal de Social Proof com Swiper.js
 * @exports: SocialProofSection
 * @imports: SwiperCarousel, animações, dados
 * @layer: components/sections
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { StaticMosaic } from "./StaticMosaic";
import { benefits } from "./data";
import { 
  containerVariants, 
  itemVariants, 
  getAnimationPreference,
  getResponsiveVariants 
} from "./animationsV2";
import { Shield } from "lucide-react";

/**
 * Hook para detectar mobile e preferências de animação
 */
const useResponsiveAnimations = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkMotionPreference = () => {
      setPrefersReducedMotion(getAnimationPreference() === "reduced");
    };

    checkMobile();
    checkMotionPreference();

    window.addEventListener("resize", checkMobile);
    
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", checkMotionPreference);

    return () => {
      window.removeEventListener("resize", checkMobile);
      mediaQuery.removeEventListener("change", checkMotionPreference);
    };
  }, []);

  return { isMobile, prefersReducedMotion };
};

/**
 * Componente SocialProofSection - Prova social profissional
 */
const SocialProofSection: React.FC = () => {
  const { isMobile, prefersReducedMotion } = useResponsiveAnimations();
  
  // Variantes responsivas para animações
  const responsiveContainerVariants = getResponsiveVariants(
    containerVariants,
    isMobile,
    prefersReducedMotion
  );
  
  const responsiveItemVariants = getResponsiveVariants(
    itemVariants,
    isMobile,
    prefersReducedMotion
  );

  return (
    <section 
      className="relative bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F] 
        py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      id="social-proof"
      aria-label="Depoimentos de alunos verificados"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Container Principal */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={responsiveContainerVariants}
      >
        {/* Header da Seção */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          variants={responsiveItemVariants}
        >
          {/* Badge de Destaque */}
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 
              bg-gradient-to-r from-[#D4AF37]/20 to-yellow-400/20 
              border border-[#D4AF37]/30 rounded-full mb-6 sm:mb-8"
            variants={responsiveItemVariants}
          >
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold text-sm sm:text-base">
              Prova Social
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Título Principal */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
              text-white mb-6 sm:mb-8 leading-tight"
            variants={responsiveItemVariants}
          >
            <span className="block">Não Precisa Acreditar Só na</span>
            <span className="block bg-gradient-to-r from-[#D4AF37] to-yellow-400 
              bg-clip-text text-transparent">
              Minha Palavra.
            </span>
            <span className="block">Veja o Que Dizem Quem Já Colocou em Prática:</span>
          </motion.h2>

        </motion.div>

        {/* Mosaico Estático de Depoimentos */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20"
          variants={responsiveItemVariants}
        >
          <StaticMosaic className="testimonials-mosaic" />
        </motion.div>

        {/* Seção Percebeu o Padrão */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          variants={responsiveItemVariants}
        >
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white 
              mb-6 sm:mb-8"
            variants={responsiveItemVariants}
          >
            Percebeu o Padrão?
          </motion.h3>

          <motion.div
            className="max-w-4xl mx-auto mb-8 sm:mb-12"
            variants={responsiveItemVariants}
          >
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              Estes não são apenas &ldquo;alunos satisfeitos&rdquo;. São pessoas que já fizeram outros cursos e podem comparar. 
              Pessoas que já tinham experiência e ainda assim descobriram lacunas gigantes no conhecimento.
            </p>
            
            <p className="text-lg sm:text-xl text-[#D4AF37] font-semibold mb-8">
              O que todos eles têm em comum?
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12"
            variants={responsiveContainerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 sm:p-6 bg-white/5 
                  backdrop-blur-sm rounded-xl border border-white/10 
                  hover:border-[#D4AF37]/30 transition-all duration-300"
                variants={responsiveItemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 
                  bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full 
                  flex items-center justify-center">
                  <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A192F]" />
                </div>
                <p className="text-gray-300 text-left text-sm sm:text-base 
                  leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* A Pergunta Que Não Quer Calar */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={responsiveItemVariants}
        >
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white 
              mb-6 sm:mb-8"
            variants={responsiveItemVariants}
          >
            A Pergunta Que Não Quer Calar:
          </motion.h3>

          <motion.div
            className="max-w-4xl mx-auto mb-8"
            variants={responsiveItemVariants}
          >
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
              Se profissionais experientes, que já fizeram outros cursos e mentorias, 
              tiveram resultados tão impactantes...
            </p>
            
            <p className="text-lg sm:text-xl text-[#D4AF37] font-semibold">
              ...imagine o que pode acontecer com você, que vai receber essa base desde o início?
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={responsiveItemVariants}
          >
            <motion.button
              className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 
                bg-gradient-to-r from-[#D4AF37] to-yellow-400 
                text-[#0A192F] font-bold text-lg sm:text-xl rounded-full 
                shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300
                transform hover:scale-105"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              EU QUERO FAZER PARTE DESSE GRUPO DE SUCESSO POR R$ 47!
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Elementos Flutuantes Decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Partículas flutuantes */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-[#D4AF37] rounded-full 
          animate-bounce opacity-60" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-2 h-2 bg-yellow-400 rounded-full 
          animate-bounce opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-[#D4AF37] rounded-full 
          animate-bounce opacity-60" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-yellow-400 rounded-full 
          animate-bounce opacity-40" style={{ animationDelay: "0.5s" }} />
      </div>
    </section>
  );
};

export default SocialProofSection;