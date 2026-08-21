const grid = document.getElementById('grid');
const overlay = document.getElementById('overlay');
const panel = document.getElementById('panel');
const closeBtn = document.getElementById('closeBtn');

const panelImage = document.getElementById('panelImage');
const panelTitle = document.getElementById('panelTitle');
const panelDesc = document.getElementById('panelDesc');
const panelLink = document.getElementById('panelLink');
const panelTags = document.getElementById('panelTags');

function renderCards(){
  grid.innerHTML = '';
  SITES.forEach((site) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img class="card-image" src="${site.image}" alt="${site.nom}">
      <div class="card-body">
        <h3>${site.nom}</h3>
        <p>${site.description}</p>
        ${site.tags && site.tags.length ? `
          <div class="card-tags">
            ${site.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>` : ''}
      </div>
    `;

    card.addEventListener('click', () => openPanel(site));
    grid.appendChild(card);
  });
}

function openPanel(site){
  panelImage.src = site.image;
  panelImage.alt = site.nom;
  panelTitle.textContent = site.nom;
  panelDesc.textContent = site.description;
  panelLink.href = site.url;

  panelTags.innerHTML = (site.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

  panel.classList.add('active');
  overlay.classList.add('active');
}

function closePanel(){
  panel.classList.remove('active');
  overlay.classList.remove('active');
}

closeBtn.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closePanel();
});

renderCards();
