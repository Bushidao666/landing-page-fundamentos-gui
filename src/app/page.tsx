"use client";

import { HeroSection } from "@/components/sections/hero";
import { PainPointsSection } from "@/components/sections/pain-points";
import { SolutionTransitionSection } from "@/components/sections/solution-transition";
import { SolutionSection } from "@/components/sections/solution";
import { ContentDetailsSection } from "@/components/sections/content-details";
import { SocialProofSection } from "@/components/sections/social-proof-v2";
import { BonusStackSection } from "@/components/sections/BonusStack";
import PriceAnchoringSectionComplete from "@/components/sections/price-anchoring";
import PriceJustificationSection from "@/components/sections/PriceJustification";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import { FAQSectionAdvanced } from "@/components/sections/faq";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
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
    </main>
  );
}
