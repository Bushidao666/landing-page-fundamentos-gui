"use client";

import { motion } from "framer-motion";
import { Target, Crown, Zap, Sparkles, LucideIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface ValueItem {
  name: string;
  value: number;
  icon: LucideIcon;
  gradient: string;
  description: string;
  highlight?: string;
}

// Optimized data structure with better gradients
const valueItems: ValueItem[] = [
  {
    name: "Curso Fundamentos Google Ads",
    value: 197,
    icon: Target,
    gradient: "from-blue-500 via-blue-600 to-purple-600",
    description: "Base completa para dominar Google Ads"
  },
  {
    name: "Acesso Vitalício à Comunidade",
    value: 497,
    icon: Crown,
    gradient: "from-[#D4AF37] via-[#FFD700] to-[#F59E0B]",
    description: "Suporte premium para sempre",
    highlight: "VITALÍCIO"
  },
  {
    name: "Passaporte Aceleração",
    value: 97,
    icon: Zap,
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    description: "9 aulas + 9 ferramentas práticas"
  },
  {
    name: "7 Assistentes de IA Exclusivos",
    value: 297,
    icon: Sparkles,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    description: "Seu exército de inteligência artificial"
  },
];

// Enhanced animated counter with formatted output
const AnimatedPrice = ({ 
  target, 
  delay = 0,
  duration = 1500 
}: { 
  target: number; 
  delay?: number;
  duration?: number;
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  const countRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(target * easeOutQuart);
        
        countRef.current = currentValue;
        setDisplayValue(currentValue.toLocaleString('pt-BR'));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [target, delay, duration]);

  return <span>{displayValue}</span>;
};

interface ValueBreakdownOptimizedProps {
  onTotalCalculated?: (total: number) => void;
}

export default function ValueBreakdownOptimized({ 
  onTotalCalculated 
}: ValueBreakdownOptimizedProps) {
  const totalValue = valueItems.reduce((sum, item) => sum + item.value, 0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    onTotalCalculated?.(totalValue);
  }, [totalValue, onTotalCalculated]);

  return (
    <div className="space-y-3 sm:space-y-4 lg:space-y-5">
      {valueItems.map((item, index) => (
        <motion.article
          key={index}
          className="relative group"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            delay: index * 0.1, 
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          {/* Card container with optimized styling */}
          <motion.div
            className="relative overflow-hidden
                       bg-white/[0.02] backdrop-blur-sm
                       border border-white/[0.08]
                       rounded-xl sm:rounded-2xl lg:rounded-3xl
                       transition-all duration-300"
            whileHover={{ 
              x: 6,
              borderColor: "rgba(212, 175, 55, 0.2)",
            }}
          >
            {/* Hover gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100
                         bg-gradient-to-r from-[#D4AF37]/[0.03] to-transparent
                         transition-opacity duration-500"
            />

            {/* Main content container */}
            <div className="relative flex items-center gap-3 sm:gap-4 lg:gap-5
                            p-4 sm:p-5 lg:p-6">
              
              {/* Icon container - Responsive and animated */}
              <motion.div 
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Icon background with gradient */}
                <div className={`relative w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18
                                bg-gradient-to-br ${item.gradient}
                                rounded-2xl sm:rounded-3xl
                                flex items-center justify-center
                                shadow-lg group-hover:shadow-xl
                                transition-all duration-300`}>
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl
                                  bg-gradient-to-br ${item.gradient}
                                  opacity-0 group-hover:opacity-50
                                  blur-xl transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <item.icon className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 
                                       text-white z-10" />
                </div>

                {/* Badge number */}
                <div className="absolute -top-1 -right-1 
                                w-6 h-6 sm:w-7 sm:h-7
                                bg-[#0A192F] border-2 border-[#D4AF37]/30
                                rounded-full flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-bold text-[#D4AF37]">
                    {index + 1}
                  </span>
                </div>
              </motion.div>
              
              {/* Content section - Flexible layout */}
              <div className="flex-1 min-w-0 space-y-1">
                {/* Title with highlight badge */}
                <div className="flex items-start gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold 
                                 text-white/90 group-hover:text-white
                                 transition-colors duration-300
                                 leading-tight">
                    {item.name}
                  </h3>
                  
                  {item.highlight && (
                    <motion.span 
                      className="inline-flex items-center px-2.5 py-0.5 
                                 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20
                                 border border-[#D4AF37]/30
                                 text-[#D4AF37] text-[10px] sm:text-xs 
                                 font-bold uppercase tracking-wider
                                 rounded-full shadow-sm"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(212, 175, 55, 0)",
                          "0 0 0 4px rgba(212, 175, 55, 0.1)",
                          "0 0 0 0 rgba(212, 175, 55, 0)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      {item.highlight}
                    </motion.span>
                  )}
                </div>
                
                {/* Description with better typography */}
                <p className="text-sm sm:text-base text-gray-400 
                              group-hover:text-gray-300
                              transition-colors duration-300
                              leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Price section - Enhanced design */}
              <div className="text-right flex-shrink-0 space-y-1">
                {/* Price with animation */}
                <div className="relative">
                  <motion.div 
                    className="text-2xl sm:text-3xl lg:text-4xl 
                               font-black text-[#D4AF37]
                               tabular-nums"
                    animate={hoveredIndex === index ? {
                      scale: [1, 1.05, 1],
                    } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-lg sm:text-xl lg:text-2xl">R$</span>
                    {" "}
                    <AnimatedPrice 
                      target={item.value} 
                      delay={300 + index * 150}
                      duration={1200}
                    />
                  </motion.div>
                </div>
                
                {/* Value label */}
                <div className="text-[11px] sm:text-xs text-gray-500 
                                uppercase tracking-wider font-medium">
                  Valor Real
                </div>
              </div>
            </div>

            {/* Progress indicator at bottom */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] 
                         bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                delay: 0.5 + index * 0.15, 
                duration: 0.8,
                ease: "easeOut"
              }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        </motion.article>
      ))}
    </div>
  );
}