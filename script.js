/**
 * MBC Clear Finance — Main JavaScript
 * Handles all interactive features: nav, calculator, status levels, FAQ, testimonials, form, animations
 */

(function () {
  'use strict';

  /* ==========================================
     DATA
     ========================================== */

  const STATUS_LEVELS = [
    {
      level: 'Status A',
      color: '#2d8a4e',
      name: 'Administration Order',
      description: 'Light flag. Usually resolved within 30-60 days. Lowest complexity. This status indicates a basic administrative listing that can be cleared relatively quickly with proper documentation.',
      timeEstimate: '30-60 days',
      costRange: 'R2,500 - R5,000',
    },
    {
      level: 'Status B',
      color: '#5ba848',
      name: 'Debt Review Application',
      description: "You've applied but the process hasn't completed. Moderate complexity. We can help you withdraw or complete the application to clear this status.",
      timeEstimate: '45-90 days',
      costRange: 'R4,000 - R7,500',
    },
    {
      level: 'Status C',
      color: '#c9a227',
      name: 'Active Debt Review',
      description: 'Full debt review in progress. Requires legal intervention. This is the most common status we handle — our attorneys will work directly with your debt counsellor.',
      timeEstimate: '2-3 months',
      costRange: 'R5,000 - R10,000',
    },
    {
      level: 'Status D',
      color: '#e07a2e',
      name: 'Debt Review Default',
      description: "You've missed payments under review. Higher complexity, longer process. We'll need to negotiate with your creditors and resolve the default before clearing the flag.",
      timeEstimate: '3-4 months',
      costRange: 'R7,500 - R15,000',
    },
    {
      level: 'Status E',
      color: '#d35400',
      name: 'Judgment Listed',
      description: 'Court judgment attached. Requires additional legal work to rescind the judgment before the debt review flag can be removed. Extended timeline but fully achievable.',
      timeEstimate: '4-5 months',
      costRange: 'R10,000 - R20,000',
    },
    {
      level: 'Status G',
      color: '#c0392b',
      name: 'Sequestration',
      description: 'Most severe flag. Full legal rehabilitation required. Longest process but we have successfully helped many clients rebuild from this position.',
      timeEstimate: '3-6 months',
      costRange: 'R15,000 - R30,000',
    },
  ];

  const SERVICES = [
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
      title: 'Debt Review Removal',
      description: 'Legally remove your debt review flag from all credit bureaus. We handle the entire process from application to confirmation.',
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M12 18l1-2 2 1-1 2-2-1z"/></svg>',
      title: 'Credit Report Clearance',
      description: 'Clean up errors, outdated entries, and negative listings on your credit report to improve your credit score.',
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 13l6-6"/><path d="M16 4l4 4"/><path d="M4 20l5-5"/><path d="M8 8l-5 5"/><path d="M10 6l-2 2"/><rect x="2" y="18" width="6" height="4" rx="1"/></svg>',
      title: 'Judgment Removal',
      description: 'Remove court judgments and adverse listings that are preventing you from accessing credit and finance.',
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M8 14v2a2 2 0 002 2h4a2 2 0 002-2v-2"/><path d="M5 14h14"/></svg>',
      title: 'Debt Counsellor Negotiation',
      description: 'We negotiate directly with your debt counsellor and creditors to fast-track your clearance process.',
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 6l-9 9-5-5-7 7"/><path d="M17 6h6v6"/></svg>',
      title: 'Credit Score Recovery',
      description: 'Strategic guidance and actions to rebuild your credit score after debt review removal.',
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M8 7l-4 8h8l-4-8z"/><path d="M16 7l-4 8h8l-4-8z"/><path d="M3 21h18"/></svg>',
      title: 'Legal Consultation',
      description: 'Professional legal advice on debt matters, your rights, and the best path to financial freedom.',
    },
  ];

  const FAQS = [
    {
      question: 'How long does debt review removal take?',
      answer: 'Most debt review removals are completed within 3 months. The exact timeline depends on your specific status level and the complexity of your case. Status A cases can be resolved in as little as 30 days, while Status G cases may take up to 6 months.',
    },
    {
      question: 'How much does it cost to remove debt review?',
      answer: 'Our fees are based on your monthly income and the complexity of your case. Use our affordability calculator above to get an estimate. We offer flexible payment plans — you can pay once-off or spread the cost over 3 or 6 months.',
    },
    {
      question: 'Will my credit score improve immediately?',
      answer: 'Once the debt review flag is removed, your credit profile becomes active again. Your score will start improving as you demonstrate responsible credit behavior. We also provide guidance on rebuilding your credit score.',
    },
    {
      question: 'Is debt review removal legal?',
      answer: 'Absolutely. Debt review removal is a legal process governed by the National Credit Act. Our attorneys handle everything through the proper legal channels, ensuring full compliance with South African law.',
    },
    {
      question: 'Can I apply for credit while under debt review?',
      answer: "No — while you're under debt review, you're legally prohibited from accessing new credit. This is exactly why removing the flag is so important. Once cleared, you can apply for loans, credit cards, vehicle finance, and home loans again.",
    },
    {
      question: 'What documents do I need to provide?',
      answer: "We typically need your ID document, proof of residence, your latest payslip or proof of income, and your credit report (which we can help you obtain). Our team will guide you through exactly what's needed during your consultation.",
    },
    {
      question: 'Do you help people outside Cape Town?',
      answer: 'Yes! While our office is in Lansdowne, Cape Town, we help clients across South Africa. The entire process can be handled remotely via WhatsApp, email, and phone.',
    },
    {
      question: 'What if I still have debt after removal?',
      answer: "Removing the debt review flag doesn't eliminate your existing debt — it removes the legal restriction on accessing credit. You'll still need to manage your existing obligations, but you'll have the freedom to consolidate, refinance, or access new credit if needed.",
    },
  ];

  const TESTIMONIALS = [
    {
      name: 'Leethan K',
      initials: 'LK',
      rating: 5,
      quote: "I found out I was under Debt Review without even knowing it! Every bank kept declining me and I couldn't understand why. Then I contacted MBC Clear Finance, and they helped me step by step to clear my name legally. The team was professional, fast, and explained everything in simple terms. Today, my credit profile is clean again — all thanks to MBC!",
      gradient: 'from-[#e07a2e] to-[#f5a623]',
    },
    {
      name: 'Leethan M',
      initials: 'LM',
      rating: 5,
      quote: "For the longest time, my name was basically blacklisted everywhere. Trying to get a phone contract? Forget about it. A small loan? No ways. It was like this heavy blanket hanging over me. Then a friend told me about MBC Clear Finance. From the first time I contacted them, I knew I was in good hands. They lifted that heavy weight off my shoulders!",
      gradient: 'from-[#f5a623] to-[#c9a227]',
    },
    {
      name: 'Sipho M',
      initials: 'SM',
      rating: 5,
      quote: "Truly delivered! I had a flag on my profile and was stuck under debt review — but they got it removed in under two months. Super fast, super professional. The team knew exactly what to ask and how to handle everything. Honestly, amazing people to deal with. If you're serious about getting your financial freedom back, MBC is the way to go!!",
      gradient: 'from-[#1e3a5f] to-[#4a7ab5]',
    },
    {
      name: 'Lucas N',
      initials: 'LN',
      rating: 4,
      quote: 'Professional service from start to finish. The process was clearly explained and the team kept me updated throughout. My debt review flag was removed within the promised timeframe. Would recommend to anyone looking for a reliable debt removal service.',
      gradient: 'from-[#c9a227] to-[#e07a2e]',
    },
  ];

  /* ==========================================
     NAVIGATION
     ========================================== */

  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  // Scroll effect for navbar
  function handleNavScroll() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // Mobile menu
  if (hamburger && mobileMenu && closeMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
    closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));

    // Close on link click
    mobileMenu.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  /* ==========================================
     CALCULATOR
     ========================================== */

  const incomeSlider = document.getElementById('incomeSlider');
  const incomeDisplay = document.getElementById('incomeDisplay');
  const removalCost = document.getElementById('removalCost');
  const monthlyPayment = document.getElementById('monthlyPayment');
  const paymentTerm = document.getElementById('paymentTerm');
  const totalCost = document.getElementById('totalCost');
  const termButtons = document.querySelectorAll('.term-btn');

  let currentTermMonths = 3;

  function formatCurrency(value) {
    return 'R ' + value.toLocaleString('en-ZA');
  }

  function updateCalculator() {
    const income = parseInt(incomeSlider.value, 10);
    const cost = Math.round(income * 0.15);
    const monthly = Math.round(cost / currentTermMonths);
    const total = monthly * currentTermMonths;

    incomeDisplay.textContent = formatCurrency(income);
    removalCost.textContent = formatCurrency(cost);
    monthlyPayment.textContent = formatCurrency(monthly);
    paymentTerm.textContent = 'Over ' + currentTermMonths + ' ' + (currentTermMonths === 1 ? 'payment' : 'months');
    totalCost.textContent = 'Total: ' + formatCurrency(total);
  }

  if (incomeSlider) {
    incomeSlider.addEventListener('input', updateCalculator);
  }

  termButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      termButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentTermMonths = parseInt(btn.dataset.months, 10);
      updateCalculator();
    });
  });

  // Initialize
  updateCalculator();

  /* ==========================================
     STATUS LEVELS
     ========================================== */

  const statusButtonsContainer = document.getElementById('statusButtons');
  const meterIndicator = document.getElementById('meterIndicator');
  const statusBadge = document.getElementById('statusBadge');
  const statusName = document.getElementById('statusName');
  const statusDescription = document.getElementById('statusDescription');
  const statusTime = document.getElementById('statusTime');
  const statusCost = document.getElementById('statusCost');

  let activeStatusIndex = 2; // Default to Status C

  function renderStatusDetail(index) {
    const status = STATUS_LEVELS[index];

    statusBadge.innerHTML =
      '<div class="status-dot" style="background:' +
      status.color +
      '"></div><span class="status-btn-label" style="color:' +
      status.color +
      '">' +
      status.level +
      '</span>';
    statusBadge.style.background = status.color + '18';

    statusName.textContent = status.name;
    statusDescription.textContent = status.description;
    statusTime.textContent = status.timeEstimate;
    statusCost.textContent = status.costRange;

    // Update meter indicator position
    const pct = (index / (STATUS_LEVELS.length - 1)) * 85 + 7.5;
    meterIndicator.style.bottom = pct + '%';
  }

  function renderStatusButtons() {
    if (!statusButtonsContainer) return;
    statusButtonsContainer.innerHTML = '';

    STATUS_LEVELS.forEach((status, idx) => {
      const btn = document.createElement('button');
      btn.className = 'status-btn' + (idx === activeStatusIndex ? ' active' : '');
      btn.innerHTML =
        '<div class="status-dot" style="background:' +
        status.color +
        '"></div>' +
        '<div><span class="status-btn-label">' +
        status.level +
        '</span>' +
        '<span class="status-btn-name">' +
        status.name +
        '</span></div>';
      btn.addEventListener('click', () => {
        activeStatusIndex = idx;
        // Update active class
        statusButtonsContainer.querySelectorAll('.status-btn').forEach((b, i) => {
          b.classList.toggle('active', i === idx);
        });
        renderStatusDetail(idx);
      });
      statusButtonsContainer.appendChild(btn);
    });
  }

  renderStatusButtons();
  renderStatusDetail(activeStatusIndex);

  /* ==========================================
     SERVICES
     ========================================== */

  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid) {
    SERVICES.forEach((service) => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML =
        '<div class="service-icon">' +
        service.icon +
        '</div>' +
        '<h3 class="service-title">' +
        service.title +
        '</h3>' +
        '<p class="service-desc">' +
        service.description +
        '</p>' +
        '<a href="https://wa.me/27822564601" target="_blank" rel="noopener noreferrer" class="service-link">' +
        'Learn More' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
        '</a>';
      servicesGrid.appendChild(card);
    });
  }

  /* ==========================================
     FAQ
     ========================================== */

  const faqList = document.getElementById('faqList');
  if (faqList) {
    FAQS.forEach((faq, index) => {
      const item = document.createElement('div');
      item.className = 'faq-item';
      item.innerHTML =
        '<button class="faq-question" aria-expanded="false">' +
        '<span>' +
        faq.question +
        '</span>' +
        '<svg class="faq-toggle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12h14"/></svg>' +
        '</button>' +
        '<div class="faq-answer">' +
        '<p>' +
        faq.answer +
        '</p>' +
        '</div>';

      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const toggle = item.querySelector('.faq-toggle');

      question.addEventListener('click', () => {
        const isOpen = answer.classList.contains('open');

        // Close all others (accordion behavior)
        faqList.querySelectorAll('.faq-answer').forEach((a) => a.classList.remove('open'));
        faqList.querySelectorAll('.faq-toggle').forEach((t) => t.classList.remove('open'));
        faqList.querySelectorAll('.faq-question').forEach((q) => q.setAttribute('aria-expanded', 'false'));

        if (!isOpen) {
          answer.classList.add('open');
          toggle.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
        }
      });

      faqList.appendChild(item);
    });
  }

  /* ==========================================
     TESTIMONIALS CAROUSEL
     ========================================== */

  const testimonialsScroll = document.getElementById('testimonialsScroll');
  const carouselDots = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentTestimonial = 0;

  function renderTestimonials() {
    if (!testimonialsScroll) return;
    testimonialsScroll.innerHTML = '';

    TESTIMONIALS.forEach((t) => {
      const card = document.createElement('div');
      card.className = 'testimonial-card';

      let stars = '';
      for (let i = 0; i < 5; i++) {
        stars +=
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="' +
          (i < t.rating ? '#f5a623' : 'rgba(255,255,255,0.2)') +
          '"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
      }

      card.innerHTML =
        '<div class="testimonial-inner">' +
        '<div class="testimonial-quote-icon">' +
        '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>' +
        '</div>' +
        '<p class="testimonial-text">"' +
        t.quote +
        '"</p>' +
        '<div class="testimonial-divider"></div>' +
        '<div class="testimonial-author">' +
        '<div class="testimonial-avatar bg-gradient-to-br ' +
        t.gradient +
        '">' +
        t.initials +
        '</div>' +
        '<div>' +
        '<p class="testimonial-name">' +
        t.name +
        '</p>' +
        '<div class="testimonial-status">' +
        '<span class="status-dot-green"></span>' +
        '<span class="status-text">Cleared</span>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="testimonial-stars">' +
        stars +
        '</div>' +
        '</div>';

      testimonialsScroll.appendChild(card);
    });
  }

  function renderDots() {
    if (!carouselDots) return;
    carouselDots.innerHTML = '';
    TESTIMONIALS.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (idx === currentTestimonial ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (idx + 1));
      dot.addEventListener('click', () => goToTestimonial(idx));
      carouselDots.appendChild(dot);
    });
  }

  function goToTestimonial(index) {
    if (!testimonialsScroll) return;
    const cards = testimonialsScroll.querySelectorAll('.testimonial-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      currentTestimonial = index;
      updateDots();
      updateArrows();
    }
  }

  function updateDots() {
    carouselDots.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentTestimonial);
    });
  }

  function updateArrows() {
    if (prevBtn) prevBtn.classList.toggle('disabled', currentTestimonial === 0);
    if (nextBtn) nextBtn.classList.toggle('disabled', currentTestimonial === TESTIMONIALS.length - 1);
  }

  // Scroll listener for dots sync
  if (testimonialsScroll) {
    testimonialsScroll.addEventListener('scroll', () => {
      const cardWidth = testimonialsScroll.scrollWidth / TESTIMONIALS.length;
      const newIndex = Math.round(testimonialsScroll.scrollLeft / cardWidth);
      if (newIndex !== currentTestimonial) {
        currentTestimonial = newIndex;
        updateDots();
        updateArrows();
      }
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goToTestimonial(Math.max(0, currentTestimonial - 1)));
  if (nextBtn) nextBtn.addEventListener('click', () => goToTestimonial(Math.min(TESTIMONIALS.length - 1, currentTestimonial + 1)));

  renderTestimonials();
  renderDots();
  updateArrows();

  /* ==========================================
     CONTACT FORM
     ========================================== */

  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.submit-btn');
      btn.innerHTML =
        '<span style="display:flex;align-items:center;justify-content:center;gap:8px;">' +
        '<svg class="spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20" stroke-linecap="round"/></svg>' +
        'Sending...' +
        '</span>';
      btn.disabled = true;

      setTimeout(() => {
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
      }, 1500);
    });
  }

  /* ==========================================
     SCROLL ANIMATIONS
     ========================================== */

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add animate class to section content
  document.querySelectorAll('.step-card, .service-card, .faq-item, .status-detail-card').forEach((el) => {
    el.classList.add('animate-on-scroll');
    scrollObserver.observe(el);
  });

  // Stagger delays for steps
  document.querySelectorAll('.step-card').forEach((el, i) => {
    el.style.transitionDelay = i * 0.15 + 's';
  });

  // Stagger for services
  document.querySelectorAll('.service-card').forEach((el, i) => {
    el.style.transitionDelay = i * 0.1 + 's';
  });

  // Stagger for FAQ
  document.querySelectorAll('.faq-item').forEach((el, i) => {
    el.style.transitionDelay = i * 0.08 + 's';
  });

  /* ==========================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ========================================== */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ==========================================
     SPINNER ANIMATION (CSS fallback)
     ========================================== */

  const style = document.createElement('style');
  style.textContent = '.spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
  document.head.appendChild(style);
})();
