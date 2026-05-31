import { Design } from "./designs-data";

export const BATCH_62_DESIGNS: Design[] = [
  // 1. Classic Bordered FAQ
  {
    _id: "fq1",
    title: "Classic Bordered FAQ",
    slug: "classic-bordered-faq",
    description: "Standard clean accordion using native details and summary tags.",
    category: "FAQs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["faq", "accordion", "classic", "bordered"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-cl-wrap">
  <h2>Frequently Asked Questions</h2>
  <details class="fq-cl" open>
    <summary>How does the 30-day trial work?</summary>
    <div class="fq-c-content">
      <p>You get full access to all premium features for 30 days. No credit card is required to sign up. If you choose not to upgrade, your account automatically downgrades to the free tier.</p>
    </div>
  </details>
  <details class="fq-cl">
    <summary>Can I cancel my subscription at any time?</summary>
    <div class="fq-c-content">
      <p>Yes, you can cancel your subscription from your account dashboard. You will continue to have access until the end of your current billing period.</p>
    </div>
  </details>
  <details class="fq-cl">
    <summary>Do you offer discounts for non-profits?</summary>
    <div class="fq-c-content">
      <p>Absolutely. We offer a 50% discount for registered non-profit organizations. Please contact our support team with your documentation to get started.</p>
    </div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 40px 20px; display: flex; justify-content: center; }
.fq-cl-wrap { max-width: 600px; width: 100%; }
.fq-cl-wrap h2 { margin: 0 0 30px; color: #0f172a; font-size: 1.8rem; text-align: center; }
.fq-cl { background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 15px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: 0.3s; }
.fq-cl summary { padding: 20px; font-weight: 600; color: #334155; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
.fq-cl summary::-webkit-details-marker { display: none; }
.fq-cl summary::after { content: '+'; font-size: 1.5rem; color: #94a3b8; transition: transform 0.3s; }
.fq-cl[open] summary::after { transform: rotate(45deg); color: #3b82f6; }
.fq-cl[open] summary { border-bottom: 1px solid #f1f5f9; color: #0f172a; }
.fq-c-content { padding: 20px; color: #64748b; line-height: 1.6; font-size: 0.95rem; }
.fq-c-content p { margin: 0; }`,
    jsCode: ``
  },

  // 2. Minimal Clean FAQ
  {
    _id: "fq2",
    title: "Minimal Clean FAQ",
    slug: "minimal-clean-faq",
    description: "No borders, just clean lines and elegant typography.",
    category: "FAQs",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["faq", "minimal", "clean", "accordion"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-mn-wrap">
  <details class="fq-mn" name="faq">
    <summary>Is there a setup fee?</summary>
    <p>No, there are absolutely no setup fees or hidden charges. The price you see is the price you pay.</p>
  </details>
  <details class="fq-mn" name="faq">
    <summary>What payment methods are accepted?</summary>
    <p>We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and wire transfers for annual enterprise plans.</p>
  </details>
  <details class="fq-mn" name="faq">
    <summary>Can I change my plan later?</summary>
    <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is pro-rated.</p>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; padding: 60px 20px; display: flex; justify-content: center; }
.fq-mn-wrap { max-width: 700px; width: 100%; }
.fq-mn { border-bottom: 1px solid #eaeaea; padding: 10px 0; }
.fq-mn summary { padding: 20px 0; font-size: 1.2rem; font-weight: 500; color: #111; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: 0.2s; }
.fq-mn summary::-webkit-details-marker { display: none; }
.fq-mn summary::after { content: '↓'; font-size: 1.2rem; color: #111; transition: transform 0.3s; }
.fq-mn[open] summary::after { transform: rotate(180deg); }
.fq-mn[open] summary { color: #666; }
.fq-mn p { padding: 0 0 20px 0; margin: 0; color: #555; line-height: 1.6; font-size: 1rem; }`,
    jsCode: ``
  },

  // 3. Cyberpunk FAQ
  {
    _id: "fq3",
    title: "Cyberpunk FAQ",
    slug: "cyberpunk-faq",
    description: "Neon lit, high tech accordion for gaming or developer sites.",
    category: "FAQs",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["faq", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-cy-wrap">
  <div class="cy-glitch">SYS_QUERY_DB</div>
  <details class="fq-cy">
    <summary>[Q1] WHAT IS THE UPLINK LIMIT?</summary>
    <p>Data streams are capped at 500 TB/s. Bypassing this limit will trigger automated ICE countermeasures.</p>
  </details>
  <details class="fq-cy">
    <summary>[Q2] ARE MY CREDENTIALS SECURE?</summary>
    <p>All nodes utilize quantum-resistant encryption. However, user negligence remains the primary vector for breaches.</p>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 50px 20px; display: flex; justify-content: center; }
.fq-cy-wrap { max-width: 600px; width: 100%; }
.cy-glitch { color: #0ff; font-size: 1.5rem; font-weight: bold; margin-bottom: 30px; letter-spacing: 3px; text-shadow: 2px 0 #f0f, -2px 0 #0ff; }
.fq-cy { background: rgba(0,0,0,0.8); border: 1px solid #0f0; margin-bottom: 20px; position: relative; }
.fq-cy::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #0f0; box-shadow: 0 0 10px #0f0; }
.fq-cy summary { padding: 15px 20px; color: #0f0; font-weight: bold; cursor: pointer; list-style: none; display: flex; justify-content: space-between; }
.fq-cy summary::-webkit-details-marker { display: none; }
.fq-cy summary::after { content: '[+]'; color: #0f0; }
.fq-cy[open] summary::after { content: '[-]'; color: #f0f; }
.fq-cy[open] summary { border-bottom: 1px dashed #0f0; color: #f0f; }
.fq-cy p { padding: 20px; margin: 0; color: #aaa; line-height: 1.5; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 4. Glassmorphism FAQ
  {
    _id: "fq4",
    title: "Glassmorphism FAQ",
    slug: "glassmorphism-faq",
    description: "Frosted glass aesthetic resting over a vibrant background.",
    category: "FAQs",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["faq", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="fq-gl-wrap">
    <h2 class="gl-title">Support</h2>
    <details class="fq-gl">
      <summary>Where can I find my API key?</summary>
      <p>Navigate to Settings > Developer Settings. Your API key will be hidden by default until you click the reveal button.</p>
    </details>
    <details class="fq-gl">
      <summary>How do I invite team members?</summary>
      <p>Go to the Team tab and click 'Invite Member'. They will receive an email with a secure link to join your workspace.</p>
    </details>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; padding: 60px 20px; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.fq-gl-wrap { max-width: 600px; width: 100%; }
.gl-title { color: #fff; text-align: center; margin-bottom: 30px; font-size: 2rem; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.fq-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 12px; margin-bottom: 15px; color: #fff; overflow: hidden; }
.fq-gl summary { padding: 20px; font-weight: 600; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
.fq-gl summary::-webkit-details-marker { display: none; }
.fq-gl summary::after { content: '▾'; font-size: 1.5rem; transition: transform 0.3s; }
.fq-gl[open] summary::after { transform: rotate(180deg); }
.fq-gl[open] summary { background: rgba(255,255,255,0.05); }
.fq-gl p { padding: 20px; margin: 0; color: rgba(255,255,255,0.9); line-height: 1.6; border-top: 1px solid rgba(255,255,255,0.1); }`,
    jsCode: ``
  },

  // 5. Brutalist FAQ
  {
    _id: "fq5",
    title: "Brutalist FAQ",
    slug: "brutalist-faq",
    description: "Thick borders, harsh shadows, and bold typography.",
    category: "FAQs",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["faq", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-br-wrap">
  <div class="br-header">RULES</div>
  <details class="fq-br">
    <summary>WHAT IS THE RETURN POLICY?</summary>
    <p>30 DAYS NO QUESTIONS ASKED. MUST BE IN ORIGINAL PACKAGING.</p>
  </details>
  <details class="fq-br">
    <summary>DO YOU SHIP INTERNATIONALLY?</summary>
    <p>YES. SHIPPING RATES ARE CALCULATED AT CHECKOUT BASED ON WEIGHT AND DESTINATION.</p>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 60px 20px; display: flex; justify-content: center; }
.fq-br-wrap { max-width: 600px; width: 100%; }
.br-header { font-size: 3rem; font-weight: 900; color: #000; letter-spacing: -2px; margin-bottom: 20px; border-bottom: 8px solid #ec4899; display: inline-block; }
.fq-br { background: #fff; border: 4px solid #000; box-shadow: 6px 6px 0 #000; margin-bottom: 20px; transition: transform 0.1s; }
.fq-br:active { transform: translate(2px, 2px); box-shadow: 4px 4px 0 #000; }
.fq-br summary { padding: 20px; font-weight: 900; font-size: 1.1rem; color: #000; cursor: pointer; list-style: none; text-transform: uppercase; display: flex; justify-content: space-between; align-items: center; background: #facc15; }
.fq-br summary::-webkit-details-marker { display: none; }
.fq-br summary::after { content: '►'; font-size: 1.2rem; transition: transform 0.2s; }
.fq-br[open] summary::after { transform: rotate(90deg); }
.fq-br[open] summary { border-bottom: 4px solid #000; }
.fq-br p { padding: 20px; margin: 0; font-weight: 700; color: #333; font-size: 1rem; line-height: 1.4; }`,
    jsCode: ``
  },

  // 6. Neumorphic FAQ
  {
    _id: "fq6",
    title: "Neumorphic FAQ",
    slug: "neumorphic-faq",
    description: "Soft UI design matching neumorphic application backgrounds.",
    category: "FAQs",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["faq", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-neu-wrap">
  <h2>Help Center</h2>
  <details class="fq-neu">
    <summary>How do I reset my password?</summary>
    <p>Click 'Forgot Password' on the login screen. We will send a secure reset link to your registered email address.</p>
  </details>
  <details class="fq-neu">
    <summary>Can I delete my account?</summary>
    <p>Yes. Go to Settings > Privacy > Danger Zone to permanently delete your account and all associated data.</p>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 60px 20px; display: flex; justify-content: center; }
.fq-neu-wrap { max-width: 600px; width: 100%; text-align: center; }
.fq-neu-wrap h2 { margin: 0 0 30px; color: #2d3748; font-weight: bold; font-size: 1.8rem; }
.fq-neu { background: #e0e5ec; border-radius: 16px; margin-bottom: 25px; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); text-align: left; overflow: hidden; }
.fq-neu summary { padding: 20px 25px; color: #4a5568; font-weight: bold; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: 0.2s; }
.fq-neu summary::-webkit-details-marker { display: none; }
.fq-neu summary::after { content: '+'; font-size: 1.5rem; color: #3182ce; transition: transform 0.3s; }
.fq-neu[open] summary::after { transform: rotate(45deg); }
.fq-neu[open] summary { box-shadow: inset 0 -2px 5px rgba(163,177,198,0.3); }
.fq-neu p { padding: 25px; margin: 0; color: #718096; line-height: 1.6; font-size: 0.95rem; background: #e6ecf2; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.4); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow FAQ
  {
    _id: "fq7",
    title: "Dark Mode Glow FAQ",
    slug: "dark-mode-glow-faq",
    description: "Deep dark accordions with subtle glowing borders.",
    category: "FAQs",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["faq", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-dg-wrap">
  <h2>Common Queries</h2>
  <details class="fq-dg">
    <summary>Do you support TypeScript?</summary>
    <div class="fq-d-content">
      <p>Yes, all our components are fully typed and we provide a comprehensive declarations file in the root directory.</p>
    </div>
  </details>
  <details class="fq-dg">
    <summary>What frameworks are compatible?</summary>
    <div class="fq-d-content">
      <p>Because the components rely solely on semantic HTML and vanilla CSS, they work seamlessly in React, Vue, Angular, Svelte, or plain HTML projects.</p>
    </div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 60px 20px; display: flex; justify-content: center; }
.fq-dg-wrap { max-width: 600px; width: 100%; }
.fq-dg-wrap h2 { margin: 0 0 30px; color: #f8fafc; font-size: 1.8rem; text-align: center; }
.fq-dg { background: #0f172a; border-radius: 12px; margin-bottom: 20px; position: relative; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }
.fq-dg::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: linear-gradient(to bottom, #3b82f6, #ec4899); opacity: 0.5; transition: 0.3s; }
.fq-dg:hover::before { opacity: 1; box-shadow: 0 0 10px #3b82f6; }
.fq-dg summary { padding: 20px 25px; color: #e2e8f0; font-weight: 600; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
.fq-dg summary::-webkit-details-marker { display: none; }
.fq-dg summary::after { content: '›'; font-size: 1.8rem; color: #94a3b8; transition: transform 0.3s; line-height: 1; }
.fq-dg[open] summary::after { transform: rotate(90deg); color: #3b82f6; }
.fq-d-content { padding: 0 25px 25px; color: #94a3b8; line-height: 1.6; font-size: 0.95rem; }
.fq-d-content p { margin: 0; padding-top: 10px; border-top: 1px solid #1e293b; }`,
    jsCode: ``
  },

  // 8. Side-by-Side FAQ
  {
    _id: "fq8",
    title: "Grid Layout FAQ",
    slug: "grid-layout-faq",
    description: "Two-column grid layout perfect for desktop views.",
    category: "FAQs",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["faq", "grid", "columns", "clean"],
    isPremium: false,
    views: 33400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-gd">
  <div class="fq-g-item">
    <h3>Is there a free trial?</h3>
    <p>Yes, we offer a 14-day free trial on all plans. No credit card required.</p>
  </div>
  <div class="fq-g-item">
    <h3>Can I cancel anytime?</h3>
    <p>Absolutely. You can downgrade or cancel your subscription from your dashboard instantly.</p>
  </div>
  <div class="fq-g-item">
    <h3>How does support work?</h3>
    <p>Pro users get priority email support. Enterprise users have access to a dedicated slack channel.</p>
  </div>
  <div class="fq-g-item">
    <h3>Do you offer refunds?</h3>
    <p>If you're unhappy with the product, contact us within 30 days of purchase for a full refund.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 60px 20px; display: flex; justify-content: center; }
.fq-gd { max-width: 1000px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
.fq-g-item h3 { margin: 0 0 10px; color: #111; font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 10px; }
.fq-g-item h3::before { content: ''; display: block; width: 8px; height: 8px; background: #3b82f6; border-radius: 50%; }
.fq-g-item p { margin: 0; color: #555; line-height: 1.6; font-size: 1rem; padding-left: 18px; }
@media (max-width: 768px) { .fq-gd { grid-template-columns: 1fr; gap: 30px; } }`,
    jsCode: ``
  },

  // 9. Floating Box FAQ
  {
    _id: "fq9",
    title: "Floating Box FAQ",
    slug: "floating-box-faq",
    description: "Accordion items styled as distinct, floating cards with drop shadows.",
    category: "FAQs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["faq", "floating", "cards", "shadow"],
    isPremium: false,
    views: 29100,
    downloads: 7700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-fl-wrap">
  <details class="fq-fl">
    <summary>Where is my data stored?</summary>
    <p>All data is encrypted at rest and stored in secure AWS data centers located in the US-East (N. Virginia) region.</p>
  </details>
  <details class="fq-fl">
    <summary>Is the application GDPR compliant?</summary>
    <p>Yes. We provide comprehensive data export tools and support right-to-be-forgotten requests automatically.</p>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 60px 20px; display: flex; justify-content: center; }
.fq-fl-wrap { max-width: 600px; width: 100%; }
.fq-fl { background: #fff; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); transition: 0.3s; }
.fq-fl:hover { transform: translateY(-3px); box-shadow: 0 15px 25px -5px rgba(0,0,0,0.1); }
.fq-fl summary { padding: 25px; font-weight: 700; color: #0f172a; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
.fq-fl summary::-webkit-details-marker { display: none; }
.fq-fl summary::after { content: '⌃'; font-size: 1.2rem; transition: transform 0.3s; transform: rotate(180deg); color: #94a3b8; }
.fq-fl[open] summary::after { transform: rotate(0deg); color: #3b82f6; }
.fq-fl p { padding: 0 25px 25px; margin: 0; color: #64748b; line-height: 1.6; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 10. Left Icon FAQ
  {
    _id: "fq10",
    title: "Left Icon FAQ",
    slug: "left-icon-faq",
    description: "Accordion where the toggle icon sits to the left of the question text.",
    category: "FAQs",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["faq", "icon-left", "accordion", "clean"],
    isPremium: true,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-li-wrap">
  <details class="fq-li" open>
    <summary>Do I need coding experience?</summary>
    <p>No prior coding experience is required to use our visual builder, though advanced users can inject custom CSS.</p>
  </details>
  <details class="fq-li">
    <summary>Can I export my project?</summary>
    <p>Yes, you can export your entire project as a clean, production-ready React codebase or vanilla HTML/CSS.</p>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 60px 20px; display: flex; justify-content: center; }
.fq-li-wrap { max-width: 600px; width: 100%; border-top: 2px solid #0f172a; }
.fq-li { border-bottom: 1px solid #e2e8f0; }
.fq-li summary { padding: 25px 0; font-size: 1.1rem; font-weight: 600; color: #0f172a; cursor: pointer; list-style: none; display: flex; align-items: center; gap: 15px; }
.fq-li summary::-webkit-details-marker { display: none; }
.fq-li summary::before { content: '+'; display: flex; justify-content: center; align-items: center; width: 24px; height: 24px; border-radius: 50%; border: 2px solid #cbd5e1; color: #64748b; font-size: 1.2rem; transition: 0.2s; }
.fq-li[open] summary::before { content: '−'; background: #0f172a; border-color: #0f172a; color: #fff; }
.fq-li p { padding: 0 0 25px 43px; margin: 0; color: #475569; line-height: 1.6; }`,
    jsCode: ``
  }
];
