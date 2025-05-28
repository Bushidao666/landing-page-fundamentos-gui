// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll para o indicador de scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Adiciona classe quando o usuário rola a página (para efeitos futuros)
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Animação de entrada dos elementos quando visíveis
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    const animatedElements = document.querySelectorAll('.hero-content, .pain-card, .benefit-item, .reality-card, .transformation-item, .profile-card');
    animatedElements.forEach(el => observer.observe(el));
    
    // Efeito parallax sutil no hero
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
    
    // Animação do gráfico de montanha-russa ao entrar em view
    const rollerCoasterGraph = document.querySelector('.roller-coaster-graph');
    if (rollerCoasterGraph) {
        const graphObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.5 });
        
        graphObserver.observe(rollerCoasterGraph);
    }
    
    // Adiciona efeito de ripple no botão CTA
    const ctaButtons = document.querySelectorAll('.hero-cta, .modules-button, .identification-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Funcionalidade de Tabs para a seção de Módulos
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona active class ao botão clicado
            this.classList.add('active');
            
            // Esconde todos os panes
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Mostra o pane correspondente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Reseta a animação da barra de progresso
            const progressBar = document.querySelector(`#${tabId} .progress-bar`);
            if (progressBar) {
                progressBar.style.transform = 'scaleX(0)';
                setTimeout(() => {
                    progressBar.style.transform = 'scaleX(1)';
                }, 50);
            }
        });
    });
    
    // Funcionalidade de Ver Mais/Ver Menos
    const showMoreButtons = document.querySelectorAll('.show-more-button');
    
    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moduleId = this.getAttribute('data-module');
            const collapsedCards = document.querySelectorAll(`#module${moduleId} .lesson-card.collapsed`);
            
            // Toggle classe active no botão
            this.classList.toggle('active');
            
            // Toggle display dos cards colapsados
            collapsedCards.forEach(card => {
                if (this.classList.contains('active')) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    
    // Funcionalidade do FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Fecha todos os outros FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle o FAQ clicado
            item.classList.toggle('active');
        });
    });
    
    // Animação específica da Timeline Future Vision
    const timelineSection = document.querySelector('.future-vision');
    if (timelineSection) {
        const timelineObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Reseta quaisquer animações anteriores
                    const timelineItems = entry.target.querySelectorAll('.timeline-item');
                    const connectors = entry.target.querySelectorAll('.timeline-connector');
                    
                    // Remove classes de animação para resetar
                    timelineItems.forEach(item => item.classList.remove('timeline-item-animated'));
                    connectors.forEach(connector => connector.classList.remove('connector-animated'));
                    entry.target.classList.remove('timeline-animated');
                    
                    // Adiciona a classe principal com pequeno delay para garantir reset
                    setTimeout(() => {
                        entry.target.classList.add('timeline-animated');
                        
                        // Anima os dots sequencialmente
                        timelineItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('timeline-item-animated');
                                
                                // Anima o conector após o dot (se existir)
                                if (connectors[index]) {
                                    setTimeout(() => {
                                        connectors[index].classList.add('connector-animated');
                                    }, 300);
                                }
                            }, index * 500); // 500ms de delay entre cada item para mais clareza
                        });
                    }, 100);
                }
            });
        }, { threshold: 0.4 }); // Aumentado para garantir que seja bem visível
        
        timelineObserver.observe(timelineSection);
    }

    // --- START: Modal Open/Close Logic Reinstated ---
    const modalOverlay = document.getElementById('leadCaptureModal');
    const openModalButton = document.getElementById('openLeadModalButton');
    // Ensure modalOverlay exists before querying its child, and that openModalButton exists
    const closeModalButton = modalOverlay ? modalOverlay.querySelector('.modal-close-button') : null;

    if (openModalButton && modalOverlay) {
        openModalButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            modalOverlay.classList.add('active');
        });
    }

    if (closeModalButton && modalOverlay) {
        closeModalButton.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (event) => {
            // Close if clicked outside the modal-content
            if (event.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }
    // --- END: Modal Open/Close Logic Reinstated ---
});

