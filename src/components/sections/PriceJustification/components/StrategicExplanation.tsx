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
      className="text-center mb-12 md:mb-16 lg:mb-20"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Imagem Circular Centralizada + Legenda */}
      <motion.div
        className="flex flex-col items-center mb-8 md:mb-12"
        variants={itemVariants}
      >
        {/* Imagem Circular Premium */}
        <div className="relative w-full max-w-[280px] md:max-w-[320px] mb-4 md:mb-6">
          <div className="aspect-square relative rounded-full overflow-hidden bg-gradient-to-br from-[#0A192F] to-[#1A2444] p-2">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src="/images/Gui Mornatti Fotos/Gui Mornatti Foto Expert.jpg"
                alt="Gui Mornatti - Expert em Google Ads"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 280px, 320px"
                quality={85}
              />
            </div>
          </div>
          {/* Glow effect azul premium */}
          {!prefersReducedMotion && (
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,25,47,0.15)] to-transparent rounded-full blur-2xl -z-10" />
          )}
        </div>

        {/* Legenda */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-bold text-slate-900 mb-1">
            Gui Mornatti
          </p>
          <p className="text-sm md:text-base text-slate-500 font-medium">
            Fundador da Pushing
          </p>
        </div>
      </motion.div>

      {/* Conteúdo Textual em 4 Blocos Centralizados */}
      <motion.div
        className="max-w-4xl mx-auto space-y-6 md:space-y-8 lg:space-y-10"
        variants={itemVariants}
      >
        {/* BLOCO 1 - Headline Forte */}
        <motion.div
          className="space-y-3 md:space-y-4"
          variants={itemVariants}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
            Meu negócio principal é{" "}
            <span className="text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text animate-gradient bg-[length:200%_100%] font-bold">
              acelerar e-commerces para 7 e 8 dígitos
            </span>
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-500 font-light leading-relaxed">
            Eu não vivo de vender "cursinho".
          </p>
        </motion.div>

        {/* BLOCO 2 - Explicação Estratégica */}
        <motion.div
          className="space-y-4 md:space-y-5"
          variants={itemVariants}
        >
          <p className="text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed">
            Eu criei o "Fundamentos" por um motivo estratégico: eu preciso de mais{" "}
            <span className="font-bold text-slate-900">
              cases de sucesso
            </span>
            . Preciso que donos de e-commerce como você tenham a base certa, parem de 
            cometer erros primários e comecem a ter os primeiros resultados.
          </p>
        </motion.div>

        {/* BLOCO 3 - Card em Destaque (Mensagem Emocional) */}
        <motion.div
          className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border-l-4 border-[#D4AF37] shadow-sm"
          variants={itemVariants}
          whileHover={!prefersReducedMotion ? { x: 4 } : {}}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-slate-800 leading-relaxed font-medium mb-4 md:mb-6">
            Porque quando você tiver essa base, vai ganhar confiança, vai começar 
            a crescer e, lá na frente, talvez se torne um dos e-commerces que a 
            minha equipe e eu vamos ajudar a escalar de verdade.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-[#D4AF37] font-bold">
            Estou investindo em você agora, porque acredito no seu potencial futuro.
          </p>
        </motion.div>

        {/* BLOCO 4 - Conclusão Emocional */}
        <motion.div
          className="space-y-2"
          variants={itemVariants}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
            Estou te dando o alicerce por um preço simbólico, porque{" "}
            <span className="font-bold text-[#D4AF37]">
              o seu sucesso é a maior prova que meu método funciona.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}