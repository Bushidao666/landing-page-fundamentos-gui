"use client";

import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { AlertTriangle, TrendingDown, HelpCircle, Zap, Target, BarChart3, Brain, DollarSign, Timer, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const cascadeVariants = {
  hidden: { x: -100, y: 50, opacity: 0, rotateY: -15 },
  visible: (index: number) => ({
    x: 0,
    y: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.9,
      delay: index * 0.25,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

// Componente Contador Animado
const AnimatedCounter = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
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
    }
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

// Componente de Partículas Flutuantes Premium
const FloatingElements = () => {
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
            y: [-20, -80, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50" />
        </motion.div>
      ))}
    </div>
  );
};

const painPoints = [
  {
    icon: AlertTriangle,
    title: "AQUELE PÂNICO AO ABRIR O PAINEL:",
    description: "Você entra no Google Ads e uma onda de ansiedade te consome. Tantas siglas, gráficos e botões... e a sensação paralisante de que qualquer clique errado pode queimar o orçamento do dia em minutos.",
    impact: "Paralisia por Análise",
    severity: "crítico"
  },
  {
    icon: TrendingDown,
    title: "A DOR DE VER O DINHEIRO VIRAR FUMAÇA:",
    description: "Você investe seu suado dinheiro, vê os cliques chegando, mas o faturamento não mexe. No fim do mês, a conta é amarga: o Google ficou com uma boa parte, e o lucro real que sobrou mal paga o esforço.",
    impact: "Sangramento Financeiro",
    severity: "extremo"
  },
  {
    icon: HelpCircle,
    title: "AS DÚVIDAS QUE TE ASSOMBRAM DE NOITE:",
    description: '"Meu ROAS de 3x é bom ou ruim?", "Qual o CPA ideal pro meu nicho?", "Por que só atraio curioso?", "Devo usar PMax ou essa joça vai torrar minha verba sem controle?".',
    impact: "Insônia Estratégica",
    severity: "alto"
  },
  {
    icon: Zap,
    title: "A FRUSTRAÇÃO DE JÁ TER TENTADO DE TUDO:",
    description: 'Você segue dicas de "gurus", copia campanhas, aperta os botões que te falaram... e o resultado é sempre o mesmo: decepção, dinheiro perdido e a crença de que "Google Ads é muito caro e complicado pra mim".',
    impact: "Ciclo de Fracasso",
    severity: "devastador"
  },
];

