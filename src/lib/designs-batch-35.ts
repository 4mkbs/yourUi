import { Design } from "./designs-data";

export const BATCH_35_DESIGNS: Design[] = [
  // 1. Classic iOS-Style Slider
  {
    _id: "sl1",
    title: "Classic iOS Slider",
    slug: "classic-ios-slider",
    description: "A clean, modern range slider inspired by iOS design.",
    category: "Range Sliders",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["slider", "ios", "clean", "range"],
    isPremium: false,
    views: 19500,
    downloads: 5500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sl-ios-wrap">
  <input type="range" class="sl-ios" min="0" max="100" value="50">
</div>`,
    cssCode: `body { margin: 0; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.sl-ios-wrap { width: 100%; max-width: 300px; padding: 20px; }
.sl-ios { -webkit-appearance: none; width: 100%; height: 6px; border-radius: 5px; background: #cbd5e1; outline: none; margin: 0; }
.sl-ios::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 28px; height: 28px; border-radius: 50%; background: #fff; cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,0.2); transition: 0.1s; }
.sl-ios::-moz-range-thumb { width: 28px; height: 28px; border-radius: 50%; background: #fff; cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,0.2); border: none; }
.sl-ios:active::-webkit-slider-thumb { transform: scale(1.1); }
.sl-ios::-webkit-slider-runnable-track { background: linear-gradient(#007aff, #007aff) 0/var(--val, 50%) 100% no-repeat #cbd5e1; height: 6px; border-radius: 5px; }`,
    jsCode: `// Optional: Update track gradient via JS
const iosSlider = document.querySelector('.sl-ios');
if(iosSlider) {
  iosSlider.addEventListener('input', (e) => {
    e.target.style.setProperty('--val', \`\${e.target.value}%\`);
  });
}`
  },

  // 2. Neumorphic Slider
  {
    _id: "sl2",
    title: "Neumorphic Slider",
    slug: "neumorphic-slider",
    description: "Soft UI slider with an inset track and an extruded button-like thumb.",
    category: "Range Sliders",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["slider", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 14200,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sl-neu-wrap">
  <input type="range" class="sl-neu" min="0" max="100" value="40">
</div>`,
    cssCode: `body { margin: 0; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.sl-neu-wrap { width: 100%; max-width: 300px; padding: 20px; }
.sl-neu { -webkit-appearance: none; width: 100%; height: 12px; border-radius: 10px; background: #e0e5ec; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); outline: none; margin: 0; }
.sl-neu::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 30px; height: 30px; border-radius: 50%; background: #e0e5ec; cursor: pointer; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); margin-top: -9px; border: 2px solid #e0e5ec; transition: 0.2s; }
.sl-neu::-moz-range-thumb { width: 30px; height: 30px; border-radius: 50%; background: #e0e5ec; cursor: pointer; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); border: 2px solid #e0e5ec; }
.sl-neu:active::-webkit-slider-thumb { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 3. Cyberpunk Neon Slider
  {
    _id: "sl3",
    title: "Cyberpunk Neon Slider",
    slug: "cyberpunk-neon-slider",
    description: "A dark high-tech slider with glowing neon elements.",
    category: "Range Sliders",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["slider", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 16800,
    downloads: 4400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sl-cy-wrap">
  <input type="range" class="sl-cy" min="0" max="100" value="75">
</div>`,
    cssCode: `body { margin: 0; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.sl-cy-wrap { width: 100%; max-width: 300px; padding: 20px; }
.sl-cy { -webkit-appearance: none; width: 100%; height: 8px; background: #111; outline: none; margin: 0; border: 1px solid #333; position: relative; }
.sl-cy::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 20px; height: 30px; background: #0ff; cursor: pointer; border: 2px solid #fff; box-shadow: 0 0 15px #0ff; margin-top: -12px; clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%); }
.sl-cy::-moz-range-thumb { width: 20px; height: 30px; background: #0ff; cursor: pointer; border: 2px solid #fff; box-shadow: 0 0 15px #0ff; clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%); }
.sl-cy:hover::-webkit-slider-thumb { background: #f0f; box-shadow: 0 0 15px #f0f; }`,
    jsCode: ``
  },

  // 4. Gradient Track Slider
  {
    _id: "sl4",
    title: "Gradient Track Slider",
    slug: "gradient-track-slider",
    description: "A beautiful slider with a vibrant multi-colored track background.",
    category: "Range Sliders",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["slider", "gradient", "colorful", "modern"],
    isPremium: true,
    views: 18100,
    downloads: 4900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sl-grad-wrap">
  <input type="range" class="sl-grad" min="0" max="100" value="60">
</div>`,
    cssCode: `body { margin: 0; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.sl-grad-wrap { width: 100%; max-width: 300px; padding: 20px; }
.sl-grad { -webkit-appearance: none; width: 100%; height: 12px; border-radius: 10px; background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899); outline: none; margin: 0; opacity: 0.8; transition: opacity 0.2s; }
.sl-grad:hover { opacity: 1; }
.sl-grad::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: #fff; cursor: pointer; border: 3px solid #1e293b; box-shadow: 0 0 0 4px rgba(255,255,255,0.8); margin-top: -6px; }
.sl-grad::-moz-range-thumb { width: 24px; height: 24px; border-radius: 50%; background: #fff; cursor: pointer; border: 3px solid #1e293b; box-shadow: 0 0 0 4px rgba(255,255,255,0.8); }`,
    jsCode: ``
  },

  // 5. Brutalist Block Slider
  {
    _id: "sl5",
    title: "Brutalist Slider",
    slug: "brutalist-slider",
    description: "Harsh lines, thick borders, and a large boxy thumb.",
    category: "Range Sliders",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["slider", "brutalist", "bold", "block"],
    isPremium: false,
    views: 11200,
    downloads: 2600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sl-br-wrap">
  <input type="range" class="sl-br" min="0" max="100" value="30">
</div>`,
    cssCode: `body { margin: 0; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.sl-br-wrap { width: 100%; max-width: 300px; padding: 20px; }
.sl-br { -webkit-appearance: none; width: 100%; height: 16px; background: #fff; border: 4px solid #000; outline: none; margin: 0; box-shadow: 4px 4px 0 #000; }
.sl-br::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 40px; background: #facc15; cursor: pointer; border: 4px solid #000; box-shadow: 4px 4px 0 #000; margin-top: -16px; transition: 0.1s; }
.sl-br::-moz-range-thumb { width: 24px; height: 40px; background: #facc15; cursor: pointer; border: 4px solid #000; box-shadow: 4px 4px 0 #000; }
.sl-br:active::-webkit-slider-thumb { background: #ef4444; transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #000; }`,
    jsCode: ``
  },

  // 6. Minimal Line Slider
  {
    _id: "sl6",
    title: "Minimal Line Slider",
    slug: "minimal-line-slider",
    description: "An ultra-thin track with a contrasting dark thumb for elegant interfaces.",
    category: "Range Sliders",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["slider", "minimal", "line", "elegant"],
    isPremium: false,
    views: 15400,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sl-min-wrap">
  <input type="range" class="sl-min" min="0" max="100" value="50">
</div>`,
    cssCode: `body { margin: 0; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.sl-min-wrap { width: 100%; max-width: 300px; padding: 20px; }
.sl-min { -webkit-appearance: none; width: 100%; height: 2px; background: #e2e8f0; outline: none; margin: 0; }
.sl-min::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #0f172a; cursor: pointer; margin-top: -9px; transition: transform 0.2s; }
.sl-min::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: #0f172a; cursor: pointer; border: none; }
.sl-min:hover::-webkit-slider-thumb { transform: scale(1.3); }`,
    jsCode: ``
  },

  // 7. Tick Mark Slider
  {
    _id: "sl7",
    title: "Tick Mark Slider",
    slug: "tick-mark-slider",
    description: "Slider with evenly spaced tick marks to indicate step values visually.",
    category: "Range Sliders",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["slider", "ticks", "steps", "form"],
    isPremium: false,
    views: 16900,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sl-tick-wrap">
  <input type="range" class="sl-tick" min="0" max="100" step="25" value="50" list="ticks">
  <datalist id="ticks" class="sl-datalist">
    <option value="0" label="0%"></option>
    <option value="25" label="25%"></option>
    <option value="50" label="50%"></option>
    <option value="75" label="75%"></option>
    <option value="100" label="100%"></option>
  </datalist>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.sl-tick-wrap { width: 100%; max-width: 300px; padding: 20px; }
.sl-tick { -webkit-appearance: none; width: 100%; height: 4px; background: #cbd5e1; outline: none; margin: 0; border-radius: 2px; }
.sl-tick::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; background: #3b82f6; cursor: pointer; border-radius: 50%; margin-top: -6px; border: 2px solid #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }
.sl-tick::-moz-range-thumb { width: 16px; height: 16px; background: #3b82f6; cursor: pointer; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }
.sl-datalist { display: flex; justify-content: space-between; margin-top: 10px; width: 100%; }
.sl-datalist option { font-size: 0.75rem; color: #64748b; font-weight: 500; }`,
    jsCode: ``
  },

  // 8. Thick Track Slider
  {
    _id: "sl8",
    title: "Thick Track Slider",
    slug: "thick-track-slider",
    description: "A very thick background track with the thumb contained fully inside it.",
    category: "Range Sliders",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["slider", "thick", "contained", "bold"],
    isPremium: true,
    views: 14700,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sl-thick-wrap">
  <input type="range" class="sl-thick" min="0" max="100" value="80">
</div>`,
    cssCode: `body { margin: 0; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.sl-thick-wrap { width: 100%; max-width: 300px; padding: 20px; }
.sl-thick { -webkit-appearance: none; width: 100%; height: 30px; border-radius: 15px; background: #e2e8f0; outline: none; margin: 0; overflow: hidden; }
.sl-thick::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 26px; height: 26px; border-radius: 50%; background: #10b981; cursor: pointer; box-shadow: -300px 0 0 285px #d1fae5; margin-top: 2px; margin-left: 2px; }
.sl-thick::-moz-range-thumb { width: 26px; height: 26px; border-radius: 50%; background: #10b981; cursor: pointer; box-shadow: -300px 0 0 285px #d1fae5; border: none; }`,
    jsCode: ``
  },

  // 9. Glassmorphism Slider
  {
    _id: "sl9",
    title: "Glassmorphism Slider",
    slug: "glassmorphism-slider",
    description: "Frosted glass track and thumb floating over a beautiful gradient.",
    category: "Range Sliders",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["slider", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 17500,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="sl-gl-wrap">
    <input type="range" class="sl-gl" min="0" max="100" value="65">
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.sl-gl-wrap { width: 100%; max-width: 300px; padding: 30px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border-radius: 20px; border: 1px solid rgba(255,255,255,0.3); }
.sl-gl { -webkit-appearance: none; width: 100%; height: 10px; border-radius: 5px; background: rgba(0,0,0,0.1); outline: none; margin: 0; box-shadow: inset 0 1px 3px rgba(0,0,0,0.1); border: 1px solid rgba(255,255,255,0.1); }
.sl-gl::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.3); backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.8); cursor: pointer; margin-top: -8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: 0.2s; }
.sl-gl::-moz-range-thumb { width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.3); backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.8); cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.sl-gl:active::-webkit-slider-thumb { background: rgba(255,255,255,0.6); transform: scale(1.1); }`,
    jsCode: ``
  },

  // 10. Vertical Range Slider
  {
    _id: "sl10",
    title: "Vertical Range Slider",
    slug: "vertical-range-slider",
    description: "A standard slider rotated to function vertically, useful for volume or EQ controls.",
    category: "Range Sliders",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["slider", "vertical", "volume", "control"],
    isPremium: false,
    views: 13300,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="sl-vert-wrap">
  <input type="range" class="sl-vert" min="0" max="100" value="45">
</div>`,
    cssCode: `body { margin: 0; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.sl-vert-wrap { height: 200px; padding: 20px; display: flex; justify-content: center; align-items: center; }
.sl-vert { -webkit-appearance: none; width: 150px; height: 8px; border-radius: 4px; background: #e2e8f0; outline: none; margin: 0; transform: rotate(-90deg); transform-origin: center; }
.sl-vert::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 20px; height: 20px; border-radius: 4px; background: #3b82f6; cursor: pointer; margin-top: -6px; transition: 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.sl-vert::-moz-range-thumb { width: 20px; height: 20px; border-radius: 4px; background: #3b82f6; cursor: pointer; border: none; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.sl-vert:hover::-webkit-slider-thumb { background: #2563eb; transform: scale(1.2); }`,
    jsCode: ``
  }
];
