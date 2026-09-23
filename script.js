const modal = document.getElementById('contactFormModal');
const openButtons = document.querySelectorAll('.open-contact-form');
const closeButton = modal?.querySelector('.close-button');

function openModal(event) {
  event?.preventDefault();
  if (!modal) return;
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('input[name="name"]')?.focus();
}

function closeModal() {
  if (!modal) return;
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

openButtons.forEach(button => button.addEventListener('click', openModal));
closeButton?.addEventListener('click', closeModal);
modal?.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});
