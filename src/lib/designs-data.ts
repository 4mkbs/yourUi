import { BATCH_1_DESIGNS } from "./designs-batch-1";
import { BATCH_2_DESIGNS } from "./designs-batch-2";
import { BATCH_3_DESIGNS } from "./designs-batch-3";
import { BATCH_4_DESIGNS } from "./designs-batch-4";
import { BATCH_5_DESIGNS } from "./designs-batch-5";
import { BATCH_6_DESIGNS } from "./designs-batch-6";
import { BATCH_7_DESIGNS } from "./designs-batch-7";
import { BATCH_8_DESIGNS } from "./designs-batch-8";
import { BATCH_9_DESIGNS } from "./designs-batch-9";
import { BATCH_10_DESIGNS } from "./designs-batch-10";
import { BATCH_11_DESIGNS } from "./designs-batch-11";
import { BATCH_12_DESIGNS } from "./designs-batch-12";
import { BATCH_13_DESIGNS } from "./designs-batch-13";
import { BATCH_14_DESIGNS } from "./designs-batch-14";
import { BATCH_15_DESIGNS } from "./designs-batch-15";
import { BATCH_16_DESIGNS } from "./designs-batch-16";
import { BATCH_17_DESIGNS } from "./designs-batch-17";
import { BATCH_18_DESIGNS } from "./designs-batch-18";
import { BATCH_19_DESIGNS } from "./designs-batch-19";
import { BATCH_20_DESIGNS } from "./designs-batch-20";
import { BATCH_21_DESIGNS } from "./designs-batch-21";
import { BATCH_22_DESIGNS } from "./designs-batch-22";
import { BATCH_23_DESIGNS } from "./designs-batch-23";
import { BATCH_24_DESIGNS } from "./designs-batch-24";
import { BATCH_25_DESIGNS } from "./designs-batch-25";
import { BATCH_26_DESIGNS } from "./designs-batch-26";
import { BATCH_27_DESIGNS } from "./designs-batch-27";
import { BATCH_28_DESIGNS } from "./designs-batch-28";
import { BATCH_29_DESIGNS } from "./designs-batch-29";
import { BATCH_30_DESIGNS } from "./designs-batch-30";
import { BATCH_31_DESIGNS } from "./designs-batch-31";
import { BATCH_32_DESIGNS } from "./designs-batch-32";
import { BATCH_33_DESIGNS } from "./designs-batch-33";
import { BATCH_34_DESIGNS } from "./designs-batch-34";
import { BATCH_35_DESIGNS } from "./designs-batch-35";
import { BATCH_36_DESIGNS } from "./designs-batch-36";
import { BATCH_37_DESIGNS } from "./designs-batch-37";
import { BATCH_38_DESIGNS } from "./designs-batch-38";
import { BATCH_39_DESIGNS } from "./designs-batch-39";
import { BATCH_40_DESIGNS } from "./designs-batch-40";
import { BATCH_41_DESIGNS } from "./designs-batch-41";
import { BATCH_42_DESIGNS } from "./designs-batch-42";
import { BATCH_43_DESIGNS } from "./designs-batch-43";
import { BATCH_44_DESIGNS } from "./designs-batch-44";
import { BATCH_45_DESIGNS } from "./designs-batch-45";
import { BATCH_46_DESIGNS } from "./designs-batch-46";
import { BATCH_47_DESIGNS } from "./designs-batch-47";
import { BATCH_48_DESIGNS } from "./designs-batch-48";
import { BATCH_49_DESIGNS } from "./designs-batch-49";
import { BATCH_50_DESIGNS } from "./designs-batch-50";
import { BATCH_51_DESIGNS } from "./designs-batch-51";
import { BATCH_52_DESIGNS } from "./designs-batch-52";
import { BATCH_53_DESIGNS } from "./designs-batch-53";
import { BATCH_54_DESIGNS } from "./designs-batch-54";
import { BATCH_55_DESIGNS } from "./designs-batch-55";
import { BATCH_56_DESIGNS } from "./designs-batch-56";
import { BATCH_57_DESIGNS } from "./designs-batch-57";
import { BATCH_58_DESIGNS } from "./designs-batch-58";
import { BATCH_59_DESIGNS } from "./designs-batch-59";
import { BATCH_60_DESIGNS } from "./designs-batch-60";
import { BATCH_61_DESIGNS } from "./designs-batch-61";
import { BATCH_62_DESIGNS } from "./designs-batch-62";
import { BATCH_63_DESIGNS } from "./designs-batch-63";
import { BATCH_64_DESIGNS } from "./designs-batch-64";
import { BATCH_65_DESIGNS } from "./designs-batch-65";
import { BATCH_66_DESIGNS } from "./designs-batch-66";
import { BATCH_67_DESIGNS } from "./designs-batch-67";
import { BATCH_68_DESIGNS } from "./designs-batch-68";
import { BATCH_69_DESIGNS } from "./designs-batch-69";
import { BATCH_70_DESIGNS } from "./designs-batch-70";
import { BATCH_71_DESIGNS } from "./designs-batch-71";
import { BATCH_72_DESIGNS } from "./designs-batch-72";
import { BATCH_73_DESIGNS } from "./designs-batch-73";
import { BATCH_74_DESIGNS } from "./designs-batch-74";
import { BATCH_75_DESIGNS } from "./designs-batch-75";
import { BATCH_76_DESIGNS } from "./designs-batch-76";
import { BATCH_77_DESIGNS } from "./designs-batch-77";
import { BATCH_78_DESIGNS } from "./designs-batch-78";
import { BATCH_79_DESIGNS } from "./designs-batch-79";
import { BATCH_80_DESIGNS } from "./designs-batch-80";
import { BATCH_81_DESIGNS } from "./designs-batch-81";
import { BATCH_82_DESIGNS } from "./designs-batch-82";
import { BATCH_83_DESIGNS } from "./designs-batch-83";
import { BATCH_84_DESIGNS } from "./designs-batch-84";
import { BATCH_85_DESIGNS } from "./designs-batch-85";
import { BATCH_86_DESIGNS } from "./designs-batch-86";
import { BATCH_87_DESIGNS } from "./designs-batch-87";
import { BATCH_88_DESIGNS } from "./designs-batch-88";
import { BATCH_89_DESIGNS } from "./designs-batch-89";
import { BATCH_90_DESIGNS } from "./designs-batch-90";
import { BATCH_91_DESIGNS } from "./designs-batch-91";
import { BATCH_92_DESIGNS } from "./designs-batch-92";
import { BATCH_93_DESIGNS } from "./designs-batch-93";
import { BATCH_94_DESIGNS } from "./designs-batch-94";
import { BATCH_95_DESIGNS } from "./designs-batch-95";
import { BATCH_96_DESIGNS } from "./designs-batch-96";
import { BATCH_97_DESIGNS } from "./designs-batch-97";
import { BATCH_98_DESIGNS } from "./designs-batch-98";
import { BATCH_99_DESIGNS } from "./designs-batch-99";
import { BATCH_100_DESIGNS } from "./designs-batch-100";

