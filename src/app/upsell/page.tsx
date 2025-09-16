"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import { HookSection } from "@/components/sections/upsell/HookSection";
import { VehicleSection } from "@/components/sections/upsell/VehicleSection";
import { ValueSection } from "@/components/sections/upsell/ValueSection";
import HotmartScript from "@/components/integrations/HotmartScript";
import { useWebVitals } from "@/hooks/useWebVitals";

const OfferSection = dynamic(() => import("@/components/sections/upsell/OfferSection"), {
  ssr: true,
  loading: () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
      <div className="h-48 w-full bg-gray-100 rounded-xl animate-pulse" />
    </div>
  ),
});

const ReinforcementSection = dynamic(() => import("@/components/sections/upsell/ReinforcementSection"), {
  ssr: true,
  loading: () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="h-6 w-56 bg-gray-200 rounded mb-4 animate-pulse" />
      <div className="h-32 w-full bg-gray-100 rounded-xl animate-pulse" />
    </div>
  ),
});

export default function UpsellPage() {
  useWebVitals();
  return (
    <>
      <HotmartScript />
      <LazyMotion features={domAnimation}>
        <MotionConfig reducedMotion="user">
          <main className="upsell-theme min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-x-hidden">
            {/* SEÇÃO 1: Gancho de Interrupção e Nova Oportunidade */}
            <div className="relative">
              <HookSection />
            </div>
            
            {/* SEÇÃO 2: Quebrando a Primeira Falsa Crença (O Veículo) */}
            <div className="relative">
              <VehicleSection />
            </div>
            
            {/* SEÇÃO 3: Desempacotando o Valor e Quebrando a Crença Interna */}
            <div className="relative">
              <ValueSection />
            </div>
            
            {/* SEÇÃO 4: A Oferta Irresistível e CTA */}
            <div className="relative">
              <OfferSection />
            </div>
            
            {/* SEÇÃO 5: Reforço Final e Porquê Agir Agora */}
            <div className="relative">
              <ReinforcementSection />
            </div>
          </main>
        </MotionConfig>
      </LazyMotion>
    </>
  );
}