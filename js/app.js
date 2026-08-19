document.getElementById('footer-year').textContent = new Date().getFullYear();

// ================================================================
// Engine — no need to edit below this line
// (Data is in js/data/clips.js)
// ================================================================

function makeId(clip) {
  return (clip.categoryId + '-' + clip.title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const categoryOrder = categories.map(c => c.id);
const clips = clipsRaw
  .filter(c => c.title)
  .map(c => ({ ...c, id: makeId(c) }))
  .sort((a, b) => categoryOrder.indexOf(a.categoryId) - categoryOrder.indexOf(b.categoryId));

let currentCategory = 'all';
let sidebarOpen = false;

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.toggle('collapsed', !sidebarOpen);
  overlay.classList.toggle('visible', sidebarOpen && window.innerWidth <= 768);
}

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function renderSidebar() {
  const list = document.getElementById('category-list');
  list.innerHTML = '';
  categories.forEach((cat, i) => {
    const count = clips.filter(c => c.categoryId === cat.id).length;
    const colorIdx = i % 8;
    const btn = document.createElement('button');
    btn.className = 'sidebar-btn' + (currentCategory === cat.id ? ' active' : '');
    btn.id = 'btn-' + cat.id;
    btn.innerHTML = `
      <span class="cat-dot dot-${colorIdx}"></span>
      ${escHtml(cat.name)}
      <span class="sidebar-count">${count}</span>
    `;
    btn.onclick = () => {
      filterCategory(cat.id);
      if (window.innerWidth <= 768) toggleSidebar();
    };
    list.appendChild(btn);
  });

  document.getElementById('count-all').textContent = clips.length;
  document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
  const active = document.getElementById('btn-' + currentCategory);
  if (active) active.classList.add('active');
}

function renderClips() {
  const grid = document.getElementById('clips-grid');
  const query = document.getElementById('search-input').value.toLowerCase();

  const filtered = clips.filter(c => {
    const inCat = currentCategory === 'all' || c.categoryId === currentCategory;
    const inSearch = !query ||
      c.title.toLowerCase().includes(query) ||
      (c.notes || '').toLowerCase().includes(query) ||
      (c.tags || []).some(t => t.toLowerCase().includes(query));
    return inCat && inSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🥏</div>
        <h3>No clips found</h3>
        <p>Try a different search or category.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(clip => {
    const cat = categories.find(c => c.id === clip.categoryId);
    const catIdx = categories.indexOf(cat);
    const colorIdx = (catIdx >= 0 ? catIdx : 0) % 8;
    const tagsHtml = (clip.tags || []).map(t => `<span class="micro-tag">${escHtml(t)}</span>`).join('');

    return `
      <div class="clip-card">
        <div><span class="clip-tag cat-${colorIdx}">${escHtml(cat ? cat.name : '—')}</span></div>
        <div class="clip-title">${escHtml(clip.title)}</div>
        ${clip.notes ? `<div class="clip-notes">${escHtml(clip.notes)}</div>` : ''}
        ${clip.video ? `<video controls style="width:100%;border-radius:8px;" src="${escHtml(clip.video)}"></video>` : ''}
        ${tagsHtml   ? `<div class="clip-tags-row">${tagsHtml}</div>` : ''}
      </div>`;
  }).join('');
}

function filterCategory(id) {
  currentCategory = id;
  const cat = categories.find(c => c.id === id);
  document.getElementById('current-category-title').textContent =
    id === 'all' ? 'All Clips' : (cat?.name || 'Clips');
  document.getElementById('current-category-sub').textContent =
    id === 'all' ? 'Browse your film analysis notes' : (cat?.desc || '');
  renderSidebar();
  renderClips();
}

renderSidebar();
renderClips();
