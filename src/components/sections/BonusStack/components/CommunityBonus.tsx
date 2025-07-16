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
      {/* Texto Introdutório */}
      <motion.p 
        className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 lg:mb-10 font-light"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Isso aqui, sinceramente, vale 10x o valor do curso. Chega de se sentir sozinho, pesquisando em fóruns gringos ou esperando a boa vontade do suporte do Google. Você terá acesso{" "}
        <span className="text-[#D4AF37] font-semibold">PARA SEMPRE</span>{" "}
        à nossa comunidade de elite, onde:
      </motion.p>

      {/* Grid de Benefícios Detalhados */}
      <div className="grid lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
        {communityBenefits.map((benefit, i) => (
          <motion.div 
            key={i}
            className="bg-gray-50/80 backdrop-blur-xl rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5 xl:p-6 border border-gray-200/50 hover:bg-white/90 hover:border-[#D4AF37]/30 transition-all duration-300 group shadow-sm"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 + i * 0.1 }}
            whileHover={{ x: 3, scale: 1.01 }}
          >
            <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
              <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {getBenefitIcon(i)}
              </div>
              <div className="flex-1">
                <h4 className="text-sm md:text-base lg:text-lg font-bold text-[#0A192F] mb-1 md:mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </BonusCard>
  );
} 