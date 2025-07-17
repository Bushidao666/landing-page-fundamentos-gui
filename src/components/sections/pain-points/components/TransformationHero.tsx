/**
 * @file: TransformationHero.tsx
 * @responsibility: CTA dramático para solução com destaque premium
 * @exports: TransformationHero
 * @imports: React, motion
 * @layer: components
 */

import React from 'react';
import { motion } from 'framer-motion';

export const TransformationHero: React.FC = () => {
  return (
    <motion.div 
      className="transformation-hero"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="transformation-container">
        <div className="golden-card glassmorphism">
          <div className="shimmer-effect" />
          
          <div className="content-wrapper">
            <span className="transformation-badge">
              A SOLUÇÃO
            </span>
            
            <h2 className="transformation-title">
              Chega. O problema não é você. <span className="highlight">É a falta do ALICERCE.</span>
            </h2>
            
            <p className="transformation-description">
              Tentar otimizar campanhas sem entender os <strong>FUNDAMENTOS</strong> é como tentar construir uma casa começando pelo telhado. 
              Não se sustenta. Você fica refém de "hacks" que param de funcionar e de um algoritmo que parece ter vida própria.
            </p>
            
            <div className="transformation-emphasis">
              <p className="emphasis-text">
                É hora de parar de ser um "operador de painel" e se tornar o <strong>ARQUITETO DO SEU PRÓPRIO LUCRO.</strong>
              </p>
            </div>
            
            <motion.button 
              className="transformation-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quero Dominar os Fundamentos
              <span className="cta-arrow">→</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};