/**
 * glebkalinin.ru - Main JavaScript (slim)
 * Theme toggle, progress bar, smooth scroll, Konami easter egg.
 * Anime.js removed (dropped CDN dependency; CSS transitions handle theming).
 *
 * Page-specific animations live in:
 *   - /js/type-fx.js  (word reveal + nav decode)  — homepage only
 *   - /js/motion.js   (GSAP orchestration)        — homepage only
 *   - /js/vault-graph.js (Three.js mount)         — homepage only
 */
(function () {
  'use strict';

  // ==========================================================================
  // Theme Toggle
  // Initial class is set in layout.ejs (<html class="dark">) to avoid FOUC.
  // JS overrides from localStorage or system preference once available.
  // ==========================================================================

  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Refine the initial class set by the server-rendered HTML
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  html.className = initialTheme;

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = html.className === 'dark' ? 'light' : 'dark';
      html.className = next;
      localStorage.setItem('theme', next);
    });
  }

  // ==========================================================================
  // Progress Bar
  // ==========================================================================

  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    const updateProgressBar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    };
    window.addEventListener('scroll', updateProgressBar, { passive: true });
    updateProgressBar();
  }

  // ==========================================================================
  // Smooth Scroll for Hash Anchors
  // ==========================================================================

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, null, targetId);
    });
  });

  // ==========================================================================
  // Generic Scroll-Reveal IO Observer
  // Used by homepage (.ch-card, .fx-card) and any other page that opts in
  // via these classes. CSS provides the initial hidden state.
  // ==========================================================================

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          reveal.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

    // Home page sections + bio cards + future opt-ins
    document.querySelectorAll(
      '.ch-card, .fx-card, .community-card, .product-card, .lab-card, .workbench-card'
    ).forEach((el) => reveal.observe(el));
  } else {
    // No IO or reduced motion: reveal everything immediately
    document.querySelectorAll(
      '.ch-card, .fx-card, .community-card, .product-card, .lab-card, .workbench-card'
    ).forEach((el) => el.classList.add('is-revealed'));
  }

  // ==========================================================================
  // Konami Code Easter Egg — unlocks the Russian blog portal
  // (CSS animates the portal; we just toggle visibility.)
  // ==========================================================================

  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
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
    const portal = document.getElementById('ru-blog-portal');
    if (portal) {
      portal.classList.add('is-unlocked');
    }
    // Lightweight confetti (no anime.js dependency)
    const colors = ['#ff6b35', '#4a9e9e', '#ffffff', '#dedede'];
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'konami-confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = (2 + Math.random() * 1) + 's';
      confetti.style.animationDelay = (Math.random() * 0.3) + 's';
      document.body.appendChild(confetti);
      confetti.addEventListener('animationend', () => confetti.remove());
    }
  }
})();
