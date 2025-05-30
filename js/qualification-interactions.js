/**
 * Qualification Section Interactive Behaviors
 * Implements neuromarketing principles through micro-interactions
 * and progressive feedback systems
 */

class QualificationManager {
    constructor() {
        console.log('[QualificationManager] Constructor called');
        this.selectedProfiles = new Set();
        this.progressMeter = null;
        this.identificationButton = null;
        this.progressMessages = {
            0: { text: 'Nenhum perfil selecionado', level: 'low-match', color: '#ffcdd2' },
            25: { text: 'Baixa compatibilidade', level: 'low-match', color: '#ffcdd2' },
            50: { text: 'Compatibilidade moderada', level: 'medium-match', color: '#fff3e0' },
            75: { text: 'Alta compatibilidade', level: 'high-match', color: '#c8e6c9' },
            100: { text: 'Perfil ideal identificado!', level: 'high-match', color: '#c8e6c9' }
        };
        
        this.init();
    }

    init() {
        console.log('[QualificationManager] init() called');
        this.setupElements();
        this.bindEvents();
        this.setupIntersectionObserver();
        this.initializeProgressMeter();
        console.log('[QualificationManager] init() completed');
    }

    setupElements() {
        console.log('[QualificationManager] setupElements() called');
        this.profileCards = document.querySelectorAll('.profile-card');
        this.progressMeter = document.querySelector('.meter-progress');
        this.progressMarker = document.querySelector('.meter-marker');
        this.progressMessage = document.querySelector('.meter-message');
        this.identificationButton = document.querySelector('.identification-button');
        this.qualificationCTA = document.querySelector('.qualification-cta');
        this.meterLabel = document.querySelector('.meter-label');
        this.meterBar = document.querySelector('.meter-bar');
        this.identificationMeter = document.querySelector('.identification-meter');
        console.log('[QualificationManager] profileCards found:', this.profileCards.length);
        console.log('[QualificationManager] identificationButton found:', this.identificationButton);
        console.log('[QualificationManager] qualificationCTA found:', this.qualificationCTA);
    }

