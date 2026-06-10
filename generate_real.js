const fs = require('fs');

const realDesigns = [
  // 1. Login
  {
    _id: "1",
    title: "Glassmorphism Login Card",
    slug: "glassmorphism-login-card",
    description: "Sleek, futuristic login card with dynamic glassmorphic blur and subtle borders.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["glassmorphism", "modern", "interactive"],
    isPremium: false,
    views: 1240,
    downloads: 450,
    author: "YourUI",
    htmlCode: `<div class="login-container">\n  <div class="login-card">\n    <h2>Welcome Back</h2>\n    <p>Enter details to access your vault</p>\n    <form id="login-form">\n      <div class="input-group">\n        <label for="email">Email Address</label>\n        <input type="email" id="email" placeholder="you@example.com" required />\n      </div>\n      <div class="input-group">\n        <label for="password">Password</label>\n        <input type="password" id="password" placeholder="••••••••" required />\n      </div>\n      <div class="options">\n        <label><input type="checkbox" /> Remember me</label>\n        <a href="#">Forgot password?</a>\n      </div>\n      <button type="submit" class="submit-btn">Unlock Vault</button>\n    </form>\n  </div>\n</div>`,
    cssCode: `body { margin: 0; background: radial-gradient(circle at top right, #1e1b4b, #090514); font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; color: #e2e8f0; }\n.login-card { background: rgba(255,255,255,0.03); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 40px; width: 350px; text-align: center; box-shadow: 0 30px 60px rgba(0,0,0,0.4); }\nh2 { margin-bottom: 8px; background: linear-gradient(135deg, #a5b4fc, #818cf8, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }\np { color: #94a3b8; font-size: 0.9rem; margin-bottom: 30px; }\n.input-group { text-align: left; margin-bottom: 20px; }\nlabel { display: block; font-size: 0.8rem; color: #cbd5e1; margin-bottom: 6px; text-transform: uppercase; }\ninput { width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; box-sizing: border-box; outline: none; }\ninput:focus { border-color: #6366f1; box-shadow: 0 0 15px rgba(99,102,241,0.25); }\n.options { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 25px; color: #94a3b8; }\n.options a { color: #818cf8; text-decoration: none; }\n.submit-btn { width: 100%; padding: 14px; background: linear-gradient(135deg, #6366f1, #4f46e5); border: none; border-radius: 10px; color: white; font-weight: bold; cursor: pointer; }`,
    jsCode: `document.getElementById('login-form').addEventListener('submit', (e) => { e.preventDefault(); alert('Welcome!'); });`
  },
  // 2. Pricing
  {
    _id: "2",
    title: "Minimal Pricing Cards",
    slug: "minimal-pricing-cards",
    description: "Highly interactive pricing cards featuring clear highlight layout and gradient text.",
    category: "Pricing Table",
    thumbnail: "https://images.unsplash.com/photo-1618005198143-d3667104b2a8?auto=format&fit=crop&w=800&q=80",
    tags: ["pricing", "business", "minimal"],
    isPremium: false,
    views: 840,
    downloads: 210,
    author: "YourUI",
    htmlCode: `<div class="pricing-container">\n  <div class="pricing-card">\n    <div class="plan-name">Starter</div>\n    <div class="price">$9<span>/mo</span></div>\n    <ul class="features">\n      <li>1 Project</li>\n      <li>Basic Analytics</li>\n    </ul>\n    <button class="pricing-btn">Choose Plan</button>\n  </div>\n  <div class="pricing-card popular">\n    <div class="badge">Popular</div>\n    <div class="plan-name">Pro</div>\n    <div class="price">$29<span>/mo</span></div>\n    <ul class="features">\n      <li>Unlimited Projects</li>\n      <li>Advanced Analytics</li>\n      <li>API Integration</li>\n    </ul>\n    <button class="pricing-btn">Get Started</button>\n  </div>\n</div>`,
    cssCode: `body { background: #0f172a; color: #fff; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }\n.pricing-container { display: flex; gap: 30px; }\n.pricing-card { background: #1e293b; border-radius: 16px; padding: 40px 30px; width: 280px; position: relative; border: 1px solid #334155; transition: 0.3s; }\n.pricing-card:hover { transform: translateY(-8px); }\n.popular { border-color: #6366f1; box-shadow: 0 10px 30px rgba(99,102,241,0.15); }\n.badge { position: absolute; top: 15px; right: 15px; background: #6366f1; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; }\n.plan-name { font-size: 1.25rem; color: #94a3b8; }\n.price { font-size: 3rem; font-weight: bold; margin: 20px 0; }\n.price span { font-size: 1rem; color: #94a3b8; }\n.features { list-style: none; padding: 0; margin: 30px 0; }\n.features li { margin-bottom: 15px; color: #cbd5e1; }\n.pricing-btn { width: 100%; padding: 12px; border: none; border-radius: 8px; background: #334155; color: #fff; font-weight: bold; cursor: pointer; }\n.popular .pricing-btn { background: #6366f1; }`,
    jsCode: ``
  },
  // 3. Navbar
  {
    _id: "3",
    title: "Floating Glass Navbar",
    slug: "floating-glass-navbar",
    description: "A modern sticky navbar with blur effect and hover animations.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    tags: ["navbar", "navigation", "glassmorphism"],
    isPremium: false,
    views: 3100,
    downloads: 950,
    author: "UI Master",
    htmlCode: `<nav class="navbar">\n  <div class="logo">Brand.</div>\n  <ul class="nav-links">\n    <li><a href="#">Home</a></li>\n    <li><a href="#">Features</a></li>\n    <li><a href="#">Pricing</a></li>\n  </ul>\n  <button class="cta">Sign Up</button>\n</nav>\n<div class="content">\n  <h1>Scroll down</h1>\n</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #121212; color: #fff; height: 200vh; }\n.navbar { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 1000px; display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 50px; box-sizing: border-box; }\n.logo { font-weight: 800; font-size: 1.2rem; letter-spacing: 1px; }\n.nav-links { display: flex; gap: 30px; list-style: none; margin: 0; padding: 0; }\n.nav-links a { color: #a1a1aa; text-decoration: none; font-size: 0.9rem; transition: 0.3s; }\n.nav-links a:hover { color: #fff; }\n.cta { background: #fff; color: #000; border: none; padding: 10px 20px; border-radius: 30px; font-weight: bold; cursor: pointer; transition: 0.3s; }\n.cta:hover { background: #e5e5e5; transform: scale(1.05); }\n.content { padding-top: 150px; text-align: center; }`,
    jsCode: ``
  },
  // 4. Product Card
  {
    _id: "4",
    title: "E-commerce Shoe Card",
    slug: "ecommerce-shoe-card",
    description: "Product card with size selector and animated add to cart button.",
    category: "E-commerce",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    tags: ["ecommerce", "card", "product"],
    isPremium: true,
    views: 4500,
    downloads: 1200,
    author: "CommerceUI",
    htmlCode: `<div class="card">\n  <div class="img-box">\n    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" alt="Shoe" />\n  </div>\n  <div class="details">\n    <h2>Nike Air Max<br><span>Men's Running Shoe</span></h2>\n    <div class="price">$120</div>\n    <div class="sizes">\n      <h3>Size:</h3>\n      <span>7</span><span>8</span><span class="active">9</span><span>10</span>\n    </div>\n    <button>Add to Cart</button>\n  </div>\n</div>`,
    cssCode: `body { background: #e2e8f0; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: sans-serif; }\n.card { width: 320px; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 25px rgba(0,0,0,0.1); }\n.img-box { background: #f8fafc; padding: 20px; text-align: center; }\n.img-box img { width: 100%; border-radius: 10px; transform: rotate(-15deg); transition: 0.5s; }\n.card:hover .img-box img { transform: rotate(0deg) scale(1.1); }\n.details { padding: 25px; }\n.details h2 { margin: 0; font-size: 1.4rem; color: #1e293b; }\n.details h2 span { font-size: 0.9rem; color: #64748b; font-weight: normal; }\n.price { font-size: 1.5rem; font-weight: bold; color: #ef4444; margin: 15px 0; }\n.sizes { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }\n.sizes h3 { margin: 0; font-size: 0.9rem; color: #475569; }\n.sizes span { width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; background: #f1f5f9; border-radius: 5px; font-size: 0.8rem; cursor: pointer; }\n.sizes span.active { background: #1e293b; color: #fff; }\nbutton { width: 100%; background: #1e293b; color: #fff; border: none; padding: 15px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.3s; }\nbutton:hover { background: #0f172a; }`,
    jsCode: ``
  },
  // 5. Testimonial
  {
    _id: "5",
    title: "Agency Testimonial Grid",
    slug: "agency-testimonial-grid",
    description: "A beautiful masonry grid for customer reviews.",
    category: "Agency",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    tags: ["testimonial", "grid", "agency"],
    isPremium: false,
    views: 2200,
    downloads: 500,
    author: "CreativeTim",
    htmlCode: `<div class="testimonial">\n  <div class="stars">★★★★★</div>\n  <p>"This platform completely revolutionized our workflow. We shipped 3 weeks earlier than planned."</p>\n  <div class="user">\n    <img src="https://i.pravatar.cc/100?img=1" alt="Avatar">\n    <div>\n      <h4>Sarah Jenkins</h4>\n      <span>CTO at TechFlow</span>\n    </div>\n  </div>\n</div>`,
    cssCode: `body { background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: sans-serif; }\n.testimonial { background: #1e293b; border: 1px solid #334155; padding: 30px; border-radius: 16px; width: 350px; color: #fff; }\n.stars { color: #fbbf24; font-size: 1.2rem; margin-bottom: 15px; }\np { color: #cbd5e1; line-height: 1.6; font-size: 1.05rem; font-style: italic; margin-bottom: 25px; }\n.user { display: flex; align-items: center; gap: 15px; }\n.user img { width: 50px; height: 50px; border-radius: 50%; }\n.user h4 { margin: 0; font-size: 1rem; }\n.user span { color: #64748b; font-size: 0.85rem; }`,
    jsCode: ``
  },
  // 6. Features SaaS
  {
    _id: "6",
    title: "SaaS Features Grid",
    slug: "saas-features-grid",
    description: "Modern feature showcase with neon hover effects.",
    category: "SaaS",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["features", "saas", "grid"],
    isPremium: true,
    views: 5200,
    downloads: 1400,
    author: "SaaSMaster",
    htmlCode: `<div class="grid">\n  <div class="card">\n    <div class="icon">⚡</div>\n    <h3>Lightning Fast</h3>\n    <p>Optimized edge network delivers content in milliseconds worldwide.</p>\n  </div>\n  <div class="card">\n    <div class="icon">🔒</div>\n    <h3>Bank-grade Security</h3>\n    <p>End-to-end encryption ensures your data remains completely private.</p>\n  </div>\n</div>`,
    cssCode: `body { background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: sans-serif; }\n.grid { display: flex; gap: 20px; }\n.card { background: #111; border: 1px solid #222; padding: 30px; border-radius: 16px; width: 280px; transition: 0.3s; }\n.card:hover { border-color: #3b82f6; box-shadow: 0 10px 30px rgba(59,130,246,0.1); transform: translateY(-5px); }\n.icon { font-size: 2rem; background: #1d4ed8; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center; border-radius: 12px; margin-bottom: 20px; }\nh3 { color: #fff; margin: 0 0 10px 0; font-size: 1.2rem; }\np { color: #9ca3af; margin: 0; line-height: 1.5; font-size: 0.95rem; }`,
    jsCode: ``
  }
];

