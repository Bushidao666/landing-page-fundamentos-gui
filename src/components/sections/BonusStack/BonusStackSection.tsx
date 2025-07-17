/**
 * @file: BonusStackSection.tsx
 * @responsibility: main orchestrator for bonus stack section using modular components
 * @exports: BonusStackSection
 * @imports: modular components from BonusStack/components
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

// Optimized container animation - performance focused
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
      ease: "easeOut",
    },
  },
};

export default function BonusStackSection() {
  return (
    <motion.section
      id="bonus-stack"
      className="relative py-6 md:py-8 lg:py-12 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Background Tech-Aristocrático Otimizado */}
      <BackgroundEffects />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Explosivo */}
        <BonusHeader />

        {/* Containers dos Bônus - PROFESSIONAL SPACING */}
        <div className="max-w-6xl mx-auto space-y-3 md:space-y-4 lg:space-y-6">
          
          {/* SUPER BÔNUS #1: Comunidade Vitalícia */}
          <CommunityBonus index={0} />

          {/* SUPER BÔNUS #2: Passaporte Aceleração */}
          <PassportBonus index={1} />

          {/* SUPER BÔNUS #3: 7 Assistentes GPTs */}
          <GPTsBonus index={2} />
        </div>

        {/* Call to Action Final Profissional */}
        <FinalCTA />
      </div>
    </motion.section>
  );
} 