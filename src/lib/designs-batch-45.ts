import { Design } from "./designs-data";

export const BATCH_45_DESIGNS: Design[] = [
  // 1. Classic Sticky Navbar
  {
    _id: "nv1",
    title: "Classic Sticky Navbar",
    slug: "classic-sticky-navbar",
    description: "Standard clean navigation bar that sticks to the top of the viewport.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["navbar", "classic", "sticky", "header"],
    isPremium: false,
    views: 25100,
    downloads: 7300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="nv-page">
  <nav class="nv-classic">
    <div class="nv-c-logo">YourUI</div>
    <div class="nv-c-links">
      <a href="#" class="nv-active">Home</a>
      <a href="#">Products</a>
      <a href="#">Pricing</a>
      <a href="#">About</a>
    </div>
    <div class="nv-c-actions">
      <button class="nv-btn-login">Log In</button>
      <button class="nv-btn-signup">Sign Up</button>
    </div>
  </nav>
  <div class="nv-content">Scroll down to see sticky effect</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.nv-page { height: 200vh; background: #f8fafc; }
.nv-classic { position: sticky; top: 0; background: #fff; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; padding: 15px 40px; z-index: 100; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.nv-c-logo { font-size: 1.5rem; font-weight: 800; color: #0f172a; }
.nv-c-links { display: flex; gap: 30px; }
.nv-c-links a { text-decoration: none; color: #64748b; font-weight: 500; transition: 0.2s; }
.nv-c-links a:hover, .nv-c-links a.nv-active { color: #3b82f6; }
.nv-c-actions { display: flex; gap: 10px; }
.nv-btn-login { background: transparent; border: none; color: #475569; font-weight: 600; cursor: pointer; padding: 8px 16px; transition: 0.2s; }
.nv-btn-login:hover { color: #0f172a; }
.nv-btn-signup { background: #3b82f6; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.nv-btn-signup:hover { background: #2563eb; }
.nv-content { padding: 100px; text-align: center; color: #94a3b8; font-size: 1.5rem; font-weight: bold; }`,
    jsCode: ``
  },

  // 2. Floating Pill Navbar
  {
    _id: "nv2",
    title: "Floating Pill Navbar",
    slug: "floating-pill-navbar",
    description: "A compact, rounded navigation bar floating near the top of the page.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["navbar", "floating", "pill", "modern"],
    isPremium: false,
    views: 22400,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="nv-pill-page">
  <nav class="nv-pill">
    <div class="nv-p-logo">Y/U</div>
    <div class="nv-p-links">
      <a href="#" class="nv-p-active">Feed</a>
      <a href="#">Explore</a>
      <a href="#">Messages</a>
    </div>
    <div class="nv-p-profile">
      <img src="https://i.pravatar.cc/100?img=33" alt="Profile" />
    </div>
  </nav>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; }
.nv-pill-page { padding-top: 20px; }
.nv-pill { max-width: 800px; margin: 0 auto; background: #fff; border-radius: 50px; display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); position: relative; z-index: 100; }
.nv-p-logo { font-weight: 900; color: #0f172a; font-size: 1.2rem; background: #f1f5f9; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; border-radius: 50%; }
.nv-p-links { display: flex; gap: 10px; }
.nv-p-links a { text-decoration: none; color: #64748b; font-weight: 500; padding: 8px 16px; border-radius: 20px; transition: 0.2s; }
.nv-p-links a:hover { background: #f8fafc; color: #0f172a; }
.nv-p-links a.nv-p-active { background: #10b981; color: #fff; }
.nv-p-profile img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #e2e8f0; cursor: pointer; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Navbar
  {
    _id: "nv3",
    title: "Cyberpunk Navbar",
    slug: "cyberpunk-navbar",
    description: "Neon colors, sharp angles, and glitch-ready aesthetic.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["navbar", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 18700,
    downloads: 4900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-cy">
  <div class="nv-cy-logo">N3XUS</div>
  <div class="nv-cy-links">
    <a href="#" class="nv-cy-active">OVERVIEW</a>
    <a href="#">DATABASE</a>
    <a href="#">MODULES</a>
  </div>
  <button class="nv-cy-btn">CONNECT_</button>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; }
.nv-cy { background: #0a0a0a; border-bottom: 2px solid #0ff; display: flex; justify-content: space-between; align-items: center; padding: 0 30px; height: 70px; box-shadow: 0 5px 15px rgba(0,255,255,0.1); position: relative; overflow: hidden; }
.nv-cy::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: #f0f; }
.nv-cy-logo { font-size: 2rem; font-weight: bold; color: #0ff; text-shadow: 2px 2px 0px #f0f; letter-spacing: 2px; }
.nv-cy-links { display: flex; height: 100%; }
.nv-cy-links a { display: flex; align-items: center; text-decoration: none; color: #555; font-weight: bold; padding: 0 20px; transition: 0.2s; position: relative; }
.nv-cy-links a:hover { color: #fff; background: rgba(0,255,255,0.05); }
.nv-cy-links a.nv-cy-active { color: #0ff; background: rgba(0,255,255,0.1); border-bottom: 3px solid #0ff; text-shadow: 0 0 5px #0ff; }
.nv-cy-btn { background: #111; color: #f0f; border: 1px solid #f0f; padding: 10px 20px; font-weight: bold; cursor: pointer; transition: 0.2s; clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); }
.nv-cy-btn:hover { background: #f0f; color: #000; box-shadow: 0 0 10px #f0f; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Navbar
  {
    _id: "nv4",
    title: "Glassmorphism Navbar",
    slug: "glassmorphism-navbar",
    description: "Frosted glass navigation floating over a dynamic background.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["navbar", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 23100,
    downloads: 6600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <nav class="nv-gl">
    <div class="nv-g-logo">GlassUI</div>
    <div class="nv-g-links">
      <a href="#">Design</a>
      <a href="#">Components</a>
      <a href="#">Templates</a>
    </div>
    <button class="nv-g-btn">Get Started</button>
  </nav>
  <div class="nv-g-content">Scroll up/down</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 200vh; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; padding-top: 20px; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.nv-gl { position: sticky; top: 20px; max-width: 1000px; margin: 0 auto; background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); z-index: 100; }
.nv-g-logo { color: #fff; font-weight: 800; font-size: 1.4rem; letter-spacing: 1px; }
.nv-g-links { display: flex; gap: 30px; }
.nv-g-links a { color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 500; transition: 0.3s; }
.nv-g-links a:hover { color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.5); }
.nv-g-btn { background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); color: #fff; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.3s; }
.nv-g-btn:hover { background: #fff; color: #3b82f6; }
.nv-g-content { padding: 100px; text-align: center; color: rgba(255,255,255,0.5); font-size: 2rem; font-weight: bold; }`,
    jsCode: ``
  },

  // 5. Brutalist Navbar
  {
    _id: "nv5",
    title: "Brutalist Navbar",
    slug: "brutalist-navbar",
    description: "Thick borders, massive typography, and high-impact layout.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["navbar", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 15400,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-br">
  <div class="nv-br-logo">BRAND.</div>
  <div class="nv-br-links">
    <a href="#">WORK</a>
    <a href="#">INFO</a>
  </div>
  <button class="nv-br-btn">HIRE US</button>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.nv-br { background: #fff; border-bottom: 5px solid #000; display: flex; align-items: stretch; height: 80px; }
.nv-br-logo { font-size: 2.5rem; font-weight: 900; background: #facc15; padding: 0 30px; display: flex; align-items: center; border-right: 5px solid #000; letter-spacing: -2px; }
.nv-br-links { flex: 1; display: flex; }
.nv-br-links a { flex: 1; display: flex; justify-content: center; align-items: center; text-decoration: none; color: #000; font-weight: 900; font-size: 1.2rem; border-right: 5px solid #000; transition: 0.2s; }
.nv-br-links a:hover { background: #ef4444; color: #fff; }
.nv-br-btn { background: #fff; border: none; font-weight: 900; font-size: 1.2rem; padding: 0 30px; cursor: pointer; transition: 0.2s; }
.nv-br-btn:hover { background: #000; color: #fff; }`,
    jsCode: ``
  },

  // 6. Neumorphic Navbar
  {
    _id: "nv6",
    title: "Neumorphic Navbar",
    slug: "neumorphic-navbar",
    description: "Soft UI extruded navigation bar blending into the background.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["navbar", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 16100,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-neu">
  <div class="nv-n-logo">Soft</div>
  <div class="nv-n-links">
    <a href="#" class="nv-n-active">Dashboard</a>
    <a href="#">Projects</a>
    <a href="#">Settings</a>
  </div>
  <div class="nv-n-icon">🔔</div>
</nav>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 20px; }
.nv-neu { background: #e0e5ec; padding: 15px 30px; border-radius: 20px; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); display: flex; justify-content: space-between; align-items: center; max-width: 1000px; margin: 0 auto; }
.nv-n-logo { font-size: 1.5rem; font-weight: bold; color: #4a5568; }
.nv-n-links { display: flex; gap: 20px; }
.nv-n-links a { padding: 10px 20px; border-radius: 12px; color: #718096; text-decoration: none; font-weight: bold; transition: 0.2s; }
.nv-n-links a:hover { color: #2d3748; }
.nv-n-links a.nv-n-active { color: #3182ce; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
.nv-n-icon { width: 45px; height: 45px; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); transition: 0.2s; }
.nv-n-icon:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Split Centered Navbar
  {
    _id: "nv7",
    title: "Split Centered Navbar",
    slug: "split-centered-navbar",
    description: "Logo centered perfectly with links split to the left and right.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["navbar", "centered", "split", "elegant"],
    isPremium: false,
    views: 20500,
    downloads: 5800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-split">
  <div class="nv-s-left">
    <a href="#">Men</a>
    <a href="#">Women</a>
    <a href="#">Kids</a>
  </div>
  <div class="nv-s-logo">VOGUE</div>
  <div class="nv-s-right">
    <a href="#">Search</a>
    <a href="#">Account</a>
    <a href="#">Bag (0)</a>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.nv-split { border-bottom: 1px solid #f1f5f9; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 20px 40px; }
.nv-s-logo { font-family: serif; font-size: 2rem; font-weight: 400; letter-spacing: 4px; color: #0f172a; text-align: center; }
.nv-s-left { display: flex; gap: 20px; justify-content: flex-start; }
.nv-s-right { display: flex; gap: 20px; justify-content: flex-end; }
.nv-s-left a, .nv-s-right a { text-decoration: none; color: #475569; font-size: 0.9rem; font-weight: 500; text-transform: uppercase; transition: 0.2s; }
.nv-s-left a:hover, .nv-s-right a:hover { color: #0f172a; text-decoration: underline; text-underline-offset: 4px; }`,
    jsCode: ``
  },

  // 8. Dark Mode Gradient Navbar
  {
    _id: "nv8",
    title: "Dark Mode Gradient Navbar",
    slug: "dark-mode-gradient-navbar",
    description: "Deep dark background with colorful glowing gradient bottom border.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["navbar", "dark", "gradient", "glow"],
    isPremium: true,
    views: 19300,
    downloads: 5200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-dg">
  <div class="nv-dg-logo">Orbit</div>
  <div class="nv-dg-links">
    <a href="#" class="nv-dg-active">Platform</a>
    <a href="#">Solutions</a>
    <a href="#">Developers</a>
  </div>
  <button class="nv-dg-btn">Login</button>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #0f172a; }
.nv-dg { background: #1e293b; padding: 15px 40px; display: flex; justify-content: space-between; align-items: center; position: relative; }
.nv-dg::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6); box-shadow: 0 0 10px rgba(139, 92, 246, 0.5); }
.nv-dg-logo { font-size: 1.5rem; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 10px; }
.nv-dg-logo::before { content: ''; width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(135deg, #ec4899, #8b5cf6); }
.nv-dg-links { display: flex; gap: 30px; }
.nv-dg-links a { color: #94a3b8; text-decoration: none; font-weight: 500; transition: 0.3s; }
.nv-dg-links a:hover, .nv-dg-links a.nv-dg-active { color: #fff; }
.nv-dg-btn { padding: 8px 20px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; border-radius: 6px; cursor: pointer; transition: 0.3s; }
.nv-dg-btn:hover { background: #fff; color: #0f172a; }`,
    jsCode: ``
  },

  // 9. Minimal Line Navbar
  {
    _id: "nv9",
    title: "Minimal Line Navbar",
    slug: "minimal-line-navbar",
    description: "Extremely clean, borderline invisible navbar where active state is a thin line.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["navbar", "minimal", "line", "clean"],
    isPremium: false,
    views: 17800,
    downloads: 4500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-ml">
  <div class="nv-m-logo">minimal.</div>
  <div class="nv-m-links">
    <a href="#" class="nv-m-active">works</a>
    <a href="#">studio</a>
    <a href="#">contact</a>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; }
.nv-ml { display: flex; justify-content: space-between; align-items: flex-end; padding: 40px 60px; }
.nv-m-logo { font-size: 1.5rem; font-weight: 700; color: #111; letter-spacing: -1px; line-height: 1; }
.nv-m-links { display: flex; gap: 40px; }
.nv-m-links a { color: #666; text-decoration: none; font-size: 0.9rem; position: relative; padding-bottom: 5px; transition: 0.3s; }
.nv-m-links a:hover { color: #111; }
.nv-m-links a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: #111; transition: 0.3s ease; }
.nv-m-links a:hover::after, .nv-m-links a.nv-m-active::after { width: 100%; }
.nv-m-links a.nv-m-active { color: #111; }`,
    jsCode: ``
  },

  // 10. Hidden Sidebar Toggle Navbar
  {
    _id: "nv10",
    title: "Hidden Sidebar Navbar",
    slug: "hidden-sidebar-navbar",
    description: "A compact navbar that expands a full-screen or side menu when clicking the hamburger.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["navbar", "hamburger", "sidebar", "toggle"],
    isPremium: true,
    views: 21900,
    downloads: 6400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="nv-side-wrap">
  <input type="checkbox" id="nv-side-toggle" class="nv-side-check" />
  
  <nav class="nv-hb">
    <div class="nv-hb-logo">Brand</div>
    <label for="nv-side-toggle" class="nv-hb-icon">
      <span></span><span></span><span></span>
    </label>
  </nav>

  <div class="nv-sidebar">
    <div class="nv-sb-header">
      <h2>Menu</h2>
      <label for="nv-side-toggle" class="nv-sb-close">×</label>
    </div>
    <div class="nv-sb-links">
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">Portfolio</a>
      <a href="#">Contact</a>
    </div>
  </div>
  <div class="nv-sb-overlay"></div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.nv-side-check { display: none; }
.nv-hb { background: #fff; border-bottom: 1px solid #e2e8f0; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; }
.nv-hb-logo { font-size: 1.5rem; font-weight: 800; color: #0f172a; }
.nv-hb-icon { display: flex; flex-direction: column; gap: 5px; cursor: pointer; padding: 5px; }
.nv-hb-icon span { width: 25px; height: 3px; background: #0f172a; border-radius: 3px; transition: 0.3s; }
.nv-sidebar { position: fixed; top: 0; right: 0; width: 300px; height: 100vh; background: #fff; transform: translateX(100%); transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1); z-index: 1000; box-shadow: -5px 0 20px rgba(0,0,0,0.1); display: flex; flex-direction: column; }
.nv-side-check:checked ~ .nv-sidebar { transform: translateX(0); }
.nv-sb-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.5); opacity: 0; visibility: hidden; transition: 0.3s; z-index: 999; }
.nv-side-check:checked ~ .nv-sb-overlay { opacity: 1; visibility: visible; }
.nv-sb-header { padding: 20px 30px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
.nv-sb-header h2 { margin: 0; font-size: 1.2rem; color: #0f172a; }
.nv-sb-close { font-size: 30px; color: #64748b; cursor: pointer; line-height: 1; transition: 0.2s; }
.nv-sb-close:hover { color: #ef4444; }
.nv-sb-links { padding: 30px; display: flex; flex-direction: column; gap: 20px; }
.nv-sb-links a { text-decoration: none; font-size: 1.2rem; color: #475569; font-weight: 500; transition: 0.2s; }
.nv-sb-links a:hover { color: #3b82f6; transform: translateX(5px); }`,
    jsCode: ``
  }
];
