// js/data.js
const initialProducts = [
    {
        id: 101,
        name: "کنسول پلی استیشن 5 استاندارد",
        category: "PS5",
        brand: "Sony",
        platform: "PS5",
        price: 32500000,
        discount: 5,
        stock: 8,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
        description: "کنسول بازی پلی استیشن 5 همراه با حافظه SSD سفارشی فوق سریع و دسته DualSense.",
        specifications: { "حافظه": "825GB SSD", "خروجی تصویر": "4K 120Hz", "وزن": "4.5kg" },
        featured: true, bestseller: true, newest: false
    },
    {
        id: 102,
        name: "کنسول ایکس باکس سری ایکس",
        category: "Xbox",
        brand: "Microsoft",
        platform: "Xbox",
        price: 31000000,
        discount: 0,
        stock: 5,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=600&q=80",
        description: "قدرتمندترین کنسول بازی جهان با پردازش 12 ترافلاپس.",
        specifications: { "حافظه": "1TB NVMe SSD", "پردازنده": "Zen 2 Custom", "کیفیت": "4K Native" },
        featured: true, bestseller: true, newest: false
    },
    {
        id: 103,
        name: "دسته بازی بی‌سیم DualSense Edge",
        category: "دسته و کنترلر",
        brand: "Sony",
        platform: "PS5",
        price: 12800000,
        discount: 10,
        stock: 12,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=600&q=80",
        description: "کنترلر حرفه‌ای با دکمه‌های قابل تنظیم و پدال‌های پشتی.",
        specifications: { "اتصال": "Wireless / USB-C", "شارژدهی": "6 ساعت", "وزن": "335g" },
        featured: true, bestseller: false, newest: true
    },
    {
        id: 104,
        name: "هدست گیمینگ SteelSeries Arctis Nova Pro",
        category: "هدست",
        brand: "SteelSeries",
        platform: "PC",
        price: 18500000,
        discount: 8,
        stock: 4,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
        description: "صداقت صوتی بی نظیر با سیستم نویز کنسلینگ فعال کامل.",
        specifications: { "نوع": "Wireless 2.4G", "میکروفون": "ClearCast Gen 2", "وزن": "338g" },
        featured: false, bestseller: true, newest: true
    },
    {
        id: 105,
        name: "کیبورد مکانیکال Razer Huntsman V2",
        category: "کیبورد و موس",
        brand: "Razer",
        platform: "PC",
        price: 9400000,
        discount: 0,
        stock: 15,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
        description: "سریع‌ترین کیبورد اپتیکال جهان با نرخ نظرسنجی 8000Hz.",
        specifications: { "سوییچ": "Optical Red Linear", "نورپردازی": "Razer Chroma RGB", "اتصال": "کابل بافته شده" },
        featured: true, bestseller: false, newest: true
    },
    {
        id: 106,
        name: "موس گیمینگ Logitech G Pro X Superlight 2",
        category: "کیبورد و موس",
        brand: "Logitech",
        platform: "PC",
        price: 8200000,
        discount: 12,
        stock: 9,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
        description: "وزن فوق‌العاده سبک 60 گرمی همراه با سنسور Hero 2.",
        specifications: { "حسگر": "HERO 2 32K DPI", "وزن": "60g", "شارژدهی": "95 ساعت" },
        featured: false, bestseller: true, newest: true
    },
    {
        id: 107,
        name: "مانیتور گیمینگ ASUS ROG Swift 27 Inch 240Hz",
        category: "لوازم جانبی",
        brand: "ASUS",
        platform: "PC",
        price: 29500000,
        discount: 15,
        stock: 3,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
        description: "پنل OLED با زمان پاسخگویی 0.03 میلی‌ثانیه.",
        specifications: { "پنل": "OLED 1440p", "رفرش ریت": "240Hz", "زمان پاسخ": "0.03ms" },
        featured: true, bestseller: true, newest: false
    },
    {
        id: 108,
        name: "بازی God of War Ragnarok - PS5",
        category: "PS5",
        brand: "Sony",
        platform: "PS5",
        price: 2800000,
        discount: 0,
        stock: 20,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80",
        description: "ادامه حماسه کراتوس و آترئوس در قلمرو اساطیر اسکاندیناوی.",
        specifications: { "ژانر": "اکشن ماجراجویی", "زبان": "انگلیسی / زیرنویس", "رده سنی": "+18" },
        featured: false, bestseller: true, newest: false
    }
];

// بارگذاری یا مقداردهی اولیه LocalStorage
if (!localStorage.getItem("gz_products")) {
    localStorage.setItem("gz_products", JSON.stringify(initialProducts));
}