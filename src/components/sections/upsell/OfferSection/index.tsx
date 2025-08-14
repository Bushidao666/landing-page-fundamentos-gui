"use client";

import { motion } from "framer-motion";
import { OfferHeadline } from "./components/OfferHeadline";
import { PriceAnchoring } from "./components/PriceAnchoring";
import { OfferBox } from "./components/OfferBox";
import { CTAButton } from "./components/CTAButton";
import { GuaranteeBadge } from "./components/GuaranteeBadge";
import { DeclineLink } from "./components/DeclineLink";

export function OfferSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-yellow-50/30 to-white overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Padrão de confetti/celebração */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-20 w-6 h-6 bg-orange-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-1/3 w-5 h-5 bg-red-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 right-1/4 w-8 h-8 bg-green-400 rounded-full opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container com espaçamento entre componentes */}
        <div className="space-y-12">
          {/* Headline da Oferta */}
          <OfferHeadline />

          {/* Ancoragem de Preço */}
          <PriceAnchoring />

          {/* Caixa da Oferta com Preço */}
          <OfferBox />

          {/* Botão CTA Principal */}
          <CTAButton />

          {/* Selo de Garantia */}
          <GuaranteeBadge />

          {/* Link de Recusa */}
          <DeclineLink />
        </div>
      </div>

      {/* Separador visual entre seções */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400"
      />
    </section>
  );
}

export { OfferSection as default };