"use client";

import { Header } from "./components/Header";
import { StrategicExplanation } from "./components/StrategicExplanation";
import { QualificationList } from "./components/QualificationList";
import { DecisionSection } from "./components/DecisionSection";
import { FloatingElements } from "./components/FloatingElements";
import "./styles/animations.css";

export default function PriceJustificationSection() {
  return (
    <section
      id="price-justification"
      className="relative py-12 md:py-16 lg:py-24 overflow-hidden"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0">
        {/* Single gradient layer for better performance */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-50" />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/5" />
        
        {/* Grid pattern with reduced opacity */}
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Performance-optimized floating elements */}
        <FloatingElements />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-fluid">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16 lg:space-y-20">
          
          {/* Header Section */}
          <Header />
          
          {/* Strategic Explanation */}
          <StrategicExplanation />
          
          {/* Qualification List with Progressive Disclosure */}
          <QualificationList />
          
          {/* Decision Section with CTA */}
          <DecisionSection />
          
        </div>
      </div>
    </section>
  );
}