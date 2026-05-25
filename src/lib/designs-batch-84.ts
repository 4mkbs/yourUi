import { Design } from "./designs-data";

export const BATCH_84_DESIGNS: Design[] = [
  // 1. Classic 3-Column Icons
  {
    _id: "fg1",
    title: "Classic Feature Grid",
    slug: "classic-feature-grid",
    description: "Standard 3-column layout with icons on top.",
    category: "Feature Grids",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["features", "grid", "classic", "icons"],
    isPremium: false,
    views: 48200,
    downloads: 13500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-cl">
  <div class="fg-item">
    <div class="fg-icon">⚡</div>
    <h3>Lightning Fast</h3>
    <p>Optimized for maximum speed and minimal loading times across all devices.</p>
  </div>
  <div class="fg-item">
    <div class="fg-icon">🛡️</div>
    <h3>Highly Secure</h3>
    <p>Enterprise-grade security protocols to keep your data safe and private.</p>
  </div>
  <div class="fg-item">
    <div class="fg-icon">🎨</div>
    <h3>Customizable</h3>
    <p>Easily tweak colors, fonts, and layouts to match your brand identity.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.fg-cl { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; max-width: 1000px; width: 100%; text-align: center; }
.fg-item { background: #fff; padding: 40px 30px; border-radius: 16px; border: 1px solid #e2e8f0; transition: transform 0.3s, box-shadow 0.3s; }
.fg-item:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.05); }
.fg-icon { font-size: 2.5rem; margin-bottom: 20px; display: inline-block; padding: 15px; background: #f1f5f9; border-radius: 50%; }
.fg-item h3 { margin: 0 0 15px; font-size: 1.3rem; color: #0f172a; }
.fg-item p { margin: 0; color: #64748b; line-height: 1.6; }`,
    jsCode: ``
  },

  // 2. Minimal Clean
  {
    _id: "fg2",
    title: "Minimal Clean Features",
    slug: "minimal-clean-features",
    description: "Stripped back layout focusing entirely on typography.",
    category: "Feature Grids",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["features", "minimal", "clean", "typography"],
    isPremium: false,
    views: 41100,
    downloads: 11400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-mn">
  <div class="mn-item">
    <h3>01. Scalability</h3>
    <p>Architecture that grows with your business effortlessly.</p>
  </div>
  <div class="mn-item">
    <h3>02. Reliability</h3>
    <p>99.99% uptime guaranteed for mission-critical apps.</p>
  </div>
  <div class="mn-item">
    <h3>03. Performance</h3>
    <p>Sub-second response times globally distributed.</p>
  </div>
  <div class="mn-item">
    <h3>04. Simplicity</h3>
    <p>Intuitive APIs and developer-friendly documentation.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.fg-mn { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 60px; max-width: 900px; width: 100%; }
.mn-item h3 { margin: 0 0 10px; font-size: 1.4rem; color: #000; font-weight: 500; border-bottom: 1px solid #eee; padding-bottom: 15px; }
.mn-item p { margin: 0; color: #666; line-height: 1.6; font-size: 1.1rem; padding-top: 5px; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Terminal
  {
    _id: "fg3",
    title: "Cyberpunk Features",
    slug: "cyberpunk-features",
    description: "Hacker-themed grid with neon accents.",
    category: "Feature Grids",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["features", "cyberpunk", "neon", "grid"],
    isPremium: true,
    views: 35200,
    downloads: 9200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-cy">
  <div class="cy-item">
    <div class="cy-head">> SYS_OPT</div>
    <p>DEEP SYSTEM OPTIMIZATION ALGORITHMS LOADED.</p>
  </div>
  <div class="cy-item cy-glow">
    <div class="cy-head">> NET_SEC</div>
    <p>ADVANCED FIREWALL AND PACKET ENCRYPTION ACTIVE.</p>
  </div>
  <div class="cy-item">
    <div class="cy-head">> DATA_SYNC</div>
    <p>REAL-TIME QUANTUM DATA SYNCHRONIZATION ESTABLISHED.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; }
.fg-cy { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 1000px; width: 100%; }
.cy-item { background: rgba(0,20,0,0.8); border: 1px solid #0f0; padding: 30px; position: relative; }
.cy-glow { border-color: #f0f; box-shadow: 0 0 15px rgba(255,0,255,0.2); }
.cy-head { color: #0f0; font-weight: bold; border-bottom: 1px dashed #0f0; padding-bottom: 10px; margin-bottom: 20px; letter-spacing: 2px; }
.cy-glow .cy-head { color: #f0f; border-color: #f0f; text-shadow: 0 0 5px #f0f; }
.cy-item p { color: #0aa; margin: 0; line-height: 1.5; font-size: 0.9rem; }
.cy-item:hover { background: #0f0; }
.cy-item:hover .cy-head, .cy-item:hover p { color: #000; border-color: #000; text-shadow: none; }
.cy-glow:hover { background: #f0f; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Feature Cards
  {
    _id: "fg4",
    title: "Glassmorphism Features",
    slug: "glassmorphism-features",
    description: "Frosted glass feature blocks hovering over a gradient background.",
    category: "Feature Grids",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["features", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 52100,
    downloads: 14900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="fg-gl">
    <div class="gl-card">
      <div class="gl-icon">☁️</div>
      <h3>Cloud Native</h3>
      <p>Built from the ground up to thrive in distributed cloud environments.</p>
    </div>
    <div class="gl-card">
      <div class="gl-icon">🔄</div>
      <h3>Auto Sync</h3>
      <p>Changes propagate instantly across all your connected devices.</p>
    </div>
    <div class="gl-card">
      <div class="gl-icon">📊</div>
      <h3>Live Metrics</h3>
      <p>Watch your data evolve in real-time with beautiful dashboards.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.fg-gl { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 1000px; width: 100%; }
.gl-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 40px 30px; text-align: center; color: #fff; transition: 0.3s; }
.gl-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.4); }
.gl-icon { font-size: 3rem; margin-bottom: 20px; }
.gl-card h3 { margin: 0 0 15px; font-weight: 500; font-size: 1.3rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9; }
.gl-card p { margin: 0; opacity: 0.8; line-height: 1.6; }`,
    jsCode: ``
  },

  // 5. Brutalist Features
  {
    _id: "fg5",
    title: "Brutalist Features",
    slug: "brutalist-features",
    description: "High contrast blocks with aggressive borders and typography.",
    category: "Feature Grids",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["features", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 31500,
    downloads: 7900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-br">
  <div class="br-item br-yellow">
    <h3>LOUD</h3>
    <p>MAKE SURE THEY HEAR YOU. STAND OUT FROM THE NOISE.</p>
  </div>
  <div class="br-item br-pink">
    <h3>BOLD</h3>
    <p>NO SUBTLETY. NO APOLOGIES. PURE IMPACT DESIGN.</p>
  </div>
  <div class="br-item br-blue">
    <h3>RAW</h3>
    <p>UNFILTERED ACCESS TO THE CORE SYSTEM CONTROLS.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.fg-br { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; max-width: 1000px; width: 100%; }
.br-item { border: 6px solid #000; padding: 30px; box-shadow: 12px 12px 0 #000; transition: transform 0.1s; }
.br-item:active { transform: translate(6px, 6px); box-shadow: 6px 6px 0 #000; }
.br-yellow { background: #facc15; }
.br-pink { background: #f472b6; }
.br-blue { background: #60a5fa; }
.br-item h3 { margin: 0 0 20px; font-size: 2.5rem; font-weight: 900; text-transform: uppercase; border-bottom: 4px solid #000; padding-bottom: 10px; }
.br-item p { margin: 0; font-size: 1.2rem; font-weight: 700; line-height: 1.4; }`,
    jsCode: ``
  },

  // 6. Neumorphic Features
  {
    _id: "fg6",
    title: "Neumorphic Features",
    slug: "neumorphic-features",
    description: "Soft UI embossed boxes with subtle icons.",
    category: "Feature Grids",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["features", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 36200,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-neu">
  <div class="neu-item">
    <div class="neu-icon">●</div>
    <h3>Precision</h3>
    <p>Pixel perfect details on every screen.</p>
  </div>
  <div class="neu-item neu-pressed">
    <div class="neu-icon">■</div>
    <h3>Structure</h3>
    <p>Solid foundation for scalable apps.</p>
  </div>
  <div class="neu-item">
    <div class="neu-icon">▲</div>
    <h3>Direction</h3>
    <p>Clear pathways for user journeys.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.fg-neu { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 50px; max-width: 1000px; width: 100%; }
.neu-item { background: #e0e5ec; padding: 40px; border-radius: 30px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); text-align: center; }
.neu-pressed { box-shadow: inset 12px 12px 24px rgba(163,177,198,0.6), inset -12px -12px 24px rgba(255,255,255,0.5); }
.neu-icon { font-size: 2rem; color: #718096; margin-bottom: 20px; }
.neu-item h3 { color: #4a5568; font-size: 1.4rem; margin: 0 0 15px; }
.neu-item p { color: #718096; margin: 0; line-height: 1.5; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Features
  {
    _id: "fg7",
    title: "Dark Mode Glow Features",
    slug: "dark-mode-glow-features",
    description: "Dark theme cards that reveal a gradient glow on hover.",
    category: "Feature Grids",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["features", "dark", "glow", "cards"],
    isPremium: true,
    views: 51200,
    downloads: 14200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-dg">
  <div class="dg-card">
    <div class="dg-icon">✨</div>
    <h3>AI Powered</h3>
    <p>Automate your workflow with state-of-the-art machine learning models.</p>
  </div>
  <div class="dg-card">
    <div class="dg-icon">🌐</div>
    <h3>Edge Network</h3>
    <p>Deliver content instantly via our globally distributed edge nodes.</p>
  </div>
  <div class="dg-card">
    <div class="dg-icon">🔒</div>
    <h3>Zero Trust</h3>
    <p>Continuous verification architecture to protect sensitive assets.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.fg-dg { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 1000px; width: 100%; }
.dg-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 20px; padding: 40px; position: relative; transition: 0.3s; overflow: hidden; }
.dg-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, rgba(139,92,246,0.15), transparent 70%); opacity: 0; transition: 0.3s; z-index: 0; }
.dg-card:hover { border-color: #3b82f6; transform: translateY(-5px); box-shadow: 0 10px 40px rgba(59,130,246,0.1); }
.dg-card:hover::before { opacity: 1; }
.dg-icon, .dg-card h3, .dg-card p { position: relative; z-index: 1; }
.dg-icon { font-size: 2rem; margin-bottom: 20px; background: #1e293b; display: inline-block; padding: 15px; border-radius: 12px; border: 1px solid #334155; }
.dg-card:hover .dg-icon { border-color: #3b82f6; }
.dg-card h3 { color: #f8fafc; font-size: 1.3rem; margin: 0 0 15px; }
.dg-card p { color: #94a3b8; margin: 0; line-height: 1.6; }`,
    jsCode: ``
  },

  // 8. Zig-Zag Layout
  {
    _id: "fg8",
    title: "Zig-Zag Features",
    slug: "zig-zag-features",
    description: "Alternating left/right feature rows.",
    category: "Feature Grids",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["features", "zig-zag", "layout", "rows"],
    isPremium: false,
    views: 43500,
    downloads: 12000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-zz">
  <div class="zz-row">
    <div class="zz-text">
      <h3>Design Without Limits</h3>
      <p>Break free from rigid templates. Build exactly what you envision with complete control over every pixel.</p>
    </div>
    <div class="zz-img">Image Placeholder</div>
  </div>
  <div class="zz-row zz-reverse">
    <div class="zz-text">
      <h3>Ship Code Faster</h3>
      <p>Pre-built components and utility classes mean you spend less time writing boilerplate and more time shipping features.</p>
    </div>
    <div class="zz-img">Image Placeholder</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.fg-zz { display: flex; flex-direction: column; gap: 80px; max-width: 1000px; width: 100%; }
.zz-row { display: flex; gap: 60px; align-items: center; }
.zz-reverse { flex-direction: row-reverse; }
.zz-text { flex: 1; }
.zz-text h3 { margin: 0 0 20px; font-size: 2rem; color: #0f172a; }
.zz-text p { margin: 0; color: #64748b; line-height: 1.7; font-size: 1.1rem; }
.zz-img { flex: 1; background: #f1f5f9; border-radius: 16px; min-height: 300px; display: flex; justify-content: center; align-items: center; color: #94a3b8; font-weight: bold; border: 1px dashed #cbd5e1; }
@media (max-width: 768px) { .zz-row, .zz-reverse { flex-direction: column; } }`,
    jsCode: ``
  },

  // 9. Bento Box Features
  {
    _id: "fg9",
    title: "Bento Box Features",
    slug: "bento-box-features",
    description: "Grid layout with varied span sizes creating a bento box look.",
    category: "Feature Grids",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["features", "bento", "grid", "modern"],
    isPremium: true,
    views: 58800,
    downloads: 16600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-bx">
  <div class="bx-item bx-large">
    <h3>Advanced Analytics</h3>
    <p>Dive deep into your data with our comprehensive suite of tracking and visualization tools.</p>
  </div>
  <div class="bx-item">
    <h3>Easy Export</h3>
    <p>Download as CSV or JSON instantly.</p>
  </div>
  <div class="bx-item">
    <h3>Team Sync</h3>
    <p>Collaborate in real time securely.</p>
  </div>
  <div class="bx-item bx-wide">
    <h3>Global Reach</h3>
    <p>Deploy to 35+ regions worldwide with a single click, ensuring low latency for all users.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.fg-bx { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1000px; width: 100%; auto-rows: minmax(200px, auto); }
.bx-item { background: #fff; padding: 30px; border-radius: 20px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; justify-content: flex-end; transition: 0.3s; }
.bx-item:hover { transform: scale(1.02); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.bx-large { grid-column: span 2; grid-row: span 2; background: #0f172a; color: #fff; }
.bx-large h3 { color: #fff; font-size: 2rem; }
.bx-large p { color: #94a3b8; font-size: 1.1rem; }
.bx-wide { grid-column: span 2; background: #f0fdf4; border-color: #bbf7d0; }
.bx-item h3 { margin: 0 0 10px; font-size: 1.3rem; color: #0f172a; }
.bx-item p { margin: 0; color: #64748b; line-height: 1.5; }
@media (max-width: 768px) { .fg-bx { grid-template-columns: 1fr; } .bx-large, .bx-wide { grid-column: span 1; } }`,
    jsCode: ``
  },

  // 10. Numbered Steps Features
  {
    _id: "fg10",
    title: "Numbered Steps",
    slug: "numbered-steps-features",
    description: "Features presented as a sequence of steps with large numbers.",
    category: "Feature Grids",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["features", "steps", "numbered", "process"],
    isPremium: false,
    views: 40500,
    downloads: 10500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-ns">
  <div class="ns-item">
    <div class="ns-num">1</div>
    <h3>Install</h3>
    <p>Add the package to your project via npm or yarn in seconds.</p>
  </div>
  <div class="ns-item">
    <div class="ns-num">2</div>
    <h3>Configure</h3>
    <p>Set your API keys and customize the basic settings in the config file.</p>
  </div>
  <div class="ns-item">
    <div class="ns-num">3</div>
    <h3>Launch</h3>
    <p>Deploy your application and watch the magic happen automatically.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.fg-ns { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 50px; max-width: 900px; width: 100%; position: relative; }
.ns-item { position: relative; text-align: center; }
.ns-num { font-size: 5rem; font-weight: 900; color: #f1f5f9; line-height: 1; margin-bottom: -30px; position: relative; z-index: 0; }
.ns-item h3 { margin: 0 0 15px; font-size: 1.5rem; color: #0f172a; position: relative; z-index: 1; }
.ns-item p { margin: 0; color: #64748b; line-height: 1.6; position: relative; z-index: 1; }
@media (min-width: 768px) {
  .ns-item:not(:last-child)::after { content: ''; position: absolute; top: 40px; right: -25px; width: 50px; height: 2px; background: #e2e8f0; z-index: 0; }
}`,
    jsCode: ``
  }
];
