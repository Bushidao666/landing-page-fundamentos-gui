"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export default function FAQSearch({ onSearch, placeholder = "Buscar nas perguntas...", className }: FAQSearchProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className={cn(
          "relative transition-all duration-300",
          isFocused && "scale-[1.02]"
        )}
      >
        {/* Ícone de busca */}
        <Search className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors",
          isFocused ? "text-[#D4AF37]" : "text-gray-400"
        )} />
        
        {/* Input de busca otimizado */}
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            "w-full pl-12 pr-10 py-3 bg-white/5 border-white/10 rounded-xl",
            "placeholder:text-gray-500 text-gray-100",
            "focus:bg-white/10 focus:border-[#D4AF37]/40 focus:ring-2 focus:ring-[#D4AF37]/20",
            "transition-all duration-300"
          )}
          aria-label="Buscar perguntas frequentes"
        />
        
        {/* Botão de limpar */}
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Limpar busca"
            >
              <X className="w-4 h-4 text-gray-400 hover:text-gray-200" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Indicador de resultados (opcional) */}
      <AnimatePresence>
        {query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -bottom-6 left-0 text-xs text-gray-400"
          >
            Buscando por &ldquo;{query}&rdquo;...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}