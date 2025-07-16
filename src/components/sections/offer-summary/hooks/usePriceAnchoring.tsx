/**
 * @file: usePriceAnchoring.tsx
 * @responsibility: Context and hook for PriceAnchoring section state management
 * @exports: PriceAnchoringProvider, usePriceAnchoring
 * @imports: React hooks, types
 * @layer: hooks
 */

"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { PaymentOption, PriceAnchoringState } from "../types";

interface PriceAnchoringContextValue extends PriceAnchoringState {
  setTotalValue: (value: number) => void;
  setPriceRevealed: (revealed: boolean) => void;
  setSelectedPayment: (option: PaymentOption) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
  resetState: () => void;
}

const PriceAnchoringContext = createContext<PriceAnchoringContextValue | undefined>(undefined);

const initialState: PriceAnchoringState = {
  totalValue: 0,
  priceRevealed: false,
  selectedPayment: 'installments',
  isLoading: false,
  hasError: false,
};

interface PriceAnchoringProviderProps {
  children: ReactNode;
  initialPaymentOption?: PaymentOption;
}

export function PriceAnchoringProvider({ 
  children, 
  initialPaymentOption = 'installments' 
}: PriceAnchoringProviderProps) {
  const [state, setState] = useState<PriceAnchoringState>({
    ...initialState,
    selectedPayment: initialPaymentOption,
  });

  const setTotalValue = useCallback((value: number) => {
    setState(prev => ({ ...prev, totalValue: value }));
  }, []);

  const setPriceRevealed = useCallback((revealed: boolean) => {
    setState(prev => ({ ...prev, priceRevealed: revealed }));
  }, []);

  const setSelectedPayment = useCallback((option: PaymentOption) => {
    setState(prev => ({ ...prev, selectedPayment: option }));
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, isLoading: loading }));
  }, []);

  const setError = useCallback((error: boolean) => {
    setState(prev => ({ ...prev, hasError: error }));
  }, []);

  const resetState = useCallback(() => {
    setState(initialState);
  }, []);

  const contextValue: PriceAnchoringContextValue = {
    ...state,
    setTotalValue,
    setPriceRevealed,
    setSelectedPayment,
    setLoading,
    setError,
    resetState,
  };

  return (
    <PriceAnchoringContext.Provider value={contextValue}>
      {children}
    </PriceAnchoringContext.Provider>
  );
}

export function usePriceAnchoring() {
  const context = useContext(PriceAnchoringContext);
  
  if (!context) {
    throw new Error('usePriceAnchoring must be used within PriceAnchoringProvider');
  }
  
  return context;
}