/**
 * @file: PainPointTimeline.tsx
 * @responsibility: timeline container with connecting line
 * @exports: PainPointTimeline component
 * @imports: PainPointCard, data, responsive
 * @layer: components
 */

"use client";

import { PainPointCard } from "./PainPointCard";
import { painPointsData } from "../data/painPointsData";

export function PainPointTimeline() {
  return (
    <div className="relative max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
      {/* Linha de conexão vertical */}
      <div className="absolute left-4 sm:left-6 md:left-8 lg:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-red-400 to-red-600 opacity-30" />
      
      <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        {painPointsData.map((painPoint, index) => (
          <PainPointCard 
            key={index} 
            painPoint={painPoint} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}