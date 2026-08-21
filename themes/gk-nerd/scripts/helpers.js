/**
 * Theme helpers — Hexo auto-loads this file (themes/gk-nerd/scripts/helpers.js).
 * Exposes wa_me() so templates can produce `https://wa.me/<digits>` from
 * theme.whatsapp (a raw "+4917…" string) without each template re-stripping.
 */
hexo.extend.helper.register('wa_me', function (raw) {
  const digits = String(raw || this.theme.whatsapp || '').replace(/[^\d]/g, '');
  return digits ? `https://wa.me/${digits}` : '';
});
