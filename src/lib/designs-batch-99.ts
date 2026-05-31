import { Design } from "./designs-data";

export const BATCH_99_DESIGNS: Design[] = [
  // 1. Classic Accordion FAQ
  {
    _id: "faq1",
    title: "Classic Accordion FAQ",
    slug: "classic-accordion-faq",
    description: "Standard details/summary based accordion for frequently asked questions.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["faq", "accordion", "classic", "questions"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-cl-wrap">
  <div class="faq-cl">
    <h2>Frequently Asked Questions</h2>
    <div class="cl-list">
      <details class="cl-item" open>
        <summary>What is YourUI?</summary>
        <div class="cl-content">
          <p>YourUI is a premium component library offering over 1000 copy-paste components for your web projects.</p>
        </div>
      </details>
      <details class="cl-item">
        <summary>How do I use these components?</summary>
        <div class="cl-content">
          <p>Simply copy the HTML and CSS into your project. Most components are framework agnostic and require zero external dependencies.</p>
        </div>
      </details>
      <details class="cl-item">
        <summary>Is there a money-back guarantee?</summary>
        <div class="cl-content">
          <p>Yes, we offer a 30-day money-back guarantee if you are not satisfied with our premium components.</p>
        </div>
      </details>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.faq-cl-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
.faq-cl { width: 100%; max-width: 800px; background: #fff; padding: 50px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
.faq-cl h2 { margin: 0 0 30px; font-size: 2rem; color: #0f172a; text-align: center; }
.cl-list { display: flex; flex-direction: column; gap: 15px; }
.cl-item { border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
.cl-item summary { padding: 20px; font-weight: 600; color: #0f172a; cursor: pointer; list-style: none; position: relative; background: #f8fafc; transition: 0.2s; }
.cl-item summary::-webkit-details-marker { display: none; }
.cl-item summary::after { content: '+'; position: absolute; right: 20px; top: 50%; transform: translateY(-50%); font-size: 1.5rem; color: #64748b; }
.cl-item[open] summary::after { content: '-'; }
.cl-item[open] summary { border-bottom: 1px solid #e2e8f0; }
.cl-content { padding: 20px; color: #475569; line-height: 1.6; background: #fff; }
.cl-content p { margin: 0; }`,
    jsCode: ``
  },

  // 2. Minimal Clean FAQ
  {
    _id: "faq2",
    title: "Minimal Clean FAQ",
    slug: "minimal-clean-faq",
    description: "Stripped back, elegant list of questions with no borders.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["faq", "minimal", "clean", "simple"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-mn-wrap">
  <div class="faq-mn">
    <h2>Questions.</h2>
    <div class="mn-list">
      <div class="mn-item">
        <h3>How does it work?</h3>
        <p>Copy the code, paste it into your project, and tweak the variables as needed.</p>
      </div>
      <div class="mn-item">
        <h3>Can I use it commercially?</h3>
        <p>Yes, all components are free to use in both personal and commercial projects.</p>
      </div>
      <div class="mn-item">
        <h3>Do you offer support?</h3>
        <p>Community support is available via Discord for all users. Premium users get priority email support.</p>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; }
.faq-mn-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
.faq-mn { width: 100%; max-width: 600px; }
.faq-mn h2 { font-size: 3rem; font-weight: 400; color: #111; margin: 0 0 50px; letter-spacing: -1px; }
.mn-list { display: flex; flex-direction: column; gap: 40px; }
.mn-item h3 { font-size: 1.2rem; font-weight: 500; color: #111; margin: 0 0 10px; }
.mn-item p { font-size: 1.05rem; color: #666; margin: 0; line-height: 1.6; }`,
    jsCode: ``
  },

  // 3. Cyberpunk FAQ
  {
    _id: "faq3",
    title: "Cyberpunk Terminal FAQ",
    slug: "cyberpunk-terminal-faq",
    description: "Hacker-themed knowledge base with neon borders.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["faq", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-cy-wrap">
  <div class="faq-cy">
    <h2>> KNOWLEDGE_BASE_v2.0</h2>
    <div class="cy-list">
      <details class="cy-item">
        <summary>> SYS.REQ?</summary>
        <div class="cy-content">
          <p>MODERN_BROWSER (HTML5/CSS3 SUPPORT). NO_JS_REQUIRED.</p>
        </div>
      </details>
      <details class="cy-item">
        <summary>> ENCRYPTION_LEVEL?</summary>
        <div class="cy-content">
          <p>NONE. OPEN_SOURCE_CODE. COPY_PASTE_READY.</p>
        </div>
      </details>
      <details class="cy-item">
        <summary>> CONNECTION_STATUS?</summary>
        <div class="cy-content">
          <p>SECURE. WAITING_FOR_INPUT...</p>
        </div>
      </details>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; color: #0f0; }
.faq-cy-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
.faq-cy { width: 100%; max-width: 700px; border: 2px solid #0f0; padding: 40px; background: rgba(0,20,0,0.8); box-shadow: 0 0 20px rgba(0,255,0,0.1); }
.faq-cy h2 { margin: 0 0 30px; font-size: 1.5rem; text-shadow: 0 0 5px #0f0; border-bottom: 1px dashed #0f0; padding-bottom: 10px; }
.cy-list { display: flex; flex-direction: column; gap: 15px; }
.cy-item summary { font-weight: bold; cursor: pointer; list-style: none; padding: 10px; background: #000; border: 1px solid #050; transition: 0.2s; }
.cy-item summary:hover { background: #050; }
.cy-item summary::-webkit-details-marker { display: none; }
.cy-item[open] summary { border-color: #0f0; background: #0a0a0a; }
.cy-content { padding: 15px 10px; color: #0aa; }
.cy-content p { margin: 0; }`,
    jsCode: ``
  },

  // 4. Glassmorphism FAQ
  {
    _id: "faq4",
    title: "Glassmorphism FAQ",
    slug: "glassmorphism-faq",
    description: "Frosted glass accordion floating over a gradient background.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["faq", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-gl-wrap">
  <div class="faq-gl">
    <h2>Help Center</h2>
    <div class="gl-list">
      <details class="gl-item" open>
        <summary>What is GlassUI?</summary>
        <div class="gl-content"><p>A premium set of glassmorphism components.</p></div>
      </details>
      <details class="gl-item">
        <summary>Is it responsive?</summary>
        <div class="gl-content"><p>Yes, all components are fully responsive and mobile-friendly.</p></div>
      </details>
      <details class="gl-item">
        <summary>How do I customize colors?</summary>
        <div class="gl-content"><p>Just edit the CSS gradient backgrounds and border variables.</p></div>
      </details>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.faq-gl-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.faq-gl { width: 100%; max-width: 600px; background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); padding: 40px; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); color: #fff; }
.faq-gl h2 { margin: 0 0 30px; font-size: 2rem; font-weight: 800; text-align: center; }
.gl-list { display: flex; flex-direction: column; gap: 15px; }
.gl-item { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; overflow: hidden; }
.gl-item summary { padding: 20px; cursor: pointer; font-weight: 600; list-style: none; transition: 0.2s; }
.gl-item summary::-webkit-details-marker { display: none; }
.gl-item summary:hover { background: rgba(255,255,255,0.1); }
.gl-content { padding: 20px; border-top: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.05); }
.gl-content p { margin: 0; opacity: 0.9; line-height: 1.5; }`,
    jsCode: ``
  },

  // 5. Brutalist FAQ
  {
    _id: "faq5",
    title: "Brutalist FAQ Block",
    slug: "brutalist-faq-block",
    description: "High contrast, structural FAQ section.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["faq", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-br-wrap">
  <div class="faq-br">
    <h2>WTF.</h2>
    <div class="br-list">
      <div class="br-item">
        <h3>IS THIS FREE?</h3>
        <p>YES. DO WHATEVER YOU WANT.</p>
      </div>
      <div class="br-item">
        <h3>DO I NEED REACT?</h3>
        <p>NO. IT'S JUST HTML AND CSS.</p>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.faq-br-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
.faq-br { background: #facc15; border: 6px solid #000; padding: 40px; box-shadow: 15px 15px 0 #000; width: 100%; max-width: 600px; }
.faq-br h2 { margin: 0 0 30px; font-size: 4rem; font-weight: 900; line-height: 1; color: #000; }
.br-list { display: flex; flex-direction: column; gap: 20px; }
.br-item { border: 4px solid #000; background: #fff; padding: 20px; }
.br-item h3 { margin: 0 0 10px; font-size: 1.5rem; font-weight: 900; }
.br-item p { margin: 0; font-weight: bold; font-size: 1.1rem; }`,
    jsCode: ``
  },

  // 6. Dark Mode Glow FAQ
  {
    _id: "faq6",
    title: "Dark Glow FAQ",
    slug: "dark-glow-faq",
    description: "Deep dark background with glowing borders on open items.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["faq", "dark", "glow", "cards"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-dg-wrap">
  <div class="faq-dg">
    <h2>Common Questions</h2>
    <div class="dg-list">
      <details class="dg-item" open>
        <summary>Are updates included?</summary>
        <div class="dg-content"><p>Yes, lifetime updates are included with your purchase.</p></div>
      </details>
      <details class="dg-item">
        <summary>What frameworks are supported?</summary>
        <div class="dg-content"><p>Any framework. We provide raw HTML and CSS.</p></div>
      </details>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; }
.faq-dg-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
.faq-dg { width: 100%; max-width: 600px; }
.faq-dg h2 { margin: 0 0 30px; font-size: 2rem; color: #f8fafc; text-align: center; }
.dg-list { display: flex; flex-direction: column; gap: 15px; }
.dg-item { background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; transition: 0.3s; }
.dg-item[open] { border-color: #3b82f6; box-shadow: 0 0 20px rgba(59,130,246,0.2); }
.dg-item summary { padding: 20px; cursor: pointer; font-weight: 500; color: #f8fafc; list-style: none; outline: none; }
.dg-item summary::-webkit-details-marker { display: none; }
.dg-content { padding: 0 20px 20px; color: #94a3b8; line-height: 1.6; }
.dg-content p { margin: 0; border-top: 1px solid #1e293b; padding-top: 20px; }`,
    jsCode: ``
  },

  // 7. Neumorphic FAQ
  {
    _id: "faq7",
    title: "Neumorphic Soft FAQ",
    slug: "neumorphic-soft-faq",
    description: "Soft UI accordion with embossed and inset states.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["faq", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-neu-wrap">
  <div class="faq-neu">
    <h2>Help Center</h2>
    <div class="neu-list">
      <details class="neu-item">
        <summary>How do I reset my password?</summary>
        <div class="neu-content"><p>Go to the login page and click 'Forgot Password'.</p></div>
      </details>
      <details class="neu-item">
        <summary>Where can I find my invoices?</summary>
        <div class="neu-content"><p>Invoices are available in your account settings under 'Billing'.</p></div>
      </details>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.faq-neu-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
.faq-neu { width: 100%; max-width: 600px; padding: 40px; background: #e0e5ec; border-radius: 30px; box-shadow: 16px 16px 32px rgba(163,177,198,0.6), -16px -16px 32px rgba(255,255,255,0.5); }
.faq-neu h2 { margin: 0 0 30px; color: #4a5568; text-align: center; font-size: 2rem; }
.neu-list { display: flex; flex-direction: column; gap: 20px; }
.neu-item { border-radius: 15px; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); overflow: hidden; transition: 0.3s; }
.neu-item[open] { box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); }
.neu-item summary { padding: 20px; cursor: pointer; font-weight: bold; color: #4a5568; list-style: none; outline: none; }
.neu-item summary::-webkit-details-marker { display: none; }
.neu-content { padding: 0 20px 20px; color: #718096; }
.neu-content p { margin: 0; padding-top: 15px; border-top: 1px solid rgba(163,177,198,0.2); }`,
    jsCode: ``
  },

  // 8. Side-by-Side FAQ
  {
    _id: "faq8",
    title: "Side-by-Side FAQ",
    slug: "side-by-side-faq",
    description: "Header on the left, accordion questions on the right.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["faq", "split", "layout", "clean"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-sp-wrap">
  <div class="faq-sp">
    <div class="sp-left">
      <h2>Got questions?</h2>
      <p>We've got answers. If you can't find what you're looking for, feel free to contact our support team.</p>
    </div>
    <div class="sp-right">
      <details class="sp-item">
        <summary>What is the refund policy?</summary>
        <p>We offer a 30-day money-back guarantee.</p>
      </details>
      <details class="sp-item">
        <summary>Do I need to renew my license?</summary>
        <p>No, it's a one-time purchase for lifetime access.</p>
      </details>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.faq-sp-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
.faq-sp { max-width: 1000px; width: 100%; display: grid; grid-template-columns: 1fr 2fr; gap: 60px; }
.sp-left h2 { font-size: 2.5rem; margin: 0 0 15px; color: #111; }
.sp-left p { color: #555; line-height: 1.6; font-size: 1.1rem; }
.sp-item { border-bottom: 1px solid #eaeaea; padding: 20px 0; }
.sp-item summary { font-weight: 600; font-size: 1.1rem; cursor: pointer; list-style: none; color: #111; }
.sp-item summary::-webkit-details-marker { display: none; }
.sp-item p { margin: 15px 0 0; color: #666; line-height: 1.5; }
@media (max-width: 768px) { .faq-sp { grid-template-columns: 1fr; gap: 40px; } }`,
    jsCode: ``
  },

  // 9. Grid FAQ
  {
    _id: "faq9",
    title: "Grid Layout FAQ",
    slug: "grid-layout-faq",
    description: "Two-column grid layout showing all questions and answers.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["faq", "grid", "open", "clean"],
    isPremium: true,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-gr-wrap">
  <div class="faq-gr">
    <h2>Frequently Asked Questions</h2>
    <div class="gr-grid">
      <div class="gr-item">
        <h3>How do I download the code?</h3>
        <p>Just click the copy button on any component and paste it into your editor.</p>
      </div>
      <div class="gr-item">
        <h3>Are there any dependencies?</h3>
        <p>Most components are built with vanilla HTML/CSS and require nothing else.</p>
      </div>
      <div class="gr-item">
        <h3>What if I find a bug?</h3>
        <p>Please open an issue on our GitHub repository and we'll fix it ASAP.</p>
      </div>
      <div class="gr-item">
        <h3>Can I request a component?</h3>
        <p>Yes, Premium users can request up to 3 custom components per month.</p>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.faq-gr-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 60px 20px; }
.faq-gr { max-width: 1000px; width: 100%; }
.faq-gr h2 { text-align: center; font-size: 2.5rem; margin: 0 0 50px; color: #0f172a; }
.gr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.gr-item h3 { margin: 0 0 10px; font-size: 1.2rem; color: #0f172a; }
.gr-item p { margin: 0; color: #64748b; line-height: 1.6; }
@media (max-width: 600px) { .gr-grid { grid-template-columns: 1fr; } }`,
    jsCode: ``
  },

  // 10. Floating Cards FAQ
  {
    _id: "faq10",
    title: "Floating Cards FAQ",
    slug: "floating-cards-faq",
    description: "Each question is an independent, floating card with a toggle.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["faq", "cards", "floating", "clean"],
    isPremium: false,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-fc-wrap">
  <div class="faq-fc">
    <h2>Got Questions?</h2>
    <div class="fc-list">
      <details class="fc-item">
        <summary>What is included in the Pro plan?</summary>
        <p>Access to all 1000+ components, lifetime updates, and priority support.</p>
      </details>
      <details class="fc-item">
        <summary>Can I use this for client work?</summary>
        <p>Yes, your license covers unlimited personal and commercial projects.</p>
      </details>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; }
.faq-fc-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
.faq-fc { width: 100%; max-width: 600px; }
.faq-fc h2 { text-align: center; font-size: 2rem; margin: 0 0 40px; color: #0f172a; }
.fc-list { display: flex; flex-direction: column; gap: 20px; }
.fc-item { background: #fff; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); padding: 25px; transition: 0.3s; }
.fc-item[open] { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); transform: translateY(-2px); }
.fc-item summary { font-weight: bold; font-size: 1.1rem; color: #0f172a; cursor: pointer; list-style: none; outline: none; }
.fc-item summary::-webkit-details-marker { display: none; }
.fc-item p { margin: 15px 0 0; color: #475569; line-height: 1.5; }`,
    jsCode: ``
  }
];
