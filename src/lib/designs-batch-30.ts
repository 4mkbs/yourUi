import { Design } from "./designs-data";

export const BATCH_30_DESIGNS: Design[] = [
  // 1. Classic Slash Breadcrumbs
  {
    _id: "bc1",
    title: "Classic Slash Breadcrumb",
    slug: "classic-slash-breadcrumb",
    description: "The standard breadcrumb navigation separated by slashes, commonly seen on SaaS platforms.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["breadcrumb", "classic", "slash", "clean"],
    isPremium: false,
    views: 14500,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-classic">
  <ol>
    <li><a href="#">Home</a></li>
    <li class="separator">/</li>
    <li><a href="#">Products</a></li>
    <li class="separator">/</li>
    <li class="active">Electronics</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-classic ol { display: flex; list-style: none; padding: 0; margin: 0; background: #fff; padding: 12px 24px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.bc-classic li { font-size: 0.9rem; font-weight: 500; color: #64748b; }
.bc-classic a { color: #3b82f6; text-decoration: none; transition: 0.2s; }
.bc-classic a:hover { color: #1e3a8a; text-decoration: underline; }
.bc-classic .separator { margin: 0 10px; color: #cbd5e1; }
.bc-classic .active { color: #0f172a; font-weight: 600; }`,
    jsCode: ``
  },

  // 2. Chevron Breadcrumbs
  {
    _id: "bc2",
    title: "Chevron Breadcrumbs",
    slug: "chevron-breadcrumbs",
    description: "Breadcrumbs utilizing right-facing chevrons for a stronger sense of direction.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["breadcrumb", "chevron", "navigation", "clean"],
    isPremium: false,
    views: 13200,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-chevron">
  <a href="#" class="bc-link">Dashboard</a>
  <svg class="bc-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
  <a href="#" class="bc-link">Settings</a>
  <svg class="bc-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
  <span class="bc-active">Security</span>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-chevron { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; }
.bc-link { color: #6b7280; text-decoration: none; font-weight: 500; transition: 0.2s; padding: 4px 8px; border-radius: 6px; }
.bc-link:hover { background: #f3f4f6; color: #111827; }
.bc-icon { width: 14px; height: 14px; color: #9ca3af; }
.bc-active { color: #111827; font-weight: 600; padding: 4px 8px; }`,
    jsCode: ``
  },

  // 3. Background Pill Breadcrumbs
  {
    _id: "bc3",
    title: "Background Pill Breadcrumb",
    slug: "background-pill-breadcrumb",
    description: "Each item is enclosed in its own distinct pill-shaped background.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["breadcrumb", "pill", "background", "modern"],
    isPremium: false,
    views: 15600,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-pill">
  <a href="#" class="pill-link">Apps</a>
  <span class="pill-sep">-</span>
  <a href="#" class="pill-link">Design Tools</a>
  <span class="pill-sep">-</span>
  <span class="pill-active">Figma</span>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-pill { display: flex; align-items: center; gap: 6px; }
.pill-link { padding: 6px 14px; background: #e5e7eb; color: #4b5563; text-decoration: none; font-size: 0.85rem; font-weight: 600; border-radius: 20px; transition: 0.2s; }
.pill-link:hover { background: #d1d5db; color: #1f2937; }
.pill-sep { color: #9ca3af; font-weight: bold; margin: 0 4px; }
.pill-active { padding: 6px 14px; background: #2563eb; color: #fff; font-size: 0.85rem; font-weight: 600; border-radius: 20px; box-shadow: 0 4px 10px rgba(37,99,235,0.3); }`,
    jsCode: ``
  },

  // 4. Minimalist Underline Breadcrumbs
  {
    _id: "bc4",
    title: "Minimal Underline Breadcrumb",
    slug: "minimal-underline-breadcrumb",
    description: "A super clean design that relies on animated underlines for interaction.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["breadcrumb", "minimal", "underline", "clean"],
    isPremium: false,
    views: 12400,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-under">
  <a href="#" class="u-link">Store</a>
  <span class="u-sep">/</span>
  <a href="#" class="u-link">Men</a>
  <span class="u-sep">/</span>
  <span class="u-active">Sneakers</span>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-under { display: flex; align-items: center; font-size: 0.95rem; }
.u-link { position: relative; color: #71717a; text-decoration: none; font-weight: 500; transition: color 0.3s; }
.u-link::after { content: ''; position: absolute; width: 100%; transform: scaleX(0); height: 2px; bottom: -2px; left: 0; background-color: #18181b; transform-origin: bottom right; transition: transform 0.25s ease-out; }
.u-link:hover { color: #18181b; }
.u-link:hover::after { transform: scaleX(1); transform-origin: bottom left; }
.u-sep { margin: 0 12px; color: #d4d4d8; font-weight: 300; }
.u-active { color: #18181b; font-weight: 700; border-bottom: 2px solid #18181b; }`,
    jsCode: ``
  },

  // 5. Cyberpunk Breadcrumbs
  {
    _id: "bc5",
    title: "Cyberpunk Breadcrumb",
    slug: "cyberpunk-breadcrumb",
    description: "Terminal-style breadcrumb with glowing neon accents.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["breadcrumb", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 14700,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-cyber">
  <a href="#" class="cy-link">ROOT</a>
  <span class="cy-sep">&gt;</span>
  <a href="#" class="cy-link">SYS</a>
  <span class="cy-sep">&gt;</span>
  <span class="cy-active">CONFIG.EXE</span>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-cyber { display: inline-flex; align-items: center; border: 1px solid #333; padding: 8px 15px; background: #0a0a0a; position: relative; }
.bc-cyber::before { content: ''; position: absolute; top: -2px; left: -2px; width: 8px; height: 8px; border-top: 2px solid #0ff; border-left: 2px solid #0ff; }
.cy-link { color: #666; text-decoration: none; font-weight: bold; transition: 0.2s; }
.cy-link:hover { color: #0ff; text-shadow: 0 0 5px #0ff; }
.cy-sep { color: #f0f; margin: 0 10px; font-weight: bold; text-shadow: 0 0 5px #f0f; }
.cy-active { color: #f0f; font-weight: bold; animation: blink 1s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }`,
    jsCode: ``
  },

  // 6. Glassmorphism Breadcrumbs
  {
    _id: "bc6",
    title: "Glassmorphism Breadcrumb",
    slug: "glassmorphism-breadcrumb",
    description: "Frosted glass nav floating over a vibrant, animated gradient background.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["breadcrumb", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 16900,
    downloads: 4500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bc-bg">
  <nav class="gl-bc">
    <a href="#" class="gl-link">Workspace</a>
    <span class="gl-sep">/</span>
    <a href="#" class="gl-link">Projects</a>
    <span class="gl-sep">/</span>
    <span class="gl-active">YourUI</span>
  </nav>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bc-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gl-bc { display: flex; align-items: center; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.3); padding: 12px 24px; border-radius: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.gl-link { color: rgba(255,255,255,0.7); text-decoration: none; font-weight: 500; transition: 0.3s; }
.gl-link:hover { color: #fff; text-shadow: 0 0 8px rgba(255,255,255,0.5); }
.gl-sep { margin: 0 12px; color: rgba(255,255,255,0.4); }
.gl-active { color: #fff; font-weight: 700; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 15px; }`,
    jsCode: ``
  },

  // 7. Neumorphic Breadcrumbs
  {
    _id: "bc7",
    title: "Neumorphic Breadcrumb",
    slug: "neumorphic-breadcrumb",
    description: "Soft UI breadcrumbs featuring extruded links and inset active states.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["breadcrumb", "neumorphism", "soft", "ui"],
    isPremium: false,
    views: 11800,
    downloads: 3000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="neu-bc">
  <a href="#" class="neu-link">Account</a>
  <span class="neu-sep">»</span>
  <a href="#" class="neu-link">Billing</a>
  <span class="neu-sep">»</span>
  <span class="neu-link neu-active">Invoices</span>
</nav>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.neu-bc { display: flex; align-items: center; gap: 8px; padding: 15px 25px; border-radius: 20px; background: #e0e5ec; box-shadow: 8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.5); }
.neu-link { padding: 8px 16px; border-radius: 12px; background: #e0e5ec; color: #718096; text-decoration: none; font-size: 0.9rem; font-weight: bold; transition: 0.2s; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); }
.neu-link:hover:not(.neu-active) { color: #4299e1; }
.neu-sep { color: #a0aec0; font-weight: bold; }
.neu-active { color: #4299e1; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 8. Brutalist Breadcrumbs
  {
    _id: "bc8",
    title: "Brutalist Breadcrumb",
    slug: "brutalist-breadcrumb",
    description: "Thick borders, heavy blocks, and high contrast colors.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["breadcrumb", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 10300,
    downloads: 2500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="br-bc">
  <a href="#" class="br-link bg-white">INDEX</a>
  <span class="br-sep">→</span>
  <a href="#" class="br-link bg-yellow">BLOG</a>
  <span class="br-sep">→</span>
  <span class="br-active">POST 42</span>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.br-bc { display: flex; align-items: center; gap: 10px; }
.br-link { padding: 8px 16px; border: 3px solid #000; color: #000; text-decoration: none; font-weight: 900; font-size: 1rem; box-shadow: 4px 4px 0 #000; transition: 0.1s; display: inline-block; }
.br-link:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #000; }
.br-link:active { transform: translate(4px, 4px); box-shadow: 0 0 0 #000; }
.bg-white { background: #fff; }
.bg-yellow { background: #facc15; }
.br-sep { font-weight: 900; font-size: 1.5rem; color: #000; }
.br-active { padding: 8px 16px; border: 3px solid #000; background: #000; color: #fff; font-weight: 900; box-shadow: 4px 4px 0 #ef4444; }`,
    jsCode: ``
  },

  // 9. Step Process Breadcrumbs
  {
    _id: "bc9",
    title: "Wizard Step Breadcrumb",
    slug: "wizard-step-breadcrumb",
    description: "Navigation that resembles a multi-step wizard, perfect for checkouts.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["breadcrumb", "wizard", "step", "checkout"],
    isPremium: true,
    views: 18400,
    downloads: 5000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="step-bc">
  <div class="step complete">Cart</div>
  <div class="step complete">Shipping</div>
  <div class="step active">Payment</div>
  <div class="step">Review</div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.step-bc { display: flex; align-items: center; background: #f1f5f9; padding: 8px; border-radius: 8px; }
.step { position: relative; padding: 10px 20px 10px 30px; font-size: 0.85rem; font-weight: 600; color: #64748b; background: #f1f5f9; transition: 0.3s; clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 10px 50%); margin-left: -10px; }
.step:first-child { padding-left: 20px; clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%); margin-left: 0; border-radius: 6px 0 0 6px; }
.step:last-child { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 10px 50%); border-radius: 0 6px 6px 0; }
.complete { background: #3b82f6; color: #fff; }
.active { background: #1e293b; color: #fff; z-index: 2; }`,
    jsCode: ``
  },

  // 10. Floating Context Breadcrumbs
  {
    _id: "bc10",
    title: "Floating Context Breadcrumb",
    slug: "floating-context-breadcrumb",
    description: "A detached, floating breadcrumb component designed for sticky headers.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["breadcrumb", "floating", "sticky", "clean"],
    isPremium: false,
    views: 16100,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="float-bc">
  <div class="f-icon">🏠</div>
  <span class="f-sep">/</span>
  <a href="#" class="f-link">Library</a>
  <span class="f-sep">/</span>
  <span class="f-active">Data</span>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.float-bc { display: inline-flex; align-items: center; background: #fff; padding: 10px 20px; border-radius: 50px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; }
.f-icon { font-size: 1rem; color: #64748b; }
.f-sep { margin: 0 10px; color: #cbd5e1; font-weight: 300; }
.f-link { color: #475569; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: 0.2s; }
.f-link:hover { color: #0f172a; }
.f-active { color: #0f172a; font-size: 0.9rem; font-weight: 600; background: #f1f5f9; padding: 4px 12px; border-radius: 20px; }`,
    jsCode: ``
  }
];
