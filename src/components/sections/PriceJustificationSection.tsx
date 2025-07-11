"use client";

import { motion } from "framer-motion";
import { Target, Users, DollarSign, TrendingUp, CheckCircle, AlertCircle, ArrowRight, ShoppingCart, Award, Lightbulb, Eye, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            x: [-15, 15, -15],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/60" />
        </motion.div>
      ))}
    </div>
  );
};

const qualifications = [
  {
    text: "Você é **iniciante total** no Google Ads e quer começar com o pé direito.",
    icon: Target,
    color: "from-blue-500 to-blue-600"
  },
  {
    text: "Você **já anuncia**, mas se sente **inseguro** e opera no \"achismo\".",
    icon: AlertCircle,
    color: "from-orange-500 to-orange-600"
  },
  {
    text: "Seu **orçamento é limitado** e cada real precisa ser investido com inteligência.",
    icon: DollarSign,
    color: "from-green-500 to-green-600"
  },
  {
    text: "Você está **cansado de dicas soltas** e busca um método com começo, meio e fim.",
    icon: Brain,
    color: "from-purple-500 to-purple-600"
  },
  {
    text: "Você quer ter **conhecimento sólido** para gerenciar melhor um futuro gestor de tráfego.",
    icon: Award,
    color: "from-[#D4AF37] to-yellow-500"
  },
];

