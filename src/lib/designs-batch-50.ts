import { Design } from "./designs-data";

export const BATCH_50_DESIGNS: Design[] = [
  // 1. Classic Vertical Timeline
  {
    _id: "tl1",
    title: "Classic Vertical Timeline",
    slug: "classic-vertical-timeline",
    description: "Standard vertical timeline with connected dots indicating events.",
    category: "Timelines",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["timeline", "classic", "vertical", "events"],
    isPremium: false,
    views: 29500,
    downloads: 8100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tl-classic">
  <div class="tl-c-item">
    <div class="tl-c-dot"></div>
    <div class="tl-c-content">
      <span class="tl-c-date">Jan 2026</span>
      <h3>Project Kickoff</h3>
      <p>Initial planning and requirements gathering phase.</p>
    </div>
  </div>
  <div class="tl-c-item">
    <div class="tl-c-dot"></div>
    <div class="tl-c-content">
      <span class="tl-c-date">Mar 2026</span>
      <h3>Design Approval</h3>
      <p>Finalized wireframes and high-fidelity mockups.</p>
    </div>
  </div>
  <div class="tl-c-item">
    <div class="tl-c-dot"></div>
    <div class="tl-c-content">
      <span class="tl-c-date">Jun 2026</span>
      <h3>Beta Release</h3>
      <p>Deployed version 1.0 to early access testers.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.tl-classic { max-width: 500px; margin: 0 auto; padding: 20px; }
.tl-c-item { display: flex; gap: 20px; margin-bottom: 30px; position: relative; }
.tl-c-item::before { content: ''; position: absolute; left: 7px; top: 20px; bottom: -30px; width: 2px; background: #e2e8f0; }
.tl-c-item:last-child::before { display: none; }
.tl-c-dot { width: 16px; height: 16px; background: #3b82f6; border-radius: 50%; border: 4px solid #eff6ff; margin-top: 2px; z-index: 1; }
.tl-c-content { flex: 1; }
.tl-c-date { font-size: 0.85rem; font-weight: 700; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.5px; }
.tl-c-content h3 { margin: 5px 0; color: #0f172a; font-size: 1.1rem; }
.tl-c-content p { margin: 0; color: #64748b; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 2. Minimal Left Border Timeline
  {
    _id: "tl2",
    title: "Minimal Border Timeline",
    slug: "minimal-border-timeline",
    description: "Extremely clean timeline utilizing a single border for structure.",
    category: "Timelines",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["timeline", "minimal", "clean", "border"],
    isPremium: false,
    views: 26400,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tl-min">
  <div class="tl-m-item">
    <h4>Version 2.0 Released</h4>
    <span class="tl-m-time">2 days ago</span>
    <p>Added 50 new components to the library.</p>
  </div>
  <div class="tl-m-item">
    <h4>Bug Fixes</h4>
    <span class="tl-m-time">1 week ago</span>
    <p>Resolved hydration issues on Safari.</p>
  </div>
  <div class="tl-m-item">
    <h4>Initial Commit</h4>
    <span class="tl-m-time">1 month ago</span>
    <p>Started the project repository.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.tl-min { max-width: 400px; border-left: 2px solid #f1f5f9; margin: 40px; }
.tl-m-item { padding: 0 0 30px 25px; position: relative; }
.tl-m-item::before { content: ''; position: absolute; left: -6px; top: 5px; width: 10px; height: 10px; border-radius: 50%; background: #94a3b8; transition: 0.3s; }
.tl-m-item:hover::before { background: #0f172a; transform: scale(1.3); }
.tl-m-item h4 { margin: 0 0 5px 0; color: #0f172a; font-size: 1.05rem; }
.tl-m-time { font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 8px; }
.tl-m-item p { margin: 0; color: #475569; font-size: 0.9rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Timeline
  {
    _id: "tl3",
    title: "Cyberpunk Timeline",
    slug: "cyberpunk-timeline",
    description: "Neon glowing lines and glitchy text for a sci-fi data log.",
    category: "Timelines",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["timeline", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 22100,
    downloads: 5900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tl-cy">
  <div class="tl-cy-node">
    <div class="tl-cy-time">T-MINUS 10</div>
    <div class="tl-cy-box">
      <h3>SYSTEM BOOT</h3>
      <p>Initializing core sequences...</p>
    </div>
  </div>
  <div class="tl-cy-node">
    <div class="tl-cy-time">T-MINUS 05</div>
    <div class="tl-cy-box tl-cy-alert">
      <h3>WARNING: UPLINK LOST</h3>
      <p>Rerouting to backup server.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.tl-cy { max-width: 500px; border-left: 2px dashed #0ff; margin: 40px; padding-left: 20px; box-shadow: -5px 0 15px rgba(0,255,255,0.1); }
.tl-cy-node { margin-bottom: 40px; position: relative; }
.tl-cy-node::before { content: '>'; position: absolute; left: -29px; top: -2px; color: #0ff; font-weight: bold; font-size: 1.2rem; text-shadow: 0 0 5px #0ff; background: #050505; }
.tl-cy-time { color: #f0f; font-weight: bold; margin-bottom: 5px; text-shadow: 0 0 5px #f0f; }
.tl-cy-box { background: rgba(0,255,255,0.05); border: 1px solid #0ff; padding: 15px; color: #ccc; }
.tl-cy-box h3 { margin: 0 0 10px; color: #0ff; }
.tl-cy-box.tl-cy-alert { border-color: #f00; background: rgba(255,0,0,0.05); }
.tl-cy-box.tl-cy-alert h3 { color: #f00; text-shadow: 0 0 5px #f00; }
.tl-cy-box p { margin: 0; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Timeline
  {
    _id: "tl4",
    title: "Glassmorphism Timeline",
    slug: "glassmorphism-timeline",
    description: "Frosted glass cards connected by a subtle glowing line.",
    category: "Timelines",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["timeline", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 27800,
    downloads: 7500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="tl-gl">
    <div class="tl-gl-item">
      <div class="tl-gl-card">
        <span class="tl-gl-date">Step 1</span>
        <h3>Create Account</h3>
        <p>Sign up and verify your email.</p>
      </div>
    </div>
    <div class="tl-gl-item">
      <div class="tl-gl-card">
        <span class="tl-gl-date">Step 2</span>
        <h3>Build Profile</h3>
        <p>Add your avatar and bio.</p>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; min-height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); padding: 40px; box-sizing: border-box; }
.tl-gl { border-left: 2px solid rgba(255,255,255,0.3); padding-left: 30px; position: relative; }
.tl-gl-item { margin-bottom: 30px; position: relative; }
.tl-gl-item::before { content: ''; position: absolute; left: -38px; top: 20px; width: 14px; height: 14px; border-radius: 50%; background: #fff; box-shadow: 0 0 10px #fff; }
.tl-gl-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3); padding: 20px; border-radius: 12px; color: #fff; max-width: 400px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
.tl-gl-date { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.7); }
.tl-gl-card h3 { margin: 5px 0; font-size: 1.2rem; }
.tl-gl-card p { margin: 0; font-size: 0.95rem; color: rgba(255,255,255,0.9); }`,
    jsCode: ``
  },

  // 5. Brutalist Timeline
  {
    _id: "tl5",
    title: "Brutalist Timeline",
    slug: "brutalist-timeline",
    description: "Thick lines, massive dates, and high impact design.",
    category: "Timelines",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["timeline", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 18400,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tl-br">
  <div class="tl-br-row">
    <div class="tl-br-yr">2024</div>
    <div class="tl-br-info">
      <h3>FOUNDED.</h3>
      <p>Started in a garage. No funding.</p>
    </div>
  </div>
  <div class="tl-br-row">
    <div class="tl-br-yr">2026</div>
    <div class="tl-br-info tl-br-yellow">
      <h3>DOMINATION.</h3>
      <p>Acquired the competition.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e5e5; }
.tl-br { max-width: 600px; margin: 40px; border-left: 8px solid #000; }
.tl-br-row { display: flex; border-bottom: 5px solid #000; background: #fff; align-items: stretch; }
.tl-br-row:last-child { border-bottom: none; }
.tl-br-yr { padding: 20px; font-size: 2.5rem; font-weight: 900; background: #000; color: #fff; display: flex; align-items: center; }
.tl-br-info { padding: 20px; flex: 1; border-left: 5px solid #000; }
.tl-br-info.tl-br-yellow { background: #facc15; }
.tl-br-info h3 { margin: 0 0 5px 0; font-size: 1.5rem; font-weight: 900; text-transform: uppercase; }
.tl-br-info p { margin: 0; font-weight: bold; font-size: 1.1rem; }`,
    jsCode: ``
  },

  // 6. Neumorphic Timeline
  {
    _id: "tl6",
    title: "Neumorphic Timeline",
    slug: "neumorphic-timeline",
    description: "Soft UI line with extruded buttons acting as timeline nodes.",
    category: "Timelines",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["timeline", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 19200,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tl-neu">
  <div class="tl-n-item">
    <div class="tl-n-node">1</div>
    <div class="tl-n-card">
      <h3>Phase One</h3>
      <p>Research and wireframing.</p>
    </div>
  </div>
  <div class="tl-n-item">
    <div class="tl-n-node tl-n-active">2</div>
    <div class="tl-n-card tl-n-card-inset">
      <h3>Phase Two</h3>
      <p>Current development cycle.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.tl-neu { position: relative; max-width: 400px; }
.tl-neu::before { content: ''; position: absolute; left: 19px; top: 0; bottom: 0; width: 4px; background: #e0e5ec; box-shadow: inset 2px 2px 5px rgba(163,177,198,0.6), inset -2px -2px 5px rgba(255,255,255,0.5); border-radius: 2px; }
.tl-n-item { display: flex; gap: 20px; margin-bottom: 30px; position: relative; }
.tl-n-node { width: 40px; height: 40px; border-radius: 50%; background: #e0e5ec; box-shadow: 5px 5px 10px rgba(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5); display: flex; justify-content: center; align-items: center; font-weight: bold; color: #718096; z-index: 1; }
.tl-n-node.tl-n-active { color: #3182ce; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
.tl-n-card { flex: 1; padding: 15px; border-radius: 12px; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); }
.tl-n-card-inset { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
.tl-n-card h3 { margin: 0 0 5px 0; color: #2d3748; }
.tl-n-card p { margin: 0; color: #718096; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 7. Horizontal Scroll Timeline
  {
    _id: "tl7",
    title: "Horizontal Scroll Timeline",
    slug: "horizontal-scroll-timeline",
    description: "A timeline that flows left to right, great for wide screens.",
    category: "Timelines",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["timeline", "horizontal", "scroll", "process"],
    isPremium: true,
    views: 24300,
    downloads: 6500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tl-hz-wrap">
  <div class="tl-hz">
    <div class="tl-hz-item">
      <div class="tl-h-dot"></div>
      <h4>Idea</h4>
      <p>Concept generation</p>
    </div>
    <div class="tl-hz-line"></div>
    <div class="tl-hz-item">
      <div class="tl-h-dot"></div>
      <h4>Design</h4>
      <p>Figma mockups</p>
    </div>
    <div class="tl-hz-line"></div>
    <div class="tl-hz-item tl-hz-active">
      <div class="tl-h-dot"></div>
      <h4>Code</h4>
      <p>Next.js & Tailwind</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.tl-hz-wrap { width: 100%; overflow-x: auto; padding: 40px; box-sizing: border-box; }
.tl-hz { display: flex; align-items: center; min-width: 600px; }
.tl-hz-item { display: flex; flex-direction: column; align-items: center; text-align: center; width: 120px; }
.tl-h-dot { width: 20px; height: 20px; background: #fff; border: 4px solid #cbd5e1; border-radius: 50%; margin-bottom: 15px; transition: 0.3s; }
.tl-hz-line { flex: 1; height: 4px; background: #e2e8f0; margin-top: -45px; }
.tl-hz-item h4 { margin: 0 0 5px 0; color: #0f172a; font-size: 1rem; }
.tl-hz-item p { margin: 0; color: #64748b; font-size: 0.85rem; }
.tl-hz-active .tl-h-dot { border-color: #3b82f6; background: #3b82f6; box-shadow: 0 0 0 4px #eff6ff; }
.tl-hz-active h4 { color: #3b82f6; }`,
    jsCode: ``
  },

  // 8. Dark Mode Glowing Timeline
  {
    _id: "tl8",
    title: "Dark Mode Glowing Timeline",
    slug: "dark-mode-glowing-timeline",
    description: "Deep dark UI with a vibrant glowing gradient timeline path.",
    category: "Timelines",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["timeline", "dark", "gradient", "glow"],
    isPremium: true,
    views: 28900,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tl-dg">
  <div class="tl-d-item">
    <div class="tl-d-dot"></div>
    <div class="tl-d-content">
      <h3>Genesis Block</h3>
      <p>The network went live.</p>
    </div>
  </div>
  <div class="tl-d-item tl-d-active">
    <div class="tl-d-dot"></div>
    <div class="tl-d-content">
      <h3>Smart Contracts</h3>
      <p>V2 upgrade deployed.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #020617; }
.tl-dg { max-width: 400px; padding: 40px; position: relative; }
.tl-dg::before { content: ''; position: absolute; left: 47px; top: 40px; bottom: 40px; width: 2px; background: linear-gradient(180deg, #ec4899, #8b5cf6, #3b82f6); box-shadow: 0 0 10px rgba(139, 92, 246, 0.5); }
.tl-d-item { display: flex; gap: 20px; margin-bottom: 40px; position: relative; z-index: 1; }
.tl-d-dot { width: 16px; height: 16px; border-radius: 50%; background: #1e293b; border: 2px solid #64748b; margin-top: 5px; transition: 0.3s; }
.tl-d-content h3 { margin: 0 0 5px 0; color: #e2e8f0; font-size: 1.1rem; }
.tl-d-content p { margin: 0; color: #94a3b8; font-size: 0.9rem; }
.tl-d-active .tl-d-dot { border-color: #ec4899; background: #ec4899; box-shadow: 0 0 15px #ec4899; }
.tl-d-active h3 { background: linear-gradient(90deg, #ec4899, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`,
    jsCode: ``
  },

  // 9. Alternating Sides Timeline
  {
    _id: "tl9",
    title: "Alternating Timeline",
    slug: "alternating-timeline",
    description: "A central line with content cards alternating left and right.",
    category: "Timelines",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["timeline", "alternating", "center", "story"],
    isPremium: true,
    views: 31400,
    downloads: 9200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tl-alt">
  <div class="tl-a-row tl-a-left">
    <div class="tl-a-card">
      <h3>2024</h3>
      <p>Company founded.</p>
    </div>
  </div>
  <div class="tl-a-row tl-a-right">
    <div class="tl-a-card">
      <h3>2025</h3>
      <p>Series A funding.</p>
    </div>
  </div>
  <div class="tl-a-row tl-a-left">
    <div class="tl-a-card">
      <h3>2026</h3>
      <p>Global expansion.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f1f5f9; }
.tl-alt { position: relative; max-width: 600px; width: 100%; padding: 40px 0; }
.tl-alt::before { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 4px; background: #cbd5e1; transform: translateX(-50%); }
.tl-a-row { display: flex; justify-content: flex-end; padding-right: 50%; position: relative; margin-bottom: 30px; width: 100%; box-sizing: border-box; }
.tl-a-row.tl-a-right { justify-content: flex-start; padding-right: 0; padding-left: 50%; }
.tl-a-card { background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); width: 80%; position: relative; }
.tl-a-left .tl-a-card { margin-right: 30px; }
.tl-a-right .tl-a-card { margin-left: 30px; }
.tl-a-row::after { content: ''; position: absolute; top: 25px; left: 50%; width: 20px; height: 20px; background: #3b82f6; border-radius: 50%; transform: translateX(-50%); border: 4px solid #fff; box-shadow: 0 0 0 2px #cbd5e1; z-index: 1; }
.tl-a-card h3 { margin: 0 0 10px 0; color: #0f172a; }
.tl-a-card p { margin: 0; color: #64748b; }`,
    jsCode: ``
  },

  // 10. Floating Card Timeline
  {
    _id: "tl10",
    title: "Floating Card Timeline",
    slug: "floating-card-timeline",
    description: "Events displayed as high-elevation floating cards attached to a thick spine.",
    category: "Timelines",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["timeline", "floating", "card", "modern"],
    isPremium: true,
    views: 25800,
    downloads: 6700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tl-fl">
  <div class="tl-f-item">
    <div class="tl-f-card">
      <span class="tl-f-badge">Update</span>
      <h3>v1.2 Released</h3>
      <p>Performance improvements and bug fixes.</p>
    </div>
  </div>
  <div class="tl-f-item">
    <div class="tl-f-card">
      <span class="tl-f-badge">Launch</span>
      <h3>Initial Release</h3>
      <p>We are live on Product Hunt!</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e2e8f0; }
.tl-fl { border-left: 6px solid #94a3b8; padding: 20px 0 20px 30px; max-width: 400px; }
.tl-f-item { margin-bottom: 40px; position: relative; }
.tl-f-item::before { content: ''; position: absolute; left: -39px; top: 15px; width: 12px; height: 12px; background: #fff; border: 4px solid #0f172a; border-radius: 50%; }
.tl-f-card { background: #fff; padding: 25px; border-radius: 16px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); transition: 0.3s; cursor: pointer; }
.tl-f-card:hover { transform: translateY(-5px); box-shadow: 0 25px 30px -5px rgba(0,0,0,0.15); }
.tl-f-badge { display: inline-block; padding: 4px 10px; background: #eff6ff; color: #3b82f6; font-size: 0.8rem; font-weight: 700; border-radius: 6px; margin-bottom: 10px; text-transform: uppercase; }
.tl-f-card h3 { margin: 0 0 10px 0; color: #0f172a; font-size: 1.2rem; }
.tl-f-card p { margin: 0; color: #64748b; line-height: 1.5; }`,
    jsCode: ``
  }
];