export interface Design {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  thumbnail: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  tags: string[];
  isPremium: boolean;
  views: number;
  downloads: number;
  author: string;
  createdAt: string;
}

export const CATEGORIES = [
  "Landing Page", "Portfolio", "Dashboard", "Login Page",
  "Registration Form", "Pricing Table", "Hero Section", "Navbar",
  "Footer", "E-commerce", "Blog", "SaaS", "Agency"
];

export const MOCK_DESIGNS: Design[] = [
  ...BATCH_1_DESIGNS,
  ...BATCH_2_DESIGNS,
  ...BATCH_3_DESIGNS,
  ...BATCH_4_DESIGNS,
  ...BATCH_5_DESIGNS,
  ...BATCH_6_DESIGNS,
  ...BATCH_7_DESIGNS,
  ...BATCH_8_DESIGNS,
  ...BATCH_9_DESIGNS,
  ...BATCH_10_DESIGNS,
  ...BATCH_11_DESIGNS,
  ...BATCH_12_DESIGNS,
  ...BATCH_13_DESIGNS,
  ...BATCH_14_DESIGNS,
  ...BATCH_15_DESIGNS,
  ...BATCH_16_DESIGNS,
  ...BATCH_17_DESIGNS,
  ...BATCH_18_DESIGNS,
  ...BATCH_19_DESIGNS,
  ...BATCH_20_DESIGNS,
  ...BATCH_21_DESIGNS,
  ...BATCH_22_DESIGNS,
  ...BATCH_23_DESIGNS,
  ...BATCH_24_DESIGNS,
  ...BATCH_25_DESIGNS,
  ...BATCH_26_DESIGNS,
  ...BATCH_27_DESIGNS,
  ...BATCH_28_DESIGNS,
  ...BATCH_29_DESIGNS,
  ...BATCH_30_DESIGNS,
  ...BATCH_31_DESIGNS,
  ...BATCH_32_DESIGNS,
  ...BATCH_33_DESIGNS,
  ...BATCH_34_DESIGNS,
  ...BATCH_35_DESIGNS,
  ...BATCH_36_DESIGNS,
  ...BATCH_37_DESIGNS,
  ...BATCH_38_DESIGNS,
  ...BATCH_39_DESIGNS,
  ...BATCH_40_DESIGNS,
  ...BATCH_41_DESIGNS,
  ...BATCH_42_DESIGNS,
  ...BATCH_43_DESIGNS,
  ...BATCH_44_DESIGNS,
  ...BATCH_45_DESIGNS,
  ...BATCH_46_DESIGNS,
  ...BATCH_47_DESIGNS,
  ...BATCH_48_DESIGNS,
  ...BATCH_49_DESIGNS,
  ...BATCH_50_DESIGNS,
  ...BATCH_51_DESIGNS,
  ...BATCH_52_DESIGNS,
  ...BATCH_53_DESIGNS,
  ...BATCH_54_DESIGNS,
  ...BATCH_55_DESIGNS,
  ...BATCH_56_DESIGNS,
  ...BATCH_57_DESIGNS,
  ...BATCH_58_DESIGNS,
  ...BATCH_59_DESIGNS,
  ...BATCH_60_DESIGNS,
  ...BATCH_61_DESIGNS,
  ...BATCH_62_DESIGNS,
  ...BATCH_63_DESIGNS,
  ...BATCH_64_DESIGNS,
  ...BATCH_65_DESIGNS,
  ...BATCH_66_DESIGNS,
  ...BATCH_67_DESIGNS,
  ...BATCH_68_DESIGNS,
  ...BATCH_69_DESIGNS,
  ...BATCH_70_DESIGNS,
  ...BATCH_71_DESIGNS,
  ...BATCH_72_DESIGNS,
  ...BATCH_73_DESIGNS,
  ...BATCH_74_DESIGNS,
  ...BATCH_75_DESIGNS,
  ...BATCH_76_DESIGNS,
  ...BATCH_77_DESIGNS,
  ...BATCH_78_DESIGNS,
  ...BATCH_79_DESIGNS,
  ...BATCH_80_DESIGNS,
  ...BATCH_81_DESIGNS,
  ...BATCH_82_DESIGNS,
  ...BATCH_83_DESIGNS,
  ...BATCH_84_DESIGNS,
  ...BATCH_85_DESIGNS,
  ...BATCH_86_DESIGNS,
  ...BATCH_87_DESIGNS,
  ...BATCH_88_DESIGNS,
  ...BATCH_89_DESIGNS,
  ...BATCH_90_DESIGNS,
  ...BATCH_91_DESIGNS,
  ...BATCH_92_DESIGNS,
  ...BATCH_93_DESIGNS,
  ...BATCH_94_DESIGNS,
  ...BATCH_95_DESIGNS,
  ...BATCH_96_DESIGNS,
  ...BATCH_97_DESIGNS,
  ...BATCH_98_DESIGNS,
  ...BATCH_99_DESIGNS,
  ...BATCH_100_DESIGNS,
  {
    _id: "1",
    title: "Glassmorphism Login Card",
    slug: "glassmorphism-login-card",
    description: "Sleek, futuristic login card with dynamic glassmorphic blur and subtle borders.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["glassmorphism","modern","interactive"],
    isPremium: false,
    views: 1240,
    downloads: 450,
    author: "YourUI",
    createdAt: "2026-06-13T10:47:19.503Z",
    htmlCode: `<div class="login-container">
  <div class="login-card">
    <h2>Welcome Back</h2>
    <p>Enter details to access your vault</p>
    <form id="login-form">
      <div class="input-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" placeholder="you@example.com" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="••••••••" required />
      </div>
      <div class="options">
        <label><input type="checkbox" /> Remember me</label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit" class="submit-btn">Unlock Vault</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: radial-gradient(circle at top right, #1e1b4b, #090514); font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; color: #e2e8f0; }
.login-card { background: rgba(255,255,255,0.03); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 40px; width: 350px; text-align: center; box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
h2 { margin-bottom: 8px; background: linear-gradient(135deg, #a5b4fc, #818cf8, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
p { color: #94a3b8; font-size: 0.9rem; margin-bottom: 30px; }
.input-group { text-align: left; margin-bottom: 20px; }
label { display: block; font-size: 0.8rem; color: #cbd5e1; margin-bottom: 6px; text-transform: uppercase; }
input { width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; box-sizing: border-box; outline: none; }
input:focus { border-color: #6366f1; box-shadow: 0 0 15px rgba(99,102,241,0.25); }
.options { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 25px; color: #94a3b8; }
.options a { color: #818cf8; text-decoration: none; }
.submit-btn { width: 100%; padding: 14px; background: linear-gradient(135deg, #6366f1, #4f46e5); border: none; border-radius: 10px; color: white; font-weight: bold; cursor: pointer; }`,
    jsCode: `document.getElementById('login-form').addEventListener('submit', (e) => { e.preventDefault(); alert('Welcome!'); });`
  },
  {
    _id: "2",
    title: "Minimal Pricing Cards",
    slug: "minimal-pricing-cards",
    description: "Highly interactive pricing cards featuring clear highlight layout and gradient text.",
    category: "Pricing Table",
    thumbnail: "https://images.unsplash.com/photo-1618005198143-d3667104b2a8?auto=format&fit=crop&w=800&q=80",
    tags: ["pricing","business","minimal"],
    isPremium: false,
    views: 840,
    downloads: 210,
    author: "YourUI",
    createdAt: "2026-06-13T10:47:19.504Z",
    htmlCode: `<div class="pricing-container">
  <div class="pricing-card">
    <div class="plan-name">Starter</div>
    <div class="price">$9<span>/mo</span></div>
    <ul class="features">
      <li>1 Project</li>
      <li>Basic Analytics</li>
    </ul>
    <button class="pricing-btn">Choose Plan</button>
  </div>
  <div class="pricing-card popular">
    <div class="badge">Popular</div>
    <div class="plan-name">Pro</div>
    <div class="price">$29<span>/mo</span></div>
    <ul class="features">
      <li>Unlimited Projects</li>
      <li>Advanced Analytics</li>
      <li>API Integration</li>
    </ul>
    <button class="pricing-btn">Get Started</button>
  </div>
</div>`,
    cssCode: `body { background: #0f172a; color: #fff; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
.pricing-container { display: flex; gap: 30px; }
.pricing-card { background: #1e293b; border-radius: 16px; padding: 40px 30px; width: 280px; position: relative; border: 1px solid #334155; transition: 0.3s; }
.pricing-card:hover { transform: translateY(-8px); }
.popular { border-color: #6366f1; box-shadow: 0 10px 30px rgba(99,102,241,0.15); }
.badge { position: absolute; top: 15px; right: 15px; background: #6366f1; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; }
.plan-name { font-size: 1.25rem; color: #94a3b8; }
.price { font-size: 3rem; font-weight: bold; margin: 20px 0; }
.price span { font-size: 1rem; color: #94a3b8; }
.features { list-style: none; padding: 0; margin: 30px 0; }
.features li { margin-bottom: 15px; color: #cbd5e1; }
.pricing-btn { width: 100%; padding: 12px; border: none; border-radius: 8px; background: #334155; color: #fff; font-weight: bold; cursor: pointer; }
.popular .pricing-btn { background: #6366f1; }`,
    jsCode: ``
  },
  {
    _id: "3",
    title: "Floating Glass Navbar",
    slug: "floating-glass-navbar",
    description: "A modern sticky navbar with blur effect and hover animations.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    tags: ["navbar","navigation","glassmorphism"],
    isPremium: false,
    views: 3100,
    downloads: 950,
    author: "UI Master",
    createdAt: "2026-06-13T10:47:19.504Z",
    htmlCode: `<nav class="navbar">
  <div class="logo">Brand.</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li><a href="#">Pricing</a></li>
  </ul>
  <button class="cta">Sign Up</button>
</nav>
<div class="content">
  <h1>Scroll down</h1>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #121212; color: #fff; height: 200vh; }
.navbar { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 1000px; display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 50px; box-sizing: border-box; }
.logo { font-weight: 800; font-size: 1.2rem; letter-spacing: 1px; }
.nav-links { display: flex; gap: 30px; list-style: none; margin: 0; padding: 0; }
.nav-links a { color: #a1a1aa; text-decoration: none; font-size: 0.9rem; transition: 0.3s; }
.nav-links a:hover { color: #fff; }
.cta { background: #fff; color: #000; border: none; padding: 10px 20px; border-radius: 30px; font-weight: bold; cursor: pointer; transition: 0.3s; }
.cta:hover { background: #e5e5e5; transform: scale(1.05); }
.content { padding-top: 150px; text-align: center; }`,
    jsCode: ``
  },
  {
    _id: "4",
    title: "E-commerce Shoe Card",
    slug: "ecommerce-shoe-card",
    description: "Product card with size selector and animated add to cart button.",
    category: "E-commerce",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    tags: ["ecommerce","card","product"],
    isPremium: true,
    views: 4500,
    downloads: 1200,
    author: "CommerceUI",
    createdAt: "2026-06-13T10:47:19.504Z",
    htmlCode: `<div class="card">
  <div class="img-box">
    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" alt="Shoe" />
  </div>
  <div class="details">
    <h2>Nike Air Max<br><span>Men's Running Shoe</span></h2>
    <div class="price">$120</div>
    <div class="sizes">
      <h3>Size:</h3>
      <span>7</span><span>8</span><span class="active">9</span><span>10</span>
    </div>
    <button>Add to Cart</button>
  </div>
</div>`,
    cssCode: `body { background: #e2e8f0; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: sans-serif; }
.card { width: 320px; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 25px rgba(0,0,0,0.1); }
.img-box { background: #f8fafc; padding: 20px; text-align: center; }
.img-box img { width: 100%; border-radius: 10px; transform: rotate(-15deg); transition: 0.5s; }
.card:hover .img-box img { transform: rotate(0deg) scale(1.1); }
.details { padding: 25px; }
.details h2 { margin: 0; font-size: 1.4rem; color: #1e293b; }
.details h2 span { font-size: 0.9rem; color: #64748b; font-weight: normal; }
.price { font-size: 1.5rem; font-weight: bold; color: #ef4444; margin: 15px 0; }
.sizes { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
.sizes h3 { margin: 0; font-size: 0.9rem; color: #475569; }
.sizes span { width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; background: #f1f5f9; border-radius: 5px; font-size: 0.8rem; cursor: pointer; }
.sizes span.active { background: #1e293b; color: #fff; }
button { width: 100%; background: #1e293b; color: #fff; border: none; padding: 15px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.3s; }
button:hover { background: #0f172a; }`,
    jsCode: ``
  },
  {
    _id: "5",
    title: "Agency Testimonial Grid",
    slug: "agency-testimonial-grid",
    description: "A beautiful masonry grid for customer reviews.",
    category: "Agency",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    tags: ["testimonial","grid","agency"],
    isPremium: false,
    views: 2200,
    downloads: 500,
    author: "CreativeTim",
    createdAt: "2026-06-13T10:47:19.504Z",
    htmlCode: `<div class="testimonial">
  <div class="stars">★★★★★</div>
  <p>"This platform completely revolutionized our workflow. We shipped 3 weeks earlier than planned."</p>
  <div class="user">
    <img src="https://i.pravatar.cc/100?img=1" alt="Avatar">
    <div>
      <h4>Sarah Jenkins</h4>
      <span>CTO at TechFlow</span>
    </div>
  </div>
</div>`,
    cssCode: `body { background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: sans-serif; }
.testimonial { background: #1e293b; border: 1px solid #334155; padding: 30px; border-radius: 16px; width: 350px; color: #fff; }
.stars { color: #fbbf24; font-size: 1.2rem; margin-bottom: 15px; }
p { color: #cbd5e1; line-height: 1.6; font-size: 1.05rem; font-style: italic; margin-bottom: 25px; }
.user { display: flex; align-items: center; gap: 15px; }
.user img { width: 50px; height: 50px; border-radius: 50%; }
.user h4 { margin: 0; font-size: 1rem; }
.user span { color: #64748b; font-size: 0.85rem; }`,
    jsCode: ``
  },
  {
    _id: "6",
    title: "SaaS Features Grid",
    slug: "saas-features-grid",
    description: "Modern feature showcase with neon hover effects.",
    category: "SaaS",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["features","saas","grid"],
    isPremium: true,
    views: 5200,
    downloads: 1400,
    author: "SaaSMaster",
    createdAt: "2026-06-13T10:47:19.504Z",
    htmlCode: `<div class="grid">
  <div class="card">
    <div class="icon">⚡</div>
    <h3>Lightning Fast</h3>
    <p>Optimized edge network delivers content in milliseconds worldwide.</p>
  </div>
  <div class="card">
    <div class="icon">🔒</div>
    <h3>Bank-grade Security</h3>
    <p>End-to-end encryption ensures your data remains completely private.</p>
  </div>
</div>`,
    cssCode: `body { background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: sans-serif; }
.grid { display: flex; gap: 20px; }
.card { background: #111; border: 1px solid #222; padding: 30px; border-radius: 16px; width: 280px; transition: 0.3s; }
.card:hover { border-color: #3b82f6; box-shadow: 0 10px 30px rgba(59,130,246,0.1); transform: translateY(-5px); }
.icon { font-size: 2rem; background: #1d4ed8; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center; border-radius: 12px; margin-bottom: 20px; }
h3 { color: #fff; margin: 0 0 10px 0; font-size: 1.2rem; }
p { color: #9ca3af; margin: 0; line-height: 1.5; font-size: 0.95rem; }`,
    jsCode: ``
  }
];
