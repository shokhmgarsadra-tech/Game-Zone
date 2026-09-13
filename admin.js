// js/admin.js
document.addEventListener("DOMContentLoaded", () => {
  renderAdminPanel();
});

function renderAdminPanel() {
  const products = JSON.parse(localStorage.getItem('gz_products')) || [];
  const orders = JSON.parse(localStorage.getItem('gz_orders')) || [];
  const categories = JSON.parse(localStorage.getItem('gz_categories')) || [];

  document.getElementById('total-products-stat').innerText = products.length;
  document.getElementById('orders-count-stat').innerText = orders.length;
  document.getElementById('orders-badge').innerText = orders.length;
  document.getElementById('total-categories-stat').innerText = categories.length;

  renderProductsTable(products);
  renderOrdersList(orders);
  renderCategoriesList(categories);
}

function renderProductsTable(products) {
  const tableBody = document.getElementById('admin-products-table');
  if (products.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 1rem;">هیچ محصولی یافت نشد.</td></tr>';
    return;
  }

  tableBody.innerHTML = products.map(p => `
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">${p.id}</td>
      <td style="padding: 0.75rem;"><img src="${p.image}" width="40" height="40" style="object-fit: contain; border-radius: 4px;"></td>
      <td style="padding: 0.75rem;">${p.name}</td>
      <td style="padding: 0.75rem;">${p.brand || '—'}</td>
      <td style="padding: 0.75rem;">${p.category || '—'}</td>
      <td style="padding: 0.75rem;">${app.formatPrice(p.price)}</td>
      <td style="padding: 0.75rem;">${p.stock} عدد</td>
      <td style="padding: 0.75rem; display: flex; gap: 0.5rem;">
        <button onclick="openEditModal(${p.id})" class="btn btn-outline" style="padding: 4px 8px; font-size: 0.8rem;">✏️ ویرایش</button>
        <button onclick="deleteProduct(${p.id})" class="btn" style="background: var(--accent-danger); color: #fff; padding: 4px 8px; font-size: 0.8rem;">🗑️ حذف</button>
      </td>
    </tr>
  `).join('');
}

function renderOrdersList(orders) {
  const container = document.getElementById('orders-list-container');
  if (orders.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">هیچ سفارشی ثبت نشده است (0 سفارش).</p>';
    return;
  }

  container.innerHTML = orders.map(order => `
    <div class="glass-panel" style="padding: 1.2rem; margin-bottom: 1rem; border-right: 4px solid var(--accent-cyan);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.8rem;">
        <div>
          <strong style="color: var(--accent-neon);">کد سفارش: ${order.id}</strong>
          <span style="font-size: 0.85rem; color: var(--text-muted); margin-right: 1rem;">تاریخ: ${order.date}</span>
        </div>
        <button onclick="deleteOrder('${order.id}')" class="btn" style="background: var(--accent-danger); color: #fff; padding: 4px 8px; font-size: 0.8rem;">حذف سفارش</button>
      </div>
      
      <!-- نمایش مشخصات مشتری و آدرس پستی -->
      <div style="font-size: 0.85rem; background: rgba(0,0,0,0.2); padding: 0.75rem; border-radius: 6px; margin-bottom: 0.8rem;">
        <p style="margin: 0 0 0.4rem 0;">📞 <strong>شماره تماس:</strong> ${order.phone || 'ثبت نشده'}</p>
        <p style="margin: 0 0 0.4rem 0;">📮 <strong>کد پستی:</strong> ${order.postalCode || 'ثبت نشده'}</p>
        <p style="margin: 0;">📍 <strong>آدرس پستی:</strong> ${order.address || 'ثبت نشده'}</p>
      </div>

      <div>
        <p style="font-size: 0.9rem; margin-bottom: 0.5rem; font-weight: bold;">محصولات سفارش داده شده:</p>
        <ul style="list-style: none; padding-right: 1rem;">
          ${order.items.map(item => `
            <li style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.3rem;">
              • ${item.name} (${item.qty} عدد) - ${app.formatPrice(item.price * item.qty)}
            </li>
          `).join('')}
        </ul>
      </div>
      <div style="text-align: left; margin-top: 0.5rem; font-weight: bold; color: var(--accent-neon);">
        مبلغ کل: ${app.formatPrice(order.totalPrice)}
      </div>
    </div>
  `).join('');
}

