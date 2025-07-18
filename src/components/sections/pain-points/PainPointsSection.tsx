/**
 * @file: PainPointsSection.tsx
 * @responsibility: Container principal da seção de pain points refatorada
 * @exports: PainPointsSection
 * @imports: React, HeroStatisticsGrid, PainPointBentoGrid, EmotionalTransition, TransformationHero
 * @layer: components
 */

"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target } from "lucide-react";
import { PainPointBentoGrid } from './components/PainPointBentoGrid';
import './styles/pain-points-v2.css';
import './styles/bento-grid.css';
import './styles/bento-pain-card.css';

export default function PainPointsSection() {
  const handleScrollToSolution = () => {
    document.getElementById("solution-transition")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section id="pain-points" className="pain-points-section-v2">
      <div className="section-background">
        <div className="gradient-overlay" />
        <div className="pattern-overlay" />
        
        {/* Grid pattern unificado - mesmo da PriceJustification */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #0A192F 1px, transparent 1px), linear-gradient(to bottom, #0A192F 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="section-content">
        <div className="section-header">
          <span className="section-badge">A REALIDADE DO CAMPO DE BATALHA</span>
          <h2 className="section-title">
            Sejamos honestos: gerenciar Google Ads para seu e-commerce
            <br />
            parece mais um <span className="highlight">campo minado</span> do que um caminho para o lucro?
          </h2>
          <p className="section-subtitle">
            Se você se sente assim, saiba que você está no lugar certo. 
            Eu converso com donos de e-commerce como você todos os dias. A história é a mesma...
          </p>
        </div>
        
        <PainPointBentoGrid />
        
        {/* Botão de Transição Estratégica */}
        <motion.div 
          className="flex justify-center mt-12 md:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            <Button 
              onClick={handleScrollToSolution}
              size="lg" 
              className="relative overflow-hidden px-8 py-6 h-auto bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white font-bold shadow-2xl shadow-red-500/40 border-2 border-red-500/30 rounded-xl transition-all duration-500 backdrop-blur-sm text-lg"
            >
              {/* Efeito de Brilho */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
              
              <span className="relative flex items-center gap-3 z-10">
                <Target className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="tracking-wide">Chega! Quero uma Solução</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}