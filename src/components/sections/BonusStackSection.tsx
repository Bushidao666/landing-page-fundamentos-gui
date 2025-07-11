"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Users, Zap, Bot, Gift, Star, Crown, Sparkles, CheckCircle, Award, TrendingUp, Brain, Calculator, BarChart3, Target, Percent, Calendar, MessageSquare, Smartphone, BookOpen, Play, ArrowRight, Eye, Briefcase, TrendingDown, Edit3, PieChart, ShoppingCart } from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { y: 80, opacity: 0, scale: 0.8, rotateY: -15 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

const bonusVariants = {
  hidden: { y: 100, opacity: 0, scale: 0.9 },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      delay: index * 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

// Componente de Partículas Explosivas Premium
const ExplosiveElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-40, -120, -40],
            x: [-30, 30, -30],
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut",
          }}
        >
          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/80" />
        </motion.div>
      ))}
      {/* Estrelas especiais */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.4, 0.8],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 6,
          }}
        >
          <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
        </motion.div>
      ))}
    </div>
  );
};

// GPTs Data com descrições completas
const gptsData = [
  {
    id: 1,
    name: "O Criador de Anúncios",
    subtitle: "Método M.E.T.A.",
    description: "Cansado de escrever anúncios que não convertem? Este assistente é seu copywriter pessoal. Você fornece as informações do seu produto e ele **cria múltiplas versões de anúncios para o Google e Facebook Ads**, seguindo o meu método M.E.T.A. (Mercado, Emoção, Tática, Ação), prontos para você copiar, colar e testar.",
    icon: Brain,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 2,
    name: "O Analista de Google Ads",
    subtitle: "Seu Consultor Pessoal",
    description: "Sente que está perdido nos relatórios do Google Ads? Em vez de passar horas tentando decifrar os dados, você simplesmente fornece as métricas principais para este assistente, e ele te entrega uma **análise clara e um plano de ação priorizado**, mostrando exatamente onde estão os problemas (CPA alto, ROAS baixo) e o que você precisa otimizar primeiro.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: 3,
    name: "A Calculadora de Validação de Precificação",
    subtitle: "Fim do Achismo",
    description: "A dúvida \"será que meu preço está certo?\" acaba aqui. Este assistente te ajuda a **analisar se a sua precificação atual é lucrativa**, considerando custos, margem desejada e o impacto no seu ROAS Mínimo. Ele te dá a confiança para ajustar seus preços com base em dados, não em \"achismo\".",
    icon: Calculator,
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 4,
    name: "O Analisador de Métricas e GAPs de Funil",
    subtitle: "Encontre os Vazamentos",
    description: "Onde exatamente você está perdendo dinheiro no seu site? Este assistente analisa as taxas de conversão da sua jornada de compra (da visita ao checkout) e **aponta com precisão os \"gargalos\" e \"vazamentos\"**, te dizendo onde focar seus esforços de CRO para ter o maior impacto nas vendas.",
    icon: Target,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    name: "A Calculadora Estratégica de Frete Grátis",
    subtitle: "Lucro sem Pegadinha",
    description: "Oferecer frete grátis pode dobrar suas vendas ou quebrar seu negócio. Este assistente faz a matemática para você. Ele calcula o **impacto do frete grátis na sua margem** e te ajuda a definir as regras certas (como um valor mínimo de pedido) para que essa estratégia coloque dinheiro no seu bolso, não tire.",
    icon: Percent,
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 6,
    name: "A Calculadora Estratégica de ROAS Piso para Escala",
    subtitle: "Escale com Segurança",
    description: "Quer escalar seu investimento sem queimar o lucro? Este assistente é crucial. Ele calcula o **ROAS \"piso\" (mínimo aceitável) para diferentes cenários de escala**, te dando um guia claro de até onde você pode ir com seus lances e orçamento antes de comprometer a saúde financeira da sua operação.",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: 7,
    name: "O Planejador Estratégico de Promoções",
    subtitle: "Promoções que Lucram",
    description: "Planejar uma promoção de Dia das Mães ou Black Friday te deixa sobrecarregado? Este assistente **cria um plano de ação estratégico para suas campanhas promocionais**, sugerindo tipos de oferta, canais de divulgação e cronograma, para você nunca mais fazer uma promoção de última hora que só queima sua margem.",
    icon: Calendar,
    color: "from-pink-500 to-rose-600"
  },
];

