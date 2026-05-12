import { Design } from "./designs-data";

export const BATCH_73_DESIGNS: Design[] = [
  // 1. Classic 3-Tier Grid
  {
    _id: "pr1",
    title: "Classic 3-Tier Pricing",
    slug: "classic-3-tier-pricing",
    description: "Standard clean SaaS pricing layout with a highlighted middle tier.",
    category: "Pricing Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "saas", "classic", "tiers"],
    isPremium: false,
    views: 51200,
    downloads: 14500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-cl">
  <div class="pr-c-card">
    <div class="pr-c-head">
      <h3>Basic</h3>
      <div class="pr-c-price">$9<span>/mo</span></div>
    </div>
    <ul class="pr-c-features">
      <li>1 User</li>
      <li>10 Projects</li>
      <li>Basic Support</li>
    </ul>
    <button class="pr-c-btn">Get Started</button>
  </div>
  <div class="pr-c-card pr-c-popular">
    <div class="pr-c-badge">Most Popular</div>
    <div class="pr-c-head">
      <h3>Pro</h3>
      <div class="pr-c-price">$29<span>/mo</span></div>
    </div>
    <ul class="pr-c-features">
      <li>5 Users</li>
      <li>Unlimited Projects</li>
      <li>Priority Support</li>
      <li>Advanced Analytics</li>
    </ul>
    <button class="pr-c-btn pr-c-btn-primary">Get Started</button>
  </div>
  <div class="pr-c-card">
    <div class="pr-c-head">
      <h3>Enterprise</h3>
      <div class="pr-c-price">$99<span>/mo</span></div>
    </div>
    <ul class="pr-c-features">
      <li>Unlimited Users</li>
      <li>Unlimited Projects</li>
      <li>24/7 Phone Support</li>
      <li>Custom Integrations</li>
    </ul>
    <button class="pr-c-btn">Contact Sales</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 80px 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pr-cl { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; max-width: 1100px; width: 100%; align-items: center; }
.pr-c-card { background: #fff; padding: 40px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); text-align: center; position: relative; display: flex; flex-direction: column; height: 100%; }
.pr-c-popular { border-color: #3b82f6; box-shadow: 0 20px 25px -5px rgba(59,130,246,0.1), 0 10px 10px -5px rgba(59,130,246,0.04); transform: scale(1.05); z-index: 1; }
.pr-c-badge { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #3b82f6; color: #fff; padding: 5px 15px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
.pr-c-head h3 { margin: 0 0 15px; color: #64748b; font-size: 1.2rem; font-weight: 500; }
.pr-c-price { font-size: 3rem; font-weight: 800; color: #0f172a; margin-bottom: 30px; }
.pr-c-price span { font-size: 1.1rem; color: #94a3b8; font-weight: 500; }
.pr-c-features { list-style: none; padding: 0; margin: 0 0 40px; flex-grow: 1; }
.pr-c-features li { padding: 12px 0; color: #475569; border-bottom: 1px solid #f1f5f9; }
.pr-c-features li:last-child { border: none; }
.pr-c-btn { width: 100%; padding: 15px; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: 0.3s; background: #f1f5f9; color: #0f172a; border: none; }
.pr-c-btn:hover { background: #e2e8f0; }
.pr-c-btn-primary { background: #3b82f6; color: #fff; }
.pr-c-btn-primary:hover { background: #2563eb; box-shadow: 0 4px 12px rgba(37,99,235,0.3); }
@media (max-width: 900px) { .pr-c-popular { transform: none; } }`,
    jsCode: ``
  },

  // 2. Minimal Clean Pricing
  {
    _id: "pr2",
    title: "Minimal Clean Pricing",
    slug: "minimal-clean-pricing",
    description: "Ultra-minimal, distraction-free pricing layout focusing on typography.",
    category: "Pricing Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "minimal", "clean", "typography"],
    isPremium: false,
    views: 42500,
    downloads: 11200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-mn">
  <div class="pr-m-card">
    <div class="pr-m-top">
      <h2>Starter</h2>
      <p>Perfect for side projects.</p>
    </div>
    <div class="pr-m-price">Free</div>
    <button class="pr-m-btn">Sign Up</button>
  </div>
  <div class="pr-m-card">
    <div class="pr-m-top">
      <h2>Professional</h2>
      <p>Everything you need for growth.</p>
    </div>
    <div class="pr-m-price">$49<span>/mo</span></div>
    <button class="pr-m-btn pr-m-btn-dark">Upgrade to Pro</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; padding: 100px 20px; display: flex; justify-content: center; }
.pr-mn { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 50px; max-width: 800px; width: 100%; }
.pr-m-card { display: flex; flex-direction: column; }
.pr-m-top { margin-bottom: 40px; border-bottom: 2px solid #111; padding-bottom: 20px; }
.pr-m-top h2 { font-size: 2rem; margin: 0 0 10px; color: #111; letter-spacing: -1px; }
.pr-m-top p { margin: 0; color: #666; font-size: 1.1rem; }
.pr-m-price { font-size: 4rem; font-weight: 300; color: #111; margin-bottom: 40px; letter-spacing: -2px; }
.pr-m-price span { font-size: 1.2rem; color: #999; }
.pr-m-btn { margin-top: auto; padding: 20px; border: 1px solid #111; background: transparent; color: #111; font-size: 1.1rem; cursor: pointer; transition: 0.3s; }
.pr-m-btn:hover { background: #f4f4f4; }
.pr-m-btn-dark { background: #111; color: #fff; }
.pr-m-btn-dark:hover { background: #000; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }`,
    jsCode: ``
  },

  // 3. Cyberpunk Pricing
  {
    _id: "pr3",
    title: "Cyberpunk Pricing",
    slug: "cyberpunk-pricing",
    description: "Hacker aesthetic pricing with neon borders and monospace fonts.",
    category: "Pricing Cards",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["pricing", "cyberpunk", "neon", "hacker"],
    isPremium: true,
    views: 36500,
    downloads: 9800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-cy">
  <div class="cy-card">
    <div class="cy-head">ACCESS_LEVEL: 1</div>
    <div class="cy-price">0.05 BTC</div>
    <ul class="cy-list">
      <li>> Standard Encryption</li>
      <li>> 1TB Secure Storage</li>
      <li>> Forum Access</li>
    </ul>
    <button class="cy-btn">[ INITIATE ]</button>
  </div>
  <div class="cy-card cy-active">
    <div class="cy-head">ACCESS_LEVEL: MAX</div>
    <div class="cy-price">0.15 BTC</div>
    <ul class="cy-list">
      <li>> Military Encryption</li>
      <li>> Unlimited Storage</li>
      <li>> Direct Node Access</li>
    </ul>
    <button class="cy-btn cy-btn-active">[ OVERRIDE ]</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 80px 20px; display: flex; justify-content: center; }
.pr-cy { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; max-width: 800px; width: 100%; }
.cy-card { background: rgba(0,20,0,0.8); border: 1px solid #0f0; padding: 40px; position: relative; display: flex; flex-direction: column; }
.cy-active { border-color: #f0f; box-shadow: 0 0 20px rgba(255,0,255,0.2); }
.cy-head { color: #0f0; font-weight: bold; border-bottom: 1px dashed #0f0; padding-bottom: 10px; margin-bottom: 30px; letter-spacing: 2px; }
.cy-active .cy-head { color: #f0f; border-color: #f0f; }
.cy-price { font-size: 2.5rem; color: #fff; text-shadow: 0 0 10px #fff; margin-bottom: 30px; }
.cy-list { list-style: none; padding: 0; margin: 0 0 40px; flex-grow: 1; }
.cy-list li { color: #0ff; margin-bottom: 15px; text-shadow: 0 0 2px #0ff; }
.cy-btn { padding: 15px; background: transparent; border: 1px solid #0f0; color: #0f0; cursor: pointer; font-family: inherit; font-size: 1.2rem; transition: 0.2s; font-weight: bold; }
.cy-btn:hover { background: rgba(0,255,0,0.2); text-shadow: 0 0 5px #0f0; }
.cy-btn-active { border-color: #f0f; color: #f0f; background: rgba(255,0,255,0.1); }
.cy-btn-active:hover { background: rgba(255,0,255,0.3); text-shadow: 0 0 5px #f0f; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Pricing
  {
    _id: "pr4",
    title: "Glassmorphism Pricing",
    slug: "glassmorphism-pricing",
    description: "Frosted glass cards over a vibrant gradient background.",
    category: "Pricing Cards",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["pricing", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 48100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="pr-gl">
    <div class="gl-card">
      <h3>Hobby</h3>
      <div class="gl-price">$12</div>
      <ul>
        <li>Up to 5 Projects</li>
        <li>Community Support</li>
        <li>Basic Analytics</li>
      </ul>
      <button class="gl-btn">Choose Hobby</button>
    </div>
    <div class="gl-card gl-featured">
      <h3>Studio</h3>
      <div class="gl-price">$48</div>
      <ul>
        <li>Unlimited Projects</li>
        <li>Priority Support</li>
        <li>Advanced Analytics</li>
      </ul>
      <button class="gl-btn gl-btn-white">Choose Studio</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.pr-gl { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; max-width: 800px; width: 100%; align-items: center; }
.gl-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 40px; color: #fff; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: 0.3s; }
.gl-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.4); }
.gl-featured { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.5); box-shadow: 0 20px 40px rgba(0,0,0,0.2); transform: scale(1.05); }
.gl-featured:hover { transform: scale(1.05) translateY(-5px); }
.gl-card h3 { margin: 0 0 20px; font-weight: 500; font-size: 1.5rem; letter-spacing: 1px; }
.gl-price { font-size: 3.5rem; font-weight: 800; margin-bottom: 30px; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.gl-card ul { list-style: none; padding: 0; margin: 0 0 40px; }
.gl-card li { padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 1.1rem; }
.gl-card li:last-child { border: none; }
.gl-btn { width: 100%; padding: 18px; border-radius: 50px; border: 1px solid rgba(255,255,255,0.5); background: transparent; color: #fff; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: 0.3s; }
.gl-btn:hover { background: rgba(255,255,255,0.1); }
.gl-btn-white { background: #fff; color: #8b5cf6; border: none; }
.gl-btn-white:hover { background: #f8fafc; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
@media (max-width: 768px) { .gl-featured { transform: none; } .gl-featured:hover { transform: translateY(-5px); } }`,
    jsCode: ``
  },

  // 5. Brutalist Pricing
  {
    _id: "pr5",
    title: "Brutalist Pricing",
    slug: "brutalist-pricing",
    description: "Loud, high-contrast brutalist design with thick borders.",
    category: "Pricing Cards",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["pricing", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 32800,
    downloads: 7400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-br">
  <div class="br-card br-yellow">
    <h2>CHEAP</h2>
    <div class="br-price">$10</div>
    <ul>
      <li>YOU GET SOME STUFF</li>
      <li>NO SUPPORT</li>
    </ul>
    <button>BUY NOW</button>
  </div>
  <div class="br-card br-blue">
    <h2>EXPENSIVE</h2>
    <div class="br-price">$50</div>
    <ul>
      <li>YOU GET ALL THE STUFF</li>
      <li>VIP SUPPORT</li>
    </ul>
    <button>BUY NOW</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.pr-br { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 50px; max-width: 800px; width: 100%; }
.br-card { border: 6px solid #000; padding: 40px; box-shadow: 15px 15px 0 #000; transition: 0.1s; display: flex; flex-direction: column; }
.br-card:hover { transform: translate(5px, 5px); box-shadow: 10px 10px 0 #000; }
.br-yellow { background: #facc15; }
.br-blue { background: #3b82f6; color: #fff; }
.br-card h2 { font-size: 2.5rem; font-weight: 900; margin: 0 0 10px; border-bottom: 6px solid #000; padding-bottom: 10px; }
.br-blue h2 { border-color: #fff; }
.br-price { font-size: 5rem; font-weight: 900; margin-bottom: 20px; letter-spacing: -2px; }
.br-card ul { list-style: square; padding-left: 25px; margin: 0 0 40px; flex-grow: 1; font-weight: bold; font-size: 1.2rem; line-height: 2; }
.br-card button { padding: 20px; border: 6px solid #000; background: #fff; color: #000; font-size: 1.5rem; font-weight: 900; cursor: pointer; transition: 0.2s; box-shadow: 5px 5px 0 #000; }
.br-card button:hover { background: #000; color: #fff; transform: translate(2px, 2px); box-shadow: 3px 3px 0 #000; }`,
    jsCode: ``
  },

  // 6. Neumorphic Pricing
  {
    _id: "pr6",
    title: "Neumorphic Pricing",
    slug: "neumorphic-pricing",
    description: "Soft UI design with inset and extruded elements.",
    category: "Pricing Cards",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["pricing", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34300,
    downloads: 8100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-neu">
  <div class="neu-card">
    <div class="neu-icon">🌱</div>
    <h3>Seed</h3>
    <div class="neu-price">$15<span>/mo</span></div>
    <div class="neu-features">
      <p>Basic Analytics</p>
      <p>Standard Support</p>
      <p>1 Team Member</p>
    </div>
    <button class="neu-btn">Select Plan</button>
  </div>
  <div class="neu-card">
    <div class="neu-icon">🌳</div>
    <h3>Tree</h3>
    <div class="neu-price">$45<span>/mo</span></div>
    <div class="neu-features">
      <p>Advanced Analytics</p>
      <p>Priority Support</p>
      <p>5 Team Members</p>
    </div>
    <button class="neu-btn neu-btn-active">Select Plan</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.pr-neu { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 50px; max-width: 800px; width: 100%; }
.neu-card { background: #e0e5ec; padding: 40px; border-radius: 30px; box-shadow: 15px 15px 30px rgba(163,177,198,0.6), -15px -15px 30px rgba(255,255,255,0.5); text-align: center; }
.neu-icon { width: 70px; height: 70px; margin: 0 auto 20px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 2rem; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); }
.neu-card h3 { color: #4a5568; margin: 0 0 10px; font-size: 1.5rem; }
.neu-price { font-size: 3rem; font-weight: bold; color: #2d3748; margin-bottom: 30px; text-shadow: 2px 2px 4px rgba(163,177,198,0.3); }
.neu-price span { font-size: 1rem; color: #a0aec0; font-weight: normal; }
.neu-features { margin-bottom: 40px; }
.neu-features p { color: #718096; padding: 10px 0; margin: 0; font-size: 1.05rem; }
.neu-btn { width: 100%; padding: 18px; border-radius: 15px; border: none; background: #e0e5ec; color: #4a5568; font-weight: bold; font-size: 1.1rem; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.neu-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); color: #2b6cb0; }
.neu-btn-active { color: #3182ce; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Pricing
  {
    _id: "pr7",
    title: "Dark Mode Glow Pricing",
    slug: "dark-mode-glow-pricing",
    description: "Deep dark layout with glowing neon edges on the featured tier.",
    category: "Pricing Cards",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["pricing", "dark", "glow", "gradient"],
    isPremium: true,
    views: 41400,
    downloads: 11800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-dg">
  <div class="dg-card">
    <h3>Developer</h3>
    <div class="dg-price">$19<span>/mo</span></div>
    <ul>
      <li>1 API Key</li>
      <li>10k Requests/mo</li>
      <li>Community Support</li>
    </ul>
    <button class="dg-btn">Subscribe</button>
  </div>
  <div class="dg-card dg-glow">
    <div class="dg-badge">Recommended</div>
    <h3>Startup</h3>
    <div class="dg-price">$79<span>/mo</span></div>
    <ul>
      <li>5 API Keys</li>
      <li>100k Requests/mo</li>
      <li>Priority Email Support</li>
      <li>Advanced Webhooks</li>
    </ul>
    <button class="dg-btn dg-btn-active">Subscribe</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; align-items: center; }
.pr-dg { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; max-width: 800px; width: 100%; align-items: center; }
.dg-card { background: #0f172a; padding: 40px; border-radius: 20px; border: 1px solid #1e293b; position: relative; z-index: 1; transition: 0.3s; }
.dg-glow { border-color: #8b5cf6; box-shadow: 0 0 30px rgba(139,92,246,0.2); transform: scale(1.05); }
.dg-badge { position: absolute; top: -12px; right: 30px; background: #8b5cf6; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; box-shadow: 0 0 10px #8b5cf6; }
.dg-card h3 { color: #f8fafc; margin: 0 0 20px; font-weight: 500; font-size: 1.2rem; }
.dg-price { font-size: 3.5rem; font-weight: 800; color: #fff; margin-bottom: 30px; }
.dg-price span { font-size: 1rem; color: #64748b; font-weight: normal; }
.dg-card ul { list-style: none; padding: 0; margin: 0 0 40px; }
.dg-card li { padding: 12px 0; border-bottom: 1px solid #1e293b; color: #cbd5e1; display: flex; align-items: center; }
.dg-card li::before { content: '✓'; color: #8b5cf6; margin-right: 10px; font-weight: bold; }
.dg-btn { width: 100%; padding: 16px; border-radius: 10px; border: 1px solid #334155; background: transparent; color: #f8fafc; font-weight: 600; cursor: pointer; transition: 0.3s; }
.dg-btn:hover { background: #1e293b; }
.dg-btn-active { background: #8b5cf6; border-color: #8b5cf6; }
.dg-btn-active:hover { background: #7c3aed; box-shadow: 0 0 15px rgba(139,92,246,0.5); }
@media (max-width: 768px) { .dg-glow { transform: none; } }`,
    jsCode: ``
  },

  // 8. Single Product High-Converting Card
  {
    _id: "pr8",
    title: "Single Product Card",
    slug: "single-product-card",
    description: "Wide horizontal layout optimized for a single product offering.",
    category: "Pricing Cards",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["pricing", "single", "horizontal", "checkout"],
    isPremium: false,
    views: 39400,
    downloads: 10100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-sp">
  <div class="sp-left">
    <h2>Lifetime Access</h2>
    <p>Pay once, use forever. Get access to all current and future components.</p>
    <div class="sp-price">$149 <span>$299</span></div>
    <button class="sp-btn">Buy Lifetime License</button>
    <div class="sp-guarantee">30-day money-back guarantee</div>
  </div>
  <div class="sp-right">
    <h3>What's included:</h3>
    <ul>
      <li>700+ Components</li>
      <li>Figma Source Files</li>
      <li>Free Future Updates</li>
      <li>Private Discord Access</li>
      <li>Commercial License</li>
    </ul>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 80px 20px; display: flex; justify-content: center; }
.pr-sp { display: flex; background: #fff; border-radius: 24px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); overflow: hidden; max-width: 900px; width: 100%; border: 1px solid #e2e8f0; }
.sp-left { flex: 1.2; padding: 50px; display: flex; flex-direction: column; justify-content: center; }
.sp-left h2 { font-size: 2.2rem; color: #0f172a; margin: 0 0 15px; letter-spacing: -1px; }
.sp-left p { color: #64748b; font-size: 1.1rem; line-height: 1.5; margin: 0 0 30px; }
.sp-price { font-size: 3.5rem; font-weight: 900; color: #0f172a; margin-bottom: 30px; display: flex; align-items: center; gap: 15px; }
.sp-price span { font-size: 1.5rem; color: #94a3b8; text-decoration: line-through; font-weight: 500; }
.sp-btn { padding: 20px; background: #10b981; color: #fff; border: none; border-radius: 12px; font-size: 1.2rem; font-weight: 700; cursor: pointer; transition: 0.3s; box-shadow: 0 4px 6px rgba(16,185,129,0.2); }
.sp-btn:hover { background: #059669; transform: translateY(-2px); box-shadow: 0 6px 12px rgba(16,185,129,0.3); }
.sp-guarantee { text-align: center; color: #94a3b8; font-size: 0.9rem; margin-top: 15px; }
.sp-right { flex: 1; background: #f8fafc; padding: 50px; border-left: 1px solid #e2e8f0; }
.sp-right h3 { color: #334155; margin: 0 0 20px; font-size: 1.2rem; }
.sp-right ul { list-style: none; padding: 0; margin: 0; }
.sp-right li { padding: 12px 0; color: #475569; font-size: 1.05rem; display: flex; align-items: center; }
.sp-right li::before { content: '✓'; display: inline-block; width: 24px; height: 24px; background: #d1fae5; color: #059669; border-radius: 50%; text-align: center; line-height: 24px; margin-right: 15px; font-size: 0.9rem; font-weight: bold; }
@media (max-width: 768px) { .pr-sp { flex-direction: column; } .sp-right { border-left: none; border-top: 1px solid #e2e8f0; } }`,
    jsCode: ``
  },

  // 9. Toggle Pricing (Visual Only)
  {
    _id: "pr9",
    title: "Toggle Pricing Layout",
    slug: "toggle-pricing-layout",
    description: "Includes a styled monthly/yearly toggle switch above the cards.",
    category: "Pricing Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "toggle", "switch", "clean"],
    isPremium: true,
    views: 45100,
    downloads: 12700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-tg">
  <div class="tg-head">
    <h2>Simple, transparent pricing</h2>
    <div class="tg-switch-wrap">
      <span class="tg-label">Monthly</span>
      <label class="tg-switch">
        <input type="checkbox" checked>
        <span class="tg-slider"></span>
      </label>
      <span class="tg-label">Annually <span class="tg-save">Save 20%</span></span>
    </div>
  </div>
  <div class="tg-grid">
    <div class="tg-card">
      <h3>Basic</h3>
      <div class="tg-price">$12<span>/mo</span></div>
      <button class="tg-btn">Get Started</button>
    </div>
    <div class="tg-card tg-pro">
      <h3>Pro</h3>
      <div class="tg-price">$32<span>/mo</span></div>
      <button class="tg-btn tg-btn-pro">Get Started</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 80px 20px; display: flex; justify-content: center; }
.pr-tg { max-width: 800px; width: 100%; }
.tg-head { text-align: center; margin-bottom: 60px; }
.tg-head h2 { font-size: 2.5rem; color: #0f172a; margin: 0 0 30px; letter-spacing: -1px; }
.tg-switch-wrap { display: flex; align-items: center; justify-content: center; gap: 15px; }
.tg-label { color: #64748b; font-weight: 500; font-size: 1.1rem; position: relative; }
.tg-save { position: absolute; top: -25px; left: 50%; transform: translateX(-50%); background: #10b981; color: #fff; font-size: 0.75rem; padding: 3px 8px; border-radius: 10px; white-space: nowrap; font-weight: bold; }
.tg-save::after { content: ''; position: absolute; bottom: -4px; left: 50%; transform: translateX(-50%); border-width: 4px 4px 0; border-style: solid; border-color: #10b981 transparent transparent transparent; }
.tg-switch { position: relative; display: inline-block; width: 60px; height: 34px; }
.tg-switch input { opacity: 0; width: 0; height: 0; }
.tg-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #3b82f6; transition: .4s; border-radius: 34px; }
.tg-slider:before { position: absolute; content: ""; height: 26px; width: 26px; left: 4px; bottom: 4px; background-color: white; transition: .4s; border-radius: 50%; }
.tg-switch input:checked + .tg-slider { background-color: #3b82f6; }
.tg-switch input:checked + .tg-slider:before { transform: translateX(26px); }
.tg-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.tg-card { padding: 40px; border-radius: 16px; border: 1px solid #e2e8f0; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
.tg-pro { border-color: #3b82f6; box-shadow: 0 10px 25px rgba(59,130,246,0.1); }
.tg-card h3 { color: #475569; font-size: 1.5rem; margin: 0 0 15px; }
.tg-price { font-size: 3.5rem; font-weight: 800; color: #0f172a; margin-bottom: 30px; }
.tg-price span { font-size: 1rem; color: #94a3b8; }
.tg-btn { width: 100%; padding: 15px; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0; color: #0f172a; font-weight: 600; cursor: pointer; font-size: 1rem; transition: 0.3s; }
.tg-btn:hover { background: #e2e8f0; }
.tg-btn-pro { background: #3b82f6; color: #fff; border-color: #3b82f6; }
.tg-btn-pro:hover { background: #2563eb; }`,
    jsCode: ``
  },

  // 10. Floating Features Pricing
  {
    _id: "pr10",
    title: "Floating Features Pricing",
    slug: "floating-features-pricing",
    description: "Playful design where features float outside the main pricing card.",
    category: "Pricing Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "playful", "floating", "creative"],
    isPremium: false,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-ff">
  <div class="ff-card">
    <h2>Premium</h2>
    <div class="ff-price">$29</div>
    <p>Everything you need to create amazing websites faster.</p>
    <button>Subscribe Now</button>
  </div>
  <div class="ff-features">
    <div class="ff-feat">✅ Unlimited Projects</div>
    <div class="ff-feat">✅ 24/7 Support</div>
    <div class="ff-feat">✅ Source Files</div>
    <div class="ff-feat">✅ Free Updates</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #eef2f6; padding: 100px 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pr-ff { display: flex; align-items: center; gap: 40px; max-width: 800px; width: 100%; }
.ff-card { background: #fff; padding: 50px 40px; border-radius: 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); text-align: center; flex: 1; z-index: 2; position: relative; }
.ff-card h2 { color: #3b82f6; font-size: 1.5rem; margin: 0 0 10px; text-transform: uppercase; letter-spacing: 1px; }
.ff-price { font-size: 5rem; font-weight: 900; color: #0f172a; margin-bottom: 20px; }
.ff-card p { color: #64748b; font-size: 1.1rem; line-height: 1.5; margin: 0 0 40px; }
.ff-card button { width: 100%; padding: 20px; border-radius: 15px; background: #0f172a; color: #fff; font-size: 1.2rem; font-weight: bold; border: none; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 20px rgba(15,23,42,0.2); }
.ff-card button:hover { transform: translateY(-3px); box-shadow: 0 15px 25px rgba(15,23,42,0.3); }
.ff-features { flex: 1; display: flex; flex-direction: column; gap: 20px; }
.ff-feat { background: #fff; padding: 20px 30px; border-radius: 20px; font-weight: 600; color: #334155; font-size: 1.1rem; box-shadow: 0 10px 20px rgba(0,0,0,0.03); transform: translateX(-30px); transition: 0.3s; }
.ff-feat:hover { transform: translateX(-20px); }
@media (max-width: 768px) { .pr-ff { flex-direction: column; } .ff-feat { transform: none; width: 100%; box-sizing: border-box; } .ff-feat:hover { transform: translateY(-5px); } }`,
    jsCode: ``
  }
];
