/**
 * @file: StatisticsHero.tsx
 * @responsibility: enhanced statistics display with maximum visual impact
 * @exports: StatisticsHero component
 * @imports: framer-motion, data, animated counter, animations
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, Clock } from "lucide-react";
import { statisticsData } from "../data/painPointsData";
import { AnimatedCounter } from "./AnimatedCounter";
import { statisticsHeroVariants, pulseVariants } from "../styles/animations";

const statisticsIcons = {
  red: TrendingDown,
  gold: AlertTriangle,
  orange: Clock
} as const;

const colorClasses = {
  red: {
    background: 'from-red-500/20 via-red-600/10 to-transparent',
    border: 'border-red-500/30',
    text: 'text-red-600',
    glow: 'shadow-red-500/20',
    icon: 'from-red-500 to-red-600'
  },
  gold: {
    background: 'from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent',
    border: 'border-[#D4AF37]/30',
    text: 'text-[#D4AF37]',
    glow: 'shadow-[#D4AF37]/20',
    icon: 'from-[#D4AF37] to-[#B8941F]'
  },
  orange: {
    background: 'from-orange-500/20 via-orange-600/10 to-transparent',
    border: 'border-orange-500/30',
    text: 'text-orange-600',
    glow: 'shadow-orange-500/20',
    icon: 'from-orange-500 to-orange-600'
  }
} as const;

export function StatisticsHero() {
  return (
    <motion.div 
      className="relative w-full max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20"
      variants={statisticsHeroVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-orange-50/50 blur-3xl -z-10" />
      
      {/* Desktop Layout - Alinhado e Compacto */}
      <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
        {statisticsData.map((stat, index) => {
          const colorClass = colorClasses[stat.color];
          const Icon = statisticsIcons[stat.color];
          
          return (
            <motion.div
              key={index}
              className="relative group"
              variants={statisticsHeroVariants.item}
            >
              <motion.div
                className={`relative bg-gradient-to-br ${colorClass.background} backdrop-blur-sm border ${colorClass.border} rounded-2xl p-4 lg:p-5 shadow-lg ${colorClass.glow} overflow-hidden min-h-[140px] lg:min-h-[160px] flex flex-col`}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon with solid background */}
                <motion.div 
                  className={`w-8 h-8 lg:w-10 lg:h-10 mb-3 relative bg-gradient-to-br ${colorClass.icon} rounded-lg flex items-center justify-center shadow-sm`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </motion.div>
                
                {/* Number compacto */}
                <div className={`${colorClass.text} mb-2 flex-shrink-0`}>
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-black leading-none">
                    <AnimatedCounter 
                      target={stat.value} 
                      prefix={stat.suffix === '' ? 'R$ ' : ''} 
                      suffix={stat.suffix}
                      duration={1500}
                    />
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-xs lg:text-sm text-gray-700 font-medium leading-tight mt-auto">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Mobile Layout - Compacto e Alinhado */}
      <div className="md:hidden space-y-3 sm:space-y-4 max-w-sm mx-auto">
        {statisticsData.map((stat, index) => {
          const colorClass = colorClasses[stat.color];
          const Icon = statisticsIcons[stat.color];
          
          return (
            <motion.div
              key={index}
              className="relative group"
              variants={statisticsHeroVariants.item}
            >
              <motion.div
                className={`relative bg-gradient-to-br ${colorClass.background} backdrop-blur-sm border ${colorClass.border} rounded-xl p-3 sm:p-4 shadow-md ${colorClass.glow}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <motion.div 
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 bg-gradient-to-br ${colorClass.icon} rounded-lg flex items-center justify-center shadow-sm`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`text-xl sm:text-2xl font-black ${colorClass.text} leading-none mb-1`}>
                      <AnimatedCounter 
                        target={stat.value} 
                        prefix={stat.suffix === '' ? 'R$ ' : ''} 
                        suffix={stat.suffix}
                        duration={1500}
                      />
                    </div>
                    <p className="text-xs text-gray-700 font-medium">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Crisis Declaration */}
      <motion.div 
        className="mt-6 sm:mt-8 text-center"
        variants={statisticsHeroVariants.declaration}
      >
        <p className="text-sm sm:text-base text-gray-600 font-medium max-w-md mx-auto">
          Estes números revelam uma{" "}
          <span className="text-red-600 font-bold">crise silenciosa</span>{" "}
          no e-commerce brasileiro
        </p>
      </motion.div>
    </motion.div>
  );
}