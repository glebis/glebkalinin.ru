import '@ui-sdk/web/button'
import '@ui-sdk/web/field'
import '@ui-sdk/web/textarea'
import '@ui-sdk/web/progress'
import copy from './copy'
import './style.css'

const escape = (value: string) => value.replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]!))

function mount() {
  const root = document.querySelector<HTMLElement>('[data-preparation-exercise]')
  const prompt = document.getElementById('preparation-prompt')
  if (!root || !prompt) return
  const lang = document.documentElement.lang === 'ru' ? 'ru' : 'en'
  const text = copy[lang]
  const original = prompt.textContent!.trim()
  let current = 0
  const answers = ['', '', '']

  // Only fixed, escaped interface copy enters HTML. Visitor answers use textContent.
  root.innerHTML = `
    <h3 id="exercise-heading">${escape(text.title)}</h3>
    <p>${escape(text.intro)}</p>
    <form aria-labelledby="exercise-heading" method="post" action="#preparation-heading">
      <ui-progress value="1" max="3" aria-label="${escape(text.progressLabel)}">
        <ui-progress-track><ui-progress-indicator></ui-progress-indicator></ui-progress-track>
      </ui-progress>
      <p class="prep-progress" data-step-count>${escape(text.progress.replace('{step}', '1'))}</p>
      ${text.steps.map((step, index) => `
        <div class="prep-step" data-step="${index}" ${index ? 'hidden' : ''}>
          <ui-field name="preparation-${index}">
            <ui-field-label>${escape(step.label)}</ui-field-label>
            <ui-field-description>${escape(step.hint)}</ui-field-description>
            <ui-textarea auto-resize>
              <textarea name="preparation-${index}" rows="3" maxlength="1200" placeholder="${escape(step.placeholder)}"></textarea>
            </ui-textarea>
          </ui-field>
        </div>
      `).join('')}
      <div class="prep-actions">
        <ui-button data-back hidden><button type="button">${escape(text.back)}</button></ui-button>
        <button type="submit" class="prep-next">${escape(text.next)}</button>
        <ui-button data-clear><button type="button" class="prep-clear">${escape(text.clear)}</button></ui-button>
      </div>
      <p class="prep-privacy">${escape(text.privacy)}</p>
      <p class="prep-status" role="status" aria-live="polite"></p>
    </form>`

  const form = root.querySelector('form')!
  const steps = Array.from(root.querySelectorAll<HTMLElement>('[data-step]'))
  const progress = root.querySelector('ui-progress')!
  const progressLabel = root.querySelector('[data-step-count]')!
  const back = root.querySelector<HTMLElement>('[data-back]')!
  const next = root.querySelector<HTMLButtonElement>('.prep-next')!
  const status = root.querySelector<HTMLElement>('.prep-status')!
  const copyStatus = document.querySelector<HTMLElement>('[data-copy-status]')
  const fields = Array.from(root.querySelectorAll<HTMLTextAreaElement>('textarea'))

  function updatePrompt() {
    const notes = answers.flatMap((answer, index) => answer.trim()
      ? [`${text.steps[index]!.label}\n${answer.trim()}`] : [])
    prompt!.textContent = original + (notes.length
      ? `\n\n${text.notesLead}\n\n${notes.join('\n\n')}` : '')
    // A previous "copied" message should not describe newly edited text.
    if (copyStatus) copyStatus.textContent = ''
    status.textContent = ''
  }

  function showStep(index: number, focus = true) {
    current = index
    steps.forEach((step, i) => { step.hidden = i !== index })
    progress.setAttribute('value', String(index + 1))
    const label = text.progress.replace('{step}', String(index + 1))
    progress.setAttribute('aria-valuetext', label)
    progressLabel.textContent = label
    back.hidden = index === 0
    next.textContent = index === 2 ? text.finish : text.next
    if (focus) fields[index]!.focus()
  }

  root.querySelectorAll('ui-textarea').forEach((field, index) => {
    field.addEventListener('valuechange', () => {
      answers[index] = fields[index]!.value
      updatePrompt()
    })
  })
  back.addEventListener('action', () => showStep(current - 1))
  form.addEventListener('submit', event => {
    event.preventDefault()
    if (current < 2) return showStep(current + 1)
    updatePrompt()
    status.textContent = text.ready
    document.querySelector<HTMLButtonElement>('[data-copy-prompt]')?.focus()
  })
  root.querySelector('[data-clear]')!.addEventListener('action', () => {
    root.querySelectorAll('ui-textarea').forEach((field, index) => {
      // Set through the component API so its state and the native control agree.
      (field as HTMLElement & { value: string }).value = ''
      answers[index] = ''
    })
    updatePrompt()
    showStep(0)
    status.textContent = text.cleared
  })
  showStep(0, false)
  root.hidden = false
}

mount()
