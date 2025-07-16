/**
 * @file: GPTsBonus.tsx
 * @responsibility: GPTs bonus card with accordion system for 7 AI assistants
 * @exports: GPTsBonus
 * @imports: BonusCard, framer-motion, lucide-react, bonusData, useState, AnimatePresence
 * @layer: components
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, ArrowRight } from "lucide-react";
import { useState } from "react";
import BonusCard from "./BonusCard";
import { bonusMetrics, gptsData } from "../data/bonusData";

interface GPTsBonusProps {
  index?: number;
}

export default function GPTsBonus({ index = 2 }: GPTsBonusProps) {
  const [expandedGPT, setExpandedGPT] = useState<number | null>(null);

  return (
    <BonusCard
      badgeText="Super Bônus #3"
      badgeColor="purple-400"
      title="Seu Exército Pessoal de IA: 7 Assistentes GPTs Exclusivos"
      value={`(Valor: R$ ${bonusMetrics.gptsValue})`}
      icon={Bot}
      iconColor="from-purple-500 to-pink-600"
      backgroundPattern="from-purple-500/15 to-pink-600/15"
      floatingIcon={Bot}
      index={index}
    >
      {/* Texto Introdutório */}
      <motion.p 
        className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 lg:mb-10 font-light"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Por que passar horas fazendo trabalho manual se a inteligência artificial pode fazer por você em segundos? Eu criei e treinei{" "}
        <span className="text-[#D4AF37] font-semibold">7 assistentes de IA (GPTs)</span>{" "}
        para serem seus consultores particulares. Você vai receber:
      </motion.p>

      {/* Lista Completa dos 7 GPTs com Accordion */}
      <div className="space-y-3 md:space-y-4 lg:space-y-6">
        {gptsData.map((gpt, gptIndex) => (
          <motion.div
            key={gpt.id}
            className="bg-gray-50/80 backdrop-blur-xl rounded-lg md:rounded-xl border border-gray-200/50 overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300 shadow-sm"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 + gptIndex * 0.1 }}
          >
            <motion.div
              className="p-3 md:p-4 lg:p-5 xl:p-6 cursor-pointer select-none touch-manipulation"
              onClick={() => setExpandedGPT(expandedGPT === gpt.id ? null : gpt.id)}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
              whileTap={{ scale: 0.995 }}
            >
              <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                {/* Número e Ícone */}
                <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                  <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-md md:rounded-lg flex items-center justify-center font-bold text-[#0A192F] text-xs md:text-sm lg:text-base">
                    {gpt.id}
                  </div>
                  <div className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br ${gpt.color} rounded-md md:rounded-lg flex items-center justify-center`}>
                    <gpt.icon className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>
                
                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-base md:text-lg lg:text-xl font-bold text-[#0A192F] mb-1 truncate">
                    {gpt.name}
                  </h4>
                  <p className="text-[#D4AF37] font-medium text-sm md:text-base truncate">
                    {gpt.subtitle}
                  </p>
                </div>
                
                {/* Indicador de Expansão - Touch Friendly */}
                <motion.div
                  className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-[#D4AF37]/10 transition-colors duration-200"
                  animate={{ rotate: expandedGPT === gpt.id ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Descrição Expansível com AnimatePresence */}
            <AnimatePresence>
              {expandedGPT === gpt.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-3 md:px-4 lg:px-5 xl:px-6 pb-3 md:pb-4 lg:pb-5 xl:pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-3 md:mb-4" />
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                      {gpt.description.split('**').map((part, i) => 
                        i % 2 === 0 ? (
                          <span key={i}>{part}</span>
                        ) : (
                          <span key={i} className="text-[#D4AF37] font-semibold">{part}</span>
                        )
                      )}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Call to Action para Explorar */}
      <motion.div
        className="mt-6 md:mt-8 lg:mt-10 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
          👆 Clique em qualquer assistente para ver como ele vai te ajudar
        </p>
        <div className="inline-flex items-center gap-2 text-[#D4AF37] font-medium text-sm md:text-base">
          <Bot className="w-4 h-4 md:w-5 md:h-5" />
          <span>7 Consultores de IA ao seu dispor</span>
          <Bot className="w-4 h-4 md:w-5 md:h-5" />
        </div>
      </motion.div>
    </BonusCard>
  );
} 