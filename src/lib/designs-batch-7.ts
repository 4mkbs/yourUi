import { Design } from "./designs-data";

export const BATCH_7_DESIGNS: Design[] = [
  // 1. Standard Corporate Multi-Column Footer
  {
    _id: "f1",
    title: "Standard Corporate Footer",
    slug: "standard-corporate-footer",
    description: "A clean, structured multi-column footer with quick links, company info, and social icons.",
    category: "Footer",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    tags: ["footer", "corporate", "multi-column", "standard"],
    isPremium: false,
    views: 8900,
    downloads: 3400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="corp-footer">
  <div class="footer-grid">
    <div class="footer-col brand-col">
      <div class="brand">ACME Corp.</div>
      <p>Building the future of digital infrastructure, one block at a time.</p>
    </div>
    <div class="footer-col">
      <h4>Product</h4>
      <a href="#">Features</a>
      <a href="#">Integrations</a>
      <a href="#">Pricing</a>
      <a href="#">Changelog</a>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <a href="#">About Us</a>
      <a href="#">Careers</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </div>
    <div class="footer-col">
      <h4>Legal</h4>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookie Policy</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 ACME Corporation. All rights reserved.</p>
    <div class="social-links">
      <a href="#">Twitter</a>
      <a href="#">LinkedIn</a>
      <a href="#">GitHub</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.corp-footer { background: #f8fafc; padding: 4rem 2rem 2rem; border-top: 1px solid #e2e8f0; color: #475569; }
.footer-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2rem; margin-bottom: 4rem; }
.brand { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 1rem; }
.brand-col p { line-height: 1.6; max-width: 250px; }
h4 { color: #0f172a; margin-top: 0; margin-bottom: 1.5rem; font-size: 1rem; }
.footer-col a { display: block; color: #475569; text-decoration: none; margin-bottom: 0.8rem; font-size: 0.95rem; transition: 0.2s; }
.footer-col a:hover { color: #3b82f6; }
.footer-bottom { max-width: 1200px; margin: 0 auto; padding-top: 2rem; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; }
.social-links { display: flex; gap: 1.5rem; }
.social-links a { color: #475569; text-decoration: none; font-weight: 500; transition: 0.2s; }
.social-links a:hover { color: #0f172a; }
@media(max-width: 800px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
@media(max-width: 500px) { .footer-grid { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; } }`,
    jsCode: ``
  },

  // 2. Minimalist Centered Footer
  {
    _id: "f2",
    title: "Minimalist Centered Footer",
    slug: "minimalist-centered-footer",
    description: "A highly simplified footer, perfect for portfolios or clean landing pages.",
    category: "Footer",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["footer", "minimalist", "centered", "clean"],
    isPremium: false,
    views: 7400,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="min-footer">
  <div class="logo">✦</div>
  <nav class="min-nav">
    <a href="#">Work</a>
    <a href="#">About</a>
    <a href="#">Writing</a>
    <a href="#">Contact</a>
  </nav>
  <p class="copyright">Designed and built with care. &copy; 2026.</p>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; }
.min-footer { padding: 4rem 2rem; text-align: center; display: flex; flex-direction: column; align-items: center; }
.logo { font-size: 2rem; color: #111; margin-bottom: 2rem; }
.min-nav { display: flex; gap: 2rem; margin-bottom: 2.5rem; }
.min-nav a { color: #111; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; transition: 0.2s; position: relative; }
.min-nav a::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -4px; left: 0; background-color: #111; transition: width 0.2s ease-in-out; }
.min-nav a:hover::after { width: 100%; }
.copyright { color: #888; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 3. Dark Mode SaaS Footer
  {
    _id: "f3",
    title: "Dark SaaS CTA Footer",
    slug: "dark-saas-cta-footer",
    description: "A dark-themed footer featuring a prominent call-to-action section before the links.",
    category: "Footer",
    thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
    tags: ["footer", "dark", "saas", "cta"],
    isPremium: true,
    views: 8100,
    downloads: 2700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="dark-footer">
  <div class="cta-section">
    <h2>Ready to launch your project?</h2>
    <p>Join thousands of developers building fast, reliable applications.</p>
    <button class="cta-btn">Start Building for Free</button>
  </div>
  <div class="divider"></div>
  <div class="links-section">
    <div class="col">
      <span>Developers</span>
      <a href="#">Documentation</a>
      <a href="#">API Reference</a>
      <a href="#">Status</a>
    </div>
    <div class="col">
      <span>Resources</span>
      <a href="#">Community</a>
      <a href="#">Templates</a>
      <a href="#">Blog</a>
    </div>
    <div class="col">
      <span>Legal</span>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.dark-footer { background: #0f172a; color: #fff; padding: 5rem 2rem 3rem; text-align: center; }
.cta-section { max-width: 600px; margin: 0 auto; }
h2 { font-size: 2.5rem; margin: 0 0 1rem 0; color: #f8fafc; }
p { color: #94a3b8; font-size: 1.1rem; margin-bottom: 2rem; }
.cta-btn { background: #3b82f6; color: #fff; border: none; padding: 1rem 2rem; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; }
.cta-btn:hover { background: #2563eb; transform: translateY(-2px); }
.divider { height: 1px; background: #1e293b; margin: 4rem auto; max-width: 1000px; }
.links-section { max-width: 1000px; margin: 0 auto; display: flex; justify-content: center; gap: 5rem; text-align: left; }
.col { display: flex; flex-direction: column; }
.col span { color: #f8fafc; font-weight: bold; margin-bottom: 1.5rem; font-size: 1rem; }
.col a { color: #94a3b8; text-decoration: none; margin-bottom: 1rem; font-size: 0.9rem; transition: 0.2s; }
.col a:hover { color: #3b82f6; }
@media (max-width: 600px) { .links-section { flex-direction: column; gap: 2rem; align-items: center; text-align: center; } }`,
    jsCode: ``
  },

  // 4. E-commerce Mega Footer
  {
    _id: "f4",
    title: "E-commerce Mega Footer",
    slug: "ecommerce-mega-footer",
    description: "A comprehensive footer for online stores, including payment methods and newsletter subscription.",
    category: "Footer",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tags: ["footer", "ecommerce", "store", "mega"],
    isPremium: true,
    views: 6500,
    downloads: 1900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="store-footer">
  <div class="top-row">
    <div class="newsletter">
      <h3>Stay in the loop</h3>
      <p>Subscribe for exclusive offers and new arrivals.</p>
      <form>
        <input type="email" placeholder="Email address" />
        <button>→</button>
      </form>
    </div>
    <div class="links-grid">
      <div class="link-col">
        <h4>Shop</h4>
        <a href="#">Men</a><a href="#">Women</a><a href="#">Accessories</a>
      </div>
      <div class="link-col">
        <h4>Help</h4>
        <a href="#">FAQ</a><a href="#">Returns</a><a href="#">Shipping</a>
      </div>
    </div>
  </div>
  <div class="bottom-row">
    <div class="payment-methods">
      <span>💳 Visa</span>
      <span>💳 MasterCard</span>
      <span>💳 PayPal</span>
    </div>
    <div class="copyright">© 2026 VENDRE. All rights reserved.</div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: sans-serif; }
.store-footer { background: #111; color: #fff; padding: 4rem 2rem 2rem; }
.top-row { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; gap: 4rem; padding-bottom: 4rem; border-bottom: 1px solid #333; }
.newsletter { flex: 1; max-width: 400px; }
h3 { margin: 0 0 0.5rem 0; font-size: 1.5rem; }
.newsletter p { color: #888; margin-bottom: 1.5rem; }
form { display: flex; border-bottom: 1px solid #555; padding-bottom: 5px; }
input { background: transparent; border: none; color: #fff; flex: 1; outline: none; font-size: 1rem; }
button { background: transparent; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; }
.links-grid { display: flex; gap: 4rem; }
h4 { color: #fff; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px; font-size: 0.9rem; }
.link-col { display: flex; flex-direction: column; gap: 1rem; }
.link-col a { color: #888; text-decoration: none; transition: 0.2s; }
.link-col a:hover { color: #fff; }
.bottom-row { max-width: 1200px; margin: 0 auto; padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; color: #666; font-size: 0.85rem; }
.payment-methods { display: flex; gap: 1rem; }
@media (max-width: 800px) { .top-row { flex-direction: column; } .bottom-row { flex-direction: column; gap: 1rem; text-align: center; } }`,
    jsCode: ``
  },

  // 5. Creative Agency Big Typography Footer
  {
    _id: "f5",
    title: "Giant Typography Footer",
    slug: "giant-typography-footer",
    description: "A bold, creative footer dominated by a massive 'Let's Talk' heading.",
    category: "Footer",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    tags: ["footer", "creative", "typography", "bold"],
    isPremium: false,
    views: 7100,
    downloads: 2400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="big-type-footer">
  <div class="inner">
    <a href="mailto:hello@agency.com" class="huge-text">LET'S TALK ↗</a>
    <div class="footer-info">
      <div class="address">
        <p>123 Creative Studio Dr.</p>
        <p>New York, NY 10012</p>
      </div>
      <div class="socials">
        <a href="#">Insta</a>
        <a href="#">Dribbble</a>
        <a href="#">X</a>
      </div>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.big-type-footer { background: #111; color: #fff; padding: 6rem 2rem 2rem; overflow: hidden; }
.inner { max-width: 1400px; margin: 0 auto; }
.huge-text { display: block; font-size: 12vw; font-weight: 900; line-height: 1; text-decoration: none; color: #fff; margin-bottom: 4rem; letter-spacing: -0.05em; transition: color 0.3s; white-space: nowrap; }
.huge-text:hover { color: #facc15; }
.footer-info { display: flex; justify-content: space-between; border-top: 1px solid #333; padding-top: 2rem; }
.address p { margin: 0 0 0.5rem 0; color: #888; font-size: 1.1rem; }
.socials { display: flex; gap: 2rem; }
.socials a { color: #fff; text-decoration: none; font-size: 1.1rem; text-transform: uppercase; font-weight: bold; }
.socials a:hover { text-decoration: underline; }
@media (max-width: 800px) { .huge-text { font-size: 15vw; } .footer-info { flex-direction: column; gap: 2rem; } }`,
    jsCode: ``
  },

  // 6. Wave Divider Footer
  {
    _id: "f6",
    title: "SVG Wave Top Footer",
    slug: "svg-wave-top-footer",
    description: "A colorful footer that transitions smoothly from the page content using an SVG wave.",
    category: "Footer",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["footer", "wave", "svg", "colorful"],
    isPremium: false,
    views: 5200,
    downloads: 1600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div>
  <!-- Placeholder for above content -->
  <div style="height: 200px; background: #fff;"></div>
  
  <svg viewBox="0 0 1440 120" class="wave">
    <path fill="#6366f1" fill-opacity="1" d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
  </svg>
  <footer class="wave-footer">
    <div class="content">
      <h2>Join the Community</h2>
      <p>Subscribe to our newsletter to get the latest updates.</p>
      <div class="sub-form">
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
      <div class="f-links">
        <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Contact</a>
      </div>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #fff; }
.wave { display: block; width: 100%; height: auto; margin-bottom: -1px; }
.wave-footer { background: #6366f1; color: #fff; text-align: center; padding: 0 2rem 4rem; }
.content { max-width: 600px; margin: 0 auto; }
h2 { font-size: 2rem; margin: 0 0 1rem 0; }
p { color: #e0e7ff; margin-bottom: 2rem; }
.sub-form { display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 3rem; }
input { padding: 1rem; border-radius: 30px; border: none; width: 250px; outline: none; }
button { padding: 1rem 2rem; border-radius: 30px; border: none; background: #111827; color: #fff; font-weight: bold; cursor: pointer; }
.f-links a { color: #c7d2fe; text-decoration: none; margin: 0 10px; font-size: 0.9rem; }
.f-links a:hover { color: #fff; }
@media (max-width: 500px) { .sub-form { flex-direction: column; } input { width: 100%; box-sizing: border-box; } }`,
    jsCode: ``
  },

  // 7. Glassmorphism Footer
  {
    _id: "f7",
    title: "Floating Glass Footer",
    slug: "floating-glass-footer",
    description: "A translucent footer floating at the bottom of a colorful background.",
    category: "Footer",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["footer", "glassmorphism", "floating", "blur"],
    isPremium: true,
    views: 6600,
    downloads: 2100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-bg">
  <div style="height: 100vh;"></div>
  <footer class="glass-footer">
    <div class="g-col">
      <h3>Design System</h3>
      <p>Beautiful components for modern web applications.</p>
    </div>
    <div class="g-links">
      <a href="#">Components</a>
      <a href="#">Templates</a>
      <a href="#">Docs</a>
    </div>
  </footer>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.glass-bg { background: linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6); position: relative; }
.glass-footer { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 1000px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 20px; padding: 2rem 3rem; display: flex; justify-content: space-between; align-items: center; color: #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.2); z-index: 100; box-sizing: border-box; }
.g-col h3 { margin: 0 0 0.5rem 0; font-size: 1.2rem; }
.g-col p { margin: 0; color: rgba(255,255,255,0.8); font-size: 0.9rem; }
.g-links { display: flex; gap: 2rem; }
.g-links a { color: #fff; text-decoration: none; font-weight: bold; transition: 0.2s; }
.g-links a:hover { opacity: 0.7; }
@media (max-width: 600px) { .glass-footer { flex-direction: column; text-align: center; gap: 1.5rem; padding: 1.5rem; } }`,
    jsCode: ``
  },

  // 8. Newsletter Subscribe Focused Footer
  {
    _id: "f8",
    title: "Newsletter Focus Footer",
    slug: "newsletter-focus-footer",
    description: "A footer designed primarily to capture email subscribers with a clean, centered layout.",
    category: "Footer",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["footer", "newsletter", "subscribe", "clean"],
    isPremium: false,
    views: 4300,
    downloads: 1200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="nl-footer">
  <div class="nl-container">
    <h2>Subscribe to our newsletter</h2>
    <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
    <form class="nl-form">
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
    <div class="bottom-links">
      <span>© 2026 Company, Inc.</span>
      <div class="r-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.nl-footer { background: #f9fafb; padding: 5rem 2rem 2rem; border-top: 1px solid #f3f4f6; }
.nl-container { max-width: 800px; margin: 0 auto; text-align: center; }
h2 { color: #111827; margin: 0 0 1rem 0; font-size: 2rem; }
p { color: #6b7280; margin-bottom: 2.5rem; }
.nl-form { display: flex; max-width: 500px; margin: 0 auto 4rem; gap: 0.5rem; }
.nl-form input { flex: 1; padding: 0.8rem 1rem; border: 1px solid #d1d5db; border-radius: 8px; outline: none; font-size: 1rem; }
.nl-form input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.nl-form button { background: #4f46e5; color: #fff; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.nl-form button:hover { background: #4338ca; }
.bottom-links { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; padding-top: 2rem; font-size: 0.875rem; color: #9ca3af; }
.r-links a { color: #6b7280; text-decoration: none; margin-left: 1.5rem; }
@media (max-width: 500px) { .nl-form { flex-direction: column; } .bottom-links { flex-direction: column; gap: 1rem; } .r-links a { margin: 0 0.75rem; } }`,
    jsCode: ``
  },

  // 9. Web3/Crypto Footer
  {
    _id: "f9",
    title: "Web3 Protocol Footer",
    slug: "web3-protocol-footer",
    description: "A tech-focused dark footer displaying protocol status and community links.",
    category: "Footer",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["footer", "web3", "crypto", "dark"],
    isPremium: true,
    views: 3900,
    downloads: 1050,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="w3-footer">
  <div class="w3-grid">
    <div class="status-col">
      <div class="w3-logo">⬡ PROTOCOL</div>
      <div class="network-status">
        <div class="dot pulse"></div> Mainnet Operational
      </div>
      <p class="tkn-price">$TKN: $2.45 <span class="up">▲ 5.2%</span></p>
    </div>
    <div class="links-col">
      <h4>Ecosystem</h4>
      <a href="#">Explorer</a><a href="#">Staking</a><a href="#">Governance</a>
    </div>
    <div class="links-col">
      <h4>Community</h4>
      <a href="#">Discord</a><a href="#">Twitter</a><a href="#">Telegram</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; background: #000; font-family: monospace; }
.w3-footer { background: #09090b; border-top: 1px solid #27272a; padding: 4rem 2rem; color: #a1a1aa; }
.w3-grid { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 2rem; }
.w3-logo { font-size: 1.5rem; font-weight: bold; color: #fff; margin-bottom: 1.5rem; }
.network-status { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; margin-bottom: 1rem; }
.dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; }
.pulse { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); } 70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); } 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } }
.tkn-price { font-size: 1.1rem; color: #fff; }
.up { color: #10b981; font-size: 0.8rem; }
h4 { color: #fff; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem; font-size: 0.9rem; }
.links-col { display: flex; flex-direction: column; gap: 1rem; }
.links-col a { color: #a1a1aa; text-decoration: none; transition: 0.2s; }
.links-col a:hover { color: #8b5cf6; }
@media (max-width: 600px) { .w3-grid { grid-template-columns: 1fr; gap: 3rem; } }`,
    jsCode: ``
  },

  // 10. Brutalist Footer
  {
    _id: "f10",
    title: "Brutalist Marquee Footer",
    slug: "brutalist-marquee-footer",
    description: "A loud, high-contrast brutalist footer with a moving text marquee.",
    category: "Footer",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["footer", "brutalist", "marquee", "loud"],
    isPremium: true,
    views: 5700,
    downloads: 1400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<footer class="brutal-footer">
  <div class="marquee">
    <div class="marquee-content">
      <span>WE ARE HIRING</span> ✸ <span>LET'S BUILD SOMETHING HUGE</span> ✸ <span>WE ARE HIRING</span> ✸ <span>LET'S BUILD SOMETHING HUGE</span> ✸ 
    </div>
  </div>
  <div class="b-bottom">
    <div class="b-logo">YOUR.UI</div>
    <div class="b-links">
      <a href="#">INSTAGRAM</a>
      <a href="#">TWITTER</a>
      <a href="#">EMAIL</a>
    </div>
  </div>
</footer>`,
    cssCode: `body { margin: 0; background: #fff; font-family: 'Helvetica Neue', sans-serif; }
.brutal-footer { border-top: 5px solid #000; }
.marquee { background: #facc15; border-bottom: 5px solid #000; padding: 1.5rem 0; overflow: hidden; white-space: nowrap; }
.marquee-content { display: inline-block; animation: scroll 15s linear infinite; font-size: 2rem; font-weight: 900; text-transform: uppercase; }
@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.marquee-content span { margin: 0 2rem; }
.b-bottom { display: flex; justify-content: space-between; align-items: center; padding: 4rem 2rem; background: #fff; }
.b-logo { font-size: 4rem; font-weight: 900; letter-spacing: -2px; }
.b-links { display: flex; gap: 2rem; }
.b-links a { color: #000; text-decoration: none; font-weight: bold; font-size: 1.2rem; border: 2px solid transparent; padding: 5px 10px; transition: 0.2s; }
.b-links a:hover { background: #000; color: #fff; }
@media (max-width: 800px) { .b-bottom { flex-direction: column; gap: 2rem; text-align: center; } .b-logo { font-size: 3rem; } .b-links { flex-direction: column; gap: 1rem; } }`,
    jsCode: ``
  }
];
