import { Design } from "./designs-data";

export const BATCH_47_DESIGNS: Design[] = [
  // 1. Classic Pill Badge
  {
    _id: "bdg1",
    title: "Classic Pill Badge",
    slug: "classic-pill-badge",
    description: "Standard rounded pill shape with solid background and high contrast text.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["badge", "pill", "classic", "solid"],
    isPremium: false,
    views: 25000,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="bdg-wrap">
  <span class="bdg-c bdg-c-primary">New Feature</span>
  <span class="bdg-c bdg-c-success">Completed</span>
  <span class="bdg-c bdg-c-danger">Failed</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.bdg-wrap { display: flex; gap: 15px; }
.bdg-c { display: inline-flex; align-items: center; padding: 4px 12px; border-radius: 9999px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.bdg-c-primary { background: #3b82f6; color: #ffffff; }
.bdg-c-success { background: #10b981; color: #ffffff; }
.bdg-c-danger { background: #ef4444; color: #ffffff; }`,
    jsCode: ``
  },

  // 2. Soft Pastel Badge
  {
    _id: "bdg2",
    title: "Soft Pastel Badge",
    slug: "soft-pastel-badge",
    description: "Low opacity background with matching text color for a gentle look.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["badge", "soft", "pastel", "light"],
    isPremium: false,
    views: 28400,
    downloads: 8100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="bdg-wrap">
  <span class="bdg-s bdg-s-blue">Information</span>
  <span class="bdg-s bdg-s-green">Verified</span>
  <span class="bdg-s bdg-s-orange">Pending</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.bdg-wrap { display: flex; gap: 15px; }
.bdg-s { display: inline-block; padding: 6px 14px; border-radius: 6px; font-size: 0.85rem; font-weight: 700; }
.bdg-s-blue { background: #eff6ff; color: #2563eb; }
.bdg-s-green { background: #ecfdf5; color: #059669; }
.bdg-s-orange { background: #fff7ed; color: #ea580c; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Badge
  {
    _id: "bdg3",
    title: "Cyberpunk Badge",
    slug: "cyberpunk-badge",
    description: "Neon colors, sharp angles, and glitch text effects.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["badge", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 19500,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="bdg-wrap">
  <span class="bdg-cy">ERR_404</span>
  <span class="bdg-cy bdg-cy-alt">SYS_ON</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.bdg-wrap { display: flex; gap: 20px; }
.bdg-cy { display: inline-block; padding: 5px 15px; background: rgba(0,255,255,0.1); border: 1px solid #0ff; color: #0ff; font-weight: bold; font-size: 0.9rem; clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); box-shadow: 0 0 10px rgba(0,255,255,0.2); text-shadow: 0 0 5px #0ff; }
.bdg-cy.bdg-cy-alt { border-color: #f0f; color: #f0f; background: rgba(255,0,255,0.1); box-shadow: 0 0 10px rgba(255,0,255,0.2); text-shadow: 0 0 5px #f0f; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Badge
  {
    _id: "bdg4",
    title: "Glassmorphism Badge",
    slug: "glassmorphism-badge",
    description: "Frosted glass badge over a vibrant background.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["badge", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 26100,
    downloads: 7100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="bdg-wrap">
    <span class="bdg-gl">Premium</span>
    <span class="bdg-gl">Exclusive</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); }
.bdg-wrap { display: flex; gap: 20px; }
.bdg-gl { display: inline-block; padding: 6px 16px; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.4); border-radius: 20px; color: #ffffff; font-weight: 600; font-size: 0.9rem; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-shadow: 0 1px 2px rgba(0,0,0,0.2); }`,
    jsCode: ``
  },

  // 5. Brutalist Badge
  {
    _id: "bdg5",
    title: "Brutalist Badge",
    slug: "brutalist-badge",
    description: "Heavy borders, sharp corners, and loud colors.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["badge", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 18200,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="bdg-wrap">
  <span class="bdg-br">URGENT</span>
  <span class="bdg-br bdg-br-yellow">LATEST</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e5e5; }
.bdg-wrap { display: flex; gap: 20px; }
.bdg-br { display: inline-block; padding: 5px 10px; background: #ef4444; color: #fff; font-weight: 900; font-size: 1rem; border: 3px solid #000; box-shadow: 3px 3px 0 #000; text-transform: uppercase; letter-spacing: 1px; }
.bdg-br.bdg-br-yellow { background: #facc15; color: #000; }`,
    jsCode: ``
  },

  // 6. Neumorphic Badge
  {
    _id: "bdg6",
    title: "Neumorphic Badge",
    slug: "neumorphic-badge",
    description: "Soft UI extruded badge blending into the container.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["badge", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 17400,
    downloads: 4300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="bdg-wrap">
  <span class="bdg-neu">Online</span>
  <span class="bdg-neu bdg-neu-inset">Offline</span>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.bdg-wrap { display: flex; gap: 25px; }
.bdg-neu { display: inline-block; padding: 8px 18px; border-radius: 20px; background: #e0e5ec; color: #4a5568; font-weight: bold; font-size: 0.9rem; box-shadow: 5px 5px 10px rgba(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5); }
.bdg-neu.bdg-neu-inset { color: #a0aec0; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Outline Dot Badge
  {
    _id: "bdg7",
    title: "Outline Dot Badge",
    slug: "outline-dot-badge",
    description: "Clean outline with a colored status dot.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["badge", "outline", "dot", "status"],
    isPremium: false,
    views: 29500,
    downloads: 8300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="bdg-wrap">
  <span class="bdg-out"><i class="bdg-dot-green"></i> Active</span>
  <span class="bdg-out"><i class="bdg-dot-red"></i> Error</span>
  <span class="bdg-out"><i class="bdg-dot-gray"></i> Draft</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.bdg-wrap { display: flex; gap: 15px; }
.bdg-out { display: inline-flex; align-items: center; gap: 8px; padding: 4px 12px; border-radius: 9999px; border: 1px solid #e2e8f0; color: #475569; font-size: 0.85rem; font-weight: 600; background: #fff; }
.bdg-out i { display: block; width: 8px; height: 8px; border-radius: 50%; }
.bdg-dot-green { background: #10b981; }
.bdg-dot-red { background: #ef4444; }
.bdg-dot-gray { background: #94a3b8; }`,
    jsCode: ``
  },

  // 8. Gradient Glow Badge
  {
    _id: "bdg8",
    title: "Gradient Glow Badge",
    slug: "gradient-glow-badge",
    description: "Dark badge with vibrant gradient text and subtle glowing border.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["badge", "dark", "gradient", "glow"],
    isPremium: true,
    views: 21800,
    downloads: 5900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="bdg-wrap">
  <span class="bdg-dg">Pro Plan</span>
  <span class="bdg-dg">Early Access</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; }
.bdg-wrap { display: flex; gap: 20px; }
.bdg-dg { position: relative; padding: 6px 14px; background: #1e293b; border-radius: 6px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; z-index: 1; }
.bdg-dg::before { content: ''; position: absolute; top: -1px; left: -1px; right: -1px; bottom: -1px; background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6); border-radius: 7px; z-index: -1; }
.bdg-dg::after { content: ''; position: absolute; top: 1px; left: 1px; right: 1px; bottom: 1px; background: #1e293b; border-radius: 5px; z-index: -1; }
.bdg-dg { background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`,
    jsCode: ``
  },

  // 9. Icon Tag Badge
  {
    _id: "bdg9",
    title: "Icon Tag Badge",
    slug: "icon-tag-badge",
    description: "Badge with a prominent icon section and split background.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["badge", "icon", "tag", "split"],
    isPremium: true,
    views: 23100,
    downloads: 6500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="bdg-wrap">
  <div class="bdg-tag">
    <span class="bdg-t-icon">⭐</span>
    <span class="bdg-t-text">Featured</span>
  </div>
  <div class="bdg-tag bdg-tag-alt">
    <span class="bdg-t-icon">🔥</span>
    <span class="bdg-t-text">Trending</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f1f5f9; }
.bdg-wrap { display: flex; gap: 20px; }
.bdg-tag { display: flex; align-items: stretch; border-radius: 6px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
.bdg-t-icon { background: #3b82f6; padding: 6px 10px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; }
.bdg-t-text { background: #fff; padding: 6px 12px; color: #0f172a; font-weight: 600; font-size: 0.85rem; display: flex; align-items: center; border: 1px solid #e2e8f0; border-left: none; border-radius: 0 6px 6px 0; }
.bdg-tag-alt .bdg-t-icon { background: #ef4444; }`,
    jsCode: ``
  },

  // 10. Floating 3D Badge
  {
    _id: "bdg10",
    title: "Floating 3D Badge",
    slug: "floating-3d-badge",
    description: "A badge that looks like a floating 3D chip with strong shadows.",
    category: "Badges",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["badge", "3d", "floating", "shadow"],
    isPremium: true,
    views: 20500,
    downloads: 5700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="bdg-wrap">
  <span class="bdg-3d">v2.0.4</span>
  <span class="bdg-3d bdg-3d-dark">Stable</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e2e8f0; }
.bdg-wrap { display: flex; gap: 30px; }
.bdg-3d { display: inline-block; padding: 8px 16px; background: #ffffff; color: #3b82f6; font-weight: 800; font-size: 0.9rem; border-radius: 8px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05), inset 0 -3px 0 rgba(0,0,0,0.1); transform: translateY(-2px); }
.bdg-3d-dark { background: #0f172a; color: #10b981; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -2px rgba(0,0,0,0.1), inset 0 -3px 0 rgba(255,255,255,0.2); }`,
    jsCode: ``
  }
];
