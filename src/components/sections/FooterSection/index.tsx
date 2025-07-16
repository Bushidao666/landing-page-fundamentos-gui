/**
 * @file: index.tsx
 * @responsibility: main FooterSection component with optimized UX/UI
 * @exports: FooterSection (default)
 * @imports: child components, motion, Typography components
 * @layer: sections
 */

"use client";

import { motion } from "framer-motion";
import { Rocket, Target } from "lucide-react";
import { H2, H3, Body } from "@/components/ui/typography";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

// Child components
import { FloatingElements } from "./components/FloatingElements";
import { AuthorityBadge } from "./components/AuthorityBadge";
import { TeamPhoto } from "./components/TeamPhoto";
import { StoryContent } from "./components/StoryContent";
import { AchievementCard } from "./components/AchievementCard";
import { FinalCTA } from "./components/FinalCTA";

// Data
import { achievements } from "./data/achievements";

// Styles
import "./FooterSection.styles.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function FooterSection() {
  return (
    <motion.section
      id="about-guilherme"
      className="footer-section relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={containerVariants}
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="footer-bg-base" />
        <div className="footer-bg-overlay" />
        <div className="footer-grid-pattern" />
        
        {/* Nebula effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="footer-nebula-1" />
          <div className="footer-nebula-2" />
        </div>
        
        {/* Floating particles */}
        <FloatingElements />
      </div>

      <div className="relative z-10 footer-container">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <motion.div className="text-center footer-spacing-xl" variants={itemVariants}>
            {/* Authority Badge */}
            <motion.div className="footer-spacing-md" variants={itemVariants}>
              <AuthorityBadge />
            </motion.div>

            {/* Main Question */}
            <motion.div variants={itemVariants}>
              <H2 className="footer-heading-main text-[#0A192F] footer-spacing-sm">
                Quem está por trás do seu novo{" "}
                <motion.span 
                  className="text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text animate-shimmer"
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
              </H2>

              <Body className="footer-text-large text-gray-600 font-light max-w-4xl mx-auto">
                Você pode estar se perguntando: &ldquo;Tudo isso parece ótimo, mas por que eu deveria confiar no Guilherme para me ensinar esses fundamentos?&rdquo;. É uma pergunta justa.
              </Body>
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center footer-spacing-xl" 
            variants={itemVariants}
          >
            {/* Team Photo */}
            <div className="order-2 lg:order-1">
              <TeamPhoto />
            </div>

            {/* Story Content */}
            <div className="order-1 lg:order-2">
              <StoryContent />
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div className="footer-spacing-xl" variants={itemVariants}>
            <motion.div className="text-center footer-spacing-lg" variants={itemVariants}>
              <H3 className="footer-heading-tertiary text-[#0A192F] footer-spacing-sm">
                A Prova Está nos Números
              </H3>
              <Body className="footer-text-medium text-gray-600 max-w-3xl mx-auto">
                Desde 2012, eu pessoalmente já acelerei mais de 300 negócios diferentes.
              </Body>
            </motion.div>

            <div className="footer-grid-achievements">
              {achievements.map((achievement, index) => (
                <AchievementCard 
                  key={index} 
                  achievement={achievement} 
                  index={index} 
                />
              ))}
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div 
            className="bg-gradient-to-br from-white via-gray-50 to-white 
              backdrop-blur-xl rounded-2xl sm:rounded-3xl 
              p-6 sm:p-8 md:p-10 lg:p-12 
              border border-gray-200/50 shadow-lg sm:shadow-xl 
              footer-spacing-xl"
            variants={itemVariants}
          >
            <motion.div className="text-center footer-spacing-md" variants={itemVariants}>
              <MotionWrapper
                className="inline-flex items-center gap-2 sm:gap-3 
                  bg-gradient-to-r from-green-500/30 via-emerald-500/20 to-green-500/30 
                  backdrop-blur-xl border border-green-500/40 
                  px-4 sm:px-6 py-2 sm:py-3 
                  rounded-full shadow-lg footer-spacing-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  Da Agência à Aceleradora
                </span>
              </MotionWrapper>

              <H3 className="footer-heading-tertiary text-[#0A192F]">
                O Nascimento do Grupo Pushing
              </H3>
            </motion.div>

            <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
              <Body className="footer-text-medium text-gray-700">
                E em cada um deles, uma verdade se provou incontestável: o crescimento sustentável nunca vem de &ldquo;hacks&rdquo; da moda ou de otimizações superficiais. Ele nasce de uma{" "}
                <span className="font-bold text-[#D4AF37]">abordagem holística, aprofundada e estratégica</span>. É entender o sistema, não apenas apertar os botões.
              </Body>

              <Body className="footer-text-medium text-gray-700">
                Como <span className="font-bold text-[#0A192F]">parceiro oficial do Google</span> há anos, sempre tivemos acesso às informações mais atualizadas da plataforma e do mercado, o que me permitiu refinar um método que funciona de verdade no cenário brasileiro.
              </Body>

              <MotionWrapper 
                className="bg-gradient-to-r from-[#D4AF37]/20 via-[#FFD700]/10 to-[#D4AF37]/20 
                  backdrop-blur-xl rounded-xl sm:rounded-2xl 
                  p-4 sm:p-6 md:p-8 
                  border border-[#D4AF37]/30"
                whileHover={{ scale: 1.01 }}
              >
                <Body className="footer-text-medium text-[#0A192F] font-medium">
                  Hoje, o Grupo Pushing não é apenas uma agência. Somos uma{" "}
                  <span className="text-[#D4AF37] font-bold">aceleradora de e-commerces</span>, com um time de especialistas que gerencia{" "}
                  <span className="text-[#D4AF37] font-bold">milhões de reais em verba de anúncios todos os meses</span>.
                </Body>
              </MotionWrapper>
            </div>
          </motion.div>

          {/* Final Justification */}
          <motion.div className="text-center footer-spacing-lg" variants={itemVariants}>
            <motion.div className="footer-spacing-lg" variants={itemVariants}>
              <MotionWrapper
                className="inline-flex items-center gap-2 sm:gap-3 
                  bg-gradient-to-r from-red-500/30 via-pink-500/20 to-red-500/30 
                  backdrop-blur-xl border border-red-500/40 
                  px-4 sm:px-6 py-2 sm:py-3 
                  rounded-full shadow-lg footer-spacing-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                <span className="text-red-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  A Verdade Por Trás dos R$ 47
                </span>
              </MotionWrapper>

              <H3 className="footer-heading-secondary text-[#0A192F]">
                Então, por que um Kit de Fundamentos por apenas{" "}
                <span className="text-[#D4AF37]">R$ 47</span>?
              </H3>
            </motion.div>

            <MotionWrapper 
              className="bg-gradient-to-br from-white via-gray-50 to-white 
                backdrop-blur-xl rounded-2xl sm:rounded-3xl 
                p-6 sm:p-8 md:p-10 lg:p-12 
                border border-gray-200/50 shadow-lg sm:shadow-xl 
                max-w-5xl mx-auto"
              whileHover={{ scale: 1.005, y: -2 }}
            >
              <Body className="footer-text-large text-[#0A192F] font-medium footer-spacing-sm">
                Porque depois de toda essa jornada, eu sei com certeza absoluta que{" "}
                <span className="text-[#D4AF37] font-bold">toda grande aceleração começa com um fundamento sólido</span>. E eu cansei de ver empreendedores talentosos quebrando a cara por não terem acesso a essa base essencial.
              </Body>

              <Body className="footer-text-large text-gray-700 font-medium">
                Meu objetivo com este curso é te dar um{" "}
                <span className="text-[#D4AF37] font-bold">atalho</span>. É te entregar o alicerce que me levou mais de uma década, centenas de testes e milhões em investimentos para construir. E fazer isso por um valor que te permite{" "}
                <span className="text-[#D4AF37] font-bold">começar a construir seu futuro de sucesso AGORA</span>.
              </Body>
            </MotionWrapper>
          </motion.div>

          {/* Final CTA */}
          <FinalCTA />

        </div>
      </div>
    </motion.section>
  );
}