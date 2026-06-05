import { Design } from "./designs-data";

export const BATCH_65_DESIGNS: Design[] = [
  // 1. Classic 4-Column Stats
  {
    _id: "st1",
    title: "Classic 4-Column Stats",
    slug: "classic-4-column-stats",
    description: "Standard clean statistics layout with four columns, perfect for landing pages.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stats", "metrics", "classic", "columns"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-cl">
  <div class="st-c-item">
    <div class="st-c-num">10K+</div>
    <div class="st-c-lbl">Active Users</div>
  </div>
  <div class="st-c-item">
    <div class="st-c-num">99.9%</div>
    <div class="st-c-lbl">Server Uptime</div>
  </div>
  <div class="st-c-item">
    <div class="st-c-num">50M</div>
    <div class="st-c-lbl">API Requests</div>
  </div>
  <div class="st-c-item">
    <div class="st-c-num">24/7</div>
    <div class="st-c-lbl">Customer Support</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 60px 20px; display: flex; justify-content: center; align-items: center; }
.st-cl { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; max-width: 1000px; width: 100%; text-align: center; background: #fff; padding: 40px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
.st-c-num { font-size: 3rem; font-weight: 800; color: #3b82f6; margin-bottom: 10px; line-height: 1; }
.st-c-lbl { font-size: 1rem; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }
@media (max-width: 768px) { .st-cl { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .st-cl { grid-template-columns: 1fr; } }`,
    jsCode: ``
  },

  // 2. Minimal Separator Stats
  {
    _id: "st2",
    title: "Minimal Separator Stats",
    slug: "minimal-separator-stats",
    description: "Clean typography separated by elegant vertical lines.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["stats", "minimal", "clean", "dividers"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-mn">
  <div class="st-m-item">
    <h3>$10M+</h3>
    <p>Revenue Generated</p>
  </div>
  <div class="st-m-item">
    <h3>5,000+</h3>
    <p>Happy Clients</p>
  </div>
  <div class="st-m-item">
    <h3>120+</h3>
    <p>Countries Served</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; padding: 60px 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.st-mn { display: flex; max-width: 900px; width: 100%; justify-content: space-between; text-align: center; }
.st-m-item { flex: 1; position: relative; padding: 0 20px; }
.st-m-item:not(:last-child)::after { content: ''; position: absolute; right: 0; top: 10%; height: 80%; width: 1px; background: #eaeaea; }
.st-m-item h3 { margin: 0 0 10px; font-size: 2.5rem; color: #111; font-weight: 700; letter-spacing: -1px; }
.st-m-item p { margin: 0; color: #666; font-size: 1.1rem; }
@media (max-width: 768px) { .st-mn { flex-direction: column; gap: 40px; } .st-m-item:not(:last-child)::after { display: none; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Stats
  {
    _id: "st3",
    title: "Cyberpunk Stats",
    slug: "cyberpunk-stats",
    description: "Neon lit, high tech metrics for gaming or developer dashboards.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["stats", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-cy">
  <div class="cy-st-card">
    <div class="cy-st-lbl">LATENCY</div>
    <div class="cy-st-num">12ms</div>
  </div>
  <div class="cy-st-card">
    <div class="cy-st-lbl">PACKET_LOSS</div>
    <div class="cy-st-num">0.0%</div>
  </div>
  <div class="cy-st-card">
    <div class="cy-st-lbl">ACTIVE_NODES</div>
    <div class="cy-st-num">14,204</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 60px 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.st-cy { display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; max-width: 900px; width: 100%; }
.cy-st-card { background: rgba(0,0,0,0.8); border: 1px solid #0f0; padding: 30px; min-width: 200px; text-align: center; position: relative; box-shadow: 0 0 10px rgba(0,255,0,0.1); }
.cy-st-card::before { content: ''; position: absolute; top: -1px; left: -1px; width: 10px; height: 10px; border-top: 2px solid #0ff; border-left: 2px solid #0ff; }
.cy-st-card::after { content: ''; position: absolute; bottom: -1px; right: -1px; width: 10px; height: 10px; border-bottom: 2px solid #0ff; border-right: 2px solid #0ff; }
.cy-st-lbl { color: #f0f; font-weight: bold; margin-bottom: 15px; text-shadow: 0 0 5px #f0f; }
.cy-st-num { color: #0f0; font-size: 2.5rem; font-weight: bold; text-shadow: 0 0 10px #0f0; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Stats
  {
    _id: "st4",
    title: "Glassmorphism Stats",
    slug: "glassmorphism-stats",
    description: "Frosted glass statistics resting over a vibrant background.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["stats", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="st-gl">
    <div class="st-g-item">
      <h4>Downloads</h4>
      <div>2.5M+</div>
    </div>
    <div class="st-g-item">
      <h4>Contributors</h4>
      <div>450+</div>
    </div>
    <div class="st-g-item">
      <h4>Forks</h4>
      <div>1.2K</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.st-gl { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; width: 100%; max-width: 900px; }
.st-g-item { flex: 1; min-width: 200px; background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 16px; padding: 30px; text-align: center; color: #fff; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
.st-g-item h4 { margin: 0 0 15px; font-weight: 500; opacity: 0.8; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; }
.st-g-item div { font-size: 3rem; font-weight: 800; text-shadow: 0 2px 10px rgba(0,0,0,0.1); }`,
    jsCode: ``
  },

  // 5. Brutalist Stats
  {
    _id: "st5",
    title: "Brutalist Stats",
    slug: "brutalist-stats",
    description: "Thick borders, heavy shadows, and bold typography.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["stats", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-br">
  <div class="st-b-item">
    <div class="st-b-num">100%</div>
    <div class="st-b-lbl">FREE ALWAYS</div>
  </div>
  <div class="st-b-item">
    <div class="st-b-num">0</div>
    <div class="st-b-lbl">DEPENDENCIES</div>
  </div>
  <div class="st-b-item">
    <div class="st-b-num">∞</div>
    <div class="st-b-lbl">POSSIBILITIES</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.st-br { display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; max-width: 900px; width: 100%; }
.st-b-item { background: #fff; border: 4px solid #000; padding: 30px; box-shadow: 8px 8px 0 #facc15; flex: 1; min-width: 200px; text-align: center; }
.st-b-item:nth-child(2) { box-shadow: 8px 8px 0 #ec4899; }
.st-b-item:nth-child(3) { box-shadow: 8px 8px 0 #3b82f6; }
.st-b-num { font-size: 4rem; font-weight: 900; color: #000; margin-bottom: 10px; line-height: 1; }
.st-b-lbl { font-weight: 800; font-size: 1.1rem; color: #000; text-transform: uppercase; }`,
    jsCode: ``
  },

  // 6. Neumorphic Stats
  {
    _id: "st6",
    title: "Neumorphic Stats",
    slug: "neumorphic-stats",
    description: "Soft UI design with extruded elements matching neumorphic layouts.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["stats", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-neu">
  <div class="st-n-item">
    <div class="st-n-circle">
      <span>1.2K</span>
    </div>
    <p>Daily Active Users</p>
  </div>
  <div class="st-n-item">
    <div class="st-n-circle">
      <span>85%</span>
    </div>
    <p>Retention Rate</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.st-neu { display: flex; gap: 40px; flex-wrap: wrap; justify-content: center; }
.st-n-item { text-align: center; }
.st-n-circle { width: 150px; height: 150px; border-radius: 50%; background: #e0e5ec; box-shadow: 10px 10px 20px rgba(163,177,198,0.6), -10px -10px 20px rgba(255,255,255,0.5); display: flex; justify-content: center; align-items: center; margin: 0 auto 20px; border: 4px solid #e0e5ec; }
.st-n-circle span { font-size: 2.5rem; font-weight: bold; color: #3182ce; }
.st-n-item p { margin: 0; color: #718096; font-weight: bold; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Stats
  {
    _id: "st7",
    title: "Dark Mode Glow Stats",
    slug: "dark-mode-glow-stats",
    description: "Deep dark metrics with glowing gradient text.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["stats", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-dg">
  <div class="st-d-item">
    <div class="st-d-num">4.9/5</div>
    <div class="st-d-lbl">Average Rating</div>
  </div>
  <div class="st-d-item">
    <div class="st-d-num">24/7</div>
    <div class="st-d-lbl">Uptime</div>
  </div>
  <div class="st-d-item">
    <div class="st-d-num">2ms</div>
    <div class="st-d-lbl">Latency</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.st-dg { display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; max-width: 900px; width: 100%; background: #0f172a; padding: 50px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.st-d-item { flex: 1; min-width: 200px; text-align: center; }
.st-d-num { font-size: 3.5rem; font-weight: 800; margin-bottom: 10px; background: linear-gradient(135deg, #3b82f6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.st-d-lbl { color: #94a3b8; font-size: 1.1rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 8. Icon Left Stats
  {
    _id: "st8",
    title: "Icon Left Stats",
    slug: "icon-left-stats",
    description: "Horizontal layout with an icon/emoji on the left and numbers on the right.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["stats", "icon", "horizontal", "clean"],
    isPremium: false,
    views: 33400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-ic">
  <div class="st-i-card">
    <div class="st-i-icon">👥</div>
    <div class="st-i-info">
      <div class="st-i-num">8.2M</div>
      <div class="st-i-lbl">Total Users</div>
    </div>
  </div>
  <div class="st-i-card">
    <div class="st-i-icon">⚡️</div>
    <div class="st-i-info">
      <div class="st-i-num">99.9%</div>
      <div class="st-i-lbl">Uptime SLA</div>
    </div>
  </div>
  <div class="st-i-card">
    <div class="st-i-icon">🌍</div>
    <div class="st-i-info">
      <div class="st-i-num">120+</div>
      <div class="st-i-lbl">Countries</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.st-ic { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; max-width: 1000px; width: 100%; }
.st-i-card { background: #fff; padding: 30px; border-radius: 12px; display: flex; align-items: center; gap: 20px; flex: 1; min-width: 250px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); border: 1px solid #e2e8f0; }
.st-i-icon { font-size: 2.5rem; background: #f8fafc; width: 70px; height: 70px; display: flex; justify-content: center; align-items: center; border-radius: 16px; }
.st-i-num { font-size: 2rem; font-weight: 800; color: #0f172a; line-height: 1; margin-bottom: 5px; }
.st-i-lbl { color: #64748b; font-size: 0.95rem; font-weight: 500; }`,
    jsCode: ``
  },

  // 9. Floating Card Stats
  {
    _id: "st9",
    title: "Floating Card Stats",
    slug: "floating-card-stats",
    description: "Distinct floating cards with hover effects.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stats", "floating", "cards", "shadow"],
    isPremium: false,
    views: 29100,
    downloads: 7700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-fl">
  <div class="st-f-card">
    <p>Total Revenue</p>
    <h3>$2.4M</h3>
    <span class="st-f-pos">+14% this month</span>
  </div>
  <div class="st-f-card">
    <p>New Customers</p>
    <h3>1,429</h3>
    <span class="st-f-pos">+5% this month</span>
  </div>
  <div class="st-f-card">
    <p>Churn Rate</p>
    <h3>1.2%</h3>
    <span class="st-f-neg">-0.5% this month</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #eef2f6; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.st-fl { display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; max-width: 1000px; width: 100%; }
.st-f-card { background: #fff; padding: 35px; border-radius: 20px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); flex: 1; min-width: 250px; transition: 0.3s; }
.st-f-card:hover { transform: translateY(-5px); box-shadow: 0 20px 35px -5px rgba(0,0,0,0.1); }
.st-f-card p { margin: 0 0 15px; color: #64748b; font-size: 1.1rem; font-weight: 500; }
.st-f-card h3 { margin: 0 0 15px; font-size: 2.8rem; font-weight: 800; color: #0f172a; }
.st-f-pos { color: #10b981; font-weight: 600; font-size: 0.9rem; background: #d1fae5; padding: 4px 10px; border-radius: 20px; }
.st-f-neg { color: #ef4444; font-weight: 600; font-size: 0.9rem; background: #fee2e2; padding: 4px 10px; border-radius: 20px; }`,
    jsCode: ``
  },

  // 10. Background Image Stats
  {
    _id: "st10",
    title: "Background Image Stats",
    slug: "background-image-stats",
    description: "Stats overlaid on a full width background image with a dark mask.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["stats", "image", "overlay", "white-text"],
    isPremium: true,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-bg">
  <div class="st-bg-overlay"></div>
  <div class="st-bg-content">
    <div class="st-b-item">
      <h3>500+</h3>
      <p>Destinations</p>
    </div>
    <div class="st-b-item">
      <h3>10K+</h3>
      <p>Tours Booked</p>
    </div>
    <div class="st-b-item">
      <h3>99%</h3>
      <p>Happy Travelers</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.st-bg { position: relative; min-height: 50vh; display: flex; justify-content: center; align-items: center; background: url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=1600&q=80') center/cover fixed; }
.st-bg-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.7); }
.st-bg-content { position: relative; z-index: 1; display: flex; gap: 60px; flex-wrap: wrap; justify-content: center; width: 100%; max-width: 1000px; padding: 40px 20px; color: #fff; text-align: center; }
.st-b-item h3 { margin: 0 0 10px; font-size: 4rem; font-weight: 800; }
.st-b-item p { margin: 0; font-size: 1.2rem; font-weight: 500; text-transform: uppercase; letter-spacing: 2px; opacity: 0.9; }
@media (max-width: 768px) { .st-bg-content { gap: 40px; flex-direction: column; } .st-b-item h3 { font-size: 3rem; } }`,
    jsCode: ``
  }
];
