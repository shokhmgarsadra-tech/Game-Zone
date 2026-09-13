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
  {
    id: 9,
    name: "کنسول نینتندو سوییچ مدل OLED",
    category: "لوازم جانبی",
    brand: "Nintendo",
    price: 17500000,
    stock: 9,
    image: placeholderImg,
    specs: { "صفحه نمایش": "7 اینچ OLED", "حافظه داخلی": "64GB" }
  },
  {
    id: 10,
    name: "پایه شارژر دوئل‌سنس PS5",
    category: "PS5",
    brand: "Sony",
    price: 1900000,
    stock: 14,
    image: placeholderImg,
    specs: { "ظرفیت شارژ": "دو دسته همزمان", "قطع کن خودکار": "دارد" }
  },
  {
    id: 11,
    name: "بازی God of War Ragnarok نسخه PS5",
    category: "PS5",
    brand: "Sony",
    price: 2900000,
    stock: 18,
    image: placeholderImg,
    specs: { "سبک": "اکشن-ماجراجویی", "رده سنی": "+18" }
  },
  {
    id: 12,
    name: "بازی EA Sports FC 24 نسخه PS5",
    category: "PS5",
    brand: "EA Sports",
    price: 3100000,
    stock: 22,
    image: placeholderImg,
    specs: { "سبک": "ورزشی / فوتبال", "حالت آنلاین": "دارد" }
  },
  {
    id: 13,
    name: "فرمان بازی لوجیتک G29 Driving Force",
    category: "لوازم جانبی",
    brand: "Logitech",
    price: 16200000,
    stock: 3,
    image: placeholderImg,
    specs: { "زاویه چرخش": "900 درجه", "سازگاری": "PS5, PC" }
  },
  {
    id: 14,
    name: "میکروفون گیمینگ هایپرایکس QuadCast",
    category: "لوازم جانبی",
    brand: "HyperX",
    price: 8400000,
    stock: 5,
    image: placeholderImg,
    specs: { "الگوی قطبی": "4 الگوی ضبط", "نورپردازی": "RGB" }
  },
  {
    id: 15,
    name: "پد موس گیمینگ ریزر Goliathus Chroma",
    category: "کیبورد و موس",
    brand: "Razer",
    price: 2300000,
    stock: 11,
    image: placeholderImg,
    specs: { "ابعاد": "سایز بزرگ XL", "نورپردازی": "RGB" }
  },
  {
    id: 16,
    name: "هدست بی‌سیم استیل‌سریزی Arctis Nova 7",
    category: "هدست",
    brand: "SteelSeries",
    price: 11500000,
    stock: 4,
    image: placeholderImg,
    specs: { "اتصال": "Wireless", "شارژدهی": "38 ساعت" }
  },
  {
    id: 17,
    name: "کارت گرافیک ایسوس ROG Strix RTX 4080",
    category: "لوازم جانبی",
    brand: "Asus",
    price: 78000000,
    stock: 2,
    image: placeholderImg,
    specs: { "حافظه": "16GB GDDR6X" }
  },
  {
    id: 18,
    name: "خنک‌کننده پردازنده کورسیر iCUE H150i",
    category: "لوازم جانبی",
    brand: "Corsair",
    price: 12400000,
    stock: 6,
    image: placeholderImg,
    specs: { "نوع": "مایع (AIO)" }
  },
  {
    id: 19,
    name: "دسته بازی ایکس‌باکس سریز Elite 2",
    category: "Xbox",
    brand: "Microsoft",
    price: 8900000,
    stock: 7,
    image: placeholderImg,
    specs: { "شارژدهی": "40 ساعت" }
  },
  {
    id: 20,
    name: "عینک واقعیت مجازی PlayStation VR2",
    category: "PS5",
    brand: "Sony",
    price: 29500000,
    stock: 3,
    image: placeholderImg,
    specs: { "صفحه نمایش": "OLED 4K HDR" }
  },
  {
    id: 21,
    name: "حافظه اس‌اس‌دی سامسونگ 990 PRO 2TB",
    category: "لوازم جانبی",
    brand: "Samsung",
    price: 10800000,
    stock: 10,
    image: placeholderImg,
    specs: { "ظرفیت": "2 ترابایت" }
  },
  {
    id: 22,
    name: "وب‌کم لوجیتک Brio 4K",
    category: "لوازم جانبی",
    brand: "Logitech",
    price: 9200000,
    stock: 5,
    image: placeholderImg,
    specs: { "رزولوشن": "4K Ultra HD" }
  },
  {
    id: 23,
    name: "کیس گیمینگ گرین Z7 GRIFFIN",
    category: "لوازم جانبی",
    brand: "Green",
    price: 5400000,
    stock: 8,
    image: placeholderImg,
    specs: { "پنل شیشه‌ای": "حرارت دیده" }
  },
  {
    id: 24,
    name: "پاور گرافیك کورسیر RM1000x",
    category: "لوازم جانبی",
    brand: "Corsair",
    price: 11200000,
    stock: 4,
    image: placeholderImg,
    specs: { "توان مصرفی": "1000 وات" }
  }
];

// بروزرسانی دیتابیس در مرورگرها
localStorage.setItem('gz_products', JSON.stringify(initialProducts));
