import { Design } from "./designs-data";

export const BATCH_49_DESIGNS: Design[] = [
  // 1. Classic Slash Breadcrumb
  {
    _id: "bc1",
    title: "Classic Slash Breadcrumb",
    slug: "classic-slash-breadcrumb",
    description: "Standard text-based breadcrumb navigation separated by slashes.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["breadcrumb", "classic", "slash", "navigation"],
    isPremium: false,
    views: 18500,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-classic" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Electronics</a></li>
    <li aria-current="page">Laptops</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.bc-classic ol { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-size: 0.95rem; }
.bc-classic li { display: flex; align-items: center; color: #64748b; }
.bc-classic li:not(:last-child)::after { content: "/"; margin-left: 8px; color: #cbd5e1; }
.bc-classic a { text-decoration: none; color: #3b82f6; font-weight: 500; transition: 0.2s; }
.bc-classic a:hover { text-decoration: underline; color: #2563eb; }
.bc-classic li[aria-current="page"] { color: #0f172a; font-weight: 600; pointer-events: none; }`,
    jsCode: ``
  },

  // 2. Chevron Arrow Breadcrumb
  {
    _id: "bc2",
    title: "Chevron Arrow Breadcrumb",
    slug: "chevron-arrow-breadcrumb",
    description: "Modern breadcrumb using chevron icons as separators.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["breadcrumb", "chevron", "arrow", "modern"],
    isPremium: false,
    views: 19400,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-chev" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Settings</a></li>
    <li aria-current="page">Security</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.bc-chev ol { list-style: none; padding: 12px 20px; margin: 0; display: flex; align-items: center; gap: 10px; background: #f1f5f9; border-radius: 8px; font-size: 0.9rem; }
.bc-chev li { display: flex; align-items: center; color: #64748b; }
.bc-chev li:not(:last-child)::after { content: "›"; font-size: 1.2rem; margin-left: 10px; color: #94a3b8; line-height: 0; transform: translateY(-1px); }
.bc-chev a { text-decoration: none; color: #475569; font-weight: 500; transition: 0.2s; }
.bc-chev a:hover { color: #0f172a; }
.bc-chev li[aria-current="page"] { color: #10b981; font-weight: 700; }`,
    jsCode: ``
  },

  // 3. Pill Shape Breadcrumb
  {
    _id: "bc3",
    title: "Pill Shape Breadcrumb",
    slug: "pill-shape-breadcrumb",
    description: "Each step is enclosed in a solid pill shape for clear distinction.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["breadcrumb", "pill", "solid", "tags"],
    isPremium: false,
    views: 17200,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-pill" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Library</a></li>
    <li><a href="#">Data</a></li>
    <li aria-current="page">React</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.bc-pill ol { list-style: none; padding: 0; margin: 0; display: flex; align-items: center; gap: 10px; }
.bc-pill li { display: flex; align-items: center; }
.bc-pill li:not(:last-child)::after { content: "→"; margin-left: 10px; color: #94a3b8; font-size: 0.8rem; }
.bc-pill a, .bc-pill li[aria-current="page"] { text-decoration: none; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; transition: 0.2s; }
.bc-pill a { background: #e2e8f0; color: #475569; }
.bc-pill a:hover { background: #cbd5e1; color: #0f172a; }
.bc-pill li[aria-current="page"] { background: #3b82f6; color: #fff; }`,
    jsCode: ``
  },

  // 4. Cyberpunk Breadcrumb
  {
    _id: "bc4",
    title: "Cyberpunk Breadcrumb",
    slug: "cyberpunk-breadcrumb",
    description: "Neon styling, sharp angles, and dark theme path navigation.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["breadcrumb", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 18100,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-cy" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">SYS_ROOT</a></li>
    <li><a href="#">LOCAL</a></li>
    <li aria-current="page">CORE_BIN</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.bc-cy ol { list-style: none; padding: 10px 20px; margin: 0; display: flex; align-items: center; gap: 15px; background: rgba(0,255,255,0.05); border: 1px solid #0ff; box-shadow: 0 0 10px rgba(0,255,255,0.1); }
.bc-cy li { display: flex; align-items: center; color: #0ff; font-weight: bold; }
.bc-cy li:not(:last-child)::after { content: "//"; margin-left: 15px; color: #f0f; text-shadow: 0 0 5px #f0f; }
.bc-cy a { text-decoration: none; color: #555; transition: 0.2s; }
.bc-cy a:hover { color: #fff; text-shadow: 0 0 5px #fff; }
.bc-cy li[aria-current="page"] { color: #0ff; text-shadow: 0 0 8px #0ff; }`,
    jsCode: ``
  },

  // 5. Glassmorphism Breadcrumb
  {
    _id: "bc5",
    title: "Glassmorphism Breadcrumb",
    slug: "glassmorphism-breadcrumb",
    description: "Frosted glass breadcrumb resting on a vibrant background.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["breadcrumb", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 21500,
    downloads: 5500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <nav class="bc-gl" aria-label="Breadcrumb">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Dashboard</a></li>
      <li aria-current="page">Stats</li>
    </ol>
  </nav>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); }
.bc-gl ol { list-style: none; padding: 15px 25px; margin: 0; display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3); border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); font-weight: 500; font-size: 0.95rem; }
.bc-gl li { display: flex; align-items: center; color: #fff; }
.bc-gl li:not(:last-child)::after { content: ">"; margin-left: 10px; color: rgba(255,255,255,0.5); font-family: monospace; }
.bc-gl a { text-decoration: none; color: rgba(255,255,255,0.7); transition: 0.2s; }
.bc-gl a:hover { color: #fff; text-shadow: 0 0 5px rgba(255,255,255,0.5); }
.bc-gl li[aria-current="page"] { font-weight: 700; text-shadow: 0 0 10px rgba(255,255,255,0.3); }`,
    jsCode: ``
  },

  // 6. Brutalist Breadcrumb
  {
    _id: "bc6",
    title: "Brutalist Breadcrumb",
    slug: "brutalist-breadcrumb",
    description: "Thick borders, high contrast, and aggressive bold typography.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["breadcrumb", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 14200,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-br" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">INDEX</a></li>
    <li><a href="#">WORK</a></li>
    <li aria-current="page">PROJECT_X</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e5e5; }
.bc-br ol { list-style: none; padding: 0; margin: 0; display: flex; align-items: stretch; border: 3px solid #000; background: #fff; box-shadow: 5px 5px 0 #000; }
.bc-br li { display: flex; align-items: center; }
.bc-br li:not(:last-child) { border-right: 3px solid #000; }
.bc-br a, .bc-br li[aria-current="page"] { padding: 10px 20px; text-decoration: none; color: #000; font-weight: 900; font-size: 1rem; transition: 0.2s; }
.bc-br a { background: #facc15; }
.bc-br a:hover { background: #ef4444; color: #fff; }
.bc-br li[aria-current="page"] { background: #000; color: #fff; }`,
    jsCode: ``
  },

  // 7. Neumorphic Breadcrumb
  {
    _id: "bc7",
    title: "Neumorphic Breadcrumb",
    slug: "neumorphic-breadcrumb",
    description: "Soft UI buttons for paths that look pressed when active.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["breadcrumb", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 15300,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-neu" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Profile</a></li>
    <li aria-current="page">Billing</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.bc-neu ol { list-style: none; padding: 15px; margin: 0; display: flex; align-items: center; gap: 15px; border-radius: 16px; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); }
.bc-neu li { display: flex; align-items: center; }
.bc-neu li:not(:last-child)::after { content: "▶"; margin-left: 15px; color: #a0aec0; font-size: 0.7rem; }
.bc-neu a, .bc-neu li[aria-current="page"] { text-decoration: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; font-size: 0.9rem; transition: 0.2s; }
.bc-neu a { color: #718096; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); }
.bc-neu a:hover { color: #2d3748; }
.bc-neu li[aria-current="page"] { color: #3182ce; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 8. Floating Bubble Breadcrumb
  {
    _id: "bc8",
    title: "Floating Bubble Breadcrumb",
    slug: "floating-bubble-breadcrumb",
    description: "Path segments that look like connected floating bubbles.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["breadcrumb", "bubble", "floating", "modern"],
    isPremium: true,
    views: 18900,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-bub" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Articles</a></li>
    <li><a href="#">Tech</a></li>
    <li aria-current="page">AI</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f1f5f9; }
.bc-bub ol { list-style: none; padding: 0; margin: 0; display: flex; align-items: center; }
.bc-bub li { display: flex; align-items: center; }
.bc-bub li:not(:last-child)::after { content: ""; width: 20px; height: 2px; background: #cbd5e1; }
.bc-bub a, .bc-bub li[aria-current="page"] { text-decoration: none; padding: 10px 20px; border-radius: 30px; font-weight: 600; font-size: 0.9rem; box-shadow: 0 4px 10px rgba(0,0,0,0.05); transition: 0.3s; background: #fff; }
.bc-bub a { color: #64748b; }
.bc-bub a:hover { transform: translateY(-2px); box-shadow: 0 6px 15px rgba(0,0,0,0.1); color: #0f172a; }
.bc-bub li[aria-current="page"] { background: #0f172a; color: #fff; box-shadow: 0 4px 15px rgba(15, 23, 42, 0.3); }`,
    jsCode: ``
  },

  // 9. Minimal Dot Breadcrumb
  {
    _id: "bc9",
    title: "Minimal Dot Breadcrumb",
    slug: "minimal-dot-breadcrumb",
    description: "Extremely clean design separated by small subtle dots.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["breadcrumb", "minimal", "dot", "clean"],
    isPremium: false,
    views: 20100,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-dot" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Store</a></li>
    <li><a href="#">Mens</a></li>
    <li aria-current="page">Shoes</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #fff; }
.bc-dot ol { list-style: none; padding: 0; margin: 0; display: flex; align-items: center; gap: 12px; font-size: 0.95rem; }
.bc-dot li { display: flex; align-items: center; color: #111; }
.bc-dot li:not(:last-child)::after { content: ""; width: 4px; height: 4px; border-radius: 50%; background: #ccc; margin-left: 12px; }
.bc-dot a { text-decoration: none; color: #888; transition: 0.2s; }
.bc-dot a:hover { color: #111; }
.bc-dot li[aria-current="page"] { font-weight: 600; letter-spacing: -0.3px; }`,
    jsCode: ``
  },

  // 10. Dark Mode Glow Breadcrumb
  {
    _id: "bc10",
    title: "Dark Mode Glow Breadcrumb",
    slug: "dark-mode-glow-breadcrumb",
    description: "Deep dark UI with colorful gradient glowing active paths.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["breadcrumb", "dark", "gradient", "glow"],
    isPremium: true,
    views: 22600,
    downloads: 6300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-dg" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Setup</a></li>
    <li><a href="#">Database</a></li>
    <li aria-current="page">Deploy</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; }
.bc-dg ol { list-style: none; padding: 15px 25px; margin: 0; display: flex; align-items: center; gap: 15px; background: #1e293b; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
.bc-dg li { display: flex; align-items: center; }
.bc-dg li:not(:last-child)::after { content: "/"; margin-left: 15px; color: #475569; font-weight: 300; }
.bc-dg a { text-decoration: none; color: #94a3b8; font-size: 0.95rem; font-weight: 500; transition: 0.3s; }
.bc-dg a:hover { color: #fff; text-shadow: 0 0 8px rgba(255,255,255,0.4); }
.bc-dg li[aria-current="page"] { font-size: 0.95rem; font-weight: 700; background: linear-gradient(90deg, #ec4899, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 0 15px rgba(139, 92, 246, 0.4); }`,
    jsCode: ``
  }
];
