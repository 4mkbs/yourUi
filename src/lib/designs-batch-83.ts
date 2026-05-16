import { Design } from "./designs-data";

export const BATCH_83_DESIGNS: Design[] = [
  // 1. Classic Grid
  {
    _id: "lc1",
    title: "Classic Logo Grid",
    slug: "classic-logo-grid",
    description: "Standard flex wrap grid of partner logos.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["logos", "trusted by", "classic", "grid"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-cl">
  <p>Trusted by innovative teams worldwide</p>
  <div class="lc-grid">
    <div class="lc-item">LOGO IPSUM</div>
    <div class="lc-item">COMPANY INC</div>
    <div class="lc-item">GLOBAL CO</div>
    <div class="lc-item">TECH STARTUP</div>
    <div class="lc-item">MEGA CORP</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 80px 20px; display: flex; justify-content: center; }
.lc-cl { max-width: 1000px; width: 100%; text-align: center; }
.lc-cl p { color: #64748b; font-size: 1.1rem; margin: 0 0 40px; font-weight: 500; }
.lc-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; align-items: center; }
.lc-item { font-size: 1.5rem; font-weight: 800; color: #cbd5e1; text-transform: uppercase; letter-spacing: -1px; transition: color 0.3s; }
.lc-item:hover { color: #0f172a; }`,
    jsCode: ``
  },

  // 2. Minimal Grayscale
  {
    _id: "lc2",
    title: "Minimal Grayscale Logos",
    slug: "minimal-grayscale-logos",
    description: "Logos are muted grayscale and turn solid black on hover.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["logos", "minimal", "grayscale", "clean"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-mn">
  <div class="mn-logos">
    <span>Acme Corp</span>
    <span>Globex</span>
    <span>Initech</span>
    <span>Soylent</span>
    <span>Umbrella</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.lc-mn { max-width: 900px; width: 100%; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 40px 0; }
.mn-logos { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 30px; }
.mn-logos span { font-size: 1.8rem; font-weight: bold; color: #999; filter: grayscale(100%) opacity(0.5); transition: 0.3s; cursor: default; }
.mn-logos span:hover { filter: grayscale(0%) opacity(1); color: #000; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Logos
  {
    _id: "lc3",
    title: "Cyberpunk Logos",
    slug: "cyberpunk-logos",
    description: "Hacker-themed partner list with neon borders.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["logos", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-cy">
  <div class="cy-head">ALLIED_FACTIONS //</div>
  <div class="cy-grid">
    <div class="cy-box">NEO_TOKYO_CORP</div>
    <div class="cy-box">ZAIBATSU_INTL</div>
    <div class="cy-box">TYRELL_MGMT</div>
    <div class="cy-box">WEYLAND_IND</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 80px 20px; display: flex; justify-content: center; }
.lc-cy { max-width: 800px; width: 100%; }
.cy-head { color: #0f0; font-weight: bold; font-size: 1.2rem; margin-bottom: 30px; letter-spacing: 2px; }
.cy-grid { display: flex; flex-wrap: wrap; gap: 20px; }
.cy-box { background: rgba(0,255,0,0.05); border: 1px solid #0f0; color: #0f0; padding: 15px 25px; font-weight: bold; font-size: 1.1rem; letter-spacing: 1px; transition: 0.2s; cursor: crosshair; }
.cy-box:hover { background: #0f0; color: #000; box-shadow: 0 0 15px #0f0; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Logos
  {
    _id: "lc4",
    title: "Glassmorphism Logos",
    slug: "glassmorphism-logos",
    description: "Frosted glass containers for partner logos.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["logos", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="lc-gl">
    <h3>Backed by the best</h3>
    <div class="gl-grid">
      <div class="gl-item">Venture Cap</div>
      <div class="gl-item">Angel Fund</div>
      <div class="gl-item">Seed Tech</div>
      <div class="gl-item">Global Bank</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.lc-gl { max-width: 900px; width: 100%; text-align: center; }
.lc-gl h3 { color: rgba(255,255,255,0.9); font-size: 1.5rem; margin: 0 0 40px; font-weight: 500; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.gl-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
.gl-item { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 25px 40px; color: #fff; font-size: 1.3rem; font-weight: bold; letter-spacing: 1px; transition: 0.3s; }
.gl-item:hover { background: rgba(255,255,255,0.2); transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }`,
    jsCode: ``
  },

  // 5. Brutalist Logos
  {
    _id: "lc5",
    title: "Brutalist Logos",
    slug: "brutalist-logos",
    description: "Loud, high-contrast, text-heavy logo ticker.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["logos", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-br">
  <div class="br-head">TRUSTED BY</div>
  <div class="br-wrap">
    <span>APPLE</span> • <span>GOOGLE</span> • <span>AMAZON</span> • <span>META</span> • <span>MICROSOFT</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #facc15; padding: 100px 0; overflow-x: hidden; }
.lc-br { width: 100%; border-top: 8px solid #000; border-bottom: 8px solid #000; background: #fff; padding: 20px 0; display: flex; align-items: center; }
.br-head { background: #000; color: #facc15; font-size: 2rem; font-weight: 900; padding: 10px 30px; margin-right: 20px; white-space: nowrap; }
.br-wrap { display: flex; gap: 30px; font-size: 3rem; font-weight: 900; color: #000; white-space: nowrap; }
.br-wrap span { text-decoration: underline; text-decoration-thickness: 4px; }
.br-wrap span:hover { background: #000; color: #fff; text-decoration: none; }`,
    jsCode: ``
  },

  // 6. Neumorphic Logos
  {
    _id: "lc6",
    title: "Neumorphic Logos",
    slug: "neumorphic-logos",
    description: "Soft UI embossed containers holding text logos.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["logos", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-neu">
  <div class="neu-box">BRAND ONE</div>
  <div class="neu-box">BRAND TWO</div>
  <div class="neu-box">BRAND THREE</div>
  <div class="neu-box">BRAND FOUR</div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.lc-neu { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; max-width: 900px; width: 100%; }
.neu-box { background: #e0e5ec; padding: 30px 40px; border-radius: 20px; box-shadow: 9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5); font-weight: bold; font-size: 1.2rem; color: #718096; transition: 0.2s; }
.neu-box:hover { box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); color: #4a5568; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Logos
  {
    _id: "lc7",
    title: "Dark Mode Glow Logos",
    slug: "dark-mode-glow-logos",
    description: "Dark background with glowing white text logos.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["logos", "dark", "glow", "clean"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-dg">
  <p>POWERING THE NEXT GENERATION</p>
  <div class="dg-grid">
    <div class="dg-logo">NEXUS</div>
    <div class="dg-logo">QUANTUM</div>
    <div class="dg-logo">STELLAR</div>
    <div class="dg-logo">VORTEX</div>
    <div class="dg-logo">PULSAR</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.lc-dg { max-width: 1000px; width: 100%; text-align: center; }
.lc-dg p { color: #64748b; font-size: 0.9rem; font-weight: bold; letter-spacing: 2px; margin: 0 0 50px; text-transform: uppercase; }
.dg-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 50px; align-items: center; }
.dg-logo { font-size: 1.8rem; font-weight: 900; color: #1e293b; transition: 0.4s; letter-spacing: -1px; }
.dg-logo:hover { color: #fff; text-shadow: 0 0 15px rgba(255,255,255,0.8); transform: scale(1.05); }`,
    jsCode: ``
  },

  // 8. Continuous Marquee
  {
    _id: "lc8",
    title: "Continuous Marquee",
    slug: "continuous-marquee-logos",
    description: "Infinitely scrolling CSS marquee of logos.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["logos", "marquee", "animation", "scroll"],
    isPremium: false,
    views: 59500,
    downloads: 15800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-mq">
  <div class="mq-track">
    <!-- Duplicate content for seamless scrolling -->
    <span>LOGIC</span><span>SYNTAX</span><span>ARRAY</span><span>PROMISE</span><span>OBJECT</span>
    <span>LOGIC</span><span>SYNTAX</span><span>ARRAY</span><span>PROMISE</span><span>OBJECT</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 0; overflow: hidden; }
.lc-mq { width: 100%; background: #fff; padding: 40px 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; white-space: nowrap; overflow: hidden; display: flex; }
.mq-track { display: inline-flex; gap: 80px; padding-left: 80px; animation: scroll 20s linear infinite; }
.mq-track span { font-size: 2rem; font-weight: 800; color: #94a3b8; }
@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`,
    jsCode: ``
  },

  // 9. Split Layout Logos
  {
    _id: "lc9",
    title: "Split Layout Logos",
    slug: "split-layout-logos",
    description: "Descriptive text on the left, logo grid on the right.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["logos", "split", "layout", "grid"],
    isPremium: false,
    views: 38200,
    downloads: 9800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-sp">
  <div class="sp-text">
    <h2>Empowering 10,000+ companies</h2>
    <p>From startups to enterprise, teams rely on our platform.</p>
  </div>
  <div class="sp-logos">
    <div class="sp-logo">Alpha</div>
    <div class="sp-logo">Beta</div>
    <div class="sp-logo">Gamma</div>
    <div class="sp-logo">Delta</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.lc-sp { max-width: 1100px; width: 100%; display: flex; gap: 60px; align-items: center; }
.sp-text { flex: 1; }
.sp-text h2 { margin: 0 0 10px; font-size: 2rem; color: #0f172a; }
.sp-text p { color: #64748b; font-size: 1.1rem; margin: 0; }
.sp-logos { flex: 1.5; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.sp-logo { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 30px; text-align: center; font-size: 1.3rem; font-weight: bold; color: #475569; }
@media (max-width: 768px) { .lc-sp { flex-direction: column; text-align: center; } }`,
    jsCode: ``
  },

  // 10. Single Row Separated
  {
    _id: "lc10",
    title: "Single Row Separated",
    slug: "single-row-separated-logos",
    description: "Simple inline row of logos separated by vertical lines.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["logos", "row", "inline", "clean"],
    isPremium: false,
    views: 37500,
    downloads: 9800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-sr">
  <span>STRIPE</span>
  <div class="sr-div"></div>
  <span>SQUARE</span>
  <div class="sr-div"></div>
  <span>PAYPAL</span>
  <div class="sr-div"></div>
  <span>SHOPIFY</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.lc-sr { display: flex; align-items: center; gap: 30px; max-width: 1000px; justify-content: center; flex-wrap: wrap; }
.lc-sr span { font-size: 1.4rem; font-weight: 800; color: #1e293b; letter-spacing: 1px; opacity: 0.6; transition: 0.2s; }
.lc-sr span:hover { opacity: 1; }
.sr-div { width: 1px; height: 30px; background: #cbd5e1; }
@media (max-width: 600px) { .sr-div { display: none; } }`,
    jsCode: ``
  }
];
