"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  label: string;
  count: number;
}

interface FAQCategoriesProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  className?: string;
}

export default function FAQCategories({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  className 
}: FAQCategoriesProps) {
  return (
    <nav 
      className={cn("flex flex-wrap gap-2", className)}
      role="navigation"
      aria-label="Categorias de perguntas frequentes"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
            activeCategory === category.id
              ? "bg-[#D4AF37] text-slate-900"
              : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-gray-100"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-current={activeCategory === category.id ? "page" : undefined}
        >
          <span>{category.label}</span>
          {category.count > 0 && (
            <span className={cn(
              "ml-2 text-xs",
              activeCategory === category.id
                ? "text-slate-700"
                : "text-gray-400"
            )}>
              ({category.count})
            </span>
          )}
          
          {/* Indicador visual de categoria ativa */}
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-[#D4AF37] rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      ))}
    </nav>
  );
}