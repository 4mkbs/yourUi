import { Design } from "./designs-data";

export const BATCH_37_DESIGNS: Design[] = [
  // 1. Classic Slash Breadcrumbs
  {
    _id: "bc1",
    title: "Classic Slash Breadcrumbs",
    slug: "classic-slash-breadcrumbs",
    description: "Standard clean navigation using forward slashes as separators.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["breadcrumbs", "classic", "slash", "navigation"],
    isPremium: false,
    views: 19100,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-classic" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li aria-current="page">Electronics</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-classic ol { display: flex; flex-wrap: wrap; list-style: none; padding: 12px 24px; margin: 0; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); gap: 8px; align-items: center; }
.bc-classic li { display: flex; align-items: center; font-size: 0.9rem; color: #64748b; font-weight: 500; }
.bc-classic li:not(:last-child)::after { content: "/"; margin-left: 8px; color: #cbd5e1; font-weight: 400; }
.bc-classic a { text-decoration: none; color: #3b82f6; transition: 0.2s; }
.bc-classic a:hover { color: #2563eb; text-decoration: underline; }
.bc-classic li[aria-current="page"] { color: #0f172a; font-weight: 600; }`,
    jsCode: ``
  },

  // 2. Chevron Arrow Breadcrumbs
  {
    _id: "bc2",
    title: "Chevron Breadcrumbs",
    slug: "chevron-breadcrumbs",
    description: "Modern navigation trail using right-pointing chevron arrows.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["breadcrumbs", "chevron", "arrow", "navigation"],
    isPremium: false,
    views: 18500,
    downloads: 4900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-chev" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Dashboard</a></li>
    <li><a href="#">Settings</a></li>
    <li aria-current="page">Profile</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-chev ol { display: flex; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; gap: 4px; align-items: center; }
.bc-chev li { display: flex; align-items: center; font-size: 0.85rem; color: #94a3b8; }
.bc-chev li:not(:last-child)::after { content: "›"; margin-left: 6px; margin-right: 2px; font-size: 1.2rem; color: #cbd5e1; line-height: 1; }
.bc-chev a { text-decoration: none; color: #475569; font-weight: 500; transition: 0.2s; padding: 4px 8px; border-radius: 4px; }
.bc-chev a:hover { background: #f1f5f9; color: #0f172a; }
.bc-chev li[aria-current="page"] { color: #3b82f6; font-weight: 600; padding: 4px 8px; }`,
    jsCode: ``
  },

  // 3. Pill Breadcrumbs
  {
    _id: "bc3",
    title: "Pill Breadcrumbs",
    slug: "pill-breadcrumbs",
    description: "Links are enclosed in neat rounded pill shapes with distinct active states.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["breadcrumbs", "pill", "rounded", "modern"],
    isPremium: true,
    views: 15400,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-pill" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Store</a></li>
    <li><a href="#">Menswear</a></li>
    <li aria-current="page">Jackets</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-pill ol { display: flex; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; gap: 8px; align-items: center; }
.bc-pill li { display: flex; align-items: center; font-size: 0.85rem; font-weight: 600; }
.bc-pill li:not(:last-child)::after { content: "→"; margin-left: 8px; color: #94a3b8; }
.bc-pill a { text-decoration: none; color: #475569; background: #fff; padding: 6px 14px; border-radius: 20px; border: 1px solid #cbd5e1; transition: 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.bc-pill a:hover { border-color: #3b82f6; color: #3b82f6; }
.bc-pill li[aria-current="page"] { background: #3b82f6; color: #fff; padding: 6px 14px; border-radius: 20px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3); }`,
    jsCode: ``
  },

  // 4. Cyberpunk Breadcrumbs
  {
    _id: "bc4",
    title: "Cyberpunk Breadcrumbs",
    slug: "cyberpunk-breadcrumbs",
    description: "High-tech terminal style with neon colors and glowing slashes.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["breadcrumbs", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 14200,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-cy" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">SYS</a></li>
    <li><a href="#">DATA</a></li>
    <li aria-current="page">ROOT</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-cy ol { display: flex; flex-wrap: wrap; list-style: none; padding: 10px 20px; margin: 0; background: #111; border: 1px dashed #333; gap: 10px; align-items: center; }
.bc-cy li { display: flex; align-items: center; font-size: 0.9rem; font-weight: bold; letter-spacing: 1px; color: #777; }
.bc-cy li:not(:last-child)::after { content: "//"; margin-left: 10px; color: #f0f; text-shadow: 0 0 5px #f0f; }
.bc-cy a { text-decoration: none; color: #0ff; transition: 0.2s; }
.bc-cy a:hover { text-shadow: 0 0 8px #0ff; background: rgba(0,255,255,0.1); }
.bc-cy li[aria-current="page"] { color: #fff; text-shadow: 0 0 5px #fff; animation: blink 2s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`,
    jsCode: ``
  },

  // 5. Glassmorphism Breadcrumbs
  {
    _id: "bc5",
    title: "Glassmorphism Breadcrumbs",
    slug: "glassmorphism-breadcrumbs",
    description: "Frosted glass container over a colorful gradient background.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["breadcrumbs", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 18800,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <nav class="bc-gl" aria-label="Breadcrumb">
    <ol>
      <li><a href="#">Library</a></li>
      <li><a href="#">Music</a></li>
      <li aria-current="page">Playlists</li>
    </ol>
  </nav>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.bc-gl ol { display: flex; flex-wrap: wrap; list-style: none; padding: 12px 24px; margin: 0; background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border-radius: 12px; border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.1); gap: 10px; align-items: center; }
.bc-gl li { display: flex; align-items: center; font-size: 0.95rem; font-weight: 500; color: rgba(255,255,255,0.7); }
.bc-gl li:not(:last-child)::after { content: "/"; margin-left: 10px; color: rgba(255,255,255,0.4); }
.bc-gl a { text-decoration: none; color: #fff; transition: 0.2s; }
.bc-gl a:hover { text-shadow: 0 0 10px rgba(255,255,255,0.5); }
.bc-gl li[aria-current="page"] { color: #fff; font-weight: 700; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; }`,
    jsCode: ``
  },

  // 6. Neumorphic Breadcrumbs
  {
    _id: "bc6",
    title: "Neumorphic Breadcrumbs",
    slug: "neumorphic-breadcrumbs",
    description: "Soft UI design with debossed backgrounds and extruded active items.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["breadcrumbs", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 13700,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-neu" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Web</a></li>
    <li aria-current="page">Design</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-neu ol { display: flex; flex-wrap: wrap; list-style: none; padding: 12px 20px; margin: 0; background: #e0e5ec; border-radius: 12px; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); gap: 12px; align-items: center; }
.bc-neu li { display: flex; align-items: center; font-size: 0.9rem; font-weight: 600; color: #718096; }
.bc-neu li:not(:last-child)::after { content: ">"; margin-left: 12px; color: #a0aec0; }
.bc-neu a { text-decoration: none; color: #4a5568; transition: 0.2s; padding: 6px 12px; border-radius: 8px; }
.bc-neu a:hover { box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); }
.bc-neu li[aria-current="page"] { color: #3182ce; padding: 6px 12px; border-radius: 8px; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Brutalist Breadcrumbs
  {
    _id: "bc7",
    title: "Brutalist Breadcrumbs",
    slug: "brutalist-breadcrumbs",
    description: "Thick borders, high contrast boxes, and a stark layout.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["breadcrumbs", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 11900,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-br" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">INDEX</a></li>
    <li><a href="#">ARCHIVE</a></li>
    <li aria-current="page">POST_04</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-br ol { display: flex; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; gap: 0; border: 4px solid #000; box-shadow: 6px 6px 0 #000; background: #fff; }
.bc-br li { display: flex; align-items: stretch; font-size: 0.9rem; font-weight: 900; }
.bc-br li:not(:last-child) { border-right: 4px solid #000; }
.bc-br a { text-decoration: none; color: #000; padding: 10px 15px; display: flex; align-items: center; transition: 0.1s; }
.bc-br a:hover { background: #facc15; }
.bc-br li[aria-current="page"] { background: #000; color: #fff; padding: 10px 15px; display: flex; align-items: center; }`,
    jsCode: ``
  },

  // 8. Minimal Dot Breadcrumbs
  {
    _id: "bc8",
    title: "Minimal Dot Breadcrumbs",
    slug: "minimal-dot-breadcrumbs",
    description: "Subtle and elegant, using simple center dots to separate links.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["breadcrumbs", "minimal", "dot", "clean"],
    isPremium: false,
    views: 16800,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-min" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Account</a></li>
    <li><a href="#">Billing</a></li>
    <li aria-current="page">Invoices</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-min ol { display: flex; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; gap: 10px; align-items: center; }
.bc-min li { display: flex; align-items: center; font-size: 0.85rem; color: #64748b; font-weight: 400; text-transform: lowercase; }
.bc-min li:not(:last-child)::after { content: "•"; margin-left: 10px; color: #cbd5e1; font-size: 1.2rem; line-height: 0; }
.bc-min a { text-decoration: none; color: #94a3b8; transition: 0.2s; }
.bc-min a:hover { color: #0f172a; }
.bc-min li[aria-current="page"] { color: #0f172a; border-bottom: 1px solid #0f172a; }`,
    jsCode: ``
  },

  // 9. Gradient Text Breadcrumbs
  {
    _id: "bc9",
    title: "Gradient Text Breadcrumbs",
    slug: "gradient-text-breadcrumbs",
    description: "Active links feature a beautiful text gradient clip.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["breadcrumbs", "gradient", "colorful", "modern"],
    isPremium: true,
    views: 17300,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-grad" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Case Studies</a></li>
    <li aria-current="page">Fintech App</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-grad ol { display: flex; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; gap: 8px; align-items: center; background: #1e293b; padding: 10px 20px; border-radius: 30px; }
.bc-grad li { display: flex; align-items: center; font-size: 0.9rem; font-weight: 600; color: #64748b; }
.bc-grad li:not(:last-child)::after { content: "›"; margin-left: 8px; color: #475569; font-size: 1.2rem; line-height: 1; }
.bc-grad a { text-decoration: none; color: #cbd5e1; transition: 0.2s; }
.bc-grad a:hover { color: #fff; }
.bc-grad li[aria-current="page"] { background: linear-gradient(90deg, #38bdf8, #818cf8, #e879f9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700; }`,
    jsCode: ``
  },

  // 10. Folder Tab Breadcrumbs
  {
    _id: "bc10",
    title: "Folder Tab Breadcrumbs",
    slug: "folder-tab-breadcrumbs",
    description: "Interlocking shapes resembling file folder tabs or IDE breadcrumbs.",
    category: "Breadcrumbs",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["breadcrumbs", "tabs", "folder", "solid"],
    isPremium: true,
    views: 14900,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<nav class="bc-tab" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">src</a></li>
    <li><a href="#">components</a></li>
    <li aria-current="page">Button.tsx</li>
  </ol>
</nav>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.bc-tab ol { display: flex; list-style: none; padding: 0; margin: 0; border-radius: 6px; overflow: hidden; background: #e2e8f0; }
.bc-tab li { display: flex; }
.bc-tab a { text-decoration: none; color: #475569; padding: 8px 16px 8px 24px; font-size: 0.85rem; font-weight: 500; background: #e2e8f0; position: relative; transition: 0.2s; clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 10px 50%); margin-left: -10px; }
.bc-tab li:first-child a { padding-left: 16px; clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%); margin-left: 0; }
.bc-tab a:hover { background: #cbd5e1; }
.bc-tab li[aria-current="page"] { background: #3b82f6; color: #fff; padding: 8px 16px 8px 24px; font-size: 0.85rem; font-weight: 600; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 10px 50%); margin-left: -10px; }`,
    jsCode: ``
  }
];
