/**
 * Homepage motion orchestration — lazy GSAP + ScrollTrigger + SplitText (trial).
 * Loaded on the homepage only (see layout.ejs). Self-contained, idempotent.
 *
 * Responsibilities:
 *   - Lazy-load GSAP + ScrollTrigger + SplitText with 8s timeout + fallback.
 *   - Hero entrance: chars rise + weight-bloom via SplitText.
 *   - Headings: scrub-on-scroll weight bloom; velocity skew on chapter cards.
 *   - Section reveals: fade-up on first intersection.
 *   - Pointer FX: chapter card 3D tilt (quickTo), hero CTA magnetic.
 *   - Adds html.gsap-type on success (CSS stands down weight-bloom);
 *     adds html.gsap-failed on timeout (CSS handles final-state bloom).
 */
(function () {
  'use strict';
  if (!document.documentElement.classList.contains('page-home')) return;
  if (window.__gkMotionInit) return;
  window.__gkMotionInit = true;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const GSAP_TIMEOUT_MS = 8000;
  const GSAP_VERSION = '3.13.0';
  const CDN = {
    gsap:         `https://cdn.jsdelivr.net/npm/gsap@${GSAP_VERSION}/dist/gsap.min.js`,
    scrollTrigger: `https://cdn.jsdelivr.net/npm/gsap@${GSAP_VERSION}/dist/ScrollTrigger.min.js`,
    splitText:    `https://cdn.jsdelivr.net/npm/gsap@${GSAP_VERSION}/dist/SplitText.min.js`,
  };

  // ---- CDN loader with timeout ---------------------------------------------
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = () => resolve(true);
      s.onerror = () => reject(new Error('cdn: ' + src));
      document.head.appendChild(s);
    });
  }

  let timedOut = false;
  function withDeadline(p, ms) {
    return Promise.race([
      p,
      new Promise((_, rej) => setTimeout(() => { timedOut = true; rej(new Error('timeout')); }, ms)),
    ]);
  }

  // ---- The actual motion routines ------------------------------------------
  function runMotion(gsap, ScrollTrigger, SplitText) {
    document.documentElement.classList.add('gsap-type');
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // ------- HERO: chars rise + weight-bloom -----
    const hero = document.querySelector('.st-hero');
    if (hero) {
      let chars;
      try {
        chars = new SplitText(hero, { type: 'chars,words' }).chars;
      } catch (e) {
        // SplitText failed (license / CDN) — manual fallback: split words by <span>
        chars = manualSplit(hero);
      }
      if (chars && chars.length) {
        gsap.set(chars, { yPercent: 110, opacity: 0 });
        gsap.to(chars, {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.018,
          delay: 0.15,
        });
      }
    }

    // ------- Headings: bloom as they enter -----
    document.querySelectorAll('.vf-bloom').forEach((h) => {
      ScrollTrigger.create({
        trigger: h,
        start: 'top 88%',
        onEnter: () => gsap.fromTo(h, { fontVariationSettings: '"wght" 380' }, {
          fontVariationSettings: '"wght" 720',
          duration: 0.9,
          ease: 'power2.out',
        }),
        once: true,
      });
    });

    // ------- Chapter / method / lab / community cards: rise + hover tilt -----
    const cards = document.querySelectorAll('.ch-card, .fx-card, .fx-step, .community-card, .lab-card, .workbench-card');
    cards.forEach((card) => {
      gsap.set(card, { y: 24, opacity: 0 });
      ScrollTrigger.create({
        trigger: card,
        start: 'top 92%',
        onEnter: () =>
          gsap.to(card, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }),
        once: true,
      });
    });

    // 3D tilt on chapter cards via quickTo
    document.querySelectorAll('.ch-card').forEach((card) => {
      const rotY = gsap.quickTo(card, 'rotationY', { duration: 0.4, ease: 'power3.out' });
      const rotX = gsap.quickTo(card, 'rotationX', { duration: 0.4, ease: 'power3.out' });
      const shine = card.querySelector('.card-frame');
      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const rx = ((e.clientX - r.left) / r.width - 0.5) * 8;
        const ry = ((e.clientY - r.top) / r.height - 0.5) * -8;
        rotX(ry);
        rotY(rx);
        if (shine) gsap.to(shine, { '--shine-x': `${((e.clientX - r.left) / r.width) * 100}%`, duration: 0.3, overwrite: 'auto' });
      };
      const onLeave = () => { rotX(0); rotY(0); };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    });

    // Hero CTA magnetic pull
    document.querySelectorAll('.cta-primary, .cta-ghost').forEach((cta) => {
      const x = gsap.quickTo(cta, 'x', { duration: 0.3, ease: 'power3.out' });
      const y = gsap.quickTo(cta, 'y', { duration: 0.3, ease: 'power3.out' });
      const onMove = (e) => {
        const r = cta.getBoundingClientRect();
        x(((e.clientX - r.left) / r.width - 0.5) * 14);
        y(((e.clientY - r.top) / r.height - 0.5) * 14);
      };
      const onLeave = () => { x(0); y(0); };
      cta.addEventListener('mousemove', onMove);
      cta.addEventListener('mouseleave', onLeave);
    });

    // Timeline rows: staggered accent line draw
    document.querySelectorAll('.fx-row').forEach((row, i) => {
      gsap.set(row, { opacity: 0, x: -16 });
      ScrollTrigger.create({
        trigger: row,
        start: 'top 88%',
        onEnter: () => gsap.to(row, {
          opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', delay: i * 0.05,
        }),
        once: true,
      });
    });

    // Refresh after fonts/images settle so triggers re-evaluate.
    window.addEventListener('load', () => ScrollTrigger.refresh());
  }

  // Manual char-split fallback when SplitText is unavailable.
  function manualSplit(node) {
    const out = [];
    Array.from(node.childNodes).forEach((c) => {
      if (c.nodeType === 3) {
        const txt = c.textContent;
        const wrap = document.createElement('span');
        wrap.style.display = 'inline-block';
        c.parentNode.replaceChild(wrap, c);
        Array.from(txt).forEach((ch) => {
          const span = document.createElement('span');
          span.textContent = ch === ' ' ? ' ' : ch;
          span.style.display = 'inline-block';
          span.classList.add('gsap-char');
          wrap.appendChild(span);
          out.push(span);
        });
      } else if (c.nodeType === 1 && !c.classList.contains('gsap-char')) {
        out.push(...manualSplit(c));
      }
    });
    return out;
  }

  // ---- Entry point -----------------------------------------------------------
  function start() {
    if (reduceMotion) return; // CSS-only fallback already carries the page

    // Defer the CDN fetch until the browser is idle so the GSAP request never
    // competes with first paint. The CSS weight-bloom animation carries the
    // page during the wait; if we miss the idle window (>2s) we still kick.
    const kick = (window.requestIdleCallback || ((cb) => setTimeout(cb, 1500)))(() => {
      withDeadline(
        loadScript(CDN.gsap)
          .then(() => loadScript(CDN.scrollTrigger))
          .then(() => loadScript(CDN.splitText).catch(() => null)) // optional
          .then(() => window.gsap && window.ScrollTrigger
            ? runMotion(window.gsap, window.ScrollTrigger, window.SplitText)
            : Promise.reject(new Error('gsap global missing'))),
        GSAP_TIMEOUT_MS
      ).catch(() => {
        // Quiet fallback: CSS .gsap-failed stands in.
        document.documentElement.classList.add('gsap-failed');
      });
    });

    // Belt-and-braces: if the page never becomes interactive (e.g. heavy
    // hero), force GSAP-failed after 8s so the CSS weight-bloom doesn't
    // stay stuck mid-state.
    setTimeout(() => {
      if (!document.documentElement.classList.contains('gsap-type') &&
          !document.documentElement.classList.contains('gsap-failed')) {
        document.documentElement.classList.add('gsap-failed');
      }
    }, 8000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
