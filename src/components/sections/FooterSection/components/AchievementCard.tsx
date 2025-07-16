/**
 * @file: AchievementCard.tsx
 * @responsibility: achievement metric card component
 * @exports: AchievementCard
 * @imports: motion, Achievement type, MotionWrapper
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import type { Achievement } from "../data/achievements";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export function AchievementCard({ achievement, index }: AchievementCardProps) {
  return (
    <motion.div
      className="group"
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      whileInView={{ 
        y: 0, 
        opacity: 1, 
        scale: 1,
        transition: {
          delay: 0.1 + index * 0.1,
          duration: 0.6,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <MotionWrapper
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <div className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl 
          rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 
          border border-gray-200/50 hover:border-[#D4AF37]/40 
          transition-all duration-300 text-center 
          group-hover:shadow-lg group-hover:shadow-[#D4AF37]/10 
          shadow-md h-full flex flex-col items-center justify-center">
          
          {/* Icon */}
          <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
            bg-gradient-to-br ${achievement.color} 
            rounded-xl sm:rounded-2xl flex items-center justify-center 
            shadow-md mb-3 sm:mb-4 
            group-hover:scale-105 transition-transform duration-300`}>
            <achievement.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
          </div>
          
          {/* Number */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#D4AF37] mb-1 sm:mb-2">
            {achievement.number}
          </div>
          
          {/* Label */}
          <div className="text-sm sm:text-base md:text-lg font-bold text-[#0A192F] mb-0.5 sm:mb-1">
            {achievement.label}
          </div>
          
          {/* Subtext */}
          <div className="text-xs sm:text-sm text-gray-600">
            {achievement.subtext}
          </div>
        </div>
      </MotionWrapper>
    </motion.div>
  );
}