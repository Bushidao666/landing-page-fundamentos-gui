"use client";

import { useState, useMemo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { faqData, faqCategories } from "@/lib/faq-data";
import FAQBadge from "./components/FAQBadge";
import FAQItemComponent from "./components/FAQItemComponent";

/**
 * @file: FAQSectionOptimized.tsx
 * @responsibility: Performance optimized FAQ section with code splitting
 * @exports: FAQSectionOptimized
 * @imports: Various components with lazy loading
 * @layer: components
 */

// Lazy load heavy components
const FAQSearch = lazy(() => import("./components/FAQSearch"));
const FAQCategories = lazy(() => import("./components/FAQCategories"));
const FAQSchema = lazy(() => import("./components/FAQSchema"));
const FAQBreadcrumbs = lazy(() => import("./components/FAQBreadcrumbs"));

// Loading components
const SearchSkeleton = () => (
  <div className="h-12 bg-white/5 rounded-xl max-w-2xl mx-auto animate-pulse" />
);

const CategoriesSkeleton = () => (
  <div className="flex justify-center gap-2">
    {[1, 2, 3, 4].map(i => (
      <div key={i} className="h-10 w-24 bg-white/5 rounded-lg animate-pulse" />
    ))}
  </div>
);

const FAQSectionOptimized = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Optimized filtering with useMemo
  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => {
        // Early return for performance
        if (faq.question.toLowerCase().includes(query)) return true;
        if (faq.answer.toLowerCase().includes(query)) return true;
        return faq.keywords.some(keyword => keyword.toLowerCase().includes(query));
      });
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  // Show search only when user scrolls to FAQ section
  const handleSearchToggle = () => {
    setIsSearchVisible(true);
  };

  return (
    <>
      {/* Lazy loaded SEO components */}
      <Suspense fallback={null}>
        <FAQSchema faqs={filteredFAQs.slice(0, 10)} />
        <FAQBreadcrumbs />
      </Suspense>
      
      <section 
        id="faq"
        className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-[#0f1419] to-[#0A192F]"
        aria-labelledby="faq-heading"
      >
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        {/* Gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-transparent to-transparent pointer-events-none" />

        {/* Content Container */}
        <div className="relative container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 max-w-screen-2xl">
          <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
            
            {/* Header Section */}
            <motion.div 
              className="text-center mb-8 sm:mb-10 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FAQBadge />

              <motion.h2 
                id="faq-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-4 sm:mb-5 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Suas Dúvidas Respondidas
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Eliminando qualquer hesitação que possa estar te impedindo de transformar seu negócio
              </motion.p>
            </motion.div>

            {/* Search and Filter Section - Lazy loaded */}
            <motion.div 
              className="mb-8 sm:mb-10 lg:mb-12 space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              onViewportEnter={handleSearchToggle}
            >
              {/* Search Bar */}
              {isSearchVisible && (
                <Suspense fallback={<SearchSkeleton />}>
                  <FAQSearch 
                    onSearch={setSearchQuery}
                    placeholder="Busque por palavra-chave..."
                    className="max-w-2xl mx-auto"
                  />
                </Suspense>
              )}

              {/* Categories */}
              {isSearchVisible && (
                <Suspense fallback={<CategoriesSkeleton />}>
                  <FAQCategories
                    categories={faqCategories}
                    activeCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    className="justify-center"
                  />
                </Suspense>
              )}

              {/* Results info */}
              {(searchQuery || selectedCategory !== "all") && (
                <motion.div 
                  className="text-center text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span>
                    {filteredFAQs.length} {filteredFAQs.length === 1 ? 'pergunta encontrada' : 'perguntas encontradas'}
                  </span>
                  {filteredFAQs.length > 0 && (
                    <button
                      onClick={clearFilters}
                      className="ml-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors"
                    >
                      (limpar filtros)
                    </button>
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* FAQ Items - Virtualized for performance */}
            <motion.div 
              className="space-y-4 sm:space-y-5 lg:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <FAQItemComponent 
                    key={faq.id} 
                    faq={faq} 
                    index={index}
                  />
                ))
              ) : (
                <motion.div
                  className="text-center py-12 text-gray-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <p className="text-lg mb-2">Nenhuma pergunta encontrada</p>
                  <p className="text-sm">Tente usar outros termos de busca</p>
                </motion.div>
              )}
            </motion.div>

            {/* Bottom CTA */}
            {filteredFAQs.length > 0 && (
              <motion.div 
                className="mt-8 sm:mt-10 lg:mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="text-base sm:text-lg text-gray-400 mb-4">
                  Ainda tem dúvidas?
                </p>
                <motion.a 
                  href="mailto:suporte@exemplo.com"
                  className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] font-semibold transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Entre em contato conosco</span>
                </motion.a>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSectionOptimized;