import { Design } from "./designs-data";

export const BATCH_72_DESIGNS: Design[] = [
  // 1. Classic Grayscale Grid
  {
    _id: "lc1",
    title: "Classic Grayscale Grid",
    slug: "classic-grayscale-grid",
    description: "Standard 'Trusted By' section with grayscale logos that colorize on hover.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["logos", "trusted by", "grid", "grayscale"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-cl">
  <p class="lc-c-title">TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE</p>
  <div class="lc-c-grid">
    <div class="lc-c-logo">ACME CORP</div>
    <div class="lc-c-logo">GLOBEX</div>
    <div class="lc-c-logo">SOYUZ</div>
    <div class="lc-c-logo">INITECH</div>
    <div class="lc-c-logo">UMBRELLA</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 80px 20px; display: flex; justify-content: center; }
.lc-cl { max-width: 1000px; width: 100%; text-align: center; }
.lc-c-title { color: #64748b; font-size: 0.85rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 40px; }
.lc-c-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px 60px; align-items: center; }
.lc-c-logo { font-size: 1.5rem; font-weight: 900; color: #94a3b8; letter-spacing: -1px; filter: grayscale(100%) opacity(0.6); transition: 0.3s ease; cursor: default; }
.lc-c-logo:hover { filter: grayscale(0%) opacity(1); transform: scale(1.05); }
.lc-c-logo:nth-child(1):hover { color: #ef4444; }
.lc-c-logo:nth-child(2):hover { color: #3b82f6; }
.lc-c-logo:nth-child(3):hover { color: #10b981; }
.lc-c-logo:nth-child(4):hover { color: #f59e0b; }
.lc-c-logo:nth-child(5):hover { color: #8b5cf6; }`,
    jsCode: ``
  },

  // 2. Infinite Marquee
  {
    _id: "lc2",
    title: "Infinite Marquee",
    slug: "infinite-marquee",
    description: "Smooth CSS-only infinitely scrolling marquee of client logos.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["logos", "marquee", "scrolling", "animation"],
    isPremium: false,
    views: 45100,
    downloads: 12200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-mq">
  <div class="lc-m-track">
    <div class="lc-m-logo">ACME CORP</div>
    <div class="lc-m-logo">GLOBEX</div>
    <div class="lc-m-logo">SOYUZ</div>
    <div class="lc-m-logo">INITECH</div>
    <div class="lc-m-logo">UMBRELLA</div>
    <div class="lc-m-logo">STARK</div>
    <!-- Duplicate for infinite loop -->
    <div class="lc-m-logo">ACME CORP</div>
    <div class="lc-m-logo">GLOBEX</div>
    <div class="lc-m-logo">SOYUZ</div>
    <div class="lc-m-logo">INITECH</div>
    <div class="lc-m-logo">UMBRELLA</div>
    <div class="lc-m-logo">STARK</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 0; overflow-x: hidden; }
.lc-mq { width: 100vw; overflow: hidden; white-space: nowrap; position: relative; background: #fff; padding: 40px 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; }
.lc-mq::before, .lc-mq::after { content: ''; position: absolute; top: 0; width: 150px; height: 100%; z-index: 2; }
.lc-mq::before { left: 0; background: linear-gradient(to right, #fff, transparent); }
.lc-mq::after { right: 0; background: linear-gradient(to left, #fff, transparent); }
.lc-m-track { display: inline-block; animation: scroll 20s linear infinite; }
.lc-m-track:hover { animation-play-state: paused; }
.lc-m-logo { display: inline-block; margin: 0 40px; font-size: 1.5rem; font-weight: 800; color: #475569; letter-spacing: -0.5px; }
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}`,
    jsCode: ``
  },

  // 3. Cyberpunk Logo Grid
  {
    _id: "lc3",
    title: "Cyberpunk Logo Grid",
    slug: "cyberpunk-logo-grid",
    description: "Hacker aesthetic logos with neon text and glitch hover effects.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["logos", "cyberpunk", "hacker", "neon"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-cy">
  <div class="cy-title">> ALLIED_CORPORATIONS_DETECTED</div>
  <div class="cy-grid">
    <div class="cy-logo" data-text="MEGACORP">MEGACORP</div>
    <div class="cy-logo" data-text="TYRELL">TYRELL</div>
    <div class="cy-logo" data-text="OMNICORP">OMNICORP</div>
    <div class="cy-logo" data-text="WEYLAND">WEYLAND</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 80px 20px; display: flex; justify-content: center; }
.lc-cy { max-width: 900px; width: 100%; }
.cy-title { color: #0f0; font-weight: bold; margin-bottom: 30px; text-shadow: 0 0 5px #0f0; border-bottom: 1px dashed #0f0; padding-bottom: 10px; }
.cy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 30px; }
.cy-logo { background: rgba(0,255,0,0.05); border: 1px solid #030; padding: 30px; text-align: center; color: #0f0; font-weight: bold; font-size: 1.2rem; transition: 0.2s; position: relative; overflow: hidden; }
.cy-logo:hover { background: rgba(0,255,0,0.2); border-color: #0f0; box-shadow: 0 0 15px rgba(0,255,0,0.3); }
.cy-logo:hover::before { content: attr(data-text); position: absolute; top: 30px; left: 0; width: 100%; color: #f0f; text-shadow: 2px 0 #f0f; transform: translateX(-2px); animation: glitch 0.2s infinite; opacity: 0.8; }
@keyframes glitch { 0% { transform: translateX(-2px); } 50% { transform: translateX(2px); } 100% { transform: translateX(-2px); } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Logo Cards
  {
    _id: "lc4",
    title: "Glassmorphism Logo Cards",
    slug: "glassmorphism-logo-cards",
    description: "Logos encased in frosted glass pills floating over a gradient.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["logos", "glassmorphism", "blur", "pills"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="lc-gl">
    <p class="gl-title">Trusted by industry leaders</p>
    <div class="gl-grid">
      <div class="gl-logo">ACME CORP</div>
      <div class="gl-logo">GLOBEX</div>
      <div class="gl-logo">SOYUZ</div>
      <div class="gl-logo">INITECH</div>
      <div class="gl-logo">UMBRELLA</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.lc-gl { max-width: 900px; width: 100%; text-align: center; }
.gl-title { color: rgba(255,255,255,0.8); font-size: 1.1rem; margin-bottom: 40px; }
.gl-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
.gl-logo { background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.2); padding: 20px 40px; border-radius: 50px; color: #fff; font-weight: 800; font-size: 1.2rem; letter-spacing: 1px; transition: 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.gl-logo:hover { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.4); transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }`,
    jsCode: ``
  },

  // 5. Brutalist Logo Grid
  {
    _id: "lc5",
    title: "Brutalist Logo Grid",
    slug: "brutalist-logo-grid",
    description: "Thick borders, high contrast, unapologetic grid.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["logos", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-br">
  <h2>BACKED BY THE BEST.</h2>
  <div class="br-grid">
    <div class="br-logo">ACME</div>
    <div class="br-logo">GLOBEX</div>
    <div class="br-logo">SOYUZ</div>
    <div class="br-logo">INITECH</div>
    <div class="br-logo">UMBRELLA</div>
    <div class="br-logo">STARK</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 80px 20px; display: flex; justify-content: center; }
.lc-br { max-width: 1000px; width: 100%; }
.lc-br h2 { font-size: 3rem; font-weight: 900; color: #000; letter-spacing: -1px; text-transform: uppercase; border-bottom: 6px solid #000; padding-bottom: 20px; margin-bottom: 40px; }
.br-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
.br-logo { background: #fff; border: 4px solid #000; padding: 30px; text-align: center; font-size: 1.8rem; font-weight: 900; box-shadow: 8px 8px 0 #000; transition: 0.1s; display: flex; justify-content: center; align-items: center; min-height: 100px; }
.br-logo:hover { transform: translate(-4px, -4px); box-shadow: 12px 12px 0 #000; background: #facc15; }`,
    jsCode: ``
  },

  // 6. Neumorphic Logo Grid
  {
    _id: "lc6",
    title: "Neumorphic Logo Grid",
    slug: "neumorphic-logo-grid",
    description: "Soft UI logos pressed into the background using inset shadows.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["logos", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-neu">
  <p class="neu-title">Our Partners</p>
  <div class="neu-grid">
    <div class="neu-logo">ACME</div>
    <div class="neu-logo">GLOBEX</div>
    <div class="neu-logo">SOYUZ</div>
    <div class="neu-logo">INITECH</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 80px 20px; display: flex; justify-content: center; }
.lc-neu { max-width: 800px; width: 100%; text-align: center; }
.neu-title { color: #718096; font-size: 1.1rem; font-weight: 600; margin-bottom: 40px; letter-spacing: 1px; }
.neu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 30px; }
.neu-logo { padding: 30px; border-radius: 20px; background: #e0e5ec; font-size: 1.2rem; font-weight: bold; color: #a0aec0; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); transition: 0.3s; display: flex; justify-content: center; align-items: center; }
.neu-logo:hover { color: #4a5568; box-shadow: 5px 5px 10px rgba(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Grid
  {
    _id: "lc7",
    title: "Dark Mode Glow Grid",
    slug: "dark-mode-glow-grid",
    description: "Deep dark layout with logos featuring a subtle neon glow.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["logos", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-dg">
  <p class="dg-title">POWERING NEXT-GEN TEAMS</p>
  <div class="dg-grid">
    <div class="dg-logo">ACME CORP</div>
    <div class="dg-logo">GLOBEX</div>
    <div class="dg-logo">SOYUZ</div>
    <div class="dg-logo">INITECH</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 80px 20px; display: flex; justify-content: center; }
.lc-dg { max-width: 900px; width: 100%; text-align: center; }
.dg-title { color: #475569; font-size: 0.9rem; font-weight: 700; letter-spacing: 3px; margin-bottom: 50px; }
.dg-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; }
.dg-logo { padding: 20px 40px; font-size: 1.4rem; font-weight: 800; color: #1e293b; border: 1px solid #0f172a; border-radius: 8px; transition: 0.4s; position: relative; overflow: hidden; }
.dg-logo::before { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(to right, transparent, rgba(59,130,246,0.1), transparent); transform: skewX(-20deg); transition: 0.5s; }
.dg-logo:hover { color: #e2e8f0; border-color: #3b82f6; box-shadow: 0 0 20px rgba(59,130,246,0.2); }
.dg-logo:hover::before { left: 200%; }`,
    jsCode: ``
  },

  // 8. Split Text/Logo Layout
  {
    _id: "lc8",
    title: "Split Text/Logo Layout",
    slug: "split-text-logo-layout",
    description: "Header and description on the left, logo grid on the right.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["logos", "split", "layout", "clean"],
    isPremium: false,
    views: 33400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-sl">
  <div class="sl-left">
    <h2>Trusted by over 10,000 teams</h2>
    <p>From fast-growing startups to Fortune 500 enterprises, teams everywhere rely on our platform to build faster.</p>
  </div>
  <div class="sl-right">
    <div class="sl-logo">ACME</div>
    <div class="sl-logo">GLOBEX</div>
    <div class="sl-logo">SOYUZ</div>
    <div class="sl-logo">INITECH</div>
    <div class="sl-logo">UMBRELLA</div>
    <div class="sl-logo">STARK</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 80px 5%; display: flex; justify-content: center; }
.lc-sl { display: flex; max-width: 1200px; width: 100%; gap: 60px; align-items: center; }
.sl-left { flex: 1; }
.sl-left h2 { font-size: 2.5rem; margin: 0 0 20px; color: #0f172a; letter-spacing: -1px; }
.sl-left p { font-size: 1.1rem; color: #64748b; line-height: 1.6; }
.sl-right { flex: 1.5; display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.sl-logo { background: #f8fafc; padding: 30px 20px; text-align: center; border-radius: 8px; font-weight: 800; color: #94a3b8; font-size: 1.1rem; transition: 0.3s; }
.sl-logo:hover { background: #fff; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); color: #0f172a; transform: translateY(-3px); }
@media (max-width: 900px) { .lc-sl { flex-direction: column; text-align: center; } .sl-right { grid-template-columns: repeat(2, 1fr); width: 100%; } }`,
    jsCode: ``
  },

  // 9. Hexagon Logo Grid
  {
    _id: "lc9",
    title: "Hexagon Logo Grid",
    slug: "hexagon-logo-grid",
    description: "Logos placed inside CSS honeycomb hexagons.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["logos", "hexagon", "honeycomb", "creative"],
    isPremium: true,
    views: 45100,
    downloads: 12700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-hx">
  <div class="hx-grid">
    <div class="hx-hex"><div class="hx-in">ACME</div></div>
    <div class="hx-hex"><div class="hx-in">GLOBEX</div></div>
    <div class="hx-hex"><div class="hx-in">SOYUZ</div></div>
    <div class="hx-hex"><div class="hx-in">INITECH</div></div>
    <div class="hx-hex"><div class="hx-in">UMBRELLA</div></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 80px 20px; display: flex; justify-content: center; }
.lc-hx { max-width: 800px; width: 100%; display: flex; justify-content: center; }
.hx-grid { display: flex; flex-wrap: wrap; justify-content: center; max-width: 600px; margin-top: 30px; }
.hx-hex { position: relative; width: 140px; height: 80px; background: #fff; margin: 40px 10px; transition: 0.3s; cursor: default; }
.hx-hex::before, .hx-hex::after { content: ""; position: absolute; width: 0; border-left: 70px solid transparent; border-right: 70px solid transparent; transition: 0.3s; }
.hx-hex::before { bottom: 100%; border-bottom: 40px solid #fff; }
.hx-hex::after { top: 100%; width: 0; border-top: 40px solid #fff; }
.hx-hex:hover { background: #3b82f6; transform: translateY(-5px); }
.hx-hex:hover::before { border-bottom-color: #3b82f6; }
.hx-hex:hover::after { border-top-color: #3b82f6; }
.hx-in { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: bold; color: #64748b; font-size: 1.1rem; z-index: 1; transition: 0.3s; }
.hx-hex:hover .hx-in { color: #fff; }`,
    jsCode: ``
  },

  // 10. Floating Logo Bubbles
  {
    _id: "lc10",
    title: "Floating Logo Bubbles",
    slug: "floating-logo-bubbles",
    description: "Playful design with logos in circular bubbles gently bobbing up and down.",
    category: "Logo Clouds",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["logos", "bubbles", "floating", "playful"],
    isPremium: false,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lc-fb">
  <p class="fb-title">JOIN 5,000+ HAPPY CUSTOMERS</p>
  <div class="fb-container">
    <div class="fb-bubble fb-1">ACME</div>
    <div class="fb-bubble fb-2">GLOBEX</div>
    <div class="fb-bubble fb-3">SOYUZ</div>
    <div class="fb-bubble fb-4">INITECH</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; overflow: hidden; }
.lc-fb { max-width: 800px; width: 100%; text-align: center; }
.fb-title { color: #cbd5e1; font-weight: 800; letter-spacing: 2px; margin-bottom: 60px; font-size: 1rem; }
.fb-container { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
.fb-bubble { width: 120px; height: 120px; border-radius: 50%; background: #f8fafc; display: flex; justify-content: center; align-items: center; font-weight: bold; color: #64748b; font-size: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.05); transition: 0.3s; }
.fb-bubble:hover { transform: scale(1.1) !important; background: #fff; color: #3b82f6; box-shadow: 0 15px 35px rgba(59,130,246,0.15); z-index: 10; }
.fb-1 { animation: float 4s ease-in-out infinite; }
.fb-2 { animation: float 5s ease-in-out infinite 1s; }
.fb-3 { animation: float 4.5s ease-in-out infinite 0.5s; }
.fb-4 { animation: float 6s ease-in-out infinite 2s; }
@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }`,
    jsCode: ``
  }
];
