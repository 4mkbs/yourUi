import { Design } from "./designs-data";

export const BATCH_92_DESIGNS: Design[] = [
  // 1. Classic E-commerce Card
  {
    _id: "prod1",
    title: "Classic Product Card",
    slug: "classic-product-card",
    description: "Standard e-commerce layout with image, title, price, and CTA.",
    category: "Product Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["product", "ecommerce", "classic", "shop"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="prod-cl">
  <div class="cl-img-wrap">
    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" alt="Headphones" class="cl-img" />
    <span class="cl-badge">New</span>
  </div>
  <div class="cl-info">
    <span class="cl-category">Audio</span>
    <h3 class="cl-title">Premium Wireless Headphones</h3>
    <div class="cl-price">$299.00</div>
    <button class="cl-btn">Add to Cart</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.prod-cl { background: #fff; width: 100%; max-width: 320px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); transition: 0.3s; }
.prod-cl:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
.cl-img-wrap { position: relative; height: 250px; background: #f1f5f9; }
.cl-img { width: 100%; height: 100%; object-fit: cover; mix-blend-mode: multiply; }
.cl-badge { position: absolute; top: 15px; right: 15px; background: #0f172a; color: #fff; font-size: 0.75rem; font-weight: bold; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; }
.cl-info { padding: 25px; }
.cl-category { color: #64748b; font-size: 0.85rem; text-transform: uppercase; font-weight: 600; letter-spacing: 1px; }
.cl-title { margin: 10px 0 15px; font-size: 1.2rem; color: #0f172a; line-height: 1.4; }
.cl-price { font-size: 1.5rem; font-weight: 800; color: #3b82f6; margin-bottom: 20px; }
.cl-btn { width: 100%; padding: 14px; background: #0f172a; color: #fff; border: none; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; }
.cl-btn:hover { background: #334155; }`,
    jsCode: ``
  },

  // 2. Minimal Product Card
  {
    _id: "prod2",
    title: "Minimal Clean Product",
    slug: "minimal-clean-product",
    description: "Stripped back, editorial style product card without heavy borders.",
    category: "Product Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["product", "minimal", "clean", "editorial"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="prod-mn">
  <div class="mn-img-box">
    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" alt="Watch" />
    <button class="mn-add">+</button>
  </div>
  <div class="mn-details">
    <h3>Minimalist Smartwatch</h3>
    <span>$149</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.prod-mn { width: 100%; max-width: 300px; }
.mn-img-box { position: relative; width: 100%; aspect-ratio: 4/5; background: #f5f5f5; margin-bottom: 20px; overflow: hidden; }
.mn-img-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s ease; }
.prod-mn:hover .mn-img-box img { transform: scale(1.05); }
.mn-add { position: absolute; bottom: 20px; right: 20px; width: 40px; height: 40px; border-radius: 50%; background: #000; color: #fff; border: none; font-size: 1.5rem; cursor: pointer; opacity: 0; transform: translateY(10px); transition: 0.3s ease; display: flex; justify-content: center; align-items: center; }
.prod-mn:hover .mn-add { opacity: 1; transform: translateY(0); }
.mn-details { display: flex; justify-content: space-between; align-items: flex-start; }
.mn-details h3 { margin: 0; font-weight: 400; font-size: 1rem; color: #000; }
.mn-details span { color: #666; font-size: 1rem; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Product Card
  {
    _id: "prod3",
    title: "Cyberpunk Hardware",
    slug: "cyberpunk-hardware-card",
    description: "Hacker-themed hardware store card with neon elements.",
    category: "Product Cards",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["product", "cyberpunk", "neon", "tech"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="prod-cy">
  <div class="cy-glitch"></div>
  <div class="cy-img"></div>
  <div class="cy-info">
    <div class="cy-sku">SKU: RTX-9000-X</div>
    <h3 class="cy-title">NEURO-PROCESSOR V4</h3>
    <div class="cy-price">2400 CREDITS</div>
    <button class="cy-btn">INITIALIZE PURCHASE</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; }
.prod-cy { border: 2px solid #0f0; background: rgba(0,20,0,0.9); width: 100%; max-width: 320px; padding: 15px; position: relative; box-shadow: 0 0 15px rgba(0,255,0,0.1); transition: 0.2s; }
.prod-cy:hover { box-shadow: 0 0 25px rgba(0,255,0,0.3); transform: scale(1.02); }
.cy-glitch { position: absolute; top: 0; left: 0; width: 100%; height: 5px; background: #0f0; animation: scan 2s linear infinite; opacity: 0.5; }
@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
.cy-img { height: 200px; background: repeating-linear-gradient(45deg, #020 0, #020 5px, #050 5px, #050 10px); border: 1px solid #0a0; margin-bottom: 20px; }
.cy-sku { color: #0aa; font-size: 0.8rem; margin-bottom: 5px; }
.cy-title { color: #0f0; margin: 0 0 15px; font-size: 1.2rem; letter-spacing: 1px; text-shadow: 0 0 5px #0f0; }
.cy-price { color: #fff; font-weight: bold; font-size: 1.1rem; margin-bottom: 20px; }
.cy-btn { width: 100%; background: transparent; color: #0f0; border: 1px dashed #0f0; padding: 10px; font-family: inherit; font-weight: bold; cursor: pointer; transition: 0.2s; }
.cy-btn:hover { background: #0f0; color: #000; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Product Card
  {
    _id: "prod4",
    title: "Glassmorphism Product",
    slug: "glassmorphism-product",
    description: "Frosted glass card hovering over a colorful gradient.",
    category: "Product Cards",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["product", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="prod-gl">
    <div class="gl-img"></div>
    <div class="gl-info">
      <h3>Neon Vibes Controller</h3>
      <div class="gl-price">$79.99</div>
      <button class="gl-btn">Buy Now</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.prod-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 20px; width: 100%; max-width: 320px; color: #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.gl-img { height: 200px; background: rgba(255,255,255,0.2); border-radius: 16px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); }
.gl-info { text-align: center; }
.gl-info h3 { margin: 0 0 10px; font-weight: 500; font-size: 1.3rem; }
.gl-price { font-size: 1.5rem; font-weight: 800; margin-bottom: 20px; }
.gl-btn { width: 100%; padding: 15px; border-radius: 12px; border: none; background: #fff; color: #8b5cf6; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; }
.gl-btn:hover { background: #f8fafc; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(255,255,255,0.2); }`,
    jsCode: ``
  },

  // 5. Brutalist Product Card
  {
    _id: "prod5",
    title: "Brutalist Merch Card",
    slug: "brutalist-merch-card",
    description: "High contrast, structural design for streetwear or merch.",
    category: "Product Cards",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["product", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="prod-br">
  <div class="br-img"></div>
  <div class="br-body">
    <h2>LOGO TEE</h2>
    <div class="br-price">$35</div>
  </div>
  <a href="#" class="br-add">ADD TO CART</a>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.prod-br { background: #fff; border: 6px solid #000; box-shadow: 12px 12px 0 #000; width: 100%; max-width: 320px; display: flex; flex-direction: column; }
.br-img { height: 250px; background: #facc15; border-bottom: 6px solid #000; }
.br-body { padding: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 6px solid #000; }
.br-body h2 { margin: 0; font-size: 1.8rem; font-weight: 900; }
.br-price { font-size: 1.5rem; font-weight: 900; background: #000; color: #fff; padding: 5px 10px; }
.br-add { background: #000; color: #fff; text-decoration: none; font-weight: 900; font-size: 1.2rem; padding: 20px; text-align: center; transition: 0.1s; }
.br-add:hover { background: #facc15; color: #000; }`,
    jsCode: ``
  },

  // 6. Neumorphic Product Card
  {
    _id: "prod6",
    title: "Neumorphic Product",
    slug: "neumorphic-product",
    description: "Soft UI embossed card with inset button.",
    category: "Product Cards",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["product", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="prod-neu">
  <div class="neu-img"></div>
  <h3>Smart Home Hub</h3>
  <div class="neu-price">$129</div>
  <button class="neu-btn">Purchase</button>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.prod-neu { background: #e0e5ec; padding: 30px; border-radius: 30px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); width: 100%; max-width: 300px; text-align: center; }
.neu-img { height: 200px; border-radius: 20px; margin-bottom: 30px; background: #e0e5ec; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); }
.prod-neu h3 { margin: 0 0 10px; color: #4a5568; font-size: 1.4rem; }
.neu-price { font-size: 1.5rem; font-weight: bold; color: #718096; margin-bottom: 30px; }
.neu-btn { width: 100%; border: none; padding: 15px; border-radius: 15px; font-weight: bold; color: #718096; cursor: pointer; transition: 0.2s; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); }
.neu-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Product Card
  {
    _id: "prod7",
    title: "Dark Glow Product",
    slug: "dark-glow-product",
    description: "Deep dark card with glowing neon accents for premium items.",
    category: "Product Cards",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["product", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="prod-dg">
  <div class="dg-img-wrap">
    <div class="dg-img"></div>
  </div>
  <div class="dg-info">
    <h3>Void Mechanical Keyboard</h3>
    <div class="dg-price">$189</div>
    <button class="dg-btn">Pre-order</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.prod-dg { background: #0f172a; border: 1px solid #1e293b; border-radius: 20px; width: 100%; max-width: 320px; padding: 20px; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05); position: relative; overflow: hidden; transition: 0.3s; }
.prod-dg:hover { border-color: #8b5cf6; box-shadow: 0 0 30px rgba(139,92,246,0.15); }
.dg-img-wrap { height: 220px; background: #020617; border-radius: 12px; margin-bottom: 20px; position: relative; display: flex; justify-content: center; align-items: center; }
.dg-img { width: 150px; height: 100px; background: #1e293b; border-radius: 8px; box-shadow: 0 0 20px rgba(139,92,246,0.4); border: 1px solid #8b5cf6; }
.dg-info h3 { margin: 0 0 10px; color: #f8fafc; font-size: 1.2rem; }
.dg-price { color: #8b5cf6; font-size: 1.4rem; font-weight: bold; margin-bottom: 20px; }
.dg-btn { width: 100%; background: transparent; border: 1px solid #8b5cf6; color: #8b5cf6; padding: 12px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.3s; }
.dg-btn:hover { background: #8b5cf6; color: #fff; box-shadow: 0 0 15px rgba(139,92,246,0.5); }`,
    jsCode: ``
  },

  // 8. Horizontal Product Row
  {
    _id: "prod8",
    title: "Horizontal Product List",
    slug: "horizontal-product-list",
    description: "Compact horizontal layout perfect for list views or checkout.",
    category: "Product Cards",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["product", "horizontal", "list", "checkout"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="prod-hr">
  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80" alt="Product" class="hr-img" />
  <div class="hr-body">
    <div class="hr-top">
      <h4>Minimal Watch</h4>
      <span class="hr-price">$149</span>
    </div>
    <p class="hr-desc">Matte black finish, leather strap.</p>
    <div class="hr-actions">
      <select><option>Qty: 1</option><option>Qty: 2</option></select>
      <button>Remove</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.prod-hr { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 15px; width: 100%; max-width: 600px; display: flex; gap: 20px; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
.hr-img { width: 100px; height: 100px; object-fit: cover; border-radius: 8px; background: #f1f5f9; mix-blend-mode: multiply; }
.hr-body { flex: 1; }
.hr-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
.hr-top h4 { margin: 0; color: #0f172a; font-size: 1.1rem; }
.hr-price { font-weight: bold; color: #0f172a; }
.hr-desc { margin: 0 0 15px; color: #64748b; font-size: 0.9rem; }
.hr-actions { display: flex; gap: 15px; align-items: center; }
.hr-actions select { padding: 5px; border: 1px solid #cbd5e1; border-radius: 4px; font-family: inherit; }
.hr-actions button { background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.9rem; font-weight: 500; }
.hr-actions button:hover { text-decoration: underline; }
@media (max-width: 500px) { .prod-hr { flex-direction: column; text-align: center; } .hr-actions { justify-content: center; } }`,
    jsCode: ``
  },

  // 9. Color Variant Product Card
  {
    _id: "prod9",
    title: "Color Variant Card",
    slug: "color-variant-card",
    description: "Product card including small CSS color swatches for variants.",
    category: "Product Cards",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["product", "variants", "colors", "swatches"],
    isPremium: false,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="prod-var">
  <div class="var-img"></div>
  <div class="var-info">
    <h3>Ceramic Mug</h3>
    <div class="var-price">$24</div>
    <div class="var-colors">
      <div class="var-swatch active" style="background: #f8fafc;"></div>
      <div class="var-swatch" style="background: #0f172a;"></div>
      <div class="var-swatch" style="background: #fca5a5;"></div>
    </div>
    <button class="var-btn">Add to Bag</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.prod-var { border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; width: 100%; max-width: 300px; transition: 0.3s; }
.prod-var:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.var-img { height: 220px; background: #f1f5f9; border-radius: 12px; margin-bottom: 20px; }
.var-info h3 { margin: 0 0 5px; color: #0f172a; font-size: 1.2rem; }
.var-price { color: #64748b; margin-bottom: 15px; font-weight: 500; }
.var-colors { display: flex; gap: 10px; margin-bottom: 20px; }
.var-swatch { width: 24px; height: 24px; border-radius: 50%; cursor: pointer; border: 2px solid #e2e8f0; box-sizing: border-box; }
.var-swatch.active { border-color: #3b82f6; outline: 2px solid transparent; }
.var-btn { width: 100%; padding: 12px; background: transparent; border: 1px solid #0f172a; color: #0f172a; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.var-btn:hover { background: #0f172a; color: #fff; }`,
    jsCode: ``
  },

  // 10. Sale/Discount Product Card
  {
    _id: "prod10",
    title: "Discount Product Card",
    slug: "discount-product-card",
    description: "Card highlighting a sale with crossed-out pricing and bold badges.",
    category: "Product Cards",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["product", "sale", "discount", "badge"],
    isPremium: true,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="prod-sale">
  <div class="sale-img-wrap">
    <div class="sale-img"></div>
    <span class="sale-badge">-30%</span>
  </div>
  <div class="sale-info">
    <h3>Summer Collection Tee</h3>
    <div class="sale-prices">
      <span class="sale-old">$40.00</span>
      <span class="sale-new">$28.00</span>
    </div>
    <button class="sale-btn">Add to Cart</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.prod-sale { background: #fff; border-radius: 12px; overflow: hidden; width: 100%; max-width: 300px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
.sale-img-wrap { position: relative; }
.sale-img { height: 200px; background: #e2e8f0; }
.sale-badge { position: absolute; top: 10px; left: 10px; background: #ef4444; color: #fff; font-weight: bold; padding: 5px 10px; border-radius: 4px; font-size: 0.85rem; }
.sale-info { padding: 20px; }
.sale-info h3 { margin: 0 0 10px; font-size: 1.1rem; color: #0f172a; }
.sale-prices { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
.sale-old { color: #94a3b8; text-decoration: line-through; font-size: 0.9rem; }
.sale-new { color: #ef4444; font-weight: 800; font-size: 1.3rem; }
.sale-btn { width: 100%; padding: 12px; background: #0f172a; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.sale-btn:hover { background: #ef4444; }`,
    jsCode: ``
  }
];