function renderCategoriesList(categories) {
  const container = document.getElementById('categories-list-container');
  if (categories.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted);">دسته‌بندی وجود ندارد.</p>';
    return;
  }

  container.innerHTML = `
    <ul style="list-style: none;">
      ${categories.map(cat => `
        <li style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: var(--bg-card); margin-bottom: 0.5rem; border-radius: 8px; border: 1px solid var(--border-color);">
          <span>🏷️ ${cat}</span>
          <div style="display: flex; gap: 0.5rem;">
            <button onclick="openCategoryEditModal('${cat}')" class="btn btn-outline" style="padding: 4px 8px; font-size: 0.8rem;">✏️ ویرایش & انتخاب محصولات</button>
            <button onclick="deleteCategory('${cat}')" class="btn" style="background: var(--accent-danger); color: #fff; padding: 4px 8px; font-size: 0.8rem;">🗑️ حذف</button>
          </div>
        </li>
      `).join('')}
    </ul>
  `;
}

function switchTab(tab) {
  const productsTab = document.getElementById('tab-products-content');
  const categoriesTab = document.getElementById('tab-categories-content');
  const ordersTab = document.getElementById('tab-orders-content');

  const btnProducts = document.getElementById('tab-btn-products');
  const btnCategories = document.getElementById('tab-btn-categories');
  const btnOrders = document.getElementById('tab-btn-orders');

  productsTab.style.display = 'none';
  categoriesTab.style.display = 'none';
  ordersTab.style.display = 'none';

  btnProducts.className = 'btn btn-outline';
  btnCategories.className = 'btn btn-outline';
  btnOrders.className = 'btn btn-outline';

  if (tab === 'products') {
    productsTab.style.display = 'block';
    btnProducts.className = 'btn btn-primary';
  } else if (tab === 'categories') {
    categoriesTab.style.display = 'block';
    btnCategories.className = 'btn btn-primary';
  } else {
    ordersTab.style.display = 'block';
    btnOrders.className = 'btn btn-primary';
  }
}

function addNewCategory() {
  const input = document.getElementById('new-category-input');
  const val = input.value.trim();
  if (!val) {
    app.showToast('نام دسته‌بندی را وارد کنید.', 'error');
    return;
  }

  let categories = JSON.parse(localStorage.getItem('gz_categories')) || [];
  if (categories.includes(val)) {
    app.showToast('این دسته‌بندی از قبل وجود دارد.', 'error');
    return;
  }

  categories.push(val);
  localStorage.setItem('gz_categories', JSON.stringify(categories));
  input.value = '';
  app.showToast('دسته‌بندی جدید اضافه شد.');
  renderAdminPanel();
}

function openCategoryEditModal(catName) {
  document.getElementById('edit-cat-old-name').value = catName;
  document.getElementById('edit-cat-new-name').value = catName;

  // بارگذاری چک‌باکس‌های محصولات جهت انتخاب برای این دسته‌بندی
  const products = JSON.parse(localStorage.getItem('gz_products')) || [];
  const checkboxContainer = document.getElementById('cat-products-checkbox-container');

  if (products.length === 0) {
    checkboxContainer.innerHTML = '<p style="font-size: 0.8rem; color: var(--text-muted);">محصولی ثبت نشده است.</p>';
  } else {
    checkboxContainer.innerHTML = products.map(p => {
      const isChecked = (p.category === catName);
      return `
        <label style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.85rem; cursor: pointer;">
          <input type="checkbox" class="cat-product-checkbox" value="${p.id}" ${isChecked ? 'checked' : ''}>
          ${p.name} (شناسه: ${p.id})
        </label>
      `;
    }).join('');
  }

  document.getElementById('edit-category-modal').classList.add('active');
}

function closeCategoryEditModal() {
  document.getElementById('edit-category-modal').classList.remove('active');
}

