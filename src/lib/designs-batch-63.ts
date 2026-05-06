import { Design } from "./designs-data";

export const BATCH_63_DESIGNS: Design[] = [
  // 1. Classic Split Hero
  {
    _id: "hr1",
    title: "Classic Split Hero",
    slug: "classic-split-hero",
    description: "Standard landing page hero with text/CTA on the left and an image on the right.",
    category: "Hero Sections",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["hero", "landing", "classic", "split"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<header class="hr-cl">
  <div class="hr-c-content">
    <span class="hr-c-badge">New Feature Available</span>
    <h1>Build faster with semantic components</h1>
    <p>Stop wasting time rewriting boilerplate. Copy, paste, and ship your next project in record time with our premium UI library.</p>
    <div class="hr-c-acts">
      <button class="hr-btn-pri">Get Started Free</button>
      <button class="hr-btn-sec">Read Documentation</button>
    </div>
  </div>
  <div class="hr-c-img">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="Workspace" />
  </div>
</header>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.hr-cl { display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; padding: 80px 20px; gap: 40px; min-height: 80vh; }
.hr-c-content { flex: 1; max-width: 600px; }
.hr-c-badge { display: inline-block; padding: 6px 12px; background: #e0f2fe; color: #0284c7; border-radius: 20px; font-size: 0.85rem; font-weight: 600; margin-bottom: 20px; }
.hr-cl h1 { margin: 0 0 20px; font-size: 3.5rem; color: #0f172a; line-height: 1.1; font-weight: 800; letter-spacing: -1px; }
.hr-cl p { margin: 0 0 40px; font-size: 1.2rem; color: #475569; line-height: 1.6; }
.hr-c-acts { display: flex; gap: 15px; }
.hr-btn-pri { padding: 15px 30px; background: #3b82f6; color: #fff; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: 0.2s; }
.hr-btn-pri:hover { background: #2563eb; }
.hr-btn-sec { padding: 15px 30px; background: #fff; color: #0f172a; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: 0.2s; }
.hr-btn-sec:hover { background: #f1f5f9; border-color: #94a3b8; }
.hr-c-img { flex: 1; display: flex; justify-content: flex-end; }
.hr-c-img img { width: 100%; max-width: 500px; border-radius: 16px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
@media (max-width: 900px) { .hr-cl { flex-direction: column; text-align: center; } .hr-c-content { margin: 0 auto; } .hr-c-acts { justify-content: center; flex-wrap: wrap; } .hr-c-img { justify-content: center; } }`,
    jsCode: ``
  },

  // 2. Centered Typography Hero
  {
    _id: "hr2",
    title: "Centered Typography Hero",
    slug: "centered-typography-hero",
    description: "Minimalist hero focusing entirely on bold, large typography.",
    category: "Hero Sections",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["hero", "typography", "minimal", "centered"],
    isPremium: false,
    views: 38500,
    downloads: 10200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<header class="hr-ce">
  <div class="hr-ce-inner">
    <h1>Design that speaks for itself.</h1>
    <p>A curated collection of minimalist components designed to elevate your brand without the clutter.</p>
    <div class="hr-ce-acts">
      <a href="#">Explore Collection</a>
    </div>
  </div>
</header>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; }
.hr-ce { display: flex; justify-content: center; align-items: center; min-height: 80vh; text-align: center; padding: 40px 20px; }
.hr-ce-inner { max-width: 800px; }
.hr-ce h1 { margin: 0 0 25px; font-size: 4.5rem; color: #111; line-height: 1.1; font-weight: 800; letter-spacing: -2px; }
.hr-ce p { margin: 0 0 40px; font-size: 1.3rem; color: #666; line-height: 1.6; max-width: 600px; margin-left: auto; margin-right: auto; }
.hr-ce-acts a { display: inline-block; padding: 15px 40px; background: #111; color: #fff; text-decoration: none; font-weight: 600; border-radius: 50px; font-size: 1.1rem; transition: 0.3s; }
.hr-ce-acts a:hover { background: #333; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
@media (max-width: 600px) { .hr-ce h1 { font-size: 3rem; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Hero
  {
    _id: "hr3",
    title: "Cyberpunk Hero",
    slug: "cyberpunk-hero",
    description: "Neon lit, high tech header for gaming or developer sites.",
    category: "Hero Sections",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["hero", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 36500,
    downloads: 9800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<header class="hr-cy">
  <div class="cy-overlay"></div>
  <div class="hr-cy-content">
    <div class="cy-tag">[ SYSTEM_READY ]</div>
    <h1>ENTER THE GRID</h1>
    <p>Upload your consciousness to the most advanced neural network routing protocol available to rogue operatives.</p>
    <button class="cy-btn">INITIALIZE_LINK</button>
  </div>
</header>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; }
.hr-cy { position: relative; min-height: 80vh; display: flex; align-items: center; padding: 0 50px; background: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80') center/cover; overflow: hidden; }
.cy-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%); }
.hr-cy-content { position: relative; z-index: 2; max-width: 600px; }
.cy-tag { color: #0ff; margin-bottom: 20px; font-weight: bold; letter-spacing: 2px; text-shadow: 0 0 5px #0ff; }
.hr-cy h1 { margin: 0 0 20px; font-size: 4rem; color: #fff; text-shadow: 2px 2px 0 #f0f, -2px -2px 0 #0ff; letter-spacing: 2px; }
.hr-cy p { margin: 0 0 40px; color: #ccc; font-size: 1.1rem; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 10px; border-left: 2px solid #0ff; }
.cy-btn { background: rgba(255,0,255,0.2); border: 2px solid #f0f; color: #fff; padding: 15px 30px; font-family: inherit; font-weight: bold; font-size: 1.1rem; cursor: pointer; text-shadow: 0 0 5px #f0f; box-shadow: 0 0 15px rgba(255,0,255,0.4), inset 0 0 10px rgba(255,0,255,0.2); transition: 0.2s; }
.cy-btn:hover { background: #f0f; color: #000; box-shadow: 0 0 25px #f0f; }
@media (max-width: 768px) { .hr-cy { padding: 40px 20px; } .hr-cy h1 { font-size: 3rem; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Hero
  {
    _id: "hr4",
    title: "Glassmorphism Hero",
    slug: "glassmorphism-hero",
    description: "Frosted glass card floating over an animated mesh gradient background.",
    category: "Hero Sections",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["hero", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 48100,
    downloads: 14900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<header class="hr-gl">
  <div class="hr-g-card">
    <h1>Create with clarity.</h1>
    <p>A beautiful set of glassmorphic UI components designed to make your web applications feel modern and weightless.</p>
    <a href="#" class="hr-g-btn">Explore Library</a>
  </div>
</header>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.hr-gl { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); position: relative; overflow: hidden; }
/* Fake animated blobs */
.hr-gl::before, .hr-gl::after { content: ''; position: absolute; width: 400px; height: 400px; border-radius: 50%; filter: blur(60px); z-index: 0; animation: float 10s infinite alternate; }
.hr-gl::before { background: #10b981; top: -100px; left: -100px; }
.hr-gl::after { background: #facc15; bottom: -100px; right: -100px; animation-delay: -5s; }
@keyframes float { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(50px, 50px) scale(1.2); } }
.hr-g-card { position: relative; z-index: 1; max-width: 600px; padding: 60px 40px; background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); text-align: center; color: #fff; }
.hr-g-card h1 { margin: 0 0 20px; font-size: 3.5rem; font-weight: 700; letter-spacing: -1px; text-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.hr-g-card p { margin: 0 0 40px; font-size: 1.2rem; line-height: 1.6; opacity: 0.9; }
.hr-g-btn { display: inline-block; padding: 15px 35px; background: rgba(255,255,255,0.2); color: #fff; text-decoration: none; font-weight: 600; border-radius: 30px; border: 1px solid rgba(255,255,255,0.5); transition: 0.3s; }
.hr-g-btn:hover { background: #fff; color: #8b5cf6; }
@media (max-width: 600px) { .hr-g-card h1 { font-size: 2.5rem; } }`,
    jsCode: ``
  },

  // 5. Brutalist Hero
  {
    _id: "hr5",
    title: "Brutalist Hero",
    slug: "brutalist-hero",
    description: "Loud, bold typography with harsh borders and high contrast colors.",
    category: "Hero Sections",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["hero", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 29800,
    downloads: 7400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<header class="hr-br">
  <div class="hr-b-wrap">
    <h1>NO <br>MORE <br>BORING <br>SITES.</h1>
    <div class="hr-b-side">
      <p>EMBRACE THE CHAOS. BUILD LOUD. STAND OUT FROM THE SEA OF TEMPLATES.</p>
      <a href="#" class="hr-b-btn">START BUILDING</a>
    </div>
  </div>
</header>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #ec4899; }
.hr-br { min-height: 80vh; display: flex; align-items: center; padding: 40px; border-bottom: 8px solid #000; }
.hr-b-wrap { display: flex; width: 100%; max-width: 1400px; margin: 0 auto; gap: 40px; align-items: flex-end; flex-wrap: wrap; }
.hr-br h1 { margin: 0; font-size: 8vw; font-weight: 900; color: #facc15; text-shadow: 4px 4px 0 #000; line-height: 0.9; letter-spacing: -2px; flex: 1; min-width: 300px; }
.hr-b-side { flex: 1; min-width: 300px; background: #fff; border: 4px solid #000; padding: 40px; box-shadow: 12px 12px 0 #000; }
.hr-b-side p { margin: 0 0 30px; font-weight: 900; font-size: 1.5rem; line-height: 1.2; text-transform: uppercase; }
.hr-b-btn { display: inline-block; background: #000; color: #fff; text-decoration: none; font-weight: 900; font-size: 1.2rem; padding: 15px 30px; border: 4px solid #000; transition: 0.2s; }
.hr-b-btn:hover { background: #facc15; color: #000; }
@media (max-width: 800px) { .hr-br h1 { font-size: 15vw; } }`,
    jsCode: ``
  },

  // 6. Neumorphic Hero
  {
    _id: "hr6",
    title: "Neumorphic Hero",
    slug: "neumorphic-hero",
    description: "Soft UI design with extruded elements matching neumorphic layouts.",
    category: "Hero Sections",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["hero", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<header class="hr-neu">
  <div class="hr-n-card">
    <div class="hr-n-icon">☁️</div>
    <h1>Soft & Seamless</h1>
    <p>A gentle approach to user interfaces. No harsh borders, just smooth transitions and intuitive depth.</p>
    <button>Get Started</button>
  </div>
</header>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.hr-neu { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.hr-n-card { background: #e0e5ec; padding: 60px 40px; border-radius: 30px; box-shadow: 20px 20px 40px rgba(163,177,198,0.6), -20px -20px 40px rgba(255,255,255,0.5); max-width: 500px; text-align: center; }
.hr-n-icon { width: 80px; height: 80px; margin: 0 auto 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 2rem; background: #e0e5ec; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); }
.hr-n-card h1 { margin: 0 0 20px; color: #2d3748; font-size: 2.5rem; font-weight: bold; }
.hr-n-card p { margin: 0 0 40px; color: #718096; font-size: 1.1rem; line-height: 1.6; }
.hr-n-card button { padding: 15px 40px; border: none; border-radius: 15px; background: #e0e5ec; color: #3182ce; font-weight: bold; font-size: 1.1rem; cursor: pointer; box-shadow: 8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.5); transition: 0.2s; }
.hr-n-card button:active { box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Hero
  {
    _id: "hr7",
    title: "Dark Mode Glow Hero",
    slug: "dark-mode-glow-hero",
    description: "Deep dark landing section with a massive glowing gradient orb behind text.",
    category: "Hero Sections",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["hero", "dark", "glow", "gradient"],
    isPremium: true,
    views: 41400,
    downloads: 11800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<header class="hr-dg">
  <div class="hr-d-glow"></div>
  <div class="hr-d-content">
    <h1>The future of web development is here.</h1>
    <p>Harness the power of AI to generate complete, production-ready codebases in seconds. Welcome to the new era.</p>
    <a href="#" class="hr-d-btn">Start Building Now</a>
  </div>
</header>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; overflow-x: hidden; }
.hr-dg { min-height: 100vh; display: flex; justify-content: center; align-items: center; position: relative; padding: 20px; text-align: center; }
.hr-d-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60vw; height: 60vw; max-width: 800px; max-height: 800px; background: radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(236,72,153,0.1) 40%, rgba(2,6,23,0) 70%); z-index: 0; filter: blur(50px); pointer-events: none; }
.hr-d-content { position: relative; z-index: 1; max-width: 800px; }
.hr-d-content h1 { margin: 0 0 25px; font-size: 4.5rem; font-weight: 800; line-height: 1.1; letter-spacing: -2px; background: linear-gradient(to right, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hr-d-content p { margin: 0 0 40px; color: #94a3b8; font-size: 1.25rem; line-height: 1.6; max-width: 600px; margin-left: auto; margin-right: auto; }
.hr-d-btn { display: inline-block; padding: 15px 35px; background: linear-gradient(135deg, #3b82f6, #ec4899); color: #fff; text-decoration: none; font-weight: 600; border-radius: 8px; font-size: 1.1rem; transition: 0.3s; box-shadow: 0 10px 20px rgba(236,72,153,0.2); }
.hr-d-btn:hover { box-shadow: 0 15px 30px rgba(59,130,246,0.4); transform: translateY(-2px); }
@media (max-width: 768px) { .hr-d-content h1 { font-size: 3rem; } }`,
    jsCode: ``
  },

  // 8. Background Image Hero
  {
    _id: "hr8",
    title: "Background Image Hero",
    slug: "background-image-hero",
    description: "Full bleed background image with a dark overlay and centered text.",
    category: "Hero Sections",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["hero", "image", "overlay", "full-screen"],
    isPremium: false,
    views: 39400,
    downloads: 10100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<header class="hr-bg">
  <div class="hr-b-content">
    <h1>Explore the unknown.</h1>
    <p>Discover breathtaking destinations and curate the adventure of a lifetime with our specialized travel guides.</p>
    <a href="#">Plan Your Trip</a>
  </div>
</header>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.hr-bg { min-height: 100vh; background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=1600&q=80') center/cover; display: flex; justify-content: center; align-items: center; text-align: center; padding: 20px; }
.hr-b-content { max-width: 700px; color: #fff; }
.hr-b-content h1 { margin: 0 0 20px; font-size: 4rem; font-weight: 800; letter-spacing: -1px; }
.hr-b-content p { margin: 0 0 40px; font-size: 1.25rem; line-height: 1.6; opacity: 0.9; }
.hr-b-content a { display: inline-block; padding: 15px 40px; background: #fff; color: #000; text-decoration: none; font-weight: 700; border-radius: 4px; font-size: 1.1rem; transition: 0.2s; }
.hr-b-content a:hover { background: #e2e8f0; }
@media (max-width: 600px) { .hr-b-content h1 { font-size: 2.8rem; } }`,
    jsCode: ``
  },

  // 9. App Screenshot Hero
  {
    _id: "hr9",
    title: "App Screenshot Hero",
    slug: "app-screenshot-hero",
    description: "Text on top with a large application screenshot rising from the bottom.",
    category: "Hero Sections",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["hero", "app", "screenshot", "modern"],
    isPremium: true,
    views: 43100,
    downloads: 11700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<header class="hr-ap">
  <div class="hr-a-top">
    <h1>The operating system for your business.</h1>
    <p>Manage projects, track time, and invoice clients all from one centralized dashboard.</p>
    <button>Start 14-Day Trial</button>
  </div>
  <div class="hr-a-bot">
    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Dashboard Dashboard" />
  </div>
</header>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; overflow-x: hidden; }
.hr-ap { display: flex; flex-direction: column; align-items: center; padding-top: 100px; text-align: center; }
.hr-a-top { max-width: 800px; padding: 0 20px; margin-bottom: 60px; }
.hr-a-top h1 { margin: 0 0 25px; font-size: 3.5rem; font-weight: 800; color: #0f172a; letter-spacing: -1px; line-height: 1.1; }
.hr-a-top p { margin: 0 0 35px; font-size: 1.25rem; color: #64748b; line-height: 1.6; max-width: 600px; margin-left: auto; margin-right: auto; }
.hr-a-top button { padding: 15px 35px; background: #0f172a; color: #fff; border: none; border-radius: 8px; font-size: 1.1rem; font-weight: 600; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); transition: 0.2s; }
.hr-a-top button:hover { transform: translateY(-2px); box-shadow: 0 15px 20px -5px rgba(0,0,0,0.15); }
.hr-a-bot { width: 100%; max-width: 1000px; padding: 0 20px; }
.hr-a-bot img { width: 100%; border-radius: 16px 16px 0 0; box-shadow: 0 -10px 40px rgba(0,0,0,0.1); display: block; border: 1px solid #e2e8f0; border-bottom: none; }
@media (max-width: 768px) { .hr-a-top h1 { font-size: 2.5rem; } }`,
    jsCode: ``
  },

  // 10. Floating Elements Hero
  {
    _id: "hr10",
    title: "Floating Elements Hero",
    slug: "floating-elements-hero",
    description: "Centered content surrounded by absolute positioned floating UI elements/images.",
    category: "Hero Sections",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["hero", "floating", "abstract", "modern"],
    isPremium: true,
    views: 38500,
    downloads: 9200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<header class="hr-fl">
  <!-- Fake floating elements -->
  <div class="fl-el el-1">🚀</div>
  <div class="fl-el el-2">🎨</div>
  <div class="fl-el el-3">⚡️</div>
  
  <div class="hr-f-content">
    <h1>Creativity unbound.</h1>
    <p>Unlock your team's potential with tools designed to remove friction from the design process.</p>
    <a href="#">Join the Waitlist</a>
  </div>
</header>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; overflow: hidden; }
.hr-fl { min-height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center; padding: 20px; position: relative; }
.hr-f-content { max-width: 700px; position: relative; z-index: 10; }
.hr-f-content h1 { margin: 0 0 20px; font-size: 4rem; font-weight: 800; color: #111; letter-spacing: -2px; }
.hr-f-content p { margin: 0 0 40px; font-size: 1.25rem; color: #555; line-height: 1.6; }
.hr-f-content a { display: inline-block; padding: 15px 35px; background: #3b82f6; color: #fff; text-decoration: none; font-weight: 600; border-radius: 50px; font-size: 1.1rem; transition: 0.2s; box-shadow: 0 10px 20px rgba(59,130,246,0.3); }
.hr-f-content a:hover { background: #2563eb; transform: scale(1.05); }
.fl-el { position: absolute; font-size: 4rem; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); animation: float-el 6s ease-in-out infinite alternate; z-index: 1; }
.el-1 { top: 20%; left: 15%; animation-delay: 0s; }
.el-2 { top: 60%; right: 15%; animation-delay: -2s; }
.el-3 { bottom: 20%; left: 25%; animation-delay: -4s; }
@keyframes float-el { 0% { transform: translateY(0) rotate(0); } 100% { transform: translateY(-30px) rotate(10deg); } }
@media (max-width: 768px) { .fl-el { display: none; } .hr-f-content h1 { font-size: 3rem; } }`,
    jsCode: ``
  }
];
