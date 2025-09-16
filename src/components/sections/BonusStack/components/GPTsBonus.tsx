/**
 * @file: GPTsBonus.tsx
 * @responsibility: GPTs bonus card with accordion system for 7 AI assistants
 * @exports: GPTsBonus
 * @imports: BonusCard, framer-motion, lucide-react, bonusData, useState, AnimatePresence
 * @layer: components
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, ArrowRight, Sparkles, Brain, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { bonusMetrics, gptsData } from "../data/bonusData";
import "../styles/aristocratic-tokens.css";
import Image from "next/image";
import { useFloatingAnimation, createFloatingVariants } from "../../../../hooks/useFloatingAnimation";

interface GPTsBonusProps {
  index?: number;
}

export default function GPTsBonus({ index = 2 }: GPTsBonusProps) {
  const [expandedGPT, setExpandedGPT] = useState<number | null>(null);
  const isFloating = useFloatingAnimation(4);
  const floatingVariants = createFloatingVariants(6, 3);

  const getGPTIcon = (index: number) => {
    const icons = [Bot, Brain, Sparkles, Zap, ArrowRight, Bot, Brain];
    const Icon = icons[index] || Bot;
    return <Icon className="w-3 h-3 lg:w-4 lg:h-4 text-[#0A192F]" />;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-center">
      
      {/* COLUNA 1: CONTEÚDO COMPACTO - 50% do espaço */}
      <motion.div
        className="lg:col-span-1 min-h-[400px] lg:min-h-[500px] flex flex-col justify-center order-1 lg:order-1"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* CONTEÚDO DIRETO SEM CARD - MUITO MAIS CLEAN */}
        <div className="space-y-4">
          {/* Badge */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              SUPER BÔNUS #3
            </motion.span>
          </motion.div>

          {/* MOCKUP MOBILE - Entre Badge e Título */}
          <motion.div
            className="lg:hidden mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative group">
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                variants={isFloating ? floatingVariants : undefined}
                initial="initial"
                animate={isFloating ? "animate" : "initial"}
            whileHover={{ 
                  y: -4,
              scale: 1.01,
                  transition: { type: "spring", stiffness: 300, damping: 25 }
                }}
              >
                {/* Shimmer effect DA ESQUERDA PARA DIREITA diretamente na imagem */}
                <motion.div
                  className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                  initial={{ x: "-150%" }}
                  animate={{ x: "150%" }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                />
                
                <Image
                  src="/images/Mockups/mockup-exercito-pessoal-ia.png"
                  alt="Mockup do Exército Pessoal de IAs mostrando os 7 GPTs especializados trabalhando em diferentes áreas do negócio"
                  width={1200}
                  height={900}
                  className="w-full h-auto rounded-2xl shadow-xl shadow-black/20 transition-shadow duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Título e Valor */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-2 leading-tight">
              Exército Pessoal de IAs
            </h3>
            
            <p className="text-lg lg:text-xl font-bold text-[#B8860B] mb-4">
              (Valor: R$ {bonusMetrics.gptsValue})
            </p>
          </motion.div>

          {/* Descrição Premium */}
            <motion.div
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            >
            <p className="text-base md:text-lg font-bold text-[#B8860B] mb-2 leading-tight">
              7 GPTs personalizados trabalhando para você 24/7.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              Cada IA especializada em uma área específica do seu negócio: desde{" "}
              <motion.span 
                className="text-[#B8860B] font-bold text-base"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                  >
                criação de anúncios
              </motion.span>{" "}
              até análise de métricas e otimização de campanhas.
            </p>
                  </motion.div>
                  
          {/* ACCORDION DOS 7 GPTs COMPLETO */}
          <div className="space-y-2">
            {gptsData.map((gpt, i) => (
              <motion.div
                key={i}
                className="bg-[#0A192F]/90 backdrop-blur-sm border border-[#1A2444]/60 rounded-lg transition-all duration-300 hover:bg-[#0A192F]/95 hover:border-[#B8860B]/40"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.05 }}
              >
                <button
                  className="w-full p-3 text-left flex items-center justify-between group"
                  onClick={() => setExpandedGPT(expandedGPT === i ? null : i)}
                  aria-expanded={expandedGPT === i}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-md flex items-center justify-center shadow-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {getGPTIcon(i)}
                    </motion.div>
                    <span className="text-sm font-semibold text-white group-hover:text-[#B8860B] transition-colors">
                      {gpt.name}
                    </span>
                  </div>
                <motion.div
                    animate={{ rotate: expandedGPT === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-4 h-4 text-white/70" />
                </motion.div>
                </button>

            <AnimatePresence>
                  {expandedGPT === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                >
                      <div className="px-3 pb-3 text-xs text-gray-300 leading-relaxed border-t border-white/10 pt-2">
                        {gpt.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
        </div>
      </motion.div>

      {/* COLUNA 2: MOCKUP PROTAGONISTA - 50% do espaço - APENAS DESKTOP */}
      <motion.div
        className="hidden lg:flex lg:col-span-1 min-h-[400px] lg:min-h-[500px] items-center justify-center order-2 lg:order-2"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {/* MOCKUP LIMPO COM SHIMMER DIRETO NA IMAGEM */}
        <div className="relative group">
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            variants={isFloating ? floatingVariants : undefined}
            initial="initial"
            animate={isFloating ? "animate" : "initial"}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 25 }
            }}
          >
            {/* Shimmer effect DA ESQUERDA PARA DIREITA diretamente na imagem */}
            <motion.div
              className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
              }}
            />
            
            <Image
              src="/images/Mockups/mockup-exercito-pessoal-ia.png"
              alt="Mockup do Exército Pessoal de IAs mostrando os 7 GPTs especializados trabalhando em diferentes áreas do negócio"
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl shadow-2xl shadow-black/30 group-hover:shadow-[#B8860B]/40 transition-shadow duration-500"
              sizes="(max-width: 1024px) 80vw, 720px"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 