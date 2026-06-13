import { Design } from "./designs-data";

export const BATCH_28_DESIGNS: Design[] = [
  // 1. Classic Solid Badges
  {
    _id: "bdg1",
    title: "Classic Solid Badges",
    slug: "classic-solid-badges",
    description: "Standard high-contrast solid badges for status indication (Success, Warning, Error, Info).",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["badge", "solid", "classic", "status"],
    isPremium: false,
    views: 14500,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="badge-wrap">
  <span class="badge solid-info">New</span>
  <span class="badge solid-success">Completed</span>
  <span class="badge solid-warning">Pending</span>
  <span class="badge solid-error">Failed</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f9fafb; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.badge-wrap { display: flex; gap: 15px; flex-wrap: wrap; }
.badge { padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: #fff; display: inline-flex; align-items: center; justify-content: center; }
.solid-info { background: #3b82f6; }
.solid-success { background: #10b981; }
.solid-warning { background: #f59e0b; }
.solid-error { background: #ef4444; }`,
    jsCode: ``
  },

  // 2. Soft/Subtle Badges
  {
    _id: "bdg2",
    title: "Soft Subtle Badges",
    slug: "soft-subtle-badges",
    description: "Modern, low-contrast badges with tinted backgrounds and dark text for a softer UI.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["badge", "soft", "subtle", "modern"],
    isPremium: false,
    views: 18200,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="badge-wrap">
  <span class="badge soft-info">Active</span>
  <span class="badge soft-success">Paid</span>
  <span class="badge soft-warning">Awaiting</span>
  <span class="badge soft-error">Declined</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.badge-wrap { display: flex; gap: 15px; flex-wrap: wrap; }
.badge { padding: 4px 12px; border-radius: 999px; font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; justify-content: center; }
.soft-info { background: #dbeafe; color: #1e40af; }
.soft-success { background: #d1fae5; color: #065f46; }
.soft-warning { background: #fef3c7; color: #92400e; }
.soft-error { background: #fee2e2; color: #b91c1c; }`,
    jsCode: ``
  },

  // 3. Outline/Ghost Badges
  {
    _id: "bdg3",
    title: "Ghost Outline Badges",
    slug: "ghost-outline-badges",
    description: "Minimalist badges with transparent backgrounds and colored borders.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["badge", "outline", "ghost", "minimal"],
    isPremium: false,
    views: 12100,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="badge-wrap">
  <span class="badge ghost-primary">Primary</span>
  <span class="badge ghost-secondary">Secondary</span>
  <span class="badge ghost-accent">Accent</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.badge-wrap { display: flex; gap: 15px; flex-wrap: wrap; }
.badge { padding: 4px 12px; border-radius: 6px; border: 1.5px solid; font-size: 0.8rem; font-weight: 600; background: transparent; display: inline-flex; align-items: center; justify-content: center; }
.ghost-primary { border-color: #3b82f6; color: #3b82f6; }
.ghost-secondary { border-color: #6b7280; color: #6b7280; }
.ghost-accent { border-color: #8b5cf6; color: #8b5cf6; }`,
    jsCode: ``
  },

  // 4. Dot Indicator Badges
  {
    _id: "bdg4",
    title: "Dot Status Badges",
    slug: "dot-status-badges",
    description: "Neutral text badges featuring a colored dot to indicate status.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["badge", "dot", "indicator", "status"],
    isPremium: false,
    views: 15600,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="badge-wrap">
  <span class="badge dot-badge"><span class="dot d-green"></span> Online</span>
  <span class="badge dot-badge"><span class="dot d-yellow"></span> Away</span>
  <span class="badge dot-badge"><span class="dot d-red"></span> Busy</span>
  <span class="badge dot-badge"><span class="dot d-gray"></span> Offline</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.badge-wrap { display: flex; gap: 15px; flex-wrap: wrap; }
.dot-badge { padding: 4px 12px 4px 10px; border-radius: 999px; font-size: 0.85rem; font-weight: 500; color: #334155; background: #fff; border: 1px solid #e2e8f0; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.dot { width: 8px; height: 8px; border-radius: 50%; }
.d-green { background: #10b981; box-shadow: 0 0 0 2px #d1fae5; }
.d-yellow { background: #f59e0b; box-shadow: 0 0 0 2px #fef3c7; }
.d-red { background: #ef4444; box-shadow: 0 0 0 2px #fee2e2; }
.d-gray { background: #9ca3af; box-shadow: 0 0 0 2px #f3f4f6; }`,
    jsCode: ``
  },

  // 5. Neumorphic Badges
  {
    _id: "bdg5",
    title: "Neumorphic Badges",
    slug: "neumorphic-badges",
    description: "Soft UI badges that extrude from the background for a 3D tactile feel.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["badge", "neumorphism", "soft", "3d"],
    isPremium: true,
    views: 11200,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="badge-wrap">
  <span class="badge neu-badge">Version 2.0</span>
  <span class="badge neu-badge">Beta</span>
  <span class="badge neu-badge">Update</span>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.badge-wrap { display: flex; gap: 20px; flex-wrap: wrap; }
.neu-badge { padding: 8px 16px; border-radius: 12px; font-size: 0.85rem; font-weight: bold; color: #718096; background: #e0e5ec; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); letter-spacing: 0.5px; }`,
    jsCode: ``
  },

  // 6. Cyberpunk Neon Tags
  {
    _id: "bdg6",
    title: "Cyberpunk Tags",
    slug: "cyberpunk-tags",
    description: "Dark, glowing terminal-style tags for hackers and gamers.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["badge", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 13900,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="badge-wrap">
  <span class="badge cy-badge cy-cyan">[ SYS_OK ]</span>
  <span class="badge cy-badge cy-pink">[ BREACH ]</span>
  <span class="badge cy-badge cy-yellow">[ WARN ]</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.badge-wrap { display: flex; gap: 20px; flex-wrap: wrap; }
.cy-badge { padding: 6px 12px; font-size: 0.9rem; font-weight: bold; letter-spacing: 1px; background: rgba(0,0,0,0.5); border: 1px solid; }
.cy-cyan { color: #0ff; border-color: #0ff; box-shadow: inset 0 0 8px rgba(0,255,255,0.2), 0 0 8px rgba(0,255,255,0.2); text-shadow: 0 0 5px #0ff; }
.cy-pink { color: #f0f; border-color: #f0f; box-shadow: inset 0 0 8px rgba(255,0,255,0.2), 0 0 8px rgba(255,0,255,0.2); text-shadow: 0 0 5px #f0f; }
.cy-yellow { color: #ff0; border-color: #ff0; box-shadow: inset 0 0 8px rgba(255,255,0,0.2), 0 0 8px rgba(255,255,0,0.2); text-shadow: 0 0 5px #ff0; }`,
    jsCode: ``
  },

  // 7. Glassmorphism Badges
  {
    _id: "bdg7",
    title: "Glassmorphism Badges",
    slug: "glassmorphism-badges",
    description: "Frosted glass pills floating over a vibrant, dynamic background.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["badge", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 16500,
    downloads: 4400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="badge-wrap">
    <span class="badge gl-badge">Design</span>
    <span class="badge gl-badge">Development</span>
    <span class="badge gl-badge">Marketing</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.badge-wrap { display: flex; gap: 15px; flex-wrap: wrap; }
.gl-badge { padding: 6px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; color: #fff; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }`,
    jsCode: ``
  },

  // 8. Brutalist Tags
  {
    _id: "bdg8",
    title: "Brutalist Tags",
    slug: "brutalist-tags",
    description: "Thick borders, heavy fonts, and high contrast hard shadows.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["badge", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 10700,
    downloads: 2600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="badge-wrap">
  <span class="badge br-badge bg-yellow">HOT</span>
  <span class="badge br-badge bg-white">SALE</span>
  <span class="badge br-badge bg-red">SOLD OUT</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.badge-wrap { display: flex; gap: 20px; flex-wrap: wrap; }
.br-badge { padding: 6px 14px; font-size: 1.1rem; font-weight: 900; color: #000; border: 3px solid #000; box-shadow: 4px 4px 0 #000; text-transform: uppercase; }
.bg-yellow { background: #facc15; }
.bg-white { background: #fff; }
.bg-red { background: #ef4444; color: #fff; }`,
    jsCode: ``
  },

  // 9. Gradient Pill Badges
  {
    _id: "bdg9",
    title: "Gradient Pill Badges",
    slug: "gradient-pill-badges",
    description: "Vibrant, eye-catching badges using smooth CSS gradients.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["badge", "gradient", "vibrant", "modern"],
    isPremium: true,
    views: 14100,
    downloads: 3700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="badge-wrap">
  <span class="badge grad-1">Premium</span>
  <span class="badge grad-2">Featured</span>
  <span class="badge grad-3">Pro</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #111827; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.badge-wrap { display: flex; gap: 15px; flex-wrap: wrap; }
.badge { padding: 6px 16px; border-radius: 30px; font-size: 0.85rem; font-weight: 600; color: #fff; border: none; }
.grad-1 { background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); color: #000; }
.grad-2 { background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); color: #000; }
.grad-3 { background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); }`,
    jsCode: ``
  },

  // 10. Floating Notification Badges
  {
    _id: "bdg10",
    title: "Notification Badges",
    slug: "notification-badges",
    description: "Small red dot badges usually pinned to the top right of icons or avatars.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["badge", "notification", "dot", "floating"],
    isPremium: false,
    views: 19400,
    downloads: 5500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="badge-wrap">
  <div class="icon-wrap">
    <span class="icon">✉</span>
    <span class="notif-badge">3</span>
  </div>
  <div class="icon-wrap">
    <span class="icon">🔔</span>
    <span class="notif-badge dot-only"></span>
  </div>
  <div class="icon-wrap avatar">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&q=80" alt="Avatar">
    <span class="notif-badge">99+</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.badge-wrap { display: flex; gap: 40px; align-items: center; }
.icon-wrap { position: relative; display: inline-flex; }
.icon { font-size: 2rem; color: #475569; }
.avatar img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
.notif-badge { position: absolute; top: -5px; right: -5px; background: #ef4444; color: #fff; font-size: 0.7rem; font-weight: bold; padding: 2px 6px; border-radius: 10px; border: 2px solid #f8fafc; display: flex; justify-content: center; align-items: center; min-width: 12px; }
.dot-only { padding: 0; width: 10px; height: 10px; border-radius: 50%; top: 0; right: 0; min-width: 0; }`,
    jsCode: ``
  }
];
