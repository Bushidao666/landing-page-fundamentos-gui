import { ProgressBar } from "./components/ProgressBar";
import { InterruptionHeadline } from "./components/InterruptionHeadline";
import { OpportunityMessage } from "./components/OpportunityMessage";
import { VideoArea } from "./components/VideoArea";

export function HookSection() {
  return (
    <section className="relative">
      {/* Barra de Progresso - Fixa no topo */}
      <div className="sticky top-0 z-50">
        <ProgressBar />
      </div>

      {/* Container principal com padding responsivo otimizado */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Background decorativo sutil (estático) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" role="presentation">
            <div className="absolute top-10 -left-20 w-64 h-64 bg-yellow-300 rounded-full blur-2xl opacity-5"></div>
            <div className="absolute bottom-10 -right-20 w-64 h-64 bg-red-300 rounded-full blur-2xl opacity-5"></div>
          </div>

          {/* Conteúdo da seção com espaçamento otimizado */}
          <div className="relative z-10 space-y-8 sm:space-y-10 md:space-y-12">
            {/* Headlines de Interrupção */}
            <InterruptionHeadline />

            {/* Mensagem da Oportunidade */}
            <OpportunityMessage />

            {/* Vídeo de apresentação */}
            <VideoArea />
          </div>

          {/* Indicador de scroll (estático) */}
          <div className="mt-8 sm:mt-12 flex justify-center">
            <div className="text-gray-300 hover:text-gray-400 transition-colors">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HookSection as default };