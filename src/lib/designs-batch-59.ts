import { Design } from "./designs-data";

export const BATCH_59_DESIGNS: Design[] = [
  // 1. Classic 4-Column Footer
  {
    _id: "ft1",
    title: "Classic Multi-Column Footer",
    slug: "classic-multi-column-footer",
    description: "Standard clean footer with brand info and organized link columns.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "classic", "columns", "clean"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-cl">
  <div class="ft-cl-inner">
    <div class="ft-cl-brand">
      <h3>YourBrand</h3>
      <p>Building beautiful interfaces for the modern web since 2024.</p>
      <div class="ft-cl-social">
        <a href="#">Tw</a> <a href="#">In</a> <a href="#">Gh</a>
      </div>
    </div>
    <div class="ft-cl-links">
      <h4>Product</h4>
      <ul><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li><li><a href="#">Changelog</a></li></ul>
    </div>
    <div class="ft-cl-links">
      <h4>Company</h4>
      <ul><li><a href="#">About Us</a></li><li><a href="#">Careers</a></li><li><a href="#">Contact</a></li></ul>
    </div>
    <div class="ft-cl-links">
      <h4>Legal</h4>
      <ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li></ul>
    </div>
  </div>
  <div class="ft-cl-bottom">
    &copy; 2024 YourBrand Inc. All rights reserved.
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.ft-cl { background: #ffffff; border-top: 1px solid #e2e8f0; padding-top: 60px; color: #475569; font-size: 0.9rem; }
.ft-cl-inner { max-width: 1200px; margin: 0 auto; padding: 0 20px; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
.ft-cl-brand h3 { color: #0f172a; font-size: 1.5rem; margin: 0 0 15px; }
.ft-cl-brand p { margin: 0 0 20px; line-height: 1.6; max-width: 300px; }
.ft-cl-social a { display: inline-flex; width: 32px; height: 32px; background: #f1f5f9; color: #334155; justify-content: center; align-items: center; border-radius: 50%; text-decoration: none; margin-right: 10px; transition: 0.2s; font-weight: 600; font-size: 0.8rem; }
.ft-cl-social a:hover { background: #3b82f6; color: #fff; }
.ft-cl-links h4 { color: #0f172a; margin: 0 0 20px; font-size: 1rem; }
.ft-cl-links ul { list-style: none; padding: 0; margin: 0; }
.ft-cl-links li { margin-bottom: 12px; }
.ft-cl-links a { color: #64748b; text-decoration: none; transition: color 0.2s; }
.ft-cl-links a:hover { color: #3b82f6; }
.ft-cl-bottom { text-align: center; padding: 20px; margin-top: 60px; border-top: 1px solid #e2e8f0; color: #94a3b8; }
@media (max-width: 768px) { .ft-cl-inner { grid-template-columns: 1fr; gap: 30px; } }`,
    jsCode: ``
  },

  // 2. Minimal Centered Footer
  {
    _id: "ft2",
    title: "Minimal Centered Footer",
    slug: "minimal-centered-footer",
    description: "Simple, elegant footer with centered logo, links, and copyright.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "minimal", "centered", "clean"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-mn">
  <div class="ft-m-logo">▲ LOGO</div>
  <ul class="ft-m-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div class="ft-m-copy">© 2024 Minimal Inc.</div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; }
.ft-mn { background: #fff; border-top: 1px solid #eaeaea; padding: 60px 20px; text-align: center; }
.ft-m-logo { font-size: 1.5rem; font-weight: 800; color: #111; margin-bottom: 30px; letter-spacing: 2px; }
.ft-m-links { list-style: none; padding: 0; margin: 0 0 30px; display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
.ft-m-links a { color: #555; text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: color 0.2s; }
.ft-m-links a:hover { color: #000; }
.ft-m-copy { color: #999; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Footer
  {
    _id: "ft3",
    title: "Cyberpunk Footer",
    slug: "cyberpunk-footer",
    description: "Neon lit, high tech footer for gaming or developer sites.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["footer", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-cy">
  <div class="ft-cy-grid">
    <div>
      <h3>// NEON_SYS</h3>
      <p>Decentralized network routing protocols since 2077.</p>
    </div>
    <div class="ft-cy-links">
      <h4>[ NODES ]</h4>
      <a href="#">> UPLINK</a>
      <a href="#">> TERMINAL</a>
    </div>
    <div class="ft-cy-stat">
      <h4>[ STATUS ]</h4>
      <p class="cy-on">SYSTEM ONLINE</p>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; }
.ft-cy { background: #0a0a0a; border-top: 2px solid #0ff; padding: 50px 20px; color: #aaa; position: relative; box-shadow: 0 -5px 15px rgba(0,255,255,0.1); }
.ft-cy::before { content: ''; position: absolute; top: -2px; left: 0; width: 100px; height: 2px; background: #f0f; box-shadow: 0 0 10px #f0f; }
.ft-cy-grid { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; }
.ft-cy h3 { color: #fff; font-size: 1.2rem; text-shadow: 0 0 5px #0ff; margin: 0 0 15px; letter-spacing: 2px; }
.ft-cy h4 { color: #f0f; font-size: 1rem; margin: 0 0 20px; letter-spacing: 1px; }
.ft-cy p { line-height: 1.6; margin: 0; }
.ft-cy-links { display: flex; flex-direction: column; gap: 10px; }
.ft-cy-links a { color: #0ff; text-decoration: none; transition: 0.2s; }
.ft-cy-links a:hover { color: #fff; text-shadow: 0 0 8px #0ff; }
.cy-on { color: #0f0; text-shadow: 0 0 5px #0f0; font-weight: bold; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Footer
  {
    _id: "ft4",
    title: "Glassmorphism Footer",
    slug: "glassmorphism-footer",
    description: "Frosted glass aesthetic resting over a vibrant background.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["footer", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <!-- Spacer to push footer down -->
  <div style="flex-grow: 1;"></div>
  
  <footer class="ft-gl">
    <div class="ft-g-inner">
      <h2>Aura UI</h2>
      <p>Design beautiful interfaces instantly.</p>
      <div class="ft-g-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; flex-direction: column; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.ft-gl { margin: 20px; padding: 40px; border-radius: 24px; background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.1); color: #fff; text-align: center; }
.ft-g-inner h2 { margin: 0 0 10px; font-size: 1.8rem; font-weight: 700; letter-spacing: 1px; }
.ft-g-inner p { margin: 0 0 25px; color: rgba(255,255,255,0.8); }
.ft-g-links { display: flex; justify-content: center; gap: 25px; }
.ft-g-links a { color: #fff; text-decoration: none; font-weight: 500; opacity: 0.9; transition: opacity 0.2s; }
.ft-g-links a:hover { opacity: 1; text-decoration: underline; }`,
    jsCode: ``
  },

  // 5. Brutalist Footer
  {
    _id: "ft5",
    title: "Brutalist Footer",
    slug: "brutalist-footer",
    description: "Thick borders, harsh shadows, and bold typography.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["footer", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-br">
  <div class="ft-b-head">
    <h2>STAY LOUD.</h2>
    <a href="#" class="ft-b-btn">JOIN NOW</a>
  </div>
  <div class="ft-b-foot">
    <span>© 2024 STUDIO</span>
    <span>ALL RIGHTS RESERVED.</span>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; flex-direction: column; min-height: 100vh; }
.ft-br { margin-top: auto; background: #ec4899; border-top: 5px solid #000; padding: 60px 40px; color: #000; }
.ft-b-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 5px solid #000; padding-bottom: 40px; margin-bottom: 40px; flex-wrap: wrap; gap: 20px; }
.ft-b-head h2 { margin: 0; font-size: 4vw; font-weight: 900; letter-spacing: -2px; }
.ft-b-btn { display: inline-block; background: #facc15; border: 4px solid #000; box-shadow: 6px 6px 0 #000; padding: 15px 30px; font-weight: 900; font-size: 1.2rem; text-decoration: none; color: #000; transition: 0.2s; }
.ft-b-btn:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 #000; }
.ft-b-foot { display: flex; justify-content: space-between; font-weight: 900; font-size: 1.1rem; flex-wrap: wrap; gap: 10px; }`,
    jsCode: ``
  },

  // 6. Neumorphic Footer
  {
    _id: "ft6",
    title: "Neumorphic Footer",
    slug: "neumorphic-footer",
    description: "Soft UI design matching neumorphic application backgrounds.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["footer", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-neu">
  <div class="ft-n-inner">
    <h2>SoftUI</h2>
    <div class="ft-n-links">
      <button>Home</button>
      <button>App</button>
      <button>Contact</button>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; flex-direction: column; min-height: 100vh; }
.ft-neu { margin-top: auto; padding: 40px 20px; background: #e0e5ec; box-shadow: inset 0 10px 20px -10px rgba(163,177,198,0.6); }
.ft-n-inner { max-width: 800px; margin: 0 auto; text-align: center; }
.ft-n-inner h2 { margin: 0 0 30px; color: #2d3748; font-size: 1.8rem; letter-spacing: 2px; }
.ft-n-links { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.ft-n-links button { padding: 12px 30px; border: none; border-radius: 12px; background: #e0e5ec; color: #718096; font-weight: bold; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.ft-n-links button:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); color: #3182ce; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Footer
  {
    _id: "ft7",
    title: "Dark Mode Glow Footer",
    slug: "dark-mode-glow-footer",
    description: "Deep dark footer with glowing top border gradient.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["footer", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-dg">
  <div class="ft-d-inner">
    <div class="ft-d-left">
      <h2>Nova</h2>
      <p>Next generation digital experiences.</p>
    </div>
    <div class="ft-d-right">
      <input type="email" placeholder="Subscribe to updates..." />
      <button>Join</button>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; display: flex; flex-direction: column; min-height: 100vh; }
.ft-dg { margin-top: auto; background: #0f172a; position: relative; padding: 60px 20px; color: #f8fafc; }
.ft-dg::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #3b82f6, #ec4899, transparent); box-shadow: 0 0 20px rgba(59,130,246,0.5); }
.ft-d-inner { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 40px; }
.ft-d-left h2 { margin: 0 0 10px; font-size: 1.8rem; }
.ft-d-left p { margin: 0; color: #94a3b8; }
.ft-d-right { display: flex; gap: 10px; width: 100%; max-width: 400px; }
.ft-d-right input { flex: 1; padding: 12px 15px; background: #1e293b; border: 1px solid #334155; border-radius: 8px; color: #fff; outline: none; }
.ft-d-right input:focus { border-color: #3b82f6; }
.ft-d-right button { padding: 12px 25px; background: #3b82f6; color: #fff; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; box-shadow: 0 0 15px rgba(59,130,246,0.3); }
.ft-d-right button:hover { background: #2563eb; }`,
    jsCode: ``
  },

  // 8. Large Newsletter Footer
  {
    _id: "ft8",
    title: "Large Newsletter Footer",
    slug: "large-newsletter-footer",
    description: "Focuses heavily on email capture before standard footer links.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["footer", "newsletter", "form", "clean"],
    isPremium: false,
    views: 33400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-nl">
  <div class="ft-n-top">
    <h2>Stay in the loop</h2>
    <p>Get our weekly newsletter delivered right to your inbox.</p>
    <form class="ft-n-form">
      <input type="email" placeholder="Enter your email" />
      <button type="button">Subscribe</button>
    </form>
  </div>
  <div class="ft-n-bot">
    <div class="ft-n-logo">Brand.</div>
    <div class="ft-n-links"><a href="#">Terms</a> <a href="#">Privacy</a></div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; flex-direction: column; min-height: 100vh; }
.ft-nl { margin-top: auto; background: #0f172a; color: #fff; padding: 80px 20px 30px; text-align: center; }
.ft-n-top { max-width: 600px; margin: 0 auto 60px; }
.ft-n-top h2 { margin: 0 0 15px; font-size: 2.2rem; }
.ft-n-top p { color: #cbd5e1; margin: 0 0 30px; font-size: 1.1rem; }
.ft-n-form { display: flex; gap: 10px; max-width: 450px; margin: 0 auto; }
.ft-n-form input { flex: 1; padding: 15px; border-radius: 8px; border: none; font-size: 1rem; }
.ft-n-form button { padding: 15px 30px; border-radius: 8px; border: none; background: #3b82f6; color: #fff; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; }
.ft-n-form button:hover { background: #2563eb; }
.ft-n-bot { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding-top: 30px; border-top: 1px solid #1e293b; flex-wrap: wrap; gap: 20px; }
.ft-n-logo { font-size: 1.5rem; font-weight: 800; }
.ft-n-links a { color: #94a3b8; text-decoration: none; margin-left: 20px; transition: 0.2s; }
.ft-n-links a:hover { color: #fff; }
@media (max-width: 500px) { .ft-n-form { flex-direction: column; } }`,
    jsCode: ``
  },

  // 9. Split Background Footer
  {
    _id: "ft9",
    title: "Split Background Footer",
    slug: "split-background-footer",
    description: "Two-tone background separating the CTA from the final links.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "split", "cta", "two-tone"],
    isPremium: false,
    views: 29100,
    downloads: 7700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-sp">
  <div class="ft-s-top">
    <h2>Ready to build something amazing?</h2>
    <button>Start Free Trial</button>
  </div>
  <div class="ft-s-bot">
    <span>© 2024 YourUI</span>
    <div class="ft-s-links">
      <a href="#">Support</a>
      <a href="#">Docs</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; flex-direction: column; min-height: 100vh; }
.ft-sp { margin-top: auto; }
.ft-s-top { background: #3b82f6; color: #fff; padding: 80px 20px; text-align: center; }
.ft-s-top h2 { margin: 0 0 30px; font-size: 2rem; font-weight: 700; }
.ft-s-top button { padding: 15px 40px; background: #fff; color: #3b82f6; border: none; border-radius: 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: 0.2s; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.ft-s-top button:hover { transform: translateY(-3px); box-shadow: 0 15px 25px rgba(0,0,0,0.15); }
.ft-s-bot { background: #0f172a; color: #94a3b8; padding: 30px 40px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
.ft-s-links a { color: #cbd5e1; text-decoration: none; margin-left: 20px; font-size: 0.95rem; transition: 0.2s; }
.ft-s-links a:hover { color: #fff; }`,
    jsCode: ``
  },

  // 10. Floating Island Footer
  {
    _id: "ft10",
    title: "Floating Island Footer",
    slug: "floating-island-footer",
    description: "Modern footer that floats above the bottom of the page.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "floating", "island", "modern"],
    isPremium: true,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-fl-wrapper">
  <!-- Spacer -->
  <div style="flex-grow: 1;"></div>
  
  <footer class="ft-fl">
    <div class="ft-f-brand">✨ Island UI</div>
    <div class="ft-f-links">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.ft-fl-wrapper { min-height: 100vh; display: flex; flex-direction: column; padding: 20px; box-sizing: border-box; }
.ft-fl { background: #fff; border-radius: 100px; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; flex-wrap: wrap; gap: 20px; }
.ft-f-brand { font-weight: 800; font-size: 1.2rem; color: #0f172a; }
.ft-f-links { display: flex; gap: 25px; }
.ft-f-links a { color: #64748b; text-decoration: none; font-weight: 500; font-size: 0.95rem; transition: 0.2s; }
.ft-f-links a:hover { color: #3b82f6; }
@media (max-width: 500px) { .ft-fl { border-radius: 20px; flex-direction: column; text-align: center; } }`,
    jsCode: ``
  }
];
