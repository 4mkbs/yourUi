import { Design } from "./designs-data";

export const BATCH_20_DESIGNS: Design[] = [
  // 1. Classic Counter Grid
  {
    _id: "st1",
    title: "Classic Counter Grid",
    slug: "classic-counter-grid",
    description: "A clean, highly readable grid of large numbers designed to build immediate trust.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stats", "classic", "grid", "numbers"],
    isPremium: false,
    views: 12400,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="classic-stats">
  <div class="cs-container">
    <div class="cs-header">
      <h2>Trusted by thousands globally</h2>
      <p>We've helped businesses of all sizes scale their operations.</p>
    </div>
    <div class="cs-grid">
      <div class="cs-item">
        <div class="cs-number">99.9%</div>
        <div class="cs-label">Uptime guarantee</div>
      </div>
      <div class="cs-item">
        <div class="cs-number">10M+</div>
        <div class="cs-label">Active users</div>
      </div>
      <div class="cs-item">
        <div class="cs-number">24/7</div>
        <div class="cs-label">Customer support</div>
      </div>
      <div class="cs-item">
        <div class="cs-number">500k</div>
        <div class="cs-label">5-star reviews</div>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.classic-stats { padding: 5rem 2rem; border-top: 1px solid #f3f4f6; border-bottom: 1px solid #f3f4f6; }
.cs-container { max-width: 1100px; margin: 0 auto; text-align: center; }
.cs-header h2 { font-size: 2.5rem; color: #111827; margin: 0 0 10px 0; letter-spacing: -1px; }
.cs-header p { font-size: 1.1rem; color: #6b7280; margin: 0 0 4rem 0; }
.cs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; }
.cs-item { padding: 2rem; background: #f8fafc; border-radius: 16px; transition: 0.3s; }
.cs-item:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.cs-number { font-size: 3.5rem; font-weight: 800; color: #3b82f6; margin-bottom: 10px; line-height: 1; }
.cs-label { font-size: 1.1rem; font-weight: 500; color: #475569; }`,
    jsCode: ``
  },

  // 2. Brutalist Massive Numbers
  {
    _id: "st2",
    title: "Brutalist Massive Numbers",
    slug: "brutalist-massive-numbers",
    description: "Giant, screen-filling typography with hard shadows for maximum impact.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["stats", "brutalist", "typography", "bold"],
    isPremium: true,
    views: 10200,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="brutal-stats">
  <div class="bs-container">
    <div class="bs-block bg-yellow">
      <span class="bs-val">100<span class="bs-unit">K</span></span>
      <span class="bs-desc">DEVELOPERS</span>
    </div>
    <div class="bs-block bg-pink">
      <span class="bs-val">1.2<span class="bs-unit">B</span></span>
      <span class="bs-desc">REQUESTS</span>
    </div>
    <div class="bs-block bg-blue">
      <span class="bs-val">0<span class="bs-unit">%</span></span>
      <span class="bs-desc">DOWNTIME</span>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #000; }
.brutal-stats { padding: 4rem 2rem; }
.bs-container { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }
.bs-block { border: 6px solid #000; box-shadow: 15px 15px 0 #fff; padding: 3rem 2rem; display: flex; justify-content: space-between; align-items: flex-end; transition: 0.1s; cursor: default; }
.bs-block:hover { transform: translate(-5px, -5px); box-shadow: 20px 20px 0 #fff; }
.bg-yellow { background: #facc15; }
.bg-pink { background: #f43f5e; }
.bg-blue { background: #3b82f6; }
.bs-val { font-size: 8rem; font-weight: 900; line-height: 0.8; letter-spacing: -5px; color: #000; }
.bs-unit { font-size: 4rem; }
.bs-desc { font-size: 2rem; font-weight: 900; color: #000; text-transform: uppercase; }
@media (max-width: 768px) { .bs-block { flex-direction: column; align-items: flex-start; gap: 20px; } .bs-val { font-size: 5rem; } .bs-unit { font-size: 2.5rem; } }`,
    jsCode: ``
  },

  // 3. Glassmorphism Floating Stats
  {
    _id: "st3",
    title: "Glassmorphism Floating Stats",
    slug: "glassmorphism-floating-stats",
    description: "Frosted glass cards floating above a vibrant animated gradient background.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["stats", "glassmorphism", "gradient", "cards"],
    isPremium: true,
    views: 14500,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="glass-stats">
  <div class="gs-container">
    <div class="gs-card">
      <div class="gs-num">2.5M</div>
      <div class="gs-text">Lines of Code</div>
    </div>
    <div class="gs-card">
      <div class="gs-num">450+</div>
      <div class="gs-text">Open Source Contributors</div>
    </div>
    <div class="gs-card">
      <div class="gs-num">15ms</div>
      <div class="gs-text">Average Latency</div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.glass-stats { min-height: 80vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: gradientBg 8s ease infinite; padding: 2rem; box-sizing: border-box; }
@keyframes gradientBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gs-container { max-width: 1000px; width: 100%; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.gs-card { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; padding: 3rem 2rem; text-align: center; color: #fff; transition: 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
.gs-card:hover { transform: translateY(-10px); background: rgba(255, 255, 255, 0.25); }
.gs-num { font-size: 4rem; font-weight: 800; margin-bottom: 10px; text-shadow: 0 4px 10px rgba(0,0,0,0.2); }
.gs-text { font-size: 1.2rem; font-weight: 500; opacity: 0.9; }`,
    jsCode: ``
  },

  // 4. Cyberpunk HUD Stats
  {
    _id: "st4",
    title: "Cyberpunk HUD Stats",
    slug: "cyberpunk-hud-stats",
    description: "A heads-up-display style terminal interface showing system metrics.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["stats", "cyberpunk", "hud", "neon"],
    isPremium: true,
    views: 11800,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="cyber-stats">
  <div class="cy-container">
    <div class="cy-header">
      <span>SYS_METRICS_v2.0</span>
      <span class="blink">STATUS: ONLINE</span>
    </div>
    <div class="cy-grid">
      <div class="cy-box">
        <div class="cy-label">NETWORK_LOAD</div>
        <div class="cy-val">42<span class="cy-unit">TB/s</span></div>
      </div>
      <div class="cy-box">
        <div class="cy-label">ACTIVE_NODES</div>
        <div class="cy-val">8,409<span class="cy-unit"></span></div>
      </div>
      <div class="cy-box">
        <div class="cy-label">THREAT_LEVEL</div>
        <div class="cy-val">ZERO<span class="cy-unit"></span></div>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; color: #0ff; }
.cyber-stats { padding: 5rem 2rem; }
.cy-container { max-width: 900px; margin: 0 auto; border: 1px solid #0ff; padding: 30px; position: relative; box-shadow: inset 0 0 20px rgba(0,255,255,0.1), 0 0 20px rgba(0,255,255,0.2); }
.cy-container::before { content: ''; position: absolute; top: -5px; left: -5px; width: 20px; height: 20px; border-top: 3px solid #f0f; border-left: 3px solid #f0f; }
.cy-container::after { content: ''; position: absolute; bottom: -5px; right: -5px; width: 20px; height: 20px; border-bottom: 3px solid #f0f; border-right: 3px solid #f0f; }
.cy-header { display: flex; justify-content: space-between; border-bottom: 1px dashed #0ff; padding-bottom: 15px; margin-bottom: 30px; font-weight: bold; letter-spacing: 2px; }
.blink { animation: blinker 1.5s linear infinite; color: #f0f; }
@keyframes blinker { 50% { opacity: 0; } }
.cy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
.cy-box { background: #000; padding: 20px; border: 1px solid #333; text-align: center; }
.cy-box:hover { border-color: #f0f; box-shadow: 0 0 15px rgba(255,0,255,0.3); }
.cy-label { color: #888; font-size: 0.9rem; margin-bottom: 15px; letter-spacing: 1px; }
.cy-val { font-size: 3.5rem; font-weight: bold; text-shadow: 0 0 10px #0ff; line-height: 1; }
.cy-unit { font-size: 1.2rem; margin-left: 5px; }`,
    jsCode: ``
  },

  // 5. Bento Grid Stats
  {
    _id: "st5",
    title: "Bento Grid Stats",
    slug: "bento-grid-stats",
    description: "An asymmetrical, modern bento grid layout for presenting statistics.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    tags: ["stats", "bento", "grid", "modern"],
    isPremium: true,
    views: 13200,
    downloads: 4000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="bento-stats">
  <div class="ben-container">
    <div class="ben-grid">
      <div class="ben-card ben-dark">
        <div class="ben-label">Total Revenue Generated</div>
        <div class="ben-val">$4.2B</div>
      </div>
      <div class="ben-card">
        <div class="ben-label">Countries Supported</div>
        <div class="ben-val">140+</div>
      </div>
      <div class="ben-card">
        <div class="ben-label">Customer Satisfaction</div>
        <div class="ben-val">98%</div>
      </div>
      <div class="ben-card ben-wide bg-blue">
        <div class="ben-label text-white">API Requests Processed Daily</div>
        <div class="ben-val text-white">50 Billion</div>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; }
.bento-stats { padding: 5rem 2rem; }
.ben-container { max-width: 1000px; margin: 0 auto; }
.ben-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; auto-rows: 200px; }
.ben-card { background: #fff; border-radius: 24px; padding: 2rem; display: flex; flex-direction: column; justify-content: center; box-shadow: 0 4px 20px rgba(0,0,0,0.03); transition: 0.3s; }
.ben-card:hover { transform: scale(1.02); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
.ben-dark { background: #111827; color: #fff; grid-row: span 2; }
.ben-wide { grid-column: span 2; }
.bg-blue { background: #2563eb; }
.text-white { color: #fff !important; }
.ben-label { font-size: 1.1rem; color: #64748b; margin-bottom: 15px; font-weight: 500; }
.ben-dark .ben-label { color: #9ca3af; }
.ben-val { font-size: 3rem; font-weight: 800; color: #0f172a; line-height: 1; }
.ben-dark .ben-val { font-size: 5rem; color: #fff; }
@media (max-width: 768px) { .ben-grid { grid-template-columns: 1fr; auto-rows: auto; } .ben-dark { grid-row: span 1; } .ben-wide { grid-column: span 1; } .ben-card { min-height: 200px; } .ben-dark .ben-val { font-size: 3rem; } }`,
    jsCode: ``
  },

  // 6. Split Screen Stats
  {
    _id: "st6",
    title: "Split Screen Stats",
    slug: "split-screen-stats",
    description: "A corporate split layout with an image on the left and a grid of stats on the right.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["stats", "split", "corporate", "clean"],
    isPremium: false,
    views: 9800,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="split-stats">
  <div class="sp-img"></div>
  <div class="sp-content">
    <h2>Built for scale.</h2>
    <p>Our infrastructure handles the heavy lifting so you don't have to.</p>
    <div class="sp-grid">
      <div class="sp-item">
        <div class="sp-num">500+</div>
        <div class="sp-label">Servers Worldwide</div>
      </div>
      <div class="sp-item">
        <div class="sp-num">1ms</div>
        <div class="sp-label">Edge Latency</div>
      </div>
      <div class="sp-item">
        <div class="sp-num">10k</div>
        <div class="sp-label">Commits / Day</div>
      </div>
      <div class="sp-item">
        <div class="sp-num">0</div>
        <div class="sp-label">Data Breaches</div>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.split-stats { display: flex; min-height: 100vh; }
.sp-img { flex: 1; background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=80') center/cover; }
.sp-content { flex: 1; padding: 10vw 5vw; background: #fff; display: flex; flex-direction: column; justify-content: center; }
.sp-content h2 { font-size: 3rem; margin: 0 0 10px 0; color: #111827; letter-spacing: -1px; }
.sp-content p { font-size: 1.2rem; color: #4b5563; margin-bottom: 3rem; max-width: 400px; line-height: 1.6; }
.sp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.sp-num { font-size: 3rem; font-weight: 900; color: #111827; margin-bottom: 5px; }
.sp-label { font-size: 1.1rem; color: #6b7280; font-weight: 500; }
@media (max-width: 900px) { .split-stats { flex-direction: column; } .sp-img { min-height: 40vh; } }`,
    jsCode: ``
  },

  // 7. Neumorphic Stat Dials
  {
    _id: "st7",
    title: "Neumorphic Stat Blocks",
    slug: "neumorphic-stat-blocks",
    description: "Soft UI boxes pressed into the background presenting numbers elegantly.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["stats", "neumorphism", "soft", "tiles"],
    isPremium: false,
    views: 8100,
    downloads: 2400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="neu-stats">
  <div class="ns-container">
    <div class="ns-card">
      <div class="ns-circle">
        <span class="ns-val">99%</span>
      </div>
      <div class="ns-label">Satisfaction</div>
    </div>
    <div class="ns-card">
      <div class="ns-circle">
        <span class="ns-val">24/7</span>
      </div>
      <div class="ns-label">Support</div>
    </div>
    <div class="ns-card">
      <div class="ns-circle">
        <span class="ns-val">10x</span>
      </div>
      <div class="ns-label">Faster</div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.neu-stats { padding: 6rem 2rem; }
.ns-container { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; }
.ns-card { text-align: center; }
.ns-circle { width: 180px; height: 180px; margin: 0 auto 2rem; border-radius: 50%; background: #e0e5ec; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); display: flex; justify-content: center; align-items: center; transition: 0.3s; }
.ns-circle:hover { box-shadow: inset 8px 8px 16px rgba(163,177,198,0.5), inset -8px -8px 16px rgba(255,255,255,0.5); }
.ns-val { font-size: 3rem; font-weight: bold; color: #4a5568; }
.ns-label { font-size: 1.3rem; font-weight: bold; color: #a0aec0; text-transform: uppercase; letter-spacing: 2px; }`,
    jsCode: ``
  },

  // 8. Animated Progress Rings
  {
    _id: "st8",
    title: "Animated Progress Rings",
    slug: "animated-progress-rings",
    description: "Circular SVG progress rings that animate to their respective percentages.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stats", "animated", "rings", "progress"],
    isPremium: true,
    views: 15600,
    downloads: 5200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="ring-stats">
  <div class="rs-container">
    <div class="rs-item">
      <div class="rs-circle">
        <svg viewBox="0 0 100 100">
          <circle class="bg" cx="50" cy="50" r="45"></circle>
          <circle class="fg" cx="50" cy="50" r="45" style="--percent: 85"></circle>
        </svg>
        <div class="rs-inner">85%</div>
      </div>
      <h3>Code Coverage</h3>
    </div>
    <div class="rs-item">
      <div class="rs-circle">
        <svg viewBox="0 0 100 100">
          <circle class="bg" cx="50" cy="50" r="45"></circle>
          <circle class="fg" cx="50" cy="50" r="45" style="--percent: 99"></circle>
        </svg>
        <div class="rs-inner">99%</div>
      </div>
      <h3>System Uptime</h3>
    </div>
    <div class="rs-item">
      <div class="rs-circle">
        <svg viewBox="0 0 100 100">
          <circle class="bg" cx="50" cy="50" r="45"></circle>
          <circle class="fg" cx="50" cy="50" r="45" style="--percent: 72"></circle>
        </svg>
        <div class="rs-inner">72%</div>
      </div>
      <h3>Market Share</h3>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.ring-stats { padding: 6rem 2rem; }
.rs-container { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-around; flex-wrap: wrap; gap: 40px; }
.rs-item { text-align: center; }
.rs-circle { position: relative; width: 200px; height: 200px; margin: 0 auto 1.5rem; }
.rs-circle svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.rs-circle circle { fill: none; stroke-width: 8; stroke-linecap: round; }
.rs-circle .bg { stroke: #f1f5f9; }
.rs-circle .fg { stroke: #3b82f6; stroke-dasharray: 283; stroke-dashoffset: 283; animation: fillRing 2s ease-out forwards; }
@keyframes fillRing { to { stroke-dashoffset: calc(283 - (283 * var(--percent)) / 100); } }
.rs-inner { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; font-size: 2.5rem; font-weight: 800; color: #111827; }
.rs-item h3 { margin: 0; font-size: 1.2rem; color: #64748b; font-weight: 500; }`,
    jsCode: ``
  },

  // 9. Minimalist Underlined Stats
  {
    _id: "st9",
    title: "Minimalist Underlined Stats",
    slug: "minimalist-underlined-stats",
    description: "An elegant, typography-focused design where stats are separated by thick borders.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["stats", "minimalist", "typography", "clean"],
    isPremium: false,
    views: 10500,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="ul-stats">
  <div class="ul-container">
    <div class="ul-item">
      <div class="ul-num">4.9/5</div>
      <div class="ul-label">Average Rating</div>
    </div>
    <div class="ul-item">
      <div class="ul-num">200K+</div>
      <div class="ul-label">Monthly Visitors</div>
    </div>
    <div class="ul-item">
      <div class="ul-num">150+</div>
      <div class="ul-label">Templates Available</div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; }
.ul-stats { padding: 6rem 2rem; }
.ul-container { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 40px; border-top: 4px solid #111; padding-top: 40px; }
.ul-item { flex: 1; min-width: 200px; }
.ul-num { font-size: 4.5rem; font-weight: 900; color: #111; line-height: 1; margin-bottom: 10px; }
.ul-label { font-size: 1.2rem; color: #666; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 10. Isometric 3D Stat Blocks
  {
    _id: "st10",
    title: "Isometric 3D Stats",
    slug: "isometric-3d-stats",
    description: "Blocks skewed in 3D space to give a dynamic, tech-focused look.",
    category: "Stats",
    thumbnail: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    tags: ["stats", "isometric", "3d", "tech"],
    isPremium: true,
    views: 11100,
    downloads: 3500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="iso-stats">
  <div class="is-wrapper">
    <div class="is-block">
      <div class="is-val">99%</div>
      <div class="is-text">Success Rate</div>
    </div>
    <div class="is-block">
      <div class="is-val">1.5s</div>
      <div class="is-text">Load Time</div>
    </div>
    <div class="is-block">
      <div class="is-val">300+</div>
      <div class="is-text">Components</div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; overflow-x: hidden; }
.iso-stats { min-height: 60vh; display: flex; justify-content: center; align-items: center; padding: 2rem; perspective: 1000px; }
.is-wrapper { display: flex; gap: 40px; transform: rotateX(20deg) rotateY(-20deg) rotateZ(5deg); transition: 0.5s; }
.is-wrapper:hover { transform: rotateX(0) rotateY(0) rotateZ(0); }
.is-block { width: 200px; height: 200px; background: #fff; padding: 2rem; display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 16px; box-shadow: -15px 15px 30px rgba(0,0,0,0.1); border-right: 4px solid #cbd5e1; border-bottom: 4px solid #cbd5e1; transition: 0.3s; }
.is-block:hover { transform: translateY(-10px); box-shadow: -20px 20px 40px rgba(0,0,0,0.15); }
.is-val { font-size: 3.5rem; font-weight: 900; color: #3b82f6; margin-bottom: 10px; }
.is-text { font-size: 1.1rem; color: #64748b; font-weight: 500; text-align: center; }
@media (max-width: 900px) { .is-wrapper { flex-direction: column; transform: none; } .is-wrapper:hover { transform: none; } }`,
    jsCode: ``
  }
];
