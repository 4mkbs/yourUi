import { Design } from "./designs-data";

export const BATCH_80_DESIGNS: Design[] = [
  // 1. Classic Accordion FAQ
  {
    _id: "faq1",
    title: "Classic Accordion FAQ",
    slug: "classic-accordion-faq",
    description: "Standard details/summary HTML accordion, no JS required.",
    category: "FAQ Sections",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["faq", "accordion", "classic", "help"],
    isPremium: false,
    views: 52100,
    downloads: 14200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-cl">
  <h2>Frequently Asked Questions</h2>
  <div class="faq-c-list">
    <details class="faq-c-item">
      <summary>Is this component library completely free?</summary>
      <div class="faq-c-ans">Yes! The standard components are 100% free and open-source. We do offer a premium tier for advanced, highly-complex components.</div>
    </details>
    <details class="faq-c-item">
      <summary>Do I need a specific framework?</summary>
      <div class="faq-c-ans">No. All our designs are pure HTML and CSS. You can drop them into React, Vue, Angular, or a plain HTML file.</div>
    </details>
    <details class="faq-c-item">
      <summary>Can I use these in commercial projects?</summary>
      <div class="faq-c-ans">Absolutely. You can use them for personal projects, client work, and commercial SaaS applications without any attribution required.</div>
    </details>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 80px 20px; display: flex; justify-content: center; }
.faq-cl { max-width: 800px; width: 100%; }
.faq-cl h2 { text-align: center; color: #0f172a; font-size: 2.5rem; margin: 0 0 40px; }
.faq-c-list { display: flex; flex-direction: column; gap: 15px; }
.faq-c-item { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
.faq-c-item summary { padding: 20px; font-size: 1.1rem; font-weight: 600; color: #1e293b; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: 0.2s; }
.faq-c-item summary::-webkit-details-marker { display: none; }
.faq-c-item summary::after { content: '+'; font-size: 1.5rem; color: #64748b; transition: 0.3s; }
.faq-c-item[open] summary::after { content: '−'; transform: rotate(180deg); color: #3b82f6; }
.faq-c-item[open] summary { background: #f8fafc; color: #3b82f6; }
.faq-c-ans { padding: 0 20px 20px; color: #475569; line-height: 1.6; border-top: 1px solid transparent; animation: slideDown 0.3s ease-out forwards; }
@keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }`,
    jsCode: ``
  },

  // 2. Minimal Clean FAQ
  {
    _id: "faq2",
    title: "Minimal Clean FAQ",
    slug: "minimal-clean-faq",
    description: "Simple list of questions and answers, no expanding needed.",
    category: "FAQ Sections",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["faq", "minimal", "clean", "list"],
    isPremium: false,
    views: 39500,
    downloads: 11000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-mn">
  <h2>Questions & Answers</h2>
  <div class="mn-item">
    <h3>How do I install the library?</h3>
    <p>There is no installation. Just copy the HTML and CSS snippets directly into your project files.</p>
  </div>
  <div class="mn-item">
    <h3>Do you support dark mode?</h3>
    <p>Many of our components come with dedicated dark mode variants. For others, you can easily tweak the CSS color variables.</p>
  </div>
  <div class="mn-item">
    <h3>Is JavaScript required?</h3>
    <p>95% of our components run entirely on CSS. JavaScript is only provided for specific interactive elements like complex sliders.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.faq-mn { max-width: 600px; width: 100%; }
.faq-mn h2 { font-size: 2.5rem; color: #111; margin: 0 0 50px; letter-spacing: -1px; }
.mn-item { margin-bottom: 40px; }
.mn-item h3 { font-size: 1.2rem; color: #111; margin: 0 0 10px; font-weight: 600; }
.mn-item p { color: #666; line-height: 1.6; margin: 0; font-size: 1.05rem; }`,
    jsCode: ``
  },

  // 3. Cyberpunk FAQ Terminal
  {
    _id: "faq3",
    title: "Cyberpunk FAQ",
    slug: "cyberpunk-faq",
    description: "Hacker-themed knowledge base with neon terminal styling.",
    category: "FAQ Sections",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["faq", "cyberpunk", "terminal", "neon"],
    isPremium: true,
    views: 34100,
    downloads: 8900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-cy">
  <div class="cy-head">KNOWLEDGE_BASE // QUERY_LOG</div>
  
  <div class="cy-q">> QUERY: SYSTEM_REQUIREMENTS?</div>
  <div class="cy-a">RESP: STANDARD HTML5/CSS3 COMPATIBLE BROWSER. NO EXTERNAL DEPENDENCIES DETECTED.</div>
  
  <div class="cy-q">> QUERY: ENCRYPTION_LEVEL?</div>
  <div class="cy-a">RESP: STYLES ARE DEPLOYED IN PLAIN TEXT. NO ENCRYPTION REQUIRED FOR UI RENDERING.</div>
  
  <div class="cy-q">> QUERY: UPLINK_STATUS?</div>
  <div class="cy-a">RESP: READY TO COPY_PASTE INTO MAINFRAME.</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 80px 20px; display: flex; justify-content: center; }
.faq-cy { background: rgba(0,20,0,0.8); border: 1px solid #0f0; max-width: 800px; width: 100%; padding: 30px; box-shadow: inset 0 0 20px rgba(0,255,0,0.1); }
.cy-head { color: #0f0; font-weight: bold; border-bottom: 2px dashed #0f0; padding-bottom: 15px; margin-bottom: 30px; letter-spacing: 2px; text-shadow: 0 0 5px #0f0; }
.cy-q { color: #f0f; font-weight: bold; font-size: 1.1rem; margin-bottom: 10px; text-shadow: 0 0 2px #f0f; }
.cy-a { color: #0aa; font-size: 1rem; margin-bottom: 30px; padding-left: 20px; border-left: 2px solid #055; line-height: 1.5; }`,
    jsCode: ``
  },

  // 4. Glassmorphism FAQ Cards
  {
    _id: "faq4",
    title: "Glassmorphism FAQ",
    slug: "glassmorphism-faq",
    description: "Frosted glass expandable cards hovering over a gradient.",
    category: "FAQ Sections",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["faq", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 48500,
    downloads: 14100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="faq-gl">
    <h2 class="gl-title">Have Questions?</h2>
    
    <details class="gl-item">
      <summary>How do I customize the colors?</summary>
      <div class="gl-ans">Every component uses standard CSS. You can easily modify hex codes, RGBA values, or replace them with your own CSS variables.</div>
    </details>
    
    <details class="gl-item">
      <summary>Is it mobile responsive?</summary>
      <div class="gl-ans">Yes, all components are built with mobile-first media queries to ensure they look great on all devices.</div>
    </details>
    
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.faq-gl { max-width: 700px; width: 100%; }
.gl-title { color: #fff; text-align: center; font-size: 2.5rem; margin: 0 0 40px; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.gl-item { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; margin-bottom: 20px; color: #fff; overflow: hidden; }
.gl-item summary { padding: 20px 25px; font-size: 1.1rem; font-weight: 600; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
.gl-item summary::-webkit-details-marker { display: none; }
.gl-item summary::after { content: '▾'; font-size: 1.5rem; transition: 0.3s; }
.gl-item[open] summary::after { transform: rotate(180deg); }
.gl-item[open] summary { background: rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.1); }
.gl-ans { padding: 20px 25px; line-height: 1.6; opacity: 0.9; }`,
    jsCode: ``
  },

  // 5. Brutalist Bold FAQ
  {
    _id: "faq5",
    title: "Brutalist FAQ",
    slug: "brutalist-faq",
    description: "Loud, high-contrast brutalist design for Q&A.",
    category: "FAQ Sections",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["faq", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 31200,
    downloads: 7400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-br">
  <h2>READ THIS NOW</h2>
  
  <div class="br-qa">
    <div class="br-q">WHAT IS THIS?</div>
    <div class="br-a">IT IS HTML AND CSS. YOU COPY IT. YOU PASTE IT. IT WORKS.</div>
  </div>
  
  <div class="br-qa">
    <div class="br-q">DO I NEED REACT?</div>
    <div class="br-a">NO. IT IS JUST TEXT. USE WHATEVER YOU WANT.</div>
  </div>
  
  <div class="br-qa">
    <div class="br-q">IS IT FREE?</div>
    <div class="br-a">YES. TAKE IT. BUILD COOL STUFF.</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.faq-br { max-width: 800px; width: 100%; background: #facc15; border: 8px solid #000; padding: 40px; box-shadow: 15px 15px 0 #000; }
.faq-br h2 { font-size: 4rem; font-weight: 900; margin: 0 0 40px; text-transform: uppercase; border-bottom: 8px solid #000; padding-bottom: 10px; line-height: 1; letter-spacing: -2px; }
.br-qa { margin-bottom: 30px; border: 4px solid #000; background: #fff; padding: 20px; transition: 0.1s; box-shadow: 4px 4px 0 #000; }
.br-qa:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 #000; }
.br-q { font-size: 1.8rem; font-weight: 900; margin-bottom: 10px; color: #000; }
.br-a { font-size: 1.2rem; font-weight: 700; color: #444; }`,
    jsCode: ``
  },

  // 6. Neumorphic Expandable FAQ
  {
    _id: "faq6",
    title: "Neumorphic FAQ",
    slug: "neumorphic-faq",
    description: "Soft UI design with inset and extruded accordion states.",
    category: "FAQ Sections",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["faq", "neumorphism", "soft", "accordion"],
    isPremium: false,
    views: 35100,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-neu">
  <h2>Help Center</h2>
  
  <details class="neu-item">
    <summary>How do I get support?</summary>
    <div class="neu-ans">Reach out via Twitter or email. We usually respond within 24 hours.</div>
  </details>
  
  <details class="neu-item">
    <summary>Can I request a component?</summary>
    <div class="neu-ans">Yes, open an issue on our GitHub repository and we will consider adding it to the next batch.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.faq-neu { max-width: 600px; width: 100%; text-align: center; }
.faq-neu h2 { color: #4a5568; font-size: 2.5rem; margin: 0 0 40px; }
.neu-item { margin-bottom: 20px; border-radius: 15px; overflow: hidden; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); }
.neu-item summary { padding: 20px; font-size: 1.1rem; color: #2d3748; font-weight: bold; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: 0.2s; }
.neu-item summary::-webkit-details-marker { display: none; }
.neu-item summary::after { content: '+'; font-size: 1.5rem; color: #718096; }
.neu-item[open] { box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); }
.neu-item[open] summary { color: #3182ce; }
.neu-item[open] summary::after { content: '−'; color: #3182ce; }
.neu-ans { padding: 0 20px 20px; color: #718096; line-height: 1.6; text-align: left; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow FAQ
  {
    _id: "faq7",
    title: "Dark Mode Glow FAQ",
    slug: "dark-mode-glow-faq",
    description: "Deep dark layout with glowing neon edge accents.",
    category: "FAQ Sections",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["faq", "dark", "glow", "gradient"],
    isPremium: true,
    views: 43200,
    downloads: 12200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-dg">
  <h2>FAQs</h2>
  
  <details class="dg-item">
    <summary>Do you offer refunds?</summary>
    <div class="dg-ans">Yes, we have a 14-day money-back guarantee if you are not satisfied with the premium components.</div>
  </details>
  
  <details class="dg-item">
    <summary>How frequently is this updated?</summary>
    <div class="dg-ans">We push new component batches every week, expanding the library continuously.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.faq-dg { max-width: 800px; width: 100%; }
.faq-dg h2 { color: #f8fafc; text-align: center; font-size: 3rem; margin: 0 0 50px; text-shadow: 0 0 20px rgba(139,92,246,0.5); }
.dg-item { background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; margin-bottom: 20px; overflow: hidden; position: relative; }
.dg-item::before { content: ''; position: absolute; left: 0; top: 0; width: 3px; height: 100%; background: linear-gradient(180deg, #3b82f6, #8b5cf6); opacity: 0; transition: 0.3s; }
.dg-item:hover::before, .dg-item[open]::before { opacity: 1; box-shadow: 0 0 10px rgba(139,92,246,0.8); }
.dg-item summary { padding: 25px; color: #cbd5e1; font-size: 1.1rem; font-weight: 500; cursor: pointer; list-style: none; display: flex; justify-content: space-between; transition: 0.3s; }
.dg-item summary::-webkit-details-marker { display: none; }
.dg-item summary::after { content: '▾'; transition: 0.3s; }
.dg-item[open] summary { color: #fff; border-bottom: 1px solid #1e293b; }
.dg-item[open] summary::after { transform: rotate(180deg); color: #8b5cf6; }
.dg-ans { padding: 25px; color: #94a3b8; line-height: 1.6; }`,
    jsCode: ``
  },

  // 8. Split Layout FAQ
  {
    _id: "faq8",
    title: "Split Layout FAQ",
    slug: "split-layout-faq",
    description: "Categories or context on the left, questions on the right.",
    category: "FAQ Sections",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["faq", "split", "layout", "classic"],
    isPremium: false,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-sp">
  <div class="sp-left">
    <h2>Support & Billing</h2>
    <p>Everything you need to know about managing your premium account.</p>
    <a href="#">Contact Support ➔</a>
  </div>
  <div class="sp-right">
    <div class="sp-item">
      <h3>How do I cancel my subscription?</h3>
      <p>You can cancel anytime from your account settings page. Access will remain until the end of your billing cycle.</p>
    </div>
    <div class="sp-item">
      <h3>Can I upgrade later?</h3>
      <p>Yes, upgrading is pro-rated. You only pay the difference for the remainder of your billing period.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.faq-sp { display: flex; max-width: 1000px; width: 100%; gap: 60px; background: #fff; padding: 50px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.sp-left { flex: 1; }
.sp-left h2 { margin: 0 0 15px; font-size: 2.5rem; color: #0f172a; }
.sp-left p { color: #64748b; font-size: 1.1rem; line-height: 1.6; margin: 0 0 30px; }
.sp-left a { color: #3b82f6; font-weight: 600; text-decoration: none; }
.sp-right { flex: 1.5; display: flex; flex-direction: column; gap: 40px; }
.sp-item h3 { margin: 0 0 10px; font-size: 1.2rem; color: #1e293b; }
.sp-item p { margin: 0; color: #475569; line-height: 1.6; }
@media (max-width: 768px) { .faq-sp { flex-direction: column; padding: 30px; } }`,
    jsCode: ``
  },

  // 9. Grid FAQ
  {
    _id: "faq9",
    title: "Grid FAQ",
    slug: "grid-faq",
    description: "Questions laid out in a multi-column grid instead of a list.",
    category: "FAQ Sections",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["faq", "grid", "masonry", "clean"],
    isPremium: false,
    views: 38800,
    downloads: 10600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-gr">
  <div class="gr-head">
    <h2>Common Questions</h2>
  </div>
  <div class="gr-grid">
    <div class="gr-card">
      <h3>Is this library scalable?</h3>
      <p>Yes. The CSS is modular and designed not to conflict with existing styles in your application.</p>
    </div>
    <div class="gr-card">
      <h3>Can I use Tailwind with this?</h3>
      <p>You can! Though these components use standard CSS, you can easily convert the classes to Tailwind utility classes.</p>
    </div>
    <div class="gr-card">
      <h3>What about accessibility?</h3>
      <p>We use semantic HTML tags (nav, article, section, details) to ensure baseline accessibility for all components.</p>
    </div>
    <div class="gr-card">
      <h3>How do animations work?</h3>
      <p>Animations are handled purely via CSS transitions and keyframes, ensuring high performance.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.faq-gr { max-width: 1200px; width: 100%; }
.gr-head { text-align: center; margin-bottom: 60px; }
.gr-head h2 { font-size: 3rem; color: #111; margin: 0; }
.gr-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
.gr-card { background: #f8fafc; padding: 30px; border-radius: 16px; }
.gr-card h3 { margin: 0 0 15px; font-size: 1.2rem; color: #0f172a; }
.gr-card p { margin: 0; color: #475569; line-height: 1.6; }`,
    jsCode: ``
  },

  // 10. Floating Popup FAQ
  {
    _id: "faq10",
    title: "Floating Popup FAQ",
    slug: "floating-popup-faq",
    description: "Hover over the question icon to reveal the answer in a tooltip.",
    category: "FAQ Sections",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["faq", "tooltip", "hover", "interactive"],
    isPremium: true,
    views: 37400,
    downloads: 9500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-fp">
  <h2>Quick Answers</h2>
  <div class="fp-list">
    <div class="fp-item">
      <span>What is YourUI?</span>
      <div class="fp-icon">?
        <div class="fp-tooltip">A collection of framework-agnostic UI components built with HTML and CSS.</div>
      </div>
    </div>
    <div class="fp-item">
      <span>Who is it for?</span>
      <div class="fp-icon">?
        <div class="fp-tooltip">Developers who want premium designs without being locked into a specific JS framework.</div>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 100px 20px; display: flex; justify-content: center; }
.faq-fp { max-width: 500px; width: 100%; background: #fff; padding: 40px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
.faq-fp h2 { margin: 0 0 30px; color: #0f172a; text-align: center; }
.fp-list { display: flex; flex-direction: column; gap: 20px; }
.fp-item { display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; }
.fp-item span { font-weight: 500; color: #1e293b; }
.fp-icon { width: 30px; height: 30px; background: #e2e8f0; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-weight: bold; color: #475569; cursor: help; position: relative; transition: 0.2s; }
.fp-icon:hover { background: #3b82f6; color: #fff; }
.fp-tooltip { position: absolute; bottom: 130%; left: 50%; transform: translateX(-50%) translateY(10px); background: #0f172a; color: #fff; padding: 15px; border-radius: 8px; width: 250px; text-align: center; font-size: 0.9rem; font-weight: normal; line-height: 1.5; opacity: 0; visibility: hidden; transition: 0.3s; pointer-events: none; }
.fp-tooltip::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border-width: 6px; border-style: solid; border-color: #0f172a transparent transparent transparent; }
.fp-icon:hover .fp-tooltip { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }`,
    jsCode: ``
  }
];
