import { Design } from "./designs-data";

export const BATCH_43_DESIGNS: Design[] = [
  // 1. Classic Square Pagination
  {
    _id: "pg1",
    title: "Classic Square Pagination",
    slug: "classic-square-pagination",
    description: "Standard clean pagination with square buttons and active states.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pagination", "classic", "clean", "navigation"],
    isPremium: false,
    views: 19800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pg-classic-wrap">
  <ul class="pg-classic">
    <li><a href="#" class="pg-prev">&laquo; Prev</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#" class="pg-active">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#" class="pg-next">Next &raquo;</a></li>
  </ul>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pg-classic-wrap { background: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.pg-classic { display: flex; list-style: none; padding: 0; margin: 0; gap: 5px; }
.pg-classic a { display: flex; justify-content: center; align-items: center; min-width: 36px; height: 36px; padding: 0 10px; background: #fff; border: 1px solid #e2e8f0; color: #475569; text-decoration: none; border-radius: 4px; font-weight: 500; font-size: 0.9rem; transition: 0.2s; box-sizing: border-box; }
.pg-classic a:hover:not(.pg-active) { background: #f1f5f9; border-color: #cbd5e1; }
.pg-classic a.pg-active { background: #3b82f6; color: #fff; border-color: #3b82f6; pointer-events: none; }
.pg-prev, .pg-next { font-weight: 600; }`,
    jsCode: ``
  },

  // 2. Pill Pagination
  {
    _id: "pg2",
    title: "Pill Pagination",
    slug: "pill-pagination",
    description: "Rounded pill-shaped buttons for a softer navigation feel.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pagination", "pill", "rounded", "soft"],
    isPremium: false,
    views: 18200,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pg-pill-wrap">
  <ul class="pg-pill">
    <li><a href="#" class="pg-p-nav">‹</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#" class="pg-p-active">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">...</a></li>
    <li><a href="#">10</a></li>
    <li><a href="#" class="pg-p-nav">›</a></li>
  </ul>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pg-pill { display: flex; list-style: none; padding: 0; margin: 0; gap: 8px; background: #fff; padding: 10px; border-radius: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.pg-pill a { display: flex; justify-content: center; align-items: center; width: 36px; height: 36px; background: transparent; color: #64748b; text-decoration: none; border-radius: 50%; font-weight: 500; font-size: 0.95rem; transition: 0.2s; }
.pg-pill a:hover:not(.pg-p-active) { background: #e2e8f0; color: #0f172a; }
.pg-pill a.pg-p-active { background: #10b981; color: #fff; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3); pointer-events: none; }
.pg-p-nav { font-size: 1.2rem; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Pagination
  {
    _id: "pg3",
    title: "Cyberpunk Pagination",
    slug: "cyberpunk-pagination",
    description: "Neon borders and skewed shapes for a dark, high-tech aesthetic.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["pagination", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 16500,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pg-cy-wrap">
  <ul class="pg-cy">
    <li><a href="#"><<</a></li>
    <li><a href="#">01</a></li>
    <li><a href="#" class="pg-cy-active">02</a></li>
    <li><a href="#">03</a></li>
    <li><a href="#">04</a></li>
    <li><a href="#">>></a></li>
  </ul>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pg-cy { display: flex; list-style: none; padding: 0; margin: 0; gap: 10px; }
.pg-cy a { display: flex; justify-content: center; align-items: center; min-width: 40px; height: 40px; background: #111; border: 1px solid #333; color: #888; text-decoration: none; font-weight: bold; transition: 0.2s; clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%); padding: 0 10px; }
.pg-cy a:hover:not(.pg-cy-active) { border-color: #0ff; color: #0ff; box-shadow: inset 0 0 10px rgba(0,255,255,0.2); text-shadow: 0 0 5px #0ff; }
.pg-cy a.pg-cy-active { background: rgba(0,255,255,0.1); border-color: #0ff; color: #000; background: #0ff; box-shadow: 0 0 15px #0ff; text-shadow: none; pointer-events: none; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Pagination
  {
    _id: "pg4",
    title: "Glassmorphism Pagination",
    slug: "glassmorphism-pagination",
    description: "Frosted glass buttons floating over a moving gradient background.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["pagination", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 19400,
    downloads: 5500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <ul class="pg-gl">
    <li><a href="#">Prev</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#" class="pg-gl-active">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">Next</a></li>
  </ul>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; box-sizing: border-box; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.pg-gl { display: flex; list-style: none; padding: 10px; margin: 0; gap: 8px; background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border-radius: 12px; border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
.pg-gl a { display: flex; justify-content: center; align-items: center; min-width: 40px; height: 40px; padding: 0 10px; background: rgba(255,255,255,0.05); color: #fff; text-decoration: none; border-radius: 8px; font-weight: 500; transition: 0.3s; border: 1px solid rgba(255,255,255,0.1); box-sizing: border-box; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.pg-gl a:hover:not(.pg-gl-active) { background: rgba(255,255,255,0.2); transform: translateY(-2px); }
.pg-gl a.pg-gl-active { background: rgba(255,255,255,0.3); border-color: rgba(255,255,255,0.6); box-shadow: 0 4px 15px rgba(255,255,255,0.2); pointer-events: none; }`,
    jsCode: ``
  },

  // 5. Brutalist Pagination
  {
    _id: "pg5",
    title: "Brutalist Pagination",
    slug: "brutalist-pagination",
    description: "Thick borders, high contrast, and harsh offset shadows.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["pagination", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 13800,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pg-br-wrap">
  <ul class="pg-br">
    <li><a href="#"><</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#" class="pg-br-active">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">></a></li>
  </ul>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pg-br { display: flex; list-style: none; padding: 0; margin: 0; gap: 15px; }
.pg-br a { display: flex; justify-content: center; align-items: center; width: 45px; height: 45px; background: #fff; border: 4px solid #000; color: #000; text-decoration: none; font-weight: 900; font-size: 1.2rem; box-shadow: 4px 4px 0 #000; transition: 0.1s; }
.pg-br a:hover:not(.pg-br-active) { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #000; }
.pg-br a.pg-br-active { background: #facc15; transform: translate(2px, 2px); box-shadow: 2px 2px 0 #000; pointer-events: none; }`,
    jsCode: ``
  },

  // 6. Neumorphic Pagination
  {
    _id: "pg6",
    title: "Neumorphic Pagination",
    slug: "neumorphic-pagination",
    description: "Soft UI design where buttons extrude, and the active one debosses.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["pagination", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 14500,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pg-neu-wrap">
  <ul class="pg-neu">
    <li><a href="#">Prev</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#" class="pg-neu-active">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">Next</a></li>
  </ul>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pg-neu { display: flex; list-style: none; padding: 0; margin: 0; gap: 15px; }
.pg-neu a { display: flex; justify-content: center; align-items: center; min-width: 40px; height: 40px; padding: 0 10px; background: #e0e5ec; color: #718096; text-decoration: none; border-radius: 10px; font-weight: bold; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.pg-neu a:hover:not(.pg-neu-active) { color: #2d3748; }
.pg-neu a.pg-neu-active { color: #3182ce; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); pointer-events: none; }`,
    jsCode: ``
  },

  // 7. Minimal Dot Pagination
  {
    _id: "pg7",
    title: "Minimal Dot Pagination",
    slug: "minimal-dot-pagination",
    description: "Clean dots typically used for carousels or image sliders.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["pagination", "dots", "minimal", "carousel"],
    isPremium: false,
    views: 17300,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pg-dot-wrap">
  <ul class="pg-dot">
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#" class="pg-dot-active"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
  </ul>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pg-dot { display: flex; list-style: none; padding: 0; margin: 0; gap: 10px; }
.pg-dot a { display: block; width: 12px; height: 12px; border-radius: 50%; background: #cbd5e1; transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.pg-dot a:hover:not(.pg-dot-active) { background: #94a3b8; transform: scale(1.2); }
.pg-dot a.pg-dot-active { width: 30px; background: #3b82f6; border-radius: 6px; pointer-events: none; }`,
    jsCode: ``
  },

  // 8. Gradient Pagination
  {
    _id: "pg8",
    title: "Gradient Pagination",
    slug: "gradient-pagination",
    description: "Dark theme pagination where the active item glows with a gradient.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["pagination", "gradient", "colorful", "dark"],
    isPremium: true,
    views: 18100,
    downloads: 5000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pg-grad-wrap">
  <ul class="pg-grad">
    <li><a href="#">Prev</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#" class="pg-grad-active">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">Next</a></li>
  </ul>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pg-grad { display: flex; list-style: none; padding: 10px; margin: 0; gap: 10px; background: #1e293b; border-radius: 12px; border: 1px solid #334155; }
.pg-grad a { display: flex; justify-content: center; align-items: center; min-width: 36px; height: 36px; padding: 0 10px; background: transparent; color: #94a3b8; text-decoration: none; border-radius: 6px; font-weight: 500; transition: 0.3s; }
.pg-grad a:hover:not(.pg-grad-active) { color: #f8fafc; background: #334155; }
.pg-grad a.pg-grad-active { background: linear-gradient(135deg, #ec4899, #8b5cf6); color: #fff; box-shadow: 0 4px 10px rgba(236,72,153,0.4); pointer-events: none; }`,
    jsCode: ``
  },

  // 9. Outline Circle Pagination
  {
    _id: "pg9",
    title: "Outline Circle Pagination",
    slug: "outline-circle-pagination",
    description: "Elegant circular buttons with borders that fill on active.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pagination", "circle", "outline", "elegant"],
    isPremium: false,
    views: 16200,
    downloads: 4400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pg-circ-wrap">
  <ul class="pg-circ">
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#" class="pg-circ-active">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
  </ul>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pg-circ { display: flex; list-style: none; padding: 0; margin: 0; gap: 12px; }
.pg-circ a { display: flex; justify-content: center; align-items: center; width: 40px; height: 40px; background: transparent; border: 2px solid #cbd5e1; color: #64748b; text-decoration: none; border-radius: 50%; font-weight: 600; font-size: 0.95rem; transition: 0.2s; box-sizing: border-box; }
.pg-circ a:hover:not(.pg-circ-active) { border-color: #8b5cf6; color: #8b5cf6; }
.pg-circ a.pg-circ-active { background: #8b5cf6; border-color: #8b5cf6; color: #fff; box-shadow: 0 4px 10px rgba(139, 92, 246, 0.3); pointer-events: none; }`,
    jsCode: ``
  },

  // 10. Floating Card Pagination
  {
    _id: "pg10",
    title: "Floating Card Pagination",
    slug: "floating-card-pagination",
    description: "The active item pops up as a distinct floating card.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pagination", "card", "floating", "shadow"],
    isPremium: true,
    views: 17900,
    downloads: 4900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pg-card-wrap">
  <ul class="pg-card">
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#" class="pg-card-active">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
  </ul>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pg-card { display: flex; list-style: none; padding: 15px; margin: 0; gap: 5px; background: #e2e8f0; border-radius: 12px; }
.pg-card a { display: flex; justify-content: center; align-items: center; width: 45px; height: 45px; background: transparent; color: #64748b; text-decoration: none; border-radius: 8px; font-weight: 600; transition: 0.3s; }
.pg-card a:hover:not(.pg-card-active) { color: #0f172a; background: rgba(255,255,255,0.5); }
.pg-card a.pg-card-active { background: #fff; color: #0f172a; transform: translateY(-10px) scale(1.1); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); pointer-events: none; }`,
    jsCode: ``
  }
];
