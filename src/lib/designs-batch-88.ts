import { Design } from "./designs-data";

export const BATCH_88_DESIGNS: Design[] = [
  // 1. Classic 4-Column Stats
  {
    _id: "st1",
    title: "Classic Stats Grid",
    slug: "classic-stats-grid",
    description: "Standard 4-column layout for displaying key metrics.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stats", "metrics", "classic", "grid"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-cl">
  <h2>Trusted by builders worldwide</h2>
  <p>Our library powers some of the most demanding interfaces on the web.</p>
  <div class="st-grid">
    <div class="st-item">
      <div class="st-num">8.2M+</div>
      <div class="st-label">Downloads</div>
    </div>
    <div class="st-item">
      <div class="st-num">99.9%</div>
      <div class="st-label">Uptime</div>
    </div>
    <div class="st-item">
      <div class="st-num">15k+</div>
      <div class="st-label">Stars</div>
    </div>
    <div class="st-item">
      <div class="st-num">24/7</div>
      <div class="st-label">Support</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.st-cl { max-width: 1000px; width: 100%; text-align: center; }
.st-cl h2 { font-size: 2.5rem; color: #0f172a; margin: 0 0 15px; }
.st-cl p { color: #64748b; font-size: 1.1rem; margin: 0 0 50px; }
.st-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
.st-item { padding: 30px; background: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0; }
.st-num { font-size: 3rem; font-weight: 800; color: #3b82f6; margin-bottom: 10px; }
.st-label { color: #475569; font-weight: 600; font-size: 1.1rem; }`,
    jsCode: ``
  },

  // 2. Minimal Clean Stats
  {
    _id: "st2",
    title: "Minimal Typography Stats",
    slug: "minimal-typography-stats",
    description: "Huge, elegant typography focusing entirely on the numbers.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["stats", "metrics", "minimal", "clean"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-mn">
  <div class="mn-item">
    <div class="mn-num">10x</div>
    <div class="mn-label">Faster Development</div>
  </div>
  <div class="mn-divider"></div>
  <div class="mn-item">
    <div class="mn-num">0kb</div>
    <div class="mn-label">JavaScript Bloat</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fafafa; padding: 100px 20px; display: flex; justify-content: center; align-items: center; min-height: 50vh; }
.st-mn { display: flex; align-items: center; gap: 60px; max-width: 800px; width: 100%; justify-content: center; flex-wrap: wrap; }
.mn-item { text-align: center; }
.mn-num { font-size: 6rem; font-weight: 200; color: #000; line-height: 1; letter-spacing: -3px; margin-bottom: 15px; }
.mn-label { font-size: 1.2rem; color: #666; text-transform: uppercase; letter-spacing: 2px; }
.mn-divider { width: 2px; height: 100px; background: #e5e5e5; }
@media (max-width: 600px) { .st-mn { flex-direction: column; gap: 40px; } .mn-divider { width: 100px; height: 2px; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Stats
  {
    _id: "st3",
    title: "Cyberpunk Telemetry",
    slug: "cyberpunk-telemetry-stats",
    description: "Hacker-style dashboard metrics with neon grid background.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["stats", "cyberpunk", "neon", "dashboard"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-cy">
  <div class="cy-head">SYSTEM TELEMETRY</div>
  <div class="cy-grid">
    <div class="cy-item">
      <div class="cy-label">CPU_LOAD</div>
      <div class="cy-num">98.4%</div>
    </div>
    <div class="cy-item">
      <div class="cy-label">NET_TRAFFIC</div>
      <div class="cy-num">4.2TB/s</div>
    </div>
    <div class="cy-item">
      <div class="cy-label">NODES_ACTIVE</div>
      <div class="cy-num">8,492</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; 
background-image: linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px); background-size: 20px 20px; }
.st-cy { max-width: 800px; width: 100%; border: 2px solid #0f0; background: rgba(0,20,0,0.9); padding: 30px; box-shadow: 0 0 30px rgba(0,255,0,0.2); }
.cy-head { color: #0f0; border-bottom: 2px solid #0f0; padding-bottom: 10px; margin-bottom: 30px; font-weight: bold; letter-spacing: 2px; font-size: 1.2rem; }
.cy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
.cy-item { border: 1px solid #055; padding: 20px; text-align: center; }
.cy-label { color: #0aa; margin-bottom: 10px; font-weight: bold; }
.cy-num { color: #0f0; font-size: 2.5rem; font-weight: bold; text-shadow: 0 0 10px #0f0; animation: flicker 2s infinite; }
@keyframes flicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } 55% { opacity: 1; } 60% { opacity: 0.5; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Stats
  {
    _id: "st4",
    title: "Glassmorphism Stats Cards",
    slug: "glassmorphism-stats-cards",
    description: "Frosted glass stat cards hovering over a fluid gradient.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["stats", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="st-gl">
    <div class="gl-card">
      <div class="gl-icon">📈</div>
      <div class="gl-num">250%</div>
      <div class="gl-label">Growth YoY</div>
    </div>
    <div class="gl-card">
      <div class="gl-icon">⚡</div>
      <div class="gl-num">< 50ms</div>
      <div class="gl-label">Response Time</div>
    </div>
    <div class="gl-card">
      <div class="gl-icon">🌍</div>
      <div class="gl-num">120+</div>
      <div class="gl-label">Countries</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.st-gl { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; max-width: 1000px; width: 100%; }
.gl-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 40px; text-align: center; color: #fff; box-shadow: 0 15px 30px rgba(0,0,0,0.1); transition: 0.3s; }
.gl-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.15); }
.gl-icon { font-size: 2.5rem; margin-bottom: 20px; }
.gl-num { font-size: 3rem; font-weight: 800; margin-bottom: 10px; }
.gl-label { opacity: 0.8; font-size: 1.1rem; font-weight: 500; }`,
    jsCode: ``
  },

  // 5. Brutalist Stats
  {
    _id: "st5",
    title: "Brutalist Metric Blocks",
    slug: "brutalist-metric-blocks",
    description: "Massive, high-contrast structural blocks for metrics.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["stats", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-br">
  <div class="br-card">
    <div class="br-label">USERS</div>
    <div class="br-num">1M+</div>
  </div>
  <div class="br-card br-yellow">
    <div class="br-label">REVENUE</div>
    <div class="br-num">$50M</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.st-br { display: flex; flex-wrap: wrap; gap: 40px; max-width: 900px; width: 100%; justify-content: center; }
.br-card { background: #fff; border: 8px solid #000; box-shadow: 15px 15px 0 #000; padding: 40px; width: 350px; text-align: center; }
.br-yellow { background: #facc15; }
.br-label { font-size: 1.5rem; font-weight: 900; border-bottom: 4px solid #000; padding-bottom: 10px; margin-bottom: 20px; letter-spacing: 2px; }
.br-num { font-size: 6rem; font-weight: 900; line-height: 1; letter-spacing: -3px; }`,
    jsCode: ``
  },

  // 6. Neumorphic Stats
  {
    _id: "st6",
    title: "Neumorphic Dials",
    slug: "neumorphic-stats-dials",
    description: "Soft UI embossed elements presenting statistics smoothly.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["stats", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-neu">
  <div class="neu-circle">
    <div class="neu-inner">
      <span class="neu-val">99%</span>
      <span class="neu-text">Success</span>
    </div>
  </div>
  <div class="neu-circle">
    <div class="neu-inner">
      <span class="neu-val">24h</span>
      <span class="neu-text">Turnaround</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; align-items: center; min-height: 50vh; }
.st-neu { display: flex; gap: 60px; flex-wrap: wrap; justify-content: center; }
.neu-circle { width: 200px; height: 200px; border-radius: 50%; background: #e0e5ec; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); display: flex; justify-content: center; align-items: center; padding: 15px; }
.neu-inner { width: 100%; height: 100%; border-radius: 50%; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); display: flex; flex-direction: column; justify-content: center; align-items: center; }
.neu-val { font-size: 2.5rem; font-weight: bold; color: #4a5568; margin-bottom: 5px; }
.neu-text { color: #718096; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Stats
  {
    _id: "st7",
    title: "Dark Glow Metrics",
    slug: "dark-glow-metrics",
    description: "Deep dark UI with bright neon glowing text metrics.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["stats", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-dg">
  <div class="dg-item">
    <div class="dg-val">10M+</div>
    <div class="dg-label">API Requests</div>
  </div>
  <div class="dg-item">
    <div class="dg-val">0.5s</div>
    <div class="dg-label">Latency</div>
  </div>
  <div class="dg-item">
    <div class="dg-val">100%</div>
    <div class="dg-label">Secure</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; align-items: center; }
.st-dg { display: flex; flex-wrap: wrap; gap: 40px; justify-content: center; max-width: 1000px; width: 100%; }
.dg-item { background: #0f172a; border: 1px solid #1e293b; border-radius: 20px; padding: 50px 30px; text-align: center; width: 250px; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05); transition: 0.3s; }
.dg-item:hover { border-color: #3b82f6; box-shadow: 0 0 30px rgba(59,130,246,0.2), inset 0 0 20px rgba(59,130,246,0.1); transform: translateY(-5px); }
.dg-val { font-size: 3.5rem; font-weight: 800; color: #fff; margin-bottom: 15px; text-shadow: 0 0 15px rgba(59,130,246,0.8); }
.dg-label { color: #94a3b8; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; }`,
    jsCode: ``
  },

  // 8. Progress Ring Stats
  {
    _id: "st8",
    title: "Progress Ring Stats",
    slug: "progress-ring-stats",
    description: "Stats visualized with clean CSS circular progress rings.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["stats", "progress", "ring", "circular"],
    isPremium: true,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-pr">
  <div class="pr-card">
    <div class="pr-ring" style="--val: 85;">
      <div class="pr-inner">85%</div>
    </div>
    <div class="pr-text">Customer Retention</div>
  </div>
  <div class="pr-card">
    <div class="pr-ring" style="--val: 62;">
      <div class="pr-inner">62%</div>
    </div>
    <div class="pr-text">Market Share</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 100px 20px; display: flex; justify-content: center; }
.st-pr { display: flex; gap: 40px; flex-wrap: wrap; justify-content: center; }
.pr-card { background: #fff; padding: 40px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center; width: 250px; }
.pr-ring { width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(#3b82f6 calc(var(--val) * 1%), #e2e8f0 0); margin: 0 auto 20px; display: flex; justify-content: center; align-items: center; position: relative; }
.pr-inner { width: 90px; height: 90px; background: #fff; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.5rem; font-weight: bold; color: #0f172a; position: absolute; }
.pr-text { color: #64748b; font-size: 1.1rem; font-weight: 500; }`,
    jsCode: ``
  },

  // 9. Card Grid Stats
  {
    _id: "st9",
    title: "Icon Card Stats",
    slug: "icon-card-stats",
    description: "Cards combining distinct icons with metric values.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stats", "cards", "icons", "grid"],
    isPremium: false,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-ic">
  <div class="ic-card">
    <div class="ic-icon" style="background: #e0e7ff; color: #4f46e5;">👥</div>
    <div class="ic-data">
      <div class="ic-val">50,000+</div>
      <div class="ic-label">Active Users</div>
    </div>
  </div>
  <div class="ic-card">
    <div class="ic-icon" style="background: #dcfce7; color: #16a34a;">💳</div>
    <div class="ic-data">
      <div class="ic-val">$2.5M</div>
      <div class="ic-label">Paid Out</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.st-ic { display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; max-width: 800px; width: 100%; }
.ic-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; display: flex; align-items: center; gap: 20px; flex: 1; min-width: 300px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
.ic-icon { width: 60px; height: 60px; border-radius: 12px; display: flex; justify-content: center; align-items: center; font-size: 1.5rem; }
.ic-val { font-size: 2rem; font-weight: 800; color: #0f172a; margin-bottom: 5px; line-height: 1; }
.ic-label { color: #64748b; font-weight: 500; }`,
    jsCode: ``
  },

  // 10. Vertical Timeline Stats
  {
    _id: "st10",
    title: "Vertical List Stats",
    slug: "vertical-list-stats",
    description: "Stats presented as a clean vertical list, great for sidebars.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["stats", "list", "vertical", "clean"],
    isPremium: false,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-vt">
  <h3>Project Impact</h3>
  <div class="vt-list">
    <div class="vt-item">
      <span class="vt-val">400%</span>
      <span class="vt-label">Increase in conversion rate</span>
    </div>
    <div class="vt-item">
      <span class="vt-val">1.2s</span>
      <span class="vt-label">Average page load time</span>
    </div>
    <div class="vt-item">
      <span class="vt-val">0</span>
      <span class="vt-label">External dependencies</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.st-vt { max-width: 400px; width: 100%; background: #f8fafc; padding: 40px; border-radius: 20px; }
.st-vt h3 { margin: 0 0 30px; color: #0f172a; font-size: 1.5rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 15px; }
.vt-list { display: flex; flex-direction: column; gap: 25px; }
.vt-item { display: flex; flex-direction: column; gap: 5px; }
.vt-val { font-size: 2.5rem; font-weight: 800; color: #3b82f6; line-height: 1; }
.vt-label { color: #475569; font-size: 1.1rem; font-weight: 500; }`,
    jsCode: ``
  }
];
