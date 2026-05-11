import { Design } from "./designs-data";

export const BATCH_22_DESIGNS: Design[] = [
  // 1. Classic Horizontal Steps
  {
    _id: "pb1",
    title: "Classic Horizontal Steps",
    slug: "classic-horizontal-steps",
    description: "A clean, connected step indicator perfect for checkout flows or wizards.",
    category: "Progress",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["progress", "steps", "classic", "wizard"],
    isPremium: false,
    views: 14500,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ch-steps">
  <div class="ch-step completed">
    <div class="ch-icon">✓</div>
    <div class="ch-label">Cart</div>
  </div>
  <div class="ch-line completed"></div>
  <div class="ch-step completed">
    <div class="ch-icon">✓</div>
    <div class="ch-label">Details</div>
  </div>
  <div class="ch-line active"></div>
  <div class="ch-step active">
    <div class="ch-icon">3</div>
    <div class="ch-label">Payment</div>
  </div>
  <div class="ch-line"></div>
  <div class="ch-step">
    <div class="ch-icon">4</div>
    <div class="ch-label">Review</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f9fafb; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.ch-steps { display: flex; align-items: center; width: 100%; max-width: 600px; background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.ch-step { display: flex; flex-direction: column; align-items: center; position: relative; width: 60px; }
.ch-icon { width: 36px; height: 36px; border-radius: 50%; background: #e5e7eb; color: #9ca3af; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 0.9rem; transition: 0.3s; }
.ch-label { position: absolute; top: 45px; font-size: 0.8rem; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; }
.ch-line { flex: 1; height: 3px; background: #e5e7eb; margin: 0 10px; margin-bottom: 25px; transition: 0.3s; }
.ch-step.completed .ch-icon { background: #10b981; color: #fff; }
.ch-step.completed .ch-label { color: #10b981; }
.ch-line.completed { background: #10b981; }
.ch-step.active .ch-icon { background: #3b82f6; color: #fff; box-shadow: 0 0 0 4px rgba(59,130,246,0.2); }
.ch-step.active .ch-label { color: #3b82f6; font-weight: bold; }
.ch-line.active { background: linear-gradient(to right, #10b981, #e5e7eb); }`,
    jsCode: ``
  },

  // 2. Vertical Timeline Steps
  {
    _id: "pb2",
    title: "Vertical Timeline Steps",
    slug: "vertical-timeline-steps",
    description: "A vertical progress indicator for tracking order status or history.",
    category: "Progress",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["progress", "vertical", "timeline", "tracking"],
    isPremium: false,
    views: 11200,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="vt-timeline">
  <div class="vt-item completed">
    <div class="vt-dot"></div>
    <div class="vt-content">
      <h3>Order Placed</h3>
      <p>October 24, 2023 - 10:30 AM</p>
    </div>
  </div>
  <div class="vt-item completed">
    <div class="vt-dot"></div>
    <div class="vt-content">
      <h3>Processing</h3>
      <p>October 24, 2023 - 2:15 PM</p>
    </div>
  </div>
  <div class="vt-item active">
    <div class="vt-dot"></div>
    <div class="vt-content">
      <h3>Out for Delivery</h3>
      <p>October 25, 2023 - 8:00 AM</p>
    </div>
  </div>
  <div class="vt-item">
    <div class="vt-dot"></div>
    <div class="vt-content">
      <h3>Delivered</h3>
      <p>Pending</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f4f4f5; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.vt-timeline { width: 100%; max-width: 400px; background: #fff; padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.vt-item { display: flex; gap: 20px; position: relative; padding-bottom: 30px; }
.vt-item:last-child { padding-bottom: 0; }
.vt-item::before { content: ''; position: absolute; left: 7px; top: 20px; bottom: 0; width: 2px; background: #e4e4e7; z-index: 1; }
.vt-item:last-child::before { display: none; }
.vt-item.completed::before { background: #3b82f6; }
.vt-dot { width: 16px; height: 16px; border-radius: 50%; background: #e4e4e7; position: relative; z-index: 2; margin-top: 5px; }
.vt-item.completed .vt-dot { background: #3b82f6; }
.vt-item.active .vt-dot { background: #fff; border: 4px solid #3b82f6; width: 8px; height: 8px; box-shadow: 0 0 0 4px rgba(59,130,246,0.2); }
.vt-content h3 { margin: 0 0 5px 0; font-size: 1.1rem; color: #18181b; }
.vt-content p { margin: 0; font-size: 0.85rem; color: #71717a; }
.vt-item:not(.completed):not(.active) .vt-content h3 { color: #a1a1aa; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Loading Bar
  {
    _id: "pb3",
    title: "Cyberpunk Loading Bar",
    slug: "cyberpunk-loading-bar",
    description: "A neon, glitchy progress bar perfect for gaming interfaces.",
    category: "Progress",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["progress", "cyberpunk", "neon", "bar"],
    isPremium: true,
    views: 13400,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cy-loader-wrap">
  <div class="cy-header">
    <span class="cy-title">SYS_INITIALIZE_</span>
    <span class="cy-perc">73%</span>
  </div>
  <div class="cy-track">
    <div class="cy-bar" style="width: 73%"></div>
    <div class="cy-scanline"></div>
  </div>
  <div class="cy-footer">DECRYPTING NEURAL NET...</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.cy-loader-wrap { width: 100%; max-width: 500px; padding: 30px; border: 1px solid #333; position: relative; background: #0a0a0a; }
.cy-loader-wrap::before { content: ''; position: absolute; top: -2px; left: -2px; width: 15px; height: 15px; border-top: 2px solid #0ff; border-left: 2px solid #0ff; }
.cy-loader-wrap::after { content: ''; position: absolute; bottom: -2px; right: -2px; width: 15px; height: 15px; border-bottom: 2px solid #f0f; border-right: 2px solid #f0f; }
.cy-header { display: flex; justify-content: space-between; margin-bottom: 15px; font-weight: bold; color: #0ff; text-shadow: 0 0 5px #0ff; }
.cy-perc { color: #f0f; text-shadow: 0 0 5px #f0f; }
.cy-track { width: 100%; height: 20px; background: #111; border: 1px solid #333; position: relative; overflow: hidden; margin-bottom: 15px; }
.cy-bar { height: 100%; background: #0ff; box-shadow: 0 0 15px #0ff; position: relative; }
.cy-bar::after { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px); }
.cy-scanline { position: absolute; top: 0; left: 0; width: 20px; height: 100%; background: rgba(255,255,255,0.8); filter: blur(5px); animation: cyScan 2s infinite; }
@keyframes cyScan { 0% { left: -20px; } 100% { left: 100%; } }
.cy-footer { font-size: 0.8rem; color: #888; animation: blink 1s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Step Indicator
  {
    _id: "pb4",
    title: "Glassmorphism Steps",
    slug: "glassmorphism-steps",
    description: "Beautiful frosted glass step indicators floating over a gradient.",
    category: "Progress",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["progress", "glassmorphism", "gradient", "steps"],
    isPremium: true,
    views: 12100,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-pb-bg">
  <div class="gl-steps">
    <div class="gl-step done">
      <div class="gl-circle">1</div>
      <span>Profile</span>
    </div>
    <div class="gl-step done">
      <div class="gl-circle">2</div>
      <span>Settings</span>
    </div>
    <div class="gl-step active">
      <div class="gl-circle">3</div>
      <span>Verify</span>
    </div>
    <div class="gl-step">
      <div class="gl-circle">4</div>
      <span>Done</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.glass-pb-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #f43f5e, #8b5cf6, #3b82f6); background-size: 200% 200%; animation: glassBg 10s ease infinite; padding: 20px; box-sizing: border-box; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gl-steps { display: flex; justify-content: space-between; width: 100%; max-width: 600px; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; padding: 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); position: relative; }
.gl-steps::before { content: ''; position: absolute; top: 50%; left: 50px; right: 50px; height: 2px; background: rgba(255,255,255,0.2); z-index: 1; transform: translateY(-15px); }
.gl-step { display: flex; flex-direction: column; align-items: center; position: relative; z-index: 2; width: 60px; }
.gl-circle { width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); display: flex; justify-content: center; align-items: center; color: #fff; font-weight: bold; margin-bottom: 10px; transition: 0.3s; backdrop-filter: blur(10px); }
.gl-step span { color: rgba(255,255,255,0.7); font-size: 0.85rem; font-weight: bold; }
.gl-step.done .gl-circle { background: #fff; color: #8b5cf6; box-shadow: 0 0 15px rgba(255,255,255,0.5); }
.gl-step.done span { color: #fff; }
.gl-step.active .gl-circle { background: rgba(255,255,255,0.4); border: 2px solid #fff; box-shadow: 0 0 0 4px rgba(255,255,255,0.2); }
.gl-step.active span { color: #fff; }`,
    jsCode: ``
  },

  // 5. Brutalist Thick Progress
  {
    _id: "pb5",
    title: "Brutalist Thick Progress",
    slug: "brutalist-thick-progress",
    description: "A loud, highly visible progress bar with thick borders and solid colors.",
    category: "Progress",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["progress", "brutalist", "loud", "thick"],
    isPremium: false,
    views: 8900,
    downloads: 2500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="br-prog-card">
  <div class="br-header">
    <h3>UPLOADING.</h3>
    <span>65%</span>
  </div>
  <div class="br-track">
    <div class="br-bar" style="width: 65%"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #facc15; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.br-prog-card { width: 100%; max-width: 500px; background: #fff; border: 6px solid #000; box-shadow: 12px 12px 0 #000; padding: 30px; }
.br-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px; }
.br-header h3 { margin: 0; font-size: 2rem; font-weight: 900; text-transform: uppercase; color: #000; letter-spacing: -1px; }
.br-header span { font-size: 2.5rem; font-weight: 900; color: #ef4444; line-height: 0.8; }
.br-track { width: 100%; height: 40px; background: #e5e5e5; border: 4px solid #000; position: relative; }
.br-bar { height: 100%; background: #000; position: relative; }
.br-bar::after { content: ''; position: absolute; top:0; right:0; bottom:0; width: 10px; background: #ef4444; }`,
    jsCode: ``
  },

  // 6. Neumorphic Progress Bar
  {
    _id: "pb6",
    title: "Neumorphic Progress Bar",
    slug: "neumorphic-progress-bar",
    description: "A soft, inset track with an extruded progress fill.",
    category: "Progress",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["progress", "neumorphism", "soft", "bar"],
    isPremium: false,
    views: 9400,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-prog-card">
  <div class="neu-header">
    <span>Storage Used</span>
    <span>45GB / 100GB</span>
  </div>
  <div class="neu-track">
    <div class="neu-bar" style="width: 45%"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.neu-prog-card { width: 100%; max-width: 450px; background: #e0e5ec; border-radius: 20px; padding: 30px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); }
.neu-header { display: flex; justify-content: space-between; margin-bottom: 20px; color: #4a5568; font-weight: bold; font-size: 0.95rem; }
.neu-track { width: 100%; height: 20px; background: #e0e5ec; border-radius: 10px; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.5), inset -6px -6px 12px rgba(255,255,255,0.5); padding: 4px; box-sizing: border-box; }
.neu-bar { height: 100%; background: #4299e1; border-radius: 6px; box-shadow: 2px 2px 5px rgba(66, 153, 225, 0.4); }`,
    jsCode: ``
  },

  // 7. Gradient Animated Loading Bar
  {
    _id: "pb7",
    title: "Gradient Animated Bar",
    slug: "gradient-animated-bar",
    description: "A smooth, modern progress bar with an animated gradient fill.",
    category: "Progress",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    tags: ["progress", "gradient", "animated", "modern"],
    isPremium: true,
    views: 16200,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="grad-prog-card">
  <div class="gp-info">
    <h3>Installing Updates...</h3>
    <span>82%</span>
  </div>
  <div class="gp-track">
    <div class="gp-bar" style="width: 82%"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #111827; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.grad-prog-card { width: 100%; max-width: 500px; background: #1f2937; padding: 30px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
.gp-info { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; color: #fff; }
.gp-info h3 { margin: 0; font-size: 1.1rem; font-weight: 500; }
.gp-info span { font-size: 1.2rem; font-weight: bold; color: #3b82f6; }
.gp-track { width: 100%; height: 12px; background: #374151; border-radius: 10px; overflow: hidden; }
.gp-bar { height: 100%; background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6); background-size: 300% 100%; animation: gpAnim 2s linear infinite; border-radius: 10px; }
@keyframes gpAnim { 0% { background-position: 100% 0; } 100% { background-position: 0 0; } }`,
    jsCode: ``
  },

  // 8. Circular SVG Progress Gauge
  {
    _id: "pb8",
    title: "Circular Progress Gauge",
    slug: "circular-progress-gauge",
    description: "A dashboard-style circular gauge using SVG stroke-dashoffset.",
    category: "Progress",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["progress", "circular", "svg", "dashboard"],
    isPremium: false,
    views: 10800,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="circ-gauge">
  <svg viewBox="0 0 100 100">
    <circle class="cg-bg" cx="50" cy="50" r="45"></circle>
    <circle class="cg-fg" cx="50" cy="50" r="45" style="--perc: 68"></circle>
  </svg>
  <div class="cg-content">
    <span class="cg-val">68%</span>
    <span class="cg-label">Completed</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.circ-gauge { position: relative; width: 250px; height: 250px; }
.circ-gauge svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.circ-gauge circle { fill: none; stroke-width: 8; stroke-linecap: round; }
.cg-bg { stroke: #f1f5f9; }
.cg-fg { stroke: #8b5cf6; stroke-dasharray: 283; stroke-dashoffset: 283; animation: fillCirc 1.5s ease-out forwards; }
@keyframes fillCirc { to { stroke-dashoffset: calc(283 - (283 * var(--perc)) / 100); } }
.cg-content { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.cg-val { font-size: 3rem; font-weight: 900; color: #111827; line-height: 1; }
.cg-label { font-size: 0.9rem; color: #64748b; font-weight: 500; text-transform: uppercase; margin-top: 5px; }`,
    jsCode: ``
  },

  // 9. Minimalist Dot Indicator
  {
    _id: "pb9",
    title: "Minimalist Dot Steps",
    slug: "minimalist-dot-steps",
    description: "A super minimal dot-based step indicator common in mobile onboarding flows.",
    category: "Progress",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["progress", "minimalist", "dots", "onboarding"],
    isPremium: false,
    views: 11500,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dot-prog-card">
  <h2>Choose your plan</h2>
  <p>Select the option that best fits your team's needs.</p>
  <div class="dot-indicator">
    <div class="dot completed"></div>
    <div class="dot active"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.dot-prog-card { width: 100%; max-width: 400px; background: #fff; padding: 40px; border-radius: 16px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.dot-prog-card h2 { margin: 0 0 10px 0; color: #111827; }
.dot-prog-card p { color: #6b7280; font-size: 0.95rem; margin: 0 0 30px 0; line-height: 1.5; }
.dot-indicator { display: flex; justify-content: center; gap: 12px; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: #e5e7eb; transition: 0.3s; }
.dot.completed { background: #111827; }
.dot.active { background: #3b82f6; transform: scale(1.3); }`,
    jsCode: ``
  },

  // 10. Multi-Step Form Indicator
  {
    _id: "pb10",
    title: "Pill Step Indicator",
    slug: "pill-step-indicator",
    description: "A pill-shaped progress indicator that clearly highlights the current active stage.",
    category: "Progress",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["progress", "pill", "steps", "clean"],
    isPremium: true,
    views: 12800,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pill-steps">
  <div class="p-step done">
    <span>1</span>
    <label>Account</label>
  </div>
  <div class="p-step active">
    <span>2</span>
    <label>Personal</label>
  </div>
  <div class="p-step">
    <span>3</span>
    <label>Payment</label>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.pill-steps { display: flex; background: #fff; padding: 10px; border-radius: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); gap: 10px; }
.p-step { display: flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 30px; transition: 0.3s; color: #94a3b8; }
.p-step span { width: 24px; height: 24px; border-radius: 50%; background: #f1f5f9; display: flex; justify-content: center; align-items: center; font-size: 0.8rem; font-weight: bold; }
.p-step label { font-size: 0.95rem; font-weight: 600; cursor: default; }
.p-step.done { color: #10b981; }
.p-step.done span { background: #d1fae5; color: #10b981; }
.p-step.active { background: #111827; color: #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.p-step.active span { background: #374151; color: #fff; }`,
    jsCode: ``
  }
];
