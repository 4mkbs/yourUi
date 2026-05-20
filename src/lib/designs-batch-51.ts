import { Design } from "./designs-data";

export const BATCH_51_DESIGNS: Design[] = [
  // 1. Classic Faded Line Divider
  {
    _id: "div1",
    title: "Classic Faded Line",
    slug: "classic-faded-line",
    description: "Standard horizontal line that fades out at the edges.",
    category: "Dividers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["divider", "classic", "fade", "line"],
    isPremium: false,
    views: 18400,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dv-fade"></div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.dv-fade { width: 80%; height: 2px; background: linear-gradient(90deg, transparent, #94a3b8, transparent); margin: 40px auto; }`,
    jsCode: ``
  },

  // 2. Minimal Dot Divider
  {
    _id: "div2",
    title: "Minimal Dot Divider",
    slug: "minimal-dot-divider",
    description: "Clean divider made of three small dots.",
    category: "Dividers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["divider", "minimal", "dots", "clean"],
    isPremium: false,
    views: 19500,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dv-dots"></div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.dv-dots { text-align: center; margin: 40px auto; letter-spacing: 12px; }
.dv-dots::before { content: '•••'; font-size: 24px; color: #cbd5e1; font-family: serif; }`,
    jsCode: ``
  },

  // 3. Icon Center Divider
  {
    _id: "div3",
    title: "Icon Center Divider",
    slug: "icon-center-divider",
    description: "Horizontal line interrupted by an icon or symbol in the middle.",
    category: "Dividers",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["divider", "icon", "center", "line"],
    isPremium: false,
    views: 22100,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dv-icon">
  <span>✦</span>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f1f5f9; }
.dv-icon { display: flex; align-items: center; width: 80%; margin: 40px auto; color: #64748b; }
.dv-icon::before, .dv-icon::after { content: ''; flex: 1; border-bottom: 1px solid #cbd5e1; }
.dv-icon span { padding: 0 15px; font-size: 1.2rem; }`,
    jsCode: ``
  },

  // 4. Cyberpunk Glitch Divider
  {
    _id: "div4",
    title: "Cyberpunk Divider",
    slug: "cyberpunk-divider",
    description: "Neon dashed lines with a high-tech visual feel.",
    category: "Dividers",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["divider", "cyberpunk", "neon", "dashed"],
    isPremium: true,
    views: 17500,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dv-cy"></div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.dv-cy { width: 80%; height: 4px; background: repeating-linear-gradient(90deg, #0ff, #0ff 10px, transparent 10px, transparent 20px); margin: 40px auto; box-shadow: 0 0 10px #0ff; position: relative; }
.dv-cy::before { content: ''; position: absolute; left: 50%; top: -5px; width: 30px; height: 14px; background: #f0f; transform: translateX(-50%); box-shadow: 0 0 15px #f0f; }`,
    jsCode: ``
  },

  // 5. Glassmorphism Glowing Divider
  {
    _id: "div5",
    title: "Glassmorphism Glowing Divider",
    slug: "glassmorphism-glowing-divider",
    description: "Frosted glass tube with a glowing inner core.",
    category: "Dividers",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["divider", "glassmorphism", "glow", "modern"],
    isPremium: true,
    views: 26800,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="dv-gl"></div>
</div>`,
    cssCode: `body { margin: 0; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); }
.dv-gl { width: 70%; height: 8px; border-radius: 10px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3); box-shadow: inset 0 0 10px rgba(255,255,255,0.5), 0 4px 15px rgba(0,0,0,0.1); position: relative; }
.dv-gl::after { content: ''; position: absolute; left: 20%; right: 20%; top: 2px; bottom: 2px; background: rgba(255,255,255,0.8); border-radius: 5px; filter: blur(2px); }`,
    jsCode: ``
  },

  // 6. Brutalist Thick Divider
  {
    _id: "div6",
    title: "Brutalist Thick Divider",
    slug: "brutalist-thick-divider",
    description: "Heavy solid black line, no frills, maximum impact.",
    category: "Dividers",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["divider", "brutalist", "thick", "bold"],
    isPremium: false,
    views: 14200,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dv-br"></div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e5e5; }
.dv-br { width: 90%; height: 12px; background: #000; margin: 40px auto; border: 4px solid #fff; box-shadow: 6px 6px 0 #000; }`,
    jsCode: ``
  },

  // 7. Neumorphic Ridge Divider
  {
    _id: "div7",
    title: "Neumorphic Ridge Divider",
    slug: "neumorphic-ridge-divider",
    description: "Soft inset groove making it look like a physical indentation in the UI.",
    category: "Dividers",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["divider", "neumorphism", "inset", "3d"],
    isPremium: false,
    views: 18100,
    downloads: 4700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dv-neu"></div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.dv-neu { width: 80%; height: 4px; background: #e0e5ec; margin: 40px auto; border-radius: 2px; box-shadow: inset 2px 2px 5px rgba(163,177,198,0.6), inset -2px -2px 5px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 8. Wavy CSS Divider
  {
    _id: "div8",
    title: "Wavy CSS Divider",
    slug: "wavy-css-divider",
    description: "A playful repeating wave pattern created purely with CSS radial gradients.",
    category: "Dividers",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["divider", "wave", "pattern", "css"],
    isPremium: true,
    views: 24500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dv-wave"></div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.dv-wave { width: 100%; height: 20px; background-image: radial-gradient(circle at 10px 20px, transparent 12px, #3b82f6 13px, #3b82f6 15px, transparent 16px), radial-gradient(circle at 10px 0px, transparent 12px, #3b82f6 13px, #3b82f6 15px, transparent 16px); background-size: 20px 20px; background-repeat: repeat-x; margin: 40px 0; }`,
    jsCode: ``
  },

  // 9. Zig-Zag CSS Divider
  {
    _id: "div9",
    title: "Zig-Zag CSS Divider",
    slug: "zig-zag-css-divider",
    description: "Sharp zig-zag teeth pattern made with linear gradients.",
    category: "Dividers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["divider", "zigzag", "pattern", "css"],
    isPremium: true,
    views: 21300,
    downloads: 5900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dv-zig"></div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.dv-zig { width: 100%; height: 20px; background: linear-gradient(45deg, transparent 33.333%, #ec4899 33.333%, #ec4899 66.667%, transparent 66.667%), linear-gradient(-45deg, transparent 33.333%, #ec4899 33.333%, #ec4899 66.667%, transparent 66.667%); background-size: 20px 40px; background-position: 0 -20px; margin: 40px 0; }`,
    jsCode: ``
  },

  // 10. Gradient Shadow Divider
  {
    _id: "div10",
    title: "Gradient Shadow Divider",
    slug: "gradient-shadow-divider",
    description: "A thin line that casts a colorful, soft drop shadow.",
    category: "Dividers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["divider", "gradient", "shadow", "glow"],
    isPremium: true,
    views: 23400,
    downloads: 6400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dv-shad"></div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; }
.dv-shad { width: 80%; height: 1px; background: #334155; margin: 40px auto; position: relative; }
.dv-shad::after { content: ''; position: absolute; left: 10%; right: 10%; top: 0; height: 2px; background: linear-gradient(90deg, transparent, #3b82f6, #ec4899, transparent); filter: blur(4px); border-radius: 50%; }`,
    jsCode: ``
  }
];
