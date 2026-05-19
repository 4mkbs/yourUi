import { Design } from "./designs-data";

export const BATCH_54_DESIGNS: Design[] = [
  // 1. Classic Centered Testimonial
  {
    _id: "tes1",
    title: "Classic Centered Testimonial",
    slug: "classic-centered-testimonial",
    description: "Standard clean testimonial with centered avatar, text, and name.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonial", "classic", "centered", "clean"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tes-c">
  <img src="https://i.pravatar.cc/150?img=1" alt="User" />
  <p>"This product completely transformed how our team collaborates. Highly recommended!"</p>
  <h4>Sarah Jenkins</h4>
  <span>Product Manager at TechCorp</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.tes-c { max-width: 600px; padding: 40px; text-align: center; }
.tes-c img { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin-bottom: 20px; border: 3px solid #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.tes-c p { font-size: 1.25rem; color: #334155; line-height: 1.6; margin: 0 0 20px 0; font-style: italic; }
.tes-c h4 { margin: 0 0 5px 0; color: #0f172a; font-size: 1.1rem; }
.tes-c span { color: #64748b; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 2. Left-Aligned Minimal Testimonial
  {
    _id: "tes2",
    title: "Minimal Row Testimonial",
    slug: "minimal-row-testimonial",
    description: "A horizontal layout perfect for placing testimonials in a list or sidebar.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonial", "minimal", "row", "horizontal"],
    isPremium: false,
    views: 28400,
    downloads: 7100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tes-r">
  <img src="https://i.pravatar.cc/150?img=12" alt="User" />
  <div class="tes-r-content">
    <p>"The best tool we have ever used for frontend development. Saved us weeks."</p>
    <h4>Alex Rivera <span>— Lead Developer</span></h4>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.tes-r { display: flex; align-items: flex-start; gap: 20px; max-width: 500px; padding: 25px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; }
.tes-r img { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; }
.tes-r p { margin: 0 0 15px 0; color: #1e293b; font-size: 1rem; line-height: 1.5; }
.tes-r h4 { margin: 0; color: #0f172a; font-size: 0.95rem; font-weight: 600; }
.tes-r span { color: #94a3b8; font-weight: 400; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Testimonial
  {
    _id: "tes3",
    title: "Cyberpunk Testimonial",
    slug: "cyberpunk-testimonial",
    description: "Edgy, neon-lit feedback card perfect for gaming sites.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["testimonial", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 24500,
    downloads: 6200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tes-cy">
  <div class="tes-cy-inner">
    <p>> "This gear boosted my reflexes by 40%. Pure chrome."</p>
    <div class="tes-cy-user">
      <img src="https://i.pravatar.cc/150?img=33" alt="User" />
      <div>
        <h4>V_NOM</h4>
        <span>RANK: LEGEND</span>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.tes-cy { padding: 2px; background: linear-gradient(45deg, #0ff, #f0f); clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px); max-width: 400px; }
.tes-cy-inner { background: #0a0a0a; padding: 25px; clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px); }
.tes-cy-inner p { margin: 0 0 20px 0; color: #0ff; font-size: 1.1rem; line-height: 1.4; text-shadow: 0 0 5px #0ff; }
.tes-cy-user { display: flex; align-items: center; gap: 15px; }
.tes-cy-user img { width: 50px; height: 50px; border: 2px solid #f0f; box-shadow: 0 0 10px #f0f; object-fit: cover; }
.tes-cy-user h4 { margin: 0 0 5px 0; color: #fff; font-size: 1rem; letter-spacing: 1px; }
.tes-cy-user span { color: #f0f; font-size: 0.8rem; letter-spacing: 1px; font-weight: bold; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Testimonial
  {
    _id: "tes4",
    title: "Glassmorphism Testimonial",
    slug: "glassmorphism-testimonial",
    description: "Frosted glass card displaying feedback over a colorful background.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["testimonial", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 33100,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="tes-gl">
    <div class="tes-g-quote">"</div>
    <p>A flawless experience from start to finish. The attention to detail is just mind-blowing.</p>
    <div class="tes-g-user">
      <img src="https://i.pravatar.cc/150?img=47" alt="User" />
      <div>
        <h4>Elena Rostova</h4>
        <span>Art Director</span>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); }
.tes-gl { width: 400px; padding: 40px; border-radius: 20px; background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.15); color: #fff; position: relative; }
.tes-g-quote { position: absolute; top: 20px; left: 20px; font-size: 6rem; line-height: 1; color: rgba(255,255,255,0.2); font-family: serif; pointer-events: none; }
.tes-gl p { position: relative; font-size: 1.15rem; line-height: 1.6; margin: 0 0 30px 0; z-index: 1; }
.tes-g-user { display: flex; align-items: center; gap: 15px; }
.tes-g-user img { width: 50px; height: 50px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.5); object-fit: cover; }
.tes-g-user h4 { margin: 0 0 2px 0; font-size: 1rem; }
.tes-g-user span { color: rgba(255,255,255,0.7); font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 5. Brutalist Testimonial
  {
    _id: "tes5",
    title: "Brutalist Testimonial",
    slug: "brutalist-testimonial",
    description: "High impact, heavy borders, and bold colors for maximum attention.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["testimonial", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 19800,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tes-br">
  <div class="tes-b-tag">REVIEW</div>
  <p>"MIND BLOWING FAST. NEVER GOING BACK."</p>
  <div class="tes-b-user">
    <h4>DAVID CHEN</h4>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e5e5; }
.tes-br { width: 350px; background: #fff; border: 5px solid #000; box-shadow: 12px 12px 0 #000; padding: 40px 30px; position: relative; }
.tes-b-tag { position: absolute; top: -15px; left: -5px; background: #ec4899; color: #fff; padding: 5px 10px; border: 3px solid #000; font-weight: 900; letter-spacing: 2px; }
.tes-br p { margin: 20px 0 30px 0; font-size: 1.8rem; font-weight: 900; color: #000; line-height: 1.1; letter-spacing: -1px; text-transform: uppercase; }
.tes-b-user { border-top: 5px solid #000; padding-top: 15px; }
.tes-b-user h4 { margin: 0; font-size: 1.2rem; font-weight: 900; color: #000; }`,
    jsCode: ``
  },

  // 6. Neumorphic Testimonial
  {
    _id: "tes6",
    title: "Neumorphic Testimonial",
    slug: "neumorphic-testimonial",
    description: "Soft UI design looking physically extruded from the background.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["testimonial", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 21600,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tes-neu">
  <p>Absolutely seamless integration. It works like magic behind the scenes.</p>
  <div class="tes-n-user">
    <div class="tes-n-img"><img src="https://i.pravatar.cc/150?img=28" alt="User" /></div>
    <div>
      <h4>Marcus Cole</h4>
      <span>Tech Lead</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.tes-neu { max-width: 400px; padding: 35px; border-radius: 20px; background: #e0e5ec; box-shadow: 10px 10px 20px rgba(163,177,198,0.6), -10px -10px 20px rgba(255,255,255,0.5); }
.tes-neu p { margin: 0 0 25px 0; color: #4a5568; font-size: 1.1rem; line-height: 1.6; }
.tes-n-user { display: flex; align-items: center; gap: 15px; }
.tes-n-img { width: 50px; height: 50px; border-radius: 50%; padding: 4px; background: #e0e5ec; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
.tes-n-img img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.tes-n-user h4 { margin: 0 0 3px 0; color: #2d3748; }
.tes-n-user span { color: #718096; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Testimonial
  {
    _id: "tes7",
    title: "Dark Mode Glow Testimonial",
    slug: "dark-mode-glow-testimonial",
    description: "Deep dark card with subtle colored lighting effects.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["testimonial", "dark", "glow", "gradient"],
    isPremium: true,
    views: 29800,
    downloads: 7400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tes-dg">
  <div class="tes-d-stars">★★★★★</div>
  <p>"The latency is basically zero. Completely changed our infrastructure game."</p>
  <div class="tes-d-user">
    <img src="https://i.pravatar.cc/150?img=11" alt="User" />
    <div>
      <h4>James Wilson</h4>
      <span>Backend Developer</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #020617; }
.tes-dg { max-width: 400px; padding: 35px; background: #0f172a; border-radius: 20px; border: 1px solid #1e293b; position: relative; overflow: hidden; }
.tes-dg::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 100%; background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 60%); pointer-events: none; }
.tes-d-stars { color: #3b82f6; font-size: 1.2rem; letter-spacing: 2px; margin-bottom: 15px; }
.tes-dg p { margin: 0 0 30px 0; color: #e2e8f0; font-size: 1.15rem; line-height: 1.6; }
.tes-d-user { display: flex; align-items: center; gap: 15px; }
.tes-d-user img { width: 45px; height: 45px; border-radius: 50%; border: 2px solid #3b82f6; object-fit: cover; }
.tes-d-user h4 { margin: 0 0 3px 0; color: #f8fafc; font-size: 0.95rem; }
.tes-d-user span { color: #94a3b8; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 8. Large Quote Testimonial
  {
    _id: "tes8",
    title: "Large Quote Testimonial",
    slug: "large-quote-testimonial",
    description: "Focuses entirely on typography with a giant quote layout.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["testimonial", "quote", "typography", "large"],
    isPremium: false,
    views: 26400,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tes-lq">
  <div class="tes-l-mark">“</div>
  <p>Design is intelligence made visible.</p>
  <h4>— Alina M.</h4>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Georgia', serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.tes-lq { max-width: 600px; padding: 40px; text-align: center; position: relative; }
.tes-l-mark { font-size: 8rem; color: #f1f5f9; position: absolute; top: -20px; left: 50%; transform: translateX(-50%); line-height: 1; z-index: 0; }
.tes-lq p { position: relative; z-index: 1; font-size: 2.5rem; color: #0f172a; margin: 0 0 30px 0; line-height: 1.3; font-style: italic; }
.tes-lq h4 { position: relative; z-index: 1; font-size: 1.1rem; color: #64748b; margin: 0; text-transform: uppercase; letter-spacing: 2px; font-family: 'Inter', sans-serif; }`,
    jsCode: ``
  },

  // 9. Chat Bubble Testimonial
  {
    _id: "tes9",
    title: "Chat Bubble Testimonial",
    slug: "chat-bubble-testimonial",
    description: "Playful layout resembling a messaging app conversation bubble.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonial", "chat", "bubble", "messaging"],
    isPremium: true,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tes-ch">
  <div class="tes-c-bubble">
    <p>10/10 support! They helped me set it up in under 5 minutes. Best customer service ever.</p>
  </div>
  <div class="tes-c-user">
    <img src="https://i.pravatar.cc/150?img=5" alt="User" />
    <span>Tom H.</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.tes-ch { max-width: 400px; display: flex; flex-direction: column; align-items: flex-start; }
.tes-c-bubble { background: #3b82f6; color: #fff; padding: 20px 25px; border-radius: 20px 20px 20px 0; margin-bottom: 15px; position: relative; box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.2); }
.tes-c-bubble p { margin: 0; font-size: 1.05rem; line-height: 1.5; }
.tes-c-user { display: flex; align-items: center; gap: 10px; margin-left: 10px; }
.tes-c-user img { width: 35px; height: 35px; border-radius: 50%; object-fit: cover; }
.tes-c-user span { color: #64748b; font-size: 0.9rem; font-weight: 500; }`,
    jsCode: ``
  },

  // 10. Star Rating Testimonial
  {
    _id: "tes10",
    title: "Star Rating Testimonial",
    slug: "star-rating-testimonial",
    description: "Classic e-commerce style review card with prominent star ratings.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonial", "rating", "stars", "ecommerce"],
    isPremium: false,
    views: 23600,
    downloads: 5900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tes-sr">
  <div class="tes-s-stars">
    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
  </div>
  <h4>Perfect match!</h4>
  <p>"Exactly what I was looking for. The quality is exceptional and delivery was incredibly fast."</p>
  <div class="tes-s-foot">
    <strong>Emma Davis</strong>
    <span>Verified Buyer</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e2e8f0; }
.tes-sr { width: 320px; padding: 30px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.tes-s-stars { color: #fbbf24; font-size: 1.2rem; margin-bottom: 15px; display: flex; gap: 2px; }
.tes-sr h4 { margin: 0 0 10px 0; color: #0f172a; font-size: 1.1rem; }
.tes-sr p { margin: 0 0 20px 0; color: #475569; font-size: 0.95rem; line-height: 1.5; }
.tes-s-foot { display: flex; flex-direction: column; gap: 4px; }
.tes-s-foot strong { color: #0f172a; font-size: 0.9rem; }
.tes-s-foot span { color: #10b981; font-size: 0.8rem; font-weight: 500; display: flex; align-items: center; gap: 4px; }
.tes-s-foot span::before { content: '✓'; background: #10b981; color: #fff; border-radius: 50%; width: 14px; height: 14px; display: inline-flex; justify-content: center; align-items: center; font-size: 0.6rem; }`,
    jsCode: ``
  }
];
