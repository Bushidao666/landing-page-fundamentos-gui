"use client";

import HeroSection from "@/components/sections/HeroSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ContentDetailsSection from "@/components/sections/ContentDetailsSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import BonusStackSection from "@/components/sections/BonusStackSection";
import PriceAnchoringSection from "@/components/sections/PriceAnchoringSection";
import PriceJustificationSection from "@/components/sections/PriceJustificationSection";
import GuaranteeAndFAQSection from "@/components/sections/GuaranteeAndFAQSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <ContentDetailsSection />
      <SocialProofSection />
      <BonusStackSection />
      <PriceAnchoringSection />
      <PriceJustificationSection />
      <GuaranteeAndFAQSection />
      <FooterSection />
    </main>
  );
}
