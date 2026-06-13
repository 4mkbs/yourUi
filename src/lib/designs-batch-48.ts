import { Design } from "./designs-data";

export const BATCH_48_DESIGNS: Design[] = [
  // 1. Classic Circle Avatar
  {
    _id: "av1",
    title: "Classic Status Avatar",
    slug: "classic-status-avatar",
    description: "Standard circular avatar with a clean status indicator dot.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["avatar", "circle", "status", "profile"],
    isPremium: false,
    views: 29100,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-wrap">
  <div class="av-c">
    <img src="https://i.pravatar.cc/150?img=32" alt="User" />
    <span class="av-c-status av-c-online"></span>
  </div>
  <div class="av-c av-c-lg">
    <img src="https://i.pravatar.cc/150?img=12" alt="User" />
    <span class="av-c-status av-c-offline"></span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.av-wrap { display: flex; gap: 30px; align-items: center; }
.av-c { position: relative; width: 48px; height: 48px; border-radius: 50%; display: inline-block; }
.av-c img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
.av-c-lg { width: 80px; height: 80px; }
.av-c-status { position: absolute; bottom: 0; right: 0; width: 25%; height: 25%; border-radius: 50%; border: 2px solid #fff; }
.av-c-online { background: #10b981; }
.av-c-offline { background: #94a3b8; }`,
    jsCode: ``
  },

  // 2. Soft Square Avatar
  {
    _id: "av2",
    title: "Soft Square Avatar",
    slug: "soft-square-avatar",
    description: "Modern slightly rounded square avatar, popular in chat applications.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["avatar", "square", "rounded", "modern"],
    isPremium: false,
    views: 26400,
    downloads: 7400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-wrap">
  <div class="av-sq">
    <img src="https://i.pravatar.cc/150?img=68" alt="User" />
  </div>
  <div class="av-sq av-sq-md">
    <img src="https://i.pravatar.cc/150?img=44" alt="User" />
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.av-wrap { display: flex; gap: 30px; align-items: center; }
.av-sq { width: 48px; height: 48px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
.av-sq img { width: 100%; height: 100%; object-fit: cover; }
.av-sq-md { width: 72px; height: 72px; border-radius: 18px; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Avatar
  {
    _id: "av3",
    title: "Cyberpunk Hex Avatar",
    slug: "cyberpunk-hex-avatar",
    description: "Hexagon shape with neon borders and glitch aesthetic.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["avatar", "cyberpunk", "hex", "gaming"],
    isPremium: true,
    views: 22100,
    downloads: 6200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-wrap">
  <div class="av-cy">
    <div class="av-cy-inner">
      <img src="https://i.pravatar.cc/150?img=33" alt="Player" />
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.av-cy { width: 100px; height: 110px; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); background: #0ff; display: flex; justify-content: center; align-items: center; position: relative; transition: 0.3s; }
.av-cy:hover { transform: scale(1.05); filter: drop-shadow(0 0 15px #0ff); }
.av-cy-inner { width: 94px; height: 104px; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); background: #000; display: flex; justify-content: center; align-items: center; }
.av-cy-inner img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: 0.3s; filter: grayscale(100%) contrast(1.2); }
.av-cy:hover .av-cy-inner img { opacity: 1; filter: grayscale(0%) contrast(1); }`,
    jsCode: ``
  },

  // 4. Glassmorphism Avatar
  {
    _id: "av4",
    title: "Glassmorphism Avatar",
    slug: "glassmorphism-avatar",
    description: "Frosted glass ring surrounding the profile picture.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["avatar", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 28500,
    downloads: 7900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="av-gl">
    <img src="https://i.pravatar.cc/150?img=47" alt="User" />
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); }
.av-gl { width: 120px; height: 120px; border-radius: 50%; padding: 10px; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.15); display: flex; justify-content: center; align-items: center; }
.av-gl img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }`,
    jsCode: ``
  },

  // 5. Brutalist Avatar
  {
    _id: "av5",
    title: "Brutalist Avatar",
    slug: "brutalist-avatar",
    description: "Thick black borders with a stark offset shadow.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["avatar", "brutalist", "bold", "shadow"],
    isPremium: false,
    views: 19800,
    downloads: 4700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-wrap">
  <div class="av-br">
    <img src="https://i.pravatar.cc/150?img=59" alt="User" />
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e5e5; }
.av-wrap { display: flex; gap: 30px; }
.av-br { width: 100px; height: 100px; border: 4px solid #000; box-shadow: 6px 6px 0 #000; background: #facc15; display: flex; justify-content: center; align-items: center; transition: 0.1s; cursor: pointer; }
.av-br:active { transform: translate(4px, 4px); box-shadow: 2px 2px 0 #000; }
.av-br img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.2); transition: 0.2s; }
.av-br:hover img { filter: grayscale(0%) contrast(1); }`,
    jsCode: ``
  },

  // 6. Neumorphic Avatar
  {
    _id: "av6",
    title: "Neumorphic Avatar",
    slug: "neumorphic-avatar",
    description: "Soft UI frame creating a physical 3D cutout look.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["avatar", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 18400,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-wrap">
  <div class="av-neu">
    <img src="https://i.pravatar.cc/150?img=28" alt="User" />
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.av-wrap { display: flex; gap: 30px; }
.av-neu { width: 100px; height: 100px; border-radius: 50%; padding: 8px; background: #e0e5ec; box-shadow: 8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.5); display: flex; justify-content: center; align-items: center; }
.av-neu img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Gradient Ring Avatar
  {
    _id: "av7",
    title: "Gradient Ring Avatar",
    slug: "gradient-ring-avatar",
    description: "Instagram story style avatar with a vibrant colorful ring.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["avatar", "gradient", "ring", "story"],
    isPremium: true,
    views: 31200,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-wrap">
  <div class="av-ring">
    <div class="av-r-inner">
      <img src="https://i.pravatar.cc/150?img=1" alt="User" />
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.av-wrap { display: flex; gap: 30px; }
.av-ring { width: 90px; height: 90px; border-radius: 50%; background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); display: flex; justify-content: center; align-items: center; cursor: pointer; transition: 0.3s; }
.av-ring:hover { transform: scale(1.05); }
.av-r-inner { width: 80px; height: 80px; border-radius: 50%; background: #fff; display: flex; justify-content: center; align-items: center; }
.av-r-inner img { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; }`,
    jsCode: ``
  },

  // 8. Initials Avatar
  {
    _id: "av8",
    title: "Initials Fallback Avatar",
    slug: "initials-fallback-avatar",
    description: "Text-based avatar generated from user initials when no image exists.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["avatar", "initials", "text", "fallback"],
    isPremium: false,
    views: 24800,
    downloads: 7100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-wrap">
  <div class="av-init" style="background: #e0e7ff; color: #4338ca;">JS</div>
  <div class="av-init" style="background: #dcfce7; color: #15803d;">MR</div>
  <div class="av-init" style="background: #fee2e2; color: #b91c1c;">AL</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.av-wrap { display: flex; gap: 20px; }
.av-init { width: 56px; height: 56px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-weight: 700; font-size: 1.2rem; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 9. Avatar Group Stack
  {
    _id: "av9",
    title: "Avatar Group Stack",
    slug: "avatar-group-stack",
    description: "Overlapping avatars to show a team or group of users.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["avatar", "group", "stack", "team"],
    isPremium: true,
    views: 32500,
    downloads: 9400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-group">
  <img src="https://i.pravatar.cc/100?img=5" alt="User" />
  <img src="https://i.pravatar.cc/100?img=11" alt="User" />
  <img src="https://i.pravatar.cc/100?img=20" alt="User" />
  <div class="av-g-more">+4</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #ffffff; }
.av-group { display: flex; align-items: center; }
.av-group img, .av-g-more { width: 48px; height: 48px; border-radius: 50%; border: 3px solid #fff; margin-left: -15px; transition: 0.2s; }
.av-group img:first-child { margin-left: 0; }
.av-group img:hover { transform: translateY(-5px); z-index: 10; position: relative; }
.av-g-more { background: #f1f5f9; color: #475569; display: flex; justify-content: center; align-items: center; font-weight: 700; font-size: 0.9rem; z-index: 1; }`,
    jsCode: ``
  },

  // 10. Floating 3D Avatar
  {
    _id: "av10",
    title: "Floating 3D Avatar",
    slug: "floating-3d-avatar",
    description: "A prominent avatar hovering with a strong cast shadow.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["avatar", "3d", "floating", "shadow"],
    isPremium: true,
    views: 21600,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-wrap">
  <div class="av-3d">
    <img src="https://i.pravatar.cc/150?img=60" alt="User" />
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e2e8f0; }
.av-wrap { display: flex; gap: 30px; }
.av-3d { width: 100px; height: 100px; border-radius: 50%; padding: 5px; background: #fff; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); transform: translateY(-5px); transition: 0.3s; cursor: pointer; }
.av-3d:hover { transform: translateY(-10px); box-shadow: 0 25px 30px -5px rgba(0,0,0,0.15), 0 15px 15px -5px rgba(0,0,0,0.06); }
.av-3d img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }`,
    jsCode: ``
  }
];
