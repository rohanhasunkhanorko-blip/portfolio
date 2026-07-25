const themeToggle = document.querySelector('[data-theme-toggle]');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme) document.documentElement.dataset.theme = savedTheme;

function setThemeLabel() {
  const isLight = document.documentElement.dataset.theme === 'light';
  themeToggle?.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
}

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('portfolio-theme', nextTheme);
  setThemeLabel();
});

setThemeLabel();
document.querySelectorAll('[data-current-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });
