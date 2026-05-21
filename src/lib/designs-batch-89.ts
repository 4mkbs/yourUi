import { Design } from "./designs-data";

export const BATCH_89_DESIGNS: Design[] = [
  // 1. Classic Profile Card
  {
    _id: "up1",
    title: "Classic Profile Card",
    slug: "classic-profile-card",
    description: "Standard layout featuring a cover image, avatar, bio, and action buttons.",
    category: "User Profiles",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["profile", "card", "classic", "avatar"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="up-cl">
  <div class="cl-cover"></div>
  <div class="cl-body">
    <div class="cl-avatar">JD</div>
    <div class="cl-actions">
      <button class="cl-btn">Message</button>
      <button class="cl-btn cl-primary">Follow</button>
    </div>
    <h3 class="cl-name">Jane Doe</h3>
    <span class="cl-handle">@janedoe</span>
    <p class="cl-bio">Senior Product Designer focusing on accessibility and design systems. Building the future of the web.</p>
    <div class="cl-stats">
      <div><strong>142</strong> Following</div>
      <div><strong>12.5k</strong> Followers</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 100px 20px; display: flex; justify-content: center; }
.up-cl { background: #fff; width: 100%; max-width: 400px; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.cl-cover { height: 120px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); }
.cl-body { padding: 0 25px 25px; position: relative; }
.cl-avatar { width: 90px; height: 90px; background: #fff; color: #0f172a; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 2rem; font-weight: bold; border: 4px solid #fff; position: absolute; top: -45px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.cl-actions { display: flex; justify-content: flex-end; gap: 10px; padding-top: 15px; margin-bottom: 20px; }
.cl-btn { padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: 0.2s; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; }
.cl-btn:hover { background: #f8fafc; }
.cl-primary { background: #0f172a; color: #fff; border-color: #0f172a; }
.cl-primary:hover { background: #334155; border-color: #334155; }
.cl-name { margin: 0; font-size: 1.5rem; color: #0f172a; }
.cl-handle { color: #64748b; font-size: 0.95rem; display: block; margin-bottom: 15px; }
.cl-bio { color: #475569; line-height: 1.5; margin: 0 0 20px; font-size: 0.95rem; }
.cl-stats { display: flex; gap: 20px; color: #64748b; font-size: 0.9rem; border-top: 1px solid #f1f5f9; padding-top: 20px; }
.cl-stats strong { color: #0f172a; }`,
    jsCode: ``
  },

  // 2. Minimal Clean Profile
  {
    _id: "up2",
    title: "Minimal Clean Profile",
    slug: "minimal-clean-profile",
    description: "Stripped back profile with typography focus and minimal visual noise.",
    category: "User Profiles",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["profile", "minimal", "clean", "typography"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="up-mn">
  <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&q=80" alt="Avatar" class="mn-avatar" />
  <h2>Alex Rivera</h2>
  <p>Creative Developer & Typographer</p>
  <div class="mn-links">
    <a href="#">Projects</a>
    <a href="#">Articles</a>
    <a href="#">Contact</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; align-items: center; min-height: 50vh; }
.up-mn { max-width: 400px; width: 100%; text-align: center; }
.mn-avatar { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 20px; filter: grayscale(100%); }
.up-mn h2 { font-size: 2.2rem; font-weight: 300; color: #000; margin: 0 0 5px; letter-spacing: -1px; }
.up-mn p { color: #666; font-size: 1.1rem; margin: 0 0 30px; font-weight: 500; }
.mn-links { display: flex; justify-content: center; gap: 20px; }
.mn-links a { color: #000; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; border-bottom: 2px solid transparent; padding-bottom: 5px; transition: 0.2s; }
.mn-links a:hover { border-bottom-color: #000; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Profile
  {
    _id: "up3",
    title: "Cyberpunk Terminal Profile",
    slug: "cyberpunk-terminal-profile",
    description: "Hacker-themed profile with neon accents and terminal statistics.",
    category: "User Profiles",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["profile", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="up-cy">
  <div class="cy-head">USER_PROFILE // ID: 8492-X</div>
  <div class="cy-body">
    <div class="cy-avatar"></div>
    <div class="cy-info">
      <h3>HANDLE: ZERO_COOL</h3>
      <p>CLASS: NETRUNNER<br/>STATUS: ONLINE</p>
      <div class="cy-stats">
        <span>REP: 994</span>
        <span>CREDITS: 4.2M</span>
      </div>
      <button class="cy-btn">INITIATE UPLINK</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; }
.up-cy { width: 100%; max-width: 500px; border: 2px solid #0f0; background: rgba(0,20,0,0.8); padding: 20px; box-shadow: 0 0 20px rgba(0,255,0,0.1); }
.cy-head { color: #0f0; border-bottom: 1px dashed #0f0; padding-bottom: 10px; margin-bottom: 20px; font-weight: bold; }
.cy-body { display: flex; gap: 20px; align-items: center; }
.cy-avatar { width: 100px; height: 100px; border: 2px solid #0f0; background: repeating-linear-gradient(45deg, #020 0, #020 10px, #050 10px, #050 20px); }
.cy-info { flex: 1; }
.cy-info h3 { color: #0f0; margin: 0 0 10px; font-size: 1.2rem; }
.cy-info p { color: #0aa; margin: 0 0 15px; line-height: 1.4; }
.cy-stats { display: flex; gap: 15px; color: #f0f; font-weight: bold; margin-bottom: 15px; font-size: 0.9rem; }
.cy-btn { background: transparent; color: #0f0; border: 1px solid #0f0; padding: 5px 15px; font-family: inherit; cursor: pointer; transition: 0.2s; font-weight: bold; }
.cy-btn:hover { background: #0f0; color: #000; box-shadow: 0 0 10px #0f0; }
@media (max-width: 500px) { .cy-body { flex-direction: column; text-align: center; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Profile
  {
    _id: "up4",
    title: "Glassmorphism Profile Card",
    slug: "glassmorphism-profile-card",
    description: "Frosted glass profile hovering over a dynamic gradient background.",
    category: "User Profiles",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["profile", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="up-gl">
    <div class="gl-avatar"></div>
    <h3>Elena Rostova</h3>
    <span>Lead Visual Artist</span>
    <div class="gl-actions">
      <button>Portfolio</button>
      <button class="gl-active">Hire Me</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.up-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 40px; width: 100%; max-width: 350px; text-align: center; color: #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.gl-avatar { width: 100px; height: 100px; border-radius: 50%; background: rgba(255,255,255,0.2); margin: 0 auto 20px; border: 2px solid rgba(255,255,255,0.5); }
.up-gl h3 { margin: 0 0 5px; font-size: 1.5rem; font-weight: 600; }
.up-gl span { font-size: 0.95rem; opacity: 0.8; margin-bottom: 30px; display: block; }
.gl-actions { display: flex; gap: 10px; justify-content: center; }
.gl-actions button { flex: 1; padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.3); background: transparent; color: #fff; font-weight: 600; cursor: pointer; transition: 0.2s; }
.gl-actions button:hover { background: rgba(255,255,255,0.1); }
.gl-actions .gl-active { background: #fff; color: #8b5cf6; border: none; }
.gl-actions .gl-active:hover { background: #f8fafc; }`,
    jsCode: ``
  },

  // 5. Brutalist Profile
  {
    _id: "up5",
    title: "Brutalist Profile Block",
    slug: "brutalist-profile-block",
    description: "High contrast, structural design with aggressive typography.",
    category: "User Profiles",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["profile", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="up-br">
  <div class="br-head">USER_01</div>
  <div class="br-img"></div>
  <h2>CHRIS<br/>P. BACON</h2>
  <a href="#" class="br-btn">VIEW STATS -></a>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.up-br { background: #fff; border: 8px solid #000; box-shadow: 15px 15px 0 #000; width: 100%; max-width: 350px; display: flex; flex-direction: column; }
.br-head { background: #000; color: #fff; font-weight: 900; padding: 10px; font-size: 1.2rem; border-bottom: 8px solid #000; }
.br-img { height: 250px; background: #facc15; border-bottom: 8px solid #000; }
.up-br h2 { margin: 0; padding: 20px; font-size: 3rem; font-weight: 900; line-height: 0.9; text-transform: uppercase; }
.br-btn { background: #000; color: #fff; text-decoration: none; font-weight: 900; font-size: 1.5rem; padding: 20px; text-align: center; transition: 0.1s; }
.br-btn:hover { background: #facc15; color: #000; }`,
    jsCode: ``
  },

  // 6. Neumorphic Profile
  {
    _id: "up6",
    title: "Neumorphic User Profile",
    slug: "neumorphic-user-profile",
    description: "Soft UI embossed profile card with pressed action buttons.",
    category: "User Profiles",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["profile", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="up-neu">
  <div class="neu-avatar"></div>
  <h2>David Chen</h2>
  <p>UI/UX Designer</p>
  <div class="neu-actions">
    <button class="neu-btn">Follow</button>
    <button class="neu-btn neu-pressed">Message</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.up-neu { background: #e0e5ec; padding: 40px; border-radius: 30px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); width: 100%; max-width: 350px; text-align: center; }
.neu-avatar { width: 120px; height: 120px; border-radius: 50%; margin: 0 auto 20px; background: #e0e5ec; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); }
.up-neu h2 { margin: 0 0 5px; color: #4a5568; font-size: 1.8rem; }
.up-neu p { margin: 0 0 30px; color: #718096; font-size: 1rem; }
.neu-actions { display: flex; gap: 20px; justify-content: center; }
.neu-btn { flex: 1; border: none; padding: 15px; border-radius: 15px; font-weight: bold; color: #718096; cursor: pointer; transition: 0.2s; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); }
.neu-btn:active, .neu-pressed { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); color: #4a5568; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Profile
  {
    _id: "up7",
    title: "Dark Glow Profile",
    slug: "dark-glow-profile",
    description: "Deep dark UI card with glowing neon avatar rings.",
    category: "User Profiles",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["profile", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="up-dg">
  <div class="dg-avatar"></div>
  <h2>Marcus Wright</h2>
  <span class="dg-role">Security Researcher</span>
  <div class="dg-stats">
    <div><strong>4.2k</strong> Rep</div>
    <div><strong>12</strong> Bounties</div>
  </div>
  <button class="dg-btn">Connect</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.up-dg { background: #0f172a; border: 1px solid #1e293b; border-radius: 20px; padding: 40px; width: 100%; max-width: 350px; text-align: center; position: relative; overflow: hidden; }
.up-dg::before { content: ''; position: absolute; top: -50px; left: -50px; width: 150px; height: 150px; background: rgba(59,130,246,0.2); filter: blur(40px); border-radius: 50%; pointer-events: none; }
.dg-avatar { width: 100px; height: 100px; border-radius: 50%; background: #1e293b; margin: 0 auto 20px; border: 2px solid #3b82f6; box-shadow: 0 0 20px rgba(59,130,246,0.4); position: relative; z-index: 1; }
.up-dg h2 { margin: 0 0 5px; color: #f8fafc; font-size: 1.5rem; position: relative; z-index: 1; }
.dg-role { color: #8b5cf6; font-weight: 500; font-size: 0.95rem; display: block; margin-bottom: 25px; position: relative; z-index: 1; }
.dg-stats { display: flex; justify-content: center; gap: 30px; margin-bottom: 30px; color: #94a3b8; font-size: 0.9rem; position: relative; z-index: 1; }
.dg-stats strong { display: block; color: #f8fafc; font-size: 1.2rem; margin-bottom: 5px; }
.dg-btn { background: transparent; border: 1px solid #3b82f6; color: #3b82f6; width: 100%; padding: 12px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.3s; position: relative; z-index: 1; }
.dg-btn:hover { background: #3b82f6; color: #fff; box-shadow: 0 0 15px rgba(59,130,246,0.5); }`,
    jsCode: ``
  },

  // 8. Horizontal Profile Row
  {
    _id: "up8",
    title: "Horizontal Profile Row",
    slug: "horizontal-profile-row",
    description: "Compact horizontal layout perfect for lists or directories.",
    category: "User Profiles",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["profile", "horizontal", "list", "compact"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="up-hr">
  <div class="hr-left">
    <div class="hr-avatar"></div>
    <div class="hr-info">
      <h4>Samantha Lee</h4>
      <span>Marketing Director</span>
    </div>
  </div>
  <div class="hr-right">
    <button>View Profile</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.up-hr { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; width: 100%; max-width: 600px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
.hr-left { display: flex; align-items: center; gap: 15px; }
.hr-avatar { width: 50px; height: 50px; background: #cbd5e1; border-radius: 50%; }
.hr-info h4 { margin: 0 0 5px; color: #0f172a; font-size: 1.1rem; }
.hr-info span { color: #64748b; font-size: 0.9rem; }
.hr-right button { padding: 8px 16px; border: 1px solid #cbd5e1; background: #fff; color: #0f172a; border-radius: 6px; font-weight: 500; cursor: pointer; transition: 0.2s; }
.hr-right button:hover { background: #f1f5f9; border-color: #94a3b8; }
@media (max-width: 400px) { .up-hr { flex-direction: column; gap: 20px; text-align: center; } .hr-left { flex-direction: column; } }`,
    jsCode: ``
  },

  // 9. Stats Focused Profile
  {
    _id: "up9",
    title: "Stats Focused Profile",
    slug: "stats-focused-profile",
    description: "Profile prioritizing a dashboard of user statistics.",
    category: "User Profiles",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["profile", "stats", "dashboard", "clean"],
    isPremium: false,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="up-sf">
  <div class="sf-head">
    <div class="sf-avatar"></div>
    <div class="sf-info">
      <h2>Thomas King</h2>
      <span>Level 42 Developer</span>
    </div>
  </div>
  <div class="sf-grid">
    <div class="sf-stat">
      <strong>14k</strong>
      <span>Commits</span>
    </div>
    <div class="sf-stat">
      <strong>38</strong>
      <span>Projects</span>
    </div>
    <div class="sf-stat">
      <strong>4.9</strong>
      <span>Rating</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; padding: 100px 20px; display: flex; justify-content: center; }
.up-sf { background: #fff; border-radius: 16px; padding: 30px; width: 100%; max-width: 400px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
.sf-head { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px; }
.sf-avatar { width: 70px; height: 70px; background: #3b82f6; border-radius: 16px; }
.sf-info h2 { margin: 0 0 5px; font-size: 1.4rem; color: #0f172a; }
.sf-info span { color: #64748b; font-size: 0.95rem; }
.sf-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
.sf-stat { background: #f8fafc; padding: 15px; border-radius: 12px; text-align: center; }
.sf-stat strong { display: block; font-size: 1.3rem; color: #0f172a; margin-bottom: 5px; }
.sf-stat span { color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 10. Social Profile
  {
    _id: "up10",
    title: "Social Media Profile",
    slug: "social-media-profile",
    description: "Standard social app profile with follow metrics and image grid.",
    category: "User Profiles",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["profile", "social", "grid", "clean"],
    isPremium: true,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="up-soc">
  <div class="soc-top">
    <div class="soc-avatar"></div>
    <div class="soc-metrics">
      <div class="soc-m"><strong>128</strong><span>Posts</span></div>
      <div class="soc-m"><strong>14k</strong><span>Followers</span></div>
      <div class="soc-m"><strong>420</strong><span>Following</span></div>
    </div>
  </div>
  <div class="soc-bio">
    <strong>Photographer</strong>
    <p>Capturing the beauty of everyday life. Based in NYC. 📸</p>
  </div>
  <button class="soc-btn">Follow</button>
  <div class="soc-grid">
    <div></div><div></div><div></div>
    <div></div><div></div><div></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.up-soc { width: 100%; max-width: 400px; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; }
.soc-top { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 20px; }
.soc-avatar { width: 80px; height: 80px; border-radius: 50%; background: #e2e8f0; }
.soc-metrics { display: flex; gap: 20px; flex: 1; justify-content: center; }
.soc-m { text-align: center; }
.soc-m strong { display: block; font-size: 1.1rem; color: #0f172a; }
.soc-m span { color: #64748b; font-size: 0.85rem; }
.soc-bio { margin-bottom: 20px; }
.soc-bio strong { color: #0f172a; display: block; margin-bottom: 5px; }
.soc-bio p { margin: 0; color: #475569; font-size: 0.95rem; line-height: 1.4; }
.soc-btn { width: 100%; background: #3b82f6; color: #fff; border: none; padding: 10px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-bottom: 20px; }
.soc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; }
.soc-grid div { aspect-ratio: 1; background: #f1f5f9; border-radius: 4px; }`,
    jsCode: ``
  }
];
