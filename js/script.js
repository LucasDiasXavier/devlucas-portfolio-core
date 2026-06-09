// Abre ou fecha o menu mobile alternando a classe 'open'
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('open');
}

// Remove a classe 'open' do menu mobile, fechando-o
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// Seleciona todos os links internos (que apontam para uma âncora da página)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));

    // Se o elemento alvo existir, cancela o comportamento padrão
    // e faz a rolagem suave até ele
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

  // Seleciona todos os cards de skill
const skills = document.querySelectorAll('.sk');

// Percorre cada card
skills.forEach(sk => {
  // Pega as pills dentro do card atual
  const pills = sk.querySelector('.sk-pills');

  // Quando o mouse entra no card, exibe as pills
  sk.addEventListener('mouseenter', () => {
    pills.style.opacity = '1';
  });

  // Quando o mouse sai do card, oculta as pills
  sk.addEventListener('mouseleave', () => {
    pills.style.opacity = '0';
  });
});