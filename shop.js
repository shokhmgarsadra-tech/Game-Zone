// js/shop.js
document.addEventListener("DOMContentLoaded", () => {
  const products = JSON.parse(localStorage.getItem('gz_products')) || [];
  const grid = document.getElementById('shop-grid');
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const sortOrder = document.getElementById('sort-order');

  function renderProducts() {
    let filtered = [...products];

    // Search Filter
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
      );
    }

    // Category Filter
    const cat = categoryFilter.value;
    if (cat !== 'ALL') {
      filtered = filtered.filter(p => p.category === cat);
    }

    // Sort
    const sort = sortOrder.value;
    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem;">محصولی با این مشخصات یافت نشد! 🙁</div>`;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const isFav = app.wishlist.includes(p.id);
      return `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}" class="product-img">
          <h3 class="product-title">${p.name}</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">${p.brand} | ${p.platform}</p>
          <div class="price-box">
            <span class="current-price">${app.formatPrice(p.price * (1 - p.discount / 100))}</span>
          </div>
          <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
            <button onclick="app.addToCart(${p.id})" class="btn btn-primary" style="flex: 1; justify-content: center;">افزودن به سبد خرید</button>
            <button onclick="app.toggleWishlist(${p.id}, this)" class="wishlist-btn ${isFav ? 'active' : ''}">${isFav ? '❤️' : '🤍'}</button>
          </div>
        </div>
      `;
    }).join('');
  }

  searchInput.addEventListener('input', renderProducts);
  categoryFilter.addEventListener('change', renderProducts);
  sortOrder.addEventListener('change', renderProducts);

  renderProducts();
});