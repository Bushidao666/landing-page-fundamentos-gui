"use client";

import HeroSection from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/pain-points";
import SolutionSection from "@/components/sections/SolutionSection";
import ContentDetailsSection from "@/components/sections/ContentDetailsSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import BonusStackSection from "@/components/sections/BonusStackSection";
import PriceAnchoringSectionComplete from "@/components/sections/PriceAnchoringSectionComplete";
import PriceJustificationSection from "@/components/sections/PriceJustification";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FAQSection from "@/components/sections/FAQSection";
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
      <PriceAnchoringSectionComplete />
      <PriceJustificationSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
