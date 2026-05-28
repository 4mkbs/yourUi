import { Design } from "./designs-data";

export const BATCH_1_DESIGNS: Design[] = [
  // 1. SaaS Gradient Hero
  {
    _id: "h1",
    title: "SaaS Animated Gradient Hero",
    slug: "saas-animated-gradient-hero",
    description: "A conversion-optimized SaaS hero section with an animated gradient background and email capture form.",
    category: "Hero Section",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tags: ["hero", "saas", "gradient", "landing"],
    isPremium: false,
    views: 4500,
    downloads: 1200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-saas">
  <div class="content">
    <div class="badge">New v2.0 Release 🚀</div>
    <h1>Build faster with<br/><span>modern tools</span></h1>
    <p>Everything you need to ship your next product, without the boilerplate. Start building today.</p>
    <form class="email-capture">
      <input type="email" placeholder="Enter your email address" required />
      <button type="submit">Start Free Trial</button>
    </form>
    <div class="trust">Trusted by 10,000+ developers worldwide</div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #0f172a; }
.hero-saas { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 2rem; position: relative; overflow: hidden; background: linear-gradient(-45deg, #0f172a, #1e1b4b, #312e81, #0f172a); background-size: 400% 400%; animation: gradientBG 15s ease infinite; }
@keyframes gradientBG { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
.content { position: relative; z-index: 10; max-width: 800px; }
.badge { display: inline-block; padding: 0.5rem 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 50px; color: #fff; font-size: 0.875rem; font-weight: 500; margin-bottom: 2rem; backdrop-filter: blur(10px); }
h1 { font-size: clamp(3rem, 8vw, 5rem); color: #fff; line-height: 1.1; font-weight: 800; margin: 0 0 1.5rem 0; letter-spacing: -0.02em; }
h1 span { background: linear-gradient(to right, #38bdf8, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
p { font-size: 1.25rem; color: #94a3b8; line-height: 1.6; margin: 0 auto 3rem auto; max-width: 600px; }
.email-capture { display: flex; gap: 0.5rem; max-width: 500px; margin: 0 auto 2rem auto; padding: 0.5rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; backdrop-filter: blur(10px); }
.email-capture input { flex: 1; bg: transparent; border: none; padding: 1rem; color: #fff; font-size: 1rem; background: transparent; outline: none; }
.email-capture button { padding: 1rem 2rem; background: #38bdf8; color: #0f172a; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.email-capture button:hover { background: #7dd3fc; }
.trust { color: #64748b; font-size: 0.875rem; }`,
    jsCode: `document.querySelector('form').addEventListener('submit', (e) => { e.preventDefault(); alert('Signed up!'); });`
  },

  // 2. Developer API Hero
  {
    _id: "h2",
    title: "Developer API Terminal Hero",
    slug: "developer-api-terminal-hero",
    description: "Hero section featuring a realistic terminal window and code snippet layout designed for dev tools.",
    category: "Hero Section",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["hero", "developer", "api", "terminal"],
    isPremium: true,
    views: 3200,
    downloads: 850,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-dev">
  <div class="container">
    <div class="text-col">
      <h1>The infrastructure<br>for modern apps</h1>
      <p>Powerful APIs, comprehensive documentation, and SDKs for every language. Build and scale your platform in minutes, not months.</p>
      <div class="btn-group">
        <a href="#" class="btn primary">Read the Docs</a>
        <a href="#" class="btn secondary">Get API Key</a>
      </div>
    </div>
    <div class="terminal-col">
      <div class="terminal">
        <div class="terminal-header">
          <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
          <div class="title">bash</div>
        </div>
        <div class="terminal-body">
          <p><span class="prompt">$</span> npm install @yourui/sdk</p>
          <p class="gray">Installing packages...</p>
          <br>
          <p><span class="prompt">$</span> yourui init</p>
          <p><span class="green">✔</span> Project initialized successfully.</p>
          <p><span class="prompt">$</span> <span class="cursor">_</span></p>
        </div>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; background: #050505; font-family: -apple-system, sans-serif; color: #fff; }
.hero-dev { min-height: 100vh; display: flex; align-items: center; padding: 2rem; }
.container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
.text-col h1 { font-size: 4rem; margin: 0 0 1.5rem 0; line-height: 1.1; font-weight: 800; }
.text-col p { font-size: 1.25rem; color: #a1a1aa; line-height: 1.6; margin: 0 0 2.5rem 0; }
.btn-group { display: flex; gap: 1rem; }
.btn { padding: 1rem 2rem; border-radius: 8px; font-weight: 600; text-decoration: none; transition: 0.2s; }
.btn.primary { background: #fff; color: #000; }
.btn.primary:hover { background: #e4e4e7; }
.btn.secondary { background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2); }
.btn.secondary:hover { background: rgba(255,255,255,0.15); }
.terminal { background: #18181b; border-radius: 12px; border: 1px solid #27272a; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.terminal-header { display: flex; align-items: center; padding: 1rem; background: #27272a; gap: 0.5rem; position: relative; }
.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot.red { background: #ef4444; } .dot.yellow { background: #eab308; } .dot.green { background: #22c55e; }
.title { position: absolute; width: 100%; text-align: center; left: 0; font-family: monospace; color: #a1a1aa; font-size: 0.875rem; pointer-events: none; }
.terminal-body { padding: 2rem; font-family: 'Fira Code', monospace; font-size: 0.95rem; line-height: 1.5; color: #e4e4e7; }
.prompt { color: #ec4899; }
.gray { color: #71717a; }
.green { color: #22c55e; }
.cursor { animation: blink 1s step-end infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@media (max-width: 768px) { .container { grid-template-columns: 1fr; text-align: center; } .btn-group { justify-content: center; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Neon Hero
  {
    _id: "h3",
    title: "Cyberpunk Neon Grid Hero",
    slug: "cyberpunk-neon-hero",
    description: "A dark cyberpunk-themed hero with glowing borders, glitch effects, and perspective grid.",
    category: "Hero Section",
    thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
    tags: ["hero", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 5600,
    downloads: 1800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cyber-hero">
  <div class="grid-bg"></div>
  <div class="cyber-content">
    <h1 class="glitch" data-text="NEURAL_NET">NEURAL_NET</h1>
    <p>Uplink established. Enter the mainframe and access next-gen protocol tools.</p>
    <button class="cyber-btn">INITIALIZE <span class="arrow">>></span></button>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #000; overflow: hidden; font-family: 'Courier New', Courier, monospace; }
.cyber-hero { height: 100vh; display: flex; justify-content: center; align-items: center; position: relative; perspective: 1000px; }
.grid-bg { position: absolute; bottom: -50%; left: -50%; width: 200%; height: 150%; background-image: linear-gradient(transparent 65%, #ff0055 100%), linear-gradient(to right, #00d2ff 2px, transparent 2px), linear-gradient(to bottom, #00d2ff 2px, transparent 2px); background-size: 100% 100%, 50px 50px, 50px 50px; transform: rotateX(60deg); animation: moveGrid 5s linear infinite; opacity: 0.3; }
@keyframes moveGrid { 0% { transform: rotateX(60deg) translateY(0); } 100% { transform: rotateX(60deg) translateY(50px); } }
.cyber-content { position: relative; z-index: 10; text-align: center; color: #fff; padding: 2rem; background: rgba(0,0,0,0.6); border: 2px solid #00d2ff; box-shadow: 0 0 20px rgba(0,210,255,0.5), inset 0 0 20px rgba(0,210,255,0.5); backdrop-filter: blur(5px); }
.glitch { font-size: 5rem; font-weight: 900; margin: 0 0 1rem 0; color: #fff; text-shadow: 2px 2px #ff0055, -2px -2px #00d2ff; position: relative; }
.cyber-content p { font-size: 1.2rem; color: #00d2ff; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 2rem; text-shadow: 0 0 5px #00d2ff; }
.cyber-btn { background: transparent; border: 2px solid #ff0055; color: #ff0055; padding: 15px 40px; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 3px; cursor: pointer; transition: 0.3s; position: relative; overflow: hidden; }
.cyber-btn:hover { background: #ff0055; color: #000; box-shadow: 0 0 30px #ff0055; }
.arrow { display: inline-block; transition: 0.3s; }
.cyber-btn:hover .arrow { transform: translateX(10px); }`,
    jsCode: ``
  },

  // 4. Minimalist Typographic Hero
  {
    _id: "h4",
    title: "Brutalist Typographic Hero",
    slug: "brutalist-typographic-hero",
    description: "A stark, minimalist hero section focusing on huge typography and severe contrast.",
    category: "Hero Section",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["hero", "minimalist", "brutalist", "typography"],
    isPremium: false,
    views: 4100,
    downloads: 900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="brutal-hero">
  <div class="nav-fake">
    <span>STUDIO</span>
    <span>MENU [=]</span>
  </div>
  <div class="big-text">
    DESIGN<br>
    IS NOT<br>
    NEUTRAL.
  </div>
  <div class="footer-fake">
    <p>WE BUILD DIGITAL EXPERIENCES FOR TOMORROW.</p>
    <a href="#" class="btn">LET'S TALK -></a>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e5e5e5; color: #111; font-family: 'Helvetica Neue', Arial, sans-serif; }
.brutal-hero { height: 100vh; display: flex; flex-direction: column; justify-content: space-between; padding: 2rem; box-sizing: border-box; }
.nav-fake { display: flex; justify-content: space-between; font-weight: 700; font-size: 1.2rem; border-bottom: 3px solid #111; padding-bottom: 1rem; }
.big-text { font-size: clamp(4rem, 15vw, 12rem); font-weight: 900; line-height: 0.85; letter-spacing: -0.05em; text-transform: uppercase; margin: auto 0; }
.footer-fake { display: flex; justify-content: space-between; align-items: flex-end; border-top: 3px solid #111; padding-top: 1rem; }
.footer-fake p { margin: 0; font-weight: 600; font-size: 1.2rem; max-width: 300px; }
.btn { display: inline-block; background: #111; color: #e5e5e5; text-decoration: none; padding: 1rem 2rem; font-weight: 800; font-size: 1.2rem; transition: 0.2s; }
.btn:hover { background: #e5e5e5; color: #111; outline: 3px solid #111; }
@media (max-width: 768px) { .footer-fake { flex-direction: column; gap: 2rem; align-items: flex-start; } }`,
    jsCode: ``
  },

  // 5. E-commerce Split Screen
  {
    _id: "h5",
    title: "Elegant Split E-Commerce Hero",
    slug: "elegant-split-ecommerce-hero",
    description: "A luxury e-commerce split screen layout with elegant typography and large imagery.",
    category: "Hero Section",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["hero", "ecommerce", "fashion", "split"],
    isPremium: true,
    views: 2900,
    downloads: 650,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="split-hero">
  <div class="text-side">
    <div class="wrapper">
      <span class="collection">FW // 2026</span>
      <h1>Elevate<br>Your Style.</h1>
      <p>Discover the new minimalist collection crafted for the modern individual.</p>
      <button class="shop-btn">Shop Collection</button>
    </div>
  </div>
  <div class="image-side"></div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Playfair Display', serif; }
.split-hero { display: flex; height: 100vh; }
.text-side { flex: 1; background: #FAF9F6; display: flex; align-items: center; justify-content: center; padding: 4rem; }
.image-side { flex: 1; background: url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000') center/cover; }
.wrapper { max-width: 500px; }
.collection { font-family: sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 0.8rem; color: #666; }
h1 { font-size: 5rem; margin: 1rem 0 2rem 0; color: #1a1a1a; line-height: 1.1; }
p { font-family: sans-serif; font-size: 1.1rem; color: #555; line-height: 1.6; margin-bottom: 3rem; }
.shop-btn { background: #1a1a1a; color: #fff; border: none; padding: 1.2rem 3rem; font-family: sans-serif; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; transition: 0.3s; }
.shop-btn:hover { background: #4a4a4a; }
@media (max-width: 900px) { .split-hero { flex-direction: column; } .image-side { height: 50vh; order: -1; } .text-side { padding: 2rem; text-align: center; } h1 { font-size: 3.5rem; } }`,
    jsCode: ``
  },

  // 6. App Showcase Hero
  {
    _id: "h6",
    title: "Mobile App Showcase Hero",
    slug: "mobile-app-showcase-hero",
    description: "A clean landing page hero tailored for mobile apps, featuring a floating phone mockup.",
    category: "Hero Section",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["hero", "app", "mobile", "clean"],
    isPremium: false,
    views: 3400,
    downloads: 750,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="app-hero">
  <div class="content">
    <h1>Manage your finances, <br><span>anywhere.</span></h1>
    <p>The ultimate banking app that helps you save, track, and grow your money effortlessly.</p>
    <div class="stores">
      <button class="store-btn">Download on App Store</button>
      <button class="store-btn">Get it on Google Play</button>
    </div>
  </div>
  <div class="mockup-container">
    <div class="phone-mockup">
      <div class="screen"></div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f8fafc; font-family: sans-serif; overflow-x: hidden; }
.app-hero { display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; min-height: 100vh; padding: 0 2rem; }
.content { flex: 1; padding-right: 4rem; }
h1 { font-size: 4rem; color: #0f172a; line-height: 1.1; margin-bottom: 1.5rem; }
h1 span { color: #3b82f6; }
p { font-size: 1.25rem; color: #64748b; line-height: 1.6; margin-bottom: 2.5rem; }
.stores { display: flex; gap: 1rem; }
.store-btn { padding: 1rem 1.5rem; background: #0f172a; color: #fff; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.store-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.mockup-container { flex: 1; position: relative; display: flex; justify-content: center; }
.phone-mockup { width: 300px; height: 600px; background: #fff; border: 12px solid #0f172a; border-radius: 40px; position: relative; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); animation: float 6s ease-in-out infinite; }
.phone-mockup::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 120px; height: 25px; background: #0f172a; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; }
.screen { width: 100%; height: 100%; border-radius: 28px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
@media (max-width: 900px) { .app-hero { flex-direction: column; text-align: center; padding-top: 6rem; } .content { padding-right: 0; margin-bottom: 4rem; } .stores { justify-content: center; } }`,
    jsCode: ``
  },

  // 7. Web3 Crypto Hero
  {
    _id: "h7",
    title: "Web3 NFT Platform Hero",
    slug: "web3-nft-platform-hero",
    description: "Deep purple theme with 3D elements tailored for crypto and Web3 projects.",
    category: "Hero Section",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["hero", "web3", "crypto", "nft"],
    isPremium: true,
    views: 4800,
    downloads: 1100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="web3-hero">
  <div class="content">
    <h1>Discover, collect, and sell<br>extraordinary <span>NFTs</span></h1>
    <p>The world's largest digital marketplace for crypto collectibles and non-fungible tokens.</p>
    <div class="actions">
      <button class="btn-explore">Explore</button>
      <button class="btn-create">Create</button>
    </div>
    <div class="stats">
      <div><strong>200k+</strong><br>Collections</div>
      <div><strong>1.5M+</strong><br>Artists</div>
      <div><strong>$2B+</strong><br>Volume</div>
    </div>
  </div>
  <div class="visual">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="glass-card">
      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" alt="Art">
      <div class="card-info">
        <div>Current Bid<br><strong>2.45 ETH</strong></div>
        <div>Ends in<br><strong>12h 45m</strong></div>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #0f0a1f; color: #fff; font-family: 'Inter', sans-serif; overflow: hidden; }
.web3-hero { display: flex; align-items: center; max-width: 1200px; margin: 0 auto; height: 100vh; padding: 0 2rem; }
.content { flex: 1; }
h1 { font-size: 3.5rem; line-height: 1.2; margin-bottom: 1.5rem; font-weight: 800; }
h1 span { background: linear-gradient(135deg, #a855f7, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
p { font-size: 1.2rem; color: #a7a6ba; margin-bottom: 2.5rem; max-width: 500px; }
.actions { display: flex; gap: 1rem; margin-bottom: 4rem; }
button { padding: 1rem 2.5rem; border-radius: 30px; font-weight: bold; font-size: 1rem; cursor: pointer; border: none; }
.btn-explore { background: linear-gradient(135deg, #a855f7, #ec4899); color: #fff; box-shadow: 0 10px 20px rgba(168, 85, 247, 0.3); }
.btn-create { background: rgba(255,255,255,0.05); color: #fff; border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); }
.stats { display: flex; gap: 3rem; }
.stats strong { font-size: 1.5rem; }
.stats div { color: #a7a6ba; font-size: 0.9rem; }
.visual { flex: 1; position: relative; display: flex; justify-content: center; align-items: center; }
.orb { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.6; }
.orb-1 { width: 300px; height: 300px; background: #a855f7; top: 0; right: 0; }
.orb-2 { width: 250px; height: 250px; background: #ec4899; bottom: 0; left: 0; }
.glass-card { position: relative; z-index: 10; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(20px); padding: 1.5rem; border-radius: 24px; animation: float 5s ease-in-out infinite; }
.glass-card img { border-radius: 16px; width: 300px; height: 350px; object-fit: cover; margin-bottom: 1.5rem; }
.card-info { display: flex; justify-content: space-between; font-size: 0.8rem; color: #a7a6ba; }
.card-info strong { color: #fff; font-size: 1.1rem; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
@media (max-width: 900px) { .web3-hero { flex-direction: column; text-align: center; justify-content: center; } .visual { display: none; } .stats { justify-content: center; } }`,
    jsCode: ``
  },

  // 8. Creative Agency Hero
  {
    _id: "h8",
    title: "Creative Agency Masonry Hero",
    slug: "creative-agency-masonry-hero",
    description: "An artistic layout with overlapping text and a masonry image grid.",
    category: "Hero Section",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    tags: ["hero", "agency", "creative", "masonry"],
    isPremium: false,
    views: 3100,
    downloads: 500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="agency-hero">
  <div class="headline">
    <h1>We build<br><span>digital</span><br>experiences.</h1>
  </div>
  <div class="gallery">
    <div class="img-wrap img-1"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400" /></div>
    <div class="img-wrap img-2"><img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=400" /></div>
    <div class="img-wrap img-3"><img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400" /></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #EAE6D7; font-family: 'Helvetica Neue', Arial, sans-serif; overflow: hidden; }
.agency-hero { display: flex; align-items: center; justify-content: space-between; height: 100vh; padding: 0 5vw; }
.headline { z-index: 10; }
h1 { font-size: clamp(4rem, 8vw, 8rem); font-weight: 900; line-height: 0.9; margin: 0; color: #1a1a1a; text-transform: uppercase; }
h1 span { -webkit-text-stroke: 2px #1a1a1a; color: transparent; font-style: italic; }
.gallery { position: relative; width: 40vw; height: 70vh; }
.img-wrap { position: absolute; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
.img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.img-wrap:hover img { transform: scale(1.05); }
.img-1 { width: 250px; height: 350px; top: 0; left: 0; z-index: 3; }
.img-2 { width: 200px; height: 280px; bottom: 0; left: 150px; z-index: 2; }
.img-3 { width: 280px; height: 300px; top: 100px; right: -50px; z-index: 1; }
@media (max-width: 900px) { .agency-hero { flex-direction: column; justify-content: center; text-align: center; } .gallery { display: none; } }`,
    jsCode: ``
  },

  // 9. FinTech Hero
  {
    _id: "h9",
    title: "FinTech Dashboard Hero",
    slug: "fintech-dashboard-hero",
    description: "A trustworthy green/blue themed hero with floating UI elements representing financial growth.",
    category: "Hero Section",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["hero", "fintech", "finance", "dashboard"],
    isPremium: true,
    views: 4100,
    downloads: 920,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fintech-hero">
  <div class="content">
    <h1>Banking that works for your business.</h1>
    <p>Open a business account in minutes. No hidden fees, seamless integrations, and 24/7 support.</p>
    <div class="cta-wrap">
      <button>Open Account</button>
      <span>No credit check required.</span>
    </div>
  </div>
  <div class="graphics">
    <div class="card main-card">
      <div class="bal">Balance</div>
      <div class="amt">$45,231.89</div>
      <div class="chart"></div>
    </div>
    <div class="card float-card">
      <div class="transfer">+ $1,250.00</div>
      <div>From Stripe</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: 'Inter', sans-serif; color: #1e293b; }
.fintech-hero { display: flex; align-items: center; max-width: 1200px; margin: 0 auto; height: 100vh; padding: 0 2rem; }
.content { flex: 1; padding-right: 4rem; }
h1 { font-size: 3.5rem; line-height: 1.1; font-weight: 800; margin-bottom: 1.5rem; color: #0f172a; }
p { font-size: 1.125rem; color: #64748b; line-height: 1.6; margin-bottom: 2rem; }
.cta-wrap { display: flex; align-items: center; gap: 1rem; }
button { padding: 1rem 2rem; background: #10b981; color: #fff; border: none; border-radius: 8px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: 0.2s; box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3); }
button:hover { background: #059669; }
.cta-wrap span { font-size: 0.875rem; color: #94a3b8; }
.graphics { flex: 1; position: relative; display: flex; justify-content: center; }
.card { background: #fff; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); padding: 2rem; border: 1px solid #e2e8f0; }
.main-card { width: 350px; z-index: 2; }
.bal { color: #64748b; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }
.amt { font-size: 2.5rem; font-weight: 800; color: #0f172a; margin: 10px 0 20px 0; }
.chart { height: 100px; background: linear-gradient(180deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 100%); border-top: 3px solid #10b981; border-radius: 4px; }
.float-card { position: absolute; bottom: -20px; right: -20px; width: 200px; z-index: 3; animation: float 4s infinite ease-in-out; }
.transfer { color: #10b981; font-weight: bold; font-size: 1.2rem; margin-bottom: 5px; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
@media (max-width: 900px) { .fintech-hero { flex-direction: column; text-align: center; justify-content: center; } .content { padding-right: 0; margin-bottom: 4rem; } .cta-wrap { justify-content: center; flex-direction: column; } .float-card { display: none; } }`,
    jsCode: ``
  },

  // 10. Waitlist/Launch Hero
  {
    _id: "h10",
    title: "Product Launch Waitlist Hero",
    slug: "product-launch-waitlist-hero",
    description: "A dark, highly-focused waitlist capture hero with social proof avatars.",
    category: "Hero Section",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["hero", "waitlist", "launch", "dark"],
    isPremium: false,
    views: 5100,
    downloads: 1300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="waitlist-hero">
  <div class="content">
    <div class="chip">Private Beta</div>
    <h1>The future of work is here.</h1>
    <p>We are reimagining how teams collaborate. Join 5,000+ others on the waitlist to get early access.</p>
    <div class="input-group">
      <input type="email" placeholder="name@company.com" />
      <button>Join Waitlist</button>
    </div>
    <div class="social-proof">
      <div class="avatars">
        <img src="https://i.pravatar.cc/100?img=1" />
        <img src="https://i.pravatar.cc/100?img=2" />
        <img src="https://i.pravatar.cc/100?img=3" />
        <img src="https://i.pravatar.cc/100?img=4" />
      </div>
      <span>+5,243 already joined</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #0a0a0a; color: #fff; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.content { text-align: center; max-width: 700px; padding: 2rem; }
.chip { display: inline-block; padding: 0.25rem 0.75rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2rem; color: #a1a1aa; }
h1 { font-size: 4.5rem; font-weight: 800; line-height: 1; margin: 0 0 1.5rem 0; letter-spacing: -0.03em; }
p { font-size: 1.2rem; color: #a1a1aa; margin: 0 auto 3rem auto; max-width: 500px; line-height: 1.5; }
.input-group { display: flex; gap: 10px; max-width: 450px; margin: 0 auto 3rem auto; }
input { flex: 1; padding: 1.2rem; border-radius: 12px; border: 1px solid #333; background: #111; color: #fff; font-size: 1rem; outline: none; transition: 0.3s; }
input:focus { border-color: #fff; }
button { padding: 1.2rem 2rem; border-radius: 12px; border: none; background: #fff; color: #000; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.3s; }
button:hover { background: #e5e5e5; }
.social-proof { display: flex; align-items: center; justify-content: center; gap: 15px; }
.avatars { display: flex; }
.avatars img { width: 40px; height: 40px; border-radius: 50%; border: 3px solid #0a0a0a; margin-left: -15px; }
.avatars img:first-child { margin-left: 0; }
.social-proof span { color: #71717a; font-size: 0.9rem; font-weight: 500; }
@media (max-width: 600px) { h1 { font-size: 3rem; } .input-group { flex-direction: column; } }`,
    jsCode: ``
  }
];
