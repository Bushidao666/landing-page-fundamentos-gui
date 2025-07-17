/**
 * @file: TimelineConnector.tsx
 * @responsibility: bidirectional connectors linking cards to timeline
 * @exports: TimelineConnector component
 * @imports: framer-motion, animations
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";

interface TimelineConnectorProps {
  isLeft: boolean;
  index: number;
  severity: 'crítico' | 'extremo' | 'alto' | 'devastador';
}

const severityColors = {
  crítico: { 
    stroke: '#60A5FA', // blue-400
    glow: 'drop-shadow(0 0 4px rgba(96, 165, 250, 0.4))'
  },
  extremo: { 
    stroke: '#FB923C', // orange-400
    glow: 'drop-shadow(0 0 4px rgba(251, 146, 60, 0.4))'
  },
  alto: { 
    stroke: '#F87171', // red-400
    glow: 'drop-shadow(0 0 4px rgba(248, 113, 113, 0.4))'
  },
  devastador: { 
    stroke: '#DC2626', // red-600
    glow: 'drop-shadow(0 0 6px rgba(220, 38, 38, 0.6))'
  }
} as const;

const connectorVariants = {
  hidden: { 
    pathLength: 0, 
    opacity: 0 
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5 + (0.2 * 0), // Will be set dynamically
      ease: "easeOut"
    }
  }
};

export function TimelineConnector({ isLeft, index, severity }: TimelineConnectorProps) {
  const colorConfig = severityColors[severity];
  
  return (
    <div className={`absolute top-1/2 transform -translate-y-1/2 z-20 ${
      isLeft 
        ? 'right-0 translate-x-full' 
        : 'left-0 -translate-x-full'
    }`}>
      {/* Desktop Connector - Formato em L */}
      <div className="hidden md:block">
        <svg 
          width={isLeft ? "32" : "32"} 
          height="32" 
          viewBox="0 0 32 32"
          className="overflow-visible"
          style={{ filter: colorConfig.glow }}
        >
          <defs>
            <linearGradient 
              id={`connector-gradient-${index}`} 
              x1="0%" y1="0%" x2="100%" y2="0%"
            >
              <stop offset="0%" stopColor={colorConfig.stroke} stopOpacity="0.8" />
              <stop offset="100%" stopColor={colorConfig.stroke} stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          <motion.path
            d={isLeft ? "M0 16 L20 16 L20 8" : "M32 16 L12 16 L12 8"}
            stroke={`url(#connector-gradient-${index})`}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={connectorVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.8 + (index * 0.2),
              ease: "easeOut"
            }}
          />
          
          {/* Ponto de conexão */}
          <motion.circle
            cx={isLeft ? "20" : "12"}
            cy="8"
            r="3"
            fill={colorConfig.stroke}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 1.2 + (index * 0.2),
              ease: "backOut"
            }}
          />
        </svg>
      </div>
      
      {/* Mobile Connector - Linha simples */}
      <div className="md:hidden">
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16"
          className="overflow-visible"
        >
          <motion.line
            x1="8" y1="8" x2="8" y2="0"
            stroke={colorConfig.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            variants={connectorVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.6,
              delay: 0.6 + (index * 0.15),
              ease: "easeOut"
            }}
          />
          
          <motion.circle
            cx="8"
            cy="0"
            r="2"
            fill={colorConfig.stroke}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 1.0 + (index * 0.15),
              ease: "backOut"
            }}
          />
        </svg>
      </div>
      
      {/* Efeito de brilho ocasional */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 3,
          delay: 2 + (index * 0.5),
          repeat: Infinity,
          repeatDelay: 5
        }}
      >
        <div 
          className="w-full h-full rounded-full blur-sm"
          style={{ 
            background: colorConfig.stroke,
            filter: 'blur(4px)'
          }}
        />
      </motion.div>
    </div>
  );
}