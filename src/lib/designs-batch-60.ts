import { Design } from "./designs-data";

export const BATCH_60_DESIGNS: Design[] = [
  // 1. Classic Split Navbar
  {
    _id: "nv1",
    title: "Classic Split Navbar",
    slug: "classic-split-navbar",
    description: "Standard top navigation with logo on left, links and CTA on right.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["navbar", "classic", "header", "split"],
    isPremium: false,
    views: 34200,
    downloads: 9500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-cl">
  <div class="nv-c-logo">Brand.</div>
  <ul class="nv-c-links">
    <li><a href="#">Products</a></li>
    <li><a href="#">Solutions</a></li>
    <li><a href="#">Pricing</a></li>
  </ul>
  <div class="nv-c-acts">
    <a href="#" class="nv-c-login">Login</a>
    <a href="#" class="nv-c-btn">Sign Up</a>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding-top: 20px; }
.nv-cl { display: flex; justify-content: space-between; align-items: center; padding: 15px 40px; background: #fff; border-bottom: 1px solid #e2e8f0; max-width: 1200px; margin: 0 auto; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.nv-c-logo { font-size: 1.5rem; font-weight: 800; color: #0f172a; }
.nv-c-links { display: flex; list-style: none; margin: 0; padding: 0; gap: 30px; }
.nv-c-links a { text-decoration: none; color: #64748b; font-weight: 500; transition: 0.2s; }
.nv-c-links a:hover { color: #0f172a; }
.nv-c-acts { display: flex; align-items: center; gap: 20px; }
.nv-c-login { text-decoration: none; color: #0f172a; font-weight: 600; }
.nv-c-btn { text-decoration: none; background: #3b82f6; color: #fff; padding: 10px 20px; border-radius: 8px; font-weight: 600; transition: 0.2s; }
.nv-c-btn:hover { background: #2563eb; }
@media (max-width: 768px) { .nv-c-links { display: none; } }`,
    jsCode: ``
  },

  // 2. Centered Links Navbar
  {
    _id: "nv2",
    title: "Centered Links Navbar",
    slug: "centered-links-navbar",
    description: "Symmetrical navigation with links perfectly centered.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["navbar", "centered", "clean", "minimal"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-ce">
  <div class="nv-c-logo">STUDIO</div>
  <ul class="nv-c-links">
    <li><a href="#">Work</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Journal</a></li>
  </ul>
  <div class="nv-c-acts">
    <a href="#">Contact</a>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; padding-top: 20px; }
.nv-ce { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 20px 40px; background: #fff; border-bottom: 1px solid #f1f5f9; }
.nv-c-logo { font-size: 1.2rem; font-weight: 900; letter-spacing: 2px; color: #000; }
.nv-c-links { display: flex; justify-content: center; list-style: none; margin: 0; padding: 0; gap: 40px; }
.nv-c-links a { text-decoration: none; color: #555; font-size: 0.95rem; transition: 0.2s; }
.nv-c-links a:hover { color: #000; }
.nv-c-acts { text-align: right; }
.nv-c-acts a { text-decoration: none; color: #000; font-weight: 600; border-bottom: 2px solid #000; padding-bottom: 2px; }
@media (max-width: 768px) { .nv-ce { display: flex; justify-content: space-between; } .nv-c-links { display: none; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Navbar
  {
    _id: "nv3",
    title: "Cyberpunk Navbar",
    slug: "cyberpunk-navbar",
    description: "Neon lit, high tech header for gaming or developer sites.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["navbar", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-cy">
  <div class="nv-cy-logo">SYS_CORE</div>
  <div class="nv-cy-links">
    <a href="#" class="active">TERMINAL</a>
    <a href="#">MODULES</a>
    <a href="#">NETWORK</a>
  </div>
  <button class="nv-cy-btn">INITIALIZE</button>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding-top: 20px; }
.nv-cy { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; background: rgba(0,0,0,0.8); border: 1px solid #0ff; border-top: 3px solid #f0f; box-shadow: 0 5px 15px rgba(0,255,255,0.1); max-width: 1200px; margin: 0 auto; }
.nv-cy-logo { color: #fff; font-size: 1.5rem; font-weight: bold; text-shadow: 0 0 5px #0ff; letter-spacing: 2px; }
.nv-cy-links { display: flex; gap: 30px; }
.nv-cy-links a { color: #aaa; text-decoration: none; font-size: 0.9rem; letter-spacing: 1px; transition: 0.3s; }
.nv-cy-links a:hover, .nv-cy-links a.active { color: #0ff; text-shadow: 0 0 8px #0ff; }
.nv-cy-btn { background: transparent; border: 1px solid #f0f; color: #f0f; padding: 8px 20px; font-family: inherit; font-weight: bold; cursor: pointer; transition: 0.2s; }
.nv-cy-btn:hover { background: #f0f; color: #000; box-shadow: 0 0 10px #f0f; }
@media (max-width: 768px) { .nv-cy-links { display: none; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Navbar
  {
    _id: "nv4",
    title: "Glassmorphism Navbar",
    slug: "glassmorphism-navbar",
    description: "Frosted glass aesthetic resting over the page background.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["navbar", "glassmorphism", "blur", "modern", "sticky"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <nav class="nv-gl">
    <div class="nv-g-logo">Aura</div>
    <div class="nv-g-links">
      <a href="#">Explore</a>
      <a href="#">Create</a>
      <a href="#">Community</a>
    </div>
    <div class="nv-g-profile">
      <img src="https://i.pravatar.cc/150?img=11" alt="Profile" />
    </div>
  </nav>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); padding-top: 20px; }
.nv-gl { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; margin: 0 20px; border-radius: 20px; background: rgba(255,255,255,0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.4); box-shadow: 0 8px 32px rgba(0,0,0,0.1); color: #fff; }
.nv-g-logo { font-size: 1.5rem; font-weight: 800; letter-spacing: 1px; }
.nv-g-links { display: flex; gap: 30px; }
.nv-g-links a { color: #fff; text-decoration: none; font-weight: 500; opacity: 0.8; transition: 0.2s; }
.nv-g-links a:hover { opacity: 1; }
.nv-g-profile img { width: 40px; height: 40px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.5); object-fit: cover; cursor: pointer; }
@media (max-width: 600px) { .nv-g-links { display: none; } }`,
    jsCode: ``
  },

  // 5. Brutalist Navbar
  {
    _id: "nv5",
    title: "Brutalist Navbar",
    slug: "brutalist-navbar",
    description: "Thick borders, bold typography, and harsh shadows.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["navbar", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-br">
  <div class="nv-b-logo">MAGAZINE</div>
  <div class="nv-b-links">
    <a href="#">ARTICLES</a>
    <a href="#">INTERVIEWS</a>
    <a href="#">REVIEWS</a>
  </div>
  <a href="#" class="nv-b-btn">SUBSCRIBE</a>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 20px; }
.nv-br { display: flex; justify-content: space-between; align-items: center; padding: 20px 30px; background: #facc15; border: 4px solid #000; box-shadow: 8px 8px 0 #000; }
.nv-b-logo { font-size: 2rem; font-weight: 900; color: #000; letter-spacing: -1px; line-height: 1; }
.nv-b-links { display: flex; gap: 20px; }
.nv-b-links a { color: #000; text-decoration: none; font-weight: 800; border-bottom: 3px solid transparent; transition: 0.2s; }
.nv-b-links a:hover { border-bottom-color: #000; }
.nv-b-btn { background: #000; color: #fff; text-decoration: none; padding: 10px 20px; font-weight: 900; transition: 0.2s; border: 2px solid #000; }
.nv-b-btn:hover { background: #ec4899; color: #000; }
@media (max-width: 800px) { .nv-br { flex-direction: column; gap: 20px; padding: 20px; } }`,
    jsCode: ``
  },

  // 6. Neumorphic Navbar
  {
    _id: "nv6",
    title: "Neumorphic Navbar",
    slug: "neumorphic-navbar",
    description: "Soft UI frame where the bar looks extruded from the background.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["navbar", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-neu">
  <div class="nv-n-logo">SoftApp</div>
  <div class="nv-n-links">
    <button class="active">Dashboard</button>
    <button>Settings</button>
    <button>Profile</button>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 20px; }
.nv-neu { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; border-radius: 20px; background: #e0e5ec; box-shadow: 9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5); max-width: 1000px; margin: 0 auto; }
.nv-n-logo { font-size: 1.5rem; font-weight: bold; color: #2d3748; letter-spacing: 1px; }
.nv-n-links { display: flex; gap: 15px; }
.nv-n-links button { padding: 10px 20px; border: none; border-radius: 12px; background: #e0e5ec; color: #718096; font-weight: bold; cursor: pointer; box-shadow: 5px 5px 10px rgba(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5); transition: 0.2s; }
.nv-n-links button:active, .nv-n-links button.active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); color: #3182ce; }
@media (max-width: 600px) { .nv-n-links { display: none; } }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Navbar
  {
    _id: "nv7",
    title: "Dark Mode Glow Navbar",
    slug: "dark-mode-glow-navbar",
    description: "Deep dark navigation with glowing bottom border.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["navbar", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-dg">
  <div class="nv-d-logo">Nexus</div>
  <div class="nv-d-links">
    <a href="#">API</a>
    <a href="#">Docs</a>
    <a href="#">Community</a>
  </div>
  <button class="nv-d-btn">Get Key</button>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; }
.nv-dg { display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; background: #0f172a; position: relative; }
.nv-dg::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, #3b82f6, #ec4899, transparent); box-shadow: 0 0 10px rgba(59,130,246,0.5); }
.nv-d-logo { font-size: 1.5rem; font-weight: 800; color: #f8fafc; }
.nv-d-links { display: flex; gap: 30px; }
.nv-d-links a { color: #94a3b8; text-decoration: none; font-size: 0.95rem; transition: 0.2s; }
.nv-d-links a:hover { color: #f8fafc; text-shadow: 0 0 8px rgba(255,255,255,0.3); }
.nv-d-btn { background: transparent; border: 1px solid #334155; color: #f8fafc; padding: 10px 20px; border-radius: 6px; cursor: pointer; transition: 0.3s; }
.nv-d-btn:hover { border-color: #3b82f6; box-shadow: 0 0 15px rgba(59,130,246,0.3); }
@media (max-width: 600px) { .nv-d-links { display: none; } }`,
    jsCode: ``
  },

  // 8. Floating Pill Navbar
  {
    _id: "nv8",
    title: "Floating Pill Navbar",
    slug: "floating-pill-navbar",
    description: "Compact, rounded navigation bar that floats at the top.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["navbar", "floating", "pill", "sticky", "clean"],
    isPremium: false,
    views: 33400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-pl">
  <a href="#" class="nv-p-logo">●</a>
  <div class="nv-p-links">
    <a href="#" class="active">Home</a>
    <a href="#">Work</a>
    <a href="#">Info</a>
  </div>
  <a href="#" class="nv-p-act">Hire Me</a>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #eef2f6; padding-top: 30px; }
.nv-pl { display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: #fff; border-radius: 50px; max-width: 600px; margin: 0 auto; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); position: sticky; top: 20px; z-index: 100; }
.nv-p-logo { font-size: 1.5rem; color: #0f172a; text-decoration: none; padding-left: 10px; }
.nv-p-links { display: flex; background: #f1f5f9; padding: 5px; border-radius: 40px; }
.nv-p-links a { color: #64748b; text-decoration: none; padding: 8px 20px; border-radius: 30px; font-size: 0.9rem; font-weight: 500; transition: 0.2s; }
.nv-p-links a.active, .nv-p-links a:hover { background: #fff; color: #0f172a; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
.nv-p-act { text-decoration: none; color: #fff; background: #0f172a; padding: 10px 20px; border-radius: 30px; font-size: 0.9rem; font-weight: 600; }
@media (max-width: 600px) { .nv-p-links { display: none; } }`,
    jsCode: ``
  },

  // 9. Underline Hover Navbar
  {
    _id: "nv9",
    title: "Underline Hover Navbar",
    slug: "underline-hover-navbar",
    description: "Clean navbar where links have an animated underline effect on hover.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["navbar", "hover", "animation", "minimal"],
    isPremium: false,
    views: 29100,
    downloads: 7700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-uh">
  <div class="nv-u-logo">Architect.</div>
  <div class="nv-u-links">
    <a href="#">Projects</a>
    <a href="#">Studio</a>
    <a href="#">News</a>
    <a href="#">Contact</a>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.nv-uh { display: flex; justify-content: space-between; align-items: center; padding: 30px 50px; }
.nv-u-logo { font-size: 1.5rem; font-weight: 800; color: #111; letter-spacing: -0.5px; }
.nv-u-links { display: flex; gap: 35px; }
.nv-u-links a { color: #555; text-decoration: none; font-size: 0.95rem; font-weight: 500; position: relative; padding-bottom: 5px; }
.nv-u-links a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: #111; transition: width 0.3s ease; }
.nv-u-links a:hover { color: #111; }
.nv-u-links a:hover::after { width: 100%; }
@media (max-width: 600px) { .nv-uh { flex-direction: column; gap: 20px; } }`,
    jsCode: ``
  },

  // 10. Multi-Level Dropdown Navbar
  {
    _id: "nv10",
    title: "Dropdown Menu Navbar",
    slug: "dropdown-menu-navbar",
    description: "Navbar featuring a CSS-only dropdown menu on hover.",
    category: "Navbars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["navbar", "dropdown", "menu", "classic"],
    isPremium: true,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="nv-dd">
  <div class="nv-d-logo">ShopUI</div>
  <ul class="nv-d-menu">
    <li><a href="#">Home</a></li>
    <li class="has-drop">
      <a href="#">Categories ▼</a>
      <ul class="drop-menu">
        <li><a href="#">Electronics</a></li>
        <li><a href="#">Clothing</a></li>
        <li><a href="#">Home & Garden</a></li>
      </ul>
    </li>
    <li><a href="#">Deals</a></li>
  </ul>
  <div class="nv-d-cart">🛒 (2)</div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.nv-dd { display: flex; justify-content: space-between; align-items: center; padding: 0 40px; background: #fff; height: 70px; border-bottom: 1px solid #e2e8f0; }
.nv-d-logo { font-size: 1.4rem; font-weight: 800; color: #3b82f6; }
.nv-d-menu { display: flex; list-style: none; margin: 0; padding: 0; height: 100%; }
.nv-d-menu > li { height: 100%; position: relative; }
.nv-d-menu > li > a { display: flex; align-items: center; height: 100%; padding: 0 20px; color: #475569; text-decoration: none; font-weight: 500; transition: 0.2s; }
.nv-d-menu > li:hover > a { color: #3b82f6; background: #f1f5f9; }
.drop-menu { position: absolute; top: 70px; left: 0; background: #fff; min-width: 200px; list-style: none; padding: 10px 0; margin: 0; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: 0.3s; z-index: 100; }
.has-drop:hover .drop-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.drop-menu a { display: block; padding: 10px 20px; color: #475569; text-decoration: none; transition: 0.2s; }
.drop-menu a:hover { background: #f1f5f9; color: #0f172a; }
.nv-d-cart { font-weight: 600; color: #0f172a; cursor: pointer; }
@media (max-width: 768px) { .nv-d-menu { display: none; } }`,
    jsCode: ``
  }
];
