/**
 * @file: useStrategicModals.ts
 * @responsibility: Hook para gerenciar modais estratégicos baseados em comportamento do usuário
 * @exports: useStrategicModals
 * @imports: React hooks, intersection observer
 * @layer: hooks
 */

"use client";

import { useState, useEffect, useCallback } from 'react';

interface ModalState {
  leadCaptureModal: boolean;
}

interface JourneyProgress {
  sectionsViewed: string[];
  timeSpent: number;
  modalTriggered: boolean;
  hasReachedContentDetails: boolean;
}

export const useStrategicModals = () => {
  const [modalState, setModalState] = useState<ModalState>({
    leadCaptureModal: false,
  });

  const [journeyProgress, setJourneyProgress] = useState<JourneyProgress>({
    sectionsViewed: [],
    timeSpent: 0,
    modalTriggered: false,
    hasReachedContentDetails: false,
  });

  // Track time spent on page
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setJourneyProgress(prev => ({
        ...prev,
        timeSpent: Date.now() - startTime,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            
            setJourneyProgress(prev => {
              const newSectionsViewed = prev.sectionsViewed.includes(sectionId)
                ? prev.sectionsViewed
                : [...prev.sectionsViewed, sectionId];

              return {
                ...prev,
                sectionsViewed: newSectionsViewed,
                hasReachedContentDetails: sectionId === 'content-details' || prev.hasReachedContentDetails,
              };
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe content-details section
    const element = document.getElementById('content-details');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Trigger modal when user reaches content-details (50% da jornada)
  useEffect(() => {
    if (
      journeyProgress.hasReachedContentDetails &&
      !journeyProgress.modalTriggered &&
      !modalState.leadCaptureModal
    ) {
      const timer = setTimeout(() => {
        setModalState(prev => ({ ...prev, leadCaptureModal: true }));
        setJourneyProgress(prev => ({
          ...prev,
          modalTriggered: true
        }));
      }, 3000); // 3 segundos após chegar na content-details

      return () => clearTimeout(timer);
    }
  }, [journeyProgress.hasReachedContentDetails, journeyProgress.modalTriggered, modalState.leadCaptureModal]);

  // Listen for custom events to open modal
  useEffect(() => {
    const handleOpenModal = () => {
      setModalState(prev => ({ ...prev, leadCaptureModal: true }));
    };

    window.addEventListener('openLeadCaptureModal', handleOpenModal);
    return () => window.removeEventListener('openLeadCaptureModal', handleOpenModal);
  }, []);

  // Modal control functions
  const closeModal = useCallback(() => {
    setModalState(prev => ({ ...prev, leadCaptureModal: false }));
  }, []);

  const openModal = useCallback(() => {
    setModalState(prev => ({ ...prev, leadCaptureModal: true }));
  }, []);

  const handleContinueToCheckout = useCallback(() => {
    // Implementar redirecionamento para checkout
    window.open('https://checkout-url.com', '_blank');
  }, []);

  const handleContinueReading = useCallback((targetSection?: string) => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return {
    modalState,
    journeyProgress,
    closeModal,
    openModal,
    handleContinueToCheckout,
    handleContinueReading,
  };
}; 