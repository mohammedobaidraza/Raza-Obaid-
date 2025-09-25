// Product-style project browser (trimmed list for demo)
const PROJECTS = [
  { title: "RAG Pipeline for Enterprises", summary: "Retrieval-Augmented Generation using LangChain, FAISS, and Azure ML.", tech: ["Python","LangChain","FAISS","Azure"], category: "AI/ML", type: "app", links: { github: "", demo: "" } },
  { title: "Structure Golf Academy", summary: "Stripe-enabled coaching site with bookings and gallery.", tech: ["Next.js","Stripe","Bootstrap"], category: "Web", type: "app", links: { github: "https://github.com/mohammedobaidraza/Structure-Golf-Academy-website", demo: "https://mohammedobaidraza.github.io/Structure-Golf-Academy-website/" } },
  { title: "VGG – CNN from Scratch", summary: "VGG implementation and exploration notebook.", tech: ["Python","PyTorch","CNN"], category: "AI/ML", type: "research", links: { github: "https://github.com/mohammedobaidraza/vgg", demo: "https://github.com/mohammedobaidraza/vgg/blob/main/VGG.ipynb" } }
];
const CATEGORIES = ["All","AI/ML","Security","Web","Data","Algorithms","Android"];
const projectsGrid = document.getElementById('projectsGrid');
const searchInput = document.getElementById('searchInput');
const chipsWrap = document.getElementById('categoryChips');
let activeCategory = "All";
CATEGORIES.forEach(cat => {
  const chip = document.createElement('button');
  chip.className = 'chip' + (cat === activeCategory ? ' active' : '');
  chip.textContent = cat;
  chip.dataset.cat = cat;
  chip.addEventListener('click', () => {
    activeCategory = cat;
    [...chipsWrap.children].forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    render();
  });
  chipsWrap.appendChild(chip);
});
function getCheckedTypes(){ return [...document.querySelectorAll('.type-filter:checked')].map(i => i.value); }
function matches(project, query){ if(!query) return true; const hay = (project.title + ' ' + project.summary + ' ' + project.category + ' ' + project.tech.join(' ')).toLowerCase(); return hay.includes(query.toLowerCase()); }
function render(){
  const q = searchInput.value.trim();
  const allowedTypes = getCheckedTypes();
  projectsGrid.innerHTML = '';
  PROJECTS
    .filter(p => (activeCategory === 'All' || p.category === activeCategory))
    .filter(p => allowedTypes.includes(p.type))
    .filter(p => matches(p, q))
    .forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="tags">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="foot">
          <span class="muted">${p.category} • ${p.type}</span>
          <span class="actions">
            ${p.links.demo ? `<a class="btn-demo" href="${p.links.demo}" target="_blank" rel="noreferrer">Demo</a>` : ''}
            ${p.links.github ? `<a class="btn-code" href="${p.links.github}" target="_blank" rel="noreferrer">Code</a>` : ''}
          </span>
        </div>`;
      projectsGrid.appendChild(card);
    });
}
searchInput.addEventListener('input', render);
document.querySelectorAll('.type-filter').forEach(cb => cb.addEventListener('change', render));
render();
