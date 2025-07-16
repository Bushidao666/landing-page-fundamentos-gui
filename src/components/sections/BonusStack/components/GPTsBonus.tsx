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
              className="p-4 md:p-5 lg:p-6 xl:p-7 cursor-pointer select-none touch-manipulation rounded-lg md:rounded-xl"
              onClick={() => setExpandedGPT(expandedGPT === gpt.id ? null : gpt.id)}
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.98)",
                scale: 1.005,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
              }}
              whileTap={{ scale: 0.995 }}
              transition={{ duration: 0.2 }}
            >
                              <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
                  {/* Número e Ícone - Premium */}
                  <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                    {/* Número com Glow Effect */}
                    <motion.div 
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-lg md:rounded-xl flex items-center justify-center font-black text-[#0A192F] text-sm md:text-base lg:text-lg shadow-lg relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 8px 25px rgba(212, 175, 55, 0.5)"
                      }}
                    >
                      {/* Inner glow */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-lg md:rounded-xl"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="relative z-10">{gpt.id}</span>
                    </motion.div>
                    
                    {/* Icon com Micro-animation */}
                    <motion.div 
                      className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${gpt.color} rounded-lg md:rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 5
                      }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      >
                        <gpt.icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white drop-shadow-sm" />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Conteúdo Aprimorado */}
                  <div className="flex-1 min-w-0">
                    <motion.h4 
                      className="text-base md:text-lg lg:text-xl font-bold text-[#0A192F] mb-1 group-hover:text-[#D4AF37] transition-colors duration-300"
                      style={{ lineHeight: '1.2' }}
                    >
                      {gpt.name}
                    </motion.h4>
                    <motion.p 
                      className="text-[#D4AF37] font-semibold text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(212, 175, 55, 0)",
                          "0 0 8px rgba(212, 175, 55, 0.3)",
                          "0 0 0px rgba(212, 175, 55, 0)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {gpt.subtitle}
                    </motion.p>
                  </div>
                  
                  {/* Indicador de Expansão Premium */}
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-yellow-400/10 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-colors duration-300"
                    animate={{ 
                      rotate: expandedGPT === gpt.id ? 90 : 0,
                      scale: expandedGPT === gpt.id ? 1.1 : 1
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(212, 175, 55, 0.15)"
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
                  </motion.div>
                </div>
            </motion.div>

            {/* Descrição Expansível Premium */}
            <AnimatePresence>
              {expandedGPT === gpt.id && (
                <motion.div
                  id={`gpt-content-${gpt.id}`}
                  initial={{ height: 0, opacity: 0, y: -10 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.3 }
                  }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    className="px-4 md:px-5 lg:px-6 xl:px-7 pb-4 md:pb-5 lg:pb-6 xl:pb-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {/* Divider Premium */}
                    <motion.div 
                      className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mb-4 md:mb-5 relative"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      {/* Glow effect no divider */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent blur-sm"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    {/* Content com Background Premium */}
                    <motion.div
                      className="bg-gradient-to-br from-gray-50/50 via-white/80 to-gray-50/50 rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 border border-[#D4AF37]/10 backdrop-blur-sm relative overflow-hidden"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      {/* Shimmer effect interno */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent -skew-x-12"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                      
                      <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed relative z-10">
                        {gpt.description.split('**').map((part, i) => 
                          i % 2 === 0 ? (
                            <span key={i}>{part}</span>
                          ) : (
                            <motion.span 
                              key={i} 
                              className="text-[#D4AF37] font-semibold relative"
                              animate={{
                                textShadow: [
                                  "0 0 0px rgba(212, 175, 55, 0)",
                                  "0 0 8px rgba(212, 175, 55, 0.4)",
                                  "0 0 0px rgba(212, 175, 55, 0)"
                                ]
                              }}
                              transition={{ duration: 2.5, repeat: Infinity }}
                            >
                              {part}
                            </motion.span>
                          )
                        )}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Premium */}
      <motion.div
        className="mt-8 md:mt-10 lg:mt-12 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {/* Indicator visual */}
        <motion.div
          className="mb-4 md:mb-5"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-2xl md:text-3xl">👆</span>
        </motion.div>
        
        <motion.p 
          className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-5 font-medium"
          animate={{
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Clique em qualquer assistente para descobrir como ele vai{" "}
          <span className="text-[#D4AF37] font-semibold">revolucionar seu negócio</span>
        </motion.p>
        
        {/* CTA Box Premium */}
        <motion.div
          className="inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 backdrop-blur-xl rounded-xl md:rounded-2xl px-5 md:px-6 lg:px-8 py-3 md:py-4 border border-[#D4AF37]/20 shadow-lg"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 40px rgba(212, 175, 55, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Bot className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
          </motion.div>
          
          <motion.span 
            className="text-[#D4AF37] font-bold text-sm md:text-base lg:text-lg"
            animate={{
              textShadow: [
                "0 0 0px rgba(212, 175, 55, 0)",
                "0 0 10px rgba(212, 175, 55, 0.5)",
                "0 0 0px rgba(212, 175, 55, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            7 Consultores de IA Exclusivos
          </motion.span>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Bot className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </BonusCard>
  );
} 