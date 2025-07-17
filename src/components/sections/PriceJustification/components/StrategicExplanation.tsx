"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function StrategicExplanation() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start mb-12 md:mb-16 lg:mb-20"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Foto Independente - Fora do Card */}
      <motion.div
        className="flex justify-center lg:justify-start"
        variants={itemVariants}
      >
        <div className="relative w-full max-w-[280px] md:max-w-[320px]">
          <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0A192F] to-[#1A2444] p-1.5">
            <div className="w-full h-full rounded-xl overflow-hidden bg-white">
              <Image
                src="/images/Gui Mornatti Fotos/Gui Mornatti Foto Expert.jpg"
                alt="Gui Mornatti - Expert em Google Ads"
                width={320}
                height={427}
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 280px, 320px"
                quality={85}
              />
            </div>
          </div>
          {/* Glow effect azul premium */}
          {!prefersReducedMotion && (
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,25,47,0.3)] to-transparent rounded-2xl blur-2xl -z-10" />
          )}
        </div>
      </motion.div>

      {/* Card de Conteúdo - Compacto e Equilibrado */}
      <motion.div
        className="bg-gradient-to-br from-[rgba(10,25,47,0.92)] to-[rgba(26,36,68,0.88)] backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-7 border border-white/20 shadow-xl"
        variants={itemVariants}
      >
        <div className="space-y-4 md:space-y-5">
          <motion.p
            className="text-sm md:text-base lg:text-lg text-white leading-relaxed"
            variants={itemVariants}
          >
            Meu negócio principal é{" "}
            <span className="font-bold text-[#D4AF37] relative inline-block">
              acelerar e-commerces para 7 e 8 dígitos de faturamento
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </span>
            . Eu não vivo de vender &quot;cursinho&quot;.
          </motion.p>

          <motion.p
            className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed"
            variants={itemVariants}
          >
            Eu criei o &quot;Fundamentos&quot; por um motivo estratégico: eu preciso de mais{" "}
            <span className="text-[#D4AF37] font-semibold">cases de sucesso</span>. 
            Preciso que donos de e-commerce como você tenham a base certa, parem de 
            cometer erros primários e comecem a ter os primeiros resultados.
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-[rgba(212,175,55,0.15)] to-[rgba(255,215,0,0.10)] backdrop-blur-md rounded-xl p-4 md:p-5 border border-[rgba(212,175,55,0.3)]"
            variants={itemVariants}
            whileHover={!prefersReducedMotion ? { scale: 1.01 } : {}}
          >
            <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed font-medium">
              Porque quando você tiver essa base, vai ganhar confiança, vai começar 
              a crescer e, lá na frente, talvez se torne um dos e-commerces que a 
              minha equipe e eu vamos ajudar a escalar de verdade.{" "}
              <span className="text-[#D4AF37] font-bold block mt-2">
                Estou investindo em você agora, porque acredito no seu potencial futuro.
              </span>
            </p>
          </motion.div>

          <motion.p
            className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed italic"
            variants={itemVariants}
          >
            Estou te dando o alicerce por um preço simbólico, porque{" "}
            <span className="text-[#D4AF37] font-semibold not-italic">
              o seu sucesso é a maior prova que meu método funciona.
            </span>
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}