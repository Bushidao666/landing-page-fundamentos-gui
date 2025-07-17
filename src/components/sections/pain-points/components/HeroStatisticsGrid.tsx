/**
 * @file: HeroStatisticsGrid.tsx
 * @responsibility: Display grid de estatísticas impactantes
 * @exports: HeroStatisticsGrid
 * @imports: React, AnimatedCounter, useCounterAnimation
 * @layer: components
 */

import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';

interface StatisticItem {
  value: number;
  suffix: string;
  label: string;
  color: 'critical' | 'extreme' | 'warning';
}

const statistics: StatisticItem[] = [
  {
    value: 92,
    suffix: '%',
    label: 'dos empreendedores falham nos primeiros 5 anos',
    color: 'critical'
  },
  {
    value: 80,
    suffix: '%',
    label: 'trabalham mais de 60 horas por semana',
    color: 'extreme'
  },
  {
    value: 3,
    suffix: 'x',
    label: 'mais propensão a problemas de saúde mental',
    color: 'warning'
  }
];

export const HeroStatisticsGrid: React.FC = () => {
  const inView = true; // Será substituído por Intersection Observer

  return (
    <div className="hero-statistics-grid">
      <div className="statistics-container">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className={`statistic-card glassmorphism ${stat.color}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="statistic-value">
              <AnimatedCounter
                end={stat.value}
                duration={2000}
                suffix={stat.suffix}
                shouldAnimate={inView}
              />
            </div>
            <p className="statistic-label">{stat.label}</p>
            <div className="statistic-glow" />
          </div>
        ))}
      </div>
    </div>
  );
};