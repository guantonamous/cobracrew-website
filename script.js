/* COBRA — shared scripts: mobile nav, reveal animations, simple pagination */
(function () {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => mobile.classList.toggle('open'));
  }

  // Reveal-on-scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // CTF pagination (home page)
  const ctfData = window.__CTF_DATA__;
  if (ctfData) {
    const grid = document.getElementById('ctf-grid');
    const pageLabel = document.getElementById('ctf-page-label');
    const prev = document.getElementById('ctf-prev');
    const next = document.getElementById('ctf-next');
    const perPage = 3;
    let page = 0;
    const total = Math.ceil(ctfData.length / perPage);
    const render = () => {
      const slice = ctfData.slice(page * perPage, page * perPage + perPage);
      grid.innerHTML = slice.map((c) => `
        <a href="/ctf-writeup/" class="card">
          <h3>${c.name}</h3>
          <p>${c.category}</p>
          <span class="badge ${c.difficulty.toLowerCase()}">${c.difficulty}</span>
        </a>
      `).join('');
      pageLabel.textContent = `${page + 1} / ${total}`;
      prev.disabled = page === 0;
      next.disabled = page >= total - 1;
    };
    prev.addEventListener('click', () => { if (page > 0) { page--; render(); } });
    next.addEventListener('click', () => { if (page < total - 1) { page++; render(); } });
    render();
  }
})();
