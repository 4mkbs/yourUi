import { Design } from "./designs-data";

export const BATCH_74_DESIGNS: Design[] = [
  // 1. Classic Split CTA
  {
    _id: "cta1",
    title: "Classic Split CTA",
    slug: "classic-split-cta",
    description: "Standard full-width banner with text on the left and a button on the right.",
    category: "Call to Actions",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["cta", "classic", "banner", "split"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cta-cl">
  <div class="cta-c-content">
    <h2>Ready to boost your productivity?</h2>
    <p>Join over 4,000 startups already growing with our platform.</p>
  </div>
  <div class="cta-c-action">
    <button class="cta-c-btn">Get Started for Free</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.cta-cl { background: #3b82f6; border-radius: 16px; padding: 50px; max-width: 1000px; width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 30px; box-shadow: 0 10px 25px -5px rgba(59,130,246,0.3); }
.cta-c-content h2 { color: #fff; margin: 0 0 10px; font-size: 2rem; font-weight: 700; }
.cta-c-content p { color: #bfdbfe; margin: 0; font-size: 1.1rem; line-height: 1.5; }
.cta-c-action { flex-shrink: 0; }
.cta-c-btn { background: #fff; color: #1d4ed8; border: none; padding: 16px 32px; border-radius: 8px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: 0.3s; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
.cta-c-btn:hover { background: #f1f5f9; transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,0.15); }
@media (max-width: 768px) { .cta-cl { flex-direction: column; text-align: center; } }`,
    jsCode: ``
  },

  // 2. Centered Minimal CTA
  {
    _id: "cta2",
    title: "Centered Minimal CTA",
    slug: "centered-minimal-cta",
    description: "Clean, distraction-free centered call to action.",
    category: "Call to Actions",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["cta", "minimal", "centered", "clean"],
    isPremium: false,
    views: 38500,
    downloads: 9200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cta-mn">
  <h2>Build faster, together.</h2>
  <p>Start your 14-day free trial today. No credit card required.</p>
  <button class="cta-m-btn">Start Free Trial</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; align-items: center; }
.cta-mn { max-width: 600px; width: 100%; text-align: center; }
.cta-mn h2 { font-size: 3rem; color: #0f172a; margin: 0 0 20px; letter-spacing: -1px; }
.cta-mn p { font-size: 1.25rem; color: #64748b; margin: 0 0 40px; line-height: 1.6; }
.cta-m-btn { background: #0f172a; color: #fff; border: none; padding: 18px 40px; border-radius: 50px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: 0.3s; }
.cta-m-btn:hover { background: #334155; transform: scale(1.05); }`,
    jsCode: ``
  },

  // 3. Cyberpunk Terminal CTA
  {
    _id: "cta3",
    title: "Cyberpunk Terminal CTA",
    slug: "cyberpunk-terminal-cta",
    description: "Hacker aesthetic prompt urging the user to initiate a sequence.",
    category: "Call to Actions",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["cta", "cyberpunk", "terminal", "neon"],
    isPremium: true,
    views: 29500,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cta-cy">
  <div class="cy-head">SYSTEM_WARNING: UPGRADE_REQUIRED</div>
  <p>> Your current framework is obsolete. <span class="blink">_</span></p>
  <button class="cy-btn">[ INITIATE_UPGRADE ]</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; }
.cta-cy { background: rgba(0,20,0,0.8); border: 2px solid #0f0; padding: 40px; max-width: 700px; width: 100%; box-shadow: 0 0 20px rgba(0,255,0,0.2); position: relative; }
.cta-cy::before { content: ''; position: absolute; top: -2px; left: -2px; width: 20px; height: 20px; border-top: 4px solid #f0f; border-left: 4px solid #f0f; }
.cta-cy::after { content: ''; position: absolute; bottom: -2px; right: -2px; width: 20px; height: 20px; border-bottom: 4px solid #0ff; border-right: 4px solid #0ff; }
.cy-head { color: #f0f; font-weight: bold; margin-bottom: 20px; font-size: 1.2rem; }
.cta-cy p { color: #0f0; font-size: 1.5rem; margin: 0 0 40px; text-shadow: 0 0 5px #0f0; }
.blink { animation: blinker 1s linear infinite; }
@keyframes blinker { 50% { opacity: 0; } }
.cy-btn { background: transparent; border: 2px solid #0f0; color: #0f0; padding: 15px 30px; font-family: inherit; font-size: 1.2rem; font-weight: bold; cursor: pointer; transition: 0.2s; }
.cy-btn:hover { background: #0f0; color: #000; box-shadow: 0 0 15px #0f0; }`,
    jsCode: ``
  },

  // 4. Glassmorphism CTA
  {
    _id: "cta4",
    title: "Glassmorphism CTA",
    slug: "glassmorphism-cta",
    description: "Frosted glass banner floating over a vibrant, colorful background.",
    category: "Call to Actions",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["cta", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 41100,
    downloads: 10900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="cta-gl">
    <h2>Create something beautiful.</h2>
    <p>Join our community of designers and developers pushing the boundaries of web interfaces.</p>
    <button class="gl-btn">Explore Components</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.cta-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 60px 40px; max-width: 800px; width: 100%; text-align: center; color: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.cta-gl h2 { font-size: 2.5rem; margin: 0 0 15px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.cta-gl p { font-size: 1.1rem; margin: 0 0 40px; opacity: 0.9; line-height: 1.6; }
.gl-btn { background: #fff; color: #8b5cf6; border: none; padding: 18px 40px; border-radius: 50px; font-size: 1.1rem; font-weight: 700; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.gl-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 25px rgba(0,0,0,0.15); }`,
    jsCode: ``
  },

  // 5. Brutalist Bold CTA
  {
    _id: "cta5",
    title: "Brutalist Bold CTA",
    slug: "brutalist-bold-cta",
    description: "Loud, high-contrast prompt that demands immediate action.",
    category: "Call to Actions",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["cta", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 31800,
    downloads: 7100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cta-br">
  <h2>STOP WAITING.</h2>
  <h2>START BUILDING.</h2>
  <button class="br-btn">DO IT NOW ➔</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.cta-br { border: 8px solid #000; background: #fff; padding: 60px; max-width: 800px; width: 100%; box-shadow: 20px 20px 0 #facc15; text-align: center; }
.cta-br h2 { font-size: 5rem; font-weight: 900; margin: 0; color: #000; line-height: 1; letter-spacing: -2px; text-transform: uppercase; }
.br-btn { margin-top: 50px; background: #000; color: #fff; border: none; padding: 25px 50px; font-size: 2rem; font-weight: 900; cursor: pointer; transition: 0.1s; display: inline-block; }
.br-btn:hover { background: #3b82f6; transform: translate(5px, 5px); box-shadow: -5px -5px 0 #000; }
@media (max-width: 768px) { .cta-br h2 { font-size: 3rem; } .br-btn { font-size: 1.5rem; padding: 20px 30px; } }`,
    jsCode: ``
  },

  // 6. Neumorphic CTA
  {
    _id: "cta6",
    title: "Neumorphic CTA",
    slug: "neumorphic-cta",
    description: "Soft UI design with extruded background and inset text details.",
    category: "Call to Actions",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["cta", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34300,
    downloads: 8100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cta-neu">
  <h2>Take the next step</h2>
  <p>Our tools are designed to adapt to your workflow naturally and effortlessly.</p>
  <button class="neu-btn">Create Account</button>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; align-items: center; }
.cta-neu { background: #e0e5ec; padding: 60px; border-radius: 40px; box-shadow: 20px 20px 40px rgba(163,177,198,0.6), -20px -20px 40px rgba(255,255,255,0.5); max-width: 700px; width: 100%; text-align: center; }
.cta-neu h2 { color: #2d3748; font-size: 2.5rem; margin: 0 0 15px; }
.cta-neu p { color: #718096; font-size: 1.1rem; margin: 0 0 40px; line-height: 1.6; }
.neu-btn { padding: 20px 50px; border-radius: 30px; border: none; background: #e0e5ec; color: #3182ce; font-weight: bold; font-size: 1.2rem; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.neu-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); color: #2b6cb0; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow CTA
  {
    _id: "cta7",
    title: "Dark Mode Glow CTA",
    slug: "dark-mode-glow-cta",
    description: "Deep dark layout with glowing neon edges drawing the eye.",
    category: "Call to Actions",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["cta", "dark", "glow", "gradient"],
    isPremium: true,
    views: 41400,
    downloads: 11800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cta-dg">
  <h2>Enter the next generation.</h2>
  <p>Experience unparalleled performance and deep customization options.</p>
  <button class="dg-btn">Get Access Now</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.cta-dg { background: #0f172a; padding: 60px; border-radius: 24px; border: 1px solid #1e293b; max-width: 800px; width: 100%; text-align: center; position: relative; z-index: 1; overflow: hidden; }
.cta-dg::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 50%); z-index: -1; pointer-events: none; }
.cta-dg h2 { color: #f8fafc; font-size: 3rem; margin: 0 0 20px; letter-spacing: -1px; }
.cta-dg p { color: #94a3b8; font-size: 1.2rem; margin: 0 0 40px; }
.dg-btn { background: #8b5cf6; color: #fff; border: none; padding: 18px 40px; border-radius: 12px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: 0.3s; box-shadow: 0 0 20px rgba(139,92,246,0.3); }
.dg-btn:hover { background: #7c3aed; box-shadow: 0 0 30px rgba(139,92,246,0.5); transform: translateY(-2px); }`,
    jsCode: ``
  },

  // 8. Newsletter Subscribe Inline
  {
    _id: "cta8",
    title: "Newsletter Subscribe Inline",
    slug: "newsletter-subscribe-inline",
    description: "Compact inline form designed for capturing email leads.",
    category: "Call to Actions",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["cta", "newsletter", "input", "inline"],
    isPremium: false,
    views: 45400,
    downloads: 13100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cta-nl">
  <h2>Stay in the loop</h2>
  <p>Get a weekly summary of the best design resources and articles.</p>
  <form class="nl-form" onsubmit="event.preventDefault()">
    <input type="email" placeholder="Enter your email address" required />
    <button type="submit">Subscribe</button>
  </form>
  <p class="nl-spam">We care about your data in our privacy policy.</p>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 100px 20px; display: flex; justify-content: center; }
.cta-nl { background: #fff; padding: 50px; border-radius: 20px; max-width: 600px; width: 100%; text-align: center; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
.cta-nl h2 { color: #0f172a; font-size: 2rem; margin: 0 0 10px; }
.cta-nl p { color: #64748b; margin: 0 0 30px; font-size: 1.1rem; }
.nl-form { display: flex; gap: 10px; margin-bottom: 15px; }
.nl-form input { flex: 1; padding: 16px 20px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; outline: none; transition: 0.2s; font-family: inherit; }
.nl-form input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.nl-form button { background: #0f172a; color: #fff; border: none; padding: 16px 30px; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: 0.2s; }
.nl-form button:hover { background: #334155; }
.nl-spam { font-size: 0.85rem !important; color: #94a3b8 !important; margin: 0 !important; }
@media (max-width: 500px) { .nl-form { flex-direction: column; } }`,
    jsCode: ``
  },

  // 9. App Download CTA
  {
    _id: "cta9",
    title: "App Download CTA",
    slug: "app-download-cta",
    description: "Call to action focused on mobile app downloads with store badges.",
    category: "Call to Actions",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["cta", "app", "mobile", "download"],
    isPremium: true,
    views: 39100,
    downloads: 10700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cta-app">
  <div class="app-content">
    <h2>Take your work anywhere</h2>
    <p>Download our mobile app to sync your projects, receive real-time notifications, and manage your team on the go.</p>
    <div class="app-badges">
      <button class="app-btn">
        <span class="app-icon">🍎</span>
        <div class="app-text">
          <span>Download on the</span>
          <strong>App Store</strong>
        </div>
      </button>
      <button class="app-btn">
        <span class="app-icon">▶</span>
        <div class="app-text">
          <span>GET IT ON</span>
          <strong>Google Play</strong>
        </div>
      </button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.cta-app { background: linear-gradient(135deg, #1e293b, #0f172a); border-radius: 24px; padding: 60px; max-width: 900px; width: 100%; text-align: center; box-shadow: 0 20px 40px rgba(15,23,42,0.2); }
.app-content h2 { color: #fff; font-size: 2.5rem; margin: 0 0 20px; }
.app-content p { color: #94a3b8; font-size: 1.2rem; max-width: 600px; margin: 0 auto 40px; line-height: 1.6; }
.app-badges { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.app-btn { background: #000; border: 1px solid #334155; border-radius: 12px; padding: 10px 25px; display: flex; align-items: center; gap: 15px; cursor: pointer; transition: 0.3s; color: #fff; text-align: left; }
.app-btn:hover { border-color: #64748b; background: #111; transform: translateY(-2px); }
.app-icon { font-size: 2rem; }
.app-text span { display: block; font-size: 0.7rem; color: #cbd5e1; margin-bottom: 2px; }
.app-text strong { display: block; font-size: 1.2rem; font-weight: 600; letter-spacing: -0.5px; }`,
    jsCode: ``
  },

  // 10. Two-Choice CTA
  {
    _id: "cta10",
    title: "Two-Choice CTA",
    slug: "two-choice-cta",
    description: "Offers a primary action and a secondary alternative action.",
    category: "Call to Actions",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["cta", "choices", "buttons", "minimal"],
    isPremium: false,
    views: 40500,
    downloads: 11200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cta-tc">
  <h2>Transform your workflow</h2>
  <p>Join thousands of teams who have already discovered the power of seamless integration.</p>
  <div class="tc-actions">
    <button class="tc-primary">Start Free Trial</button>
    <button class="tc-secondary">View Documentation</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; padding: 100px 20px; display: flex; justify-content: center; }
.cta-tc { max-width: 700px; width: 100%; text-align: center; }
.cta-tc h2 { color: #111; font-size: 3rem; margin: 0 0 20px; letter-spacing: -1px; }
.cta-tc p { color: #666; font-size: 1.2rem; margin: 0 0 40px; line-height: 1.6; }
.tc-actions { display: flex; justify-content: center; gap: 20px; }
.tc-primary, .tc-secondary { padding: 16px 32px; border-radius: 8px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: 0.2s; font-family: inherit; }
.tc-primary { background: #2563eb; color: #fff; border: none; box-shadow: 0 4px 10px rgba(37,99,235,0.2); }
.tc-primary:hover { background: #1d4ed8; transform: translateY(-2px); }
.tc-secondary { background: transparent; color: #475569; border: 1px solid #cbd5e1; }
.tc-secondary:hover { background: #f1f5f9; color: #0f172a; border-color: #94a3b8; }
@media (max-width: 500px) { .tc-actions { flex-direction: column; } .tc-primary, .tc-secondary { width: 100%; } }`,
    jsCode: ``
  }
];