export default function PriceJustificationSection() {
  return (
    <motion.section
      id="price-justification"
      className="relative py-20 lg:py-32 overflow-hidden"
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
        
        {/* Partículas Flutuantes */}
        <FloatingElements />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Justificativa Estratégica */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            {/* Badge Premium */}
            <motion.div
              className="inline-flex items-center gap-4 bg-gradient-to-r from-[#D4AF37]/30 via-[#FFD700]/20 to-[#D4AF37]/30 backdrop-blur-2xl border border-[#D4AF37]/50 px-8 py-4 rounded-full shadow-2xl mb-12"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Target className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold text-base uppercase tracking-[0.2em]">
                A Verdade por Trás do Preço
              </span>
              <Lightbulb className="w-6 h-6 text-[#D4AF37]" />
            </motion.div>

            {/* Pergunta Principal */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-[0.9] tracking-tight text-[#0A192F] mb-12"
              variants={itemVariants}
            >
              Por que um valor{" "}
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
                tão baixo?
              </motion.span>
            </motion.h2>

            <motion.p 
              className="text-2xl lg:text-3xl text-gray-600 font-light mb-8"
              variants={itemVariants}
            >
              A resposta é simples e egoísta (da minha parte).
            </motion.p>
          </motion.div>

          {/* Explicação Estratégica */}
          <motion.div 
            className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-2xl mb-20"
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -3 }}
          >
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              
              {/* Foto do Expert - Gui Mornatti */}
              <motion.div 
                className="flex justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-72 h-96 lg:w-80 lg:h-[28rem] bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-3xl p-2 shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  animate={{ 
                    boxShadow: ["0 0 30px rgba(212, 175, 55, 0.4)", "0 0 50px rgba(212, 175, 55, 0.7)", "0 0 30px rgba(212, 175, 55, 0.4)"]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                >
                  {/* Foto do Gui Mornatti com frame premium */}
                  <div className="w-full h-full rounded-[20px] overflow-hidden bg-white p-1">
                    <Image
                      src="/images/Gui Mornatti Fotos/Gui Mornatti Foto Expert.jpg"
                      alt="Gui Mornatti - Expert em Google Ads e E-commerce"
                      width={320}
                      height={448}
                      className="w-full h-full object-cover rounded-[16px] hover:scale-102 transition-transform duration-500"
                      priority
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Conteúdo Principal */}
              <div className="lg:col-span-2 space-y-8">
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-700 leading-relaxed"
                  variants={itemVariants}
                >
                  Meu negócio principal é{" "}
                  <span className="font-bold text-[#0A192F] relative">
                    acelerar e-commerces para 7 e 8 dígitos de faturamento
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  </span>. Eu não vivo de vender "cursinho".
                </motion.p>

                <motion.p 
                  className="text-xl lg:text-2xl text-gray-700 leading-relaxed"
                  variants={itemVariants}
                >
                  Eu criei o "Fundamentos" por um motivo estratégico: eu preciso de mais{" "}
                  <span className="text-[#D4AF37] font-semibold">cases de sucesso</span>. 
                  Preciso que donos de e-commerce como você tenham a base certa, parem de cometer erros primários e comecem a ter os primeiros resultados.
                </motion.p>

                <motion.div 
                  className="bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/5 to-[#D4AF37]/10 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-[#D4AF37]/20"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-xl lg:text-2xl text-[#0A192F] leading-relaxed font-medium">
                    Porque quando você tiver essa base, vai ganhar confiança, vai começar a crescer e, lá na frente, talvez se torne um dos e-commerces que a minha equipe e eu vamos ajudar a escalar de verdade.{" "}
                    <span className="text-[#D4AF37] font-bold">
                      Estou investindo em você agora, porque acredito no seu potencial futuro.
                    </span>
                  </p>
                </motion.div>

                <motion.p 
                  className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic"
                  variants={itemVariants}
                >
                  Estou te dando o alicerce por um preço simbólico, porque{" "}
                  <span className="text-[#D4AF37] font-semibold not-italic">
                    o seu sucesso é a maior prova que meu método funciona.
                  </span>
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Seção de Qualificação */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            {/* Header */}
            <motion.div className="mb-16" variants={itemVariants}>
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-blue-500/20 backdrop-blur-xl border border-blue-500/30 px-6 py-3 rounded-full shadow-lg mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  Qualificação
                </span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0A192F] mb-8">
                Este Alicerce é Para Você Se:
              </h3>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                (Qualificação clara e direta)
              </p>
            </motion.div>

            {/* Lista de Qualificações */}
            <div className="grid gap-6 max-w-5xl mx-auto">
              {qualifications.map((qualification, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  custom={index}
                  variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.8 + index * 0.1,
                        duration: 0.8,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-6 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-white to-gray-50 border border-gray-200/50 hover:border-[#D4AF37]/30 transition-all duration-300 group-hover:shadow-lg text-left">
                    {/* Ícone */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${qualification.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <qualification.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Texto */}
                    <div className="flex-1">
                      <p 
                        className="text-xl lg:text-2xl text-gray-700 leading-relaxed group-hover:text-[#0A192F] transition-colors duration-300"
                        dangerouslySetInnerHTML={{
                          __html: qualification.text.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-[#0A192F]">$1</span>')
                        }}
                      />
                    </div>

                    {/* Indicador */}
                    <motion.div
                      className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chamada Final Dramática */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-50 via-white to-gray-50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-2xl"
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <motion.div 
                className="flex items-center justify-center gap-4 mb-8"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Eye className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-2xl font-bold text-gray-600 uppercase tracking-wide">
                  A Decisão é Sua
                </span>
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Eye className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>

              <motion.p 
                className="text-2xl lg:text-3xl text-[#0A192F] leading-relaxed font-medium max-w-4xl mx-auto"
                variants={itemVariants}
              >
                Continuar operando na base da{" "}
                <span className="text-red-600 font-bold relative">
                  sorte e da frustração
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-1 bg-red-600/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  />
                </span>, ou investir{" "}
                <span className="text-[#D4AF37] font-bold text-3xl lg:text-4xl">R$ 47</span>{" "}
                no conhecimento fundamental que coloca o{" "}
                <span className="text-[#D4AF37] font-bold relative">
                  controle absoluto do seu lucro
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-1 bg-[#D4AF37]/40"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                  />
                </span>{" "}
                de volta nas suas mãos?
              </motion.p>
            </motion.div>
          </motion.div>

          {/* CTA Final Premium */}
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Button 
                size="lg" 
                className="relative overflow-hidden text-2xl px-16 py-10 h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-black shadow-2xl shadow-[#D4AF37]/50 border-4 border-[#D4AF37]/30 rounded-3xl transition-all duration-500 backdrop-blur-sm"
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
                
                <span className="relative flex items-center gap-4 z-10">
                  <ShoppingCart className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="tracking-wide">QUERO O KIT COMPLETO POR APENAS R$ 47!</span>
                  <ArrowRight className="w-7 h-7 text-[#0A192F] group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>

            {/* Indicadores de Urgência */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6 pt-8 text-gray-600"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Decisão Inteligente</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#D4AF37]" />
                <span>Investimento Estratégico</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>Futuro Promissor</span>
              </div>
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