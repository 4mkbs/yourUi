import { Design } from "./designs-data";

export const BATCH_13_DESIGNS: Design[] = [
  // 1. E-commerce Product Card
  {
    _id: "c1",
    title: "Premium E-commerce Card",
    slug: "premium-ecommerce-card",
    description: "A clean product card featuring an image swap on hover, size selection, and add to cart action.",
    category: "Cards",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    tags: ["card", "ecommerce", "product", "shop"],
    isPremium: false,
    views: 14500,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="card-container">
  <div class="product-card">
    <div class="p-image-wrap">
      <div class="p-badge">NEW</div>
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" alt="Shoe front" class="img-front">
      <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80" alt="Shoe side" class="img-back">
    </div>
    <div class="p-info">
      <span class="p-category">Nike Running</span>
      <h3 class="p-title">Air Zoom Pegasus 39</h3>
      <div class="p-price">$120.00</div>
      
      <div class="p-sizes">
        <span class="size">7</span>
        <span class="size">8</span>
        <span class="size active">9</span>
        <span class="size">10</span>
        <span class="size">11</span>
      </div>
      
      <button class="p-btn">Add to Cart</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f3f4f6; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.product-card { width: 320px; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.05); transition: 0.3s; }
.product-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
.p-image-wrap { position: relative; width: 100%; height: 250px; overflow: hidden; background: #f8fafc; }
.p-badge { position: absolute; top: 15px; left: 15px; background: #111; color: #fff; font-size: 0.7rem; font-weight: bold; padding: 4px 10px; border-radius: 20px; z-index: 10; }
.p-image-wrap img { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; transition: opacity 0.4s ease; }
.img-back { opacity: 0; }
.product-card:hover .img-front { opacity: 0; }
.product-card:hover .img-back { opacity: 1; }
.p-info { padding: 1.5rem; }
.p-category { display: block; font-size: 0.8rem; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem; }
.p-title { margin: 0 0 0.5rem 0; font-size: 1.2rem; color: #111827; }
.p-price { font-size: 1.2rem; font-weight: bold; color: #111827; margin-bottom: 1.5rem; }
.p-sizes { display: flex; gap: 8px; margin-bottom: 1.5rem; }
.size { width: 35px; height: 35px; display: flex; justify-content: center; align-items: center; border: 1px solid #d1d5db; border-radius: 50%; font-size: 0.85rem; cursor: pointer; transition: 0.2s; color: #374151; }
.size:hover { border-color: #111; }
.size.active { background: #111; color: #fff; border-color: #111; }
.p-btn { width: 100%; padding: 1rem; background: #111; color: #fff; border: none; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; }
.p-btn:hover { background: #374151; }`,
    jsCode: ``
  },

  // 2. Glassmorphism Profile Card
  {
    _id: "c2",
    title: "Glassmorphism Profile",
    slug: "glassmorphism-profile-card",
    description: "A translucent profile card overlaying a colorful background, perfect for modern dashboards.",
    category: "Cards",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["card", "glassmorphism", "profile", "user"],
    isPremium: true,
    views: 12100,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-bg">
  <div class="glass-card">
    <div class="g-avatar">
      <img src="https://i.pravatar.cc/150?img=32" alt="User Avatar">
    </div>
    <h2 class="g-name">Alexandre Dubois</h2>
    <p class="g-role">Senior UI Designer</p>
    
    <div class="g-stats">
      <div class="stat">
        <strong>142</strong>
        <span>Projects</span>
      </div>
      <div class="stat">
        <strong>8.4k</strong>
        <span>Followers</span>
      </div>
      <div class="stat">
        <strong>34</strong>
        <span>Awards</span>
      </div>
    </div>
    
    <button class="g-btn">Follow</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.glass-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #fbbf24, #f43f5e, #8b5cf6); }
.glass-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; padding: 2.5rem; width: 320px; text-align: center; color: #fff; box-shadow: 0 25px 50px rgba(0,0,0,0.15); }
.g-avatar { width: 100px; height: 100px; margin: 0 auto 1.5rem; border-radius: 50%; padding: 4px; background: linear-gradient(45deg, rgba(255,255,255,0.8), rgba(255,255,255,0.1)); }
.g-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.g-name { margin: 0 0 0.5rem 0; font-size: 1.4rem; font-weight: bold; }
.g-role { margin: 0 0 2rem 0; font-size: 0.9rem; color: rgba(255,255,255,0.8); }
.g-stats { display: flex; justify-content: space-between; margin-bottom: 2rem; border-top: 1px solid rgba(255,255,255,0.2); border-bottom: 1px solid rgba(255,255,255,0.2); padding: 1rem 0; }
.stat { display: flex; flex-direction: column; }
.stat strong { font-size: 1.1rem; }
.stat span { font-size: 0.75rem; color: rgba(255,255,255,0.7); text-transform: uppercase; margin-top: 4px; }
.g-btn { width: 100%; background: rgba(255,255,255,0.2); color: #fff; border: 1px solid rgba(255,255,255,0.4); padding: 0.8rem; border-radius: 30px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.g-btn:hover { background: #fff; color: #f43f5e; }`,
    jsCode: ``
  },

  // 3. Blog Post Animated Hover Card
  {
    _id: "c3",
    title: "Animated Blog Post Card",
    slug: "animated-blog-post-card",
    description: "A standard blog card with a smooth image zoom and title underline effect on hover.",
    category: "Cards",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    tags: ["card", "blog", "article", "news"],
    isPremium: false,
    views: 11200,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="card-container">
  <article class="blog-card">
    <a href="#" class="b-img-link">
      <div class="b-img-wrap">
        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80" alt="Blog cover" />
      </div>
    </a>
    <div class="b-content">
      <div class="b-meta">
        <span class="b-tag">Technology</span>
        <span class="b-date">Oct 24, 2026</span>
      </div>
      <a href="#" class="b-title-link">
        <h3 class="b-title">The Future of AI in Web Design</h3>
      </a>
      <p class="b-excerpt">Discover how artificial intelligence is reshaping the way we build, design, and interact with websites.</p>
      <div class="b-author">
        <img src="https://i.pravatar.cc/100?img=5" alt="Author" />
        <span>By Jane Doe</span>
      </div>
    </div>
  </article>
</div>`,
    cssCode: `body { margin: 0; background: #fafafa; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 2rem; }
.blog-card { width: 100%; max-width: 360px; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: 0.3s; }
.blog-card:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.b-img-link { display: block; overflow: hidden; }
.b-img-wrap { height: 220px; overflow: hidden; }
.b-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.blog-card:hover .b-img-wrap img { transform: scale(1.08); }
.b-content { padding: 1.5rem; }
.b-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-size: 0.8rem; }
.b-tag { background: #e0e7ff; color: #4338ca; padding: 4px 10px; border-radius: 20px; font-weight: bold; }
.b-date { color: #6b7280; }
.b-title-link { text-decoration: none; color: #111827; }
.b-title { margin: 0 0 0.8rem 0; font-size: 1.3rem; line-height: 1.4; transition: color 0.2s; display: inline; background-image: linear-gradient(transparent calc(100% - 2px), #4338ca 2px); background-repeat: no-repeat; background-size: 0% 100%; transition: background-size 0.3s ease; }
.blog-card:hover .b-title { background-size: 100% 100%; }
.b-excerpt { color: #4b5563; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.b-author { display: flex; align-items: center; gap: 10px; border-top: 1px solid #f3f4f6; padding-top: 1rem; }
.b-author img { width: 30px; height: 30px; border-radius: 50%; }
.b-author span { font-size: 0.85rem; font-weight: bold; color: #374151; }`,
    jsCode: ``
  },

  // 4. NFT 3D Tilt Card
  {
    _id: "c4",
    title: "NFT 3D Tilt Card",
    slug: "nft-3d-tilt-card",
    description: "A dark theme card that follows the mouse cursor with a 3D tilt effect.",
    category: "Cards",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["card", "nft", "3d", "tilt", "crypto"],
    isPremium: true,
    views: 13500,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="card-container">
  <div class="tilt-card" id="tiltCard">
    <div class="tilt-inner">
      <div class="n-img-box">
        <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&q=80" alt="NFT Art">
        <div class="n-likes">❤ 4.2k</div>
      </div>
      <div class="n-info">
        <h3 class="n-title">Cosmic Void #042</h3>
        <p class="n-creator">By @NeonDreams</p>
        <div class="n-price-row">
          <div class="n-price-col">
            <span>Current Bid</span>
            <strong>2.45 ETH</strong>
          </div>
          <div class="n-price-col right">
            <span>Ending in</span>
            <strong>12h 43m</strong>
          </div>
        </div>
      </div>
      <div class="glare" id="glare"></div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #050505; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; perspective: 1000px; }
.tilt-card { width: 300px; height: 450px; cursor: pointer; transform-style: preserve-3d; transition: transform 0.1s; }
.tilt-inner { width: 100%; height: 100%; background: #111; border-radius: 20px; padding: 15px; box-sizing: border-box; border: 1px solid #333; position: relative; overflow: hidden; }
.n-img-box { width: 100%; height: 280px; border-radius: 12px; overflow: hidden; position: relative; }
.n-img-box img { width: 100%; height: 100%; object-fit: cover; }
.n-likes { position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.6); backdrop-filter: blur(5px); padding: 5px 10px; border-radius: 12px; color: #fff; font-size: 0.8rem; font-weight: bold; }
.n-info { padding-top: 1.2rem; }
.n-title { margin: 0 0 0.3rem 0; color: #fff; font-size: 1.2rem; }
.n-creator { margin: 0 0 1.2rem 0; color: #888; font-size: 0.85rem; }
.n-price-row { display: flex; justify-content: space-between; }
.n-price-col { display: flex; flex-direction: column; }
.n-price-col span { font-size: 0.75rem; color: #888; margin-bottom: 4px; }
.n-price-col strong { color: #fff; font-size: 1.1rem; }
.right { text-align: right; }
.glare { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 50%); pointer-events: none; opacity: 0; transition: opacity 0.3s; transform: translate(-50%, -50%); }`,
    jsCode: `const card = document.getElementById('tiltCard');
const glare = document.getElementById('glare');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * -15;
  const rotateY = ((x - centerX) / centerX) * 15;
  
  card.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
  
  glare.style.opacity = '1';
  glare.style.transform = \`translate(\${x}px, \${y}px)\`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  card.style.transition = 'transform 0.5s ease';
  glare.style.opacity = '0';
  setTimeout(() => {
    card.style.transition = 'transform 0.1s';
  }, 500);
});`
  },

  // 5. Minimalist Pricing Card
  {
    _id: "c5",
    title: "Minimalist Plan Card",
    slug: "minimalist-plan-card",
    description: "A super clean, typography-focused card for SaaS pricing tiers.",
    category: "Cards",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    tags: ["card", "pricing", "minimalist", "saas"],
    isPremium: false,
    views: 8900,
    downloads: 2700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="card-container">
  <div class="pricing-card">
    <div class="pr-tier">Pro Plan</div>
    <div class="pr-price">$29<span>/mo</span></div>
    <p class="pr-desc">Perfect for small teams and growing businesses.</p>
    
    <ul class="pr-features">
      <li>Up to 10 Users</li>
      <li>100GB Storage</li>
      <li>Custom Domains</li>
      <li>Priority Support</li>
    </ul>
    
    <button class="pr-btn">Start 14-Day Free Trial</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: 'Helvetica Neue', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 2rem; }
.pricing-card { width: 100%; max-width: 320px; border: 1px solid #eaeaea; border-radius: 12px; padding: 2.5rem 2rem; transition: 0.3s; }
.pricing-card:hover { border-color: #000; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.pr-tier { font-weight: bold; color: #666; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; margin-bottom: 1rem; }
.pr-price { font-size: 3rem; font-weight: 900; color: #000; margin-bottom: 1rem; line-height: 1; }
.pr-price span { font-size: 1rem; color: #888; font-weight: normal; }
.pr-desc { color: #555; line-height: 1.5; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #eaeaea; }
.pr-features { list-style: none; padding: 0; margin: 0 0 2.5rem 0; }
.pr-features li { padding-left: 1.5rem; position: relative; margin-bottom: 1rem; color: #333; font-weight: 500; }
.pr-features li::before { content: '✓'; position: absolute; left: 0; color: #000; font-weight: bold; }
.pr-btn { width: 100%; background: #000; color: #fff; border: none; padding: 1rem; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; }
.pr-btn:hover { background: #333; }`,
    jsCode: ``
  },

  // 6. Expanding Ticket Card
  {
    _id: "c6",
    title: "Hover Expand Ticket",
    slug: "hover-expand-ticket-card",
    description: "A boarding pass/ticket styled card that expands to show a barcode on hover.",
    category: "Cards",
    thumbnail: "https://images.unsplash.com/photo-1540339832862-4745ea98d3cb?w=800&q=80",
    tags: ["card", "ticket", "event", "expand"],
    isPremium: true,
    views: 9400,
    downloads: 3000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="card-container">
  <div class="ticket-card">
    <div class="t-top">
      <div class="t-airline">AIRLINE TICKET</div>
      <div class="t-cities">
        <div class="city">
          <h2>JFK</h2>
          <span>New York</span>
        </div>
        <div class="flight-icon">✈</div>
        <div class="city">
          <h2>LHR</h2>
          <span>London</span>
        </div>
      </div>
      <div class="t-details">
        <div class="t-col"><span>Date</span><strong>12 Oct</strong></div>
        <div class="t-col"><span>Flight</span><strong>BA 112</strong></div>
        <div class="t-col"><span>Gate</span><strong>B4</strong></div>
        <div class="t-col"><span>Seat</span><strong>12A</strong></div>
      </div>
    </div>
    <div class="t-bottom">
      <div class="barcode"></div>
      <p>Passenger: John Doe</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e2e8f0; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 2rem; }
.ticket-card { width: 340px; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.1); cursor: pointer; }
.t-top { background: #fff; padding: 2rem; position: relative; border-bottom: 2px dashed #cbd5e1; }
.t-airline { font-size: 0.8rem; font-weight: bold; color: #94a3b8; letter-spacing: 2px; margin-bottom: 1.5rem; text-align: center; }
.t-cities { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
.city h2 { margin: 0; font-size: 2.5rem; color: #0f172a; }
.city span { color: #64748b; font-size: 0.9rem; }
.flight-icon { font-size: 1.5rem; color: #3b82f6; transform: rotate(45deg); }
.t-details { display: flex; justify-content: space-between; }
.t-col { display: flex; flex-direction: column; }
.t-col span { font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px; }
.t-col strong { color: #0f172a; font-weight: bold; }
.t-bottom { background: #f8fafc; padding: 0 2rem; height: 0; overflow: hidden; transition: height 0.4s ease; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.ticket-card:hover .t-bottom { height: 120px; }
.barcode { width: 100%; height: 50px; background: repeating-linear-gradient(90deg, #000, #000 2px, transparent 2px, transparent 6px, #000 6px, #000 10px, transparent 10px, transparent 12px); margin-bottom: 10px; }
.t-bottom p { margin: 0; font-family: monospace; color: #475569; }`,
    jsCode: ``
  },

  // 7. Brutalist Article Card
  {
    _id: "c7",
    title: "Brutalist News Card",
    slug: "brutalist-news-card",
    description: "High contrast, sharp edges, and large typography for a brutalist editorial feel.",
    category: "Cards",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["card", "brutalist", "news", "editorial"],
    isPremium: true,
    views: 7500,
    downloads: 2100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="card-container">
  <div class="brutal-card">
    <div class="bc-img">
      <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&q=80" alt="Abstract">
      <div class="bc-tag">CULTURE</div>
    </div>
    <div class="bc-content">
      <h2>THE DEATH OF MINIMALISM.</h2>
      <p>Why designers are embracing chaos, noise, and complex layouts in 2026.</p>
      <a href="#" class="bc-link">READ FULL STORY -></a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e5e5e5; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 2rem; }
.brutal-card { width: 100%; max-width: 400px; border: 4px solid #000; background: #fff; box-shadow: 12px 12px 0 #000; transition: 0.1s; cursor: pointer; }
.brutal-card:hover { transform: translate(-4px, -4px); box-shadow: 16px 16px 0 #000; }
.bc-img { width: 100%; height: 200px; border-bottom: 4px solid #000; position: relative; }
.bc-img img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.2); transition: 0.3s; }
.brutal-card:hover .bc-img img { filter: grayscale(0%); }
.bc-tag { position: absolute; top: 10px; right: 10px; background: #000; color: #fff; padding: 5px 10px; font-weight: 900; }
.bc-content { padding: 1.5rem; }
h2 { margin: 0 0 1rem 0; font-size: 2rem; font-weight: 900; line-height: 1.1; text-transform: uppercase; }
p { font-size: 1rem; font-weight: bold; margin-bottom: 2rem; line-height: 1.4; }
.bc-link { display: inline-block; background: #facc15; border: 2px solid #000; color: #000; text-decoration: none; font-weight: 900; padding: 10px 15px; box-shadow: 4px 4px 0 #000; transition: 0.1s; }
.bc-link:active { transform: translate(4px, 4px); box-shadow: 0 0 0 #000; }`,
    jsCode: ``
  },

  // 8. Cyberpunk Neon Card
  {
    _id: "c8",
    title: "Cyberpunk Neon Card",
    slug: "cyberpunk-neon-card",
    description: "A dark glowing card with neon accents, perfect for gaming or web3 interfaces.",
    category: "Cards",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["card", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 9200,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="card-container">
  <div class="cyber-card">
    <div class="cy-border"></div>
    <div class="cy-content">
      <div class="cy-icon">⚡</div>
      <h3>SYS_OVERRIDE</h3>
      <p>Initiate manual override protocol. Warning: Warranty void if seal is broken.</p>
      <button class="cy-btn">INITIALIZE</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #050505; font-family: 'Orbitron', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 2rem; }
.cyber-card { position: relative; width: 300px; background: #0a0a0a; padding: 2rem; border: 1px solid #333; overflow: hidden; }
.cy-border { position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: #0ff; box-shadow: 0 0 15px #0ff; }
.cy-content { position: relative; z-index: 1; text-align: center; }
.cy-icon { font-size: 3rem; margin-bottom: 1rem; filter: drop-shadow(0 0 10px #0ff); }
h3 { margin: 0 0 1rem 0; color: #fff; font-size: 1.5rem; text-transform: uppercase; letter-spacing: 2px; }
p { color: #888; font-family: monospace; font-size: 0.9rem; margin-bottom: 2rem; line-height: 1.5; }
.cy-btn { width: 100%; background: transparent; color: #0ff; border: 1px solid #0ff; padding: 1rem; font-family: 'Orbitron', sans-serif; font-weight: bold; cursor: pointer; transition: 0.2s; position: relative; text-transform: uppercase; letter-spacing: 2px; }
.cy-btn:hover { background: #0ff; color: #000; box-shadow: 0 0 20px #0ff; }
.cyber-card::before { content: ''; position: absolute; bottom: -50px; right: -50px; width: 100px; height: 100px; background: #0ff; filter: blur(60px); opacity: 0.2; }`,
    jsCode: ``
  },

  // 9. Neumorphic Audio Player Card
  {
    _id: "c9",
    title: "Neumorphic Music Player",
    slug: "neumorphic-music-player",
    description: "A soft UI music player card with inset shadows and circular controls.",
    category: "Cards",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["card", "neumorphism", "audio", "player"],
    isPremium: false,
    views: 8800,
    downloads: 2500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="card-container">
  <div class="neu-card">
    <div class="album-art">
      <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80" alt="Album">
    </div>
    <div class="track-info">
      <h3>Midnight City</h3>
      <p>M83</p>
    </div>
    
    <div class="controls">
      <button class="ctrl-btn"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 20L9 12l10-8v16zM5 19h2V5H5v14z"/></svg></button>
      <button class="ctrl-btn play-btn"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
      <button class="ctrl-btn"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M5 4l10 8-10 8V4zm14 1h-2v14h2V5z"/></svg></button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e0e5ec; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 2rem; }
.neu-card { width: 300px; background: #e0e5ec; border-radius: 30px; padding: 2rem; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); text-align: center; }
.album-art { width: 180px; height: 180px; margin: 0 auto 1.5rem; border-radius: 50%; overflow: hidden; padding: 8px; background: #e0e5ec; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.5), inset -6px -6px 12px rgba(255,255,255,0.5); }
.album-art img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
.track-info h3 { margin: 0 0 5px 0; color: #4a5568; font-size: 1.4rem; }
.track-info p { margin: 0 0 2rem 0; color: #a0aec0; font-size: 1rem; }
.controls { display: flex; justify-content: center; align-items: center; gap: 1.5rem; }
.ctrl-btn { border: none; outline: none; background: #e0e5ec; color: #718096; width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.ctrl-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5); color: #4299e1; }
.play-btn { width: 65px; height: 65px; color: #4299e1; }`,
    jsCode: ``
  },

  // 10. Social Media Video Card
  {
    _id: "c10",
    title: "Vertical Video Card",
    slug: "vertical-video-card",
    description: "A TikTok/Reels inspired card layout for short-form vertical video content.",
    category: "Cards",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["card", "video", "social", "vertical"],
    isPremium: true,
    views: 15400,
    downloads: 5500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="card-container">
  <div class="video-card">
    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80" alt="Video cover" class="v-bg" />
    <div class="v-overlay">
      <div class="v-info">
        <h3>@creator_name</h3>
        <p>This is the amazing caption for the video! #viral #fyp</p>
        <div class="v-music">♫ Original Sound - creator</div>
      </div>
      <div class="v-actions">
        <div class="v-btn">
          <img src="https://i.pravatar.cc/100?img=9" alt="User" class="v-avatar" />
        </div>
        <div class="v-btn">
          <span class="icon">♥</span>
          <span class="count">1.2M</span>
        </div>
        <div class="v-btn">
          <span class="icon">💬</span>
          <span class="count">45k</span>
        </div>
        <div class="v-btn">
          <span class="icon">↗</span>
          <span class="count">Share</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #111; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 2rem; }
.video-card { width: 320px; height: 560px; border-radius: 16px; overflow: hidden; position: relative; background: #000; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.v-bg { width: 100%; height: 100%; object-fit: cover; }
.v-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%); display: flex; justify-content: space-between; align-items: flex-end; padding: 1.5rem 1rem; color: #fff; }
.v-info { flex: 1; padding-right: 1rem; }
.v-info h3 { margin: 0 0 0.5rem 0; font-size: 1rem; }
.v-info p { margin: 0 0 1rem 0; font-size: 0.9rem; line-height: 1.3; }
.v-music { font-size: 0.8rem; display: flex; align-items: center; animation: marquee 5s linear infinite; white-space: nowrap; width: 150px; overflow: hidden; }
.v-actions { display: flex; flex-direction: column; gap: 1.2rem; align-items: center; }
.v-btn { display: flex; flex-direction: column; align-items: center; cursor: pointer; }
.v-avatar { width: 45px; height: 45px; border-radius: 50%; border: 2px solid #fff; }
.icon { font-size: 1.8rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
.count { font-size: 0.8rem; margin-top: 5px; font-weight: bold; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }`,
    jsCode: ``
  }
];
