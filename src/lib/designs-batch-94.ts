import { Design } from "./designs-data";

export const BATCH_94_DESIGNS: Design[] = [
  // 1. Classic Corporate Footer
  {
    _id: "foot1",
    title: "Classic Corporate Footer",
    slug: "classic-corporate-footer",
    description: "Standard multi-column footer with newsletter signup and social links.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "corporate", "classic", "links"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="foot-cl">
  <div class="cl-top">
    <div class="cl-brand">
      <h3>YourUI</h3>
      <p>Building the future of web design, one component at a time.</p>
    </div>
    <div class="cl-links">
      <div class="cl-col">
        <h4>Product</h4>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Releases</a>
      </div>
      <div class="cl-col">
        <h4>Company</h4>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <div class="cl-news">
      <h4>Subscribe</h4>
      <div class="cl-input-group">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  </div>
  <div class="cl-bottom">
    <p>&copy; 2024 YourUI Inc. All rights reserved.</p>
    <div class="cl-social">
      <a href="#">X</a>
      <a href="#">IN</a>
      <a href="#">GH</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; flex-direction: column; min-height: 100vh; }
.foot-cl { background: #0f172a; color: #f8fafc; padding: 60px 20px 20px; margin-top: auto; }
.cl-top { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 3fr 2fr; gap: 40px; border-bottom: 1px solid #334155; padding-bottom: 40px; margin-bottom: 20px; }
.cl-brand h3 { margin: 0 0 15px; font-size: 1.5rem; }
.cl-brand p { color: #94a3b8; font-size: 0.95rem; line-height: 1.5; }
.cl-links { display: flex; gap: 40px; }
.cl-col h4 { margin: 0 0 15px; font-size: 1.1rem; }
.cl-col a { display: block; color: #94a3b8; text-decoration: none; margin-bottom: 10px; font-size: 0.95rem; transition: 0.2s; }
.cl-col a:hover { color: #fff; }
.cl-news h4 { margin: 0 0 15px; font-size: 1.1rem; }
.cl-input-group { display: flex; gap: 10px; }
.cl-input-group input { padding: 10px; border-radius: 6px; border: 1px solid #334155; background: #1e293b; color: #fff; width: 100%; outline: none; }
.cl-input-group button { padding: 10px 15px; background: #3b82f6; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
.cl-bottom { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; color: #64748b; font-size: 0.9rem; }
.cl-social { display: flex; gap: 15px; }
.cl-social a { color: #94a3b8; text-decoration: none; font-weight: bold; }
.cl-social a:hover { color: #fff; }
@media (max-width: 768px) { .cl-top { grid-template-columns: 1fr; } .cl-bottom { flex-direction: column; gap: 15px; text-align: center; } }`,
    jsCode: ``
  },

  // 2. Minimal Footer
  {
    _id: "foot2",
    title: "Minimal Clean Footer",
    slug: "minimal-clean-footer",
    description: "Stripped back footer with simple centered links.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "minimal", "clean", "simple"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="foot-mn">
  <div class="mn-links">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
  </div>
  <p class="mn-copy">&copy; 2024 Minimalist Inc.</p>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; display: flex; flex-direction: column; min-height: 100vh; }
.foot-mn { margin-top: auto; padding: 40px 20px; border-top: 1px solid #e5e5e5; text-align: center; }
.mn-links { display: flex; justify-content: center; gap: 30px; margin-bottom: 20px; }
.mn-links a { color: #333; text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: 0.2s; }
.mn-links a:hover { color: #000; text-decoration: underline; }
.mn-copy { color: #999; font-size: 0.85rem; margin: 0; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Footer
  {
    _id: "foot3",
    title: "Cyberpunk Terminal Footer",
    slug: "cyberpunk-terminal-footer",
    description: "Hacker-themed footer with neon accents.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["footer", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="foot-cy">
  <div class="cy-content">
    <div class="cy-logo">SYS_CORE_v9</div>
    <div class="cy-nav">
      <a href="#">> INIT_SEQ</a>
      <a href="#">> DATA_DUMP</a>
      <a href="#">> EXIT</a>
    </div>
  </div>
  <div class="cy-foot">CONNECTION SECURE // IP: MASKED</div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; flex-direction: column; min-height: 100vh; }
.foot-cy { margin-top: auto; border-top: 2px solid #0f0; background: rgba(0,20,0,0.9); padding: 30px 20px; position: relative; box-shadow: 0 -5px 15px rgba(0,255,0,0.1); }
.cy-content { display: flex; justify-content: space-between; align-items: center; max-width: 1000px; margin: 0 auto 30px; }
.cy-logo { color: #0f0; font-size: 1.5rem; font-weight: bold; text-shadow: 0 0 5px #0f0; }
.cy-nav { display: flex; gap: 20px; }
.cy-nav a { color: #0aa; text-decoration: none; font-weight: bold; transition: 0.2s; }
.cy-nav a:hover { color: #0f0; text-shadow: 0 0 5px #0f0; }
.cy-foot { text-align: center; color: #050; font-size: 0.8rem; border-top: 1px dashed #050; padding-top: 15px; max-width: 1000px; margin: 0 auto; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Footer
  {
    _id: "foot4",
    title: "Glassmorphism Footer",
    slug: "glassmorphism-footer",
    description: "Frosted glass footer floating over a background.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["footer", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="spacer"></div>
  <footer class="foot-gl">
    <div class="gl-brand">GlassUI</div>
    <div class="gl-links">
      <a href="#">Home</a>
      <a href="#">Gallery</a>
      <a href="#">Contact</a>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; flex-direction: column; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.spacer { flex: 1; }
.foot-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.2); padding: 30px 40px; display: flex; justify-content: space-between; align-items: center; color: #fff; }
.gl-brand { font-size: 1.5rem; font-weight: bold; letter-spacing: 1px; }
.gl-links { display: flex; gap: 20px; }
.gl-links a { color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 500; transition: 0.2s; }
.gl-links a:hover { color: #fff; }`,
    jsCode: ``
  },

  // 5. Brutalist Footer
  {
    _id: "foot5",
    title: "Brutalist Block Footer",
    slug: "brutalist-block-footer",
    description: "High contrast, structural footer for brutalist designs.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["footer", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="foot-br">
  <div class="br-wrap">
    <div class="br-col">
      <h2>STREETWEAR</h2>
      <p>NO REFUNDS. NO RULES.</p>
    </div>
    <div class="br-links">
      <a href="#">SHOP</a>
      <a href="#">LOOKBOOK</a>
      <a href="#">FAQ</a>
    </div>
  </div>
  <div class="br-bottom">© 2024 BRUTAL INC.</div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; flex-direction: column; min-height: 100vh; }
.foot-br { margin-top: auto; background: #facc15; border-top: 6px solid #000; }
.br-wrap { display: flex; justify-content: space-between; padding: 40px; border-bottom: 6px solid #000; }
.br-col h2 { margin: 0 0 10px; font-size: 3rem; font-weight: 900; line-height: 1; }
.br-col p { margin: 0; font-weight: bold; font-size: 1.2rem; }
.br-links { display: flex; flex-direction: column; gap: 15px; align-items: flex-end; }
.br-links a { background: #000; color: #fff; padding: 10px 20px; font-weight: 900; text-decoration: none; border: 2px solid #000; transition: 0.1s; }
.br-links a:hover { background: #fff; color: #000; }
.br-bottom { padding: 20px 40px; font-weight: 900; font-size: 1.2rem; text-align: center; background: #000; color: #fff; }
@media (max-width: 600px) { .br-wrap { flex-direction: column; gap: 30px; } .br-links { align-items: flex-start; } }`,
    jsCode: ``
  },

  // 6. Dark Mode Glow Footer
  {
    _id: "foot6",
    title: "Dark Glow Footer",
    slug: "dark-glow-footer",
    description: "Deep dark footer with glowing accent border.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["footer", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="foot-dg">
  <div class="dg-inner">
    <div class="dg-info">
      <h3>NexusTech</h3>
      <p>Powering the next generation of web apps.</p>
    </div>
    <div class="dg-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Security</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; display: flex; flex-direction: column; min-height: 100vh; }
.foot-dg { margin-top: auto; background: #0f172a; position: relative; padding: 40px 20px; border-top: 1px solid #1e293b; }
.foot-dg::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #3b82f6, transparent); box-shadow: 0 0 10px #3b82f6; }
.dg-inner { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.dg-info h3 { margin: 0 0 5px; color: #f8fafc; font-size: 1.5rem; }
.dg-info p { margin: 0; color: #64748b; font-size: 0.9rem; }
.dg-links { display: flex; gap: 20px; }
.dg-links a { color: #3b82f6; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: 0.2s; }
.dg-links a:hover { color: #60a5fa; text-shadow: 0 0 8px rgba(59,130,246,0.5); }`,
    jsCode: ``
  },

  // 7. Centered Footer
  {
    _id: "foot7",
    title: "Centered Symmetrical Footer",
    slug: "centered-symmetrical-footer",
    description: "Elegant footer with perfectly centered content.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["footer", "centered", "elegant", "clean"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="foot-ct">
  <div class="ct-logo">Studio.</div>
  <div class="ct-links">
    <a href="#">Work</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
  <p class="ct-copy">Designed in New York. Built for the world.</p>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; flex-direction: column; min-height: 100vh; }
.foot-ct { margin-top: auto; padding: 60px 20px; background: #fff; text-align: center; border-top: 1px solid #eaeaea; }
.ct-logo { font-size: 2rem; font-weight: 800; color: #111; margin-bottom: 25px; }
.ct-links { display: flex; justify-content: center; gap: 40px; margin-bottom: 40px; }
.ct-links a { color: #555; text-decoration: none; font-weight: 500; font-size: 1.1rem; transition: 0.2s; }
.ct-links a:hover { color: #111; }
.ct-copy { color: #999; font-size: 0.9rem; margin: 0; }`,
    jsCode: ``
  },

  // 8. Split Footer
  {
    _id: "foot8",
    title: "Split CTA Footer",
    slug: "split-cta-footer",
    description: "Two-pane footer with a strong call-to-action on one side.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["footer", "split", "cta", "newsletter"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="foot-sp">
  <div class="sp-cta">
    <h2>Ready to grow?</h2>
    <p>Join 10,000+ users today.</p>
    <button>Get Started</button>
  </div>
  <div class="sp-nav">
    <div class="sp-col">
      <h4>Platform</h4>
      <a href="#">Analytics</a>
      <a href="#">Planning</a>
    </div>
    <div class="sp-col">
      <h4>Resources</h4>
      <a href="#">Blog</a>
      <a href="#">Guides</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; flex-direction: column; min-height: 100vh; }
.foot-sp { margin-top: auto; display: grid; grid-template-columns: 1fr 1fr; background: #fff; border-top: 1px solid #e2e8f0; }
.sp-cta { background: #0f172a; color: #fff; padding: 60px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; }
.sp-cta h2 { margin: 0 0 10px; font-size: 2.5rem; }
.sp-cta p { margin: 0 0 20px; color: #94a3b8; font-size: 1.1rem; }
.sp-cta button { padding: 12px 24px; background: #3b82f6; color: #fff; border: none; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; }
.sp-nav { padding: 60px; display: flex; gap: 60px; align-items: center; }
.sp-col h4 { margin: 0 0 15px; font-size: 1.1rem; color: #0f172a; }
.sp-col a { display: block; color: #64748b; text-decoration: none; margin-bottom: 10px; font-size: 0.95rem; }
.sp-col a:hover { color: #3b82f6; }
@media (max-width: 768px) { .foot-sp { grid-template-columns: 1fr; } }`,
    jsCode: ``
  },

  // 9. Floating Footer
  {
    _id: "foot9",
    title: "Floating Pill Footer",
    slug: "floating-pill-footer",
    description: "A compact footer that floats slightly above the bottom of the viewport.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "floating", "pill", "modern"],
    isPremium: true,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="foot-fl-wrap">
  <footer class="foot-fl">
    <div class="fl-brand">AppBeta</div>
    <div class="fl-links">
      <a href="#">Help</a>
      <a href="#">Terms</a>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; display: flex; flex-direction: column; min-height: 100vh; }
.foot-fl-wrap { margin-top: auto; padding: 20px; display: flex; justify-content: center; }
.foot-fl { background: #fff; padding: 15px 30px; border-radius: 50px; display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 600px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #f1f5f9; }
.fl-brand { font-weight: 800; color: #0f172a; }
.fl-links { display: flex; gap: 20px; }
.fl-links a { color: #64748b; text-decoration: none; font-size: 0.9rem; font-weight: 500; }
.fl-links a:hover { color: #0f172a; }`,
    jsCode: ``
  },

  // 10. Big Typography Footer
  {
    _id: "foot10",
    title: "Big Typography Footer",
    slug: "big-typography-footer",
    description: "Footer dominated by massive, screen-wide brand typography.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "typography", "bold", "large"],
    isPremium: true,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="foot-bt">
  <div class="bt-top">
    <div class="bt-links">
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
    </div>
    <div class="bt-contact">hello@yourui.com</div>
  </div>
  <div class="bt-text">YOURUI</div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; flex-direction: column; min-height: 100vh; }
.foot-bt { margin-top: auto; padding: 60px 40px 0; background: #000; color: #fff; overflow: hidden; }
.bt-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.bt-links { display: flex; gap: 20px; }
.bt-links a { color: #ccc; text-decoration: none; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }
.bt-links a:hover { color: #fff; }
.bt-contact { font-weight: 500; color: #ccc; }
.bt-text { font-size: 15vw; font-weight: 900; line-height: 0.8; letter-spacing: -2px; color: #fff; text-align: center; }`,
    jsCode: ``
  }
];
