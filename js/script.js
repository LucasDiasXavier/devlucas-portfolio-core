// mostra toggle de menu em mobile

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

// adiciona um listener para o evento de mostrar e ocultar items de skill

  // Seleciona todos os cards de skill
const skills = document.querySelectorAll('.sk');

// Percorre cada card
skills.forEach(sk => {
  // Pega as pills dentro do card atual
  const pills = sk.querySelector('.sk-pills');

  // Quando o mouse entra no card, exibe as pills
  sk.addEventListener('mouseenter', () => {
    pills.style.opacity = '0';
  });

  // Quando o mouse sai do card, oculta as pills
  sk.addEventListener('mouseleave', () => {
    pills.style.opacity = '0';
  });
});

// carrosel de cards com navegação por dots

// Seleciona todos os elementos com a classe 'dot' (os indicadores de navegação)
const dots = document.querySelectorAll('.dot');

// Seleciona todos os elementos com a classe 'proj' (os cards de projeto)
const card = document.querySelectorAll('.proj');

// Função que exibe o card correspondente ao índice fornecido
function showcard(index) {

  // Esconde todos os cards adicionando a classe 'hidden'
  card.forEach(c => c.classList.add('hidden'));

  // Exibe apenas o card do índice selecionado
  card[index].classList.remove('hidden');

  // Remove a classe 'active' de todos os dots
  dots.forEach(d => d.classList.remove('active'));

  // Marca como ativo apenas o dot correspondente ao índice
  dots[index].classList.add('active');

};

// Registra eventos de clique nos dots para navegar entre os 
// cards via índice e inicializa o carrossel exibindo o primeiro card.

// Adiciona um listener de clique em cada dot
dots.forEach(dot => {
  dot.addEventListener('click', () => {

    // Lê o atributo 'data-index' do dot clicado e converte para número
    const index = Number(dot.dataset.index);

    // Chama a função para exibir o card desse índice
    showcard(index);
  });

});

// Exibe o primeiro card ao carregar a página (índice 0)
showcard(0);

const projthumbs = document.querySelectorAll('.proj-thumb');

projthumbs.forEach(projthumb => {

  const gif = projthumb.querySelector('.proj-gif');

  if (!gif) return; // ← pula se não tiver GIF

  projthumb.addEventListener('mouseenter', () => {
    gif.style.opacity = '1';
  });

  projthumb.addEventListener('mouseleave', () => {
    gif.style.opacity = '0';
  });

});