import { Design } from "./designs-data";

export const BATCH_53_DESIGNS: Design[] = [
  // 1. Classic Minimal Stat Card
  {
    _id: "st1",
    title: "Classic Minimal Stat",
    slug: "classic-minimal-stat",
    description: "Clean and straightforward statistic card with title and large number.",
    category: "Stats Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stats", "minimal", "classic", "dashboard"],
    isPremium: false,
    views: 31200,
    downloads: 9500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-min">
  <div class="st-m-icon">💰</div>
  <div class="st-m-info">
    <h3>Total Revenue</h3>
    <p>$124,500</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f1f5f9; }
.st-min { display: flex; align-items: center; gap: 20px; padding: 25px 30px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); width: 280px; }
.st-m-icon { font-size: 2rem; background: #f0fdf4; padding: 15px; border-radius: 50%; display: flex; justify-content: center; align-items: center; }
.st-m-info h3 { margin: 0 0 5px 0; color: #64748b; font-size: 0.9rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
.st-m-info p { margin: 0; color: #0f172a; font-size: 1.8rem; font-weight: 700; }`,
    jsCode: ``
  },

  // 2. Trend Arrow Stat Card
  {
    _id: "st2",
    title: "Trend Arrow Stat",
    slug: "trend-arrow-stat",
    description: "Statistic card featuring a percentage change indicator (up/down).",
    category: "Stats Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["stats", "trend", "analytics", "arrow"],
    isPremium: false,
    views: 28400,
    downloads: 8100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-trend">
  <div class="st-t-head">
    <h3>Active Users</h3>
    <span class="st-t-up">↑ 12.5%</span>
  </div>
  <div class="st-t-body">
    <p>42,089</p>
    <small>vs last month</small>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.st-trend { padding: 25px; background: #fff; border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); width: 260px; border: 1px solid #e2e8f0; }
.st-t-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.st-t-head h3 { margin: 0; color: #64748b; font-size: 0.95rem; font-weight: 500; }
.st-t-up { background: #dcfce7; color: #15803d; padding: 4px 8px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; }
.st-t-body p { margin: 0 0 5px 0; color: #0f172a; font-size: 2rem; font-weight: 800; letter-spacing: -1px; }
.st-t-body small { color: #94a3b8; font-size: 0.8rem; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Stat Card
  {
    _id: "st3",
    title: "Cyberpunk Stat Card",
    slug: "cyberpunk-stat-card",
    description: "High-tech neon display panel for gaming or sci-fi dashboards.",
    category: "Stats Cards",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["stats", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 24500,
    downloads: 6200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-cy">
  <div class="st-cy-scanline"></div>
  <h4>SERVER LOAD</h4>
  <p class="st-cy-val">87.4%</p>
  <div class="st-cy-bar"><div style="width: 87.4%"></div></div>
  <span class="st-cy-warn">WARNING: HIGH STRESS</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.st-cy { width: 280px; padding: 25px; background: rgba(0,255,255,0.05); border: 1px solid #0ff; box-shadow: inset 0 0 20px rgba(0,255,255,0.1), 0 0 10px rgba(0,255,255,0.2); position: relative; overflow: hidden; }
.st-cy-scanline { position: absolute; top: 0; left: 0; right: 0; height: 2px; background: rgba(0,255,255,0.5); opacity: 0.5; animation: scan 3s linear infinite; }
@keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }
.st-cy h4 { margin: 0 0 10px; color: #0ff; font-size: 0.9rem; letter-spacing: 2px; }
.st-cy-val { margin: 0 0 15px; color: #fff; font-size: 2.5rem; font-weight: bold; text-shadow: 0 0 10px #0ff; }
.st-cy-bar { width: 100%; height: 8px; background: #111; border: 1px solid #0ff; margin-bottom: 10px; }
.st-cy-bar div { height: 100%; background: #f0f; box-shadow: 0 0 10px #f0f; }
.st-cy-warn { color: #f0f; font-size: 0.7rem; font-weight: bold; letter-spacing: 1px; animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Stat Card
  {
    _id: "st4",
    title: "Glassmorphism Stat",
    slug: "glassmorphism-stat",
    description: "Frosted glass card displaying a metric over a colorful background.",
    category: "Stats Cards",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["stats", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 33100,
    downloads: 9800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="st-gl">
    <div class="st-g-icon">📈</div>
    <h3>Conversion Rate</h3>
    <p>4.8%</p>
    <div class="st-g-spark"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.st-gl { padding: 30px; border-radius: 20px; background: rgba(255,255,255,0.15); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.4); box-shadow: 0 8px 32px rgba(0,0,0,0.1); width: 240px; color: #fff; }
.st-g-icon { font-size: 24px; width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 12px; display: flex; justify-content: center; align-items: center; margin-bottom: 20px; }
.st-gl h3 { margin: 0 0 10px 0; font-size: 0.9rem; font-weight: 500; opacity: 0.9; }
.st-gl p { margin: 0 0 20px 0; font-size: 2.2rem; font-weight: 800; letter-spacing: -1px; }
.st-g-spark { height: 30px; width: 100%; background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%); clip-path: polygon(0 100%, 20% 70%, 40% 90%, 60% 40%, 80% 60%, 100% 20%, 100% 100%); opacity: 0.5; }`,
    jsCode: ``
  },

  // 5. Brutalist Stat Card
  {
    _id: "st5",
    title: "Brutalist Stat Card",
    slug: "brutalist-stat-card",
    description: "High impact, unstyled looking block with massive typography.",
    category: "Stats Cards",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["stats", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 19800,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-br">
  <h4>NEW SUBSCRIBERS</h4>
  <p>+8,241</p>
  <div class="st-b-foot">THIS WEEK</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e5e5; }
.st-br { width: 300px; background: #fff; border: 5px solid #000; box-shadow: 10px 10px 0 #facc15; padding: 30px 20px; transition: 0.2s; cursor: pointer; }
.st-br:hover { transform: translate(5px, 5px); box-shadow: 5px 5px 0 #facc15; }
.st-br h4 { margin: 0 0 15px; font-size: 1.2rem; font-weight: 900; color: #000; text-transform: uppercase; }
.st-br p { margin: 0 0 25px; font-size: 3.5rem; font-weight: 900; color: #000; line-height: 1; letter-spacing: -2px; }
.st-b-foot { padding-top: 15px; border-top: 5px solid #000; font-weight: 900; font-size: 1rem; }`,
    jsCode: ``
  },

  // 6. Neumorphic Stat Card
  {
    _id: "st6",
    title: "Neumorphic Stat",
    slug: "neumorphic-stat",
    description: "Soft UI frame where the number feels carved into the surface.",
    category: "Stats Cards",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["stats", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 21600,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-neu">
  <h3>Bounce Rate</h3>
  <div class="st-n-val">34.2%</div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.st-neu { width: 250px; padding: 30px; border-radius: 24px; background: #e0e5ec; box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5); text-align: center; }
.st-neu h3 { margin: 0 0 20px; color: #718096; font-size: 1.1rem; font-weight: normal; }
.st-n-val { width: 140px; height: 140px; margin: 0 auto; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 2rem; font-weight: bold; color: #2d3748; background: #e0e5ec; box-shadow: inset 6px 6px 10px 0 rgba(163,177,198,0.7), inset -6px -6px 10px 0 rgba(255,255,255,0.8); }`,
    jsCode: ``
  },

  // 7. Progress Ring Stat Card
  {
    _id: "st7",
    title: "Progress Ring Stat",
    slug: "progress-ring-stat",
    description: "Statistic card with a circular SVG progress indicator.",
    category: "Stats Cards",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["stats", "progress", "ring", "chart"],
    isPremium: true,
    views: 29800,
    downloads: 8400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-ring">
  <div class="st-r-chart">
    <svg viewBox="0 0 36 36">
      <path class="st-r-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path class="st-r-fill" stroke-dasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
    </svg>
    <div class="st-r-pct">75%</div>
  </div>
  <div class="st-r-info">
    <h3>Task Completion</h3>
    <p>15 of 20 tasks done</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.st-ring { display: flex; align-items: center; gap: 25px; padding: 25px; background: #fff; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; }
.st-r-chart { position: relative; width: 80px; height: 80px; }
.st-r-chart svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.st-r-bg { fill: none; stroke: #f1f5f9; stroke-width: 3.5; }
.st-r-fill { fill: none; stroke: #3b82f6; stroke-width: 3.5; stroke-linecap: round; animation: progress 1.5s ease-out forwards; }
@keyframes progress { 0% { stroke-dasharray: 0, 100; } }
.st-r-pct { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: 700; color: #0f172a; font-size: 1.1rem; }
.st-r-info h3 { margin: 0 0 5px 0; color: #0f172a; font-size: 1.1rem; }
.st-r-info p { margin: 0; color: #64748b; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 8. Dark Mode Glow Stat Card
  {
    _id: "st8",
    title: "Dark Mode Glow Stat",
    slug: "dark-mode-glow-stat",
    description: "Deep dark dashboard card with a gradient glowing shadow.",
    category: "Stats Cards",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["stats", "dark", "glow", "dashboard"],
    isPremium: true,
    views: 31400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-dg">
  <div class="st-d-icon">⚡</div>
  <p class="st-d-val">99.9%</p>
  <h3>Uptime SLA</h3>
  <div class="st-d-bar"><div style="width: 99.9%"></div></div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #020617; }
.st-dg { width: 260px; padding: 30px; background: #0f172a; border-radius: 20px; border: 1px solid #1e293b; position: relative; }
.st-dg::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 100%; border-radius: 20px; box-shadow: 0 20px 40px -10px rgba(139, 92, 246, 0.4); z-index: -1; pointer-events: none; }
.st-d-icon { width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); display: flex; justify-content: center; align-items: center; margin-bottom: 20px; font-size: 1.2rem; }
.st-d-val { margin: 0 0 5px 0; color: #f8fafc; font-size: 2.2rem; font-weight: 800; }
.st-dg h3 { margin: 0 0 20px 0; color: #94a3b8; font-size: 0.95rem; font-weight: 500; }
.st-d-bar { width: 100%; height: 6px; background: #1e293b; border-radius: 3px; overflow: hidden; }
.st-d-bar div { height: 100%; background: linear-gradient(90deg, #3b82f6, #8b5cf6); box-shadow: 0 0 10px #8b5cf6; }`,
    jsCode: ``
  },

  // 9. Sparkline Chart Stat Card
  {
    _id: "st9",
    title: "Sparkline Stat Card",
    slug: "sparkline-stat-card",
    description: "Compact metric card featuring a mini CSS-drawn trend line.",
    category: "Stats Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stats", "sparkline", "chart", "metrics"],
    isPremium: true,
    views: 28500,
    downloads: 7700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-spark">
  <div class="st-s-head">
    <h3>Page Views</h3>
    <span>Last 7 days</span>
  </div>
  <p class="st-s-val">12,450</p>
  <div class="st-s-line">
    <svg viewBox="0 0 100 30" preserveAspectRatio="none">
      <path d="M0 25 L20 15 L40 20 L60 5 L80 10 L100 0" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M0 25 L20 15 L40 20 L60 5 L80 10 L100 0 L100 30 L0 30 Z" fill="url(#grad)" />
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgba(16,185,129,0.2)"/>
          <stop offset="100%" stop-color="rgba(16,185,129,0)"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.st-spark { width: 280px; padding: 25px; background: #fff; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
.st-s-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.st-s-head h3 { margin: 0; color: #64748b; font-size: 0.95rem; font-weight: 500; }
.st-s-head span { font-size: 0.75rem; color: #94a3b8; }
.st-s-val { margin: 0 0 20px 0; color: #0f172a; font-size: 2rem; font-weight: 700; }
.st-s-line { width: 100%; height: 50px; }
.st-s-line svg { width: 100%; height: 100%; }`,
    jsCode: ``
  },

  // 10. Floating 3D Stat Card
  {
    _id: "st10",
    title: "Floating 3D Stat Card",
    slug: "floating-3d-stat-card",
    description: "A prominent dashboard card with a strong cast shadow that elevates on hover.",
    category: "Stats Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["stats", "3d", "floating", "dashboard"],
    isPremium: false,
    views: 23600,
    downloads: 5900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-fl">
  <div class="st-f-icon">🎯</div>
  <h3>Monthly Goal</h3>
  <p class="st-f-val">85%</p>
  <p class="st-f-sub">On track to beat target.</p>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e2e8f0; }
.st-fl { width: 240px; padding: 30px; background: #fff; border-radius: 20px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); text-align: center; transition: 0.3s; cursor: pointer; }
.st-fl:hover { transform: translateY(-10px); box-shadow: 0 25px 30px -5px rgba(0,0,0,0.15), 0 15px 15px -5px rgba(0,0,0,0.06); }
.st-f-icon { font-size: 2.5rem; margin-bottom: 15px; }
.st-fl h3 { margin: 0 0 10px 0; color: #64748b; font-size: 1rem; font-weight: 600; }
.st-f-val { margin: 0 0 10px 0; color: #0f172a; font-size: 2.5rem; font-weight: 800; letter-spacing: -1px; }
.st-f-sub { margin: 0; color: #10b981; font-size: 0.85rem; font-weight: 600; }`,
    jsCode: ``
  }
];