export default function PainPointsSection() {
  const scrollY = useMotionValue(0);
  const backgroundDarkness = useTransform(scrollY, [0, 1000], [0, 0.7]);

  return (
    <motion.section
      id="pain-points"
      className="relative py-20 lg:py-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      style={{ 
        background: useTransform(
          scrollY, 
          [0, 1000], 
          ["linear-gradient(to bottom, #ffffff, #f8fafc)", "linear-gradient(to bottom, #0f172a, #1e293b)"]
        )
      }}
    >
      {/* Background Cinematográfico Dinâmico */}
      <div className="absolute inset-0">
        {/* Gradiente base que escurece progressivamente */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-slate-100"
          style={{ opacity: useTransform(scrollY, [0, 800], [1, 0]) }}
        />
        
        {/* Overlay escuro progressivo */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/0 via-[#0A192F]/20 to-[#0A192F]/60"
          style={{ opacity: backgroundDarkness }}
        />
        
        {/* Partículas flutuantes */}
        <FloatingElements />
        
        {/* Grid pattern que aparece progressivamente */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ opacity: useTransform(scrollY, [0, 600], [0, 0.1]) }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header Cinematográfico */}
        <motion.div className="text-center max-w-6xl mx-auto mb-24" variants={itemVariants}>
          {/* Badge Premium */}
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37]/20 to-[#D4AF37]/30 backdrop-blur-2xl border border-[#D4AF37]/50 px-8 py-4 rounded-full shadow-2xl mb-12"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Target className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-[0.2em]">
              A Realidade dos Anunciantes
            </span>
            <BarChart3 className="w-5 h-5 text-[#D4AF37]" />
          </motion.div>

          {/* Headline Dramática */}
          <motion.div className="space-y-6 mb-12" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-black leading-[0.85] tracking-tight text-[#0A192F]">
              <span className="block text-gray-600 text-2xl md:text-3xl lg:text-4xl font-normal mb-4">
                Sejamos honestos: gerenciar Google Ads
              </span>
              <span className="block text-gray-600 text-2xl md:text-3xl lg:text-4xl font-normal mb-6">
                para seu e-commerce parece mais um
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
                campo minado
              </motion.span>
              <span className="block text-gray-700 text-3xl md:text-4xl lg:text-5xl font-light mt-4">
                do que um caminho para o lucro?
              </span>
            </h2>
          </motion.div>

          {/* Estatísticas Dramáticas */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-gradient-to-br from-red-500/10 to-red-600/5 backdrop-blur-xl border border-red-400/20 rounded-2xl p-6 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-black text-red-600 mb-2">
                <AnimatedCounter target={87} suffix="%" />
              </div>
              <p className="text-sm text-gray-700 font-medium">
                perdem dinheiro nos primeiros 3 meses
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl p-6 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-black text-[#D4AF37] mb-2">
                R$ <AnimatedCounter target={2300000} />
              </div>
              <p className="text-sm text-gray-700 font-medium">
                desperdiçados este mês no Brasil
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-xl border border-orange-400/20 rounded-2xl p-6 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-black text-orange-600 mb-2">
                <AnimatedCounter target={156} />h
              </div>
              <p className="text-sm text-gray-700 font-medium">
                perdidas tentando "descobrir sozinho"
              </p>
            </motion.div>
          </motion.div>

          {/* Texto de Conexão */}
          <motion.p
            className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light"
            variants={itemVariants}
          >
            Se você se sente assim, saiba que você está no lugar certo. Eu converso com donos de e-commerce como você todos os dias.{" "}
            <span className="text-[#0A192F] font-semibold">A história é sempre a mesma...</span>
          </motion.p>
        </motion.div>

        {/* Timeline of Pain - Cascata Dramática */}
        <div className="relative max-w-7xl mx-auto">
          {/* Linha de conexão vertical */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-red-400 to-red-600 opacity-30" />
          
          <div className="space-y-16 lg:space-y-24">
            {painPoints.map((pain, index) => (
              <motion.div
                key={index}
                className="relative"
                custom={index}
                variants={cascadeVariants}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Card Principal Dramático */}
                <motion.div 
                  className={`relative ml-16 md:ml-32 ${index % 2 === 1 ? 'md:mr-32' : ''} group`}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 2 : -2,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Background do Card com efeito de quebra */}
                  <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 backdrop-blur-2xl border border-gray-200 group-hover:border-[#D4AF37]/40 rounded-3xl p-8 lg:p-12 shadow-2xl group-hover:shadow-[#D4AF37]/20 transition-all duration-500 overflow-hidden">
                    
                    {/* Efeito de rachadura no hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(239, 68, 68, 0.1) 45%, rgba(239, 68, 68, 0.1) 55%, transparent 60%)`,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Cabeçalho do Card */}
                      <div className="flex items-start gap-6 mb-8">
                        {/* Ícone Dramático */}
                        <motion.div 
                          className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-[#D4AF37]/40 group-hover:scale-110 transition-all duration-300"
                          whileHover={{ rotate: 15 }}
                        >
                          <pain.icon className="w-10 h-10 text-[#0A192F]" />
                        </motion.div>

                        {/* Conteúdo Principal */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-red-500/10 text-red-600 text-xs font-bold uppercase tracking-wider rounded-full border border-red-400/20">
                              {pain.severity}
                            </span>
                            <span className="text-[#D4AF37] text-sm font-medium">
                              {pain.impact}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl lg:text-3xl font-bold text-[#0A192F] mb-6 group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
                            {pain.title}
                          </h3>
                          
                          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                            {pain.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Número do Card */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 backdrop-blur rounded-full flex items-center justify-center border border-[#D4AF37]/30">
                      <span className="text-lg font-bold text-[#D4AF37]">{index + 1}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Conector circular */}
                <motion.div
                  className="absolute left-6 md:left-14 top-8 w-6 h-6 bg-gradient-to-br from-[#D4AF37] to-red-400 rounded-full border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.3 }}
                  style={{
                    boxShadow: `0 0 20px rgba(212, 175, 55, 0.5)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seção de Ruptura e Transformação */}
        <motion.div 
          className="relative mt-32 mb-16"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Efeito de Ruptura Visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          {/* Container da Transformação */}
          <motion.div 
            className="relative bg-gradient-to-br from-[#0A192F] via-[#1a2444] to-[#0A192F] rounded-3xl p-12 lg:p-20 border border-[#D4AF37]/30 shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            {/* Partículas de fundo */}
            <div className="absolute inset-0 opacity-20">
              <FloatingElements />
            </div>

            {/* Ícone Central Transformador */}
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Brain className="w-12 h-12 text-[#0A192F]" />
            </motion.div>

            {/* Texto de Transformação */}
            <div className="relative z-10 text-center space-y-8">
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
                Chega. O problema não é você. É a falta do ALICERCE.
              </h3>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
                Tentar otimizar campanhas sem entender os{" "}
                <span className="font-bold text-[#D4AF37]">FUNDAMENTOS</span>{" "}
                é como tentar construir uma casa começando pelo telhado. Não se sustenta. 
                Você fica refém de "hacks" que param de funcionar e de um algoritmo que parece ter vida própria.
              </p>
              
              {/* Call to Transformation */}
              <motion.div 
                className="bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 rounded-2xl p-8 border border-[#D4AF37]/40 backdrop-blur-xl"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Target className="w-8 h-8 text-[#D4AF37]" />
                  <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
                  <DollarSign className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-white text-center leading-tight">
                  É hora de parar de ser um "operador de painel" e se tornar o{" "}
                  <motion.span 
                    className="text-transparent bg-gradient-to-r from-[#D4AF37] via-yellow-400 to-[#D4AF37] bg-clip-text animate-shimmer bg-[length:200%_100%]"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ARQUITETO DO SEU PRÓPRIO LUCRO.
                  </motion.span>
                </p>
              </motion.div>
            </div>
          </motion.div>
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