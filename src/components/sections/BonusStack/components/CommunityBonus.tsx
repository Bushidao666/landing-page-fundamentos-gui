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

      {/* Grid de Benefícios Premium - Responsivo Otimizado */}
      <div className="grid gap-4 md:gap-5 lg:gap-6 md:grid-cols-2">
        {communityBenefits.map((benefit, i) => (
          <motion.article 
            key={i}
            className="bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-50/90 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 xl:p-7 border border-gray-200/50 shadow-sm hover:shadow-lg group cursor-pointer overflow-hidden relative"
            initial={{ x: -30, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.7 + i * 0.15,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ 
              x: 5, 
              scale: 1.02,
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              borderColor: "rgba(212, 175, 55, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            role="article"
            tabIndex={0}
            aria-label={`Benefício: ${benefit.title}`}
          >
            {/* Shimmer effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />

            <div className="flex items-start gap-3 md:gap-4 relative z-10">
              {/* Icon Container Premium */}
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 8px 25px rgba(212, 175, 55, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {/* Glow effect interno */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-xl md:rounded-2xl"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {getBenefitIcon(i)}
                </motion.div>
              </motion.div>
              
              {/* Content Area Refinado */}
              <div className="flex-1 min-w-0">
                <motion.h4 
                  className="text-sm md:text-base lg:text-lg font-bold text-[#0A192F] mb-2 md:mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  {benefit.title}
                </motion.h4>
                
                <motion.p 
                  className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                >
                  {benefit.description}
                </motion.p>
              </div>
            </div>

            {/* Progress indicator sutil */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-yellow-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2 + i * 0.2, duration: 0.8, ease: "easeOut" }}
            />
          </motion.article>
        ))}
      </div>
    </BonusCard>
  );
} 