let out = `export interface Design {\n  _id: string;\n  title: string;\n  slug: string;\n  description: string;\n  category: string;\n  thumbnail: string;\n  htmlCode: string;\n  cssCode: string;\n  jsCode: string;\n  tags: string[];\n  isPremium: boolean;\n  views: number;\n  downloads: number;\n  author: string;\n  createdAt: string;\n}\n\nexport const CATEGORIES = [\n  "Landing Page", "Portfolio", "Dashboard", "Login Page",\n  "Registration Form", "Pricing Table", "Hero Section", "Navbar",\n  "Footer", "E-commerce", "Blog", "SaaS", "Agency"\n];\n\n`;

out += `export const MOCK_DESIGNS: Design[] = [\n`;
realDesigns.forEach((d, i) => {
  out += `  {\n    _id: "${d._id}",\n    title: "${d.title}",\n    slug: "${d.slug}",\n    description: "${d.description}",\n    category: "${d.category}",\n    thumbnail: "${d.thumbnail}",\n    tags: ${JSON.stringify(d.tags)},\n    isPremium: ${d.isPremium},\n    views: ${d.views},\n    downloads: ${d.downloads},\n    author: "${d.author}",\n    createdAt: "${new Date().toISOString()}",\n    htmlCode: \`${d.htmlCode}\`,\n    cssCode: \`${d.cssCode}\`,\n    jsCode: \`${d.jsCode}\`\n  }${i === realDesigns.length - 1 ? '' : ','}\n`;
});
out += `];\n`;

fs.writeFileSync('src/lib/designs-data.ts', out, 'utf8');
console.log('Real designs injected.');
