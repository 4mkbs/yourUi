import { Design } from "./designs-data";

export const BATCH_79_DESIGNS: Design[] = [
  // 1. Classic Grid Team Section
  {
    _id: "tm1",
    title: "Classic Grid Team",
    slug: "classic-grid-team",
    description: "Standard clean grid layout for team members with social links.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["team", "grid", "classic", "profiles"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-cl">
  <div class="tm-header">
    <h2>Meet Our Team</h2>
    <p>The talented people behind our success.</p>
  </div>
  <div class="tm-grid">
    <div class="tm-card">
      <img src="https://i.pravatar.cc/300?u=11" alt="Sarah" />
      <h3>Sarah Jenkins</h3>
      <span>CEO & Founder</span>
      <div class="tm-social">
        <a href="#">TW</a><a href="#">IN</a>
      </div>
    </div>
    <div class="tm-card">
      <img src="https://i.pravatar.cc/300?u=12" alt="David" />
      <h3>David Chen</h3>
      <span>Lead Designer</span>
      <div class="tm-social">
        <a href="#">DR</a><a href="#">IN</a>
      </div>
    </div>
    <div class="tm-card">
      <img src="https://i.pravatar.cc/300?u=13" alt="Elena" />
      <h3>Elena Rodriguez</h3>
      <span>Head of Engineering</span>
      <div class="tm-social">
        <a href="#">GH</a><a href="#">TW</a>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 80px 20px; }
.tm-cl { max-width: 1200px; margin: 0 auto; text-align: center; }
.tm-header h2 { font-size: 2.5rem; color: #0f172a; margin: 0 0 10px; }
.tm-header p { color: #64748b; font-size: 1.1rem; margin: 0 0 50px; }
.tm-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; }
.tm-card { background: #fff; padding: 40px 20px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; transition: transform 0.3s; }
.tm-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.tm-card img { width: 120px; height: 120px; border-radius: 50%; margin-bottom: 20px; object-fit: cover; }
.tm-card h3 { margin: 0 0 5px; color: #0f172a; font-size: 1.2rem; }
.tm-card span { color: #3b82f6; font-size: 0.9rem; font-weight: 500; display: block; margin-bottom: 20px; }
.tm-social { display: flex; justify-content: center; gap: 15px; }
.tm-social a { text-decoration: none; color: #94a3b8; font-size: 0.9rem; font-weight: bold; transition: color 0.2s; }
.tm-social a:hover { color: #0f172a; }`,
    jsCode: ``
  },

  // 2. Minimal Clean Team
  {
    _id: "tm2",
    title: "Minimal Clean Team",
    slug: "minimal-clean-team",
    description: "Ultra-minimal team layout focusing on typography and simple photos.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["team", "minimal", "clean", "simple"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-mn">
  <div class="mn-card">
    <div class="mn-img"><img src="https://i.pravatar.cc/400?u=21" alt="Marcus" /></div>
    <div class="mn-info">
      <h3>Marcus Aurelius</h3>
      <p>Director</p>
    </div>
  </div>
  <div class="mn-card">
    <div class="mn-img"><img src="https://i.pravatar.cc/400?u=22" alt="Julia" /></div>
    <div class="mn-info">
      <h3>Julia Smith</h3>
      <p>Creative Lead</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.tm-mn { display: flex; gap: 60px; max-width: 900px; width: 100%; flex-wrap: wrap; justify-content: center; }
.mn-card { width: 300px; text-align: left; }
.mn-img { width: 100%; aspect-ratio: 4/5; overflow: hidden; margin-bottom: 20px; background: #f4f4f5; }
.mn-img img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: filter 0.5s; }
.mn-card:hover img { filter: grayscale(0%); }
.mn-info h3 { margin: 0 0 5px; font-size: 1.5rem; color: #111; letter-spacing: -0.5px; }
.mn-info p { margin: 0; color: #666; font-size: 1rem; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Team Roster
  {
    _id: "tm3",
    title: "Cyberpunk Team",
    slug: "cyberpunk-team",
    description: "Hacker-themed team roster with neon accents.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["team", "cyberpunk", "terminal", "neon"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-cy">
  <div class="cy-title">OPERATIVES_ONLINE</div>
  <div class="cy-grid">
    <div class="cy-card">
      <div class="cy-img-wrap"><img src="https://i.pravatar.cc/200?u=31" alt="Ghost" /></div>
      <div class="cy-name">GHOST_01</div>
      <div class="cy-role">SYS_ADMIN</div>
    </div>
    <div class="cy-card">
      <div class="cy-img-wrap"><img src="https://i.pravatar.cc/200?u=32" alt="Cipher" /></div>
      <div class="cy-name">CIPHER_99</div>
      <div class="cy-role">NET_RUNNER</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 80px 20px; display: flex; justify-content: center; }
.tm-cy { max-width: 800px; width: 100%; }
.cy-title { color: #0f0; font-size: 2rem; font-weight: bold; border-bottom: 2px dashed #0f0; padding-bottom: 10px; margin-bottom: 40px; text-shadow: 0 0 10px #0f0; letter-spacing: 2px; }
.cy-grid { display: flex; gap: 40px; justify-content: center; flex-wrap: wrap; }
.cy-card { background: rgba(0,20,0,0.8); border: 1px solid #0f0; padding: 20px; text-align: center; width: 200px; position: relative; }
.cy-card::before { content: ''; position: absolute; top: -5px; left: -5px; right: -5px; bottom: -5px; border: 1px solid #0f0; opacity: 0.3; pointer-events: none; }
.cy-img-wrap { width: 120px; height: 120px; margin: 0 auto 20px; border: 2px solid #0f0; overflow: hidden; }
.cy-img-wrap img { width: 100%; height: 100%; object-fit: cover; filter: sepia(100%) hue-rotate(50deg) saturate(300%); }
.cy-name { color: #f0f; font-weight: bold; font-size: 1.2rem; margin-bottom: 5px; text-shadow: 0 0 5px #f0f; }
.cy-role { color: #0aa; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Team Cards
  {
    _id: "tm4",
    title: "Glassmorphism Team",
    slug: "glassmorphism-team",
    description: "Frosted glass team cards hovering over a vibrant background.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["team", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="tm-gl">
    <div class="gl-card">
      <img src="https://i.pravatar.cc/200?u=41" alt="Leo" />
      <h3>Leo Carter</h3>
      <p>Frontend Dev</p>
    </div>
    <div class="gl-card">
      <img src="https://i.pravatar.cc/200?u=42" alt="Mia" />
      <h3>Mia Wong</h3>
      <p>UI Designer</p>
    </div>
    <div class="gl-card">
      <img src="https://i.pravatar.cc/200?u=43" alt="Sam" />
      <h3>Sam Rivers</h3>
      <p>Backend Dev</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.tm-gl { display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; max-width: 1000px; width: 100%; }
.gl-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 40px 20px; text-align: center; width: 250px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); color: #fff; transition: 0.3s; }
.gl-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.5); }
.gl-card img { width: 100px; height: 100px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.5); margin-bottom: 20px; object-fit: cover; }
.gl-card h3 { margin: 0 0 5px; font-size: 1.3rem; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.gl-card p { margin: 0; opacity: 0.8; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 5. Brutalist Team Layout
  {
    _id: "tm5",
    title: "Brutalist Team",
    slug: "brutalist-team",
    description: "Loud, high-contrast brutalist team layout.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["team", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-br">
  <h2>THE SQUAD</h2>
  <div class="br-grid">
    <div class="br-card">
      <img src="https://i.pravatar.cc/300?u=51" alt="Boss" />
      <div class="br-info">
        <h3>BIG BOSS</h3>
        <span>CEO</span>
      </div>
    </div>
    <div class="br-card">
      <img src="https://i.pravatar.cc/300?u=52" alt="Coder" />
      <div class="br-info">
        <h3>CODE MONKEY</h3>
        <span>DEV</span>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.tm-br { max-width: 900px; width: 100%; }
.tm-br h2 { font-size: 5rem; font-weight: 900; margin: 0 0 40px; text-transform: uppercase; letter-spacing: -2px; border-bottom: 8px solid #000; line-height: 1; }
.br-grid { display: flex; gap: 40px; flex-wrap: wrap; }
.br-card { flex: 1; min-width: 300px; background: #facc15; border: 6px solid #000; box-shadow: 12px 12px 0 #000; display: flex; flex-direction: column; }
.br-card img { width: 100%; aspect-ratio: 1; object-fit: cover; border-bottom: 6px solid #000; filter: contrast(150%) grayscale(100%); transition: 0.2s; }
.br-card:hover img { filter: none; }
.br-info { padding: 20px; text-align: center; }
.br-info h3 { font-size: 2rem; font-weight: 900; margin: 0 0 5px; }
.br-info span { font-size: 1.2rem; font-weight: 700; background: #000; color: #fff; padding: 5px 10px; display: inline-block; }`,
    jsCode: ``
  },

  // 6. Neumorphic Team Profile
  {
    _id: "tm6",
    title: "Neumorphic Team",
    slug: "neumorphic-team",
    description: "Soft UI design with inset and extruded team profiles.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["team", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-neu">
  <div class="neu-card">
    <div class="neu-img"><img src="https://i.pravatar.cc/200?u=61" alt="Tom" /></div>
    <h3>Tom Hardy</h3>
    <p>Product Manager</p>
  </div>
  <div class="neu-card">
    <div class="neu-img"><img src="https://i.pravatar.cc/200?u=62" alt="Ann" /></div>
    <h3>Ann Hathaway</h3>
    <p>Marketing</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.tm-neu { display: flex; gap: 50px; flex-wrap: wrap; justify-content: center; max-width: 900px; width: 100%; }
.neu-card { background: #e0e5ec; padding: 40px; border-radius: 30px; box-shadow: 20px 20px 40px rgba(163,177,198,0.6), -20px -20px 40px rgba(255,255,255,0.5); width: 280px; text-align: center; }
.neu-img { width: 120px; height: 120px; margin: 0 auto 20px; border-radius: 50%; padding: 10px; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); }
.neu-img img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.neu-card h3 { color: #2d3748; font-size: 1.5rem; margin: 0 0 10px; }
.neu-card p { color: #718096; margin: 0; font-weight: 500; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Team
  {
    _id: "tm7",
    title: "Dark Mode Glow Team",
    slug: "dark-mode-glow-team",
    description: "Deep dark layout with glowing neon borders for team members.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["team", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-dg">
  <div class="dg-card">
    <div class="dg-img-wrap"><img src="https://i.pravatar.cc/300?u=71" alt="Eve" /></div>
    <h3>Eve Carter</h3>
    <span>Lead Engineer</span>
  </div>
  <div class="dg-card">
    <div class="dg-img-wrap"><img src="https://i.pravatar.cc/300?u=72" alt="Dan" /></div>
    <h3>Dan Miller</h3>
    <span>DevOps</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.tm-dg { display: flex; gap: 40px; flex-wrap: wrap; justify-content: center; max-width: 900px; width: 100%; }
.dg-card { background: #0f172a; border-radius: 20px; padding: 30px; width: 280px; text-align: center; border: 1px solid #1e293b; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: 0.3s; position: relative; overflow: hidden; }
.dg-card:hover { border-color: #8b5cf6; box-shadow: 0 10px 40px rgba(139,92,246,0.2); transform: translateY(-5px); }
.dg-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #3b82f6, #8b5cf6); opacity: 0; transition: 0.3s; }
.dg-card:hover::before { opacity: 1; }
.dg-img-wrap { width: 100px; height: 100px; margin: 0 auto 20px; border-radius: 50%; padding: 4px; background: linear-gradient(135deg, #1e293b, #334155); }
.dg-img-wrap img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.dg-card h3 { color: #f8fafc; font-size: 1.3rem; margin: 0 0 5px; }
.dg-card span { color: #8b5cf6; font-size: 0.9rem; font-weight: 500; }`,
    jsCode: ``
  },

  // 8. Horizontal List Layout
  {
    _id: "tm8",
    title: "Horizontal List Team",
    slug: "horizontal-list-team",
    description: "Compact horizontal row layout perfect for minimal about pages.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["team", "horizontal", "list", "clean"],
    isPremium: false,
    views: 39500,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-hz">
  <h2>Leadership</h2>
  <div class="hz-row">
    <img src="https://i.pravatar.cc/150?u=81" alt="CEO" />
    <div class="hz-info">
      <h3>Jonathan Reed</h3>
      <p>Chief Executive Officer</p>
    </div>
  </div>
  <div class="hz-row">
    <img src="https://i.pravatar.cc/150?u=82" alt="CTO" />
    <div class="hz-info">
      <h3>Amanda Pierce</h3>
      <p>Chief Technology Officer</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.tm-hz { max-width: 600px; width: 100%; background: #fff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
.tm-hz h2 { color: #0f172a; margin: 0 0 30px; font-size: 1.8rem; }
.hz-row { display: flex; align-items: center; gap: 20px; padding: 20px 0; border-bottom: 1px solid #e2e8f0; }
.hz-row:last-child { border-bottom: none; padding-bottom: 0; }
.hz-row img { width: 70px; height: 70px; border-radius: 50%; object-fit: cover; }
.hz-info h3 { margin: 0 0 5px; color: #0f172a; font-size: 1.2rem; }
.hz-info p { margin: 0; color: #64748b; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 9. Floating Cards Design
  {
    _id: "tm9",
    title: "Floating Cards Team",
    slug: "floating-cards-team",
    description: "Creative overlapping layout for a dynamic team presentation.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["team", "floating", "overlap", "creative"],
    isPremium: true,
    views: 40200,
    downloads: 11200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-fc">
  <div class="fc-card" style="margin-top: 0;">
    <img src="https://i.pravatar.cc/300?u=91" alt="Designer" />
    <div class="fc-text">
      <h3>Design</h3>
      <p>Jane Doe</p>
    </div>
  </div>
  <div class="fc-card" style="margin-top: 60px;">
    <img src="https://i.pravatar.cc/300?u=92" alt="Developer" />
    <div class="fc-text">
      <h3>Engineering</h3>
      <p>John Smith</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; padding: 100px 20px; display: flex; justify-content: center; }
.tm-fc { display: flex; gap: 30px; max-width: 800px; width: 100%; justify-content: center; }
.fc-card { width: 280px; height: 380px; position: relative; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.fc-card:hover { transform: translateY(-20px) scale(1.02); box-shadow: 0 30px 50px rgba(0,0,0,0.15); z-index: 10; }
.fc-card img { width: 100%; height: 100%; object-fit: cover; }
.fc-text { position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); padding: 20px; border-radius: 12px; text-align: center; }
.fc-text h3 { margin: 0 0 5px; color: #3b82f6; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }
.fc-text p { margin: 0; color: #0f172a; font-size: 1.3rem; font-weight: bold; }
@media (max-width: 768px) { .tm-fc { flex-direction: column; align-items: center; gap: 40px; } .fc-card { margin-top: 0 !important; } }`,
    jsCode: ``
  },

  // 10. Abstract Grid Team
  {
    _id: "tm10",
    title: "Abstract Grid Team",
    slug: "abstract-grid-team",
    description: "Masonry or bento-box inspired layout for team members.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["team", "grid", "bento", "abstract"],
    isPremium: false,
    views: 37500,
    downloads: 9800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-ab">
  <div class="ab-item ab-large">
    <img src="https://i.pravatar.cc/400?u=101" alt="Lead" />
    <div class="ab-content">
      <h3>Director</h3>
      <p>Alice V.</p>
    </div>
  </div>
  <div class="ab-item">
    <img src="https://i.pravatar.cc/300?u=102" alt="Member" />
    <div class="ab-content">
      <h3>Lead Dev</h3>
      <p>Bob M.</p>
    </div>
  </div>
  <div class="ab-item">
    <img src="https://i.pravatar.cc/300?u=103" alt="Member" />
    <div class="ab-content">
      <h3>UI UX</h3>
      <p>Cara T.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.tm-ab { display: grid; grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; gap: 20px; max-width: 800px; width: 100%; }
.ab-item { position: relative; border-radius: 16px; overflow: hidden; background: #f8fafc; }
.ab-large { grid-row: span 2; }
.ab-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.ab-item:hover img { transform: scale(1.1); }
.ab-item::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%); pointer-events: none; }
.ab-content { position: absolute; bottom: 20px; left: 20px; z-index: 1; color: #fff; }
.ab-content h3 { margin: 0 0 5px; font-size: 0.9rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; }
.ab-content p { margin: 0; font-size: 1.5rem; font-weight: bold; }
@media (max-width: 600px) { .tm-ab { grid-template-columns: 1fr; } .ab-large { grid-row: span 1; } }`,
    jsCode: ``
  }
];
