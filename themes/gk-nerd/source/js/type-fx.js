/**
 * Homepage type effects — split words for scroll reveal, decode the wordmark.
 * Loaded on the homepage only (see layout.ejs). No external deps.
 * Ported from the Open Design export's support.js, stripped of DC wrapper.
 *
 * Behaviour:
 *   - `.tempo` blocks: each word becomes a <span class="w">; on intersection
 *     words fade up in accelerating cadence. Respects prefers-reduced-motion.
 *   - Nav wordmark: one-shot monospace "decode" animation on first paint.
 *     Glyphs shuffle then settle on the final text. ~32 frames.
 */
(function () {
  'use strict';
  if (!document.documentElement.classList.contains('page-home')) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Scroll-tempo word reveal ----------------------------------------------
  document.querySelectorAll('.tempo').forEach((el) => {
    if (el.dataset.fxSplit) return;
    el.dataset.fxSplit = '1';

    const split = (node) => {
      Array.from(node.childNodes).forEach((ch) => {
        if (ch.nodeType === 3) {
          const frag = document.documentFragment();
          ch.textContent.split(/(\s+)/).forEach((tok) => {
            if (!tok) return;
            if (/^\s+$/.test(tok)) { frag.appendChild(document.createTextNode(tok)); return; }
            const s = document.createElement('span');
            s.className = 'w';
            s.textContent = tok;
            frag.appendChild(s);
          });
          node.replaceChild(frag, ch);
        } else if (ch.nodeType === 1) {
          split(ch);
        }
      });
    };
    split(el);
    const words = el.querySelectorAll('.w');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      words.forEach((w) => w.classList.add('on'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        // accelerating cadence: first words land slow, later ones catch up
        words.forEach((w, i) =>
          setTimeout(() => w.classList.add('on'), 80 + i * Math.max(26, 95 - i * 5))
        );
      });
    }, { threshold: 0.2 });
    io.observe(el);
  });

  // ---- One-shot decode on the wordmark ---------------------------------------
  const mark = document.querySelector('nav.home-nav .wordmark');
  if (mark && !mark.dataset.fxDecoded) {
    mark.dataset.fxDecoded = '1';
    if (!reduceMotion) {
      const final = mark.textContent;
      const glyphs = '!<>-_\\/[]{}—=+*^?#';
      let frame = 0;
      const total = 32;
      const tick = () => {
        frame++;
        const p = frame / total;
        mark.textContent = Array.from(final)
          .map((c, i) =>
            c === ' '
              ? ' '
              : (i / final.length < p ? c : glyphs[(Math.random() * glyphs.length) | 0])
          )
          .join('');
        if (frame < total) requestAnimationFrame(tick);
        else mark.textContent = final;
      };
      requestAnimationFrame(tick);
    }
  }
})();
