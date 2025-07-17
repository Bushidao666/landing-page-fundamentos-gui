/**
 * @file: BonusStackSectionV2.tsx
 * @responsibility: main orchestrator for optimized bonus stack with strategic layout
 * @exports: BonusStackSectionV2
 * @imports: optimized components, strategic layout system, conversion psychology
 * @layer: sections
 */

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Users, Zap, Brain } from "lucide-react";

// New optimized components
import BonusHeaderV2 from "./components/BonusHeaderV2";
import { ValueStack, UrgencyBar, BonusCardV2, GPTCard } from "./index";

// Data and background
import { bonusMetrics, gptsData, communityBenefits } from "./data/bonusData";
import BackgroundEffects from "./components/BackgroundEffects";

// Styles
import "./styles/optimized-tokens.css";

interface BonusStackSectionV2Props {
  variant?: 'mobile' | 'desktop';
  animated?: boolean;
  className?: string;
}

// Layout configuration for different breakpoints
const layoutConfig = {
  mobile: {
    maxViewports: 3,
    cardSpacing: 'space-y-4',
    containerPadding: 'px-4 py-6',
    headerVariant: 'mobile'
  },
  desktop: {
    singleScreen: true,
    cardLayout: 'grid lg:grid-cols-3 gap-6',
    containerPadding: 'px-8 py-12',
    headerVariant: 'desktop'
  }
};

