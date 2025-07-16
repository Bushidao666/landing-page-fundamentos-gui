/**
 * @file: PainPointCard.tsx
 * @responsibility: individual pain point card component
 * @exports: PainPointCard component
 * @imports: framer-motion, data types, animations, responsive
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { PainPoint } from "../data/painPointsData";
import { cascadeVariants, hoverVariants } from "../styles/animations";
import { typography, spacing, icons } from "../styles/responsive";

interface PainPointCardProps {
  painPoint: PainPoint;
  index: number;
}

const severityColors = {
  crítico: 'bg-red-500/10 text-red-600 border-red-400/20',
  extremo: 'bg-red-600/10 text-red-700 border-red-500/20',
  alto: 'bg-orange-500/10 text-orange-600 border-orange-400/20',
  devastador: 'bg-red-700/10 text-red-800 border-red-600/20'
} as const;

export function PainPointCard({ painPoint, index }: PainPointCardProps) {
  const Icon = painPoint.icon;
  const severityClass = severityColors[painPoint.severity];

  return (
    <motion.div
      className="relative"
      custom={index}
      variants={cascadeVariants}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Card Principal Dramático */}
      <motion.div 
        className={`relative ml-8 sm:ml-12 md:ml-16 lg:ml-20 ${index % 2 === 1 ? 'md:mr-8 lg:mr-16' : ''} group`}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={hoverVariants.card}
      >
        {/* Background do Card com efeito de quebra */}
        <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 backdrop-blur-2xl border border-gray-200 group-hover:border-[#D4AF37]/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl group-hover:shadow-[#D4AF37]/20 transition-all duration-500 overflow-hidden">
          
          {/* Efeito de rachadura no hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(239, 68, 68, 0.1) 45%, rgba(239, 68, 68, 0.1) 55%, transparent 60%)`,
            }}
          />

          <div className="relative z-10">
            {/* Cabeçalho do Card */}
            <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
              {/* Ícone Dramático */}
              <motion.div 
                className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-[#D4AF37]/40 transition-all duration-300"
                variants={hoverVariants.icon}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#0A192F]" />
              </motion.div>

              {/* Conteúdo Principal */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className={`px-2 sm:px-3 py-1 ${severityClass} text-xs font-bold uppercase tracking-wider rounded-full border`}>
                    {painPoint.severity}
                  </span>
                  <span className="text-[#D4AF37] text-xs sm:text-sm font-medium">
                    {painPoint.impact}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A192F] mb-3 sm:mb-4 md:mb-6 group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
                  {painPoint.title}
                </h3>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  {painPoint.description}
                </p>
              </div>
            </div>
          </div>

          {/* Número do Card */}
          <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 backdrop-blur rounded-full flex items-center justify-center border border-[#D4AF37]/30">
            <span className="text-sm sm:text-base md:text-lg font-bold text-[#D4AF37]">
              {index + 1}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Conector circular */}
      <motion.div
        className="absolute left-3 sm:left-5 md:left-7 lg:left-11 top-4 sm:top-5 md:top-6 lg:top-8 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-[#D4AF37] to-red-400 rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg"
        variants={hoverVariants.connector}
        style={{
          boxShadow: `0 0 15px rgba(212, 175, 55, 0.4)`,
        }}
      />
    </motion.div>
  );
}