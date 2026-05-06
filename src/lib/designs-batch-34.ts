import { Design } from "./designs-data";

export const BATCH_34_DESIGNS: Design[] = [
  // 1. Classic Dark Tooltip
  {
    _id: "tt1",
    title: "Classic Dark Tooltip",
    slug: "classic-dark-tooltip",
    description: "A standard dark tooltip that fades in above the element on hover.",
    category: "Tooltips",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["tooltip", "dark", "hover", "classic"],
    isPremium: false,
    views: 18100,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tt-wrap">
  <button class="tt-btn">Hover Me</button>
  <div class="tt-box">This is a helpful tip!</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tt-wrap { position: relative; display: inline-block; }
.tt-btn { padding: 10px 20px; background: #fff; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer; color: #334155; font-weight: 500; font-size: 1rem; }
.tt-box { position: absolute; bottom: 120%; left: 50%; transform: translateX(-50%) translateY(10px); background: #1e293b; color: #fff; padding: 6px 12px; border-radius: 4px; font-size: 0.85rem; white-space: nowrap; opacity: 0; visibility: hidden; transition: 0.2s; pointer-events: none; }
.tt-box::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border-width: 5px; border-style: solid; border-color: #1e293b transparent transparent transparent; }
.tt-wrap:hover .tt-box { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }`,
    jsCode: ``
  },

  // 2. Light Soft Tooltip
  {
    _id: "tt2",
    title: "Light Soft Tooltip",
    slug: "light-soft-tooltip",
    description: "A clean, white tooltip with a soft drop shadow.",
    category: "Tooltips",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["tooltip", "light", "shadow", "clean"],
    isPremium: false,
    views: 14500,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tt-light-wrap">
  <span class="tt-light-text">More Info</span>
  <div class="tt-light-box">Here is extra context.</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tt-light-wrap { position: relative; display: inline-block; cursor: pointer; color: #3b82f6; font-weight: 600; text-decoration: underline dashed; }
.tt-light-box { position: absolute; top: 130%; left: 50%; transform: translateX(-50%) scale(0.9); background: #fff; color: #475569; padding: 8px 14px; border-radius: 8px; font-size: 0.85rem; white-space: nowrap; opacity: 0; visibility: hidden; transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 4px 15px rgba(0,0,0,0.08); pointer-events: none; border: 1px solid #e2e8f0; }
.tt-light-box::before { content: ''; position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); border-width: 6px; border-style: solid; border-color: transparent transparent #e2e8f0 transparent; }
.tt-light-box::after { content: ''; position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: -1px; border-width: 5px; border-style: solid; border-color: transparent transparent #fff transparent; }
.tt-light-wrap:hover .tt-light-box { opacity: 1; visibility: visible; transform: translateX(-50%) scale(1); }`,
    jsCode: ``
  },

  // 3. Cyberpunk Tooltip
  {
    _id: "tt3",
    title: "Cyberpunk Tooltip",
    slug: "cyberpunk-tooltip",
    description: "A neon glitching tooltip that slides in with high-tech style.",
    category: "Tooltips",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["tooltip", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 16200,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tt-cy-wrap">
  <button class="tt-cy-btn">SCAN</button>
  <div class="tt-cy-box">DATA ACQUIRED</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tt-cy-wrap { position: relative; display: inline-block; }
.tt-cy-btn { padding: 10px 25px; background: transparent; border: 1px solid #0ff; color: #0ff; cursor: pointer; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; }
.tt-cy-box { position: absolute; left: 110%; top: 50%; transform: translateY(-50%) translateX(-10px); background: rgba(0,255,255,0.1); border: 1px solid #0ff; color: #0ff; padding: 5px 15px; font-size: 0.8rem; white-space: nowrap; opacity: 0; visibility: hidden; transition: 0.2s; pointer-events: none; box-shadow: 0 0 10px rgba(0,255,255,0.3); text-shadow: 0 0 5px #0ff; }
.tt-cy-box::before { content: ''; position: absolute; right: 100%; top: 50%; transform: translateY(-50%); width: 10px; height: 1px; background: #0ff; }
.tt-cy-wrap:hover .tt-cy-box { opacity: 1; visibility: visible; transform: translateY(-50%) translateX(10px); animation: ttGlitch 0.3s forwards; }
@keyframes ttGlitch { 0% { clip-path: polygon(0 0, 100% 0, 100% 10%, 0 10%); } 50% { clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%); } 100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Tooltip
  {
    _id: "tt4",
    title: "Glassmorphism Tooltip",
    slug: "glassmorphism-tooltip",
    description: "A frosted glass tooltip over an animated gradient background.",
    category: "Tooltips",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["tooltip", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 18900,
    downloads: 4900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="tt-gl-wrap">
    <button class="tt-gl-btn">Action</button>
    <div class="tt-gl-box">Frosted glass tip</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.tt-gl-wrap { position: relative; display: inline-block; }
.tt-gl-btn { padding: 12px 24px; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); border-radius: 8px; color: #fff; cursor: pointer; font-weight: bold; backdrop-filter: blur(5px); }
.tt-gl-box { position: absolute; bottom: 120%; left: 50%; transform: translateX(-50%) translateY(10px); background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.4); color: #fff; padding: 8px 16px; border-radius: 8px; font-size: 0.9rem; white-space: nowrap; opacity: 0; visibility: hidden; transition: 0.3s; pointer-events: none; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
.tt-gl-wrap:hover .tt-gl-box { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }`,
    jsCode: ``
  },

  // 5. Brutalist Tooltip
  {
    _id: "tt5",
    title: "Brutalist Tooltip",
    slug: "brutalist-tooltip",
    description: "Hard black borders and sharp corners for a brutalist aesthetic.",
    category: "Tooltips",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["tooltip", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 12100,
    downloads: 3000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tt-br-wrap">
  <button class="tt-br-btn">HOVER</button>
  <div class="tt-br-box">CRITICAL INFO!</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tt-br-wrap { position: relative; display: inline-block; }
.tt-br-btn { padding: 10px 20px; background: #fff; border: 4px solid #000; color: #000; cursor: pointer; font-weight: 900; font-size: 1rem; box-shadow: 4px 4px 0 #000; transition: 0.1s; text-transform: uppercase; }
.tt-br-btn:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #000; }
.tt-br-box { position: absolute; bottom: calc(100% + 15px); left: 50%; transform: translateX(-50%); background: #facc15; color: #000; padding: 10px; border: 4px solid #000; font-size: 0.9rem; font-weight: bold; white-space: nowrap; opacity: 0; visibility: hidden; pointer-events: none; box-shadow: 4px 4px 0 #000; transition: opacity 0.1s; }
.tt-br-wrap:hover .tt-br-box { opacity: 1; visibility: visible; }`,
    jsCode: ``
  },

  // 6. Neumorphic Tooltip
  {
    _id: "tt6",
    title: "Neumorphic Tooltip",
    slug: "neumorphic-tooltip",
    description: "Soft UI extruded tooltip blending seamlessly with the background.",
    category: "Tooltips",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["tooltip", "neumorphism", "soft", "3d"],
    isPremium: true,
    views: 13800,
    downloads: 3500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tt-neu-wrap">
  <button class="tt-neu-btn">Info</button>
  <div class="tt-neu-box">Soft UI Tooltip</div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tt-neu-wrap { position: relative; display: inline-block; }
.tt-neu-btn { padding: 12px 24px; background: #e0e5ec; border: none; border-radius: 8px; color: #4a5568; cursor: pointer; font-weight: bold; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); transition: 0.2s; }
.tt-neu-btn:hover { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
.tt-neu-box { position: absolute; top: 130%; left: 50%; transform: translateX(-50%) translateY(-10px); background: #e0e5ec; color: #718096; padding: 10px 15px; border-radius: 8px; font-size: 0.9rem; font-weight: bold; white-space: nowrap; opacity: 0; visibility: hidden; transition: 0.3s; pointer-events: none; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.3); }
.tt-neu-wrap:hover .tt-neu-box { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }`,
    jsCode: ``
  },

  // 7. Arrow Left Tooltip
  {
    _id: "tt7",
    title: "Side Arrow Tooltip",
    slug: "side-arrow-tooltip",
    description: "Appears on the right side with a directional arrow pointing left.",
    category: "Tooltips",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["tooltip", "side", "arrow", "clean"],
    isPremium: false,
    views: 14200,
    downloads: 3700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tt-side-wrap">
  <button class="tt-side-btn">➔</button>
  <div class="tt-side-box">Appears on the right</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tt-side-wrap { position: relative; display: inline-block; }
.tt-side-btn { width: 40px; height: 40px; border-radius: 50%; background: #f1f5f9; border: 1px solid #cbd5e1; cursor: pointer; color: #334155; font-size: 1.2rem; display: flex; justify-content: center; align-items: center; transition: 0.2s; }
.tt-side-btn:hover { background: #e2e8f0; }
.tt-side-box { position: absolute; left: 130%; top: 50%; transform: translateY(-50%) translateX(-10px); background: #0f172a; color: #fff; padding: 6px 12px; border-radius: 4px; font-size: 0.85rem; white-space: nowrap; opacity: 0; visibility: hidden; transition: 0.2s; pointer-events: none; }
.tt-side-box::after { content: ''; position: absolute; top: 50%; right: 100%; transform: translateY(-50%); border-width: 5px; border-style: solid; border-color: transparent #0f172a transparent transparent; }
.tt-side-wrap:hover .tt-side-box { opacity: 1; visibility: visible; transform: translateY(-50%) translateX(0); }`,
    jsCode: ``
  },

  // 8. Info Icon Tooltip
  {
    _id: "tt8",
    title: "Info Icon Tooltip",
    slug: "info-icon-tooltip",
    description: "A small info circle icon that reveals help text when hovered.",
    category: "Tooltips",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["tooltip", "info", "icon", "help"],
    isPremium: false,
    views: 19500,
    downloads: 5800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tt-info-wrap">
  <span class="tt-label">Password</span>
  <div class="tt-info-icon">i
    <div class="tt-info-box">Must be at least 8 characters long.</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tt-info-wrap { display: flex; align-items: center; gap: 8px; color: #334155; font-weight: 500; }
.tt-info-icon { width: 18px; height: 18px; border-radius: 50%; background: #e2e8f0; color: #64748b; display: flex; justify-content: center; align-items: center; font-size: 0.7rem; font-weight: bold; cursor: help; position: relative; font-style: italic; }
.tt-info-box { position: absolute; bottom: 150%; left: 50%; transform: translateX(-50%) translateY(5px); background: #334155; color: #fff; padding: 6px 10px; border-radius: 4px; font-size: 0.75rem; white-space: nowrap; font-style: normal; font-weight: normal; opacity: 0; visibility: hidden; transition: 0.2s; pointer-events: none; }
.tt-info-box::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border-width: 4px; border-style: solid; border-color: #334155 transparent transparent transparent; }
.tt-info-icon:hover .tt-info-box { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }`,
    jsCode: ``
  },

  // 9. Gradient Tooltip
  {
    _id: "tt9",
    title: "Gradient Tooltip",
    slug: "gradient-tooltip",
    description: "A visually striking tooltip with a gradient background.",
    category: "Tooltips",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["tooltip", "gradient", "colorful", "modern"],
    isPremium: true,
    views: 15700,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tt-grad-wrap">
  <button class="tt-grad-btn">Pro Feature</button>
  <div class="tt-grad-box">Unlock premium access!</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tt-grad-wrap { position: relative; display: inline-block; }
.tt-grad-btn { padding: 10px 20px; background: #fff; border: 2px solid #e2e8f0; border-radius: 30px; cursor: pointer; color: #475569; font-weight: 600; transition: 0.2s; }
.tt-grad-btn:hover { border-color: #ec4899; }
.tt-grad-box { position: absolute; bottom: 130%; left: 50%; transform: translateX(-50%) scale(0.9); background: linear-gradient(135deg, #ec4899, #8b5cf6); color: #fff; padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: bold; white-space: nowrap; opacity: 0; visibility: hidden; transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); pointer-events: none; box-shadow: 0 4px 10px rgba(236, 72, 153, 0.3); }
.tt-grad-wrap:hover .tt-grad-box { opacity: 1; visibility: visible; transform: translateX(-50%) scale(1); }`,
    jsCode: ``
  },

  // 10. Animated Bubble Tooltip
  {
    _id: "tt10",
    title: "Animated Bubble Tooltip",
    slug: "animated-bubble-tooltip",
    description: "A playful tooltip that wobbles and bounces like a speech bubble when appearing.",
    category: "Tooltips",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["tooltip", "bubble", "animation", "playful"],
    isPremium: false,
    views: 16400,
    downloads: 4000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tt-bub-wrap">
  <button class="tt-bub-btn">Say Hi</button>
  <div class="tt-bub-box">Hello there! 👋</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tt-bub-wrap { position: relative; display: inline-block; }
.tt-bub-btn { padding: 12px 24px; background: #3b82f6; border: none; border-radius: 8px; cursor: pointer; color: #fff; font-weight: bold; font-size: 1rem; transition: 0.2s; }
.tt-bub-btn:hover { background: #2563eb; }
.tt-bub-box { position: absolute; bottom: 120%; left: 50%; background: #1e293b; color: #fff; padding: 10px 15px; border-radius: 12px; font-size: 0.9rem; white-space: nowrap; opacity: 0; visibility: hidden; pointer-events: none; transform-origin: bottom center; transform: translateX(-50%) scale(0); }
.tt-bub-box::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border-width: 6px; border-style: solid; border-color: #1e293b transparent transparent transparent; }
.tt-bub-wrap:hover .tt-bub-box { opacity: 1; visibility: visible; animation: bubWobble 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
@keyframes bubWobble { 0% { transform: translateX(-50%) scale(0); } 50% { transform: translateX(-50%) scale(1.1); } 75% { transform: translateX(-50%) scale(0.95); } 100% { transform: translateX(-50%) scale(1); } }`,
    jsCode: ``
  }
];
