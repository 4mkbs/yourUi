import { Design } from "./designs-data";

export const BATCH_93_DESIGNS: Design[] = [
  // 1. Classic Review Card
  {
    _id: "test1",
    title: "Classic Review Card",
    slug: "classic-review-card",
    description: "Standard testimonial with avatar, name, role, star rating, and quote.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonial", "review", "classic", "card"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="test-cl">
  <div class="cl-stars">★★★★★</div>
  <p class="cl-quote">"This product completely transformed how our team collaborates. Highly recommended for any remote company."</p>
  <div class="cl-author">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Sarah J." class="cl-avatar" />
    <div>
      <h4 class="cl-name">Sarah Jenkins</h4>
      <span class="cl-role">Product Manager at TechFlow</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.test-cl { background: #fff; width: 100%; max-width: 400px; padding: 30px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.cl-stars { color: #fbbf24; font-size: 1.2rem; margin-bottom: 15px; letter-spacing: 2px; }
.cl-quote { font-size: 1.05rem; color: #334155; line-height: 1.6; margin: 0 0 25px; font-style: italic; }
.cl-author { display: flex; align-items: center; gap: 15px; }
.cl-avatar { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
.cl-name { margin: 0 0 2px; color: #0f172a; font-size: 1rem; }
.cl-role { color: #64748b; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 2. Minimal Quote
  {
    _id: "test2",
    title: "Minimal Typography Quote",
    slug: "minimal-typography-quote",
    description: "Stripped back editorial quote relying purely on beautiful typography.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonial", "minimal", "quote", "editorial"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="test-mn">
  <blockquote>It's the cleanest UI library I've ever used. Dropped it in and everything just worked.</blockquote>
  <cite>— David R., Lead Engineer</cite>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.test-mn { max-width: 600px; text-align: center; }
.test-mn blockquote { margin: 0 0 20px; font-size: 2rem; font-weight: 300; color: #111; line-height: 1.4; position: relative; }
.test-mn blockquote::before { content: '"'; position: absolute; top: -30px; left: -20px; font-size: 6rem; color: #f0f0f0; z-index: -1; font-family: serif; }
.test-mn cite { display: block; font-size: 0.9rem; color: #666; font-style: normal; text-transform: uppercase; letter-spacing: 2px; font-weight: 500; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Feedback
  {
    _id: "test3",
    title: "Cyberpunk Terminal Feedback",
    slug: "cyberpunk-terminal-feedback",
    description: "Hacker-themed review card with neon text and scanlines.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["testimonial", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="test-cy">
  <div class="cy-head">
    <span class="cy-user">@NETRUNNER_99</span>
    <span class="cy-verify">[VERIFIED NODE]</span>
  </div>
  <p class="cy-text">> Protocol efficiency increased by 400%. Flawless execution. Will deploy again.</p>
  <div class="cy-rating">RATING: 10/10</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; }
.test-cy { border: 1px solid #0ff; background: rgba(0,20,30,0.8); width: 100%; max-width: 450px; padding: 25px; box-shadow: 0 0 15px rgba(0,255,255,0.2); position: relative; }
.test-cy::after { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: repeating-linear-gradient(transparent 0, transparent 2px, rgba(0,255,255,0.05) 2px, rgba(0,255,255,0.05) 4px); pointer-events: none; }
.cy-head { display: flex; justify-content: space-between; border-bottom: 1px dashed #0ff; padding-bottom: 10px; margin-bottom: 15px; }
.cy-user { color: #fff; font-weight: bold; }
.cy-verify { color: #0f0; font-size: 0.8rem; }
.cy-text { color: #0ff; line-height: 1.5; margin: 0 0 20px; }
.cy-rating { color: #f0f; font-weight: bold; font-size: 0.9rem; text-shadow: 0 0 5px #f0f; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Review
  {
    _id: "test4",
    title: "Glassmorphism Review Card",
    slug: "glassmorphism-review-card",
    description: "Frosted glass testimonial hovering over a background.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["testimonial", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="test-gl">
    <div class="gl-quote">"A truly magical experience from start to finish."</div>
    <div class="gl-user">
      <div class="gl-av">M</div>
      <div class="gl-info">
        <h4>Marcus Chen</h4>
        <span>Creative Director</span>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.test-gl { background: rgba(255,255,255,0.15); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; padding: 30px; width: 100%; max-width: 400px; color: #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.gl-quote { font-size: 1.2rem; font-weight: 300; line-height: 1.5; margin-bottom: 25px; }
.gl-user { display: flex; align-items: center; gap: 15px; }
.gl-av { width: 45px; height: 45px; border-radius: 50%; background: rgba(255,255,255,0.3); display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 1.2rem; }
.gl-info h4 { margin: 0 0 2px; font-size: 1rem; }
.gl-info span { font-size: 0.8rem; opacity: 0.8; }`,
    jsCode: ``
  },

  // 5. Brutalist Testimonial
  {
    _id: "test5",
    title: "Brutalist Big Text Review",
    slug: "brutalist-big-text-review",
    description: "High contrast, massive text block for striking social proof.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["testimonial", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="test-br">
  <div class="br-quote">BEST INVESTMENT WE MADE THIS YEAR. PERIOD.</div>
  <div class="br-auth">
    <strong>JOHN DOE</strong>
    <span>CEO, STARTUP INC.</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.test-br { background: #facc15; border: 5px solid #000; box-shadow: 10px 10px 0 #000; width: 100%; max-width: 500px; padding: 40px; }
.br-quote { font-size: 2.5rem; font-weight: 900; line-height: 1.1; margin-bottom: 30px; text-transform: uppercase; }
.br-auth { border-top: 5px solid #000; padding-top: 20px; display: flex; justify-content: space-between; align-items: center; }
.br-auth strong { font-size: 1.2rem; font-weight: 900; }
.br-auth span { font-weight: bold; font-size: 0.9rem; }
@media (max-width: 500px) { .br-auth { flex-direction: column; align-items: flex-start; gap: 10px; } }`,
    jsCode: ``
  },

  // 6. Neumorphic Review
  {
    _id: "test6",
    title: "Neumorphic Soft Quote",
    slug: "neumorphic-soft-quote",
    description: "Soft UI embossed card perfect for light mode layouts.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["testimonial", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="test-neu">
  <div class="neu-av">A</div>
  <p>"The interface is so intuitive, it almost feels like it reads my mind."</p>
  <h4>Alice Cooper</h4>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.test-neu { background: #e0e5ec; padding: 40px; border-radius: 20px; box-shadow: 9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5); width: 100%; max-width: 400px; text-align: center; }
.neu-av { width: 60px; height: 60px; margin: 0 auto 20px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); display: flex; justify-content: center; align-items: center; font-size: 1.5rem; font-weight: bold; color: #4a5568; }
.test-neu p { color: #718096; font-size: 1.1rem; line-height: 1.6; margin: 0 0 20px; font-style: italic; }
.test-neu h4 { margin: 0; color: #4a5568; font-size: 1rem; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Testimonial
  {
    _id: "test7",
    title: "Dark Glow Testimonial",
    slug: "dark-glow-testimonial",
    description: "Deep dark card with subtle glowing accents.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["testimonial", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="test-dg">
  <div class="dg-stars">★★★★★</div>
  <p>"Unbelievable performance. We scaled to 10k users overnight without a single hiccup."</p>
  <div class="dg-user">
    <strong>Tom Banks</strong>
    <span>CTO</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.test-dg { background: #0f172a; border-radius: 16px; padding: 30px; width: 100%; max-width: 400px; position: relative; z-index: 1; }
.test-dg::before { content: ''; position: absolute; inset: -2px; border-radius: 18px; background: linear-gradient(45deg, #3b82f6, #8b5cf6, transparent, transparent); z-index: -1; opacity: 0.5; transition: 0.3s; }
.test-dg:hover::before { opacity: 1; }
.dg-stars { color: #3b82f6; letter-spacing: 2px; margin-bottom: 15px; }
.test-dg p { color: #e2e8f0; font-size: 1.1rem; line-height: 1.5; margin: 0 0 20px; }
.dg-user { display: flex; flex-direction: column; }
.dg-user strong { color: #fff; font-size: 1rem; }
.dg-user span { color: #64748b; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 8. Video Testimonial Card
  {
    _id: "test8",
    title: "Video Testimonial Card",
    slug: "video-testimonial-card",
    description: "Card layout designed to hold a video thumbnail with play button.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["testimonial", "video", "media", "card"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="test-vid">
  <div class="vid-thumb">
    <div class="vid-play">▶</div>
  </div>
  <div class="vid-info">
    <h4>Watch how Acme Corp boosted sales by 300%</h4>
    <span>Jane Doe, VP of Sales</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.test-vid { background: #fff; border-radius: 16px; overflow: hidden; width: 100%; max-width: 350px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); cursor: pointer; transition: 0.3s; }
.test-vid:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
.vid-thumb { height: 200px; background: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80') center/cover; position: relative; display: flex; justify-content: center; align-items: center; }
.vid-thumb::after { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.3); transition: 0.3s; }
.test-vid:hover .vid-thumb::after { background: rgba(0,0,0,0.1); }
.vid-play { width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.5rem; color: #0f172a; z-index: 1; padding-left: 5px; box-sizing: border-box; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
.vid-info { padding: 20px; }
.vid-info h4 { margin: 0 0 5px; color: #0f172a; font-size: 1.1rem; line-height: 1.4; }
.vid-info span { color: #64748b; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 9. Tweet Style Review
  {
    _id: "test9",
    title: "Social Post Testimonial",
    slug: "social-post-testimonial",
    description: "Review styled like a popular social media post.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonial", "social", "twitter", "post"],
    isPremium: false,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="test-soc">
  <div class="soc-head">
    <div class="soc-av"></div>
    <div class="soc-name">
      <strong>Emily UI/UX</strong>
      <span>@emilydesigns</span>
    </div>
    <div class="soc-icon">𝕏</div>
  </div>
  <p class="soc-text">Just found the best component library ever. Saved me 40 hours of dev time on my latest freelance gig! 🚀🔥</p>
  <div class="soc-meta">10:42 AM · Oct 12, 2023</div>
</div>`,
    cssCode: `body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #f3f4f6; padding: 100px 20px; display: flex; justify-content: center; }
.test-soc { background: #fff; border-radius: 12px; padding: 20px; width: 100%; max-width: 450px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #e5e7eb; }
.soc-head { display: flex; align-items: center; margin-bottom: 15px; gap: 10px; position: relative; }
.soc-av { width: 48px; height: 48px; border-radius: 50%; background: #e5e7eb; }
.soc-name { display: flex; flex-direction: column; }
.soc-name strong { color: #111827; font-size: 1rem; }
.soc-name span { color: #6b7280; font-size: 0.9rem; }
.soc-icon { position: absolute; right: 0; top: 0; font-size: 1.2rem; color: #111827; }
.soc-text { font-size: 1.1rem; color: #111827; line-height: 1.5; margin: 0 0 15px; }
.soc-meta { color: #6b7280; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 10. Carousel Item Review
  {
    _id: "test10",
    title: "Carousel Testimonial Card",
    slug: "carousel-testimonial-card",
    description: "Compact card designed specifically to sit in a horizontal sliding row.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonial", "carousel", "slider", "clean"],
    isPremium: true,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="test-car">
  <p>"Simple, fast, and gorgeous. Exactly what I needed."</p>
  <div class="car-user">
    <strong>Alex P.</strong>
    <span>Freelancer</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.test-car { background: #fff; border: 1px solid #f1f5f9; border-radius: 8px; padding: 25px; width: 280px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); transition: 0.2s; cursor: grab; }
.test-car:active { cursor: grabbing; transform: scale(0.98); }
.test-car:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.test-car p { color: #334155; font-size: 1rem; line-height: 1.5; margin: 0 0 20px; }
.car-user { display: flex; flex-direction: column; }
.car-user strong { color: #0f172a; font-size: 0.9rem; }
.car-user span { color: #94a3b8; font-size: 0.8rem; }`,
    jsCode: ``
  }
];
