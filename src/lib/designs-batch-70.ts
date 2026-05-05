import { Design } from "./designs-data";

export const BATCH_70_DESIGNS: Design[] = [
  // 1. Classic 3-Column Grid
  {
    _id: "tm1",
    title: "Classic 3-Column Grid",
    slug: "classic-3-column-grid",
    description: "Standard clean testimonial cards with avatars, names, roles, and star ratings.",
    category: "Testimonials Grids",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonials", "grid", "classic", "reviews"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-cl">
  <div class="tm-c-card">
    <div class="tm-c-stars">★★★★★</div>
    <p>"This platform has completely transformed how our team operates. The efficiency gains are truly remarkable and immediate."</p>
    <div class="tm-c-user">
      <img src="https://i.pravatar.cc/150?u=1" alt="Sarah J." />
      <div>
        <strong>Sarah Jenkins</strong>
        <span>Director of Operations, TechFlow</span>
      </div>
    </div>
  </div>
  <div class="tm-c-card">
    <div class="tm-c-stars">★★★★★</div>
    <p>"I've tried dozens of similar tools, but nothing comes close to the intuitive design and powerful features offered here."</p>
    <div class="tm-c-user">
      <img src="https://i.pravatar.cc/150?u=2" alt="Michael C." />
      <div>
        <strong>Michael Chen</strong>
        <span>Lead Developer, StartupX</span>
      </div>
    </div>
  </div>
  <div class="tm-c-card">
    <div class="tm-c-stars">★★★★★</div>
    <p>"Customer support is unparalleled. They helped us migrate our entire infrastructure over a single weekend with zero downtime."</p>
    <div class="tm-c-user">
      <img src="https://i.pravatar.cc/150?u=3" alt="Emily R." />
      <div>
        <strong>Emily Rodriguez</strong>
        <span>CTO, Innovate Inc.</span>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 60px 20px; display: flex; justify-content: center; }
.tm-cl { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; max-width: 1100px; width: 100%; }
.tm-c-card { background: #fff; padding: 35px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; display: flex; flex-direction: column; justify-content: space-between; }
.tm-c-stars { color: #f59e0b; margin-bottom: 20px; font-size: 1.2rem; letter-spacing: 2px; }
.tm-c-card p { margin: 0 0 30px; color: #334155; font-size: 1.05rem; line-height: 1.6; font-style: italic; }
.tm-c-user { display: flex; align-items: center; gap: 15px; border-top: 1px solid #f1f5f9; padding-top: 20px; }
.tm-c-user img { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
.tm-c-user strong { display: block; color: #0f172a; font-weight: 600; font-size: 1rem; margin-bottom: 2px; }
.tm-c-user span { color: #64748b; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 2. Minimal Quote Grid
  {
    _id: "tm2",
    title: "Minimal Quote Grid",
    slug: "minimal-quote-grid",
    description: "Elegant layout focusing entirely on typography with huge quote marks.",
    category: "Testimonials Grids",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonials", "minimal", "typography", "clean"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-mn">
  <div class="tm-m-card">
    <div class="tm-m-mark">"</div>
    <p>A masterclass in modern web design. Absolutely flawless execution.</p>
    <strong>— David K.</strong>
  </div>
  <div class="tm-m-card">
    <div class="tm-m-mark">"</div>
    <p>We saw a 40% increase in conversions within the first week of deployment.</p>
    <strong>— Lisa M.</strong>
  </div>
  <div class="tm-m-card">
    <div class="tm-m-mark">"</div>
    <p>The attention to detail is evident in every single component.</p>
    <strong>— James T.</strong>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; padding: 80px 20px; display: flex; justify-content: center; }
.tm-mn { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 50px; max-width: 1000px; width: 100%; }
.tm-m-card { position: relative; padding-left: 20px; border-left: 2px solid #111; }
.tm-m-mark { position: absolute; top: -30px; left: -10px; font-size: 5rem; color: rgba(0,0,0,0.05); font-family: Georgia, serif; line-height: 1; }
.tm-m-card p { margin: 0 0 20px; font-size: 1.25rem; color: #111; line-height: 1.5; font-weight: 500; }
.tm-m-card strong { color: #666; font-size: 0.95rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Testimonials
  {
    _id: "tm3",
    title: "Cyberpunk Testimonials",
    slug: "cyberpunk-testimonials",
    description: "Hacker aesthetic reviews with neon borders and monospace fonts.",
    category: "Testimonials Grids",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["testimonials", "cyberpunk", "neon", "hacker"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-cy">
  <div class="cy-t-card">
    <div class="cy-t-head">USER: N30_HACKER</div>
    <p>System stability at 100%. Latency dropped to zero. The mainframe is secure.</p>
    <div class="cy-t-rating">[ 5 / 5 ]</div>
  </div>
  <div class="cy-t-card">
    <div class="cy-t-head">USER: GHOST_IN_SHELL</div>
    <p>The UI is flawlessly integrated with my neural port. A+ development work.</p>
    <div class="cy-t-rating">[ 5 / 5 ]</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 80px 20px; display: flex; justify-content: center; }
.tm-cy { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; max-width: 900px; width: 100%; }
.cy-t-card { background: rgba(0,0,0,0.8); border: 1px solid #0f0; padding: 30px; position: relative; box-shadow: 0 0 10px rgba(0,255,0,0.1); }
.cy-t-card::before, .cy-t-card::after { content: ''; position: absolute; width: 15px; height: 15px; }
.cy-t-card::before { top: -1px; left: -1px; border-top: 2px solid #0ff; border-left: 2px solid #0ff; }
.cy-t-card::after { bottom: -1px; right: -1px; border-bottom: 2px solid #f0f; border-right: 2px solid #f0f; }
.cy-t-head { color: #f0f; font-weight: bold; margin-bottom: 15px; border-bottom: 1px dashed #0f0; padding-bottom: 10px; }
.cy-t-card p { color: #0f0; line-height: 1.5; text-shadow: 0 0 2px #0f0; margin: 0 0 20px; }
.cy-t-rating { color: #0ff; font-weight: bold; text-align: right; text-shadow: 0 0 5px #0ff; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Testimonials
  {
    _id: "tm4",
    title: "Glassmorphism Testimonials",
    slug: "glassmorphism-testimonials",
    description: "Frosted glass cards floating over a vibrant, colorful background.",
    category: "Testimonials Grids",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["testimonials", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="tm-gl">
    <div class="tm-g-card">
      <img src="https://i.pravatar.cc/150?u=4" alt="Alex" />
      <p>"The visual aesthetic is simply stunning. It completely modernized our app."</p>
      <strong>Alex Rivera</strong>
    </div>
    <div class="tm-g-card">
      <img src="https://i.pravatar.cc/150?u=5" alt="Jamie" />
      <p>"Implementation was a breeze. Best component library I've ever used."</p>
      <strong>Jamie Lane</strong>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.tm-gl { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; max-width: 900px; width: 100%; }
.tm-g-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; padding: 40px; color: #fff; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.tm-g-card img { width: 80px; height: 80px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.5); margin-bottom: 20px; }
.tm-g-card p { margin: 0 0 20px; font-size: 1.1rem; line-height: 1.5; text-shadow: 0 1px 2px rgba(0,0,0,0.1); }
.tm-g-card strong { font-size: 1.1rem; font-weight: 600; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 5. Brutalist Testimonials
  {
    _id: "tm5",
    title: "Brutalist Testimonials",
    slug: "brutalist-testimonials",
    description: "Loud, high contrast design with heavy black borders and offset shadows.",
    category: "Testimonials Grids",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["testimonials", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-br">
  <div class="tm-b-card">
    <div class="tm-b-head">
      <img src="https://i.pravatar.cc/150?u=6" alt="User" />
      <h3>SAM SMITH</h3>
    </div>
    <p>"ABSOLUTE FIRE. NO OTHER WAY TO DESCRIBE IT."</p>
  </div>
  <div class="tm-b-card">
    <div class="tm-b-head">
      <img src="https://i.pravatar.cc/150?u=7" alt="User" />
      <h3>TINA FEY</h3>
    </div>
    <p>"IT'S LOUD. IT'S FAST. IT GETS THE JOB DONE PERFECTLY."</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; padding: 80px 20px; }
.tm-br { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 50px; max-width: 900px; width: 100%; }
.tm-b-card { background: #fff; border: 4px solid #000; padding: 30px; box-shadow: 15px 15px 0 #000; transition: 0.1s; }
.tm-b-card:hover { transform: translate(5px, 5px); box-shadow: 10px 10px 0 #000; }
.tm-b-card:nth-child(1) { background: #facc15; }
.tm-b-card:nth-child(2) { background: #3b82f6; color: #fff; }
.tm-b-head { display: flex; align-items: center; gap: 20px; border-bottom: 4px solid #000; padding-bottom: 20px; margin-bottom: 20px; }
.tm-b-card:nth-child(2) .tm-b-head { border-color: #fff; }
.tm-b-head img { width: 60px; height: 60px; border-radius: 0; border: 3px solid #000; }
.tm-b-head h3 { margin: 0; font-size: 1.5rem; font-weight: 900; }
.tm-b-card p { margin: 0; font-size: 1.5rem; font-weight: 900; line-height: 1.3; text-transform: uppercase; }`,
    jsCode: ``
  },

  // 6. Neumorphic Testimonials
  {
    _id: "tm6",
    title: "Neumorphic Testimonials",
    slug: "neumorphic-testimonials",
    description: "Soft UI design with inset text and extruded avatar plates.",
    category: "Testimonials Grids",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["testimonials", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-neu">
  <div class="tm-n-card">
    <div class="tm-n-img">
      <img src="https://i.pravatar.cc/150?u=8" alt="User" />
    </div>
    <div class="tm-n-text">
      "The soft aesthetics fit perfectly with our healthcare brand. Highly recommended."
    </div>
    <strong>Dr. Robert Vance</strong>
  </div>
  <div class="tm-n-card">
    <div class="tm-n-img">
      <img src="https://i.pravatar.cc/150?u=9" alt="User" />
    </div>
    <div class="tm-n-text">
      "Clean, modern, and exceptionally well coded. A joy to work with."
    </div>
    <strong>Anna Lee</strong>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; padding: 80px 20px; }
.tm-neu { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; max-width: 900px; width: 100%; }
.tm-n-card { background: #e0e5ec; padding: 40px; border-radius: 30px; box-shadow: 15px 15px 30px rgba(163,177,198,0.6), -15px -15px 30px rgba(255,255,255,0.5); text-align: center; }
.tm-n-img { width: 90px; height: 90px; margin: 0 auto 30px; border-radius: 50%; padding: 5px; background: #e0e5ec; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); }
.tm-n-img img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.tm-n-text { margin-bottom: 20px; padding: 20px; border-radius: 15px; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.4), inset -5px -5px 10px rgba(255,255,255,0.4); color: #718096; font-style: italic; font-size: 0.95rem; line-height: 1.5; }
.tm-n-card strong { color: #2d3748; font-size: 1.1rem; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Grid
  {
    _id: "tm7",
    title: "Dark Mode Glow Grid",
    slug: "dark-mode-glow-grid",
    description: "Deep dark layout with glowing neon edges on hover.",
    category: "Testimonials Grids",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["testimonials", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-dg">
  <div class="tm-d-card">
    <div class="tm-d-stars">★★★★★</div>
    <p>"It's rare to find a library that looks this good in dark mode without tweaking."</p>
    <div class="tm-d-user">
      <img src="https://i.pravatar.cc/150?u=10" alt="User" />
      <div>
        <strong>Marcus Web</strong>
        <span>Frontend Engineer</span>
      </div>
    </div>
  </div>
  <div class="tm-d-card">
    <div class="tm-d-stars">★★★★★</div>
    <p>"The glowing effects are subtle yet impactful. Perfect for our new crypto project."</p>
    <div class="tm-d-user">
      <img src="https://i.pravatar.cc/150?u=11" alt="User" />
      <div>
        <strong>Diana Prince</strong>
        <span>Product Manager</span>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; display: flex; justify-content: center; padding: 80px 20px; }
.tm-dg { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; max-width: 900px; width: 100%; }
.tm-d-card { background: #0f172a; padding: 40px; border-radius: 20px; border: 1px solid #1e293b; transition: 0.3s; position: relative; overflow: hidden; z-index: 1; }
.tm-d-card::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 50%); z-index: -1; opacity: 0; transition: 0.5s; pointer-events: none; }
.tm-d-card:hover { border-color: #8b5cf6; box-shadow: 0 10px 30px rgba(139,92,246,0.15); transform: translateY(-5px); }
.tm-d-card:hover::before { opacity: 1; }
.tm-d-stars { color: #8b5cf6; margin-bottom: 20px; font-size: 1.2rem; text-shadow: 0 0 10px rgba(139,92,246,0.5); }
.tm-d-card p { margin: 0 0 30px; color: #cbd5e1; font-size: 1.1rem; line-height: 1.6; }
.tm-d-user { display: flex; align-items: center; gap: 15px; }
.tm-d-user img { width: 50px; height: 50px; border-radius: 50%; border: 2px solid #334155; }
.tm-d-user strong { display: block; color: #f8fafc; font-weight: 600; margin-bottom: 2px; }
.tm-d-user span { color: #64748b; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 8. Masonry Grid (Simulated via CSS columns)
  {
    _id: "tm8",
    title: "Masonry Grid",
    slug: "masonry-grid",
    description: "Pinterest-style masonry layout for reviews of varying lengths.",
    category: "Testimonials Grids",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["testimonials", "masonry", "grid", "pinterest"],
    isPremium: true,
    views: 41400,
    downloads: 11100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-mas">
  <div class="tm-m-item">
    <p>"Short and sweet. Highly recommended!"</p>
    <strong>- Alice</strong>
  </div>
  <div class="tm-m-item">
    <p>"This is a much longer review to demonstrate how the masonry layout handles different heights automatically. It wraps perfectly without leaving awkward horizontal gaps in the grid structure. Truly a beautiful way to display content."</p>
    <strong>- Bob Builder</strong>
  </div>
  <div class="tm-m-item">
    <p>"Changed my life. 10/10."</p>
    <strong>- Charlie</strong>
  </div>
  <div class="tm-m-item">
    <p>"Medium length review here. Solid product, good support, will buy again."</p>
    <strong>- Dave</strong>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 60px 20px; }
.tm-mas { column-count: 2; column-gap: 20px; max-width: 1000px; margin: 0 auto; }
.tm-m-item { break-inside: avoid; background: #fff; padding: 25px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
.tm-m-item p { margin: 0 0 15px; color: #334155; line-height: 1.6; }
.tm-m-item strong { color: #0f172a; font-size: 0.9rem; }
@media (max-width: 768px) { .tm-mas { column-count: 1; } }`,
    jsCode: ``
  },

  // 9. Video Review Grid
  {
    _id: "tm9",
    title: "Video Review Grid",
    slug: "video-review-grid",
    description: "Layout tailored for video testimonials with play button overlays.",
    category: "Testimonials Grids",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonials", "video", "media", "play"],
    isPremium: false,
    views: 33100,
    downloads: 8700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-vid">
  <div class="tm-v-card">
    <div class="tm-v-thumb">
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" alt="Video thumb" />
      <div class="tm-v-play">▶</div>
    </div>
    <div class="tm-v-info">
      <strong>How TechCorp increased sales by 200%</strong>
      <span>TechCorp CEO</span>
    </div>
  </div>
  <div class="tm-v-card">
    <div class="tm-v-thumb">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" alt="Video thumb" />
      <div class="tm-v-play">▶</div>
    </div>
    <div class="tm-v-info">
      <strong>StartupX's journey to 1M users</strong>
      <span>StartupX Founder</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 60px 20px; display: flex; justify-content: center; }
.tm-vid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; max-width: 900px; width: 100%; }
.tm-v-card { cursor: pointer; group; }
.tm-v-thumb { position: relative; border-radius: 12px; overflow: hidden; aspect-ratio: 16/9; margin-bottom: 15px; }
.tm-v-thumb img { width: 100%; height: 100%; object-fit: cover; transition: 0.3s; }
.tm-v-card:hover img { transform: scale(1.05); }
.tm-v-play { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: rgba(0,0,0,0.6); color: #fff; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.5rem; transition: 0.2s; backdrop-filter: blur(4px); }
.tm-v-card:hover .tm-v-play { background: #3b82f6; transform: translate(-50%, -50%) scale(1.1); }
.tm-v-info strong { display: block; color: #0f172a; font-size: 1.1rem; margin-bottom: 5px; }
.tm-v-info span { color: #64748b; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 10. Logo Review Grid
  {
    _id: "tm10",
    title: "Logo Review Grid",
    slug: "logo-review-grid",
    description: "B2B focused reviews utilizing company logos instead of personal avatars.",
    category: "Testimonials Grids",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonials", "b2b", "logos", "enterprise"],
    isPremium: true,
    views: 38500,
    downloads: 9200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tm-lg">
  <div class="tm-l-card">
    <div class="tm-l-logo">ACME Corp</div>
    <p>"YourUI provided the exact foundation we needed to build our enterprise dashboard. Scalable and robust."</p>
  </div>
  <div class="tm-l-card">
    <div class="tm-l-logo">Globex</div>
    <p>"We dropped our previous CSS framework entirely. The performance gains alone were worth the switch."</p>
  </div>
  <div class="tm-l-card">
    <div class="tm-l-logo">Initech</div>
    <p>"Our development speed has doubled since we started utilizing these ready-made components."</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; padding: 60px 20px; display: flex; justify-content: center; }
.tm-lg { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 1000px; width: 100%; }
.tm-l-card { background: #fff; border: 1px solid #eaeaea; padding: 40px 30px; text-align: center; border-radius: 8px; transition: 0.3s; }
.tm-l-card:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.05); transform: translateY(-5px); }
.tm-l-logo { font-size: 1.8rem; font-weight: 900; color: #111; margin-bottom: 25px; letter-spacing: -1px; text-transform: uppercase; }
.tm-l-card p { margin: 0; color: #666; font-size: 1rem; line-height: 1.6; }`,
    jsCode: ``
  }
];
