/**
 * Fondamenta Consulting — site interactions
 */

(function () {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = siteNav.querySelectorAll('a');

  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    });
  });

  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit');
  const statusEl = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    statusEl.textContent = '';
    statusEl.className = 'form-status';

    try {
      const response = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      const data = await response.json();

      if (data.success === 'true' || data.success === true) {
        statusEl.textContent = 'Thank you — your message has been sent. We will be in touch shortly.';
        statusEl.classList.add('form-status--success');
        form.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch {
      statusEl.textContent = 'Something went wrong. Please email us directly at julia@fondamenta.media';
      statusEl.classList.add('form-status--error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send message';
    }
  });

  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 20
      ? '0 2px 20px rgba(0,0,0,0.2)'
      : 'none';
  }, { passive: true });
})();
