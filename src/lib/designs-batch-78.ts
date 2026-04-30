import { Design } from "./designs-data";

export const BATCH_78_DESIGNS: Design[] = [
  // 1. Classic 3-Column Grid
  {
    _id: "ts1",
    title: "Classic 3-Column Grid",
    slug: "classic-3-column-grid",
    description: "Standard clean grid layout for multiple testimonials.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonials", "grid", "classic", "reviews"],
    isPremium: false,
    views: 48200,
    downloads: 13500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-cl">
  <div class="ts-c-card">
    <div class="ts-c-stars">★★★★★</div>
    <p class="ts-c-quote">"This component library completely transformed our workflow. We shipped our MVP three weeks faster than planned."</p>
    <div class="ts-c-author">
      <img src="https://i.pravatar.cc/150?u=1" alt="Sarah J." />
      <div>
        <h4>Sarah Jenkins</h4>
        <span>CTO at TechStart</span>
      </div>
    </div>
  </div>
  <div class="ts-c-card">
    <div class="ts-c-stars">★★★★★</div>
    <p class="ts-c-quote">"The code quality is incredible. Pure CSS and HTML means zero bloat and perfect integration with our stack."</p>
    <div class="ts-c-author">
      <img src="https://i.pravatar.cc/150?u=2" alt="Mike T." />
      <div>
        <h4>Mike Thompson</h4>
        <span>Lead Developer</span>
      </div>
    </div>
  </div>
  <div class="ts-c-card">
    <div class="ts-c-stars">★★★★★</div>
    <p class="ts-c-quote">"Beautiful designs right out of the box. Highly recommend for any startup looking to establish a premium feel."</p>
    <div class="ts-c-author">
      <img src="https://i.pravatar.cc/150?u=3" alt="Emily R." />
      <div>
        <h4>Emily Rodriguez</h4>
        <span>Product Manager</span>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 60px 20px; display: flex; justify-content: center; }
