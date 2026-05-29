import { Design } from "./designs-data";

export const BATCH_24_DESIGNS: Design[] = [
  // 1. Classic Underline Tabs
  {
    _id: "tb1",
    title: "Classic Underline Tabs",
    slug: "classic-underline-tabs",
    description: "A clean, ubiquitous tab design using a sliding underline for the active state.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["tabs", "classic", "underline", "clean"],
    isPremium: false,
    views: 18400,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cl-tabs-wrapper">
  <div class="cl-tabs">
    <button class="cl-tab active">Overview</button>
    <button class="cl-tab">Activity</button>
    <button class="cl-tab">Settings</button>
    <button class="cl-tab">Billing</button>
  </div>
  <div class="cl-content">
    <p>Select a tab to view its content.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f9fafb; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.cl-tabs-wrapper { width: 100%; max-width: 600px; background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.cl-tabs { display: flex; border-bottom: 2px solid #e5e7eb; gap: 30px; }
.cl-tab { background: none; border: none; padding: 0 0 15px 0; font-size: 1rem; font-weight: 500; color: #6b7280; cursor: pointer; position: relative; transition: color 0.2s; }
.cl-tab:hover { color: #111827; }
.cl-tab.active { color: #3b82f6; }
.cl-tab.active::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: #3b82f6; }
.cl-content { padding: 30px 0 0 0; color: #4b5563; }`,
    jsCode: ``
  },

  // 2. Pill Segmented Control
  {
    _id: "tb2",
    title: "Pill Segmented Control",
    slug: "pill-segmented-control",
    description: "A modern pill-shaped container holding rounded tabs, commonly found in iOS interfaces.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["tabs", "pill", "segmented", "ios"],
    isPremium: false,
    views: 15200,
    downloads: 4300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pill-tabs-wrapper">
  <div class="pill-tabs">
    <button class="pill-tab active">Monthly</button>
    <button class="pill-tab">Annually <span class="badge">-20%</span></button>
    <button class="pill-tab">Lifetime</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.pill-tabs-wrapper { width: 100%; max-width: 500px; display: flex; justify-content: center; }
.pill-tabs { display: inline-flex; background: #e2e8f0; padding: 6px; border-radius: 40px; }
.pill-tab { background: transparent; border: none; padding: 12px 24px; font-size: 0.95rem; font-weight: 600; color: #64748b; border-radius: 30px; cursor: pointer; transition: 0.3s; display: flex; align-items: center; gap: 8px; }
.pill-tab:hover { color: #0f172a; }
.pill-tab.active { background: #fff; color: #0f172a; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
.badge { background: #10b981; color: #fff; font-size: 0.7rem; padding: 2px 6px; border-radius: 10px; font-weight: bold; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Glitch Tabs
  {
    _id: "tb3",
    title: "Cyberpunk Glitch Tabs",
    slug: "cyberpunk-glitch-tabs",
    description: "Neon, dark, and highly stylized tabs suited for gaming or hacker themes.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["tabs", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 12800,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cy-tabs-wrapper">
  <div class="cy-tabs">
    <button class="cy-tab active">[ ARMORY ]</button>
    <button class="cy-tab">[ UPGRADES ]</button>
    <button class="cy-tab">[ MISSIONS ]</button>
  </div>
  <div class="cy-content">
    > AWAITING COMMAND...
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.cy-tabs-wrapper { width: 100%; max-width: 600px; border: 1px solid #333; background: #0a0a0a; position: relative; }
.cy-tabs { display: flex; border-bottom: 1px dashed #0ff; background: #000; }
.cy-tab { flex: 1; background: transparent; border: none; border-right: 1px dashed #333; padding: 15px 0; font-family: 'Courier New', Courier, monospace; font-size: 1.1rem; color: #666; cursor: pointer; transition: 0.2s; font-weight: bold; }
.cy-tab:last-child { border-right: none; }
.cy-tab:hover { color: #f0f; text-shadow: 0 0 5px #f0f; }
.cy-tab.active { background: rgba(0,255,255,0.1); color: #0ff; text-shadow: 0 0 5px #0ff; border-bottom: 2px solid #0ff; }
.cy-content { padding: 30px; color: #0ff; font-size: 1.2rem; min-height: 150px; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Tabs
  {
    _id: "tb4",
    title: "Glassmorphism Tabs",
    slug: "glassmorphism-tabs",
    description: "Frosted glass tabs floating over a vibrant, animated gradient background.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["tabs", "glassmorphism", "gradient", "modern"],
    isPremium: true,
    views: 14900,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-tabs-bg">
  <div class="gl-tabs-wrapper">
    <div class="gl-tabs">
      <button class="gl-tab active">Projects</button>
      <button class="gl-tab">Shared</button>
      <button class="gl-tab">Archive</button>
    </div>
    <div class="gl-content">
      <p>Beautiful, frosted UI elements.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.glass-tabs-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; padding: 20px; box-sizing: border-box; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gl-tabs-wrapper { width: 100%; max-width: 600px; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
.gl-tabs { display: flex; border-bottom: 1px solid rgba(255,255,255,0.2); }
.gl-tab { flex: 1; background: rgba(255,255,255,0.05); border: none; padding: 20px 0; color: rgba(255,255,255,0.7); font-size: 1rem; font-weight: 600; cursor: pointer; transition: 0.3s; }
.gl-tab:hover { background: rgba(255,255,255,0.1); color: #fff; }
.gl-tab.active { background: rgba(255,255,255,0.2); color: #fff; border-bottom: 2px solid #fff; }
.gl-content { padding: 40px; color: #fff; text-align: center; }`,
    jsCode: ``
  },

  // 5. Brutalist Block Tabs
  {
    _id: "tb5",
    title: "Brutalist Block Tabs",
    slug: "brutalist-block-tabs",
    description: "Thick borders, massive typography, and high contrast hard shadows.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["tabs", "brutalist", "block", "bold"],
    isPremium: false,
    views: 11500,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="br-tabs-wrapper">
  <div class="br-tabs">
    <button class="br-tab active">READ</button>
    <button class="br-tab">WATCH</button>
    <button class="br-tab">LISTEN</button>
  </div>
  <div class="br-content">
    <h2>LOUD NOISES.</h2>
    <p>Select your medium above.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.br-tabs-wrapper { width: 100%; max-width: 600px; }
.br-tabs { display: flex; gap: 10px; margin-bottom: 20px; }
.br-tab { flex: 1; background: #fff; border: 4px solid #000; padding: 15px 0; font-size: 1.5rem; font-weight: 900; color: #000; cursor: pointer; transition: 0.1s; box-shadow: 6px 6px 0 #000; }
.br-tab:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 #000; }
.br-tab.active { background: #facc15; box-shadow: 0 0 0 #000; transform: translate(6px, 6px); }
.br-content { background: #fff; border: 6px solid #000; padding: 40px; box-shadow: 12px 12px 0 #000; }
.br-content h2 { margin: 0 0 10px 0; font-size: 3rem; font-weight: 900; text-transform: uppercase; line-height: 1; }
.br-content p { font-size: 1.2rem; font-weight: bold; margin: 0; }`,
    jsCode: ``
  },

  // 6. Neumorphic Soft Tabs
  {
    _id: "tb6",
    title: "Neumorphic Soft Tabs",
    slug: "neumorphic-soft-tabs",
    description: "Soft UI tabs where the active state presses into the background.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["tabs", "neumorphism", "soft", "ui"],
    isPremium: false,
    views: 9800,
    downloads: 2700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-tabs-wrapper">
  <div class="neu-tabs">
    <button class="neu-tab active">Daily</button>
    <button class="neu-tab">Weekly</button>
    <button class="neu-tab">Monthly</button>
  </div>
  <div class="neu-content">
    <div class="neu-card">Stats go here</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.neu-tabs-wrapper { width: 100%; max-width: 500px; }
.neu-tabs { display: flex; gap: 20px; margin-bottom: 40px; justify-content: center; }
.neu-tab { background: #e0e5ec; border: none; padding: 15px 30px; border-radius: 15px; font-size: 1rem; font-weight: bold; color: #a0aec0; cursor: pointer; transition: 0.3s; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); }
.neu-tab:hover { color: #4299e1; }
.neu-tab.active { color: #4299e1; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5); }
.neu-content { background: #e0e5ec; border-radius: 20px; padding: 40px; text-align: center; color: #718096; font-weight: bold; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Minimalist Vertical Tabs
  {
    _id: "tb7",
    title: "Minimalist Vertical Tabs",
    slug: "minimalist-vertical-tabs",
    description: "Vertical layout for settings pages, placing tabs on the left and content on the right.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["tabs", "vertical", "minimalist", "settings"],
    isPremium: true,
    views: 13200,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="vert-tabs-wrapper">
  <div class="vert-tabs">
    <button class="vert-tab active">General</button>
    <button class="vert-tab">Security</button>
    <button class="vert-tab">Notifications</button>
    <button class="vert-tab">Integrations</button>
  </div>
  <div class="vert-content">
    <h3>General Settings</h3>
    <p>Manage your account details and preferences.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.vert-tabs-wrapper { width: 100%; max-width: 800px; display: flex; background: #fff; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); min-height: 400px; overflow: hidden; }
.vert-tabs { width: 250px; background: #f1f5f9; padding: 30px 0; display: flex; flex-direction: column; }
.vert-tab { background: transparent; border: none; text-align: left; padding: 15px 30px; font-size: 1rem; font-weight: 500; color: #64748b; cursor: pointer; transition: 0.2s; position: relative; }
.vert-tab:hover { color: #0f172a; background: rgba(0,0,0,0.02); }
.vert-tab.active { color: #3b82f6; font-weight: 600; background: #fff; }
.vert-tab.active::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #3b82f6; }
.vert-content { flex: 1; padding: 40px; }
.vert-content h3 { margin: 0 0 10px 0; font-size: 1.5rem; color: #0f172a; }
.vert-content p { margin: 0; color: #64748b; }
@media (max-width: 600px) { .vert-tabs-wrapper { flex-direction: column; } .vert-tabs { width: 100%; flex-direction: row; overflow-x: auto; padding: 0; border-bottom: 1px solid #e2e8f0; } .vert-tab { padding: 15px; white-space: nowrap; } .vert-tab.active::before { top: auto; bottom: 0; width: 100%; height: 4px; } }`,
    jsCode: ``
  },

  // 8. Folder-Style Tabs
  {
    _id: "tb8",
    title: "Folder-Style Tabs",
    slug: "folder-style-tabs",
    description: "Classic skeuomorphic design resembling manila folders.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["tabs", "folder", "classic", "skeuomorphic"],
    isPremium: false,
    views: 10100,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="folder-wrapper">
  <div class="folder-tabs">
    <button class="folder-tab active">Inbox</button>
    <button class="folder-tab">Sent</button>
    <button class="folder-tab">Drafts</button>
  </div>
  <div class="folder-content">
    <p>Inbox content goes here.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e5e7eb; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.folder-wrapper { width: 100%; max-width: 600px; }
.folder-tabs { display: flex; padding-left: 10px; margin-bottom: -1px; position: relative; z-index: 1; }
.folder-tab { background: #d1d5db; border: 1px solid #9ca3af; border-bottom: none; padding: 12px 25px; border-radius: 8px 8px 0 0; font-size: 0.95rem; font-weight: 600; color: #4b5563; cursor: pointer; margin-right: 5px; transition: 0.2s; }
.folder-tab:hover { background: #e5e7eb; }
.folder-tab.active { background: #fff; color: #111827; border-color: #9ca3af; padding-bottom: 13px; margin-bottom: -1px; }
.folder-content { background: #fff; border: 1px solid #9ca3af; border-radius: 4px; padding: 30px; position: relative; z-index: 0; min-height: 200px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }`,
    jsCode: ``
  },

  // 9. Floating Segmented Control
  {
    _id: "tb9",
    title: "Floating Pill Container",
    slug: "floating-pill-container",
    description: "A dark theme floating pill that visually indicates the active tab.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["tabs", "floating", "dark", "pill"],
    isPremium: true,
    views: 12400,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="float-tabs-bg">
  <div class="float-tabs">
    <button class="float-tab active">Code</button>
    <button class="float-tab">Issues</button>
    <button class="float-tab">Pull Requests</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #111827; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.float-tabs { background: #1f2937; padding: 8px; border-radius: 50px; display: inline-flex; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
.float-tab { background: transparent; border: none; padding: 12px 25px; color: #9ca3af; font-size: 0.95rem; font-weight: 600; cursor: pointer; border-radius: 40px; transition: 0.3s; }
.float-tab:hover { color: #fff; }
.float-tab.active { background: #3b82f6; color: #fff; box-shadow: 0 4px 15px rgba(59,130,246,0.4); }`,
    jsCode: ``
  },

  // 10. Icon-Only Minimal Tabs
  {
    _id: "tb10",
    title: "Icon-Only Tabs",
    slug: "icon-only-tabs",
    description: "A minimal space-saving design using icons and small indicators.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["tabs", "icons", "minimal", "clean"],
    isPremium: false,
    views: 11800,
    downloads: 3300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="icon-tabs-wrapper">
  <div class="icon-tabs">
    <button class="icon-tab active" title="List View">☰</button>
    <button class="icon-tab" title="Grid View">⊞</button>
    <button class="icon-tab" title="Map View">◷</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f4f4f5; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.icon-tabs-wrapper { background: #fff; padding: 10px 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.icon-tabs { display: flex; gap: 20px; }
.icon-tab { background: transparent; border: none; font-size: 1.5rem; color: #a1a1aa; cursor: pointer; padding: 10px; position: relative; transition: 0.3s; }
.icon-tab:hover { color: #18181b; }
.icon-tab.active { color: #18181b; }
.icon-tab.active::after { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 6px; height: 6px; background: #3b82f6; border-radius: 50%; }`,
    jsCode: ``
  }
];
