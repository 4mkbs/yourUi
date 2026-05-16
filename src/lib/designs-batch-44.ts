import { Design } from "./designs-data";

export const BATCH_44_DESIGNS: Design[] = [
  // 1. Classic Multi-Column Footer
  {
    _id: "ft1",
    title: "Classic Multi-Column Footer",
    slug: "classic-multi-column-footer",
    description: "Standard corporate footer with logo, multiple link columns, and a copyright bar.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "classic", "columns", "corporate"],
    isPremium: false,
    views: 21500,
    downloads: 6200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-classic">
  <div class="ft-c-container">
    <div class="ft-c-brand">
      <h3>YourUI</h3>
      <p>Building better interfaces for the modern web. Fast, accessible, and beautiful.</p>
    </div>
    <div class="ft-c-links">
      <h4>Product</h4>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Releases</a>
    </div>
    <div class="ft-c-links">
      <h4>Company</h4>
      <a href="#">About Us</a>
      <a href="#">Careers</a>
      <a href="#">Contact</a>
    </div>
    <div class="ft-c-links">
      <h4>Legal</h4>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>
  </div>
  <div class="ft-c-bottom">
    <p>&copy; 2026 YourUI Inc. All rights reserved.</p>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; flex-direction: column; min-height: 100vh; }
.ft-classic { background: #fff; border-top: 1px solid #e2e8f0; margin-top: auto; padding-top: 40px; color: #475569; }
.ft-c-container { max-width: 1000px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 40px; padding: 0 20px 40px; justify-content: space-between; }
.ft-c-brand { flex: 1 1 250px; }
.ft-c-brand h3 { color: #0f172a; margin: 0 0 15px 0; font-size: 1.5rem; }
.ft-c-brand p { line-height: 1.6; font-size: 0.95rem; }
.ft-c-links { flex: 1 1 150px; display: flex; flex-direction: column; gap: 10px; }
.ft-c-links h4 { color: #0f172a; margin: 0 0 10px 0; font-size: 1.1rem; }
.ft-c-links a { color: #64748b; text-decoration: none; transition: 0.2s; font-size: 0.95rem; }
.ft-c-links a:hover { color: #3b82f6; }
.ft-c-bottom { border-top: 1px solid #e2e8f0; padding: 20px; text-align: center; font-size: 0.85rem; color: #94a3b8; }`,
    jsCode: ``
  },

  // 2. Minimal Centered Footer
  {
    _id: "ft2",
    title: "Minimal Centered Footer",
    slug: "minimal-centered-footer",
    description: "A clean, centered layout perfect for personal sites or landing pages.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "minimal", "centered", "clean"],
    isPremium: false,
    views: 18900,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-min">
  <div class="ft-m-socials">
    <a href="#">Twitter</a>
    <a href="#">GitHub</a>
    <a href="#">LinkedIn</a>
    <a href="#">Dribbble</a>
  </div>
  <p class="ft-m-copy">&copy; 2026 Your Name. Crafted with care.</p>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; flex-direction: column; min-height: 100vh; }
.ft-min { background: transparent; padding: 60px 20px; text-align: center; margin-top: auto; }
.ft-m-socials { display: flex; justify-content: center; gap: 20px; margin-bottom: 20px; flex-wrap: wrap; }
.ft-m-socials a { color: #0f172a; text-decoration: none; font-weight: 600; font-size: 0.95rem; position: relative; padding-bottom: 2px; }
.ft-m-socials a::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 0; background-color: #3b82f6; transition: width 0.3s ease; }
.ft-m-socials a:hover::after { width: 100%; }
.ft-m-copy { color: #64748b; font-size: 0.9rem; margin: 0; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Footer
  {
    _id: "ft3",
    title: "Cyberpunk Footer",
    slug: "cyberpunk-footer",
    description: "Neon borders, high contrast, and dark theme for gaming sites.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["footer", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 17200,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-cy">
  <div class="ft-cy-wrap">
    <div class="ft-cy-col">
      <h2>SYS_CORE</h2>
      <p>MAIN_FRAME ONLINE.</p>
    </div>
    <div class="ft-cy-col">
      <h3>LINKS</h3>
      <a href="#">> UPLINK</a>
      <a href="#">> DIRECTIVES</a>
      <a href="#">> ARCHIVE</a>
    </div>
  </div>
  <div class="ft-cy-bar">
    <span>SYSTEM V2.0.26</span>
    <span>STATUS: OPTIMAL</span>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; flex-direction: column; min-height: 100vh; }
.ft-cy { background: #0a0a0a; border-top: 2px solid #0ff; margin-top: auto; color: #ccc; box-shadow: 0 -5px 20px rgba(0,255,255,0.1); }
.ft-cy-wrap { max-width: 900px; margin: 0 auto; padding: 40px 20px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 30px; }
.ft-cy-col h2 { margin: 0 0 10px; color: #0ff; text-shadow: 0 0 5px #0ff; }
.ft-cy-col h3 { margin: 0 0 15px; color: #f0f; border-bottom: 1px dashed #f0f; display: inline-block; padding-bottom: 5px; }
.ft-cy-col p { color: #888; }
.ft-cy-col a { display: block; color: #0ff; text-decoration: none; margin-bottom: 8px; transition: 0.2s; }
.ft-cy-col a:hover { color: #fff; text-shadow: 0 0 8px #0ff; padding-left: 5px; }
.ft-cy-bar { border-top: 1px solid #333; padding: 15px 20px; display: flex; justify-content: space-between; font-size: 0.8rem; color: #555; background: #111; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Footer
  {
    _id: "ft4",
    title: "Glassmorphism Footer",
    slug: "glassmorphism-footer",
    description: "Frosted glass footer resting on a vibrant animated background.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["footer", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 20100,
    downloads: 5700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="main-content">Scroll down to see footer</div>
  <footer class="ft-gl">
    <div class="ft-gl-inner">
      <div class="ft-gl-left">
        <h2>GlassUI</h2>
        <p>Transparent beauty.</p>
      </div>
      <div class="ft-gl-right">
        <a href="#">Home</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; min-height: 100vh; display: flex; flex-direction: column; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.main-content { flex: 1; display: flex; justify-content: center; align-items: center; color: rgba(255,255,255,0.7); font-size: 2rem; font-weight: bold; }
.ft-gl { margin-top: auto; padding: 20px; }
.ft-gl-inner { background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; padding: 30px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; box-shadow: 0 -10px 30px rgba(0,0,0,0.1); color: #fff; max-width: 1000px; margin: 0 auto; }
.ft-gl-left h2 { margin: 0 0 5px 0; font-size: 1.5rem; }
.ft-gl-left p { margin: 0; color: rgba(255,255,255,0.7); font-size: 0.9rem; }
.ft-gl-right { display: flex; gap: 20px; }
.ft-gl-right a { color: #fff; text-decoration: none; font-weight: 500; transition: 0.3s; opacity: 0.8; }
.ft-gl-right a:hover { opacity: 1; text-shadow: 0 0 10px rgba(255,255,255,0.5); transform: translateY(-2px); }`,
    jsCode: ``
  },

  // 5. Brutalist Footer
  {
    _id: "ft5",
    title: "Brutalist Footer",
    slug: "brutalist-footer",
    description: "High impact, massive text, bold borders and loud colors.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["footer", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 14600,
    downloads: 3400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-br">
  <div class="ft-br-grid">
    <div class="ft-br-big">LET'S TALK.</div>
    <div class="ft-br-links">
      <a href="#">INSTAGRAM</a>
      <a href="#">TWITTER</a>
      <a href="#">EMAIL</a>
    </div>
  </div>
  <div class="ft-br-marquee">
    <div class="ft-br-mq-track">
      <span>NO RULES.</span>
      <span>JUST DESIGN.</span>
      <span>NO RULES.</span>
      <span>JUST DESIGN.</span>
      <span>NO RULES.</span>
      <span>JUST DESIGN.</span>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; flex-direction: column; min-height: 100vh; }
.ft-br { margin-top: auto; border-top: 5px solid #000; background: #fff; }
.ft-br-grid { display: grid; grid-template-columns: 2fr 1fr; border-bottom: 5px solid #000; }
@media (max-width: 600px) { .ft-br-grid { grid-template-columns: 1fr; } }
.ft-br-big { font-size: clamp(3rem, 8vw, 6rem); font-weight: 900; padding: 40px; border-right: 5px solid #000; background: #facc15; display: flex; align-items: center; line-height: 1; }
@media (max-width: 600px) { .ft-br-big { border-right: none; border-bottom: 5px solid #000; } }
.ft-br-links { display: flex; flex-direction: column; }
.ft-br-links a { padding: 20px; font-weight: 900; font-size: 1.5rem; color: #000; text-decoration: none; border-bottom: 5px solid #000; transition: 0.2s; }
.ft-br-links a:last-child { border-bottom: none; }
.ft-br-links a:hover { background: #ef4444; color: #fff; padding-left: 30px; }
.ft-br-marquee { overflow: hidden; white-space: nowrap; background: #000; color: #fff; padding: 15px 0; }
.ft-br-mq-track { display: inline-block; animation: scrollLeft 10s linear infinite; font-weight: 900; font-size: 1.2rem; }
.ft-br-mq-track span { margin-right: 50px; }
@keyframes scrollLeft { 0% {transform: translateX(0)} 100% {transform: translateX(-50%)} }`,
    jsCode: ``
  },

  // 6. Neumorphic Footer
  {
    _id: "ft6",
    title: "Neumorphic Footer",
    slug: "neumorphic-footer",
    description: "Soft debossed sections and extruded buttons for a 3D feel.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["footer", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 15200,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-neu">
  <div class="ft-neu-box">
    <div class="ft-n-left">
      <h2>Soft UI</h2>
      <p>Gentle on the eyes.</p>
    </div>
    <div class="ft-n-right">
      <a href="#">Home</a>
      <a href="#">About</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; flex-direction: column; min-height: 100vh; }
.ft-neu { margin-top: auto; padding: 40px 20px; }
.ft-neu-box { max-width: 900px; margin: 0 auto; padding: 40px; border-radius: 20px; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
.ft-n-left h2 { margin: 0 0 5px 0; color: #2d3748; }
.ft-n-left p { margin: 0; color: #718096; }
.ft-n-right { display: flex; gap: 15px; }
.ft-n-right a { padding: 12px 25px; border-radius: 12px; background: #e0e5ec; color: #4a5568; text-decoration: none; font-weight: bold; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.ft-n-right a:hover { color: #3182ce; box-shadow: 4px 4px 8px rgba(163,177,198,0.5), -4px -4px 8px rgba(255,255,255,0.4); }
.ft-n-right a:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Dark Mode Gradient Footer
  {
    _id: "ft7",
    title: "Dark Mode Gradient Footer",
    slug: "dark-mode-gradient-footer",
    description: "Deep dark background with colorful glowing gradient borders.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["footer", "dark", "gradient", "glow"],
    isPremium: true,
    views: 18400,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-dg">
  <div class="ft-dg-top"></div>
  <div class="ft-dg-inner">
    <h2>NexGen</h2>
    <div class="ft-dg-links">
      <a href="#">Ecosystem</a>
      <a href="#">Tokens</a>
      <a href="#">Community</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #0f172a; display: flex; flex-direction: column; min-height: 100vh; }
.ft-dg { margin-top: auto; background: #1e293b; position: relative; }
.ft-dg-top { height: 4px; width: 100%; background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6); box-shadow: 0 0 15px rgba(139, 92, 246, 0.5); }
.ft-dg-inner { max-width: 1000px; margin: 0 auto; padding: 50px 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; }
.ft-dg-inner h2 { margin: 0; font-size: 2rem; background: linear-gradient(90deg, #ec4899, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.ft-dg-links { display: flex; gap: 25px; }
.ft-dg-links a { color: #cbd5e1; text-decoration: none; font-weight: 500; transition: 0.3s; }
.ft-dg-links a:hover { color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 8. Wave Shape Divider Footer
  {
    _id: "ft8",
    title: "Wave Shape Divider Footer",
    slug: "wave-shape-divider-footer",
    description: "An SVG wave seamlessly transitions the main content into the footer.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "wave", "shape", "divider"],
    isPremium: true,
    views: 19100,
    downloads: 5300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-wv-page">
  <div class="ft-wv-main">Main Content Area</div>
  <div class="ft-wv-divider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.1,192.27,108,238.16,96.65,283.47,70.67,321.39,56.44Z" fill="#1e293b"></path>
    </svg>
  </div>
  <footer class="ft-wv-footer">
    <div class="ft-wv-content">
      <h2>Stay Connected</h2>
      <p>Subscribe to our newsletter for updates.</p>
      <div class="ft-wv-input">
        <input type="email" placeholder="Email address" />
        <button>Subscribe</button>
      </div>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.ft-wv-page { display: flex; flex-direction: column; min-height: 100vh; background: #f8fafc; }
.ft-wv-main { flex: 1; display: flex; justify-content: center; align-items: center; font-size: 2rem; color: #cbd5e1; font-weight: bold; }
.ft-wv-divider { width: 100%; overflow: hidden; line-height: 0; transform: translateY(1px); }
.ft-wv-divider svg { display: block; width: calc(100% + 1.3px); height: 80px; }
.ft-wv-footer { background: #1e293b; color: #fff; padding: 40px 20px 80px; text-align: center; }
.ft-wv-content { max-width: 500px; margin: 0 auto; }
.ft-wv-content h2 { margin: 0 0 10px 0; }
.ft-wv-content p { color: #94a3b8; margin: 0 0 20px 0; }
.ft-wv-input { display: flex; background: #fff; border-radius: 30px; overflow: hidden; padding: 5px; }
.ft-wv-input input { flex: 1; border: none; padding: 10px 20px; outline: none; font-size: 1rem; }
.ft-wv-input button { background: #3b82f6; color: #fff; border: none; padding: 10px 25px; border-radius: 25px; cursor: pointer; font-weight: bold; transition: 0.2s; }
.ft-wv-input button:hover { background: #2563eb; }`,
    jsCode: ``
  },

  // 9. Social Focused Footer
  {
    _id: "ft9",
    title: "Social Focused Footer",
    slug: "social-focused-footer",
    description: "Large, stylized icons for a social media or creator portfolio.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["footer", "social", "icons", "creator"],
    isPremium: false,
    views: 16800,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-soc">
  <div class="ft-soc-grid">
    <a href="#" class="ft-soc-item">
      <span>Ig</span>
      <p>Instagram</p>
    </a>
    <a href="#" class="ft-soc-item">
      <span>Tw</span>
      <p>Twitter</p>
    </a>
    <a href="#" class="ft-soc-item">
      <span>Yt</span>
      <p>YouTube</p>
    </a>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; flex-direction: column; min-height: 100vh; }
.ft-soc { margin-top: auto; padding: 60px 20px; border-top: 1px solid #f1f5f9; }
.ft-soc-grid { max-width: 800px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 30px; }
.ft-soc-item { display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; color: #64748b; transition: 0.3s; padding: 30px; border-radius: 20px; background: #f8fafc; }
.ft-soc-item span { font-size: 2.5rem; font-weight: 800; color: #0f172a; margin-bottom: 10px; transition: 0.3s; }
.ft-soc-item p { margin: 0; font-weight: 500; }
.ft-soc-item:hover { background: #3b82f6; color: #fff; transform: translateY(-5px); box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2); }
.ft-soc-item:hover span { color: #fff; }`,
    jsCode: ``
  },

  // 10. Floating Card Footer
  {
    _id: "ft10",
    title: "Floating Card Footer",
    slug: "floating-card-footer",
    description: "A footer that looks like a floating card resting at the bottom of the page.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "card", "floating", "modern"],
    isPremium: true,
    views: 18800,
    downloads: 5000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-fl-page">
  <div class="ft-fl-main">Content</div>
  <footer class="ft-fl-wrap">
    <div class="ft-fl-card">
      <div class="ft-fl-text">Ready to get started?</div>
      <button class="ft-fl-btn">Sign Up Free</button>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; }
.ft-fl-page { display: flex; flex-direction: column; min-height: 100vh; }
.ft-fl-main { flex: 1; display: flex; justify-content: center; align-items: center; font-size: 2rem; color: #94a3b8; font-weight: bold; }
.ft-fl-wrap { padding: 0 20px 30px 20px; }
.ft-fl-card { max-width: 800px; margin: 0 auto; background: #fff; border-radius: 20px; padding: 40px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); flex-wrap: wrap; gap: 20px; }
.ft-fl-text { font-size: 1.5rem; font-weight: 700; color: #0f172a; }
.ft-fl-btn { padding: 15px 30px; background: #0f172a; color: #fff; border: none; border-radius: 12px; font-weight: 600; font-size: 1.1rem; cursor: pointer; transition: 0.3s; }
.ft-fl-btn:hover { background: #3b82f6; transform: translateY(-3px); box-shadow: 0 10px 15px rgba(59, 130, 246, 0.3); }`,
    jsCode: ``
  }
];
