import { Design } from "./designs-data";

export const BATCH_26_DESIGNS: Design[] = [
  // 1. Classic Corporate Dropdown
  {
    _id: "dd1",
    title: "Classic Corporate Dropdown",
    slug: "classic-corporate-dropdown",
    description: "A clean, professional dropdown menu ideal for SaaS and enterprise dashboards.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["dropdown", "corporate", "saas", "clean"],
    isPremium: false,
    views: 19100,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="corp-dd-wrapper">
  <button class="corp-dd-btn">Options <span>▼</span></button>
  <div class="corp-dd-menu">
    <a href="#">Edit Profile</a>
    <a href="#">Account Settings</a>
    <a href="#">Billing</a>
    <div class="divider"></div>
    <a href="#" class="danger">Log Out</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f9fafb; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.corp-dd-wrapper { position: relative; display: inline-block; }
.corp-dd-btn { background: #fff; border: 1px solid #d1d5db; padding: 10px 20px; font-size: 0.95rem; font-weight: 500; border-radius: 8px; cursor: pointer; color: #374151; display: flex; align-items: center; gap: 8px; transition: 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.corp-dd-btn span { font-size: 0.7rem; color: #9ca3af; }
.corp-dd-btn:hover { background: #f3f4f6; }
.corp-dd-menu { position: absolute; top: calc(100% + 8px); left: 0; background: #fff; width: 220px; border-radius: 8px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; display: flex; flex-direction: column; padding: 8px 0; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: 0.2s; z-index: 10; }
.corp-dd-wrapper:hover .corp-dd-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.corp-dd-menu a { padding: 10px 16px; color: #4b5563; text-decoration: none; font-size: 0.9rem; transition: 0.2s; }
.corp-dd-menu a:hover { background: #f3f4f6; color: #111827; }
.divider { height: 1px; background: #e5e7eb; margin: 6px 0; }
.danger { color: #ef4444 !important; }
.danger:hover { background: #fef2f2 !important; color: #b91c1c !important; }`,
    jsCode: ``
  },

  // 2. Glassmorphism Dropdown
  {
    _id: "dd2",
    title: "Glassmorphism Dropdown",
    slug: "glassmorphism-dropdown",
    description: "A frosted glass dropdown menu that elegantly floats over vibrant backgrounds.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["dropdown", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 16800,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-dd-bg">
  <div class="gl-dd-wrapper">
    <button class="gl-dd-btn">Menu</button>
    <div class="gl-dd-menu">
      <a href="#">Dashboard</a>
      <a href="#">Projects</a>
      <a href="#">Team</a>
      <a href="#">Settings</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-dd-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; background: linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gl-dd-wrapper { position: relative; }
.gl-dd-btn { background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.4); padding: 12px 30px; font-size: 1rem; font-weight: 600; border-radius: 12px; cursor: pointer; color: #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: 0.3s; }
.gl-dd-btn:hover { background: rgba(255,255,255,0.3); }
.gl-dd-menu { position: absolute; top: calc(100% + 15px); left: 0; width: 200px; background: rgba(255,255,255,0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 16px; padding: 10px; display: flex; flex-direction: column; gap: 5px; opacity: 0; visibility: hidden; transform: translateY(-15px); transition: 0.3s; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.gl-dd-wrapper:hover .gl-dd-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.gl-dd-menu a { padding: 10px 15px; color: #fff; text-decoration: none; font-size: 0.95rem; font-weight: 500; border-radius: 10px; transition: 0.2s; }
.gl-dd-menu a:hover { background: rgba(255,255,255,0.2); }`,
    jsCode: ``
  },

  // 3. Cyberpunk Nav Dropdown
  {
    _id: "dd3",
    title: "Cyberpunk Dropdown",
    slug: "cyberpunk-dropdown",
    description: "Neon glowing, dark-themed dropdown perfect for futuristic or gaming interfaces.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["dropdown", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 15300,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cy-dd-wrapper">
  <button class="cy-dd-btn">[ SELECT_DB ]</button>
  <div class="cy-dd-menu">
    <a href="#">> _MAINFRAME</a>
    <a href="#">> _LOCAL_HOST</a>
    <a href="#">> _PROXY_NODE</a>
    <a href="#">> _SYS_CONFIG</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.cy-dd-wrapper { position: relative; }
.cy-dd-btn { background: transparent; border: 1px solid #0ff; color: #0ff; padding: 12px 25px; font-size: 1rem; font-family: 'Courier New', Courier, monospace; font-weight: bold; cursor: pointer; letter-spacing: 2px; transition: 0.2s; text-shadow: 0 0 5px #0ff; box-shadow: inset 0 0 10px rgba(0,255,255,0.2); }
.cy-dd-btn:hover { background: rgba(0,255,255,0.1); }
.cy-dd-menu { position: absolute; top: 100%; left: 0; width: 100%; background: #0a0a0a; border: 1px solid #0ff; border-top: none; display: flex; flex-direction: column; opacity: 0; visibility: hidden; transform: scaleY(0); transform-origin: top; transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.cy-dd-wrapper:hover .cy-dd-menu { opacity: 1; visibility: visible; transform: scaleY(1); }
.cy-dd-menu a { padding: 12px 15px; color: #888; text-decoration: none; border-bottom: 1px dashed #333; transition: 0.2s; }
.cy-dd-menu a:last-child { border-bottom: none; }
.cy-dd-menu a:hover { color: #f0f; text-shadow: 0 0 5px #f0f; background: rgba(255,0,255,0.05); padding-left: 20px; }`,
    jsCode: ``
  },

  // 4. Stripe-style Icon Dropdown
  {
    _id: "dd4",
    title: "Rich Icon Dropdown",
    slug: "rich-icon-dropdown",
    description: "A wide dropdown featuring icons and descriptions for each menu item.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["dropdown", "rich", "icons", "modern"],
    isPremium: true,
    views: 18900,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="rich-dd-wrapper">
  <button class="rich-dd-btn">Products</button>
  <div class="rich-dd-menu">
    <a href="#" class="rich-item">
      <div class="rich-icon" style="color: #6366f1;">❖</div>
      <div class="rich-text">
        <h4>Payments</h4>
        <p>A complete payments platform</p>
      </div>
    </a>
    <a href="#" class="rich-item">
      <div class="rich-icon" style="color: #10b981;">⊞</div>
      <div class="rich-text">
        <h4>Billing</h4>
        <p>Smart invoicing and subscriptions</p>
      </div>
    </a>
    <a href="#" class="rich-item">
      <div class="rich-icon" style="color: #f59e0b;">◷</div>
      <div class="rich-text">
        <h4>Connect</h4>
        <p>Payments for software platforms</p>
      </div>
    </a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.rich-dd-wrapper { position: relative; }
.rich-dd-btn { background: transparent; border: none; padding: 10px 15px; font-size: 1rem; font-weight: 600; color: #475569; cursor: pointer; transition: 0.2s; }
.rich-dd-btn:hover { color: #0f172a; }
.rich-dd-menu { position: absolute; top: calc(100% + 15px); left: 50%; transform: translateX(-50%) translateY(-10px) scale(0.95); width: 320px; background: #fff; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); padding: 15px; display: flex; flex-direction: column; gap: 5px; opacity: 0; visibility: hidden; transition: 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); transform-origin: top center; z-index: 10; }
.rich-dd-wrapper:hover .rich-dd-menu { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0) scale(1); }
.rich-item { display: flex; align-items: flex-start; gap: 15px; padding: 12px; text-decoration: none; border-radius: 12px; transition: 0.2s; }
.rich-item:hover { background: #f1f5f9; }
.rich-icon { font-size: 1.5rem; padding-top: 2px; }
.rich-text h4 { margin: 0 0 4px 0; font-size: 0.95rem; color: #0f172a; }
.rich-text p { margin: 0; font-size: 0.8rem; color: #64748b; line-height: 1.4; }`,
    jsCode: ``
  },

  // 5. Brutalist Mega Dropdown
  {
    _id: "dd5",
    title: "Brutalist Dropdown",
    slug: "brutalist-dropdown",
    description: "High contrast, massive fonts, and thick borders for a loud UI statement.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["dropdown", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 11500,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="br-dd-wrapper">
  <button class="br-dd-btn">SHOP.</button>
  <div class="br-dd-menu">
    <a href="#">CLOTHING</a>
    <a href="#">ACCESSORIES</a>
    <a href="#">OBJECTS</a>
    <a href="#" class="highlight">SALE</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.br-dd-wrapper { position: relative; }
.br-dd-btn { background: #fff; border: 4px solid #000; padding: 10px 30px; font-size: 1.5rem; font-weight: 900; color: #000; cursor: pointer; text-transform: uppercase; box-shadow: 6px 6px 0 #000; transition: 0.1s; }
.br-dd-btn:active { transform: translate(4px, 4px); box-shadow: 0 0 0 #000; }
.br-dd-menu { position: absolute; top: calc(100% + 15px); left: 0; width: 250px; background: #fff; border: 4px solid #000; display: flex; flex-direction: column; box-shadow: 8px 8px 0 #000; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: 0.2s; z-index: 10; }
.br-dd-wrapper:hover .br-dd-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.br-dd-menu a { padding: 15px 20px; color: #000; text-decoration: none; font-size: 1.2rem; font-weight: 900; border-bottom: 4px solid #000; transition: 0.2s; }
.br-dd-menu a:last-child { border-bottom: none; }
.br-dd-menu a:hover { background: #000; color: #fff; }
.br-dd-menu a.highlight { background: #facc15; }
.br-dd-menu a.highlight:hover { background: #000; color: #facc15; }`,
    jsCode: ``
  },

  // 6. Neumorphic Dropdown
  {
    _id: "dd6",
    title: "Neumorphic Dropdown",
    slug: "neumorphic-dropdown",
    description: "Soft extruded menu items appearing from a pressed button.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["dropdown", "neumorphism", "soft", "ui"],
    isPremium: false,
    views: 12200,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-dd-wrapper">
  <button class="neu-dd-btn">Profile</button>
  <div class="neu-dd-menu">
    <a href="#">My Account</a>
    <a href="#">Preferences</a>
    <a href="#">Security</a>
    <a href="#">Sign Out</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.neu-dd-wrapper { position: relative; }
.neu-dd-btn { background: #e0e5ec; border: none; padding: 15px 30px; font-size: 1rem; font-weight: bold; color: #718096; border-radius: 15px; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.3s; }
.neu-dd-btn:active, .neu-dd-wrapper:hover .neu-dd-btn { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5); color: #4299e1; }
.neu-dd-menu { position: absolute; top: calc(100% + 20px); left: 0; width: 220px; background: #e0e5ec; border-radius: 15px; padding: 15px; display: flex; flex-direction: column; gap: 10px; box-shadow: 8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.5); opacity: 0; visibility: hidden; transform: translateY(-10px); transition: 0.3s; z-index: 10; }
.neu-dd-wrapper:hover .neu-dd-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.neu-dd-menu a { padding: 12px 15px; color: #a0aec0; text-decoration: none; font-weight: bold; border-radius: 10px; transition: 0.3s; text-align: center; }
.neu-dd-menu a:hover { color: #4299e1; background: #e0e5ec; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Avatar Profile Dropdown
  {
    _id: "dd7",
    title: "Avatar Profile Dropdown",
    slug: "avatar-profile-dropdown",
    description: "A dropdown triggered by an avatar, displaying user info at the top.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["dropdown", "avatar", "profile", "dashboard"],
    isPremium: false,
    views: 18100,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-dd-wrapper">
  <button class="av-dd-btn">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="User">
  </button>
  <div class="av-dd-menu">
    <div class="av-header">
      <h4>John Doe</h4>
      <p>john@example.com</p>
    </div>
    <div class="av-links">
      <a href="#">My Profile</a>
      <a href="#">Subscription</a>
      <a href="#">Settings</a>
      <div class="av-div"></div>
      <a href="#" class="av-logout">Sign out</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.av-dd-wrapper { position: relative; display: inline-block; }
.av-dd-btn { background: transparent; border: 2px solid transparent; padding: 2px; border-radius: 50%; cursor: pointer; transition: 0.2s; outline: none; }
.av-dd-btn img { width: 45px; height: 45px; border-radius: 50%; object-fit: cover; display: block; }
.av-dd-btn:hover { border-color: #3b82f6; }
.av-dd-menu { position: absolute; top: calc(100% + 10px); right: 0; width: 240px; background: #fff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: 0.2s; z-index: 10; overflow: hidden; }
.av-dd-wrapper:hover .av-dd-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.av-header { padding: 15px 20px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; }
.av-header h4 { margin: 0 0 2px 0; font-size: 0.95rem; color: #0f172a; }
.av-header p { margin: 0; font-size: 0.8rem; color: #64748b; }
.av-links { display: flex; flex-direction: column; padding: 10px 0; }
.av-links a { padding: 8px 20px; color: #334155; text-decoration: none; font-size: 0.9rem; transition: 0.2s; }
.av-links a:hover { background: #f1f5f9; color: #0f172a; }
.av-div { height: 1px; background: #e2e8f0; margin: 5px 0; }
.av-logout { color: #ef4444 !important; }`,
    jsCode: ``
  },

  // 8. Minimalist Hover Line Dropdown
  {
    _id: "dd8",
    title: "Minimalist Line Dropdown",
    slug: "minimalist-line-dropdown",
    description: "Borderless text items that reveal a thin underline on hover.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["dropdown", "minimalist", "clean", "lines"],
    isPremium: false,
    views: 13400,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="min-dd-wrapper">
  <button class="min-dd-btn">Discover</button>
  <div class="min-dd-menu">
    <a href="#">New Arrivals</a>
    <a href="#">Best Sellers</a>
    <a href="#">Collections</a>
    <a href="#">Sale</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.min-dd-wrapper { position: relative; }
.min-dd-btn { background: transparent; border: none; font-size: 1.1rem; font-weight: 500; color: #111; cursor: pointer; padding-bottom: 5px; border-bottom: 1px solid #111; }
.min-dd-menu { position: absolute; top: calc(100% + 20px); left: 0; width: 180px; display: flex; flex-direction: column; gap: 15px; opacity: 0; visibility: hidden; transform: translateY(-5px); transition: 0.3s; z-index: 10; }
.min-dd-wrapper:hover .min-dd-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.min-dd-menu a { color: #666; text-decoration: none; font-size: 0.95rem; transition: 0.2s; position: relative; display: inline-block; width: fit-content; }
.min-dd-menu a::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: #111; transition: 0.3s; }
.min-dd-menu a:hover { color: #111; }
.min-dd-menu a:hover::after { width: 100%; }`,
    jsCode: ``
  },

  // 9. Floating Context Menu
  {
    _id: "dd9",
    title: "Floating Context Menu",
    slug: "floating-context-menu",
    description: "Designed to look like a right-click OS context menu floating on the screen.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["dropdown", "context-menu", "floating", "os"],
    isPremium: true,
    views: 14600,
    downloads: 4000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ctx-wrapper">
  <button class="ctx-btn">Action <span>⋮</span></button>
  <div class="ctx-menu">
    <a href="#"><span>👁</span> View Details</a>
    <a href="#"><span>✎</span> Edit File</a>
    <a href="#"><span>⎘</span> Duplicate</a>
    <div class="ctx-div"></div>
    <a href="#" class="ctx-red"><span>🗑</span> Delete</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e5e7eb; display: flex; justify-content: center; align-items: flex-start; padding-top: 100px; min-height: 100vh; }
.ctx-wrapper { position: relative; }
.ctx-btn { background: #fff; border: none; padding: 8px 16px; font-size: 0.9rem; font-weight: 500; border-radius: 6px; cursor: pointer; color: #374151; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 8px; }
.ctx-menu { position: absolute; top: calc(100% + 8px); left: 0; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); width: 200px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05); display: flex; flex-direction: column; padding: 6px; opacity: 0; visibility: hidden; transform: scale(0.95); transform-origin: top left; transition: 0.15s ease-out; z-index: 10; }
.ctx-wrapper:hover .ctx-menu { opacity: 1; visibility: visible; transform: scale(1); }
.ctx-menu a { padding: 8px 12px; color: #374151; text-decoration: none; font-size: 0.85rem; border-radius: 4px; display: flex; align-items: center; gap: 10px; transition: 0.1s; }
.ctx-menu a span { font-size: 1rem; color: #9ca3af; width: 16px; text-align: center; }
.ctx-menu a:hover { background: #3b82f6; color: #fff; }
.ctx-menu a:hover span { color: #fff; }
.ctx-div { height: 1px; background: rgba(0,0,0,0.08); margin: 4px 0; }
.ctx-red:hover { background: #ef4444 !important; }`,
    jsCode: ``
  },

  // 10. Multi-column Mega Menu Dropdown
  {
    _id: "dd10",
    title: "Mega Menu Dropdown",
    slug: "mega-menu-dropdown",
    description: "A wide, multi-column dropdown perfect for large e-commerce categories.",
    category: "Dropdowns",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["dropdown", "mega-menu", "ecommerce", "wide"],
    isPremium: true,
    views: 19800,
    downloads: 5800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="mega-wrapper">
  <button class="mega-btn">Apparel</button>
  <div class="mega-menu">
    <div class="mega-col">
      <h3>Men's</h3>
      <a href="#">T-Shirts</a>
      <a href="#">Jackets</a>
      <a href="#">Pants</a>
      <a href="#">Activewear</a>
    </div>
    <div class="mega-col">
      <h3>Women's</h3>
      <a href="#">Dresses</a>
      <a href="#">Tops</a>
      <a href="#">Skirts</a>
      <a href="#">Swimwear</a>
    </div>
    <div class="mega-col bg-gray">
      <h3>Featured</h3>
      <a href="#">New Arrivals</a>
      <a href="#">Best Sellers</a>
      <a href="#" class="sale">Clearance Sale</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: flex-start; padding-top: 50px; min-height: 100vh; }
.mega-wrapper { position: relative; }
.mega-btn { background: transparent; border: none; padding: 20px; font-size: 1.1rem; font-weight: 600; color: #1e293b; cursor: pointer; transition: 0.2s; }
.mega-btn:hover { color: #3b82f6; }
.mega-menu { position: absolute; top: 100%; left: -200px; width: 600px; background: #fff; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; display: flex; opacity: 0; visibility: hidden; transform: translateY(10px); transition: 0.3s ease; z-index: 10; overflow: hidden; }
.mega-wrapper:hover .mega-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.mega-col { flex: 1; padding: 30px; display: flex; flex-direction: column; gap: 12px; }
.mega-col.bg-gray { background: #f8fafc; }
.mega-col h3 { margin: 0 0 10px 0; font-size: 0.9rem; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px; }
.mega-col a { color: #475569; text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: 0.2s; }
.mega-col a:hover { color: #3b82f6; padding-left: 5px; }
.mega-col a.sale { color: #ef4444; }
.mega-col a.sale:hover { color: #b91c1c; }`,
    jsCode: ``
  }
];