.ts-cl { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; max-width: 1200px; width: 100%; }
.ts-c-card { background: #fff; border-radius: 16px; padding: 30px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
.ts-c-stars { color: #f59e0b; font-size: 1.2rem; margin-bottom: 15px; letter-spacing: 2px; }
.ts-c-quote { color: #334155; font-size: 1.1rem; line-height: 1.6; margin: 0 0 25px; font-style: italic; }
.ts-c-author { display: flex; align-items: center; gap: 15px; }
.ts-c-author img { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
.ts-c-author h4 { margin: 0 0 4px; color: #0f172a; font-size: 1rem; }
.ts-c-author span { color: #64748b; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 2. Minimal Clean Quote
  {
    _id: "ts2",
    title: "Minimal Clean Quote",
    slug: "minimal-clean-quote",
    description: "Ultra-minimal, large typography, single featured testimonial.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonials", "minimal", "clean", "typography"],
    isPremium: false,
    views: 39100,
    downloads: 11000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-mn">
  <div class="ts-m-mark">"</div>
  <blockquote>
    The most elegantly constructed UI components I have ever used. They just get out of your way and let you build.
  </blockquote>
  <div class="ts-m-author">— David Chen, Indie Hacker</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.ts-mn { max-width: 800px; width: 100%; text-align: center; position: relative; }
.ts-m-mark { font-family: Georgia, serif; font-size: 8rem; color: #f1f5f9; line-height: 0; position: absolute; top: 20px; left: 50%; transform: translateX(-50%); z-index: -1; }
.ts-mn blockquote { font-size: 2.5rem; font-weight: 300; color: #111; line-height: 1.4; margin: 0 0 30px; letter-spacing: -1px; }
.ts-m-author { color: #64748b; font-size: 1.2rem; font-weight: 500; }
@media (max-width: 768px) { .ts-mn blockquote { font-size: 1.8rem; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Terminal Review
  {
    _id: "ts3",
    title: "Cyberpunk Review",
    slug: "cyberpunk-review",
    description: "Hacker-themed feedback component with neon aesthetics.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["testimonials", "cyberpunk", "terminal", "neon"],
    isPremium: true,
    views: 32400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-cy">
  <div class="cy-head">USER_FEEDBACK_LOG [ID: 9942]</div>
  <div class="cy-body">
    <p>> "SYSTEM UPGRADE SUCCESSFUL. UI COMPONENTS ARE FLAWLESS. EFFICIENCY INCREASED BY 400%."</p>
    <div class="cy-meta">
      <span>USER: XERO_COOL</span>
      <span>RATING: 10/10</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 80px 20px; display: flex; justify-content: center; }
.ts-cy { background: rgba(0,20,0,0.8); border: 1px solid #0f0; max-width: 600px; width: 100%; box-shadow: 0 0 15px rgba(0,255,0,0.2); }
.cy-head { background: #0f0; color: #000; padding: 10px 15px; font-weight: bold; text-transform: uppercase; }
.cy-body { padding: 30px; color: #0f0; }
.cy-body p { margin: 0 0 20px; font-size: 1.2rem; line-height: 1.5; text-shadow: 0 0 5px #0f0; }
.cy-meta { display: flex; justify-content: space-between; font-size: 0.9rem; color: #0aa; border-top: 1px dashed #055; padding-top: 15px; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Testimonial
  {
    _id: "ts4",
    title: "Glassmorphism Review",
    slug: "glassmorphism-review",
    description: "Frosted glass card hovering over a gradient background.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["testimonials", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 45200,
    downloads: 13100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="ts-gl">
    <div class="gl-quote">"An absolute game-changer for our frontend team. The glass effect is perfect and performance is buttery smooth."</div>
    <div class="gl-author">
      <img src="https://i.pravatar.cc/150?u=4" alt="Alex" />
      <div>
        <h4>Alex Mercer</h4>
        <span>UI/UX Designer</span>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.ts-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 40px; max-width: 600px; width: 100%; box-shadow: 0 20px 40px rgba(0,0,0,0.1); color: #fff; }
.gl-quote { font-size: 1.4rem; line-height: 1.6; margin-bottom: 30px; font-weight: 300; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.gl-author { display: flex; align-items: center; gap: 15px; }
.gl-author img { width: 60px; height: 60px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.5); }
.gl-author h4 { margin: 0 0 5px; font-size: 1.1rem; }
.gl-author span { opacity: 0.8; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 5. Brutalist Review Card
  {
    _id: "ts5",
    title: "Brutalist Review",
    slug: "brutalist-review",
    description: "Loud, high-contrast feedback card with thick borders.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["testimonials", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 31800,
    downloads: 7100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-br">
  <div class="br-tag">100% AWESOME</div>
  <h3>"I STOPPED WRITING CSS."</h3>
  <p>Why write code when you can just use this? Best library ever.</p>
  <div class="br-author">
    <strong>JOHN DOE</strong>
    <span>LAZY DEV</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.ts-br { background: #facc15; border: 8px solid #000; padding: 40px; max-width: 500px; width: 100%; box-shadow: 15px 15px 0 #000; position: relative; }
.br-tag { position: absolute; top: -20px; right: -20px; background: #000; color: #fff; font-weight: 900; padding: 10px 20px; transform: rotate(5deg); font-size: 1.2rem; }
.ts-br h3 { font-size: 3rem; font-weight: 900; margin: 0 0 20px; line-height: 1; letter-spacing: -1px; text-transform: uppercase; }
.ts-br p { font-size: 1.5rem; font-weight: 700; margin: 0 0 30px; border-bottom: 4px solid #000; padding-bottom: 20px; }
.br-author { display: flex; flex-direction: column; }
.br-author strong { font-size: 1.5rem; font-weight: 900; }
.br-author span { font-weight: 700; color: #444; }`,
    jsCode: ``
  },

  // 6. Neumorphic Testimonial
  {
    _id: "ts6",
    title: "Neumorphic Review",
    slug: "neumorphic-review",
    description: "Soft UI design with inset text blocks and extruded avatar.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["testimonials", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 33100,
    downloads: 7500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-neu">
  <div class="neu-avatar">
    <img src="https://i.pravatar.cc/150?u=5" alt="Avatar" />
  </div>
  <div class="neu-box">
    "The soft shadows and perfect gradients make everything look like a premium app. Incredible attention to detail."
  </div>
  <div class="neu-author">
    <h4>Mark Stevens</h4>
    <span>Frontend Eng.</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.ts-neu { padding: 40px; border-radius: 30px; box-shadow: 20px 20px 40px rgba(163,177,198,0.6), -20px -20px 40px rgba(255,255,255,0.5); max-width: 500px; width: 100%; text-align: center; }
.neu-avatar { width: 100px; height: 100px; margin: 0 auto 30px; border-radius: 50%; padding: 10px; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); }
.neu-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.neu-box { padding: 30px; border-radius: 20px; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); color: #4a5568; font-size: 1.1rem; line-height: 1.6; margin-bottom: 25px; font-style: italic; }
.neu-author h4 { margin: 0 0 5px; color: #2d3748; font-size: 1.2rem; }
.neu-author span { color: #a0aec0; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Review
  {
    _id: "ts7",
    title: "Dark Mode Glow Review",
    slug: "dark-mode-glow-review",
    description: "Deep dark layout with neon edge lighting.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["testimonials", "dark", "glow", "gradient"],
    isPremium: true,
    views: 41400,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-dg">
  <div class="dg-quote">"Building dark mode interfaces used to take me days. With these components, it took me an afternoon."</div>
  <div class="dg-author">
    <div class="dg-info">
      <h4>Jane Smith</h4>
      <span>Fullstack Developer</span>
    </div>
    <div class="dg-stars">★★★★★</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.ts-dg { background: #0f172a; padding: 40px; border-radius: 16px; border: 1px solid #1e293b; max-width: 500px; width: 100%; position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.ts-dg::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(180deg, #3b82f6, #8b5cf6, #f43f5e); box-shadow: 0 0 15px rgba(139,92,246,0.5); }
.dg-quote { color: #f8fafc; font-size: 1.25rem; line-height: 1.6; margin-bottom: 30px; font-weight: 300; }
.dg-author { display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid #1e293b; padding-top: 20px; }
.dg-info h4 { color: #fff; margin: 0 0 5px; font-size: 1.1rem; }
.dg-info span { color: #64748b; font-size: 0.9rem; }
.dg-stars { color: #8b5cf6; text-shadow: 0 0 10px rgba(139,92,246,0.5); letter-spacing: 2px; }`,
    jsCode: ``
  },

  // 8. Split Layout Testimonial
  {
    _id: "ts8",
    title: "Split Layout Testimonial",
    slug: "split-layout-testimonial",
    description: "Large portrait image on one side, quote on the other.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["testimonials", "split", "image", "layout"],
    isPremium: false,
    views: 46500,
    downloads: 12800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-sp">
  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Person" class="sp-img" />
  <div class="sp-content">
    <svg class="sp-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
    <blockquote>
      "We've seen a 50% increase in conversion rates since redesigning our landing page with these components."
    </blockquote>
    <div class="sp-author">
      <strong>Lisa Wong</strong>
      <span>VP of Marketing, SaaS Co</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 60px 20px; display: flex; justify-content: center; }
.ts-sp { display: flex; background: #fff; border-radius: 20px; overflow: hidden; max-width: 900px; width: 100%; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1); }
.sp-img { width: 40%; object-fit: cover; }
.sp-content { width: 60%; padding: 50px; display: flex; flex-direction: column; justify-content: center; }
.sp-icon { width: 40px; color: #cbd5e1; margin-bottom: 20px; }
.sp-content blockquote { margin: 0 0 30px; font-size: 1.5rem; line-height: 1.5; color: #0f172a; font-weight: 500; }
.sp-author strong { display: block; font-size: 1.1rem; color: #0f172a; margin-bottom: 5px; }
.sp-author span { color: #64748b; font-size: 0.95rem; }
@media (max-width: 768px) { .ts-sp { flex-direction: column; } .sp-img { width: 100%; height: 300px; } .sp-content { width: 100%; padding: 30px; } }`,
    jsCode: ``
  },

  // 9. Floating Avatar Quote
  {
    _id: "ts9",
    title: "Floating Avatar Quote",
    slug: "floating-avatar-quote",
    description: "Testimonial card where the avatar overlaps the top edge.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonials", "floating", "avatar", "card"],
    isPremium: false,
    views: 42100,
    downloads: 11100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-fa">
  <img src="https://i.pravatar.cc/150?u=8" alt="Author" class="fa-img" />
  <div class="fa-stars">★★★★★</div>
  <p>"Exactly what I was looking for. No heavy JS dependencies, just pure HTML/CSS that works everywhere."</p>
  <h4>Robert Fox</h4>
  <span>Freelancer</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; padding: 120px 20px 40px; display: flex; justify-content: center; }
.ts-fa { background: #fff; padding: 60px 40px 40px; border-radius: 16px; max-width: 450px; width: 100%; text-align: center; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.fa-img { width: 100px; height: 100px; border-radius: 50%; position: absolute; top: -50px; left: 50%; transform: translateX(-50%); border: 6px solid #e2e8f0; object-fit: cover; }
.fa-stars { color: #fbbf24; font-size: 1.2rem; margin-bottom: 20px; letter-spacing: 2px; }
.ts-fa p { font-size: 1.1rem; color: #475569; line-height: 1.6; margin: 0 0 25px; }
.ts-fa h4 { margin: 0 0 5px; color: #0f172a; font-size: 1.1rem; }
.ts-fa span { color: #94a3b8; font-size: 0.9rem; font-weight: 500; }`,
    jsCode: ``
  },

  // 10. Carousel Slider Simulation
  {
    _id: "ts10",
    title: "Carousel Review",
    slug: "carousel-review",
    description: "Testimonial styled like an active slide in a carousel with dot indicators.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonials", "carousel", "slider", "dots"],
    isPremium: true,
    views: 38500,
    downloads: 10200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-cr">
  <div class="cr-nav">
    <button>←</button>
    <button>→</button>
  </div>
  <p class="cr-quote">"The easiest way to build stunning websites. The code is clean, semantic, and highly customizable."</p>
  <div class="cr-author">
    <h4>Wade Warren</h4>
    <span>Founder at DesignCo</span>
  </div>
  <div class="cr-dots">
    <span class="dot"></span>
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.ts-cr { background: #f8fafc; padding: 50px; border-radius: 24px; max-width: 600px; width: 100%; text-align: center; position: relative; }
.cr-nav { position: absolute; top: 50%; left: 0; width: 100%; transform: translateY(-50%); display: flex; justify-content: space-between; padding: 0 20px; box-sizing: border-box; pointer-events: none; }
.cr-nav button { width: 40px; height: 40px; border-radius: 50%; border: none; background: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor: pointer; pointer-events: auto; display: flex; justify-content: center; align-items: center; transition: 0.2s; color: #0f172a; }
.cr-nav button:hover { background: #0f172a; color: #fff; }
.cr-quote { font-size: 1.5rem; color: #1e293b; line-height: 1.5; margin: 0 0 30px; padding: 0 40px; font-weight: 500; }
.cr-author h4 { margin: 0 0 5px; font-size: 1.1rem; color: #0f172a; }
.cr-author span { color: #64748b; font-size: 0.9rem; }
.cr-dots { display: flex; justify-content: center; gap: 8px; margin-top: 40px; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: #cbd5e1; transition: 0.3s; }
.dot.active { width: 24px; border-radius: 4px; background: #3b82f6; }`,
    jsCode: ``
  }
];
