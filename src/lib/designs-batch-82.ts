import { Design } from "./designs-data";

export const BATCH_82_DESIGNS: Design[] = [
  // 1. Classic 3-Tier Pricing
  {
    _id: "pr1",
    title: "Classic 3-Tier Pricing",
    slug: "classic-3-tier-pricing",
    description: "Standard three-column pricing layout with the middle tier highlighted.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "tiers", "classic", "subscription"],
    isPremium: false,
    views: 65200,
    downloads: 18500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-cl">
  <h2>Simple, transparent pricing</h2>
  <div class="pr-grid">
    <div class="pr-card">
      <h3>Basic</h3>
      <div class="pr-price"><span>$</span>9<span>/mo</span></div>
      <ul>
        <li>1 User</li>
        <li>10GB Storage</li>
        <li>Basic Support</li>
      </ul>
      <a href="#" class="pr-btn">Get Started</a>
    </div>
    <div class="pr-card pr-popular">
      <div class="pr-badge">Most Popular</div>
      <h3>Pro</h3>
      <div class="pr-price"><span>$</span>29<span>/mo</span></div>
      <ul>
        <li>5 Users</li>
        <li>50GB Storage</li>
        <li>Priority Support</li>
        <li>Advanced Analytics</li>
      </ul>
      <a href="#" class="pr-btn">Get Started</a>
    </div>
    <div class="pr-card">
      <h3>Enterprise</h3>
      <div class="pr-price"><span>$</span>99<span>/mo</span></div>
      <ul>
        <li>Unlimited Users</li>
        <li>1TB Storage</li>
        <li>24/7 Dedicated Support</li>
        <li>Custom Integrations</li>
      </ul>
      <a href="#" class="pr-btn">Contact Us</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.pr-cl { max-width: 1100px; width: 100%; text-align: center; }
.pr-cl h2 { font-size: 2.5rem; color: #0f172a; margin: 0 0 50px; }
.pr-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; align-items: center; }
.pr-card { background: #fff; padding: 40px; border-radius: 16px; border: 1px solid #e2e8f0; position: relative; transition: 0.3s; }
.pr-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
.pr-popular { border-color: #3b82f6; border-width: 2px; box-shadow: 0 20px 40px rgba(59,130,246,0.1); transform: scale(1.05); z-index: 10; }
.pr-popular:hover { transform: scale(1.05) translateY(-5px); }
.pr-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #3b82f6; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; text-transform: uppercase; }
.pr-card h3 { margin: 0 0 20px; font-size: 1.2rem; color: #64748b; font-weight: 600; text-transform: uppercase; }
.pr-price { font-size: 3.5rem; font-weight: 800; color: #0f172a; margin-bottom: 30px; display: flex; justify-content: center; align-items: flex-start; }
.pr-price span:first-child { font-size: 1.5rem; margin-top: 10px; }
.pr-price span:last-child { font-size: 1rem; color: #64748b; margin-top: auto; margin-bottom: 15px; font-weight: 500; }
.pr-card ul { list-style: none; padding: 0; margin: 0 0 30px; text-align: left; }
.pr-card li { padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569; display: flex; align-items: center; }
.pr-card li::before { content: '✓'; color: #10b981; font-weight: bold; margin-right: 10px; }
.pr-btn { display: block; padding: 12px; border-radius: 8px; font-weight: 600; text-decoration: none; transition: 0.2s; background: #f1f5f9; color: #0f172a; }
.pr-btn:hover { background: #e2e8f0; }
.pr-popular .pr-btn { background: #3b82f6; color: #fff; }
.pr-popular .pr-btn:hover { background: #2563eb; }
@media (max-width: 900px) { .pr-popular { transform: none; } .pr-popular:hover { transform: translateY(-5px); } }`,
    jsCode: ``
  },

  // 2. Minimal Clean Pricing
  {
    _id: "pr2",
    title: "Minimal Clean Pricing",
    slug: "minimal-clean-pricing",
    description: "Ultra-minimal, typography-focused pricing layout.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "minimal", "clean", "typography"],
    isPremium: false,
    views: 48100,
    downloads: 13400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-mn">
  <div class="mn-card">
    <div class="mn-top">
      <h3>Standard</h3>
      <div class="mn-price">$15</div>
    </div>
    <p>Everything you need to get started.</p>
    <a href="#" class="mn-btn">Select</a>
  </div>
  <div class="mn-card">
    <div class="mn-top">
      <h3>Premium</h3>
      <div class="mn-price">$45</div>
    </div>
    <p>Advanced features for growing teams.</p>
    <a href="#" class="mn-btn mn-active">Select</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.pr-mn { display: flex; gap: 40px; max-width: 800px; width: 100%; flex-wrap: wrap; }
.mn-card { flex: 1; min-width: 300px; padding: 40px; border: 1px solid #e5e5e5; transition: 0.3s; }
.mn-card:hover { border-color: #000; }
.mn-top { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #e5e5e5; padding-bottom: 20px; margin-bottom: 20px; }
.mn-card h3 { margin: 0; font-size: 1.5rem; color: #000; font-weight: 500; }
.mn-price { font-size: 2rem; font-weight: 700; color: #000; }
.mn-card p { color: #666; margin: 0 0 40px; font-size: 1.1rem; }
.mn-btn { display: inline-block; padding: 12px 30px; border: 1px solid #000; color: #000; text-decoration: none; font-weight: 500; transition: 0.2s; }
.mn-btn:hover, .mn-active { background: #000; color: #fff; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Pricing
  {
    _id: "pr3",
    title: "Cyberpunk Pricing",
    slug: "cyberpunk-pricing",
    description: "Hacker-themed pricing table with neon accents.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["pricing", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 41200,
    downloads: 10200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-cy">
  <div class="cy-card">
    <div class="cy-head">ACCESS: LEVEL_1</div>
    <div class="cy-price">0.05 BTC</div>
    <ul class="cy-list">
      <li>> PROXY_NETWORKS</li>
      <li>> BASIC_ENCRYPTION</li>
    </ul>
    <button class="cy-btn">INITIALIZE</button>
  </div>
  <div class="cy-card cy-glow">
    <div class="cy-head">ACCESS: LEVEL_99</div>
    <div class="cy-price">0.25 BTC</div>
    <ul class="cy-list">
      <li>> FULL_MAINFRAME_ACCESS</li>
      <li>> MILITARY_GRADE_ENCRYPTION</li>
      <li>> UNTRACEABLE_ROUTE</li>
    </ul>
    <button class="cy-btn cy-active">EXECUTE</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; }
.pr-cy { display: flex; gap: 40px; max-width: 900px; width: 100%; flex-wrap: wrap; justify-content: center; }
.cy-card { background: rgba(0,20,0,0.8); border: 1px solid #0f0; padding: 30px; width: 300px; position: relative; display: flex; flex-direction: column; }
.cy-glow { border-color: #f0f; box-shadow: 0 0 15px rgba(255,0,255,0.2); }
.cy-head { color: #0f0; font-weight: bold; border-bottom: 1px dashed #0f0; padding-bottom: 10px; margin-bottom: 20px; letter-spacing: 2px; }
.cy-glow .cy-head { color: #f0f; border-color: #f0f; text-shadow: 0 0 5px #f0f; }
.cy-price { color: #fff; font-size: 2rem; font-weight: bold; margin-bottom: 20px; text-shadow: 2px 2px 0 #000; }
.cy-list { list-style: none; padding: 0; margin: 0 0 30px; flex-grow: 1; }
.cy-list li { color: #0aa; margin-bottom: 10px; font-size: 0.9rem; }
.cy-btn { background: transparent; border: 1px solid #0f0; color: #0f0; padding: 10px; font-family: inherit; font-weight: bold; cursor: pointer; transition: 0.2s; margin-top: auto; }
.cy-btn:hover { background: #0f0; color: #000; box-shadow: 0 0 10px #0f0; }
.cy-active { border-color: #f0f; color: #f0f; }
.cy-active:hover { background: #f0f; color: #000; box-shadow: 0 0 10px #f0f; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Pricing
  {
    _id: "pr4",
    title: "Glassmorphism Pricing",
    slug: "glassmorphism-pricing",
    description: "Frosted glass pricing cards hovering over a gradient background.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["pricing", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 59100,
    downloads: 16900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="pr-gl">
    <div class="gl-card">
      <h3>Starter</h3>
      <div class="gl-price">$12<span>/m</span></div>
      <p>Perfect for side projects.</p>
      <a href="#" class="gl-btn">Choose Plan</a>
    </div>
    <div class="gl-card gl-featured">
      <h3>Professional</h3>
      <div class="gl-price">$32<span>/m</span></div>
      <p>For dedicated creators.</p>
      <a href="#" class="gl-btn gl-active">Choose Plan</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.pr-gl { display: flex; gap: 30px; max-width: 800px; width: 100%; justify-content: center; flex-wrap: wrap; }
.gl-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 40px; text-align: center; width: 300px; color: #fff; transition: 0.3s; }
.gl-featured { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.4); transform: scale(1.05); }
.gl-card:hover { transform: translateY(-10px); }
.gl-featured:hover { transform: scale(1.05) translateY(-10px); }
.gl-card h3 { margin: 0 0 15px; font-weight: 500; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9; }
.gl-price { font-size: 3.5rem; font-weight: 700; margin-bottom: 10px; }
.gl-price span { font-size: 1.2rem; opacity: 0.7; font-weight: normal; }
.gl-card p { margin: 0 0 30px; opacity: 0.8; }
.gl-btn { display: inline-block; padding: 12px 30px; border-radius: 30px; text-decoration: none; font-weight: 600; transition: 0.2s; border: 1px solid rgba(255,255,255,0.5); color: #fff; }
.gl-btn:hover { background: rgba(255,255,255,0.1); }
.gl-active { background: #fff; color: #8b5cf6; border-color: #fff; }
.gl-active:hover { background: rgba(255,255,255,0.9); }
@media (max-width: 700px) { .gl-featured { transform: scale(1); } .gl-featured:hover { transform: translateY(-10px); } }`,
    jsCode: ``
  },

  // 5. Brutalist Pricing
  {
    _id: "pr5",
    title: "Brutalist Pricing",
    slug: "brutalist-pricing",
    description: "Thick borders, high contrast, and aggressive typography.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["pricing", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 38500,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-br">
  <div class="br-card">
    <div class="br-head">CHEAP</div>
    <div class="br-price">$10</div>
    <div class="br-desc">YOU GET NOTHING</div>
    <a href="#" class="br-btn">BUY IT</a>
  </div>
  <div class="br-card br-main">
    <div class="br-head">EXPENSIVE</div>
    <div class="br-price">$99</div>
    <div class="br-desc">YOU GET EVERYTHING</div>
    <a href="#" class="br-btn">BUY IT</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.pr-br { display: flex; gap: 40px; max-width: 800px; width: 100%; flex-wrap: wrap; justify-content: center; }
.br-card { flex: 1; min-width: 280px; background: #fff; border: 6px solid #000; box-shadow: 12px 12px 0 #000; display: flex; flex-direction: column; padding: 30px; text-align: center; }
.br-main { background: #facc15; }
.br-head { font-size: 2rem; font-weight: 900; border-bottom: 6px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
.br-price { font-size: 5rem; font-weight: 900; line-height: 1; margin-bottom: 20px; }
.br-desc { font-size: 1.2rem; font-weight: 700; margin-bottom: 40px; flex-grow: 1; }
.br-btn { background: #000; color: #fff; text-decoration: none; font-weight: 900; font-size: 1.5rem; padding: 15px; border: 4px solid #000; transition: 0.1s; }
.br-main .br-btn { background: #fff; color: #000; }
.br-btn:active { transform: translate(4px, 4px); }`,
    jsCode: ``
  },

  // 6. Neumorphic Pricing
  {
    _id: "pr6",
    title: "Neumorphic Pricing",
    slug: "neumorphic-pricing",
    description: "Soft UI cards with pushed/pulled states for tiers.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["pricing", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 42200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-neu">
  <div class="neu-card">
    <h3>Basic</h3>
    <div class="neu-price">$9</div>
    <a href="#" class="neu-btn">Select</a>
  </div>
  <div class="neu-card neu-active">
    <h3>Pro</h3>
    <div class="neu-price">$29</div>
    <a href="#" class="neu-btn neu-btn-active">Select</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.pr-neu { display: flex; gap: 50px; max-width: 800px; width: 100%; flex-wrap: wrap; justify-content: center; }
.neu-card { background: #e0e5ec; padding: 40px; border-radius: 30px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); width: 280px; text-align: center; }
.neu-active { box-shadow: inset 12px 12px 24px rgba(163,177,198,0.6), inset -12px -12px 24px rgba(255,255,255,0.5); }
.neu-card h3 { color: #718096; font-size: 1.5rem; margin: 0 0 10px; }
.neu-price { color: #2d3748; font-size: 3rem; font-weight: bold; margin-bottom: 30px; }
.neu-btn { display: inline-block; padding: 15px 40px; border-radius: 30px; text-decoration: none; font-weight: bold; color: #4a5568; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.neu-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
.neu-btn-active { color: #3182ce; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Pricing
  {
    _id: "pr7",
    title: "Dark Mode Glow Pricing",
    slug: "dark-mode-glow-pricing",
    description: "Deep dark layout with glowing neon accents for the premium tier.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["pricing", "dark", "glow", "gradient"],
    isPremium: true,
    views: 49200,
    downloads: 13200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-dg">
  <div class="dg-card">
    <h3>Hobby</h3>
    <div class="dg-price">$0</div>
    <ul class="dg-list">
      <li>Community Support</li>
      <li>Basic Limits</li>
    </ul>
    <a href="#" class="dg-btn">Deploy Now</a>
  </div>
  <div class="dg-card dg-glow">
    <h3>Pro</h3>
    <div class="dg-price">$20</div>
    <ul class="dg-list">
      <li>Priority Support</li>
      <li>Extended Limits</li>
    </ul>
    <a href="#" class="dg-btn dg-active">Deploy Now</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.pr-dg { display: flex; gap: 40px; max-width: 800px; width: 100%; flex-wrap: wrap; justify-content: center; }
.dg-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 20px; padding: 40px; width: 300px; position: relative; transition: 0.3s; }
.dg-card:hover { transform: translateY(-5px); border-color: #334155; }
.dg-glow { border-color: #8b5cf6; box-shadow: 0 10px 40px rgba(139,92,246,0.15); }
.dg-glow:hover { border-color: #a78bfa; box-shadow: 0 15px 50px rgba(139,92,246,0.25); }
.dg-card h3 { color: #94a3b8; font-size: 1.2rem; font-weight: 500; margin: 0 0 15px; text-transform: uppercase; letter-spacing: 1px; }
.dg-price { color: #f8fafc; font-size: 3.5rem; font-weight: 800; margin-bottom: 20px; line-height: 1; }
.dg-list { list-style: none; padding: 0; margin: 0 0 40px; }
.dg-list li { color: #cbd5e1; padding: 10px 0; border-bottom: 1px solid #1e293b; font-size: 0.95rem; }
.dg-btn { display: block; text-align: center; padding: 12px; border-radius: 8px; color: #f8fafc; text-decoration: none; font-weight: 600; background: #1e293b; transition: 0.2s; }
.dg-btn:hover { background: #334155; }
.dg-active { background: linear-gradient(135deg, #6d28d9, #3b82f6); border: none; }
.dg-active:hover { box-shadow: 0 4px 15px rgba(59,130,246,0.4); background: linear-gradient(135deg, #7c3aed, #60a5fa); }`,
    jsCode: ``
  },

  // 8. Single Plan Card
  {
    _id: "pr8",
    title: "Single Plan Card",
    slug: "single-plan-card",
    description: "A wide, horizontal card for when you only have one simple pricing tier.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["pricing", "single", "card", "horizontal"],
    isPremium: false,
    views: 39500,
    downloads: 11000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-sg">
  <div class="sg-left">
    <h3>Lifetime Access</h3>
    <p>Pay once, use forever. Get access to all current and future components.</p>
    <ul>
      <li>✓ 800+ Components</li>
      <li>✓ Free Updates</li>
      <li>✓ Commercial License</li>
    </ul>
  </div>
  <div class="sg-right">
    <div class="sg-price">$149</div>
    <span>One-time payment</span>
    <a href="#" class="sg-btn">Get Access Now</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 100px 20px; display: flex; justify-content: center; }
.pr-sg { display: flex; background: #fff; max-width: 800px; width: 100%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
.sg-left { padding: 50px; flex: 2; }
.sg-left h3 { margin: 0 0 10px; font-size: 1.8rem; color: #0f172a; }
.sg-left p { color: #64748b; font-size: 1.1rem; margin: 0 0 30px; line-height: 1.6; }
.sg-left ul { list-style: none; padding: 0; margin: 0; }
.sg-left li { color: #475569; padding: 5px 0; font-weight: 500; }
.sg-right { padding: 50px; flex: 1; background: #f8fafc; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; border-left: 1px solid #e2e8f0; }
.sg-price { font-size: 3rem; font-weight: 800; color: #0f172a; line-height: 1; }
.sg-right span { color: #64748b; font-size: 0.9rem; margin: 10px 0 30px; display: block; }
.sg-btn { display: inline-block; padding: 15px 30px; background: #2563eb; color: #fff; text-decoration: none; border-radius: 8px; font-weight: bold; transition: 0.2s; width: 100%; box-sizing: border-box; }
.sg-btn:hover { background: #1d4ed8; }
@media (max-width: 600px) { .pr-sg { flex-direction: column; } .sg-right { border-left: none; border-top: 1px solid #e2e8f0; } }`,
    jsCode: ``
  },

  // 9. Split Feature Pricing
  {
    _id: "pr9",
    title: "Split Feature Pricing",
    slug: "split-feature-pricing",
    description: "Pricing details on the left, feature list on the right.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "split", "layout", "clean"],
    isPremium: false,
    views: 37800,
    downloads: 9600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-sf">
  <div class="sf-price-area">
    <h3>Pro Plan</h3>
    <div class="sf-price">$49<span>/mo</span></div>
    <a href="#" class="sf-btn">Subscribe</a>
  </div>
  <div class="sf-feat-area">
    <h4>What's included:</h4>
    <div class="sf-grid">
      <span>Unlimited Projects</span>
      <span>API Access</span>
      <span>Custom Domains</span>
      <span>24/7 Support</span>
      <span>SSO</span>
      <span>Advanced Analytics</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.pr-sf { display: flex; max-width: 900px; width: 100%; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; }
.sf-price-area { padding: 40px; background: #f8fafc; flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; }
.sf-price-area h3 { margin: 0 0 10px; font-size: 1.5rem; color: #0f172a; }
.sf-price { font-size: 3rem; font-weight: 800; color: #0f172a; margin-bottom: 20px; }
.sf-price span { font-size: 1.2rem; font-weight: normal; color: #64748b; }
.sf-btn { display: inline-block; padding: 12px 24px; background: #0f172a; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 600; transition: 0.2s; }
.sf-btn:hover { background: #1e293b; }
.sf-feat-area { padding: 40px; flex: 2; }
.sf-feat-area h4 { margin: 0 0 20px; font-size: 1.1rem; color: #475569; }
.sf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.sf-grid span { color: #0f172a; display: flex; align-items: center; font-weight: 500; }
.sf-grid span::before { content: '•'; color: #3b82f6; margin-right: 10px; font-size: 1.5rem; }
@media (max-width: 700px) { .pr-sf { flex-direction: column; } .sf-grid { grid-template-columns: 1fr; } }`,
    jsCode: ``
  },

  // 10. Minimalist Tab Pricing
  {
    _id: "pr10",
    title: "Minimalist Switch Pricing",
    slug: "minimalist-switch-pricing",
    description: "Simple pricing cards focusing on pure typography.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "minimal", "cards", "clean"],
    isPremium: true,
    views: 45400,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-ms">
  <div class="ms-card">
    <div class="ms-head">Starter</div>
    <div class="ms-price">$0</div>
    <div class="ms-desc">Free forever. Essential features.</div>
    <a href="#" class="ms-btn">Get Started</a>
  </div>
  <div class="ms-card ms-highlight">
    <div class="ms-head">Growth</div>
    <div class="ms-price">$29</div>
    <div class="ms-desc">For scaling teams. Priority support.</div>
    <a href="#" class="ms-btn">Start Free Trial</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; padding: 100px 20px; display: flex; justify-content: center; }
.pr-ms { display: flex; gap: 30px; max-width: 700px; width: 100%; flex-wrap: wrap; }
.ms-card { flex: 1; min-width: 250px; background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); border: 1px solid #f0f0f0; transition: transform 0.2s; }
.ms-card:hover { transform: translateY(-4px); }
.ms-highlight { border: 2px solid #111; box-shadow: 0 8px 15px rgba(0,0,0,0.05); }
.ms-head { font-size: 1.1rem; color: #666; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 20px; }
.ms-highlight .ms-head { color: #111; }
.ms-price { font-size: 3.5rem; font-weight: 800; color: #111; margin-bottom: 10px; line-height: 1; }
.ms-desc { color: #666; line-height: 1.5; margin-bottom: 30px; height: 48px; }
.ms-btn { display: block; text-align: center; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 600; transition: 0.2s; background: #f4f4f4; color: #111; }
.ms-btn:hover { background: #e5e5e5; }
.ms-highlight .ms-btn { background: #111; color: #fff; }
.ms-highlight .ms-btn:hover { background: #000; }`,
    jsCode: ``
  }
];
