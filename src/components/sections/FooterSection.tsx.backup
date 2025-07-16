"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp, CheckCircle, ArrowRight, Calendar, Building, Globe, Star, Sparkles, Trophy, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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
      {[...Array(20)].map((_, i) => (
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
            opacity: [0.1, 0.8, 0.1],
            scale: [0.6, 1.4, 0.6],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
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

const achievements = [
  {
    number: "13+",
    label: "Anos de Experiência",
    subtext: "Desde o Google AdWords",
    icon: Calendar,
    color: "from-blue-500 to-blue-600"
  },
  {
    number: "300+",
    label: "Negócios Acelerados",
    subtext: "Cases de Sucesso",
    icon: TrendingUp,
    color: "from-green-500 to-green-600"
  },
  {
    number: "R$ MM",
    label: "Em Verba Gerenciada",
    subtext: "Mensalmente",
    icon: Trophy,
    color: "from-purple-500 to-purple-600"
  },
  {
    number: "Vale do Silício",
    label: "Parceiro Oficial Google",
    subtext: "Acesso Privilegiado",
    icon: Award,
    color: "from-[#D4AF37] to-yellow-500"
  },
];

export default function FooterSection() {
  return (
    <motion.section
      id="about-guilherme"
      className="relative py-20 lg:py-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Tech-Aristocrático */}
      <div className="absolute inset-0">
        {/* Camada Base - Fundo Branco Premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100" />
        
        {/* Overlay de Luxo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-[#D4AF37]/10" />
        
        {/* Grid Pattern Dourado */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        
        {/* Nebulosa Premium */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[600px] bg-gradient-to-br from-[#D4AF37]/10 via-[#FFD700]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[400px] bg-gradient-to-l from-slate-400/8 via-slate-500/4 to-transparent rounded-full blur-2xl" />
        </div>
        
        {/* Partículas Flutuantes */}
        <FloatingElements />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Premium */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            {/* Badge de Autoridade */}
            <motion.div
              className="inline-flex items-center gap-4 bg-gradient-to-r from-[#D4AF37]/40 via-[#FFD700]/25 to-[#D4AF37]/40 backdrop-blur-2xl border border-[#D4AF37]/60 px-10 py-5 rounded-full shadow-2xl mb-12"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Users className="w-7 h-7 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold text-lg uppercase tracking-[0.2em]">
                O Homem Por Trás da Estratégia
              </span>
              <Sparkles className="w-7 h-7 text-[#D4AF37]" />
            </motion.div>

                         {/* Pergunta Principal */}
             <motion.h2
               className="text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-[0.9] tracking-tight text-[#0A192F] mb-8"
               variants={itemVariants}
             >
               Quem está por trás do seu novo{" "}
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
                 Kit de Inteligência Estratégica?
               </motion.span>
             </motion.h2>

             <motion.p 
               className="text-2xl lg:text-3xl text-gray-600 font-light max-w-4xl mx-auto"
               variants={itemVariants}
             >
               Você pode estar se perguntando: "Tudo isso parece ótimo, mas por que eu deveria confiar no Guilherme para me ensinar esses fundamentos?". É uma pergunta justa.
             </motion.p>
          </motion.div>

          {/* Seção Principal com Foto da Equipe */}
          <motion.div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20" variants={itemVariants}>
            
            {/* Foto da Equipe Pushing */}
            <motion.div 
              className="order-2 lg:order-1"
              variants={itemVariants}
            >
              <motion.div 
                className="relative bg-gradient-to-br from-[#D4AF37] to-yellow-400 rounded-3xl p-3 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02, rotate: 1 }}
                animate={{ 
                  boxShadow: ["0 0 40px rgba(212, 175, 55, 0.4)", "0 0 60px rgba(212, 175, 55, 0.7)", "0 0 40px rgba(212, 175, 55, 0.4)"]
                }}
                transition={{ 
                  boxShadow: { duration: 3, repeat: Infinity }
                }}
              >
                {/* Frame da Foto */}
                <div className="relative rounded-[20px] overflow-hidden bg-white p-1">
                                     <Image
                     src="/images/Gui Mornatti Fotos/Time Pushing.jpg"
                     alt="Equipe Grupo Pushing - Aceleradora de E-commerces"
                     width={600}
                     height={400}
                     className="w-full h-full object-cover rounded-[16px]"
                     priority
                   />
                  
                                     {/* Overlay de Credibilidade */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 via-transparent to-transparent rounded-[16px]" />
                  
                  {/* Badge da Equipe */}
                  <motion.div 
                    className="absolute bottom-4 left-4 bg-gradient-to-r from-[#D4AF37] to-yellow-400 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-[#0A192F]" />
                      <span className="text-[#0A192F] font-black text-sm">GRUPO PUSHING</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Conteúdo da História */}
            <motion.div 
              className="order-1 lg:order-2 space-y-8"
              variants={itemVariants}
            >
                             <motion.div 
                 className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-xl"
                 variants={itemVariants}
                 whileHover={{ scale: 1.01, y: -2 }}
               >
                 <motion.p 
                   className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6"
                   variants={itemVariants}
                 >
                   <span className="text-[#D4AF37] font-bold text-2xl lg:text-3xl">
                     Minha jornada não começou ontem, em um vídeo no YouTube.
                   </span>
                 </motion.p>

                 <motion.p 
                   className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6"
                   variants={itemVariants}
                 >
                   Começou <span className="font-bold text-[#0A192F]">há mais de 13 anos</span>, na trincheira de uma das primeiras agências de tráfego pago do Brasil, na época em que o Google Ads ainda se chamava <span className="text-[#D4AF37] font-semibold">Google AdWords</span>.
                 </motion.p>

                 <motion.p 
                   className="text-xl lg:text-2xl text-gray-700 leading-relaxed"
                   variants={itemVariants}
                 >
                   Nós fomos <span className="text-[#D4AF37] font-bold">pioneiros</span>, desbravando um mercado que mal existia e sendo uma das primeiras agências brasileiras a visitar o <span className="font-bold text-[#0A192F]">Vale do Silício</span> para beber direto da fonte.
                 </motion.p>
               </motion.div>
            </motion.div>
          </motion.div>

          {/* Conquistas e Números */}
          <motion.div className="mb-20" variants={itemVariants}>
                         <motion.div className="text-center mb-16" variants={itemVariants}>
               <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#0A192F] mb-6">
                 A Prova Está nos Números
               </h3>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                 Desde 2012, eu pessoalmente já acelerei mais de 300 negócios diferentes.
               </p>
             </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group"
                  custom={index}
                  variants={{
                    hidden: { y: 50, opacity: 0, scale: 0.8 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: 1 + index * 0.1,
                        duration: 0.8,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                                     <div className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-200/50 hover:border-[#D4AF37]/50 transition-all duration-300 text-center group-hover:shadow-xl group-hover:shadow-[#D4AF37]/20 shadow-lg">
                     {/* Ícone */}
                     <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                       <achievement.icon className="w-8 h-8 text-white" />
                     </div>
                     
                     {/* Número */}
                     <div className="text-3xl lg:text-4xl font-black text-[#D4AF37] mb-2">
                       {achievement.number}
                     </div>
                     
                     {/* Label */}
                     <div className="text-lg font-bold text-[#0A192F] mb-1">
                       {achievement.label}
                     </div>
                     
                     {/* Subtext */}
                     <div className="text-sm text-gray-600">
                       {achievement.subtext}
                     </div>
                   </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

                     {/* Filosofia e Grupo Pushing */}
           <motion.div 
             className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-xl mb-20"
             variants={itemVariants}
             whileHover={{ scale: 1.01, y: -3 }}
           >
             <motion.div className="text-center mb-12" variants={itemVariants}>
               <motion.div
                 className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/30 via-emerald-500/20 to-green-500/30 backdrop-blur-xl border border-green-500/40 px-6 py-3 rounded-full shadow-lg mb-8"
                 whileHover={{ scale: 1.05 }}
               >
                 <Rocket className="w-5 h-5 text-green-400" />
                 <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                   Da Agência à Aceleradora
                 </span>
               </motion.div>

               <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#0A192F] mb-8">
                 O Nascimento do Grupo Pushing
               </h3>
             </motion.div>

             <div className="space-y-8 max-w-5xl mx-auto">
               <motion.p 
                 className="text-xl lg:text-2xl text-gray-700 leading-relaxed"
                 variants={itemVariants}
               >
                 E em cada um deles, uma verdade se provou incontestável: o crescimento sustentável nunca vem de "hacks" da moda ou de otimizações superficiais. Ele nasce de uma{" "}
                 <span className="font-bold text-[#D4AF37]">abordagem holística, aprofundada e estratégica</span>. É entender o sistema, não apenas apertar os botões.
               </motion.p>

               <motion.p 
                 className="text-xl lg:text-2xl text-gray-700 leading-relaxed"
                 variants={itemVariants}
               >
                 Como <span className="font-bold text-[#0A192F]">parceiro oficial do Google</span> há anos, sempre tivemos acesso às informações mais atualizadas da plataforma e do mercado, o que me permitiu refinar um método que funciona de verdade no cenário brasileiro.
               </motion.p>

               <motion.div 
                 className="bg-gradient-to-r from-[#D4AF37]/20 via-[#FFD700]/10 to-[#D4AF37]/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-[#D4AF37]/30"
                 variants={itemVariants}
                 whileHover={{ scale: 1.02 }}
               >
                 <p className="text-xl lg:text-2xl text-[#0A192F] leading-relaxed font-medium">
                   Hoje, o Grupo Pushing não é apenas uma agência. Somos uma{" "}
                   <span className="text-[#D4AF37] font-bold">aceleradora de e-commerces</span>, com um time de especialistas que gerencia{" "}
                   <span className="text-[#D4AF37] font-bold">milhões de reais em verba de anúncios todos os meses</span>.
                 </p>
               </motion.div>
             </div>
           </motion.div>

          {/* Justificativa Final */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div className="mb-16" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/30 via-pink-500/20 to-red-500/30 backdrop-blur-xl border border-red-500/40 px-6 py-3 rounded-full shadow-lg mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  A Verdade Por Trás dos R$ 47
                </span>
              </motion.div>

                             <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0A192F] mb-8">
                 Então, por que um Kit de Fundamentos por apenas{" "}
                 <span className="text-[#D4AF37]">R$ 47</span>?
               </h3>
            </motion.div>

                         <motion.div 
               className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-xl max-w-5xl mx-auto"
               variants={itemVariants}
               whileHover={{ scale: 1.01, y: -2 }}
             >
               <motion.p 
                 className="text-2xl lg:text-3xl text-[#0A192F] leading-relaxed font-medium mb-8"
                 variants={itemVariants}
               >
                 Porque depois de toda essa jornada, eu sei com certeza absoluta que{" "}
                 <span className="text-[#D4AF37] font-bold">toda grande aceleração começa com um fundamento sólido</span>. E eu cansei de ver empreendedores talentosos quebrando a cara por não terem acesso a essa base essencial.
               </motion.p>

               <motion.p 
                 className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium"
                 variants={itemVariants}
               >
                 Meu objetivo com este curso é te dar um{" "}
                 <span className="text-[#D4AF37] font-bold">atalho</span>. É te entregar o alicerce que me levou mais de uma década, centenas de testes e milhões em investimentos para construir. E fazer isso por um valor que te permite{" "}
                 <span className="text-[#D4AF37] font-bold">começar a construir seu futuro de sucesso AGORA</span>.
               </motion.p>
             </motion.div>
          </motion.div>

          {/* CTA Final Épico */}
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
                className="relative overflow-hidden text-2xl lg:text-3xl px-16 py-12 h-auto bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:from-[#FFD700] hover:via-[#D4AF37] hover:to-[#FFD700] text-[#0A192F] font-black shadow-2xl shadow-[#D4AF37]/60 border-4 border-[#D4AF37]/40 rounded-3xl transition-all duration-500 backdrop-blur-sm"
              >
                {/* Efeito de Brilho */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
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
                  <Trophy className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="tracking-wide">GARANTO MEU ATALHO PARA O SUCESSO!</span>
                  <ArrowRight className="w-7 h-7 text-[#0A192F] group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>

                         {/* Indicadores Finais */}
             <motion.div 
               className="flex flex-wrap items-center justify-center gap-6 pt-8 text-gray-600"
               variants={itemVariants}
             >
               <div className="flex items-center gap-2">
                 <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                 <span>13+ Anos de Experiência</span>
               </div>
               <div className="flex items-center gap-2">
                 <Star className="w-5 h-5 text-[#D4AF37]" />
                 <span>300+ Cases de Sucesso</span>
               </div>
               <div className="flex items-center gap-2">
                 <Globe className="w-5 h-5 text-[#D4AF37]" />
                 <span>Parceiro Oficial Google</span>
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