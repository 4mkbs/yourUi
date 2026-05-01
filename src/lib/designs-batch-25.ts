import { Design } from "./designs-data";

export const BATCH_25_DESIGNS: Design[] = [
  // 1. Classic iOS Switch
  {
    _id: "sw1",
    title: "Classic iOS Switch",
    slug: "classic-ios-switch",
    description: "The ubiquitous, clean, green pill-shaped toggle switch.",
    category: "Toggles",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["toggle", "switch", "ios", "classic"],
    isPremium: false,
    views: 18500,
    downloads: 5200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="toggle-wrap">
  <label class="ios-switch">
    <input type="checkbox">
    <span class="ios-slider"></span>
  </label>
</div>`,
    cssCode: `body { margin: 0; background: #f9fafb; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.toggle-wrap { background: #fff; padding: 40px; border-radius: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
.ios-switch { position: relative; display: inline-block; width: 60px; height: 34px; }
.ios-switch input { opacity: 0; width: 0; height: 0; }
.ios-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #e5e7eb; transition: .4s; border-radius: 34px; }
.ios-slider:before { position: absolute; content: ""; height: 26px; width: 26px; left: 4px; bottom: 4px; background-color: white; transition: .4s; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
input:checked + .ios-slider { background-color: #34c759; }
input:checked + .ios-slider:before { transform: translateX(26px); }`,
    jsCode: ``
  },

  // 2. Neumorphic Toggle
  {
    _id: "sw2",
    title: "Neumorphic Switch",
    slug: "neumorphic-switch",
    description: "A soft, inset track with an extruded knob for a tactile feel.",
    category: "Toggles",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["toggle", "switch", "neumorphism", "soft"],
    isPremium: false,
    views: 13200,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-switch-wrap">
  <label class="neu-switch">
    <input type="checkbox">
    <span class="neu-track">
      <span class="neu-knob"></span>
    </span>
  </label>
</div>`,
    cssCode: `body { margin: 0; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.neu-switch { position: relative; display: inline-block; width: 80px; height: 40px; cursor: pointer; }
.neu-switch input { opacity: 0; width: 0; height: 0; }
.neu-track { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #e0e5ec; border-radius: 20px; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); transition: 0.3s; }
.neu-knob { position: absolute; top: 4px; left: 4px; width: 32px; height: 32px; background: #e0e5ec; border-radius: 50%; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); transition: 0.3s; display: flex; justify-content: center; align-items: center; }
.neu-knob::after { content: ''; width: 10px; height: 10px; border-radius: 50%; background: #a0aec0; transition: 0.3s; }
input:checked + .neu-track .neu-knob { transform: translateX(40px); }
input:checked + .neu-track .neu-knob::after { background: #4299e1; box-shadow: 0 0 5px #4299e1; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Neon Switch
  {
    _id: "sw3",
    title: "Cyberpunk Neon Switch",
    slug: "cyberpunk-neon-switch",
    description: "A dark, glowing terminal switch suitable for hacker themes.",
    category: "Toggles",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["toggle", "switch", "cyberpunk", "neon"],
    isPremium: true,
    views: 14500,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cy-switch-wrap">
  <label class="cy-switch">
    <input type="checkbox">
    <span class="cy-slider">
      <span class="cy-knob"></span>
    </span>
  </label>
</div>`,
    cssCode: `body { margin: 0; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cy-switch { position: relative; display: inline-block; width: 70px; height: 30px; cursor: pointer; }
.cy-switch input { opacity: 0; width: 0; height: 0; }
.cy-slider { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #111; border: 1px solid #333; transition: 0.3s; }
.cy-knob { position: absolute; top: 2px; left: 2px; width: 24px; height: 24px; background: #333; transition: 0.3s; }
input:checked + .cy-slider { border-color: #0ff; box-shadow: inset 0 0 10px rgba(0,255,255,0.2); }
input:checked + .cy-slider .cy-knob { transform: translateX(40px); background: #0ff; box-shadow: 0 0 15px #0ff; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Toggle
  {
    _id: "sw4",
    title: "Glassmorphism Toggle",
    slug: "glassmorphism-toggle",
    description: "Frosted glass track and knob floating on a colorful gradient.",
    category: "Toggles",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["toggle", "switch", "glassmorphism", "gradient"],
    isPremium: true,
    views: 15600,
    downloads: 4500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <label class="gl-switch">
    <input type="checkbox">
    <span class="gl-track">
      <span class="gl-knob"></span>
    </span>
  </label>
</div>`,
    cssCode: `body { margin: 0; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gl-switch { position: relative; display: inline-block; width: 80px; height: 40px; cursor: pointer; }
.gl-switch input { opacity: 0; width: 0; height: 0; }
.gl-track { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; transition: 0.3s; }
.gl-knob { position: absolute; top: 3px; left: 3px; width: 32px; height: 32px; background: rgba(255,255,255,0.4); border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: 0.3s; }
input:checked + .gl-track { background: rgba(255, 255, 255, 0.3); }
input:checked + .gl-track .gl-knob { transform: translateX(40px); background: #fff; }`,
    jsCode: ``
  },

  // 5. Brutalist Checkbox Toggle
  {
    _id: "sw5",
    title: "Brutalist Switch",
    slug: "brutalist-switch",
    description: "Thick borders, high contrast, and hard shadows make this switch unmissable.",
    category: "Toggles",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["toggle", "switch", "brutalist", "bold"],
    isPremium: false,
    views: 11100,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="br-wrap">
  <label class="br-switch">
    <input type="checkbox">
    <span class="br-track">
      <span class="br-knob"></span>
    </span>
  </label>
</div>`,
    cssCode: `body { margin: 0; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.br-switch { position: relative; display: inline-block; width: 90px; height: 46px; cursor: pointer; }
.br-switch input { opacity: 0; width: 0; height: 0; }
.br-track { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #fff; border: 4px solid #000; box-shadow: 6px 6px 0 #000; transition: 0.1s; }
.br-knob { position: absolute; top: -4px; left: -4px; width: 46px; height: 46px; background: #000; transition: 0.2s; display: flex; justify-content: center; align-items: center; color: #fff; font-family: sans-serif; font-weight: bold; font-size: 12px; }
.br-knob::before { content: 'OFF'; }
input:checked + .br-track { background: #facc15; }
input:checked + .br-track .br-knob { transform: translateX(44px); background: #ef4444; }
input:checked + .br-track .br-knob::before { content: 'ON'; }`,
    jsCode: ``
  },

  // 6. Day/Night Theme Toggle
  {
    _id: "sw6",
    title: "Day/Night Toggle",
    slug: "day-night-theme-toggle",
    description: "A sliding switch that reveals a sun or moon icon, perfect for dark mode.",
    category: "Toggles",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["toggle", "switch", "theme", "dark-mode"],
    isPremium: true,
    views: 17200,
    downloads: 5000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dn-wrap" id="dn-wrap">
  <label class="dn-switch">
    <input type="checkbox" id="theme-toggle">
    <span class="dn-slider">
      <span class="dn-knob">
        <span class="dn-icon sun">☀️</span>
        <span class="dn-icon moon">🌙</span>
      </span>
    </span>
  </label>
</div>`,
    cssCode: `body { margin: 0; transition: 0.3s; }
.dn-wrap { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: #87CEEB; transition: 0.5s; }
.dn-wrap.dark { background: #1a202c; }
.dn-switch { position: relative; display: inline-block; width: 80px; height: 40px; cursor: pointer; }
.dn-switch input { opacity: 0; width: 0; height: 0; }
.dn-slider { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #63b3ed; border-radius: 40px; transition: 0.5s; overflow: hidden; box-shadow: inset 0 2px 5px rgba(0,0,0,0.2); }
.dn-knob { position: absolute; top: 4px; left: 4px; width: 32px; height: 32px; background: #fff; border-radius: 50%; transition: 0.5s; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2); overflow: hidden; }
.dn-icon { position: absolute; font-size: 16px; transition: 0.5s; }
.sun { opacity: 1; transform: translateY(0); }
.moon { opacity: 0; transform: translateY(-20px); }
input:checked + .dn-slider { background: #2d3748; }
input:checked + .dn-slider .dn-knob { transform: translateX(40px); background: #cbd5e0; }
input:checked + .dn-slider .sun { opacity: 0; transform: translateY(20px); }
input:checked + .dn-slider .moon { opacity: 1; transform: translateY(0); }`,
    jsCode: `
      document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('theme-toggle');
        const wrap = document.getElementById('dn-wrap');
        if(toggle && wrap) {
          toggle.addEventListener('change', (e) => {
            if(e.target.checked) wrap.classList.add('dark');
            else wrap.classList.remove('dark');
          });
        }
      });
    `
  },

  // 7. Text-Based Pill Switch
  {
    _id: "sw7",
    title: "Text Pill Switch",
    slug: "text-pill-switch",
    description: "A toggle that explicitly states the active option inside the pill track.",
    category: "Toggles",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["toggle", "switch", "pill", "text"],
    isPremium: false,
    views: 12100,
    downloads: 3300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tp-wrap">
  <label class="tp-switch">
    <input type="checkbox">
    <span class="tp-track">
      <span class="tp-text left">Monthly</span>
      <span class="tp-text right">Yearly</span>
      <span class="tp-knob">Monthly</span>
    </span>
  </label>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tp-switch { position: relative; display: inline-block; width: 160px; height: 44px; cursor: pointer; user-select: none; }
.tp-switch input { opacity: 0; width: 0; height: 0; }
.tp-track { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #e2e8f0; border-radius: 44px; transition: 0.3s; display: flex; align-items: center; }
.tp-text { position: absolute; width: 50%; text-align: center; font-size: 0.9rem; font-weight: 600; color: #64748b; z-index: 1; transition: 0.3s; }
.tp-text.left { left: 0; }
.tp-text.right { right: 0; }
.tp-knob { position: absolute; top: 4px; left: 4px; width: 76px; height: 36px; background: #fff; border-radius: 36px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); z-index: 2; display: flex; justify-content: center; align-items: center; font-size: 0.9rem; font-weight: 600; color: #0f172a; overflow: hidden; }
input:checked + .tp-track .tp-knob { transform: translateX(76px); }
input:checked + .tp-track .tp-knob::before { content: 'Yearly'; position: absolute; background: #fff; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }`,
    jsCode: ``
  },

  // 8. Skewed Isometric Switch
  {
    _id: "sw8",
    title: "Isometric 3D Switch",
    slug: "isometric-3d-switch",
    description: "A 3D tilted switch for a unique geometric UI element.",
    category: "Toggles",
    thumbnail: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    tags: ["toggle", "switch", "isometric", "3d"],
    isPremium: true,
    views: 10900,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="iso-wrap">
  <label class="iso-switch">
    <input type="checkbox">
    <span class="iso-base">
      <span class="iso-knob"></span>
    </span>
  </label>
</div>`,
    cssCode: `body { margin: 0; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; perspective: 800px; }
.iso-switch { position: relative; display: inline-block; width: 80px; height: 30px; cursor: pointer; transform: rotateX(45deg) rotateZ(45deg); transform-style: preserve-3d; }
.iso-switch input { opacity: 0; width: 0; height: 0; }
.iso-base { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #cbd5e1; border-radius: 4px; box-shadow: -2px 2px 0 #94a3b8, -4px 4px 0 #94a3b8, -6px 6px 10px rgba(0,0,0,0.2); transition: 0.3s; }
.iso-knob { position: absolute; top: -5px; left: 2px; width: 36px; height: 40px; background: #fff; border-radius: 4px; box-shadow: -2px 2px 0 #e2e8f0, -4px 4px 0 #cbd5e1; transition: 0.3s; transform: translateZ(10px); }
input:checked + .iso-base { background: #93c5fd; box-shadow: -2px 2px 0 #60a5fa, -4px 4px 0 #60a5fa, -6px 6px 10px rgba(0,0,0,0.2); }
input:checked + .iso-base .iso-knob { transform: translateX(40px) translateZ(10px); background: #3b82f6; box-shadow: -2px 2px 0 #2563eb, -4px 4px 0 #1d4ed8; }`,
    jsCode: ``
  },

  // 9. Elastic Bounce Switch
  {
    _id: "sw9",
    title: "Elastic Bounce Switch",
    slug: "elastic-bounce-switch",
    description: "A fun switch where the knob stretches and bounces into place.",
    category: "Toggles",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["toggle", "switch", "animated", "elastic"],
    isPremium: true,
    views: 13800,
    downloads: 4000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="el-wrap">
  <label class="el-switch">
    <input type="checkbox">
    <span class="el-track">
      <span class="el-knob"></span>
    </span>
  </label>
</div>`,
    cssCode: `body { margin: 0; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.el-switch { position: relative; display: inline-block; width: 70px; height: 36px; cursor: pointer; }
.el-switch input { opacity: 0; width: 0; height: 0; }
.el-track { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #e5e7eb; border-radius: 36px; transition: 0.4s ease; overflow: hidden; }
.el-knob { position: absolute; top: 4px; left: 4px; width: 28px; height: 28px; background: #fff; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), width 0.2s ease; }
.el-switch:active .el-knob { width: 38px; }
input:checked + .el-track { background: #8b5cf6; }
input:checked + .el-track .el-knob { transform: translateX(34px); }
.el-switch:active input:checked + .el-track .el-knob { transform: translateX(24px); width: 38px; }`,
    jsCode: ``
  },

  // 10. Minimalist Line Toggle
  {
    _id: "sw10",
    title: "Minimalist Line Switch",
    slug: "minimalist-line-switch",
    description: "An ultra-minimalist switch featuring just a thin line track and a dot.",
    category: "Toggles",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["toggle", "switch", "minimalist", "clean"],
    isPremium: false,
    views: 11400,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="min-sw-wrap">
  <label class="min-switch">
    <input type="checkbox">
    <span class="min-line"></span>
    <span class="min-dot"></span>
  </label>
</div>`,
    cssCode: `body { margin: 0; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.min-switch { position: relative; display: inline-block; width: 60px; height: 24px; cursor: pointer; }
.min-switch input { opacity: 0; width: 0; height: 0; }
.min-line { position: absolute; top: 11px; left: 0; width: 100%; height: 2px; background: #d4d4d8; transition: 0.3s; }
.min-dot { position: absolute; top: 0; left: 0; width: 24px; height: 24px; background: #fff; border: 2px solid #d4d4d8; border-radius: 50%; box-sizing: border-box; transition: 0.3s; }
input:checked + .min-line { background: #18181b; }
input:checked ~ .min-dot { transform: translateX(36px); border-color: #18181b; background: #18181b; }`,
    jsCode: ``
  }
];
