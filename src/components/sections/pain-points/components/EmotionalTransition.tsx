/**
 * @file: EmotionalTransition.tsx
 * @responsibility: Transição visual entre pain points e transformação
 * @exports: EmotionalTransition
 * @imports: React, motion
 * @layer: components
 */

import React from 'react';
import { motion } from 'framer-motion';

export const EmotionalTransition: React.FC = () => {
  return (
    <div className="emotional-transition">
      <div className="transition-container">
        <motion.div 
          className="crack-pattern"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path 
              d="M0,50 L100,30 L200,60 L300,40 L400,55 L500,35 L600,50 L700,45 L800,60 L900,40 L1000,55 L1100,30 L1200,50" 
              fill="none" 
              stroke="url(#crackGradient)" 
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="crackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#F97316" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        <motion.p 
          className="transition-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Mas existe uma saída...
        </motion.p>
      </div>
    </div>
  );
};