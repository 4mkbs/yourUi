import { Design } from "./designs-data";

export const BATCH_21_DESIGNS: Design[] = [
  // 1. Classic Magazine Layout
  {
    _id: "bc1",
    title: "Classic Magazine Card",
    slug: "classic-magazine-card",
    description: "A clean, highly readable blog card perfect for editorial or news sites.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    tags: ["blog", "magazine", "classic", "clean"],
    isPremium: false,
    views: 18400,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="mag-card">
  <div class="mag-img-wrapper">
    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80" alt="Blog Post">
    <span class="mag-category">Technology</span>
  </div>
  <div class="mag-content">
    <div class="mag-meta">
      <span>By Jane Doe</span>
      <span>•</span>
      <span>Oct 12, 2023</span>
    </div>
    <h3 class="mag-title"><a href="#">The Future of Artificial Intelligence in Web Design</a></h3>
    <p class="mag-excerpt">Discover how AI is reshaping the way we build, design, and interact with the web, creating personalized experiences at scale.</p>
    <a href="#" class="mag-read-more">Read Article <span>→</span></a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f9fafb; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.mag-card { background: #fff; border-radius: 12px; overflow: hidden; max-width: 400px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: 0.3s; }
.mag-card:hover { transform: translateY(-5px); box-shadow: 0 12px 20px rgba(0,0,0,0.1); }
.mag-img-wrapper { position: relative; height: 240px; overflow: hidden; }
.mag-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.mag-card:hover .mag-img-wrapper img { transform: scale(1.05); }
.mag-category { position: absolute; top: 15px; left: 15px; background: #3b82f6; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
.mag-content { padding: 25px; }
.mag-meta { display: flex; gap: 10px; color: #6b7280; font-size: 0.85rem; margin-bottom: 12px; }
.mag-title { margin: 0 0 12px 0; font-size: 1.4rem; line-height: 1.3; }
.mag-title a { color: #111827; text-decoration: none; transition: 0.2s; }
.mag-title a:hover { color: #3b82f6; }
.mag-excerpt { color: #4b5563; font-size: 0.95rem; line-height: 1.6; margin: 0 0 20px 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.mag-read-more { display: inline-flex; align-items: center; gap: 5px; color: #3b82f6; text-decoration: none; font-weight: bold; font-size: 0.95rem; transition: 0.2s; }
.mag-read-more span { transition: 0.2s; }
.mag-read-more:hover span { transform: translateX(5px); }`,
    jsCode: ``
  },

  // 2. Hover-Reveal Blog Card
  {
    _id: "bc2",
    title: "Hover-Reveal Blog Card",
    slug: "hover-reveal-blog-card",
    description: "An image-focused card where the text content slides up elegantly on hover.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    tags: ["blog", "hover", "overlay", "modern"],
    isPremium: true,
    views: 14200,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="hrb-card">
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80" alt="Code">
  <div class="hrb-overlay">
    <div class="hrb-content">
      <span class="hrb-tag">Development</span>
      <h3 class="hrb-title">Mastering CSS Grid in 2024</h3>
      <p class="hrb-desc">Learn the advanced techniques to build complex, responsive layouts with minimal code.</p>
      <a href="#" class="hrb-btn">Read More</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.hrb-card { position: relative; width: 100%; max-width: 400px; height: 500px; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); cursor: pointer; }
.hrb-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); }
.hrb-card:hover img { transform: scale(1.1); }
.hrb-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 30px; box-sizing: border-box; }
.hrb-content { transform: translateY(60px); transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1); }
.hrb-card:hover .hrb-content { transform: translateY(0); }
.hrb-tag { display: inline-block; color: #60a5fa; font-size: 0.8rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; }
.hrb-title { color: #fff; font-size: 1.8rem; margin: 0 0 15px 0; line-height: 1.2; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
.hrb-desc { color: #cbd5e1; font-size: 0.95rem; line-height: 1.5; margin: 0 0 20px 0; opacity: 0; transition: opacity 0.4s 0.1s; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.hrb-card:hover .hrb-desc { opacity: 1; }
.hrb-btn { display: inline-block; background: #fff; color: #0f172a; padding: 10px 20px; border-radius: 30px; font-weight: bold; text-decoration: none; font-size: 0.9rem; opacity: 0; transition: opacity 0.4s 0.2s, background 0.2s; }
.hrb-card:hover .hrb-btn { opacity: 1; }
.hrb-btn:hover { background: #60a5fa; color: #fff; }`,
    jsCode: ``
  },

  // 3. Brutalist News Block
  {
    _id: "bc3",
    title: "Brutalist News Block",
    slug: "brutalist-news-block",
    description: "High contrast, bold typography, and hard shadows for an aggressive editorial style.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["blog", "brutalist", "loud", "typography"],
    isPremium: true,
    views: 9800,
    downloads: 2700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="br-news-card">
  <div class="br-news-img">
    <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=600&q=80" alt="News">
  </div>
  <div class="br-news-body">
    <div class="br-news-meta">ISSUE #42 — DESIGN</div>
    <h3 class="br-news-title">THE DEATH OF MINIMALISM.</h3>
    <p class="br-news-text">Why brands are ditching clean lines for loud, chaotic, and authentic expressions of identity.</p>
    <button class="br-news-btn">READ NOW</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.br-news-card { width: 100%; max-width: 450px; background: #fff; border: 6px solid #000; box-shadow: 12px 12px 0 #000; transition: 0.1s; }
.br-news-card:hover { transform: translate(-4px, -4px); box-shadow: 16px 16px 0 #000; }
.br-news-img { border-bottom: 6px solid #000; height: 250px; overflow: hidden; }
.br-news-img img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(120%); transition: 0.3s; }
.br-news-card:hover .br-news-img img { filter: grayscale(0%) contrast(100%); }
.br-news-body { padding: 25px; }
.br-news-meta { font-size: 0.85rem; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 15px; color: #ef4444; }
.br-news-title { font-size: 2.2rem; font-weight: 900; text-transform: uppercase; line-height: 1.1; margin: 0 0 15px 0; color: #000; }
.br-news-text { font-size: 1.1rem; font-weight: bold; line-height: 1.4; color: #333; margin: 0 0 25px 0; }
.br-news-btn { width: 100%; background: #facc15; border: 4px solid #000; padding: 15px; font-size: 1.2rem; font-weight: 900; text-transform: uppercase; cursor: pointer; transition: 0.1s; box-shadow: 4px 4px 0 #000; }
.br-news-btn:active { transform: translate(4px, 4px); box-shadow: 0 0 0 #000; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Article Card
  {
    _id: "bc4",
    title: "Glassmorphism Article",
    slug: "glassmorphism-article-card",
    description: "A beautiful frosted glass card floating over a vibrant, animated background.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["blog", "glassmorphism", "gradient", "premium"],
    isPremium: true,
    views: 13500,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-bg">
  <div class="gl-blog-card">
    <div class="gl-blog-img">
      <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80" alt="Article">
    </div>
    <div class="gl-blog-body">
      <span class="gl-badge">UI Trends</span>
      <h3>The Rise of Glassmorphism</h3>
      <p>Exploring the visual characteristics and CSS techniques behind the web's favorite frosted UI trend.</p>
      <a href="#" class="gl-link">Read Full Story</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; overflow: hidden; }
.glass-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #f43f5e, #8b5cf6, #3b82f6); background-size: 200% 200%; animation: glassAnim 10s ease infinite; padding: 20px; box-sizing: border-box; }
@keyframes glassAnim { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gl-blog-card { width: 100%; max-width: 400px; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 24px; padding: 20px; color: #fff; transition: 0.3s; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
.gl-blog-card:hover { transform: translateY(-10px); background: rgba(255, 255, 255, 0.25); }
.gl-blog-img { width: 100%; height: 200px; border-radius: 16px; overflow: hidden; margin-bottom: 20px; }
.gl-blog-img img { width: 100%; height: 100%; object-fit: cover; }
.gl-badge { display: inline-block; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; margin-bottom: 15px; }
.gl-blog-body h3 { margin: 0 0 10px 0; font-size: 1.5rem; line-height: 1.3; }
.gl-blog-body p { margin: 0 0 20px 0; font-size: 0.95rem; line-height: 1.6; color: rgba(255,255,255,0.8); }
.gl-link { color: #fff; text-decoration: none; font-weight: bold; font-size: 0.95rem; border-bottom: 2px solid #fff; padding-bottom: 2px; transition: 0.2s; }
.gl-link:hover { opacity: 0.7; }`,
    jsCode: ``
  },

  // 5. Cyberpunk Log Entry
  {
    _id: "bc5",
    title: "Cyberpunk Log Entry",
    slug: "cyberpunk-log-entry",
    description: "A dark, monospace card resembling a terminal log or sci-fi database entry.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["blog", "cyberpunk", "neon", "dark"],
    isPremium: true,
    views: 11000,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cy-log-card">
  <div class="cy-log-img">
    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" alt="Data">
    <div class="cy-scanline"></div>
  </div>
  <div class="cy-log-content">
    <div class="cy-log-meta">TIMESTAMP: 2077.10.24 // SEC_LVL: ALPHA</div>
    <h3 class="cy-log-title">DECRYPTING THE MAINFRAME</h3>
    <p class="cy-log-text">An analysis of unauthorized access vectors found in the neural subnet during the latest blackout event.</p>
    <a href="#" class="cy-log-btn">[ACCESS_FILE]</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.cy-log-card { width: 100%; max-width: 450px; background: #0a0a0a; border: 1px solid #333; position: relative; transition: 0.3s; }
.cy-log-card:hover { border-color: #0ff; box-shadow: 0 0 20px rgba(0,255,255,0.2); }
.cy-log-card::before { content: ''; position: absolute; top: 0; left: 0; width: 15px; height: 15px; border-top: 2px solid #0ff; border-left: 2px solid #0ff; z-index: 2; }
.cy-log-card::after { content: ''; position: absolute; bottom: 0; right: 0; width: 15px; height: 15px; border-bottom: 2px solid #f0f; border-right: 2px solid #f0f; z-index: 2; }
.cy-log-img { height: 200px; overflow: hidden; position: relative; border-bottom: 1px solid #333; }
.cy-log-img img { width: 100%; height: 100%; object-fit: cover; filter: sepia(100%) hue-rotate(150deg) saturate(300%); opacity: 0.7; }
.cy-scanline { position: absolute; top: 0; left: 0; width: 100%; height: 5px; background: rgba(0,255,255,0.5); opacity: 0.5; animation: scan 3s linear infinite; }
@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
.cy-log-content { padding: 25px; }
.cy-log-meta { color: #f0f; font-size: 0.8rem; letter-spacing: 1px; margin-bottom: 15px; text-shadow: 0 0 5px #f0f; }
.cy-log-title { color: #0ff; font-size: 1.5rem; margin: 0 0 15px 0; text-shadow: 0 0 5px #0ff; letter-spacing: 1px; }
.cy-log-text { color: #888; font-size: 0.95rem; line-height: 1.5; margin: 0 0 25px 0; }
.cy-log-btn { display: inline-block; color: #0ff; text-decoration: none; border: 1px solid #0ff; padding: 8px 15px; transition: 0.2s; }
.cy-log-btn:hover { background: #0ff; color: #000; box-shadow: 0 0 15px #0ff; }`,
    jsCode: ``
  },

  // 6. Neumorphic Blog Tile
  {
    _id: "bc6",
    title: "Neumorphic Blog Tile",
    slug: "neumorphic-blog-tile",
    description: "A soft, extruded card presenting an article with inset structural details.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["blog", "neumorphism", "soft", "clean"],
    isPremium: false,
    views: 8900,
    downloads: 2300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-blog-card">
  <div class="neu-img-wrap">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" alt="Macbook">
  </div>
  <div class="neu-blog-text">
    <span class="neu-date">April 14, 2024</span>
    <h3>10 Productivity Hacks for Developers</h3>
    <p>Optimize your environment and workflow to write better code in less time.</p>
    <a href="#">Read More</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.neu-blog-card { width: 100%; max-width: 380px; background: #e0e5ec; border-radius: 25px; padding: 20px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); }
.neu-img-wrap { width: 100%; height: 200px; border-radius: 15px; overflow: hidden; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.5), inset -6px -6px 12px rgba(255,255,255,0.5); padding: 8px; box-sizing: border-box; margin-bottom: 25px; }
.neu-img-wrap img { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; }
.neu-blog-text { padding: 0 10px; }
.neu-date { color: #4299e1; font-size: 0.85rem; font-weight: bold; }
.neu-blog-text h3 { color: #4a5568; font-size: 1.4rem; margin: 10px 0 15px 0; line-height: 1.3; }
.neu-blog-text p { color: #a0aec0; font-size: 0.95rem; line-height: 1.6; margin: 0 0 25px 0; }
.neu-blog-text a { display: inline-block; text-decoration: none; color: #4299e1; font-weight: bold; padding: 10px 25px; border-radius: 12px; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.neu-blog-text a:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Minimalist Typographic Card
  {
    _id: "bc7",
    title: "Minimal Typographic Post",
    slug: "minimal-typographic-post",
    description: "An image-free layout relying purely on beautiful typography and spacing.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["blog", "minimalist", "typography", "clean"],
    isPremium: false,
    views: 12600,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="typo-card">
  <div class="typo-meta">UI/UX DESIGN <span>— 5 MIN READ</span></div>
  <h2 class="typo-title">Why White Space is the Most Important Design Element</h2>
  <p class="typo-excerpt">Don't fill every pixel. Learn how giving your content room to breathe instantly elevates the perceived value of your product.</p>
  <div class="typo-footer">
    <div class="typo-author">Written by <strong>Sam Taylor</strong></div>
    <a href="#" class="typo-link">Read Article</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.typo-card { width: 100%; max-width: 500px; padding: 40px; border: 1px solid #eaeaea; transition: 0.3s; }
.typo-card:hover { border-color: #111; box-shadow: 10px 10px 0 rgba(0,0,0,0.05); }
.typo-meta { font-size: 0.8rem; font-weight: bold; letter-spacing: 1px; color: #111; margin-bottom: 20px; }
.typo-meta span { color: #888; font-weight: normal; }
.typo-title { font-size: 2.2rem; font-weight: bold; color: #111; line-height: 1.1; margin: 0 0 20px 0; }
.typo-excerpt { font-size: 1.1rem; color: #555; line-height: 1.6; margin: 0 0 40px 0; }
.typo-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eaeaea; padding-top: 20px; }
.typo-author { font-size: 0.9rem; color: #555; }
.typo-author strong { color: #111; }
.typo-link { color: #111; text-decoration: none; font-weight: bold; border-bottom: 2px solid #111; padding-bottom: 2px; transition: 0.2s; }
.typo-link:hover { color: #666; border-color: #666; }`,
    jsCode: ``
  },

  // 8. Isometric Book Stack
  {
    _id: "bc8",
    title: "Isometric Blog Block",
    slug: "isometric-blog-block",
    description: "A 3D skewed blog card that stands out from flat web designs.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    tags: ["blog", "isometric", "3d", "creative"],
    isPremium: true,
    views: 10400,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="iso-wrapper">
  <div class="iso-blog-card">
    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" alt="Code">
    <div class="iso-blog-body">
      <h3>Building Scalable Architectures</h3>
      <p>A deep dive into microservices and event-driven patterns.</p>
      <button>Explore</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; perspective: 1000px; }
.iso-wrapper { transform: rotateX(20deg) rotateY(-20deg) rotateZ(5deg); transition: 0.5s; }
.iso-wrapper:hover { transform: rotateX(0) rotateY(0) rotateZ(0); }
.iso-blog-card { width: 320px; background: #fff; border-radius: 12px; box-shadow: -20px 20px 40px rgba(0,0,0,0.15); border-right: 4px solid #cbd5e1; border-bottom: 4px solid #cbd5e1; overflow: hidden; }
.iso-blog-card img { width: 100%; height: 180px; object-fit: cover; }
.iso-blog-body { padding: 25px; }
.iso-blog-body h3 { margin: 0 0 10px 0; color: #0f172a; font-size: 1.4rem; }
.iso-blog-body p { margin: 0 0 20px 0; color: #64748b; font-size: 0.95rem; line-height: 1.5; }
.iso-blog-body button { background: #3b82f6; color: #fff; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; width: 100%; }
.iso-blog-body button:hover { background: #2563eb; }`,
    jsCode: ``
  },

  // 9. Floating Date Badge Card
  {
    _id: "bc9",
    title: "Date Badge Card",
    slug: "date-badge-blog-card",
    description: "A clean card where the date floats as a distinct badge over the image corner.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    tags: ["blog", "badge", "clean", "cards"],
    isPremium: false,
    views: 11500,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="badge-card">
  <div class="bc-img-box">
    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="Business">
    <div class="bc-date">
      <span class="day">24</span>
      <span class="month">AUG</span>
    </div>
  </div>
  <div class="bc-content">
    <h3>Scaling Your Startup in 2024</h3>
    <p>Lessons learned from growing a team from 5 to 50 employees in a challenging economic climate.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f4f4f5; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.badge-card { width: 100%; max-width: 380px; background: #fff; box-shadow: 0 4px 20px rgba(0,0,0,0.08); transition: 0.3s; }
.badge-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.12); }
.bc-img-box { position: relative; height: 220px; }
.bc-img-box img { width: 100%; height: 100%; object-fit: cover; }
.bc-date { position: absolute; bottom: -20px; right: 25px; background: #ef4444; color: #fff; width: 60px; height: 60px; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 10px rgba(239, 68, 68, 0.4); }
.day { font-size: 1.4rem; font-weight: 900; line-height: 1; }
.month { font-size: 0.75rem; font-weight: bold; letter-spacing: 1px; }
.bc-content { padding: 35px 25px 25px; }
.bc-content h3 { margin: 0 0 15px 0; color: #18181b; font-size: 1.4rem; line-height: 1.3; }
.bc-content p { margin: 0; color: #52525b; line-height: 1.6; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 10. Asymmetric Split Card
  {
    _id: "bc10",
    title: "Asymmetric Split Card",
    slug: "asymmetric-split-blog-card",
    description: "A wide, horizontal blog card with image on one side and text on the other.",
    category: "Blog Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["blog", "horizontal", "split", "modern"],
    isPremium: true,
    views: 13900,
    downloads: 4500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="split-bc">
  <div class="sbc-img">
    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80" alt="Setup">
  </div>
  <div class="sbc-body">
    <span class="sbc-tag">Workspace</span>
    <h3 class="sbc-title">The Ultimate Developer Setup</h3>
    <p class="sbc-excerpt">A comprehensive guide to monitors, mechanical keyboards, ergonomic chairs, and the perfect lighting setup for late-night coding sessions.</p>
    <div class="sbc-footer">
      <div class="sbc-author">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="Author">
        <span>Mark V.</span>
      </div>
      <a href="#" class="sbc-link">Read →</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.split-bc { display: flex; background: #fff; max-width: 800px; width: 100%; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: 0.3s; }
.split-bc:hover { box-shadow: 0 15px 40px rgba(0,0,0,0.08); transform: translateY(-3px); }
.sbc-img { flex: 2; min-height: 300px; overflow: hidden; }
.sbc-img img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.split-bc:hover .sbc-img img { transform: scale(1.05); }
.sbc-body { flex: 3; padding: 40px; display: flex; flex-direction: column; justify-content: center; }
.sbc-tag { color: #8b5cf6; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
.sbc-title { margin: 0 0 15px 0; font-size: 1.8rem; color: #0f172a; line-height: 1.2; }
.sbc-excerpt { color: #64748b; font-size: 1rem; line-height: 1.6; margin: 0 0 30px 0; }
.sbc-footer { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
.sbc-author { display: flex; align-items: center; gap: 10px; }
.sbc-author img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; }
.sbc-author span { font-weight: 500; color: #0f172a; }
.sbc-link { text-decoration: none; color: #8b5cf6; font-weight: bold; padding: 8px 16px; background: #f3e8ff; border-radius: 20px; transition: 0.2s; }
.sbc-link:hover { background: #8b5cf6; color: #fff; }
@media (max-width: 768px) { .split-bc { flex-direction: column; } .sbc-img { min-height: 250px; } .sbc-body { padding: 25px; } }`,
    jsCode: ``
  }
];
