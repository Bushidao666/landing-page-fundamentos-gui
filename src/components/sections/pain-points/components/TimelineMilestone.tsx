/**
 * @file: TimelineMilestone.tsx
 * @responsibility: interactive timeline milestones with progressive intensity
 * @exports: TimelineMilestone component
 * @imports: framer-motion, animations
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";

interface TimelineMilestoneProps {
  index: number;
  severity: 'crítico' | 'extremo' | 'alto' | 'devastador';
  isVisible: boolean;
}

const severityConfig = {
  crítico: {
    bg: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-500/40',
    ring: 'ring-blue-400/30',
    size: 'w-10 h-10 sm:w-12 sm:h-12',
    pulse: { scale: [1, 1.1, 1], duration: 2 }
  },
  extremo: {
    bg: 'from-orange-500 to-orange-600',
    shadow: 'shadow-orange-500/40',
    ring: 'ring-orange-400/30',
    size: 'w-11 h-11 sm:w-13 sm:h-13',
    pulse: { scale: [1, 1.15, 1], duration: 1.8 }
  },
  alto: {
    bg: 'from-red-500 to-red-600',
    shadow: 'shadow-red-500/40',
    ring: 'ring-red-400/30',
    size: 'w-12 h-12 sm:w-14 sm:h-14',
    pulse: { scale: [1, 1.2, 1], duration: 1.6 }
  },
  devastador: {
    bg: 'from-red-600 to-red-700',
    shadow: 'shadow-red-600/50',
    ring: 'ring-red-500/40',
    size: 'w-14 h-14 sm:w-16 sm:h-16',
    pulse: { scale: [1, 1.25, 1], duration: 1.4 }
  }
} as const;

export function TimelineMilestone({ index, severity, isVisible }: TimelineMilestoneProps) {
  const config = severityConfig[severity];
  
  return (
    <motion.div
      className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-30"
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.3 + (index * 0.2),
        ease: "backOut"
      }}
    >
      {/* Anel externo pulsante */}
      <motion.div
        className={`absolute inset-0 ${config.size} bg-gradient-to-br ${config.bg} rounded-full ${config.ring} ring-4 opacity-20`}
        animate={config.pulse}
        transition={{
          duration: config.pulse.duration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Marco principal */}
      <motion.div
        className={`relative ${config.size} bg-gradient-to-br ${config.bg} rounded-full flex items-center justify-center ${config.shadow} shadow-lg border-4 border-white cursor-pointer`}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Número */}
        <span className="text-white font-bold text-sm sm:text-base md:text-lg">
          {index + 1}
        </span>
        
        {/* Efeito de brilho interno */}
        <motion.div
          className="absolute inset-2 bg-white rounded-full opacity-20"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Partículas especiais para o último card */}
      {severity === 'devastador' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${i * 120}deg) translateY(-20px)`,
                transformOrigin: 'center'
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
      
      {/* Texto de severidade (visível no hover) */}
      <motion.div
        className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
          {severity.toUpperCase()}
        </div>
      </motion.div>
    </motion.div>
  );
}