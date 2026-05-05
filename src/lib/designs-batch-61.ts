import { Design } from "./designs-data";

export const BATCH_61_DESIGNS: Design[] = [
  // 1. Classic Centered Quote
  {
    _id: "ts1",
    title: "Classic Centered Quote",
    slug: "classic-centered-quote",
    description: "Standard clean testimonial with centered text and avatar below.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonial", "classic", "centered", "quote"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-cl">
  <div class="ts-c-quote">"This platform completely transformed how our team manages UI components. It's incredibly intuitive and saved us hundreds of hours."</div>
  <div class="ts-c-author">
    <img src="https://i.pravatar.cc/150?img=32" alt="Sarah Jenkins" />
    <div class="ts-c-info">
      <h4>Sarah Jenkins</h4>
      <span>Lead Designer, TechCorp</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.ts-cl { background: #fff; padding: 40px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); max-width: 600px; text-align: center; border: 1px solid #e2e8f0; }
.ts-c-quote { font-size: 1.2rem; line-height: 1.6; color: #334155; font-style: italic; margin-bottom: 30px; position: relative; }
.ts-c-quote::before { content: '“'; font-size: 4rem; color: #cbd5e1; position: absolute; top: -20px; left: -20px; font-family: Georgia, serif; opacity: 0.5; }
.ts-c-author { display: inline-flex; align-items: center; text-align: left; gap: 15px; }
.ts-c-author img { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
.ts-c-info h4 { margin: 0 0 5px; color: #0f172a; font-size: 1rem; }
.ts-c-info span { color: #64748b; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 2. Profile Left Review
  {
    _id: "ts2",
    title: "Profile Left Review",
    slug: "profile-left-review",
    description: "Compact testimonial with avatar and details on the left, quote on the right.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonial", "horizontal", "profile", "clean"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-pl">
  <div class="ts-p-left">
    <img src="https://i.pravatar.cc/150?img=11" alt="Marcus Doe" />
    <h4>Marcus Doe</h4>
    <span>CTO, StartupX</span>
  </div>
  <div class="ts-p-right">
    <div class="ts-p-stars">★★★★★</div>
    <p>"The documentation is pristine and the components work flawlessly out of the box. Highly recommended for any serious frontend team."</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.ts-pl { display: flex; background: #f8fafc; padding: 30px; border-radius: 12px; max-width: 650px; gap: 30px; align-items: center; border: 1px solid #f1f5f9; }
.ts-p-left { display: flex; flex-direction: column; align-items: center; text-align: center; min-width: 120px; border-right: 1px solid #e2e8f0; padding-right: 30px; }
.ts-p-left img { width: 60px; height: 60px; border-radius: 50%; margin-bottom: 15px; }
.ts-p-left h4 { margin: 0 0 5px; color: #0f172a; font-size: 0.95rem; }
.ts-p-left span { color: #64748b; font-size: 0.8rem; }
.ts-p-right p { margin: 10px 0 0; color: #334155; line-height: 1.6; font-size: 1rem; }
.ts-p-stars { color: #fbbf24; font-size: 1.2rem; letter-spacing: 2px; }
@media (max-width: 600px) { .ts-pl { flex-direction: column; } .ts-p-left { border-right: none; border-bottom: 1px solid #e2e8f0; padding-right: 0; padding-bottom: 20px; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Testimonial
  {
    _id: "ts3",
    title: "Cyberpunk Testimonial",
    slug: "cyberpunk-testimonial",
    description: "Neon lit, high tech review card for gaming or developer feedback.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["testimonial", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-cy">
  <div class="ts-cy-head">
    <div class="ts-cy-user">USER: JAX_99</div>
    <div class="ts-cy-rating">[ 10.0 / 10.0 ]</div>
  </div>
  <div class="ts-cy-body">
    > INITIATING FEEDBACK...
    <br><br>
    "Flawless integration. Latency dropped by 40ms after implementation. The UI feels incredibly responsive under heavy load."
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.ts-cy { background: rgba(0,0,0,0.8); border: 1px solid #0f0; padding: 25px; width: 400px; position: relative; box-shadow: 0 0 10px rgba(0,255,0,0.1); }
.ts-cy::after { content: ''; position: absolute; bottom: -2px; right: 0; width: 50px; height: 3px; background: #0ff; box-shadow: 0 0 10px #0ff; }
.ts-cy-head { display: flex; justify-content: space-between; border-bottom: 1px dashed #0f0; padding-bottom: 15px; margin-bottom: 20px; }
.ts-cy-user { color: #0f0; font-weight: bold; text-shadow: 0 0 5px #0f0; }
.ts-cy-rating { color: #f0f; font-weight: bold; text-shadow: 0 0 5px #f0f; }
.ts-cy-body { color: #aaa; line-height: 1.5; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Testimonial
  {
    _id: "ts4",
    title: "Glassmorphism Testimonial",
    slug: "glassmorphism-testimonial",
    description: "Frosted glass aesthetic resting over a vibrant background.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["testimonial", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="ts-gl">
    <p class="ts-g-text">"The designs are breathtaking and the code is incredibly clean. It took us mere minutes to adapt these to our brand."</p>
    <div class="ts-g-bot">
      <img src="https://i.pravatar.cc/150?img=44" alt="Elena" />
      <div>
        <h4>Elena Rodriguez</h4>
        <span>Frontend Architect</span>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); padding: 20px; }
.ts-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; padding: 30px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); color: #fff; max-width: 400px; }
.ts-g-text { font-size: 1.1rem; line-height: 1.6; margin: 0 0 25px; opacity: 0.9; }
.ts-g-bot { display: flex; align-items: center; gap: 15px; }
.ts-g-bot img { width: 45px; height: 45px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.5); }
.ts-g-bot h4 { margin: 0 0 5px; font-weight: 600; font-size: 0.95rem; }
.ts-g-bot span { font-size: 0.8rem; opacity: 0.7; }`,
    jsCode: ``
  },

  // 5. Brutalist Testimonial
  {
    _id: "ts5",
    title: "Brutalist Testimonial",
    slug: "brutalist-testimonial",
    description: "Thick borders, heavy shadows, and bold typography.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["testimonial", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-br">
  <div class="ts-b-tag">REVIEW</div>
  <h2>"ABSOLUTELY KILLER UI KIT."</h2>
  <div class="ts-b-auth">- DAVID, PRODUCT DESIGNER</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #facc15; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.ts-br { background: #fff; border: 4px solid #000; box-shadow: 12px 12px 0 #000; padding: 40px; max-width: 450px; position: relative; }
.ts-b-tag { position: absolute; top: -15px; left: 20px; background: #ec4899; color: #fff; border: 4px solid #000; padding: 5px 15px; font-weight: 900; font-size: 1rem; }
.ts-br h2 { margin: 20px 0; font-size: 2rem; font-weight: 900; color: #000; line-height: 1.1; text-transform: uppercase; }
.ts-b-auth { font-weight: 800; font-size: 1rem; color: #333; }`,
    jsCode: ``
  },

  // 6. Neumorphic Testimonial
  {
    _id: "ts6",
    title: "Neumorphic Testimonial",
    slug: "neumorphic-testimonial",
    description: "Soft UI design matching neumorphic application backgrounds.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["testimonial", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-neu">
  <div class="ts-n-avatar">
    <img src="https://i.pravatar.cc/150?img=12" alt="Avatar" />
  </div>
  <p>"The best design system I've used. period. Soft, clean, and perfectly executed."</p>
  <h4>Alex Johnson</h4>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.ts-neu { background: #e0e5ec; padding: 40px 30px; border-radius: 20px; box-shadow: 10px 10px 20px rgba(163,177,198,0.6), -10px -10px 20px rgba(255,255,255,0.5); max-width: 350px; text-align: center; }
.ts-n-avatar { width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; padding: 5px; background: #e0e5ec; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); }
.ts-n-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.ts-neu p { color: #718096; font-style: italic; line-height: 1.6; margin: 0 0 20px; }
.ts-neu h4 { margin: 0; color: #2d3748; font-weight: bold; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Testimonial
  {
    _id: "ts7",
    title: "Dark Mode Glow Testimonial",
    slug: "dark-mode-glow-testimonial",
    description: "Deep dark card with glowing border mask and subtle lighting.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["testimonial", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-dg">
  <div class="ts-d-stars">★★★★★</div>
  <p class="ts-d-txt">"Integrating this library reduced our frontend development time by 60%. The dark mode components are stunning."</p>
  <div class="ts-d-auth">
    <div class="ts-d-circ"></div>
    <span>Michael T., Tech Lead</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.ts-dg { background: #0f172a; padding: 35px; border-radius: 16px; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.5); max-width: 400px; }
.ts-dg::before { content: ''; position: absolute; inset: 0; border-radius: 16px; padding: 2px; background: linear-gradient(135deg, rgba(59,130,246,0.5), rgba(236,72,153,0.5)); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0.5; pointer-events: none; }
.ts-d-stars { color: #3b82f6; font-size: 1.2rem; letter-spacing: 2px; margin-bottom: 20px; }
.ts-d-txt { color: #f8fafc; font-size: 1.05rem; line-height: 1.6; margin: 0 0 25px; }
.ts-d-auth { display: flex; align-items: center; gap: 10px; color: #94a3b8; font-size: 0.9rem; }
.ts-d-circ { width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #ec4899); }`,
    jsCode: ``
  },

  // 8. Minimal Typographic Quote
  {
    _id: "ts8",
    title: "Minimal Typographic Quote",
    slug: "minimal-typographic-quote",
    description: "Elegant, large typography focused on the quote itself.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["testimonial", "typography", "minimal", "clean"],
    isPremium: false,
    views: 33400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-mt">
  <blockquote>
    "Simplicity is the ultimate sophistication, and this UI library embodies that perfectly."
  </blockquote>
  <cite>— LEONARDO, PRODUCT MANAGER</cite>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Georgia', serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.ts-mt { max-width: 700px; text-align: center; padding: 40px; }
.ts-mt blockquote { margin: 0 0 30px; font-size: 2.2rem; line-height: 1.4; color: #111; font-style: italic; }
.ts-mt cite { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #888; font-style: normal; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; }`,
    jsCode: ``
  },

  // 9. Grid Rating Review
  {
    _id: "ts9",
    title: "Grid Rating Review",
    slug: "grid-rating-review",
    description: "Compact card structured like an app store or product review.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["testimonial", "rating", "review", "grid"],
    isPremium: false,
    views: 29100,
    downloads: 7700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-gr">
  <div class="ts-g-head">
    <div class="ts-g-stars">★★★★★</div>
    <span class="ts-g-date">2 days ago</span>
  </div>
  <h4>Game changer for our agency.</h4>
  <p>We've deployed 5 client sites using these components. The CSS is pristine and easy to override when needed.</p>
  <div class="ts-g-user">Emily R. <span class="ts-g-ver">✓ Verified Buyer</span></div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.ts-gr { background: #fff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); max-width: 350px; border: 1px solid #e2e8f0; }
.ts-g-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.ts-g-stars { color: #f59e0b; font-size: 1.1rem; }
.ts-g-date { color: #94a3b8; font-size: 0.85rem; }
.ts-gr h4 { margin: 0 0 10px; color: #0f172a; font-size: 1.1rem; }
.ts-gr p { margin: 0 0 20px; color: #475569; font-size: 0.95rem; line-height: 1.5; }
.ts-g-user { font-size: 0.9rem; font-weight: 600; color: #0f172a; }
.ts-g-ver { color: #10b981; font-weight: normal; font-size: 0.8rem; margin-left: 5px; }`,
    jsCode: ``
  },

  // 10. Floating Avatar Testimonial
  {
    _id: "ts10",
    title: "Floating Avatar Testimonial",
    slug: "floating-avatar-testimonial",
    description: "Card where the user's avatar breaks out of the top border.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["testimonial", "avatar", "floating", "card"],
    isPremium: true,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="ts-fa">
  <img src="https://i.pravatar.cc/150?img=68" alt="User" class="ts-f-img" />
  <p>"A beautifully crafted collection of components. The attention to detail in the hover states and typography is unmatched."</p>
  <h4>Daniel K.</h4>
  <span>Senior Developer</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #eef2f6; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.ts-fa { background: #fff; padding: 50px 30px 30px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); max-width: 350px; text-align: center; position: relative; margin-top: 40px; }
.ts-f-img { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 4px solid #fff; position: absolute; top: -40px; left: 50%; transform: translateX(-50%); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.ts-fa p { color: #475569; line-height: 1.6; font-size: 1rem; margin: 0 0 20px; }
.ts-fa h4 { margin: 0 0 5px; color: #0f172a; font-size: 1.1rem; }
.ts-fa span { color: #3b82f6; font-size: 0.85rem; font-weight: 500; }`,
    jsCode: ``
  }
];
