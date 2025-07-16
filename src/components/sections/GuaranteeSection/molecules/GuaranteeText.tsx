"use client";

import { motion } from "framer-motion";

export const GuaranteeText = () => (
  <motion.div 
    className="mb-8 md:mb-10 lg:mb-12"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    <div className="
      bg-white/[0.06] backdrop-blur-lg
      rounded-2xl md:rounded-3xl
      p-6 md:p-8 lg:p-10
      border border-white/[0.15]
      shadow-[0_10px_30px_rgba(0,0,0,0.2)]
      hover:bg-white/[0.08] hover:border-white/20
      transition-all duration-300
    ">
      <p className="
        text-base md:text-lg lg:text-xl xl:text-2xl
        text-white/90 
        leading-relaxed md:leading-relaxed lg:leading-loose
        max-w-3xl mx-auto
      ">
        Sua satisfação ou seu dinheiro de volta. Você tem{" "}
        <span className="
          text-[#D4AF37] font-bold 
          text-lg md:text-xl lg:text-2xl xl:text-3xl
          drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]
        ">
          7 dias inteiros
        </span>{" "}
        para mergulhar no curso, usar os GPTs, entrar na comunidade. Se você não sentir que este material é o melhor e mais completo ponto de partida que você já viu, é só me mandar{" "}
        <span className="text-[#D4AF37] font-bold">UM e-mail</span>. Devolvo{" "}
        <span className="
          text-[#D4AF37] font-bold 
          text-lg md:text-xl lg:text-2xl xl:text-3xl
          drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]
        ">
          CADA CENTAVO
        </span>{" "}
        dos seus R$ 47. Sem perguntas, sem estresse.{" "}
        <span className="
          text-[#D4AF37] font-bold 
          text-base md:text-lg lg:text-xl xl:text-2xl
          block mt-4 md:mt-5
          drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]
        ">
          Você não tem absolutamente NADA a perder, e um negócio lucrativo a ganhar.
        </span>
      </p>
    </div>
  </motion.div>
);