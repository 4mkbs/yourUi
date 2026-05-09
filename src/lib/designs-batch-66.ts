import { Design } from "./designs-data";

export const BATCH_66_DESIGNS: Design[] = [
  // 1. Classic Centered 404
  {
    _id: "er1",
    title: "Classic Centered 404",
    slug: "classic-centered-404",
    description: "Standard, clean error page with a helpful message and return button.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["404", "error", "classic", "centered"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="er-cl">
  <div class="er-c-code">404</div>
  <h1>Page Not Found</h1>
  <p>The page you are looking for doesn't exist or has been moved. Let's get you back on track.</p>
  <button class="er-c-btn">Go Back Home</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.er-cl { text-align: center; max-width: 600px; background: #fff; padding: 60px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
.er-c-code { font-size: 8rem; font-weight: 900; color: #3b82f6; line-height: 1; margin-bottom: 20px; }
.er-cl h1 { margin: 0 0 20px; font-size: 2.5rem; color: #0f172a; font-weight: 800; }
.er-cl p { margin: 0 0 40px; color: #64748b; font-size: 1.1rem; line-height: 1.6; }
.er-c-btn { padding: 15px 35px; background: #0f172a; color: #fff; border: none; border-radius: 8px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.er-c-btn:hover { background: #334155; transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,0.15); }
@media (max-width: 600px) { .er-cl { padding: 40px 20px; } .er-c-code { font-size: 6rem; } .er-cl h1 { font-size: 2rem; } }`,
    jsCode: ``
  },

  // 2. Minimal Typographic 404
  {
    _id: "er2",
    title: "Minimal Typographic 404",
    slug: "minimal-typographic-404",
    description: "Elegant, large typography focusing purely on the error state.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["404", "minimal", "typography", "clean"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="er-mn">
  <h1>404.</h1>
  <p>We couldn't find what you were looking for.</p>
  <a href="#">Return to index →</a>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; display: flex; align-items: center; min-height: 100vh; padding: 10vw; }
.er-mn { max-width: 800px; }
.er-mn h1 { margin: 0 0 20px; font-size: clamp(4rem, 10vw, 8rem); color: #111; font-weight: 800; letter-spacing: -2px; line-height: 1; }
.er-mn p { margin: 0 0 40px; color: #666; font-size: clamp(1.2rem, 3vw, 2rem); font-weight: 400; }
.er-mn a { display: inline-block; color: #111; text-decoration: none; font-weight: 600; font-size: 1.2rem; border-bottom: 2px solid #111; padding-bottom: 5px; transition: 0.2s; }
.er-mn a:hover { color: #666; border-color: #666; }`,
    jsCode: ``
  },

  // 3. Cyberpunk 404
  {
    _id: "er3",
    title: "Cyberpunk 404",
    slug: "cyberpunk-404",
    description: "Terminal-style hacker error page.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["404", "cyberpunk", "terminal", "neon"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="er-cy">
  <div class="cy-term">
    <p>root@server:~# locate requested_data</p>
    <p class="cy-err">FATAL ERROR: 404 FILE NOT FOUND</p>
    <p>root@server:~# run diagnostics</p>
    <p>> The node you are trying to access has been wiped or never existed.</p>
    <p>> Re-routing connection...</p>
    <a href="#" class="cy-btn">INITIALIZE_REBOOT</a>
    <span class="cy-cursor">_</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.er-cy { background: rgba(0,0,0,0.8); border: 2px solid #0f0; padding: 40px; width: 100%; max-width: 600px; box-shadow: 0 0 20px rgba(0,255,0,0.2); position: relative; overflow: hidden; }
.er-cy::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 5px; background: #0f0; animation: scanline 2s linear infinite; opacity: 0.5; }
@keyframes scanline { 0% { top: 0; } 100% { top: 100%; } }
.cy-term p { color: #0f0; margin: 0 0 15px; font-size: 1.1rem; line-height: 1.5; text-shadow: 0 0 5px #0f0; }
.cy-term .cy-err { color: #f0f; font-weight: bold; text-shadow: 0 0 5px #f0f; }
.cy-btn { display: inline-block; background: transparent; border: 1px solid #f0f; color: #f0f; text-decoration: none; padding: 10px 20px; margin-top: 20px; font-weight: bold; text-shadow: 0 0 5px #f0f; box-shadow: inset 0 0 10px rgba(255,0,255,0.2); transition: 0.2s; }
.cy-btn:hover { background: #f0f; color: #000; box-shadow: 0 0 20px #f0f; }
.cy-cursor { color: #0f0; font-weight: bold; animation: blink 1s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism 404
  {
    _id: "er4",
    title: "Glassmorphism 404",
    slug: "glassmorphism-404",
    description: "Frosted glass error card resting over a vibrant background.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["404", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="er-gl">
    <h1>404</h1>
    <h2>Lost in the clouds</h2>
    <p>The page you're searching for seems to have drifted away. Let's navigate you back to solid ground.</p>
    <a href="#" class="er-g-btn">Return Home</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); position: relative; overflow: hidden; }
.gl-bg::before, .gl-bg::after { content: ''; position: absolute; width: 300px; height: 300px; border-radius: 50%; filter: blur(50px); z-index: 0; }
.gl-bg::before { background: rgba(255,255,255,0.3); top: 10%; left: 20%; }
.gl-bg::after { background: rgba(255,255,255,0.2); bottom: 10%; right: 20%; }
.er-gl { position: relative; z-index: 1; background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 24px; padding: 60px 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); text-align: center; color: #fff; max-width: 500px; width: 100%; }
.er-gl h1 { margin: 0 0 10px; font-size: 6rem; font-weight: 800; line-height: 1; text-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.er-gl h2 { margin: 0 0 20px; font-size: 2rem; font-weight: 600; opacity: 0.9; }
.er-gl p { margin: 0 0 40px; font-size: 1.1rem; line-height: 1.6; opacity: 0.8; }
.er-g-btn { display: inline-block; padding: 15px 35px; background: rgba(255,255,255,0.2); color: #fff; text-decoration: none; font-weight: 600; border-radius: 30px; border: 1px solid rgba(255,255,255,0.5); transition: 0.3s; }
.er-g-btn:hover { background: #fff; color: #3b82f6; }`,
    jsCode: ``
  },

  // 5. Brutalist 404
  {
    _id: "er5",
    title: "Brutalist 404",
    slug: "brutalist-404",
    description: "Loud, bold typography with harsh borders and high contrast colors.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["404", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="er-br">
  <div class="er-b-wrap">
    <div class="er-b-code">404</div>
    <h1>YOU BROKE IT.</h1>
    <p>JUST KIDDING. BUT THIS PAGE DOESN'T EXIST.</p>
    <a href="#" class="er-b-btn">GO BACK NOW</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #facc15; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.er-br { background: #fff; border: 6px solid #000; box-shadow: 20px 20px 0 #000; padding: 60px; max-width: 700px; width: 100%; text-align: center; }
.er-b-code { font-size: 10rem; font-weight: 900; color: #ec4899; text-shadow: 8px 8px 0 #000; line-height: 1; margin-bottom: 20px; }
.er-br h1 { margin: 0 0 20px; font-size: 3.5rem; font-weight: 900; color: #000; text-transform: uppercase; line-height: 1; }
.er-br p { margin: 0 0 40px; font-weight: 800; font-size: 1.5rem; color: #333; }
.er-b-btn { display: inline-block; background: #000; color: #fff; text-decoration: none; font-weight: 900; font-size: 1.5rem; padding: 20px 40px; border: 4px solid #000; transition: 0.1s; }
.er-b-btn:active { transform: translate(5px, 5px); }
@media (max-width: 600px) { .er-b-code { font-size: 6rem; text-shadow: 4px 4px 0 #000; } .er-br h1 { font-size: 2.5rem; } }`,
    jsCode: ``
  },

  // 6. Neumorphic 404
  {
    _id: "er6",
    title: "Neumorphic 404",
    slug: "neumorphic-404",
    description: "Soft UI design with extruded elements matching neumorphic layouts.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["404", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="er-neu">
  <div class="er-n-card">
    <div class="er-n-circle">404</div>
    <h2>Dead End</h2>
    <p>We've looked everywhere, but this page is missing.</p>
    <button>Return Home</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.er-n-card { background: #e0e5ec; padding: 60px 40px; border-radius: 30px; box-shadow: 20px 20px 40px rgba(163,177,198,0.6), -20px -20px 40px rgba(255,255,255,0.5); max-width: 500px; text-align: center; width: 100%; }
.er-n-circle { width: 180px; height: 180px; margin: 0 auto 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 4rem; font-weight: bold; color: #a0aec0; background: #e0e5ec; box-shadow: inset 10px 10px 20px rgba(163,177,198,0.6), inset -10px -10px 20px rgba(255,255,255,0.5); }
.er-n-card h2 { margin: 0 0 20px; color: #2d3748; font-size: 2.5rem; font-weight: bold; }
.er-n-card p { margin: 0 0 40px; color: #718096; font-size: 1.1rem; line-height: 1.6; }
.er-n-card button { padding: 15px 40px; border: none; border-radius: 15px; background: #e0e5ec; color: #3182ce; font-weight: bold; font-size: 1.1rem; cursor: pointer; box-shadow: 8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.5); transition: 0.2s; }
.er-n-card button:active { box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow 404
  {
    _id: "er7",
    title: "Dark Mode Glow 404",
    slug: "dark-mode-glow-404",
    description: "Deep dark page with glowing gradient text.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["404", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="er-dg">
  <div class="er-d-glow"></div>
  <div class="er-d-content">
    <h1>404</h1>
    <h2>Lost in the void.</h2>
    <p>The signal is lost. Return to base before you drift too far.</p>
    <a href="#" class="er-d-btn">Back to Safety</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; overflow: hidden; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.er-dg { position: relative; width: 100%; text-align: center; padding: 20px; }
.er-d-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60vw; height: 60vw; max-width: 600px; max-height: 600px; background: radial-gradient(circle, rgba(236,72,153,0.2) 0%, rgba(59,130,246,0.1) 40%, rgba(2,6,23,0) 70%); z-index: 0; filter: blur(50px); pointer-events: none; }
.er-d-content { position: relative; z-index: 1; }
.er-d-content h1 { margin: 0 0 10px; font-size: 8rem; font-weight: 900; background: linear-gradient(135deg, #ec4899, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1; }
.er-d-content h2 { margin: 0 0 20px; color: #f8fafc; font-size: 2.5rem; font-weight: 700; }
.er-d-content p { margin: 0 0 40px; color: #94a3b8; font-size: 1.2rem; max-width: 500px; margin-left: auto; margin-right: auto; }
.er-d-btn { display: inline-block; padding: 15px 35px; background: rgba(15,23,42,0.8); border: 1px solid #3b82f6; color: #60a5fa; text-decoration: none; font-weight: 600; border-radius: 8px; transition: 0.3s; box-shadow: 0 0 15px rgba(59,130,246,0.2); }
.er-d-btn:hover { background: #3b82f6; color: #fff; box-shadow: 0 0 25px rgba(59,130,246,0.5); }`,
    jsCode: ``
  },

  // 8. Split Layout 404
  {
    _id: "er8",
    title: "Split Layout 404",
    slug: "split-layout-404",
    description: "Two-column layout with text on the left and an image placeholder on the right.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["404", "split", "layout", "clean"],
    isPremium: false,
    views: 33400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="er-sl">
  <div class="er-s-text">
    <div class="er-s-err">ERROR 404</div>
    <h1>We lost that page.</h1>
    <p>We searched high and low, but couldn't find what you're looking for. Let's find a better place for you to go.</p>
    <a href="#" class="er-s-btn">Back to Home</a>
  </div>
  <div class="er-s-img">
    <img src="https://images.unsplash.com/photo-1555861496-faa3e11747ec?w=800&q=80" alt="Lost" />
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 40px; box-sizing: border-box; }
.er-sl { display: flex; max-width: 1200px; width: 100%; gap: 60px; align-items: center; }
.er-s-text { flex: 1; }
.er-s-err { color: #ef4444; font-weight: 700; letter-spacing: 2px; margin-bottom: 20px; font-size: 1.1rem; }
.er-s-text h1 { margin: 0 0 25px; font-size: 4rem; color: #0f172a; font-weight: 800; line-height: 1.1; letter-spacing: -1px; }
.er-s-text p { margin: 0 0 40px; color: #475569; font-size: 1.2rem; line-height: 1.6; }
.er-s-btn { display: inline-block; padding: 15px 35px; background: #0f172a; color: #fff; text-decoration: none; font-weight: 600; border-radius: 8px; transition: 0.2s; }
.er-s-btn:hover { background: #334155; }
.er-s-img { flex: 1; }
.er-s-img img { width: 100%; border-radius: 24px; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1); }
@media (max-width: 900px) { .er-sl { flex-direction: column; text-align: center; } .er-s-text h1 { font-size: 3rem; } }`,
    jsCode: ``
  },

  // 9. Glitch Effect 404
  {
    _id: "er9",
    title: "Glitch Effect 404",
    slug: "glitch-effect-404",
    description: "Pure CSS glitch animation on the 404 text.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["404", "glitch", "animation", "css"],
    isPremium: true,
    views: 45100,
    downloads: 12700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="er-glitch-wrap">
  <div class="glitch" data-text="404">404</div>
  <p>System malfunction. Resource not found.</p>
  <button>Restart Node</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #111; display: flex; justify-content: center; align-items: center; min-height: 100vh; color: #fff; text-align: center; }
.er-glitch-wrap { max-width: 500px; padding: 20px; }
.glitch { font-size: 8rem; font-weight: 900; position: relative; display: inline-block; margin-bottom: 20px; }
.glitch::before, .glitch::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.glitch::before { left: 2px; text-shadow: -2px 0 red; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 5s infinite linear alternate-reverse; }
.glitch::after { left: -2px; text-shadow: -2px 0 blue; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim2 5s infinite linear alternate-reverse; }
@keyframes glitch-anim { 0% { clip: rect(10px, 9999px, 86px, 0); } 20% { clip: rect(72px, 9999px, 14px, 0); } 40% { clip: rect(31px, 9999px, 59px, 0); } 60% { clip: rect(87px, 9999px, 21px, 0); } 80% { clip: rect(11px, 9999px, 94px, 0); } 100% { clip: rect(48px, 9999px, 33px, 0); } }
@keyframes glitch-anim2 { 0% { clip: rect(65px, 9999px, 12px, 0); } 20% { clip: rect(2px, 9999px, 88px, 0); } 40% { clip: rect(49px, 9999px, 23px, 0); } 60% { clip: rect(96px, 9999px, 45px, 0); } 80% { clip: rect(34px, 9999px, 76px, 0); } 100% { clip: rect(18px, 9999px, 55px, 0); } }
.er-glitch-wrap p { color: #888; font-size: 1.2rem; margin-bottom: 40px; }
.er-glitch-wrap button { background: transparent; border: 2px solid #fff; color: #fff; padding: 15px 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: 0.2s; }
.er-glitch-wrap button:hover { background: #fff; color: #111; }`,
    jsCode: ``
  },

  // 10. Floating Illustration 404
  {
    _id: "er10",
    title: "Floating Illustration 404",
    slug: "floating-illustration-404",
    description: "Playful layout with an animated floating emoji/illustration.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["404", "floating", "animation", "playful"],
    isPremium: false,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="er-fl">
  <div class="er-f-icon">🛸</div>
  <h1>Houston, we have a problem.</h1>
  <p>The page you requested was abducted by aliens. Or maybe it just doesn't exist.</p>
  <button>Teleport Home</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #eef2f6; display: flex; justify-content: center; align-items: center; min-height: 100vh; text-align: center; padding: 20px; }
.er-fl { max-width: 600px; }
.er-f-icon { font-size: 8rem; margin-bottom: 20px; animation: float-ufo 4s ease-in-out infinite alternate; }
@keyframes float-ufo { 0% { transform: translateY(0) rotate(0); } 100% { transform: translateY(-30px) rotate(10deg); } }
.er-fl h1 { margin: 0 0 20px; font-size: 3rem; color: #0f172a; font-weight: 800; letter-spacing: -1px; }
.er-fl p { margin: 0 0 40px; color: #64748b; font-size: 1.2rem; line-height: 1.6; }
.er-fl button { padding: 15px 40px; background: #3b82f6; color: #fff; border: none; border-radius: 50px; font-size: 1.1rem; font-weight: 600; cursor: pointer; box-shadow: 0 10px 20px rgba(59,130,246,0.3); transition: 0.2s; }
.er-fl button:hover { transform: translateY(-2px); box-shadow: 0 15px 25px rgba(59,130,246,0.4); }`,
    jsCode: ``
  }
];
