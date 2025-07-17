/**
 * @file: PainPointsSection.tsx
 * @responsibility: Container principal da seção de pain points refatorada
 * @exports: PainPointsSection
 * @imports: React, HeroStatisticsGrid, PainPointBentoGrid, EmotionalTransition, TransformationHero
 * @layer: components
 */

"use client";

import React from 'react';
import { PainPointBentoGrid } from './components/PainPointBentoGrid';
import { EmotionalTransition } from './components/EmotionalTransition';
import { TransformationHero } from './components/TransformationHero';
import './styles/pain-points-v2.css';
import './styles/bento-grid.css';
import './styles/bento-pain-card.css';
import './styles/emotional-transition.css';
import './styles/transformation-hero.css';

export default function PainPointsSection() {
  return (
    <section id="pain-points" className="pain-points-section-v2">
      <div className="section-background">
        <div className="gradient-overlay" />
        <div className="pattern-overlay" />
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
        <EmotionalTransition />
        <TransformationHero />
      </div>
    </section>
  );
}