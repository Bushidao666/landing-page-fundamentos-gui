import { useMemo, useCallback } from "react";
import { useDebounce } from "./useDebounce";
import type { FAQItem } from "@/lib/faq-data";

/**
 * @file: useFAQSearch.ts
 * @responsibility: Optimized FAQ search hook
 * @exports: useFAQSearch
 * @layer: hooks
 */

interface UseFAQSearchProps {
  faqs: FAQItem[];
  searchQuery: string;
  selectedCategory: string;
  debounceDelay?: number;
}

export const useFAQSearch = ({
  faqs,
  searchQuery,
  selectedCategory,
  debounceDelay = 300
}: UseFAQSearchProps) => {
  // Debounce search query for performance
  const debouncedSearchQuery = useDebounce(searchQuery, debounceDelay);

  // Memoized search function
  const searchFAQs = useCallback((items: FAQItem[], query: string) => {
    if (!query.trim()) return items;
    
    const lowerQuery = query.toLowerCase();
    return items.filter(faq => {
      // Early returns for performance
      if (faq.question.toLowerCase().includes(lowerQuery)) return true;
      if (faq.answer.toLowerCase().includes(lowerQuery)) return true;
      return faq.keywords.some(keyword => 
        keyword.toLowerCase().includes(lowerQuery)
      );
    });
  }, []);

  // Memoized filter function
  const filterByCategory = useCallback((items: FAQItem[], category: string) => {
    if (category === "all") return items;
    return items.filter(faq => faq.category === category);
  }, []);

  // Combined filtering with memoization
  const filteredFAQs = useMemo(() => {
    let result = faqs;
    
    // Apply category filter first (usually fewer categories than search results)
    result = filterByCategory(result, selectedCategory);
    
    // Then apply search filter
    result = searchFAQs(result, debouncedSearchQuery);
    
    return result;
  }, [faqs, selectedCategory, debouncedSearchQuery, filterByCategory, searchFAQs]);

  return {
    filteredFAQs,
    isSearching: searchQuery !== debouncedSearchQuery,
    resultCount: filteredFAQs.length
  };
};