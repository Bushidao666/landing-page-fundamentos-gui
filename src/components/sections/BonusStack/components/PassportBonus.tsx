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
import { bonusMetrics } from "../data/bonusData";
import "../styles/aristocratic-tokens.css";
import Image from "next/image";
import { useFloatingAnimation, createFloatingVariants } from "../../../../hooks/useFloatingAnimation";

interface PassportBonusProps {
  index?: number;
}

export default function PassportBonus({ index = 1 }: PassportBonusProps) {
  const isFloating = useFloatingAnimation(3);
  const floatingVariants = createFloatingVariants(5, 3);

  const tools = [
    { name: "Aula 1", description: "Fundamentos", icon: BookOpen },
    { name: "Aula 2", description: "Estratégias", icon: Play },
    { name: "Aula 3", description: "Execução", icon: CheckCircle },
    { name: "Aula 4", description: "Otimização", icon: Zap },
    { name: "Aula 5", description: "Escalonamento", icon: BookOpen },
    { name: "Aula 6", description: "Automação", icon: Play },
  ];

  const getToolIcon = (index: number) => {
    const Icon = tools[index]?.icon || Zap;
    return <Icon className="w-3 h-3 lg:w-4 lg:h-4 text-[#0A192F]" />;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-center">
      
      {/* COLUNA 1: MOCKUP PROTAGONISTA - 50% do espaço - APENAS DESKTOP */}
      <motion.div
        className="hidden lg:flex lg:col-span-1 min-h-[400px] lg:min-h-[500px] items-center justify-center order-2 lg:order-1"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
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
              src="/images/Mockups/mockup passaporte.png"
              alt="Mockup do Passaporte Aceleração mostrando as 9 aulas rápidas e ferramentas práticas"
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl shadow-2xl shadow-black/30 group-hover:shadow-[#B8860B]/40 transition-shadow duration-500"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* COLUNA 2: CONTEÚDO COMPACTO - 50% do espaço */}
      <motion.div
        className="lg:col-span-1 min-h-[400px] lg:min-h-[500px] flex flex-col justify-center order-1 lg:order-2"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
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
              SUPER BÔNUS #2
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
                  src="/images/Mockups/mockup passaporte.png"
                  alt="Mockup do Passaporte Aceleração mostrando as 9 aulas rápidas e ferramentas práticas"
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
              Passaporte Aceleração
            </h3>
            
            <p className="text-lg lg:text-xl font-bold text-[#B8860B] mb-4">
              (Valor: R$ {bonusMetrics.passportValue})
            </p>
          </motion.div>

          {/* Descrição Premium */}
          <motion.div
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-4">
              Se o "Fundamentos" é a sua{" "}
              <motion.span 
                className="text-[#B8860B] font-bold relative"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                aula de anatomia
              </motion.span>, o "Passaporte" é o seu{" "}
              <motion.span 
                className="text-[#B8860B] font-bold relative"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                kit de primeiros socorros
              </motion.span>. 
            </p>
            
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Enquanto você aprende a base teórica, já pode usar as{" "}
              <span className="text-gray-900 font-black text-base md:text-lg">9 aulas rápidas</span>{" "}
              e as{" "}
              <span className="text-gray-900 font-black text-base md:text-lg">9 ferramentas práticas</span>{" "}
              do Passaporte para aplicar otimizações imediatas e{" "}
              <motion.span 
                className="text-[#B8860B] font-black relative"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                "estancar o sangramento"
              </motion.span>{" "}
              de verba nas suas campanhas. Um complementa o outro perfeitamente.
            </p>
          </motion.div>

          {/* MINI-CARDS PROTAGONISTAS */}
          <div className="grid grid-cols-2 gap-3">
            {tools.slice(0, 6).map((tool, i) => (
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
                aria-label={`Ferramenta: ${tool.name}`}
                title={tool.description}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/8 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 rounded-lg"
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
                  {/* Icon PROTAGONISTA */}
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
                      className="absolute inset-0 bg-white/15 rounded-md"
                      animate={{ opacity: [0, 0.4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                    
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {getToolIcon(i)}
                    </motion.div>
                  </motion.div>
                  
                  {/* Título PROTAGONISTA */}
                  <motion.h4 
                    className="text-[10px] lg:text-xs font-medium text-white leading-tight group-hover:text-[#B8860B] transition-colors duration-300"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                  >
                    {tool.name}
                  </motion.h4>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
} 