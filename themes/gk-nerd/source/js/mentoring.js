(function () {
  var button = document.querySelector('[data-copy-prompt]');
  var prompt = document.getElementById('preparation-prompt');
  var status = document.querySelector('[data-copy-status]');
  if (!button || !prompt || !status) return;

  function copyWithSelection(text) {
    var field = document.createElement('textarea');
    field.value = text;
    field.readOnly = true;
    field.tabIndex = -1;
    field.setAttribute('aria-hidden', 'true');
    field.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(field);
    try {
      field.select();
      return document.execCommand('copy');
    } catch (error) {
      return false;
    } finally {
      field.remove();
      button.focus({ preventScroll: true });
    }
  }

  button.hidden = false;
  button.addEventListener('click', async function () {
    var text = prompt.textContent.trim();
    var copied = false;
    button.disabled = true;
    status.textContent = '';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch (error) {
      // Clipboard access can be denied by browser or embedded-preview policy.
    }
    if (!copied) copied = copyWithSelection(text);
    button.disabled = false;
    status.textContent = copied ? button.dataset.copied : button.dataset.copyError;
    if (!copied) {
      var selection = window.getSelection();
      if (selection) {
        var range = document.createRange();
        range.selectNodeContents(prompt);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  });
})();
