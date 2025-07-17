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
import "../styles/aristocratic-tokens.css";
import Image from "next/image";

interface PassportBonusProps {
  index?: number;
}

export default function PassportBonus({ index = 1 }: PassportBonusProps) {
  return (
    <BonusCard
      badgeText="Super Bônus #2"
      badgeVariant="secondary"
      title="Acesso Completo ao Passaporte Aceleração"
      value={`(Valor: R$ ${bonusMetrics.passportValue})`}
      icon={Zap}
      iconVariant="secondary"
      floatingIcon={Zap}
      index={index}
    >
      {/* Mockup do Passaporte Premium - Logo abaixo da headline */}
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
              src="/images/Mockups/mockup passaporte.png"
              alt="Mockup do Passaporte Aceleração mostrando as 9 aulas rápidas e ferramentas práticas"
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
              KIT COMPLETO
            </motion.div>
            
            <motion.div
              className="absolute bottom-2 left-2 bg-white/90 text-[#0A192F] px-3 py-1 rounded-full text-xs font-bold shadow-lg"
              animate={{ y: [2, -2, 2] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              9 Aulas + 9 Ferramentas
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Descrição Premium */}
      <motion.div
        className="mb-8 md:mb-10 lg:mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.p 
          className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed font-medium"
          animate={{
            textShadow: [
              "0 0 0px rgba(255, 255, 255, 0)",
              "0 0 8px rgba(255, 255, 255, 0.1)",
              "0 0 0px rgba(255, 255, 255, 0)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Se o &quot;Fundamentos&quot; é a sua{" "}
          <motion.span 
            className="text-[#D4AF37] font-bold relative"
            animate={{
              textShadow: [
                "0 0 0px rgba(212, 175, 55, 0)",
                "0 0 12px rgba(212, 175, 55, 0.4)",
                "0 0 0px rgba(212, 175, 55, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            aula de anatomia
          </motion.span>, o &quot;Passaporte&quot; é o seu{" "}
          <motion.span 
            className="text-[#D4AF37] font-bold relative"
            animate={{
              textShadow: [
                "0 0 0px rgba(212, 175, 55, 0)",
                "0 0 12px rgba(212, 175, 55, 0.4)",
                "0 0 0px rgba(212, 175, 55, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            kit de primeiros socorros
          </motion.span>. 
        </motion.p>
        
        <motion.p 
          className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed font-medium mt-4 md:mt-5"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        >
          Enquanto você aprende a base teórica, já pode usar as{" "}
          <span className="text-white font-black text-lg md:text-xl lg:text-2xl">9 aulas rápidas</span>{" "}
          e as{" "}
          <span className="text-white font-black text-lg md:text-xl lg:text-2xl">9 ferramentas práticas</span>{" "}
          do Passaporte para aplicar otimizações imediatas e{" "}
          <motion.span 
            className="text-[#D4AF37] font-black relative"
            animate={{
              textShadow: [
                "0 0 0px rgba(212, 175, 55, 0)",
                "0 0 15px rgba(212, 175, 55, 0.5)",
                "0 0 0px rgba(212, 175, 55, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            &quot;estancar o sangramento&quot;
          </motion.span>{" "}
          de verba nas suas campanhas. Um complementa o outro perfeitamente.
        </motion.p>
      </motion.div>

      {/* Mockup Visual Premium */}
      <motion.div 
        className="bg-gradient-to-br from-green-800/20 via-emerald-800/15 to-green-900/25 backdrop-blur-2xl rounded-xl md:rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-8 xl:p-10 border border-green-500/30 shadow-2xl relative overflow-hidden group"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(34, 197, 94, 0.15)"
        }}
      >
        {/* Background Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent -skew-x-12"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut"
          }}
        />
        
        {/* Header Premium */}
        <motion.div 
          className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 relative z-10"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <BookOpen className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-green-400 drop-shadow-sm" />
            {/* Glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-green-400/20 blur-md"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.span 
            className="text-green-400 text-base md:text-lg lg:text-xl font-bold"
            animate={{
              textShadow: [
                "0 0 0px rgba(34, 197, 94, 0)",
                "0 0 12px rgba(34, 197, 94, 0.4)",
                "0 0 0px rgba(34, 197, 94, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Kit de Ferramentas Completo
          </motion.span>
          
          {/* Floating indicator */}
          <motion.div
            className="w-3 h-3 bg-green-400 rounded-full shadow-lg"
            animate={{ 
              y: [-3, 3, -3],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {/* 9 Aulas Rápidas Premium */}
          <motion.div 
            className="space-y-3 md:space-y-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.h4 
              className="text-white font-black text-base md:text-lg lg:text-xl mb-4 md:mb-5 flex items-center gap-2"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255, 255, 255, 0)",
                  "0 0 8px rgba(255, 255, 255, 0.3)",
                  "0 0 0px rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span>9 Aulas Rápidas:</span>
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.h4>
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-3 md:gap-4 group cursor-pointer"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <motion.div
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-green-400 drop-shadow-sm" />
                  <motion.div
                    className="absolute inset-0 bg-green-400/30 rounded-full blur-sm"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </motion.div>
                
                <div className="flex-1 h-2.5 md:h-3 bg-gradient-to-r from-green-200 to-green-100 rounded-full overflow-hidden shadow-inner relative">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: `${60 + i * 10}%` }}
                    transition={{ delay: 1.5 + i * 0.2, duration: 1.2, ease: "easeOut" }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2 + i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  {/* Progress glow */}
                  <motion.div
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-green-400 rounded-full shadow-lg"
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      delay: 2.5 + i * 0.2,
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                </div>
                
                <motion.span 
                  className="text-green-300 text-sm md:text-base font-bold min-w-[60px] group-hover:text-green-200 transition-colors"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  Aula {i + 1}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* 9 Ferramentas Práticas Premium */}
          <motion.div 
            className="space-y-3 md:space-y-4"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.h4 
              className="text-white font-black text-base md:text-lg lg:text-xl mb-4 md:mb-5 flex items-center gap-2"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255, 255, 255, 0)",
                  "0 0 8px rgba(255, 255, 255, 0.3)",
                  "0 0 0px rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <span>9 Ferramentas Práticas:</span>
              <motion.div
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.h4>
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-3 md:gap-4 group cursor-pointer"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                whileHover={{ x: -5, scale: 1.02 }}
              >
                <motion.div
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: -360 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 drop-shadow-sm" />
                  <motion.div
                    className="absolute inset-0 bg-emerald-400/30 rounded-full blur-sm"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: (i * 0.3) + 1 }}
                  />
                </motion.div>
                
                <div className="flex-1 h-2.5 md:h-3 bg-gradient-to-r from-emerald-200 to-emerald-100 rounded-full overflow-hidden shadow-inner relative">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: `${80 + i * 5}%` }}
                    transition={{ delay: 1.7 + i * 0.2, duration: 1.2, ease: "easeOut" }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2.5 + i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  {/* Progress glow */}
                  <motion.div
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-lg"
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      delay: 2.7 + i * 0.2,
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                </div>
                
                <motion.span 
                  className="text-emerald-300 text-sm md:text-base font-bold min-w-[60px] group-hover:text-emerald-200 transition-colors"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: (i * 0.2) + 1 }}
                >
                  Tool {i + 1}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </BonusCard>
  );
} 