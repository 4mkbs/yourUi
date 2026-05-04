import { Design } from "./designs-data";

export const BATCH_15_DESIGNS: Design[] = [
  // 1. Liquid Orbit Spinner
  {
    _id: "ld1",
    title: "Liquid Orbit Spinner",
    slug: "liquid-orbit-spinner",
    description: "A smooth, orbital animation with glowing liquid-like dots.",
    category: "Loaders",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    tags: ["loader", "spinner", "orbit", "animation"],
    isPremium: false,
    views: 13200,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="loader-container">
  <div class="orbit-spinner">
    <div class="orbit"></div>
    <div class="orbit"></div>
    <div class="orbit"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; }
.loader-container { display: flex; justify-content: center; align-items: center; width: 100px; height: 100px; }
.orbit-spinner { height: 60px; width: 60px; border-radius: 50%; perspective: 800px; }
.orbit { position: absolute; box-sizing: border-box; width: 100%; height: 100%; border-radius: 50%; border: 3px solid transparent; }
.orbit:nth-child(1) { left: 0; top: 0; animation: spin 2s linear infinite; border-bottom: 3px solid #3b82f6; }
.orbit:nth-child(2) { right: 0; top: 0; animation: spin 3s linear infinite; border-right: 3px solid #ec4899; }
.orbit:nth-child(3) { right: 0; bottom: 0; animation: spin 1.5s linear infinite; border-top: 3px solid #10b981; }
@keyframes spin { 0% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); } 100% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); } }`,
    jsCode: ``
  },

  // 2. Neumorphic Skeleton
  {
    _id: "ld2",
    title: "Neumorphic Skeleton",
    slug: "neumorphic-skeleton-loader",
    description: "A soft, pulsing skeleton layout simulating content loading in a neumorphic design.",
    category: "Loaders",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["loader", "skeleton", "neumorphism", "pulse"],
    isPremium: false,
    views: 11500,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-card">
  <div class="skeleton-avatar pulse"></div>
  <div class="skeleton-lines">
    <div class="skeleton-line pulse"></div>
    <div class="skeleton-line pulse w-70"></div>
    <div class="skeleton-line pulse w-50"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; font-family: sans-serif; }
.neu-card { width: 300px; background: #e0e5ec; border-radius: 20px; padding: 2rem; box-shadow: 9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5); display: flex; gap: 20px; }
.skeleton-avatar { width: 60px; height: 60px; border-radius: 50%; background: #d1d9e6; box-shadow: inset 3px 3px 6px rgba(163,177,198,0.3), inset -3px -3px 6px rgba(255,255,255,0.3); }
.skeleton-lines { flex: 1; display: flex; flex-direction: column; gap: 10px; justify-content: center; }
.skeleton-line { height: 12px; border-radius: 6px; background: #d1d9e6; width: 100%; box-shadow: inset 2px 2px 5px rgba(163,177,198,0.3), inset -2px -2px 5px rgba(255,255,255,0.3); }
.w-70 { width: 70%; }
.w-50 { width: 50%; }
.pulse { animation: pulsing 1.5s ease-in-out infinite alternate; }
@keyframes pulsing { 0% { opacity: 0.5; } 100% { opacity: 1; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Glitch Loader
  {
    _id: "ld3",
    title: "Cyberpunk Glitch Text",
    slug: "cyberpunk-glitch-loader",
    description: "A dark loader featuring glitching text and neon progress bars.",
    category: "Loaders",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["loader", "cyberpunk", "glitch", "text"],
    isPremium: true,
    views: 14200,
    downloads: 4700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cyber-loader">
  <div class="glitch-text" data-text="LOADING...">LOADING...</div>
  <div class="cyber-bar">
    <div class="cyber-fill"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; font-family: 'Courier New', Courier, monospace; }
.cyber-loader { width: 250px; text-align: center; }
.glitch-text { font-size: 2rem; font-weight: bold; color: #0ff; position: relative; letter-spacing: 5px; margin-bottom: 20px; text-shadow: 0 0 10px #0ff; }
.glitch-text::before, .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.glitch-text::before { left: 2px; text-shadow: -1px 0 #f0f; clip: rect(24px, 550px, 90px, 0); animation: glitch-anim 3s infinite linear alternate-reverse; }
.glitch-text::after { left: -2px; text-shadow: -1px 0 #0ff; clip: rect(85px, 550px, 140px, 0); animation: glitch-anim 2s infinite linear alternate-reverse; }
@keyframes glitch-anim { 0% { clip: rect(10px, 9999px, 50px, 0); } 20% { clip: rect(60px, 9999px, 90px, 0); } 40% { clip: rect(30px, 9999px, 70px, 0); } 60% { clip: rect(80px, 9999px, 100px, 0); } 80% { clip: rect(20px, 9999px, 60px, 0); } 100% { clip: rect(50px, 9999px, 90px, 0); } }
.cyber-bar { width: 100%; height: 10px; background: #111; border: 1px solid #0ff; position: relative; overflow: hidden; }
.cyber-fill { width: 0%; height: 100%; background: #0ff; box-shadow: 0 0 10px #0ff; animation: load 2s linear infinite; }
@keyframes load { 0% { width: 0%; } 100% { width: 100%; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Spinning Ring
  {
    _id: "ld4",
    title: "Glassmorphism Ring",
    slug: "glassmorphism-spinning-ring",
    description: "A blurred, translucent ring spinning smoothly over a gradient background.",
    category: "Loaders",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["loader", "glassmorphism", "ring", "gradient"],
    isPremium: true,
    views: 10800,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-loader-bg">
  <div class="glass-ring"></div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; overflow: hidden; }
.glass-loader-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #f43f5e, #8b5cf6, #3b82f6); background-size: 200% 200%; animation: bgAnim 5s ease infinite; }
@keyframes bgAnim { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.glass-ring { width: 80px; height: 80px; border-radius: 50%; border: 8px solid rgba(255, 255, 255, 0.1); border-top: 8px solid rgba(255, 255, 255, 0.8); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px); animation: spinGlass 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
@keyframes spinGlass { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`,
    jsCode: ``
  },

  // 5. Typewriter Text Loader
  {
    _id: "ld5",
    title: "Typewriter Text Loader",
    slug: "typewriter-text-loader",
    description: "A minimalist text loader that types and untypes dots continuously.",
    category: "Loaders",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["loader", "text", "typewriter", "minimal"],
    isPremium: false,
    views: 9200,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="type-loader">
  Fetching Data<span class="dots"></span>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #fff; font-family: 'Inter', sans-serif; }
.type-loader { font-size: 1.5rem; font-weight: bold; color: #111827; letter-spacing: 1px; display: flex; }
.dots::after { content: ''; animation: typing 1.5s steps(4, end) infinite; }
@keyframes typing { 0%, 20% { content: ''; } 40% { content: '.'; } 60% { content: '..'; } 80%, 100% { content: '...'; } }`,
    jsCode: ``
  },

  // 6. Brutalist Block Loader
  {
    _id: "ld6",
    title: "Brutalist Block Loader",
    slug: "brutalist-block-loader",
    description: "A heavy, high-contrast block loader that shifts aggressively.",
    category: "Loaders",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["loader", "brutalist", "blocks", "contrast"],
    isPremium: false,
    views: 7500,
    downloads: 2100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="brutal-loader">
  <div class="b-block"></div>
  <div class="b-block"></div>
  <div class="b-block"></div>
  <div class="b-block"></div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #facc15; }
.brutal-loader { display: flex; gap: 10px; }
.b-block { width: 30px; height: 50px; background: #000; border: 4px solid #fff; box-shadow: 4px 4px 0 #000; animation: brutalShift 1s infinite alternate; }
.b-block:nth-child(1) { animation-delay: 0s; }
.b-block:nth-child(2) { animation-delay: 0.2s; }
.b-block:nth-child(3) { animation-delay: 0.4s; }
.b-block:nth-child(4) { animation-delay: 0.6s; }
@keyframes brutalShift { 0% { transform: translateY(0); box-shadow: 4px 4px 0 #000; } 100% { transform: translateY(-20px); box-shadow: 12px 24px 0 #000; background: #ef4444; } }`,
    jsCode: ``
  },

  // 7. Minimalist Progress Line
  {
    _id: "ld7",
    title: "Infinite Progress Line",
    slug: "infinite-progress-line",
    description: "A super thin, elegant loading bar often seen at the top of modern web apps.",
    category: "Loaders",
    thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    tags: ["loader", "progress", "line", "minimalist"],
    isPremium: false,
    views: 12400,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="top-loader"></div>
<div style="margin-top: 50px; text-align: center; font-family: sans-serif; color: #666;">
  Simulating top-of-page load...
</div>`,
    cssCode: `body { margin: 0; background: #fff; }
.top-loader { position: fixed; top: 0; left: 0; width: 100%; height: 3px; background: #f1f5f9; overflow: hidden; }
.top-loader::after { content: ''; position: absolute; top: 0; left: -50%; width: 50%; height: 100%; background: #3b82f6; border-radius: 3px; animation: slideLine 1.5s infinite ease-in-out; }
@keyframes slideLine { 0% { left: -50%; width: 30%; } 50% { width: 50%; } 100% { left: 100%; width: 10%; } }`,
    jsCode: ``
  },

  // 8. 3D Bouncing Cubes
  {
    _id: "ld8",
    title: "3D Bouncing Cubes",
    slug: "3d-bouncing-cubes",
    description: "Isometric 3D cubes bouncing continuously in a satisfying loop.",
    category: "Loaders",
    thumbnail: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    tags: ["loader", "3d", "cubes", "isometric"],
    isPremium: true,
    views: 14900,
    downloads: 5000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cube-loader">
  <div class="cube">
    <div class="side top"></div>
    <div class="side left"></div>
    <div class="side right"></div>
  </div>
  <div class="cube">
    <div class="side top"></div>
    <div class="side left"></div>
    <div class="side right"></div>
  </div>
  <div class="cube">
    <div class="side top"></div>
    <div class="side left"></div>
    <div class="side right"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #1e293b; }
.cube-loader { display: flex; gap: 20px; perspective: 1000px; transform: rotateX(-30deg) rotateY(45deg); transform-style: preserve-3d; }
.cube { position: relative; width: 40px; height: 40px; transform-style: preserve-3d; animation: bounce 1.5s infinite ease-in-out alternate; }
.cube:nth-child(1) { animation-delay: 0s; }
.cube:nth-child(2) { animation-delay: 0.2s; }
.cube:nth-child(3) { animation-delay: 0.4s; }
.side { position: absolute; width: 40px; height: 40px; }
.top { background: #60a5fa; transform: rotateX(90deg) translateZ(20px); }
.left { background: #2563eb; transform: rotateY(-90deg) translateZ(20px); }
.right { background: #1d4ed8; transform: translateZ(20px); }
@keyframes bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-40px); } }`,
    jsCode: ``
  },

  // 9. Battery Charging Loader
  {
    _id: "ld9",
    title: "Battery Charging",
    slug: "battery-charging-loader",
    description: "A fun loader that mimics a smartphone battery filling up.",
    category: "Loaders",
    thumbnail: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=800&q=80",
    tags: ["loader", "battery", "fun", "utility"],
    isPremium: false,
    views: 8400,
    downloads: 2600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="battery-wrapper">
  <div class="battery">
    <div class="charge"></div>
  </div>
  <div class="batt-text">Powering up...</div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f4f4f5; font-family: 'Inter', sans-serif; }
.battery-wrapper { display: flex; flex-direction: column; align-items: center; gap: 15px; }
.battery { width: 80px; height: 40px; border: 4px solid #111827; border-radius: 8px; position: relative; padding: 4px; display: flex; align-items: center; }
.battery::after { content: ''; position: absolute; right: -10px; top: 10px; width: 6px; height: 20px; background: #111827; border-radius: 0 4px 4px 0; }
.charge { height: 100%; background: #10b981; border-radius: 4px; animation: chargeUp 2s steps(5) infinite; }
@keyframes chargeUp { 0% { width: 0%; background: #ef4444; } 50% { background: #f59e0b; } 100% { width: 100%; background: #10b981; } }
.batt-text { font-size: 0.9rem; color: #64748b; font-weight: bold; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 10. Infinity Loop SVG Loader
  {
    _id: "ld10",
    title: "Infinity Loop Stroke",
    slug: "infinity-loop-svg-loader",
    description: "A continuous animated SVG dash stroke forming an infinity symbol.",
    category: "Loaders",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["loader", "svg", "infinity", "loop"],
    isPremium: true,
    views: 10200,
    downloads: 3400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="svg-loader-wrap">
  <svg class="infinity-svg" viewBox="0 0 100 50">
    <path class="inf-path bg-path" d="M25,25 C15,25 10,25 10,25 C10,15 15,10 25,10 C35,10 40,20 50,25 C60,30 65,40 75,40 C85,40 90,35 90,25 C90,15 85,10 75,10 C65,10 60,20 50,25 C40,30 35,40 25,40 C15,40 10,35 10,25 Z" fill="none" stroke-width="4"></path>
    <path class="inf-path draw-path" d="M25,25 C15,25 10,25 10,25 C10,15 15,10 25,10 C35,10 40,20 50,25 C60,30 65,40 75,40 C85,40 90,35 90,25 C90,15 85,10 75,10 C65,10 60,20 50,25 C40,30 35,40 25,40 C15,40 10,35 10,25 Z" fill="none" stroke-width="4"></path>
  </svg>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #18181b; }
.svg-loader-wrap { width: 150px; }
.infinity-svg { width: 100%; overflow: visible; }
.inf-path { stroke-linecap: round; stroke-linejoin: round; }
.bg-path { stroke: #3f3f46; }
.draw-path { stroke: #8b5cf6; stroke-dasharray: 60 180; stroke-dashoffset: 0; animation: drawInf 2s linear infinite; }
@keyframes drawInf { 100% { stroke-dashoffset: -240; } }`,
    jsCode: ``
  }
];
