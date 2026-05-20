import { Design } from "./designs-data";

export const BATCH_76_DESIGNS: Design[] = [
  // 1. Classic 4-Column Footer
  {
    _id: "ft1",
    title: "Classic 4-Column Footer",
    slug: "classic-4-column-footer",
    description: "Standard comprehensive footer with brand info, link columns, and social icons.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "classic", "columns", "links"],
    isPremium: false,
    views: 48200,
    downloads: 14500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-cl">
  <div class="ft-c-top">
    <div class="ft-c-brand">
      <h3>YourBrand</h3>
      <p>Building the future of web development, one component at a time.</p>
    </div>
    <div class="ft-c-links">
      <h4>Product</h4>
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Templates</a></li>
      </ul>
    </div>
    <div class="ft-c-links">
      <h4>Company</h4>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="ft-c-links">
      <h4>Legal</h4>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Cookie Policy</a></li>
      </ul>
    </div>
  </div>
  <div class="ft-c-bottom">
    <p>&copy; 2024 YourBrand Inc. All rights reserved.</p>
    <div class="ft-c-social">
      <a href="#">𝕏</a>
      <a href="#">in</a>
      <a href="#">gh</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.ft-cl { background: #fff; padding: 60px 20px 20px; border-top: 1px solid #e2e8f0; }
.ft-c-top { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; border-bottom: 1px solid #e2e8f0; padding-bottom: 40px; margin-bottom: 20px; }
.ft-c-brand h3 { margin: 0 0 15px; font-size: 1.5rem; color: #0f172a; }
.ft-c-brand p { color: #64748b; line-height: 1.6; margin: 0; max-width: 300px; }
.ft-c-links h4 { margin: 0 0 20px; font-size: 1.1rem; color: #0f172a; }
.ft-c-links ul { list-style: none; padding: 0; margin: 0; }
.ft-c-links li { margin-bottom: 10px; }
.ft-c-links a { color: #64748b; text-decoration: none; transition: 0.2s; }
.ft-c-links a:hover { color: #3b82f6; }
.ft-c-bottom { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; color: #94a3b8; font-size: 0.9rem; }
.ft-c-social { display: flex; gap: 15px; }
.ft-c-social a { color: #94a3b8; text-decoration: none; font-weight: bold; font-size: 1.2rem; transition: 0.2s; }
.ft-c-social a:hover { color: #0f172a; }
@media (max-width: 768px) { .ft-c-top { grid-template-columns: 1fr; } .ft-c-bottom { flex-direction: column; gap: 20px; text-align: center; } }`,
    jsCode: ``
  },

  // 2. Minimal Clean Footer
  {
    _id: "ft2",
    title: "Minimal Clean Footer",
    slug: "minimal-clean-footer",
    description: "Ultra-minimal single-line footer focusing on essentials.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "minimal", "clean", "simple"],
    isPremium: false,
    views: 39500,
    downloads: 11200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-mn">
  <div class="ft-m-inner">
    <p>&copy; 2024 MinimalBrand.</p>
    <div class="ft-m-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Twitter</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.ft-mn { border-top: 1px solid #eaeaea; padding: 30px 20px; }
.ft-m-inner { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.ft-m-inner p { margin: 0; color: #666; font-size: 0.95rem; }
.ft-m-links { display: flex; gap: 20px; }
.ft-m-links a { color: #666; text-decoration: none; font-size: 0.95rem; transition: 0.2s; }
.ft-m-links a:hover { color: #000; }
@media (max-width: 500px) { .ft-m-inner { flex-direction: column; gap: 15px; text-align: center; } }`,
    jsCode: ``
  },

  // 3. Cyberpunk Footer
  {
    _id: "ft3",
    title: "Cyberpunk Footer",
    slug: "cyberpunk-footer",
    description: "Hacker-themed footer with neon borders and monospace fonts.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["footer", "cyberpunk", "terminal", "neon"],
    isPremium: true,
    views: 33500,
    downloads: 9800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-cy">
  <div class="cy-inner">
    <div class="cy-left">
      <div>SYSTEM_READY</div>
      <div class="cy-copy">COPYRIGHT // 2077 // NEON_CORP</div>
    </div>
    <div class="cy-right">
      <a href="#">[ ARCHIVE ]</a>
      <a href="#">[ DECRYPT ]</a>
      <a href="#">[ CONTACT_NODE ]</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; }
.ft-cy { border-top: 2px dashed #0f0; background: rgba(0,20,0,0.8); padding: 30px 20px; position: relative; }
.ft-cy::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: #0f0; box-shadow: 0 0 10px #0f0; }
.cy-inner { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; color: #0f0; }
.cy-left div:first-child { font-weight: bold; margin-bottom: 5px; text-shadow: 0 0 5px #0f0; }
.cy-copy { color: #0aa; font-size: 0.85rem; }
.cy-right { display: flex; gap: 20px; }
.cy-right a { color: #f0f; text-decoration: none; transition: 0.2s; text-shadow: 0 0 2px #f0f; }
.cy-right a:hover { color: #0ff; text-shadow: 0 0 8px #0ff; }
@media (max-width: 600px) { .cy-inner { flex-direction: column; gap: 20px; text-align: center; } }`,
    jsCode: ``
  },

  // 4. Glassmorphism Footer
  {
    _id: "ft4",
    title: "Glassmorphism Footer",
    slug: "glassmorphism-footer",
    description: "Frosted glass footer floating over a background.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["footer", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 45100,
    downloads: 12900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div style="flex-grow:1;"></div>
  <footer class="ft-gl">
    <div class="gl-inner">
      <div class="gl-brand">GlassUI</div>
      <div class="gl-links">
        <a href="#">Showcase</a>
        <a href="#">Docs</a>
        <a href="#">Support</a>
      </div>
      <div class="gl-copy">&copy; 2024 GlassUI</div>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; flex-direction: column; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.ft-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.2); padding: 30px 20px; }
.gl-inner { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; color: #fff; }
.gl-brand { font-size: 1.5rem; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.gl-links { display: flex; gap: 30px; }
.gl-links a { color: #fff; text-decoration: none; opacity: 0.8; transition: 0.3s; }
.gl-links a:hover { opacity: 1; text-shadow: 0 0 10px rgba(255,255,255,0.5); }
.gl-copy { opacity: 0.7; font-size: 0.9rem; }
@media (max-width: 768px) { .gl-inner { flex-direction: column; gap: 20px; text-align: center; } }`,
    jsCode: ``
  },

  // 5. Brutalist Footer
  {
    _id: "ft5",
    title: "Brutalist Footer",
    slug: "brutalist-footer",
    description: "Loud, high-contrast footer with massive text and thick borders.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["footer", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 32800,
    downloads: 7400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-br">
  <div class="br-massive">THE END.</div>
  <div class="br-inner">
    <div class="br-links">
      <a href="#">LEGAL STUFF</a>
      <a href="#">CONTACT US</a>
    </div>
    <div class="br-copy">© 2024 NO RIGHTS RESERVED</div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.ft-br { border-top: 8px solid #000; background: #facc15; padding: 40px 20px 20px; }
.br-massive { font-size: 10vw; font-weight: 900; color: #000; text-align: center; line-height: 1; border-bottom: 8px solid #000; padding-bottom: 20px; margin-bottom: 20px; letter-spacing: -2px; }
.br-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; font-weight: 900; }
.br-links { display: flex; gap: 30px; }
.br-links a { color: #000; text-decoration: none; font-size: 1.5rem; border: 3px solid transparent; transition: 0.1s; }
.br-links a:hover { border-bottom-color: #000; background: #000; color: #facc15; }
.br-copy { font-size: 1.2rem; }
@media (max-width: 768px) { .br-inner { flex-direction: column; gap: 20px; text-align: center; } .br-massive { font-size: 15vw; } }`,
    jsCode: ``
  },

  // 6. Neumorphic Footer
  {
    _id: "ft6",
    title: "Neumorphic Footer",
    slug: "neumorphic-footer",
    description: "Soft UI design with inset containers and extruded elements.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["footer", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 33300,
    downloads: 7100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-neu">
  <div class="neu-inner">
    <div class="neu-box">
      <h3>Neumorph</h3>
      <p>Soft UI for modern web apps.</p>
    </div>
    <div class="neu-links">
      <a href="#" class="neu-btn">Home</a>
      <a href="#" class="neu-btn">About</a>
      <a href="#" class="neu-btn">Contact</a>
    </div>
  </div>
  <div class="neu-bottom">© 2024 Soft Design</div>
</footer>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.ft-neu { padding: 60px 20px 20px; box-shadow: 0 -10px 20px rgba(163,177,198,0.3); }
.neu-inner { max-width: 900px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.neu-box { padding: 20px 30px; border-radius: 20px; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); text-align: center; }
.neu-box h3 { margin: 0 0 10px; color: #2d3748; }
.neu-box p { margin: 0; color: #718096; }
.neu-links { display: flex; gap: 20px; }
.neu-btn { padding: 15px 30px; border-radius: 15px; text-decoration: none; color: #4a5568; font-weight: bold; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.neu-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); color: #2b6cb0; }
.neu-bottom { text-align: center; color: #a0aec0; font-size: 0.9rem; padding-top: 20px; border-top: 2px solid #d1d9e6; }
@media (max-width: 768px) { .neu-inner { flex-direction: column; gap: 40px; } .neu-links { flex-wrap: wrap; justify-content: center; } }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Footer
  {
    _id: "ft7",
    title: "Dark Mode Glow Footer",
    slug: "dark-mode-glow-footer",
    description: "Deep dark layout with neon edge lighting.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["footer", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42400,
    downloads: 11800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-dg">
  <div class="dg-inner">
    <div class="dg-brand">Nexus</div>
    <div class="dg-links">
      <a href="#">Platform</a>
      <a href="#">Solutions</a>
      <a href="#">Resources</a>
    </div>
  </div>
  <div class="dg-line"></div>
  <div class="dg-bottom">
    <span>© 2024 Nexus Corp.</span>
    <div class="dg-social">
      <a href="#">Twitter</a>
      <a href="#">Discord</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; }
.ft-dg { background: #0f172a; padding: 60px 40px 30px; position: relative; overflow: hidden; }
.ft-dg::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, #3b82f6, #8b5cf6, #f43f5e); box-shadow: 0 0 20px rgba(139,92,246,0.5); }
.dg-inner { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.dg-brand { font-size: 2rem; font-weight: 800; color: #fff; letter-spacing: -1px; }
.dg-links { display: flex; gap: 30px; }
.dg-links a { color: #cbd5e1; text-decoration: none; font-weight: 500; transition: 0.3s; }
.dg-links a:hover { color: #8b5cf6; text-shadow: 0 0 10px rgba(139,92,246,0.5); }
.dg-line { height: 1px; background: #1e293b; width: 100%; max-width: 1000px; margin: 0 auto 30px; }
.dg-bottom { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; color: #64748b; font-size: 0.9rem; }
.dg-social { display: flex; gap: 20px; }
.dg-social a { color: #64748b; text-decoration: none; transition: 0.3s; }
.dg-social a:hover { color: #fff; }
@media (max-width: 600px) { .dg-inner { flex-direction: column; gap: 20px; } .dg-bottom { flex-direction: column; gap: 15px; } }`,
    jsCode: ``
  },

  // 8. Newsletter Focused Footer
  {
    _id: "ft8",
    title: "Newsletter Footer",
    slug: "newsletter-footer",
    description: "Footer dominated by a large newsletter subscription box.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["footer", "newsletter", "input", "marketing"],
    isPremium: false,
    views: 45400,
    downloads: 13100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-nl">
  <div class="nl-box">
    <h2>Subscribe to our newsletter</h2>
    <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
    <form class="nl-form" onsubmit="event.preventDefault()">
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
  </div>
  <div class="nl-bottom">
    <div class="nl-links">
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Jobs</a>
      <a href="#">Press</a>
    </div>
    <div class="nl-copy">© 2024 YourCompany, Inc. All rights reserved.</div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; }
.ft-nl { background: #fff; padding: 80px 20px 40px; border-top: 1px solid #e2e8f0; }
.nl-box { max-width: 600px; margin: 0 auto 60px; text-align: center; }
.nl-box h2 { color: #0f172a; font-size: 2rem; margin: 0 0 15px; }
.nl-box p { color: #64748b; font-size: 1.1rem; margin: 0 0 30px; }
.nl-form { display: flex; gap: 10px; }
.nl-form input { flex: 1; padding: 15px 20px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; outline: none; }
.nl-form input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.nl-form button { background: #3b82f6; color: #fff; border: none; padding: 15px 30px; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: 0.2s; }
.nl-form button:hover { background: #2563eb; }
.nl-bottom { max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 20px; border-top: 1px solid #e2e8f0; padding-top: 40px; }
.nl-links { display: flex; gap: 30px; }
.nl-links a { color: #475569; text-decoration: none; font-weight: 500; transition: 0.2s; }
.nl-links a:hover { color: #0f172a; }
.nl-copy { color: #94a3b8; font-size: 0.9rem; }
@media (max-width: 600px) { .nl-form { flex-direction: column; } .nl-links { flex-wrap: wrap; justify-content: center; } }`,
    jsCode: ``
  },

  // 9. Sitemap Footer
  {
    _id: "ft9",
    title: "Sitemap Footer",
    slug: "sitemap-footer",
    description: "Extensive footer designed for large sites with many pages.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["footer", "sitemap", "large", "navigation"],
    isPremium: true,
    views: 38100,
    downloads: 10700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-sm">
  <div class="sm-grid">
    <div class="sm-col">
      <h4>Solutions</h4>
      <a href="#">Marketing</a>
      <a href="#">Analytics</a>
      <a href="#">Commerce</a>
      <a href="#">Insights</a>
    </div>
    <div class="sm-col">
      <h4>Support</h4>
      <a href="#">Pricing</a>
      <a href="#">Documentation</a>
      <a href="#">Guides</a>
      <a href="#">API Status</a>
    </div>
    <div class="sm-col">
      <h4>Company</h4>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Jobs</a>
      <a href="#">Press</a>
      <a href="#">Partners</a>
    </div>
    <div class="sm-col">
      <h4>Legal</h4>
      <a href="#">Claim</a>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  </div>
  <div class="sm-bottom">
    <div class="sm-brand">SitemapBrand</div>
    <div class="sm-copy">© 2024 All rights reserved.</div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #0f172a; }
.ft-sm { padding: 80px 20px 40px; color: #f8fafc; }
.sm-grid { max-width: 1200px; margin: 0 auto 60px; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 40px; }
.sm-col h4 { color: #fff; font-size: 1.1rem; margin: 0 0 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
.sm-col a { display: block; color: #94a3b8; text-decoration: none; margin-bottom: 12px; font-size: 0.95rem; transition: 0.2s; }
.sm-col a:hover { color: #38bdf8; padding-left: 5px; }
.sm-bottom { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #1e293b; padding-top: 30px; }
.sm-brand { font-size: 1.5rem; font-weight: 800; color: #fff; }
.sm-copy { color: #64748b; font-size: 0.9rem; }
@media (max-width: 600px) { .sm-grid { grid-template-columns: 1fr 1fr; } .sm-bottom { flex-direction: column; gap: 15px; text-align: center; } }`,
    jsCode: ``
  },

  // 10. Split Layout Footer
  {
    _id: "ft10",
    title: "Split Layout Footer",
    slug: "split-layout-footer",
    description: "Massive brand block on the left, streamlined links on the right.",
    category: "Footers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["footer", "split", "layout", "minimal"],
    isPremium: false,
    views: 39500,
    downloads: 11200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="ft-sp">
  <div class="sp-left">
    <h2>SplitBrand.</h2>
    <p>Designing the future.</p>
  </div>
  <div class="sp-right">
    <div class="sp-col">
      <a href="#">Work</a>
      <a href="#">Services</a>
      <a href="#">Studio</a>
    </div>
    <div class="sp-col">
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
      <a href="#">Dribbble</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.ft-sp { display: flex; background: #111; color: #fff; min-height: 400px; }
.sp-left { flex: 1; padding: 80px; display: flex; flex-direction: column; justify-content: center; background: #000; }
.sp-left h2 { font-size: 4rem; margin: 0 0 10px; letter-spacing: -2px; }
.sp-left p { color: #666; font-size: 1.5rem; margin: 0; }
.sp-right { flex: 1; padding: 80px; display: flex; gap: 80px; align-items: center; justify-content: center; }
.sp-col { display: flex; flex-direction: column; gap: 20px; }
.sp-col a { color: #ccc; text-decoration: none; font-size: 1.2rem; transition: 0.3s; position: relative; width: fit-content; }
.sp-col a::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -5px; left: 0; background: #fff; transition: 0.3s; }
.sp-col a:hover { color: #fff; }
.sp-col a:hover::after { width: 100%; }
@media (max-width: 900px) { .ft-sp { flex-direction: column; } .sp-left, .sp-right { padding: 60px 40px; text-align: center; justify-content: center; } .sp-left h2 { font-size: 3rem; } .sp-right { flex-direction: column; gap: 40px; } }`,
    jsCode: ``
  }
];