function saveCategoryEdit() {
  const oldName = document.getElementById('edit-cat-old-name').value;
  const newName = document.getElementById('edit-cat-new-name').value.trim();

  if (!newName) {
    app.showToast('نام دسته‌بندی نمی‌تواند خالی باشد.', 'error');
    return;
  }

  let categories = JSON.parse(localStorage.getItem('gz_categories')) || [];
  const index = categories.indexOf(oldName);
  if (index > -1) {
    categories[index] = newName;
    localStorage.setItem('gz_categories', JSON.stringify(categories));

    // به‌روزرسانی دسته‌بندی محصولات انتخاب‌شده
    let products = JSON.parse(localStorage.getItem('gz_products')) || [];
    const checkboxes = document.querySelectorAll('.cat-product-checkbox');
    const selectedProductIds = Array.from(checkboxes).filter(cb => cb.checked).map(cb => parseInt(cb.value));

    products.forEach(p => {
      if (selectedProductIds.includes(p.id)) {
        p.category = newName;
      } else if (p.category === oldName) {
        // اگر تیک محصولی برداشته شده باشد، دسته‌بندی‌اش خالی می‌شود
        p.category = "";
      }
    });

    localStorage.setItem('gz_products', JSON.stringify(products));

    app.showToast('دسته‌بندی و محصولات مرتبط به‌روزرسانی شدند.');
    closeCategoryEditModal();
    renderAdminPanel();
  }
}

function deleteCategory(catName) {
  if (confirm(`آیا از حذف دسته‌بندی "${catName}" اطمینان دارید؟`)) {
    let categories = JSON.parse(localStorage.getItem('gz_categories')) || [];
    categories = categories.filter(c => c !== catName);
    localStorage.setItem('gz_categories', JSON.stringify(categories));
    app.showToast('دسته‌بندی حذف شد.', 'error');
    renderAdminPanel();
  }
}

function openEditModal(productId) {
  const products = JSON.parse(localStorage.getItem('gz_products')) || [];
  const categories = JSON.parse(localStorage.getItem('gz_categories')) || [];
  const p = products.find(item => item.id === productId);
  if (!p) return;

  document.getElementById('edit-p-old-id').value = p.id;
  document.getElementById('edit-p-id').value = p.id;
  document.getElementById('edit-p-name').value = p.name;
  document.getElementById('edit-p-image').value = p.image;
  document.getElementById('edit-p-brand').value = p.brand || '';

  const catSelect = document.getElementById('edit-p-category');
  catSelect.innerHTML = categories.map(c => `<option value="${c}" ${c === p.category ? 'selected' : ''}>${c}</option>`).join('');

  document.getElementById('edit-p-price').value = p.price;
  document.getElementById('edit-p-stock').value = p.stock;

  document.getElementById('edit-product-modal').classList.add('active');
}

function closeEditModal() {
  document.getElementById('edit-product-modal').classList.remove('active');
}

function saveEditedProduct(e) {
  e.preventDefault();
  const oldId = parseInt(document.getElementById('edit-p-old-id').value);
  const newId = parseInt(document.getElementById('edit-p-id').value);
  let products = JSON.parse(localStorage.getItem('gz_products')) || [];

  if (oldId !== newId && products.some(p => p.id === newId)) {
    app.showToast('این شناسه محصول قبلاً استفاده شده است!', 'error');
    return;
  }

  const index = products.findIndex(p => p.id === oldId);
  if (index > -1) {
    products[index].id = newId;
    products[index].name = document.getElementById('edit-p-name').value.trim();
    products[index].image = document.getElementById('edit-p-image').value.trim();
    products[index].brand = document.getElementById('edit-p-brand').value.trim();
    products[index].category = document.getElementById('edit-p-category').value;
    products[index].price = parseFloat(document.getElementById('edit-p-price').value);
    products[index].stock = parseInt(document.getElementById('edit-p-stock').value);

    localStorage.setItem('gz_products', JSON.stringify(products));
    app.showToast('مشخصات محصول با موفقیت به‌روزرسانی شد.');
    closeEditModal();
    renderAdminPanel();
  }
}

function deleteProduct(id) {
  if (confirm('آیا از حذف این محصول اطمینان دارید؟')) {
    let products = JSON.parse(localStorage.getItem('gz_products')) || [];
    products = products.filter(p => p.id !== id);
    localStorage.setItem('gz_products', JSON.stringify(products));
    renderAdminPanel();
    app.showToast('محصول با موفقیت حذف شد.', 'error');
  }
}

function deleteOrder(orderId) {
  if (confirm('آیا از حذف این سفارش اطمینان دارید؟')) {
    let orders = JSON.parse(localStorage.getItem('gz_orders')) || [];
    orders = orders.filter(o => o.id !== orderId);
    localStorage.setItem('gz_orders', JSON.stringify(orders));
    renderAdminPanel();
    app.showToast('سفارش حذف شد.', 'error');
  }
}