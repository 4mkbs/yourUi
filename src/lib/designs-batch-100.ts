import { Design } from "./designs-data";

export const BATCH_100_DESIGNS: Design[] = [
  // 1. Classic 3-Column Features
  {
    _id: "feat1",
    title: "Classic 3-Column Features",
    slug: "classic-3-column-features",
    description: "Standard layout for highlighting key benefits with icons and text.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["features", "grid", "classic", "benefits"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="feat-cl">
  <div class="cl-head">
    <h2>Why Choose Us?</h2>
    <p>Everything you need to build faster and better.</p>
  </div>
  <div class="cl-grid">
    <div class="cl-item">
      <div class="cl-icon">⚡</div>
      <h3>Lightning Fast</h3>
      <p>Optimized for speed. Zero dependencies. Copy, paste, and ship.</p>
    </div>
    <div class="cl-item">
      <div class="cl-icon">🎨</div>
      <h3>Beautiful Design</h3>
      <p>Crafted with precision by expert designers. Pixel perfect in every way.</p>
    </div>
    <div class="cl-item">
      <div class="cl-icon">♿</div>
      <h3>Fully Accessible</h3>
      <p>Built with web standards in mind. Screen reader friendly out of the box.</p>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.feat-cl { max-width: 1200px; margin: 0 auto; padding: 80px 20px; }
.cl-head { text-align: center; margin-bottom: 60px; }
.cl-head h2 { font-size: 2.5rem; color: #0f172a; margin: 0 0 10px; }
.cl-head p { font-size: 1.1rem; color: #64748b; margin: 0; }
.cl-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
.cl-item { text-align: center; padding: 20px; }
.cl-icon { font-size: 2.5rem; background: #eff6ff; width: 80px; height: 80px; line-height: 80px; border-radius: 50%; margin: 0 auto 20px; color: #3b82f6; }
.cl-item h3 { font-size: 1.25rem; color: #0f172a; margin: 0 0 15px; }
.cl-item p { color: #475569; line-height: 1.6; margin: 0; }`,
    jsCode: ``
  },

  // 2. Zig-Zag Features
  {
    _id: "feat2",
    title: "Zig-Zag Feature Sections",
    slug: "zig-zag-feature-sections",
    description: "Alternating layout with text on one side and an image on the other.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["features", "zigzag", "layout", "classic"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="feat-zz">
  <div class="zz-row">
    <div class="zz-text">
      <h3>Design Without Limits</h3>
      <p>Explore thousands of variations. Find the exact component you need and customize it to match your brand perfectly.</p>
    </div>
    <div class="zz-img">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" alt="Design" />
    </div>
  </div>
  <div class="zz-row reverse">
    <div class="zz-text">
      <h3>Clean, Semantic Code</h3>
      <p>No bloated frameworks. Just pure HTML and CSS written with modern best practices in mind.</p>
    </div>
    <div class="zz-img">
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" alt="Code" />
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.feat-zz { max-width: 1000px; margin: 0 auto; padding: 80px 20px; display: flex; flex-direction: column; gap: 80px; }
.zz-row { display: flex; align-items: center; gap: 60px; }
.zz-row.reverse { flex-direction: row-reverse; }
.zz-text { flex: 1; }
.zz-text h3 { font-size: 2rem; color: #0f172a; margin: 0 0 20px; letter-spacing: -0.5px; }
.zz-text p { font-size: 1.1rem; color: #475569; line-height: 1.6; margin: 0; }
.zz-img { flex: 1; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.zz-img img { width: 100%; height: auto; display: block; object-fit: cover; }
@media (max-width: 768px) { .zz-row, .zz-row.reverse { flex-direction: column; text-align: center; gap: 40px; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Feature Grid
  {
    _id: "feat3",
    title: "Cyberpunk Feature Grid",
    slug: "cyberpunk-feature-grid",
    description: "Hacker-themed feature cards with neon accents.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["features", "cyberpunk", "neon", "grid"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="feat-cy">
  <div class="cy-head">>> SYSTEM_SPECS</div>
  <div class="cy-grid">
    <div class="cy-item">
      <h4>[ENCRYPTION]</h4>
      <p>Military grade security protocols enabled. Your data is safe.</p>
    </div>
    <div class="cy-item">
      <h4>[BANDWIDTH]</h4>
      <p>Unlimited data transfer. No throttling, no bottlenecks.</p>
    </div>
    <div class="cy-item">
      <h4>[UPTIME]</h4>
      <p>99.99% guaranteed uptime across all global clusters.</p>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; color: #0f0; }
.feat-cy { max-width: 1000px; margin: 0 auto; padding: 60px 20px; }
.cy-head { font-size: 1.5rem; font-weight: bold; margin-bottom: 40px; border-bottom: 2px solid #0f0; padding-bottom: 10px; text-shadow: 0 0 5px #0f0; }
.cy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.cy-item { border: 1px solid #050; padding: 30px; background: rgba(0,20,0,0.5); transition: 0.3s; position: relative; }
.cy-item:hover { border-color: #0f0; box-shadow: 0 0 15px rgba(0,255,0,0.2); }
.cy-item::before { content: ''; position: absolute; top: 0; left: 0; width: 20px; height: 20px; border-top: 2px solid #0f0; border-left: 2px solid #0f0; opacity: 0; transition: 0.3s; }
.cy-item:hover::before { opacity: 1; }
.cy-item h4 { margin: 0 0 15px; font-size: 1.2rem; color: #fff; text-shadow: 0 0 5px #0f0; }
.cy-item p { margin: 0; color: #0aa; line-height: 1.5; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Features
  {
    _id: "feat4",
    title: "Glassmorphism Features",
    slug: "glassmorphism-features",
    description: "Frosted glass feature cards floating over a vibrant background.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["features", "glassmorphism", "blur", "cards"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="feat-gl-wrap">
  <div class="feat-gl">
    <h2>Why GlassUI?</h2>
    <div class="gl-grid">
      <div class="gl-card">
        <h3>Stunning Visuals</h3>
        <p>Give your application a modern, premium feel instantly.</p>
      </div>
      <div class="gl-card">
        <h3>Easy Integration</h3>
        <p>No complex setup. Just drop the CSS into your project.</p>
      </div>
      <div class="gl-card">
        <h3>Fully Responsive</h3>
        <p>Looks great on any device, from mobile to desktop.</p>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.feat-gl-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 60px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.feat-gl { max-width: 1200px; width: 100%; }
.feat-gl h2 { text-align: center; color: #fff; font-size: 2.5rem; margin: 0 0 50px; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.gl-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.gl-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); padding: 40px; border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); color: #fff; transition: 0.3s; }
.gl-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.15); }
.gl-card h3 { margin: 0 0 15px; font-size: 1.4rem; font-weight: 600; }
.gl-card p { margin: 0; opacity: 0.9; line-height: 1.5; font-size: 1.05rem; }`,
    jsCode: ``
  },

  // 5. Brutalist Features
  {
    _id: "feat5",
    title: "Brutalist Feature Block",
    slug: "brutalist-feature-block",
    description: "High contrast, aggressive feature grid with thick black borders.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["features", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="feat-br">
  <div class="br-head">CORE FEATURES</div>
  <div class="br-grid">
    <div class="br-item">
      <h3>FAST</h3>
      <p>NO BLOAT. JUST SPEED.</p>
    </div>
    <div class="br-item highlight">
      <h3>LOUD</h3>
      <p>STAND OUT FROM THE CROWD.</p>
    </div>
    <div class="br-item">
      <h3>FREE</h3>
      <p>NO SUBSCRIPTIONS. EVER.</p>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.feat-br { max-width: 1000px; margin: 0 auto; padding: 60px 20px; }
.br-head { font-size: 3rem; font-weight: 900; background: #000; color: #fff; display: inline-block; padding: 10px 20px; margin-bottom: 40px; box-shadow: 8px 8px 0 #facc15; }
.br-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
.br-item { border: 6px solid #000; background: #fff; padding: 30px; box-shadow: 10px 10px 0 #000; transition: 0.1s; }
.br-item.highlight { background: #facc15; }
.br-item:hover { transform: translate(-5px, -5px); box-shadow: 15px 15px 0 #000; }
.br-item h3 { margin: 0 0 10px; font-size: 2rem; font-weight: 900; letter-spacing: -1px; }
.br-item p { margin: 0; font-weight: bold; font-size: 1.1rem; }`,
    jsCode: ``
  },

  // 6. Dark Mode Glow Features
  {
    _id: "feat6",
    title: "Dark Glow Features",
    slug: "dark-glow-features",
    description: "Deep dark background with features that glow on hover.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["features", "dark", "glow", "cards"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="feat-dg">
  <h2>Unleash Your Potential</h2>
  <div class="dg-grid">
    <div class="dg-card">
      <div class="dg-icon">⚡</div>
      <h3>Real-time Sync</h3>
      <p>Changes propagate across all your devices instantly.</p>
    </div>
    <div class="dg-card">
      <div class="dg-icon">🔒</div>
      <h3>End-to-End Encryption</h3>
      <p>Your data is secured with AES-256 encryption.</p>
    </div>
    <div class="dg-card">
      <div class="dg-icon">📈</div>
      <h3>Advanced Analytics</h3>
      <p>Gain deep insights into your workflow efficiency.</p>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; }
.feat-dg { max-width: 1200px; margin: 0 auto; padding: 80px 20px; }
.feat-dg h2 { text-align: center; color: #f8fafc; font-size: 2.5rem; margin: 0 0 60px; font-weight: 800; }
.dg-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.dg-card { background: #0f172a; border: 1px solid #1e293b; padding: 40px; border-radius: 16px; transition: 0.3s; position: relative; overflow: hidden; }
.dg-card:hover { border-color: #3b82f6; box-shadow: 0 10px 30px rgba(59,130,246,0.15); transform: translateY(-5px); }
.dg-icon { font-size: 2rem; margin-bottom: 20px; display: inline-block; padding: 15px; background: rgba(59,130,246,0.1); border-radius: 12px; color: #3b82f6; transition: 0.3s; }
.dg-card:hover .dg-icon { box-shadow: 0 0 20px rgba(59,130,246,0.4); }
.dg-card h3 { color: #f8fafc; margin: 0 0 15px; font-size: 1.3rem; }
.dg-card p { color: #94a3b8; margin: 0; line-height: 1.6; }`,
    jsCode: ``
  },

  // 7. Neumorphic Features
  {
    _id: "feat7",
    title: "Neumorphic Soft Features",
    slug: "neumorphic-soft-features",
    description: "Soft UI feature cards with embossed icons.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["features", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="feat-neu">
  <h2>Discover the difference</h2>
  <div class="neu-grid">
    <div class="neu-card">
      <div class="neu-icon">🎯</div>
      <h3>Precision</h3>
      <p>Pixel-perfect execution.</p>
    </div>
    <div class="neu-card">
      <div class="neu-icon">🛡️</div>
      <h3>Reliability</h3>
      <p>Built to never fail.</p>
    </div>
    <div class="neu-card">
      <div class="neu-icon">🚀</div>
      <h3>Performance</h3>
      <p>Blazing fast load times.</p>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.feat-neu { max-width: 1000px; margin: 0 auto; padding: 80px 20px; }
.feat-neu h2 { text-align: center; color: #4a5568; font-size: 2.5rem; margin: 0 0 60px; }
.neu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; }
.neu-card { background: #e0e5ec; padding: 40px; border-radius: 30px; box-shadow: 10px 10px 20px rgba(163,177,198,0.6), -10px -10px 20px rgba(255,255,255,0.5); text-align: center; transition: 0.3s; }
.neu-card:hover { box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); }
.neu-icon { font-size: 2rem; width: 60px; height: 60px; line-height: 60px; margin: 0 auto 20px; border-radius: 50%; background: #e0e5ec; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); }
.neu-card:hover .neu-icon { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
.neu-card h3 { color: #4a5568; margin: 0 0 10px; font-size: 1.4rem; }
.neu-card p { color: #718096; margin: 0; }`,
    jsCode: ``
  },

  // 8. Minimalist Editorial Features
  {
    _id: "feat8",
    title: "Minimalist Editorial Features",
    slug: "minimalist-editorial-features",
    description: "Clean lines, sparse layout, perfect for fashion or agency sites.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["features", "minimal", "editorial", "clean"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="feat-ed">
  <div class="ed-grid">
    <div class="ed-item">
      <h3>01. Strategy</h3>
      <p>We build a strong foundation for your brand through deep research.</p>
    </div>
    <div class="ed-item">
      <h3>02. Design</h3>
      <p>Visual communication that speaks clearly to your audience.</p>
    </div>
    <div class="ed-item">
      <h3>03. Development</h3>
      <p>Robust, scalable systems built for the modern web.</p>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; }
.feat-ed { max-width: 1000px; margin: 0 auto; padding: 100px 20px; }
.ed-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 60px; border-top: 1px solid #111; padding-top: 40px; }
.ed-item h3 { font-size: 1.2rem; font-weight: 500; color: #111; margin: 0 0 20px; letter-spacing: 1px; }
.ed-item p { font-size: 1.1rem; color: #666; line-height: 1.6; margin: 0; }`,
    jsCode: ``
  },

  // 9. Large Highlight Card
  {
    _id: "feat9",
    title: "Large Highlight Feature",
    slug: "large-highlight-feature",
    description: "A single, massive feature card acting as a billboard.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["features", "card", "highlight", "clean"],
    isPremium: true,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="feat-hl">
  <div class="hl-card">
    <div class="hl-text">
      <h2>Collaborate in Real-Time</h2>
      <p>Work together with your team as if you were in the same room. See cursors, live edits, and instant updates.</p>
      <a href="#" class="hl-link">Learn about Collaboration →</a>
    </div>
    <div class="hl-img">
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Team" />
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.feat-hl { max-width: 1200px; margin: 0 auto; padding: 60px 20px; }
.hl-card { background: #0f172a; border-radius: 24px; overflow: hidden; display: flex; align-items: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
.hl-text { padding: 60px; flex: 1; color: #fff; }
.hl-text h2 { font-size: 2.5rem; margin: 0 0 20px; font-weight: 800; }
.hl-text p { font-size: 1.1rem; color: #94a3b8; line-height: 1.6; margin: 0 0 30px; }
.hl-link { color: #3b82f6; text-decoration: none; font-weight: bold; font-size: 1.1rem; transition: 0.2s; }
.hl-link:hover { color: #60a5fa; }
.hl-img { flex: 1; min-height: 400px; }
.hl-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
@media (max-width: 768px) { .hl-card { flex-direction: column; } .hl-text { padding: 40px; } }`,
    jsCode: ``
  },

  // 10. Horizontal Scroll Features
  {
    _id: "feat10",
    title: "Horizontal Scroll Features",
    slug: "horizontal-scroll-features",
    description: "Cards arranged horizontally allowing users to swipe or scroll.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["features", "scroll", "horizontal", "cards"],
    isPremium: false,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="feat-hs">
  <div class="hs-head">
    <h2>Powerful Capabilities</h2>
  </div>
  <div class="hs-scroll">
    <div class="hs-card">
      <h3>Automation</h3>
      <p>Set it and forget it. Build complex workflows.</p>
    </div>
    <div class="hs-card">
      <h3>Analytics</h3>
      <p>Understand your data with beautiful charts.</p>
    </div>
    <div class="hs-card">
      <h3>Security</h3>
      <p>Bank-level encryption for all your assets.</p>
    </div>
    <div class="hs-card">
      <h3>Integrations</h3>
      <p>Connect with over 100+ popular tools.</p>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; }
.feat-hs { padding: 80px 0 80px 40px; }
.hs-head h2 { font-size: 2.5rem; color: #0f172a; margin: 0 0 40px; }
.hs-scroll { display: flex; gap: 30px; overflow-x: auto; padding-bottom: 20px; scroll-snap-type: x mandatory; }
.hs-scroll::-webkit-scrollbar { height: 8px; }
.hs-scroll::-webkit-scrollbar-track { background: #e2e8f0; border-radius: 4px; }
.hs-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
.hs-card { background: #fff; min-width: 300px; padding: 40px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); scroll-snap-align: start; }
.hs-card h3 { margin: 0 0 15px; font-size: 1.5rem; color: #0f172a; }
.hs-card p { margin: 0; color: #64748b; line-height: 1.5; }`,
    jsCode: ``
  }
];
