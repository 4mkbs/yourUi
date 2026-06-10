import { Design } from "./designs-data";

export const BATCH_95_DESIGNS: Design[] = [
  // 1. Classic Corporate Navbar
  {
    _id: "nav1",
    title: "Classic Corporate Navbar",
    slug: "classic-corporate-navbar",
    description: "Standard top navigation with logo, centered links, and CTA button.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["navbar", "corporate", "classic", "header"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-cl">
  <div class="cl-logo">AcmeCorp</div>
  <div class="cl-links">
    <a href="#">Products</a>
    <a href="#">Solutions</a>
    <a href="#">Pricing</a>
    <a href="#">Company</a>
  </div>
  <div class="cl-actions">
    <a href="#" class="cl-login">Login</a>
    <button class="cl-cta">Get Started</button>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding-top: 80px; }
.nav-cl { background: #fff; height: 70px; display: flex; justify-content: space-between; align-items: center; padding: 0 40px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: fixed; top: 0; left: 0; right: 0; z-index: 100; }
.cl-logo { font-size: 1.5rem; font-weight: 800; color: #0f172a; }
.cl-links { display: flex; gap: 30px; }
.cl-links a { text-decoration: none; color: #475569; font-weight: 500; font-size: 0.95rem; transition: 0.2s; }
.cl-links a:hover { color: #3b82f6; }
.cl-actions { display: flex; align-items: center; gap: 20px; }
.cl-login { text-decoration: none; color: #0f172a; font-weight: 600; font-size: 0.95rem; }
.cl-cta { background: #3b82f6; color: #fff; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.cl-cta:hover { background: #2563eb; }
@media (max-width: 768px) { .cl-links, .cl-login { display: none; } }`,
    jsCode: ``
  },

  // 2. Minimal Sticky Navbar
  {
    _id: "nav2",
    title: "Minimal Clean Navbar",
    slug: "minimal-clean-navbar",
    description: "Stripped back editorial header.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["navbar", "minimal", "clean", "simple"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-mn">
  <div class="mn-logo">STUDIO.</div>
  <button class="mn-menu">MENU</button>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding-top: 80px; }
.nav-mn { background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); height: 80px; display: flex; justify-content: space-between; align-items: center; padding: 0 40px; position: fixed; top: 0; left: 0; right: 0; z-index: 100; border-bottom: 1px solid #f0f0f0; }
.mn-logo { font-size: 1.2rem; font-weight: bold; letter-spacing: 2px; }
.mn-menu { background: none; border: none; font-size: 0.9rem; font-weight: bold; letter-spacing: 1px; cursor: pointer; transition: 0.2s; }
.mn-menu:hover { opacity: 0.5; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Navbar
  {
    _id: "nav3",
    title: "Cyberpunk Terminal Navbar",
    slug: "cyberpunk-terminal-navbar",
    description: "Hacker-themed navigation with neon borders.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["navbar", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-cy">
  <div class="cy-logo">[NET_RUN]</div>
  <div class="cy-links">
    <a href="#">// ARCHIVE</a>
    <a href="#">// SYS_CONFIG</a>
  </div>
  <button class="cy-btn">CONNECT_</button>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding-top: 80px; }
.nav-cy { background: rgba(0,20,0,0.9); height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; border-bottom: 2px solid #0f0; position: fixed; top: 0; left: 0; right: 0; z-index: 100; box-shadow: 0 0 15px rgba(0,255,0,0.2); }
.cy-logo { color: #0f0; font-weight: bold; font-size: 1.2rem; text-shadow: 0 0 5px #0f0; }
.cy-links { display: flex; gap: 20px; }
.cy-links a { color: #0aa; text-decoration: none; font-weight: bold; transition: 0.2s; }
.cy-links a:hover { color: #0f0; }
.cy-btn { background: #0f0; color: #000; border: none; padding: 8px 15px; font-family: inherit; font-weight: bold; cursor: pointer; transition: 0.2s; }
.cy-btn:hover { background: transparent; color: #0f0; border: 1px solid #0f0; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Navbar
  {
    _id: "nav4",
    title: "Glassmorphism Floating Navbar",
    slug: "glassmorphism-floating-navbar",
    description: "Frosted glass header floating at the top of the screen.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["navbar", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <nav class="nav-gl">
    <div class="gl-logo">Aero</div>
    <div class="gl-links">
      <a href="#">Home</a>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
    </div>
    <button class="gl-btn">Sign Up</button>
  </nav>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); padding-top: 20px; }
.nav-gl { background: rgba(255,255,255,0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); height: 60px; max-width: 1200px; margin: 0 auto; border-radius: 30px; display: flex; justify-content: space-between; align-items: center; padding: 0 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.gl-logo { color: #fff; font-weight: 800; font-size: 1.2rem; letter-spacing: 1px; }
.gl-links { display: flex; gap: 25px; }
.gl-links a { color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 500; font-size: 0.95rem; transition: 0.2s; }
.gl-links a:hover { color: #fff; }
.gl-btn { background: #fff; color: #8b5cf6; border: none; padding: 8px 20px; border-radius: 20px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.gl-btn:hover { box-shadow: 0 0 15px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 5. Brutalist Navbar
  {
    _id: "nav5",
    title: "Brutalist Block Header",
    slug: "brutalist-block-header",
    description: "High contrast, structural header for brutalist aesthetics.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["navbar", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-br">
  <div class="br-logo">MAGAZINE</div>
  <div class="br-links">
    <a href="#">READ</a>
    <a href="#">SHOP</a>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding-top: 80px; }
.nav-br { background: #facc15; border-bottom: 6px solid #000; height: 80px; display: flex; align-items: center; position: fixed; top: 0; left: 0; right: 0; z-index: 100; }
.br-logo { font-size: 2rem; font-weight: 900; padding: 0 30px; border-right: 6px solid #000; height: 100%; display: flex; align-items: center; background: #fff; }
.br-links { display: flex; height: 100%; }
.br-links a { display: flex; align-items: center; padding: 0 30px; color: #000; text-decoration: none; font-weight: 900; font-size: 1.2rem; border-right: 6px solid #000; transition: 0.1s; }
.br-links a:hover { background: #000; color: #facc15; }`,
    jsCode: ``
  },

  // 6. Neumorphic Navbar
  {
    _id: "nav6",
    title: "Neumorphic Soft Navbar",
    slug: "neumorphic-soft-navbar",
    description: "Soft UI embossed header matching light mode backgrounds.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["navbar", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-neu">
  <div class="neu-logo">N</div>
  <div class="neu-links">
    <a href="#" class="active">Home</a>
    <a href="#">Discover</a>
  </div>
  <button class="neu-btn">Profile</button>
</nav>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding-top: 100px; }
.nav-neu { background: #e0e5ec; height: 70px; display: flex; justify-content: space-between; align-items: center; padding: 0 30px; border-radius: 20px; box-shadow: 9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5); max-width: 1000px; margin: 0 auto; }
.neu-logo { width: 40px; height: 40px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 3px 3px 6px rgba(163,177,198,0.6), inset -3px -3px 6px rgba(255,255,255,0.5); display: flex; justify-content: center; align-items: center; font-weight: bold; color: #4a5568; }
.neu-links { display: flex; gap: 20px; }
.neu-links a { color: #718096; text-decoration: none; font-weight: 500; padding: 10px 20px; border-radius: 12px; transition: 0.2s; }
.neu-links a.active, .neu-links a:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
.neu-btn { background: #e0e5ec; color: #4a5568; border: none; padding: 10px 20px; border-radius: 12px; font-weight: bold; cursor: pointer; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); transition: 0.2s; }
.neu-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Navbar
  {
    _id: "nav7",
    title: "Dark Glow Navbar",
    slug: "dark-glow-navbar",
    description: "Deep dark header with a subtle glowing bottom border.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["navbar", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-dg">
  <div class="dg-logo">Orbit.</div>
  <div class="dg-links">
    <a href="#">Docs</a>
    <a href="#">Components</a>
    <a href="#">Showcase</a>
  </div>
  <button class="dg-btn">Login</button>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding-top: 80px; }
.nav-dg { background: #0f172a; height: 70px; display: flex; justify-content: space-between; align-items: center; padding: 0 40px; position: fixed; top: 0; left: 0; right: 0; z-index: 100; border-bottom: 1px solid #1e293b; }
.nav-dg::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, transparent); box-shadow: 0 0 10px #8b5cf6; }
.dg-logo { color: #f8fafc; font-weight: 800; font-size: 1.3rem; }
.dg-links { display: flex; gap: 30px; }
.dg-links a { color: #94a3b8; text-decoration: none; font-size: 0.95rem; transition: 0.2s; }
.dg-links a:hover { color: #3b82f6; text-shadow: 0 0 8px rgba(59,130,246,0.5); }
.dg-btn { background: transparent; border: 1px solid #3b82f6; color: #3b82f6; padding: 8px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.3s; }
.dg-btn:hover { background: #3b82f6; color: #fff; box-shadow: 0 0 15px rgba(59,130,246,0.4); }`,
    jsCode: ``
  },

  // 8. Centered Logo Navbar
  {
    _id: "nav8",
    title: "Centered Logo Navigation",
    slug: "centered-logo-navigation",
    description: "Symmetrical layout where the logo sits exactly in the middle.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["navbar", "centered", "symmetrical", "elegant"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-ct">
  <div class="ct-side">
    <a href="#">Men</a>
    <a href="#">Women</a>
  </div>
  <div class="ct-logo">LUXE</div>
  <div class="ct-side right">
    <a href="#">Search</a>
    <a href="#">Cart (0)</a>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; padding-top: 80px; }
.nav-ct { background: #fff; height: 80px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 0 40px; position: fixed; top: 0; left: 0; right: 0; z-index: 100; border-bottom: 1px solid #eaeaea; }
.ct-side { display: flex; gap: 30px; }
.ct-side.right { justify-content: flex-end; }
.ct-side a { color: #111; text-decoration: none; font-size: 0.9rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }
.ct-side a:hover { opacity: 0.6; }
.ct-logo { font-size: 1.8rem; font-weight: 900; letter-spacing: 4px; text-align: center; }`,
    jsCode: ``
  },

  // 9. Floating Pill Navbar
  {
    _id: "nav9",
    title: "Floating Pill Header",
    slug: "floating-pill-header",
    description: "Compact navigation pill floating near the top.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["navbar", "floating", "pill", "modern"],
    isPremium: true,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="nav-fp-wrap">
  <nav class="nav-fp">
    <div class="fp-logo">AppBeta</div>
    <div class="fp-links">
      <a href="#" class="active">Features</a>
      <a href="#">Pricing</a>
    </div>
    <button class="fp-btn">Download</button>
  </nav>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; }
.nav-fp-wrap { position: fixed; top: 20px; left: 0; right: 0; display: flex; justify-content: center; z-index: 100; pointer-events: none; }
.nav-fp { background: #fff; padding: 10px 20px; border-radius: 50px; display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 600px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; pointer-events: auto; }
.fp-logo { font-weight: 800; color: #0f172a; margin-right: 20px; }
.fp-links { display: flex; gap: 5px; }
.fp-links a { color: #64748b; text-decoration: none; font-size: 0.9rem; font-weight: 600; padding: 8px 16px; border-radius: 20px; transition: 0.2s; }
.fp-links a:hover { color: #0f172a; background: #f1f5f9; }
.fp-links a.active { background: #0f172a; color: #fff; }
.fp-btn { background: #ef4444; color: #fff; border: none; padding: 10px 20px; border-radius: 20px; font-weight: bold; cursor: pointer; margin-left: 20px; }`,
    jsCode: ``
  },

  // 10. Split Nav Navbar
  {
    _id: "nav10",
    title: "Split Navigation Header",
    slug: "split-navigation-header",
    description: "Logo on the left, all links and buttons grouped on the right.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["navbar", "split", "layout", "clean"],
    isPremium: false,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-sp">
  <div class="sp-logo">SplitUI</div>
  <div class="sp-right">
    <a href="#">About</a>
    <a href="#">Services</a>
    <button>Get a Quote</button>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding-top: 80px; }
.nav-sp { background: #fff; height: 80px; display: flex; justify-content: space-between; align-items: center; padding: 0 40px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); position: fixed; top: 0; left: 0; right: 0; z-index: 100; }
.sp-logo { font-size: 1.4rem; font-weight: 800; color: #0f172a; letter-spacing: -0.5px; }
.sp-right { display: flex; align-items: center; gap: 30px; }
.sp-right a { color: #64748b; text-decoration: none; font-weight: 500; font-size: 0.95rem; }
.sp-right a:hover { color: #0f172a; }
.sp-right button { background: #0f172a; color: #fff; border: none; padding: 12px 24px; border-radius: 4px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.sp-right button:hover { background: #334155; }`,
    jsCode: ``
  }
];
