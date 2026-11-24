'use strict';

const { posix } = require('path');

// Generate alongside the HTML pages, from the same source and current metadata.
// Returning data without a layout makes Hexo write a UTF-8 text route.
hexo.extend.generator.register('mentoring-text', function (locals) {
  const baseUrl = this.config.url.replace(/\/?$/, '/');
  const telegram = this.theme.config.telegram;
  const contact = telegram && /^[A-Za-z0-9_]+$/.test(telegram)
    ? 'https://t.me/' + telegram
    : '';

  return locals.pages.toArray()
    .filter(page => page.mentoring === true && page.layout === 'mentoring')
    .map(page => {
      const directory = posix.dirname(page.path);
      const rawPath = posix.join(directory, 'llms.txt');
      const canonicalPath = page.path.replace(/index\.html$/, '');
      const canonical = new URL(canonicalPath, baseUrl).href;
      const rawUrl = new URL(rawPath, baseUrl).href;
      // _content is the authored Markdown. Do not use rendered HTML or raw YAML.
      const body = String(page._content || '').trim();
      const ru = page.lang === 'ru';
      const sections = [
        '# ' + page.title,
        (ru ? 'Страница: ' : 'Page: ') + canonical + '\n' +
          (ru ? 'Текстовая версия: ' : 'Plain-text version: ') + rawUrl,
        body
      ];

      if (page.preparation_prompt) {
        sections.push(
          ru ? '## Необязательная подготовка к встрече' : '## Optional meeting preparation',
          String(page.preparation_prompt).trim()
        );
      }
      if (contact) {
        sections.push(ru ? '## Связаться с Глебом' : '## Contact Gleb', contact);
      }

      return { path: rawPath, data: sections.join('\n\n') + '\n' };
    });
});
