/**
 * @file: SectionBackground.tsx
 * @responsibility: background effects and decorations
 * @exports: SectionBackground
 * @imports: FloatingElements
 * @layer: components
 */

"use client";

import { FloatingElements } from "./FloatingElements";

export function SectionBackground() {
  return (
    <div className="absolute inset-0">
      {/* Gradient Transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-[#0A192F]/10 to-[#0A192F]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#1a2444] to-[#0A192F]" />
      
      {/* Texture Layers */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      {/* Interactive Nebula */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/3 left-1/4 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-l from-slate-400/15 via-slate-500/8 to-transparent rounded-full blur-2xl" />
      </div>
      
      {/* Floating Particles */}
      <FloatingElements />
    </div>
  );
}