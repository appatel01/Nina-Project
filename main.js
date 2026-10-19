/* ============================================================
   Nina the Bakery — JavaScript
   ============================================================ */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);
});

/* ── Mobile menu ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
});
function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
}
// Close on outside click
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMobile();
});

/* ── Order form submission ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending… 🍞';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('formSuccess').style.display = 'block';
    btn.textContent = 'Sent! 🎉';
    btn.style.background = 'var(--green)';
    e.target.reset();
  }, 1200);
}

/* ── Newsletter form ── */
function nlSubmit(e) {
  e.preventDefault();
  document.getElementById('nlSuccess').style.display = 'block';
  e.target.reset();
}

/* ── Scroll reveal ── */
const revealElements = document.querySelectorAll(
  '.story__grid, .why-card, .testi-card, .order__inner, .contact__grid, .footer__top'
);
revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

/* ── Smooth active nav link highlight ── */
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav__links a');
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        link.style.opacity = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--terracotta)';
          link.style.opacity = '1';
        }
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => activeObserver.observe(s));
