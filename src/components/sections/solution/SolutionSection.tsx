/**
 * @file: SolutionSection.tsx
 * @responsibility: Main container for solution section with modular components
 * @exports: SolutionSection
 * @imports: motion, Button, components, data
 * @layer: sections
 */

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard, TrendingUp } from "lucide-react";

// Modular Components
import FloatingElements from "./components/FloatingElements";
import ProductMockup from "./components/ProductMockup";
import SolutionBadge from "./components/SolutionBadge";
import SolutionHeadline from "./components/SolutionHeadline";
import ComparisonCard from "./components/ComparisonCard";
import TrustIndicators from "./components/TrustIndicators";

// Data
import { solutionContent } from "./data/solutionContent";
import { trustIndicators } from "./data/trustIndicatorsData";
import { containerVariants, itemVariants } from "./data/animationConfig";

export default function SolutionSection() {
  return (
    <motion.section
      id="solution"
      className="relative py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Tech-Aristocrático */}
      <div className="absolute inset-0">
        {/* Camada Base - Gradiente Premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100" />
        
        {/* Overlay de Transição */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/5 to-[#0A192F]/15" />
        
        {/* Grid Pattern Unificado - mesmo das outras seções */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #0A192F 1px, transparent 1px), linear-gradient(to bottom, #0A192F 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Nebulosa Premium */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/3 w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-[200px] md:h-[250px] lg:h-[300px] xl:h-[400px] bg-gradient-to-l from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent rounded-full blur-2xl md:blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] bg-gradient-to-r from-slate-400/10 via-slate-500/5 to-transparent rounded-full blur-xl md:blur-2xl" />
        </div>
        
        {/* Partículas Flutuantes */}
        <FloatingElements />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          
          {/* Conteúdo da Solução Premium - Lado Esquerdo */}
          <motion.div 
            className="relative z-20 space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 order-2 lg:order-1"
            variants={containerVariants}
          >
            {/* Badge de Apresentação Premium */}
            <SolutionBadge text={solutionContent.badge.text} />

            {/* Headline da Solução com Shimmer */}
            <SolutionHeadline
              preTitle={solutionContent.headline.preTitle}
              mainTitle={solutionContent.headline.mainTitle}
              subTitle={solutionContent.headline.subTitle}
            />

            {/* Texto de Posicionamento Premium */}
            <motion.div className="space-y-4 md:space-y-6 lg:space-y-8" variants={itemVariants}>
              <div className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                {solutionContent.positioning.text}{" "}
                <span className="font-bold text-[#0A192F] relative">
                  {solutionContent.positioning.highlight}
                  <motion.div
                    className="absolute -bottom-0.5 md:-bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  />
                </span>{" "}
                {solutionContent.positioning.continuation}{" "}
                <span className="text-[#D4AF37] font-semibold">
                  {solutionContent.positioning.emphasis}
                </span>.
              </div>
              
              {/* Comparação Premium */}
              <ComparisonCard
                title={solutionContent.comparison.title}
                items={solutionContent.comparison.items}
              />
            </motion.div>

            {/* CTA Button Premium */}
            <motion.div variants={itemVariants} className="relative z-30">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Button 
                  size="lg" 
                  className="relative overflow-hidden w-full sm:w-auto text-base md:text-lg lg:text-xl px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-bold shadow-2xl shadow-[#D4AF37]/40 border-2 border-[#D4AF37]/30 rounded-xl md:rounded-2xl transition-all duration-500 backdrop-blur-sm"
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
                  
                  <span className="relative flex items-center justify-center gap-2 md:gap-3 lg:gap-4 z-10">
                    <CreditCard className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="tracking-wide text-center whitespace-nowrap sm:whitespace-normal">
                      <span className="hidden sm:inline">{solutionContent.cta.desktopText} </span>
                      <span className="sm:hidden">{solutionContent.cta.mobileText} </span>
                      {solutionContent.cta.price}
                    </span>
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#0A192F] group-hover:text-[#0A192F] transition-colors duration-300" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators Premium */}
            <TrustIndicators items={trustIndicators} />
          </motion.div>

          {/* Mockup Premium do Produto - Lado Direito */}
          <ProductMockup
            imageSrc={solutionContent.product.imageSrc}
            imageAlt={solutionContent.product.imageAlt}
            badgeText={solutionContent.product.badgeText}
            className="order-1 lg:order-2"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
}