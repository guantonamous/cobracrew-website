/* ===== COBRA — Shared JS ===== */

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.hamburger');
  const links  = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // Highlight active nav link based on path
  const path = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '/') || '/';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const norm = href.replace(/\/index\.html$/, '/').replace(/\/+$/, '/') || '/';
    if (norm === path) a.classList.add('active');
  });

  // Scroll-reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Pagination (used on listing pages)
  document.querySelectorAll('[data-paginate]').forEach(container => {
    const pageSize = parseInt(container.dataset.paginate, 10) || 6;
    const items = Array.from(container.querySelectorAll('[data-item]'));
    if (items.length <= pageSize) return;
    const totalPages = Math.ceil(items.length / pageSize);

    const pager = document.createElement('div');
    pager.className = 'pagination';
    container.after(pager);

    const render = (page) => {
      items.forEach((el, i) => {
        const inPage = i >= (page - 1) * pageSize && i < page * pageSize;
        el.style.display = inPage ? '' : 'none';
      });
      pager.innerHTML = '';
      for (let p = 1; p <= totalPages; p++) {
        const btn = document.createElement('button');
        btn.textContent = p;
        if (p === page) btn.classList.add('active');
        btn.addEventListener('click', () => render(p));
        pager.appendChild(btn);
      }
    };
    render(1);
  });
});
