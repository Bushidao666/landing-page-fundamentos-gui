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
import "../styles/aristocratic-tokens.css";

interface GPTsBonusProps {
  index?: number;
}

export default function GPTsBonus({ index = 2 }: GPTsBonusProps) {
  const [expandedGPT, setExpandedGPT] = useState<number | null>(null);

  return (
    <BonusCard
      badgeText="Super Bônus #3"
      badgeVariant="tertiary"
      title="Seu Exército Pessoal de IA: 7 Assistentes GPTs Exclusivos"
      value={`(Valor: R$ ${bonusMetrics.gptsValue})`}
      icon={Bot}
      iconVariant="tertiary"
      floatingIcon={Bot}
      index={index}
    >
      {/* Texto Introdutório */}
      <motion.p 
        className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8 lg:mb-10 font-light"
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
            key={gptIndex}
            className="bg-gradient-to-br from-[rgba(10,25,47,0.8)] via-[rgba(10,25,47,0.9)] to-[rgba(10,25,47,0.8)] backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/20 overflow-hidden shadow-lg group"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 + gptIndex * 0.1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.01,
              borderColor: "rgba(212, 175, 55, 0.3)"
            }}
          >
            {/* Header do GPT */}
            <motion.div
              className="p-4 md:p-5 lg:p-6 cursor-pointer"
              onClick={() => setExpandedGPT(expandedGPT === gptIndex ? null : gptIndex)}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4 flex-1">
                  {/* Ícone do GPT */}
                  <motion.div
                    className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${gpt.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <gpt.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                  </motion.div>
                  
                  {/* Info do GPT */}
                  <div className="flex-1 min-w-0">
                    <motion.h4 
                      className="text-base md:text-lg lg:text-xl font-bold text-white mb-1 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {gpt.name}
                    </motion.h4>
                    <motion.p 
                      className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity, delay: gptIndex * 0.5 }}
                    >
                      {gpt.subtitle}
                    </motion.p>
                  </div>
                </div>
                
                {/* Arrow */}
                <motion.div
                  animate={{ rotate: expandedGPT === gptIndex ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-3 flex-shrink-0"
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Conteúdo Expandido */}
            <AnimatePresence>
              {expandedGPT === gptIndex && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden border-t border-white/10"
                >
                  <div className="p-4 md:p-5 lg:p-6 bg-gradient-to-br from-[rgba(10,25,47,0.3)] to-transparent">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="space-y-4 md:space-y-5"
                    >
                                             {/* Descrição Completa */}
                       <motion.div 
                         className="p-3 md:p-4 bg-gradient-to-br from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/20"
                         initial={{ scale: 0.98, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         transition={{ delay: 0.2, duration: 0.4 }}
                         whileHover={{ scale: 1.01 }}
                       >
                         <motion.p 
                           className="text-sm md:text-base text-white leading-relaxed"
                           animate={{
                             textShadow: [
                               "0 0 0px rgba(255, 255, 255, 0)",
                               "0 0 4px rgba(255, 255, 255, 0.1)",
                               "0 0 0px rgba(255, 255, 255, 0)"
                             ]
                           }}
                           transition={{ duration: 4, repeat: Infinity }}
                         >
                           {gpt.description.split('**').map((part, i) => 
                             i % 2 === 0 ? (
                               <span key={i}>{part}</span>
                             ) : (
                               <span key={i} className="text-[#D4AF37] font-bold">
                                 {part}
                               </span>
                             )
                           )}
                         </motion.p>
                       </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Final */}
      <motion.div
        className="mt-6 md:mt-8 lg:mt-10 p-4 md:p-6 bg-gradient-to-br from-[#D4AF37]/15 via-[#FFD700]/10 to-[#D4AF37]/15 backdrop-blur-xl rounded-xl md:rounded-2xl border border-[#D4AF37]/30"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        whileHover={{ scale: 1.01 }}
      >
        <motion.p 
          className="text-center text-sm md:text-base lg:text-lg text-white font-medium leading-relaxed"
          animate={{
            textShadow: [
              "0 0 0px rgba(255, 255, 255, 0)",
              "0 0 8px rgba(255, 255, 255, 0.2)",
              "0 0 0px rgba(255, 255, 255, 0)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <span className="text-[#D4AF37] font-bold">7 assistentes de IA exclusivos</span>, criados especificamente para potencializar seus resultados em tráfego pago. É como ter uma equipe de consultores trabalhando{" "}
          <span className="text-[#D4AF37] font-bold">24/7</span> só para você.
        </motion.p>
      </motion.div>
    </BonusCard>
  );
} 