import { Design } from "./designs-data";

export const BATCH_75_DESIGNS: Design[] = [
  // 1. Classic 4-Column Grid
  {
    _id: "st1",
    title: "Classic Stats Grid",
    slug: "classic-stats-grid",
    description: "Standard 4-column metrics display suitable for any business landing page.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stats", "metrics", "classic", "grid"],
    isPremium: false,
    views: 41200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-cl">
  <div class="st-c-item">
    <div class="st-c-num">10M+</div>
    <div class="st-c-label">Active Users</div>
  </div>
  <div class="st-c-item">
    <div class="st-c-num">$50B</div>
    <div class="st-c-label">Processed Volume</div>
  </div>
  <div class="st-c-item">
    <div class="st-c-num">99.9%</div>
    <div class="st-c-label">Uptime SLA</div>
  </div>
  <div class="st-c-item">
    <div class="st-c-num">150+</div>
    <div class="st-c-label">Countries Supported</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.st-cl { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; max-width: 1000px; width: 100%; text-align: center; }
.st-c-item { padding: 20px; border-radius: 12px; transition: 0.3s; }
.st-c-item:hover { transform: translateY(-5px); }
.st-c-num { font-size: 3.5rem; font-weight: 800; color: #3b82f6; margin-bottom: 10px; line-height: 1; letter-spacing: -1px; }
.st-c-label { font-size: 1.1rem; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 2. Cyberpunk Tech Stats
  {
    _id: "st2",
    title: "Cyberpunk Tech Stats",
    slug: "cyberpunk-tech-stats",
    description: "Hacker-themed metrics with neon borders and monospace fonts.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["stats", "cyberpunk", "hacker", "neon"],
    isPremium: true,
    views: 32500,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-cy">
  <div class="cy-item">
    <div class="cy-num">4,096</div>
    <div class="cy-label">NODES_ONLINE</div>
  </div>
  <div class="cy-item">
    <div class="cy-num">0.05ms</div>
    <div class="cy-label">AVG_LATENCY</div>
  </div>
  <div class="cy-item">
    <div class="cy-num">99.999%</div>
    <div class="cy-label">SHIELD_INTEGRITY</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; }
.st-cy { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; max-width: 900px; width: 100%; text-align: center; }
.cy-item { background: rgba(0,255,0,0.05); border: 1px solid #0f0; padding: 40px 20px; position: relative; box-shadow: 0 0 10px rgba(0,255,0,0.1) inset; transition: 0.2s; }
.cy-item:hover { background: rgba(0,255,0,0.1); box-shadow: 0 0 20px rgba(0,255,0,0.3) inset; }
.cy-item::before, .cy-item::after { content: ''; position: absolute; width: 10px; height: 10px; border: 2px solid #f0f; }
.cy-item::before { top: -2px; left: -2px; border-right: none; border-bottom: none; }
.cy-item::after { bottom: -2px; right: -2px; border-left: none; border-top: none; }
.cy-num { font-size: 3rem; color: #fff; font-weight: bold; text-shadow: 0 0 10px #fff; margin-bottom: 15px; }
.cy-label { color: #0f0; font-size: 1rem; letter-spacing: 2px; }`,
    jsCode: ``
  },

  // 3. Glassmorphism Floating Stats
  {
    _id: "st3",
    title: "Glassmorphism Stats",
    slug: "glassmorphism-stats",
    description: "Frosted glass stat cards over a vibrant gradient background.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["stats", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 46100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="st-gl">
    <div class="gl-item">
      <div class="gl-num">2M+</div>
      <div class="gl-label">Downloads</div>
    </div>
    <div class="gl-item">
      <div class="gl-num">4.9/5</div>
      <div class="gl-label">Average Rating</div>
    </div>
    <div class="gl-item">
      <div class="gl-num">120+</div>
      <div class="gl-label">Contributors</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.st-gl { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; max-width: 900px; width: 100%; text-align: center; }
.gl-item { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 50px 20px; color: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: 0.3s; }
.gl-item:hover { transform: translateY(-10px); background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.4); }
.gl-num { font-size: 3.5rem; font-weight: 800; margin-bottom: 15px; text-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.gl-label { font-size: 1.1rem; opacity: 0.9; letter-spacing: 0.5px; }`,
    jsCode: ``
  },

  // 4. Brutalist Huge Numbers
  {
    _id: "st4",
    title: "Brutalist Stats",
    slug: "brutalist-stats",
    description: "Loud, high-contrast brutalist metrics with massive typography.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["stats", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 31800,
    downloads: 7400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-br">
  <div class="br-item br-yellow">
    <div class="br-num">100K</div>
    <div class="br-label">USERS</div>
  </div>
  <div class="br-item br-blue">
    <div class="br-num">500+</div>
    <div class="br-label">COMPONENTS</div>
  </div>
  <div class="br-item br-pink">
    <div class="br-num">10X</div>
    <div class="br-label">FASTER</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.st-br { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; max-width: 1000px; width: 100%; text-align: center; }
.br-item { border: 6px solid #000; padding: 50px 20px; box-shadow: 12px 12px 0 #000; transition: 0.1s; }
.br-item:hover { transform: translate(4px, 4px); box-shadow: 8px 8px 0 #000; }
.br-yellow { background: #facc15; }
.br-blue { background: #3b82f6; color: #fff; }
.br-pink { background: #f43f5e; color: #fff; }
.br-num { font-size: 5rem; font-weight: 900; margin-bottom: 10px; line-height: 1; letter-spacing: -2px; text-shadow: 4px 4px 0 #000; }
.br-label { font-size: 1.5rem; font-weight: 900; border-top: 6px solid #000; padding-top: 15px; display: inline-block; }
.br-blue .br-label, .br-pink .br-label { border-color: #fff; }`,
    jsCode: ``
  },

  // 5. Neumorphic Pressed Stats
  {
    _id: "st5",
    title: "Neumorphic Pressed Stats",
    slug: "neumorphic-pressed-stats",
    description: "Soft UI design with inset containers making the numbers look pressed in.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["stats", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 35300,
    downloads: 8100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-neu">
  <div class="neu-item">
    <div class="neu-num">24/7</div>
    <div class="neu-label">Support Access</div>
  </div>
  <div class="neu-item">
    <div class="neu-num">98%</div>
    <div class="neu-label">Satisfaction Rate</div>
  </div>
  <div class="neu-item">
    <div class="neu-num">50ms</div>
    <div class="neu-label">Average Response</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.st-neu { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; max-width: 900px; width: 100%; text-align: center; }
.neu-item { background: #e0e5ec; padding: 50px 20px; border-radius: 30px; box-shadow: inset 10px 10px 20px rgba(163,177,198,0.6), inset -10px -10px 20px rgba(255,255,255,0.5); transition: 0.3s; }
.neu-item:hover { box-shadow: 10px 10px 20px rgba(163,177,198,0.6), -10px -10px 20px rgba(255,255,255,0.5); transform: translateY(-5px); }
.neu-num { font-size: 3.5rem; font-weight: bold; color: #2d3748; margin-bottom: 15px; text-shadow: 2px 2px 4px rgba(163,177,198,0.3); }
.neu-label { color: #718096; font-size: 1.1rem; font-weight: 500; }`,
    jsCode: ``
  },

  // 6. Dark Mode Glow Stats
  {
    _id: "st6",
    title: "Dark Mode Glow Stats",
    slug: "dark-mode-glow-stats",
    description: "Deep dark layout with glowing neon metrics.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["stats", "dark", "glow", "neon"],
    isPremium: true,
    views: 43400,
    downloads: 12800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-dg">
  <div class="dg-item">
    <div class="dg-num">1.5B</div>
    <div class="dg-label">API Requests</div>
  </div>
  <div class="dg-item">
    <div class="dg-num">0%</div>
    <div class="dg-label">Packet Loss</div>
  </div>
  <div class="dg-item">
    <div class="dg-num">300+</div>
    <div class="dg-label">Edge Locations</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.st-dg { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; max-width: 900px; width: 100%; text-align: center; }
.dg-item { background: #0f172a; padding: 50px 20px; border-radius: 24px; border: 1px solid #1e293b; position: relative; overflow: hidden; transition: 0.3s; }
.dg-item:hover { border-color: #8b5cf6; box-shadow: 0 0 30px rgba(139,92,246,0.15); transform: translateY(-5px); }
.dg-item::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #3b82f6, #8b5cf6); }
.dg-num { font-size: 4rem; font-weight: 900; background: linear-gradient(90deg, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 10px; }
.dg-label { color: #64748b; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 500; }`,
    jsCode: ``
  },

  // 7. Minimal Clean Bordered Stats
  {
    _id: "st7",
    title: "Minimal Bordered Stats",
    slug: "minimal-bordered-stats",
    description: "Ultra-clean metrics separated by thin borders.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["stats", "minimal", "clean", "bordered"],
    isPremium: false,
    views: 39500,
    downloads: 10200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-mn">
  <div class="mn-item">
    <div class="mn-num">7M+</div>
    <div class="mn-label">Downloads</div>
  </div>
  <div class="mn-item">
    <div class="mn-num">45k</div>
    <div class="mn-label">Stars on GitHub</div>
  </div>
  <div class="mn-item">
    <div class="mn-num">200+</div>
    <div class="mn-label">Open Source Apps</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.st-mn { display: flex; max-width: 900px; width: 100%; text-align: center; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; }
.mn-item { flex: 1; padding: 60px 20px; border-right: 1px solid #e2e8f0; }
.mn-item:last-child { border-right: none; }
.mn-num { font-size: 3.5rem; font-weight: 300; color: #0f172a; margin-bottom: 10px; letter-spacing: -2px; }
.mn-label { font-size: 1rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
@media (max-width: 768px) { .st-mn { flex-direction: column; border: none; } .mn-item { border-right: none; border-bottom: 1px solid #e2e8f0; padding: 40px 20px; } .mn-item:first-child { border-top: 1px solid #e2e8f0; } }`,
    jsCode: ``
  },

  // 8. Split Layout Stats
  {
    _id: "st8",
    title: "Split Layout Stats",
    slug: "split-layout-stats",
    description: "Narrative text on the left, impactful numbers on the right.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["stats", "split", "layout", "grid"],
    isPremium: false,
    views: 42500,
    downloads: 11100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-sp">
  <div class="sp-left">
    <h2>Trusted by teams worldwide</h2>
    <p>Our platform scales with you. From your first user to your millionth, we've got the infrastructure to support your growth.</p>
  </div>
  <div class="sp-right">
    <div class="sp-item">
      <div class="sp-num">99.9%</div>
      <div class="sp-label">Uptime</div>
    </div>
    <div class="sp-item">
      <div class="sp-num">24/7</div>
      <div class="sp-label">Support</div>
    </div>
    <div class="sp-item">
      <div class="sp-num">1M+</div>
      <div class="sp-label">Requests/sec</div>
    </div>
    <div class="sp-item">
      <div class="sp-num">0</div>
      <div class="sp-label">Maintenance Windows</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.st-sp { display: flex; gap: 60px; max-width: 1000px; width: 100%; align-items: center; }
.sp-left { flex: 1; }
.sp-left h2 { font-size: 2.5rem; color: #0f172a; margin: 0 0 20px; letter-spacing: -1px; }
.sp-left p { font-size: 1.1rem; color: #64748b; line-height: 1.6; margin: 0; }
.sp-right { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
.sp-item { background: #fff; padding: 30px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.sp-num { font-size: 2.5rem; font-weight: 800; color: #10b981; margin-bottom: 10px; }
.sp-label { color: #475569; font-weight: 500; }
@media (max-width: 768px) { .st-sp { flex-direction: column; text-align: center; } .sp-right { width: 100%; } }`,
    jsCode: ``
  },

  // 9. Circular Progress / Radial Stats
  {
    _id: "st9",
    title: "Radial Progress Stats",
    slug: "radial-progress-stats",
    description: "Visual metrics using CSS conic-gradient to simulate radial progress rings.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stats", "radial", "progress", "circle"],
    isPremium: true,
    views: 45100,
    downloads: 12700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-rd">
  <div class="rd-item">
    <div class="rd-circle" style="--percent: 85; --color: #3b82f6;">
      <div class="rd-inner">85%</div>
    </div>
    <div class="rd-label">Customer Retention</div>
  </div>
  <div class="rd-item">
    <div class="rd-circle" style="--percent: 92; --color: #10b981;">
      <div class="rd-inner">92%</div>
    </div>
    <div class="rd-label">Task Completion</div>
  </div>
  <div class="rd-item">
    <div class="rd-circle" style="--percent: 78; --color: #f43f5e;">
      <div class="rd-inner">78%</div>
    </div>
    <div class="rd-label">Market Growth</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.st-rd { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 50px; max-width: 900px; width: 100%; text-align: center; }
.rd-item { display: flex; flex-direction: column; align-items: center; }
.rd-circle { width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(var(--color) calc(var(--percent) * 1%), #e2e8f0 0); display: flex; justify-content: center; align-items: center; position: relative; margin-bottom: 20px; }
.rd-inner { width: 120px; height: 120px; background: #fff; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 2rem; font-weight: 800; color: #0f172a; }
.rd-label { font-size: 1.1rem; color: #64748b; font-weight: 600; }`,
    jsCode: ``
  },

  // 10. Vertical Timeline Stats
  {
    _id: "st10",
    title: "Vertical Timeline Stats",
    slug: "vertical-timeline-stats",
    description: "Chronological or step-based vertical layout for metrics.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["stats", "timeline", "vertical", "history"],
    isPremium: false,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="st-tl">
  <div class="tl-item">
    <div class="tl-num">2018</div>
    <div class="tl-content">
      <h3>Company Founded</h3>
      <p>Started in a small garage with just 3 developers.</p>
    </div>
  </div>
  <div class="tl-item">
    <div class="tl-num">10K</div>
    <div class="tl-content">
      <h3>First Milestone</h3>
      <p>Reached 10,000 active daily users on our platform.</p>
    </div>
  </div>
  <div class="tl-item">
    <div class="tl-num">$5M</div>
    <div class="tl-content">
      <h3>Series A Funding</h3>
      <p>Secured funding to expand our team globally.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.st-tl { display: flex; flex-direction: column; gap: 40px; max-width: 600px; width: 100%; position: relative; }
.st-tl::before { content: ''; position: absolute; left: 60px; top: 0; bottom: 0; width: 2px; background: #cbd5e1; z-index: 1; }
.tl-item { display: flex; gap: 30px; align-items: flex-start; position: relative; z-index: 2; }
.tl-num { width: 120px; height: 120px; background: #fff; border: 4px solid #3b82f6; border-radius: 50%; display: flex; justify-content: center; align-items: center; flex-shrink: 0; font-size: 1.5rem; font-weight: 800; color: #0f172a; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.tl-content { background: #fff; padding: 30px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); flex: 1; margin-top: 15px; }
.tl-content h3 { margin: 0 0 10px; color: #0f172a; font-size: 1.2rem; }
.tl-content p { margin: 0; color: #64748b; line-height: 1.5; }
@media (max-width: 600px) { .st-tl::before { left: 40px; } .tl-item { gap: 15px; } .tl-num { width: 80px; height: 80px; font-size: 1.1rem; } .tl-content { padding: 20px; } }`,
    jsCode: ``
  }
];
