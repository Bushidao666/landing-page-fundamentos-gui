"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

/**
 * @file: LazyFAQSection.tsx
 * @responsibility: Lazy loaded FAQ section wrapper
 * @exports: LazyFAQSection
 * @imports: dynamic (next), motion (framer-motion)
 * @layer: components
 */

// Loading skeleton component
const FAQSkeleton = () => (
  <div className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-[#0f1419] to-[#0A192F]">
    <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 max-w-screen-2xl">
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        {/* Header skeleton */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full mb-6 sm:mb-8 h-10 w-48 mx-auto animate-pulse" />
          <div className="h-12 bg-white/5 rounded-lg w-3/4 mx-auto mb-4 animate-pulse" />
          <div className="h-8 bg-white/5 rounded-lg w-1/2 mx-auto animate-pulse" />
        </div>
        
        {/* Search skeleton */}
        <div className="mb-8 sm:mb-10 lg:mb-12 space-y-4 sm:space-y-6">
          <div className="h-12 bg-white/5 rounded-xl max-w-2xl mx-auto animate-pulse" />
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-10 w-24 bg-white/5 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
        
        {/* FAQ items skeleton */}
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {[1, 2, 3, 4, 5].map(i => (
            <motion.div
              key={i}
              className="bg-white/[0.02] backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 p-5 sm:p-6 lg:p-7 h-24 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Dynamic import with loading state
const FAQSectionAdvanced = dynamic(
  () => import("../FAQSectionAdvanced"),
  {
    loading: () => <FAQSkeleton />,
    ssr: true // Keep SSR for SEO
  }
);

const LazyFAQSection = () => {
  return <FAQSectionAdvanced />;
};

export default LazyFAQSection;