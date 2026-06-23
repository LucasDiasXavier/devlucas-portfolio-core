# Lucas Dias — Portfolio Frontend Developer

Portfolio pessoal desenvolvido com HTML5, CSS3 e JavaScript puro, sem dependências ou frameworks. Estruturado em componentes reutilizáveis, carregados dinamicamente via JavaScript.

---

## Tecnologias

* HTML5 semântico e acessível — ARIA, roles e landmarks
* CSS3 — Grid, Flexbox, variáveis CSS, responsividade mobile-first
* JavaScript puro — menu mobile, scroll suave, carrossel de projetos

---

## 🚀 Como rodar

Este projeto usa `fetch()` para carregar os componentes HTML, por isso **não pode ser aberto direto pelo navegador** (`file://`) — é necessário um servidor local.

````bash
git clone https://github.com/LucasDiasXavier/devlucas-portfolio-core.git
cd devlucas-portfolio-core
````

Depois, abra a pasta no VS Code e rode com a extensão **Live Server** (botão direito em `index.html` → "Open with Live Server"), ou qualquer outro servidor estático de sua preferência:

````bash
npx serve
````

---

## 📂 Estrutura

````
devlucas-portfolio-core/
├── index.html
├── components/
│   ├── header.html
│   ├── hero.html
│   ├── skills.html
│   ├── projects.html
│   ├── contact.html
│   └── footer.html
├── styles/
│   ├── style.css            (arquivo principal, importa todos os outros)
│   ├── base/
│   │   ├── reset.css
│   │   └── variables.css
│   ├── components/
│   │   ├── nav.css
│   │   ├── hero.css
│   │   ├── skills.css
│   │   ├── projects.css
│   │   ├── contact.css
│   │   └── footer.css
│   └── utils/
│       └── responsive.css
├── js/
│   ├── load-components.js   (injeta os componentes HTML no DOM)
│   └── script.js            (menu mobile, scroll, carrossel, hovers)
├── assets/
│   ├── pousada.png
│   ├── clinica.jpeg
│   ├── petshop.jpg
│   └── cafe.jpg
└── README.md
````

### Como funciona a separação por componentes

* Cada seção da página (`header`, `hero`, `skills`, `projects`, `contact`, `footer`) vive em seu próprio arquivo `.html` dentro de `components/`.
* O `index.html` contém apenas `<div>` vazias com `id` de placeholder (ex: `#header-placeholder`).
* O `js/load-components.js` busca cada arquivo via `fetch`, injeta no lugar do placeholder correspondente e, ao final, dispara o evento customizado `componentsLoaded`.
* O `js/script.js` espera esse evento antes de manipular elementos como `.dot`, `.sk` e `.proj`, garantindo que eles já existam no DOM.
* O CSS segue a mesma lógica de separação (`styles/components/`), mas é todo unificado em um único `style.css` via `@import`, já que estilos CSS não têm escopo — funcionam de forma global independente da divisão em arquivos.

---

## 💻 Projetos exibidos

* **Pousada Secreta** — site institucional de pousada, com acomodações, localização e contato
* **Clínica CM Life** — clínica médica multiespecialidade (fisioterapia, ortopedia, pediatria, geriatria, psicologia)
* **Pet Boutique** — pet shop brasileiro com produtos e serviços para cães e gatos
* **Manhattan Coffee-House** — site vitrine de cafeteria com efeito parallax
* **Sistema de Autenticação** — tela de login/cadastro com foco em UI/UX e responsividade

---

## Contato

* E-mail: lucasdias.tech@gmail.com
* LinkedIn: linkedin.com/in/lucas-dias-xavier
* GitHub: github.com/LucasDiasXavier
* WhatsApp: wa.me/28999673327

---

## 🚥 Status

🚧 Em desenvolvimento