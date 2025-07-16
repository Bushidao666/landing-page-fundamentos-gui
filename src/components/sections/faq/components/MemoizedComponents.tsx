"use client";

import React, { memo } from "react";
import FAQItemComponent from "./FAQItemComponent";
import FAQSearch from "./FAQSearch";
import FAQCategories from "./FAQCategories";
import type { FAQItem } from "@/lib/faq-data";

/**
 * @file: MemoizedComponents.tsx
 * @responsibility: Memoized versions of FAQ components for performance
 * @exports: MemoizedFAQItem, MemoizedFAQSearch, MemoizedFAQCategories
 * @imports: React.memo, FAQ components
 * @layer: components
 */

// Memoized FAQ Item - only re-renders when props change
export const MemoizedFAQItem = memo(FAQItemComponent, (prevProps, nextProps) => {
  return (
    prevProps.faq.id === nextProps.faq.id &&
    prevProps.index === nextProps.index
  );
});

MemoizedFAQItem.displayName = "MemoizedFAQItem";

// Memoized Search - only re-renders when necessary
export const MemoizedFAQSearch = memo(FAQSearch);
MemoizedFAQSearch.displayName = "MemoizedFAQSearch";

// Memoized Categories - only re-renders when categories or selection changes
export const MemoizedFAQCategories = memo(FAQCategories, (prevProps, nextProps) => {
  return (
    prevProps.activeCategory === nextProps.activeCategory &&
    prevProps.categories.length === nextProps.categories.length &&
    prevProps.categories.every((cat, idx) => 
      cat.id === nextProps.categories[idx].id &&
      cat.count === nextProps.categories[idx].count
    )
  );
});

MemoizedFAQCategories.displayName = "MemoizedFAQCategories";

// Virtualized FAQ List for large datasets
interface VirtualizedFAQListProps {
  faqs: FAQItem[];
  startIndex?: number;
  endIndex?: number;
}

export const VirtualizedFAQList = memo(({ 
  faqs, 
  startIndex = 0, 
  endIndex = faqs.length 
}: VirtualizedFAQListProps) => {
  const visibleFAQs = faqs.slice(startIndex, endIndex);
  
  return (
    <>
      {visibleFAQs.map((faq, index) => (
        <MemoizedFAQItem 
          key={faq.id} 
          faq={faq} 
          index={startIndex + index}
        />
      ))}
    </>
  );
});

VirtualizedFAQList.displayName = "VirtualizedFAQList";