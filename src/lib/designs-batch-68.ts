import { Design } from "./designs-data";

export const BATCH_68_DESIGNS: Design[] = [
  // 1. Classic 3-Column Grid
  {
    _id: "fg1",
    title: "Classic 3-Column Grid",
    slug: "classic-3-column-grid",
    description: "Standard clean features grid with icons, titles, and descriptions.",
    category: "Features Grids",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["features", "grid", "classic", "clean"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-cl">
  <div class="fg-c-card">
    <div class="fg-c-icon">🚀</div>
    <h3>Lightning Fast</h3>
    <p>Optimized for speed and performance, ensuring your users never have to wait.</p>
  </div>
  <div class="fg-c-card">
    <div class="fg-c-icon">🔒</div>
    <h3>Secure by Default</h3>
    <p>Built-in security measures to protect your data and give you peace of mind.</p>
  </div>
  <div class="fg-c-card">
    <div class="fg-c-icon">📱</div>
    <h3>Fully Responsive</h3>
    <p>Looks perfect on desktops, tablets, and mobile devices right out of the box.</p>
  </div>
  <div class="fg-c-card">
    <div class="fg-c-icon">🎨</div>
    <h3>Customizable</h3>
    <p>Easily adapt the look and feel to match your brand's unique identity.</p>
  </div>
  <div class="fg-c-card">
    <div class="fg-c-icon">🌍</div>
    <h3>Global CDN</h3>
    <p>Deliver content blazing fast to users anywhere in the world.</p>
  </div>
  <div class="fg-c-card">
    <div class="fg-c-icon">💬</div>
    <h3>24/7 Support</h3>
    <p>Our dedicated team is always here to help you when you need it most.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 60px 20px; display: flex; justify-content: center; }
.fg-cl { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 1000px; width: 100%; }
.fg-c-card { background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; text-align: left; transition: 0.3s; }
.fg-c-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.fg-c-icon { font-size: 2.5rem; margin-bottom: 20px; background: #eff6ff; display: inline-flex; padding: 15px; border-radius: 12px; }
.fg-c-card h3 { margin: 0 0 10px; color: #0f172a; font-size: 1.25rem; font-weight: 600; }
.fg-c-card p { margin: 0; color: #64748b; font-size: 0.95rem; line-height: 1.6; }`,
    jsCode: ``
  },

  // 2. Minimal Line Icons Grid
  {
    _id: "fg2",
    title: "Minimal Line Icons Grid",
    slug: "minimal-line-icons-grid",
    description: "Elegant, distraction-free grid focusing on typography and simple icons.",
    category: "Features Grids",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["features", "minimal", "grid", "clean"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-mn">
  <div class="fg-m-item">
    <div class="fg-m-icon">✦</div>
    <h4>Modern Design</h4>
    <p>Crafted with the latest trends.</p>
  </div>
  <div class="fg-m-item">
    <div class="fg-m-icon">◯</div>
    <h4>Clean Code</h4>
    <p>Zero dependencies, pure CSS.</p>
  </div>
  <div class="fg-m-item">
    <div class="fg-m-icon">△</div>
    <h4>Scalable</h4>
    <p>Built for massive growth.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; padding: 60px 20px; display: flex; justify-content: center; }
.fg-mn { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; max-width: 900px; width: 100%; text-align: center; }
.fg-m-item { padding: 20px; }
.fg-m-icon { font-size: 2rem; color: #111; margin-bottom: 15px; }
.fg-m-item h4 { margin: 0 0 10px; font-size: 1.2rem; color: #111; font-weight: 600; }
.fg-m-item p { margin: 0; color: #666; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Features Grid
  {
    _id: "fg3",
    title: "Cyberpunk Features Grid",
    slug: "cyberpunk-features-grid",
    description: "Neon lit, high tech feature list for gaming or developer tools.",
    category: "Features Grids",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["features", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-cy">
  <div class="cy-f-card">
    <div class="cy-f-head">> SYS.OP_01</div>
    <div class="cy-f-body">Neural network routing engaged. Latency reduced to 0.04ms.</div>
  </div>
  <div class="cy-f-card">
    <div class="cy-f-head">> SYS.OP_02</div>
    <div class="cy-f-body">Quantum encryption active. Unauthorized access denied.</div>
  </div>
  <div class="cy-f-card">
    <div class="cy-f-head">> SYS.OP_03</div>
    <div class="cy-f-body">Holographic interface rendering complete. Ready for input.</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 60px 20px; display: flex; justify-content: center; }
.fg-cy { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 1000px; width: 100%; }
.cy-f-card { background: rgba(0,0,0,0.8); border: 1px solid #0f0; padding: 25px; position: relative; box-shadow: inset 0 0 10px rgba(0,255,0,0.1); transition: 0.3s; }
.cy-f-card:hover { border-color: #f0f; box-shadow: 0 0 15px rgba(255,0,255,0.2), inset 0 0 10px rgba(255,0,255,0.1); }
.cy-f-card::before { content: ''; position: absolute; top: -1px; left: -1px; width: 10px; height: 10px; border-top: 2px solid #0ff; border-left: 2px solid #0ff; }
.cy-f-head { color: #f0f; font-weight: bold; margin-bottom: 15px; text-shadow: 0 0 5px #f0f; border-bottom: 1px dashed #0f0; padding-bottom: 10px; }
.cy-f-card:hover .cy-f-head { color: #0ff; text-shadow: 0 0 5px #0ff; border-color: #f0f; }
.cy-f-body { color: #0f0; line-height: 1.5; font-size: 0.9rem; text-shadow: 0 0 2px #0f0; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Features Grid
  {
    _id: "fg4",
    title: "Glassmorphism Features Grid",
    slug: "glassmorphism-features-grid",
    description: "Frosted glass feature cards floating over a vibrant background.",
    category: "Features Grids",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["features", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="fg-gl">
    <div class="fg-g-card">
      <div class="fg-g-icon">✨</div>
      <h4>Beautiful Defaults</h4>
      <p>Stunning aesthetics out of the box with zero configuration required.</p>
    </div>
    <div class="fg-g-card">
      <div class="fg-g-icon">🛠</div>
      <h4>Highly Configurable</h4>
      <p>Tweak every parameter to match your exact design specifications.</p>
    </div>
    <div class="fg-g-card">
      <div class="fg-g-icon">📦</div>
      <h4>Lightweight</h4>
      <p>Minimal footprint ensures your application remains fast and nimble.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.fg-gl { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 1000px; width: 100%; }
.fg-g-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 16px; padding: 30px; color: #fff; text-align: left; transition: 0.3s; }
.fg-g-card:hover { background: rgba(255,255,255,0.15); transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.fg-g-icon { font-size: 2.5rem; margin-bottom: 20px; text-shadow: 0 2px 10px rgba(0,0,0,0.2); }
.fg-g-card h4 { margin: 0 0 10px; font-size: 1.2rem; font-weight: 600; text-shadow: 0 1px 3px rgba(0,0,0,0.2); }
.fg-g-card p { margin: 0; opacity: 0.8; line-height: 1.6; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 5. Brutalist Features Grid
  {
    _id: "fg5",
    title: "Brutalist Features Grid",
    slug: "brutalist-features-grid",
    description: "Thick borders, heavy shadows, and bold typography.",
    category: "Features Grids",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["features", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-br">
  <div class="fg-b-card">
    <div class="fg-b-num">01</div>
    <h2>RAW POWER</h2>
    <p>NO FLUFF. JUST THE CORE FUNCTIONALITY YOU NEED TO SUCCEED.</p>
  </div>
  <div class="fg-b-card">
    <div class="fg-b-num">02</div>
    <h2>UNBREAKABLE</h2>
    <p>BUILT LIKE A TANK. DEPLOY WITH ABSOLUTE CONFIDENCE TODAY.</p>
  </div>
  <div class="fg-b-card">
    <div class="fg-b-num">03</div>
    <h2>LOUD DESIGN</h2>
    <p>STAND OUT FROM THE CROWD WITH UNAPOLOGETIC AESTHETICS.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; padding: 60px 20px; }
.fg-br { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; max-width: 1000px; width: 100%; }
.fg-b-card { background: #fff; border: 4px solid #000; padding: 30px; box-shadow: 10px 10px 0 #3b82f6; position: relative; transition: 0.1s; }
.fg-b-card:nth-child(2) { box-shadow: 10px 10px 0 #ec4899; }
.fg-b-card:nth-child(3) { box-shadow: 10px 10px 0 #facc15; }
.fg-b-card:hover { transform: translate(-5px, -5px); box-shadow: 15px 15px 0 #000; }
.fg-b-num { position: absolute; top: -20px; left: -20px; background: #000; color: #fff; padding: 10px; font-weight: 900; font-size: 1.5rem; }
.fg-b-card h2 { margin: 20px 0 15px; font-size: 2rem; font-weight: 900; color: #000; text-transform: uppercase; }
.fg-b-card p { margin: 0; font-weight: 800; font-size: 1rem; color: #333; line-height: 1.4; }`,
    jsCode: ``
  },

  // 6. Neumorphic Features Grid
  {
    _id: "fg6",
    title: "Neumorphic Features Grid",
    slug: "neumorphic-features-grid",
    description: "Soft UI design with extruded feature cards and inset details.",
    category: "Features Grids",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["features", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-neu">
  <div class="fg-n-card">
    <div class="fg-n-icon">💧</div>
    <h3>Fluid Layouts</h3>
    <p>Seamlessly adapt to any screen size with smooth transitions.</p>
  </div>
  <div class="fg-n-card">
    <div class="fg-n-icon">☁️</div>
    <div class="fg-n-text">
      <h3>Cloud Sync</h3>
      <p>Your data is always backed up and available everywhere.</p>
    </div>
  </div>
  <div class="fg-n-card">
    <div class="fg-n-icon">🛡️</div>
    <h3>Secure Core</h3>
    <p>Enterprise-grade security built into every layer of the stack.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; padding: 60px 20px; }
.fg-neu { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; max-width: 1000px; width: 100%; }
.fg-n-card { background: #e0e5ec; padding: 40px 30px; border-radius: 20px; box-shadow: 10px 10px 20px rgba(163,177,198,0.6), -10px -10px 20px rgba(255,255,255,0.5); text-align: center; transition: 0.3s; }
.fg-n-card:hover { box-shadow: inset 10px 10px 20px rgba(163,177,198,0.6), inset -10px -10px 20px rgba(255,255,255,0.5); }
.fg-n-icon { width: 70px; height: 70px; margin: 0 auto 20px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 2rem; background: #e0e5ec; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); border: 2px solid #e0e5ec; }
.fg-n-card h3 { margin: 0 0 10px; color: #2d3748; font-size: 1.25rem; font-weight: bold; }
.fg-n-card p { margin: 0; color: #718096; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Grid
  {
    _id: "fg7",
    title: "Dark Mode Glow Grid",
    slug: "dark-mode-glow-grid",
    description: "Deep dark grid where cards glow on hover.",
    category: "Features Grids",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["features", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-dg">
  <div class="fg-d-card">
    <div class="fg-d-icon">⚛️</div>
    <h3>React Ready</h3>
    <p>Components built to drop directly into your modern web applications.</p>
  </div>
  <div class="fg-d-card">
    <div class="fg-d-icon">⚡</div>
    <h3>Instant Load</h3>
    <p>Zero JavaScript runtime means these components load instantly.</p>
  </div>
  <div class="fg-d-card">
    <div class="fg-d-icon">🎨</div>
    <h3>CSS Native</h3>
    <p>No build tools required. Just copy, paste, and ship your project.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; display: flex; justify-content: center; padding: 60px 20px; }
.fg-dg { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 1000px; width: 100%; }
.fg-d-card { background: #0f172a; padding: 30px; border-radius: 16px; border: 1px solid #1e293b; transition: 0.3s; position: relative; overflow: hidden; z-index: 1; }
.fg-d-card::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 50%); z-index: -1; opacity: 0; transition: 0.5s; pointer-events: none; }
.fg-d-card:hover { border-color: #3b82f6; box-shadow: 0 10px 30px rgba(59,130,246,0.15); transform: translateY(-5px); }
.fg-d-card:hover::before { opacity: 1; }
.fg-d-icon { font-size: 2.5rem; margin-bottom: 20px; }
.fg-d-card h3 { margin: 0 0 10px; color: #f8fafc; font-size: 1.25rem; font-weight: 600; }
.fg-d-card p { margin: 0; color: #94a3b8; font-size: 0.95rem; line-height: 1.6; }`,
    jsCode: ``
  },

  // 8. Bento Box Grid
  {
    _id: "fg8",
    title: "Bento Box Grid",
    slug: "bento-box-grid",
    description: "Modern asymmetrical grid layout (bento box style).",
    category: "Features Grids",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["features", "bento", "grid", "modern"],
    isPremium: true,
    views: 41400,
    downloads: 11100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-bento">
  <div class="fg-bt-card fg-bt-large">
    <h3>All-in-one Dashboard</h3>
    <p>Monitor your entire infrastructure from a single, unified interface.</p>
  </div>
  <div class="fg-bt-card">
    <h3>Real-time Alerts</h3>
    <p>Instant notifications when things go wrong.</p>
  </div>
  <div class="fg-bt-card">
    <h3>Auto Scaling</h3>
    <p>Grow without limits.</p>
  </div>
  <div class="fg-bt-card fg-bt-wide">
    <h3>Advanced Analytics & Reporting</h3>
    <p>Dive deep into your metrics with powerful visualization tools and exportable reports.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; padding: 60px 20px; }
.fg-bento { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 200px); gap: 20px; max-width: 1000px; width: 100%; }
.fg-bt-card { background: #fff; padding: 30px; border-radius: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); border: 1px solid #e2e8f0; display: flex; flex-direction: column; justify-content: center; transition: 0.3s; }
.fg-bt-card:hover { transform: translateY(-3px); box-shadow: 0 12px 20px rgba(0,0,0,0.05); }
.fg-bt-large { grid-column: span 2; grid-row: span 2; background: linear-gradient(135deg, #0f172a, #334155); color: #fff; border: none; }
.fg-bt-wide { grid-column: span 2; }
.fg-bt-card h3 { margin: 0 0 10px; font-size: 1.5rem; font-weight: 700; color: #0f172a; }
.fg-bt-large h3 { color: #fff; font-size: 2.5rem; }
.fg-bt-card p { margin: 0; color: #64748b; font-size: 1rem; line-height: 1.5; }
.fg-bt-large p { color: #cbd5e1; font-size: 1.1rem; }
@media (max-width: 768px) { .fg-bento { grid-template-columns: 1fr; grid-template-rows: auto; } .fg-bt-large, .fg-bt-wide { grid-column: span 1; grid-row: span 1; } }`,
    jsCode: ``
  },

  // 9. Alternating Layout
  {
    _id: "fg9",
    title: "Alternating Layout",
    slug: "alternating-layout",
    description: "Zig-zag layout where image and text alternate left and right.",
    category: "Features Grids",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["features", "alternating", "zigzag", "layout"],
    isPremium: false,
    views: 33100,
    downloads: 8700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-al">
  <div class="fg-a-row">
    <div class="fg-a-text">
      <h2>Collaborate Seamlessly</h2>
      <p>Work together with your team in real-time. Share ideas, edit documents, and track progress without ever leaving the platform.</p>
    </div>
    <div class="fg-a-img">
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Feature 1" />
    </div>
  </div>
  <div class="fg-a-row fg-a-reverse">
    <div class="fg-a-text">
      <h2>Analyze Everything</h2>
      <p>Get deep insights into your workflow. Our advanced analytics dashboard helps you identify bottlenecks and optimize performance.</p>
    </div>
    <div class="fg-a-img">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Feature 2" />
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 60px 20px; display: flex; justify-content: center; }
.fg-al { display: flex; flex-direction: column; gap: 80px; max-width: 1000px; width: 100%; }
.fg-a-row { display: flex; gap: 60px; align-items: center; }
.fg-a-reverse { flex-direction: row-reverse; }
.fg-a-text { flex: 1; }
.fg-a-text h2 { margin: 0 0 20px; font-size: 2.2rem; color: #0f172a; font-weight: 800; }
.fg-a-text p { margin: 0; color: #64748b; font-size: 1.1rem; line-height: 1.7; }
.fg-a-img { flex: 1; }
.fg-a-img img { width: 100%; border-radius: 16px; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1); display: block; }
@media (max-width: 768px) { .fg-a-row, .fg-a-reverse { flex-direction: column; gap: 40px; text-align: center; } }`,
    jsCode: ``
  },

  // 10. Hover Reveal Grid
  {
    _id: "fg10",
    title: "Hover Reveal Grid",
    slug: "hover-reveal-grid",
    description: "Clean cards that reveal full descriptions upon hovering.",
    category: "Features Grids",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["features", "hover", "reveal", "animation"],
    isPremium: true,
    views: 38500,
    downloads: 9200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fg-hr">
  <div class="fg-h-card">
    <div class="fg-h-front">
      <div class="fg-h-icon">🎯</div>
      <h3>Precision Targeting</h3>
    </div>
    <div class="fg-h-back">
      <p>Reach exactly who you need to with our advanced demographic and behavioral targeting tools. Maximize ROI effortlessly.</p>
    </div>
  </div>
  <div class="fg-h-card">
    <div class="fg-h-front">
      <div class="fg-h-icon">🔄</div>
      <h3>Automated Workflows</h3>
    </div>
    <div class="fg-h-back">
      <p>Set it and forget it. Build complex automation sequences that run your business while you sleep.</p>
    </div>
  </div>
  <div class="fg-h-card">
    <div class="fg-h-front">
      <div class="fg-h-icon">📈</div>
      <h3>Live Reporting</h3>
    </div>
    <div class="fg-h-back">
      <p>Watch your metrics update in real-time. Make split-second decisions based on live data streams.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #eef2f6; padding: 60px 20px; display: flex; justify-content: center; }
.fg-hr { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 1000px; width: 100%; }
.fg-h-card { background: #fff; border-radius: 16px; overflow: hidden; position: relative; height: 250px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.fg-h-front { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 30px; transition: 0.4s ease; background: #fff; z-index: 2; }
.fg-h-icon { font-size: 3rem; margin-bottom: 15px; }
.fg-h-front h3 { margin: 0; font-size: 1.3rem; color: #0f172a; }
.fg-h-back { position: absolute; inset: 0; background: #3b82f6; color: #fff; padding: 30px; display: flex; justify-content: center; align-items: center; text-align: center; opacity: 0; transition: 0.4s ease; transform: translateY(100%); z-index: 1; }
.fg-h-back p { margin: 0; font-size: 1.05rem; line-height: 1.6; }
.fg-h-card:hover .fg-h-front { transform: translateY(-100%); opacity: 0; }
.fg-h-card:hover .fg-h-back { transform: translateY(0); opacity: 1; z-index: 3; }`,
    jsCode: ``
  }
];
