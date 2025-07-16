/**
 * @file: StoryContent.tsx
 * @responsibility: story content display component
 * @exports: StoryContent
 * @imports: motion, Typography components, MotionWrapper
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { Body } from "@/components/ui/typography";

export function StoryContent() {
  return (
    <motion.div 
      className="space-y-6 sm:space-y-8"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <MotionWrapper 
        className="bg-gradient-to-br from-white via-gray-50 to-white 
          backdrop-blur-xl rounded-2xl sm:rounded-3xl 
          p-6 sm:p-8 md:p-10 
          border border-gray-200/50 shadow-lg sm:shadow-xl"
        whileHover={{ scale: 1.005, y: -1 }}
        transition={{ duration: 0.2 }}
      >
        <Body className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
          <span className="text-[#D4AF37] font-bold text-xl sm:text-2xl md:text-3xl block mb-2">
            Minha jornada não começou ontem, em um vídeo no YouTube.
          </span>
        </Body>

        <Body className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
          Começou <span className="font-bold text-[#0A192F]">há mais de 13 anos</span>, na trincheira de uma das primeiras agências de tráfego pago do Brasil, na época em que o Google Ads ainda se chamava <span className="text-[#D4AF37] font-semibold">Google AdWords</span>.
        </Body>

        <Body className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
          Nós fomos <span className="text-[#D4AF37] font-bold">pioneiros</span>, desbravando um mercado que mal existia e sendo uma das primeiras agências brasileiras a visitar o <span className="font-bold text-[#0A192F]">Vale do Silício</span> para beber direto da fonte.
        </Body>
      </MotionWrapper>
    </motion.div>
  );
}