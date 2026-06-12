import { Design } from "./designs-data";

export const BATCH_46_DESIGNS: Design[] = [
  // 1. Classic Collapsible Sidebar
  {
    _id: "sb1",
    title: "Classic Sidebar",
    slug: "classic-sidebar",
    description: "Standard clean sidebar with icons, text labels, and active states.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["sidebar", "classic", "menu", "dashboard"],
    isPremium: false,
    views: 26100,
    downloads: 7500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sb-classic">
  <div class="sb-c-logo">YourUI Dashboard</div>
  <div class="sb-c-menu">
    <a href="#" class="sb-c-active">🏠 <span>Home</span></a>
    <a href="#">📊 <span>Analytics</span></a>
    <a href="#">📁 <span>Projects</span></a>
    <a href="#">⚙️ <span>Settings</span></a>
  </div>
  <div class="sb-c-bottom">
    <a href="#">🚪 <span>Logout</span></a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; min-height: 100vh; }
.sb-classic { width: 250px; background: #fff; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; height: 100vh; box-shadow: 2px 0 5px rgba(0,0,0,0.02); }
.sb-c-logo { padding: 20px; font-weight: 800; font-size: 1.2rem; color: #0f172a; border-bottom: 1px solid #e2e8f0; }
.sb-c-menu { flex: 1; padding: 20px 10px; display: flex; flex-direction: column; gap: 5px; }
.sb-c-menu a, .sb-c-bottom a { display: flex; align-items: center; gap: 15px; padding: 12px 15px; text-decoration: none; color: #64748b; border-radius: 8px; font-weight: 500; transition: 0.2s; }
.sb-c-menu a:hover, .sb-c-bottom a:hover { background: #f8fafc; color: #0f172a; }
.sb-c-menu a.sb-c-active { background: #eff6ff; color: #3b82f6; }
.sb-c-bottom { padding: 20px 10px; border-top: 1px solid #e2e8f0; }`,
    jsCode: ``
  },

  // 2. Minimal Icon-Only Sidebar
  {
    _id: "sb2",
    title: "Minimal Icon Sidebar",
    slug: "minimal-icon-sidebar",
    description: "A very thin sidebar showing only icons, perfect for maximizing screen space.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["sidebar", "minimal", "icons", "compact"],
    isPremium: false,
    views: 23200,
    downloads: 6400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sb-min">
  <div class="sb-m-logo">Y</div>
  <div class="sb-m-menu">
    <a href="#" class="sb-m-active" title="Home">🏠</a>
    <a href="#" title="Search">🔍</a>
    <a href="#" title="Messages">💬</a>
    <a href="#" title="Profile">👤</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; min-height: 100vh; }
.sb-min { width: 70px; background: #fff; border-right: 1px solid #f1f5f9; display: flex; flex-direction: column; align-items: center; height: 100vh; padding: 20px 0; }
.sb-m-logo { font-weight: 900; font-size: 1.5rem; color: #0f172a; margin-bottom: 40px; width: 40px; height: 40px; background: #f1f5f9; border-radius: 10px; display: flex; justify-content: center; align-items: center; }
.sb-m-menu { display: flex; flex-direction: column; gap: 15px; width: 100%; align-items: center; }
.sb-m-menu a { display: flex; justify-content: center; align-items: center; width: 45px; height: 45px; text-decoration: none; color: #64748b; border-radius: 12px; font-size: 1.2rem; transition: 0.2s; }
.sb-m-menu a:hover { background: #f1f5f9; color: #0f172a; }
.sb-m-menu a.sb-m-active { background: #0f172a; color: #fff; box-shadow: 0 4px 10px rgba(15, 23, 42, 0.2); }`,
    jsCode: ``
  },

  // 3. Cyberpunk Sidebar
  {
    _id: "sb3",
    title: "Cyberpunk Sidebar",
    slug: "cyberpunk-sidebar",
    description: "Neon borders, angled clips, and terminal-style navigation.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["sidebar", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 19100,
    downloads: 5200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sb-cy">
  <div class="sb-cy-header">SYSTEM_DIR</div>
  <div class="sb-cy-menu">
    <a href="#" class="sb-cy-active">> CORE</a>
    <a href="#">> LOGS</a>
    <a href="#">> NETWORK</a>
    <a href="#">> OVERRIDE</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; min-height: 100vh; }
.sb-cy { width: 220px; background: #0a0a0a; border-right: 2px solid #0ff; display: flex; flex-direction: column; height: 100vh; box-shadow: 5px 0 15px rgba(0,255,255,0.1); }
.sb-cy-header { padding: 20px; color: #f0f; font-weight: bold; font-size: 1.2rem; border-bottom: 1px dashed #0ff; letter-spacing: 2px; }
.sb-cy-menu { padding: 20px 10px; display: flex; flex-direction: column; gap: 10px; }
.sb-cy-menu a { display: block; padding: 10px 15px; text-decoration: none; color: #555; font-weight: bold; border-left: 2px solid transparent; transition: 0.2s; }
.sb-cy-menu a:hover { color: #fff; background: rgba(0,255,255,0.05); border-left-color: #0ff; padding-left: 20px; }
.sb-cy-menu a.sb-cy-active { color: #0ff; background: rgba(0,255,255,0.1); border-left-color: #0ff; text-shadow: 0 0 5px #0ff; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Sidebar
  {
    _id: "sb4",
    title: "Glassmorphism Sidebar",
    slug: "glassmorphism-sidebar",
    description: "Frosted glass panel resting on a vibrant animated background.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["sidebar", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 24500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="sb-gl">
    <div class="sb-g-logo">GlassUI</div>
    <div class="sb-g-menu">
      <a href="#" class="sb-g-active">Design</a>
      <a href="#">Components</a>
      <a href="#">Tokens</a>
      <a href="#">Settings</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; padding: 20px; box-sizing: border-box; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.sb-gl { width: 250px; height: calc(100vh - 40px); background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); display: flex; flex-direction: column; }
.sb-g-logo { padding: 30px 20px; color: #fff; font-size: 1.5rem; font-weight: 800; border-bottom: 1px solid rgba(255,255,255,0.1); }
.sb-g-menu { padding: 20px; display: flex; flex-direction: column; gap: 10px; }
.sb-g-menu a { padding: 12px 15px; color: rgba(255,255,255,0.8); text-decoration: none; border-radius: 10px; font-weight: 500; transition: 0.3s; border: 1px solid transparent; }
.sb-g-menu a:hover { background: rgba(255,255,255,0.1); color: #fff; transform: translateX(5px); }
.sb-g-menu a.sb-g-active { background: rgba(255,255,255,0.2); color: #fff; border-color: rgba(255,255,255,0.4); box-shadow: 0 4px 15px rgba(255,255,255,0.1); }`,
    jsCode: ``
  },

  // 5. Brutalist Sidebar
  {
    _id: "sb5",
    title: "Brutalist Sidebar",
    slug: "brutalist-sidebar",
    description: "Harsh lines, thick borders, and aggressive hover states.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["sidebar", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 16400,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sb-br">
  <div class="sb-br-logo">MENU.</div>
  <div class="sb-br-menu">
    <a href="#" class="sb-br-active">INDEX</a>
    <a href="#">ABOUT</a>
    <a href="#">WORK</a>
    <a href="#">CONTACT</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; min-height: 100vh; }
.sb-br { width: 260px; background: #fff; border-right: 5px solid #000; display: flex; flex-direction: column; height: 100vh; }
.sb-br-logo { padding: 30px 20px; font-size: 2rem; font-weight: 900; background: #facc15; border-bottom: 5px solid #000; letter-spacing: -1px; }
.sb-br-menu { display: flex; flex-direction: column; }
.sb-br-menu a { padding: 20px; text-decoration: none; color: #000; font-weight: 900; font-size: 1.2rem; border-bottom: 5px solid #000; transition: 0.2s; }
.sb-br-menu a:hover { background: #000; color: #fff; padding-left: 30px; }
.sb-br-menu a.sb-br-active { background: #ef4444; color: #fff; }`,
    jsCode: ``
  },

  // 6. Neumorphic Sidebar
  {
    _id: "sb6",
    title: "Neumorphic Sidebar",
    slug: "neumorphic-sidebar",
    description: "Soft UI drawer with debossed buttons and rounded edges.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["sidebar", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 17300,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sb-neu-bg">
  <div class="sb-neu">
    <div class="sb-n-logo">Settings</div>
    <div class="sb-n-menu">
      <a href="#" class="sb-n-active">Profile</a>
      <a href="#">Security</a>
      <a href="#">Notifications</a>
      <a href="#">Billing</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.sb-neu-bg { padding: 20px; height: 100vh; box-sizing: border-box; }
.sb-neu { width: 250px; height: 100%; background: #e0e5ec; border-radius: 20px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); display: flex; flex-direction: column; }
.sb-n-logo { padding: 30px 20px; font-size: 1.5rem; font-weight: bold; color: #2d3748; }
.sb-n-menu { padding: 10px 20px; display: flex; flex-direction: column; gap: 15px; }
.sb-n-menu a { padding: 15px 20px; border-radius: 12px; color: #718096; text-decoration: none; font-weight: bold; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.sb-n-menu a:hover:not(.sb-n-active) { color: #2d3748; box-shadow: 4px 4px 8px rgba(163,177,198,0.5), -4px -4px 8px rgba(255,255,255,0.4); }
.sb-n-menu a.sb-n-active { color: #3182ce; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Floating Pill Sidebar
  {
    _id: "sb7",
    title: "Floating Pill Sidebar",
    slug: "floating-pill-sidebar",
    description: "A detached sidebar that floats like an island on the left side of the screen.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["sidebar", "floating", "pill", "modern"],
    isPremium: true,
    views: 21800,
    downloads: 5900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sb-fl-bg">
  <div class="sb-fl">
    <div class="sb-f-menu">
      <a href="#" class="sb-f-active" title="Home">⌂</a>
      <a href="#" title="Favorites">♥</a>
      <a href="#" title="Lists">≣</a>
      <a href="#" title="Settings">⚙</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.sb-fl-bg { padding: 20px; height: 100vh; box-sizing: border-box; display: flex; align-items: center; }
.sb-fl { background: #0f172a; border-radius: 40px; padding: 20px 10px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2); }
.sb-f-menu { display: flex; flex-direction: column; gap: 15px; align-items: center; }
.sb-f-menu a { display: flex; justify-content: center; align-items: center; width: 50px; height: 50px; border-radius: 50%; color: #94a3b8; text-decoration: none; font-size: 1.5rem; transition: 0.3s; }
.sb-f-menu a:hover { color: #fff; background: rgba(255,255,255,0.1); }
.sb-f-menu a.sb-f-active { color: #fff; background: #3b82f6; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); }`,
    jsCode: ``
  },

  // 8. Dark Mode Gradient Sidebar
  {
    _id: "sb8",
    title: "Dark Gradient Sidebar",
    slug: "dark-gradient-sidebar",
    description: "Deep dark background with colorful glowing active states.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["sidebar", "dark", "gradient", "glow"],
    isPremium: true,
    views: 19800,
    downloads: 5300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sb-dg">
  <div class="sb-dg-logo">Nebula</div>
  <div class="sb-dg-menu">
    <a href="#" class="sb-dg-active">Overview</a>
    <a href="#">Clusters</a>
    <a href="#">Integrations</a>
    <a href="#">API Keys</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; display: flex; min-height: 100vh; }
.sb-dg { width: 260px; background: #0f172a; border-right: 1px solid #1e293b; display: flex; flex-direction: column; height: 100vh; }
.sb-dg-logo { padding: 30px; font-size: 1.8rem; font-weight: 800; color: #fff; background: linear-gradient(90deg, #ec4899, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.sb-dg-menu { padding: 0 20px; display: flex; flex-direction: column; gap: 8px; }
.sb-dg-menu a { padding: 12px 20px; text-decoration: none; color: #94a3b8; font-weight: 500; border-radius: 8px; transition: 0.3s; }
.sb-dg-menu a:hover { color: #f8fafc; background: rgba(255,255,255,0.05); }
.sb-dg-menu a.sb-dg-active { color: #fff; background: linear-gradient(135deg, #ec4899, #8b5cf6); box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3); font-weight: 600; }`,
    jsCode: ``
  },

  // 9. Submenu Accordion Sidebar
  {
    _id: "sb9",
    title: "Submenu Accordion Sidebar",
    slug: "submenu-accordion-sidebar",
    description: "Sidebar with pure CSS expand/collapse submenus using the checkbox hack.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["sidebar", "accordion", "submenu", "dropdown"],
    isPremium: true,
    views: 25400,
    downloads: 7100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sb-sub">
  <div class="sb-s-logo">AdminPanel</div>
  <div class="sb-s-menu">
    <a href="#">Dashboard</a>
    
    <input type="checkbox" id="sub1" class="sb-s-toggle" />
    <label for="sub1" class="sb-s-parent">Users <span class="sb-s-arrow">▼</span></label>
    <div class="sb-s-children">
      <a href="#">All Users</a>
      <a href="#">Add New</a>
      <a href="#">Roles</a>
    </div>

    <input type="checkbox" id="sub2" class="sb-s-toggle" checked />
    <label for="sub2" class="sb-s-parent">Settings <span class="sb-s-arrow">▼</span></label>
    <div class="sb-s-children">
      <a href="#">General</a>
      <a href="#" class="sb-s-active">Security</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; min-height: 100vh; }
.sb-sub { width: 260px; background: #fff; border-right: 1px solid #e2e8f0; height: 100vh; display: flex; flex-direction: column; }
.sb-s-logo { padding: 25px; font-weight: 700; font-size: 1.2rem; color: #0f172a; border-bottom: 1px solid #f1f5f9; }
.sb-s-menu { padding: 15px; display: flex; flex-direction: column; gap: 5px; }
.sb-s-menu a, .sb-s-parent { display: flex; justify-content: space-between; padding: 12px 15px; text-decoration: none; color: #475569; font-weight: 500; border-radius: 8px; cursor: pointer; transition: 0.2s; }
.sb-s-menu a:hover, .sb-s-parent:hover { background: #f1f5f9; color: #0f172a; }
.sb-s-toggle { display: none; }
.sb-s-arrow { font-size: 0.8rem; transition: 0.3s; }
.sb-s-children { display: flex; flex-direction: column; overflow: hidden; max-height: 0; transition: max-height 0.3s ease; padding-left: 20px; }
.sb-s-children a { padding: 10px 15px; font-size: 0.95rem; color: #64748b; }
.sb-s-children a.sb-s-active { color: #3b82f6; font-weight: 600; background: #eff6ff; }
.sb-s-toggle:checked ~ .sb-s-parent .sb-s-arrow { transform: rotate(180deg); }
.sb-s-toggle:checked ~ .sb-s-children { max-height: 200px; margin-top: 5px; }`,
    jsCode: ``
  },

  // 10. Compact Folder Sidebar
  {
    _id: "sb10",
    title: "Compact Folder Sidebar",
    slug: "compact-folder-sidebar",
    description: "Mac OS Finder style compact sidebar for file explorers.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["sidebar", "macos", "finder", "files"],
    isPremium: false,
    views: 18600,
    downloads: 4700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sb-fld">
  <div class="sb-fld-group">
    <h3>Favorites</h3>
    <a href="#" class="sb-fld-active">🪟 Desktop</a>
    <a href="#">📄 Documents</a>
    <a href="#">⬇️ Downloads</a>
  </div>
  <div class="sb-fld-group">
    <h3>Tags</h3>
    <a href="#">🔴 Work</a>
    <a href="#">🟢 Personal</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; min-height: 100vh; }
.sb-fld { width: 220px; background: rgba(243, 244, 246, 0.8); backdrop-filter: blur(20px); border-right: 1px solid #e5e7eb; padding: 20px 10px; display: flex; flex-direction: column; gap: 30px; height: 100vh; }
.sb-fld-group { display: flex; flex-direction: column; gap: 5px; }
.sb-fld-group h3 { margin: 0 0 5px 15px; font-size: 0.75rem; text-transform: uppercase; color: #9ca3af; font-weight: 700; letter-spacing: 0.5px; }
.sb-fld-group a { padding: 8px 15px; text-decoration: none; color: #4b5563; font-size: 0.95rem; border-radius: 6px; transition: 0.2s; font-weight: 500; }
.sb-fld-group a:hover { background: rgba(0,0,0,0.05); }
.sb-fld-group a.sb-fld-active { background: #3b82f6; color: #fff; box-shadow: 0 2px 5px rgba(59, 130, 246, 0.3); }`,
    jsCode: ``
  }
];
