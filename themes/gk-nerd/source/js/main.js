/**
 * glebkalinin.ru - Main JavaScript
 * Anime.js animations, theme toggle, Konami code
 */

(function() {
  'use strict';

  // ==========================================================================
  // Theme Toggle
  // ==========================================================================

  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const themeIcon = document.querySelector('.theme-icon');

  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  html.className = initialTheme;
  updateThemeIcon(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  function toggleTheme() {
    const currentTheme = html.className;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Animate toggle
    anime({
      targets: '.theme-toggle-thumb',
      scale: [1, 0.8, 1],
      duration: 300,
      easing: 'easeInOutQuad'
    });

    html.className = newTheme;
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  }

  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
  }

  // ==========================================================================
  // Progress Bar
  // ==========================================================================

  const progressBar = document.getElementById('progress-bar');

  function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width = progress + '%';
    }
  }

  window.addEventListener('scroll', updateProgressBar, { passive: true });

  // Stars removed per user request

  // ==========================================================================
  // Hero Entrance Animations
  // ==========================================================================

  function animateHero() {
    const elements = [
      { target: '#hero-name', delay: 0 },
      { target: '#hero-tagline', delay: 150 },
      { target: '#hero-description', delay: 300 },
      { target: '#hero-philosophy', delay: 450 },
      { target: '#hero-credentials', delay: 600 },
      { target: '#hero-identity', delay: 700 },
      { target: '#hero-cta', delay: 850 },
      { target: '#hero-visual', delay: 400 },
      { target: '#hero-nav', delay: 1000 }
    ];

    elements.forEach(({ target, delay }) => {
      const el = document.querySelector(target);
      if (el) {
        anime({
          targets: el,
          opacity: [0, 1],
          translateY: [30, 0],
          scale: target === '#hero-visual' ? [0.9, 1] : [1, 1],
          duration: 800,
          delay: delay,
          easing: 'easeOutCubic'
        });
      }
    });
  }

  // Run hero animation on load
  window.addEventListener('load', animateHero);

  // ==========================================================================
  // Scroll Animations (Intersection Observer)
  // ==========================================================================

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.index || 0) * 100;

        anime({
          targets: el,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 700,
          delay: delay,
          easing: 'easeOutCubic'
        });

        animateOnScroll.unobserve(el);
      }
    });
  }, observerOptions);

  // Observe elements
  document.querySelectorAll('.product-card, .product-featured, .beyond-card, .speculative-card, .video-card, .channel-card, .os-block, .ascii-diagram').forEach(el => {
    animateOnScroll.observe(el);
  });

  // ==========================================================================
  // Product Card Hover Effects
  // ==========================================================================

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      anime({
        targets: card,
        translateY: -4,
        duration: 300,
        easing: 'easeOutCubic'
      });
    });

    card.addEventListener('mouseleave', () => {
      anime({
        targets: card,
        translateY: 0,
        duration: 300,
        easing: 'easeOutCubic'
      });
    });
  });

  // ==========================================================================
  // Video Thumbnail Hover
  // ==========================================================================

  document.querySelectorAll('.video-thumbnail').forEach(thumb => {
    thumb.addEventListener('mouseenter', () => {
      anime({
        targets: thumb,
        scale: 1.02,
        duration: 300,
        easing: 'easeOutCubic'
      });
    });

    thumb.addEventListener('mouseleave', () => {
      anime({
        targets: thumb,
        scale: 1,
        duration: 300,
        easing: 'easeOutCubic'
      });
    });
  });

  // ==========================================================================
  // Smooth Scroll for Navigation
  // ==========================================================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without jump
        history.pushState(null, null, targetId);
      }
    });
  });

  // ==========================================================================
  // Konami Code Easter Egg
  // ==========================================================================

  const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.code === konamiCode[konamiIndex]) {
      konamiIndex++;

      if (konamiIndex === konamiCode.length) {
        unlockRussianBlog();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function unlockRussianBlog() {
    // Visual feedback
    const portal = document.getElementById('ru-blog-portal');

    if (portal) {
      portal.style.display = 'block';
      portal.style.position = 'fixed';
      portal.style.bottom = '20px';
      portal.style.left = '50%';
      portal.style.transform = 'translateX(-50%)';
      portal.style.padding = '1rem 2rem';
      portal.style.background = 'var(--accent)';
      portal.style.color = 'var(--bg-primary)';
      portal.style.borderRadius = '8px';
      portal.style.zIndex = '9999';
      portal.style.fontWeight = '700';

      anime({
        targets: portal,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutCubic'
      });

      // Also show confetti effect
      createConfetti();
    }

    // Play a sound effect (optional)
    console.log('🎮 Konami Code activated! Russian blog unlocked.');
  }

  function createConfetti() {
    const colors = ['#ff6b35', '#4a9e9e', '#ffffff', '#dedede'];

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-10px';
      confetti.style.zIndex = '9998';
      confetti.style.pointerEvents = 'none';
      document.body.appendChild(confetti);

      anime({
        targets: confetti,
        translateY: window.innerHeight + 100,
        translateX: (Math.random() - 0.5) * 200,
        rotate: Math.random() * 720,
        duration: 2000 + Math.random() * 1000,
        easing: 'easeOutQuad',
        complete: () => confetti.remove()
      });
    }
  }

  // ==========================================================================
  // Chat Functionality (Basic)
  // ==========================================================================

  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const micBtn = document.getElementById('mic-btn');

  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && chatInput.value.trim()) {
        addUserMessage(chatInput.value.trim());
        chatInput.value = '';
      }
    });
  }

  if (micBtn) {
    micBtn.addEventListener('click', () => {
      // Voice input placeholder
      anime({
        targets: micBtn,
        scale: [1, 1.2, 1],
        duration: 300,
        easing: 'easeInOutQuad'
      });
      console.log('Voice input coming soon...');
    });
  }

  function addUserMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-message user';
    msgDiv.innerHTML = `<p class="message-content">${escapeHtml(text)}</p>`;

    if (chatMessages) {
      chatMessages.appendChild(msgDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Simulate response
      setTimeout(() => {
        addBotResponse('This is a demo. Full AI chat coming soon!');
      }, 1000);
    }
  }

  function addBotResponse(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-message assistant';
    msgDiv.innerHTML = `<p class="message-content">${escapeHtml(text)}</p>`;

    if (chatMessages) {
      chatMessages.appendChild(msgDiv);

      anime({
        targets: msgDiv,
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 400,
        easing: 'easeOutCubic'
      });

      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // ==========================================================================
  // Figure Floating Animation
  // ==========================================================================

  const figurePlaceholder = document.querySelector('.figure-placeholder svg');

  if (figurePlaceholder) {
    anime({
      targets: figurePlaceholder,
      translateY: [-10, 10],
      rotate: [-1, 1],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  }

  // ==========================================================================
  // Section Header Animations
  // ==========================================================================

  const sectionHeaders = document.querySelectorAll('.section-header');

  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target.querySelector('.section-title'),
          opacity: [0, 1],
          translateX: [-30, 0],
          duration: 600,
          easing: 'easeOutCubic'
        });

        anime({
          targets: entry.target.querySelector('.section-subtitle'),
          opacity: [0, 1],
          translateX: [30, 0],
          duration: 600,
          delay: 150,
          easing: 'easeOutCubic'
        });

        headerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  sectionHeaders.forEach(header => headerObserver.observe(header));

  // ==========================================================================
  // Speculative Card Swap
  // ==========================================================================

  document.querySelectorAll('.speculative-swap-toggle').forEach(toggle => {
    const label = toggle.querySelector('.swap-label');
    if (label) toggle.dataset.label = label.textContent;

    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const card = this.closest('.speculative-card');
      if (!card) return;
      const isFlipped = card.classList.toggle('flipped');
      card.classList.toggle('is-flipped', isFlipped);
      const span = this.querySelector('.swap-label');
      if (span) {
        span.textContent = isFlipped
          ? 'Back to concept'
          : this.dataset.label || 'See the implementation';
      }
    });
  });

  // ==========================================================================
  // Night Shift Slides
  // ==========================================================================

  const slidesContainer = document.getElementById('nightshift-slides');
  if (slidesContainer) {
    const slides = slidesContainer.querySelectorAll('.nightshift-slide');
    const dots = slidesContainer.querySelectorAll('.nightshift-dot');
    const prevBtn = slidesContainer.querySelector('.nightshift-prev');
    const nextBtn = slidesContainer.querySelector('.nightshift-next');
    const headerText = document.getElementById('nightshift-header-text');
    let current = 0;

    function showSlide(n) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
      if (headerText) {
        headerText.textContent = slides[current].dataset.header;
      }
    }

    prevBtn.addEventListener('click', () => showSlide(current - 1));
    nextBtn.addEventListener('click', () => showSlide(current + 1));
    dots.forEach(dot => {
      dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.slide)));
    });
  }

  // ==========================================================================
  // Research Report Overlay
  // ==========================================================================

  const overlay = document.getElementById('research-overlay');
  const overlayIframe = document.getElementById('research-overlay-iframe');

  if (overlay) {
    function openResearchOverlay(url) {
      overlayIframe.src = url;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeResearchOverlay() {
      overlay.classList.remove('active');
      overlayIframe.src = '';
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.nightshift-view-report').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        openResearchOverlay(this.dataset.report);
      });
    });

    overlay.querySelector('.research-overlay-backdrop').addEventListener('click', closeResearchOverlay);
    overlay.querySelector('.research-overlay-close').addEventListener('click', closeResearchOverlay);

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeResearchOverlay();
      }
    });
  }

  // ==========================================================================
  // Futures Cone Interactivity
  // ==========================================================================

  const coneDescriptions = {
    possible: '<strong>Possible</strong> \u2013 What if AI knew everything about you? What if interfaces disappeared entirely? Science fiction territory.',
    plausible: '<strong>Plausible</strong> \u2013 AI agents with persistent memory, proactive health monitoring, autonomous research. Technically feasible, not yet mainstream.',
    probable: '<strong>Probable</strong> \u2013 Voice interfaces, session analysis, automated research digests. Already emerging in early-adopter workflows.',
    preferable: '<strong>Preferable</strong> \u2013 Personal OS: your data, your agents, your infrastructure. Local-first, human-authorized, context-aware. This is what I build and use daily.'
  };

  const coneSvg = document.querySelector('.futures-cone-svg');
  const coneInfo = document.getElementById('cone-info');
  const coneAnnotation = document.getElementById('cone-annotation');
  const coneLeader = document.getElementById('cone-leader');
  let activeCone = null;

  if (coneSvg && coneInfo) {
    document.querySelectorAll('.cone-layer').forEach(layer => {
      layer.addEventListener('click', function() {
        const zone = this.dataset.cone;

        if (activeCone === zone) {
          // Deactivate
          this.classList.remove('cone-active');
          coneSvg.classList.remove('has-active');
          coneInfo.innerHTML = '';
          if (coneAnnotation) coneAnnotation.style.opacity = '1';
          if (coneLeader) coneLeader.style.opacity = '0.3';
          activeCone = null;
        } else {
          // Activate new
          document.querySelectorAll('.cone-layer').forEach(l => l.classList.remove('cone-active'));
          this.classList.add('cone-active');
          coneSvg.classList.add('has-active');
          coneInfo.innerHTML = coneDescriptions[zone] || '';
          if (coneAnnotation) coneAnnotation.style.opacity = '0';
          if (coneLeader) coneLeader.style.opacity = '0';
          activeCone = zone;
        }
      });

      layer.addEventListener('mouseenter', function() {
        if (!activeCone) {
          coneInfo.innerHTML = coneDescriptions[this.dataset.cone] || '';
        }
      });

      layer.addEventListener('mouseleave', function() {
        if (!activeCone) {
          coneInfo.innerHTML = '';
        }
      });
    });
  }

})();