const modal = document.getElementById('contactFormModal');
const openButtons = document.querySelectorAll('.open-contact-form');
const closeButton = modal?.querySelector('.close-button');
let lastFocusedElement = null;

function getFocusableElements() {
  if (!modal) return [];
  return [...modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter(element => element.getAttribute('aria-hidden') !== 'true' && !element.closest('.hidden-field'));
}

function openModal(event) {
  event?.preventDefault();
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('input[name="name"]')?.focus();
}

function closeModal() {
  if (!modal || modal.getAttribute('aria-hidden') === 'true') return;
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  lastFocusedElement?.focus?.();
}

openButtons.forEach(button => button.addEventListener('click', openModal));
closeButton?.addEventListener('click', closeModal);
modal?.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', event => {
  if (!modal || modal.getAttribute('aria-hidden') === 'true') return;
  if (event.key === 'Escape') {
    closeModal();
    return;
  }
  if (event.key === 'Tab') {
    const focusable = getFocusableElements();
    if (!focusable.length) {
      event.preventDefault();
      modal.focus();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
