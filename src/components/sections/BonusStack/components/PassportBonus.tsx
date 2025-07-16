/**
 * @file: PassportBonus.tsx
 * @responsibility: passport bonus card with tools visualization
 * @exports: PassportBonus
 * @imports: BonusCard, framer-motion, lucide-react, bonusData
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Zap, BookOpen, Play, CheckCircle } from "lucide-react";
import BonusCard from "./BonusCard";
import { bonusMetrics } from "../data/bonusData";

interface PassportBonusProps {
  index?: number;
}

export default function PassportBonus({ index = 1 }: PassportBonusProps) {
  return (
    <BonusCard
      badgeText="Super Bônus #2"
      badgeColor="orange-400"
      title="Acesso Completo ao Passaporte Aceleração"
      value={`(Valor: R$ ${bonusMetrics.passportValue})`}
      icon={Zap}
      iconColor="from-green-500 to-emerald-600"
      backgroundPattern="from-green-500/10 to-emerald-600/10"
      floatingIcon={Zap}
      index={index}
    >
      {/* Descrição Detalhada */}
      <motion.p 
        className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 lg:mb-10 font-light"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Se o &quot;Fundamentos&quot; é a sua{" "}
        <span className="text-[#D4AF37] font-semibold">aula de anatomia</span>, o &quot;Passaporte&quot; é o seu{" "}
        <span className="text-[#D4AF37] font-semibold">kit de primeiros socorros</span>. 
        Enquanto você aprende a base teórica, já pode usar as{" "}
        <span className="text-[#0A192F] font-semibold">9 aulas rápidas</span>{" "}
        e as{" "}
        <span className="text-[#0A192F] font-semibold">9 ferramentas práticas</span>{" "}
        do Passaporte para aplicar otimizações imediatas e{" "}
        <span className="text-[#D4AF37] font-semibold">&quot;estancar o sangramento&quot;</span>{" "}
        de verba nas suas campanhas. Um complementa o outro perfeitamente.
      </motion.p>

      {/* Mockup Visual Expandido */}
      <motion.div 
        className="bg-gradient-to-br from-green-800/30 to-emerald-900/30 backdrop-blur-xl rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-6 xl:p-8 border border-green-500/30"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <BookOpen className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-600" />
          <span className="text-green-600 text-sm md:text-base lg:text-lg font-medium">Kit de Ferramentas Completo</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* 9 Aulas Rápidas */}
          <div className="space-y-2 md:space-y-3">
            <h4 className="text-[#0A192F] font-bold text-sm md:text-base lg:text-lg mb-3 md:mb-4">9 Aulas Rápidas:</h4>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3">
                <Play className="w-3 h-3 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                <div className="flex-1 h-1.5 md:h-2 bg-green-200 rounded overflow-hidden">
                  <motion.div 
                    className="h-full bg-green-500 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: `${60 + i * 10}%` }}
                    transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                  />
                </div>
                <span className="text-green-700 text-xs md:text-sm font-medium">Aula {i + 1}</span>
              </div>
            ))}
          </div>
          
          {/* 9 Ferramentas Práticas */}
          <div className="space-y-2 md:space-y-3">
            <h4 className="text-[#0A192F] font-bold text-sm md:text-base lg:text-lg mb-3 md:mb-4">9 Ferramentas Práticas:</h4>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                <div className="flex-1 h-1.5 md:h-2 bg-green-200 rounded overflow-hidden">
                  <motion.div 
                    className="h-full bg-green-500 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: `${80 + i * 5}%` }}
                    transition={{ delay: 1.5 + i * 0.2, duration: 0.8 }}
                  />
                </div>
                <span className="text-green-700 text-xs md:text-sm font-medium">Tool {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </BonusCard>
  );
} 