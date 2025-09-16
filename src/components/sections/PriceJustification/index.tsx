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
      className="relative py-12 md:py-16 lg:py-24 overflow-hidden cv-auto"
    >
      {/* Background Premium Unificado */}
      <div className="absolute inset-0">
        {/* Base gradient azul como Pain Points */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/30" />
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-[rgba(10,25,47,0.08)]" />
        
        {/* Grid pattern with unified colors */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #0A192F 1px, transparent 1px), linear-gradient(to bottom, #0A192F 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Performance-optimized floating elements */}
        <FloatingElements />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-fluid">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-20 lg:space-y-24">
          
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