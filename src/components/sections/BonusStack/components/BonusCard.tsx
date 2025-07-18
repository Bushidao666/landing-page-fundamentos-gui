/**
 * @file: BonusCard.tsx
 * @responsibility: premium bonus card template with unified design system + horizontal layouts
 * @exports: BonusCard
 * @imports: framer-motion, lucide-react, ReactNode, unified design system
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import "../styles/aristocratic-tokens.css";

interface BonusCardProps {
  // Header props
  badgeText: string;
  badgeVariant?: 'primary' | 'secondary' | 'tertiary';
  title: string;
  value?: string;
  icon: LucideIcon;
  iconVariant?: 'primary' | 'secondary' | 'tertiary';
  
  // Content props
  children: ReactNode;
  
  // Layout props - NOVO
  layout?: 'default' | 'horizontal-left' | 'horizontal-right';
  imageContent?: ReactNode; // Conteúdo da imagem/mockup
  
  // Animation props
  index?: number;
  
  // Style props
  className?: string;
  
  // Badge floating icon
  floatingIcon?: LucideIcon;
}

// Optimized animation variants - cleaner and faster
const bonusVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

export default function BonusCard({
  badgeText,
  badgeVariant = 'primary',
  title,
  value,
  icon: Icon,
  iconVariant = 'primary',
  children,
  layout = 'default',
  imageContent,
  index = 0,
  className = "",
  floatingIcon: FloatingIcon
}: BonusCardProps) {
  
  const isHorizontal = layout !== 'default';
  const isImageLeft = layout === 'horizontal-left';
  const isImageRight = layout === 'horizontal-right';

  // Layout padrão (vertical) - mantém comportamento original
  if (!isHorizontal) {
    return (
      <motion.div
        className={`relative group h-full ${className}`}
        custom={index}
        variants={bonusVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.article 
          className="bonus-card group h-full flex flex-col"
          whileHover={{ 
            y: -4,
            transition: { duration: 0.2 }
          }}
          role="article"
          tabIndex={0}
        >
          {/* Header do Bônus Premium */}
          <header className="bonus-card-header flex-shrink-0">
            {/* Icon Premium */}
            <motion.div 
              className="bonus-card-icon"
              whileHover={{ 
                scale: 1.05,
                rotate: 3,
                transition: { duration: 0.2 }
              }}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-white" />
            </motion.div>
            
            {/* Content Area com Typography Unificada */}
            <div className="bonus-card-content">
              {/* Badge Premium */}
              <motion.span 
                className="bonus-badge"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {badgeText}
              </motion.span>
              
              {/* Title Premium */}
              <motion.h3 
                className="bonus-card-title group-hover:text-[#D4AF37] transition-colors duration-300 text-lg md:text-xl lg:text-2xl xl:text-lg xl:leading-tight 2xl:text-xl"
                initial={{ opacity: 0.95 }}
                whileHover={{ opacity: 1 }}
              >
                {title}
              </motion.h3>
              
              {/* Value Premium */}
              {value && (
                <motion.div 
                  className="flex items-center gap-2 md:gap-3"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span 
                    className="bonus-card-value text-sm md:text-base lg:text-lg xl:text-sm 2xl:text-base"
                    whileHover={{ scale: 1.01 }}
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(212, 175, 55, 0.1)",
                        "0 0 8px rgba(212, 175, 55, 0.3)",
                        "0 0 0px rgba(212, 175, 55, 0.1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {value}
                  </motion.span>
                </motion.div>
              )}
            </div>
          </header>

          {/* Content Area - Flex grow para ocupar espaço disponível */}
          <div className="relative z-10 flex-grow">
            {children}
          </div>

          {/* Floating Badge Premium */}
          {FloatingIcon && (
            <motion.div
              className="bonus-floating-badge"
              whileHover={{
                scale: 1.08,
                rotate: 8,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              role="button"
              aria-label="Badge de destaque"
              tabIndex={0}
            >
              {/* Pulse effect premium */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#D4AF37] border-opacity-40"
                animate={{
                  scale: [1, 1.3],
                  opacity: [0.6, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              
              {/* Inner highlight premium */}
              <motion.div
                className="absolute inset-1 bg-gradient-to-br from-white/25 to-transparent rounded-full"
                animate={{ opacity: [0.25, 0.5, 0.25] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.div
                animate={{ 
                  rotate: [0, -6, 6, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 1.5 
                }}
              >
                <FloatingIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-[#0A192F] drop-shadow-sm relative z-10" />
              </motion.div>
            </motion.div>
          )}
        </motion.article>
      </motion.div>
    );
  }

  // Layout horizontal - NOVO
  return (
    <motion.div
      className={`relative group ${className}`}
      custom={index}
      variants={bonusVariants}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.article 
        className="bonus-card group"
        whileHover={{ 
          y: -2,
          transition: { duration: 0.2 }
        }}
        role="article"
        tabIndex={0}
      >
        {/* Layout Horizontal Responsivo */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-16 2xl:gap-20">
          
          {/* Coluna de Conteúdo */}
          <div className={`${isImageLeft ? 'lg:order-2' : 'lg:order-1'} ${layout === 'horizontal-right' ? 'flex-1 lg:w-[60%]' : 'flex-1'}`}>
            
            {/* Header do Bônus Premium */}
            <header className="bonus-card-header flex-shrink-0">
              {/* Icon Premium */}
              <motion.div 
                className="bonus-card-icon"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 3,
                  transition: { duration: 0.2 }
                }}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
              </motion.div>
              
              {/* Content Area com Typography Unificada */}
              <div className="bonus-card-content">
                {/* Badge Premium */}
                <motion.span 
                  className="bonus-badge"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {badgeText}
                </motion.span>
                
                {/* Title Premium */}
                <motion.h3 
                  className="bonus-card-title group-hover:text-[#D4AF37] transition-colors duration-300"
                  initial={{ opacity: 0.95 }}
                  whileHover={{ opacity: 1 }}
                >
                  {title}
                </motion.h3>
                
                {/* Value Premium */}
                {value && (
                  <motion.div 
                    className="flex items-center gap-2 md:gap-3"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.span 
                      className="bonus-card-value"
                      whileHover={{ scale: 1.01 }}
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(212, 175, 55, 0.1)",
                          "0 0 8px rgba(212, 175, 55, 0.3)",
                          "0 0 0px rgba(212, 175, 55, 0.1)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {value}
                    </motion.span>
                  </motion.div>
                )}
              </div>
            </header>

            {/* Content Area */}
            <div className="relative z-10">
              {children}
            </div>
          </div>

          {/* Coluna de Imagem/Mockup */}
          {imageContent && (
            <div className={`flex-shrink-0 ${layout === 'horizontal-right' ? 'lg:w-[40%]' : 'lg:w-96 xl:w-[480px]'} ${isImageLeft ? 'lg:order-1' : 'lg:order-2'} mt-6 lg:mt-0`}>
              {imageContent}
            </div>
          )}
        </div>

        {/* Floating Badge Premium */}
        {FloatingIcon && (
          <motion.div
            className="bonus-floating-badge"
            whileHover={{
              scale: 1.08,
              rotate: 8,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            role="button"
            aria-label="Badge de destaque"
            tabIndex={0}
          >
            {/* Pulse effect premium */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#D4AF37] border-opacity-40"
              animate={{
                scale: [1, 1.3],
                opacity: [0.6, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            
            {/* Inner highlight premium */}
            <motion.div
              className="absolute inset-1 bg-gradient-to-br from-white/25 to-transparent rounded-full"
              animate={{ opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.div
              animate={{ 
                rotate: [0, -6, 6, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 1.5 
              }}
            >
              <FloatingIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#0A192F] drop-shadow-sm relative z-10" />
            </motion.div>
          </motion.div>
        )}
      </motion.article>
    </motion.div>
  );
} 