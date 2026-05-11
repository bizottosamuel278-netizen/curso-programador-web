  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.padding = window.scrollY > 50 ? '12px 5%' : '18px 5%';
  });
  function handleForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-form');
    btn.textContent = 'Mensagem Enviada ✓';
    btn.style.background = '#2ecc71';
    setTimeout(() => {
      btn.textContent = 'Enviar Mensagem';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.style.width;
        });
      }
    });
  }, { threshold: 0.3 });
  const expSection = document.getElementById('experiencia');
  if (expSection) observer.observe(expSection);
  