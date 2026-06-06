import { Design } from "./designs-data";

export const BATCH_58_DESIGNS: Design[] = [
  // 1. Classic Vertical Blog Card
  {
    _id: "bc1",
    title: "Classic Vertical Blog Card",
    slug: "classic-vertical-blog-card",
    description: "Standard clean article card with image top and content below.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["blog", "article", "classic", "card"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<article class="bg-c">
  <div class="bg-c-img">
    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80" alt="Blog cover" />
  </div>
  <div class="bg-c-body">
    <span class="bg-c-tag">Technology</span>
    <h3>The Future of Web Design in 2024</h3>
    <p>Discover the emerging trends that will shape the digital landscape in the coming year, from AI integration to spatial computing.</p>
    <div class="bg-c-meta">
      <span>Oct 12, 2023</span> • <span>5 min read</span>
    </div>
  </div>
</article>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.bg-c { width: 320px; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; transition: 0.3s; cursor: pointer; }
.bg-c:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.bg-c-img { width: 100%; height: 200px; overflow: hidden; }
.bg-c-img img { width: 100%; height: 100%; object-fit: cover; transition: 0.3s; }
.bg-c:hover .bg-c-img img { transform: scale(1.05); }
.bg-c-body { padding: 20px; }
.bg-c-tag { color: #3b82f6; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; display: inline-block; }
.bg-c h3 { margin: 0 0 10px; color: #0f172a; font-size: 1.25rem; font-weight: 700; line-height: 1.4; }
.bg-c p { margin: 0 0 20px; color: #64748b; font-size: 0.95rem; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.bg-c-meta { display: flex; color: #94a3b8; font-size: 0.85rem; gap: 8px; }`,
    jsCode: ``
  },

  // 2. Horizontal List Blog Card
  {
    _id: "bc2",
    title: "Horizontal List Blog Card",
    slug: "horizontal-list-blog-card",
    description: "Compact wide layout perfect for feed or search results.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["blog", "horizontal", "list", "feed"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<article class="bg-h">
  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80" alt="Blog cover" />
  <div class="bg-h-info">
    <div class="bg-h-meta">Productivity • Sep 28</div>
    <h3>10 Remote Work Habits You Need to Build</h3>
    <p>Boost your efficiency and maintain work-life balance with these proven daily routines.</p>
  </div>
</article>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.bg-h { display: flex; width: 600px; max-width: 90%; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; transition: 0.2s; cursor: pointer; }
.bg-h:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); }
.bg-h img { width: 200px; height: 160px; object-fit: cover; }
.bg-h-info { padding: 20px; display: flex; flex-direction: column; justify-content: center; }
.bg-h-meta { color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; font-weight: 600; }
.bg-h h3 { margin: 0 0 10px; color: #0f172a; font-size: 1.2rem; font-weight: 700; }
.bg-h p { margin: 0; color: #475569; font-size: 0.95rem; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
@media (max-width: 600px) { .bg-h { flex-direction: column; } .bg-h img { width: 100%; height: 200px; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Blog Card
  {
    _id: "bc3",
    title: "Cyberpunk Blog Card",
    slug: "cyberpunk-blog-card",
    description: "Neon lit, high tech article card for gaming or dev news.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["blog", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<article class="bg-cy">
  <div class="bg-cy-img">
    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" alt="Cyber cover" />
  </div>
  <div class="bg-cy-body">
    <div class="bg-cy-cat">SYS_UPDATE</div>
    <h3>NEURAL LINK v2.4 DEPLOYED</h3>
    <p>Patch notes for the latest cerebral interface firmware. Mandatory upgrade for all operatives.</p>
    <button>READ_MORE >></button>
  </div>
</article>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.bg-cy { width: 320px; background: rgba(0,0,0,0.8); border: 1px solid #0ff; position: relative; box-shadow: 0 0 10px rgba(0,255,255,0.1); overflow: hidden; }
.bg-cy::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: #f0f; box-shadow: 0 0 10px #f0f; z-index: 10; }
.bg-cy-img { height: 180px; width: 100%; overflow: hidden; border-bottom: 1px solid #0ff; }
.bg-cy-img img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.2) sepia(50%) hue-rotate(150deg); transition: 0.3s; }
.bg-cy:hover .bg-cy-img img { filter: grayscale(0%) contrast(1.2); transform: scale(1.05); }
.bg-cy-body { padding: 20px; }
.bg-cy-cat { color: #f0f; font-weight: bold; font-size: 0.8rem; margin-bottom: 10px; letter-spacing: 2px; text-shadow: 0 0 5px #f0f; }
.bg-cy h3 { margin: 0 0 15px; color: #fff; font-size: 1.1rem; letter-spacing: 1px; text-shadow: 0 0 5px #0ff; }
.bg-cy p { margin: 0 0 20px; color: #aaa; font-size: 0.9rem; line-height: 1.4; }
.bg-cy button { background: transparent; border: 1px solid #0ff; color: #0ff; padding: 8px 15px; font-family: inherit; font-weight: bold; cursor: pointer; transition: 0.2s; box-shadow: inset 0 0 5px rgba(0,255,255,0); }
.bg-cy button:hover { background: #0ff; color: #000; box-shadow: 0 0 10px #0ff; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Blog Card
  {
    _id: "bc4",
    title: "Glassmorphism Blog Card",
    slug: "glassmorphism-blog-card",
    description: "Frosted glass aesthetic over a vibrant background.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["blog", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <article class="bg-gl">
    <div class="bg-g-img"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" alt="Tech" /></div>
    <div class="bg-g-content">
      <span class="bg-g-cat">Design</span>
      <h3>Embracing Minimalism</h3>
      <p>Why less is more when designing user interfaces for complex data applications.</p>
      <a href="#" class="bg-g-link">Read article →</a>
    </div>
  </article>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.bg-gl { width: 300px; border-radius: 24px; background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.15); overflow: hidden; color: #fff; transition: 0.3s; }
.bg-gl:hover { transform: translateY(-5px); background: rgba(255,255,255,0.15); }
.bg-g-img { width: 100%; height: 180px; }
.bg-g-img img { width: 100%; height: 100%; object-fit: cover; }
.bg-g-content { padding: 25px; }
.bg-g-cat { display: inline-block; padding: 4px 12px; background: rgba(255,255,255,0.2); border-radius: 20px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 1px; backdrop-filter: blur(5px); }
.bg-gl h3 { margin: 0 0 10px; font-size: 1.3rem; font-weight: 600; }
.bg-gl p { margin: 0 0 20px; color: rgba(255,255,255,0.8); font-size: 0.95rem; line-height: 1.5; }
.bg-g-link { color: #fff; text-decoration: none; font-weight: 600; font-size: 0.9rem; }
.bg-g-link:hover { text-decoration: underline; }`,
    jsCode: ``
  },

  // 5. Brutalist Blog Card
  {
    _id: "bc5",
    title: "Brutalist Blog Card",
    slug: "brutalist-blog-card",
    description: "Thick borders, harsh shadows, and bold typography for editorial impact.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["blog", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<article class="bg-br">
  <div class="bg-b-date">NOV 24</div>
  <img src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=800&q=80" alt="Design" />
  <div class="bg-b-body">
    <h3>THE DEATH OF THE HAMBURGER MENU</h3>
    <p>WHY WE ARE RETURNING TO BOTTOM NAVIGATION PATTERNS IN 2024.</p>
    <a href="#">READ MORE</a>
  </div>
</article>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #facc15; }
.bg-br { width: 320px; background: #fff; border: 4px solid #000; box-shadow: 10px 10px 0 #000; position: relative; transition: 0.2s; }
.bg-br:hover { transform: translate(-5px, -5px); box-shadow: 15px 15px 0 #000; }
.bg-b-date { position: absolute; top: -15px; right: -15px; background: #ec4899; color: #fff; border: 4px solid #000; padding: 5px 10px; font-weight: 900; font-size: 0.9rem; box-shadow: 4px 4px 0 #000; z-index: 10; }
.bg-br img { width: 100%; height: 200px; object-fit: cover; border-bottom: 4px solid #000; filter: grayscale(100%); transition: 0.3s; display: block; }
.bg-br:hover img { filter: grayscale(0%); }
.bg-b-body { padding: 25px; }
.bg-br h3 { margin: 0 0 15px; font-size: 1.4rem; font-weight: 900; color: #000; text-transform: uppercase; letter-spacing: -0.5px; line-height: 1.2; }
.bg-br p { margin: 0 0 20px; font-weight: 700; font-size: 0.9rem; color: #333; line-height: 1.4; }
.bg-br a { display: inline-block; background: #000; color: #fff; padding: 10px 20px; text-decoration: none; font-weight: 900; text-transform: uppercase; border: 2px solid #000; transition: 0.2s; }
.bg-br a:hover { background: #fff; color: #000; }`,
    jsCode: ``
  },

  // 6. Neumorphic Blog Card
  {
    _id: "bc6",
    title: "Neumorphic Blog Card",
    slug: "neumorphic-blog-card",
    description: "Soft UI frame where elements look extruded from the background.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["blog", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<article class="bg-neu">
  <div class="bg-n-img">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="Code" />
  </div>
  <h3>Mastering CSS Grid</h3>
  <p>A comprehensive guide to building complex layouts without frameworks.</p>
  <button>Read Full Post</button>
</article>`,
    cssCode: `body { margin: 0; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.bg-neu { width: 300px; padding: 20px; border-radius: 20px; background: #e0e5ec; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); }
.bg-n-img { width: 100%; height: 180px; border-radius: 12px; margin-bottom: 20px; overflow: hidden; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); padding: 5px; }
.bg-n-img img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }
.bg-neu h3 { margin: 0 0 10px; color: #2d3748; font-size: 1.25rem; font-weight: bold; }
.bg-neu p { margin: 0 0 20px; color: #718096; font-size: 0.95rem; line-height: 1.5; }
.bg-neu button { padding: 12px 25px; border: none; border-radius: 10px; background: #e0e5ec; color: #3182ce; font-weight: bold; cursor: pointer; box-shadow: 5px 5px 10px rgba(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5); transition: 0.2s; }
.bg-neu button:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Blog Card
  {
    _id: "bc7",
    title: "Dark Mode Glow Blog",
    slug: "dark-mode-glow-blog",
    description: "Deep dark card with subtle glowing borders on hover.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["blog", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<article class="bg-dg">
  <div class="bg-d-img"><img src="https://images.unsplash.com/photo-1531297180771-8c6f212560b4?w=800&q=80" alt="Dark space" /></div>
  <div class="bg-d-body">
    <div class="bg-d-meta">Engineering</div>
    <h3>Optimizing Node.js Performance</h3>
    <p>Learn how to identify bottlenecks and scale your backend services efficiently.</p>
  </div>
</article>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #020617; }
.bg-dg { width: 320px; background: #0f172a; border-radius: 16px; overflow: hidden; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.5); cursor: pointer; }
.bg-dg::before { content: ''; position: absolute; inset: 0; border-radius: 16px; padding: 2px; background: linear-gradient(135deg, rgba(59,130,246,0.5), rgba(236,72,153,0.5)); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0.3; transition: 0.3s; }
.bg-dg:hover::before { opacity: 1; }
.bg-dg:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(59,130,246,0.2); }
.bg-d-img { height: 180px; width: 100%; }
.bg-d-img img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: 0.3s; }
.bg-dg:hover .bg-d-img img { opacity: 1; transform: scale(1.05); }
.bg-d-body { padding: 25px; position: relative; z-index: 2; background: #0f172a; }
.bg-d-meta { color: #3b82f6; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
.bg-dg h3 { margin: 0 0 10px; color: #f8fafc; font-size: 1.25rem; font-weight: 700; }
.bg-dg p { margin: 0; color: #94a3b8; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 8. Overlay Text Blog Card
  {
    _id: "bc8",
    title: "Overlay Text Blog",
    slug: "overlay-text-blog",
    description: "Text rests directly over a darkened image background.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["blog", "overlay", "image", "hero"],
    isPremium: false,
    views: 29800,
    downloads: 7500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<article class="bg-ov">
  <img src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=800&q=80" alt="Nature" />
  <div class="bg-o-content">
    <span class="bg-o-cat">Travel</span>
    <h3>10 Hidden Gems in the Pacific Northwest</h3>
    <div class="bg-o-meta">By Sarah Lee • 4 min read</div>
  </div>
</article>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e2e8f0; }
.bg-ov { width: 320px; height: 400px; position: relative; border-radius: 16px; overflow: hidden; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.bg-ov img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.bg-ov:hover img { transform: scale(1.1); }
.bg-o-content { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 30px; color: #fff; }
.bg-o-cat { align-self: flex-start; background: #ef4444; color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; text-transform: uppercase; margin-bottom: 10px; }
.bg-ov h3 { margin: 0 0 10px; font-size: 1.4rem; font-weight: 700; line-height: 1.3; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
.bg-o-meta { color: #cbd5e1; font-size: 0.85rem; opacity: 0.9; }`,
    jsCode: ``
  },

  // 9. Minimal Typographic Blog Card
  {
    _id: "bc9",
    title: "Minimal Typographic Blog",
    slug: "minimal-typographic-blog",
    description: "No images, just clean elegant typography.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["blog", "typography", "minimal", "clean"],
    isPremium: false,
    views: 24200,
    downloads: 5800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<article class="bg-tp">
  <time>August 14, 2024</time>
  <h3>The Psychology of Colors in UX/UI Design</h3>
  <p>Understanding how different hues impact user behavior, emotions, and conversion rates across global markets.</p>
  <a href="#">Read article →</a>
</article>`,
    cssCode: `body { margin: 0; font-family: 'Georgia', serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #fff; }
.bg-tp { width: 340px; padding: 40px 0; border-bottom: 1px solid #eaeaea; transition: 0.3s; }
.bg-tp:hover { transform: translateX(10px); }
.bg-tp time { font-family: 'Inter', sans-serif; color: #888; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; display: block; }
.bg-tp h3 { margin: 0 0 15px; color: #111; font-size: 1.6rem; font-weight: normal; line-height: 1.3; }
.bg-tp p { font-family: 'Inter', sans-serif; margin: 0 0 20px; color: #555; font-size: 0.95rem; line-height: 1.6; }
.bg-tp a { font-family: 'Inter', sans-serif; color: #111; text-decoration: none; font-weight: 600; font-size: 0.9rem; border-bottom: 1px solid #111; padding-bottom: 2px; }
.bg-tp a:hover { color: #666; border-color: #666; }`,
    jsCode: ``
  },

  // 10. Hover Zoom Blog Card
  {
    _id: "bc10",
    title: "Hover Zoom Blog",
    slug: "hover-zoom-blog",
    description: "Compact card where the image zooms and text slides up slightly.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["blog", "animation", "zoom", "hover"],
    isPremium: true,
    views: 33100,
    downloads: 8400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<article class="bg-zm">
  <div class="bg-z-img">
    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Business" />
  </div>
  <div class="bg-z-content">
    <h3>Q3 Financial Report Analysis</h3>
    <p>A breakdown of the tech sector's performance in the third quarter of this year.</p>
  </div>
</article>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f1f5f9; }
.bg-zm { width: 300px; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); cursor: pointer; transition: 0.4s; }
.bg-z-img { width: 100%; height: 220px; overflow: hidden; }
.bg-z-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
.bg-zm:hover .bg-z-img img { transform: scale(1.15); }
.bg-z-content { padding: 25px; background: #fff; transform: translateY(0); transition: 0.4s; position: relative; z-index: 2; }
.bg-zm:hover .bg-z-content { transform: translateY(-10px); }
.bg-zm h3 { margin: 0 0 10px; color: #0f172a; font-size: 1.2rem; font-weight: 700; transition: color 0.3s; }
.bg-zm:hover h3 { color: #3b82f6; }
.bg-zm p { margin: 0; color: #64748b; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  }
];
