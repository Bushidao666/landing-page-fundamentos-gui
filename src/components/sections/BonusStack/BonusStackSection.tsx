/**
 * @file: BonusStackSection.tsx
 * @responsibility: main orchestrator for bonus stack section with premium unified styling
 * @exports: BonusStackSection
 * @imports: modular components from BonusStack/components, unified design tokens
 * @layer: sections
 */

"use client";

import { motion } from "framer-motion";
import BackgroundEffects from "./components/BackgroundEffects";
import BonusHeader from "./components/BonusHeader";
import CommunityBonus from "./components/CommunityBonus";
import PassportBonus from "./components/PassportBonus";
import GPTsBonus from "./components/GPTsBonus";
import FinalCTA from "./components/FinalCTA";
import "./styles/aristocratic-tokens.css";

// Optimized container animation - performance focused
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
      ease: "easeOut" as const,
    },
  },
};

export default function BonusStackSection() {
  return (
    <motion.section
      id="bonus-stack"
      className="bonus-section relative overflow-hidden cv-auto"
      style={{
        backgroundColor: '#FFFFFF',
        minHeight: 'auto',
        display: 'block',
        visibility: 'visible'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Background Effects Sutis - otimizado para mobile */}
      <div className="absolute inset-0 hidden md:block">
        <div className="bonus-bg-base" />
        <div className="bonus-bg-pattern" />
      </div>

      <div className="bonus-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          
          {/* Header Premium */}
          <BonusHeader />

          {/* Containers dos Bônus - Layout Empilhado com Espaçamento Otimizado */}
          <div className="space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24 bonus-spacing-xl">
            
            {/* SUPER BÔNUS #1: Comunidade Vitalícia */}
            <CommunityBonus index={0} />

            {/* SUPER BÔNUS #2: Passaporte Aceleração */}
            <PassportBonus index={1} />

            {/* SUPER BÔNUS #3: 7 Assistentes GPTs */}
            <GPTsBonus index={2} />
          </div>

          {/* Call to Action Final Premium */}
          <FinalCTA />
        </div>
      </div>
    </motion.section>
  );
} 