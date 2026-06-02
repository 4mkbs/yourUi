import { Design } from "./designs-data";

export const BATCH_64_DESIGNS: Design[] = [
  // 1. Classic 3-Tier Pricing
  {
    _id: "pr1",
    title: "Classic 3-Tier Pricing",
    slug: "classic-3-tier-pricing",
    description: "Standard three-column layout: Free, Pro (highlighted), and Enterprise.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "tiers", "classic", "table"],
    isPremium: false,
    views: 41200,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-cl-wrap">
  <div class="pr-card">
    <h3>Starter</h3>
    <div class="pr-price">$0<span>/mo</span></div>
    <ul>
      <li>✓ 1 Project</li>
      <li>✓ Basic Analytics</li>
      <li>✓ Community Support</li>
    </ul>
    <button class="pr-btn">Get Started</button>
  </div>
  <div class="pr-card pr-popular">
    <div class="pr-badge">Most Popular</div>
    <h3>Pro</h3>
    <div class="pr-price">$29<span>/mo</span></div>
    <ul>
      <li>✓ Unlimited Projects</li>
      <li>✓ Advanced Analytics</li>
      <li>✓ Priority Support</li>
      <li>✓ Custom Domains</li>
    </ul>
    <button class="pr-btn pr-btn-pri">Start Free Trial</button>
  </div>
  <div class="pr-card">
    <h3>Enterprise</h3>
    <div class="pr-price">$99<span>/mo</span></div>
    <ul>
      <li>✓ Everything in Pro</li>
      <li>✓ Dedicated Account Manager</li>
      <li>✓ 99.9% Uptime SLA</li>
      <li>✓ SSO Integration</li>
    </ul>
    <button class="pr-btn">Contact Sales</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 60px 20px; display: flex; justify-content: center; }
.pr-cl-wrap { display: flex; gap: 30px; max-width: 1000px; width: 100%; flex-wrap: wrap; justify-content: center; align-items: center; }
.pr-card { background: #fff; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); width: 100%; max-width: 280px; border: 1px solid #e2e8f0; position: relative; text-align: center; }
.pr-popular { border-color: #3b82f6; box-shadow: 0 20px 25px -5px rgba(59,130,246,0.1); transform: scale(1.05); }
.pr-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #3b82f6; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; }
.pr-card h3 { margin: 0 0 15px; color: #64748b; font-size: 1.2rem; }
.pr-price { font-size: 3rem; font-weight: 800; color: #0f172a; margin-bottom: 30px; }
.pr-price span { font-size: 1rem; color: #94a3b8; font-weight: 500; }
.pr-card ul { list-style: none; padding: 0; margin: 0 0 30px; text-align: left; }
.pr-card ul li { padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569; font-size: 0.95rem; }
.pr-card ul li:last-child { border-bottom: none; }
.pr-btn { width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; background: #fff; color: #0f172a; font-weight: 600; cursor: pointer; transition: 0.2s; }
.pr-btn:hover { background: #f8fafc; }
.pr-btn-pri { background: #3b82f6; color: #fff; border: none; }
.pr-btn-pri:hover { background: #2563eb; }
@media (max-width: 900px) { .pr-popular { transform: scale(1); } }`,
    jsCode: ``
  },

  // 2. Minimal Single Tier Card
  {
    _id: "pr2",
    title: "Minimal Single Tier Card",
    slug: "minimal-single-tier-card",
    description: "Clean, distraction-free single pricing tier for simple products.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "minimal", "single", "clean"],
    isPremium: false,
    views: 32500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-mn">
  <div class="pr-m-head">
    <h2>Lifetime Access</h2>
    <p>Pay once, use forever.</p>
  </div>
  <div class="pr-m-price">$149</div>
  <ul class="pr-m-list">
    <li>Access to all 600+ components</li>
    <li>Free lifetime updates</li>
    <li>Use on unlimited projects</li>
  </ul>
  <button class="pr-m-btn">Buy Now</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; padding: 60px 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pr-mn { border: 1px solid #eaeaea; padding: 40px; max-width: 350px; text-align: center; border-radius: 4px; }
.pr-m-head h2 { margin: 0 0 5px; color: #111; font-size: 1.5rem; }
.pr-m-head p { margin: 0 0 30px; color: #666; font-size: 0.95rem; }
.pr-m-price { font-size: 4rem; font-weight: 800; color: #111; margin-bottom: 30px; }
.pr-m-list { list-style: none; padding: 0; margin: 0 0 40px; color: #444; }
.pr-m-list li { margin-bottom: 15px; position: relative; }
.pr-m-list li::before { content: '→'; margin-right: 8px; color: #111; font-weight: bold; }
.pr-m-btn { width: 100%; padding: 15px; background: #111; color: #fff; border: none; font-weight: 600; font-size: 1.1rem; cursor: pointer; transition: 0.2s; }
.pr-m-btn:hover { background: #333; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Pricing
  {
    _id: "pr3",
    title: "Cyberpunk Pricing",
    slug: "cyberpunk-pricing",
    description: "Neon lit, high tech pricing table for gaming or developer tools.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["pricing", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 33500,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-cy">
  <div class="cy-tier">[ MERCENARY ]</div>
  <div class="cy-cost">₿ 0.05 / CYCLE</div>
  <div class="cy-features">
    > 10GB NEURAL STORAGE<br>
    > STANDARD ICE BREAKER<br>
    > 99% UPLINK UPTIME
  </div>
  <button class="cy-btn">EXECUTE_CONTRACT</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 60px 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pr-cy { background: rgba(0,0,0,0.8); border: 2px solid #0f0; padding: 40px; max-width: 350px; text-align: center; position: relative; box-shadow: 0 0 15px rgba(0,255,0,0.2); }
.pr-cy::before { content: ''; position: absolute; top: -2px; left: -2px; width: 20px; height: 20px; border-top: 4px solid #f0f; border-left: 4px solid #f0f; }
.pr-cy::after { content: ''; position: absolute; bottom: -2px; right: -2px; width: 20px; height: 20px; border-bottom: 4px solid #f0f; border-right: 4px solid #f0f; }
.cy-tier { color: #f0f; font-weight: bold; font-size: 1.2rem; margin-bottom: 20px; letter-spacing: 2px; text-shadow: 0 0 5px #f0f; }
.cy-cost { color: #0ff; font-size: 2rem; font-weight: bold; margin-bottom: 30px; text-shadow: 0 0 10px #0ff; }
.cy-features { color: #0f0; text-align: left; line-height: 2; margin-bottom: 40px; text-shadow: 0 0 2px #0f0; }
.cy-btn { width: 100%; background: transparent; border: 1px solid #f0f; color: #f0f; padding: 15px; font-family: inherit; font-weight: bold; cursor: pointer; text-shadow: 0 0 5px #f0f; box-shadow: inset 0 0 10px rgba(255,0,255,0.2); transition: 0.2s; }
.cy-btn:hover { background: #f0f; color: #000; box-shadow: 0 0 20px #f0f; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Pricing
  {
    _id: "pr4",
    title: "Glassmorphism Pricing",
    slug: "glassmorphism-pricing",
    description: "Frosted glass pricing tier floating over a vibrant background.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["pricing", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 45100,
    downloads: 12900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="pr-gl">
    <h3>Pro Plan</h3>
    <div class="pr-g-price">$49<span>/mo</span></div>
    <ul>
      <li>Unlimited Bandwidth</li>
      <li>Custom Domain Setup</li>
      <li>24/7 Priority Support</li>
      <li>Advanced Integrations</li>
    </ul>
    <button>Subscribe Now</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.pr-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; padding: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); width: 100%; max-width: 320px; text-align: center; color: #fff; }
.pr-gl h3 { margin: 0 0 10px; font-size: 1.4rem; font-weight: 500; opacity: 0.9; }
.pr-g-price { font-size: 3.5rem; font-weight: 800; margin-bottom: 30px; text-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.pr-g-price span { font-size: 1.2rem; font-weight: 400; opacity: 0.8; }
.pr-gl ul { list-style: none; padding: 0; margin: 0 0 40px; text-align: left; }
.pr-gl ul li { padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.2); font-size: 1rem; }
.pr-gl ul li:before { content: '✓'; margin-right: 10px; color: #facc15; font-weight: bold; }
.pr-gl ul li:last-child { border-bottom: none; }
.pr-gl button { width: 100%; padding: 15px; border: none; border-radius: 10px; background: rgba(255,255,255,0.2); color: #fff; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.3s; border: 1px solid rgba(255,255,255,0.4); }
.pr-gl button:hover { background: #fff; color: #3b82f6; }`,
    jsCode: ``
  },

  // 5. Brutalist Pricing
  {
    _id: "pr5",
    title: "Brutalist Pricing",
    slug: "brutalist-pricing",
    description: "Thick borders, harsh shadows, and bold typography for pricing.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["pricing", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 24800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-br">
  <div class="pr-b-tag">BEST VALUE</div>
  <h2>ALL ACCESS</h2>
  <div class="pr-b-price">$199</div>
  <p>PAY ONCE. GET EVERYTHING.</p>
  <ul>
    <li>UNLIMITED SITES</li>
    <li>ALL COMPONENTS</li>
    <li>LIFETIME UPDATES</li>
  </ul>
  <button class="pr-b-btn">GIMME</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.pr-br { background: #fff; border: 6px solid #000; padding: 50px 30px; box-shadow: 15px 15px 0 #ec4899; max-width: 350px; text-align: center; position: relative; }
.pr-b-tag { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); background: #facc15; color: #000; border: 4px solid #000; padding: 5px 20px; font-weight: 900; font-size: 1.2rem; }
.pr-br h2 { margin: 0 0 10px; font-size: 2.5rem; font-weight: 900; color: #000; }
.pr-b-price { font-size: 5rem; font-weight: 900; line-height: 1; margin-bottom: 10px; text-shadow: 4px 4px 0 #3b82f6; }
.pr-br p { font-weight: 800; border-bottom: 4px solid #000; padding-bottom: 20px; margin-bottom: 20px; }
.pr-br ul { list-style: none; padding: 0; margin: 0 0 30px; text-align: left; font-weight: 800; font-size: 1.1rem; }
.pr-br ul li { padding: 10px 0; border-bottom: 2px dashed #000; }
.pr-b-btn { width: 100%; background: #000; color: #fff; border: none; padding: 20px; font-size: 1.5rem; font-weight: 900; cursor: pointer; transition: 0.1s; }
.pr-b-btn:active { transform: translate(5px, 5px); box-shadow: none; }`,
    jsCode: ``
  },

  // 6. Neumorphic Pricing
  {
    _id: "pr6",
    title: "Neumorphic Pricing",
    slug: "neumorphic-pricing",
    description: "Soft UI design with extruded elements matching neumorphic layouts.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["pricing", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 26300,
    downloads: 7100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-neu">
  <h3>Premium</h3>
  <div class="pr-n-price">$39<span>/mo</span></div>
  <ul>
    <li>All Core Features</li>
    <li>10 Team Members</li>
    <li>100GB Cloud Storage</li>
  </ul>
  <button>Choose Plan</button>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.pr-neu { background: #e0e5ec; padding: 50px 40px; border-radius: 20px; box-shadow: 10px 10px 20px rgba(163,177,198,0.6), -10px -10px 20px rgba(255,255,255,0.5); max-width: 300px; text-align: center; }
.pr-neu h3 { margin: 0 0 10px; color: #4a5568; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 1px; }
.pr-n-price { font-size: 3.5rem; font-weight: bold; color: #2d3748; margin-bottom: 30px; }
.pr-n-price span { font-size: 1rem; color: #a0aec0; }
.pr-neu ul { list-style: none; padding: 0; margin: 0 0 40px; text-align: left; }
.pr-neu ul li { padding: 12px 0; color: #718096; border-bottom: 1px solid rgba(163,177,198,0.2); position: relative; padding-left: 25px; }
.pr-neu ul li::before { content: '•'; position: absolute; left: 0; color: #3182ce; font-size: 1.5rem; line-height: 1; top: 10px; }
.pr-neu button { width: 100%; padding: 15px; border: none; border-radius: 12px; background: #e0e5ec; color: #3182ce; font-weight: bold; font-size: 1.1rem; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.pr-neu button:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Pricing
  {
    _id: "pr7",
    title: "Dark Mode Glow Pricing",
    slug: "dark-mode-glow-pricing",
    description: "Deep dark pricing card with subtle glowing gradient borders.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["pricing", "dark", "glow", "gradient"],
    isPremium: true,
    views: 39400,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-dg">
  <div class="pr-d-tag">Team Plan</div>
  <div class="pr-d-price">$79<span>/month</span></div>
  <ul class="pr-d-list">
    <li>Up to 5 Users</li>
    <li>Shared Workspaces</li>
    <li>Advanced Analytics Dashboard</li>
    <li>Priority Email Support</li>
  </ul>
  <button class="pr-d-btn">Upgrade Now</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.pr-dg { background: #0f172a; padding: 40px; border-radius: 16px; position: relative; max-width: 350px; text-align: center; z-index: 1; }
.pr-dg::before { content: ''; position: absolute; inset: -2px; border-radius: 18px; background: linear-gradient(135deg, #3b82f6, #ec4899); z-index: -1; filter: blur(5px); opacity: 0.5; transition: 0.3s; }
.pr-dg:hover::before { opacity: 1; filter: blur(8px); }
.pr-d-tag { display: inline-block; padding: 5px 15px; background: rgba(59,130,246,0.1); color: #60a5fa; border-radius: 20px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; margin-bottom: 20px; border: 1px solid rgba(59,130,246,0.2); }
.pr-d-price { font-size: 3.5rem; font-weight: 800; color: #f8fafc; margin-bottom: 30px; }
.pr-d-price span { font-size: 1rem; color: #94a3b8; font-weight: 500; }
.pr-d-list { list-style: none; padding: 0; margin: 0 0 30px; text-align: left; }
.pr-d-list li { color: #cbd5e1; padding: 10px 0; border-bottom: 1px solid #1e293b; font-size: 0.95rem; }
.pr-d-list li::before { content: '✓'; color: #ec4899; margin-right: 10px; font-weight: bold; }
.pr-d-btn { width: 100%; padding: 15px; background: linear-gradient(135deg, #3b82f6, #ec4899); color: #fff; border: none; border-radius: 8px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: 0.3s; }
.pr-d-btn:hover { box-shadow: 0 5px 15px rgba(236,72,153,0.4); }`,
    jsCode: ``
  },

  // 8. Toggle Switch Pricing (Visual mockup)
  {
    _id: "pr8",
    title: "Toggle Switch Pricing",
    slug: "toggle-switch-pricing",
    description: "Pricing table featuring a pure CSS monthly/annual toggle switch design.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["pricing", "toggle", "monthly", "annual"],
    isPremium: false,
    views: 38400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-tg-wrap">
  <div class="pr-t-head">
    <h2>Simple Pricing</h2>
    <div class="pr-t-switch">
      <span>Monthly</span>
      <label class="switch">
        <input type="checkbox" checked>
        <span class="slider"></span>
      </label>
      <span>Annual <span class="pr-t-save">Save 20%</span></span>
    </div>
  </div>
  <div class="pr-t-card">
    <div class="pr-t-price">$190<span>/year</span></div>
    <button>Get Started</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.pr-tg-wrap { width: 100%; max-width: 500px; text-align: center; }
.pr-t-head h2 { margin: 0 0 20px; color: #0f172a; font-size: 2rem; }
.pr-t-switch { display: flex; justify-content: center; align-items: center; gap: 15px; margin-bottom: 40px; font-size: 1rem; color: #475569; font-weight: 500; }
.switch { position: relative; display: inline-block; width: 50px; height: 26px; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; inset: 0; background-color: #3b82f6; border-radius: 26px; transition: .4s; }
.slider:before { position: absolute; content: ""; height: 20px; width: 20px; left: 3px; bottom: 3px; background-color: white; border-radius: 50%; transition: .4s; transform: translateX(24px); }
.switch input:focus + .slider { box-shadow: 0 0 1px #3b82f6; }
.pr-t-save { background: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; margin-left: 5px; }
.pr-t-card { background: #fff; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); }
.pr-t-price { font-size: 3.5rem; font-weight: 800; color: #0f172a; margin-bottom: 25px; }
.pr-t-price span { font-size: 1.2rem; color: #94a3b8; font-weight: 400; }
.pr-t-card button { width: 100%; padding: 15px; background: #0f172a; color: #fff; border: none; border-radius: 8px; font-size: 1.1rem; font-weight: 600; cursor: pointer; }`,
    jsCode: ``
  },

  // 9. Feature Comparison Mini
  {
    _id: "pr9",
    title: "Feature Comparison Mini",
    slug: "feature-comparison-mini",
    description: "Compact pricing layout emphasizing feature checkmarks rather than price.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "comparison", "features", "clean"],
    isPremium: false,
    views: 29100,
    downloads: 7700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-fc">
  <div class="pr-f-col pr-f-features">
    <div class="pr-f-blank"></div>
    <div>Export to PDF</div>
    <div>Custom Branding</div>
    <div>API Access</div>
  </div>
  <div class="pr-f-col">
    <div class="pr-f-head">Free<br><span>$0/mo</span></div>
    <div>✓</div>
    <div>✕</div>
    <div>✕</div>
  </div>
  <div class="pr-f-col pr-f-active">
    <div class="pr-f-head">Pro<br><span>$15/mo</span></div>
    <div>✓</div>
    <div>✓</div>
    <div>✕</div>
  </div>
  <div class="pr-f-col">
    <div class="pr-f-head">Max<br><span>$45/mo</span></div>
    <div>✓</div>
    <div>✓</div>
    <div>✓</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.pr-fc { display: flex; width: 100%; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
.pr-f-col { flex: 1; text-align: center; border-right: 1px solid #e2e8f0; }
.pr-f-col:last-child { border-right: none; }
.pr-f-features { flex: 2; text-align: left; font-weight: 500; color: #475569; background: #f8fafc; }
.pr-f-col div { padding: 15px 20px; border-bottom: 1px solid #e2e8f0; font-size: 0.95rem; }
.pr-f-col div:last-child { border-bottom: none; }
.pr-f-blank { height: 75px; }
.pr-f-head { height: 75px; font-weight: 700; color: #0f172a; display: flex; flex-direction: column; justify-content: center; background: #f8fafc; }
.pr-f-head span { font-weight: 400; color: #64748b; font-size: 0.85rem; margin-top: 5px; }
.pr-f-active { background: #eff6ff; }
.pr-f-active .pr-f-head { background: #dbeafe; color: #1d4ed8; }
.pr-f-col div:contains('✓') { color: #10b981; font-weight: bold; }
.pr-f-col div:contains('✕') { color: #cbd5e1; }
@media (max-width: 600px) { .pr-fc { flex-direction: column; } .pr-f-features { display: none; } .pr-f-col { border-right: none; border-bottom: 4px solid #e2e8f0; } }`,
    jsCode: ``
  },

  // 10. Floating Pricing Cards
  {
    _id: "pr10",
    title: "Floating Pricing Cards",
    slug: "floating-pricing-cards",
    description: "Pricing tiers styled as distinct, floating cards with drop shadows.",
    category: "Pricing Tables",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["pricing", "floating", "cards", "shadow"],
    isPremium: true,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pr-fl-wrap">
  <div class="pr-fl-card">
    <h4>Basic</h4>
    <p>For small projects</p>
    <div class="pr-fl-price">$9</div>
    <button>Select</button>
  </div>
  <div class="pr-fl-card pr-fl-main">
    <h4>Professional</h4>
    <p>For growing teams</p>
    <div class="pr-fl-price">$29</div>
    <button>Select</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 60px 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.pr-fl-wrap { display: flex; gap: 40px; align-items: center; flex-wrap: wrap; justify-content: center; }
.pr-fl-card { background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); text-align: center; width: 250px; transition: 0.3s; }
.pr-fl-card:hover { transform: translateY(-5px); box-shadow: 0 20px 35px -5px rgba(0,0,0,0.1); }
.pr-fl-main { background: #0f172a; color: #fff; transform: scale(1.05); box-shadow: 0 20px 40px -5px rgba(15,23,42,0.3); }
.pr-fl-main:hover { transform: scale(1.05) translateY(-5px); }
.pr-fl-card h4 { margin: 0 0 5px; font-size: 1.5rem; }
.pr-fl-card p { margin: 0 0 25px; color: #64748b; font-size: 0.95rem; }
.pr-fl-main p { color: #94a3b8; }
.pr-fl-price { font-size: 4rem; font-weight: 800; margin-bottom: 30px; }
.pr-fl-card button { width: 100%; padding: 15px; background: #f1f5f9; color: #0f172a; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.pr-fl-card button:hover { background: #e2e8f0; }
.pr-fl-main button { background: #3b82f6; color: #fff; }
.pr-fl-main button:hover { background: #2563eb; }`,
    jsCode: ``
  }
];
