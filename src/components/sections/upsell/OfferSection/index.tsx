 
import { OfferHeadline } from "./components/OfferHeadline";
import { PriceAnchoring } from "./components/PriceAnchoring";
import { OfferBox } from "./components/OfferBox";
import { GuaranteeBadge } from "./components/GuaranteeBadge";
import HotmartWidget from "@/components/integrations/HotmartWidget";

export function OfferSection() {
  return (
    <>
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-yellow-50/20 to-white overflow-hidden">
      {/* Background decorativo sutil sem animações contínuas */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container com espaçamento otimizado entre componentes */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Headline da Oferta */}
          <OfferHeadline />

          {/* Ancoragem de Preço */}
          <PriceAnchoring />

          {/* Caixa da Oferta com Preço */}
          <OfferBox />

          {/* Widget Hotmart - Botões de Aceite e Recusa */}
          <div className="max-w-3xl mx-auto">
            {/* Container do Widget Hotmart */}
            <div id="hotmart-sales-funnel-offer"></div>
            <HotmartWidget containerId="hotmart-sales-funnel-offer" type="salesFunnel" />
          </div>

          {/* Selo de Garantia */}
          <GuaranteeBadge />
        </div>
      </div>

      {/* Separador visual entre seções - estático */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 opacity-50" />
    </section>
    </>
  );
}

export { OfferSection as default };