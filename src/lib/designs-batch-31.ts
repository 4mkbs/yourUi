import { Design } from "./designs-data";

export const BATCH_31_DESIGNS: Design[] = [
  // 1. Article/Blog Post Skeleton
  {
    _id: "skel1",
    title: "Article Post Skeleton",
    slug: "article-post-skeleton",
    description: "A classic loading state for blog posts, featuring a title, metadata, and multiline text blocks.",
    category: "Skeletons",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["skeleton", "article", "loading", "shimmer"],
    isPremium: false,
    views: 12500,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="skel-wrap">
  <div class="skel-title shimmer"></div>
  <div class="skel-meta shimmer"></div>
  <div class="skel-line shimmer w-full"></div>
  <div class="skel-line shimmer w-90"></div>
  <div class="skel-line shimmer w-80"></div>
  <div class="skel-line shimmer w-full"></div>
  <div class="skel-line shimmer w-60"></div>
</div>`,
    cssCode: `body { margin: 0; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; box-sizing: border-box; }
.skel-wrap { width: 100%; max-width: 400px; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.shimmer { background: #e2e8f0; background-image: linear-gradient(90deg, #e2e8f0 0px, #f1f5f9 40px, #e2e8f0 80px); background-size: 200vw 100%; animation: shimmer 1.5s infinite linear; border-radius: 4px; }
@keyframes shimmer { 0% { background-position: -200px 0; } 100% { background-position: 200px 0; } }
.skel-title { height: 28px; width: 70%; margin-bottom: 12px; }
.skel-meta { height: 16px; width: 40%; margin-bottom: 24px; }
.skel-line { height: 14px; margin-bottom: 10px; }
.w-full { width: 100%; }
.w-90 { width: 90%; }
.w-80 { width: 80%; }
.w-60 { width: 60%; }`,
    jsCode: ``
  },

  // 2. User Profile Card Skeleton
  {
    _id: "skel2",
    title: "User Profile Skeleton",
    slug: "user-profile-skeleton",
    description: "Loading state for a user card, including a circular avatar and centered details.",
    category: "Skeletons",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["skeleton", "profile", "card", "avatar"],
    isPremium: false,
    views: 14100,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="skel-card">
  <div class="skel-avatar shimmer"></div>
  <div class="skel-name shimmer"></div>
  <div class="skel-role shimmer"></div>
  <div class="skel-btn shimmer"></div>
</div>`,
    cssCode: `body { margin: 0; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.skel-card { width: 250px; background: #fff; border-radius: 12px; padding: 30px 20px; display: flex; flex-direction: column; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.shimmer { background: #e2e8f0; background-image: linear-gradient(90deg, #e2e8f0 0px, #f8fafc 40px, #e2e8f0 80px); background-size: 200vw 100%; animation: shimmer 1.5s infinite linear; }
@keyframes shimmer { 0% { background-position: -200px 0; } 100% { background-position: 200px 0; } }
.skel-avatar { width: 80px; height: 80px; border-radius: 50%; margin-bottom: 20px; }
.skel-name { width: 60%; height: 20px; border-radius: 4px; margin-bottom: 10px; }
.skel-role { width: 40%; height: 14px; border-radius: 4px; margin-bottom: 25px; }
.skel-btn { width: 80%; height: 36px; border-radius: 20px; }`,
    jsCode: ``
  },

  // 3. Video Thumbnail Skeleton
  {
    _id: "skel3",
    title: "Video Thumbnail Skeleton",
    slug: "video-thumbnail-skeleton",
    description: "Grid item loading state with a large 16:9 box and avatar + text block below.",
    category: "Skeletons",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["skeleton", "video", "youtube", "grid"],
    isPremium: false,
    views: 18200,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="vid-skel">
  <div class="vid-thumb shimmer"></div>
  <div class="vid-info">
    <div class="vid-av shimmer"></div>
    <div class="vid-text">
      <div class="vid-title shimmer"></div>
      <div class="vid-sub shimmer"></div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #0f0f0f; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.vid-skel { width: 100%; max-width: 320px; }
.shimmer { background: #272727; background-image: linear-gradient(90deg, #272727 0px, #3f3f3f 40px, #272727 80px); background-size: 200vw 100%; animation: shimmer 1.5s infinite linear; }
@keyframes shimmer { 0% { background-position: -200px 0; } 100% { background-position: 200px 0; } }
.vid-thumb { width: 100%; aspect-ratio: 16/9; border-radius: 8px; margin-bottom: 12px; }
.vid-info { display: flex; gap: 12px; }
.vid-av { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; }
.vid-text { flex-grow: 1; }
.vid-title { width: 90%; height: 16px; border-radius: 4px; margin-bottom: 8px; margin-top: 4px; }
.vid-sub { width: 60%; height: 14px; border-radius: 4px; }`,
    jsCode: ``
  },

  // 4. E-commerce Product Skeleton
  {
    _id: "skel4",
    title: "E-commerce Product Skeleton",
    slug: "ecommerce-product-skeleton",
    description: "Loading state for product cards including image box, price, and add-to-cart button.",
    category: "Skeletons",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["skeleton", "ecommerce", "product", "card"],
    isPremium: true,
    views: 16500,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="prod-skel">
  <div class="prod-img shimmer"></div>
  <div class="prod-brand shimmer"></div>
  <div class="prod-name shimmer"></div>
  <div class="prod-bottom">
    <div class="prod-price shimmer"></div>
    <div class="prod-btn shimmer"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.prod-skel { width: 220px; background: #fff; padding: 15px; border-radius: 12px; border: 1px solid #f1f5f9; }
.shimmer { background: #f1f5f9; background-image: linear-gradient(90deg, #f1f5f9 0px, #fff 40px, #f1f5f9 80px); background-size: 200vw 100%; animation: shimmer 1.5s infinite linear; border-radius: 4px; }
@keyframes shimmer { 0% { background-position: -200px 0; } 100% { background-position: 200px 0; } }
.prod-img { width: 100%; height: 200px; border-radius: 8px; margin-bottom: 15px; }
.prod-brand { width: 40%; height: 12px; margin-bottom: 8px; }
.prod-name { width: 80%; height: 16px; margin-bottom: 20px; }
.prod-bottom { display: flex; justify-content: space-between; align-items: center; }
.prod-price { width: 30%; height: 20px; }
.prod-btn { width: 36px; height: 36px; border-radius: 8px; }`,
    jsCode: ``
  },

  // 5. Data Table Rows Skeleton
  {
    _id: "skel5",
    title: "Data Table Skeleton",
    slug: "data-table-skeleton",
    description: "Repeating row skeletons to simulate a data table loading.",
    category: "Skeletons",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["skeleton", "table", "data", "list"],
    isPremium: false,
    views: 13900,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="table-skel">
  <div class="t-row t-header shimmer"></div>
  <div class="t-row shimmer"></div>
  <div class="t-row shimmer"></div>
  <div class="t-row shimmer"></div>
  <div class="t-row shimmer"></div>
</div>`,
    cssCode: `body { margin: 0; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.table-skel { width: 100%; max-width: 500px; background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }
.shimmer { background: #e2e8f0; background-image: linear-gradient(90deg, #e2e8f0 0px, #f1f5f9 40px, #e2e8f0 80px); background-size: 200vw 100%; animation: shimmer 1.5s infinite linear; border-radius: 4px; }
@keyframes shimmer { 0% { background-position: -200px 0; } 100% { background-position: 200px 0; } }
.t-row { height: 30px; width: 100%; margin-bottom: 12px; }
.t-row:last-child { margin-bottom: 0; }
.t-header { height: 40px; margin-bottom: 20px; background: #cbd5e1; }`,
    jsCode: ``
  },

  // 6. Cyberpunk Glitch Skeleton
  {
    _id: "skel6",
    title: "Cyberpunk Glitch Skeleton",
    slug: "cyberpunk-glitch-skeleton",
    description: "A dark, neon-tinged placeholder with erratic glitch animations instead of smooth shimmer.",
    category: "Skeletons",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["skeleton", "cyberpunk", "glitch", "neon"],
    isPremium: true,
    views: 11500,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cy-skel">
  <div class="cy-box glitch-skel w-full"></div>
  <div class="cy-box glitch-skel w-80"></div>
  <div class="cy-box glitch-skel w-60"></div>
</div>`,
    cssCode: `body { margin: 0; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cy-skel { width: 300px; border: 1px dashed #333; padding: 20px; background: #0a0a0a; }
.cy-box { height: 20px; margin-bottom: 15px; border-left: 2px solid #0ff; background: #111; }
.w-full { width: 100%; }
.w-80 { width: 80%; }
.w-60 { width: 60%; }
.glitch-skel { animation: glitchPulse 2s infinite; }
@keyframes glitchPulse { 0% { opacity: 1; } 5% { opacity: 0.2; } 10% { opacity: 1; } 15% { opacity: 0.8; box-shadow: 2px 0 0 #f0f; } 20% { opacity: 1; box-shadow: none; } 100% { opacity: 1; } }`,
    jsCode: ``
  },

  // 7. Glassmorphism Shimmer Skeleton
  {
    _id: "skel7",
    title: "Glassmorphism Skeleton",
    slug: "glassmorphism-skeleton",
    description: "Frosted translucent blocks over a moving gradient background.",
    category: "Skeletons",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["skeleton", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 15900,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="gl-skel-wrap">
    <div class="gl-box w-full"></div>
    <div class="gl-box w-90"></div>
    <div class="gl-box w-70"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gl-skel-wrap { width: 300px; padding: 25px; border-radius: 16px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.2); }
.gl-box { height: 20px; background: rgba(255,255,255,0.2); margin-bottom: 15px; border-radius: 4px; animation: glShimmer 2s infinite; }
.w-full { width: 100%; } .w-90 { width: 90%; } .w-70 { width: 70%; }
@keyframes glShimmer { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }`,
    jsCode: ``
  },

  // 8. Pulse List Skeleton
  {
    _id: "skel8",
    title: "Pulse List Skeleton",
    slug: "pulse-list-skeleton",
    description: "A soft pulsing animation instead of a moving gradient, useful for list items.",
    category: "Skeletons",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["skeleton", "pulse", "list", "clean"],
    isPremium: false,
    views: 12800,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="p-list">
  <div class="p-item pulse"><div class="p-av"></div><div class="p-line w-full"></div></div>
  <div class="p-item pulse"><div class="p-av"></div><div class="p-line w-80"></div></div>
  <div class="p-item pulse"><div class="p-av"></div><div class="p-line w-60"></div></div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.p-list { width: 100%; max-width: 300px; }
.p-item { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
.pulse { animation: pulse 1.5s infinite ease-in-out; }
@keyframes pulse { 0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.6; } }
.p-av { width: 40px; height: 40px; border-radius: 50%; background: #e2e8f0; flex-shrink: 0; }
.p-line { height: 16px; background: #e2e8f0; border-radius: 4px; }
.w-full { width: 100%; } .w-80 { width: 80%; } .w-60 { width: 60%; }`,
    jsCode: ``
  },

  // 9. Dashboard Widget Skeleton
  {
    _id: "skel9",
    title: "Dashboard Widget Skeleton",
    slug: "dashboard-widget-skeleton",
    description: "A blocky skeleton mimicking a chart or analytic widget loading.",
    category: "Skeletons",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["skeleton", "dashboard", "widget", "chart"],
    isPremium: true,
    views: 17200,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dash-skel">
  <div class="d-top">
    <div class="d-title shimmer"></div>
    <div class="d-icon shimmer"></div>
  </div>
  <div class="d-chart shimmer"></div>
</div>`,
    cssCode: `body { margin: 0; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.dash-skel { width: 300px; background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); border: 1px solid #e2e8f0; }
.shimmer { background: #f1f5f9; background-image: linear-gradient(90deg, #f1f5f9 0px, #fff 40px, #f1f5f9 80px); background-size: 200vw 100%; animation: shimmer 1.5s infinite linear; border-radius: 6px; }
@keyframes shimmer { 0% { background-position: -200px 0; } 100% { background-position: 200px 0; } }
.d-top { display: flex; justify-content: space-between; margin-bottom: 30px; }
.d-title { width: 50%; height: 20px; }
.d-icon { width: 32px; height: 32px; border-radius: 50%; }
.d-chart { width: 100%; height: 120px; }`,
    jsCode: ``
  },

  // 10. Brutalist Block Skeleton
  {
    _id: "skel10",
    title: "Brutalist Skeleton",
    slug: "brutalist-skeleton",
    description: "High contrast, solid black/white blocks instead of soft grey shimmers.",
    category: "Skeletons",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["skeleton", "brutalist", "block", "bold"],
    isPremium: false,
    views: 10100,
    downloads: 2300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="br-skel">
  <div class="br-block br-flash w-full" style="height: 40px;"></div>
  <div class="br-block br-flash w-80"></div>
  <div class="br-block br-flash w-full" style="height: 100px;"></div>
</div>`,
    cssCode: `body { margin: 0; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.br-skel { width: 100%; max-width: 350px; border: 4px solid #000; background: #fff; padding: 20px; box-shadow: 8px 8px 0 #000; }
.br-block { background: #000; height: 20px; margin-bottom: 15px; }
.br-block:last-child { margin-bottom: 0; }
.w-full { width: 100%; } .w-80 { width: 80%; }
.br-flash { animation: brFlash 0.5s infinite alternate steps(2, end); }
@keyframes brFlash { 0% { opacity: 1; } 100% { opacity: 0.2; } }`,
    jsCode: ``
  }
];
