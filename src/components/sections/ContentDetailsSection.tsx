"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Brain, Target, Settings, Megaphone, ChevronDown, PlayCircle, CheckCircle, Lightbulb, MapPin, Cog, Edit3, Sparkles, Award, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";

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

const accordionVariants = {
  hidden: { x: -50, y: 30, opacity: 0, rotateY: -10 },
  visible: (index: number) => ({
    x: 0,
    y: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.2,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

// Componente de Partículas Flutuantes Premium
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, -100, -30],
            x: [-20, 20, -20],
            opacity: [0.1, 0.7, 0.1],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/60" />
        </motion.div>
      ))}
    </div>
  );
};

const modules = [
  {
    id: 1,
    icon: Brain,
    title: "Entendendo o Jogo",
    subtitle: "A Lógica Por Trás do Resultado",
    description: "Neste módulo, você vai **decifrar a \"mente\" do Google**. Vai entender por que às vezes ele parece seu inimigo e como transformá-lo em seu maior aliado. Vamos cobrir a **Lógica do Algoritmo e dos Lances**, para você parar de pagar caro no leilão, e o **Aprendizado de Campanha**, para controlar a ansiedade inicial. Você finalmente vai entender a **Jornada de Compra** do seu cliente e como o **Funil de Marketing** se aplica DENTRO do Google Ads.",
    highlights: ["Lógica do Algoritmo e dos Lances", "Aprendizado de Campanha", "Jornada de Compra", "Funil de Marketing no Google Ads"],
    lessons: [
      "Como o Google 'pensa' e toma decisões",
      "Estratégias de lances que economizam dinheiro", 
      "Controlando a fase de aprendizado",
      "Mapeando a jornada do seu cliente",
      "Aplicando funis dentro do Google Ads"
    ],
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-500/10 to-purple-600/5"
  },
  {
    id: 2,
    icon: Target,
    title: "Planejamento Estratégico",
    subtitle: "A Base do Seu Lucro Futuro",
    description: "Aqui é onde você para de agir por impulso e começa a planejar como um profissional. Vou te entregar o passo a passo para fazer um **Planejamento de Métricas** que realmente importa, **definir metas** que sejam ambiciosas mas realistas, e o mais importante: vou te dar a planilha e o método para **calcular seu ROAS Mínimo**. É o número que te diz se você está pagando pra trabalhar ou colocando dinheiro no bolso. Chega de achismo sobre \"quanto investir\" ou se \"Google é melhor que Face\".",
    highlights: ["Planejamento de Métricas", "Definição de Metas", "Cálculo do ROAS Mínimo", "Planilhas Estratégicas"],
    lessons: [
      "Criando um plano de métricas eficaz",
      "Definindo metas realistas e ambiciosas",
      "Calculando seu ROAS mínimo",
      "Planilhas de controle financeiro",
      "Quando investir e quando parar"
    ],
    color: "from-[#D4AF37] to-yellow-500",
    bgColor: "from-[#D4AF37]/10 to-yellow-500/5"
  },
  {
    id: 3,
    icon: Settings,
    title: "Estrutura de Campanhas",
    subtitle: "O Jeito Certo de Começar",
    description: "Medo de criar a primeira campanha? Esse módulo resolve. Vou te mostrar **por qual tipo de campanha começar** no e-commerce para ter resultados mais rápidos e com mais controle. Você vai aprender os **Critérios Essenciais para Criar Campanhas** que já nascem otimizadas e as **Melhores Práticas de Públicos**, para garantir que seu anúncio apareça para quem tem potencial de comprar, não para curiosos.",
    highlights: ["Tipos de Campanha Ideais", "Critérios Essenciais", "Melhores Práticas de Públicos", "Campanhas Otimizadas"],
    lessons: [
      "Qual tipo de campanha começar primeiro",
      "Critérios para campanhas que convertem",
      "Segmentação de públicos qualificados",
      "Estruturas que já nascem otimizadas",
      "Evitando público curioso"
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-500/10 to-emerald-600/5"
  },
  {
    id: 4,
    icon: Edit3,
    title: "Criação de Anúncios",
    subtitle: "A Arte de Gerar o Clique Certo",
    description: "De nada adianta uma boa estrutura se o seu anúncio for ruim. Aqui, você aprende as **melhores práticas para criar anúncios que se destacam**, que geram o clique qualificado e que falam a língua do seu cliente, incluindo táticas específicas para **anúncios de Remarketing**. Também vamos passar pelas **Especificações e pela Central de Transparência** para você nunca mais ter um anúncio reprovado por besteira.",
    highlights: ["Anúncios que Se Destacam", "Clique Qualificado", "Táticas de Remarketing", "Aprovação Garantida"],
    lessons: [
      "Criando anúncios que convertem",
      "Gerando cliques qualificados",
      "Estratégias de remarketing avançadas",
      "Especificações técnicas do Google",
      "Evitando reprovações desnecessárias"
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/5"
  },
];

export default function ContentDetailsSection() {
  const [activeModule, setActiveModule] = useState<number | null>(1);
  const scrollY = useMotionValue(0);

  const toggleModule = (moduleId: number) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  return (
    <motion.section
      id="content-details"
      className="relative py-20 lg:py-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Tech-Aristocrático com Transição */}
      <div className="absolute inset-0">
        {/* Transição da seção anterior */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-[#0A192F]/10 to-[#0A192F]" />
        
        {/* Camada de profundidade */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#1a2444] to-[#0A192F]" />
        
        {/* Textura de Veludo Digital */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        </div>
        
        {/* Grid Pattern Premium */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        
        {/* Nebulosa Interativa */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/8 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[400px] bg-gradient-to-l from-slate-400/15 via-slate-500/8 to-transparent rounded-full blur-2xl" />
        </div>
        
        {/* Partículas Flutuantes */}
        <FloatingElements />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header Cinematográfico */}
        <motion.div className="text-center max-w-6xl mx-auto mb-20" variants={itemVariants}>
          {/* Badge Premium */}
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37]/20 to-[#D4AF37]/30 backdrop-blur-2xl border border-[#D4AF37]/50 px-8 py-4 rounded-full shadow-2xl mb-12"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Brain className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-[0.2em]">
              Conteúdo Exclusivo
            </span>
            <Award className="w-5 h-5 text-[#D4AF37]" />
          </motion.div>

          {/* Headline Épica */}
          <motion.div className="space-y-6 mb-12" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-black leading-[0.85] tracking-tight text-white">
              <span className="block text-gray-300 text-2xl md:text-3xl lg:text-4xl font-normal mb-4">
                O Que Você Vai Dominar
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
                Módulo a Módulo
              </motion.span>
              <span className="block text-gray-200 text-3xl md:text-4xl lg:text-5xl font-light mt-4">
                O Alicerce do Seu Lucro
              </span>
            </h2>
          </motion.div>

          {/* Descrição Premium */}
          <motion.p
            className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light"
            variants={itemVariants}
          >
            Aqui não tem teoria vaga. É o{" "}
            <span className="text-[#D4AF37] font-semibold relative">
              mapa prático
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2, duration: 1 }}
              />
            </span>{" "}
            para você construir seu conhecimento do zero, de forma{" "}
            <span className="text-white font-semibold">sólida</span>.
          </motion.p>
        </motion.div>

        {/* Accordion Premium dos Módulos */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                className="relative"
                custom={index}
                variants={accordionVariants}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Card Principal do Módulo */}
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Container Glassmorphism */}
                  <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* Header do Módulo - Sempre Visível */}
                    <motion.div
                      className="relative p-8 lg:p-10 cursor-pointer"
                      onClick={() => toggleModule(module.id)}
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    >
                      {/* Background Pattern do Módulo */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${module.bgColor} opacity-50`} />
                      
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-6 flex-1">
                          {/* Ícone Premium do Módulo */}
                          <motion.div 
                            className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <module.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                          </motion.div>

                          {/* Conteúdo do Header */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider rounded-full border border-[#D4AF37]/30">
                                Módulo {module.id}
                              </span>
                              {activeModule === module.id && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  className="flex items-center gap-1"
                                >
                                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                                  <span className="text-[#D4AF37] text-xs font-medium">Expandido</span>
                                </motion.div>
                              )}
                            </div>
                            
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                              {module.title}
                            </h3>
                            
                            <p className="text-lg text-gray-300 font-medium">
                              {module.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Chevron Animado */}
                        <motion.div
                          animate={{ rotate: activeModule === module.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4"
                        >
                          <ChevronDown className="w-6 h-6 text-[#D4AF37]" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Conteúdo Expansível */}
                    <AnimatePresence>
                      {activeModule === module.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 lg:px-10 pb-8 lg:pb-10">
                            {/* Separador Elegante */}
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-8" />
                            
                            <div className="grid lg:grid-cols-2 gap-8">
                              {/* Descrição Detalhada */}
                              <div className="space-y-6">
                                <motion.p 
                                  className="text-lg text-gray-300 leading-relaxed"
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                >
                                  {module.description.split('**').map((part, i) => 
                                    i % 2 === 0 ? part : <span key={i} className="text-[#D4AF37] font-semibold">{part}</span>
                                  )}
                                </motion.p>

                                {/* Highlights */}
                                <motion.div 
                                  className="space-y-3"
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  <h4 className="text-[#D4AF37] font-bold text-lg flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    Pontos-Chave:
                                  </h4>
                                  <div className="grid gap-2">
                                    {module.highlights.map((highlight, i) => (
                                      <motion.div 
                                        key={i}
                                        className="flex items-center gap-3 text-gray-300"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                      >
                                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                                        <span className="font-medium">{highlight}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              </div>

                              {/* Lista de Aulas */}
                              <motion.div 
                                className="space-y-4"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                              >
                                <h4 className="text-white font-bold text-lg flex items-center gap-2 mb-6">
                                  <PlayCircle className="w-5 h-5 text-[#D4AF37]" />
                                  O que você vai aprender:
                                </h4>
                                
                                <div className="space-y-3">
                                  {module.lessons.map((lesson, i) => (
                                    <motion.div 
                                      key={i}
                                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                                      initial={{ x: 20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ delay: 0.5 + i * 0.1 }}
                                      whileHover={{ x: 5 }}
                                    >
                                      <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{lesson}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Número do Módulo Flutuante */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-full flex items-center justify-center border-4 border-[#0A192F] shadow-2xl z-20"
                    whileHover={{ scale: 1.2 }}
                    style={{
                      boxShadow: `0 0 30px rgba(212, 175, 55, 0.6)`,
                    }}
                  >
                    <span className="text-[#0A192F] font-bold text-lg">{module.id}</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Final */}
        <motion.div 
          className="text-center mt-20"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 backdrop-blur-xl rounded-2xl p-8 border border-[#D4AF37]/40 shadow-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Zap className="w-8 h-8 text-[#D4AF37]" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white mb-2">
                Pronto para transformar teoria em{" "}
                <span className="text-[#D4AF37]">lucro real</span>?
              </p>
              <p className="text-gray-300">
                Cada módulo foi desenhado para te dar resultados práticos imediatos.
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
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