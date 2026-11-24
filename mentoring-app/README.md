# Mentoring preparation exercise

Small Vite + TypeScript module using `@ui-sdk/web` and `@ui-sdk/core`.
The per-component imports in `src/main.ts` register the Web Components;
the controls use native buttons and textareas in light DOM. Styling is
scoped to the mentoring exercise and uses the existing site's tokens.

From the site root:

```sh
npm --prefix mentoring-app ci
npm --prefix mentoring-app run build
npx hexo generate
```

Vercel and Netlify run the module build before Hexo. Generated assets go
to `themes/gk-nerd/source/mentoring-app`, separate from the homepage app.
The mentoring template loads them only on the English and Russian pages.

Answers exist only in page memory: no requests, cookies, browser storage,
analytics or automatic messages are used by this exercise. Typed text is
added with `textContent` to the existing copyable prompt. Questions may be
skipped; moving back preserves answers; clearing restores the base prompt.
Without JavaScript, the original prompt and raw page URL remain readable.

`scripts/mentoring-text.js` generates both `llms.txt` routes from the same
current Hexo page content, including contact and preparation instructions.

Browser checks cover three-step navigation, keyboard focus, preserved
answers, exact personalised copying, clearing, inert user markup, Russian
copy and a 390 px mobile viewport. TypeScript checks run with every build.
