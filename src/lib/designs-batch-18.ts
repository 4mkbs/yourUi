import { Design } from "./designs-data";

export const BATCH_18_DESIGNS: Design[] = [
  // 1. Bento Grid Features
  {
    _id: "fs1",
    title: "Bento Grid Features",
    slug: "bento-grid-features",
    description: "A highly modern bento-box style grid layout highlighting different features in uniquely sized cards.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    tags: ["features", "bento", "grid", "modern"],
    isPremium: false,
    views: 18400,
    downloads: 6200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="bento-section">
  <div class="b-container">
    <div class="b-header">
      <h2>Everything you need</h2>
      <p>A comprehensive toolkit designed for modern creators.</p>
    </div>
    <div class="bento-grid">
      <div class="b-card b-large">
        <div class="b-content">
          <h3>Real-time Analytics</h3>
          <p>Monitor your performance as it happens with our sub-second analytics engine.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Analytics">
      </div>
      <div class="b-card">
        <div class="b-icon">⚡</div>
        <h3>Lightning Fast</h3>
        <p>Built on the edge for zero latency.</p>
      </div>
      <div class="b-card">
        <div class="b-icon">🔒</div>
        <h3>Bank-grade Security</h3>
        <p>End-to-end encryption standard.</p>
      </div>
      <div class="b-card b-wide">
        <div class="b-content">
          <h3>Global CDN Integration</h3>
          <p>Deliver content instantly to users anywhere in the world.</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; }
.bento-section { padding: 5rem 2rem; }
.b-container { max-width: 1000px; margin: 0 auto; }
.b-header { text-align: center; margin-bottom: 3rem; }
.b-header h2 { font-size: 2.5rem; margin: 0 0 1rem 0; color: #111827; letter-spacing: -1px; }
.b-header p { font-size: 1.1rem; color: #6b7280; }
.bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; auto-rows: 250px; }
.b-card { background: #fff; border-radius: 20px; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f3f4f6; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; position: relative; transition: 0.3s; }
.b-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.06); }
.b-large { grid-column: span 2; grid-row: span 2; display: flex; flex-direction: column; justify-content: flex-start; }
.b-wide { grid-column: span 2; }
.b-large img { position: absolute; bottom: -10%; right: -10%; width: 70%; border-radius: 12px; box-shadow: -10px -10px 30px rgba(0,0,0,0.1); transition: 0.3s; }
.b-large:hover img { transform: scale(1.05); }
.b-content h3, .b-card h3 { font-size: 1.2rem; color: #111827; margin: 0 0 10px 0; }
.b-content p, .b-card p { font-size: 0.95rem; color: #6b7280; line-height: 1.5; margin: 0; }
.b-icon { font-size: 2rem; margin-bottom: auto; }
@media (max-width: 768px) { .bento-grid { grid-template-columns: 1fr; auto-rows: auto; } .b-large, .b-wide { grid-column: span 1; grid-row: span 1; min-height: 300px; } .b-large img { position: relative; bottom: 0; right: 0; width: 100%; margin-top: 2rem; } }`,
    jsCode: ``
  },

  // 2. Alternating Split Layout
  {
    _id: "fs2",
    title: "Alternating Split Features",
    slug: "alternating-split-features",
    description: "A classic SaaS layout where text and image alternate left-to-right down the page.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["features", "split", "classic", "saas"],
    isPremium: false,
    views: 15100,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="split-feat-sec">
  <div class="sf-container">
    <div class="sf-row">
      <div class="sf-text">
        <span class="sf-tag">Feature One</span>
        <h2>Automate your workflow.</h2>
        <p>Connect your favorite tools and let our system handle the repetitive tasks so you can focus on what matters.</p>
        <ul class="sf-list">
          <li>✓ 100+ Integrations</li>
          <li>✓ Custom Triggers</li>
          <li>✓ Visual Builder</li>
        </ul>
      </div>
      <div class="sf-img">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Workflow">
      </div>
    </div>
    
    <div class="sf-row reverse">
      <div class="sf-text">
        <span class="sf-tag">Feature Two</span>
        <h2>Analyze in real-time.</h2>
        <p>Get insights the moment they happen. Our dashboards are updated sub-second to give you the freshest data possible.</p>
        <ul class="sf-list">
          <li>✓ Live Dashboards</li>
          <li>✓ Export to CSV/PDF</li>
          <li>✓ Custom Metrics</li>
        </ul>
      </div>
      <div class="sf-img">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Analytics">
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.split-feat-sec { padding: 6rem 2rem; }
.sf-container { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 6rem; }
.sf-row { display: flex; align-items: center; gap: 4rem; }
.sf-row.reverse { flex-direction: row-reverse; }
.sf-text { flex: 1; }
.sf-img { flex: 1; position: relative; }
.sf-img img { width: 100%; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.sf-tag { display: inline-block; font-size: 0.8rem; font-weight: bold; color: #3b82f6; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
.sf-text h2 { font-size: 2.5rem; color: #111827; margin: 0 0 1.5rem 0; letter-spacing: -1px; line-height: 1.1; }
.sf-text p { font-size: 1.1rem; color: #4b5563; line-height: 1.6; margin-bottom: 2rem; }
.sf-list { list-style: none; padding: 0; margin: 0; }
.sf-list li { margin-bottom: 10px; color: #374151; font-weight: 500; }
@media (max-width: 768px) { .sf-row, .sf-row.reverse { flex-direction: column; text-align: center; gap: 3rem; } .sf-list li { text-align: left; display: inline-block; width: 100%; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Features Grid
  {
    _id: "fs3",
    title: "Cyberpunk Features Grid",
    slug: "cyberpunk-features-grid",
    description: "A neon-lit dark mode grid perfect for gaming, web3, or developer tools.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["features", "cyberpunk", "neon", "dark"],
    isPremium: true,
    views: 12500,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="cyber-feat-sec">
  <div class="cy-container">
    <h2 class="cy-title">SYS_CAPABILITIES_</h2>
    <div class="cy-grid">
      <div class="cy-card">
        <div class="cy-icon">⚛</div>
        <h3>QUANTUM_SYNC</h3>
        <p>Instantaneous data replication across our decentralized network nodes.</p>
      </div>
      <div class="cy-card">
        <div class="cy-icon">⚡</div>
        <h3>OVERCLOCK_API</h3>
        <p>Bypass rate limits with our dedicated high-throughput endpoints.</p>
      </div>
      <div class="cy-card">
        <div class="cy-icon">🛡</div>
        <h3>NEURAL_FIREWALL</h3>
        <p>AI-driven threat detection blocking malicious packets in real-time.</p>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; color: #fff; }
.cyber-feat-sec { padding: 6rem 2rem; }
.cy-container { max-width: 1000px; margin: 0 auto; }
.cy-title { text-align: center; color: #0ff; font-size: 2.5rem; letter-spacing: 5px; text-shadow: 0 0 10px #0ff; margin-bottom: 4rem; }
.cy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.cy-card { background: #0a0a0a; border: 1px solid #333; padding: 2rem; position: relative; transition: 0.3s; }
.cy-card:hover { border-color: #0ff; box-shadow: inset 0 0 20px rgba(0,255,255,0.1), 0 0 20px rgba(0,255,255,0.2); transform: translateY(-5px); }
.cy-card::after { content: ''; position: absolute; bottom: 0; right: 0; width: 20px; height: 20px; border-bottom: 2px solid #f0f; border-right: 2px solid #f0f; }
.cy-icon { font-size: 3rem; color: #f0f; margin-bottom: 1.5rem; text-shadow: 0 0 10px #f0f; }
.cy-card h3 { font-size: 1.2rem; color: #fff; margin: 0 0 1rem 0; letter-spacing: 2px; }
.cy-card p { color: #888; line-height: 1.6; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 4. Brutalist Feature Blocks
  {
    _id: "fs4",
    title: "Brutalist Feature Blocks",
    slug: "brutalist-feature-blocks",
    description: "High contrast, bold typography, and sharp borders for a loud feature presentation.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["features", "brutalist", "loud", "typography"],
    isPremium: true,
    views: 9200,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="brutal-feat-sec">
  <div class="brutal-header">
    <h2>WHY IT WORKS.</h2>
  </div>
  <div class="brutal-grid">
    <div class="brutal-block">
      <div class="bb-num">01</div>
      <h3>SPEED.</h3>
      <p>No bloated frameworks. Just raw, unadulterated performance.</p>
    </div>
    <div class="brutal-block">
      <div class="bb-num">02</div>
      <h3>POWER.</h3>
      <p>Control every pixel. Absolute authority over your layout.</p>
    </div>
    <div class="brutal-block">
      <div class="bb-num">03</div>
      <h3>DESIGN.</h3>
      <p>Make a statement. Stop blending in with the boring corporate web.</p>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.brutal-feat-sec { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
.brutal-header h2 { font-size: 5rem; font-weight: 900; margin: 0 0 2rem 0; letter-spacing: -2px; border-bottom: 8px solid #000; padding-bottom: 1rem; }
.brutal-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.brutal-block { background: #fff; border: 4px solid #000; padding: 2rem; box-shadow: 12px 12px 0 #000; transition: 0.1s; position: relative; }
.brutal-block:hover { transform: translate(-4px, -4px); box-shadow: 16px 16px 0 #000; background: #facc15; }
.bb-num { position: absolute; top: 10px; right: 15px; font-size: 4rem; font-weight: 900; color: transparent; -webkit-text-stroke: 2px #000; }
.brutal-block h3 { font-size: 2.5rem; font-weight: 900; margin: 2rem 0 1rem 0; text-transform: uppercase; }
.brutal-block p { font-size: 1.1rem; font-weight: bold; line-height: 1.4; margin: 0; }
@media (max-width: 768px) { .brutal-header h2 { font-size: 3rem; } }`,
    jsCode: ``
  },

  // 5. Glassmorphism Features
  {
    _id: "fs5",
    title: "Glassmorphism Features",
    slug: "glassmorphism-features",
    description: "Frosted glass feature cards floating over a vibrant, animated gradient.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["features", "glassmorphism", "gradient", "cards"],
    isPremium: true,
    views: 13800,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="glass-feat-sec">
  <div class="gf-container">
    <div class="gf-grid">
      <div class="gf-card">
        <div class="gf-icon">🎨</div>
        <h3>Stunning Design</h3>
        <p>Pre-built components that look incredible out of the box.</p>
      </div>
      <div class="gf-card">
        <div class="gf-icon">📱</div>
        <h3>Responsive</h3>
        <p>Perfectly adapted for mobile, tablet, and desktop screens.</p>
      </div>
      <div class="gf-card">
        <div class="gf-icon">⚡</div>
        <h3>Performant</h3>
        <p>Lightweight CSS and vanilla JS for maximum speed.</p>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.glass-feat-sec { min-height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #fbbf24, #f43f5e, #8b5cf6); background-size: 200% 200%; animation: glassBg 10s ease infinite; padding: 4rem 2rem; box-sizing: border-box; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.gf-container { max-width: 1000px; margin: 0 auto; width: 100%; }
.gf-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.gf-card { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; padding: 2.5rem; color: #fff; transition: 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
.gf-card:hover { transform: translateY(-10px); background: rgba(255, 255, 255, 0.25); }
.gf-icon { width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 15px; display: flex; justify-content: center; align-items: center; font-size: 1.8rem; margin-bottom: 1.5rem; }
.gf-card h3 { font-size: 1.4rem; margin: 0 0 15px 0; font-weight: bold; }
.gf-card p { font-size: 1rem; color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0; }`,
    jsCode: ``
  },

  // 6. Neumorphic Feature Tiles
  {
    _id: "fs6",
    title: "Neumorphic Feature Tiles",
    slug: "neumorphic-feature-tiles",
    description: "Soft, extruded UI blocks presenting features in a clean, minimal way.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["features", "neumorphism", "tiles", "soft"],
    isPremium: false,
    views: 9800,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="neu-feat-sec">
  <div class="nf-container">
    <div class="nf-grid">
      <div class="nf-tile">
        <div class="nf-icon">☁️</div>
        <h3>Cloud Sync</h3>
        <p>Always backed up.</p>
      </div>
      <div class="nf-tile">
        <div class="nf-icon">🛡️</div>
        <h3>Secure</h3>
        <p>AES-256 Encryption.</p>
      </div>
      <div class="nf-tile">
        <div class="nf-icon">🚀</div>
        <h3>Fast</h3>
        <p>Optimized delivery.</p>
      </div>
      <div class="nf-tile">
        <div class="nf-icon">🌙</div>
        <h3>Dark Mode</h3>
        <p>Easy on the eyes.</p>
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.neu-feat-sec { padding: 5rem 2rem; }
.nf-container { max-width: 900px; margin: 0 auto; }
.nf-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
.nf-tile { background: #e0e5ec; border-radius: 25px; padding: 2rem; text-align: center; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); transition: 0.3s; }
.nf-tile:hover { box-shadow: inset 6px 6px 12px rgba(163,177,198,0.5), inset -6px -6px 12px rgba(255,255,255,0.5); }
.nf-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.nf-tile h3 { color: #4a5568; font-size: 1.2rem; margin: 0 0 10px 0; }
.nf-tile p { color: #a0aec0; font-size: 0.95rem; margin: 0; }`,
    jsCode: ``
  },

  // 7. Minimalist Accordion Features
  {
    _id: "fs7",
    title: "Interactive List Features",
    slug: "interactive-list-features",
    description: "A clean layout where clicking a feature updates an adjacent image display.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["features", "interactive", "minimalist", "tabs"],
    isPremium: true,
    views: 14500,
    downloads: 5000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="il-feat-sec">
  <div class="il-container">
    <div class="il-list">
      <div class="il-item active" onclick="changeImage('img1', this)">
        <h3>Smart Routing</h3>
        <p>Automatically route tasks to the most qualified team member available.</p>
      </div>
      <div class="il-item" onclick="changeImage('img2', this)">
        <h3>Custom Workflows</h3>
        <p>Build visual workflows using our drag-and-drop editor.</p>
      </div>
      <div class="il-item" onclick="changeImage('img3', this)">
        <h3>Deep Analytics</h3>
        <p>Understand bottlenecks and improve team efficiency over time.</p>
      </div>
    </div>
    <div class="il-display">
      <img id="featImage" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Feature">
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.il-feat-sec { padding: 5rem 2rem; }
.il-container { max-width: 1000px; margin: 0 auto; display: flex; gap: 4rem; align-items: center; }
.il-list { flex: 1; display: flex; flex-direction: column; gap: 1rem; }
.il-item { padding: 1.5rem; border-left: 4px solid #e5e7eb; cursor: pointer; transition: 0.3s; opacity: 0.5; }
.il-item:hover { opacity: 0.8; }
.il-item.active { border-left-color: #3b82f6; opacity: 1; background: #f8fafc; }
.il-item h3 { margin: 0 0 10px 0; color: #111827; font-size: 1.3rem; }
.il-item p { margin: 0; color: #6b7280; line-height: 1.5; }
.il-display { flex: 1; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.il-display img { width: 100%; display: block; object-fit: cover; aspect-ratio: 4/3; transition: opacity 0.3s ease; }
@media (max-width: 768px) { .il-container { flex-direction: column; } }`,
    jsCode: `const images = {
  img1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  img2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  img3: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80'
};
function changeImage(key, element) {
  const img = document.getElementById('featImage');
  img.style.opacity = 0;
  
  document.querySelectorAll('.il-item').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
  
  setTimeout(() => {
    img.src = images[key];
    img.style.opacity = 1;
  }, 300);
}`
  },

  // 8. Sticky Scroll Features
  {
    _id: "fs8",
    title: "Sticky Scroll Overview",
    slug: "sticky-scroll-features",
    description: "A popular modern layout where the image area remains sticky while feature text scrolls past.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["features", "sticky", "scroll", "modern"],
    isPremium: true,
    views: 16200,
    downloads: 5500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="ss-feat-sec">
  <div class="ss-container">
    <div class="ss-content">
      <div class="ss-block">
        <h2>Write Code Faster</h2>
        <p>Our AI analyzes your codebase and provides intelligent autocomplete suggestions, saving you hours of typing.</p>
      </div>
      <div class="ss-block">
        <h2>Catch Bugs Early</h2>
        <p>Real-time static analysis finds security flaws and logic errors before they ever make it to production.</p>
      </div>
      <div class="ss-block">
        <h2>Deploy Seamlessly</h2>
        <p>One-click deployments to AWS, Vercel, or your own custom infrastructure.</p>
      </div>
    </div>
    <div class="ss-visual">
      <div class="ss-sticky-box">
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" alt="Code">
      </div>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f9fafb; }
.ss-feat-sec { padding: 4rem 2rem; }
.ss-container { max-width: 1100px; margin: 0 auto; display: flex; gap: 4rem; }
.ss-content { flex: 1; display: flex; flex-direction: column; gap: 15rem; padding-top: 20vh; padding-bottom: 20vh; }
.ss-block h2 { font-size: 2.5rem; color: #111827; margin: 0 0 1rem 0; letter-spacing: -1px; }
.ss-block p { font-size: 1.2rem; color: #6b7280; line-height: 1.6; }
.ss-visual { flex: 1; position: relative; }
.ss-sticky-box { position: sticky; top: 20vh; width: 100%; height: 60vh; background: #fff; border-radius: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.1); overflow: hidden; }
.ss-sticky-box img { width: 100%; height: 100%; object-fit: cover; }
@media (max-width: 768px) { .ss-container { flex-direction: column; } .ss-content { padding: 2rem 0; gap: 4rem; } .ss-sticky-box { position: relative; top: 0; height: 300px; margin-bottom: 2rem; } }`,
    jsCode: ``
  },

  // 9. Three-Column Card Features
  {
    _id: "fs9",
    title: "Classic 3-Column Features",
    slug: "classic-3-column-features",
    description: "The most universally recognized feature presentation. Simple, clean, and effective.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    tags: ["features", "cards", "classic", "clean"],
    isPremium: false,
    views: 11000,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="tc-feat-sec">
  <div class="tc-header">
    <h2>Why choose us?</h2>
    <p>Everything you need to scale your business.</p>
  </div>
  <div class="tc-grid">
    <div class="tc-card">
      <div class="tc-icon bg-blue">📈</div>
      <h3>Growth Tracking</h3>
      <p>Detailed reports on your audience growth and engagement over time.</p>
    </div>
    <div class="tc-card">
      <div class="tc-icon bg-green">🤝</div>
      <h3>Team Collaboration</h3>
      <p>Invite team members, assign roles, and work together seamlessly.</p>
    </div>
    <div class="tc-card">
      <div class="tc-icon bg-purple">⚙️</div>
      <h3>Automated Rules</h3>
      <p>Set it and forget it. Our automation engine works while you sleep.</p>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.tc-feat-sec { padding: 5rem 2rem; max-width: 1200px; margin: 0 auto; }
.tc-header { text-align: center; margin-bottom: 4rem; }
.tc-header h2 { font-size: 2.5rem; color: #111827; margin: 0 0 10px 0; }
.tc-header p { font-size: 1.1rem; color: #6b7280; }
.tc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.tc-card { text-align: center; padding: 2rem; border-radius: 12px; border: 1px solid #f3f4f6; transition: 0.3s; }
.tc-card:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.05); transform: translateY(-5px); }
.tc-icon { width: 60px; height: 60px; margin: 0 auto 1.5rem; border-radius: 12px; display: flex; justify-content: center; align-items: center; font-size: 1.5rem; }
.bg-blue { background: #dbeafe; color: #2563eb; }
.bg-green { background: #d1fae5; color: #059669; }
.bg-purple { background: #f3e8ff; color: #7c3aed; }
.tc-card h3 { font-size: 1.3rem; color: #111827; margin: 0 0 10px 0; }
.tc-card p { font-size: 1rem; color: #6b7280; line-height: 1.5; margin: 0; }`,
    jsCode: ``
  },

  // 10. Isometric 3D Icons Features
  {
    _id: "fs10",
    title: "Isometric Icon Presentation",
    slug: "isometric-icon-features",
    description: "A visually striking layout utilizing skewed cards and bold colors for a 3D effect.",
    category: "Features",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["features", "isometric", "3d", "creative"],
    isPremium: true,
    views: 10400,
    downloads: 3300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<section class="iso-feat-sec">
  <div class="iso-grid">
    <div class="iso-box">
      <div class="iso-icon">🌐</div>
      <h3>Global Reach</h3>
      <p>Data centers in 25 regions globally.</p>
    </div>
    <div class="iso-box">
      <div class="iso-icon">🛡️</div>
      <h3>DDoS Protection</h3>
      <p>Always-on mitigation included.</p>
    </div>
    <div class="iso-box">
      <div class="iso-icon">🔌</div>
      <h3>API First</h3>
      <p>Manage everything programmatically.</p>
    </div>
  </div>
</section>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; }
.iso-feat-sec { padding: 6rem 2rem; min-height: 100vh; display: flex; justify-content: center; align-items: center; perspective: 1000px; }
.iso-grid { display: flex; gap: 40px; transform: rotateX(20deg) rotateY(-20deg) rotateZ(5deg); transform-style: preserve-3d; }
.iso-box { width: 250px; background: #fff; padding: 2rem; border-radius: 12px; box-shadow: -15px 15px 30px rgba(0,0,0,0.1); border-right: 5px solid #cbd5e1; border-bottom: 5px solid #cbd5e1; transition: 0.3s; cursor: pointer; }
.iso-box:hover { transform: translateZ(30px); box-shadow: -25px 25px 40px rgba(0,0,0,0.2); }
.iso-icon { font-size: 3rem; margin-bottom: 1.5rem; text-shadow: -2px 2px 5px rgba(0,0,0,0.1); }
.iso-box h3 { color: #0f172a; font-size: 1.2rem; margin: 0 0 10px 0; }
.iso-box p { color: #64748b; margin: 0; font-size: 0.95rem; line-height: 1.5; }
@media (max-width: 900px) { .iso-grid { flex-direction: column; transform: none; } .iso-box { width: 100%; border: 1px solid #cbd5e1; box-shadow: 0 10px 20px rgba(0,0,0,0.05); } .iso-box:hover { transform: translateY(-5px); } }`,
    jsCode: ``
  }
];
