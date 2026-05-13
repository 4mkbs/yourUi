import { Design } from "./designs-data";

export const BATCH_96_DESIGNS: Design[] = [
  // 1. Classic Split Hero
  {
    _id: "hero1",
    title: "Classic Split Hero",
    slug: "classic-split-hero",
    description: "Standard landing page hero with text on the left and an image on the right.",
    category: "Heroes",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["hero", "split", "landing", "classic"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-cl">
  <div class="cl-content">
    <span class="cl-badge">New Feature Release 2.0</span>
    <h1>Build faster with our component library</h1>
    <p>Stop reinventing the wheel. Access hundreds of beautifully designed, accessible components ready to drop into your project.</p>
    <div class="cl-actions">
      <button class="cl-btn primary">Get Started Free</button>
      <button class="cl-btn secondary">View Documentation</button>
    </div>
  </div>
  <div class="cl-visual">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="Code editor" />
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.hero-cl { max-width: 1200px; margin: 0 auto; padding: 100px 20px; display: flex; align-items: center; gap: 60px; min-height: 80vh; }
.cl-content { flex: 1; }
.cl-badge { background: #eff6ff; color: #2563eb; padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; display: inline-block; margin-bottom: 20px; }
.cl-content h1 { font-size: 3.5rem; font-weight: 800; color: #0f172a; line-height: 1.1; margin: 0 0 20px; letter-spacing: -1px; }
.cl-content p { font-size: 1.2rem; color: #475569; line-height: 1.6; margin: 0 0 40px; max-width: 500px; }
.cl-actions { display: flex; gap: 15px; }
.cl-btn { padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 1.05rem; cursor: pointer; transition: 0.2s; border: none; }
.cl-btn.primary { background: #0f172a; color: #fff; }
.cl-btn.primary:hover { background: #334155; transform: translateY(-2px); }
.cl-btn.secondary { background: #f1f5f9; color: #0f172a; }
.cl-btn.secondary:hover { background: #e2e8f0; }
.cl-visual { flex: 1; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.cl-visual img { width: 100%; height: auto; display: block; object-fit: cover; }
@media (max-width: 900px) { .hero-cl { flex-direction: column; text-align: center; padding: 60px 20px; } .cl-content p { margin: 0 auto 40px; } .cl-actions { justify-content: center; } }`,
    jsCode: ``
  },

  // 2. Centered Typography Hero
  {
    _id: "hero2",
    title: "Centered Typography Hero",
    slug: "centered-typography-hero",
    description: "Massive centered text focus, perfect for SaaS products.",
    category: "Heroes",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["hero", "centered", "typography", "saas"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-ct">
  <div class="ct-container">
    <h1>Create beautiful websites. <br/><span class="ct-highlight">No code required.</span></h1>
    <p>Empower your team to build, launch, and manage stunning websites without writing a single line of code. Start your 14-day free trial today.</p>
    <div class="ct-actions">
      <button class="ct-btn main">Start for free</button>
      <button class="ct-btn ghost">Book a demo</button>
    </div>
    <div class="ct-mockup"></div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; }
.hero-ct { padding: 120px 20px 60px; text-align: center; }
.ct-container { max-width: 900px; margin: 0 auto; }
.hero-ct h1 { font-size: 4.5rem; font-weight: 900; color: #111; line-height: 1.1; letter-spacing: -2px; margin: 0 0 20px; }
.ct-highlight { color: #3b82f6; }
.hero-ct p { font-size: 1.3rem; color: #555; max-width: 600px; margin: 0 auto 40px; line-height: 1.6; }
.ct-actions { display: flex; justify-content: center; gap: 20px; margin-bottom: 60px; }
.ct-btn { padding: 15px 30px; border-radius: 50px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.2s; border: none; }
.ct-btn.main { background: #111; color: #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
.ct-btn.main:hover { background: #333; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }
.ct-btn.ghost { background: transparent; color: #111; border: 2px solid #eaeaea; }
.ct-btn.ghost:hover { border-color: #111; }
.ct-mockup { height: 400px; background: #fff; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); border: 1px solid #eaeaea; margin: 0 40px; }
@media (max-width: 768px) { .hero-ct h1 { font-size: 3rem; } .ct-actions { flex-direction: column; padding: 0 20px; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Hero
  {
    _id: "hero3",
    title: "Cyberpunk Terminal Hero",
    slug: "cyberpunk-terminal-hero",
    description: "Hacker-themed hero with glitch text and neon accents.",
    category: "Heroes",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["hero", "cyberpunk", "neon", "glitch"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-cy">
  <div class="cy-overlay"></div>
  <div class="cy-content">
    <div class="cy-sys">> SYSTEM.ONLINE</div>
    <h1 data-text="ENTER THE GRID">ENTER THE GRID</h1>
    <p>Neural link established. Accessing mainframe databases...</p>
    <button class="cy-btn">INITIALIZE_SEQUENCE</button>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; color: #0f0; }
.hero-cy { min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; padding: 20px; }
.cy-overlay { position: absolute; inset: 0; background: repeating-linear-gradient(transparent 0, transparent 2px, rgba(0,255,0,0.05) 2px, rgba(0,255,0,0.05) 4px); pointer-events: none; z-index: 2; }
.cy-content { position: relative; z-index: 3; text-align: center; max-width: 800px; }
.cy-sys { font-weight: bold; margin-bottom: 20px; opacity: 0.8; }
.cy-content h1 { font-size: 5rem; margin: 0 0 20px; letter-spacing: 5px; text-shadow: 0 0 10px #0f0; position: relative; display: inline-block; }
.cy-content h1::before, .cy-content h1::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.8; }
.cy-content h1::before { left: 3px; text-shadow: -2px 0 red; animation: glitch-anim 2s infinite linear alternate-reverse; }
.cy-content h1::after { left: -3px; text-shadow: -2px 0 blue; animation: glitch-anim 3s infinite linear alternate-reverse; }
@keyframes glitch-anim { 0% { clip: rect(20px, 9999px, 85px, 0); } 20% { clip: rect(92px, 9999px, 14px, 0); } 40% { clip: rect(43px, 9999px, 5px, 0); } 60% { clip: rect(76px, 9999px, 34px, 0); } 80% { clip: rect(12px, 9999px, 98px, 0); } 100% { clip: rect(54px, 9999px, 23px, 0); } }
.cy-content p { font-size: 1.2rem; color: #0aa; margin-bottom: 40px; }
.cy-btn { background: transparent; border: 2px solid #0f0; color: #0f0; padding: 15px 30px; font-family: inherit; font-size: 1.2rem; font-weight: bold; cursor: pointer; transition: 0.2s; box-shadow: 0 0 10px rgba(0,255,0,0.2); }
.cy-btn:hover { background: #0f0; color: #000; box-shadow: 0 0 20px #0f0; }
@media (max-width: 768px) { .cy-content h1 { font-size: 3rem; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Hero
  {
    _id: "hero4",
    title: "Glassmorphism Blur Hero",
    slug: "glassmorphism-blur-hero",
    description: "Frosted glass container over a vibrant, colorful gradient background.",
    category: "Heroes",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["hero", "glassmorphism", "blur", "gradient"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-gl">
  <div class="gl-card">
    <h1>Design without limits</h1>
    <p>Experience the crystal clear clarity of glassmorphic design in your next project.</p>
    <button class="gl-btn">Explore Gallery</button>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.hero-gl { min-height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #ff00cc, #333399, #00c9ff, #92fe9d); background-size: 400% 400%; animation: gradientBG 15s ease infinite; padding: 20px; }
@keyframes gradientBG { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
.gl-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 24px; padding: 60px 40px; text-align: center; max-width: 600px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); color: #fff; }
.gl-card h1 { font-size: 3.5rem; margin: 0 0 20px; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.gl-card p { font-size: 1.2rem; margin: 0 0 40px; opacity: 0.9; line-height: 1.5; }
.gl-btn { background: rgba(255,255,255,0.9); color: #333399; border: none; padding: 15px 35px; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.gl-btn:hover { background: #fff; transform: translateY(-3px); box-shadow: 0 15px 25px rgba(0,0,0,0.15); }
@media (max-width: 600px) { .gl-card h1 { font-size: 2.5rem; } }`,
    jsCode: ``
  },

  // 5. Brutalist Hero
  {
    _id: "hero5",
    title: "Brutalist Bold Hero",
    slug: "brutalist-bold-hero",
    description: "Aggressive, high-contrast hero section with massive typography.",
    category: "Heroes",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["hero", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-br">
  <div class="br-content">
    <h1>MAKE IT BOLD. <br/>MAKE IT LOUD.</h1>
    <p>A CSS library for those who don't care about subtlety.</p>
    <a href="#" class="br-btn">DOWNLOAD NOW →</a>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.hero-br { min-height: 100vh; display: flex; align-items: center; padding: 40px; background: #facc15; border-bottom: 10px solid #000; }
.br-content { max-width: 1000px; }
.br-content h1 { font-size: clamp(4rem, 10vw, 8rem); font-weight: 900; line-height: 0.9; margin: 0 0 30px; color: #000; text-transform: uppercase; letter-spacing: -2px; }
.br-content p { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: bold; color: #000; margin: 0 0 50px; background: #fff; display: inline-block; padding: 10px 20px; border: 4px solid #000; box-shadow: 6px 6px 0 #000; }
.br-btn { display: inline-block; background: #000; color: #fff; font-size: 2rem; font-weight: 900; text-decoration: none; padding: 20px 40px; border: 4px solid #000; transition: 0.1s; }
.br-btn:hover { background: #fff; color: #000; box-shadow: 10px 10px 0 #000; transform: translate(-5px, -5px); }`,
    jsCode: ``
  },

  // 6. Dark Mode Glow Hero
  {
    _id: "hero6",
    title: "Dark Glow Hero",
    slug: "dark-glow-hero",
    description: "Deep dark background centered around a glowing abstract element.",
    category: "Heroes",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["hero", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-dg">
  <div class="dg-orb"></div>
  <div class="dg-content">
    <h1>The Future of Energy</h1>
    <p>Harnessing the power of the stars to fuel tomorrow's innovations.</p>
    <button class="dg-btn">Discover</button>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; color: #fff; overflow-x: hidden; }
.hero-dg { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative; text-align: center; padding: 20px; }
.dg-orb { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, #3b82f6 0%, transparent 70%); filter: blur(60px); opacity: 0.5; z-index: 1; pointer-events: none; }
.dg-content { position: relative; z-index: 2; max-width: 800px; }
.dg-content h1 { font-size: 5rem; font-weight: 900; margin: 0 0 20px; letter-spacing: -2px; }
.dg-content p { font-size: 1.3rem; color: #94a3b8; margin: 0 0 40px; line-height: 1.6; }
.dg-btn { background: #0f172a; color: #3b82f6; border: 1px solid #3b82f6; padding: 15px 40px; border-radius: 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: 0.3s; box-shadow: 0 0 20px rgba(59,130,246,0.2); }
.dg-btn:hover { background: #3b82f6; color: #fff; box-shadow: 0 0 40px rgba(59,130,246,0.5); }
@media (max-width: 768px) { .dg-content h1 { font-size: 3rem; } .dg-orb { width: 300px; height: 300px; } }`,
    jsCode: ``
  },

  // 7. Video Background Hero
  {
    _id: "hero7",
    title: "Video/Image Background Hero",
    slug: "video-image-background-hero",
    description: "Hero section featuring a full-bleed darkened background image or video with crisp white text overlay.",
    category: "Heroes",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["hero", "background", "image", "overlay"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-bg">
  <div class="bg-overlay"></div>
  <div class="bg-content">
    <h1>Adventure Awaits</h1>
    <p>Discover untouched landscapes and experience nature like never before.</p>
    <button class="bg-btn">Book Your Trip</button>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.hero-bg { min-height: 100vh; background: url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80') center/cover no-repeat; position: relative; display: flex; align-items: center; padding: 40px; }
.bg-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.5); z-index: 1; }
.bg-content { position: relative; z-index: 2; color: #fff; max-width: 600px; }
.bg-content h1 { font-size: 4rem; font-weight: 800; margin: 0 0 20px; letter-spacing: -1px; }
.bg-content p { font-size: 1.2rem; line-height: 1.6; margin: 0 0 30px; opacity: 0.9; }
.bg-btn { background: #fff; color: #000; padding: 15px 30px; border: none; border-radius: 4px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.3s; }
.bg-btn:hover { background: #f0f0f0; transform: translateY(-2px); }
@media (max-width: 600px) { .bg-content h1 { font-size: 3rem; } }`,
    jsCode: ``
  },

  // 8. Product Showcase Hero
  {
    _id: "hero8",
    title: "Product Showcase Hero",
    slug: "product-showcase-hero",
    description: "Hero designed to put a physical product front and center.",
    category: "Heroes",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    tags: ["hero", "product", "ecommerce", "showcase"],
    isPremium: false,
    views: 41200,
    downloads: 10900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-ps">
  <div class="ps-bg"></div>
  <div class="ps-content">
    <h1 class="ps-title">SmartWatch Series X</h1>
    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80" alt="Watch" class="ps-img" />
    <div class="ps-bottom">
      <p>The ultimate device for a healthy life.</p>
      <button class="ps-btn">Pre-order now</button>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; overflow-x: hidden; }
.hero-ps { min-height: 100vh; position: relative; display: flex; justify-content: center; align-items: center; }
.ps-bg { position: absolute; top: 0; left: 0; right: 0; height: 60vh; background: #f1f5f9; z-index: 1; border-bottom-left-radius: 50% 10%; border-bottom-right-radius: 50% 10%; }
.ps-content { position: relative; z-index: 2; text-align: center; max-width: 800px; padding: 40px 20px; }
.ps-title { font-size: 3rem; font-weight: 800; color: #0f172a; margin: 0 0 40px; }
.ps-img { width: 100%; max-width: 400px; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); margin-bottom: 40px; }
.ps-bottom p { font-size: 1.2rem; color: #475569; margin: 0 0 20px; }
.ps-btn { background: #0f172a; color: #fff; border: none; padding: 15px 40px; border-radius: 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: 0.2s; }
.ps-btn:hover { background: #3b82f6; box-shadow: 0 10px 20px rgba(59,130,246,0.3); }`,
    jsCode: ``
  },

  // 9. Neumorphic Hero
  {
    _id: "hero9",
    title: "Neumorphic Soft Hero",
    slug: "neumorphic-soft-hero",
    description: "Soft UI hero section with embossed and inset elements.",
    category: "Heroes",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["hero", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-neu">
  <div class="neu-card">
    <h1>Feel the interface</h1>
    <p>A completely tactile approach to web design.</p>
    <div class="neu-actions">
      <button class="neu-btn active">Get App</button>
      <button class="neu-btn">Learn More</button>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.hero-neu { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.neu-card { background: #e0e5ec; padding: 60px 40px; border-radius: 40px; box-shadow: 16px 16px 32px rgba(163,177,198,0.6), -16px -16px 32px rgba(255,255,255,0.5); text-align: center; max-width: 600px; }
.neu-card h1 { margin: 0 0 20px; color: #4a5568; font-size: 3rem; text-shadow: 2px 2px 4px rgba(255,255,255,0.5), -2px -2px 4px rgba(163,177,198,0.2); }
.neu-card p { color: #718096; font-size: 1.2rem; margin: 0 0 40px; }
.neu-actions { display: flex; justify-content: center; gap: 20px; }
.neu-btn { padding: 15px 30px; border-radius: 15px; border: none; font-weight: bold; font-size: 1.1rem; color: #4a5568; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); cursor: pointer; transition: 0.2s; }
.neu-btn.active, .neu-btn:active { box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); color: #3182ce; }
@media (max-width: 500px) { .neu-actions { flex-direction: column; } }`,
    jsCode: ``
  },

  // 10. Minimalist Grid Hero
  {
    _id: "hero10",
    title: "Minimalist Grid Hero",
    slug: "minimalist-grid-hero",
    description: "Editorial layout using fine lines and sparse typography.",
    category: "Heroes",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["hero", "minimal", "grid", "editorial"],
    isPremium: true,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hero-gr">
  <div class="gr-top-border"></div>
  <div class="gr-content">
    <div class="gr-left">
      <div class="gr-label">01 // COLLECTION</div>
      <h1>Autumn<br/>Essentials</h1>
    </div>
    <div class="gr-right">
      <img src="https://images.unsplash.com/photo-1434389678278-be4c1fbb6b8b?w=600&q=80" alt="Fashion" />
      <div class="gr-desc">
        <p>Discover the new standard of modern tailoring.</p>
        <a href="#">Explore Catalog →</a>
      </div>
    </div>
  </div>
  <div class="gr-bottom-border"></div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; color: #000; }
.hero-gr { min-height: 100vh; display: flex; flex-direction: column; padding: 40px; box-sizing: border-box; }
.gr-top-border, .gr-bottom-border { border-top: 1px solid #000; width: 100%; margin-bottom: 20px; }
.gr-bottom-border { margin-top: auto; margin-bottom: 0; }
.gr-content { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; flex: 1; align-items: center; }
.gr-label { font-size: 0.8rem; letter-spacing: 2px; margin-bottom: 20px; font-weight: bold; }
.gr-left h1 { font-size: 6vw; font-weight: 300; line-height: 1.1; margin: 0; }
.gr-right { display: flex; flex-direction: column; gap: 20px; border-left: 1px solid #000; padding-left: 40px; height: 100%; justify-content: center; }
.gr-right img { width: 100%; max-height: 50vh; object-fit: cover; filter: grayscale(100%); transition: 0.5s; }
.gr-right img:hover { filter: grayscale(0%); }
.gr-desc p { font-size: 1.2rem; margin: 0 0 10px; }
.gr-desc a { color: #000; text-decoration: none; font-weight: bold; border-bottom: 1px solid #000; }
@media (max-width: 768px) { .gr-content { grid-template-columns: 1fr; } .gr-left h1 { font-size: 4rem; } .gr-right { border-left: none; padding-left: 0; border-top: 1px solid #000; padding-top: 40px; } }`,
    jsCode: ``
  }
];
