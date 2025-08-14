"use client";

import { HookSection } from "@/components/sections/upsell/HookSection";
import { VehicleSection } from "@/components/sections/upsell/VehicleSection";
import { ValueSection } from "@/components/sections/upsell/ValueSection";
import { OfferSection } from "@/components/sections/upsell/OfferSection";
import { ReinforcementSection } from "@/components/sections/upsell/ReinforcementSection";

export default function UpsellPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* SEÇÃO 1: Gancho de Interrupção e Nova Oportunidade */}
      <HookSection />
      
      {/* SEÇÃO 2: Quebrando a Primeira Falsa Crença (O Veículo) */}
      <VehicleSection />
      
      {/* SEÇÃO 3: Desempacotando o Valor e Quebrando a Crença Interna */}
      <ValueSection />
      
      {/* SEÇÃO 4: A Oferta Irresistível e CTA */}
      <OfferSection />
      
      {/* SEÇÃO 5: Reforço Final e Porquê Agir Agora */}
      <ReinforcementSection />
    </main>
  );
}