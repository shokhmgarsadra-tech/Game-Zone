// js/data.js
const placeholderImg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><rect width='100%' height='100%' fill='%2312121f'/><text x='50%' y='50%' font-family='sans-serif' font-size='18' fill='%237000ff' text-anchor='middle' dy='.3em'>GameZone Product</text></svg>";

const initialProducts = [
  {
    id: 1,
    name: "کنسول پلی‌استیشن 5 استاندارد",
    category: "PS5",
    brand: "Sony",
    price: 32500000,
    stock: 8,
    image: "p1.jpg",
    specs: { "پردازنده": "AMD Zen 2", "حافظه": "825GB SSD", "کیفیت تصویر": "4K 120Hz" }
  },
  {
    id: 2,
    name: "کنسول ایکس‌باکس سری ایکس",
    category: "Xbox",
    brand: "Microsoft",
    price: 30000000,
    stock: 5,
    image: "p2.jpg",
    specs: { "پردازنده": "AMD Zen 2", "حافظه": "1TB SSD", "کیفیت تصویر": "4K 120Hz" }
  },
  {
    id: 3,
    name: "دسته بازی دوئل‌سنس PS5",
    category: "لوازم جانبی",
    brand: "Sony",
    price: 4200000,
    stock: 15,
    image: "p3.jpg",
    specs: { "نوع اتصال": "بی‌سیم", "بازخورد لمسی": "دارد", "باتری": "قابل شارژ" }
  },
  {
    id: 4,
    name: "هدست گیمینگ ریزر Kraken X",
    category: "هدست",
    brand: "Razer",
    price: 2400000,
    stock: 12,
    image: "p4.jpg",
    specs: { "صدای فراگیر": "7.1 Surround", "میکروفون": "دارد", "وزن": "250 گرم" }
  },
  {
    id: 5,
    name: "کیبورد مکانیکی ریزر BlackWidow V3",
    category: "کیبورد و موس",
    brand: "Razer",
    price: 6800000,
    stock: 6,
    image: "p5.jpg",
    specs: { "نوع سوییچ": "مکانیکی سبز", "نورپردازی": "RGB Chroma", "استراحتگاه مچ": "دارد" }
  },
  {
    id: 6,
    name: "موس گیمینگ لوجیتک G502 HERO",
    category: "کیبورد و موس",
    brand: "Logitech",
    price: 3100000,
    stock: 20,
    image: "p6.jpg",
    specs: { "حسگر": "HERO 25K", "دقت": "25600 DPI", "تعداد کلید": "11 کلید" }
  },
  {
    id: 7,
    name: "صندلی گیمینگ دی‌ایکس‌ریسر سری Prince",
    category: "لوازم جانبی",
    brand: "DXRacer",
    price: 18500000,
    stock: 4,
    image: "p7.jpg",
    specs: { "جنس روکش": "چرم مصنوعی", "قابلیت تنظیم تکیه‌گاه": "تا 135 درجه", "پایه": "فلزی" }
  },
  {
    id: 8,
    name: "مانیتور گیمینگ ایسوس TUF VG27AQ",
    category: "لوازم جانبی",
    brand: "Asus",
    price: 19800000,
    stock: 7,
    image: "p8.jpg",
    specs: { "اندازه صفحه": "27 اینچ", "نرخ به‌روزرسانی": "165Hz", "رزولوشن": "2K WQHD" }
  },
];

// بروزرسانی دیتابیس در مرورگرها
localStorage.setItem('gz_products', JSON.stringify(initialProducts));
