"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { HookSection } from "@/components/sections/upsell/HookSection";
import { VehicleSection } from "@/components/sections/upsell/VehicleSection";
import { ValueSection } from "@/components/sections/upsell/ValueSection";
import { OfferSection } from "@/components/sections/upsell/OfferSection";
import { ReinforcementSection } from "@/components/sections/upsell/ReinforcementSection";
import HotmartScript from "@/components/integrations/HotmartScript";
import { useWebVitals } from "@/hooks/useWebVitals";

export default function UpsellPage() {
  useWebVitals();
  return (
    <>
      <HotmartScript />
      <LazyMotion features={domAnimation}>
        <MotionConfig reducedMotion="user">
          <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-x-hidden">
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