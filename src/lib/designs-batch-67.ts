import { Design } from "./designs-data";

export const BATCH_67_DESIGNS: Design[] = [
  // 1. Classic 4-Column Footer
  {
    _id: "ft1",
    title: "Classic 4-Column Footer",
    slug: "classic-4-column-footer",
    description: "Standard corporate footer with brand info and multi-column navigation links.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "classic", "columns", "navigation"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-cl">
  <div class="ft-c-top">
    <div class="ft-c-brand">
      <div class="ft-logo">YourUI</div>
      <p>Building the future of web interfaces, one component at a time.</p>
    </div>
    <div class="ft-c-links">
      <div class="ft-col">
        <h4>Product</h4>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Changelog</a>
      </div>
      <div class="ft-col">
        <h4>Company</h4>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </div>
      <div class="ft-col">
        <h4>Legal</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  </div>
  <div class="ft-c-bot">
    <p>&copy; 2026 YourUI. All rights reserved.</p>
    <div class="ft-social">
      <a href="#">TW</a>
      <a href="#">IN</a>
      <a href="#">GH</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.ft-cl { background: #fff; border-top: 1px solid #e2e8f0; padding: 60px 5% 20px; color: #475569; }
.ft-c-top { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 40px; margin-bottom: 60px; }
.ft-c-brand { max-width: 300px; }
.ft-logo { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 15px; }
.ft-c-brand p { line-height: 1.6; margin: 0; }
.ft-c-links { display: flex; gap: 60px; flex-wrap: wrap; }
.ft-col h4 { color: #0f172a; margin: 0 0 20px; font-weight: 600; }
.ft-col a { display: block; color: #64748b; text-decoration: none; margin-bottom: 10px; transition: 0.2s; }
.ft-col a:hover { color: #3b82f6; }
.ft-c-bot { display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 1px solid #e2e8f0; flex-wrap: wrap; gap: 20px; }
.ft-c-bot p { margin: 0; font-size: 0.9rem; }
.ft-social { display: flex; gap: 15px; }
.ft-social a { color: #94a3b8; text-decoration: none; font-weight: 600; transition: 0.2s; }
.ft-social a:hover { color: #0f172a; }
@media (max-width: 768px) { .ft-c-top { flex-direction: column; } .ft-c-links { gap: 40px; justify-content: space-between; width: 100%; } }`,
    jsCode: ``
  },

  // 2. Minimal Centered Footer
  {
    _id: "ft2",
    title: "Minimal Centered Footer",
    slug: "minimal-centered-footer",
    description: "Clean, distraction-free footer with centered alignment.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "minimal", "centered", "clean"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-mn">
  <h2>YourUI</h2>
  <nav class="ft-m-nav">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </nav>
  <div class="ft-m-social">
    <a href="#">Twitter</a>
    <a href="#">LinkedIn</a>
    <a href="#">GitHub</a>
  </div>
  <p>&copy; 2026 YourUI. All rights reserved.</p>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; }
.ft-mn { padding: 60px 20px; text-align: center; border-top: 1px solid #eaeaea; }
.ft-mn h2 { margin: 0 0 20px; font-size: 1.8rem; color: #111; letter-spacing: -1px; }
.ft-m-nav { display: flex; justify-content: center; gap: 30px; margin-bottom: 30px; flex-wrap: wrap; }
.ft-m-nav a { color: #666; text-decoration: none; font-weight: 500; transition: 0.2s; }
.ft-m-nav a:hover { color: #111; }
.ft-m-social { display: flex; justify-content: center; gap: 20px; margin-bottom: 30px; }
.ft-m-social a { color: #111; text-decoration: none; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
.ft-mn p { color: #999; font-size: 0.85rem; margin: 0; }`,
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
  <div class="cy-f-grid">
    <div class="cy-f-brand">
      <div class="cy-logo">[ SYSTEM_CORE ]</div>
      <p>Initializing shutdown sequence...</p>
    </div>
    <div class="cy-f-links">
      <a href="#">> _DOCS</a>
      <a href="#">> _API</a>
      <a href="#">> _STATUS</a>
    </div>
  </div>
  <div class="cy-f-bot">
    <span>CONNECTION: SECURE</span>
    <span>v.9.9.4</span>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; color: #0f0; }
.ft-cy { border-top: 2px solid #f0f; background: rgba(0,0,0,0.9); padding: 40px 5%; box-shadow: 0 -5px 15px rgba(255,0,255,0.2); position: relative; }
.ft-cy::before { content: ''; position: absolute; top: -2px; left: 10%; width: 50px; height: 2px; background: #0ff; }
.cy-f-grid { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 40px; margin-bottom: 40px; }
.cy-logo { font-size: 1.5rem; font-weight: bold; color: #0ff; text-shadow: 0 0 5px #0ff; margin-bottom: 10px; }
.cy-f-brand p { margin: 0; opacity: 0.8; }
.cy-f-links { display: flex; flex-direction: column; gap: 10px; }
.cy-f-links a { color: #f0f; text-decoration: none; font-weight: bold; transition: 0.2s; text-shadow: 0 0 5px #f0f; }
.cy-f-links a:hover { color: #fff; text-shadow: 0 0 10px #fff; transform: translateX(5px); }
.cy-f-bot { display: flex; justify-content: space-between; border-top: 1px dashed #0f0; padding-top: 20px; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Footer
  {
    _id: "ft4",
    title: "Glassmorphism Footer",
    slug: "glassmorphism-footer",
    description: "Frosted glass footer floating over a background.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["footer", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-f-bg">
  <div style="min-height: 50vh;"></div> <!-- Spacer to show background -->
  <footer class="ft-gl">
    <div class="ft-g-content">
      <div class="ft-g-brand">
        <h3>YourUI</h3>
        <p>Designing the future.</p>
      </div>
      <div class="ft-g-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-f-bg { background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; }
.ft-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.3); padding: 40px 5%; color: #fff; }
.ft-g-content { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 20px; }
.ft-g-brand h3 { margin: 0 0 5px; font-size: 1.5rem; text-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.ft-g-brand p { margin: 0; opacity: 0.8; }
.ft-g-nav { display: flex; gap: 30px; }
.ft-g-nav a { color: #fff; text-decoration: none; font-weight: 500; opacity: 0.9; transition: 0.2s; }
.ft-g-nav a:hover { opacity: 1; text-shadow: 0 0 10px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 5. Brutalist Footer
  {
    _id: "ft5",
    title: "Brutalist Footer",
    slug: "brutalist-footer",
    description: "Thick borders, high contrast, and massive typography.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["footer", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-br">
  <div class="ft-b-top">
    <h2>LET'S TALK.</h2>
    <a href="#" class="ft-b-btn">EMAIL US -></a>
  </div>
  <div class="ft-b-bot">
    <div class="ft-b-links">
      <a href="#">TWITTER</a>
      <a href="#">INSTAGRAM</a>
    </div>
    <div>© 2026</div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.ft-br { background: #fff; border-top: 8px solid #000; padding: 60px 5% 20px; }
.ft-b-top { display: flex; justify-content: space-between; align-items: center; border-bottom: 4px solid #000; padding-bottom: 40px; margin-bottom: 40px; flex-wrap: wrap; gap: 20px; }
.ft-br h2 { margin: 0; font-size: clamp(3rem, 8vw, 6rem); font-weight: 900; color: #000; line-height: 1; }
.ft-b-btn { background: #facc15; color: #000; text-decoration: none; font-weight: 900; font-size: 1.5rem; padding: 20px 40px; border: 4px solid #000; box-shadow: 6px 6px 0 #000; transition: 0.1s; }
.ft-b-btn:active { transform: translate(4px, 4px); box-shadow: 2px 2px 0 #000; }
.ft-b-bot { display: flex; justify-content: space-between; font-weight: 900; font-size: 1.2rem; }
.ft-b-links { display: flex; gap: 30px; }
.ft-b-links a { color: #000; text-decoration: none; transition: 0.2s; }
.ft-b-links a:hover { color: #ec4899; }`,
    jsCode: ``
  },

  // 6. Neumorphic Footer
  {
    _id: "ft6",
    title: "Neumorphic Footer",
    slug: "neumorphic-footer",
    description: "Soft UI footer with inset and extruded elements.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["footer", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-neu">
  <div class="ft-n-content">
    <div class="ft-n-logo">YUI</div>
    <div class="ft-n-links">
      <a href="#">Platform</a>
      <a href="#">Pricing</a>
      <a href="#">Support</a>
    </div>
  </div>
  <p>&copy; 2026 Neumorphic Inc.</p>
</footer>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.ft-neu { padding: 60px 5% 40px; text-align: center; box-shadow: inset 0 10px 20px rgba(163,177,198,0.3); }
.ft-n-content { display: flex; justify-content: center; align-items: center; gap: 60px; margin-bottom: 40px; flex-wrap: wrap; }
.ft-n-logo { width: 80px; height: 80px; border-radius: 20px; background: #e0e5ec; box-shadow: 8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.5); display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 1.5rem; color: #3182ce; }
.ft-n-links { display: flex; gap: 30px; }
.ft-n-links a { color: #718096; text-decoration: none; font-weight: bold; padding: 10px 20px; border-radius: 10px; transition: 0.2s; }
.ft-n-links a:hover { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); color: #2d3748; }
.ft-neu p { margin: 0; color: #a0aec0; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Footer
  {
    _id: "ft7",
    title: "Dark Mode Glow Footer",
    slug: "dark-mode-glow-footer",
    description: "Deep dark footer with glowing borders and vibrant hover effects.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["footer", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-dg">
  <div class="ft-d-grid">
    <div>
      <h3 class="ft-d-logo">YourUI</h3>
      <p>Designing the dark side.</p>
    </div>
    <div class="ft-d-links">
      <a href="#">Explore</a>
      <a href="#">License</a>
      <a href="#">Contact</a>
    </div>
  </div>
  <div class="ft-d-bot">
    <p>&copy; 2026 YourUI</p>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; }
.ft-dg { background: #0f172a; padding: 60px 5% 20px; border-top: 1px solid rgba(59,130,246,0.2); position: relative; overflow: hidden; }
.ft-dg::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 50%; height: 1px; background: linear-gradient(90deg, transparent, #3b82f6, transparent); box-shadow: 0 0 15px #3b82f6; }
.ft-d-grid { display: flex; justify-content: space-between; align-items: center; max-width: 1000px; margin: 0 auto 40px; flex-wrap: wrap; gap: 30px; color: #94a3b8; }
.ft-d-logo { margin: 0 0 10px; font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #3b82f6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.ft-d-grid p { margin: 0; }
.ft-d-links { display: flex; gap: 40px; }
.ft-d-links a { color: #cbd5e1; text-decoration: none; font-weight: 500; transition: 0.3s; position: relative; }
.ft-d-links a:hover { color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.5); }
.ft-d-bot { max-width: 1000px; margin: 0 auto; text-align: center; border-top: 1px solid #1e293b; padding-top: 20px; color: #64748b; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 8. Newsletter Footer
  {
    _id: "ft8",
    title: "Newsletter Footer",
    slug: "newsletter-footer",
    description: "Footer featuring a prominent email subscription form alongside standard links.",
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
    <div class="ft-n-form">
      <h3>Subscribe to our newsletter</h3>
      <p>Get the latest updates right in your inbox.</p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
    <div class="ft-n-links">
      <a href="#">Updates</a>
      <a href="#">Help Center</a>
      <a href="#">Twitter</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.ft-nl { background: #f8fafc; padding: 80px 5%; border-top: 1px solid #e2e8f0; }
.ft-n-top { display: flex; justify-content: space-between; align-items: center; max-width: 1000px; margin: 0 auto; flex-wrap: wrap; gap: 50px; }
.ft-n-form { flex: 1; min-width: 300px; }
.ft-n-form h3 { margin: 0 0 10px; color: #0f172a; font-size: 1.5rem; }
.ft-n-form p { margin: 0 0 20px; color: #64748b; }
.ft-n-form form { display: flex; gap: 10px; }
.ft-n-form input { flex: 1; padding: 12px 15px; border: 1px solid #cbd5e1; border-radius: 8px; outline: none; }
.ft-n-form button { padding: 12px 25px; background: #3b82f6; color: #fff; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.ft-n-form button:hover { background: #2563eb; }
.ft-n-links { display: flex; flex-direction: column; gap: 15px; }
.ft-n-links a { color: #475569; text-decoration: none; font-weight: 500; transition: 0.2s; }
.ft-n-links a:hover { color: #0f172a; }`,
    jsCode: ``
  },

  // 9. Big Typography Footer
  {
    _id: "ft9",
    title: "Big Typography Footer",
    slug: "big-typography-footer",
    description: "Modern footer dominated by a massive brand name filling the width.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "typography", "huge", "modern"],
    isPremium: true,
    views: 45100,
    downloads: 12700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-bt">
  <div class="ft-bt-top">
    <a href="#">Ready to start?</a>
    <a href="#">hello@yourui.com</a>
  </div>
  <div class="ft-bt-main">
    YOURUI
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; }
.ft-bt { background: #0f172a; color: #fff; padding: 80px 5% 0; overflow: hidden; }
.ft-bt-top { display: flex; justify-content: space-between; max-width: 1400px; margin: 0 auto 60px; font-size: 1.5rem; font-weight: 600; }
.ft-bt-top a { color: #fff; text-decoration: none; transition: 0.3s; opacity: 0.8; }
.ft-bt-top a:hover { opacity: 1; }
.ft-bt-main { font-size: clamp(5rem, 20vw, 20rem); font-weight: 900; line-height: 0.8; text-align: center; color: #1e293b; background: linear-gradient(180deg, #334155, #0f172a); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -5px; }`,
    jsCode: ``
  },

  // 10. Split Background Footer
  {
    _id: "ft10",
    title: "Split Background Footer",
    slug: "split-background-footer",
    description: "Footer divided visually into two distinct colored sections.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "split", "layout", "colors"],
    isPremium: false,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-sp">
  <div class="ft-s-left">
    <h2>Let's build something great.</h2>
    <p>Reach out and let's start a conversation.</p>
  </div>
  <div class="ft-s-right">
    <div class="ft-s-links">
      <a href="#">Home</a>
      <a href="#">Work</a>
      <a href="#">Studio</a>
    </div>
    <div class="ft-s-social">
      <a href="#">TW</a>
      <a href="#">IG</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.ft-sp { display: flex; flex-wrap: wrap; }
.ft-s-left { flex: 1; min-width: 300px; background: #3b82f6; color: #fff; padding: 80px 5%; display: flex; flex-direction: column; justify-content: center; }
.ft-s-left h2 { margin: 0 0 15px; font-size: 2.5rem; font-weight: 800; }
.ft-s-left p { margin: 0; font-size: 1.1rem; opacity: 0.9; }
.ft-s-right { flex: 1; min-width: 300px; background: #0f172a; color: #fff; padding: 80px 5%; display: flex; justify-content: space-between; align-items: center; }
.ft-s-links { display: flex; flex-direction: column; gap: 20px; }
.ft-s-links a { color: #fff; text-decoration: none; font-size: 1.5rem; font-weight: 600; opacity: 0.7; transition: 0.2s; }
.ft-s-links a:hover { opacity: 1; }
.ft-s-social { display: flex; gap: 15px; align-self: flex-end; }
.ft-s-social a { color: #fff; text-decoration: none; border: 1px solid rgba(255,255,255,0.3); padding: 10px; border-radius: 50%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; transition: 0.2s; }
.ft-s-social a:hover { background: #fff; color: #0f172a; }`,
    jsCode: ``
  }
];
