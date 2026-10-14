(() => {
  'use strict';
  const whatsappNumber = '51936555019';
  const menuButton = document.getElementById('menu-btn');
  const nav = document.getElementById('site-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menú');
      }
    });
  }

  const cards = Array.from(document.querySelectorAll('.product-card'));
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const search = document.getElementById('product-search');
  const status = document.getElementById('catalog-status');
  const emptyState = document.getElementById('empty-state');
  let activeFilter = 'todos';

  function filterProducts() {
    const term = (search?.value || '').trim().toLocaleLowerCase('es');
    let visible = 0;
    cards.forEach(card => {
      const categoryMatch = activeFilter === 'todos' || card.dataset.category === activeFilter;
      const textMatch = !term || (card.dataset.name || card.textContent).toLocaleLowerCase('es').includes(term);
      const show = categoryMatch && textMatch;
      card.hidden = !show;
      if (show) visible++;
    });
    if (status) status.textContent = `${visible} ${visible === 1 ? 'producto disponible en esta vista' : 'productos disponibles en esta vista'}`;
    if (emptyState) emptyState.hidden = visible !== 0;
  }

  filterButtons.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter || 'todos';
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    filterProducts();
  }));
  if (search) search.addEventListener('input', filterProducts);

  document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
    const product = button.dataset.product || 'un producto';
    const message = `Hola Waliplu, quisiera información y cotización sobre: ${product}. ¿Me pueden indicar precio vigente, tallas, colores y disponibilidad?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }));

  const form = document.getElementById('quote-form');
  const formError = document.getElementById('form-error');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('customer-name')?.value.trim() || '';
    const type = document.getElementById('customer-type')?.value || '';
    const quantity = document.getElementById('customer-quantity')?.value.trim() || 'No especificada';
    const detail = document.getElementById('customer-message')?.value.trim() || 'Sin detalles adicionales';
    if (!name || !type) {
      if (formError) formError.hidden = false;
      (!name ? document.getElementById('customer-name') : document.getElementById('customer-type'))?.focus();
      return;
    }
    if (formError) formError.hidden = true;
    const message = `Hola Waliplu, quiero solicitar una cotización.\nNombre: ${name}\nProducto: ${type}\nCantidad aproximada: ${quantity}\nDetalles: ${detail}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
  filterProducts();
})();
