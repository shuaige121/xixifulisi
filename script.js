const body = document.body;
const langButtons = document.querySelectorAll('[data-lang-switch]');
const revealTargets = document.querySelectorAll('[data-reveal]');

const setLang = (lang) => {
  body.dataset.lang = lang;
  langButtons.forEach((button) => {
    button.setAttribute('aria-pressed', button.dataset.langSwitch === lang ? 'true' : 'false');
  });
};

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLang(button.dataset.langSwitch);
  });
});

if (navigator.language && navigator.language.toLowerCase().startsWith('en')) {
  setLang('en');
}

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
    { threshold: 0.2 }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
}
