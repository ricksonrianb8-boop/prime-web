const toggle = document.querySelector('#theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  toggle.textContent = document.body.classList.contains('light-theme') ? '☾ Ativar tema escuro' : '☼ Ativar tema claro';
});
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.sidebar nav a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-25% 0px -60% 0px' });
sections.forEach(section => observer.observe(section));
document.querySelector('#year').textContent = new Date().getFullYear();
