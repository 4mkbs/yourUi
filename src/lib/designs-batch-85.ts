import { Design } from "./designs-data";

export const BATCH_85_DESIGNS: Design[] = [
  // 1. Classic 4-Column Footer
  {
    _id: "ft1",
    title: "Classic 4-Column Footer",
    slug: "classic-4-column-footer",
    description: "Standard SaaS footer with multiple columns of links and a bottom copyright bar.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "classic", "links", "navigation"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-cl">
  <div class="ft-grid">
    <div class="ft-col">
      <div class="ft-logo">YourUI</div>
      <p>Building the next generation of web interfaces, one component at a time.</p>
    </div>
    <div class="ft-col">
      <h4>Product</h4>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Changelog</a>
      <a href="#">Documentation</a>
    </div>
    <div class="ft-col">
      <h4>Company</h4>
      <a href="#">About Us</a>
      <a href="#">Careers</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </div>
    <div class="ft-col">
      <h4>Legal</h4>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookie Policy</a>
    </div>
  </div>
  <div class="ft-bottom">
    <p>&copy; 2026 YourUI Inc. All rights reserved.</p>
    <div class="ft-socials">
      <a href="#">TW</a>
      <a href="#">IN</a>
      <a href="#">GH</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; }
.ft-cl { background: #fff; padding: 80px 20px 20px; border-top: 1px solid #e2e8f0; }
.ft-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 60px; }
.ft-logo { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 20px; }
.ft-col p { color: #64748b; line-height: 1.6; margin: 0; max-width: 300px; }
.ft-col h4 { font-size: 1rem; color: #0f172a; margin: 0 0 20px; text-transform: uppercase; letter-spacing: 1px; }
.ft-col a { display: block; color: #64748b; text-decoration: none; margin-bottom: 12px; transition: color 0.2s; }
.ft-col a:hover { color: #3b82f6; }
.ft-bottom { max-width: 1200px; margin: 0 auto; padding-top: 30px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; color: #94a3b8; font-size: 0.9rem; }
.ft-socials { display: flex; gap: 15px; }
.ft-socials a { color: #94a3b8; text-decoration: none; font-weight: bold; transition: color 0.2s; }
.ft-socials a:hover { color: #0f172a; }
@media (max-width: 768px) { .ft-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .ft-grid { grid-template-columns: 1fr; } .ft-bottom { flex-direction: column; gap: 20px; text-align: center; } }`,
    jsCode: ``
  },

  // 2. Minimal Centered Footer
  {
    _id: "ft2",
    title: "Minimal Centered Footer",
    slug: "minimal-centered-footer",
    description: "Stripped back footer focusing entirely on a few central links.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "minimal", "clean", "typography"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-mn">
  <div class="mn-logo">YourUI</div>
  <div class="mn-links">
    <a href="#">Home</a>
    <a href="#">Components</a>
    <a href="#">Templates</a>
    <a href="#">Pricing</a>
  </div>
  <p class="mn-copy">&copy; 2026 YourUI. All rights reserved.</p>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; }
.ft-mn { padding: 60px 20px; text-align: center; border-top: 1px solid #eee; }
.mn-logo { font-size: 1.8rem; font-weight: bold; color: #000; margin-bottom: 30px; letter-spacing: -1px; }
.mn-links { display: flex; justify-content: center; flex-wrap: wrap; gap: 30px; margin-bottom: 40px; }
.mn-links a { color: #666; text-decoration: none; font-weight: 500; transition: color 0.2s; }
.mn-links a:hover { color: #000; }
.mn-copy { color: #999; font-size: 0.9rem; margin: 0; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Terminal Footer
  {
    _id: "ft3",
    title: "Cyberpunk Footer",
    slug: "cyberpunk-footer",
    description: "Hacker-themed footer with neon accents and terminal fonts.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["footer", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-cy">
  <div class="cy-inner">
    <div class="cy-sys">SYS.STATUS: ONLINE</div>
    <div class="cy-links">
      <a href="#">> INDEX</a>
      <a href="#">> MODULES</a>
      <a href="#">> UPLINK</a>
    </div>
    <div class="cy-copy">END OF LINE_</div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; }
.ft-cy { border-top: 2px solid #0f0; padding: 40px 20px; background: rgba(0,20,0,0.8); }
.cy-inner { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
.cy-sys { color: #0f0; font-weight: bold; padding: 5px 10px; border: 1px solid #0f0; }
.cy-links { display: flex; gap: 20px; }
.cy-links a { color: #0aa; text-decoration: none; transition: 0.2s; font-weight: bold; }
.cy-links a:hover { color: #0f0; text-shadow: 0 0 5px #0f0; }
.cy-copy { color: #f0f; font-weight: bold; animation: blink 1s infinite; }
@keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
@media (max-width: 600px) { .cy-inner { flex-direction: column; text-align: center; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Footer
  {
    _id: "ft4",
    title: "Glassmorphism Footer",
    slug: "glassmorphism-footer",
    description: "Frosted glass footer resting on a gradient background.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["footer", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div style="height: 300px;"></div>
  <footer class="ft-gl">
    <div class="gl-content">
      <div class="gl-brand">YourUI</div>
      <div class="gl-nav">
        <a href="#">Showcase</a>
        <a href="#">Docs</a>
        <a href="#">Support</a>
      </div>
      <div class="gl-copy">&copy; 2026. Designed with glass.</div>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); display: flex; flex-direction: column; justify-content: flex-end; }
.ft-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.2); padding: 40px 20px; }
.gl-content { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; color: #fff; }
.gl-brand { font-size: 1.5rem; font-weight: bold; letter-spacing: 1px; }
.gl-nav { display: flex; gap: 25px; }
.gl-nav a { color: rgba(255,255,255,0.8); text-decoration: none; transition: 0.2s; font-weight: 500; }
.gl-nav a:hover { color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.5); }
.gl-copy { opacity: 0.6; font-size: 0.9rem; }
@media (max-width: 600px) { .gl-content { flex-direction: column; text-align: center; } }`,
    jsCode: ``
  },

  // 5. Brutalist Footer
  {
    _id: "ft5",
    title: "Brutalist Footer",
    slug: "brutalist-footer",
    description: "High contrast, massive text footer.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["footer", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-br">
  <div class="br-massive">YOURUI</div>
  <div class="br-links">
    <a href="#">INDEX</a>
    <a href="#">INFO</a>
    <a href="#">BUY</a>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.ft-br { background: #000; color: #fff; padding: 60px 20px; border-top: 10px solid #facc15; }
.br-massive { font-size: clamp(4rem, 15vw, 12rem); font-weight: 900; line-height: 1; text-align: center; margin-bottom: 40px; color: #facc15; letter-spacing: -2px; }
.br-links { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
.br-links a { color: #fff; text-decoration: none; font-size: 2rem; font-weight: 900; padding: 10px 20px; border: 4px solid #fff; transition: 0.1s; }
.br-links a:hover { background: #fff; color: #000; }
.br-links a:active { transform: translate(4px, 4px); background: #facc15; border-color: #facc15; }`,
    jsCode: ``
  },

  // 6. Neumorphic Footer
  {
    _id: "ft6",
    title: "Neumorphic Footer",
    slug: "neumorphic-footer",
    description: "Soft UI footer with embossed social buttons.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["footer", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-neu">
  <div class="neu-wrap">
    <div class="neu-brand">YourUI</div>
    <div class="neu-socials">
      <a href="#" class="neu-btn">Tw</a>
      <a href="#" class="neu-btn">In</a>
      <a href="#" class="neu-btn">Gh</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding-top: 100px; }
.ft-neu { padding: 40px 20px; box-shadow: inset 0 6px 12px rgba(163,177,198,0.3); }
.neu-wrap { max-width: 800px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.neu-brand { font-size: 1.5rem; font-weight: bold; color: #4a5568; }
.neu-socials { display: flex; gap: 20px; }
.neu-btn { display: flex; justify-content: center; align-items: center; width: 50px; height: 50px; border-radius: 50%; text-decoration: none; font-weight: bold; color: #718096; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.neu-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Footer
  {
    _id: "ft7",
    title: "Dark Mode Glow Footer",
    slug: "dark-mode-glow-footer",
    description: "Deep dark footer with gradient lines and glowing links.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["footer", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-dg">
  <div class="dg-line"></div>
  <div class="dg-grid">
    <div class="dg-info">
      <h3>YourUI</h3>
      <p>Building the dark web of beautiful interfaces.</p>
    </div>
    <div class="dg-links">
      <a href="#">Components</a>
      <a href="#">Templates</a>
      <a href="#">License</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; }
.ft-dg { background: #0f172a; padding: 0 20px 60px; position: relative; }
.dg-line { height: 2px; width: 100%; background: linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, transparent); margin-bottom: 60px; }
.dg-grid { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 40px; }
.dg-info h3 { color: #f8fafc; font-size: 1.5rem; margin: 0 0 10px; }
.dg-info p { color: #94a3b8; margin: 0; }
.dg-links { display: flex; gap: 30px; }
.dg-links a { color: #cbd5e1; text-decoration: none; font-weight: 500; transition: 0.3s; }
.dg-links a:hover { color: #fff; text-shadow: 0 0 10px rgba(139,92,246,0.8); }`,
    jsCode: ``
  },

  // 8. Newsletter Footer
  {
    _id: "ft8",
    title: "Newsletter Footer",
    slug: "newsletter-footer",
    description: "Focuses heavily on email capture before showing minimal links.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["footer", "newsletter", "input", "clean"],
    isPremium: false,
    views: 39500,
    downloads: 11200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-nl">
  <div class="nl-top">
    <h2>Subscribe to our newsletter</h2>
    <p>Get the latest components and updates delivered to your inbox.</p>
    <div class="nl-form">
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  </div>
  <div class="nl-bottom">
    <span>YourUI &copy; 2026</span>
    <div class="nl-links">
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.ft-nl { padding: 80px 20px 40px; border-top: 1px solid #f1f5f9; }
.nl-top { max-width: 600px; margin: 0 auto 60px; text-align: center; }
.nl-top h2 { margin: 0 0 15px; font-size: 2rem; color: #0f172a; }
.nl-top p { color: #64748b; margin: 0 0 30px; }
.nl-form { display: flex; gap: 10px; max-width: 400px; margin: 0 auto; }
.nl-form input { flex: 1; padding: 12px 15px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; outline: none; transition: 0.2s; }
.nl-form input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.nl-form button { padding: 12px 24px; background: #0f172a; color: #fff; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.nl-form button:hover { background: #3b82f6; }
.nl-bottom { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding-top: 30px; border-top: 1px solid #f1f5f9; color: #94a3b8; }
.nl-links { display: flex; gap: 20px; }
.nl-links a { color: #94a3b8; text-decoration: none; transition: 0.2s; }
.nl-links a:hover { color: #0f172a; }
@media (max-width: 500px) { .nl-form { flex-direction: column; } .nl-bottom { flex-direction: column; gap: 20px; } }`,
    jsCode: ``
  },

  // 9. Huge Logo Footer
  {
    _id: "ft9",
    title: "Huge Logo Footer",
    slug: "huge-logo-footer",
    description: "Massive brand typography dominates the bottom of the page.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "huge", "logo", "typography"],
    isPremium: false,
    views: 38200,
    downloads: 9800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-hl">
  <div class="hl-top">
    <div class="hl-nav">
      <a href="#">About</a>
      <a href="#">Careers</a>
      <a href="#">Press</a>
    </div>
    <div class="hl-nav">
      <a href="#">Instagram</a>
      <a href="#">Twitter</a>
    </div>
  </div>
  <div class="hl-giant">YOURUI</div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #0f172a; color: #fff; }
.ft-hl { padding: 80px 20px 0; overflow: hidden; }
.hl-top { max-width: 1200px; margin: 0 auto 60px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 40px; }
.hl-nav { display: flex; gap: 30px; }
.hl-nav a { color: #cbd5e1; text-decoration: none; font-size: 1.1rem; font-weight: 500; transition: 0.2s; }
.hl-nav a:hover { color: #fff; }
.hl-giant { font-size: clamp(5rem, 20vw, 25rem); font-weight: 900; line-height: 0.8; text-align: center; color: #1e293b; letter-spacing: -0.05em; transform: translateY(10%); }`,
    jsCode: ``
  },

  // 10. Split Split Footer
  {
    _id: "ft10",
    title: "Split Layout Footer",
    slug: "split-layout-footer",
    description: "Brand info on the left, structured grid of links on the right.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "split", "layout", "clean"],
    isPremium: false,
    views: 37500,
    downloads: 9800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-ss">
  <div class="ss-left">
    <h3>YourUI</h3>
    <p>We build the components that build the web.</p>
    <div class="ss-copy">&copy; 2026. All rights reserved.</div>
  </div>
  <div class="ss-right">
    <div class="ss-col">
      <h4>Resources</h4>
      <a href="#">Components</a>
      <a href="#">Templates</a>
      <a href="#">Icons</a>
    </div>
    <div class="ss-col">
      <h4>Company</h4>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.ft-ss { display: flex; border-top: 1px solid #e2e8f0; }
.ss-left { flex: 1; padding: 80px; background: #f8fafc; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; justify-content: space-between; }
.ss-left h3 { font-size: 2rem; color: #0f172a; margin: 0 0 15px; }
.ss-left p { color: #64748b; margin: 0 0 40px; font-size: 1.1rem; max-width: 300px; }
.ss-copy { color: #94a3b8; font-size: 0.9rem; }
.ss-right { flex: 1.5; padding: 80px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; background: #fff; }
.ss-col h4 { font-size: 1.1rem; color: #0f172a; margin: 0 0 25px; }
.ss-col a { display: block; color: #64748b; text-decoration: none; margin-bottom: 15px; transition: 0.2s; }
.ss-col a:hover { color: #3b82f6; padding-left: 5px; }
@media (max-width: 900px) { .ft-ss { flex-direction: column; } .ss-left { border-right: none; border-bottom: 1px solid #e2e8f0; padding: 60px 20px; } .ss-right { padding: 60px 20px; } }`,
    jsCode: ``
  }
];
