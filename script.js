const body = document.body;
const langSelect = document.getElementById('lang-select');
const revealTargets = document.querySelectorAll('[data-reveal]');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const cursorGlow = document.querySelector('.cursor-glow');

// Language Switcher Logic
const setLang = (lang) => {
  body.dataset.lang = lang;
  if (langSelect) {
    langSelect.value = lang;
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Save preference
  localStorage.setItem('user-lang', lang);
};

if (langSelect) {
  langSelect.addEventListener('change', (e) => {
    setLang(e.target.value);
  });
}

// Initial Load
const savedLang = localStorage.getItem('user-lang');
if (savedLang && translations[savedLang]) {
  setLang(savedLang);
} else {
  // Detect browser language
  const browserLang = navigator.language.slice(0, 2);
  const defaultLang = translations[browserLang] ? browserLang : 'en';
  setLang(defaultLang);
}

// Mobile Menu
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('is-active');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-active');
    });
  });
}

// Cursor Glow Effect
if (cursorGlow) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
    // Use opacity to show/hide to avoid jumping on initial load
    cursorGlow.style.opacity = '1';
  });
}

// Reveal Animations
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 } // Slightly lowered threshold for better mobile feel
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
}
