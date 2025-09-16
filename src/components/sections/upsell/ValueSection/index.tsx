import { ObjectionHeadline } from "./components/ObjectionHeadline";
import { PillarsGrid } from "./components/PillarsGrid";
import { ExpertsSection } from "./components/ExpertsSection";

export function ValueSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      {/* Background decorativo sutil e estático */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-200 rounded-full blur-2xl opacity-5" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-200 rounded-full blur-2xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container com espaçamento otimizado entre componentes */}
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {/* Headline de Objeção e Resposta */}
          <ObjectionHeadline />

          {/* Grid dos 4 Pilares */}
          <PillarsGrid />

          {/* Seção de Especialistas */}
          <ExpertsSection />
        </div>
      </div>

      {/* Separador visual entre seções - estático */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-50" />
    </section>
  );
}

export { ValueSection as default };