    bindEvents() {
        console.log('[QualificationManager] bindEvents() called');
        // Profile card selection with enhanced feedback
        this.profileCards.forEach((card, index) => {
            card.addEventListener('click', (e) => {
                console.log(`[QualificationManager] Profile card ${index} clicked`, e);
                this.handleProfileSelection(card, index, e);
            });
            card.addEventListener('mouseenter', (e) => this.handleProfileHover(card, true));
            card.addEventListener('mouseleave', (e) => this.handleProfileHover(card, false));
            
            // Accessibility: keyboard navigation
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleProfileSelection(card, index, e);
                }
            });
        });
        console.log('[QualificationManager] Profile card event listeners bound.');

        // CTA button enhanced interactions
        if (this.identificationButton) {
            this.identificationButton.addEventListener('mouseenter', () => {
                this.animateButtonHover(true);
            });
            
            this.identificationButton.addEventListener('mouseleave', () => {
                this.animateButtonHover(false);
            });

            this.identificationButton.addEventListener('click', (e) => {
                this.handleCTAClick(e);
            });
            console.log('[QualificationManager] CTA button event listeners bound.');
        } else {
            console.warn('[QualificationManager] identificationButton not found for binding events.');
        }
    }

    handleProfileSelection(card, index, event) {
        console.log(`[QualificationManager] handleProfileSelection() called for card index: ${index}`, card);
        // Neuromarketing: Immediate visual feedback reduces cognitive load
        const cardId = `profile-${index}`;
        const isSelected = card.classList.contains('selected');
        console.log(`[QualificationManager] Card ID: ${cardId}, Is Selected: ${isSelected}`);
        
        if (isSelected) {
            console.log('[QualificationManager] Deselecting card.');
            // Deselect with smooth transition
            card.classList.remove('selected');
            this.selectedProfiles.delete(cardId);
            this.animateDeselection(card);
        } else {
            console.log('[QualificationManager] Selecting card.');
            // Select with celebratory feedback
            card.classList.add('selected');
            this.selectedProfiles.add(cardId);
            this.animateSelection(card);
        }

        // Update progress meter with smooth animation
        console.log('[QualificationManager] Calling updateProgressMeter()');
        this.updateProgressMeter();
        
        // Haptic feedback for mobile devices
        if ('vibrate' in navigator) {
            navigator.vibrate(isSelected ? 50 : [50, 50, 50]);
        }

        // Analytics tracking (placeholder)
        this.trackInteraction('profile_selection', {
            profileIndex: index,
            action: isSelected ? 'deselect' : 'select',
            totalSelected: this.selectedProfiles.size
        });
    }

    animateSelection(card) {
        console.log('[QualificationManager] animateSelection() called', card);
        const checkMark = card.querySelector('.check-mark');
        
        // Neuromarketing: Success animation reinforces positive choice
        card.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            card.style.transform = '';
            if (checkMark) {
                checkMark.style.transform = 'scale(1) rotate(360deg)';
                setTimeout(() => {
                    checkMark.style.transform = 'scale(1)';
                }, 300);
            }
        }, 150);

        // Add success particle effect (optional enhancement)
        console.log('[QualificationManager] Calling createSuccessParticles() from animateSelection');
        this.createSuccessParticles(card);
    }

    animateDeselection(card) {
        console.log('[QualificationManager] animateDeselection() called', card);
        const checkMark = card.querySelector('.check-mark');
        
        card.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            card.style.transform = '';
            if (checkMark) {
                checkMark.style.transform = 'scale(0)';
            }
        }, 150);
    }

    createSuccessParticles(card) {
        console.log('[QualificationManager] createSuccessParticles() called for card:', card);
        // Neuromarketing: Micro-celebration increases dopamine response
        const rect = card.getBoundingClientRect();
        const particles = 5;
        
        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.className = 'success-particle';
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--color-gold);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${rect.left + rect.width * 0.2}px;
                top: ${rect.top + rect.height * 0.3}px;
            `;
            
            document.body.appendChild(particle);
            
            // Animate particle
            const angle = (360 / particles) * i;
            const distance = 30 + Math.random() * 20;
            const duration = 600 + Math.random() * 200;
            
            try {
                const animation = particle.animate([
                    { 
                        transform: 'translate(0, 0) scale(1)',
                        opacity: 1
                    },
                    { 
                        transform: `translate(${Math.cos(angle * Math.PI / 180) * distance}px, ${Math.sin(angle * Math.PI / 180) * distance}px) scale(0)`,
                        opacity: 0
                    }
                ], {
                    duration: duration,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                });

                if (animation) {
                    console.log('[QualificationManager] Particle animation created.', animation);
                    animation.onfinish = () => {
                        if (particle.parentNode) {
                            console.log('[QualificationManager] Particle animation finished, removing particle.');
                            particle.remove();
                        }
                    };
                } else {
                    console.warn('[QualificationManager] Particle animation object was null/undefined. Removing particle directly.');
                    // Fallback if animation couldn't be created
                    if (particle.parentNode) {
                        particle.remove();
                    }
                }
            } catch (error) {
                console.error('[QualificationManager] Failed to create or run success particle animation:', error);
                // Ensure particle is removed even if animation fails
                if (particle.parentNode) {
                    console.log('[QualificationManager] Removing particle due to error in animation.');
                    particle.remove();
                }
            }
        }
    }

    updateProgressMeter() {
        console.log('[QualificationManager] updateProgressMeter() called');
        const totalProfiles = this.profileCards.length;
        const selectedCount = this.selectedProfiles.size;
        const progressPercentage = Math.min((selectedCount / totalProfiles) * 100, 100);
        console.log(`[QualificationManager] Total Profiles: ${totalProfiles}, Selected: ${selectedCount}, Progress: ${progressPercentage}%`);
        
        // Smooth progress animation
        if (this.progressMeter) {
            this.progressMeter.style.width = `${progressPercentage}%`;
        }

        // Update progress visual feedback
        this.updateProgressVisualFeedback(selectedCount);
        
        // Update CTA button state
        this.updateCTAButton(selectedCount > 0);
        
        // Update meter label with count
        this.updateMeterLabel(selectedCount);
    }

    updateProgressVisualFeedback(selectedCount) {
        console.log(`[QualificationManager] updateProgressVisualFeedback() called with selectedCount: ${selectedCount}`);
        // Remove all previous state classes
        this.identificationMeter.classList.remove('no-match', 'low-match', 'medium-match', 'high-match', 'perfect-match');
        
        // Add pulse effect to the meter
        this.meterBar.style.animation = 'none';
        setTimeout(() => {
            this.meterBar.style.animation = 'meter-pulse 0.6s ease-out';
        }, 10);
        
        // Determine match level and update visual state
        let matchClass = '';
        let glowColor = '';
        let textToHighlight = '';
        
        if (selectedCount === 0) {
            matchClass = 'no-match';
            glowColor = 'rgba(242, 58, 78, 0.3)';
            textToHighlight = 'Nenhum perfil selecionado';
        } else if (selectedCount <= 2) {
            matchClass = 'low-match';
            glowColor = 'rgba(242, 58, 78, 0.3)';
            textToHighlight = 'Talvez não seja pra você';
        } else if (selectedCount <= 4) {
            matchClass = 'medium-match';
            glowColor = 'rgba(255, 215, 0, 0.3)';
            textToHighlight = 'Você vai se beneficiar';
        } else {
            matchClass = 'perfect-match';
            glowColor = 'rgba(76, 175, 80, 0.4)';
            textToHighlight = 'Este curso é PERFEITO para você!';
        }
        
        console.log(`[QualificationManager] Match Class: ${matchClass}, Glow Color: ${glowColor}`);
        // Apply visual state
        this.identificationMeter.classList.add(matchClass);
        
        // Add glow effect to CTA area
        this.qualificationCTA.style.boxShadow = `
            0 30px 60px rgba(30, 60, 114, 0.3),
            0 10px 30px rgba(30, 60, 114, 0.2),
            inset 0 0 120px ${glowColor}
        `;
        
        // Update message visibility
        this.updateMessageHighlight(selectedCount);
        
        // Special effects for perfect match
        if (selectedCount >= 5) {
            this.triggerPerfectMatchAnimation();
        }
    }

    updateMessageHighlight(selectedCount) {
        console.log(`[QualificationManager] updateMessageHighlight() called with selectedCount: ${selectedCount}`);
        const messages = this.progressMessage.querySelectorAll('span');
        
        // Reset all messages
        messages.forEach(msg => {
            msg.style.opacity = '0.4';
            msg.style.transform = 'scale(0.9)';
            msg.style.fontWeight = '400';
        });
        
        // Highlight appropriate message
        if (selectedCount === 0) {
            // No highlight for zero selection
        } else if (selectedCount <= 2 && messages[0]) {
            messages[0].style.opacity = '1';
            messages[0].style.transform = 'scale(1.1)';
            messages[0].style.fontWeight = '700';
            messages[0].style.color = '#ffcdd2';
            messages[0].style.textShadow = '0 0 20px rgba(242, 58, 78, 0.5)';
        } else if (selectedCount <= 4 && messages[1]) {
            messages[1].style.opacity = '1';
            messages[1].style.transform = 'scale(1.1)';
            messages[1].style.fontWeight = '700';
            messages[1].style.color = '#fff3e0';
            messages[1].style.textShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
        } else if (messages[2]) {
            messages[2].style.opacity = '1';
            messages[2].style.transform = 'scale(1.2)';
            messages[2].style.fontWeight = '800';
            messages[2].style.color = '#c8e6c9';
            messages[2].style.textShadow = '0 0 25px rgba(76, 175, 80, 0.6)';
            messages[2].style.animation = 'success-glow 1.5s ease-in-out infinite';
        }
    }

    updateMeterLabel(selectedCount) {
        console.log(`[QualificationManager] updateMeterLabel() called with selectedCount: ${selectedCount}`);
        if (this.meterLabel) {
            const originalText = 'Se identificou com 3 ou mais itens?';
            let newText = originalText;
            let labelClass = '';
            
            if (selectedCount === 0) {
                newText = 'Selecione os perfis que combinam com você';
                labelClass = 'label-neutral';
            } else if (selectedCount === 1) {
                newText = 'Você selecionou 1 perfil - selecione mais!';
                labelClass = 'label-low';
            } else if (selectedCount === 2) {
                newText = 'Você selecionou 2 perfis - quase lá!';
                labelClass = 'label-low';
            } else if (selectedCount === 3) {
                newText = '✓ Você selecionou 3 perfis - boa compatibilidade!';
                labelClass = 'label-medium';
            } else if (selectedCount === 4) {
                newText = '✓ Você selecionou 4 perfis - ótima compatibilidade!';
                labelClass = 'label-high';
            } else if (selectedCount === 5) {
                newText = '🎯 Você selecionou 5 perfis - compatibilidade excelente!';
                labelClass = 'label-perfect';
            } else {
                newText = '🚀 Você selecionou TODOS os perfis - MATCH PERFEITO!';
                labelClass = 'label-perfect';
            }
            
            // Apply animation
            this.meterLabel.style.opacity = '0';
            this.meterLabel.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                this.meterLabel.textContent = newText;
                this.meterLabel.className = 'meter-label ' + labelClass;
                this.meterLabel.style.opacity = '1';
                this.meterLabel.style.transform = 'translateY(0)';
            }, 300);
        }
    }

    triggerPerfectMatchAnimation() {
        console.log('[QualificationManager] triggerPerfectMatchAnimation() called');
        // Create celebratory effect
        const celebration = document.createElement('div');
        celebration.className = 'perfect-match-celebration';
        celebration.innerHTML = `
            <div class="celebration-text">🎉 MATCH PERFEITO! 🎉</div>
            <div class="celebration-particles"></div>
        `;
        celebration.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
            pointer-events: none;
            animation: celebration-appear 2s ease-out forwards;
        `;
        
        document.body.appendChild(celebration);
        
        // Create golden particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%);
                border-radius: 50%;
                left: 50%;
                top: 50%;
                animation: celebration-particle ${0.8 + Math.random() * 0.5}s ease-out forwards;
                animation-delay: ${Math.random() * 0.3}s;
            `;
            celebration.querySelector('.celebration-particles').appendChild(particle);
        }
        
        // Remove after animation (CSS animation duration is 2s for celebration-appear)
        setTimeout(() => {
            if (celebration.parentNode) {
                celebration.remove();
            }
        }, 2500); // A bit longer to ensure particles also finish
        
        // Enhance button glow
        if (this.identificationButton) {
            this.identificationButton.classList.add('perfect-match-button');
            setTimeout(() => {
                this.identificationButton.classList.remove('perfect-match-button');
            }, 3000);
        }
    }

    updateCTAButton(hasSelections) {
        console.log(`[QualificationManager] updateCTAButton() called with hasSelections: ${hasSelections}`);
        if (!this.identificationButton) {
            console.warn('[QualificationManager] identificationButton not found in updateCTAButton.');
            return;
        }
        
        const button = this.identificationButton;
        const selectedCount = this.selectedProfiles.size;
        
        if (hasSelections) {
            button.classList.add('active');
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
            
            // Update button text based on selection count
            if (selectedCount >= 5) {
                button.textContent = '🚀 SIM! ESTE CURSO É PERFEITO PRA MIM!';
                button.classList.add('perfect-match');
            } else if (selectedCount >= 3) {
                button.textContent = '✓ QUERO ACESSAR OS FUNDAMENTOS AGORA!';
                button.classList.remove('perfect-match');
            } else {
                button.textContent = 'CONTINUAR SELECIONANDO...';
                button.classList.remove('perfect-match');
            }
            
            // Neuromarketing: Urgency through subtle animation
            if (!button.dataset.animated) {
                button.dataset.animated = 'true';
                this.addCtaPulse();
            }
        } else {
            button.classList.remove('active', 'perfect-match');
            button.style.opacity = '0.7';
            button.style.transform = 'scale(0.95)';
            button.dataset.animated = 'false';
            button.textContent = 'SELECIONE PELO MENOS UM PERFIL';
        }
    }

    addCtaPulse() {
        console.log('[QualificationManager] addCtaPulse() called');
        if (!this.identificationButton) return;
        
        const button = this.identificationButton;
        
        // Subtle pulse animation for conversion optimization
        const pulseInterval = setInterval(() => {
            if (button.dataset.animated !== 'true') {
                clearInterval(pulseInterval);
                return;
            }
            
            const selectedCount = this.selectedProfiles.size;
            const scale = selectedCount >= 5 ? 1.05 : 1.02;
            
            button.style.transform = `scale(${scale})`;
            setTimeout(() => {
                if (button.dataset.animated === 'true') {
                    button.style.transform = 'scale(1)';
                }
            }, 200);
        }, selectedCount >= 5 ? 1500 : 3000);
    }

    handleProfileHover(card, isEntering) {
        // console.log(`[QualificationManager] handleProfileHover() called, isEntering: ${isEntering}`, card); // Frequent log, uncomment if needed
        const checkLine = card.querySelector('.check-line');
        
        if (isEntering) {
            // Neuromarketing: Progressive disclosure on hover
            if (checkLine) {
                checkLine.style.background = 'linear-gradient(to bottom, var(--color-gold), rgba(255, 215, 0, 0.3))';
            }
        } else {
            if (checkLine) {
                checkLine.style.background = 'linear-gradient(to bottom, var(--color-blue-gradient-start), rgba(30, 60, 114, 0.15))';
            }
        }
    }

    animateButtonHover(isEntering) {
        // console.log(`[QualificationManager] animateButtonHover() called, isEntering: ${isEntering}`); // Frequent log, uncomment if needed
        if (!this.identificationButton) return;
        
        if (isEntering) {
            // Enhanced hover with glow effect
            this.identificationButton.style.filter = 'brightness(1.1) drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))';
        } else {
            this.identificationButton.style.filter = '';
        }
    }

    handleCTAClick(event) {
        console.log('[QualificationManager] handleCTAClick() called', event);
        const selectedCount = this.selectedProfiles.size;
        console.log(`[QualificationManager] CTA clicked, selectedCount: ${selectedCount}`);
        
        if (selectedCount === 0) {
            event.preventDefault();
            this.showSelectionRequired();
            return;
        } else if (selectedCount < 3) {
            event.preventDefault();
            this.showMinimumSelectionMessage();
            return;
        }

        // Neuromarketing: Success confirmation before redirect
        this.showSuccessConfirmation();
        
        // Track conversion
        this.trackInteraction('cta_click', {
            selectedProfiles: Array.from(this.selectedProfiles),
            conversionReady: true,
            matchLevel: selectedCount >= 5 ? 'perfect' : selectedCount >= 3 ? 'good' : 'low'
        });
    }

    showSelectionRequired() {
        console.log('[QualificationManager] showSelectionRequired() called');
        // Gentle shake animation to indicate selection required
        this.qualificationCTA.style.animation = 'gentle-shake 0.5s ease-in-out';
        
        setTimeout(() => {
            this.qualificationCTA.style.animation = '';
        }, 500);

        // Add temporary message
        const tempMessage = document.createElement('div');
        tempMessage.className = 'selection-required-message';
        tempMessage.textContent = 'Por favor, selecione pelo menos um perfil que se identifica com você.';
        tempMessage.style.cssText = `
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--color-danger);
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            box-shadow: 0 10px 20px rgba(244, 67, 54, 0.3);
            animation: fade-in-out 3s ease-in-out;
            z-index: 1000;
        `;

        this.qualificationCTA.style.position = 'relative';
        this.qualificationCTA.appendChild(tempMessage);

        setTimeout(() => {
            tempMessage.remove();
        }, 3000);
    }

    showMinimumSelectionMessage() {
        console.log('[QualificationManager] showMinimumSelectionMessage() called');
        const tempMessage = document.createElement('div');
        tempMessage.className = 'selection-minimum-message';
        tempMessage.textContent = `Selecione pelo menos 3 perfis para continuar (faltam ${3 - this.selectedProfiles.size})`;
        tempMessage.style.cssText = `
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--color-gold);
            color: var(--color-blue-dark);
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
            animation: fade-in-out 3s ease-in-out;
            z-index: 1000;
        `;

        this.qualificationCTA.style.position = 'relative';
        this.qualificationCTA.appendChild(tempMessage);

        setTimeout(() => {
            tempMessage.remove();
        }, 3000);
    }

    showSuccessConfirmation() {
        console.log('[QualificationManager] showSuccessConfirmation() called');
        const selectedCount = this.selectedProfiles.size;
        
        // Brief success animation before proceeding
        this.identificationButton.style.background = 'linear-gradient(135deg, var(--color-success) 0%, #2e7d32 100%)';
        
        if (selectedCount >= 5) {
            this.identificationButton.textContent = '✓ MATCH PERFEITO CONFIRMADO!';
        } else {
            this.identificationButton.textContent = '✓ Identificação Completa!';
        }
        
        setTimeout(() => {
            // Proceed with normal flow
            this.identificationButton.style.background = '';
        }, 1500);
    }

    setupIntersectionObserver() {
        console.log('[QualificationManager] setupIntersectionObserver() called');
        // Animate elements as they come into view
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe profile cards for staggered animation
        this.profileCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // Observe CTA section
        if (this.qualificationCTA) {
            observer.observe(this.qualificationCTA);
        }
    }

    initializeProgressMeter() {
        console.log('[QualificationManager] initializeProgressMeter() called');
        // Start with 0 progress
        if (this.progressMeter) {
            this.progressMeter.style.width = '0%';
        }
        
        // Initialize visual states
        if (this.progressMessage) {
            const messages = this.progressMessage.querySelectorAll('span');
            messages.forEach(msg => {
                msg.style.transition = 'all 0.3s ease';
                msg.style.opacity = '0.4';
                msg.style.transform = 'scale(0.9)';
            });
        }
    }

    trackInteraction(eventType, data) {
        console.log('[QualificationManager] Qualification Interaction:', eventType, data);
        
        // Here you would integrate with your analytics service
        // Example: gtag('event', eventType, data);
    }
}

// CSS animations to be added dynamically
const qualificationStyles = `
    @keyframes gentle-shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    @keyframes fade-in-out {
        0%, 100% { opacity: 0; transform: translateX(-50%) translateY(10px); }
        20%, 80% { opacity: 1; transform: translateX(-50%) translateY(0); }
    }

    @keyframes meter-pulse {
        0% { transform: scaleY(1); }
        50% { transform: scaleY(1.2); }
        100% { transform: scaleY(1); }
    }

    @keyframes success-glow {
        0%, 100% { 
            transform: scale(1.2);
            filter: brightness(1);
        }
        50% { 
            transform: scale(1.25);
            filter: brightness(1.2);
        }
    }

    @keyframes celebration-appear {
        0% { 
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        50% { 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
        }
        100% { 
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes celebration-particle {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(
                ${() => (Math.random() - 0.5) * 200}px,
                ${() => (Math.random() - 0.5) * 200}px
            ) scale(0);
            opacity: 0;
        }
    }

    .animate-in {
        animation: slide-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }

    @keyframes slide-up {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .success-particle {
        animation: particle-fade 0.6s ease-out forwards;
    }

    @keyframes particle-fade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }

    /* Meter state classes */
    .identification-meter.no-match .meter-bar {
        background: rgba(242, 58, 78, 0.2);
    }

    .identification-meter.low-match .meter-bar {
        background: rgba(242, 58, 78, 0.15);
    }

    .identification-meter.medium-match .meter-bar {
        background: rgba(255, 215, 0, 0.15);
    }

    .identification-meter.perfect-match .meter-bar {
        background: rgba(76, 175, 80, 0.15);
        animation: perfect-glow 2s ease-in-out infinite;
    }

    @keyframes perfect-glow {
        0%, 100% {
            box-shadow: inset 0 0 10px rgba(76, 175, 80, 0.3);
        }
        50% {
            box-shadow: inset 0 0 30px rgba(76, 175, 80, 0.5);
        }
    }

    /* Label states */
    .meter-label {
        transition: all 0.3s ease;
    }

    .meter-label.label-neutral {
        color: rgba(255, 255, 255, 0.8);
    }

    .meter-label.label-low {
        color: #ffcdd2;
        text-shadow: 0 0 20px rgba(242, 58, 78, 0.5);
    }

    .meter-label.label-medium {
        color: #fff3e0;
        text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
    }

    .meter-label.label-high {
        color: #e8f5e9;
        text-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
    }

    .meter-label.label-perfect {
        color: #c8e6c9;
        text-shadow: 0 0 30px rgba(76, 175, 80, 0.7);
        font-size: 1.2em;
        font-weight: 800;
        animation: perfect-label-pulse 1.5s ease-in-out infinite;
    }

    @keyframes perfect-label-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }

    /* Perfect match button state */
    .identification-button.perfect-match {
        animation: perfect-button-glow 1.5s ease-in-out infinite;
        transform: scale(1.05);
    }

    .identification-button.perfect-match-button {
        animation: perfect-button-celebrate 0.8s ease-out;
    }

    @keyframes perfect-button-glow {
        0%, 100% {
            box-shadow: 
                0 20px 40px rgba(255, 215, 0, 0.4),
                0 8px 20px rgba(255, 215, 0, 0.3),
                inset 0 2px 0 rgba(255,255,255,0.3),
                0 0 60px rgba(76, 175, 80, 0.4);
        }
        50% {
            box-shadow: 
                0 25px 50px rgba(255, 215, 0, 0.5),
                0 10px 25px rgba(255, 215, 0, 0.4),
                inset 0 2px 0 rgba(255,255,255,0.3),
                0 0 80px rgba(76, 175, 80, 0.6);
        }
    }

    @keyframes perfect-button-celebrate {
        0% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.1) rotate(5deg); }
        50% { transform: scale(1.15) rotate(-5deg); }
        75% { transform: scale(1.1) rotate(3deg); }
        100% { transform: scale(1.05) rotate(0deg); }
    }

    /* Celebration text */
    .celebration-text {
        font-family: var(--font-headings);
        font-size: 3rem;
        font-weight: 900;
        color: var(--color-gold);
        text-shadow: 
            0 0 20px rgba(255, 215, 0, 0.8),
            0 0 40px rgba(255, 215, 0, 0.6),
            0 0 60px rgba(255, 215, 0, 0.4);
        white-space: nowrap;
    }
`;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('[QualificationManager] DOMContentLoaded event fired.');
    // Add dynamic styles
    const styleSheet = document.createElement('style');
    
    styleSheet.textContent = qualificationStyles; // qualificationStyles already contains a valid celebration-particle keyframe
    document.head.appendChild(styleSheet);
    
    console.log('[QualificationManager] Initializing QualificationManager class.');
    // Initialize qualification manager
    new QualificationManager();
    console.log('[QualificationManager] QualificationManager class initialized.');
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QualificationManager;
} 