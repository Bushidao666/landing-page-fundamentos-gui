/**
 * @file: GPTCard.tsx
 * @responsibility: individual GPT assistant card with detailed description
 * @exports: GPTCard
 * @imports: framer-motion, lucide-react, optimized tokens, GPT data types
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { LucideIcon, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { useState } from "react";
import "../styles/optimized-tokens.css";

interface GPTCardProps {
  gpt: {
    id: number;
    name: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    color: string;
  };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  variant?: 'mobile' | 'desktop';
  animated?: boolean;
}

export default function GPTCard({
  gpt,
  index,
  isExpanded,
  onToggle,
  variant = 'mobile',
  animated = true
}: GPTCardProps) {
  const IconComponent = gpt.icon;
  const isMobile = variant === 'mobile';

  return (
    <motion.div
      className="gpt-card w-full"
      initial={animated ? { opacity: 0, y: 20 } : undefined}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      transition={animated ? { duration: 0.3, delay: index * 0.1 } : undefined}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={`
          bg-card backdrop-blur-sm border border-primary-15 rounded-lg
          ${isMobile ? 'p-4' : 'p-5'}
          shadow-card hover:shadow-card-hover transition-smooth
          cursor-pointer select-none overflow-hidden
        `}
        onClick={onToggle}
      >
        {/* Card Header - Always Visible */}
        <div className="flex items-center gap-3 mb-3">
          
          {/* Number Badge */}
          <div className={`
            flex-shrink-0 rounded-lg flex items-center justify-center font-black text-secondary
            ${isMobile ? 'w-8 h-8 text-sm' : 'w-10 h-10 text-base'}
            bg-primary shadow-card-hover relative overflow-hidden
          `}>
            {/* Background shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={animated ? { x: ["-100%", "200%"] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10">{gpt.id}</span>
          </div>

          {/* Icon */}
          <div className={`
            flex-shrink-0 rounded-lg flex items-center justify-center
            ${isMobile ? 'w-8 h-8' : 'w-10 h-10'}
            bg-gradient-to-br ${gpt.color} shadow-card
          `}>
            <IconComponent className={`
              text-white
              ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}
            `} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className={`
                text-h3 text-secondary font-bold truncate
                ${isMobile ? 'text-base' : 'text-lg'}
              `}>
                {gpt.name}
              </h4>
              <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
            </div>
            <p className={`
              text-small text-primary font-semibold
              ${isMobile ? 'text-xs' : 'text-sm'}
            `}>
              {gpt.subtitle}
            </p>
          </div>

          {/* Expand/Collapse Button */}
          <motion.div
            className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-secondary-muted"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="pt-3 border-t border-primary-15">
            <p className={`
              text-body text-secondary-muted leading-relaxed
              ${isMobile ? 'text-sm' : 'text-base'}
            `}>
              {gpt.description}
            </p>
            
            {/* Action hint */}
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-subtle">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-micro text-success font-medium">
                Disponível após o acesso
              </span>
            </div>
          </div>
        </motion.div>

        {/* Collapse Indicator */}
        {!isExpanded && (
          <div className="flex items-center justify-center mt-2 pt-2 border-t border-subtle">
            <span className="text-micro text-secondary-soft flex items-center gap-1">
              <ChevronDown className="w-3 h-3" />
              Clique para ver detalhes
              <ChevronDown className="w-3 h-3" />
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
} 