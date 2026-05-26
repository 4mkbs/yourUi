import { Design } from "./designs-data";

export const BATCH_86_DESIGNS: Design[] = [
  // 1. Classic 3-Card Grid
  {
    _id: "ts1",
    title: "Classic Testimonial Grid",
    slug: "classic-testimonial-grid",
    description: "Standard three-column layout for user reviews.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonials", "reviews", "classic", "cards"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-cl">
  <h2>Loved by builders worldwide</h2>
  <div class="ts-grid">
    <div class="ts-card">
      <p>"This library completely changed how we ship products. We moved twice as fast and the code is incredibly clean."</p>
      <div class="ts-user">
        <div class="ts-avatar">JD</div>
        <div class="ts-info">
          <h4>John Doe</h4>
          <span>CTO at TechCorp</span>
        </div>
      </div>
    </div>
    <div class="ts-card">
      <p>"The best investment we made this year. The components are accessible, responsive, and beautiful out of the box."</p>
      <div class="ts-user">
        <div class="ts-avatar">JS</div>
        <div class="ts-info">
          <h4>Jane Smith</h4>
          <span>Lead Designer</span>
        </div>
      </div>
    </div>
    <div class="ts-card">
      <p>"I was skeptical about another component library, but this one is different. The pure CSS approach is exactly what I needed."</p>
      <div class="ts-user">
        <div class="ts-avatar">MR</div>
        <div class="ts-info">
          <h4>Mike Ross</h4>
          <span>Frontend Developer</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.ts-cl { max-width: 1100px; width: 100%; text-align: center; }
.ts-cl h2 { font-size: 2.5rem; color: #0f172a; margin: 0 0 50px; }
.ts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.ts-card { background: #fff; padding: 40px 30px; border-radius: 16px; border: 1px solid #e2e8f0; text-align: left; box-shadow: 0 4px 6px rgba(0,0,0,0.02); transition: 0.3s; }
.ts-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.05); }
.ts-card p { color: #475569; font-size: 1.1rem; line-height: 1.6; margin: 0 0 30px; font-style: italic; }
.ts-user { display: flex; align-items: center; gap: 15px; }
.ts-avatar { width: 50px; height: 50px; background: #3b82f6; color: #fff; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 1.2rem; }
.ts-info h4 { margin: 0 0 5px; color: #0f172a; font-size: 1rem; }
.ts-info span { color: #64748b; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 2. Minimal Clean Quote
  {
    _id: "ts2",
    title: "Minimal Clean Quote",
    slug: "minimal-clean-quote",
    description: "A single, massive quote focusing entirely on typography.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonials", "minimal", "clean", "typography"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-mn">
  <blockquote>
    "An absolute game-changer. We stripped out 50% of our CSS bundle size while actually improving the design of our application."
  </blockquote>
  <div class="mn-author">
    <strong>Sarah Jenkins</strong>
    <span>VP of Engineering, StartupX</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; align-items: center; min-height: 50vh; }
.ts-mn { max-width: 800px; width: 100%; text-align: center; }
.ts-mn blockquote { margin: 0 0 40px; font-size: 2.5rem; font-weight: 300; line-height: 1.4; color: #000; letter-spacing: -1px; }
.mn-author { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.mn-author strong { font-size: 1.1rem; color: #000; text-transform: uppercase; letter-spacing: 2px; }
.mn-author span { color: #666; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Reviews
  {
    _id: "ts3",
    title: "Cyberpunk Reviews",
    slug: "cyberpunk-reviews",
    description: "Hacker-themed testimonial layout with neon borders.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["testimonials", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-cy">
  <div class="cy-card">
    <div class="cy-head">LOG_ID: 884.2</div>
    <p>> "SYSTEM INTEGRATION FLAWLESS. FRONTEND RENDER TIME DECREASED BY 400%."</p>
    <div class="cy-user">USER: ROOT // DECKARD</div>
  </div>
  <div class="cy-card cy-glow">
    <div class="cy-head">LOG_ID: 992.1</div>
    <p>> "THE NEON AESTHETIC IS PERFECT. NO BLOAT, JUST RAW CSS."</p>
    <div class="cy-user">USER: ADMIN // TRINITY</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; }
.ts-cy { display: flex; flex-wrap: wrap; gap: 40px; max-width: 900px; width: 100%; justify-content: center; }
.cy-card { background: rgba(0,20,0,0.8); border: 1px solid #0f0; padding: 30px; width: 350px; display: flex; flex-direction: column; }
.cy-glow { border-color: #f0f; box-shadow: 0 0 15px rgba(255,0,255,0.2); }
.cy-head { color: #0f0; border-bottom: 1px dashed #0f0; padding-bottom: 10px; margin-bottom: 20px; letter-spacing: 2px; font-weight: bold; }
.cy-glow .cy-head { color: #f0f; border-color: #f0f; text-shadow: 0 0 5px #f0f; }
.cy-card p { color: #0aa; font-size: 1rem; line-height: 1.5; margin: 0 0 30px; flex-grow: 1; }
.cy-glow p { color: #a0a; }
.cy-user { color: #0f0; font-weight: bold; font-size: 0.9rem; }
.cy-glow .cy-user { color: #f0f; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Testimonials
  {
    _id: "ts4",
    title: "Glassmorphism Testimonials",
    slug: "glassmorphism-testimonials",
    description: "Frosted glass review cards floating over a vivid background.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["testimonials", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="ts-gl">
    <div class="gl-card">
      <div class="gl-stars">★★★★★</div>
      <p>"This library is magic. It looks stunning and the code is so simple to read and modify."</p>
      <span>— Alex R., Frontend Engineer</span>
    </div>
    <div class="gl-card">
      <div class="gl-stars">★★★★★</div>
      <p>"Finally, a component library that doesn't force a heavy JS framework down my throat."</p>
      <span>— Sam W., Indie Hacker</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.ts-gl { display: flex; flex-wrap: wrap; gap: 30px; max-width: 900px; width: 100%; justify-content: center; }
.gl-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 40px; width: 350px; color: #fff; transition: 0.3s; }
.gl-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.15); }
.gl-stars { color: #facc15; font-size: 1.5rem; margin-bottom: 20px; letter-spacing: 2px; }
.gl-card p { margin: 0 0 30px; font-size: 1.1rem; line-height: 1.6; opacity: 0.9; }
.gl-card span { display: block; opacity: 0.7; font-size: 0.9rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 5. Brutalist Reviews
  {
    _id: "ts5",
    title: "Brutalist Reviews",
    slug: "brutalist-reviews",
    description: "High contrast, aggressive typography for bold social proof.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["testimonials", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-br">
  <div class="br-item">
    <p>IT'S FAST. IT'S LOUD. IT WORKS.</p>
    <div class="br-author">>> MARK Z.</div>
  </div>
  <div class="br-item br-main">
    <p>BEST DECISION WE EVER MADE.</p>
    <div class="br-author">>> ELON M.</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.ts-br { display: flex; flex-wrap: wrap; gap: 40px; max-width: 900px; width: 100%; justify-content: center; }
.br-item { background: #fff; border: 6px solid #000; box-shadow: 12px 12px 0 #000; padding: 40px; width: 350px; display: flex; flex-direction: column; }
.br-main { background: #facc15; }
.br-item p { font-size: 2.5rem; font-weight: 900; line-height: 1.1; margin: 0 0 40px; flex-grow: 1; text-transform: uppercase; }
.br-author { font-size: 1.2rem; font-weight: 900; background: #000; color: #fff; padding: 10px; display: inline-block; align-self: flex-start; }
.br-main .br-author { background: #000; color: #facc15; }`,
    jsCode: ``
  },

  // 6. Neumorphic Testimonials
  {
    _id: "ts6",
    title: "Neumorphic Testimonials",
    slug: "neumorphic-testimonials",
    description: "Soft UI embossed boxes containing reviews.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["testimonials", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-neu">
  <div class="neu-card">
    <p>"Smooth, elegant, and perfectly structured. It feels like interacting with a physical object."</p>
    <div class="neu-author">- UI Designer</div>
  </div>
  <div class="neu-card">
    <p>"The code is as soft and clean as the design itself. Highly recommended for modern projects."</p>
    <div class="neu-author">- Fullstack Dev</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.ts-neu { display: flex; flex-wrap: wrap; gap: 50px; max-width: 900px; width: 100%; justify-content: center; }
.neu-card { background: #e0e5ec; padding: 40px; border-radius: 30px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); width: 350px; }
.neu-card p { color: #4a5568; font-size: 1.1rem; line-height: 1.6; margin: 0 0 30px; }
.neu-author { color: #718096; font-weight: bold; text-align: right; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Testimonials
  {
    _id: "ts7",
    title: "Dark Mode Glow Testimonials",
    slug: "dark-mode-glow-testimonials",
    description: "Dark cards with glowing avatar rings and text.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["testimonials", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-dg">
  <div class="dg-card">
    <div class="dg-avatar">JD</div>
    <p>"The dark mode implementations are flawless. Saved us weeks of development time."</p>
    <span>John Doe</span>
  </div>
  <div class="dg-card">
    <div class="dg-avatar dg-glow">AS</div>
    <p>"Incredible attention to detail. The glow effects perform perfectly without lag."</p>
    <span>Alice Smith</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.ts-dg { display: flex; flex-wrap: wrap; gap: 40px; max-width: 900px; width: 100%; justify-content: center; }
.dg-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 20px; padding: 40px; width: 350px; text-align: center; transition: 0.3s; }
.dg-card:hover { transform: translateY(-5px); border-color: #334155; }
.dg-avatar { width: 60px; height: 60px; border-radius: 50%; background: #1e293b; color: #f8fafc; display: flex; justify-content: center; align-items: center; font-weight: bold; margin: 0 auto 20px; border: 2px solid #3b82f6; }
.dg-glow { border-color: #8b5cf6; box-shadow: 0 0 20px rgba(139,92,246,0.5); }
.dg-card p { color: #cbd5e1; font-size: 1.1rem; line-height: 1.6; margin: 0 0 20px; }
.dg-card span { color: #f8fafc; font-weight: bold; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 8. Marquee Testimonials
  {
    _id: "ts8",
    title: "Marquee Testimonials",
    slug: "marquee-testimonials",
    description: "An infinite scrolling row of review cards.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["testimonials", "marquee", "animation", "scroll"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-mq">
  <div class="mq-track">
    <div class="mq-card">"Best library ever!" - User 1</div>
    <div class="mq-card">"Saved me 100 hours." - User 2</div>
    <div class="mq-card">"Looks amazing." - User 3</div>
    <div class="mq-card">"Clean code." - User 4</div>
    <!-- Duplicates for scrolling -->
    <div class="mq-card">"Best library ever!" - User 1</div>
    <div class="mq-card">"Saved me 100 hours." - User 2</div>
    <div class="mq-card">"Looks amazing." - User 3</div>
    <div class="mq-card">"Clean code." - User 4</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 0; overflow-x: hidden; }
.ts-mq { width: 100%; overflow: hidden; display: flex; }
.mq-track { display: inline-flex; gap: 30px; padding-left: 30px; animation: scroll 20s linear infinite; }
.mq-card { background: #fff; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0; width: 300px; white-space: normal; font-size: 1.1rem; color: #334155; font-weight: 500; }
@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.ts-mq:hover .mq-track { animation-play-state: paused; }`,
    jsCode: ``
  },

  // 9. Split Layout Testimonial
  {
    _id: "ts9",
    title: "Split Layout Testimonial",
    slug: "split-layout-testimonial",
    description: "Large featured quote on the left, grid of smaller reviews on the right.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonials", "split", "layout", "grid"],
    isPremium: false,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-sp">
  <div class="sp-left">
    <h2>"YourUI is the foundation of our entire design system. It is simply unmatched."</h2>
    <span>— Chief Design Officer</span>
  </div>
  <div class="sp-right">
    <div class="sp-card">"Super fast." - Dev</div>
    <div class="sp-card">"So clean." - Designer</div>
    <div class="sp-card">"Easy to use." - PM</div>
    <div class="sp-card">"Love it." - CEO</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.ts-sp { max-width: 1100px; width: 100%; display: flex; gap: 60px; align-items: center; }
.sp-left { flex: 1; }
.sp-left h2 { margin: 0 0 20px; font-size: 2.5rem; color: #0f172a; line-height: 1.3; }
.sp-left span { color: #64748b; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
.sp-right { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.sp-card { background: #f8fafc; border: 1px solid #e2e8f0; padding: 30px; border-radius: 12px; font-size: 1.1rem; color: #334155; }
@media (max-width: 900px) { .ts-sp { flex-direction: column; text-align: center; } }`,
    jsCode: ``
  },

  // 10. Large Avatar Centered
  {
    _id: "ts10",
    title: "Large Avatar Centered",
    slug: "large-avatar-centered-testimonial",
    description: "A single review focusing on a large user image and bold typography.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonials", "avatar", "centered", "clean"],
    isPremium: true,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-av">
  <div class="av-img"></div>
  <div class="av-stars">★★★★★</div>
  <p>"I've tried Tailwind, Bootstrap, and MUI. This is the first time I feel like I actually own my code again."</p>
  <h4>Michael Scott</h4>
  <span>Regional Manager</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; padding: 100px 20px; display: flex; justify-content: center; }
.ts-av { max-width: 700px; width: 100%; text-align: center; background: #fff; padding: 60px 40px; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
.av-img { width: 100px; height: 100px; background: #cbd5e1; border-radius: 50%; margin: 0 auto 20px; border: 4px solid #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.av-stars { color: #facc15; font-size: 1.5rem; margin-bottom: 20px; }
.ts-av p { font-size: 1.5rem; color: #1e293b; line-height: 1.6; margin: 0 0 30px; font-weight: 500; }
.ts-av h4 { margin: 0 0 5px; font-size: 1.2rem; color: #0f172a; }
.ts-av span { color: #64748b; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }`,
    jsCode: ``
  }
];
