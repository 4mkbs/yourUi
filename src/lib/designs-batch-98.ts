import { Design } from "./designs-data";

export const BATCH_98_DESIGNS: Design[] = [
  // 1. Classic 3-Tier Pricing
  {
    _id: "pricing1",
    title: "Classic 3-Tier Pricing",
    slug: "classic-3-tier-pricing",
    description: "Standard SaaS pricing table with a highlighted middle tier.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "cards", "saas", "classic"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="price-cl-wrap">
  <div class="price-cl-card">
    <h3>Basic</h3>
    <div class="cl-price"><span>$</span>9<span>/mo</span></div>
    <ul class="cl-features">
      <li>1 User</li>
      <li>10 Projects</li>
      <li>Basic Support</li>
    </ul>
    <button class="cl-btn">Choose Basic</button>
  </div>
  <div class="price-cl-card popular">
    <div class="cl-badge">Most Popular</div>
    <h3>Pro</h3>
    <div class="cl-price"><span>$</span>29<span>/mo</span></div>
    <ul class="cl-features">
      <li>5 Users</li>
      <li>Unlimited Projects</li>
      <li>Priority Support</li>
      <li>Advanced Analytics</li>
    </ul>
    <button class="cl-btn primary">Choose Pro</button>
  </div>
  <div class="price-cl-card">
    <h3>Enterprise</h3>
    <div class="cl-price"><span>$</span>99<span>/mo</span></div>
    <ul class="cl-features">
      <li>Unlimited Users</li>
      <li>Unlimited Projects</li>
      <li>24/7 Phone Support</li>
      <li>Custom Integrations</li>
    </ul>
    <button class="cl-btn">Contact Sales</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.price-cl-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; gap: 30px; padding: 40px 20px; flex-wrap: wrap; }
.price-cl-card { background: #fff; border-radius: 16px; padding: 40px; width: 100%; max-width: 320px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; display: flex; flex-direction: column; position: relative; transition: 0.3s; }
.price-cl-card:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.price-cl-card.popular { border: 2px solid #3b82f6; transform: scale(1.05); }
.price-cl-card.popular:hover { transform: scale(1.05) translateY(-5px); }
.cl-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #3b82f6; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; }
.price-cl-card h3 { margin: 0 0 20px; font-size: 1.5rem; color: #0f172a; text-align: center; }
.cl-price { font-size: 3rem; font-weight: 800; color: #0f172a; text-align: center; margin-bottom: 30px; display: flex; justify-content: center; align-items: baseline; }
.cl-price span { font-size: 1.2rem; color: #64748b; font-weight: 600; margin: 0 2px; }
.cl-features { list-style: none; padding: 0; margin: 0 0 40px; flex: 1; }
.cl-features li { padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #475569; display: flex; align-items: center; }
.cl-features li::before { content: '✓'; color: #10b981; font-weight: bold; margin-right: 10px; }
.cl-btn { width: 100%; padding: 15px; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; border: 1px solid #e2e8f0; background: #fff; color: #0f172a; }
.cl-btn:hover { background: #f8fafc; }
.cl-btn.primary { background: #3b82f6; color: #fff; border: none; }
.cl-btn.primary:hover { background: #2563eb; }
@media (max-width: 768px) { .price-cl-card.popular { transform: scale(1); } .price-cl-card.popular:hover { transform: translateY(-5px); } }`,
    jsCode: ``
  },

  // 2. Minimal Clean Pricing
  {
    _id: "pricing2",
    title: "Minimal Clean Pricing",
    description: "Stripped back cards with simple typography and no borders.",
    slug: "minimal-clean-pricing",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "minimal", "clean", "simple"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="price-mn-wrap">
  <div class="price-mn">
    <h3>Starter</h3>
    <div class="mn-price">$15</div>
    <ul>
      <li>5 Projects</li>
      <li>Basic Support</li>
    </ul>
    <button>Select Starter</button>
  </div>
  <div class="price-mn">
    <h3>Professional</h3>
    <div class="mn-price">$49</div>
    <ul>
      <li>Unlimited Projects</li>
      <li>Priority Support</li>
    </ul>
    <button class="main">Select Pro</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; }
.price-mn-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; gap: 60px; padding: 40px; flex-wrap: wrap; }
.price-mn { text-align: center; max-width: 300px; width: 100%; }
.price-mn h3 { margin: 0 0 10px; font-size: 1.2rem; font-weight: 500; color: #666; }
.mn-price { font-size: 3.5rem; font-weight: 300; color: #111; margin-bottom: 30px; line-height: 1; }
.price-mn ul { list-style: none; padding: 0; margin: 0 0 40px; }
.price-mn li { padding: 10px 0; color: #333; font-size: 1.05rem; }
.price-mn button { width: 100%; padding: 15px; background: transparent; border: 1px solid #111; color: #111; font-size: 1rem; cursor: pointer; transition: 0.2s; border-radius: 40px; }
.price-mn button:hover { background: #f5f5f5; }
.price-mn button.main { background: #111; color: #fff; }
.price-mn button.main:hover { background: #333; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Pricing
  {
    _id: "pricing3",
    title: "Cyberpunk Pricing Cards",
    slug: "cyberpunk-pricing-cards",
    description: "Hacker-themed pricing with neon borders and terminal text.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["pricing", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="price-cy-wrap">
  <div class="price-cy">
    <h3>TIER_1: HACKER</h3>
    <div class="cy-cost">FREE</div>
    <ul>
      <li>> LOCAL_ACCESS</li>
      <li>> 5GB_STORAGE</li>
    </ul>
    <button>INIT_TIER_1</button>
  </div>
  <div class="price-cy active">
    <h3>TIER_2: RUNNER</h3>
    <div class="cy-cost">99.99 <span>CREDS</span></div>
    <ul>
      <li>> GLOBAL_ACCESS</li>
      <li>> UNLIMITED_STORAGE</li>
      <li>> PROXY_NETWORK</li>
    </ul>
    <button>INIT_TIER_2</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; color: #0f0; }
.price-cy-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; gap: 40px; padding: 40px; flex-wrap: wrap; }
.price-cy { background: rgba(0,20,0,0.8); border: 2px solid #050; padding: 40px; width: 100%; max-width: 320px; transition: 0.3s; position: relative; }
.price-cy:hover { border-color: #0aa; box-shadow: 0 0 15px rgba(0,170,170,0.2); }
.price-cy.active { border-color: #0f0; box-shadow: 0 0 20px rgba(0,255,0,0.2); transform: scale(1.05); }
.price-cy h3 { margin: 0 0 20px; font-size: 1.2rem; border-bottom: 1px dashed; padding-bottom: 10px; }
.price-cy.active h3 { color: #fff; text-shadow: 0 0 5px #0f0; }
.cy-cost { font-size: 2.5rem; font-weight: bold; margin-bottom: 30px; }
.cy-cost span { font-size: 1rem; opacity: 0.7; }
.price-cy ul { list-style: none; padding: 0; margin: 0 0 40px; }
.price-cy li { padding: 8px 0; opacity: 0.8; }
.price-cy button { width: 100%; padding: 15px; background: transparent; color: #0f0; border: 2px solid #0f0; font-family: inherit; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.2s; }
.price-cy button:hover { background: #0f0; color: #000; box-shadow: 0 0 15px #0f0; }
.price-cy.active button { background: #0f0; color: #000; }
.price-cy.active button:hover { background: transparent; color: #0f0; }
@media (max-width: 768px) { .price-cy.active { transform: scale(1); } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Pricing
  {
    _id: "pricing4",
    title: "Glassmorphism Pricing",
    slug: "glassmorphism-pricing",
    description: "Frosted glass pricing cards over a vibrant background.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["pricing", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="price-gl-wrap">
  <div class="price-gl">
    <h3>Monthly</h3>
    <div class="gl-price">$19</div>
    <ul>
      <li>Full Access</li>
      <li>Cancel anytime</li>
    </ul>
    <button>Subscribe</button>
  </div>
  <div class="price-gl">
    <h3>Annually</h3>
    <div class="gl-price">$190</div>
    <ul>
      <li>2 Months Free</li>
      <li>Priority Support</li>
    </ul>
    <button>Subscribe</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.price-gl-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; gap: 40px; padding: 40px; flex-wrap: wrap; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.price-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 24px; padding: 40px; width: 100%; max-width: 320px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); color: #fff; text-align: center; }
.price-gl h3 { margin: 0 0 10px; font-size: 1.5rem; font-weight: 500; opacity: 0.9; }
.gl-price { font-size: 4rem; font-weight: 800; margin-bottom: 30px; text-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.price-gl ul { list-style: none; padding: 0; margin: 0 0 40px; }
.price-gl li { padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
.price-gl button { width: 100%; padding: 15px; background: #fff; color: #8b5cf6; border: none; border-radius: 12px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.3s; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.price-gl button:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); }`,
    jsCode: ``
  },

  // 5. Brutalist Pricing
  {
    _id: "pricing5",
    title: "Brutalist Pricing Block",
    slug: "brutalist-pricing-block",
    description: "High contrast, aggressive pricing table.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["pricing", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="price-br-wrap">
  <div class="price-br">
    <h2>CHEAP</h2>
    <div class="br-cost">$10</div>
    <p>JUST THE BASICS.</p>
    <button>BUY</button>
  </div>
  <div class="price-br highlight">
    <h2>EXPENSIVE</h2>
    <div class="br-cost">$50</div>
    <p>EVERYTHING WE GOT.</p>
    <button>BUY</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.price-br-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; gap: 40px; padding: 40px; flex-wrap: wrap; }
.price-br { background: #fff; border: 6px solid #000; box-shadow: 10px 10px 0 #000; padding: 40px; width: 100%; max-width: 320px; text-align: center; }
.price-br.highlight { background: #facc15; }
.price-br h2 { margin: 0 0 20px; font-size: 2rem; font-weight: 900; letter-spacing: -1px; }
.br-cost { font-size: 5rem; font-weight: 900; line-height: 1; border-bottom: 6px solid #000; padding-bottom: 20px; margin-bottom: 20px; }
.price-br p { font-size: 1.2rem; font-weight: bold; margin: 0 0 30px; }
.price-br button { width: 100%; padding: 20px; background: #000; color: #fff; font-size: 1.5rem; font-weight: 900; border: 4px solid #000; cursor: pointer; transition: 0.1s; }
.price-br button:hover { background: #fff; color: #000; transform: translate(-5px, -5px); box-shadow: 5px 5px 0 #000; }`,
    jsCode: ``
  },

  // 6. Dark Mode Glow Pricing
  {
    _id: "pricing6",
    title: "Dark Glow Pricing",
    slug: "dark-glow-pricing",
    description: "Deep dark background with a highlighted, glowing tier.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["pricing", "dark", "glow", "cards"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="price-dg-wrap">
  <div class="price-dg">
    <h3>Standard</h3>
    <div class="dg-price">$15</div>
    <button class="dg-btn">Select</button>
  </div>
  <div class="price-dg glow">
    <h3>Premium</h3>
    <div class="dg-price">$45</div>
    <button class="dg-btn primary">Select</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; }
.price-dg-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; gap: 40px; padding: 40px; flex-wrap: wrap; }
.price-dg { background: #0f172a; border: 1px solid #1e293b; border-radius: 16px; padding: 40px; width: 100%; max-width: 320px; text-align: center; position: relative; transition: 0.3s; }
.price-dg.glow { border-color: #3b82f6; box-shadow: 0 0 30px rgba(59,130,246,0.2); transform: scale(1.05); }
.price-dg.glow::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, transparent, #3b82f6, transparent); border-radius: 16px 16px 0 0; }
.price-dg h3 { margin: 0 0 20px; color: #94a3b8; font-size: 1.2rem; font-weight: 500; }
.price-dg.glow h3 { color: #f8fafc; }
.dg-price { font-size: 3.5rem; font-weight: 800; color: #f8fafc; margin-bottom: 40px; }
.dg-btn { width: 100%; padding: 15px; background: transparent; border: 1px solid #334155; color: #f8fafc; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.3s; }
.dg-btn:hover { border-color: #64748b; background: rgba(255,255,255,0.05); }
.dg-btn.primary { background: #3b82f6; border-color: #3b82f6; }
.dg-btn.primary:hover { background: #2563eb; border-color: #2563eb; box-shadow: 0 0 20px rgba(59,130,246,0.4); }
@media (max-width: 768px) { .price-dg.glow { transform: scale(1); } }`,
    jsCode: ``
  },

  // 7. Neumorphic Pricing
  {
    _id: "pricing7",
    title: "Neumorphic Soft Pricing",
    slug: "neumorphic-soft-pricing",
    description: "Soft UI pricing cards with embossed and inset elements.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["pricing", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="price-neu-wrap">
  <div class="price-neu">
    <h3>Hobby</h3>
    <div class="neu-price">$0</div>
    <p>Perfect for side projects</p>
    <button class="neu-btn">Get Started</button>
  </div>
  <div class="price-neu active">
    <h3>Pro</h3>
    <div class="neu-price">$24</div>
    <p>For serious creators</p>
    <button class="neu-btn active">Subscribe</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.price-neu-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; gap: 40px; padding: 40px; flex-wrap: wrap; }
.price-neu { background: #e0e5ec; padding: 50px 40px; border-radius: 30px; box-shadow: 16px 16px 32px rgba(163,177,198,0.6), -16px -16px 32px rgba(255,255,255,0.5); width: 100%; max-width: 320px; text-align: center; }
.price-neu.active { box-shadow: inset 16px 16px 32px rgba(163,177,198,0.6), inset -16px -16px 32px rgba(255,255,255,0.5); }
.price-neu h3 { margin: 0 0 10px; color: #4a5568; font-size: 1.5rem; }
.neu-price { font-size: 3.5rem; font-weight: bold; color: #2d3748; margin-bottom: 10px; }
.price-neu p { color: #718096; margin: 0 0 40px; }
.neu-btn { width: 100%; padding: 15px; border-radius: 15px; border: none; font-weight: bold; font-size: 1.1rem; color: #4a5568; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); cursor: pointer; transition: 0.2s; }
.neu-btn.active, .neu-btn:active { box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); color: #3182ce; }`,
    jsCode: ``
  },

  // 8. Horizontal Pricing Table
  {
    _id: "pricing8",
    title: "Horizontal Pricing Rows",
    slug: "horizontal-pricing-rows",
    description: "Row-based pricing, excellent for detailed feature comparison.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["pricing", "horizontal", "table", "clean"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="price-hr-wrap">
  <div class="price-hr">
    <div class="hr-info">
      <h3>Personal</h3>
      <p>For individuals building side projects.</p>
    </div>
    <div class="hr-price">$12<span>/mo</span></div>
    <button class="hr-btn">Choose Plan</button>
  </div>
  <div class="price-hr highlight">
    <div class="hr-info">
      <h3>Team</h3>
      <p>For small teams scaling their apps.</p>
    </div>
    <div class="hr-price">$49<span>/mo</span></div>
    <button class="hr-btn primary">Choose Plan</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.price-hr-wrap { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px; padding: 40px 20px; }
.price-hr { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 30px 40px; width: 100%; max-width: 800px; display: flex; align-items: center; justify-content: space-between; gap: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
.price-hr.highlight { border: 2px solid #3b82f6; box-shadow: 0 10px 20px rgba(59,130,246,0.1); }
.hr-info { flex: 1; }
.hr-info h3 { margin: 0 0 5px; font-size: 1.5rem; color: #0f172a; }
.hr-info p { margin: 0; color: #64748b; font-size: 0.95rem; }
.hr-price { font-size: 2.5rem; font-weight: 800; color: #0f172a; width: 150px; text-align: right; }
.hr-price span { font-size: 1rem; color: #64748b; font-weight: 500; }
.hr-btn { padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; border: 1px solid #e2e8f0; background: #fff; color: #0f172a; white-space: nowrap; }
.hr-btn:hover { background: #f8fafc; }
.hr-btn.primary { background: #3b82f6; color: #fff; border: none; }
.hr-btn.primary:hover { background: #2563eb; }
@media (max-width: 600px) { .price-hr { flex-direction: column; text-align: center; } .hr-price { text-align: center; width: auto; margin: 20px 0; } .hr-btn { width: 100%; } }`,
    jsCode: ``
  },

  // 9. Single Tier SaaS Pricing
  {
    _id: "pricing9",
    title: "Single Tier SaaS Pricing",
    slug: "single-tier-saas-pricing",
    description: "One clear, comprehensive plan. Popular for modern micro-SaaS.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "single", "saas", "clean"],
    isPremium: true,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="price-st-wrap">
  <div class="price-st">
    <div class="st-left">
      <h2>Lifetime Access</h2>
      <p>Pay once, use forever. No hidden fees or recurring subscriptions.</p>
      <div class="st-price">$149</div>
      <button class="st-btn">Get Access Now</button>
    </div>
    <div class="st-right">
      <h4>What's included:</h4>
      <ul>
        <li>All current features</li>
        <li>Future updates included</li>
        <li>Priority email support</li>
        <li>Private Discord community</li>
      </ul>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; }
.price-st-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.price-st { background: #fff; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); display: flex; width: 100%; max-width: 800px; overflow: hidden; }
.st-left { padding: 50px; flex: 1.2; }
.st-left h2 { margin: 0 0 10px; font-size: 2rem; color: #0f172a; }
.st-left p { margin: 0 0 30px; color: #64748b; line-height: 1.5; }
.st-price { font-size: 3.5rem; font-weight: 800; color: #0f172a; margin-bottom: 30px; }
.st-btn { width: 100%; padding: 16px; background: #0f172a; color: #fff; border: none; border-radius: 10px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.2s; }
.st-btn:hover { background: #334155; transform: translateY(-2px); }
.st-right { background: #f8fafc; padding: 50px; flex: 1; border-left: 1px solid #e2e8f0; }
.st-right h4 { margin: 0 0 20px; font-size: 1.1rem; color: #0f172a; }
.st-right ul { list-style: none; padding: 0; margin: 0; }
.st-right li { padding: 10px 0; color: #475569; display: flex; align-items: center; }
.st-right li::before { content: '✓'; color: #3b82f6; font-weight: bold; margin-right: 12px; }
@media (max-width: 768px) { .price-st { flex-direction: column; } .st-right { border-left: none; border-top: 1px solid #e2e8f0; } }`,
    jsCode: ``
  },

  // 10. Toggle Pricing Table
  {
    _id: "pricing10",
    title: "Toggle Pricing Table",
    slug: "toggle-pricing-table",
    description: "Pricing table with an integrated monthly/annual toggle switch.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "toggle", "annual", "cards"],
    isPremium: false,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="price-tg-wrap">
  <div class="tg-controls">
    <span>Monthly</span>
    <label class="tg-switch">
      <input type="checkbox" checked />
      <span class="tg-slider"></span>
    </label>
    <span>Annually <span class="tg-save">Save 20%</span></span>
  </div>
  <div class="tg-cards">
    <div class="tg-card">
      <h3>Pro</h3>
      <div class="tg-price">$24<span>/mo</span></div>
      <button>Choose Pro</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.price-tg-wrap { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px 20px; }
.tg-controls { display: flex; align-items: center; gap: 15px; margin-bottom: 50px; font-weight: 500; color: #475569; }
.tg-switch { position: relative; display: inline-block; width: 60px; height: 34px; }
.tg-switch input { opacity: 0; width: 0; height: 0; }
.tg-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #3b82f6; transition: .4s; border-radius: 34px; }
.tg-slider:before { position: absolute; content: ""; height: 26px; width: 26px; left: 4px; bottom: 4px; background-color: white; transition: .4s; border-radius: 50%; }
.tg-switch input:checked + .tg-slider { background-color: #3b82f6; }
.tg-switch input:focus + .tg-slider { box-shadow: 0 0 1px #3b82f6; }
.tg-switch input:checked + .tg-slider:before { transform: translateX(26px); }
.tg-save { color: #10b981; font-size: 0.8rem; background: #d1fae5; padding: 4px 8px; border-radius: 12px; margin-left: 8px; font-weight: bold; }
.tg-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 40px; width: 100%; max-width: 350px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.tg-card h3 { margin: 0 0 20px; font-size: 1.5rem; color: #0f172a; }
.tg-price { font-size: 4rem; font-weight: 800; color: #0f172a; margin-bottom: 40px; }
.tg-price span { font-size: 1rem; color: #64748b; font-weight: 500; }
.tg-card button { width: 100%; padding: 15px; background: #0f172a; color: #fff; border: none; border-radius: 8px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.2s; }
.tg-card button:hover { background: #334155; }`,
    jsCode: ``
  }
];
