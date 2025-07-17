/**
 * @file: CommunityBonus.tsx
 * @responsibility: community bonus card with premium unified styling and benefits grid
 * @exports: CommunityBonus
 * @imports: BonusCard, framer-motion, lucide-react, bonusData, unified tokens
 * @layer: components
 */

"use client";

import { motion } from "framer-motion";
import { Users, Crown, MessageSquare, Briefcase, TrendingUp, Gift } from "lucide-react";
import BonusCard from "./BonusCard";
import { bonusMetrics, communityBenefits } from "../data/bonusData";
import "../styles/aristocratic-tokens.css";
import Image from "next/image";

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
      badgeVariant="primary"
      title="Acesso VITALÍCIO à Comunidade do Zero ao 100K"
      value={`(Valor Incalculável, mas vamos colocar R$ ${bonusMetrics.communityValue}/ano)`}
      icon={Users}
      iconVariant="primary"
      floatingIcon={Crown}
      index={index}
    >
      {/* Mockup da Comunidade Premium - Logo abaixo da headline */}
      <motion.div
        className="bonus-spacing-lg"
        initial={{ y: 20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="relative group">
          {/* Glow effect behind the mockup */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-white/10 to-[#D4AF37]/20 rounded-2xl blur-lg"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Main mockup container */}
          <motion.div
            className="relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-500"
            whileHover={{ 
              y: -3,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
          >
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
            
            <Image
              src="/images/Mockups/mockup-do-zero-a-100k.png"
              alt="Mockup da Comunidade Zero ao 100K mostrando conversas da comunidade em múltiplos dispositivos"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-2xl shadow-black/30 group-hover:shadow-[#D4AF37]/20 transition-shadow duration-500"
              priority
            />
            
            {/* Floating badges */}
            <motion.div
              className="absolute top-2 right-2 bg-[#D4AF37] text-[#0A192F] px-3 py-1 rounded-full text-xs font-bold shadow-lg"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              VITALÍCIO
            </motion.div>
            
            <motion.div
              className="absolute bottom-2 left-2 bg-white/90 text-[#0A192F] px-3 py-1 rounded-full text-xs font-bold shadow-lg"
              animate={{ y: [2, -2, 2] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              Comunidade Elite
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Texto Introdutório Premium */}
      <motion.div
        className="bonus-spacing-lg"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="bonus-text-large mb-3 text-white">
          <span className="font-bold text-[#D4AF37] bonus-text-xl">Isso aqui, sinceramente, vale 10x o valor do curso.</span>
        </p>
        <p className="bonus-text-medium text-gray-300">
          Chega de se sentir sozinho, pesquisando em fóruns gringos ou esperando a boa vontade do suporte do Google. 
          Você terá acesso{" "}
          <motion.span 
            className="inline-block text-[#D4AF37] font-bold bonus-text-xl"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            PARA SEMPRE
          </motion.span>{" "}
          à nossa comunidade de elite, onde:
        </p>
      </motion.div>

      {/* Grid de Benefícios Premium */}
      <div className="bonus-benefit-grid">
        {communityBenefits.map((benefit, i) => (
          <motion.article 
            key={i}
            className="bonus-benefit-card group cursor-pointer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6 + i * 0.08,
              duration: 0.3
            }}
            whileHover={{ 
              y: -2,
              transition: { duration: 0.2 }
            }}
            role="article"
            tabIndex={0}
            aria-label={`Benefício: ${benefit.title}`}
          >
            {/* Shimmer effect premium */}
            <motion.div
              className="absolute inset-0 bonus-shimmer opacity-0 group-hover:opacity-100 rounded-xl"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ 
                duration: 1.8, 
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
              }}
            />

            <div className="bonus-benefit-header">
              {/* Icon Container Premium */}
              <motion.div 
                className="bonus-benefit-icon"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 3,
                  transition: { type: "spring", stiffness: 350, damping: 15 }
                }}
              >
                {/* Glow effect premium */}
                <motion.div
                  className="absolute inset-0 bg-white/15 rounded-lg"
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {getBenefitIcon(i)}
                </motion.div>
              </motion.div>
              
              {/* Content Premium */}
              <div className="flex-1 min-w-0">
                <motion.h4 
                  className="bonus-benefit-title group-hover:text-[#D4AF37] transition-colors duration-300"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                >
                  {benefit.title}
                </motion.h4>
                
                <motion.p 
                  className="bonus-benefit-description group-hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.08 }}
                >
                  {benefit.description}
                </motion.p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </BonusCard>
  );
} 