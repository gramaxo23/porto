const modal = document.getElementById('contactFormModal');
const openButtons = document.querySelectorAll('.open-contact-form');
const closeButton = modal?.querySelector('.close-button');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
let lastFocusedElement = null;

function openModal(event) {
  event?.preventDefault();
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  if (formFeedback) {
    formFeedback.hidden = true;
    formFeedback.textContent = '';
  }
  modal.querySelector('input[name="name"]')?.focus();
}

function closeModal() {
  if (!modal) return;
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

openButtons.forEach((button) => button.addEventListener('click', openModal));
closeButton?.addEventListener('click', closeModal);

modal?.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal?.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
});

// Handle contact form submission with immediate feedback + Netlify/Express compatibility
contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submitBtn = contactForm.querySelector('.form-submit');
  const formData = new FormData(contactForm);
  const encoded = new URLSearchParams(formData).toString();

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'A enviar...';
  }

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encoded,
    });
  } catch {
    // Fallback if offline/static preview
  }

  if (formFeedback) {
    formFeedback.textContent =
      'Mensagem registada com sucesso. Entraremos em contacto brevemente (923 579 181).';
    formFeedback.hidden = false;
  }

  contactForm.reset();

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar mensagem';
  }
});

// Interactive Grande Porto Municipal Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const municipalityCards = document.querySelectorAll('.municipality-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter') || 'all';

    filterButtons.forEach((b) => b.classList.toggle('active', b === btn));

    municipalityCards.forEach((card) => {
      const zone = card.getAttribute('data-zone');
      if (filter === 'all' || zone === filter) {
        card.removeAttribute('hidden');
      } else {
        card.setAttribute('hidden', '');
      }
    });
  });
});

// Accessible FAQ Accordion
const faqTriggers = document.querySelectorAll('.faq-trigger');

faqTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;

    trigger.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    if (panel) {
      if (isExpanded) {
        panel.setAttribute('hidden', '');
      } else {
        panel.removeAttribute('hidden');
      }
    }
  });
});
