import { Design } from "./designs-data";

export const BATCH_2_DESIGNS: Design[] = [
  // 1. Floating Glass Navbar
  {
    _id: "n1",
    title: "Floating Glass Pill Navbar",
    slug: "floating-glass-pill-navbar",
    description: "A beautifully modern floating navbar with a heavy backdrop blur and smooth pill-shaped borders.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    tags: ["navbar", "glassmorphism", "floating", "modern"],
    isPremium: false,
    views: 6200,
    downloads: 2100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="glass-nav">
  <div class="nav-content">
    <a href="#" class="logo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      Brand
    </a>
    <div class="links">
      <a href="#" class="active">Home</a>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">About</a>
    </div>
    <div class="actions">
      <a href="#" class="login">Log In</a>
      <a href="#" class="btn-primary">Sign Up</a>
    </div>
  </div>
</nav>`,
    cssCode: `body { margin: 0; min-height: 200vh; background: #0f172a; font-family: 'Inter', sans-serif; background-image: radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0f172a 100%); }
.glass-nav { position: fixed; top: 2rem; left: 50%; transform: translateX(-50%); width: 90%; max-width: 1000px; padding: 0.5rem; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 50px; z-index: 100; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
.nav-content { display: flex; align-items: center; justify-content: space-between; padding: 0 1rem; }
.logo { display: flex; align-items: center; gap: 0.5rem; color: #fff; text-decoration: none; font-weight: 800; font-size: 1.1rem; }
.links { display: flex; gap: 1rem; background: rgba(0,0,0,0.2); padding: 0.5rem 1rem; border-radius: 30px; }
.links a { color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 500; padding: 0.5rem 1rem; border-radius: 20px; transition: 0.3s; }
.links a:hover, .links a.active { color: #fff; background: rgba(255,255,255,0.1); }
.actions { display: flex; align-items: center; gap: 1rem; }
.login { color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: 0.3s; }
.login:hover { color: #fff; }
.btn-primary { background: #fff; color: #0f172a; text-decoration: none; padding: 0.6rem 1.2rem; border-radius: 30px; font-weight: 600; font-size: 0.9rem; transition: 0.3s; }
.btn-primary:hover { transform: scale(1.05); }
@media (max-width: 768px) { .links, .login { display: none; } }`,
    jsCode: ``
  },

  // 2. Minimal Mega Menu
  {
    _id: "n2",
    title: "Enterprise Mega Menu Navbar",
    slug: "enterprise-mega-menu-navbar",
    description: "Clean, full-width enterprise navigation with expansive dropdown menus for large SaaS platforms.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    tags: ["navbar", "enterprise", "mega-menu", "saas"],
    isPremium: true,
    views: 4800,
    downloads: 1400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="enterprise-nav">
  <div class="nav-container">
    <a href="#" class="logo">ACME Corp</a>
    <ul class="nav-items">
      <li class="has-mega">
        <a href="#">Products <span class="arrow">▾</span></a>
        <div class="mega-menu">
          <div class="mega-grid">
            <div class="mega-col">
              <h4>Platform</h4>
              <a href="#">Analytics Engine</a>
              <a href="#">Data Warehouse</a>
              <a href="#">Security Hub</a>
            </div>
            <div class="mega-col">
              <h4>Solutions</h4>
              <a href="#">For Startups</a>
              <a href="#">For Enterprise</a>
              <a href="#">E-commerce</a>
            </div>
            <div class="mega-promo">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200" alt="Promo">
              <h5>New Release: Analytics v2</h5>
              <a href="#" class="promo-link">Read Announcement →</a>
            </div>
          </div>
        </div>
      </li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Documentation</a></li>
    </ul>
    <div class="nav-end">
      <a href="#">Contact Sales</a>
      <a href="#" class="btn-solid">Start Free</a>
    </div>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #f8fafc; color: #333; min-height: 100vh; }
.enterprise-nav { background: #fff; border-bottom: 1px solid #e2e8f0; position: fixed; width: 100%; top: 0; z-index: 100; }
.nav-container { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 70px; padding: 0 2rem; }
.logo { font-size: 1.25rem; font-weight: 800; color: #0f172a; text-decoration: none; letter-spacing: -0.5px; }
.nav-items { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; height: 100%; }
.nav-items > li { height: 100%; display: flex; align-items: center; }
.nav-items > li > a { text-decoration: none; color: #475569; font-weight: 500; font-size: 0.95rem; transition: 0.2s; display: flex; align-items: center; gap: 4px; }
.nav-items > li:hover > a { color: #0f172a; }
.mega-menu { position: absolute; top: 70px; left: 0; width: 100%; background: #fff; border-bottom: 1px solid #e2e8f0; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s ease; }
.has-mega:hover .mega-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.mega-grid { max-width: 1200px; margin: 0 auto; padding: 3rem 2rem; display: grid; grid-template-columns: 1fr 1fr 2fr; gap: 3rem; }
.mega-col h4 { margin: 0 0 1.5rem 0; color: #0f172a; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; }
.mega-col a { display: block; text-decoration: none; color: #64748b; margin-bottom: 1rem; transition: 0.2s; font-weight: 500; }
.mega-col a:hover { color: #2563eb; transform: translateX(5px); }
.mega-promo { background: #f8fafc; padding: 1.5rem; border-radius: 12px; }
.mega-promo img { width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; }
.mega-promo h5 { margin: 0 0 0.5rem 0; font-size: 1.1rem; color: #0f172a; }
.promo-link { color: #2563eb; text-decoration: none; font-weight: 600; font-size: 0.9rem; }
.nav-end { display: flex; align-items: center; gap: 1.5rem; }
.nav-end a { text-decoration: none; color: #475569; font-weight: 500; font-size: 0.95rem; }
.nav-end .btn-solid { background: #0f172a; color: #fff; padding: 0.6rem 1.2rem; border-radius: 6px; }
.nav-end .btn-solid:hover { background: #1e293b; }`,
    jsCode: ``
  },

  // 3. E-commerce Navbar
  {
    _id: "n3",
    title: "E-Commerce Search & Cart Navbar",
    slug: "ecommerce-search-cart-navbar",
    description: "A dual-tier e-commerce navigation bar featuring a prominent search input and shopping cart badge.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tags: ["navbar", "ecommerce", "store", "search"],
    isPremium: false,
    views: 3900,
    downloads: 920,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<header class="store-nav">
  <div class="top-bar">
    <div class="contact">Support: 1-800-STORE</div>
    <div class="announcement">Free shipping on orders over $50!</div>
    <div class="account"><a href="#">Sign In</a> / <a href="#">Register</a></div>
  </div>
  <div class="main-bar">
    <a href="#" class="store-logo">VENDRE.</a>
    <div class="search-bar">
      <input type="text" placeholder="Search for products, brands and more..." />
      <button>🔍</button>
    </div>
    <div class="icons">
      <button class="icon-btn">♡</button>
      <button class="icon-btn cart">
        🛒<span class="badge">3</span>
      </button>
    </div>
  </div>
  <nav class="categories">
    <a href="#" class="active">New Arrivals</a>
    <a href="#">Men</a>
    <a href="#">Women</a>
    <a href="#">Accessories</a>
    <a href="#">Footwear</a>
    <a href="#" class="sale">Sale %</a>
  </nav>
</header>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fcfcfc; }
.store-nav { background: #fff; border-bottom: 1px solid #eee; }
.top-bar { background: #111; color: #fff; display: flex; justify-content: space-between; padding: 8px 5%; font-size: 0.75rem; letter-spacing: 0.5px; }
.top-bar a { color: #ccc; text-decoration: none; } .top-bar a:hover { color: #fff; }
.main-bar { display: flex; justify-content: space-between; align-items: center; padding: 20px 5%; border-bottom: 1px solid #f0f0f0; }
.store-logo { font-size: 2rem; font-weight: 900; color: #111; text-decoration: none; letter-spacing: -1px; }
.search-bar { display: flex; flex: 0 1 500px; border: 2px solid #111; border-radius: 4px; overflow: hidden; }
.search-bar input { flex: 1; padding: 12px 16px; border: none; outline: none; font-size: 0.95rem; }
.search-bar button { background: #111; color: #fff; border: none; padding: 0 20px; cursor: pointer; }
.icons { display: flex; gap: 20px; }
.icon-btn { background: none; border: none; font-size: 1.5rem; cursor: pointer; position: relative; color: #111; }
.cart .badge { position: absolute; top: -5px; right: -8px; background: #ef4444; color: #fff; font-size: 0.7rem; font-weight: bold; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.categories { display: flex; justify-content: center; gap: 30px; padding: 15px 0; }
.categories a { text-decoration: none; color: #555; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; transition: 0.2s; }
.categories a:hover, .categories a.active { color: #111; border-bottom: 2px solid #111; padding-bottom: 2px; }
.categories a.sale { color: #ef4444; }`,
    jsCode: ``
  },

  // 4. Dark Mode Brutalist Navbar
  {
    _id: "n4",
    title: "Brutalist Dark Navbar",
    slug: "brutalist-dark-navbar",
    description: "A stark, highly-contrasted brutalist navigation bar with thick borders and solid hover states.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["navbar", "brutalist", "dark", "bold"],
    isPremium: false,
    views: 2900,
    downloads: 700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="brutal-nav">
  <a href="#" class="brand">BRUTAL.</a>
  <div class="links">
    <a href="#">WORK</a>
    <a href="#">STUDIO</a>
    <a href="#">JOURNAL</a>
  </div>
  <a href="#" class="cta">HIRE US</a>
</nav>`,
    cssCode: `body { margin: 0; background: #000; color: #fff; font-family: monospace; }
.brutal-nav { display: flex; justify-content: space-between; align-items: stretch; border-bottom: 4px solid #fff; height: 80px; }
.brand { display: flex; align-items: center; padding: 0 2rem; font-size: 2rem; font-weight: 900; color: #fff; text-decoration: none; border-right: 4px solid #fff; background: #000; transition: 0.2s; }
.brand:hover { background: #fff; color: #000; }
.links { display: flex; flex: 1; }
.links a { display: flex; align-items: center; justify-content: center; flex: 1; border-right: 4px solid #fff; color: #fff; text-decoration: none; font-size: 1.25rem; font-weight: bold; transition: 0.2s; }
.links a:hover { background: #fff; color: #000; }
.cta { display: flex; align-items: center; padding: 0 3rem; background: #fff; color: #000; text-decoration: none; font-size: 1.5rem; font-weight: 900; transition: 0.2s; }
.cta:hover { background: #ff3366; color: #fff; }
@media (max-width: 768px) { .links { display: none; } .brand { border-right: none; flex: 1; justify-content: center; border-bottom: 4px solid #fff; } .brutal-nav { flex-direction: column; height: auto; } .cta { padding: 1.5rem; justify-content: center; } }`,
    jsCode: ``
  },

  // 5. Centered Split Logo Navbar
  {
    _id: "n5",
    title: "Split Logo Centered Navbar",
    slug: "split-logo-centered-navbar",
    description: "An elegant navbar where the logo sits precisely in the center, flanked by balanced navigation links.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    tags: ["navbar", "centered", "elegant", "split"],
    isPremium: true,
    views: 4500,
    downloads: 1300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="split-nav">
  <div class="nav-section left">
    <a href="#">Lookbook</a>
    <a href="#">Collections</a>
    <a href="#">Journal</a>
  </div>
  <a href="#" class="center-logo">Maison</a>
  <div class="nav-section right">
    <a href="#">Search</a>
    <a href="#">Account</a>
    <a href="#">Cart (0)</a>
  </div>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Playfair Display', serif; background: #FAF9F6; }
.split-nav { display: flex; align-items: center; justify-content: space-between; padding: 2rem 5%; position: relative; }
.nav-section { display: flex; gap: 2.5rem; flex: 1; }
.nav-section.left { justify-content: flex-start; }
.nav-section.right { justify-content: flex-end; }
.nav-section a { text-decoration: none; color: #333; font-family: sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; position: relative; }
.nav-section a::after { content: ''; position: absolute; width: 0; height: 1px; bottom: -4px; left: 0; background-color: #333; transition: width 0.3s; }
.nav-section a:hover::after { width: 100%; }
.center-logo { font-size: 2.5rem; font-weight: bold; color: #111; text-decoration: none; position: absolute; left: 50%; transform: translateX(-50%); letter-spacing: -1px; }
@media (max-width: 900px) { .nav-section { display: none; } .center-logo { position: static; transform: none; margin: 0 auto; } }`,
    jsCode: ``
  },

  // 6. Mobile Bottom Tab Bar
  {
    _id: "n6",
    title: "Mobile iOS Style Bottom Tab Bar",
    slug: "mobile-ios-style-bottom-tab-bar",
    description: "A fixed bottom navigation bar styled like native iOS applications, complete with active states.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["navbar", "mobile", "app", "tab-bar"],
    isPremium: false,
    views: 3100,
    downloads: 1100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="app-screen">
  <div class="dummy-content">
    <h2>Mobile View</h2>
    <p>Scroll down to see the fixed tab bar.</p>
  </div>
  <nav class="bottom-tab-bar">
    <a href="#" class="tab active">
      <div class="icon">🏠</div>
      <span>Home</span>
    </a>
    <a href="#" class="tab">
      <div class="icon">🔍</div>
      <span>Search</span>
    </a>
    <a href="#" class="tab plus-tab">
      <div class="plus-btn">+</div>
    </a>
    <a href="#" class="tab">
      <div class="icon">🔔</div>
      <span>Alerts</span>
    </a>
    <a href="#" class="tab">
      <div class="icon">👤</div>
      <span>Profile</span>
    </a>
  </nav>
</div>`,
    cssCode: `body { margin: 0; background: #f0f2f5; font-family: -apple-system, BlinkMacSystemFont, sans-serif; display: flex; justify-content: center; }
.app-screen { width: 100%; max-width: 400px; height: 100vh; background: #fff; position: relative; overflow: hidden; box-shadow: 0 0 50px rgba(0,0,0,0.1); }
.dummy-content { padding: 40px 20px; text-align: center; color: #666; height: 150vh; }
.bottom-tab-bar { position: absolute; bottom: 0; left: 0; width: 100%; height: 80px; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(20px); border-top: 1px solid rgba(0,0,0,0.1); display: flex; justify-content: space-around; align-items: flex-start; padding-top: 10px; box-sizing: border-box; padding-bottom: 20px; }
.tab { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: #999; gap: 4px; transition: 0.2s; width: 60px; }
.tab .icon { font-size: 1.4rem; }
.tab span { font-size: 0.65rem; font-weight: 500; }
.tab.active { color: #007aff; }
.plus-tab { position: relative; }
.plus-btn { position: absolute; top: -30px; width: 50px; height: 50px; background: #007aff; border-radius: 50%; color: #fff; display: flex; justify-content: center; align-items: center; font-size: 2rem; box-shadow: 0 10px 20px rgba(0, 122, 255, 0.3); }`,
    jsCode: ``
  },

  // 7. Web3 Wallet Connect Navbar
  {
    _id: "n7",
    title: "Web3 Wallet Connect Navbar",
    slug: "web3-wallet-connect-navbar",
    description: "A dark theme crypto navbar with a glowing 'Connect Wallet' button and network selector.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["navbar", "web3", "crypto", "neon"],
    isPremium: true,
    views: 5200,
    downloads: 1600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="web3-nav">
  <div class="logo">
    <div class="gem"></div> <span>DeFiProtocol</span>
  </div>
  <div class="links">
    <a href="#" class="active">Swap</a>
    <a href="#">Pools</a>
    <a href="#">Stake</a>
  </div>
  <div class="wallet-actions">
    <div class="network">
      <span class="dot"></span> Ethereum
    </div>
    <button class="connect-btn">Connect Wallet</button>
  </div>
</nav>`,
    cssCode: `body { margin: 0; background: #09090b; font-family: 'Inter', sans-serif; color: #fff; }
.web3-nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; border-bottom: 1px solid rgba(255,255,255,0.05); }
.logo { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 1.2rem; letter-spacing: -0.5px; }
.gem { width: 24px; height: 24px; background: linear-gradient(135deg, #a855f7, #3b82f6); clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
.links { display: flex; gap: 1rem; background: rgba(255,255,255,0.03); padding: 5px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); }
.links a { padding: 8px 20px; color: #a1a1aa; text-decoration: none; font-size: 0.95rem; font-weight: 600; border-radius: 8px; transition: 0.2s; }
.links a:hover { color: #fff; }
.links a.active { background: rgba(255,255,255,0.1); color: #fff; }
.wallet-actions { display: flex; align-items: center; gap: 1rem; }
.network { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.05); padding: 8px 16px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; border: 1px solid rgba(255,255,255,0.1); }
.dot { width: 8px; height: 8px; background: #a855f7; border-radius: 50%; box-shadow: 0 0 10px #a855f7; }
.connect-btn { background: linear-gradient(135deg, #3b82f6, #a855f7); color: #fff; border: none; padding: 10px 20px; border-radius: 20px; font-weight: bold; cursor: pointer; transition: 0.3s; box-shadow: 0 0 20px rgba(168,85,247,0.4); }
.connect-btn:hover { box-shadow: 0 0 30px rgba(168,85,247,0.6); transform: translateY(-1px); }
@media (max-width: 768px) { .links { display: none; } }`,
    jsCode: ``
  },

  // 8. Transparent to Solid Scroll Navbar
  {
    _id: "n8",
    title: "Scroll-Transition Solid Navbar",
    slug: "scroll-transition-solid-navbar",
    description: "A clever navbar that starts transparent over a hero image and transitions to a solid background on scroll.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    tags: ["navbar", "transition", "scroll", "transparent"],
    isPremium: false,
    views: 4100,
    downloads: 1200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="transition-nav" id="nav">
  <div class="logo">Lumina</div>
  <div class="links">
    <a href="#">Tour</a>
    <a href="#">Product</a>
    <a href="#">About</a>
  </div>
  <button class="action-btn">Get Early Access</button>
</nav>
<div class="hero-bg">
  <h2>Scroll down to see the effect</h2>
</div>
<div style="height: 150vh; background: #fff;"></div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; }
.transition-nav { position: fixed; top: 0; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 5%; box-sizing: border-box; transition: all 0.4s ease; z-index: 100; color: #fff; }
.transition-nav.scrolled { background: #fff; color: #000; padding: 1rem 5%; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
.logo { font-size: 1.5rem; font-weight: 900; letter-spacing: 1px; }
.links { display: flex; gap: 2rem; }
.links a { color: inherit; text-decoration: none; font-weight: 500; }
.action-btn { background: #fff; color: #000; border: none; padding: 0.8rem 1.5rem; border-radius: 4px; font-weight: bold; cursor: pointer; transition: 0.3s; }
.transition-nav.scrolled .action-btn { background: #000; color: #fff; }
.hero-bg { height: 100vh; background: url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600') center/cover; display: flex; align-items: center; justify-content: center; color: #fff; }`,
    jsCode: `window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});`
  },

  // 9. Full Screen Overlay Menu
  {
    _id: "n9",
    title: "Full Screen Overlay Menu",
    slug: "full-screen-overlay-menu",
    description: "A minimalist hamburger menu that triggers a beautiful full-screen animated overlay.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    tags: ["navbar", "overlay", "hamburger", "minimal"],
    isPremium: true,
    views: 3700,
    downloads: 980,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="minimal-nav">
  <div class="logo">O V R L Y.</div>
  <button class="menu-toggle" id="toggleBtn">
    <div class="line"></div><div class="line"></div>
  </button>
</nav>

<div class="overlay" id="overlay">
  <ul class="overlay-links">
    <li><a href="#" style="--delay: 0.1s">Index</a></li>
    <li><a href="#" style="--delay: 0.2s">Projects</a></li>
    <li><a href="#" style="--delay: 0.3s">Studio</a></li>
    <li><a href="#" style="--delay: 0.4s">Contact</a></li>
  </ul>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: 'Helvetica Neue', sans-serif; }
.minimal-nav { display: flex; justify-content: space-between; align-items: center; padding: 2rem 4rem; position: relative; z-index: 200; }
.logo { font-weight: 800; font-size: 1.2rem; letter-spacing: 2px; transition: color 0.4s; }
.menu-toggle { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; gap: 6px; width: 30px; height: 20px; justify-content: center; z-index: 200; }
.line { width: 100%; height: 2px; background: #000; transition: 0.4s; }
.menu-open .logo { color: #fff; }
.menu-open .line { background: #fff; }
.menu-open .line:nth-child(1) { transform: translateY(4px) rotate(45deg); }
.menu-open .line:nth-child(2) { transform: translateY(-4px) rotate(-45deg); }
.overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #000; display: flex; align-items: center; justify-content: center; clip-path: circle(0% at 100% 0%); transition: clip-path 0.8s cubic-bezier(0.77, 0, 0.175, 1); z-index: 100; }
.overlay.active { clip-path: circle(150% at 100% 0%); }
.overlay-links { list-style: none; padding: 0; text-align: center; }
.overlay-links li { overflow: hidden; margin-bottom: 1rem; }
.overlay-links a { display: inline-block; text-decoration: none; color: #fff; font-size: 4rem; font-weight: 900; text-transform: uppercase; transform: translateY(100%); transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1); transition-delay: var(--delay); }
.overlay.active .overlay-links a { transform: translateY(0); }
.overlay-links a:hover { color: #ff3366; }`,
    jsCode: `const btn = document.getElementById('toggleBtn');
const overlay = document.getElementById('overlay');
btn.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
  overlay.classList.toggle('active');
});`
  },

  // 10. Dashboard Sidebar Hybrid
  {
    _id: "n10",
    title: "SaaS Dashboard Sidebar Hybrid",
    slug: "saas-dashboard-sidebar-hybrid",
    description: "A robust vertical sidebar navigation designed specifically for complex SaaS dashboards.",
    category: "Navbar",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["navbar", "sidebar", "dashboard", "saas"],
    isPremium: false,
    views: 4600,
    downloads: 1550,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dashboard-layout">
  <aside class="sidebar">
    <div class="brand">
      <div class="logo-box"></div> AppDash
    </div>
    <div class="menu-section">
      <p>MAIN MENU</p>
      <a href="#" class="active"><i>🏠</i> Overview</a>
      <a href="#"><i>📊</i> Analytics</a>
      <a href="#"><i>✉️</i> Campaigns <span class="badge">New</span></a>
      <a href="#"><i>👥</i> Customers</a>
    </div>
    <div class="menu-section">
      <p>SETTINGS</p>
      <a href="#"><i>⚙️</i> Preferences</a>
      <a href="#"><i>🛡️</i> Security</a>
    </div>
    <div class="user-card">
      <img src="https://i.pravatar.cc/100?img=1" alt="User">
      <div class="user-info">
        <h4>Jane Doe</h4>
        <span>Pro Plan</span>
      </div>
    </div>
  </aside>
  <main class="content">
    <header class="top-header">
      <h2>Overview</h2>
      <button class="create-btn">+ Create New</button>
    </header>
  </main>
</div>`,
    cssCode: `body { margin: 0; background: #f1f5f9; font-family: 'Inter', sans-serif; color: #334155; }
.dashboard-layout { display: flex; height: 100vh; }
.sidebar { width: 260px; background: #fff; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; padding: 1.5rem; box-sizing: border-box; }
.brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 1.25rem; color: #0f172a; margin-bottom: 2.5rem; }
.logo-box { width: 32px; height: 32px; background: #3b82f6; border-radius: 8px; }
.menu-section { margin-bottom: 2rem; }
.menu-section p { font-size: 0.75rem; font-weight: 700; color: #94a3b8; letter-spacing: 1px; margin-bottom: 1rem; }
.menu-section a { display: flex; align-items: center; text-decoration: none; color: #64748b; font-weight: 500; font-size: 0.95rem; padding: 0.6rem 0.8rem; border-radius: 8px; margin-bottom: 0.2rem; transition: 0.2s; }
.menu-section a i { margin-right: 10px; font-style: normal; }
.menu-section a:hover, .menu-section a.active { background: #f1f5f9; color: #0f172a; }
.badge { margin-left: auto; background: #3b82f6; color: #fff; font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; font-weight: bold; }
.user-card { margin-top: auto; display: flex; align-items: center; gap: 12px; padding-top: 1.5rem; border-top: 1px solid #e2e8f0; }
.user-card img { width: 40px; height: 40px; border-radius: 50%; }
.user-info h4 { margin: 0; font-size: 0.9rem; color: #0f172a; }
.user-info span { font-size: 0.8rem; color: #64748b; }
.content { flex: 1; padding: 2rem; }
.top-header { display: flex; justify-content: space-between; align-items: center; }
.top-header h2 { margin: 0; color: #0f172a; font-size: 1.5rem; }
.create-btn { background: #0f172a; color: #fff; border: none; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 600; cursor: pointer; }`,
    jsCode: ``
  }
];
