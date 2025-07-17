/**
 * @file: CommunityBonus.tsx
 * @responsibility: community bonus card with benefits grid
 * @exports: CommunityBonus
 * @imports: BonusCard, framer-motion, lucide-react, bonusData
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Users, Crown, MessageSquare, Briefcase, TrendingUp, Gift } from "lucide-react";
import BonusCard from "./BonusCard";
import { bonusMetrics, communityBenefits } from "../data/bonusData";

interface CommunityBonusProps {
  index?: number;
}

export default function CommunityBonus({ index = 0 }: CommunityBonusProps) {
  const getBenefitIcon = (index: number) => {
    const icons = [MessageSquare, Briefcase, TrendingUp, Gift];
    const Icon = icons[index];
    return Icon ? <Icon className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#0A192F]" /> : null;
  };

  return (
    <BonusCard
      badgeText="Super Bônus #1"
      badgeColor="red-400"
      title="Acesso VITALÍCIO à Comunidade do Zero ao 100K"
      value={`(Valor Incalculável, mas vamos colocar R$ ${bonusMetrics.communityValue}/ano)`}
      icon={Users}
      iconColor="from-blue-500 to-purple-600"
      backgroundPattern="from-blue-500/10 to-purple-600/10"
      floatingIcon={Crown}
      index={index}
    >
      {/* Texto Introdutório - Professional Emphasis */}
      <motion.div
        className="mb-4 md:mb-6"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-3">
          <span className="font-bold text-[#0A192F] text-lg md:text-xl">Isso aqui, sinceramente, vale 10x o valor do curso.</span>
        </p>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Chega de se sentir sozinho, pesquisando em fóruns gringos ou esperando a boa vontade do suporte do Google. 
          Você terá acesso{" "}
          <motion.span 
            className="inline-block text-[#D4AF37] font-bold text-lg md:text-xl"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            PARA SEMPRE
          </motion.span>{" "}
          à nossa comunidade de elite, onde:
        </p>
      </motion.div>

      {/* Grid de Benefícios Premium - Optimized Spacing */}
      <div className="grid gap-3 md:gap-4 lg:gap-5 md:grid-cols-2">
        {communityBenefits.map((benefit, i) => (
          <motion.article 
            key={i}
            className="bg-white/98 rounded-xl p-4 md:p-5 border border-gray-200/40 shadow-sm hover:shadow-md group cursor-pointer overflow-hidden relative transition-all duration-200"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.3 + i * 0.08,
              duration: 0.3
            }}
            whileHover={{ 
              y: -3,
              borderColor: "rgba(212, 175, 55, 0.25)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)"
            }}
            role="article"
            tabIndex={0}
            aria-label={`Benefício: ${benefit.title}`}
          >
            {/* Subtle shimmer effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/3 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ 
                duration: 1.8, 
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
              }}
            />

            <div className="flex items-start gap-3 md:gap-4 relative z-10">
              {/* Icon Container Professional */}
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 3,
                  boxShadow: "0 6px 20px rgba(212, 175, 55, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
              >
                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-0 bg-white/15 rounded-xl md:rounded-2xl"
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {getBenefitIcon(i)}
                </motion.div>
              </motion.div>
              
              {/* Content Area Refinado */}
              <div className="flex-1 min-w-0">
                <motion.h4 
                  className="text-sm md:text-base lg:text-lg font-bold text-[#0A192F] mb-2 md:mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                >
                  {benefit.title}
                </motion.h4>
                
                <motion.p 
                  className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                >
                  {benefit.description}
                </motion.p>
              </div>
            </div>

            {/* Progress indicator subtle */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.6, ease: "easeOut" }}
            />
          </motion.article>
        ))}
      </div>
    </BonusCard>
  );
} 