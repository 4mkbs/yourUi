import { Design } from "./designs-data";

export const BATCH_6_DESIGNS: Design[] = [
  // 1. Standard 3-Tier SaaS
  {
    _id: "p1",
    title: "Standard 3-Tier SaaS Pricing",
    slug: "standard-3-tier-saas-pricing",
    description: "A classic, high-converting 3-tier pricing table with the middle 'Pro' plan highlighted.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    tags: ["pricing", "saas", "3-tier", "classic"],
    isPremium: false,
    views: 9500,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pricing-container">
  <div class="pricing-header">
    <h2>Simple, transparent pricing</h2>
    <p>No contracts. No surprise fees.</p>
  </div>
  <div class="pricing-cards">
    <div class="card">
      <h3>Starter</h3>
      <div class="price"><span>$</span>0<span>/mo</span></div>
      <p class="desc">Perfect for side projects.</p>
      <ul>
        <li>✓ 1 Workspace</li>
        <li>✓ 5 Guests</li>
        <li>✓ 1GB Storage</li>
        <li class="disabled">✗ Priority Support</li>
      </ul>
      <button class="btn-outline">Get Started</button>
    </div>
    
    <div class="card popular">
      <div class="badge">Most Popular</div>
      <h3>Pro</h3>
      <div class="price"><span>$</span>29<span>/mo</span></div>
      <p class="desc">Best for growing teams.</p>
      <ul>
        <li>✓ Unlimited Workspaces</li>
        <li>✓ 50 Guests</li>
        <li>✓ 100GB Storage</li>
        <li>✓ Priority Support</li>
      </ul>
      <button class="btn-solid">Start Free Trial</button>
    </div>

    <div class="card">
      <h3>Enterprise</h3>
      <div class="price"><span>$</span>99<span>/mo</span></div>
      <p class="desc">For large scale organizations.</p>
      <ul>
        <li>✓ Everything in Pro</li>
        <li>✓ Unlimited Guests</li>
        <li>✓ Unlimited Storage</li>
        <li>✓ 24/7 Phone Support</li>
      </ul>
      <button class="btn-outline">Contact Sales</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; color: #0f172a; }
.pricing-container { max-width: 1100px; margin: 0 auto; padding: 4rem 1rem; }
.pricing-header { text-align: center; margin-bottom: 4rem; }
.pricing-header h2 { font-size: 2.5rem; font-weight: 800; margin: 0 0 1rem; }
.pricing-header p { font-size: 1.1rem; color: #64748b; }
.pricing-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; align-items: center; }
.card { background: #fff; padding: 2.5rem 2rem; border-radius: 16px; border: 1px solid #e2e8f0; text-align: center; transition: 0.3s; position: relative; }
.card:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.05); transform: translateY(-5px); }
.card.popular { border: 2px solid #3b82f6; box-shadow: 0 20px 40px rgba(59,130,246,0.1); padding: 3.5rem 2rem; }
.badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #3b82f6; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; }
h3 { margin: 0 0 1rem; font-size: 1.25rem; }
.price { font-size: 3.5rem; font-weight: 800; line-height: 1; margin-bottom: 1rem; }
.price span { font-size: 1.2rem; color: #64748b; font-weight: 500; vertical-align: middle; }
.desc { color: #64748b; margin-bottom: 2rem; }
ul { list-style: none; padding: 0; margin: 0 0 2rem; text-align: left; }
li { margin-bottom: 1rem; color: #334155; font-weight: 500; display: flex; align-items: center; }
li.disabled { color: #94a3b8; text-decoration: line-through; }
button { width: 100%; padding: 1rem; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: 0.2s; }
.btn-outline { background: transparent; border: 2px solid #e2e8f0; color: #0f172a; }
.btn-outline:hover { border-color: #0f172a; }
.btn-solid { background: #3b82f6; border: 2px solid #3b82f6; color: #fff; }
.btn-solid:hover { background: #2563eb; }`,
    jsCode: ``
  },

  // 2. Toggle Billing Pricing
  {
    _id: "p2",
    title: "Toggle Billing Pricing (Monthly/Annual)",
    slug: "toggle-billing-pricing",
    description: "Pricing table with an interactive toggle to switch between monthly and annual billing (save 20%).",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["pricing", "toggle", "annual", "interactive"],
    isPremium: true,
    views: 8200,
    downloads: 3000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pricing-section">
  <div class="header">
    <h2>Plans that scale with you</h2>
    <div class="toggle-container">
      <span class="label">Monthly</span>
      <label class="switch">
        <input type="checkbox" id="billingToggle">
        <span class="slider"></span>
      </label>
      <span class="label">Annually <span class="save-badge">Save 20%</span></span>
    </div>
  </div>

  <div class="cards">
    <div class="p-card">
      <h3>Basic</h3>
      <div class="p-price">$<span class="amt" data-monthly="15" data-annual="12">15</span><span>/mo</span></div>
      <button>Choose Basic</button>
      <ul><li>1 User</li><li>10 Projects</li><li>Basic Support</li></ul>
    </div>
    <div class="p-card highlighted">
      <h3>Professional</h3>
      <div class="p-price">$<span class="amt" data-monthly="49" data-annual="39">49</span><span>/mo</span></div>
      <button class="active">Choose Pro</button>
      <ul><li>5 Users</li><li>Unlimited Projects</li><li>Priority Support</li></ul>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #fff; }
.pricing-section { padding: 4rem 1rem; max-width: 800px; margin: 0 auto; text-align: center; }
.header h2 { font-size: 2rem; margin-bottom: 2rem; }
.toggle-container { display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 3rem; }
.label { font-weight: 600; color: #4b5563; }
.save-badge { background: #dcfce7; color: #166534; padding: 2px 8px; border-radius: 10px; font-size: 0.75rem; margin-left: 5px; }
.switch { position: relative; display: inline-block; width: 50px; height: 26px; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; inset: 0; background-color: #cbd5e1; transition: .4s; border-radius: 34px; }
.slider:before { position: absolute; content: ""; height: 20px; width: 20px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }
input:checked + .slider { background-color: #3b82f6; }
input:checked + .slider:before { transform: translateX(24px); }

.cards { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.p-card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem; text-align: left; }
.p-card.highlighted { border-color: #3b82f6; box-shadow: 0 10px 25px rgba(59,130,246,0.1); }
.p-card h3 { margin: 0 0 1rem; font-size: 1.2rem; }
.p-price { font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem; }
.p-price span:last-child { font-size: 1rem; color: #64748b; font-weight: 400; }
button { width: 100%; padding: 0.8rem; background: #f1f5f9; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; margin-bottom: 2rem; color: #0f172a; transition: 0.2s; }
button.active, button:hover { background: #3b82f6; color: #fff; }
ul { list-style: none; padding: 0; margin: 0; }
li { padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9; color: #475569; }
li:last-child { border-bottom: none; }
@media(max-width: 600px) { .cards { grid-template-columns: 1fr; } }`,
    jsCode: `const toggle = document.getElementById('billingToggle');
const amounts = document.querySelectorAll('.amt');
toggle.addEventListener('change', (e) => {
  const isAnnual = e.target.checked;
  amounts.forEach(amt => {
    amt.textContent = isAnnual ? amt.getAttribute('data-annual') : amt.getAttribute('data-monthly');
  });
});`
  },

  // 3. Dark Mode Cyberpunk Pricing
  {
    _id: "p3",
    title: "Cyberpunk Neon Pricing",
    slug: "cyberpunk-neon-pricing",
    description: "Dark, high-contrast pricing table with neon glowing borders, perfect for gaming or dev tools.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["pricing", "cyberpunk", "dark", "neon"],
    isPremium: true,
    views: 6100,
    downloads: 1850,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cyber-pricing">
  <h2>ACCESS LEVELS</h2>
  <div class="cyber-grid">
    <div class="cyber-card">
      <div class="glitch-title" data-text="HACKER">HACKER</div>
      <div class="cost">FREE</div>
      <ul>
        <li>> Basic API Access</li>
        <li>> 100 Req / Day</li>
        <li>> Community Support</li>
      </ul>
      <button class="cyber-btn">INITIATE</button>
    </div>
    <div class="cyber-card neon-border">
      <div class="glitch-title" data-text="CYBORG">CYBORG</div>
      <div class="cost">49.99 <span>/ CYCLE</span></div>
      <ul>
        <li>> Full API Access</li>
        <li>> 10,000 Req / Day</li>
        <li>> Direct Comms Link</li>
      </ul>
      <button class="cyber-btn active">UPGRADE_SYS</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #050505; color: #0f0; font-family: 'Courier New', Courier, monospace; }
.cyber-pricing { padding: 4rem 2rem; max-width: 800px; margin: 0 auto; text-align: center; }
h2 { font-size: 2.5rem; letter-spacing: 4px; text-shadow: 0 0 10px #0f0; margin-bottom: 3rem; }
.cyber-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.cyber-card { background: #0a0a0a; border: 1px solid #0f0; padding: 2rem; position: relative; text-align: left; }
.neon-border { box-shadow: 0 0 15px rgba(0, 255, 0, 0.3), inset 0 0 15px rgba(0, 255, 0, 0.1); }
.glitch-title { font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; letter-spacing: 2px; }
.cost { font-size: 2rem; font-weight: bold; color: #fff; margin-bottom: 2rem; border-bottom: 1px solid #333; padding-bottom: 1rem; }
.cost span { font-size: 1rem; color: #0f0; }
ul { list-style: none; padding: 0; margin: 0 0 2rem; }
li { margin-bottom: 0.8rem; }
.cyber-btn { width: 100%; background: transparent; border: 1px solid #0f0; color: #0f0; font-family: inherit; font-size: 1.2rem; padding: 1rem; cursor: pointer; text-transform: uppercase; letter-spacing: 2px; transition: 0.2s; }
.cyber-btn:hover, .cyber-btn.active { background: #0f0; color: #000; box-shadow: 0 0 20px #0f0; }
@media (max-width: 600px) { .cyber-grid { grid-template-columns: 1fr; } }`,
    jsCode: ``
  },

  // 4. Minimalist 2-Tier Pricing
  {
    _id: "p4",
    title: "Minimalist 2-Tier Pricing",
    slug: "minimalist-2-tier-pricing",
    description: "Extremely clean, stark black-and-white pricing layout focusing on Individual vs Team.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["pricing", "minimalist", "clean", "2-tier"],
    isPremium: false,
    views: 7400,
    downloads: 2700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="min-pricing">
  <div class="min-card">
    <div class="type">Individual</div>
    <div class="price">$9<span>/mo</span></div>
    <p>Everything you need to create amazing personal projects.</p>
    <button class="black-btn">Get Individual</button>
  </div>
  <div class="min-card">
    <div class="type">Team</div>
    <div class="price">$29<span>/mo</span></div>
    <p>Advanced collaboration features for professional teams.</p>
    <button class="white-btn">Get Team</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.min-pricing { display: flex; gap: 2rem; max-width: 800px; width: 100%; padding: 2rem; }
.min-card { flex: 1; border: 1px solid #eaeaea; padding: 3rem; display: flex; flex-direction: column; }
.type { font-size: 1rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 2rem; }
.price { font-size: 4rem; font-weight: 300; line-height: 1; margin-bottom: 1rem; }
.price span { font-size: 1rem; color: #888; }
p { color: #666; line-height: 1.6; margin-bottom: 3rem; flex: 1; }
button { padding: 1.2rem; font-size: 1rem; font-weight: bold; cursor: pointer; transition: 0.2s; border: 1px solid #000; }
.black-btn { background: #000; color: #fff; }
.black-btn:hover { background: #333; }
.white-btn { background: #fff; color: #000; }
.white-btn:hover { background: #f5f5f5; }
@media (max-width: 600px) { .min-pricing { flex-direction: column; } }`,
    jsCode: ``
  },

  // 5. Glassmorphism Pricing Grid
  {
    _id: "p5",
    title: "Glassmorphism Pricing Grid",
    slug: "glassmorphism-pricing-grid",
    description: "Translucent frosted glass pricing cards floating over a vibrant mesh gradient.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["pricing", "glassmorphism", "gradient", "modern"],
    isPremium: true,
    views: 8900,
    downloads: 3300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-pricing-bg">
  <div class="blob b1"></div>
  <div class="blob b2"></div>
  <div class="glass-grid">
    <div class="g-card">
      <h3>Hobby</h3>
      <h2>Free</h2>
      <ul><li>1 Project</li><li>Community Support</li></ul>
      <button>Start Free</button>
    </div>
    <div class="g-card g-main">
      <h3>Pro</h3>
      <h2>$15<span>/mo</span></h2>
      <ul><li>Unlimited Projects</li><li>Priority Support</li><li>Analytics</li></ul>
      <button>Upgrade Pro</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; overflow: hidden; }
.glass-pricing-bg { min-height: 100vh; background: #0f172a; position: relative; display: flex; justify-content: center; align-items: center; padding: 2rem; }
.blob { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.6; }
.b1 { width: 400px; height: 400px; background: #a855f7; top: 0; left: 10%; }
.b2 { width: 500px; height: 500px; background: #3b82f6; bottom: 0; right: 10%; }
.glass-grid { position: relative; z-index: 10; display: flex; gap: 2rem; align-items: center; width: 100%; max-width: 800px; }
.g-card { flex: 1; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); padding: 3rem 2rem; border-radius: 24px; color: #fff; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.g-main { background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.3); transform: scale(1.05); }
h3 { margin: 0 0 1rem 0; font-weight: 400; color: #cbd5e1; }
h2 { font-size: 3rem; margin: 0 0 2rem 0; font-weight: 800; }
h2 span { font-size: 1rem; color: #94a3b8; font-weight: normal; }
ul { list-style: none; padding: 0; margin: 0 0 2rem 0; text-align: left; }
li { padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
button { width: 100%; padding: 1rem; border-radius: 12px; border: none; background: #fff; color: #000; font-weight: bold; cursor: pointer; transition: 0.3s; }
button:hover { background: rgba(255,255,255,0.8); }
@media (max-width: 700px) { .glass-grid { flex-direction: column; } .g-main { transform: none; } }`,
    jsCode: ``
  },

  // 6. Feature Comparison Table
  {
    _id: "p6",
    title: "Feature Comparison Matrix",
    slug: "feature-comparison-matrix",
    description: "A detailed matrix-style table comparing features across different plans. Great for B2B.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["pricing", "comparison", "table", "b2b"],
    isPremium: false,
    views: 4800,
    downloads: 1500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="comp-table-wrap">
  <table class="comp-table">
    <thead>
      <tr>
        <th>Compare Plans</th>
        <th>Starter<br><span>$0</span></th>
        <th>Pro<br><span>$49</span></th>
        <th>Enterprise<br><span>Custom</span></th>
      </tr>
    </thead>
    <tbody>
      <tr class="header-row"><td colspan="4">Core Features</td></tr>
      <tr>
        <td>Users</td>
        <td>1</td>
        <td>Up to 10</td>
        <td>Unlimited</td>
      </tr>
      <tr>
        <td>Storage</td>
        <td>5GB</td>
        <td>100GB</td>
        <td>Unlimited</td>
      </tr>
      <tr class="header-row"><td colspan="4">Advanced</td></tr>
      <tr>
        <td>Custom Domain</td>
        <td>-</td>
        <td>✓</td>
        <td>✓</td>
      </tr>
      <tr>
        <td>API Access</td>
        <td>-</td>
        <td>-</td>
        <td>✓</td>
      </tr>
    </tbody>
  </table>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: sans-serif; display: flex; justify-content: center; padding: 4rem 1rem; }
.comp-table-wrap { width: 100%; max-width: 900px; overflow-x: auto; }
.comp-table { width: 100%; border-collapse: collapse; text-align: left; }
th { padding: 1.5rem 1rem; background: #f8fafc; border-bottom: 2px solid #e2e8f0; font-size: 1.2rem; }
th span { display: block; font-size: 1.5rem; font-weight: 800; color: #3b82f6; margin-top: 0.5rem; }
th:first-child { font-size: 1.5rem; color: #0f172a; }
td { padding: 1rem; border-bottom: 1px solid #f1f5f9; color: #334155; }
td:not(:first-child) { font-weight: 600; }
.header-row td { background: #f8fafc; font-weight: bold; color: #0f172a; padding-top: 2rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e2e8f0; }`,
    jsCode: ``
  },

  // 7. E-commerce Subscription Pricing
  {
    _id: "p7",
    title: "E-commerce Subscription Boxes",
    slug: "ecommerce-subscription-boxes",
    description: "Visual pricing cards suitable for physical subscription boxes (e.g., coffee, beauty boxes).",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tags: ["pricing", "ecommerce", "subscription", "product"],
    isPremium: true,
    views: 3800,
    downloads: 1100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sub-pricing">
  <div class="box-card">
    <div class="img-ph">☕</div>
    <h3>Taster Box</h3>
    <div class="p">$15 / delivery</div>
    <p>1 bag of single-origin coffee delivered every 4 weeks.</p>
    <button>Select Taster</button>
  </div>
  <div class="box-card best">
    <div class="badge">Most Popular</div>
    <div class="img-ph">☕☕</div>
    <h3>Enthusiast Box</h3>
    <div class="p">$25 / delivery</div>
    <p>2 bags of single-origin coffee delivered every 2 weeks.</p>
    <button>Select Enthusiast</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #faf4ed; font-family: 'Georgia', serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.sub-pricing { display: flex; gap: 2rem; max-width: 800px; padding: 2rem; }
.box-card { background: #fff; padding: 2rem; border-radius: 8px; text-align: center; border: 1px solid #e7dfd5; flex: 1; position: relative; }
.box-card.best { border: 2px solid #8b5e3c; }
.badge { position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: #8b5e3c; color: #fff; padding: 4px 12px; font-size: 0.8rem; font-family: sans-serif; text-transform: uppercase; letter-spacing: 1px; }
.img-ph { font-size: 4rem; margin-bottom: 1rem; }
h3 { margin: 0 0 0.5rem 0; font-size: 1.5rem; color: #333; }
.p { font-size: 1.2rem; font-weight: bold; color: #8b5e3c; margin-bottom: 1rem; font-family: sans-serif; }
p { color: #666; line-height: 1.5; margin-bottom: 2rem; }
button { width: 100%; padding: 1rem; background: #8b5e3c; color: #fff; border: none; font-family: sans-serif; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; transition: 0.2s; }
button:hover { background: #6b462a; }
@media(max-width: 600px) { .sub-pricing { flex-direction: column; } }`,
    jsCode: ``
  },

  // 8. Pay-as-you-go Slider Pricing
  {
    _id: "p8",
    title: "Dynamic Slider Pricing",
    slug: "dynamic-slider-pricing",
    description: "An interactive pricing widget where users drag a slider to estimate their monthly costs based on usage.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["pricing", "slider", "dynamic", "interactive"],
    isPremium: true,
    views: 6800,
    downloads: 2100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="slider-pricing">
  <h2>Calculate your cost</h2>
  <p>Pay only for what you use. Move the slider to estimate.</p>
  
  <div class="slider-area">
    <div class="metrics">
      <span id="usersOut">50</span> Active Users
    </div>
    <input type="range" min="10" max="1000" value="50" class="range-slider" id="usageSlider">
    <div class="labels">
      <span>10</span>
      <span>1,000+</span>
    </div>
  </div>
  
  <div class="calc-result">
    <h3>Estimated Cost</h3>
    <div class="final-price">$<span id="priceOut">25</span><span>/mo</span></div>
    <button>Start building</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: sans-serif; display: flex; justify-content: center; padding: 4rem 1rem; }
.slider-pricing { width: 100%; max-width: 600px; text-align: center; border: 1px solid #e5e7eb; padding: 3rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
h2 { margin: 0 0 0.5rem; font-size: 2rem; color: #111827; }
p { color: #6b7280; margin-bottom: 3rem; }
.metrics { font-size: 1.5rem; font-weight: bold; color: #3b82f6; margin-bottom: 1.5rem; }
.range-slider { -webkit-appearance: none; width: 100%; height: 8px; border-radius: 4px; background: #e5e7eb; outline: none; margin-bottom: 1rem; }
.range-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: #3b82f6; cursor: pointer; transition: 0.2s; box-shadow: 0 2px 6px rgba(59,130,246,0.4); }
.range-slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
.labels { display: flex; justify-content: space-between; color: #9ca3af; font-size: 0.85rem; margin-bottom: 3rem; }
.calc-result { background: #f9fafb; padding: 2rem; border-radius: 12px; }
.calc-result h3 { margin: 0 0 0.5rem; font-size: 1rem; color: #4b5563; text-transform: uppercase; letter-spacing: 1px; }
.final-price { font-size: 3rem; font-weight: 800; color: #111827; margin-bottom: 1.5rem; }
.final-price span:last-child { font-size: 1rem; color: #6b7280; font-weight: normal; }
button { width: 100%; padding: 1rem; background: #111827; color: #fff; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 1rem; }
button:hover { background: #374151; }`,
    jsCode: `const slider = document.getElementById('usageSlider');
const usersOut = document.getElementById('usersOut');
const priceOut = document.getElementById('priceOut');

slider.addEventListener('input', function() {
  usersOut.textContent = this.value;
  // Simple calc: $0.50 per user
  let price = Math.floor(this.value * 0.5);
  priceOut.textContent = price;
});`
  },

  // 9. Web3 Token/Tier Pricing
  {
    _id: "p9",
    title: "Web3 Staking Tiers",
    slug: "web3-staking-tiers",
    description: "A dark theme pricing component that uses token holding/staking amounts instead of fiat currency.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["pricing", "web3", "crypto", "staking"],
    isPremium: false,
    views: 4200,
    downloads: 1200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="web3-pricing">
  <div class="tier-card">
    <div class="badge-icon bronze">🥉</div>
    <h3>Bronze Node</h3>
    <div class="stake-req">Stake <span>1,000</span> TKN</div>
    <ul>
      <li>1x Voting Power</li>
      <li>Basic Analytics</li>
    </ul>
    <button>Connect Wallet</button>
  </div>
  <div class="tier-card active">
    <div class="badge-icon gold">🏆</div>
    <h3>Gold Node</h3>
    <div class="stake-req">Stake <span>10,000</span> TKN</div>
    <ul>
      <li>5x Voting Power</li>
      <li>Pro Analytics</li>
      <li>Early Access</li>
    </ul>
    <button>Stake Now</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #0f0a1f; color: #fff; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.web3-pricing { display: flex; gap: 2rem; padding: 2rem; max-width: 800px; }
.tier-card { flex: 1; background: #1a1528; border: 1px solid #322b46; padding: 2.5rem 2rem; border-radius: 16px; text-align: center; transition: 0.3s; }
.tier-card.active { border-color: #8b5cf6; box-shadow: 0 0 30px rgba(139,92,246,0.2); transform: scale(1.05); }
.badge-icon { font-size: 3rem; margin-bottom: 1rem; }
h3 { margin: 0 0 0.5rem; color: #e9d5ff; font-size: 1.5rem; }
.stake-req { font-size: 1.2rem; color: #a78bfa; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #322b46; }
.stake-req span { font-size: 2rem; font-weight: 800; color: #fff; display: block; margin-top: 0.5rem; }
ul { list-style: none; padding: 0; margin: 0 0 2rem; text-align: left; }
li { padding: 0.5rem 0; color: #d8b4fe; border-bottom: 1px dashed #322b46; }
button { width: 100%; padding: 1rem; background: transparent; border: 1px solid #8b5cf6; color: #c4b5fd; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.active button { background: #8b5cf6; color: #fff; }
button:hover { background: #7c3aed; color: #fff; }
@media(max-width: 600px) { .web3-pricing { flex-direction: column; } .tier-card.active { transform: none; } }`,
    jsCode: ``
  },

  // 10. Brutalist Pricing
  {
    _id: "p10",
    title: "Brutalist Big UI Pricing",
    slug: "brutalist-big-ui-pricing",
    description: "Loud, bold, and unapologetic brutalist design with thick borders and high contrast colors.",
    category: "Pricing",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["pricing", "brutalist", "bold", "retro"],
    isPremium: true,
    views: 5900,
    downloads: 1600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="brutal-wrap">
  <div class="b-card yellow">
    <h2>BASIC</h2>
    <div class="b-price">$10</div>
    <p>Just the essentials. No fluff.</p>
    <button>GRAB IT</button>
  </div>
  <div class="b-card pink">
    <h2>PRO</h2>
    <div class="b-price">$50</div>
    <p>Everything you need to crush it.</p>
    <button>GRAB IT</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e5e5e5; font-family: monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.brutal-wrap { display: flex; gap: 2rem; padding: 2rem; }
.b-card { width: 280px; border: 4px solid #000; padding: 2rem; box-shadow: 12px 12px 0 #000; text-align: center; display: flex; flex-direction: column; transition: 0.1s; }
.b-card:hover { transform: translate(-4px, -4px); box-shadow: 16px 16px 0 #000; }
.yellow { background: #fef08a; }
.pink { background: #fbcfe8; }
h2 { margin: 0; font-size: 2.5rem; text-transform: uppercase; border-bottom: 4px solid #000; padding-bottom: 1rem; }
.b-price { font-size: 4rem; font-weight: 900; margin: 1.5rem 0; }
p { font-size: 1.1rem; font-weight: bold; margin-bottom: 2rem; flex: 1; }
button { background: #000; color: #fff; border: none; padding: 1.2rem; font-family: monospace; font-size: 1.5rem; font-weight: 900; cursor: pointer; text-transform: uppercase; }
button:hover { background: #333; }
@media (max-width: 600px) { .brutal-wrap { flex-direction: column; } }`,
    jsCode: ``
  }
];
