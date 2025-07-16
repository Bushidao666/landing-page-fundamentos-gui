"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionValue } from "framer-motion";
import { Target, CreditCard, Shield, Clock, CheckCircle, Award, TrendingUp, Brain } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const floatingVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.2,
    },
  },
};

// Componente de Partículas Flutuantes Premium Otimizado
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, -40, -10],
            x: [-8, 8, -8],
            opacity: [0.1, 0.5, 0.1],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 1.5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/60" />
        </motion.div>
      ))}
    </div>
  );
};

export default function SolutionSection() {

  return (
    <motion.section
      id="solution"
      className="relative py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Tech-Aristocrático */}
      <div className="absolute inset-0">
        {/* Camada Base - Gradiente Premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100" />
        
        {/* Overlay de Transição */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/5 to-[#0A192F]/15" />
        
        {/* Grid Pattern Sutil */}
        <div className="absolute inset-0 opacity-[0.01] md:opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />
        </div>
        
        {/* Nebulosa Premium */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/3 w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-[200px] md:h-[250px] lg:h-[300px] xl:h-[400px] bg-gradient-to-l from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent rounded-full blur-2xl md:blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] bg-gradient-to-r from-slate-400/10 via-slate-500/5 to-transparent rounded-full blur-xl md:blur-2xl" />
        </div>
        
        {/* Partículas Flutuantes */}
        <FloatingElements />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          
          {/* Mockup Premium do Produto - Lado Esquerdo */}
          <motion.div 
            className="relative order-2 lg:order-1 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            {/* Container Principal da Imagem com Glassmorphism */}
            <motion.div 
              className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl border border-white/20 overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                rotateY: 1,
                boxShadow: "0 25px 50px rgba(212, 175, 55, 0.3)"
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Efeito de Brilho no Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent skew-x-12 opacity-0"
                whileHover={{ opacity: 1, x: ["100%", "-100%"] }}
                transition={{ duration: 1.5 }}
              />
              
              {/* Container da Imagem Principal */}
              <div className="relative">
                <motion.div
                  className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/Mockups/mockup box curso.png"
                    alt="Kit de Inteligência Google Ads - Fundamentos para E-commerce"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                    quality={95}
                  />
                  
                  {/* Overlay Sutil para Integração Visual */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-xl md:rounded-2xl" />
                </motion.div>
              </div>

              {/* Status Badge Flutuante */}
              <motion.div 
                className="absolute -top-3 md:-top-4 lg:-top-6 -right-3 md:-right-4 lg:-right-6 bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-[#0A192F] px-4 md:px-5 lg:px-6 py-2.5 md:py-3 lg:py-3.5 rounded-full font-bold text-sm md:text-base shadow-2xl border-2 border-white/20 z-10"
                variants={floatingVariants}
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <Award className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Acesso Vitalício</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Conteúdo da Solução Premium - Lado Direito */}
          <motion.div 
            className="space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 order-1 lg:order-2"
            variants={containerVariants}
          >
            {/* Badge de Apresentação Premium */}
            <motion.div
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 backdrop-blur-xl border border-[#D4AF37]/40 px-4 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 rounded-full shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                className="w-2 h-2 md:w-3 md:h-3 bg-[#D4AF37] rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Brain className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold text-sm md:text-base lg:text-lg uppercase tracking-[0.1em] md:tracking-[0.15em]">
                A Solução Inteligente
              </span>
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
            </motion.div>

            {/* Headline da Solução com Shimmer */}
            <motion.div className="space-y-3 md:space-y-4 lg:space-y-5" variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-black leading-tight md:leading-tight lg:leading-tight tracking-tight text-[#0A192F]">
                <span className="block text-gray-600 text-base md:text-lg lg:text-xl font-normal mb-2 md:mb-3 lg:mb-4">
                  Apresentando: O
                </span>
                <motion.span 
                  className="block text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] via-[#FFA500] to-[#D4AF37] bg-clip-text animate-shimmer bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Fundamentos do Google Ads
                </motion.span>
                <span className="block text-gray-700 text-lg md:text-xl lg:text-2xl font-light mt-1 md:mt-2">
                  para E-commerce
                </span>
              </h2>
            </motion.div>

            {/* Texto de Posicionamento Premium */}
            <motion.div className="space-y-4 md:space-y-6 lg:space-y-8" variants={itemVariants}>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                Não é mais um &quot;cursinho&quot; genérico. É um{" "}
                <span className="font-bold text-[#0A192F] relative">
                  Kit de Inteligência Estratégica
                  <motion.div
                    className="absolute -bottom-0.5 md:-bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  />
                </span>{" "}
                que te dá exatamente o que você precisa: controle total sobre suas campanhas 
                e a capacidade de transformar cada clique em{" "}
                <span className="text-[#D4AF37] font-semibold">lucro real</span>.
              </p>
              
              {/* Comparação Premium */}
              <motion.div 
                className="bg-gradient-to-br from-gray-50 via-white to-gray-50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-gray-200/50 shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <h4 className="font-bold text-[#0A192F] mb-4 md:mb-6 text-base md:text-lg lg:text-xl flex items-center gap-2 md:gap-3">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                  A diferença crucial:
                </h4>
                <div className="grid gap-3 md:gap-4">
                  <motion.div 
                    className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-red-50/50 border border-red-100"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-red-500 font-bold text-lg md:text-xl">❌</span>
                    <span className="text-gray-700 text-sm md:text-base">
                      <strong className="text-red-600">Cursos tradicionais:</strong> Teoria sem fim, sem aplicação prática
                    </span>
                  </motion.div>
                  <motion.div 
                    className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-green-50/50 border border-green-100"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-green-500 font-bold text-lg md:text-xl">✅</span>
                    <span className="text-gray-700 text-sm md:text-base">
                      <strong className="text-green-600">Kit de Inteligência:</strong> Sistema step-by-step para resultados imediatos
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Button Premium */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Button 
                  size="lg" 
                  className="relative overflow-hidden w-full md:w-auto text-base md:text-lg lg:text-xl px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-bold shadow-2xl shadow-[#D4AF37]/40 border-2 border-[#D4AF37]/30 rounded-xl md:rounded-2xl transition-all duration-500 backdrop-blur-sm"
                >
                  {/* Efeito de Brilho */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                  
                  <span className="relative flex items-center justify-center gap-2 md:gap-3 lg:gap-4 z-10">
                    <CreditCard className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="tracking-wide text-center">
                      <span className="hidden md:inline">Quero Começar a Anunciar com Inteligência por </span>
                      <span className="md:hidden">Começar Agora por </span>
                      R$ 47
                    </span>
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#0A192F] group-hover:text-[#0A192F] transition-colors duration-300" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators Premium */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6"
              variants={containerVariants}
            >
              {[
                { icon: Shield, text: "Pagamento 100% Seguro" },
                { icon: Clock, text: "Acesso Imediato e Vitalício" },
                { icon: CheckCircle, text: "Garantia Blindada 7 Dias" },
                { icon: Award, text: "Resultados Comprovados" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-xl px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-white/30 shadow-lg text-sm md:text-base text-gray-700 font-medium"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <item.icon className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="whitespace-nowrap">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
} 