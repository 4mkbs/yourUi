import { Design } from "./designs-data";

export const BATCH_55_DESIGNS: Design[] = [
  // 1. Classic Tier Card
  {
    _id: "prc1",
    title: "Classic Pricing Card",
    slug: "classic-pricing-card",
    description: "Standard clean pricing tier for SaaS products.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "classic", "tier", "subscription"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-c">
  <h3>Basic</h3>
  <div class="pr-c-price"><span>$</span>9<span>/mo</span></div>
  <p>Perfect for individuals starting out.</p>
  <ul class="pr-c-feat">
    <li>1 User Account</li>
    <li>10GB Storage</li>
    <li>Email Support</li>
  </ul>
  <button>Get Started</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.pr-c { width: 300px; padding: 40px 30px; background: #fff; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); text-align: center; }
.pr-c h3 { margin: 0 0 15px; color: #64748b; font-weight: 600; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px; }
.pr-c-price { font-size: 3.5rem; font-weight: 800; color: #0f172a; display: flex; justify-content: center; align-items: baseline; margin-bottom: 15px; }
.pr-c-price span { font-size: 1.5rem; color: #94a3b8; font-weight: 600; }
.pr-c p { color: #64748b; margin: 0 0 30px; font-size: 0.95rem; }
.pr-c-feat { list-style: none; padding: 0; margin: 0 0 30px; text-align: left; }
.pr-c-feat li { padding: 10px 0; color: #334155; border-bottom: 1px solid #f1f5f9; position: relative; padding-left: 25px; }
.pr-c-feat li::before { content: '✓'; position: absolute; left: 0; color: #10b981; font-weight: bold; }
.pr-c button { width: 100%; padding: 14px; background: #f1f5f9; color: #0f172a; border: none; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: 0.2s; }
.pr-c button:hover { background: #e2e8f0; }`,
    jsCode: ``
  },

  // 2. Highlighted Pro Tier Card
  {
    _id: "prc2",
    title: "Highlighted Pro Tier",
    slug: "highlighted-pro-tier",
    description: "Visually distinct 'popular' pricing tier.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "highlight", "pro", "popular"],
    isPremium: false,
    views: 34500,
    downloads: 9200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-h">
  <div class="pr-h-badge">Most Popular</div>
  <h3>Pro Plan</h3>
  <div class="pr-h-price"><span>$</span>29<span>/mo</span></div>
  <p>Everything you need for growing teams.</p>
  <ul class="pr-h-feat">
    <li>Unlimited Users</li>
    <li>1TB Storage</li>
    <li>Priority 24/7 Support</li>
    <li>Advanced Analytics</li>
  </ul>
  <button>Start Free Trial</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.pr-h { width: 320px; padding: 45px 30px 40px; background: #0f172a; color: #fff; border-radius: 16px; box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.3); text-align: center; position: relative; overflow: hidden; transform: scale(1.05); }
.pr-h-badge { position: absolute; top: 15px; left: 50%; transform: translateX(-50%); background: #3b82f6; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
.pr-h h3 { margin: 0 0 15px; color: #94a3b8; font-weight: 600; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px; }
.pr-h-price { font-size: 3.5rem; font-weight: 800; color: #fff; display: flex; justify-content: center; align-items: baseline; margin-bottom: 15px; }
.pr-h-price span { font-size: 1.5rem; color: #94a3b8; font-weight: 600; }
.pr-h p { color: #cbd5e1; margin: 0 0 30px; font-size: 0.95rem; }
.pr-h-feat { list-style: none; padding: 0; margin: 0 0 30px; text-align: left; }
.pr-h-feat li { padding: 10px 0; color: #f8fafc; border-bottom: 1px solid #1e293b; position: relative; padding-left: 25px; }
.pr-h-feat li::before { content: '✓'; position: absolute; left: 0; color: #3b82f6; font-weight: bold; }
.pr-h button { width: 100%; padding: 14px; background: #3b82f6; color: #fff; border: none; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: 0.2s; }
.pr-h button:hover { background: #2563eb; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Pricing Card
  {
    _id: "prc3",
    title: "Cyberpunk Pricing",
    slug: "cyberpunk-pricing",
    description: "Neon lit, high tech pricing card for gaming or dev tools.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["pricing", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-cy">
  <div class="pr-cy-inner">
    <h3>ELITE HACKER</h3>
    <div class="pr-cy-price">99<span>.00</span></div>
    <ul class="pr-cy-feat">
      <li>> FULL ROOT ACCESS</li>
      <li>> ZERO LOGS</li>
      <li>> DEEP WEB ROUTING</li>
    </ul>
    <button class="pr-cy-btn">INITIALIZE</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.pr-cy { width: 300px; padding: 2px; background: linear-gradient(135deg, #0ff, #f0f); clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px); }
.pr-cy-inner { background: #0a0a0a; padding: 35px 25px; clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px); text-align: center; }
.pr-cy-inner h3 { margin: 0 0 20px; color: #0ff; text-shadow: 0 0 5px #0ff; letter-spacing: 2px; font-size: 1.2rem; }
.pr-cy-price { color: #fff; font-size: 4rem; font-weight: bold; margin-bottom: 25px; text-shadow: 0 0 10px #f0f; display: flex; justify-content: center; align-items: baseline; }
.pr-cy-price span { font-size: 1.5rem; color: #f0f; }
.pr-cy-feat { list-style: none; padding: 0; margin: 0 0 35px; text-align: left; }
.pr-cy-feat li { padding: 8px 0; color: #fff; font-size: 0.9rem; }
.pr-cy-btn { width: 100%; padding: 12px; background: transparent; border: 1px solid #0ff; color: #0ff; font-family: inherit; font-weight: bold; letter-spacing: 2px; cursor: pointer; transition: 0.2s; box-shadow: inset 0 0 10px rgba(0,255,255,0); }
.pr-cy-btn:hover { background: #0ff; color: #000; box-shadow: 0 0 15px #0ff; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Pricing Card
  {
    _id: "prc4",
    title: "Glassmorphism Pricing",
    slug: "glassmorphism-pricing",
    description: "Frosted glass aesthetic resting beautifully over a moving gradient.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["pricing", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="pr-gl">
    <h3>Creator</h3>
    <div class="pr-g-price">$15<span>/mo</span></div>
    <ul class="pr-g-feat">
      <li>All standard features</li>
      <li>Custom domains</li>
      <li>Remove branding</li>
    </ul>
    <button>Choose Plan</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); }
.pr-gl { width: 300px; padding: 40px 30px; border-radius: 24px; background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.15); color: #fff; text-align: center; }
.pr-gl h3 { margin: 0 0 10px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; opacity: 0.9; }
.pr-g-price { font-size: 3.5rem; font-weight: 800; margin-bottom: 25px; }
.pr-g-price span { font-size: 1.2rem; opacity: 0.8; font-weight: 500; }
.pr-g-feat { list-style: none; padding: 0; margin: 0 0 35px; text-align: left; }
.pr-g-feat li { padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.2); position: relative; padding-left: 25px; font-size: 0.95rem; }
.pr-g-feat li::before { content: '→'; position: absolute; left: 0; opacity: 0.8; }
.pr-gl button { width: 100%; padding: 15px; background: #fff; color: #3b82f6; border: none; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s; }
.pr-gl button:hover { background: rgba(255,255,255,0.9); box-shadow: 0 0 15px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 5. Brutalist Pricing Card
  {
    _id: "prc5",
    title: "Brutalist Pricing Card",
    slug: "brutalist-pricing-card",
    description: "Thick borders, harsh shadows, and bold typography for pricing.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["pricing", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-br">
  <h3>AGENCY</h3>
  <div class="pr-b-price">$199</div>
  <p>PER MONTH</p>
  <ul>
    <li>EVERYTHING</li>
    <li>FOREVER</li>
  </ul>
  <button>BUY NOW</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e5e5; }
.pr-br { width: 280px; background: #facc15; border: 5px solid #000; box-shadow: 12px 12px 0 #000; padding: 40px 30px; text-align: center; }
.pr-br h3 { margin: 0 0 15px; font-size: 1.5rem; font-weight: 900; color: #000; text-transform: uppercase; border-bottom: 5px solid #000; padding-bottom: 10px; }
.pr-b-price { font-size: 4.5rem; font-weight: 900; color: #000; line-height: 1; letter-spacing: -3px; }
.pr-br p { margin: 5px 0 25px; font-weight: 900; font-size: 1rem; color: #000; }
.pr-br ul { list-style: none; padding: 0; margin: 0 0 30px; text-align: left; border: 3px solid #000; padding: 15px; background: #fff; }
.pr-br ul li { padding: 5px 0; font-weight: 800; font-size: 1.1rem; }
.pr-br ul li::before { content: '■ '; color: #ef4444; }
.pr-br button { width: 100%; padding: 15px; background: #000; color: #fff; border: none; font-size: 1.2rem; font-weight: 900; cursor: pointer; transition: 0.2s; }
.pr-br button:hover { background: #ef4444; }`,
    jsCode: ``
  },

  // 6. Neumorphic Pricing Card
  {
    _id: "prc6",
    title: "Neumorphic Pricing",
    slug: "neumorphic-pricing",
    description: "Soft UI frame where elements look extruded from or pressed into the background.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["pricing", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-neu">
  <h3>Startup</h3>
  <div class="pr-n-price">$49</div>
  <ul class="pr-n-feat">
    <li>5 Team Members</li>
    <li>50GB Storage</li>
    <li>Weekly Reports</li>
  </ul>
  <button class="pr-n-btn">Select Plan</button>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.pr-neu { width: 280px; padding: 40px 30px; border-radius: 24px; background: #e0e5ec; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); text-align: center; }
.pr-neu h3 { margin: 0 0 20px; color: #718096; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 1px; }
.pr-n-price { width: 120px; height: 120px; margin: 0 auto 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 2.5rem; font-weight: bold; color: #2d3748; background: #e0e5ec; box-shadow: inset 6px 6px 10px 0 rgba(163,177,198,0.7), inset -6px -6px 10px 0 rgba(255,255,255,0.8); }
.pr-n-feat { list-style: none; padding: 0; margin: 0 0 30px; text-align: center; }
.pr-n-feat li { padding: 10px 0; color: #4a5568; }
.pr-n-btn { width: 100%; padding: 15px; border: none; border-radius: 12px; background: #e0e5ec; color: #3182ce; font-weight: bold; font-size: 1.1rem; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.pr-n-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Pricing Card
  {
    _id: "prc7",
    title: "Dark Mode Glow Pricing",
    slug: "dark-mode-glow-pricing",
    description: "Deep dark card with subtle colored glowing borders.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["pricing", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-dg">
  <h3>Enterprise</h3>
  <div class="pr-d-price">Custom</div>
  <p>For large scale operations.</p>
  <ul>
    <li>Dedicated Account Manager</li>
    <li>SSO Integration</li>
    <li>Custom SLAs</li>
  </ul>
  <button>Contact Sales</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #020617; }
.pr-dg { width: 300px; padding: 40px 30px; background: #0f172a; border-radius: 20px; position: relative; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); z-index: 1; text-align: center; }
.pr-dg::before { content: ''; position: absolute; inset: -2px; border-radius: 22px; background: linear-gradient(135deg, #3b82f6, #ec4899); z-index: -1; opacity: 0.5; transition: 0.3s; }
.pr-dg:hover::before { opacity: 1; filter: blur(5px); }
.pr-dg h3 { margin: 0 0 15px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-size: 0.9rem; }
.pr-d-price { font-size: 3rem; font-weight: 800; color: #f8fafc; margin-bottom: 10px; }
.pr-dg p { margin: 0 0 30px; color: #64748b; font-size: 0.9rem; }
.pr-dg ul { list-style: none; padding: 0; margin: 0 0 35px; text-align: left; }
.pr-dg ul li { padding: 10px 0; color: #cbd5e1; border-bottom: 1px solid #1e293b; font-size: 0.95rem; }
.pr-dg button { width: 100%; padding: 14px; background: transparent; color: #fff; border: 2px solid #3b82f6; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.3s; }
.pr-dg button:hover { background: #3b82f6; box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }`,
    jsCode: ``
  },

  // 8. Minimal Split Pricing Card
  {
    _id: "prc8",
    title: "Minimal Split Pricing",
    slug: "minimal-split-pricing",
    description: "Horizontal layout dividing price and features.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["pricing", "split", "horizontal", "clean"],
    isPremium: true,
    views: 29800,
    downloads: 7500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-sp">
  <div class="pr-s-left">
    <h3>Lifetime</h3>
    <div class="pr-s-price">$299</div>
    <p>Pay once, use forever.</p>
    <button>Buy Now</button>
  </div>
  <div class="pr-s-right">
    <h4>What's included:</h4>
    <ul>
      <li>All Premium Features</li>
      <li>Lifetime Updates</li>
      <li>Priority Email Support</li>
      <li>Access to Beta Features</li>
    </ul>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f1f5f9; }
.pr-sp { display: flex; max-width: 600px; width: 90%; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); }
.pr-s-left { padding: 40px; background: #0f172a; color: #fff; width: 40%; text-align: center; display: flex; flex-direction: column; justify-content: center; }
.pr-s-left h3 { margin: 0 0 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-size: 0.9rem; }
.pr-s-price { font-size: 3.5rem; font-weight: 800; margin-bottom: 10px; }
.pr-s-left p { margin: 0 0 25px; color: #cbd5e1; font-size: 0.9rem; }
.pr-s-left button { padding: 12px; background: #3b82f6; color: #fff; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.pr-s-left button:hover { background: #2563eb; }
.pr-s-right { padding: 40px; width: 60%; }
.pr-s-right h4 { margin: 0 0 20px; color: #0f172a; font-size: 1.1rem; }
.pr-s-right ul { list-style: none; padding: 0; margin: 0; }
.pr-s-right ul li { padding: 10px 0; color: #475569; position: relative; padding-left: 25px; }
.pr-s-right ul li::before { content: '✓'; position: absolute; left: 0; color: #10b981; font-weight: bold; }
@media (max-width: 600px) { .pr-sp { flex-direction: column; } .pr-s-left, .pr-s-right { width: 100%; box-sizing: border-box; } }`,
    jsCode: ``
  },

  // 9. Micro-Interaction Pricing Card
  {
    _id: "prc9",
    title: "Hover Reveal Pricing",
    slug: "hover-reveal-pricing",
    description: "Compact card that expands to reveal features on hover.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "hover", "animation", "interactive"],
    isPremium: true,
    views: 32200,
    downloads: 8100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-hv">
  <div class="pr-hv-head">
    <h3>Standard</h3>
    <div class="pr-hv-price">$15<span>/mo</span></div>
  </div>
  <div class="pr-hv-body">
    <ul>
      <li>Up to 10 Projects</li>
      <li>Basic Analytics</li>
      <li>24hr Support Response</li>
    </ul>
    <button>Choose</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e2e8f0; }
.pr-hv { width: 280px; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); cursor: pointer; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.pr-hv-head { padding: 30px; text-align: center; background: #f8fafc; border-bottom: 1px solid #e2e8f0; transition: 0.4s; }
.pr-hv h3 { margin: 0 0 10px; color: #64748b; font-size: 1rem; }
.pr-hv-price { font-size: 2.5rem; font-weight: 800; color: #0f172a; }
.pr-hv-price span { font-size: 1rem; color: #94a3b8; }
.pr-hv-body { max-height: 0; opacity: 0; padding: 0 30px; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.pr-hv:hover { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); transform: translateY(-5px); }
.pr-hv:hover .pr-hv-body { max-height: 300px; opacity: 1; padding: 20px 30px 30px; }
.pr-hv:hover .pr-hv-head { background: #3b82f6; }
.pr-hv:hover .pr-hv-head h3, .pr-hv:hover .pr-hv-head .pr-hv-price, .pr-hv:hover .pr-hv-head span { color: #fff; }
.pr-hv ul { list-style: none; padding: 0; margin: 0 0 20px; }
.pr-hv ul li { padding: 8px 0; color: #475569; font-size: 0.9rem; text-align: center; }
.pr-hv button { width: 100%; padding: 12px; background: #0f172a; color: #fff; border: none; border-radius: 8px; font-weight: 600; }`,
    jsCode: ``
  },

  // 10. Stacked Badge Pricing
  {
    _id: "prc10",
    title: "Stacked Badge Pricing",
    slug: "stacked-badge-pricing",
    description: "Clean layout with a top badge and separated feature blocks.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "stacked", "badge", "clean"],
    isPremium: false,
    views: 25100,
    downloads: 5800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-st">
  <div class="pr-st-tag">Best Value</div>
  <div class="pr-st-top">
    <h3>Business</h3>
    <div class="pr-st-price">$99/mo</div>
  </div>
  <div class="pr-st-mid">
    <p>Advanced features for scaling businesses.</p>
  </div>
  <button>Upgrade Now</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.pr-st { width: 280px; padding: 30px; background: #fff; border-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; position: relative; }
.pr-st-tag { position: absolute; top: -12px; right: 20px; background: #10b981; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3); }
.pr-st-top { margin-bottom: 20px; }
.pr-st-top h3 { margin: 0 0 5px; color: #0f172a; font-size: 1.4rem; }
.pr-st-price { font-size: 1.8rem; font-weight: 800; color: #3b82f6; }
.pr-st-mid { background: #f1f5f9; padding: 15px; border-radius: 10px; margin-bottom: 25px; }
.pr-st-mid p { margin: 0; color: #475569; font-size: 0.9rem; line-height: 1.5; }
.pr-st button { width: 100%; padding: 14px; background: #0f172a; color: #fff; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.pr-st button:hover { background: #1e293b; }`,
    jsCode: ``
  }
];
