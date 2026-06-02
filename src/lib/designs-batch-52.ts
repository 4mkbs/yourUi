import { Design } from "./designs-data";

export const BATCH_52_DESIGNS: Design[] = [
  // 1. Classic Centered Profile Card
  {
    _id: "pro1",
    title: "Classic Centered Profile",
    slug: "classic-centered-profile",
    description: "Standard clean profile card with centered avatar and basic info.",
    category: "Profile Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["profile", "classic", "centered", "card"],
    isPremium: false,
    views: 32500,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pro-c">
  <div class="pro-c-bg"></div>
  <div class="pro-c-img">
    <img src="https://i.pravatar.cc/150?img=32" alt="User" />
  </div>
  <div class="pro-c-info">
    <h2>Sarah Jenkins</h2>
    <p class="pro-c-role">Product Designer</p>
    <p class="pro-c-bio">Creating beautiful, usable interfaces. Coffee enthusiast.</p>
    <button class="pro-c-btn">Follow</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.pro-c { width: 320px; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); }
.pro-c-bg { height: 100px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); }
.pro-c-img { display: flex; justify-content: center; margin-top: -50px; }
.pro-c-img img { width: 100px; height: 100px; border-radius: 50%; border: 4px solid #fff; object-fit: cover; }
.pro-c-info { padding: 20px; text-align: center; }
.pro-c-info h2 { margin: 10px 0 5px; color: #0f172a; font-size: 1.3rem; }
.pro-c-role { margin: 0 0 15px; color: #3b82f6; font-size: 0.9rem; font-weight: 600; }
.pro-c-bio { margin: 0 0 20px; color: #64748b; font-size: 0.9rem; line-height: 1.5; }
.pro-c-btn { width: 100%; padding: 12px; border: none; border-radius: 8px; background: #0f172a; color: #fff; font-weight: 600; cursor: pointer; transition: 0.2s; }
.pro-c-btn:hover { background: #334155; }`,
    jsCode: ``
  },

  // 2. Minimal Row Profile Card
  {
    _id: "pro2",
    title: "Minimal Row Profile",
    slug: "minimal-row-profile",
    description: "Compact horizontal layout, great for lists or sidebars.",
    category: "Profile Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["profile", "minimal", "row", "horizontal"],
    isPremium: false,
    views: 28400,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pro-r">
  <img src="https://i.pravatar.cc/150?img=68" alt="User" />
  <div class="pro-r-info">
    <h3>Alex Rivera</h3>
    <p>Software Engineer</p>
  </div>
  <button class="pro-r-btn">Message</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.pro-r { display: flex; align-items: center; padding: 15px 20px; background: #f8fafc; border-radius: 12px; width: 350px; border: 1px solid #e2e8f0; transition: 0.2s; cursor: pointer; }
.pro-r:hover { border-color: #cbd5e1; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.pro-r img { width: 50px; height: 50px; border-radius: 50%; margin-right: 15px; }
.pro-r-info { flex: 1; }
.pro-r-info h3 { margin: 0 0 3px; font-size: 1rem; color: #0f172a; }
.pro-r-info p { margin: 0; font-size: 0.85rem; color: #64748b; }
.pro-r-btn { padding: 8px 16px; border: 1px solid #e2e8f0; background: #fff; border-radius: 20px; font-weight: 600; font-size: 0.8rem; color: #0f172a; cursor: pointer; transition: 0.2s; }
.pro-r-btn:hover { background: #f1f5f9; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Profile Card
  {
    _id: "pro3",
    title: "Cyberpunk Profile",
    slug: "cyberpunk-profile",
    description: "Neon glowing borders, angled cuts, and dark gaming aesthetic.",
    category: "Profile Cards",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["profile", "cyberpunk", "gaming", "neon"],
    isPremium: true,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pro-cy">
  <div class="pro-cy-inner">
    <div class="pro-cy-img">
      <img src="https://i.pravatar.cc/150?img=33" alt="Player" />
    </div>
    <h2>ZERO_COOL</h2>
    <p class="pro-cy-stat">RANK: DIAMOND | LVL: 99</p>
    <button class="pro-cy-btn">INVITE</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.pro-cy { width: 300px; padding: 2px; background: linear-gradient(45deg, #0ff, #f0f); clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px); }
.pro-cy-inner { background: #050505; padding: 30px; text-align: center; clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px); }
.pro-cy-img { margin: 0 auto 20px; width: 100px; height: 100px; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); background: #0ff; padding: 3px; }
.pro-cy-img img { width: 100%; height: 100%; object-fit: cover; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
.pro-cy-inner h2 { margin: 0 0 5px; color: #fff; text-shadow: 0 0 5px #0ff; letter-spacing: 2px; }
.pro-cy-stat { margin: 0 0 20px; color: #0ff; font-size: 0.8rem; font-weight: bold; }
.pro-cy-btn { width: 100%; padding: 10px; background: transparent; border: 1px solid #f0f; color: #f0f; font-family: inherit; font-weight: bold; letter-spacing: 1px; cursor: pointer; transition: 0.2s; box-shadow: inset 0 0 10px rgba(255,0,255,0); }
.pro-cy-btn:hover { background: #f0f; color: #fff; box-shadow: 0 0 15px #f0f; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Profile Card
  {
    _id: "pro4",
    title: "Glassmorphism Profile",
    slug: "glassmorphism-profile",
    description: "Frosted glass aesthetic resting beautifully over a colorful background.",
    category: "Profile Cards",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["profile", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="pro-gl">
    <img src="https://i.pravatar.cc/150?img=47" alt="User" />
    <h2>Elena Rostova</h2>
    <p>Art Director</p>
    <div class="pro-gl-stats">
      <div><strong>2.4k</strong><span>Followers</span></div>
      <div><strong>150</strong><span>Projects</span></div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); }
.pro-gl { width: 300px; padding: 30px; border-radius: 20px; background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.15); text-align: center; color: #fff; }
.pro-gl img { width: 90px; height: 90px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.5); margin-bottom: 15px; }
.pro-gl h2 { margin: 0 0 5px; font-size: 1.4rem; }
.pro-gl p { margin: 0 0 20px; font-size: 0.9rem; color: rgba(255,255,255,0.8); }
.pro-gl-stats { display: flex; justify-content: space-around; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 20px; }
.pro-gl-stats div { display: flex; flex-direction: column; }
.pro-gl-stats strong { font-size: 1.2rem; }
.pro-gl-stats span { font-size: 0.8rem; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 1px; margin-top: 3px; }`,
    jsCode: ``
  },

  // 5. Brutalist Profile Card
  {
    _id: "pro5",
    title: "Brutalist Profile Card",
    slug: "brutalist-profile-card",
    description: "Thick borders, harsh shadows, and bold typography.",
    category: "Profile Cards",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["profile", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pro-br">
  <img src="https://i.pravatar.cc/150?img=59" alt="User" />
  <h2>DAVID CHEN</h2>
  <p>FRONTEND DEV</p>
  <button>HIRE ME</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e5e5; }
.pro-br { width: 280px; background: #facc15; border: 4px solid #000; box-shadow: 8px 8px 0 #000; padding: 30px 20px; text-align: center; }
.pro-br img { width: 120px; height: 120px; border: 4px solid #000; border-radius: 50%; margin-bottom: 20px; filter: grayscale(100%) contrast(1.2); }
.pro-br h2 { margin: 0 0 5px; font-size: 1.8rem; font-weight: 900; color: #000; letter-spacing: -1px; }
.pro-br p { margin: 0 0 25px; font-size: 1rem; font-weight: 700; color: #000; }
.pro-br button { width: 100%; padding: 15px; background: #000; color: #fff; border: none; font-size: 1.1rem; font-weight: 900; cursor: pointer; transition: 0.2s; }
.pro-br button:hover { background: #ef4444; }`,
    jsCode: ``
  },

  // 6. Neumorphic Profile Card
  {
    _id: "pro6",
    title: "Neumorphic Profile",
    slug: "neumorphic-profile",
    description: "Soft UI design looking physically extruded from the background.",
    category: "Profile Cards",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["profile", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pro-neu">
  <div class="pro-n-img">
    <img src="https://i.pravatar.cc/150?img=28" alt="User" />
  </div>
  <h2>Marcus Cole</h2>
  <p>UI/UX Researcher</p>
  <button class="pro-n-btn">Connect</button>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.pro-neu { width: 300px; padding: 40px 20px; border-radius: 20px; background: #e0e5ec; box-shadow: 10px 10px 20px rgba(163,177,198,0.6), -10px -10px 20px rgba(255,255,255,0.5); text-align: center; }
.pro-n-img { width: 110px; height: 110px; margin: 0 auto 20px; border-radius: 50%; padding: 5px; background: #e0e5ec; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); }
.pro-n-img img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.pro-neu h2 { margin: 0 0 5px; color: #2d3748; font-size: 1.4rem; }
.pro-neu p { margin: 0 0 25px; color: #718096; }
.pro-n-btn { padding: 12px 30px; border: none; border-radius: 30px; background: #e0e5ec; color: #3182ce; font-weight: bold; cursor: pointer; box-shadow: 5px 5px 10px rgba(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5); transition: 0.2s; }
.pro-n-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Split Layout Profile Card
  {
    _id: "pro7",
    title: "Split Layout Profile",
    slug: "split-layout-profile",
    description: "Card divided into an image half and an info half.",
    category: "Profile Cards",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["profile", "split", "layout", "clean"],
    isPremium: true,
    views: 29800,
    downloads: 7900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pro-sp">
  <div class="pro-s-img">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" alt="User" />
  </div>
  <div class="pro-s-info">
    <h2>Jane Doe</h2>
    <p class="pro-s-role">Fashion Model</p>
    <p class="pro-s-bio">Based in NY. Available for freelance projects.</p>
    <a href="#" class="pro-s-link">View Portfolio</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f1f5f9; }
.pro-sp { display: flex; width: 600px; max-width: 90%; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.pro-s-img { width: 40%; }
.pro-s-img img { width: 100%; height: 100%; object-fit: cover; }
.pro-s-info { width: 60%; padding: 40px; display: flex; flex-direction: column; justify-content: center; }
.pro-s-info h2 { margin: 0 0 5px; color: #0f172a; font-size: 1.8rem; }
.pro-s-role { margin: 0 0 20px; color: #ec4899; font-weight: 600; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; }
.pro-s-bio { margin: 0 0 30px; color: #64748b; line-height: 1.6; }
.pro-s-link { text-decoration: none; color: #0f172a; font-weight: 700; border-bottom: 2px solid #0f172a; padding-bottom: 2px; align-self: flex-start; transition: 0.2s; }
.pro-s-link:hover { color: #ec4899; border-color: #ec4899; }
@media (max-width: 600px) { .pro-sp { flex-direction: column; } .pro-s-img { width: 100%; height: 250px; } .pro-s-info { width: 100%; padding: 30px; } }`,
    jsCode: ``
  },

  // 8. Dark Mode Glow Profile Card
  {
    _id: "pro8",
    title: "Dark Mode Glow Profile",
    slug: "dark-mode-glow-profile",
    description: "Deep dark card with subtle glowing accents.",
    category: "Profile Cards",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["profile", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pro-dg">
  <div class="pro-d-img">
    <img src="https://i.pravatar.cc/150?img=11" alt="User" />
  </div>
  <h2>James Wilson</h2>
  <p>Backend Developer</p>
  <button>Send Message</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #020617; }
.pro-dg { width: 280px; padding: 40px 20px; background: #0f172a; border-radius: 24px; border: 1px solid #1e293b; text-align: center; position: relative; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); }
.pro-dg::before { content: ''; position: absolute; top: -50px; left: -50px; right: -50px; height: 150px; background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%); pointer-events: none; }
.pro-d-img { width: 100px; height: 100px; margin: 0 auto 20px; border-radius: 50%; padding: 3px; background: linear-gradient(135deg, #3b82f6, #ec4899); box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
.pro-d-img img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; border: 2px solid #0f172a; }
.pro-dg h2 { margin: 0 0 5px; color: #f8fafc; font-size: 1.3rem; }
.pro-dg p { margin: 0 0 25px; color: #94a3b8; font-size: 0.9rem; }
.pro-dg button { width: 100%; padding: 12px; background: linear-gradient(135deg, #3b82f6, #6366f1); border: none; border-radius: 12px; color: #fff; font-weight: 600; cursor: pointer; transition: 0.3s; }
.pro-dg button:hover { box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }`,
    jsCode: ``
  },

  // 9. Hover Flip Profile Card
  {
    _id: "pro9",
    title: "Hover Flip Profile",
    slug: "hover-flip-profile",
    description: "Card flips on hover to reveal social links and bio on the back.",
    category: "Profile Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["profile", "flip", "hover", "3d"],
    isPremium: true,
    views: 34200,
    downloads: 9400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pro-flip">
  <div class="pro-fl-inner">
    <div class="pro-fl-front">
      <img src="https://i.pravatar.cc/300?img=5" alt="User" />
      <div class="pro-fl-name">
        <h2>Tom Hardy</h2>
        <p>Photographer</p>
      </div>
    </div>
    <div class="pro-fl-back">
      <h3>About Me</h3>
      <p>Specializing in landscape and portrait photography across the globe.</p>
      <button>Contact</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e2e8f0; perspective: 1000px; }
.pro-flip { width: 300px; height: 400px; background: transparent; cursor: pointer; }
.pro-fl-inner { position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); transform-style: preserve-3d; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); border-radius: 16px; }
.pro-flip:hover .pro-fl-inner { transform: rotateY(180deg); }
.pro-fl-front, .pro-fl-back { position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; border-radius: 16px; overflow: hidden; }
.pro-fl-front img { width: 100%; height: 100%; object-fit: cover; }
.pro-fl-name { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 40px 20px 20px; color: #fff; text-align: left; }
.pro-fl-name h2 { margin: 0 0 5px; font-size: 1.5rem; }
.pro-fl-name p { margin: 0; font-size: 0.9rem; color: rgba(255,255,255,0.8); }
.pro-fl-back { background: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px; transform: rotateY(180deg); }
.pro-fl-back h3 { margin: 0 0 15px; color: #0f172a; }
.pro-fl-back p { color: #64748b; line-height: 1.6; margin-bottom: 25px; }
.pro-fl-back button { padding: 10px 25px; border: 2px solid #0f172a; background: transparent; color: #0f172a; font-weight: 600; border-radius: 8px; cursor: pointer; transition: 0.2s; }
.pro-fl-back button:hover { background: #0f172a; color: #fff; }`,
    jsCode: ``
  },

  // 10. Stacked Social Profile Card
  {
    _id: "pro10",
    title: "Stacked Social Profile",
    slug: "stacked-social-profile",
    description: "Compact card with prominent social media statistic blocks.",
    category: "Profile Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["profile", "social", "stacked", "stats"],
    isPremium: false,
    views: 26100,
    downloads: 6600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="pro-st">
  <div class="pro-st-head">
    <img src="https://i.pravatar.cc/150?img=1" alt="User" />
    <div>
      <h2>Emma Davis</h2>
      <p>@emmadavis</p>
    </div>
  </div>
  <div class="pro-st-blocks">
    <div class="pro-st-block">
      <span>Posts</span>
      <strong>142</strong>
    </div>
    <div class="pro-st-block">
      <span>Followers</span>
      <strong>12k</strong>
    </div>
    <div class="pro-st-block">
      <span>Following</span>
      <strong>512</strong>
    </div>
  </div>
  <button class="pro-st-btn">Follow</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.pro-st { width: 320px; padding: 25px; background: #fff; border-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); border: 1px solid #f1f5f9; }
.pro-st-head { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
.pro-st-head img { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; }
.pro-st-head h2 { margin: 0 0 2px; color: #0f172a; font-size: 1.2rem; }
.pro-st-head p { margin: 0; color: #94a3b8; font-size: 0.9rem; }
.pro-st-blocks { display: flex; gap: 10px; margin-bottom: 25px; }
.pro-st-block { flex: 1; background: #f8fafc; padding: 15px 10px; border-radius: 12px; text-align: center; }
.pro-st-block span { display: block; font-size: 0.75rem; color: #64748b; text-transform: uppercase; margin-bottom: 5px; }
.pro-st-block strong { display: block; font-size: 1.1rem; color: #0f172a; }
.pro-st-btn { width: 100%; padding: 12px; background: #3b82f6; color: #fff; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.pro-st-btn:hover { background: #2563eb; }`,
    jsCode: ``
  }
];
