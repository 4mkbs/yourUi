import { Design } from "./designs-data";

export const BATCH_29_DESIGNS: Design[] = [
  // 1. Standard Circle with Status Dot
  {
    _id: "av1",
    title: "Status Avatar",
    slug: "status-avatar",
    description: "A classic circular avatar featuring a status indicator dot (online/offline).",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["avatar", "status", "circle", "clean"],
    isPremium: false,
    views: 18200,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-wrap">
  <div class="av-container">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80" alt="User" class="av-img">
    <span class="av-status online"></span>
  </div>
  <div class="av-container">
    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80" alt="User" class="av-img">
    <span class="av-status offline"></span>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f9fafb; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.av-wrap { display: flex; gap: 30px; }
.av-container { position: relative; width: 64px; height: 64px; }
.av-img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.av-status { position: absolute; bottom: 2px; right: 2px; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #fff; }
.online { background: #10b981; }
.offline { background: #9ca3af; }`,
    jsCode: ``
  },

  // 2. Initials Avatar
  {
    _id: "av2",
    title: "Initials Avatar",
    slug: "initials-avatar",
    description: "A fallback avatar displaying user initials when no profile image is available.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["avatar", "initials", "fallback", "clean"],
    isPremium: false,
    views: 15400,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-wrap">
  <div class="av-initials bg-blue">JD</div>
  <div class="av-initials bg-purple">AS</div>
  <div class="av-initials bg-orange">MK</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.av-wrap { display: flex; gap: 20px; }
.av-initials { width: 56px; height: 56px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; font-weight: 600; color: #fff; }
.bg-blue { background: #3b82f6; }
.bg-purple { background: #8b5cf6; }
.bg-orange { background: #f97316; }`,
    jsCode: ``
  },

  // 3. Avatar Group
  {
    _id: "av3",
    title: "Avatar Group Stack",
    slug: "avatar-group-stack",
    description: "Overlapping avatars to represent a team or multiple active users.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["avatar", "group", "stack", "team"],
    isPremium: false,
    views: 19800,
    downloads: 5600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-group">
  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="User" class="av-stack-item">
  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="User" class="av-stack-item">
  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="User" class="av-stack-item">
  <div class="av-stack-item av-more">+4</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.av-group { display: flex; padding-left: 10px; }
.av-stack-item { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 3px solid #fff; margin-left: -15px; position: relative; transition: 0.2s; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.av-stack-item:hover { transform: translateY(-5px); z-index: 10; }
.av-more { background: #e2e8f0; color: #475569; display: flex; justify-content: center; align-items: center; font-size: 0.85rem; font-weight: bold; }`,
    jsCode: ``
  },

  // 4. Gradient Ring Avatar
  {
    _id: "av4",
    title: "Gradient Ring Avatar",
    slug: "gradient-ring-avatar",
    description: "An avatar surrounded by a vibrant gradient ring, similar to social media stories.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["avatar", "gradient", "ring", "social"],
    isPremium: true,
    views: 16700,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="av-ring-wrap">
  <div class="av-ring">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" alt="User">
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.av-ring-wrap { padding: 20px; }
.av-ring { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); padding: 3px; cursor: pointer; transition: transform 0.2s; }
.av-ring:hover { transform: scale(1.05); }
.av-ring img { width: 100%; height: 100%; border-radius: 50%; border: 3px solid #fff; object-fit: cover; box-sizing: border-box; }`,
    jsCode: ``
  },

  // 5. Hexagon Avatar
  {
    _id: "av5",
    title: "Hexagon Avatar",
    slug: "hexagon-avatar",
    description: "A geometric hexagon mask for avatars, ideal for gaming and tech interfaces.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["avatar", "hexagon", "geometric", "gaming"],
    isPremium: true,
    views: 13500,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="hex-av-wrap">
  <div class="hex-av">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="User">
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.hex-av-wrap { filter: drop-shadow(0 0 10px rgba(59,130,246,0.5)); cursor: pointer; transition: 0.3s; }
.hex-av-wrap:hover { filter: drop-shadow(0 0 20px rgba(59,130,246,0.8)); transform: scale(1.05); }
.hex-av { width: 100px; height: 115.47px; background: #3b82f6; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); display: flex; justify-content: center; align-items: center; padding: 4px; box-sizing: border-box; }
.hex-av img { width: 100%; height: 100%; object-fit: cover; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }`,
    jsCode: ``
  },

  // 6. Neumorphic Avatar
  {
    _id: "av6",
    title: "Neumorphic Avatar",
    slug: "neumorphic-avatar",
    description: "An extruded circular frame providing a soft, tactile 3D effect.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["avatar", "neumorphism", "soft", "ui"],
    isPremium: false,
    views: 11200,
    downloads: 3000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-av-wrap">
  <div class="neu-av">
    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80" alt="User">
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.neu-av-wrap { padding: 20px; }
.neu-av { width: 100px; height: 100px; border-radius: 50%; background: #e0e5ec; box-shadow: 8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.5); padding: 8px; display: flex; justify-content: center; align-items: center; }
.neu-av img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Brutalist Avatar
  {
    _id: "av7",
    title: "Brutalist Avatar",
    slug: "brutalist-avatar",
    description: "Harsh, unrounded edges with thick borders and solid shadows.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["avatar", "brutalist", "square", "bold"],
    isPremium: false,
    views: 9500,
    downloads: 2400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="br-av-wrap">
  <div class="br-av">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" alt="User">
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.br-av-wrap { padding: 20px; }
.br-av { width: 120px; height: 120px; background: #fff; border: 4px solid #000; box-shadow: 8px 8px 0 #000; padding: 4px; transition: 0.1s; cursor: pointer; }
.br-av:hover { transform: translate(-2px, -2px); box-shadow: 10px 10px 0 #000; }
.br-av:active { transform: translate(8px, 8px); box-shadow: 0 0 0 #000; }
.br-av img { width: 100%; height: 100%; object-fit: cover; border: 2px solid #000; box-sizing: border-box; filter: grayscale(100%) contrast(120%); }
.br-av:hover img { filter: grayscale(0%); }`,
    jsCode: ``
  },

  // 8. Cyberpunk Avatar
  {
    _id: "av8",
    title: "Cyberpunk Avatar",
    slug: "cyberpunk-avatar",
    description: "A dark avatar frame with glowing neon accents and tech elements.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["avatar", "cyberpunk", "neon", "hacker"],
    isPremium: true,
    views: 14800,
    downloads: 3700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cy-av">
  <div class="cy-border top-left"></div>
  <div class="cy-border bottom-right"></div>
  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="User">
</div>`,
    cssCode: `body { margin: 0; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cy-av { position: relative; width: 100px; height: 100px; padding: 5px; background: #111; cursor: pointer; }
.cy-av img { width: 100%; height: 100%; object-fit: cover; filter: contrast(120%) sepia(50%) hue-rotate(150deg); transition: 0.3s; }
.cy-av:hover img { filter: none; }
.cy-border { position: absolute; width: 20px; height: 20px; border: 2px solid transparent; transition: 0.3s; }
.top-left { top: 0; left: 0; border-top-color: #0ff; border-left-color: #0ff; box-shadow: inset 2px 2px 5px rgba(0,255,255,0.2); }
.bottom-right { bottom: 0; right: 0; border-bottom-color: #f0f; border-right-color: #f0f; box-shadow: inset -2px -2px 5px rgba(255,0,255,0.2); }
.cy-av:hover .top-left { top: -5px; left: -5px; border-color: #f0f; }
.cy-av:hover .bottom-right { bottom: -5px; right: -5px; border-color: #0ff; }`,
    jsCode: ``
  },

  // 9. Glassmorphism Avatar
  {
    _id: "av9",
    title: "Glassmorphism Avatar",
    slug: "glassmorphism-avatar",
    description: "A frosted glass border encapsulating the user image over a dynamic background.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["avatar", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 15900,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-av-bg">
  <div class="gl-av">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" alt="User">
  </div>
</div>`,
    cssCode: `body { margin: 0; }
.gl-av-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gl-av { width: 120px; height: 120px; padding: 10px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 50%; box-shadow: 0 10px 30px rgba(0,0,0,0.1); display: flex; justify-content: center; align-items: center; transition: 0.3s; cursor: pointer; }
.gl-av:hover { transform: translateY(-5px); background: rgba(255, 255, 255, 0.25); box-shadow: 0 15px 40px rgba(0,0,0,0.2); }
.gl-av img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }`,
    jsCode: ``
  },

  // 10. Expanding Info Avatar
  {
    _id: "av10",
    title: "Expanding Info Avatar",
    slug: "expanding-info-avatar",
    description: "An interactive avatar that expands into a pill shape to reveal the user's name on hover.",
    category: "Avatars",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["avatar", "interactive", "expand", "clean"],
    isPremium: true,
    views: 18400,
    downloads: 5000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="exp-av">
  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="User">
  <span class="exp-name">John Doe</span>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.exp-av { display: flex; align-items: center; background: #fff; padding: 4px; border-radius: 40px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); cursor: pointer; overflow: hidden; width: 48px; transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid #e2e8f0; }
.exp-av:hover { width: 160px; }
.exp-av img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.exp-name { white-space: nowrap; font-size: 0.95rem; font-weight: 600; color: #1e293b; margin-left: 12px; opacity: 0; transition: opacity 0.3s; transition-delay: 0s; }
.exp-av:hover .exp-name { opacity: 1; transition-delay: 0.1s; }`,
    jsCode: ``
  }
];
