import { TrapHeadline } from "./components/TrapHeadline";
import { PainAgitation } from "./components/PainAgitation";
import { FerrariAnalogy } from "./components/FerrariAnalogy";
import { SolutionPresentation } from "./components/SolutionPresentation";

export function VehicleSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Background decorativo sutil e estático */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute -top-20 -right-20 w-64 h-64 md:w-80 md:h-80 bg-red-200 rounded-full blur-2xl opacity-5" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 md:w-80 md:h-80 bg-orange-200 rounded-full blur-2xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container com espaçamento otimizado entre componentes */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* Headline da Armadilha */}
          <TrapHeadline />

          {/* Agitação da Dor */}
          <PainAgitation />

          {/* Analogia Ferrari */}
          <FerrariAnalogy />

          {/* Apresentação da Solução */}
          <SolutionPresentation />
        </div>
      </div>

      {/* Separador visual entre seções - estático */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-50" />
    </section>
  );
}

export { VehicleSection as default };