export default function BonusStackSection() {
  const [expandedGPT, setExpandedGPT] = useState<number | null>(null);

  return (
    <motion.section
      id="bonus-stack"
      className="relative py-24 lg:py-40 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Tech-Aristocrático */}
      <div className="absolute inset-0">
        {/* Camada Base - Gradiente Premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100" />
        
        {/* Overlay de Transição */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/5 to-[#0A192F]/15" />
        
        {/* Grid Pattern Sutil */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        {/* Nebulosa Premium */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/3 w-[600px] h-[400px] bg-gradient-to-l from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[300px] bg-gradient-to-r from-slate-400/10 via-slate-500/5 to-transparent rounded-full blur-2xl" />
        </div>
        
        {/* Partículas Explosivas */}
        <ExplosiveElements />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header Explosivo */}
        <motion.div className="text-center max-w-7xl mx-auto mb-24" variants={itemVariants}>
          {/* Badge de Impacto */}
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#D4AF37]/40 via-[#FFD700]/30 to-[#D4AF37]/40 backdrop-blur-2xl border border-[#D4AF37]/60 px-10 py-5 rounded-full shadow-2xl mb-16"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            animate={{ 
              boxShadow: ["0 0 20px rgba(212, 175, 55, 0.3)", "0 0 40px rgba(212, 175, 55, 0.6)", "0 0 20px rgba(212, 175, 55, 0.3)"]
            }}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity }
            }}
          >
            <Gift className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold text-base uppercase tracking-[0.2em]">
              Bônus Exclusivos
            </span>
            <Crown className="w-6 h-6 text-[#D4AF37]" />
          </motion.div>

          {/* Headline Épica */}
          <motion.div className="space-y-8 mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-serif font-black leading-[0.8] tracking-tight text-[#0A192F]">
              <span className="block text-gray-600 text-2xl md:text-3xl lg:text-4xl font-normal mb-6">
                Mas eu não quero te dar só o alicerce.
              </span>
              <span className="block text-gray-700 text-2xl md:text-3xl lg:text-4xl font-normal mb-6">
                Quero te dar a casa toda, com a chave na mão.
              </span>
              <span className="block text-gray-600 text-xl md:text-2xl lg:text-3xl font-light mb-8">
                Por isso, ao garantir seu acesso ao Fundamentos HOJE, você leva um
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
                arsenal de bônus avaliado em
              </motion.span>
            </h2>

            {/* Revelação Dramática do Valor */}
            <motion.div 
              className="relative"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2, duration: 1, type: "spring", bounce: 0.4 }}
            >
              <div className="inline-flex items-center gap-6 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-3xl px-12 py-8 shadow-2xl border-4 border-white/20">
                <span className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0A192F]">
                  R$ 1.041
                </span>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="w-12 h-12 text-[#0A192F]" />
                </motion.div>
              </div>
              
              {/* DE GRAÇA - Explosão */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 2.5, duration: 0.8, type: "spring", bounce: 0.6 }}
              >
                <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-black text-2xl md:text-3xl px-8 py-4 rounded-2xl shadow-2xl border-4 border-white transform rotate-3">
                  DE GRAÇA!
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Containers dos Bônus */}
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
          
          {/* SUPER BÔNUS #1: Comunidade Vitalícia */}
          <motion.div
            className="relative group"
            custom={0}
            variants={bonusVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-white/90 via-gray-50/95 to-white/90 backdrop-blur-2xl border border-gray-200/50 rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.01, y: -5 }}
              transition={{ duration: 0.4 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-50" />
              
              {/* Header do Bônus */}
              <div className="relative z-10 mb-12">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Users className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <span className="px-4 py-2 bg-red-500/20 text-red-400 text-sm font-bold uppercase tracking-wider rounded-full border border-red-400/30 mb-4 inline-block">
                      Super Bônus #1
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#0A192F] mb-3">
                      Acesso{" "}
                      <motion.span 
                        className="text-[#D4AF37] relative"
                        animate={{ textShadow: ["0 0 10px rgba(212, 175, 55, 0.5)", "0 0 20px rgba(212, 175, 55, 0.8)", "0 0 10px rgba(212, 175, 55, 0.5)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        VITALÍCIO
                      </motion.span>{" "}
                      à Comunidade do Zero ao 100K
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black text-[#D4AF37]">(Valor Incalculável, mas vamos colocar R$ 497/ano)</span>
                    </div>
                  </div>
                </div>
                
                {/* Texto Introdutório */}
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-12 font-light"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Isso aqui, sinceramente, vale 10x o valor do curso. Chega de se sentir sozinho, pesquisando em fóruns gringos ou esperando a boa vontade do suporte do Google. Você terá acesso{" "}
                  <span className="text-[#D4AF37] font-semibold">PARA SEMPRE</span>{" "}
                  à nossa comunidade de elite, onde:
                </motion.p>
              </div>

              {/* Grid de Benefícios Detalhados */}
              <div className="relative z-10 grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Você Tira Dúvidas Direto Comigo e com a Comunidade:",
                    description: "Tem um problema na sua campanha? Uma dúvida estratégica? Joga lá. Eu e centenas de outros donos de e-commerce e gestores de tráfego vamos te ajudar. É o seu suporte de elite.",
                    icon: MessageSquare
                  },
                  {
                    title: "Acesso a Vagas de Trabalho (\"LinkeGUI\"):",
                    description: "Tenha acesso a oportunidades de trabalho na minha aceleradora, a Pushing Ads, e em negócios de parceiros.",
                    icon: Briefcase
                  },
                  {
                    title: "Fique na Vanguarda do Mercado:",
                    description: "Receba análises e notícias do que REALMENTE importa no mercado digital brasileiro, sem o ruído dos \"gurus\".",
                    icon: TrendingUp
                  },
                  {
                    title: "Receba Materiais Novos Toda Semana:",
                    description: "Eu uso a comunidade para liberar minhas melhores planilhas, checklists e prompts de IA antes de todo mundo. Você terá acesso em primeira mão.",
                    icon: Gift
                  }
                ].map((benefit, i) => (
                  <motion.div 
                    key={i}
                    className="bg-gray-50/80 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-200/50 hover:bg-white/90 hover:border-[#D4AF37]/30 transition-all duration-300 group shadow-sm"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-6 h-6 text-[#0A192F]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#0A192F] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Badge Flutuante */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full flex items-center justify-center border-4 border-[#0A192F] shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-10 h-10 text-[#0A192F]" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* SUPER BÔNUS #2: Passaporte Aceleração */}
          <motion.div
            className="relative group"
            custom={1}
            variants={bonusVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-white/90 via-gray-50/95 to-white/90 backdrop-blur-2xl border border-gray-200/50 rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.01, y: -5 }}
              transition={{ duration: 0.4 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 opacity-50" />
              
              {/* Header do Bônus */}
              <div className="relative z-10 mb-12">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Zap className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <span className="px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-bold uppercase tracking-wider rounded-full border border-orange-400/30 mb-4 inline-block">
                      Super Bônus #2
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#0A192F] mb-3">
                      Acesso Completo ao Passaporte Aceleração
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black text-[#D4AF37]">(Valor: R$ 97)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Descrição Detalhada */}
              <div className="relative z-10">
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Se o "Fundamentos" é a sua{" "}
                  <span className="text-[#D4AF37] font-semibold">aula de anatomia</span>, o "Passaporte" é o seu{" "}
                  <span className="text-[#D4AF37] font-semibold">kit de primeiros socorros</span>. 
                  Enquanto você aprende a base teórica, já pode usar as{" "}
                  <span className="text-[#0A192F] font-semibold">9 aulas rápidas</span>{" "}
                  e as{" "}
                  <span className="text-[#0A192F] font-semibold">9 ferramentas práticas</span>{" "}
                  do Passaporte para aplicar otimizações imediatas e{" "}
                  <span className="text-[#D4AF37] font-semibold">"estancar o sangramento"</span>{" "}
                  de verba nas suas campanhas. Um complementa o outro perfeitamente.
                </motion.p>

                {/* Mockup Visual Expandido */}
                <motion.div 
                  className="mt-12 bg-gradient-to-br from-green-800/30 to-emerald-900/30 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-6 h-6 text-green-600" />
                    <span className="text-green-600 text-lg font-medium">Kit de Ferramentas Completo</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-[#0A192F] font-bold text-lg mb-4">9 Aulas Rápidas:</h4>
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Play className="w-4 h-4 text-green-600" />
                          <div className="flex-1 h-2 bg-green-200 rounded">
                            <motion.div 
                              className="h-2 bg-green-500 rounded"
                              initial={{ width: 0 }}
                              animate={{ width: `${60 + i * 10}%` }}
                              transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                            />
                          </div>
                          <span className="text-green-700 text-sm font-medium">Aula {i + 1}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-[#0A192F] font-bold text-lg mb-4">9 Ferramentas Práticas:</h4>
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <div className="flex-1 h-2 bg-green-200 rounded">
                            <motion.div 
                              className="h-2 bg-green-500 rounded"
                              initial={{ width: 0 }}
                              animate={{ width: `${80 + i * 5}%` }}
                              transition={{ delay: 1.5 + i * 0.2, duration: 0.8 }}
                            />
                          </div>
                          <span className="text-green-700 text-sm font-medium">Tool {i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Badge Flutuante */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center border-4 border-[#0A192F] shadow-2xl"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* SUPER BÔNUS #3: 7 Assistentes GPTs */}
          <motion.div
            className="relative group"
            custom={2}
            variants={bonusVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-white/90 via-gray-50/95 to-white/90 backdrop-blur-2xl border border-gray-200/50 rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.01, y: -5 }}
              transition={{ duration: 0.4 }}
            >
              {/* Background Pattern Futuristic */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-pink-600/15 opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
              
              {/* Header do Bônus */}
              <div className="relative z-10 mb-12">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Bot className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-400 text-sm font-bold uppercase tracking-wider rounded-full border border-purple-400/30 mb-4 inline-block">
                      Super Bônus #3
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#0A192F] mb-3">
                      Seu Exército Pessoal de IA: 7 Assistentes GPTs Exclusivos
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black text-[#D4AF37]">(Valor: R$ 297)</span>
                    </div>
                  </div>
                </div>
                
                {/* Texto Introdutório */}
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-12 font-light"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Por que passar horas fazendo trabalho manual se a inteligência artificial pode fazer por você em segundos? Eu criei e treinei{" "}
                  <span className="text-[#D4AF37] font-semibold">7 assistentes de IA (GPTs)</span>{" "}
                  para serem seus consultores particulares. Você vai receber:
                </motion.p>
              </div>

              {/* Lista Completa dos 7 GPTs */}
              <div className="relative z-10 space-y-8">
                {gptsData.map((gpt, index) => (
                  <motion.div
                    key={gpt.id}
                    className="bg-gray-50/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <motion.div
                      className="p-6 lg:p-8 cursor-pointer"
                      onClick={() => setExpandedGPT(expandedGPT === gpt.id ? null : gpt.id)}
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                    >
                      <div className="flex items-center gap-6">
                        {/* Número e Ícone */}
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-xl flex items-center justify-center font-bold text-[#0A192F] text-lg">
                            {gpt.id}
                          </div>
                          <div className={`w-12 h-12 bg-gradient-to-br ${gpt.color} rounded-xl flex items-center justify-center`}>
                            <gpt.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        
                        {/* Conteúdo */}
                        <div className="flex-1">
                          <h4 className="text-xl lg:text-2xl font-bold text-[#0A192F] mb-2">
                            {gpt.name}
                          </h4>
                          <p className="text-[#D4AF37] font-medium text-lg">
                            {gpt.subtitle}
                          </p>
                        </div>
                        
                        {/* Indicador de Expansão */}
                        <motion.div
                          animate={{ rotate: expandedGPT === gpt.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-6 h-6 text-[#D4AF37]" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Descrição Expansível */}
                    <AnimatePresence>
                      {expandedGPT === gpt.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-6" />
                            <p className="text-lg text-gray-700 leading-relaxed">
                              {gpt.description.split('**').map((part, i) => 
                                i % 2 === 0 ? part : <span key={i} className="text-[#D4AF37] font-semibold">{part}</span>
                              )}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Badge Flutuante IA */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center border-4 border-[#0A192F] shadow-2xl"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Bot className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action Final Dramático */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mt-20"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-br from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 backdrop-blur-xl rounded-3xl p-12 border border-[#D4AF37]/30 shadow-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-12 h-12 text-[#D4AF37]" />
              </motion.div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#0A192F] mb-2">
                  Todo esse arsenal de{" "}
                  <span className="text-[#D4AF37]">R$ 1.041</span>
                </p>
                <p className="text-xl text-gray-700">
                  será SEU por apenas R$ 47. Sim, você leu certo.
                </p>
              </div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-12 h-12 text-[#D4AF37]" />
              </motion.div>
            </div>
            
            <motion.div
              className="inline-flex items-center gap-3 text-[#D4AF37] font-semibold text-lg"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
              <span>Próximo: Descubra por que esse preço absurdo</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
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