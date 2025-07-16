/**
 * @file: SectionHeader.tsx
 * @responsibility: section header with badge, title, and statistics
 * @exports: SectionHeader component
 * @imports: framer-motion, icons, data, animations, responsive
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Target, BarChart3 } from "lucide-react";
import { statisticsData } from "../data/painPointsData";
import { AnimatedCounter } from "./AnimatedCounter";
import { itemVariants, containerVariants, statisticsVariants } from "../styles/animations";
import { layout, typography, spacing } from "../styles/responsive";

const colorClasses = {
  red: {
    background: 'bg-gradient-to-br from-red-500/10 to-red-600/5',
    border: 'border-red-400/20',
    text: 'text-red-600'
  },
  gold: {
    background: 'bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5',
    border: 'border-[#D4AF37]/20',
    text: 'text-[#D4AF37]'
  },
  orange: {
    background: 'bg-gradient-to-br from-orange-500/10 to-orange-600/5',
    border: 'border-orange-400/20',
    text: 'text-orange-600'
  }
} as const;

export function SectionHeader() {
  return (
    <motion.div 
      className="text-center max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20"
      variants={itemVariants}
    >
      {/* Badge Premium */}
      <motion.div
        className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37]/20 to-[#D4AF37]/30 backdrop-blur-2xl border border-[#D4AF37]/50 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-2xl mb-6 sm:mb-8 md:mb-12"
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
        <span className="text-[#D4AF37] font-bold text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em]">
          A Realidade dos Anunciantes
        </span>
        <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
      </motion.div>

      {/* Headline Dramática */}
      <motion.div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 md:mb-12" variants={itemVariants}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-black leading-[0.9] sm:leading-[0.85] tracking-tight text-[#0A192F]">
          <span className="block text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-2 sm:mb-3 md:mb-4">
            Sejamos honestos: gerenciar Google Ads
          </span>
          <span className="block text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-3 sm:mb-4 md:mb-6">
            para seu e-commerce parece mais um
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
            campo minado
          </motion.span>
          <span className="block text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-2 sm:mt-3 md:mt-4">
            do que um caminho para o lucro?
          </span>
        </h2>
      </motion.div>

      {/* Estatísticas Dramáticas */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12"
        variants={containerVariants}
      >
        {statisticsData.map((stat, index) => {
          const colorClass = colorClasses[stat.color];
          return (
            <motion.div 
              key={index}
              className={`${colorClass.background} backdrop-blur-xl border ${colorClass.border} rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg ${stat.color === 'orange' ? 'sm:col-span-2 md:col-span-1' : ''}`}
              variants={statisticsVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`text-2xl sm:text-3xl font-black ${colorClass.text} mb-1 sm:mb-2`}>
                <AnimatedCounter 
                  target={stat.value} 
                  prefix={stat.suffix === '' ? 'R$ ' : ''} 
                  suffix={stat.suffix} 
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Texto de Conexão */}
      <motion.p
        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto font-light"
        variants={itemVariants}
      >
        Se você se sente assim, saiba que você está no lugar certo. Eu converso com donos de e-commerce como você todos os dias.{" "}
        <span className="text-[#0A192F] font-semibold">A história é sempre a mesma...</span>
      </motion.p>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
}