import { Design } from "./designs-data";

export const BATCH_32_DESIGNS: Design[] = [
  // 1. Custom SVG Checkmark Checkbox
  {
    _id: "chk1",
    title: "Animated SVG Checkbox",
    slug: "animated-svg-checkbox",
    description: "A smooth, custom SVG checkmark animation when checked, replacing the default browser style.",
    category: "Checkboxes",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["checkbox", "svg", "animation", "clean"],
    isPremium: false,
    views: 18500,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<label class="cb-svg-wrap">
  <input type="checkbox" class="cb-svg-input" checked>
  <span class="cb-svg-box">
    <svg viewBox="0 0 24 24" class="cb-svg-icon"><path d="M5 13l4 4L19 7"></path></svg>
  </span>
  <span class="cb-svg-label">Accept Terms</span>
</label>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cb-svg-wrap { display: flex; align-items: center; cursor: pointer; user-select: none; gap: 10px; }
.cb-svg-input { display: none; }
.cb-svg-box { width: 24px; height: 24px; border: 2px solid #cbd5e1; border-radius: 6px; background: #fff; display: flex; justify-content: center; align-items: center; transition: 0.2s; }
.cb-svg-icon { width: 16px; height: 16px; fill: none; stroke: #fff; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 24; stroke-dashoffset: 24; transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.cb-svg-input:checked + .cb-svg-box { background: #3b82f6; border-color: #3b82f6; }
.cb-svg-input:checked + .cb-svg-box .cb-svg-icon { stroke-dashoffset: 0; }
.cb-svg-label { color: #334155; font-weight: 500; }`,
    jsCode: ``
  },

  // 2. Bouncy Checkbox
  {
    _id: "chk2",
    title: "Bouncy Checkbox",
    slug: "bouncy-checkbox",
    description: "A fun, bouncy scale animation when toggling the checkbox.",
    category: "Checkboxes",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["checkbox", "bounce", "animation", "modern"],
    isPremium: false,
    views: 14200,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<label class="cb-bounce-wrap">
  <input type="checkbox" class="cb-bounce-input">
  <div class="cb-bounce-box"></div>
  Subscribe to newsletter
</label>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cb-bounce-wrap { display: flex; align-items: center; gap: 12px; cursor: pointer; color: #475569; font-weight: 500; user-select: none; }
.cb-bounce-input { display: none; }
.cb-bounce-box { width: 22px; height: 22px; border: 2px solid #94a3b8; border-radius: 5px; position: relative; transition: 0.2s; }
.cb-bounce-box::after { content: ''; position: absolute; width: 6px; height: 12px; border-bottom: 2.5px solid #fff; border-right: 2.5px solid #fff; top: 40%; left: 50%; transform: translate(-50%, -50%) rotate(45deg) scale(0); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.cb-bounce-input:checked + .cb-bounce-box { background: #10b981; border-color: #10b981; animation: bounce 0.4s; }
.cb-bounce-input:checked + .cb-bounce-box::after { transform: translate(-50%, -50%) rotate(45deg) scale(1); }
@keyframes bounce { 0% { transform: scale(1); } 50% { transform: scale(0.8); } 100% { transform: scale(1); } }`,
    jsCode: ``
  },

  // 3. Heart/Like Checkbox
  {
    _id: "chk3",
    title: "Heart Like Checkbox",
    slug: "heart-like-checkbox",
    description: "A checkbox styled as a heart, used for liking or saving items.",
    category: "Checkboxes",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["checkbox", "heart", "like", "favorite"],
    isPremium: false,
    views: 19100,
    downloads: 5300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<label class="cb-heart-wrap">
  <input type="checkbox" class="cb-heart-input">
  <svg viewBox="0 0 24 24" class="cb-heart-icon">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
  </svg>
</label>`,
    cssCode: `body { margin: 0; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cb-heart-wrap { cursor: pointer; display: inline-block; }
.cb-heart-input { display: none; }
.cb-heart-icon { width: 40px; height: 40px; fill: transparent; stroke: #9ca3af; stroke-width: 2; transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.cb-heart-wrap:hover .cb-heart-icon { stroke: #f43f5e; transform: scale(1.1); }
.cb-heart-input:checked + .cb-heart-icon { fill: #f43f5e; stroke: #f43f5e; animation: heartBeat 0.5s; }
@keyframes heartBeat { 0% { transform: scale(1); } 25% { transform: scale(1.3); } 50% { transform: scale(1); } 75% { transform: scale(1.15); } 100% { transform: scale(1); } }`,
    jsCode: ``
  },

  // 4. Strike-through Task Checkbox
  {
    _id: "chk4",
    title: "Strike-through Task Checkbox",
    slug: "strike-through-task-checkbox",
    description: "Perfect for to-do lists; checking the box draws a line through the text.",
    category: "Checkboxes",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["checkbox", "task", "todo", "strikethrough"],
    isPremium: true,
    views: 16700,
    downloads: 4400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<label class="cb-task-wrap">
  <input type="checkbox" class="cb-task-input">
  <div class="cb-task-box"></div>
  <span class="cb-task-text">Buy groceries for the week</span>
</label>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cb-task-wrap { display: flex; align-items: center; gap: 15px; cursor: pointer; user-select: none; }
.cb-task-input { display: none; }
.cb-task-box { width: 24px; height: 24px; border: 2px solid #cbd5e1; border-radius: 50%; transition: 0.3s; position: relative; }
.cb-task-input:checked + .cb-task-box { background: #8b5cf6; border-color: #8b5cf6; }
.cb-task-input:checked + .cb-task-box::after { content: '✓'; position: absolute; color: #fff; font-size: 14px; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: bold; }
.cb-task-text { font-size: 1.1rem; color: #334155; position: relative; transition: color 0.3s; }
.cb-task-text::after { content: ''; position: absolute; left: 0; top: 50%; width: 0; height: 2px; background: #94a3b8; transition: width 0.3s ease; }
.cb-task-input:checked ~ .cb-task-text { color: #94a3b8; }
.cb-task-input:checked ~ .cb-task-text::after { width: 100%; }`,
    jsCode: ``
  },

  // 5. Neumorphic Checkbox
  {
    _id: "chk5",
    title: "Neumorphic Checkbox",
    slug: "neumorphic-checkbox",
    description: "A soft UI checkbox that presses deeply inward when selected.",
    category: "Checkboxes",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["checkbox", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 13400,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<label class="cb-neu-wrap">
  <input type="checkbox" class="cb-neu-input">
  <div class="cb-neu-box">
    <div class="cb-neu-dot"></div>
  </div>
  Enable sync
</label>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cb-neu-wrap { display: flex; align-items: center; gap: 15px; cursor: pointer; color: #718096; font-weight: bold; font-size: 1.1rem; user-select: none; }
.cb-neu-input { display: none; }
.cb-neu-box { width: 32px; height: 32px; border-radius: 8px; background: #e0e5ec; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); display: flex; justify-content: center; align-items: center; transition: 0.3s; }
.cb-neu-dot { width: 14px; height: 14px; border-radius: 4px; background: #4299e1; opacity: 0; transform: scale(0); transition: 0.3s; }
.cb-neu-input:checked + .cb-neu-box { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
.cb-neu-input:checked + .cb-neu-box .cb-neu-dot { opacity: 1; transform: scale(1); }`,
    jsCode: ``
  },

  // 6. Cyberpunk Checkbox
  {
    _id: "chk6",
    title: "Cyberpunk Checkbox",
    slug: "cyberpunk-checkbox",
    description: "A dark checkbox with glitching neon borders and bright text.",
    category: "Checkboxes",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["checkbox", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 15300,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<label class="cb-cy-wrap">
  <input type="checkbox" class="cb-cy-input">
  <div class="cb-cy-box"></div>
  OVERRIDE SYSTEM
</label>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cb-cy-wrap { display: flex; align-items: center; gap: 15px; cursor: pointer; color: #666; font-weight: bold; letter-spacing: 1px; transition: 0.3s; }
.cb-cy-input { display: none; }
.cb-cy-box { width: 20px; height: 20px; border: 2px dashed #333; background: #111; position: relative; transition: 0.3s; }
.cb-cy-wrap:hover { color: #0ff; }
.cb-cy-wrap:hover .cb-cy-box { border-color: #0ff; box-shadow: 0 0 10px rgba(0,255,255,0.3); }
.cb-cy-input:checked + .cb-cy-box { background: rgba(255,0,255,0.2); border: 2px solid #f0f; box-shadow: 0 0 15px #f0f, inset 0 0 10px #f0f; }
.cb-cy-input:checked + .cb-cy-box::after { content: ''; position: absolute; width: 10px; height: 10px; background: #f0f; top: 50%; left: 50%; transform: translate(-50%, -50%); }
.cb-cy-input:checked ~ .cb-cy-wrap { color: #f0f; text-shadow: 0 0 5px #f0f; }`,
    jsCode: ``
  },

  // 7. Glassmorphism Checkbox
  {
    _id: "chk7",
    title: "Glassmorphism Checkbox",
    slug: "glassmorphism-checkbox",
    description: "Frosted glass checkbox over a beautiful moving gradient.",
    category: "Checkboxes",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["checkbox", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 17200,
    downloads: 4500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-cb-bg">
  <label class="cb-gl-wrap">
    <input type="checkbox" class="cb-gl-input">
    <div class="cb-gl-box">✓</div>
    Remember Me
  </label>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-cb-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.cb-gl-wrap { display: flex; align-items: center; gap: 15px; cursor: pointer; color: #fff; font-size: 1.1rem; font-weight: 500; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.cb-gl-input { display: none; }
.cb-gl-box { width: 28px; height: 28px; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 8px; display: flex; justify-content: center; align-items: center; color: transparent; font-weight: bold; transition: 0.3s; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.cb-gl-input:checked + .cb-gl-box { background: rgba(255,255,255,0.4); color: #fff; box-shadow: 0 4px 15px rgba(255,255,255,0.2); transform: scale(1.1); }`,
    jsCode: ``
  },

  // 8. Brutalist Checkbox
  {
    _id: "chk8",
    title: "Brutalist Checkbox",
    slug: "brutalist-checkbox",
    description: "Thick borders, heavy box shadow, and a giant X when checked.",
    category: "Checkboxes",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["checkbox", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 11100,
    downloads: 2700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<label class="cb-br-wrap">
  <input type="checkbox" class="cb-br-input">
  <div class="cb-br-box"></div>
  AGREE TO TERMS
</label>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cb-br-wrap { display: flex; align-items: center; gap: 15px; cursor: pointer; color: #000; font-weight: 900; font-size: 1.2rem; }
.cb-br-input { display: none; }
.cb-br-box { width: 30px; height: 30px; border: 4px solid #000; background: #fff; box-shadow: 4px 4px 0 #000; position: relative; transition: 0.1s; }
.cb-br-wrap:hover .cb-br-box { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #000; }
.cb-br-input:checked + .cb-br-box { background: #facc15; }
.cb-br-input:checked + .cb-br-box::after { content: 'X'; position: absolute; font-size: 24px; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #000; font-weight: 900; }`,
    jsCode: ``
  },

  // 9. Floating Checkbox Button
  {
    _id: "chk9",
    title: "Checkbox Button Pill",
    slug: "checkbox-button-pill",
    description: "A checkbox styled like a pill button, often used for selecting multiple categories.",
    category: "Checkboxes",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["checkbox", "pill", "button", "filter"],
    isPremium: false,
    views: 14800,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div style="display: flex; gap: 10px;">
  <label class="cb-pill-wrap">
    <input type="checkbox" class="cb-pill-input">
    <div class="cb-pill-box">Design</div>
  </label>
  <label class="cb-pill-wrap">
    <input type="checkbox" class="cb-pill-input" checked>
    <div class="cb-pill-box">Development</div>
  </label>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cb-pill-wrap { cursor: pointer; user-select: none; }
.cb-pill-input { display: none; }
.cb-pill-box { padding: 8px 20px; background: #fff; border: 2px solid #cbd5e1; border-radius: 30px; color: #475569; font-weight: 600; font-size: 0.9rem; transition: 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
.cb-pill-wrap:hover .cb-pill-box { border-color: #94a3b8; color: #1e293b; }
.cb-pill-input:checked + .cb-pill-box { background: #0f172a; border-color: #0f172a; color: #fff; box-shadow: 0 4px 10px rgba(15,23,42,0.2); }`,
    jsCode: ``
  },

  // 10. Star Rating Checkbox
  {
    _id: "chk10",
    title: "Star Favorite Checkbox",
    slug: "star-favorite-checkbox",
    description: "A hidden checkbox styled as a favorite star.",
    category: "Checkboxes",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["checkbox", "star", "rating", "favorite"],
    isPremium: false,
    views: 17900,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<label class="cb-star-wrap">
  <input type="checkbox" class="cb-star-input">
  <svg viewBox="0 0 24 24" class="cb-star-icon">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
</label>`,
    cssCode: `body { margin: 0; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cb-star-wrap { cursor: pointer; display: inline-block; }
.cb-star-input { display: none; }
.cb-star-icon { width: 48px; height: 48px; fill: transparent; stroke: #d1d5db; stroke-width: 2; transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.cb-star-wrap:hover .cb-star-icon { stroke: #facc15; transform: scale(1.1); }
.cb-star-input:checked + .cb-star-icon { fill: #facc15; stroke: #facc15; animation: starPop 0.4s; }
@keyframes starPop { 0% { transform: scale(1); } 50% { transform: scale(1.4) rotate(15deg); } 100% { transform: scale(1) rotate(0deg); } }`,
    jsCode: ``
  }
];
