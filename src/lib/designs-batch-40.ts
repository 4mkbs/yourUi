import { Design } from "./designs-data";

export const BATCH_40_DESIGNS: Design[] = [
  // 1. Classic Dropdown
  {
    _id: "dd1",
    title: "Classic Dropdown Menu",
    slug: "classic-dropdown-menu",
    description: "A standard clean hover dropdown menu with smooth transitions.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["dropdown", "menu", "classic", "clean"],
    isPremium: false,
    views: 21500,
    downloads: 6400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dd-classic-wrap">
  <button class="dd-classic-btn">Options ▾</button>
  <div class="dd-classic-menu">
    <a href="#">Profile</a>
    <a href="#">Settings</a>
    <a href="#">Help Center</a>
    <div class="dd-divider"></div>
    <a href="#" class="dd-danger">Logout</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.dd-classic-wrap { position: relative; display: inline-block; }
.dd-classic-btn { padding: 10px 20px; background: #fff; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer; color: #334155; font-weight: 500; font-size: 1rem; transition: 0.2s; }
.dd-classic-wrap:hover .dd-classic-btn { background: #f1f5f9; border-color: #94a3b8; }
.dd-classic-menu { position: absolute; top: 100%; left: 0; margin-top: 8px; width: 200px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); opacity: 0; visibility: hidden; transform: translateY(-10px); transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 10; display: flex; flex-direction: column; overflow: hidden; }
.dd-classic-wrap:hover .dd-classic-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.dd-classic-menu a { padding: 12px 16px; color: #475569; text-decoration: none; font-size: 0.9rem; transition: 0.2s; }
.dd-classic-menu a:hover { background: #f8fafc; color: #0f172a; }
.dd-divider { height: 1px; background: #e2e8f0; margin: 4px 0; }
.dd-classic-menu .dd-danger { color: #ef4444; }
.dd-classic-menu .dd-danger:hover { background: #fef2f2; color: #dc2626; }`,
    jsCode: ``
  },

  // 2. Card Dropdown
  {
    _id: "dd2",
    title: "Card Rich Dropdown",
    slug: "card-rich-dropdown",
    description: "A dropdown featuring icons and descriptions for richer navigation.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["dropdown", "rich", "card", "icons"],
    isPremium: true,
    views: 18200,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dd-card-wrap">
  <button class="dd-card-btn">Solutions</button>
  <div class="dd-card-menu">
    <a href="#" class="dd-item">
      <span class="dd-icon">🚀</span>
      <div>
        <strong>Startup Plan</strong>
        <span>For new businesses</span>
      </div>
    </a>
    <a href="#" class="dd-item">
      <span class="dd-icon">🏢</span>
      <div>
        <strong>Enterprise</strong>
        <span>Advanced security features</span>
      </div>
    </a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.dd-card-wrap { position: relative; display: inline-block; }
.dd-card-btn { padding: 12px 24px; background: #3b82f6; border: none; border-radius: 8px; cursor: pointer; color: #fff; font-weight: 600; font-size: 1rem; transition: 0.2s; }
.dd-card-menu { position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(10px); margin-top: 10px; width: 300px; background: #fff; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); opacity: 0; visibility: hidden; transition: 0.3s; z-index: 10; padding: 10px; border: 1px solid #e2e8f0; pointer-events: none; }
.dd-card-wrap:hover .dd-card-menu { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); pointer-events: auto; }
.dd-item { display: flex; align-items: center; gap: 15px; padding: 15px; color: #334155; text-decoration: none; border-radius: 8px; transition: 0.2s; }
.dd-item:hover { background: #f8fafc; }
.dd-icon { font-size: 24px; background: #e0e7ff; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; border-radius: 8px; }
.dd-item div { display: flex; flex-direction: column; }
.dd-item strong { font-size: 0.95rem; color: #0f172a; }
.dd-item span { font-size: 0.8rem; color: #64748b; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Dropdown
  {
    _id: "dd3",
    title: "Cyberpunk Dropdown",
    slug: "cyberpunk-dropdown",
    description: "Neon colors, dashed borders, and terminal-style hover effects.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["dropdown", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 16500,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dd-cy-wrap">
  <button class="dd-cy-btn">SERVER_LINK</button>
  <div class="dd-cy-menu">
    <a href="#">> NODE_01</a>
    <a href="#">> NODE_02</a>
    <a href="#">> SYS_ADMIN</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.dd-cy-wrap { position: relative; display: inline-block; }
.dd-cy-btn { padding: 10px 20px; background: transparent; border: 1px solid #0ff; color: #0ff; cursor: pointer; font-weight: bold; letter-spacing: 2px; }
.dd-cy-menu { position: absolute; top: 100%; left: 0; width: 200px; background: rgba(0, 20, 20, 0.9); border: 1px dashed #0ff; margin-top: 5px; opacity: 0; visibility: hidden; transition: 0.2s; box-shadow: 0 0 15px rgba(0,255,255,0.2); }
.dd-cy-wrap:hover .dd-cy-menu { opacity: 1; visibility: visible; }
.dd-cy-menu a { display: block; padding: 12px 15px; color: #ccc; text-decoration: none; font-size: 0.9rem; transition: 0.2s; border-bottom: 1px dashed #333; }
.dd-cy-menu a:last-child { border-bottom: none; }
.dd-cy-menu a:hover { color: #0ff; background: rgba(0,255,255,0.1); text-shadow: 0 0 5px #0ff; padding-left: 25px; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Dropdown
  {
    _id: "dd4",
    title: "Glassmorphism Dropdown",
    slug: "glassmorphism-dropdown",
    description: "Frosted glass menu floating over a colorful gradient background.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["dropdown", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 19800,
    downloads: 5700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="dd-gl-wrap">
    <button class="dd-gl-btn">Filter</button>
    <div class="dd-gl-menu">
      <a href="#">Popular</a>
      <a href="#">Newest</a>
      <a href="#">Trending</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; box-sizing: border-box; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.dd-gl-wrap { position: relative; display: inline-block; }
.dd-gl-btn { padding: 12px 24px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.4); border-radius: 30px; color: #fff; font-weight: bold; cursor: pointer; transition: 0.3s; }
.dd-gl-menu { position: absolute; top: 100%; left: 0; margin-top: 10px; width: 180px; background: rgba(255,255,255,0.15); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3); border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); opacity: 0; visibility: hidden; transform: translateY(-10px); transition: 0.3s; overflow: hidden; }
.dd-gl-wrap:hover .dd-gl-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.dd-gl-menu a { display: block; padding: 12px 20px; color: #fff; text-decoration: none; font-size: 0.9rem; transition: 0.2s; border-bottom: 1px solid rgba(255,255,255,0.1); }
.dd-gl-menu a:last-child { border-bottom: none; }
.dd-gl-menu a:hover { background: rgba(255,255,255,0.2); }`,
    jsCode: ``
  },

  // 5. Brutalist Dropdown
  {
    _id: "dd5",
    title: "Brutalist Dropdown",
    slug: "brutalist-dropdown",
    description: "Thick borders, high contrast, and offset shadows for a bold look.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["dropdown", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 12100,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dd-br-wrap">
  <button class="dd-br-btn">MENU</button>
  <div class="dd-br-menu">
    <a href="#">INDEX</a>
    <a href="#">ABOUT</a>
    <a href="#">CONTACT</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.dd-br-wrap { position: relative; display: inline-block; }
.dd-br-btn { padding: 15px 30px; background: #facc15; border: 4px solid #000; color: #000; font-weight: 900; font-size: 1.1rem; cursor: pointer; box-shadow: 4px 4px 0 #000; transition: 0.1s; text-transform: uppercase; }
.dd-br-wrap:hover .dd-br-btn { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #000; }
.dd-br-menu { position: absolute; top: 100%; left: 0; margin-top: 15px; width: 200px; background: #fff; border: 4px solid #000; box-shadow: 6px 6px 0 #000; display: none; flex-direction: column; }
.dd-br-wrap:hover .dd-br-menu { display: flex; }
.dd-br-menu a { padding: 15px; color: #000; text-decoration: none; font-weight: bold; border-bottom: 4px solid #000; transition: 0.1s; }
.dd-br-menu a:last-child { border-bottom: none; }
.dd-br-menu a:hover { background: #000; color: #fff; }`,
    jsCode: ``
  },

  // 6. Neumorphic Dropdown
  {
    _id: "dd6",
    title: "Neumorphic Dropdown",
    slug: "neumorphic-dropdown",
    description: "Soft UI button that reveals a floating extruded menu on hover.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["dropdown", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 13600,
    downloads: 3400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dd-neu-wrap">
  <button class="dd-neu-btn">Account</button>
  <div class="dd-neu-menu">
    <a href="#">Details</a>
    <a href="#">Billing</a>
    <a href="#">Security</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.dd-neu-wrap { position: relative; display: inline-block; }
.dd-neu-btn { padding: 12px 24px; background: #e0e5ec; border: none; border-radius: 8px; color: #4a5568; font-weight: bold; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.dd-neu-wrap:hover .dd-neu-btn { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); color: #3182ce; }
.dd-neu-menu { position: absolute; top: 100%; left: 0; margin-top: 15px; width: 180px; background: #e0e5ec; border-radius: 8px; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); opacity: 0; visibility: hidden; transition: 0.3s; overflow: hidden; display: flex; flex-direction: column; }
.dd-neu-wrap:hover .dd-neu-menu { opacity: 1; visibility: visible; }
.dd-neu-menu a { padding: 12px 20px; color: #718096; text-decoration: none; font-size: 0.9rem; transition: 0.2s; font-weight: 500; }
.dd-neu-menu a:hover { background: #cbd5e0; color: #2d3748; }`,
    jsCode: ``
  },

  // 7. Minimal Line Dropdown
  {
    _id: "dd7",
    title: "Minimal Line Dropdown",
    slug: "minimal-line-dropdown",
    description: "Clean, ultra-minimal dropdown with an animated underline indicator.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["dropdown", "minimal", "line", "clean"],
    isPremium: false,
    views: 15900,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dd-min-wrap">
  <button class="dd-min-btn">Categories</button>
  <div class="dd-min-menu">
    <a href="#">Technology</a>
    <a href="#">Design</a>
    <a href="#">Business</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.dd-min-wrap { position: relative; display: inline-block; }
.dd-min-btn { padding: 10px 0; background: transparent; border: none; color: #0f172a; font-weight: 600; font-size: 1rem; cursor: pointer; position: relative; }
.dd-min-btn::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: #0f172a; transition: 0.3s; }
.dd-min-wrap:hover .dd-min-btn::after { width: 100%; }
.dd-min-menu { position: absolute; top: 100%; left: 0; padding-top: 15px; width: 150px; opacity: 0; visibility: hidden; transition: 0.2s; display: flex; flex-direction: column; gap: 10px; }
.dd-min-wrap:hover .dd-min-menu { opacity: 1; visibility: visible; }
.dd-min-menu a { color: #64748b; text-decoration: none; font-size: 0.9rem; transition: 0.2s; }
.dd-min-menu a:hover { color: #3b82f6; transform: translateX(5px); }`,
    jsCode: ``
  },

  // 8. Dark Mode Dropdown
  {
    _id: "dd8",
    title: "Dark Mode Dropdown",
    slug: "dark-mode-dropdown",
    description: "Elegant slate dark theme dropdown with subtle hover highlights.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["dropdown", "dark", "elegant", "sleek"],
    isPremium: true,
    views: 18400,
    downloads: 5200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dd-dk-wrap">
  <button class="dd-dk-btn">Actions</button>
  <div class="dd-dk-menu">
    <a href="#">Edit Post</a>
    <a href="#">Share Link</a>
    <a href="#">Delete</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #0f172a; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.dd-dk-wrap { position: relative; display: inline-block; }
.dd-dk-btn { padding: 10px 20px; background: #1e293b; border: 1px solid #334155; border-radius: 6px; color: #f8fafc; font-weight: 500; font-size: 0.95rem; cursor: pointer; transition: 0.2s; }
.dd-dk-wrap:hover .dd-dk-btn { background: #334155; }
.dd-dk-menu { position: absolute; top: 100%; right: 0; margin-top: 10px; width: 180px; background: #1e293b; border: 1px solid #334155; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); opacity: 0; visibility: hidden; transform: scale(0.95); transform-origin: top right; transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); display: flex; flex-direction: column; overflow: hidden; padding: 5px; }
.dd-dk-wrap:hover .dd-dk-menu { opacity: 1; visibility: visible; transform: scale(1); }
.dd-dk-menu a { padding: 10px 15px; color: #cbd5e1; text-decoration: none; font-size: 0.9rem; transition: 0.2s; border-radius: 4px; }
.dd-dk-menu a:hover { background: #334155; color: #fff; }`,
    jsCode: ``
  },

  // 9. Side Reveal Dropdown
  {
    _id: "dd9",
    title: "Side Reveal Menu",
    slug: "side-reveal-menu",
    description: "Instead of dropping down, the menu slides out horizontally to the right.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["dropdown", "side", "slide", "creative"],
    isPremium: false,
    views: 14700,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dd-side-wrap">
  <button class="dd-side-btn">More ◂</button>
  <div class="dd-side-menu">
    <a href="#">Export</a>
    <a href="#">Import</a>
    <a href="#">Print</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.dd-side-wrap { position: relative; display: inline-block; }
.dd-side-btn { padding: 12px 24px; background: #0f172a; border: none; border-radius: 30px; color: #fff; font-weight: 600; cursor: pointer; transition: 0.2s; position: relative; z-index: 2; }
.dd-side-menu { position: absolute; top: 0; left: 100%; height: 100%; background: #e2e8f0; border-radius: 0 30px 30px 0; display: flex; align-items: center; padding: 0 20px 0 30px; margin-left: -20px; opacity: 0; visibility: hidden; transform: translateX(-20px); transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 1; gap: 15px; }
.dd-side-wrap:hover .dd-side-menu { opacity: 1; visibility: visible; transform: translateX(0); }
.dd-side-menu a { color: #334155; text-decoration: none; font-size: 0.85rem; font-weight: 500; transition: 0.2s; white-space: nowrap; }
.dd-side-menu a:hover { color: #3b82f6; }`,
    jsCode: ``
  },

  // 10. Gradient Button Dropdown
  {
    _id: "dd10",
    title: "Gradient Button Dropdown",
    slug: "gradient-button-dropdown",
    description: "A colorful gradient button that reveals a sleek floating menu.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["dropdown", "gradient", "colorful", "modern"],
    isPremium: true,
    views: 17900,
    downloads: 4900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dd-grad-wrap">
  <button class="dd-grad-btn">Discover</button>
  <div class="dd-grad-menu">
    <a href="#">UI Kits</a>
    <a href="#">Templates</a>
    <a href="#">Icons</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.dd-grad-wrap { position: relative; display: inline-block; }
.dd-grad-btn { padding: 12px 25px; background: linear-gradient(135deg, #f43f5e, #8b5cf6); border: none; border-radius: 8px; color: #fff; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(244, 63, 94, 0.3); transition: 0.2s; }
.dd-grad-wrap:hover .dd-grad-btn { box-shadow: 0 6px 15px rgba(244, 63, 94, 0.4); transform: translateY(-2px); }
.dd-grad-menu { position: absolute; top: 100%; left: 0; margin-top: 15px; width: 160px; background: #fff; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); opacity: 0; visibility: hidden; transition: 0.3s; display: flex; flex-direction: column; overflow: hidden; }
.dd-grad-wrap:hover .dd-grad-menu { opacity: 1; visibility: visible; margin-top: 10px; }
.dd-grad-menu a { padding: 12px 20px; color: #475569; text-decoration: none; font-size: 0.9rem; transition: 0.2s; border-left: 3px solid transparent; }
.dd-grad-menu a:hover { background: #f8fafc; color: #8b5cf6; border-left-color: #8b5cf6; }`,
    jsCode: ``
  }
];
