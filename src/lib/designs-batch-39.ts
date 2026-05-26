import { Design } from "./designs-data";

export const BATCH_39_DESIGNS: Design[] = [
  // 1. Classic Minimal Accordion
  {
    _id: "acc1",
    title: "Classic Minimal Accordion",
    slug: "classic-minimal-accordion",
    description: "A clean, standard accordion perfect for FAQs, using native details/summary elements.",
    category: "Accordions",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["accordion", "faq", "minimal", "classic"],
    isPremium: false,
    views: 19500,
    downloads: 5800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="acc-classic-wrap">
  <details class="acc-classic" open>
    <summary>What is your return policy?</summary>
    <div class="acc-content">You can return any item within 30 days of purchase.</div>
  </details>
  <details class="acc-classic">
    <summary>Do you ship internationally?</summary>
    <div class="acc-content">Yes, we ship to over 50 countries worldwide.</div>
  </details>
  <details class="acc-classic">
    <summary>How can I track my order?</summary>
    <div class="acc-content">A tracking link will be emailed once your order ships.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.acc-classic-wrap { width: 100%; max-width: 400px; background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }
.acc-classic { border-bottom: 1px solid #e2e8f0; padding: 15px 0; }
.acc-classic:last-child { border-bottom: none; }
.acc-classic summary { font-weight: 600; color: #1e293b; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
.acc-classic summary::-webkit-details-marker { display: none; }
.acc-classic summary::after { content: '▾'; transition: 0.3s; color: #94a3b8; }
.acc-classic[open] summary::after { transform: rotate(-180deg); color: #3b82f6; }
.acc-content { padding-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 2. Card Accordion
  {
    _id: "acc2",
    title: "Card Accordion",
    slug: "card-accordion",
    description: "Each accordion item is a distinct, hovering card.",
    category: "Accordions",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["accordion", "card", "shadow", "modern"],
    isPremium: false,
    views: 17200,
    downloads: 4900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="acc-card-wrap">
  <details class="acc-card" open>
    <summary>Payment Methods</summary>
    <div class="acc-c-content">We accept Visa, MasterCard, PayPal, and Apple Pay.</div>
  </details>
  <details class="acc-card">
    <summary>Subscription Plans</summary>
    <div class="acc-c-content">Choose from Basic, Pro, and Enterprise tiers.</div>
  </details>
  <details class="acc-card">
    <summary>Cancellation</summary>
    <div class="acc-c-content">Cancel anytime via your account settings.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.acc-card-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 12px; }
.acc-card { background: #fff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); overflow: hidden; transition: 0.3s; }
.acc-card[open] { box-shadow: 0 10px 15px rgba(0,0,0,0.1); border: 1px solid #cbd5e1; }
.acc-card summary { padding: 15px 20px; font-weight: 600; color: #334155; cursor: pointer; list-style: none; display: flex; justify-content: space-between; background: #fff; transition: 0.2s; }
.acc-card summary::-webkit-details-marker { display: none; }
.acc-card summary::after { content: '+'; font-size: 1.2rem; transition: 0.3s; color: #94a3b8; }
.acc-card[open] summary::after { content: '−'; color: #0f172a; }
.acc-card[open] summary { background: #f8fafc; border-bottom: 1px solid #e2e8f0; }
.acc-c-content { padding: 15px 20px; color: #64748b; font-size: 0.95rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Accordion
  {
    _id: "acc3",
    title: "Cyberpunk Accordion",
    slug: "cyberpunk-accordion",
    description: "Neon borders and a dark, high-tech aesthetic.",
    category: "Accordions",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["accordion", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 18500,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="acc-cy-wrap">
  <details class="acc-cy" open>
    <summary>SYSTEM_REQS</summary>
    <div class="acc-cy-content">MIN: 16GB RAM, RTX 3060. REC: 32GB RAM, RTX 4080.</div>
  </details>
  <details class="acc-cy">
    <summary>INSTALL_DIR</summary>
    <div class="acc-cy-content">Extract files to C:/CYBER/CORE/</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.acc-cy-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 15px; }
.acc-cy { background: #111; border: 1px solid #333; position: relative; }
.acc-cy[open] { border-color: #0ff; box-shadow: 0 0 10px rgba(0,255,255,0.2); }
.acc-cy summary { padding: 15px; font-weight: bold; color: #0ff; cursor: pointer; list-style: none; display: flex; justify-content: space-between; text-transform: uppercase; letter-spacing: 1px; }
.acc-cy summary::-webkit-details-marker { display: none; }
.acc-cy summary::after { content: '[+]'; color: #f0f; transition: 0.3s; }
.acc-cy[open] summary::after { content: '[-]'; color: #0ff; }
.acc-cy-content { padding: 15px; color: #ccc; font-size: 0.9rem; border-top: 1px dashed #333; background: rgba(0,255,255,0.05); }
.acc-cy[open] .acc-cy-content { border-top-color: #0ff; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Accordion
  {
    _id: "acc4",
    title: "Glassmorphism Accordion",
    slug: "glassmorphism-accordion",
    description: "Frosted glass containers over a moving gradient background.",
    category: "Accordions",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["accordion", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 19200,
    downloads: 5500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="acc-gl-wrap">
    <details class="acc-gl" open>
      <summary>Features</summary>
      <div class="acc-gl-content">Experience pure glass effects.</div>
    </details>
    <details class="acc-gl">
      <summary>Pricing</summary>
      <div class="acc-gl-content">Completely free for personal use.</div>
    </details>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; padding: 20px; box-sizing: border-box; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.acc-gl-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 10px; }
.acc-gl { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.3); color: #fff; overflow: hidden; }
.acc-gl summary { padding: 16px 20px; font-weight: 600; cursor: pointer; list-style: none; display: flex; justify-content: space-between; }
.acc-gl summary::-webkit-details-marker { display: none; }
.acc-gl summary::after { content: '▼'; transition: 0.3s; font-size: 0.8rem; }
.acc-gl[open] summary::after { transform: rotate(180deg); }
.acc-gl-content { padding: 16px 20px; font-size: 0.95rem; background: rgba(0, 0, 0, 0.1); border-top: 1px solid rgba(255,255,255,0.1); }`,
    jsCode: ``
  },

  // 5. Brutalist Accordion
  {
    _id: "acc5",
    title: "Brutalist Accordion",
    slug: "brutalist-accordion",
    description: "Thick borders, harsh hover states, and high contrast design.",
    category: "Accordions",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["accordion", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 13500,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="acc-br-wrap">
  <details class="acc-br" open>
    <summary>QUESTION 01</summary>
    <div class="acc-br-content">ANSWER 01: YES.</div>
  </details>
  <details class="acc-br">
    <summary>QUESTION 02</summary>
    <div class="acc-br-content">ANSWER 02: NO.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.acc-br-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 20px; }
.acc-br { background: #fff; border: 4px solid #000; box-shadow: 6px 6px 0 #000; transition: 0.1s; }
.acc-br[open] { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 #000; }
.acc-br summary { padding: 15px; font-weight: 900; color: #000; cursor: pointer; list-style: none; display: flex; justify-content: space-between; text-transform: uppercase; background: #facc15; }
.acc-br summary::-webkit-details-marker { display: none; }
.acc-br summary::after { content: 'READ'; background: #000; color: #fff; padding: 2px 8px; font-size: 0.8rem; }
.acc-br[open] summary::after { content: 'CLOSE'; background: #ef4444; }
.acc-br-content { padding: 20px; font-weight: bold; font-size: 1.1rem; border-top: 4px solid #000; }`,
    jsCode: ``
  },

  // 6. Neumorphic Accordion
  {
    _id: "acc6",
    title: "Neumorphic Accordion",
    slug: "neumorphic-accordion",
    description: "Soft UI design with debossed backgrounds and extruded content.",
    category: "Accordions",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["accordion", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 14200,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="acc-neu-wrap">
  <details class="acc-neu" open>
    <summary>Account Settings</summary>
    <div class="acc-neu-content">Update your email and password here.</div>
  </details>
  <details class="acc-neu">
    <summary>Privacy Policy</summary>
    <div class="acc-neu-content">We do not share your data.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.acc-neu-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 20px; }
.acc-neu { background: #e0e5ec; border-radius: 12px; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); overflow: hidden; }
.acc-neu[open] { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
.acc-neu summary { padding: 18px 20px; font-weight: bold; color: #4a5568; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
.acc-neu summary::-webkit-details-marker { display: none; }
.acc-neu summary::after { content: '＋'; color: #a0aec0; font-size: 1.2rem; }
.acc-neu[open] summary::after { content: '－'; color: #3182ce; }
.acc-neu-content { padding: 0 20px 20px 20px; color: #718096; line-height: 1.5; }`,
    jsCode: ``
  },

  // 7. Side Accent Accordion
  {
    _id: "acc7",
    title: "Side Accent Accordion",
    slug: "side-accent-accordion",
    description: "Features a colorful vertical bar on the left that expands when open.",
    category: "Accordions",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["accordion", "accent", "clean", "corporate"],
    isPremium: false,
    views: 16400,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="acc-side-wrap">
  <details class="acc-side" open>
    <summary>Team Members</summary>
    <div class="acc-s-content">Manage your organization's team members.</div>
  </details>
  <details class="acc-side">
    <summary>Billing Details</summary>
    <div class="acc-s-content">View invoices and payment methods.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.acc-side-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 8px; }
.acc-side { background: #fff; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-left: 4px solid transparent; transition: 0.2s; }
.acc-side[open] { border-left-color: #8b5cf6; }
.acc-side summary { padding: 15px 20px; font-weight: 600; color: #334155; cursor: pointer; list-style: none; display: flex; justify-content: space-between; }
.acc-side summary::-webkit-details-marker { display: none; }
.acc-side summary::after { content: '›'; font-size: 1.5rem; transition: 0.3s; color: #94a3b8; line-height: 1; }
.acc-side[open] summary::after { transform: rotate(90deg); color: #8b5cf6; }
.acc-s-content { padding: 0 20px 15px 20px; color: #64748b; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 8. Gradient Border Accordion
  {
    _id: "acc8",
    title: "Gradient Border Accordion",
    slug: "gradient-border-accordion",
    description: "The accordion container features a vibrant gradient border.",
    category: "Accordions",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["accordion", "gradient", "colorful", "modern"],
    isPremium: true,
    views: 18100,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="acc-grad-wrap">
  <div class="acc-grad-box">
    <details class="acc-grad" open>
      <summary>Design Assets</summary>
      <div class="acc-g-content">Download icons, fonts, and UI kits.</div>
    </details>
    <details class="acc-grad">
      <summary>Code Snippets</summary>
      <div class="acc-g-content">Access the full library of React components.</div>
    </details>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.acc-grad-wrap { width: 100%; max-width: 400px; padding: 2px; background: linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6); border-radius: 10px; }
.acc-grad-box { background: #fff; border-radius: 8px; overflow: hidden; }
.acc-grad { border-bottom: 1px solid #e2e8f0; }
.acc-grad:last-child { border-bottom: none; }
.acc-grad summary { padding: 16px 20px; font-weight: 600; color: #1e293b; cursor: pointer; list-style: none; display: flex; justify-content: space-between; }
.acc-grad summary::-webkit-details-marker { display: none; }
.acc-grad summary::after { content: '+'; color: #ec4899; font-weight: bold; font-size: 1.2rem; }
.acc-grad[open] summary::after { content: '-'; color: #3b82f6; }
.acc-g-content { padding: 0 20px 16px 20px; color: #475569; }`,
    jsCode: ``
  },

  // 9. Plus/Minus Circle Accordion
  {
    _id: "acc9",
    title: "Circle Icon Accordion",
    slug: "circle-icon-accordion",
    description: "Features a nice rounded icon indicator that changes state.",
    category: "Accordions",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["accordion", "icons", "circle", "clean"],
    isPremium: false,
    views: 15900,
    downloads: 4200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="acc-cir-wrap">
  <details class="acc-cir" open>
    <summary>Can I upgrade later?</summary>
    <div class="acc-cr-content">Yes, you can upgrade your plan at any time.</div>
  </details>
  <details class="acc-cir">
    <summary>Is there a free trial?</summary>
    <div class="acc-cr-content">We offer a 14-day free trial on all plans.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.acc-cir-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 10px; }
.acc-cir { background: #fff; border-radius: 8px; border: 1px solid #cbd5e1; }
.acc-cir summary { padding: 15px; font-weight: 500; color: #334155; cursor: pointer; list-style: none; display: flex; align-items: center; gap: 15px; }
.acc-cir summary::-webkit-details-marker { display: none; }
.acc-cir summary::before { content: '+'; display: flex; justify-content: center; align-items: center; width: 24px; height: 24px; background: #e2e8f0; border-radius: 50%; color: #64748b; font-weight: bold; font-size: 0.9rem; transition: 0.3s; }
.acc-cir[open] summary::before { content: '−'; background: #10b981; color: #fff; transform: rotate(180deg); }
.acc-cir[open] summary { border-bottom: 1px dashed #e2e8f0; }
.acc-cr-content { padding: 15px 15px 15px 54px; color: #64748b; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 10. Dark Mode Elegant Accordion
  {
    _id: "acc10",
    title: "Dark Mode Accordion",
    slug: "dark-mode-accordion",
    description: "A sleek, elegant accordion designed specifically for dark themes.",
    category: "Accordions",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["accordion", "dark", "elegant", "sleek"],
    isPremium: true,
    views: 20100,
    downloads: 5800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="acc-dk-wrap">
  <details class="acc-dk" open>
    <summary>Security Overview</summary>
    <div class="acc-d-content">End-to-end encryption secures all your data.</div>
  </details>
  <details class="acc-dk">
    <summary>API Access</summary>
    <div class="acc-d-content">Generate API keys in your developer console.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.acc-dk-wrap { width: 100%; max-width: 400px; background: #1e293b; border-radius: 12px; border: 1px solid #334155; overflow: hidden; }
.acc-dk { border-bottom: 1px solid #334155; }
.acc-dk:last-child { border-bottom: none; }
.acc-dk summary { padding: 18px 20px; font-weight: 500; color: #f8fafc; cursor: pointer; list-style: none; display: flex; justify-content: space-between; transition: 0.2s; }
.acc-dk summary:hover { background: #334155; }
.acc-dk summary::-webkit-details-marker { display: none; }
.acc-dk summary::after { content: '↓'; transition: 0.3s; color: #94a3b8; }
.acc-dk[open] summary::after { transform: rotate(180deg); color: #38bdf8; }
.acc-d-content { padding: 0 20px 18px 20px; color: #94a3b8; font-size: 0.9rem; line-height: 1.6; }`,
    jsCode: ``
  }
];
