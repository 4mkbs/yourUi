import { Design } from "./designs-data";

export const BATCH_56_DESIGNS: Design[] = [
  // 1. Classic Centered Team Card
  {
    _id: "tc1",
    title: "Classic Centered Team Card",
    slug: "classic-centered-team-card",
    description: "Standard clean team member card with centered photo and social links.",
    category: "Team Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["team", "classic", "centered", "card"],
    isPremium: false,
    views: 28200,
    downloads: 7500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-c">
  <img src="https://i.pravatar.cc/150?img=32" alt="Team Member" />
  <h3>Sarah Jenkins</h3>
  <p>Lead Designer</p>
  <div class="tm-c-social">
    <a href="#">in</a>
    <a href="#">tw</a>
    <a href="#">gh</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.tm-c { width: 260px; padding: 40px 20px; background: #fff; border-radius: 16px; text-align: center; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); }
.tm-c img { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 20px; border: 4px solid #f1f5f9; }
.tm-c h3 { margin: 0 0 5px; color: #0f172a; font-size: 1.2rem; }
.tm-c p { margin: 0 0 25px; color: #64748b; font-size: 0.95rem; }
.tm-c-social { display: flex; justify-content: center; gap: 15px; }
.tm-c-social a { text-decoration: none; width: 35px; height: 35px; border-radius: 50%; background: #f1f5f9; color: #334155; display: flex; justify-content: center; align-items: center; font-weight: 600; font-size: 0.8rem; transition: 0.2s; }
.tm-c-social a:hover { background: #3b82f6; color: #fff; }`,
    jsCode: ``
  },

  // 2. Hover Reveal Team Card
  {
    _id: "tc2",
    title: "Hover Reveal Team Card",
    slug: "hover-reveal-team-card",
    description: "Image card where info and social links slide up on hover.",
    category: "Team Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["team", "hover", "reveal", "image"],
    isPremium: true,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-hr">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" alt="Team Member" />
  <div class="tm-h-overlay">
    <h3>Elena Rostova</h3>
    <p>Art Director</p>
    <div class="tm-h-social">
      <span>Be</span>
      <span>Dr</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e2e8f0; }
.tm-hr { width: 280px; height: 350px; position: relative; overflow: hidden; border-radius: 16px; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.tm-hr img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.tm-hr:hover img { transform: scale(1.1); }
.tm-h-overlay { position: absolute; bottom: -80px; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.9)); padding: 40px 20px 20px; color: #fff; text-align: center; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.tm-hr:hover .tm-h-overlay { bottom: 0; }
.tm-h-overlay h3 { margin: 0 0 5px; font-size: 1.3rem; }
.tm-h-overlay p { margin: 0 0 15px; color: #cbd5e1; font-size: 0.9rem; }
.tm-h-social { display: flex; justify-content: center; gap: 10px; opacity: 0; transition: 0.4s; transition-delay: 0.1s; }
.tm-hr:hover .tm-h-social { opacity: 1; }
.tm-h-social span { font-weight: bold; padding: 5px 10px; background: rgba(255,255,255,0.2); border-radius: 4px; font-size: 0.8rem; backdrop-filter: blur(5px); }`,
    jsCode: ``
  },

  // 3. Cyberpunk Team Card
  {
    _id: "tc3",
    title: "Cyberpunk Team Card",
    slug: "cyberpunk-team-card",
    description: "Neon borders and hacker aesthetic for dev teams or gaming orgs.",
    category: "Team Cards",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["team", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-cy">
  <div class="tm-cy-img"><img src="https://i.pravatar.cc/150?img=33" alt="Dev" /></div>
  <div class="tm-cy-info">
    <h4>_ZERO_COOL</h4>
    <p>SEC_OPS LEAD</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.tm-cy { display: flex; width: 320px; background: rgba(0,255,255,0.05); border: 1px solid #0ff; position: relative; box-shadow: inset 0 0 20px rgba(0,255,255,0.1); }
.tm-cy::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #f0f; box-shadow: 0 0 10px #f0f; }
.tm-cy-img { width: 100px; height: 100px; padding: 15px; }
.tm-cy-img img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.5) sepia(100%) hue-rotate(150deg); border: 1px solid #0ff; }
.tm-cy-info { padding: 25px 15px; display: flex; flex-direction: column; justify-content: center; }
.tm-cy-info h4 { margin: 0 0 10px; color: #fff; text-shadow: 0 0 5px #0ff; font-size: 1.1rem; letter-spacing: 2px; }
.tm-cy-info p { margin: 0; color: #f0f; font-size: 0.85rem; font-weight: bold; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Team Card
  {
    _id: "tc4",
    title: "Glassmorphism Team Card",
    slug: "glassmorphism-team-card",
    description: "Frosted glass aesthetic resting over a colorful background.",
    category: "Team Cards",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["team", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="tm-gl">
    <div class="tm-g-ring">
      <img src="https://i.pravatar.cc/150?img=47" alt="User" />
    </div>
    <h3>Emma Davis</h3>
    <p>Marketing Head</p>
    <button>View Profile</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.tm-gl { width: 260px; padding: 40px 20px; border-radius: 24px; background: rgba(255,255,255,0.15); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.4); box-shadow: 0 8px 32px rgba(0,0,0,0.15); text-align: center; color: #fff; }
.tm-g-ring { width: 100px; height: 100px; margin: 0 auto 20px; border-radius: 50%; padding: 4px; background: linear-gradient(45deg, #fff, transparent); }
.tm-g-ring img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.tm-gl h3 { margin: 0 0 5px; font-size: 1.3rem; font-weight: 600; }
.tm-gl p { margin: 0 0 25px; color: rgba(255,255,255,0.8); font-size: 0.9rem; }
.tm-gl button { padding: 10px 25px; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.5); color: #fff; border-radius: 20px; font-weight: 600; cursor: pointer; transition: 0.2s; backdrop-filter: blur(5px); }
.tm-gl button:hover { background: #fff; color: #3b82f6; }`,
    jsCode: ``
  },

  // 5. Brutalist Team Card
  {
    _id: "tc5",
    title: "Brutalist Team Card",
    slug: "brutalist-team-card",
    description: "Thick borders, harsh shadows, and bold typography for team members.",
    category: "Team Cards",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["team", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-br">
  <img src="https://i.pravatar.cc/150?img=59" alt="User" />
  <h3>DAVID CHEN</h3>
  <div class="tm-b-role">FOUNDER</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e5e5; }
.tm-br { width: 260px; background: #fff; border: 4px solid #000; box-shadow: 10px 10px 0 #000; padding: 25px; text-align: center; }
.tm-br img { width: 100%; height: 200px; object-fit: cover; border: 4px solid #000; filter: grayscale(100%); margin-bottom: 20px; transition: 0.3s; }
.tm-br:hover img { filter: grayscale(0%); }
.tm-br h3 { margin: 0 0 10px; font-size: 1.6rem; font-weight: 900; color: #000; letter-spacing: -1px; text-transform: uppercase; }
.tm-b-role { display: inline-block; background: #facc15; padding: 5px 15px; border: 3px solid #000; font-weight: 900; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 6. Neumorphic Team Card
  {
    _id: "tc6",
    title: "Neumorphic Team Card",
    slug: "neumorphic-team-card",
    description: "Soft UI design looking physically extruded from the background.",
    category: "Team Cards",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["team", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-neu">
  <div class="tm-n-img"><img src="https://i.pravatar.cc/150?img=28" alt="User" /></div>
  <h3>Marcus Cole</h3>
  <p>Product Designer</p>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.tm-neu { width: 240px; padding: 40px 20px; border-radius: 20px; background: #e0e5ec; box-shadow: 10px 10px 20px rgba(163,177,198,0.6), -10px -10px 20px rgba(255,255,255,0.5); text-align: center; }
.tm-n-img { width: 110px; height: 110px; margin: 0 auto 20px; border-radius: 50%; padding: 6px; background: #e0e5ec; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); }
.tm-n-img img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.tm-neu h3 { margin: 0 0 5px; color: #2d3748; font-size: 1.2rem; }
.tm-neu p { margin: 0; color: #718096; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Team Card
  {
    _id: "tc7",
    title: "Dark Mode Glow Team",
    slug: "dark-mode-glow-team",
    description: "Deep dark card with glowing borders perfect for dark mode sites.",
    category: "Team Cards",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["team", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-dg">
  <div class="tm-d-img"><img src="https://i.pravatar.cc/150?img=11" alt="User" /></div>
  <h3>James Wilson</h3>
  <p>Backend Developer</p>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #020617; }
.tm-dg { width: 250px; padding: 40px 20px; background: #0f172a; border-radius: 20px; border: 1px solid #1e293b; text-align: center; position: relative; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); transition: 0.3s; }
.tm-dg:hover { transform: translateY(-5px); border-color: #3b82f6; box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2); }
.tm-dg::before { content: ''; position: absolute; top: -50px; left: 50%; transform: translateX(-50%); width: 100px; height: 100px; background: #3b82f6; filter: blur(50px); opacity: 0.5; pointer-events: none; }
.tm-d-img { width: 90px; height: 90px; margin: 0 auto 20px; border-radius: 50%; padding: 3px; background: linear-gradient(135deg, #3b82f6, #ec4899); }
.tm-d-img img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; border: 2px solid #0f172a; }
.tm-dg h3 { margin: 0 0 5px; color: #f8fafc; font-size: 1.1rem; }
.tm-dg p { margin: 0; color: #94a3b8; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 8. Minimal Row Team Card
  {
    _id: "tc8",
    title: "Minimal Row Team",
    slug: "minimal-row-team",
    description: "Horizontal layout perfect for lists of staff or board members.",
    category: "Team Cards",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["team", "row", "horizontal", "list"],
    isPremium: false,
    views: 24800,
    downloads: 6500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-row">
  <img src="https://i.pravatar.cc/150?img=68" alt="User" />
  <div class="tm-r-info">
    <h3>Alex Rivera</h3>
    <p>Data Scientist</p>
  </div>
  <a href="#" class="tm-r-btn">→</a>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.tm-row { display: flex; align-items: center; width: 350px; padding: 15px; border: 1px solid #e2e8f0; border-radius: 12px; transition: 0.2s; cursor: pointer; }
.tm-row:hover { border-color: #3b82f6; box-shadow: 0 4px 10px rgba(59, 130, 246, 0.1); }
.tm-row img { width: 60px; height: 60px; border-radius: 10px; object-fit: cover; margin-right: 15px; }
.tm-r-info { flex: 1; }
.tm-r-info h3 { margin: 0 0 5px; color: #0f172a; font-size: 1.05rem; }
.tm-r-info p { margin: 0; color: #64748b; font-size: 0.85rem; }
.tm-r-btn { width: 35px; height: 35px; display: flex; justify-content: center; align-items: center; background: #f1f5f9; color: #334155; border-radius: 50%; text-decoration: none; font-weight: bold; transition: 0.2s; }
.tm-row:hover .tm-r-btn { background: #3b82f6; color: #fff; }`,
    jsCode: ``
  },

  // 9. Shape Shift Team Card
  {
    _id: "tc9",
    title: "Shape Shift Team Card",
    slug: "shape-shift-team-card",
    description: "Image morphs its border-radius on hover for a playful effect.",
    category: "Team Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["team", "animation", "hover", "shape"],
    isPremium: true,
    views: 32200,
    downloads: 8100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-sh">
  <div class="tm-sh-img">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" alt="User" />
  </div>
  <h3>Jane Doe</h3>
  <p>Creative Director</p>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.tm-sh { text-align: center; cursor: pointer; }
.tm-sh-img { width: 180px; height: 180px; margin: 0 auto 20px; overflow: hidden; border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transition: all 0.5s ease-in-out; background: #3b82f6; padding: 5px; }
.tm-sh:hover .tm-sh-img { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: scale(1.05); }
.tm-sh-img img { width: 100%; height: 100%; object-fit: cover; border-radius: inherit; }
.tm-sh h3 { margin: 0 0 5px; color: #0f172a; font-size: 1.3rem; }
.tm-sh p { margin: 0; color: #64748b; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 10. Stacked Polaroids Team Card
  {
    _id: "tc10",
    title: "Stacked Polaroid Team",
    slug: "stacked-polaroid-team",
    description: "Playful design resembling an old polaroid photo pinned to a board.",
    category: "Team Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["team", "polaroid", "playful", "photo"],
    isPremium: false,
    views: 25100,
    downloads: 5800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-pol">
  <img src="https://i.pravatar.cc/300?img=1" alt="User" />
  <div class="tm-p-info">
    <h3>Emma Davis</h3>
    <p>HR Manager</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e2e8f0; }
.tm-pol { width: 240px; padding: 15px 15px 30px; background: #fff; box-shadow: 5px 5px 15px rgba(0,0,0,0.1); transform: rotate(-3deg); transition: 0.3s; cursor: pointer; }
.tm-pol:hover { transform: rotate(0deg) scale(1.05); box-shadow: 10px 10px 25px rgba(0,0,0,0.15); z-index: 10; }
.tm-pol img { width: 100%; height: 210px; object-fit: cover; filter: sepia(0.2) contrast(1.1); margin-bottom: 15px; background: #eee; }
.tm-p-info { text-align: center; font-family: 'Caveat', cursive, sans-serif; }
.tm-p-info h3 { margin: 0 0 2px; color: #000; font-size: 1.5rem; letter-spacing: 1px; }
.tm-p-info p { margin: 0; color: #666; font-size: 1rem; }`,
    jsCode: ``
  }
];
