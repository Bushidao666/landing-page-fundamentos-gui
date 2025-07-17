/**
 * @file: CrackTimeline.tsx
 * @responsibility: animated crack timeline visual
 * @exports: CrackTimeline component
 * @imports: framer-motion, animations
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { crackTimelineVariants } from "../styles/animations";

interface CrackTimelineProps {
  itemCount: number;
}

export function CrackTimeline({ itemCount }: CrackTimelineProps) {
  return (
    <div className="absolute left-4 sm:left-6 md:left-8 lg:left-12 top-0 bottom-0 w-1">
      {/* Base gradient line */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-orange-400 to-red-500 opacity-20" />
      
      {/* Animated crack effect */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 10 100"
      >
        <defs>
          <linearGradient id="crackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
            <stop offset="33%" stopColor="#FB923C" stopOpacity="0.7" />
            <stop offset="66%" stopColor="#F87171" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        
        {/* Main crack path */}
        <motion.path
          d="M 5 0 L 4.5 15 L 5.5 20 L 4 30 L 6 35 L 3.5 45 L 6.5 50 L 3 60 L 7 65 L 2.5 75 L 7.5 80 L 2 90 L 8 95 L 5 100"
          fill="none"
          stroke="url(#crackGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={crackTimelineVariants.line}
        />
        
        {/* Secondary crack branches */}
        <motion.path
          d="M 4.5 15 L 2 18 M 5.5 20 L 8 23 M 4 30 L 1 33 M 6 35 L 9 38"
          fill="none"
          stroke="url(#crackGradient)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 0.5, pathLength: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        />
      </svg>
      
      {/* Milestone markers */}
      {Array.from({ length: itemCount }).map((_, index) => {
        const positions = [15, 35, 60, 85]; // Percentage positions for 4 items
        const topPosition = positions[index] || 0;
        
        return (
          <motion.div
            key={index}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${topPosition}%` }}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={crackTimelineVariants.milestone}
          >
            {/* Glow effect */}
            <div 
              className={`absolute inset-0 rounded-full blur-md ${
                index === 0 ? 'bg-blue-400' :
                index === 1 ? 'bg-orange-400' :
                index === 2 ? 'bg-red-400' :
                'bg-red-600'
              } opacity-50`}
              style={{ width: '150%', height: '150%', left: '-25%', top: '-25%' }}
            />
            
            {/* Milestone circle */}
            <div 
              className={`relative w-3 h-3 rounded-full border-2 border-white ${
                index === 0 ? 'bg-blue-500' :
                index === 1 ? 'bg-orange-500' :
                index === 2 ? 'bg-red-500' :
                'bg-red-700'
              }`}
            />
          </motion.div>
        );
      })}
      
      {/* Breaking point effect at bottom */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Shatter effect */}
          <div className="absolute -inset-4 bg-red-600 rounded-full blur-xl opacity-30 animate-pulse" />
          <div className="relative w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded-full border-2 border-white">
            {/* Crack lines radiating out */}
            <svg className="absolute -inset-2 w-10 h-10" viewBox="0 0 40 40">
              <path
                d="M20 20 L10 10 M20 20 L30 10 M20 20 L10 30 M20 20 L30 30 M20 20 L5 20 M20 20 L35 20"
                stroke="rgba(220, 38, 38, 0.4)"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}