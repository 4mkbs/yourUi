import { Design } from "./designs-data";

export const BATCH_57_DESIGNS: Design[] = [
  // 1. Classic Icon Top Feature Card
  {
    _id: "fc1",
    title: "Classic Icon Top Feature",
    slug: "classic-icon-top-feature",
    description: "Standard feature card with an icon at the top and centered text.",
    category: "Feature Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["feature", "classic", "icon", "centered"],
    isPremium: false,
    views: 29500,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-ct">
  <div class="ft-ct-icon">⚡</div>
  <h3>Lightning Fast</h3>
  <p>Our platform is built for speed, ensuring your users never have to wait for pages to load.</p>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.ft-ct { width: 280px; padding: 30px; background: #fff; border-radius: 16px; text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; transition: 0.2s; }
.ft-ct:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.ft-ct-icon { width: 50px; height: 50px; margin: 0 auto 20px; background: #ebf8ff; color: #3182ce; font-size: 1.5rem; display: flex; justify-content: center; align-items: center; border-radius: 12px; }
.ft-ct h3 { margin: 0 0 10px; color: #1a202c; font-size: 1.25rem; font-weight: 600; }
.ft-ct p { margin: 0; color: #4a5568; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 2. Classic Icon Left Feature Card
  {
    _id: "fc2",
    title: "Classic Icon Left Feature",
    slug: "classic-icon-left-feature",
    description: "Horizontal feature layout, great for lists of benefits.",
    category: "Feature Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["feature", "horizontal", "list", "clean"],
    isPremium: false,
    views: 31200,
    downloads: 8100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-cl">
  <div class="ft-cl-icon">🔒</div>
  <div class="ft-cl-text">
    <h3>Secure by Default</h3>
    <p>Enterprise-grade security built into every layer, keeping your data safe 24/7.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.ft-cl { display: flex; max-width: 400px; padding: 20px; background: #fff; border-radius: 12px; transition: 0.2s; border: 1px solid transparent; }
.ft-cl:hover { border-color: #e2e8f0; background: #f8fafc; }
.ft-cl-icon { width: 48px; height: 48px; flex-shrink: 0; margin-right: 20px; background: #f0fdf4; color: #16a34a; font-size: 1.5rem; display: flex; justify-content: center; align-items: center; border-radius: 50%; }
.ft-cl-text h3 { margin: 0 0 8px; color: #0f172a; font-size: 1.1rem; font-weight: 600; }
.ft-cl-text p { margin: 0; color: #64748b; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Feature Card
  {
    _id: "fc3",
    title: "Cyberpunk Feature Card",
    slug: "cyberpunk-feature-card",
    description: "Neon borders and tech aesthetic for gaming or dev tools.",
    category: "Feature Cards",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["feature", "cyberpunk", "neon", "tech"],
    isPremium: true,
    views: 25600,
    downloads: 6400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-cy">
  <div class="ft-cy-icon">{'<'} / {'>'}</div>
  <h3>API ACCESS</h3>
  <p>Full REST API integration with zero throttling. Connect your neural net directly.</p>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.ft-cy { width: 280px; padding: 30px; background: rgba(0,255,255,0.05); border-left: 4px solid #0ff; position: relative; transition: 0.3s; }
.ft-cy:hover { background: rgba(0,255,255,0.1); box-shadow: inset 0 0 15px rgba(0,255,255,0.2); }
.ft-cy::before { content: ''; position: absolute; right: 0; bottom: 0; width: 10px; height: 10px; background: #f0f; }
.ft-cy-icon { color: #f0f; font-weight: bold; font-size: 1.5rem; margin-bottom: 20px; text-shadow: 0 0 5px #f0f; }
.ft-cy h3 { margin: 0 0 15px; color: #0ff; font-size: 1.2rem; letter-spacing: 2px; }
.ft-cy p { margin: 0; color: #ccc; font-size: 0.9rem; line-height: 1.6; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Feature Card
  {
    _id: "fc4",
    title: "Glassmorphism Feature",
    slug: "glassmorphism-feature",
    description: "Frosted glass card that lets background colors blur through.",
    category: "Feature Cards",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["feature", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 34100,
    downloads: 9500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="ft-gl">
    <div class="ft-g-icon">☁️</div>
    <h3>Cloud Sync</h3>
    <p>Your data stays perfectly synced across all your devices in real-time.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.ft-gl { width: 280px; padding: 35px 25px; border-radius: 20px; background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.1); color: #fff; transition: 0.3s; }
.ft-gl:hover { background: rgba(255,255,255,0.15); transform: translateY(-5px); }
.ft-g-icon { width: 60px; height: 60px; margin-bottom: 20px; background: rgba(255,255,255,0.2); border-radius: 16px; display: flex; justify-content: center; align-items: center; font-size: 1.8rem; }
.ft-gl h3 { margin: 0 0 10px; font-size: 1.3rem; font-weight: 600; }
.ft-gl p { margin: 0; color: rgba(255,255,255,0.8); font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 5. Brutalist Feature Card
  {
    _id: "fc5",
    title: "Brutalist Feature Card",
    slug: "brutalist-feature-card",
    description: "Bold borders, solid background colors, and raw typography.",
    category: "Feature Cards",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["feature", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 23100,
    downloads: 5600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-br">
  <div class="ft-b-icon">★</div>
  <h3>TOP RATED</h3>
  <p>VOTED THE #1 TOOL FOR CREATIVES BY OVER 500,000 PROFESSIONALS.</p>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e5e5; }
.ft-br { width: 280px; background: #ec4899; border: 4px solid #000; box-shadow: 8px 8px 0 #000; padding: 30px; text-align: left; transition: 0.2s; }
.ft-br:hover { transform: translate(-4px, -4px); box-shadow: 12px 12px 0 #000; }
.ft-b-icon { font-size: 3rem; color: #000; margin-bottom: 15px; line-height: 1; }
.ft-br h3 { margin: 0 0 15px; font-size: 1.5rem; font-weight: 900; color: #000; text-transform: uppercase; border-bottom: 3px solid #000; padding-bottom: 10px; }
.ft-br p { margin: 0; font-weight: 700; font-size: 0.95rem; color: #000; line-height: 1.4; }`,
    jsCode: ``
  },

  // 6. Neumorphic Feature Card
  {
    _id: "fc6",
    title: "Neumorphic Feature",
    slug: "neumorphic-feature",
    description: "Soft UI frame where the card looks extruded from the background.",
    category: "Feature Cards",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["feature", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24700,
    downloads: 6200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-neu">
  <div class="ft-n-icon">⛑️</div>
  <h3>Reliable</h3>
  <p>99.9% uptime guaranteed so your business never stops running.</p>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.ft-neu { width: 280px; padding: 35px; border-radius: 20px; background: #e0e5ec; box-shadow: 9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5); text-align: center; }
.ft-n-icon { width: 70px; height: 70px; margin: 0 auto 20px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 2rem; background: #e0e5ec; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); }
.ft-neu h3 { margin: 0 0 10px; color: #2d3748; font-size: 1.25rem; font-weight: bold; }
.ft-neu p { margin: 0; color: #718096; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Feature Card
  {
    _id: "fc7",
    title: "Dark Mode Glow Feature",
    slug: "dark-mode-glow-feature",
    description: "Deep dark card with a top glowing colored accent.",
    category: "Feature Cards",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["feature", "dark", "glow", "modern"],
    isPremium: true,
    views: 31800,
    downloads: 8700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-dg">
  <div class="ft-d-icon">🚀</div>
  <h3>Scalable Architecture</h3>
  <p>Grow without limits. Our infrastructure scales automatically to handle millions of requests.</p>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #020617; }
.ft-dg { width: 280px; padding: 35px 25px; background: #0f172a; border-radius: 16px; border-top: 4px solid #3b82f6; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.5); overflow: hidden; transition: 0.3s; }
.ft-dg:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.6); }
.ft-dg::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50px; background: linear-gradient(to bottom, rgba(59, 130, 246, 0.2), transparent); pointer-events: none; }
.ft-d-icon { font-size: 2rem; margin-bottom: 15px; }
.ft-dg h3 { margin: 0 0 10px; color: #f8fafc; font-size: 1.2rem; }
.ft-dg p { margin: 0; color: #94a3b8; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 8. Hover Expand Feature Card
  {
    _id: "fc8",
    title: "Hover Expand Feature",
    slug: "hover-expand-feature",
    description: "Compact card showing just an icon and title, expanding text on hover.",
    category: "Feature Cards",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["feature", "hover", "animation", "interactive"],
    isPremium: true,
    views: 33400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-hv">
  <div class="ft-h-icon">📊</div>
  <h3>Advanced Analytics</h3>
  <div class="ft-h-content">
    <p>Dive deep into your metrics with real-time tracking, custom reports, and visual dashboards.</p>
    <a href="#">Learn more →</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e2e8f0; }
.ft-hv { width: 260px; height: 160px; background: #fff; border-radius: 16px; padding: 30px; box-sizing: border-box; text-align: center; overflow: hidden; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.ft-hv:hover { height: 280px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); transform: translateY(-10px); }
.ft-h-icon { font-size: 2.5rem; margin-bottom: 15px; transition: 0.4s; }
.ft-hv:hover .ft-h-icon { transform: scale(0.8); margin-bottom: 10px; }
.ft-hv h3 { margin: 0 0 20px; color: #0f172a; font-size: 1.2rem; }
.ft-h-content { opacity: 0; transform: translateY(20px); transition: 0.4s; transition-delay: 0.1s; }
.ft-hv:hover .ft-h-content { opacity: 1; transform: translateY(0); }
.ft-h-content p { margin: 0 0 15px; color: #64748b; font-size: 0.9rem; line-height: 1.5; }
.ft-h-content a { color: #3b82f6; text-decoration: none; font-weight: 600; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 9. Minimal Outline Feature Card
  {
    _id: "fc9",
    title: "Minimal Outline Feature",
    slug: "minimal-outline-feature",
    description: "Clean aesthetic using only borders and minimal color accents.",
    category: "Feature Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["feature", "outline", "minimal", "clean"],
    isPremium: false,
    views: 26100,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-ou">
  <div class="ft-o-num">01</div>
  <h3>Discover</h3>
  <p>Find the best content tailored to your specific interests and industry.</p>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #fafafa; }
.ft-ou { width: 260px; padding: 40px 30px; border: 1px solid #e5e5e5; border-radius: 8px; background: transparent; transition: 0.3s; position: relative; }
.ft-ou:hover { border-color: #000; }
.ft-o-num { position: absolute; top: 30px; right: 30px; font-size: 2rem; font-weight: 900; color: #f0f0f0; transition: 0.3s; }
.ft-ou:hover .ft-o-num { color: #e5e5e5; }
.ft-ou h3 { margin: 0 0 15px; color: #000; font-size: 1.3rem; }
.ft-ou p { margin: 0; color: #666; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 10. Floating 3D Feature Card
  {
    _id: "fc10",
    title: "Floating 3D Feature",
    slug: "floating-3d-feature",
    description: "Card appears to float with a realistic drop shadow underneath.",
    category: "Feature Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["feature", "3d", "floating", "shadow"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ft-fl">
  <div class="ft-f-icon">🎯</div>
  <h3>High Precision</h3>
  <p>Target your audience with laser focus using our demographic filtering.</p>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #eef2f6; perspective: 1000px; }
.ft-fl { width: 280px; padding: 35px 25px; background: #fff; border-radius: 20px; text-align: center; transform: translateY(0); transition: all 0.4s ease; box-shadow: 0 10px 20px rgba(0,0,0,0.05); position: relative; }
.ft-fl::after { content: ''; position: absolute; bottom: -20px; left: 10%; width: 80%; height: 20px; background: radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 70%); border-radius: 50%; opacity: 1; transition: 0.4s; }
.ft-fl:hover { transform: translateY(-15px) rotateX(5deg); box-shadow: 0 25px 40px rgba(0,0,0,0.08); }
.ft-fl:hover::after { opacity: 0.4; bottom: -30px; transform: scale(1.1); }
.ft-f-icon { font-size: 2.5rem; margin-bottom: 15px; display: inline-block; transition: 0.3s; }
.ft-fl:hover .ft-f-icon { transform: scale(1.1) translateY(-5px); }
.ft-fl h3 { margin: 0 0 10px; color: #1e293b; font-size: 1.25rem; }
.ft-fl p { margin: 0; color: #64748b; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  }
];
