import { Design } from "./designs-data";

export const BATCH_90_DESIGNS: Design[] = [
  // 1. Classic 3-Tier Pricing
  {
    _id: "pr1",
    title: "Classic 3-Tier Pricing",
    slug: "classic-3-tier-pricing",
    description: "Standard layout with three cards, highlighting the most popular middle tier.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "tiers", "classic", "cards"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-cl">
  <div class="cl-card">
    <h3>Basic</h3>
    <div class="cl-price">$9<span>/mo</span></div>
    <ul class="cl-features">
      <li>✓ 1 User</li>
      <li>✓ 5GB Storage</li>
      <li>✗ Priority Support</li>
    </ul>
    <button class="cl-btn">Get Started</button>
  </div>
  <div class="cl-card cl-popular">
    <div class="cl-badge">Most Popular</div>
    <h3>Pro</h3>
    <div class="cl-price">$29<span>/mo</span></div>
    <ul class="cl-features">
      <li>✓ 5 Users</li>
      <li>✓ 50GB Storage</li>
      <li>✓ Priority Support</li>
    </ul>
    <button class="cl-btn cl-primary">Get Started</button>
  </div>
  <div class="cl-card">
    <h3>Enterprise</h3>
    <div class="cl-price">$99<span>/mo</span></div>
    <ul class="cl-features">
      <li>✓ Unlimited Users</li>
      <li>✓ 500GB Storage</li>
      <li>✓ 24/7 Support</li>
    </ul>
    <button class="cl-btn">Contact Sales</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.pr-cl { display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; max-width: 1000px; width: 100%; align-items: center; }
.cl-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 40px 30px; width: 300px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.02); position: relative; }
.cl-popular { border-color: #3b82f6; box-shadow: 0 20px 40px rgba(59,130,246,0.1); transform: scale(1.05); }
.cl-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #3b82f6; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; }
.cl-card h3 { margin: 0 0 15px; color: #0f172a; font-size: 1.5rem; }
.cl-price { font-size: 3rem; font-weight: 800; color: #0f172a; margin-bottom: 30px; }
.cl-price span { font-size: 1rem; color: #64748b; font-weight: 500; }
.cl-features { list-style: none; padding: 0; margin: 0 0 30px; text-align: left; }
.cl-features li { padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569; }
.cl-features li:last-child { border-bottom: none; }
.cl-btn { width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; font-weight: bold; cursor: pointer; transition: 0.2s; }
.cl-btn:hover { background: #f1f5f9; }
.cl-primary { background: #3b82f6; color: #fff; border-color: #3b82f6; }
.cl-primary:hover { background: #2563eb; }
@media (max-width: 900px) { .cl-popular { transform: none; } }`,
    jsCode: ``
  },

  // 2. Minimal Clean Pricing
  {
    _id: "pr2",
    title: "Minimal Typography Pricing",
    slug: "minimal-typography-pricing",
    description: "Stripped back design focusing entirely on typography and white space.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "minimal", "clean", "typography"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-mn">
  <div class="mn-card">
    <h3>Starter</h3>
    <div class="mn-price">$0</div>
    <p>Perfect for side projects.</p>
    <a href="#">Select Plan</a>
  </div>
  <div class="mn-divider"></div>
  <div class="mn-card">
    <h3>Professional</h3>
    <div class="mn-price">$49</div>
    <p>Everything you need for production.</p>
    <a href="#">Select Plan</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; align-items: center; min-height: 50vh; }
.pr-mn { display: flex; align-items: stretch; gap: 60px; max-width: 800px; width: 100%; justify-content: center; flex-wrap: wrap; }
.mn-card { text-align: left; flex: 1; min-width: 250px; }
.mn-card h3 { font-size: 1.5rem; font-weight: 300; color: #000; margin: 0 0 10px; letter-spacing: -0.5px; }
.mn-price { font-size: 5rem; font-weight: 200; color: #000; line-height: 1; margin-bottom: 20px; }
.mn-card p { color: #666; font-size: 1.1rem; margin: 0 0 40px; }
.mn-card a { color: #000; text-decoration: none; font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; border-bottom: 2px solid #000; padding-bottom: 5px; transition: 0.2s; }
.mn-card a:hover { opacity: 0.6; }
.mn-divider { width: 1px; background: #e5e5e5; }
@media (max-width: 600px) { .pr-mn { flex-direction: column; gap: 40px; } .mn-divider { width: 100%; height: 1px; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Pricing
  {
    _id: "pr3",
    title: "Cyberpunk License Terminals",
    slug: "cyberpunk-license-terminals",
    description: "Hacker-themed pricing grid with neon accents.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["pricing", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-cy">
  <div class="cy-card">
    <div class="cy-head">NODE_ACCESS</div>
    <div class="cy-price">50 <span>CREDITS</span></div>
    <ul class="cy-features">
      <li>> STD_BANDWIDTH</li>
      <li>> 1_PROXY</li>
    </ul>
    <button class="cy-btn">EXECUTE</button>
  </div>
  <div class="cy-card cy-active">
    <div class="cy-head">NETRUNNER_PRO</div>
    <div class="cy-price">250 <span>CREDITS</span></div>
    <ul class="cy-features">
      <li>> MAX_BANDWIDTH</li>
      <li>> UNLIM_PROXIES</li>
      <li>> ICE_BREAKER</li>
    </ul>
    <button class="cy-btn">EXECUTE</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; 
background-image: linear-gradient(rgba(0, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px); background-size: 20px 20px; }
.pr-cy { display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; }
.cy-card { border: 1px solid #0f0; background: rgba(0,20,0,0.8); padding: 30px; width: 300px; box-shadow: 0 0 10px rgba(0,255,0,0.1); }
.cy-active { border-width: 2px; box-shadow: 0 0 20px rgba(0,255,0,0.3); transform: translateY(-10px); }
.cy-head { color: #0f0; font-weight: bold; border-bottom: 1px dashed #0f0; padding-bottom: 10px; margin-bottom: 20px; letter-spacing: 2px; }
.cy-price { color: #fff; font-size: 3rem; font-weight: bold; margin-bottom: 30px; text-shadow: 0 0 10px #fff; }
.cy-price span { font-size: 1rem; color: #0f0; text-shadow: none; display: block; }
.cy-features { list-style: none; padding: 0; margin: 0 0 30px; color: #0aa; line-height: 1.8; }
.cy-btn { width: 100%; background: transparent; color: #0f0; border: 1px solid #0f0; padding: 15px; font-family: inherit; font-weight: bold; cursor: pointer; transition: 0.2s; letter-spacing: 2px; }
.cy-btn:hover, .cy-active .cy-btn { background: #0f0; color: #000; box-shadow: 0 0 15px #0f0; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Pricing
  {
    _id: "pr4",
    title: "Glassmorphism Tiers",
    slug: "glassmorphism-tiers",
    description: "Frosted glass pricing cards hovering over a fluid gradient.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["pricing", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="pr-gl">
    <div class="gl-card">
      <h3>Hobby</h3>
      <div class="gl-price">$12</div>
      <ul>
        <li>1 Project</li>
        <li>Community Support</li>
      </ul>
      <button>Choose Plan</button>
    </div>
    <div class="gl-card gl-featured">
      <h3>Freelancer</h3>
      <div class="gl-price">$39</div>
      <ul>
        <li>10 Projects</li>
        <li>Email Support</li>
        <li>Custom Domains</li>
      </ul>
      <button>Choose Plan</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.pr-gl { display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; max-width: 800px; width: 100%; align-items: center; }
.gl-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 40px; text-align: center; color: #fff; width: 300px; box-shadow: 0 15px 30px rgba(0,0,0,0.1); transition: 0.3s; }
.gl-featured { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.4); transform: scale(1.05); }
.gl-card h3 { font-size: 1.5rem; font-weight: 500; margin: 0 0 10px; }
.gl-price { font-size: 3.5rem; font-weight: 800; margin-bottom: 30px; }
.gl-card ul { list-style: none; padding: 0; margin: 0 0 30px; text-align: left; line-height: 2; opacity: 0.9; }
.gl-card button { width: 100%; padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.3); background: transparent; color: #fff; font-weight: 600; cursor: pointer; transition: 0.2s; }
.gl-featured button { background: #fff; color: #8b5cf6; border: none; }
.gl-card button:hover { background: rgba(255,255,255,0.2); }
.gl-featured button:hover { background: #f8fafc; }
@media (max-width: 700px) { .gl-featured { transform: none; } }`,
    jsCode: ``
  },

  // 5. Brutalist Pricing
  {
    _id: "pr5",
    title: "Brutalist Pricing Blocks",
    slug: "brutalist-pricing-blocks",
    description: "Massive, high-contrast structural blocks for pricing tiers.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["pricing", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-br">
  <div class="br-card">
    <div class="br-head">INDIVIDUAL</div>
    <div class="br-price">$10<span>/MO</span></div>
    <a href="#" class="br-btn">BUY NOW</a>
  </div>
  <div class="br-card br-yellow">
    <div class="br-head">TEAM</div>
    <div class="br-price">$40<span>/MO</span></div>
    <a href="#" class="br-btn">BUY NOW</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.pr-br { display: flex; flex-wrap: wrap; gap: 40px; max-width: 900px; width: 100%; justify-content: center; }
.br-card { background: #fff; border: 8px solid #000; box-shadow: 15px 15px 0 #000; padding: 40px; width: 350px; display: flex; flex-direction: column; }
.br-yellow { background: #facc15; }
.br-head { font-size: 1.5rem; font-weight: 900; border-bottom: 4px solid #000; padding-bottom: 10px; margin-bottom: 20px; letter-spacing: 2px; }
.br-price { font-size: 5rem; font-weight: 900; line-height: 1; letter-spacing: -3px; margin-bottom: 40px; }
.br-price span { font-size: 1.5rem; letter-spacing: 0; }
.br-btn { background: #000; color: #fff; text-decoration: none; font-weight: 900; font-size: 1.5rem; padding: 20px; text-align: center; border: 4px solid #000; transition: 0.1s; margin-top: auto; }
.br-btn:hover { background: #fff; color: #000; }
.br-yellow .br-btn:hover { background: #facc15; }`,
    jsCode: ``
  },

  // 6. Neumorphic Pricing
  {
    _id: "pr6",
    title: "Neumorphic Subscriptions",
    slug: "neumorphic-subscriptions",
    description: "Soft UI embossed pricing cards.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["pricing", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-neu">
  <div class="neu-card">
    <h3>Basic</h3>
    <div class="neu-price">$15</div>
    <ul>
      <li>Personal Use</li>
      <li>1 Device</li>
    </ul>
    <button class="neu-btn">Select</button>
  </div>
  <div class="neu-card">
    <h3>Premium</h3>
    <div class="neu-price">$45</div>
    <ul>
      <li>Commercial Use</li>
      <li>Unlimited Devices</li>
    </ul>
    <button class="neu-btn neu-pressed">Select</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; align-items: center; min-height: 50vh; }
.pr-neu { display: flex; gap: 50px; flex-wrap: wrap; justify-content: center; }
.neu-card { background: #e0e5ec; padding: 40px; border-radius: 30px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); width: 300px; text-align: center; }
.neu-card h3 { color: #718096; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 20px; }
.neu-price { font-size: 3.5rem; font-weight: bold; color: #4a5568; margin-bottom: 30px; text-shadow: 2px 2px 4px rgba(163,177,198,0.3); }
.neu-card ul { list-style: none; padding: 0; margin: 0 0 40px; color: #718096; line-height: 2; }
.neu-btn { width: 100%; border: none; padding: 15px; border-radius: 15px; font-weight: bold; color: #718096; cursor: pointer; transition: 0.2s; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); }
.neu-btn:active, .neu-pressed { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); color: #4a5568; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Pricing
  {
    _id: "pr7",
    title: "Dark Glow Tiers",
    slug: "dark-glow-tiers",
    description: "Deep dark UI with bright neon glowing accents for pricing.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["pricing", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-dg">
  <div class="dg-card">
    <h3>Developer</h3>
    <div class="dg-price">$19</div>
    <ul class="dg-list">
      <li>10,000 Requests/mo</li>
      <li>Community Discord</li>
    </ul>
    <button class="dg-btn">Choose Plan</button>
  </div>
  <div class="dg-card dg-active">
    <h3>Startup</h3>
    <div class="dg-price">$99</div>
    <ul class="dg-list">
      <li>1M Requests/mo</li>
      <li>Dedicated Support</li>
    </ul>
    <button class="dg-btn dg-btn-active">Choose Plan</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.pr-dg { display: flex; flex-wrap: wrap; gap: 40px; justify-content: center; max-width: 800px; width: 100%; }
.dg-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 20px; padding: 40px; width: 300px; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05); position: relative; overflow: hidden; }
.dg-active { border-color: #3b82f6; box-shadow: 0 0 30px rgba(59,130,246,0.1), inset 0 0 20px rgba(59,130,246,0.05); }
.dg-active::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #3b82f6; box-shadow: 0 0 20px #3b82f6; }
.dg-card h3 { margin: 0 0 15px; color: #94a3b8; font-size: 1.2rem; font-weight: 500; }
.dg-price { font-size: 3.5rem; font-weight: 800; color: #fff; margin-bottom: 30px; }
.dg-list { list-style: none; padding: 0; margin: 0 0 40px; color: #cbd5e1; line-height: 2; }
.dg-btn { width: 100%; background: transparent; border: 1px solid #334155; color: #f8fafc; padding: 15px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.3s; }
.dg-btn:hover { background: #1e293b; }
.dg-btn-active { background: #3b82f6; border-color: #3b82f6; box-shadow: 0 0 15px rgba(59,130,246,0.4); }
.dg-btn-active:hover { background: #2563eb; }`,
    jsCode: ``
  },

  // 8. Toggle Pricing
  {
    _id: "pr8",
    title: "Monthly/Annual Toggle Pricing",
    slug: "monthly-annual-toggle-pricing",
    description: "Pricing table with an interactive CSS-only toggle for billing cycles.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["pricing", "toggle", "switch", "interactive"],
    isPremium: true,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-tg">
  <div class="tg-controls">
    <span>Monthly</span>
    <label class="tg-switch">
      <input type="checkbox" id="billingToggle">
      <span class="tg-slider"></span>
    </label>
    <span>Annually <span class="tg-save">Save 20%</span></span>
  </div>
  <div class="tg-cards">
    <div class="tg-card">
      <h3>Pro Plan</h3>
      <div class="tg-price">
        <span class="price-mo">$29</span>
        <span class="price-yr">$23</span>
        <span class="tg-period">/mo</span>
      </div>
      <button>Subscribe</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.pr-tg { text-align: center; width: 100%; max-width: 600px; }
.tg-controls { display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 50px; font-weight: 500; color: #0f172a; }
.tg-switch { position: relative; display: inline-block; width: 60px; height: 32px; }
.tg-switch input { opacity: 0; width: 0; height: 0; }
.tg-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #cbd5e1; transition: .4s; border-radius: 32px; }
.tg-slider:before { position: absolute; content: ""; height: 24px; width: 24px; left: 4px; bottom: 4px; background-color: white; transition: .4s; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
input:checked + .tg-slider { background-color: #3b82f6; }
input:checked + .tg-slider:before { transform: translateX(28px); }
.tg-save { color: #16a34a; background: #dcfce7; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; margin-left: 5px; }
.tg-card { background: #fff; padding: 40px; border-radius: 16px; border: 1px solid #e2e8f0; max-width: 350px; margin: 0 auto; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.tg-card h3 { margin: 0 0 15px; font-size: 1.5rem; color: #0f172a; }
.tg-price { font-size: 4rem; font-weight: 800; color: #0f172a; margin-bottom: 30px; display: flex; justify-content: center; align-items: baseline; }
.price-yr { display: none; }
.tg-period { font-size: 1rem; color: #64748b; font-weight: 500; margin-left: 5px; }
.tg-card button { width: 100%; background: #0f172a; color: #fff; padding: 15px; border-radius: 8px; border: none; font-weight: bold; cursor: pointer; transition: 0.2s; }
.tg-card button:hover { background: #334155; }
/* Pure CSS state handling for demo */
body:has(#billingToggle:checked) .price-mo { display: none; }
body:has(#billingToggle:checked) .price-yr { display: inline; }`,
    jsCode: ``
  },

  // 9. Enterprise Feature Grid
  {
    _id: "pr9",
    title: "Feature Comparison Table",
    slug: "feature-comparison-table",
    description: "Detailed grid layout comparing features across different plans.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "table", "comparison", "grid"],
    isPremium: false,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-tbl-wrap">
  <table class="pr-tbl">
    <thead>
      <tr>
        <th>Features</th>
        <th>Basic</th>
        <th>Pro</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>API Access</td>
        <td>1k / day</td>
        <td>100k / day</td>
      </tr>
      <tr>
        <td>Webhooks</td>
        <td class="tbl-no">✗</td>
        <td class="tbl-yes">✓</td>
      </tr>
      <tr>
        <td>SLA Guarantee</td>
        <td class="tbl-no">✗</td>
        <td class="tbl-yes">99.9%</td>
      </tr>
    </tbody>
  </table>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.pr-tbl-wrap { width: 100%; max-width: 800px; overflow-x: auto; }
.pr-tbl { width: 100%; border-collapse: collapse; text-align: left; }
.pr-tbl th, .pr-tbl td { padding: 20px; border-bottom: 1px solid #e2e8f0; }
.pr-tbl th { background: #f8fafc; color: #0f172a; font-weight: 600; font-size: 1.1rem; }
.pr-tbl th:first-child { border-top-left-radius: 12px; }
.pr-tbl th:last-child { border-top-right-radius: 12px; }
.pr-tbl td { color: #475569; }
.pr-tbl td:first-child { font-weight: 500; color: #0f172a; }
.tbl-yes { color: #16a34a !important; font-weight: bold; }
.tbl-no { color: #94a3b8 !important; }`,
    jsCode: ``
  },

  // 10. Single Pay-What-You-Want Card
  {
    _id: "pr10",
    title: "Pay What You Want Card",
    slug: "pay-what-you-want-card",
    description: "A single clean card for custom or donation-based pricing.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "custom", "slider", "clean"],
    isPremium: false,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-pw">
  <h3>Support the Creator</h3>
  <p>Choose a fair price for the resource bundle.</p>
  <div class="pw-input-wrap">
    <span>$</span>
    <input type="number" value="15" min="5" />
  </div>
  <button class="pw-btn">Checkout</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 100px 20px; display: flex; justify-content: center; }
.pr-pw { background: #fff; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); width: 100%; max-width: 400px; text-align: center; }
.pr-pw h3 { margin: 0 0 10px; font-size: 1.5rem; color: #0f172a; }
.pr-pw p { color: #64748b; margin: 0 0 30px; }
.pw-input-wrap { display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: 800; color: #0f172a; margin-bottom: 30px; }
.pw-input-wrap input { font-family: inherit; font-size: inherit; font-weight: inherit; color: inherit; border: none; border-bottom: 2px solid #e2e8f0; width: 100px; text-align: center; background: transparent; outline: none; transition: 0.2s; }
.pw-input-wrap input:focus { border-color: #3b82f6; }
/* Remove arrows */
.pw-input-wrap input::-webkit-outer-spin-button, .pw-input-wrap input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.pw-btn { width: 100%; background: #3b82f6; color: #fff; padding: 16px; border-radius: 12px; border: none; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 12px rgba(59,130,246,0.3); }
.pw-btn:hover { background: #2563eb; transform: translateY(-2px); box-shadow: 0 6px 15px rgba(59,130,246,0.4); }`,
    jsCode: ``
  }
];
