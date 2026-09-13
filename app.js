// js/app.js
class GameZoneApp {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('gz_cart')) || [];
        this.wishlist = JSON.parse(localStorage.getItem('gz_wishlist')) || [];
        this.orders = JSON.parse(localStorage.getItem('gz_orders')) || [];
        this.initCategories();
        this.init();
    }

    initCategories() {
        if (!localStorage.getItem('gz_categories')) {
            const defaultCategories = ['PS5', 'Xbox', 'کیبورد و موس', 'هدست', 'لوازم جانبی'];
            localStorage.setItem('gz_categories', JSON.stringify(defaultCategories));
        }
    }

    init() {
        this.applyTheme();
        this.updateHeaderBadges();
        this.setupEventListeners();
        this.injectAdminModal();
    }

    setupEventListeners() {
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => this.toggleTheme());
        }

        const hamburger = document.getElementById('hamburger-btn');
        const navLinks = document.querySelector('.nav-links');
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
        }
    }

    showToast(message, type = 'success') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerText = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    toggleTheme() {
        const currentTheme = localStorage.getItem('gz_theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('gz_theme', newTheme);
        this.applyTheme();
    }

    applyTheme() {
        const theme = localStorage.getItem('gz_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', theme);
    }

    addToCart(productId, qty = 1) {
        const products = JSON.parse(localStorage.getItem('gz_products')) || [];
        const product = products.find(p => p.id === productId);

        if (!product || product.stock < 1) {
            this.showToast('محصول مورد نظر ناموجود است.', 'error');
            return;
        }

        const existingIndex = this.cart.findIndex(item => item.id === productId);
        if (existingIndex > -1) {
            this.cart[existingIndex].qty += qty;
        } else {
            this.cart.push({ ...product, qty });
        }

        this.saveCart();
        this.showToast(`${product.name} به سبد خرید اضافه شد.`);
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
    }

    saveCart() {
        localStorage.setItem('gz_cart', JSON.stringify(this.cart));
        this.updateHeaderBadges();
    }

    toggleWishlist(productId, btnElement = null) {
        const index = this.wishlist.indexOf(productId);
        let isFav = false;

        if (index > -1) {
            this.wishlist.splice(index, 1);
            this.showToast('از لیست علاقه‌مندی‌ها حذف شد.');
            isFav = false;
        } else {
            this.wishlist.push(productId);
            this.showToast('به لیست علاقه‌مندی‌ها اضافه شد.');
            isFav = true;
        }

        localStorage.setItem('gz_wishlist', JSON.stringify(this.wishlist));
        this.updateHeaderBadges();

        if (btnElement) {
            if (isFav) {
                btnElement.classList.add('active');
                btnElement.innerText = '❤️';
            } else {
                btnElement.classList.remove('active');
                btnElement.innerText = '🤍';
            }
        }
        return isFav;
    }

    updateHeaderBadges() {
        const cartBadge = document.getElementById('cart-badge');
        const wishlistBadge = document.getElementById('wishlist-badge');

        if (cartBadge) {
            const totalCount = this.cart.reduce((acc, item) => acc + item.qty, 0);
            cartBadge.innerText = totalCount;
        }
        if (wishlistBadge) {
            wishlistBadge.innerText = this.wishlist.length;
        }
    }

    formatPrice(price) {
        return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
    }

    injectAdminModal() {
        if (document.getElementById('admin-pass-modal')) return;

        const modalHTML = `
      <div id="admin-pass-modal" class="modal-overlay">
        <div class="modal-box">
          <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-align: center;">🛡️ احراز هویت مدیریت</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; text-align: center;">برای ورود به پنل، رمز عبور را وارد کنید.</p>
          <input type="password" id="admin-pass-input" class="modal-input" placeholder="رمز عبور...">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 1rem;">
            <button onclick="closeAdminModal()" class="btn btn-outline" style="padding: 0.5rem 1rem;">انصراف</button>
            <button onclick="submitAdminPassword()" class="btn btn-primary" style="padding: 0.5rem 1rem;">ورود</button>
          </div>
        </div>
      </div>
    `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
}

const app = new GameZoneApp();

function openAdminPanel(event) {
    event.preventDefault();
    const modal = document.getElementById('admin-pass-modal');
    if (modal) {
        modal.classList.add('active');
        document.getElementById('admin-pass-input').focus();
    }
}

function closeAdminModal() {
    const modal = document.getElementById('admin-pass-modal');
    if (modal) modal.classList.remove('active');
}

function submitAdminPassword() {
    const input = document.getElementById('admin-pass-input');
    if (input.value === "gamezone") {
        input.value = "";
        closeAdminModal();
        window.location.href = "admin.html";
    } else {
        app.showToast("رمز عبور اشتباه است!", "error");
        input.value = "";
    }
}