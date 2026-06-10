import { Design } from "./designs-data";

export const BATCH_23_DESIGNS: Design[] = [
  // 1. Classic Corporate Sidebar
  {
    _id: "sb1",
    title: "Classic Corporate Sidebar",
    slug: "classic-corporate-sidebar",
    description: "A professional, dark-themed sidebar perfect for enterprise SaaS applications.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["sidebar", "corporate", "saas", "dark"],
    isPremium: false,
    views: 18200,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="corp-sidebar">
  <div class="corp-logo">
    <div class="corp-icon">▲</div>
    <span>AcmeCorp</span>
  </div>
  <nav class="corp-nav">
    <a href="#" class="corp-link active"><span class="c-icon">⊞</span> Dashboard</a>
    <a href="#" class="corp-link"><span class="c-icon">👥</span> Users</a>
    <a href="#" class="corp-link"><span class="c-icon">📊</span> Analytics</a>
    <a href="#" class="corp-link"><span class="c-icon">⚙️</span> Settings</a>
  </nav>
  <div class="corp-user">
    <div class="cu-avatar">JD</div>
    <div class="cu-info">
      <div class="cu-name">John Doe</div>
      <div class="cu-role">Admin</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f3f4f6; }
.corp-sidebar { width: 260px; height: 100vh; background: #111827; color: #fff; display: flex; flex-direction: column; padding: 20px 0; box-sizing: border-box; }
.corp-logo { display: flex; align-items: center; gap: 10px; padding: 0 20px 30px; font-size: 1.2rem; font-weight: bold; border-bottom: 1px solid #1f2937; margin-bottom: 20px; }
.corp-icon { color: #3b82f6; }
.corp-nav { flex: 1; padding: 0 10px; display: flex; flex-direction: column; gap: 5px; }
.corp-link { display: flex; align-items: center; gap: 15px; padding: 12px 15px; color: #9ca3af; text-decoration: none; border-radius: 8px; font-weight: 500; transition: 0.2s; }
.corp-link:hover { background: #1f2937; color: #fff; }
.corp-link.active { background: #3b82f6; color: #fff; }
.c-icon { font-size: 1.1rem; }
.corp-user { display: flex; align-items: center; gap: 15px; padding: 20px; border-top: 1px solid #1f2937; }
.cu-avatar { width: 40px; height: 40px; background: #374151; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-weight: bold; }
.cu-info { display: flex; flex-direction: column; }
.cu-name { font-size: 0.95rem; font-weight: 600; }
.cu-role { font-size: 0.8rem; color: #9ca3af; }`,
    jsCode: ``
  },

  // 2. Glassmorphism Sidebar
  {
    _id: "sb2",
    title: "Glassmorphism Sidebar",
    slug: "glassmorphism-sidebar",
    description: "A stunning frosted glass navigation panel floating over a dynamic background.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["sidebar", "glassmorphism", "gradient", "modern"],
    isPremium: true,
    views: 16500,
    downloads: 4900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-layout">
  <aside class="glass-sidebar">
    <div class="gls-logo">Vision.</div>
    <ul class="gls-menu">
      <li class="gls-item active"><a href="#">Home</a></li>
      <li class="gls-item"><a href="#">Discover</a></li>
      <li class="gls-item"><a href="#">Library</a></li>
      <li class="gls-item"><a href="#">Playlists</a></li>
    </ul>
    <div class="gls-bottom">
      <a href="#" class="gls-btn">Log Out</a>
    </div>
  </aside>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.glass-layout { width: 100vw; height: 100vh; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; padding: 20px; box-sizing: border-box; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.glass-sidebar { width: 250px; height: 100%; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 24px; padding: 30px; display: flex; flex-direction: column; color: #fff; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
.gls-logo { font-size: 1.8rem; font-weight: 900; letter-spacing: -1px; margin-bottom: 50px; }
.gls-menu { list-style: none; padding: 0; margin: 0; flex: 1; display: flex; flex-direction: column; gap: 15px; }
.gls-item a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 1.1rem; font-weight: 500; transition: 0.3s; padding: 10px 15px; border-radius: 12px; display: block; }
.gls-item a:hover { background: rgba(255,255,255,0.1); color: #fff; }
.gls-item.active a { background: rgba(255,255,255,0.25); color: #fff; font-weight: bold; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.gls-btn { display: block; text-align: center; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); padding: 12px; border-radius: 12px; color: #fff; text-decoration: none; font-weight: bold; transition: 0.3s; }
.gls-btn:hover { background: rgba(255,255,255,0.3); }`,
    jsCode: ``
  },

  // 3. Minimalist Icon-Only Sidebar
  {
    _id: "sb3",
    title: "Minimalist Icon Sidebar",
    slug: "minimalist-icon-sidebar",
    description: "A super sleek, space-saving sidebar featuring icons with hover tooltips.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["sidebar", "minimalist", "icons", "clean"],
    isPremium: false,
    views: 14800,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="min-sidebar">
  <div class="min-logo">O</div>
  <nav class="min-nav">
    <a href="#" class="min-link active" title="Home">⌂</a>
    <a href="#" class="min-link" title="Messages">✉</a>
    <a href="#" class="min-link" title="Bookmarks">★</a>
    <a href="#" class="min-link" title="Analytics">◷</a>
  </nav>
  <div class="min-bottom">
    <a href="#" class="min-link" title="Settings">⚙</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; }
.min-sidebar { width: 80px; height: 100vh; background: #fff; border-right: 1px solid #eaeaea; display: flex; flex-direction: column; align-items: center; padding: 20px 0; box-shadow: 4px 0 15px rgba(0,0,0,0.02); }
.min-logo { width: 40px; height: 40px; background: #111; color: #fff; border-radius: 12px; display: flex; justify-content: center; align-items: center; font-weight: 900; font-size: 1.2rem; margin-bottom: 40px; }
.min-nav { flex: 1; display: flex; flex-direction: column; gap: 20px; }
.min-link { width: 48px; height: 48px; border-radius: 12px; display: flex; justify-content: center; align-items: center; color: #888; text-decoration: none; font-size: 1.5rem; transition: 0.2s; position: relative; }
.min-link:hover { background: #f4f4f5; color: #111; }
.min-link.active { background: #111; color: #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
/* Simple tooltip */
.min-link:hover::after { content: attr(title); position: absolute; left: 60px; background: #111; color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: bold; white-space: nowrap; pointer-events: none; }`,
    jsCode: ``
  },

  // 4. Neumorphic Sidebar
  {
    _id: "sb4",
    title: "Neumorphic Sidebar",
    slug: "neumorphic-sidebar",
    description: "Soft, extruded navigation elements designed with neumorphic principles.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["sidebar", "neumorphism", "soft", "ui"],
    isPremium: false,
    views: 11200,
    downloads: 3000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-sb-layout">
  <aside class="neu-sidebar">
    <div class="neus-logo">N</div>
    <nav class="neus-nav">
      <a href="#" class="neus-link active">Dashboard</a>
      <a href="#" class="neus-link">Projects</a>
      <a href="#" class="neus-link">Calendar</a>
      <a href="#" class="neus-link">Reports</a>
    </nav>
  </aside>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.neu-sb-layout { padding: 20px; height: 100vh; box-sizing: border-box; }
.neu-sidebar { width: 250px; height: 100%; background: #e0e5ec; border-radius: 30px; padding: 30px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); display: flex; flex-direction: column; align-items: center; box-sizing: border-box; }
.neus-logo { width: 60px; height: 60px; border-radius: 50%; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); display: flex; justify-content: center; align-items: center; font-size: 1.5rem; font-weight: bold; color: #4a5568; margin-bottom: 50px; }
.neus-nav { width: 100%; display: flex; flex-direction: column; gap: 20px; }
.neus-link { display: block; width: 100%; text-align: center; padding: 15px; text-decoration: none; color: #a0aec0; font-weight: bold; border-radius: 15px; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; box-sizing: border-box; }
.neus-link:hover { color: #4299e1; }
.neus-link.active { color: #4299e1; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 5. Cyberpunk Navigation Panel
  {
    _id: "sb5",
    title: "Cyberpunk Nav Panel",
    slug: "cyberpunk-nav-panel",
    description: "A dark, glowing terminal-style sidebar built for hackers and gamers.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["sidebar", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 13900,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cy-sidebar">
  <div class="cy-sb-header">
    SYSTEM_NAV //
  </div>
  <nav class="cy-nav">
    <a href="#" class="cy-link active">[01] MAINFRAME</a>
    <a href="#" class="cy-link">[02] DATABASE</a>
    <a href="#" class="cy-link">[03] FIREWALL</a>
    <a href="#" class="cy-link">[04] PROTOCOLS</a>
  </nav>
  <div class="cy-sb-footer">
    STATUS: <span class="cy-ok">SECURE</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; }
.cy-sidebar { width: 280px; height: 100vh; background: #0a0a0a; border-right: 2px solid #333; display: flex; flex-direction: column; padding: 20px; box-sizing: border-box; position: relative; }
.cy-sidebar::after { content: ''; position: absolute; top: 0; right: -2px; width: 2px; height: 100%; background: linear-gradient(to bottom, #0ff, transparent); opacity: 0.5; }
.cy-sb-header { color: #f0f; font-weight: bold; font-size: 1.2rem; margin-bottom: 40px; letter-spacing: 2px; border-bottom: 1px dashed #333; padding-bottom: 15px; }
.cy-nav { flex: 1; display: flex; flex-direction: column; gap: 10px; }
.cy-link { display: block; color: #888; text-decoration: none; padding: 12px 15px; border: 1px solid transparent; transition: 0.2s; letter-spacing: 1px; }
.cy-link:hover { color: #0ff; background: rgba(0,255,255,0.05); padding-left: 25px; }
.cy-link.active { color: #0ff; border: 1px solid #0ff; box-shadow: inset 0 0 10px rgba(0,255,255,0.2); }
.cy-sb-footer { border-top: 1px dashed #333; padding-top: 20px; color: #666; font-size: 0.9rem; }
.cy-ok { color: #0f0; text-shadow: 0 0 5px #0f0; animation: pulse 2s infinite; }
@keyframes pulse { 50% { opacity: 0.5; } }`,
    jsCode: ``
  },

  // 6. Brutalist Mega Sidebar
  {
    _id: "sb6",
    title: "Brutalist Mega Sidebar",
    slug: "brutalist-mega-sidebar",
    description: "Loud, high-contrast navigation with giant fonts and hard borders.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["sidebar", "brutalist", "typography", "bold"],
    isPremium: true,
    views: 10500,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="br-sidebar">
  <div class="brs-logo">MENU.</div>
  <nav class="brs-nav">
    <a href="#" class="brs-link bg-yellow">INDEX</a>
    <a href="#" class="brs-link">WORK</a>
    <a href="#" class="brs-link">ABOUT</a>
    <a href="#" class="brs-link">SHOP</a>
  </nav>
  <div class="brs-contact">
    <a href="#">HI@STUDIO.COM</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.br-sidebar { width: 350px; height: 100vh; background: #fff; border-right: 8px solid #000; display: flex; flex-direction: column; padding: 30px; box-sizing: border-box; }
.brs-logo { font-size: 4rem; font-weight: 900; letter-spacing: -3px; color: #000; margin-bottom: 40px; border-bottom: 8px solid #000; padding-bottom: 10px; line-height: 1; }
.brs-nav { flex: 1; display: flex; flex-direction: column; gap: 20px; }
.brs-link { display: block; font-size: 2.5rem; font-weight: 900; color: #000; text-decoration: none; border: 4px solid transparent; padding: 10px 20px; text-transform: uppercase; transition: 0.1s; }
.brs-link:hover { border-color: #000; transform: translate(-4px, -4px); box-shadow: 8px 8px 0 #000; }
.brs-link.bg-yellow { background: #facc15; border-color: #000; box-shadow: 6px 6px 0 #000; transform: translate(-3px, -3px); }
.brs-link.bg-yellow:active { transform: translate(0,0); box-shadow: 0 0 0 #000; }
.brs-contact { margin-top: auto; border-top: 8px solid #000; padding-top: 20px; }
.brs-contact a { color: #ef4444; font-size: 1.2rem; font-weight: 900; text-decoration: none; }
.brs-contact a:hover { text-decoration: underline; }`,
    jsCode: ``
  },

  // 7. Floating Pill Sidebar
  {
    _id: "sb7",
    title: "Floating Pill Sidebar",
    slug: "floating-pill-sidebar",
    description: "A detached, floating sidebar that sits inside the main layout like a floating widget.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["sidebar", "floating", "pill", "clean"],
    isPremium: false,
    views: 12400,
    downloads: 3500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fp-layout">
  <aside class="fp-sidebar">
    <nav class="fp-nav">
      <a href="#" class="fp-link active"><span>■</span> Overview</a>
      <a href="#" class="fp-link"><span>▲</span> Analytics</a>
      <a href="#" class="fp-link"><span>●</span> Customers</a>
      <a href="#" class="fp-link"><span>◆</span> Payouts</a>
    </nav>
  </aside>
  <main class="fp-main"></main>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; }
.fp-layout { display: flex; height: 100vh; padding: 20px; box-sizing: border-box; gap: 20px; }
.fp-sidebar { width: 240px; background: #fff; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.06); padding: 20px; display: flex; flex-direction: column; }
.fp-nav { display: flex; flex-direction: column; gap: 10px; }
.fp-link { display: flex; align-items: center; gap: 12px; padding: 12px 20px; color: #64748b; text-decoration: none; font-weight: 600; border-radius: 16px; transition: 0.3s; }
.fp-link span { font-size: 0.8rem; }
.fp-link:hover { background: #f8fafc; color: #0f172a; }
.fp-link.active { background: #0f172a; color: #fff; box-shadow: 0 4px 15px rgba(15, 23, 42, 0.2); }
.fp-main { flex: 1; background: #fff; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.06); }`,
    jsCode: ``
  },

  // 8. E-commerce Filter Sidebar
  {
    _id: "sb8",
    title: "E-commerce Filter Sidebar",
    slug: "ecommerce-filter-sidebar",
    description: "A functional sidebar packed with checkboxes, categories, and filter options.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["sidebar", "ecommerce", "filters", "shop"],
    isPremium: true,
    views: 15300,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<aside class="eco-sidebar">
  <div class="eco-header">
    <h3>Filters</h3>
    <button>Clear</button>
  </div>
  
  <div class="eco-section">
    <h4>Categories</h4>
    <ul class="eco-list">
      <li><label><input type="checkbox" checked> Sneakers</label> <span>(42)</span></li>
      <li><label><input type="checkbox"> Boots</label> <span>(18)</span></li>
      <li><label><input type="checkbox"> Running</label> <span>(24)</span></li>
    </ul>
  </div>

  <div class="eco-section">
    <h4>Price Range</h4>
    <div class="eco-price">
      <input type="text" placeholder="Min" value="$50">
      <span>-</span>
      <input type="text" placeholder="Max" value="$200">
    </div>
  </div>

  <button class="eco-apply">Apply Filters</button>
</aside>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 20px; }
.eco-sidebar { width: 280px; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; }
.eco-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
.eco-header h3 { margin: 0; font-size: 1.2rem; color: #111827; }
.eco-header button { background: none; border: none; color: #6b7280; font-size: 0.9rem; cursor: pointer; text-decoration: underline; }
.eco-section { margin-bottom: 25px; padding-bottom: 25px; border-bottom: 1px solid #e5e7eb; }
.eco-section h4 { margin: 0 0 15px 0; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1px; color: #4b5563; }
.eco-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
.eco-list li { display: flex; justify-content: space-between; color: #4b5563; font-size: 0.95rem; }
.eco-list label { display: flex; align-items: center; gap: 10px; cursor: pointer; }
.eco-list span { color: #9ca3af; font-size: 0.85rem; }
.eco-price { display: flex; align-items: center; gap: 10px; }
.eco-price input { flex: 1; width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px; outline: none; }
.eco-price input:focus { border-color: #3b82f6; box-shadow: 0 0 0 2px rgba(59,130,246,0.2); }
.eco-apply { width: 100%; background: #111827; color: #fff; border: none; padding: 12px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.eco-apply:hover { background: #374151; }`,
    jsCode: ``
  },

  // 9. User Dashboard Sidebar
  {
    _id: "sb9",
    title: "User Profile Sidebar",
    slug: "user-profile-sidebar",
    description: "A sidebar layout focusing heavily on the user profile and quick stats at the top.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["sidebar", "profile", "dashboard", "clean"],
    isPremium: false,
    views: 13100,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<aside class="user-sb">
  <div class="usb-profile">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80" alt="Avatar" class="usb-avatar">
    <h3>Alex Johnson</h3>
    <p>Pro Member</p>
    <div class="usb-stats">
      <div><strong>42</strong><span>Projects</span></div>
      <div><strong>12k</strong><span>Followers</span></div>
    </div>
  </div>
  <nav class="usb-nav">
    <a href="#" class="usb-link active">Feed</a>
    <a href="#" class="usb-link">Portfolio</a>
    <a href="#" class="usb-link">Messages</a>
    <a href="#" class="usb-link">Settings</a>
  </nav>
</aside>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 20px; }
.user-sb { width: 280px; background: #fff; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); overflow: hidden; }
.usb-profile { padding: 30px; text-align: center; background: #1e293b; color: #fff; }
.usb-avatar { width: 80px; height: 80px; border-radius: 50%; border: 3px solid #fff; object-fit: cover; margin-bottom: 15px; }
.usb-profile h3 { margin: 0 0 5px 0; font-size: 1.2rem; }
.usb-profile p { margin: 0 0 20px 0; color: #94a3b8; font-size: 0.9rem; }
.usb-stats { display: flex; justify-content: center; gap: 30px; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 12px; }
.usb-stats div { display: flex; flex-direction: column; }
.usb-stats strong { font-size: 1.1rem; }
.usb-stats span { font-size: 0.8rem; color: #94a3b8; }
.usb-nav { padding: 20px; display: flex; flex-direction: column; gap: 5px; }
.usb-link { padding: 12px 15px; color: #475569; text-decoration: none; border-radius: 8px; font-weight: 500; transition: 0.2s; }
.usb-link:hover { background: #f1f5f9; color: #0f172a; }
.usb-link.active { background: #e0e7ff; color: #4f46e5; font-weight: bold; }`,
    jsCode: ``
  },

  // 10. Multi-Level Dropdown Sidebar
  {
    _id: "sb10",
    title: "Accordion Sidebar",
    slug: "accordion-dropdown-sidebar",
    description: "A sidebar with nested dropdowns handled via CSS targeting for deep navigation.",
    category: "Sidebars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["sidebar", "accordion", "dropdown", "navigation"],
    isPremium: true,
    views: 11900,
    downloads: 3400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<aside class="acc-sidebar">
  <div class="acc-header">Documentation</div>
  <div class="acc-menu">
    <div class="acc-item">
      <input type="checkbox" id="menu1" checked>
      <label for="menu1" class="acc-title">Getting Started <span class="arrow">▾</span></label>
      <div class="acc-content">
        <a href="#" class="active">Installation</a>
        <a href="#">Configuration</a>
        <a href="#">Quick Start</a>
      </div>
    </div>
    <div class="acc-item">
      <input type="checkbox" id="menu2">
      <label for="menu2" class="acc-title">Components <span class="arrow">▾</span></label>
      <div class="acc-content">
        <a href="#">Buttons</a>
        <a href="#">Cards</a>
        <a href="#">Modals</a>
      </div>
    </div>
  </div>
</aside>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 20px; }
.acc-sidebar { width: 260px; border-right: 1px solid #eaeaea; height: 100vh; padding: 20px; box-sizing: border-box; }
.acc-header { font-size: 1.2rem; font-weight: 800; color: #111; margin-bottom: 30px; letter-spacing: -0.5px; }
.acc-menu { display: flex; flex-direction: column; gap: 15px; }
.acc-item input[type="checkbox"] { display: none; }
.acc-title { display: flex; justify-content: space-between; align-items: center; color: #444; font-weight: 600; cursor: pointer; padding: 8px 0; user-select: none; }
.arrow { transition: 0.3s; font-size: 0.8rem; }
.acc-item input:checked + .acc-title .arrow { transform: rotate(180deg); }
.acc-content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; display: flex; flex-direction: column; padding-left: 15px; border-left: 2px solid #eaeaea; margin-left: 5px; }
.acc-item input:checked ~ .acc-content { max-height: 200px; padding-top: 10px; padding-bottom: 10px; }
.acc-content a { color: #666; text-decoration: none; padding: 8px 0; font-size: 0.9rem; transition: 0.2s; }
.acc-content a:hover { color: #111; }
.acc-content a.active { color: #3b82f6; font-weight: 600; }`,
    jsCode: ``
  }
];
