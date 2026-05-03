import { Design } from "./designs-data";

export const BATCH_27_DESIGNS: Design[] = [
  // 1. Classic Numbered Pagination
  {
    _id: "pg1",
    title: "Classic Numbered Pagination",
    slug: "classic-numbered-pagination",
    description: "The standard, reliable pagination style with previous/next arrows and page numbers.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pagination", "classic", "numbers", "clean"],
    isPremium: false,
    views: 17500,
    downloads: 4900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pagi-classic">
  <button class="pagi-btn" disabled>« Prev</button>
  <button class="pagi-btn active">1</button>
  <button class="pagi-btn">2</button>
  <button class="pagi-btn">3</button>
  <span class="pagi-dots">...</span>
  <button class="pagi-btn">10</button>
  <button class="pagi-btn">Next »</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f9fafb; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pagi-classic { display: flex; align-items: center; gap: 8px; background: #fff; padding: 10px 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; }
.pagi-btn { background: #fff; border: 1px solid #d1d5db; color: #374151; padding: 8px 14px; font-size: 0.9rem; font-weight: 500; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.pagi-btn:hover:not(:disabled) { background: #f3f4f6; }
.pagi-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.pagi-btn.active { background: #3b82f6; color: #fff; border-color: #3b82f6; }
.pagi-dots { color: #9ca3af; font-weight: bold; padding: 0 4px; }`,
    jsCode: ``
  },

  // 2. Minimalist Dot Pagination
  {
    _id: "pg2",
    title: "Minimalist Dot Pagination",
    slug: "minimalist-dot-pagination",
    description: "Sleek dot indicators typically used for image carousels or onboarding steps.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pagination", "dots", "minimalist", "carousel"],
    isPremium: false,
    views: 14200,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pagi-dots-wrap">
  <button class="pagi-dot"></button>
  <button class="pagi-dot active"></button>
  <button class="pagi-dot"></button>
  <button class="pagi-dot"></button>
</div>`,
    cssCode: `body { margin: 0; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pagi-dots-wrap { display: flex; gap: 12px; background: #fff; padding: 15px 25px; border-radius: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.pagi-dot { width: 12px; height: 12px; border-radius: 50%; background: #d4d4d8; border: none; cursor: pointer; padding: 0; transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.pagi-dot:hover { background: #a1a1aa; transform: scale(1.2); }
.pagi-dot.active { background: #18181b; width: 24px; border-radius: 6px; }`,
    jsCode: ``
  },

  // 3. Glassmorphism Pagination
  {
    _id: "pg3",
    title: "Glassmorphism Pagination",
    slug: "glassmorphism-pagination",
    description: "Frosted glass buttons floating over a vibrant, dynamic background.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["pagination", "glassmorphism", "gradient", "modern"],
    isPremium: true,
    views: 16100,
    downloads: 4400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-pagi-bg">
  <div class="gl-pagi">
    <button class="gl-btn">←</button>
    <button class="gl-btn">1</button>
    <button class="gl-btn active">2</button>
    <button class="gl-btn">3</button>
    <button class="gl-btn">→</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-pagi-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gl-pagi { display: flex; gap: 10px; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); padding: 15px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.gl-btn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; width: 40px; height: 40px; border-radius: 10px; display: flex; justify-content: center; align-items: center; font-size: 1rem; font-weight: bold; cursor: pointer; transition: 0.3s; }
.gl-btn:hover { background: rgba(255,255,255,0.25); transform: translateY(-2px); }
.gl-btn.active { background: #fff; color: #3b82f6; box-shadow: 0 4px 15px rgba(255,255,255,0.3); }`,
    jsCode: ``
  },

  // 4. Neumorphic Pagination
  {
    _id: "pg4",
    title: "Neumorphic Pagination",
    slug: "neumorphic-pagination",
    description: "Soft, extruded buttons that press inward when active.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["pagination", "neumorphism", "soft", "ui"],
    isPremium: false,
    views: 12800,
    downloads: 3400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-pagi">
  <button class="neu-btn">❮</button>
  <button class="neu-btn">1</button>
  <button class="neu-btn active">2</button>
  <button class="neu-btn">3</button>
  <button class="neu-btn">❯</button>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.neu-pagi { display: flex; gap: 15px; padding: 20px; border-radius: 20px; background: #e0e5ec; box-shadow: 8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.5); }
.neu-btn { width: 45px; height: 45px; border-radius: 12px; background: #e0e5ec; border: none; font-size: 1rem; font-weight: bold; color: #718096; cursor: pointer; transition: 0.2s; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); }
.neu-btn:hover { color: #4299e1; }
.neu-btn.active { color: #4299e1; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 5. Cyberpunk Pagination
  {
    _id: "pg5",
    title: "Cyberpunk Pagination",
    slug: "cyberpunk-pagination",
    description: "Dark, neon-lit pagination resembling a terminal interface.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["pagination", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 14700,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cy-pagi">
  <button class="cy-btn">&lt; PREV</button>
  <button class="cy-btn">01</button>
  <button class="cy-btn active">02</button>
  <button class="cy-btn">03</button>
  <button class="cy-btn">NEXT &gt;</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cy-pagi { display: flex; gap: 8px; border: 1px solid #333; padding: 10px; background: #0a0a0a; position: relative; }
.cy-pagi::before { content: ''; position: absolute; top: -2px; left: -2px; width: 10px; height: 10px; border-top: 2px solid #0ff; border-left: 2px solid #0ff; }
.cy-pagi::after { content: ''; position: absolute; bottom: -2px; right: -2px; width: 10px; height: 10px; border-bottom: 2px solid #f0f; border-right: 2px solid #f0f; }
.cy-btn { background: #000; border: 1px dashed #333; color: #666; padding: 8px 15px; font-family: 'Courier New', Courier, monospace; font-size: 1rem; cursor: pointer; transition: 0.2s; font-weight: bold; }
.cy-btn:hover { color: #0ff; border-color: #0ff; box-shadow: inset 0 0 10px rgba(0,255,255,0.2); }
.cy-btn.active { background: rgba(255,0,255,0.1); color: #f0f; border: 1px solid #f0f; text-shadow: 0 0 5px #f0f; box-shadow: 0 0 10px rgba(255,0,255,0.2); }`,
    jsCode: ``
  },

  // 6. Brutalist Block Pagination
  {
    _id: "pg6",
    title: "Brutalist Pagination",
    slug: "brutalist-pagination",
    description: "High contrast, thick borders, and heavy shadows for a bold statement.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["pagination", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 10900,
    downloads: 2700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="br-pagi">
  <button class="br-btn">←</button>
  <button class="br-btn">1</button>
  <button class="br-btn active">2</button>
  <button class="br-btn">3</button>
  <button class="br-btn">→</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.br-pagi { display: flex; gap: 15px; }
.br-btn { background: #fff; border: 4px solid #000; color: #000; width: 60px; height: 60px; font-size: 1.5rem; font-weight: 900; cursor: pointer; transition: 0.1s; box-shadow: 6px 6px 0 #000; display: flex; justify-content: center; align-items: center; }
.br-btn:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 #000; background: #facc15; }
.br-btn:active { transform: translate(6px, 6px); box-shadow: 0 0 0 #000; }
.br-btn.active { background: #000; color: #fff; box-shadow: 6px 6px 0 #ef4444; }
.br-btn.active:hover { background: #000; }`,
    jsCode: ``
  },

  // 7. Load More Button Pagination
  {
    _id: "pg7",
    title: "Load More Button",
    slug: "load-more-button",
    description: "A modern alternative to numbered pagination, fetching the next batch of items.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["pagination", "button", "infinite-scroll", "clean"],
    isPremium: false,
    views: 18800,
    downloads: 5300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lm-wrap">
  <p class="lm-text">Showing 10 of 142 results</p>
  <div class="lm-bar"><div class="lm-fill" style="width: 10%;"></div></div>
  <button class="lm-btn">Load More Results</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.lm-wrap { text-align: center; width: 100%; max-width: 300px; }
.lm-text { color: #64748b; font-size: 0.9rem; margin-bottom: 10px; font-weight: 500; }
.lm-bar { width: 100%; height: 6px; background: #f1f5f9; border-radius: 6px; overflow: hidden; margin-bottom: 20px; }
.lm-fill { height: 100%; background: #3b82f6; border-radius: 6px; }
.lm-btn { background: #fff; border: 2px solid #e2e8f0; color: #0f172a; padding: 12px 24px; font-size: 1rem; font-weight: 600; border-radius: 30px; cursor: pointer; transition: 0.2s; width: 100%; }
.lm-btn:hover { border-color: #0f172a; background: #0f172a; color: #fff; }`,
    jsCode: ``
  },

  // 8. Floating Pill Pagination
  {
    _id: "pg8",
    title: "Floating Pill Pagination",
    slug: "floating-pill-pagination",
    description: "A detached, floating pill layout perfect for sticking to the bottom of the screen.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pagination", "floating", "pill", "clean"],
    isPremium: true,
    views: 16400,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fp-pagi">
  <button class="fp-btn fp-arrow">←</button>
  <div class="fp-divider"></div>
  <button class="fp-btn">1</button>
  <button class="fp-btn active">2</button>
  <button class="fp-btn">3</button>
  <div class="fp-divider"></div>
  <button class="fp-btn fp-arrow">→</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.fp-pagi { display: inline-flex; align-items: center; background: #fff; padding: 8px; border-radius: 50px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.fp-btn { background: transparent; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 0.95rem; font-weight: 600; color: #64748b; cursor: pointer; transition: 0.2s; display: flex; justify-content: center; align-items: center; }
.fp-btn:hover { background: #f8fafc; color: #0f172a; }
.fp-btn.active { background: #0f172a; color: #fff; box-shadow: 0 4px 10px rgba(15,23,42,0.2); }
.fp-arrow { font-size: 1.2rem; }
.fp-divider { width: 1px; height: 24px; background: #e2e8f0; margin: 0 8px; }`,
    jsCode: ``
  },

  // 9. Circle Icon Pagination
  {
    _id: "pg9",
    title: "Circle Icon Pagination",
    slug: "circle-icon-pagination",
    description: "Simple circular buttons, ensuring uniform width and height for all numbers.",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pagination", "circle", "minimal", "clean"],
    isPremium: false,
    views: 13100,
    downloads: 3300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="circ-pagi">
  <button class="circ-btn">1</button>
  <button class="circ-btn active">2</button>
  <button class="circ-btn">3</button>
  <button class="circ-btn">4</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.circ-pagi { display: flex; gap: 12px; }
.circ-btn { width: 44px; height: 44px; border-radius: 50%; background: #fff; border: 1px solid #e4e4e7; color: #71717a; font-size: 1rem; font-weight: 500; cursor: pointer; transition: 0.2s; display: flex; justify-content: center; align-items: center; }
.circ-btn:hover { border-color: #3f3f46; color: #18181b; }
.circ-btn.active { background: #18181b; color: #fff; border-color: #18181b; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }`,
    jsCode: ``
  },

  // 10. Compact Status Pagination
  {
    _id: "pg10",
    title: "Compact Status Pagination",
    slug: "compact-status-pagination",
    description: "A space-saving design showing current status explicitly (e.g. Page 1 of 10).",
    category: "Pagination",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pagination", "compact", "status", "clean"],
    isPremium: true,
    views: 15900,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="comp-pagi">
  <button class="comp-btn">Previous</button>
  <span class="comp-status">Page <b>1</b> of <b>10</b></span>
  <button class="comp-btn">Next</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.comp-pagi { display: flex; align-items: center; background: #fff; padding: 6px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.comp-btn { background: #f8fafc; border: 1px solid #e2e8f0; padding: 8px 16px; border-radius: 6px; font-size: 0.9rem; font-weight: 500; color: #475569; cursor: pointer; transition: 0.2s; }
.comp-btn:hover { background: #f1f5f9; color: #0f172a; }
.comp-status { padding: 0 20px; font-size: 0.9rem; color: #64748b; }
.comp-status b { color: #0f172a; }`,
    jsCode: ``
  }
];
