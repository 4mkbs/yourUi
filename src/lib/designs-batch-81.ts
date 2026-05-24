import { Design } from "./designs-data";

export const BATCH_81_DESIGNS: Design[] = [
  // 1. Classic Top Nav
  {
    _id: "nav1",
    title: "Classic Top Nav",
    slug: "classic-top-nav",
    description: "Standard top navigation with logo, centered links, and a CTA button.",
    category: "Navigation Bars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["navbar", "classic", "header", "clean"],
    isPremium: false,
    views: 65200,
    downloads: 18500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-cl">
  <div class="nav-container">
    <a href="#" class="nav-logo">YourUI</a>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Components</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Docs</a></li>
    </ul>
    <div class="nav-actions">
      <a href="#" class="nav-btn-ghost">Log In</a>
      <a href="#" class="nav-btn-solid">Sign Up</a>
    </div>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.nav-cl { background: #fff; border-bottom: 1px solid #e2e8f0; position: relative; z-index: 100; }
.nav-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; height: 70px; display: flex; align-items: center; justify-content: space-between; }
.nav-logo { font-size: 1.5rem; font-weight: 800; color: #0f172a; text-decoration: none; letter-spacing: -0.5px; }
.nav-links { list-style: none; padding: 0; margin: 0; display: flex; gap: 30px; }
.nav-links a { text-decoration: none; color: #64748b; font-weight: 500; font-size: 0.95rem; transition: color 0.2s; }
.nav-links a:hover { color: #0f172a; }
.nav-actions { display: flex; gap: 15px; align-items: center; }
.nav-btn-ghost { text-decoration: none; color: #0f172a; font-weight: 500; font-size: 0.95rem; }
.nav-btn-solid { text-decoration: none; background: #2563eb; color: #fff; padding: 8px 16px; border-radius: 6px; font-weight: 500; font-size: 0.95rem; transition: background 0.2s; }
.nav-btn-solid:hover { background: #1d4ed8; }
@media (max-width: 768px) { .nav-links, .nav-btn-ghost { display: none; } }`,
    jsCode: ``
  },

  // 2. Minimal Clean Nav
  {
    _id: "nav2",
    title: "Minimal Clean Nav",
    slug: "minimal-clean-nav",
    description: "Ultra-minimal, typography-focused navigation.",
    category: "Navigation Bars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["navbar", "minimal", "clean", "typography"],
    isPremium: false,
    views: 48100,
    downloads: 13400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-mn">
  <a href="#" class="mn-brand">Studio.</a>
  <div class="mn-menu">
    <a href="#">Work</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; }
.nav-mn { display: flex; justify-content: space-between; align-items: center; padding: 40px 60px; max-width: 1400px; margin: 0 auto; }
.mn-brand { font-size: 1.8rem; font-weight: bold; color: #000; text-decoration: none; letter-spacing: -1px; }
.mn-menu { display: flex; gap: 40px; }
.mn-menu a { text-decoration: none; color: #000; font-size: 1.1rem; font-weight: 500; position: relative; padding-bottom: 5px; }
.mn-menu a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0%; height: 2px; background: #000; transition: width 0.3s ease; }
.mn-menu a:hover::after { width: 100%; }
@media (max-width: 600px) { .nav-mn { padding: 30px 20px; flex-direction: column; gap: 20px; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Nav
  {
    _id: "nav3",
    title: "Cyberpunk Nav",
    slug: "cyberpunk-nav",
    description: "Neon borders and hacker styling for a dark theme.",
    category: "Navigation Bars",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["navbar", "cyberpunk", "neon", "dark"],
    isPremium: true,
    views: 41200,
    downloads: 10200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-cy">
  <div class="cy-logo">SYS_CORE //</div>
  <div class="cy-links">
    <a href="#" data-text="OVERRIDE">OVERRIDE</a>
    <a href="#" data-text="DATABASE">DATABASE</a>
    <a href="#" data-text="UPLINK">UPLINK</a>
  </div>
  <button class="cy-btn">INITIALIZE</button>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; color: #0f0; }
.nav-cy { display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; border-bottom: 2px solid #0f0; box-shadow: 0 5px 15px rgba(0,255,0,0.1); background: rgba(0,20,0,0.9); }
.cy-logo { font-size: 1.5rem; font-weight: bold; letter-spacing: 2px; text-shadow: 0 0 5px #0f0; }
.cy-links { display: flex; gap: 30px; }
.cy-links a { color: #0aa; text-decoration: none; font-weight: bold; letter-spacing: 1px; transition: 0.2s; position: relative; }
.cy-links a:hover { color: #f0f; text-shadow: 0 0 8px #f0f; }
.cy-btn { background: transparent; border: 1px solid #f0f; color: #f0f; padding: 8px 16px; font-family: inherit; font-weight: bold; cursor: pointer; box-shadow: inset 0 0 10px rgba(255,0,255,0.2); transition: 0.3s; }
.cy-btn:hover { background: #f0f; color: #000; box-shadow: 0 0 15px #f0f; }
@media (max-width: 800px) { .cy-links { display: none; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Sticky Nav
  {
    _id: "nav4",
    title: "Glassmorphism Nav",
    slug: "glassmorphism-nav",
    description: "Frosted glass effect fixed to the top of the viewport.",
    category: "Navigation Bars",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["navbar", "glassmorphism", "sticky", "modern"],
    isPremium: true,
    views: 59100,
    downloads: 16900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <nav class="nav-gl">
    <div class="gl-logo">GlassUI</div>
    <ul class="gl-links">
      <li><a href="#">Products</a></li>
      <li><a href="#">Solutions</a></li>
      <li><a href="#">Resources</a></li>
    </ul>
    <a href="#" class="gl-cta">Get Started</a>
  </nav>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); padding-top: 20px; }
.nav-gl { position: sticky; top: 20px; max-width: 1000px; margin: 0 auto; height: 60px; background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.2); border-radius: 30px; display: flex; align-items: center; justify-content: space-between; padding: 0 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); z-index: 1000; color: #fff; }
.gl-logo { font-size: 1.2rem; font-weight: bold; letter-spacing: 1px; }
.gl-links { list-style: none; display: flex; gap: 25px; margin: 0; padding: 0; }
.gl-links a { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
.gl-links a:hover { color: #fff; }
.gl-cta { background: rgba(255,255,255,0.2); color: #fff; padding: 8px 20px; border-radius: 20px; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: 0.2s; border: 1px solid rgba(255,255,255,0.3); }
.gl-cta:hover { background: rgba(255,255,255,0.3); }
@media (max-width: 768px) { .gl-links { display: none; } }`,
    jsCode: ``
  },

  // 5. Brutalist Nav
  {
    _id: "nav5",
    title: "Brutalist Nav",
    slug: "brutalist-nav",
    description: "Thick borders, raw styling, and massive contrast.",
    category: "Navigation Bars",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["navbar", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 38500,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-br">
  <div class="br-brand">RAW.XYZ</div>
  <div class="br-menu">
    <a href="#" class="br-link">INDEX</a>
    <a href="#" class="br-link">MANIFESTO</a>
    <a href="#" class="br-btn">JOIN CULT</a>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.nav-br { display: flex; justify-content: space-between; align-items: center; background: #fff; border-bottom: 6px solid #000; padding: 0; height: 80px; }
.br-brand { font-size: 2.5rem; font-weight: 900; color: #000; padding: 0 30px; letter-spacing: -2px; border-right: 6px solid #000; height: 100%; display: flex; align-items: center; background: #facc15; }
.br-menu { display: flex; height: 100%; }
.br-link { display: flex; align-items: center; padding: 0 30px; border-left: 4px solid #000; font-size: 1.2rem; font-weight: 800; color: #000; text-decoration: none; transition: 0.1s; }
.br-link:hover { background: #000; color: #fff; }
.br-btn { display: flex; align-items: center; padding: 0 30px; border-left: 6px solid #000; background: #facc15; font-size: 1.2rem; font-weight: 900; color: #000; text-decoration: none; transition: 0.1s; }
.br-btn:hover { background: #000; color: #facc15; }
@media (max-width: 800px) { .br-link { display: none; } .br-brand { border-right: none; } }`,
    jsCode: ``
  },

  // 6. Neumorphic Nav
  {
    _id: "nav6",
    title: "Neumorphic Nav",
    slug: "neumorphic-nav",
    description: "Soft UI nav bar with embossed logo and pressed active states.",
    category: "Navigation Bars",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["navbar", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 42200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-neu">
  <div class="neu-logo">SoftBrand</div>
  <div class="neu-links">
    <a href="#" class="neu-active">Dashboard</a>
    <a href="#">Analytics</a>
    <a href="#">Settings</a>
  </div>
  <a href="#" class="neu-action">Profile</a>
</nav>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 30px; }
.nav-neu { background: #e0e5ec; border-radius: 20px; height: 80px; display: flex; align-items: center; justify-content: space-between; padding: 0 30px; box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5); }
.neu-logo { font-size: 1.5rem; font-weight: bold; color: #4a5568; letter-spacing: 1px; }
.neu-links { display: flex; gap: 20px; }
.neu-links a { text-decoration: none; color: #718096; font-weight: 600; padding: 10px 20px; border-radius: 12px; transition: 0.3s; box-shadow: 4px 4px 8px rgb(163,177,198,0.4), -4px -4px 8px rgba(255,255,255, 0.4); }
.neu-links a:hover { color: #2d3748; }
.neu-links a.neu-active { box-shadow: inset 4px 4px 8px rgb(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255, 0.5); color: #3182ce; }
.neu-action { text-decoration: none; color: #4a5568; font-weight: bold; padding: 10px 25px; border-radius: 30px; box-shadow: 4px 4px 8px rgb(163,177,198,0.6), -4px -4px 8px rgba(255,255,255, 0.5); transition: 0.2s; }
.neu-action:active { box-shadow: inset 4px 4px 8px rgb(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255, 0.5); }
@media (max-width: 800px) { .neu-links { display: none; } }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Nav
  {
    _id: "nav7",
    title: "Dark Mode Glow Nav",
    slug: "dark-mode-glow-nav",
    description: "Deep dark navbar with a subtle gradient glow border.",
    category: "Navigation Bars",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["navbar", "dark", "glow", "gradient"],
    isPremium: true,
    views: 49200,
    downloads: 13200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-dg">
  <a href="#" class="dg-logo">Nexus</a>
  <div class="dg-menu">
    <a href="#">Features</a>
    <a href="#">Ecosystem</a>
    <a href="#">Developers</a>
  </div>
  <a href="#" class="dg-btn">Launch App</a>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; }
.nav-dg { display: flex; justify-content: space-between; align-items: center; padding: 0 40px; height: 80px; background: #0f172a; border-bottom: 1px solid #1e293b; position: relative; }
.nav-dg::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 100%; height: 1px; background: linear-gradient(90deg, transparent, #8b5cf6, #3b82f6, transparent); opacity: 0.8; }
.dg-logo { color: #f8fafc; font-size: 1.5rem; font-weight: bold; text-decoration: none; letter-spacing: 1px; }
.dg-menu { display: flex; gap: 40px; }
.dg-menu a { color: #94a3b8; text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: color 0.2s; }
.dg-menu a:hover { color: #fff; text-shadow: 0 0 10px rgba(139,92,246,0.5); }
.dg-btn { background: linear-gradient(135deg, #6d28d9, #3b82f6); color: #fff; text-decoration: none; padding: 10px 24px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; transition: 0.3s; box-shadow: 0 4px 15px rgba(109,40,217,0.3); }
.dg-btn:hover { box-shadow: 0 6px 20px rgba(109,40,217,0.5); transform: translateY(-1px); }
@media (max-width: 768px) { .dg-menu { display: none; } }`,
    jsCode: ``
  },

  // 8. Floating Pill Nav
  {
    _id: "nav8",
    title: "Floating Pill Nav",
    slug: "floating-pill-nav",
    description: "Rounded, pill-shaped navbar floating off the top edge.",
    category: "Navigation Bars",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["navbar", "floating", "pill", "rounded"],
    isPremium: false,
    views: 51500,
    downloads: 14500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pill-wrapper">
  <nav class="nav-pill">
    <div class="pill-brand">OVAL</div>
    <div class="pill-links">
      <a href="#" class="active">Discover</a>
      <a href="#">Create</a>
      <a href="#">Learn</a>
    </div>
    <a href="#" class="pill-login">Login</a>
  </nav>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; }
.pill-wrapper { padding: 30px 20px; display: flex; justify-content: center; }
.nav-pill { display: flex; align-items: center; justify-content: space-between; background: #fff; height: 64px; border-radius: 32px; padding: 0 25px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); max-width: 800px; width: 100%; }
.pill-brand { font-weight: 900; font-size: 1.2rem; color: #0f172a; }
.pill-links { display: flex; gap: 10px; }
.pill-links a { text-decoration: none; color: #64748b; padding: 8px 16px; border-radius: 20px; font-size: 0.95rem; font-weight: 500; transition: 0.2s; }
.pill-links a:hover { background: #f8fafc; color: #0f172a; }
.pill-links a.active { background: #0f172a; color: #fff; }
.pill-login { text-decoration: none; color: #3b82f6; font-weight: 600; font-size: 0.95rem; padding: 8px 16px; }
@media (max-width: 600px) { .pill-links { display: none; } }`,
    jsCode: ``
  },

  // 9. Split Border Nav
  {
    _id: "nav9",
    title: "Split Border Nav",
    slug: "split-border-nav",
    description: "Items separated by vertical borders for an editorial look.",
    category: "Navigation Bars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["navbar", "editorial", "borders", "split"],
    isPremium: false,
    views: 37800,
    downloads: 9600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nav-sp">
  <div class="sp-logo">THE JOURNAL</div>
  <div class="sp-group">
    <a href="#">Culture</a>
    <a href="#">Design</a>
    <a href="#">Tech</a>
  </div>
  <div class="sp-right">
    <a href="#">Subscribe</a>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Georgia', serif; background: #fafafa; }
.nav-sp { display: flex; height: 70px; border-bottom: 1px solid #ddd; background: #fff; }
.sp-logo { flex: 0 0 250px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: bold; letter-spacing: 2px; border-right: 1px solid #ddd; color: #111; }
.sp-group { flex: 1; display: flex; }
.sp-group a { flex: 1; display: flex; align-items: center; justify-content: center; text-decoration: none; color: #555; font-size: 0.9rem; letter-spacing: 1px; border-right: 1px solid #ddd; text-transform: uppercase; transition: 0.2s; }
.sp-group a:hover { background: #f4f4f4; color: #000; }
.sp-right { flex: 0 0 150px; display: flex; }
.sp-right a { width: 100%; display: flex; align-items: center; justify-content: center; text-decoration: none; color: #000; font-weight: bold; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; background: #fff; transition: 0.2s; }
.sp-right a:hover { background: #000; color: #fff; }
@media (max-width: 768px) { .sp-group { display: none; } .sp-logo { flex: 1; border-right: none; } }`,
    jsCode: ``
  },

  // 10. Icon-Only Side Nav
  {
    _id: "nav10",
    title: "Icon Side Nav",
    slug: "icon-side-nav",
    description: "Vertical sidebar navigation perfect for dashboards.",
    category: "Navigation Bars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["navbar", "sidebar", "dashboard", "vertical"],
    isPremium: true,
    views: 45400,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="nav-sd-wrap">
  <nav class="nav-sd">
    <div class="sd-top">
      <a href="#" class="sd-logo">Y</a>
    </div>
    <div class="sd-mid">
      <a href="#" class="sd-icon active" title="Home">H</a>
      <a href="#" class="sd-icon" title="Projects">P</a>
      <a href="#" class="sd-icon" title="Analytics">A</a>
      <a href="#" class="sd-icon" title="Settings">S</a>
    </div>
    <div class="sd-bot">
      <a href="#" class="sd-profile"><img src="https://i.pravatar.cc/100?u=1" alt="User"/></a>
    </div>
  </nav>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; }
.nav-sd-wrap { display: flex; height: 100vh; }
.nav-sd { width: 80px; background: #fff; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; justify-content: space-between; padding: 20px 0; align-items: center; }
.sd-logo { width: 40px; height: 40px; background: #0f172a; color: #fff; display: flex; justify-content: center; align-items: center; border-radius: 10px; font-weight: bold; font-size: 1.2rem; text-decoration: none; margin-bottom: 20px; }
.sd-mid { display: flex; flex-direction: column; gap: 20px; }
.sd-icon { width: 48px; height: 48px; display: flex; justify-content: center; align-items: center; border-radius: 12px; text-decoration: none; color: #64748b; font-weight: bold; font-size: 1.2rem; transition: 0.2s; }
.sd-icon:hover { background: #f8fafc; color: #3b82f6; }
.sd-icon.active { background: #eff6ff; color: #2563eb; }
.sd-profile img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #e2e8f0; transition: border-color 0.2s; }
.sd-profile:hover img { border-color: #3b82f6; }`,
    jsCode: ``
  }
];
