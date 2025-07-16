/**
 * @file: PainPointsSection.tsx
 * @responsibility: main pain points section container
 * @exports: PainPointsSection component
 * @imports: motion components, section components, hooks, animations
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./components/SectionHeader";
import { PainPointTimeline } from "./components/PainPointTimeline";
import { TransformationSection } from "./components/TransformationSection";
import { FloatingElements } from "./components/FloatingElements";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { containerVariants } from "./styles/animations";
import { spacing } from "./styles/responsive";

export default function PainPointsSection() {
  const { 
    backgroundGradient, 
    backgroundDarkness, 
    gridOpacity, 
    baseGradientOpacity 
  } = useScrollProgress();

  return (
    <motion.section
      id="pain-points"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      style={{ background: backgroundGradient }}
    >
      {/* Background Cinematográfico Dinâmico */}
      <div className="absolute inset-0">
        {/* Gradiente base que escurece progressivamente */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-slate-100"
          style={{ opacity: baseGradientOpacity }}
        />
        
        {/* Overlay escuro progressivo */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/0 via-[#0A192F]/20 to-[#0A192F]/60"
          style={{ opacity: backgroundDarkness }}
        />
        
        {/* Partículas flutuantes */}
        <FloatingElements />
        
        {/* Grid pattern que aparece progressivamente */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: gridOpacity }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header com Badge, Título e Estatísticas */}
        <SectionHeader />

        {/* Timeline dos Pain Points */}
        <PainPointTimeline />

        {/* Seção de Transformação */}
        <TransformationSection />
      </div>
    </motion.section>
  );
}