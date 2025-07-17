/**
 * @file: PainPointBentoGrid.tsx
 * @responsibility: Container do grid assímétrico de pain points
 * @exports: PainPointBentoGrid
 * @imports: React, BentoPainCard, painPointsData
 * @layer: components
 */

import React from 'react';
import { BentoPainCard } from './BentoPainCard';
import { painPointsData } from '../data/painPointsData';

export const PainPointBentoGrid: React.FC = () => {
  // Definindo tamanhos para o grid assímétrico
  const gridConfig = [
    { ...painPointsData[0], size: 'tall' as const },
    { ...painPointsData[1], size: 'wide' as const },
    { ...painPointsData[2], size: 'square' as const },
    { ...painPointsData[3], size: 'square' as const }
  ];

  return (
    <div className="pain-point-bento-grid">
      <div className="bento-background-pattern" />
      <div className="bento-container">
        {gridConfig.map((painPoint, index) => (
          <BentoPainCard
            key={painPoint.id}
            {...painPoint}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};