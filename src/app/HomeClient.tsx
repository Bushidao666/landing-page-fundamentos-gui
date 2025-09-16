"use client";

import dynamic from "next/dynamic";
import React from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { HeroSection } from "@/components/sections/hero";
import { PainPointsSection } from "@/components/sections/pain-points";
import { useStrategicModals } from "@/hooks/useStrategicModals";
import { useAutoPageView } from "@/hooks/useFacebookConversions";
import { useWebVitals } from "@/hooks/useWebVitals";

// Seções pesadas abaixo da dobra carregadas dinamicamente (SSR mantido)
const SolutionTransitionSection = dynamic(
  () => import("@/components/sections/solution-transition").then(m => m.SolutionTransitionSection),
  {
    ssr: true,
    loading: () => <div className="h-12 sm:h-16" />,
  }
);

const SolutionSection = dynamic(
  () => import("@/components/sections/solution").then(m => m.SolutionSection),
  { ssr: true, loading: () => <div className="h-12 sm:h-16" /> }
);

const ContentDetailsSection = dynamic(
  () => import("@/components/sections/content-details").then(m => m.ContentDetailsSection),
  { ssr: true, loading: () => <div className="h-24 sm:h-32" /> }
);

const BonusStackSection = dynamic(
  () => import("@/components/sections/BonusStack").then(m => m.BonusStackSection),
  { ssr: true, loading: () => <div className="h-24 sm:h-32" /> }
);

const SocialProofSection = dynamic(
  () => import("@/components/sections/social-proof-v2").then(m => m.SocialProofSection),
  { ssr: true, loading: () => <div className="h-24 sm:h-32" /> }
);

const PriceAnchoringSectionComplete = dynamic(
  () => import("@/components/sections/price-anchoring"),
  { ssr: true, loading: () => <div className="h-16 sm:h-20" /> }
);

const PriceJustificationSection = dynamic(
  () => import("@/components/sections/PriceJustification"),
  { ssr: true, loading: () => <div className="h-16 sm:h-20" /> }
);

const GuaranteeSection = dynamic(
  () => import("@/components/sections/GuaranteeSection"),
  { ssr: true, loading: () => <div className="h-12 sm:h-16" /> }
);

const FooterSection = dynamic(
  () => import("@/components/sections/FooterSection"),
  { ssr: true, loading: () => <div className="h-12" /> }
);

const FAQSectionAdvanced = dynamic(
  () => import("@/components/sections/faq").then(m => m.FAQSectionAdvanced),
  { ssr: true, loading: () => <div className="h-24 sm:h-32" /> }
);

// Modal de interesse: carrega apenas quando necessário
const DynamicInterestModal = dynamic(
  () => import("@/components/modals/InterestModal"),
  { ssr: false, loading: () => null }
);

export default function HomeClient() {
  // PageView automático (CAPI + Pixel deduplicados)
  useAutoPageView();
  // Coleta de Web Vitals (apenas em desenvolvimento)
  useWebVitals();

  const {
    modalState,
    closeModal,
    handleContinueToCheckout,
    handleContinueReading,
  } = useStrategicModals();

  const preloadRef = React.useRef<HTMLDivElement | null>(null);

  // Preload não-bloqueante das seções pesadas após ocioso
  React.useEffect(() => {
    const idle = (window as any).requestIdleCallback || ((fn: any) => setTimeout(fn, 200));
    const cancel = (window as any).cancelIdleCallback || clearTimeout;
    const id = idle(() => {
      Promise.allSettled([
        import("@/components/sections/solution-transition"),
        import("@/components/sections/solution"),
        import("@/components/sections/content-details"),
        import("@/components/sections/BonusStack"),
        import("@/components/sections/social-proof-v2"),
        import("@/components/sections/price-anchoring"),
        import("@/components/sections/PriceJustification"),
        import("@/components/sections/GuaranteeSection"),
        import("@/components/sections/FooterSection"),
        import("@/components/sections/faq"),
        import("@/components/modals/InterestModal"),
      ]);
    });
    return () => cancel(id);
  }, []);

  // Preload via IntersectionObserver ~600px antes de entrar na viewport
  React.useEffect(() => {
    if (!preloadRef.current) return;
    const target = preloadRef.current;
    let didPreload = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!didPreload && entry.isIntersecting) {
            didPreload = true;
            Promise.allSettled([
              import("@/components/sections/solution-transition"),
              import("@/components/sections/solution"),
              import("@/components/sections/content-details"),
              import("@/components/sections/BonusStack"),
              import("@/components/sections/social-proof-v2"),
              import("@/components/sections/price-anchoring"),
              import("@/components/sections/PriceJustification"),
              import("@/components/sections/GuaranteeSection"),
              import("@/components/sections/FooterSection"),
              import("@/components/sections/faq"),
            ]);
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin: "600px 0px", threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <main className="min-h-screen">
          {/* Hero e primeira dobra: carregamento imediato */}
          <HeroSection />
          <PainPointsSection />

          {/* Sentinel para pré-carregar seções pesadas antes do usuário alcançar */}
          <div ref={preloadRef} aria-hidden="true" />

          {/* Demais seções: carregamento dinâmico com SSR e placeholders leves */}
          <SolutionTransitionSection />
          <SolutionSection />
          <ContentDetailsSection />
          <BonusStackSection />
          <SocialProofSection />
          <PriceAnchoringSectionComplete />
          <PriceJustificationSection />
          <GuaranteeSection />
          <FooterSection />
          <FAQSectionAdvanced />

          {/* Modal estratégico - carrega sob demanda */}
          {modalState.leadCaptureModal && (
            <DynamicInterestModal
              isOpen={modalState.leadCaptureModal}
              onClose={closeModal}
              onContinueToCheckout={handleContinueToCheckout}
            />
          )}
        </main>
      </MotionConfig>
    </LazyMotion>
  );
}


