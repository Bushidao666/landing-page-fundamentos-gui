"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Sparkles, CreditCard, Calendar, DollarSign, Gift, Crown, TrendingUp, Zap, Calculator, Star, Award, Target, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.8 },
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

const priceRevealVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 50 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Componente de Partículas de Celebração - OTIMIZADO
const CelebrationElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -60, -20],
            x: [-15, 15, -15],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/70" />
        </motion.div>
      ))}
      {/* Confetti dourado - OTIMIZADO */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`confetti-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, -40, -10],
            rotate: [0, 180, 360],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <Star className="w-2 h-2 text-[#D4AF37] fill-[#D4AF37]" />
        </motion.div>
      ))}
    </div>
  );
};

// Contador Animado para Preços
const AnimatedPrice = ({ target, prefix = "", suffix = "", delay = 0 }: { target: number; prefix?: string; suffix?: string; delay?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
      const duration = 2000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(target * easeProgress));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [target, delay]);

  return <span>{prefix}{hasStarted ? count.toLocaleString('pt-BR') : '0'}{suffix}</span>;
};

const valueBreakdown = [
  {
    name: "O Curso Fundamentos do Google Ads",
    value: 197,
    icon: Target,
    color: "from-blue-500 to-purple-600",
    description: "Base completa para dominar Google Ads"
  },
  {
    name: "BÔNUS 1: Acesso Vitalício à Comunidade do Zero ao 100K",
    value: 497,
    icon: Crown,
    color: "from-[#D4AF37] to-yellow-400",
    description: "Suporte de elite para sempre",
    highlight: "VITALÍCIO"
  },
  {
    name: "BÔNUS 2: Passaporte Aceleração Completo",
    value: 97,
    icon: Zap,
    color: "from-green-500 to-emerald-600",
    description: "9 aulas + 9 ferramentas práticas"
  },
  {
    name: "BÔNUS 3: 7 Assistentes de IA (GPTs) Exclusivos",
    value: 297,
    icon: Sparkles,
    color: "from-purple-500 to-pink-600",
    description: "Exército pessoal de inteligência artificial"
  },
];

export default function PriceAnchoringSection() {
  const [priceRevealed, setPriceRevealed] = useState(false);
  const [paymentOption, setPaymentOption] = useState<'installments' | 'cash'>('installments');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPriceRevealed(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const totalValue = valueBreakdown.reduce((sum, item) => sum + item.value, 0);

  return (
    <motion.section
      id="price-anchoring"
      className="relative py-16 sm:py-20 lg:py-28 xl:py-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Tech-Aristocrático */}
      <div className="absolute inset-0">
        {/* Camada Base - Gradiente Tech Premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#1a2444] to-[#0f1419]" />
        
        {/* Textura de Veludo Digital */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        </div>
        
        {/* Grid Pattern Sutil - Tech */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        {/* Nebulosa Premium */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[300px] bg-gradient-to-r from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[250px] bg-gradient-to-l from-slate-400/10 via-slate-500/5 to-transparent rounded-full blur-2xl" />
        </div>
        
        {/* Overlay de Profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        
        {/* Partículas de celebração */}
        <CelebrationElements />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção - OTIMIZADO */}
        <motion.div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20" variants={itemVariants}>
          {/* Badge Premium */}
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#D4AF37]/30 via-[#FFD700]/20 to-[#D4AF37]/30 backdrop-blur-2xl border border-[#D4AF37]/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl mb-6 sm:mb-8 lg:mb-12"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.2em]">
              Resumo da Oferta
            </span>
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
          </motion.div>

          {/* Headline - OTIMIZADA */}
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-black leading-[1] sm:leading-[0.9] tracking-tight text-white mb-6 sm:mb-8"
            variants={itemVariants}
          >
            Recapitulando{" "}
            <motion.span 
              className="text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text animate-shimmer bg-[length:200%_100%]"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              TUDO
            </motion.span>{" "}
            o que você destrava hoje:
          </motion.h2>
        </motion.div>

        {/* Breakdown de Valores - OTIMIZADO */}
        <motion.div className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20" variants={itemVariants}>
          <div className="bg-gradient-to-br from-white/95 via-gray-50/95 to-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-gray-200/50 shadow-2xl">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {valueBreakdown.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                  whileHover={{ x: 3, scale: 1.01 }}
                >
                  <div className="flex items-center justify-between p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white to-gray-50 border border-gray-200/50 hover:border-[#D4AF37]/30 transition-all duration-300 group-hover:shadow-lg">
                    {/* Conteúdo do Item - OTIMIZADO */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1">
                      {/* Ícone - OTIMIZADO */}
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${item.color} rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      
                      {/* Informações - OTIMIZADAS */}
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#0A192F] mb-1 sm:mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                          {item.name}
                          {item.highlight && (
                            <motion.span 
                              className="ml-2 sm:ml-3 px-2 sm:px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs sm:text-sm font-bold uppercase rounded-full"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {item.highlight}
                            </motion.span>
                          )}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                      </div>
                    </div>

                    {/* Valor - OTIMIZADO */}
                    <div className="text-right ml-2 sm:ml-4">
                      <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-[#D4AF37]">
                        R$ <AnimatedPrice target={item.value} delay={1000 + index * 300} />
                      </div>
                      <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide font-medium">Valor</div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Separador Dramático - OTIMIZADO */}
              <motion.div 
                className="relative py-4 sm:py-6 lg:py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-[#0A192F] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-lg">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                    VALOR TOTAL
                  </div>
                </div>
              </motion.div>

              {/* Valor Total Dramático - OTIMIZADO */}
              <motion.div
                className="text-center py-4 sm:py-6 lg:py-8"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 3, duration: 1, type: "spring", bounce: 0.5 }}
              >
                <div className="inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-2xl sm:rounded-3xl px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 shadow-2xl border-2 sm:border-4 border-white/30">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0A192F]">
                    R$ <AnimatedPrice target={totalValue} delay={3500} />
                  </span>
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#0A192F]" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Revelação do Preço Real - OTIMIZADO */}
        <motion.div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16" variants={itemVariants}>
          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-white mb-8 sm:mb-10 lg:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
          >
            Seu Investimento Hoje para Ter Toda essa Estrutura:
          </motion.h3>

          {/* Container da Revelação do Preço - OTIMIZADO */}
          <AnimatePresence>
            {priceRevealed && (
              <motion.div
                className="space-y-6 sm:space-y-8"
                variants={priceRevealVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Opções de Pagamento - OTIMIZADO */}
                <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <motion.button
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                      paymentOption === 'installments' 
                        ? 'bg-[#D4AF37] text-[#0A192F] shadow-lg shadow-[#D4AF37]/30' 
                        : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                    }`}
                    onClick={() => setPaymentOption('installments')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                    Parcelado
                  </motion.button>
                  <motion.button
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                      paymentOption === 'cash' 
                        ? 'bg-[#D4AF37] text-[#0A192F] shadow-lg shadow-[#D4AF37]/30' 
                        : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                    }`}
                    onClick={() => setPaymentOption('cash')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                    À Vista
                  </motion.button>
                </div>

                {/* Preço Principal - OTIMIZADO */}
                <motion.div
                  className="relative"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    textShadow: ["0 0 20px rgba(212, 175, 55, 0.3)", "0 0 40px rgba(212, 175, 55, 0.6)", "0 0 20px rgba(212, 175, 55, 0.3)"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    scale: { duration: 2 }
                  }}
                >
                  {paymentOption === 'installments' ? (
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#D4AF37] leading-tight">
                        Apenas 12x de R$ 4,70
                      </h4>
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
                        ou <span className="font-bold text-white">R$ 47,00 à vista</span>
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#D4AF37] leading-tight">
                        R$ 47,00 à vista
                      </h4>
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
                        ou <span className="font-bold text-white">12x de R$ 4,70</span>
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Texto de Comparação - OTIMIZADO */}
                <motion.p
                  className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Sim, você não leu errado. Todo esse arsenal de conhecimento, ferramentas e comunidade por{" "}
                  <span className="font-bold text-[#D4AF37] relative">
                    menos do que você paga em um almoço
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  </span>.
                </motion.p>

                {/* CTA Button Premium - OTIMIZADO */}
                <motion.div
                  className="pt-8 sm:pt-10 lg:pt-12"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group"
                  >
                    <Button 
                      size="lg" 
                      className="relative overflow-hidden text-base sm:text-lg lg:text-xl xl:text-2xl px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 xl:py-8 h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-black shadow-2xl shadow-[#D4AF37]/50 border-2 sm:border-4 border-[#D4AF37]/30 rounded-2xl sm:rounded-3xl transition-all duration-500 backdrop-blur-sm"
                    >
                      {/* Efeito de Brilho */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
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
                      
                      <span className="relative flex items-center gap-2 sm:gap-3 lg:gap-4 z-10">
                        <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="tracking-wide text-center">QUERO O KIT COMPLETO POR APENAS R$ 47!</span>
                        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#0A192F] group-hover:text-[#0A192F] transition-colors duration-300" />
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Indicações de Segurança - OTIMIZADO */}
                <motion.div 
                  className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span>Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span>Acesso Imediato</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    <span>Garantia 7 Dias</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
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