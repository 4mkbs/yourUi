import { Design } from "./designs-data";

export const BATCH_38_DESIGNS: Design[] = [
  // 1. Classic Star Rating
  {
    _id: "rt1",
    title: "Classic Star Rating",
    slug: "classic-star-rating",
    description: "A standard 5-star rating system using pure CSS for hover and selection states.",
    category: "Ratings",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["rating", "stars", "classic", "feedback"],
    isPremium: false,
    views: 19800,
    downloads: 5800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="rt-classic-wrap">
  <div class="rt-stars">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="5 stars">★</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="4 stars">★</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="3 stars">★</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="2 stars">★</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="1 star">★</label>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; }
.rt-classic-wrap { background: #fff; padding: 15px 25px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
.rt-stars { display: flex; flex-direction: row-reverse; justify-content: center; align-items: center; }
.rt-stars input { display: none; }
.rt-stars label { font-size: 30px; color: #cbd5e1; cursor: pointer; transition: 0.2s; padding: 0 2px; }
.rt-stars label:hover,
.rt-stars label:hover ~ label,
.rt-stars input:checked ~ label { color: #facc15; }
.rt-stars label:hover { transform: scale(1.1); }`,
    jsCode: ``
  },

  // 2. Heart Rating
  {
    _id: "rt2",
    title: "Heart Rating",
    slug: "heart-rating",
    description: "A cute rating system using heart icons, perfect for likes or favorites.",
    category: "Ratings",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["rating", "hearts", "love", "feedback"],
    isPremium: false,
    views: 18200,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="rt-heart-wrap">
  <div class="rt-hearts">
    <input type="radio" id="heart5" name="hrt" value="5" />
    <label for="heart5">♥</label>
    <input type="radio" id="heart4" name="hrt" value="4" />
    <label for="heart4">♥</label>
    <input type="radio" id="heart3" name="hrt" value="3" />
    <label for="heart3">♥</label>
    <input type="radio" id="heart2" name="hrt" value="2" />
    <label for="heart2">♥</label>
    <input type="radio" id="heart1" name="hrt" value="1" />
    <label for="heart1">♥</label>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #fafafa; }
.rt-heart-wrap { background: #fff; padding: 15px 25px; border-radius: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.rt-hearts { display: flex; flex-direction: row-reverse; justify-content: center; }
.rt-hearts input { display: none; }
.rt-hearts label { font-size: 30px; color: #e2e8f0; cursor: pointer; transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); margin: 0 4px; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.rt-hearts label:hover,
.rt-hearts label:hover ~ label,
.rt-hearts input:checked ~ label { color: #f43f5e; text-shadow: 0 4px 10px rgba(244, 63, 94, 0.4); }
.rt-hearts label:active { transform: scale(0.8); }`,
    jsCode: ``
  },

  // 3. Emoji Reaction Rating
  {
    _id: "rt3",
    title: "Emoji Reaction Rating",
    slug: "emoji-reaction-rating",
    description: "A fun feedback system using emojis representing different satisfaction levels.",
    category: "Ratings",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["rating", "emoji", "faces", "feedback"],
    isPremium: true,
    views: 21500,
    downloads: 6200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="rt-emoji-wrap">
  <div class="rt-emojis">
    <input type="radio" id="em5" name="emo" value="5" />
    <label for="em5" class="em-lbl">🤩</label>
    <input type="radio" id="em4" name="emo" value="4" />
    <label for="em4" class="em-lbl">🙂</label>
    <input type="radio" id="em3" name="emo" value="3" />
    <label for="em3" class="em-lbl">😐</label>
    <input type="radio" id="em2" name="emo" value="2" />
    <label for="em2" class="em-lbl">🙁</label>
    <input type="radio" id="em1" name="emo" value="1" />
    <label for="em1" class="em-lbl">😡</label>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f1f5f9; }
.rt-emoji-wrap { background: #fff; padding: 20px 30px; border-radius: 50px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.rt-emojis { display: flex; flex-direction: row-reverse; gap: 15px; }
.rt-emojis input { display: none; }
.rt-emojis label { font-size: 35px; cursor: pointer; filter: grayscale(100%) opacity(0.5); transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.rt-emojis label:hover,
.rt-emojis input:checked ~ label { filter: grayscale(0%) opacity(1); transform: scale(1.2) translateY(-5px); }
.rt-emojis label:hover ~ label { filter: grayscale(0%) opacity(0.8); }`,
    jsCode: ``
  },

  // 4. Cyberpunk Rating
  {
    _id: "rt4",
    title: "Cyberpunk Rating",
    slug: "cyberpunk-rating",
    description: "Neon glowing stars suitable for gaming and dark mode interfaces.",
    category: "Ratings",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["rating", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 14500,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="rt-cy-wrap">
  <div class="rt-cy-stars">
    <input type="radio" id="cys5" name="cy" value="5" />
    <label for="cys5">★</label>
    <input type="radio" id="cys4" name="cy" value="4" />
    <label for="cys4">★</label>
    <input type="radio" id="cys3" name="cy" value="3" />
    <label for="cys3">★</label>
    <input type="radio" id="cys2" name="cy" value="2" />
    <label for="cys2">★</label>
    <input type="radio" id="cys1" name="cy" value="1" />
    <label for="cys1">★</label>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #050505; }
.rt-cy-wrap { background: #111; padding: 15px 25px; border: 1px dashed #0ff; box-shadow: inset 0 0 10px rgba(0,255,255,0.2); }
.rt-cy-stars { display: flex; flex-direction: row-reverse; gap: 5px; }
.rt-cy-stars input { display: none; }
.rt-cy-stars label { font-size: 30px; color: #333; cursor: pointer; transition: 0.2s; text-shadow: 0 0 2px #000; }
.rt-cy-stars label:hover,
.rt-cy-stars label:hover ~ label,
.rt-cy-stars input:checked ~ label { color: #0ff; text-shadow: 0 0 10px #0ff, 0 0 20px #0ff; }
.rt-cy-stars label:active { color: #f0f; text-shadow: 0 0 15px #f0f; }`,
    jsCode: ``
  },

  // 5. Neumorphic Rating
  {
    _id: "rt5",
    title: "Neumorphic Rating",
    slug: "neumorphic-rating",
    description: "Soft UI stars that press inwards when selected.",
    category: "Ratings",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["rating", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 13900,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="rt-neu-wrap">
  <div class="rt-neu-stars">
    <input type="radio" id="neus5" name="neu" value="5" />
    <label for="neus5">★</label>
    <input type="radio" id="neus4" name="neu" value="4" />
    <label for="neus4">★</label>
    <input type="radio" id="neus3" name="neu" value="3" />
    <label for="neus3">★</label>
    <input type="radio" id="neus2" name="neu" value="2" />
    <label for="neus2">★</label>
    <input type="radio" id="neus1" name="neu" value="1" />
    <label for="neus1">★</label>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; }
.rt-neu-wrap { padding: 15px 30px; border-radius: 40px; box-shadow: 8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.6); }
.rt-neu-stars { display: flex; flex-direction: row-reverse; gap: 10px; }
.rt-neu-stars input { display: none; }
.rt-neu-stars label { width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; border-radius: 50%; background: #e0e5ec; color: #a0aec0; font-size: 24px; cursor: pointer; transition: 0.2s; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.6); }
.rt-neu-stars label:hover,
.rt-neu-stars label:hover ~ label,
.rt-neu-stars input:checked ~ label { color: #f6ad55; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.6); }`,
    jsCode: ``
  },

  // 6. Glassmorphism Rating
  {
    _id: "rt6",
    title: "Glassmorphism Rating",
    slug: "glassmorphism-rating",
    description: "Frosted glass stars floating over a vibrant gradient.",
    category: "Ratings",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["rating", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 18400,
    downloads: 5200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="rt-gl-wrap">
    <div class="rt-gl-stars">
      <input type="radio" id="gls5" name="gl" value="5" />
      <label for="gls5">★</label>
      <input type="radio" id="gls4" name="gl" value="4" />
      <label for="gls4">★</label>
      <input type="radio" id="gls3" name="gl" value="3" />
      <label for="gls3">★</label>
      <input type="radio" id="gls2" name="gl" value="2" />
      <label for="gls2">★</label>
      <input type="radio" id="gls1" name="gl" value="1" />
      <label for="gls1">★</label>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.rt-gl-wrap { padding: 15px 30px; background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); border-radius: 20px; border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
.rt-gl-stars { display: flex; flex-direction: row-reverse; gap: 5px; }
.rt-gl-stars input { display: none; }
.rt-gl-stars label { font-size: 35px; color: rgba(255,255,255,0.3); cursor: pointer; transition: 0.3s; text-shadow: 0 2px 5px rgba(0,0,0,0.2); }
.rt-gl-stars label:hover,
.rt-gl-stars label:hover ~ label,
.rt-gl-stars input:checked ~ label { color: #fff; text-shadow: 0 0 15px rgba(255,255,255,0.8); transform: scale(1.1); }`,
    jsCode: ``
  },

  // 7. Brutalist Rating
  {
    _id: "rt7",
    title: "Brutalist Rating",
    slug: "brutalist-rating",
    description: "Hard blocks with numbers instead of stars for a bold, striking look.",
    category: "Ratings",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["rating", "brutalist", "bold", "numbers"],
    isPremium: false,
    views: 12200,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="rt-br-wrap">
  <div class="rt-br-stars">
    <input type="radio" id="br5" name="br" value="5" />
    <label for="br5">5</label>
    <input type="radio" id="br4" name="br" value="4" />
    <label for="br4">4</label>
    <input type="radio" id="br3" name="br" value="3" />
    <label for="br3">3</label>
    <input type="radio" id="br2" name="br" value="2" />
    <label for="br2">2</label>
    <input type="radio" id="br1" name="br" value="1" />
    <label for="br1">1</label>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.rt-br-wrap { padding: 10px; background: #fff; border: 4px solid #000; box-shadow: 8px 8px 0 #000; }
.rt-br-stars { display: flex; flex-direction: row-reverse; gap: 10px; }
.rt-br-stars input { display: none; }
.rt-br-stars label { width: 50px; height: 50px; display: flex; justify-content: center; align-items: center; border: 4px solid #000; background: #fff; color: #000; font-size: 24px; font-weight: 900; cursor: pointer; transition: 0.1s; }
.rt-br-stars label:hover,
.rt-br-stars label:hover ~ label,
.rt-br-stars input:checked ~ label { background: #000; color: #fff; transform: translate(-2px, -2px); box-shadow: 4px 4px 0 #facc15; }`,
    jsCode: ``
  },

  // 8. Minimal Dot Rating
  {
    _id: "rt8",
    title: "Minimal Dot Rating",
    slug: "minimal-dot-rating",
    description: "Simple dots that fill in upon selection, clean and unobtrusive.",
    category: "Ratings",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["rating", "dots", "minimal", "clean"],
    isPremium: false,
    views: 15300,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="rt-min-wrap">
  <div class="rt-min-stars">
    <input type="radio" id="min5" name="min" value="5" />
    <label for="min5"></label>
    <input type="radio" id="min4" name="min" value="4" />
    <label for="min4"></label>
    <input type="radio" id="min3" name="min" value="3" />
    <label for="min3"></label>
    <input type="radio" id="min2" name="min" value="2" />
    <label for="min2"></label>
    <input type="radio" id="min1" name="min" value="1" />
    <label for="min1"></label>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.rt-min-stars { display: flex; flex-direction: row-reverse; gap: 15px; }
.rt-min-stars input { display: none; }
.rt-min-stars label { width: 16px; height: 16px; border-radius: 50%; border: 2px solid #cbd5e1; background: transparent; cursor: pointer; transition: 0.2s; }
.rt-min-stars label:hover,
.rt-min-stars label:hover ~ label,
.rt-min-stars input:checked ~ label { border-color: #3b82f6; background: #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2); }`,
    jsCode: ``
  },

  // 9. Sliding Bar Rating
  {
    _id: "rt9",
    title: "Sliding Bar Rating",
    slug: "sliding-bar-rating",
    description: "A series of vertical bars simulating a volume or intensity rating out of 5.",
    category: "Ratings",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["rating", "bars", "slider", "intensity"],
    isPremium: true,
    views: 16700,
    downloads: 4400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="rt-bar-wrap">
  <div class="rt-bar-stars">
    <input type="radio" id="bar5" name="bar" value="5" />
    <label for="bar5" style="height: 40px;"></label>
    <input type="radio" id="bar4" name="bar" value="4" />
    <label for="bar4" style="height: 32px;"></label>
    <input type="radio" id="bar3" name="bar" value="3" />
    <label for="bar3" style="height: 24px;"></label>
    <input type="radio" id="bar2" name="bar" value="2" />
    <label for="bar2" style="height: 16px;"></label>
    <input type="radio" id="bar1" name="bar" value="1" />
    <label for="bar1" style="height: 8px;"></label>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.rt-bar-wrap { background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.rt-bar-stars { display: flex; flex-direction: row-reverse; gap: 8px; align-items: flex-end; height: 40px; }
.rt-bar-stars input { display: none; }
.rt-bar-stars label { width: 12px; background: #e2e8f0; border-radius: 2px; cursor: pointer; transition: 0.2s; }
.rt-bar-stars label:hover,
.rt-bar-stars label:hover ~ label,
.rt-bar-stars input:checked ~ label { background: #10b981; box-shadow: 0 0 8px rgba(16, 185, 129, 0.4); }`,
    jsCode: ``
  },

  // 10. Gradient Star Rating
  {
    _id: "rt10",
    title: "Gradient Star Fill",
    slug: "gradient-star-fill",
    description: "Stars that fill with a vibrant gradient when selected.",
    category: "Ratings",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["rating", "stars", "gradient", "colorful"],
    isPremium: true,
    views: 17100,
    downloads: 4700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="rt-grad-wrap">
  <div class="rt-grad-stars">
    <input type="radio" id="grs5" name="grs" value="5" />
    <label for="grs5">★</label>
    <input type="radio" id="grs4" name="grs" value="4" />
    <label for="grs4">★</label>
    <input type="radio" id="grs3" name="grs" value="3" />
    <label for="grs3">★</label>
    <input type="radio" id="grs2" name="grs" value="2" />
    <label for="grs2">★</label>
    <input type="radio" id="grs1" name="grs" value="1" />
    <label for="grs1">★</label>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; }
.rt-grad-wrap { padding: 15px 25px; background: #1e293b; border-radius: 30px; box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
.rt-grad-stars { display: flex; flex-direction: row-reverse; justify-content: center; align-items: center; }
.rt-grad-stars input { display: none; }
.rt-grad-stars label { font-size: 35px; color: #334155; cursor: pointer; transition: 0.2s; margin: 0 2px; }
.rt-grad-stars label:hover,
.rt-grad-stars label:hover ~ label,
.rt-grad-stars input:checked ~ label { background: linear-gradient(90deg, #ec4899, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 2px 4px rgba(236,72,153,0.4)); transform: scale(1.1); }`,
    jsCode: ``
  }
];
