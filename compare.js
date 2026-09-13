// js/compare.js
document.addEventListener("DOMContentLoaded", () => {
    const products = JSON.parse(localStorage.getItem('gz_products')) || [];
    const select1 = document.getElementById('prod1-select');
    const select2 = document.getElementById('prod2-select');
    const compareContainer = document.getElementById('compare-table');

    // پر کردن گزینه‌ها
    products.forEach(p => {
        select1.innerHTML += `<option value="${p.id}">${p.name}</option>`;
        select2.innerHTML += `<option value="${p.id}">${p.name}</option>`;
    });

    function renderComparison() {
        const p1 = products.find(p => p.id == select1.value);
        const p2 = products.find(p => p.id == select2.value);

        if (!p1 || !p2) return;

        compareContainer.innerHTML = `
      <table style="width: 100%; border-collapse: collapse; margin-top: 2rem; background: var(--bg-card);">
        <thead>
          <tr style="border-bottom: 2px solid var(--border-color);">
            <th style="padding: 1rem; text-align: right;">مشخصات</th>
            <th style="padding: 1rem; text-align: center;">${p1.name}</th>
            <th style="padding: 1rem; text-align: center;">${p2.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 1rem; font-weight: bold;">قیمت</td>
            <td style="padding: 1rem; text-align: center; color: var(--accent-neon);">${app.formatPrice(p1.price)}</td>
            <td style="padding: 1rem; text-align: center; color: var(--accent-neon);">${app.formatPrice(p2.price)}</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 1rem; font-weight: bold;">امتیاز</td>
            <td style="padding: 1rem; text-align: center;">⭐ ${p1.rating}</td>
            <td style="padding: 1rem; text-align: center;">⭐ ${p2.rating}</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 1rem; font-weight: bold;">پلتفرم / برند</td>
            <td style="padding: 1rem; text-align: center;">${p1.brand} (${p1.platform})</td>
            <td style="padding: 1rem; text-align: center;">${p2.brand} (${p2.platform})</td>
          </tr>
        </tbody>
      </table>
    `;
    }

    select1.addEventListener('change', renderComparison);
    select2.addEventListener('change', renderComparison);
});