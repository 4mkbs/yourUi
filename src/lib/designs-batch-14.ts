import { Design } from "./designs-data";

export const BATCH_14_DESIGNS: Design[] = [
  // 1. Lost in Space 404
  {
    _id: "e1",
    title: "Lost in Space 404",
    slug: "lost-in-space-404",
    description: "A space-themed 404 error page featuring floating elements and a starry background animation.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["404", "space", "animated", "dark"],
    isPremium: false,
    views: 12500,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="space-404">
  <div class="stars"></div>
  <div class="twinkling"></div>
  <div class="clouds"></div>
  <div class="content">
    <h1 class="glitch" data-text="404">404</h1>
    <h2>Looks like you're lost in space.</h2>
    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <a href="/" class="btn-home">Return to Earth</a>
  </div>
  <div class="astronaut">
    <img src="https://assets.codepen.io/1538474/astronaut.svg" class="src" alt="Astronaut">
  </div>
</div>`,
    cssCode: `body { margin: 0; padding: 0; font-family: 'Inter', sans-serif; height: 100vh; overflow: hidden; background: #000; }
.space-404 { position: relative; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; color: #fff; text-align: center; }
.stars, .twinkling, .clouds { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; display: block; }
.stars { background: #000 url('https://assets.codepen.io/1538474/stars.png') repeat top center; z-index: 0; }
.twinkling { background: transparent url('https://assets.codepen.io/1538474/twinkling.png') repeat top center; z-index: 1; animation: move-twink-back 200s linear infinite; }
.clouds { background: transparent url('https://assets.codepen.io/1538474/clouds3.png') repeat top center; z-index: 2; opacity: 0.4; animation: move-clouds-back 200s linear infinite; }
@keyframes move-twink-back { from {background-position: 0 0;} to {background-position: -10000px 5000px;} }
@keyframes move-clouds-back { from {background-position: 0 0;} to {background-position: 10000px 0;} }
.content { position: relative; z-index: 3; max-width: 600px; padding: 0 20px; }
h1 { font-size: 10rem; margin: 0; line-height: 1; font-weight: 900; letter-spacing: 5px; }
h2 { font-size: 2rem; margin: 10px 0 20px; }
p { font-size: 1.1rem; color: #a0aec0; margin-bottom: 30px; line-height: 1.6; }
.btn-home { display: inline-block; padding: 15px 30px; background: #3b82f6; color: #fff; text-decoration: none; border-radius: 30px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; transition: 0.3s; }
.btn-home:hover { background: #2563eb; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(59,130,246,0.3); }
.astronaut { position: absolute; top: 20%; right: 15%; z-index: 3; animation: float 15s ease-in-out infinite; }
.astronaut img { width: 150px; }
@keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(20px) rotate(5deg); } }`,
    jsCode: ``
  },

  // 2. Glitch Effect 404
  {
    _id: "e2",
    title: "Cyberpunk Glitch 404",
    slug: "cyberpunk-glitch-404",
    description: "A dark cyberpunk-inspired 404 page featuring heavy CSS glitch animations on the text.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["404", "cyberpunk", "glitch", "neon"],
    isPremium: true,
    views: 11200,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glitch-wrapper">
  <div class="glitch-text" data-text="404">404</div>
  <div class="sub-text">SYSTEM FAILURE_</div>
  <p class="desc">The requested data module could not be located in the mainframe.</p>
  <a href="/" class="cybr-link">REBOOT_SYSTEM</a>
</div>`,
    cssCode: `body { margin: 0; background: #0a0a0a; color: #fff; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; overflow: hidden; }
.glitch-wrapper { text-align: center; position: relative; }
.glitch-text { font-size: 15rem; font-weight: 900; line-height: 1; position: relative; color: #fff; text-shadow: 0.05em 0 0 rgba(255,0,0,.75), -0.025em -0.05em 0 rgba(0,255,0,.75), 0.025em 0.05em 0 rgba(0,0,255,.75); animation: glitch 500ms infinite; }
.glitch-text::before, .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.glitch-text::before { left: 2px; text-shadow: -2px 0 #ff00c1; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 5s infinite linear alternate-reverse; }
.glitch-text::after { left: -2px; text-shadow: -2px 0 #00fff9; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim2 5s infinite linear alternate-reverse; }
@keyframes glitch-anim { 0% { clip: rect(38px, 9999px, 83px, 0); } 20% { clip: rect(2px, 9999px, 40px, 0); } 40% { clip: rect(56px, 9999px, 86px, 0); } 60% { clip: rect(10px, 9999px, 30px, 0); } 80% { clip: rect(80px, 9999px, 95px, 0); } 100% { clip: rect(20px, 9999px, 45px, 0); } }
@keyframes glitch-anim2 { 0% { clip: rect(12px, 9999px, 90px, 0); } 20% { clip: rect(40px, 9999px, 60px, 0); } 40% { clip: rect(70px, 9999px, 90px, 0); } 60% { clip: rect(25px, 9999px, 50px, 0); } 80% { clip: rect(5px, 9999px, 20px, 0); } 100% { clip: rect(85px, 9999px, 98px, 0); } }
.sub-text { font-size: 2rem; font-weight: bold; margin-top: -20px; color: #ff00c1; text-transform: uppercase; letter-spacing: 5px; }
.desc { color: #888; font-size: 1.1rem; margin: 20px 0 40px; max-width: 500px; margin-left: auto; margin-right: auto; line-height: 1.5; }
.cybr-link { display: inline-block; background: transparent; border: 2px solid #00fff9; color: #00fff9; text-decoration: none; padding: 15px 30px; font-weight: bold; letter-spacing: 2px; transition: 0.2s; text-transform: uppercase; }
.cybr-link:hover { background: #00fff9; color: #000; box-shadow: 0 0 15px #00fff9; }`,
    jsCode: ``
  },

  // 3. Interactive Flashlight 404
  {
    _id: "e3",
    title: "Flashlight Reveal 404",
    slug: "flashlight-reveal-404",
    description: "A dark page where the user's mouse cursor acts as a flashlight to reveal the 404 text hidden in the dark.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    tags: ["404", "interactive", "flashlight", "dark"],
    isPremium: true,
    views: 14800,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="flashlight-bg" id="lightBg"></div>
<div class="fl-content">
  <h1>404</h1>
  <h2>Whoops! You're in the dark.</h2>
  <p>We can't seem to find the page you're looking for.</p>
  <a href="/" class="fl-btn">Let's find the light</a>
</div>`,
    cssCode: `body { margin: 0; padding: 0; height: 100vh; background: #000; overflow: hidden; display: flex; justify-content: center; align-items: center; font-family: 'Helvetica Neue', sans-serif; cursor: none; }
.flashlight-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; background: radial-gradient(circle 150px at 50% 50%, transparent 0%, rgba(0,0,0,0.98) 100%); }
.fl-content { position: relative; z-index: 0; text-align: center; color: #fff; max-width: 600px; padding: 20px; }
h1 { font-size: 12rem; margin: 0; font-weight: 900; color: #222; text-shadow: 0 0 10px rgba(255,255,255,0.1); }
h2 { font-size: 2.5rem; margin: -20px 0 20px; color: #555; }
p { font-size: 1.2rem; color: #444; margin-bottom: 40px; }
.fl-btn { display: inline-block; padding: 15px 40px; background: #fff; color: #000; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 1.1rem; transition: 0.3s; position: relative; z-index: 2; cursor: pointer; }
.fl-btn:hover { background: #ccc; }`,
    jsCode: `const light = document.getElementById('lightBg');
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  light.style.background = \`radial-gradient(circle 150px at \${x}px \${y}px, transparent 0%, rgba(0,0,0,0.98) 100%)\`;
});`
  },

  // 4. Minimalist Typography 404
  {
    _id: "e4",
    title: "Minimalist Typography 404",
    slug: "minimalist-typography-404",
    description: "An elegant, clean, and highly readable 404 page relying entirely on typography.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["404", "minimalist", "typography", "clean"],
    isPremium: false,
    views: 9400,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="min-404">
  <div class="min-number">404</div>
  <div class="min-divider"></div>
  <div class="min-text">
    <h2>Page not found</h2>
    <p>Please check the URL in the address bar and try again.</p>
    <a href="/">Go back home</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; color: #111827; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 2rem; }
.min-404 { display: flex; align-items: center; gap: 2rem; max-width: 800px; }
.min-number { font-size: 6rem; font-weight: 200; color: #3b82f6; line-height: 1; }
.min-divider { width: 1px; height: 100px; background: #e5e7eb; }
.min-text h2 { margin: 0 0 0.5rem 0; font-size: 2rem; font-weight: 700; }
.min-text p { margin: 0 0 1.5rem 0; color: #6b7280; font-size: 1.1rem; }
.min-text a { color: #3b82f6; text-decoration: none; font-weight: 600; transition: 0.2s; }
.min-text a:hover { color: #2563eb; text-decoration: underline; }
@media (max-width: 600px) { .min-404 { flex-direction: column; text-align: center; gap: 1rem; } .min-divider { width: 100px; height: 1px; } }`,
    jsCode: ``
  },

  // 5. Brutalist 404
  {
    _id: "e5",
    title: "Loud Brutalist 404",
    slug: "loud-brutalist-404",
    description: "A very loud, high-contrast brutalist design that screams error.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["404", "brutalist", "loud", "contrast"],
    isPremium: true,
    views: 7800,
    downloads: 2500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="brutal-404">
  <div class="b-banner">ERROR ERROR ERROR</div>
  <h1 class="b-huge">404</h1>
  <h2 class="b-sub">YOU BROKE IT.</h2>
  <p class="b-p">This page does not exist. Turn back immediately.</p>
  <a href="/" class="b-btn">RETURN TO SAFETY</a>
</div>`,
    cssCode: `body { margin: 0; background: #facc15; font-family: monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 2rem; text-align: center; }
.brutal-404 { width: 100%; max-width: 800px; border: 8px solid #000; background: #fff; padding: 4rem 2rem; position: relative; box-shadow: 20px 20px 0 #000; }
.b-banner { position: absolute; top: 0; left: 0; width: 100%; background: #ef4444; color: #fff; font-size: 1.5rem; font-weight: 900; padding: 10px 0; border-bottom: 8px solid #000; box-sizing: border-box; white-space: nowrap; overflow: hidden; }
.b-huge { font-size: 15vw; margin: 40px 0 0; line-height: 1; font-weight: 900; color: #000; }
.b-sub { font-size: 3rem; margin: 0 0 20px; font-weight: 900; text-transform: uppercase; background: #000; color: #fff; display: inline-block; padding: 10px 20px; }
.b-p { font-size: 1.5rem; font-weight: bold; margin-bottom: 40px; }
.b-btn { display: inline-block; background: #3b82f6; color: #fff; text-decoration: none; border: 6px solid #000; padding: 15px 40px; font-size: 2rem; font-weight: 900; transition: 0.1s; box-shadow: 8px 8px 0 #000; text-transform: uppercase; }
.b-btn:active { transform: translate(8px, 8px); box-shadow: 0 0 0 #000; }
@media (max-width: 600px) { .b-huge { font-size: 8rem; } .b-sub { font-size: 2rem; } .b-btn { font-size: 1.2rem; } }`,
    jsCode: ``
  },

  // 6. Terminal Style 404
  {
    _id: "e6",
    title: "Terminal Command 404",
    slug: "terminal-command-404",
    description: "A simulated command-line interface that tells the user the page is missing.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["404", "terminal", "cli", "code"],
    isPremium: true,
    views: 8900,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="term-container">
  <div class="term-header">
    <div class="circle red"></div>
    <div class="circle yellow"></div>
    <div class="circle green"></div>
    <div class="term-title">bash - 80x24</div>
  </div>
  <div class="term-body">
    <p><span class="user">guest@yourserver:</span><span class="dir">~</span>$ curl https://yoursite.com/this-page</p>
    <p class="error">HTTP/1.1 404 Not Found</p>
    <p class="error">Server: nginx/1.18.0 (Ubuntu)</p>
    <p class="error">Content-Type: text/html</p>
    <br>
    <p>The requested URL was not found on this server.</p>
    <p>Type <span class="cmd">cd /</span> to return to homepage, or close the terminal.</p>
    <p><span class="user">guest@yourserver:</span><span class="dir">~</span>$ <span class="cursor">_</span></p>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #1e1e1e; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 2rem; }
.term-container { width: 100%; max-width: 800px; background: #000; border-radius: 10px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border: 1px solid #333; }
.term-header { background: #2d2d2d; padding: 10px 15px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #111; }
.circle { width: 12px; height: 12px; border-radius: 50%; }
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }
.term-title { color: #999; font-size: 0.9rem; margin-left: auto; margin-right: auto; }
.term-body { padding: 20px; color: #fff; line-height: 1.6; font-size: 1.1rem; }
p { margin: 0 0 8px 0; }
.user { color: #27c93f; font-weight: bold; }
.dir { color: #3b82f6; font-weight: bold; }
.error { color: #ff5f56; }
.cmd { color: #ffbd2e; background: rgba(255,189,46,0.1); padding: 2px 6px; border-radius: 3px; }
.cursor { animation: blink 1s step-end infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`,
    jsCode: `
const cursor = document.querySelector('.cursor');
document.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    window.location.href = '/';
  }
});
`
  },

  // 7. Glassmorphism 404
  {
    _id: "e7",
    title: "Frosted Glass 404",
    slug: "frosted-glass-404",
    description: "A visually stunning frosted glass card floating over an animated mesh gradient background.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["404", "glassmorphism", "gradient", "blur"],
    isPremium: true,
    views: 10500,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="mesh-bg">
  <div class="glass-404">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you are looking for doesn't exist or has been moved.</p>
    <a href="/" class="glass-btn">Go Back Home</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; overflow: hidden; }
.mesh-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); background-size: 200% 200%; animation: meshAnim 10s ease infinite; padding: 2rem; box-sizing: border-box; }
@keyframes meshAnim { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.glass-404 { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 24px; padding: 4rem; text-align: center; color: #fff; max-width: 500px; width: 100%; box-shadow: 0 25px 50px rgba(0,0,0,0.2); }
h1 { font-size: 8rem; margin: 0 0 1rem 0; line-height: 1; font-weight: 900; text-shadow: 0 10px 20px rgba(0,0,0,0.2); }
h2 { font-size: 2rem; margin: 0 0 1rem 0; font-weight: 600; }
p { font-size: 1.1rem; color: rgba(255,255,255,0.8); margin-bottom: 3rem; line-height: 1.5; }
.glass-btn { display: inline-block; background: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255, 255, 255, 0.5); padding: 15px 30px; border-radius: 30px; color: #fff; text-decoration: none; font-weight: bold; font-size: 1.1rem; transition: 0.3s; }
.glass-btn:hover { background: rgba(255, 255, 255, 0.4); transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }`,
    jsCode: ``
  },

  // 8. Static TV Noise 404
  {
    _id: "e8",
    title: "Static Noise TV 404",
    slug: "static-noise-tv-404",
    description: "A page simulating a broken TV signal with CSS static noise and VHS scanlines.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=800&q=80",
    tags: ["404", "tv", "static", "vhs", "retro"],
    isPremium: true,
    views: 8600,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tv-container">
  <div class="noise"></div>
  <div class="scanlines"></div>
  <div class="tv-content">
    <div class="channel">CH 404</div>
    <h1>NO SIGNAL</h1>
    <p>Please check your connection or return to the main channel.</p>
    <a href="/" class="tv-btn">Change Channel</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #000; font-family: 'Courier New', Courier, monospace; overflow: hidden; }
.tv-container { width: 100vw; height: 100vh; position: relative; display: flex; justify-content: center; align-items: center; flex-direction: column; }
.noise { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; opacity: 0.15; background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E'); animation: noise 0.2s infinite; }
@keyframes noise { 0%, 100% { transform: translate(0, 0); } 10% { transform: translate(-5%, -5%); } 20% { transform: translate(-10%, 5%); } 30% { transform: translate(5%, -10%); } 40% { transform: translate(-5%, 15%); } 50% { transform: translate(-10%, 5%); } 60% { transform: translate(15%, 0); } 70% { transform: translate(0, 15%); } 80% { transform: translate(3%, 35%); } 90% { transform: translate(-10%, 10%); } }
.scanlines { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2)); background-size: 100% 4px; z-index: 2; pointer-events: none; }
.tv-content { position: relative; z-index: 3; text-align: center; color: #fff; text-shadow: 2px 2px 0 #f00, -2px -2px 0 #00f; }
.channel { position: absolute; top: 20px; right: 30px; font-size: 2rem; font-weight: bold; color: #0f0; text-shadow: 0 0 10px #0f0; }
h1 { font-size: 8rem; margin: 0; font-weight: 900; letter-spacing: 10px; }
p { font-size: 1.5rem; margin: 20px 0 40px; }
.tv-btn { display: inline-block; background: #fff; color: #000; text-decoration: none; padding: 15px 30px; font-weight: bold; font-size: 1.2rem; border: 4px solid #fff; text-shadow: none; transition: 0.2s; }
.tv-btn:hover { background: #000; color: #fff; }`,
    jsCode: ``
  },

  // 9. Floating Islands 404
  {
    _id: "e9",
    title: "Floating Island 404",
    slug: "floating-island-404",
    description: "A playful, illustrative 404 page with floating CSS animations.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    tags: ["404", "playful", "floating", "illustration"],
    isPremium: false,
    views: 7300,
    downloads: 2400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="island-404">
  <div class="sky">
    <div class="cloud c1">☁️</div>
    <div class="cloud c2">☁️</div>
    <div class="cloud c3">☁️</div>
  </div>
  <div class="island-content">
    <div class="huge-text">404</div>
    <h2>Deserted Island</h2>
    <p>You've sailed too far and ended up in uncharted waters.</p>
    <a href="/" class="boat-btn">Row Back Home</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #38bdf8; font-family: 'Inter', sans-serif; height: 100vh; overflow: hidden; display: flex; justify-content: center; align-items: center; color: #fff; }
.island-404 { position: relative; text-align: center; z-index: 10; }
.sky { position: absolute; top: -100%; left: -50vw; width: 200vw; height: 200vh; pointer-events: none; z-index: -1; }
.cloud { position: absolute; font-size: 5rem; opacity: 0.8; animation: floatCloud linear infinite; }
.c1 { top: 20%; left: 10%; animation-duration: 40s; font-size: 8rem; }
.c2 { top: 40%; left: 50%; animation-duration: 30s; font-size: 4rem; opacity: 0.5; }
.c3 { top: 15%; left: 80%; animation-duration: 50s; font-size: 6rem; }
@keyframes floatCloud { from { transform: translateX(100vw); } to { transform: translateX(-100vw); } }
.huge-text { font-size: 10rem; font-weight: 900; color: #fde047; text-shadow: 0 10px 20px rgba(0,0,0,0.2); animation: bob 4s ease-in-out infinite; }
@keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
h2 { font-size: 2.5rem; margin: 0 0 10px; text-shadow: 0 4px 10px rgba(0,0,0,0.2); }
p { font-size: 1.2rem; margin-bottom: 40px; text-shadow: 0 2px 5px rgba(0,0,0,0.2); }
.boat-btn { display: inline-block; background: #f59e0b; color: #fff; padding: 15px 40px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 1.1rem; box-shadow: 0 10px 20px rgba(245,158,11,0.4); transition: 0.2s; }
.boat-btn:hover { background: #d97706; transform: translateY(-3px); box-shadow: 0 15px 25px rgba(245,158,11,0.5); }`,
    jsCode: ``
  },

  // 10. Split Layout 404
  {
    _id: "e10",
    title: "Split Layout 404",
    slug: "split-layout-404",
    description: "A modern split-screen 404 page with a giant image on one side and helpful links on the other.",
    category: "404 Pages",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["404", "split", "modern", "image"],
    isPremium: false,
    views: 9800,
    downloads: 3300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="split-404">
  <div class="s-image">
    <div class="s-overlay">
      <div class="giant-404">404</div>
    </div>
  </div>
  <div class="s-content">
    <div class="logo">Brand.</div>
    <h2>We lost that page.</h2>
    <p>Sorry, the page you are looking for doesn't exist or has been moved. Here are some helpful links instead:</p>
    
    <ul class="helpful-links">
      <li><a href="/">→ Home Page</a></li>
      <li><a href="/products">→ Our Products</a></li>
      <li><a href="/blog">→ Read the Blog</a></li>
      <li><a href="/contact">→ Contact Support</a></li>
    </ul>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.split-404 { display: flex; min-height: 100vh; }
.s-image { flex: 1; background: url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80') center/cover no-relative; position: relative; }
.s-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); display: flex; justify-content: center; align-items: center; }
.giant-404 { font-size: 15rem; font-weight: 900; color: rgba(255,255,255,0.8); text-shadow: 0 20px 40px rgba(0,0,0,0.3); }
.s-content { flex: 1; padding: 4rem; display: flex; flex-direction: column; justify-content: center; background: #f8fafc; }
.logo { font-size: 1.5rem; font-weight: 900; letter-spacing: -1px; margin-bottom: 3rem; color: #0f172a; }
h2 { font-size: 3rem; margin: 0 0 1rem; color: #0f172a; letter-spacing: -1px; }
p { font-size: 1.1rem; color: #64748b; line-height: 1.6; margin-bottom: 3rem; max-width: 500px; }
.helpful-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; }
.helpful-links a { color: #3b82f6; text-decoration: none; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; transition: 0.2s; }
.helpful-links a:hover { color: #2563eb; transform: translateX(5px); }
@media (max-width: 900px) { .split-404 { flex-direction: column; } .s-image { min-height: 300px; } .giant-404 { font-size: 8rem; } .s-content { padding: 2rem; } }`,
    jsCode: ``
  }
];
