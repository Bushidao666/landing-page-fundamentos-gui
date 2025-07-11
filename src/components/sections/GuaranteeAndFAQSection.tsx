"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shield, CheckCircle, ArrowRight, ShoppingCart, Plus, Minus, Clock, Users, CreditCard, Settings, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

// Componente de Partículas de Confiança
const TrustElements = () => {
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
            y: [-15, -60, -15],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
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
      {/* Escudos de segurança flutuantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shield-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, -40, -10],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 6,
          }}
        >
          <Shield className="w-3 h-3 text-[#D4AF37] opacity-30" />
        </motion.div>
      ))}
    </div>
  );
};

const faqData = [
  {
    question: "\"Já anuncio há um tempo, isso serve pra mim?\"",
    answer: "Com certeza. Este curso é sobre os *fundamentos estratégicos* que muitos anunciantes experientes pulam. Se você sente que seus resultados são inconsistentes ou não entende 100% o porquê de suas campanhas performarem bem (ou mal), esta base vai solidificar seu conhecimento e te dar mais controle.",
    icon: Users
  },
  {
    question: "\"Vou aprender a criar uma campanha do zero, passo a passo?\"",
    answer: "Sim! O Módulo 3 é totalmente focado em como criar e estruturar suas primeiras campanhas do jeito certo, escolhendo o tipo de campanha ideal e configurando os públicos.",
    icon: Settings
  },
  {
    question: "\"O acesso é por quanto tempo?\"",
    answer: "O acesso ao curso e à Comunidade do Zero ao 100K é **VITALÍCIO**. Você paga uma vez e tem acesso para sempre, incluindo todas as futuras atualizações do curso Fundamentos.",
    icon: Clock
  },
  {
    question: "\"Preciso de alguma ferramenta paga para usar os bônus GPTs?\"",
    answer: "Os assistentes GPTs são criados na plataforma da OpenAI. Para usá-los em todo seu potencial, é recomendado ter uma assinatura do ChatGPT Plus.",
    icon: CreditCard
  },
  {
    question: "\"O que acontece depois que eu pagar?\"",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seu login e senha para acessar a nossa área de membros, onde todo o curso e os bônus já estarão te esperando.",
    icon: Mail
  },
];

export default function GuaranteeAndFAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <motion.section
      id="guarantee-faq"
      className="relative py-20 lg:py-32 overflow-hidden"
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
        
        {/* Partículas de Confiança */}
        <TrustElements />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Seção de Garantia */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            {/* Selo de Garantia Premium */}
            <motion.div 
              className="relative inline-block mb-16"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Container do Selo */}
              <motion.div 
                className="relative bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-3xl p-12 lg:p-16 shadow-2xl border-4 border-white/30 overflow-hidden"
                animate={{ 
                  boxShadow: ["0 0 30px rgba(212, 175, 55, 0.4)", "0 0 60px rgba(212, 175, 55, 0.8)", "0 0 30px rgba(212, 175, 55, 0.4)"]
                }}
                transition={{ 
                  boxShadow: { duration: 3, repeat: Infinity }
                }}
              >
                {/* Efeito de Brilho no Selo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Ícone de Escudo Central */}
                <motion.div 
                  className="relative z-10 flex items-center justify-center mb-8"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="w-20 h-20 bg-[#0A192F] rounded-full flex items-center justify-center shadow-2xl">
                    <Shield className="w-12 h-12 text-[#D4AF37]" />
                  </div>
                </motion.div>

                {/* Texto do Selo */}
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A192F] mb-4 leading-tight">
                    GARANTIA BLINDADA
                  </h3>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A192F] mb-6">
                    DE 7 DIAS
                  </p>
                  <motion.div 
                    className="bg-[#0A192F] text-[#D4AF37] px-8 py-4 rounded-2xl inline-block shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wide">
                      Risco ZERO Absoluto!
                    </span>
                  </motion.div>
                </div>

                {/* Badges Flutuantes */}
                <motion.div
                  className="absolute -top-4 -left-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-xl"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-xl"
                  animate={{ y: [3, -3, 3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Texto da Garantia */}
            <motion.div 
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl mb-16"
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
                Sua satisfação ou seu dinheiro de volta. Você tem{" "}
                <span className="text-[#D4AF37] font-bold text-2xl lg:text-3xl">7 dias inteiros</span>{" "}
                para mergulhar no curso, usar os GPTs, entrar na comunidade. Se você não sentir que este material é o melhor e mais completo ponto de partida que você já viu, é só me mandar{" "}
                <span className="text-[#D4AF37] font-bold">UM e-mail</span>. Devolvo{" "}
                <span className="text-[#D4AF37] font-bold text-2xl lg:text-3xl">CADA CENTAVO</span>{" "}
                dos seus R$ 47. Sem perguntas, sem estresse.{" "}
                <span className="text-[#D4AF37] font-bold text-xl lg:text-2xl">
                  Você não tem absolutamente NADA a perder, e um negócio lucrativo a ganhar.
                </span>
              </p>
            </motion.div>

            {/* CTA Final IMPOSSÍVEL de Não Ver */}
            <motion.div
              className="relative mb-20"
              variants={itemVariants}
            >
              {/* Spotlight Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <Button 
                  size="lg" 
                  className="relative overflow-hidden text-2xl md:text-3xl lg:text-4xl px-16 lg:px-24 py-12 lg:py-16 h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-black shadow-2xl shadow-[#D4AF37]/60 border-4 border-[#D4AF37]/40 rounded-3xl transition-all duration-500 backdrop-blur-sm"
                >
                  {/* Múltiplos Efeitos de Brilho */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{
                      x: ["100%", "-100%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                  
                  <span className="relative flex items-center gap-6 z-10">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <ShoppingCart className="w-10 h-10 lg:w-12 lg:h-12" />
                    </motion.div>
                    <span className="tracking-wide leading-tight">
                      PEGAR MEU KIT COMPLETO
                      <br />
                      <span className="text-3xl md:text-4xl lg:text-5xl">POR R$ 47 AGORA!</span>
                    </span>
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-10 h-10 lg:w-12 lg:h-12" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>

              {/* Indicadores de Urgência Extrema */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex items-center gap-3 bg-green-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-green-500/40"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="font-bold">Acesso Instantâneo</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 bg-[#D4AF37]/20 backdrop-blur-xl px-6 py-3 rounded-full border border-[#D4AF37]/40"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Shield className="w-6 h-6 text-[#D4AF37]" />
                  <span className="font-bold">100% Garantido</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 bg-blue-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-blue-500/40"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Clock className="w-6 h-6 text-blue-400" />
                  <span className="font-bold">Sem Pegadinhas</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Seção FAQ */}
          <motion.div className="max-w-5xl mx-auto" variants={itemVariants}>
            {/* Header FAQ */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              {/* Badge FAQ */}
              <motion.div
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/30 px-6 py-3 rounded-full shadow-lg mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Settings className="w-5 h-5 text-[#D4AF37]" />
                </motion.div>
                <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">
                  Perguntas Frequentes
                </span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
                Suas Dúvidas Respondidas
              </h3>
              <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
                Eliminando qualquer hesitação que possa estar te impedindo de transformar seu negócio
              </p>
            </motion.div>

            {/* Lista FAQ em Accordion */}
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="group"
                  custom={index}
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.8 + index * 0.1,
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.01, y: -2 }}
                  >
                    {/* Pergunta - Clicável */}
                    <motion.div
                      className="p-6 lg:p-8 cursor-pointer"
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    >
                      <div className="flex items-center gap-6">
                        {/* Ícone */}
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <faq.icon className="w-6 h-6 text-[#0A192F]" />
                        </div>
                        
                        {/* Pergunta */}
                        <div className="flex-1">
                          <h4 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                            <span className="text-[#D4AF37]">P:</span> {faq.question}
                          </h4>
                        </div>
                        
                        {/* Indicador de Expansão */}
                        <motion.div
                          animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center"
                        >
                          {expandedFAQ === index ? (
                            <Minus className="w-5 h-5 text-[#D4AF37]" />
                          ) : (
                            <Plus className="w-5 h-5 text-[#D4AF37]" />
                          )}
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Resposta - Expansível */}
                    <AnimatePresence>
                      {expandedFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-6" />
                            <p 
                              className="text-lg lg:text-xl text-gray-300 leading-relaxed pl-18"
                              dangerouslySetInnerHTML={{
                                __html: `<span class="text-[#D4AF37] font-bold">R:</span> ${faq.answer.replace(/\*(.*?)\*/g, '<em class="text-white">$1</em>').replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#D4AF37]">$1</strong>')}`
                              }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>
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