"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, TrendingUp, Target, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const floatingVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.5,
    },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Tech-Aristocrático */}
      <div className="absolute inset-0">
        {/* Camada Base - Gradiente Tech Premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#1a2444] to-[#0f1419]" />
        
        {/* Textura de Veludo Digital */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        </div>
        
        {/* Grid Pattern Sutil - Tech */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        {/* Nebulosa Premium */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[300px] bg-gradient-to-r from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[250px] bg-gradient-to-l from-slate-400/10 via-slate-500/5 to-transparent rounded-full blur-2xl" />
        </div>
        
        {/* Overlay de Profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex items-center justify-center min-h-[85vh]">
          
          {/* Content Column - Centralizado */}
          <motion.div
            className="space-y-6 md:space-y-8 lg:space-y-10 text-center max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto"
            variants={containerVariants}
          >
            {/* Badge Premium - Google Ads Master */}
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 backdrop-blur-xl border border-[#D4AF37]/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl"
              variants={itemVariants}
            >
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider">
                Google Ads Master Class
              </span>
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
            </motion.div>

            {/* Main Headline - Hierarquia Melhorada */}
            <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-black leading-tight sm:leading-[0.9] tracking-tight text-white"
                variants={itemVariants}
              >
                <span className="block text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-2 sm:mb-3">
                  Seu E-commerce Desperdiça Dinheiro com um
                </span>
                <motion.span 
                  className="block text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] via-[#FFA500] to-[#D4AF37] bg-clip-text animate-shimmer bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Sócio Sanguessuga
                </motion.span>
                <span className="block text-gray-100 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-2 sm:mt-3">
                  Chamado Google Ads?
                </span>
              </motion.h1>
              
              {/* Métrica de Impacto - Centralizada */}
              <motion.div 
                className="flex items-center justify-center gap-2 sm:gap-3 text-[#D4AF37] text-base sm:text-lg md:text-xl font-bold max-w-4xl mx-auto"
                variants={itemVariants}
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-center">+R$ 2,3M desperdiçados por e-commerces brasileiros só este mês</span>
              </motion.div>
            </motion.div>

            {/* Value Proposition Clara */}
            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto font-light">
                Descubra como transformar cliques em{" "}
                <span className="text-[#D4AF37] font-semibold relative">
                  lucro real
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                  />
                </span>{" "}
                com o Kit de Inteligência Estratégica que te coloca no{" "}
                <span className="text-white font-semibold">controle absoluto</span> das suas campanhas.
              </p>
              
              {/* USPs Principais - Centralizados */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap max-w-4xl mx-auto">
                <div className="flex items-center gap-2 text-gray-300">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                  <span className="text-xs sm:text-sm font-medium">Sem Desperdício</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                  <span className="text-xs sm:text-sm font-medium">ROI Garantido</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                  <span className="text-xs sm:text-sm font-medium">Escala Inteligente</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button Premium - Centralizado */}
            <motion.div
              className="flex justify-center pt-6 sm:pt-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Button 
                  size="lg" 
                  className="relative overflow-hidden text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-bold shadow-2xl shadow-[#D4AF37]/40 border-2 border-[#D4AF37]/30 rounded-2xl transition-all duration-500 backdrop-blur-sm"
                >
                  {/* Efeito de Brilho */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
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
                  
                  <span className="relative flex items-center gap-2 sm:gap-3 md:gap-4 z-10">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="tracking-wide">Quero Dominar Google Ads por R$ 47</span>
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A192F] group-hover:text-[#0A192F] transition-colors duration-300" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators Premium - Simétricos */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-8 sm:pt-10 text-xs sm:text-sm text-gray-200 max-w-4xl mx-auto"
              variants={floatingVariants}
            >
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl px-3 sm:px-4 md:px-5 py-3 sm:py-4 rounded-xl border border-white/20 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#D4AF37] flex-shrink-0" />
                <span className="font-medium whitespace-nowrap">Pagamento 100% Seguro</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl px-3 sm:px-4 md:px-5 py-3 sm:py-4 rounded-xl border border-white/20 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#D4AF37] flex-shrink-0" />
                <span className="font-medium whitespace-nowrap">Acesso Imediato e Vitalício</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl px-3 sm:px-4 md:px-5 py-3 sm:py-4 rounded-xl border border-white/20 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#D4AF37] flex-shrink-0" />
                <span className="font-medium whitespace-nowrap">Garantia Blindada 7 Dias</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator Aristocrático */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        variants={floatingVariants}
      >
        <motion.div 
          className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-[#D4AF37]/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 sm:w-1.5 sm:h-4 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-full mt-2 sm:mt-3"
            animate={{ 
              opacity: [1, 0.3, 1],
              height: ["12px", "6px", "12px"],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .shadow-glow {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }
      `}</style>
    </motion.section>
  );
} 