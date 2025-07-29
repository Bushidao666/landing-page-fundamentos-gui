/**
 * @file: FinalCTA.tsx
 * @responsibility: premium final CTA with urgency and elegant styling
 * @exports: FinalCTA
 * @imports: framer-motion, lucide-react, bonusData, unified tokens
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, ArrowRight, Clock, Users } from "lucide-react";
import { bonusMetrics } from "../data/bonusData";
import "../styles/aristocratic-tokens.css";

interface FinalCTAProps {
  className?: string;
}

// Simplified animations for better performance
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function FinalCTA({ className = "" }: FinalCTAProps) {
  const handleScrollToSocialProof = () => {
    document.getElementById("social-proof")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <motion.div 
      className={`text-center max-w-5xl mx-auto bonus-spacing-xl ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Summary Premium */}
      <motion.div 
        className="bg-gradient-to-br from-[rgba(10,25,47,0.95)] via-[rgba(10,25,47,0.98)] to-[rgba(10,25,47,0.95)] backdrop-blur-xl rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-lg bonus-spacing-lg relative overflow-hidden"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.005,
          borderColor: "rgba(212, 175, 55, 0.4)",
          y: -2
        }}
      >
        {/* Background shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent -skew-x-12"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut"
          }}
        />
        
        {/* Badge Premium */}
        <motion.div
          className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#D4AF37]/20 via-[#FFD700]/15 to-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md bonus-spacing-md relative z-10"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            backgroundColor: "rgba(212, 175, 55, 0.15)"
          }}
        >
          <Award className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
          <span className="text-[#D4AF37] font-bold text-xs md:text-sm uppercase tracking-wider">
            Recapitulando o Que Você Leva
          </span>
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
        </motion.div>

        {/* Value Summary Premium */}
        <motion.div className="bonus-spacing-lg relative z-10" variants={itemVariants}>
          <motion.h3 
            className="bonus-heading-tertiary font-serif bonus-spacing-sm"
            animate={{
              textShadow: [
                "0 0 0px rgba(255, 255, 255, 0)",
                "0 0 12px rgba(255, 255, 255, 0.3)",
                "0 0 0px rgba(255, 255, 255, 0)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Um arsenal completo de <span className="text-[#D4AF37]">R$ {bonusMetrics.totalValue.toLocaleString('pt-BR')}</span>
          </motion.h3>
          
          <motion.p 
            className="bonus-text-large bonus-spacing-md"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            3 super bônus que vão{" "}
            <span className="text-white font-bold">acelerar seus resultados</span>{" "}
            e te dar{" "}
            <span className="text-[#D4AF37] font-bold">vantagem competitiva</span>{" "}
            no mercado.
          </motion.p>
        </motion.div>

        {/* Features Grid Premium */}
        <motion.div 
          className="grid md:grid-cols-3 gap-4 md:gap-6 bonus-spacing-lg relative z-10"
          variants={itemVariants}
        >
          {[
            {
              icon: Users,
              title: "Comunidade Vitalícia",
              value: `R$ ${bonusMetrics.communityValue}/ano`,
              description: "Acesso para sempre ao networking de elite"
            },
            {
              icon: Sparkles,
              title: "Passaporte Aceleração",
              value: `R$ ${bonusMetrics.passportValue}`,
              description: "18 ferramentas para resultados imediatos"
            },
            {
              icon: Award,
              title: "7 Assistentes IA",
              value: `R$ ${bonusMetrics.gptsValue}`,
              description: "Seu exército pessoal de consultores AI"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[rgba(10,25,47,0.8)] via-[rgba(10,25,47,0.9)] to-[rgba(10,25,47,0.8)] backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 group"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -4,
                backgroundColor: "rgba(10, 25, 47, 0.95)",
                borderColor: "rgba(212, 175, 55, 0.3)"
              }}
            >
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center bonus-spacing-sm group-hover:scale-105 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#0A192F]" />
              </motion.div>
              
              <h4 className="text-sm md:text-base font-bold text-white bonus-spacing-xs group-hover:text-[#D4AF37] transition-colors duration-300">
                {feature.title}
              </h4>
              
              <p className="text-xs md:text-sm text-[#D4AF37] font-bold bonus-spacing-xs">
                {feature.value}
              </p>
              
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>


      {/* Final Button Premium */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <button 
          onClick={handleScrollToSocialProof}
          className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-black text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-10 lg:px-14 py-3 sm:py-4 md:py-5 lg:py-7 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#D4AF37]/30 max-w-full"
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
          
          <span className="relative flex items-center gap-3 z-10">
            <Sparkles className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden sm:inline">Ver Quem Já Está Tendo Resultados</span>
            <span className="sm:hidden">Ver Resultados</span>
            <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </button>
      </motion.div>

      {/* Trust Indicators Premium */}
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10 lg:mt-12"
        variants={itemVariants}
      >
        {[
          { icon: Award, text: "13+ Anos de Experiência" },
          { icon: Users, text: "300+ Cases de Sucesso" },
          { icon: Sparkles, text: "Parceiro Oficial Google" }
        ].map((indicator, index) => (
          <motion.div 
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          >
            <indicator.icon className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
            <span className="text-xs md:text-sm text-gray-700 font-medium">{indicator.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
} 