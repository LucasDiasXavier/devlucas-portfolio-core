

// Busca um componente HTML e injeta no lugar do placeholder
async function loadComponent(placeholderId, path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Falha ao carregar ${path}: ${res.status}`);
    const html = await res.text();
    const el = document.getElementById(placeholderId);
    if (el) el.outerHTML = html; // substitui a div pelo HTML real
  } catch (err) {
    console.error(err);
  }
}

// Espera o index.html carregar antes de buscar os componentes
document.addEventListener('DOMContentLoaded', () => {

  // Carrega todos os componentes em paralelo
  Promise.all([
    loadComponent('header-placeholder', './components/header.html'),
    loadComponent('hero-placeholder', './components/hero.html'),
    loadComponent('skills-placeholder', './components/skills.html'),
    loadComponent('projects-placeholder', './components/projects.html'),
    loadComponent('contact-placeholder', './components/contact.html'),
    loadComponent('footer-placeholder', './components/footer.html'),
  ]).then(() => {
    // Avisa o script.js que o DOM já está completo
    document.dispatchEvent(new Event('componentsLoaded'));
  });
});