export default function BonusStackSectionV2({
  variant = 'mobile',
  animated = true,
  className = ""
}: BonusStackSectionV2Props) {
  const [expandedGPT, setExpandedGPT] = useState<number | null>(null);
  const config = layoutConfig[variant];
  const isMobile = variant === 'mobile';

  // Calculate savings for urgency
  const savingsPercentage = Math.round(((bonusMetrics.totalValue - bonusMetrics.finalPrice) / bonusMetrics.totalValue) * 100);

  return (
    <motion.section
      id="bonus-stack-v2"
      className={`
        bonus-stack-section-v2 relative overflow-hidden
        ${config.containerPadding} ${className}
      `}
      initial={animated ? { opacity: 0 } : undefined}
      whileInView={animated ? { opacity: 1 } : undefined}
      transition={animated ? { duration: 0.8, ease: "easeOut" } : undefined}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background - Refined and Subtle */}
      <BackgroundEffects reducedMotion={!animated} />

      {/* Main Content Container */}
      <div className="relative z-10 container-optimized">
        
        {/* =================================================================
            VIEWPORT 1: VALUE HOOK (Mobile) / HERO SECTION (Desktop)
           ================================================================= */}
        <BonusHeaderV2 
          variant={config.headerVariant as 'mobile' | 'desktop'}
          animated={animated}
          className="mb-8 md:mb-12"
        />

        {/* =================================================================
            MOBILE LAYOUT: Sequential Cards (3 Viewports)
           ================================================================= */}
        {isMobile && (
          <div className="mobile-layout space-y-6">
            
            {/* VIEWPORT 2: Value Stack Detail */}
            <motion.div
              className="value-section"
              initial={animated ? { opacity: 0, y: 30 } : undefined}
              whileInView={animated ? { opacity: 1, y: 0 } : undefined}
              transition={animated ? { duration: 0.6, delay: 0.2 } : undefined}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Bonus Cards - Mobile Stack */}
              <div className="space-y-4 mb-8">
                
                {/* Community Bonus - Compact */}
                <BonusCardV2
                  title="Comunidade Vitalícia"
                  value={`R$ ${bonusMetrics.communityValue}/ano`}
                  badgeText="Super Bônus #1"
                  icon={Users}
                  variant="primary"
                  index={0}
                  animated={animated}
                >
                  <div className="space-y-3">
                    <p className="text-body text-secondary-muted leading-relaxed">
                      <span className="font-bold text-secondary">Isso vale 10x o valor do curso.</span>
                      {" "}Suporte elite, networking premium e acesso vitalício.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-micro">
                      {communityBenefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="bg-subtle rounded p-2">
                          <span className="font-medium text-secondary">
                            {benefit.title.split(':')[0]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </BonusCardV2>

                {/* Passport Bonus - Compact */}
                <BonusCardV2
                  title="Passaporte Aceleração"
                  value={`R$ ${bonusMetrics.passportValue}`}
                  badgeText="Super Bônus #2"
                  icon={Zap}
                  variant="secondary"
                  index={1}
                  animated={animated}
                >
                  <p className="text-body text-secondary-muted leading-relaxed">
                    Seu <span className="font-bold text-primary">kit de primeiros socorros</span> digital. 
                    Estratégias práticas para situações reais do dia a dia.
                  </p>
                </BonusCardV2>

                {/* GPTs Section - Detailed */}
                <BonusCardV2
                  title="7 Assistentes de Inteligência Artificial"
                  value={`R$ ${bonusMetrics.gptsValue}`}
                  badgeText="Super Bônus #3"
                  icon={Brain}
                  variant="tertiary"
                  index={2}
                  animated={animated}
                >
                  <div className="space-y-3">
                    <p className="text-body text-secondary-muted leading-relaxed mb-4">
                      <span className="font-bold text-primary">7 especialistas digitais</span> trabalhando 24h 
                      para multiplicar seus resultados. Cada um resolve problemas específicos:
                    </p>
                    
                    {/* GPT Cards List */}
                    <div className="space-y-2">
                      {gptsData.map((gpt, index) => (
                        <GPTCard
                          key={gpt.id}
                          gpt={gpt}
                          index={index}
                          isExpanded={expandedGPT === gpt.id}
                          onToggle={() => setExpandedGPT(expandedGPT === gpt.id ? null : gpt.id)}
                          variant="mobile"
                          animated={animated}
                        />
                      ))}
                    </div>
                  </div>
                </BonusCardV2>
              </div>

              {/* Value Summary - Mobile */}
              <ValueStack
                totalValue={bonusMetrics.totalValue}
                finalPrice={bonusMetrics.finalPrice}
                variant="expanded"
                showProgress={true}
                animated={animated}
                className="mb-6"
              />
            </motion.div>

            {/* VIEWPORT 3: Urgency + CTA */}
            <motion.div
              className="cta-section"
              initial={animated ? { opacity: 0, y: 30 } : undefined}
              whileInView={animated ? { opacity: 1, y: 0 } : undefined}
              transition={animated ? { duration: 0.6, delay: 0.4 } : undefined}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Urgency Bar */}
              <UrgencyBar
                percentage={savingsPercentage}
                label={`Você economiza R$ ${(bonusMetrics.totalValue - bonusMetrics.finalPrice).toLocaleString('pt-BR')}`}
                urgencyText="Últimas vagas disponíveis"
                variant="savings"
                animated={animated}
                className="mb-6"
              />

              {/* Final CTA */}
              <div className="bg-gradient-to-br from-primary/8 via-primary/4 to-primary/8 backdrop-blur-sm rounded-xl p-6 border border-primary/20 shadow-card-hover text-center">
                <h3 className="text-h2 text-secondary font-bold mb-3">
                  Todo esse arsenal de{" "}
                  <span className="text-primary font-black">
                    R$ {bonusMetrics.totalValue.toLocaleString('pt-BR')}
                  </span>
                </h3>
                
                <p className="text-h3 text-secondary-muted mb-6">
                  será SEU por apenas{" "}
                  <span className="text-primary font-black text-xl">
                    R$ {bonusMetrics.finalPrice}
                  </span>
                  . Sim, você leu certo.
                </p>

                <motion.button
                  className="bg-primary hover:bg-primary-hover text-secondary font-black text-lg px-8 py-4 rounded-xl shadow-glow transition-smooth mb-4 relative overflow-hidden"
                  whileHover={animated ? { 
                    scale: 1.02,
                    boxShadow: "var(--shadow-glow-primary-strong)"
                  } : undefined}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    animate={animated ? { x: ["-100%", "200%"] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10">🔥 Garanta Seu Acesso Agora 🔥</span>
                </motion.button>

                <div className="flex items-center justify-center gap-4 text-micro text-secondary-soft">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span>Acesso Imediato</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span>Garantia 30 Dias</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* =================================================================
            DESKTOP LAYOUT: Single Screen Grid
           ================================================================= */}
        {!isMobile && (
          <motion.div
            className="desktop-layout"
            initial={animated ? { opacity: 0, y: 30 } : undefined}
            whileInView={animated ? { opacity: 1, y: 0 } : undefined}
            transition={animated ? { duration: 0.6, delay: 0.2 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Value Stack + Urgency */}
              <div className="lg:col-span-4 space-y-6">
                <ValueStack
                  totalValue={bonusMetrics.totalValue}
                  finalPrice={bonusMetrics.finalPrice}
                  variant="expanded"
                  showProgress={true}
                  animated={animated}
                />
                
                <UrgencyBar
                  percentage={savingsPercentage}
                  label="Economia total com todos os bônus"
                  urgencyText="Últimas vagas"
                  variant="savings"
                  animated={animated}
                />

                {/* Desktop CTA */}
                <div className="bg-gradient-to-br from-primary/8 to-primary/12 rounded-xl p-6 text-center border border-primary/20">
                  <motion.button
                    className="w-full bg-primary hover:bg-primary-hover text-secondary font-black text-xl px-6 py-4 rounded-xl shadow-glow transition-smooth relative overflow-hidden"
                    whileHover={animated ? { 
                      scale: 1.02,
                      boxShadow: "var(--shadow-glow-primary-strong)"
                    } : undefined}
                  >
                    🔥 Garanta Seu Acesso 🔥
                  </motion.button>
                </div>
              </div>

              {/* Right Column: Bonus Cards Grid */}
              <div className="lg:col-span-8 grid gap-6">
                
                {/* Top Row: Community + Passport */}
                <div className="grid md:grid-cols-2 gap-6">
                  <BonusCardV2
                    title="Comunidade Vitalícia"
                    value={`R$ ${bonusMetrics.communityValue}/ano`}
                    badgeText="Super Bônus #1"
                    icon={Users}
                    variant="primary"
                    index={0}
                    animated={animated}
                  >
                    <div className="space-y-4">
                      <p className="text-body text-secondary-muted">
                        <span className="font-bold text-secondary">Vale 10x o curso.</span>
                        {" "}Suporte elite e networking premium.
                      </p>
                      <div className="space-y-2">
                        {communityBenefits.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="text-small text-secondary-muted">
                            • {benefit.title.split(':')[0]}
                          </div>
                        ))}
                      </div>
                    </div>
                  </BonusCardV2>

                  <BonusCardV2
                    title="Passaporte Aceleração"
                    value={`R$ ${bonusMetrics.passportValue}`}
                    badgeText="Super Bônus #2"
                    icon={Zap}
                    variant="secondary"
                    index={1}
                    animated={animated}
                  >
                    <p className="text-body text-secondary-muted leading-relaxed">
                      Seu <span className="font-bold text-primary">kit de primeiros socorros</span> digital. 
                      Estratégias práticas para situações reais que você enfrenta todo dia.
                    </p>
                  </BonusCardV2>
                </div>

                {/* Bottom Row: GPTs - Full Width */}
                <BonusCardV2
                  title="7 Assistentes de Inteligência Artificial"
                  value={`R$ ${bonusMetrics.gptsValue}`}
                  badgeText="Super Bônus #3"
                  icon={Brain}
                  variant="tertiary"
                  index={2}
                  animated={animated}
                >
                  <div className="space-y-4">
                    <p className="text-body text-secondary-muted leading-relaxed">
                      <span className="font-bold text-primary">7 especialistas digitais</span> trabalhando 24h 
                      para multiplicar seus resultados. Cada um resolve problemas específicos do seu negócio.
                    </p>
                    
                    {/* GPTs Grid - Desktop */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {gptsData.slice(0, 6).map((gpt, index) => (
                        <GPTCard
                          key={gpt.id}
                          gpt={gpt}
                          index={index}
                          isExpanded={expandedGPT === gpt.id}
                          onToggle={() => setExpandedGPT(expandedGPT === gpt.id ? null : gpt.id)}
                          variant="desktop"
                          animated={animated}
                        />
                      ))}
                    </div>
                    
                    {/* +1 More GPT */}
                    <div className="text-center pt-2">
                      <span className="text-small text-primary font-semibold">
                        + {gptsData[6].name} ({gptsData[6].subtitle})
                      </span>
                    </div>
                  </div>
                </BonusCardV2>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </motion.section>
  );
} 