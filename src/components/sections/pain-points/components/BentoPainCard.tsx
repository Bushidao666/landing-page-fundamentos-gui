/**
 * @file: BentoPainCard.tsx
 * @responsibility: Card individual de pain point com variações de tamanho
 * @exports: BentoPainCard
 * @imports: React, motion
 * @layer: components
 */

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface BentoPainCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  severity: 'alto' | 'extremo' | 'crítico' | 'devastador';
  size: 'tall' | 'wide' | 'square';
  index: number;
}

export const BentoPainCard: React.FC<BentoPainCardProps> = ({
  icon,
  title,
  description,
  severity,
  size,
  index
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const hoverVariants = {
    rest: {
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={`bento-pain-card glassmorphism ${size} ${severity}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
    >
      <motion.div 
        className="card-content"
        variants={hoverVariants}
      >
        <div className="card-header">
          <div className="icon-wrapper">
            <div className="icon-3d">
              {React.createElement(icon, { size: 24 })}
            </div>
            <div className="icon-shadow" />
          </div>
          <span className={`severity-badge ${severity}`}>
            {severity === 'crítico' ? 'CRÍTICO' : 
             severity === 'extremo' ? 'EXTREMO' : 
             severity === 'devastador' ? 'DEVASTADOR' : 'ALTO'}
          </span>
        </div>
        
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="card-glow" />
        <div className="card-border-glow" />
      </motion.div>
    </motion.div>
  );
};