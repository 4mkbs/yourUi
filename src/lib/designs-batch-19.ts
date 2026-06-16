import { Design } from "./designs-data";

export const BATCH_19_DESIGNS: Design[] = [
  // 1. Hover-Reveal Team Cards
  {
    _id: "ts1",
    title: "Hover-Reveal Team",
    slug: "hover-reveal-team",
    description: "Elegant team cards that slide up to reveal social links and bios on hover.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    tags: ["team", "hover", "cards", "modern"],
    isPremium: false,
    views: 11200,
    downloads: 3400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="hr-team-sec">
  <div class="hr-container">
    <div class="hr-header">
      <h2>Meet the Makers</h2>
      <p>The passionate individuals behind our platform.</p>
    </div>
    <div class="hr-grid">
      <div class="hr-card">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Team Member">
        <div class="hr-info">
          <h3>Sarah Jenkins</h3>
          <span>CEO & Founder</span>
          <div class="hr-socials">
            <a href="#">TW</a>
            <a href="#">LI</a>
            <a href="#">GH</a>
          </div>
        </div>
      </div>
      <div class="hr-card">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Team Member">
        <div class="hr-info">
          <h3>David Chen</h3>
          <span>Lead Engineer</span>
          <div class="hr-socials">
            <a href="#">TW</a>
            <a href="#">LI</a>
            <a href="#">GH</a>
          </div>
        </div>
      </div>
      <div class="hr-card">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Team Member">
        <div class="hr-info">
          <h3>Elena Rodriguez</h3>
          <span>Head of Design</span>
          <div class="hr-socials">
            <a href="#">TW</a>
            <a href="#">LI</a>
            <a href="#">DB</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f9fafb; }
.hr-team-sec { padding: 5rem 2rem; }
.hr-container { max-width: 1000px; margin: 0 auto; }
.hr-header { text-align: center; margin-bottom: 4rem; }
.hr-header h2 { font-size: 2.5rem; margin: 0 0 10px 0; color: #111827; }
.hr-header p { font-size: 1.1rem; color: #6b7280; }
.hr-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.hr-card { position: relative; border-radius: 16px; overflow: hidden; background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.hr-card img { width: 100%; height: 350px; object-fit: cover; display: block; transition: 0.5s; }
.hr-card:hover img { transform: scale(1.05); }
.hr-info { position: absolute; bottom: -50px; left: 0; width: 100%; background: rgba(255,255,255,0.95); backdrop-filter: blur(5px); padding: 20px; box-sizing: border-box; transition: 0.3s; text-align: center; }
.hr-card:hover .hr-info { bottom: 0; }
.hr-info h3 { margin: 0 0 5px 0; color: #111827; font-size: 1.2rem; }
.hr-info span { color: #3b82f6; font-size: 0.9rem; font-weight: bold; }
.hr-socials { display: flex; justify-content: center; gap: 15px; margin-top: 15px; opacity: 0; transition: 0.3s; transition-delay: 0.1s; }
.hr-card:hover .hr-socials { opacity: 1; }
.hr-socials a { color: #4b5563; text-decoration: none; font-size: 0.85rem; font-weight: bold; }
.hr-socials a:hover { color: #111827; }`,
    jsCode: ``
  },

  // 2. Minimalist Circular Avatars
  {
    _id: "ts2",
    title: "Minimalist Circular Team",
    slug: "minimalist-circular-team",
    description: "A super clean, text-heavy layout with small circular avatars.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["team", "minimalist", "clean", "avatars"],
    isPremium: false,
    views: 9500,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="min-team-sec">
  <div class="min-container">
    <div class="min-title-area">
      <h2>Leadership</h2>
      <p>Decades of experience across design, engineering, and business operations.</p>
    </div>
    <div class="min-grid">
      <div class="min-member">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80" alt="Avatar">
        <div>
          <h3>Alex Mercer</h3>
          <span>Chief Executive Officer</span>
        </div>
      </div>
      <div class="min-member">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80" alt="Avatar">
        <div>
          <h3>Jordan Lee</h3>
          <span>Chief Technology Officer</span>
        </div>
      </div>
      <div class="min-member">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80" alt="Avatar">
        <div>
          <h3>Sam Taylor</h3>
          <span>Chief Design Officer</span>
        </div>
      </div>
      <div class="min-member">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" alt="Avatar">
        <div>
          <h3>Casey Smith</h3>
          <span>VP of Engineering</span>
        </div>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; }
.min-team-sec { padding: 6rem 2rem; }
.min-container { max-width: 1000px; margin: 0 auto; display: flex; gap: 4rem; }
.min-title-area { flex: 1; }
.min-title-area h2 { font-size: 2.5rem; margin: 0 0 1rem 0; color: #111; }
.min-title-area p { font-size: 1.1rem; color: #555; line-height: 1.6; }
.min-grid { flex: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.min-member { display: flex; align-items: center; gap: 20px; }
.min-member img { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; filter: grayscale(100%); transition: 0.3s; }
.min-member:hover img { filter: grayscale(0%); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.min-member h3 { margin: 0 0 5px 0; font-size: 1.2rem; color: #111; }
.min-member span { font-size: 0.95rem; color: #777; }
@media (max-width: 768px) { .min-container { flex-direction: column; } .min-grid { grid-template-columns: 1fr; } }`,
    jsCode: ``
  },

  // 3. Brutalist Team Grid
  {
    _id: "ts3",
    title: "Brutalist Team Grid",
    slug: "brutalist-team-grid",
    description: "Bold borders, duotone filters, and massive typography for a raw team look.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["team", "brutalist", "loud", "typography"],
    isPremium: true,
    views: 8900,
    downloads: 2600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="brutal-team-sec">
  <h2 class="bt-title">THE CREW.</h2>
  <div class="bt-grid">
    <div class="bt-card">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Team">
      <div class="bt-info">
        <h3>J. DOE</h3>
        <p>DIRECTOR</p>
      </div>
    </div>
    <div class="bt-card">
      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Team">
      <div class="bt-info">
        <h3>M. SMITH</h3>
        <p>HACKER</p>
      </div>
    </div>
    <div class="bt-card">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Team">
      <div class="bt-info">
        <h3>A. LEE</h3>
        <p>CREATOR</p>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.brutal-team-sec { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
.bt-title { font-size: 5rem; font-weight: 900; margin: 0 0 2rem 0; letter-spacing: -2px; text-transform: uppercase; border-bottom: 8px solid #000; padding-bottom: 1rem; }
.bt-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.bt-card { border: 6px solid #000; background: #fff; box-shadow: 12px 12px 0 #000; transition: 0.1s; position: relative; overflow: hidden; }
.bt-card:hover { transform: translate(-4px, -4px); box-shadow: 16px 16px 0 #000; }
.bt-card img { width: 100%; height: 300px; object-fit: cover; filter: contrast(150%) grayscale(100%); border-bottom: 6px solid #000; display: block; }
.bt-card:hover img { filter: contrast(120%) grayscale(0%); }
.bt-info { padding: 1.5rem; background: #facc15; }
.bt-info h3 { margin: 0 0 5px 0; font-size: 2rem; font-weight: 900; text-transform: uppercase; }
.bt-info p { margin: 0; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; }
@media (max-width: 768px) { .bt-title { font-size: 3.5rem; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Team Section
  {
    _id: "ts4",
    title: "Glassmorphism Team",
    slug: "glassmorphism-team",
    description: "Frosted glass cards over a moving gradient for a highly premium, modern look.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["team", "glassmorphism", "gradient", "premium"],
    isPremium: true,
    views: 14100,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="glass-team-sec">
  <div class="gt-container">
    <h2>Our Team</h2>
    <div class="gt-grid">
      <div class="gt-card">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" alt="Team">
        <h3>Sophie Turner</h3>
        <p>Lead UI Designer</p>
      </div>
      <div class="gt-card">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" alt="Team">
        <h3>James Bond</h3>
        <p>Security Expert</p>
      </div>
      <div class="gt-card">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt="Team">
        <h3>Mia Wong</h3>
        <p>Frontend Engineer</p>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.glass-team-sec { min-height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899); background-size: 200% 200%; animation: gtBg 10s ease infinite; padding: 4rem 2rem; box-sizing: border-box; }
@keyframes gtBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gt-container { max-width: 1000px; margin: 0 auto; width: 100%; text-align: center; }
.gt-container h2 { color: #fff; font-size: 3rem; margin: 0 0 3rem 0; text-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.gt-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
.gt-card { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; padding: 2.5rem; color: #fff; transition: 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.1); display: flex; flex-direction: column; align-items: center; }
.gt-card:hover { transform: translateY(-10px); background: rgba(255, 255, 255, 0.25); }
.gt-card img { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 4px solid rgba(255,255,255,0.4); margin-bottom: 1.5rem; transition: 0.3s; }
.gt-card:hover img { border-color: rgba(255,255,255,0.8); }
.gt-card h3 { font-size: 1.4rem; margin: 0 0 10px 0; font-weight: bold; }
.gt-card p { font-size: 1rem; color: rgba(255,255,255,0.8); margin: 0; }`,
    jsCode: ``
  },

  // 5. Cyberpunk Roster
  {
    _id: "ts5",
    title: "Cyberpunk Roster",
    slug: "cyberpunk-team-roster",
    description: "A dark, neon-lit grid showing team members as digital operatives.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["team", "cyberpunk", "neon", "dark"],
    isPremium: true,
    views: 10800,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="cyber-team-sec">
  <div class="cy-team-container">
    <h2 class="cy-t-title">OPERATIVES_</h2>
    <div class="cy-t-grid">
      <div class="cy-t-card">
        <div class="cy-img-wrap"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" alt="Op"></div>
        <div class="cy-t-info">
          <h3>[GHOST]</h3>
          <p>SYSADMIN</p>
        </div>
      </div>
      <div class="cy-t-card">
        <div class="cy-img-wrap"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" alt="Op"></div>
        <div class="cy-t-info">
          <h3>[VIPER]</h3>
          <p>SEC_OPS</p>
        </div>
      </div>
      <div class="cy-t-card">
        <div class="cy-img-wrap"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" alt="Op"></div>
        <div class="cy-t-info">
          <h3>[NOVA]</h3>
          <p>NET_WEAVER</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; color: #fff; }
.cyber-team-sec { padding: 6rem 2rem; }
.cy-team-container { max-width: 1000px; margin: 0 auto; }
.cy-t-title { text-align: center; color: #f0f; font-size: 2.5rem; letter-spacing: 5px; text-shadow: 0 0 10px #f0f; margin-bottom: 4rem; }
.cy-t-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.cy-t-card { background: #0a0a0a; border: 1px solid #333; position: relative; transition: 0.3s; padding: 20px; }
.cy-t-card:hover { border-color: #0ff; box-shadow: inset 0 0 20px rgba(0,255,255,0.1), 0 0 20px rgba(0,255,255,0.2); }
.cy-t-card::before { content: ''; position: absolute; top: 0; left: 0; width: 10px; height: 10px; border-top: 2px solid #0ff; border-left: 2px solid #0ff; }
.cy-img-wrap { width: 100%; height: 250px; overflow: hidden; border-bottom: 1px solid #333; margin-bottom: 15px; position: relative; }
.cy-img-wrap::after { content: ''; position: absolute; top:0; left:0; right:0; bottom:0; background: rgba(0,255,255,0.2); mix-blend-mode: overlay; pointer-events: none; }
.cy-img-wrap img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(120%); transition: 0.3s; }
.cy-t-card:hover .cy-img-wrap img { filter: grayscale(0%) contrast(100%); }
.cy-t-info h3 { margin: 0 0 5px 0; color: #0ff; font-size: 1.5rem; text-shadow: 0 0 5px #0ff; }
.cy-t-info p { margin: 0; color: #888; font-size: 0.9rem; letter-spacing: 2px; }`,
    jsCode: ``
  },

  // 6. Neumorphic ID Cards
  {
    _id: "ts6",
    title: "Neumorphic ID Cards",
    slug: "neumorphic-id-cards",
    description: "Soft UI blocks that look like physical ID badges pressed into the screen.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["team", "neumorphism", "soft", "badges"],
    isPremium: false,
    views: 8400,
    downloads: 2100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="neu-team-sec">
  <div class="nt-container">
    <h2 class="nt-title">The Board</h2>
    <div class="nt-grid">
      <div class="nt-card">
        <div class="nt-img-holder">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" alt="Team">
        </div>
        <h3>Michael Scott</h3>
        <p>Regional Manager</p>
      </div>
      <div class="nt-card">
        <div class="nt-img-holder">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" alt="Team">
        </div>
        <h3>Pam Beesly</h3>
        <p>Administrator</p>
      </div>
      <div class="nt-card">
        <div class="nt-img-holder">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" alt="Team">
        </div>
        <h3>Jim Halpert</h3>
        <p>Sales Rep</p>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.neu-team-sec { padding: 5rem 2rem; }
.nt-container { max-width: 900px; margin: 0 auto; text-align: center; }
.nt-title { color: #4a5568; font-size: 2.5rem; margin-bottom: 4rem; }
.nt-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; }
.nt-card { background: #e0e5ec; border-radius: 20px; padding: 2rem; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); transition: 0.3s; }
.nt-card:hover { box-shadow: inset 6px 6px 12px rgba(163,177,198,0.5), inset -6px -6px 12px rgba(255,255,255,0.5); }
.nt-img-holder { width: 120px; height: 120px; margin: 0 auto 1.5rem; border-radius: 50%; padding: 5px; background: #e0e5ec; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.5), inset -6px -6px 12px rgba(255,255,255,0.5); }
.nt-img-holder img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.nt-card h3 { color: #4a5568; font-size: 1.3rem; margin: 0 0 5px 0; }
.nt-card p { color: #a0aec0; font-size: 0.95rem; margin: 0; }`,
    jsCode: ``
  },

  // 7. Large Typography Split Team
  {
    _id: "ts7",
    title: "Editorial Split Team",
    slug: "editorial-split-team",
    description: "A magazine-style layout with giant typography on the left and a tight photo grid on the right.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["team", "editorial", "split", "typography"],
    isPremium: true,
    views: 13200,
    downloads: 4400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="ed-team-sec">
  <div class="ed-container">
    <div class="ed-text">
      <h2>WE ARE<br>THE<br>CREATORS.</h2>
      <p>A collective of designers, engineers, and strategists building the future of the web.</p>
    </div>
    <div class="ed-grid">
      <div class="ed-item"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" alt="Team"><span class="ed-name">A. Lee</span></div>
      <div class="ed-item"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" alt="Team"><span class="ed-name">B. Smith</span></div>
      <div class="ed-item"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" alt="Team"><span class="ed-name">C. Wong</span></div>
      <div class="ed-item"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" alt="Team"><span class="ed-name">D. Jones</span></div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #111; color: #fff; }
.ed-team-sec { padding: 6rem 2rem; min-height: 100vh; display: flex; align-items: center; }
.ed-container { max-width: 1200px; margin: 0 auto; display: flex; gap: 4rem; width: 100%; align-items: center; }
.ed-text { flex: 1; }
.ed-text h2 { font-size: 5vw; line-height: 0.9; margin: 0 0 2rem 0; font-weight: 900; letter-spacing: -2px; }
.ed-text p { font-size: 1.2rem; color: #aaa; line-height: 1.6; max-width: 400px; }
.ed-grid { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.ed-item { position: relative; aspect-ratio: 3/4; overflow: hidden; }
.ed-item img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: 0.5s; }
.ed-item:hover img { filter: grayscale(0%); transform: scale(1.05); }
.ed-name { position: absolute; bottom: 20px; left: -100%; background: #fff; color: #111; padding: 5px 15px; font-weight: bold; transition: 0.3s; }
.ed-item:hover .ed-name { left: 0; }
@media (max-width: 900px) { .ed-container { flex-direction: column; } .ed-text h2 { font-size: 4rem; } }`,
    jsCode: ``
  },

  // 8. Bento Grid Team Roster
  {
    _id: "ts8",
    title: "Bento Grid Team",
    slug: "bento-grid-team",
    description: "A highly modern, asymmetric grid layout showing team members in differently sized cards.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    tags: ["team", "bento", "grid", "modern"],
    isPremium: true,
    views: 15400,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="bento-team-sec">
  <div class="ben-header">
    <h2>The Core Team</h2>
  </div>
  <div class="ben-container">
    <div class="ben-card ben-large">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80" alt="Team">
      <div class="ben-label">CEO - Jane</div>
    </div>
    <div class="ben-card">
      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Team">
      <div class="ben-label">CTO - Mark</div>
    </div>
    <div class="ben-card">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Team">
      <div class="ben-label">Design - Ana</div>
    </div>
    <div class="ben-card ben-wide">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" alt="Team">
      <div class="ben-label">Engineering Lead - Tom</div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; }
.bento-team-sec { padding: 5rem 2rem; }
.ben-header { text-align: center; margin-bottom: 3rem; }
.ben-header h2 { font-size: 2.5rem; color: #111827; }
.ben-container { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; auto-rows: 250px; }
.ben-card { position: relative; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.ben-card img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.ben-card:hover img { transform: scale(1.05); }
.ben-large { grid-column: span 2; grid-row: span 2; }
.ben-wide { grid-column: span 2; }
.ben-label { position: absolute; bottom: 20px; left: 20px; background: rgba(255,255,255,0.9); backdrop-filter: blur(5px); padding: 8px 16px; border-radius: 30px; font-weight: bold; font-size: 0.9rem; color: #111827; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
@media (max-width: 768px) { .ben-container { grid-template-columns: 1fr; auto-rows: 300px; } .ben-large, .ben-wide { grid-column: span 1; grid-row: span 1; } }`,
    jsCode: ``
  },

  // 9. Isometric Team Layout
  {
    _id: "ts9",
    title: "Isometric Team Display",
    slug: "isometric-team-display",
    description: "A 3D skewed presentation of team members floating in space.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    tags: ["team", "isometric", "3d", "creative"],
    isPremium: true,
    views: 11900,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="iso-team-sec">
  <div class="iso-t-wrapper">
    <div class="iso-t-card" style="--delay: 0s">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" alt="Team">
      <div class="iso-t-info">CEO</div>
    </div>
    <div class="iso-t-card" style="--delay: 0.2s">
      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" alt="Team">
      <div class="iso-t-info">CTO</div>
    </div>
    <div class="iso-t-card" style="--delay: 0.4s">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" alt="Team">
      <div class="iso-t-info">CDO</div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; overflow-x: hidden; }
.iso-team-sec { min-height: 100vh; display: flex; justify-content: center; align-items: center; perspective: 1200px; }
.iso-t-wrapper { display: flex; gap: 30px; transform: rotateX(25deg) rotateY(-25deg) rotateZ(10deg); transform-style: preserve-3d; }
.iso-t-card { width: 220px; height: 320px; background: #fff; border-radius: 12px; box-shadow: -20px 20px 40px rgba(0,0,0,0.15); position: relative; border-right: 6px solid #cbd5e1; border-bottom: 6px solid #cbd5e1; transition: 0.4s ease-out; animation: floatIso 4s ease-in-out infinite alternate; animation-delay: var(--delay); cursor: pointer; }
@keyframes floatIso { 0% { transform: translateY(0); } 100% { transform: translateY(-20px); } }
.iso-t-card:hover { transform: translateZ(50px) translateY(-10px) !important; box-shadow: -30px 30px 50px rgba(0,0,0,0.25); animation-play-state: paused; }
.iso-t-card img { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; }
.iso-t-info { position: absolute; bottom: 15px; left: 15px; background: #3b82f6; color: #fff; padding: 5px 15px; border-radius: 20px; font-weight: bold; font-size: 0.9rem; box-shadow: 0 4px 10px rgba(59,130,246,0.4); transform: translateZ(20px); }
@media (max-width: 900px) { .iso-t-wrapper { flex-direction: column; transform: none; gap: 40px; } .iso-t-card { animation: none; transform: none; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: none; } }`,
    jsCode: ``
  },

  // 10. Sliding Team Carousel (CSS-only snap)
  {
    _id: "ts10",
    title: "CSS Snap Team Carousel",
    slug: "css-snap-team-carousel",
    description: "A smooth horizontal scrolling team section utilizing CSS scroll-snap.",
    category: "Team Sections",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    tags: ["team", "carousel", "scroll", "css"],
    isPremium: false,
    views: 12700,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="snap-team-sec">
  <div class="st-header">
    <h2>Our Global Network</h2>
    <p>Scroll to view our worldwide talent.</p>
  </div>
  <div class="st-carousel">
    <div class="st-card">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Team">
      <h3>London</h3>
      <p>Alice M.</p>
    </div>
    <div class="st-card">
      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Team">
      <h3>New York</h3>
      <p>Bob T.</p>
    </div>
    <div class="st-card">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Team">
      <h3>Tokyo</h3>
      <p>Clara K.</p>
    </div>
    <div class="st-card">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" alt="Team">
      <h3>Berlin</h3>
      <p>Dave R.</p>
    </div>
    <div class="st-card">
      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" alt="Team">
      <h3>Sydney</h3>
      <p>Eve S.</p>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.snap-team-sec { padding: 5rem 0; overflow: hidden; }
.st-header { text-align: center; margin-bottom: 3rem; padding: 0 2rem; }
.st-header h2 { font-size: 2.5rem; color: #111827; margin: 0 0 10px 0; }
.st-header p { color: #6b7280; font-size: 1.1rem; }
.st-carousel { display: flex; gap: 20px; padding: 20px 50vw 40px 2rem; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; -webkit-overflow-scrolling: touch; }
.st-carousel::-webkit-scrollbar { height: 8px; }
.st-carousel::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 10px; }
.st-carousel::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
.st-card { min-width: 300px; scroll-snap-align: start; background: #f8fafc; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: 0.3s; }
.st-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.st-card img { width: 100%; height: 350px; object-fit: cover; display: block; }
.st-card h3 { margin: 15px 20px 5px; color: #111827; font-size: 1.2rem; }
.st-card p { margin: 0 20px 20px; color: #6b7280; font-size: 1rem; }`,
    jsCode: ``
  }
];