// ==============================================
// START OF CAPI SCRIPT TO BE APPENDED
// ==============================================

    // ==============================================
    // UTILITÁRIOS BASE PARA FACEBOOK CONVERSIONS API
    // ==============================================
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return undefined;
    }

    function setCookie(name, value, days = 365) {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }

    function generateUUID() {
      if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    /*
    async function sha256(message) {
      const msgBuffer = new TextEncoder().encode(message);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      return hashHex;
    }
    */

    function normalizePhone(phone) {
      if (!phone) return undefined;
      const digits = phone.replace(/\D/g, '');
      // Basic Brazil normalization, can be improved
      if (digits.length >= 10) { // Simplified: expects DD+Number
        return `55${digits}`; // Ensure country code 55 for Brazil
      }
      return digits; // Fallback
    }
    
    function getExternalId() {
      let externalId = getCookie('fb_external_id');
      if (!externalId) {
        externalId = generateUUID();
        setCookie('fb_external_id', externalId, 730); // Set cookie for 2 years
      }
      return externalId;
    }

    function getUrlParameters() {
      const params = {};
      const urlParams = new URLSearchParams(window.location.search);
      for (const [key, value] of urlParams) {
        params[key] = value;
      }
      return params;
    }

    function getFbclid() {
      const urlParams = getUrlParameters();
      return urlParams.fbclid || undefined;
    }

    // ==============================================
    // CONFIGURAÇÃO E INICIALIZAÇÃO
    // ==============================================
    const API_BASE_URL = 'https://mornatti-conversions-api.up.railway.app';
    const PIXEL_ID = '320115189467498';
    const FACEBOOK_CONVERSIONS_CONFIG = {
      currency: 'BRL',
      debugMode: true, // Set to false for production
    };

    let globalUserData = {
      external_id: getExternalId(),
      fbp: getCookie('_fbp'),
      fbc: getCookie('_fbc') || getFbclid(),
      em: undefined,
      ph: undefined,
      fn: undefined,
      ln: undefined,
    };

    const courseProductData = {
      name: 'Fundamentos Google Ads para E-commerce - Guilherme Mornatti',
      category: 'Curso Online',
      id: 'FGAE_GM_R47',
      price: 47.00,
      currency: 'BRL'
    };
    
    function debugLog(message, data) {
      if (FACEBOOK_CONVERSIONS_CONFIG.debugMode) {
        console.log(`[FB CAPI DEBUG] ${message}`, data !== undefined ? data : '');
      }
    }

    function updateUserData(newData) {
      Object.assign(globalUserData, newData);
      try {
        localStorage.setItem('fb_user_data', JSON.stringify(globalUserData));
        debugLog('User data updated and saved to localStorage', JSON.parse(JSON.stringify(globalUserData)));
      } catch (error) {
        console.error("Error saving user data to localStorage:", error);
      }
    }

    function loadUserData() {
      try {
        const stored = localStorage.getItem('fb_user_data');
        if (stored) {
          const dataFromStorage = JSON.parse(stored);
          // Merge stored data, giving priority to fresh cookie/URL param values for IDs
          globalUserData = {
            ...dataFromStorage, // Load all PII (em, ph, fn, ln etc.) from storage
            external_id: getExternalId(), // Always get fresh or existing valid external_id
            fbp: getCookie('_fbp') || dataFromStorage.fbp, // Use fresh cookie if available, else from storage
            fbc: getCookie('_fbc') || getFbclid() || dataFromStorage.fbc, // Use fresh cookie/URL param if available, else from storage
          };
        } else {
          // If no stored data, initialize with fresh cookie/URL param values
          globalUserData.external_id = getExternalId();
          globalUserData.fbp = getCookie('_fbp');
          globalUserData.fbc = getCookie('_fbc') || getFbclid();
        }

        // Ensure essential IDs are always present even if not in storage initially
        if (!globalUserData.external_id) globalUserData.external_id = getExternalId();
        if (!globalUserData.fbp) globalUserData.fbp = getCookie('_fbp');
        // Ensure fbc is updated if a new fbclid is in the URL
        const currentFbclid = getFbclid();
        if (currentFbclid) {
            globalUserData.fbc = currentFbclid;
        }

        debugLog('User data loaded/initialized', JSON.parse(JSON.stringify(globalUserData)));
      } catch (error) {
        console.error('Erro ao carregar dados do usuário do localStorage:', error);
        // Fallback to initial if load fails, ensuring essential IDs
        globalUserData.external_id = getExternalId();
        globalUserData.fbp = getCookie('_fbp');
        globalUserData.fbc = getCookie('_fbc') || getFbclid();
      }
    }
    
    function buildCapiUserData() {
        const userData = {};
        if (globalUserData.external_id) userData.external_id = [globalUserData.external_id];
        if (globalUserData.em) userData.em = [globalUserData.em];
        if (globalUserData.ph) userData.ph = [globalUserData.ph];
        if (globalUserData.fn) userData.fn = [globalUserData.fn];
        if (globalUserData.ln) userData.ln = [globalUserData.ln];
        if (globalUserData.fbc) userData.fbc = globalUserData.fbc;
        if (globalUserData.fbp) userData.fbp = globalUserData.fbp;
        // Add other PII fields if collected: ge, db, ct, st, zp, country
        return userData;
    }

    // ==============================================
    // DUAL EVENT SENDER (PIXEL + CAPI)
    // ==============================================
    async function sendDualEvent(eventName, pixelParams, capiPayloadBuilder) {
      const eventId = generateUUID();

      if (typeof fbq !== 'undefined') {
        fbq('track', eventName, pixelParams, { eventID: eventId });
        debugLog(`Pixel ${eventName} sent`, { eventId, pixelData: pixelParams });
      } else {
        debugLog(`fbq not defined, Pixel ${eventName} not sent.`);
      }
      
      const capiPayload = await capiPayloadBuilder(eventId);
      if (!capiPayload) {
          debugLog(`CAPI payload for ${eventName} could not be built.`);
          return;
      }

      let endpoint;
      switch (eventName.toLowerCase()) {
        case 'pageview': endpoint = 'pageview'; break;
        case 'viewcontent': endpoint = 'viewcontent'; break;
        case 'initiatecheckout': endpoint = 'initiatecheckout'; break;
        default:
          debugLog(`CAPI Event ${eventName} is not supported for direct sending via sendDualEvent.`);
          return;
      }

      if (endpoint) {
        try {
          debugLog(`Sending CAPI ${eventName}`, { requestBody: capiPayload });
          const response = await fetch(`${API_BASE_URL}/api/track/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(capiPayload)
          });
          const result = await response.json();
          if (response.ok && result.success) { // Assuming backend returns { "success": true, ... }
            debugLog(`CAPI ${eventName} sent successfully`, { eventId, fbtrace_id: result.fbtrace_id, response: result });
          } else {
            console.error(`Error in CAPI ${eventName} response:`, { status: response.status, result, requestBody: capiPayload });
          }
          return eventId;
        } catch (error) {
          console.error(`Error sending CAPI ${eventName}:`, { error, requestBody: capiPayload });
        }
      }
    }

    // ==============================================
    // PAGEVIEW EVENT
    // ==============================================
    async function buildPageViewCapiPayload(eventId) {
      const urlParameters = getUrlParameters();
      // Ensure fbc is updated if fbclid is new in the URL
      const currentFbclid = getFbclid();
      if (currentFbclid && currentFbclid !== globalUserData.fbc) {
          updateUserData({ fbc: currentFbclid });
      }
      return {
        eventId: eventId,
        userData: buildCapiUserData(),
        eventSourceUrl: window.location.href,
        urlParameters: urlParameters,
        actionSource: "website"
      };
    }

    async function triggerPageView() {
      await sendDualEvent('PageView', {}, buildPageViewCapiPayload);
    }

    // ==============================================
    // VIEWCONTENT EVENT
    // ==============================================
    async function buildViewContentCapiPayload(eventId, productData) {
      const urlParameters = getUrlParameters();
      const customData = {
        content_name: productData.name,
        content_category: productData.category,
        content_ids: [productData.id],
        content_type: 'product',
        contents: [{
          id: productData.id,
          quantity: 1,
          item_price: productData.price
        }],
        value: productData.price,
        currency: productData.currency,
        num_items: 1
      };
      return {
        eventId: eventId,
        userData: buildCapiUserData(),
        customData: customData,
        eventSourceUrl: window.location.href,
        urlParameters: urlParameters,
        actionSource: "website"
      };
    }

    async function triggerViewContent(productData) {
      const pixelParams = {
        content_name: productData.name,
        content_ids: [productData.id],
        content_type: 'product',
        value: productData.price,
        currency: productData.currency
      };
      await sendDualEvent('ViewContent', pixelParams, (eventId) => buildViewContentCapiPayload(eventId, productData));
    }

    // ==============================================
    // INITIATECHECKOUT EVENT
    // ==============================================
    async function buildInitiateCheckoutCapiPayload(eventId, productData) {
      const urlParameters = getUrlParameters();
      const customData = {
        content_name: productData.name,
        content_category: productData.category,
        content_ids: [productData.id],
        content_type: 'product',
        contents: [{
          id: productData.id,
          quantity: 1,
          item_price: productData.price
        }],
        value: productData.price,
        currency: productData.currency,
        num_items: 1
      };
      return {
        eventId: eventId,
        userData: buildCapiUserData(),
        customData: customData,
        eventSourceUrl: window.location.href, // Or specific checkout step URL
        urlParameters: urlParameters,
        actionSource: "website"
      };
    }

    async function triggerInitiateCheckout(productData) {
      const pixelParams = {
        content_name: productData.name,
        content_ids: [productData.id],
        content_type: 'product',
        value: productData.price,
        currency: productData.currency,
        num_items: 1
      };
      await sendDualEvent('InitiateCheckout', pixelParams, (eventId) => buildInitiateCheckoutCapiPayload(eventId, productData));
    }

    // ==============================================
    // LEAD FORM PROCESSING
    // ==============================================
    async function processLeadForm(formData) {
      const fullName = formData.fullName ? formData.fullName.trim() : '';
      const nameParts = fullName.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || (nameParts.length > 1 ? nameParts[0] : ''); // Use first if no last.
      
      const normalizedUserPhone = formData.phone ? normalizePhone(formData.phone) : undefined;
      const userEmail = formData.email ? formData.email.trim().toLowerCase() : undefined;
      
      // PII data is now sent raw
      const piiData = {
        em: userEmail, // Raw email
        ph: normalizedUserPhone, // Raw, normalized phone
        fn: firstName ? firstName.trim() : undefined, // Raw first name
        ln: lastName ? lastName.trim() : undefined  // Raw last name
      };
      
      // Filter out undefined PII values before updating
      const validPiiData = Object.fromEntries(Object.entries(piiData).filter(([_, v]) => v !== undefined && v !== ''));
      if (Object.keys(validPiiData).length > 0) {
        updateUserData(validPiiData);
      }
      debugLog('PII data processed (raw) and globalUserData updated.', JSON.parse(JSON.stringify(globalUserData)));
    }

    async function handleLeadFormSubmit(event) {
      event.preventDefault();
      const leadForm = document.getElementById('leadCaptureForm');
      const nameInput = document.getElementById('leadName');
      const emailInput = document.getElementById('leadEmail');
      const phoneInput = document.getElementById('leadPhone');

      // Ensure inputs exist before accessing value
      const name = nameInput ? nameInput.value : '';
      const email = emailInput ? emailInput.value : '';
      const phone = phoneInput ? phoneInput.value : '';
      
      const formData = { fullName: name, email: email, phone: phone };

      debugLog('Lead form submitted. Processing data...', formData);
      await processLeadForm(formData);
      
      debugLog('Triggering InitiateCheckout event...');
      await triggerInitiateCheckout(courseProductData);

      // Original actions from fundamentos.js
      console.log('Lead Capturado (CAPI integration):');
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Telefone:', phone);
      alert('Obrigado! Seus dados foram enviados. Você será redirecionado para o checkout.');
      
      const modalOverlay = document.getElementById('leadCaptureModal');
      if (modalOverlay) modalOverlay.classList.remove('active');
      if (leadForm) leadForm.reset();
      // window.location.href = 'URL_DO_CHECKOUT'; // Uncomment and set URL if redirection is needed
    }

    // ==============================================
    // MAIN INITIALIZATION LOGIC
    // ==============================================
    document.addEventListener('DOMContentLoaded', function() {
      loadUserData(); // Load persisted user data first
      debugLog('CAPI System Initialized. Current UserData:', JSON.parse(JSON.stringify(globalUserData)));

      // Trigger PageView on every page load
      // Using setTimeout to ensure Pixel is fully ready and other scripts have run
      setTimeout(triggerPageView, 200);

      // Trigger ViewContent for the main course offering
      setTimeout(() => triggerViewContent(courseProductData), 600);

      const leadForm = document.getElementById('leadCaptureForm');
      if (leadForm) {
        // To prevent multiple listeners if fundamentos.js also adds one,
        // ideally, the listener in fundamentos.js would be removed or this would be coordinated.
        // For now, this adds its own comprehensive listener.
        // If you can modify fundamentos.js, remove its 'submit' listener for 'leadCaptureForm'.
        leadForm.addEventListener('submit', handleLeadFormSubmit);
        debugLog("Event listener for 'leadCaptureForm' attached.");
      } else {
        debugLog("'leadCaptureForm' not found. Cannot attach CAPI submit listener.");
      }
    });

// ==============================================
// END OF CAPI SCRIPT TO BE APPENDED
// ============================================== 