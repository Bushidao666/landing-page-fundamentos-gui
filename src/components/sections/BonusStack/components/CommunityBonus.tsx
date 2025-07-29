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
import Image from "next/image";
import { useFloatingAnimation, createFloatingVariants } from "../../../../hooks/useFloatingAnimation";

interface CommunityBonusProps {
  index?: number;
}

export default function CommunityBonus({ index = 0 }: CommunityBonusProps) {
  const isFloating = useFloatingAnimation(2);
  const floatingVariants = createFloatingVariants(4, 3);

  const getBenefitIcon = (index: number) => {
    const icons = [MessageSquare, Briefcase, TrendingUp, Gift];
    const Icon = icons[index];
    return Icon ? <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#0A192F]" /> : null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-center">
      
      {/* COLUNA 1: CARD DE CONTEÚDO COMPACTO - 50% do espaço */}
      <motion.div
        className="lg:col-span-1 min-h-[400px] lg:min-h-[500px] flex flex-col justify-center"
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
              className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A192F] px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              SUPER BÔNUS #1
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
              src="/images/Mockups/mockup-do-zero-a-100k.png"
              alt="Mockup da Comunidade Zero ao 100K mostrando conversas da comunidade em múltiplos dispositivos"
                  width={1200}
                  height={900}
                  className="w-full h-auto rounded-2xl shadow-xl shadow-black/20 transition-shadow duration-500"
              priority
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
              Comunidade Zero ao 100K - Acesso Vitalício
            </h3>
            
            <p className="text-lg lg:text-xl font-bold text-[#B8860B] mb-4">
              R$ {bonusMetrics.communityValue}/ano
            </p>
      </motion.div>

          {/* Copy ULTRA RESUMIDA - Máximo impacto */}
      <motion.div
            className="mb-4"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
            <p className="text-base md:text-lg font-bold text-[#B8860B] mb-3 leading-tight">
              Sinceramente, vale 10x o valor do curso.
        </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              Acesso{" "}
          <motion.span 
                className="text-[#B8860B] font-bold text-base md:text-lg"
                animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            PARA SEMPRE
          </motion.span>{" "}
              à comunidade de elite com suporte direto, networking e materiais exclusivos.
        </p>
      </motion.div>

          {/* MINI-CARDS PROTAGONISTAS */}
          <div className="grid grid-cols-2 gap-3">
        {communityBenefits.map((benefit, i) => (
          <motion.article 
            key={i}
                className="bg-[#0A192F]/90 backdrop-blur-sm border border-[#1A2444]/60 rounded-lg p-3 lg:p-4 transition-all duration-300 hover:bg-[#0A192F]/95 hover:border-[#B8860B]/40 hover:shadow-xl hover:transform hover:translate-y-[-3px] group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                  delay: 0.6 + i * 0.1,
              duration: 0.3
            }}
            whileHover={{ 
                  y: -3,
              transition: { duration: 0.2 }
            }}
            role="article"
            tabIndex={0}
            aria-label={`Benefício: ${benefit.title}`}
                title={benefit.description}
          >
                {/* Shimmer effect */}
            <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 rounded-xl"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ 
                    duration: 1.5, 
                repeat: Infinity,
                    repeatDelay: 5,
                ease: "easeInOut"
              }}
            />

                {/* Layout LIMPO: Icon + Título centrado */}
                <div className="text-center">
                  {/* Icon ULTRA COMPACTO */}
              <motion.div 
                    className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-md flex items-center justify-center shadow-sm mx-auto mb-1 relative"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 3,
                      transition: { type: "spring", stiffness: 400, damping: 20 }
                }}
              >
                    {/* Glow */}
                <motion.div
                      className="absolute inset-0 bg-white/15 rounded-xl"
                  animate={{ opacity: [0, 0.4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
                
                <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                >
                  {getBenefitIcon(i)}
                </motion.div>
              </motion.div>
              
                  {/* Título ULTRA COMPACTO */}
                <motion.h4 
                    className="text-[10px] lg:text-xs font-medium text-white leading-tight group-hover:text-[#B8860B] transition-colors duration-300"
                    initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                >
                    {benefit.title.split(':')[0]}
                </motion.h4>
            </div>
          </motion.article>
        ))}
      </div>
        </div>
      </motion.div>

      {/* COLUNA 2: MOCKUP PROTAGONISTA - 50% do espaço - APENAS DESKTOP */}
      <motion.div
        className="hidden lg:flex lg:col-span-1 min-h-[400px] lg:min-h-[500px] items-center justify-center"
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
              src="/images/Mockups/mockup-do-zero-a-100k.png"
              alt="Mockup da Comunidade Zero ao 100K mostrando conversas da comunidade em múltiplos dispositivos"
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl shadow-2xl shadow-black/30 group-hover:shadow-[#B8860B]/40 transition-shadow duration-500"
              priority
            />
            

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 