import { Design } from "./designs-data";

export const BATCH_36_DESIGNS: Design[] = [
  // 1. Classic Plus FAB
  {
    _id: "fab1",
    title: "Classic Plus FAB",
    slug: "classic-plus-fab",
    description: "A standard circular floating action button with a drop shadow and hover lift.",
    category: "Floating Action Buttons",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["fab", "button", "classic", "floating"],
    isPremium: false,
    views: 18200,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fab-classic-wrap">
  <div class="fab-area">
    <button class="fab-classic">+</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.fab-classic-wrap { width: 300px; height: 300px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); position: relative; border: 1px solid #e2e8f0; overflow: hidden; }
.fab-area { position: absolute; bottom: 20px; right: 20px; }
.fab-classic { width: 56px; height: 56px; border-radius: 50%; background: #3b82f6; border: none; color: #fff; font-size: 28px; display: flex; justify-content: center; align-items: center; cursor: pointer; box-shadow: 0 4px 10px rgba(59, 130, 246, 0.4); transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.2s; }
.fab-classic:hover { transform: scale(1.1) translateY(-2px); background: #2563eb; }
.fab-classic:active { transform: scale(0.95); }`,
    jsCode: ``
  },

  // 2. Expanding Menu FAB
  {
    _id: "fab2",
    title: "Expanding Menu FAB",
    slug: "expanding-menu-fab",
    description: "Hovering over the main FAB reveals secondary action buttons stacked above.",
    category: "Floating Action Buttons",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["fab", "menu", "expand", "hover"],
    isPremium: true,
    views: 21500,
    downloads: 6400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fab-expand-wrap">
  <div class="fab-menu">
    <button class="fab-sub">✎</button>
    <button class="fab-sub">◂</button>
    <button class="fab-sub">⚙</button>
    <button class="fab-main">≡</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.fab-expand-wrap { width: 300px; height: 300px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); position: relative; border: 1px solid #e2e8f0; }
.fab-menu { position: absolute; bottom: 20px; right: 20px; display: flex; flex-direction: column-reverse; align-items: center; gap: 10px; }
.fab-main { width: 56px; height: 56px; border-radius: 50%; background: #10b981; border: none; color: #fff; font-size: 24px; cursor: pointer; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.4); transition: 0.3s; z-index: 2; }
.fab-sub { width: 44px; height: 44px; border-radius: 50%; background: #fff; border: 1px solid #cbd5e1; color: #475569; font-size: 18px; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.1); opacity: 0; transform: translateY(20px) scale(0.5); pointer-events: none; transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 1; }
.fab-menu:hover .fab-sub { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
.fab-menu:hover .fab-main { transform: rotate(90deg); background: #059669; }
.fab-sub:nth-child(1) { transition-delay: 0.1s; }
.fab-sub:nth-child(2) { transition-delay: 0.05s; }
.fab-sub:nth-child(3) { transition-delay: 0s; }`,
    jsCode: ``
  },

  // 3. Extended Pill FAB
  {
    _id: "fab3",
    title: "Extended Pill FAB",
    slug: "extended-pill-fab",
    description: "A button that looks like a normal FAB but expands into a pill with text on hover.",
    category: "Floating Action Buttons",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["fab", "pill", "expand", "text"],
    isPremium: false,
    views: 17800,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fab-pill-wrap">
  <button class="fab-pill">
    <span class="fab-p-icon">✉</span>
    <span class="fab-p-text">Compose</span>
  </button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.fab-pill-wrap { width: 300px; height: 300px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); position: relative; border: 1px solid #e2e8f0; }
.fab-pill { position: absolute; bottom: 20px; right: 20px; height: 56px; border-radius: 28px; background: #8b5cf6; border: none; color: #fff; cursor: pointer; box-shadow: 0 4px 10px rgba(139, 92, 246, 0.4); display: flex; align-items: center; padding: 0 18px; gap: 0; overflow: hidden; transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); width: 56px; box-sizing: border-box; justify-content: center; }
.fab-p-icon { font-size: 22px; }
.fab-p-text { font-size: 1rem; font-weight: 600; white-space: nowrap; opacity: 0; width: 0; transition: 0.3s; transform: translateX(10px); display: block; }
.fab-pill:hover { width: 140px; padding: 0 20px; gap: 10px; justify-content: flex-start; }
.fab-pill:hover .fab-p-text { opacity: 1; width: auto; transform: translateX(0); }`,
    jsCode: ``
  },

  // 4. Cyberpunk Neon FAB
  {
    _id: "fab4",
    title: "Cyberpunk FAB",
    slug: "cyberpunk-fab",
    description: "A square, neon-glowing high-tech action button.",
    category: "Floating Action Buttons",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["fab", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 14500,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fab-cy-wrap">
  <button class="fab-cy">EXEC</button>
</div>`,
    cssCode: `body { margin: 0; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: 'Courier New', Courier, monospace; }
.fab-cy-wrap { width: 300px; height: 300px; background: #111; border-radius: 4px; box-shadow: inset 0 0 20px rgba(0,0,0,0.8); position: relative; border: 1px dashed #333; }
.fab-cy { position: absolute; bottom: 20px; right: 20px; width: 60px; height: 60px; background: transparent; border: 2px solid #0ff; color: #0ff; font-weight: bold; cursor: pointer; box-shadow: 0 0 10px rgba(0,255,255,0.2), inset 0 0 10px rgba(0,255,255,0.2); text-shadow: 0 0 5px #0ff; transition: 0.2s; clip-path: polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%); }
.fab-cy:hover { background: rgba(0,255,255,0.2); box-shadow: 0 0 20px rgba(0,255,255,0.5), inset 0 0 15px rgba(0,255,255,0.5); }
.fab-cy:active { background: #0ff; color: #000; box-shadow: 0 0 30px #0ff; }`,
    jsCode: ``
  },

  // 5. Neumorphic FAB
  {
    _id: "fab5",
    title: "Neumorphic FAB",
    slug: "neumorphic-fab",
    description: "Soft UI button that smoothly presses into the background.",
    category: "Floating Action Buttons",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["fab", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 13900,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fab-neu-wrap">
  <button class="fab-neu">⚙</button>
</div>`,
    cssCode: `body { margin: 0; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.fab-neu-wrap { width: 300px; height: 300px; background: #e0e5ec; border-radius: 20px; box-shadow: inset 8px 8px 16px rgba(163,177,198,0.3), inset -8px -8px 16px rgba(255,255,255,0.3); position: relative; }
.fab-neu { position: absolute; bottom: 25px; right: 25px; width: 60px; height: 60px; border-radius: 50%; background: #e0e5ec; border: none; color: #4a5568; font-size: 24px; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.6); transition: 0.2s; }
.fab-neu:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.6); color: #3182ce; }`,
    jsCode: ``
  },

  // 6. Glassmorphism FAB
  {
    _id: "fab6",
    title: "Glassmorphism FAB",
    slug: "glassmorphism-fab",
    description: "A translucent frosted glass action button floating over a gradient.",
    category: "Floating Action Buttons",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["fab", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 19800,
    downloads: 5500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="fab-gl-wrap">
    <button class="fab-gl">★</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.fab-gl-wrap { width: 300px; height: 300px; background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); border-radius: 16px; border: 1px solid rgba(255,255,255,0.3); position: relative; }
.fab-gl { position: absolute; bottom: 20px; right: 20px; width: 60px; height: 60px; border-radius: 50%; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.4); color: #fff; font-size: 24px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: 0.3s; }
.fab-gl:hover { background: rgba(255,255,255,0.3); transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
.fab-gl:active { transform: translateY(0); }`,
    jsCode: ``
  },

  // 7. Brutalist FAB
  {
    _id: "fab7",
    title: "Brutalist Action Button",
    slug: "brutalist-action-button",
    description: "Hard corners, thick black borders, and an offset solid shadow.",
    category: "Floating Action Buttons",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["fab", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 11500,
    downloads: 2700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fab-br-wrap">
  <button class="fab-br">➔</button>
</div>`,
    cssCode: `body { margin: 0; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.fab-br-wrap { width: 300px; height: 300px; background: #fff; border: 4px solid #000; position: relative; box-shadow: 10px 10px 0 #a3a3a3; }
.fab-br { position: absolute; bottom: 20px; right: 20px; width: 60px; height: 60px; background: #facc15; border: 4px solid #000; color: #000; font-size: 28px; cursor: pointer; box-shadow: 4px 4px 0 #000; transition: 0.1s; }
.fab-br:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #000; }
.fab-br:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #000; }`,
    jsCode: ``
  },

  // 8. Bouncing Notification FAB
  {
    _id: "fab8",
    title: "Notification FAB",
    slug: "notification-fab",
    description: "A FAB with a glowing red dot to indicate unread messages, complete with a subtle idle bounce.",
    category: "Floating Action Buttons",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["fab", "notification", "bounce", "badge"],
    isPremium: true,
    views: 16100,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fab-notif-wrap">
  <div class="fab-notif-btn">
    <button class="f-notif">🔔</button>
    <div class="f-badge"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.fab-notif-wrap { width: 300px; height: 300px; background: #fff; border-radius: 12px; position: relative; border: 1px solid #e2e8f0; }
.fab-notif-btn { position: absolute; bottom: 20px; right: 20px; animation: idleBounce 3s infinite ease-in-out; }
.f-notif { width: 60px; height: 60px; border-radius: 50%; background: #fff; border: 2px solid #e2e8f0; color: #64748b; font-size: 24px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.05); transition: 0.2s; }
.f-notif:hover { border-color: #cbd5e1; box-shadow: 0 6px 15px rgba(0,0,0,0.1); }
.f-badge { position: absolute; top: 0; right: 0; width: 14px; height: 14px; background: #ef4444; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 8px rgba(239, 68, 68, 0.6); animation: pulseDot 1.5s infinite; }
@keyframes idleBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
@keyframes pulseDot { 0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }`,
    jsCode: ``
  },

  // 9. Gradient Glow FAB
  {
    _id: "fab9",
    title: "Gradient Glow FAB",
    slug: "gradient-glow-fab",
    description: "A beautiful multi-color gradient button with a matching blurred drop shadow.",
    category: "Floating Action Buttons",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["fab", "gradient", "glow", "colorful"],
    isPremium: true,
    views: 17400,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fab-grad-wrap">
  <div class="fab-glow-layer"></div>
  <button class="fab-grad">✦</button>
</div>`,
    cssCode: `body { margin: 0; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.fab-grad-wrap { position: relative; width: 300px; height: 300px; background: #fff; border-radius: 12px; border: 1px solid #f1f5f9; }
.fab-glow-layer { position: absolute; bottom: 15px; right: 15px; width: 70px; height: 70px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); border-radius: 50%; filter: blur(15px); opacity: 0.6; transition: 0.3s; z-index: 1; }
.fab-grad { position: absolute; bottom: 20px; right: 20px; width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); border: none; color: #fff; font-size: 24px; cursor: pointer; z-index: 2; transition: 0.3s; }
.fab-grad-wrap:hover .fab-glow-layer { filter: blur(20px); opacity: 0.9; transform: scale(1.1); }
.fab-grad-wrap:hover .fab-grad { transform: scale(1.05); }`,
    jsCode: ``
  },

  // 10. Social Share Splitting FAB
  {
    _id: "fab10",
    title: "Horizontal Share FAB",
    slug: "horizontal-share-fab",
    description: "Hovering splits the main button to reveal social sharing options horizontally.",
    category: "Floating Action Buttons",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["fab", "share", "social", "horizontal"],
    isPremium: true,
    views: 18900,
    downloads: 5000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fab-share-wrap">
  <div class="fab-share-menu">
    <button class="fab-share-sub">f</button>
    <button class="fab-share-sub">t</button>
    <button class="fab-share-sub">in</button>
    <button class="fab-share-main">➦</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: 'Inter', sans-serif; }
.fab-share-wrap { width: 300px; height: 300px; background: #f8fafc; border-radius: 12px; position: relative; border: 1px solid #e2e8f0; }
.fab-share-menu { position: absolute; bottom: 20px; right: 20px; display: flex; flex-direction: row-reverse; align-items: center; background: #fff; border-radius: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); transition: 0.3s; padding: 0; }
.fab-share-menu:hover { padding: 0 10px 0 0; background: #f1f5f9; box-shadow: 0 6px 15px rgba(0,0,0,0.1); }
.fab-share-main { width: 56px; height: 56px; border-radius: 50%; background: #1e293b; border: none; color: #fff; font-size: 24px; cursor: pointer; z-index: 2; transition: 0.3s; display: flex; justify-content: center; align-items: center; }
.fab-share-menu:hover .fab-share-main { background: #0f172a; transform: rotate(-90deg); }
.fab-share-sub { width: 40px; height: 40px; border-radius: 50%; background: #fff; border: 1px solid #cbd5e1; color: #475569; font-weight: bold; cursor: pointer; margin-right: -40px; opacity: 0; z-index: 1; transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.fab-share-menu:hover .fab-share-sub { margin-right: 10px; opacity: 1; }
.fab-share-sub:nth-child(1) { transition-delay: 0.1s; }
.fab-share-sub:nth-child(2) { transition-delay: 0.05s; }
.fab-share-sub:nth-child(3) { transition-delay: 0s; }
.fab-share-sub:hover { background: #3b82f6; color: #fff; border-color: #3b82f6; }`,
    jsCode: ``
  }
];
