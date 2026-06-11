import { Design } from "./designs-data";

export const BATCH_71_DESIGNS: Design[] = [
  // 1. Classic Bordered Accordion
  {
    _id: "fq1",
    title: "Classic Bordered Accordion",
    slug: "classic-bordered-accordion",
    description: "Standard FAQ accordion using native HTML details tag with clean borders and transitions.",
    category: "FAQ Accordions",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["faq", "accordion", "classic", "clean"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-cl">
  <h2>Frequently Asked Questions</h2>
  <details class="fq-c-item" name="faq">
    <summary class="fq-c-sum">How do I integrate these components? <span class="icon">+</span></summary>
    <div class="fq-c-content">Simply copy the HTML and CSS provided for each component and paste it into your project. There are no external dependencies or frameworks required.</div>
  </details>
  <details class="fq-c-item" name="faq">
    <summary class="fq-c-sum">Can I use this for commercial projects? <span class="icon">+</span></summary>
    <div class="fq-c-content">Yes, all components are free to use for both personal and commercial projects under the MIT license.</div>
  </details>
  <details class="fq-c-item" name="faq">
    <summary class="fq-c-sum">Do I need a CSS framework? <span class="icon">+</span></summary>
    <div class="fq-c-content">No, every component is built with pure, vanilla CSS to ensure maximum compatibility and zero bloat.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 60px 20px; display: flex; justify-content: center; }
.fq-cl { max-width: 800px; width: 100%; }
.fq-cl h2 { text-align: center; color: #0f172a; margin-bottom: 40px; font-size: 2rem; }
.fq-c-item { background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 15px; overflow: hidden; transition: 0.3s; }
.fq-c-sum { padding: 20px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 600; color: #1e293b; list-style: none; user-select: none; }
.fq-c-sum::-webkit-details-marker { display: none; }
.fq-c-sum .icon { font-size: 1.5rem; color: #3b82f6; transition: 0.3s; font-weight: 400; }
.fq-c-item[open] { border-color: #3b82f6; box-shadow: 0 4px 6px -1px rgba(59,130,246,0.1); }
.fq-c-item[open] .fq-c-sum .icon { transform: rotate(45deg); color: #ef4444; }
.fq-c-content { padding: 0 20px 20px; color: #64748b; line-height: 1.6; border-top: 1px solid #f1f5f9; margin-top: 10px; padding-top: 15px; }`,
    jsCode: ``
  },

  // 2. Minimal Clean Accordion
  {
    _id: "fq2",
    title: "Minimal Clean Accordion",
    slug: "minimal-clean-accordion",
    description: "Distraction-free FAQ list with only bottom borders and elegant typography.",
    category: "FAQ Accordions",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["faq", "minimal", "clean", "typography"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-mn">
  <details class="fq-m-item" name="faq2">
    <summary class="fq-m-sum">What is your return policy?</summary>
    <div class="fq-m-content">We offer a 30-day money-back guarantee. No questions asked.</div>
  </details>
  <details class="fq-m-item" name="faq2">
    <summary class="fq-m-sum">How long does shipping take?</summary>
    <div class="fq-m-content">Domestic shipping takes 3-5 business days. International shipping varies by location.</div>
  </details>
  <details class="fq-m-item" name="faq2">
    <summary class="fq-m-sum">Do you offer custom designs?</summary>
    <div class="fq-m-content">Yes, please contact our support team to discuss enterprise custom solutions.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; padding: 80px 20px; display: flex; justify-content: center; }
.fq-mn { max-width: 700px; width: 100%; }
.fq-m-item { border-bottom: 1px solid #eaeaea; }
.fq-m-sum { padding: 25px 0; cursor: pointer; font-size: 1.2rem; font-weight: 500; color: #111; list-style: none; user-select: none; position: relative; transition: 0.2s; }
.fq-m-sum::-webkit-details-marker { display: none; }
.fq-m-sum::after { content: '+'; position: absolute; right: 0; top: 50%; transform: translateY(-50%); font-size: 1.5rem; color: #999; transition: 0.3s; }
.fq-m-sum:hover { color: #666; }
.fq-m-item[open] .fq-m-sum::after { content: '−'; color: #111; }
.fq-m-content { padding: 0 0 25px 0; color: #666; font-size: 1.05rem; line-height: 1.6; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Accordion
  {
    _id: "fq3",
    title: "Cyberpunk Accordion",
    slug: "cyberpunk-accordion",
    description: "Terminal-style FAQ for hacker or gaming aesthetics.",
    category: "FAQ Accordions",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["faq", "cyberpunk", "hacker", "neon"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-cy">
  <div class="cy-head">SYSTEM_QUERY_LOG</div>
  <details class="cy-item">
    <summary class="cy-sum">> WHAT_IS_THE_MATRIX?</summary>
    <div class="cy-content">Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.</div>
  </details>
  <details class="cy-item">
    <summary class="cy-sum">> HOW_TO_JACK_IN?</summary>
    <div class="cy-content">Locate the nearest hardline. Ensure your operator is ready before initiating the sequence.</div>
  </details>
  <details class="cy-item">
    <summary class="cy-sum">> IS_IT_SECURE?</summary>
    <div class="cy-content">Encryption protocol AES-4096 enabled. Trace route scrambled. You are invisible.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 60px 20px; display: flex; justify-content: center; }
.fq-cy { max-width: 800px; width: 100%; border: 1px solid #0f0; background: rgba(0,20,0,0.8); padding: 20px; box-shadow: 0 0 20px rgba(0,255,0,0.1); }
.cy-head { background: #0f0; color: #000; padding: 10px; font-weight: bold; margin-bottom: 20px; text-align: center; }
.cy-item { margin-bottom: 10px; border: 1px solid #030; background: #000; transition: 0.2s; }
.cy-sum { padding: 15px; color: #0f0; cursor: pointer; list-style: none; font-weight: bold; text-shadow: 0 0 5px #0f0; }
.cy-sum::-webkit-details-marker { display: none; }
.cy-sum:hover { background: rgba(0,255,0,0.1); }
.cy-item[open] { border-color: #f0f; box-shadow: 0 0 10px rgba(255,0,255,0.2); }
.cy-item[open] .cy-sum { color: #f0f; text-shadow: 0 0 5px #f0f; }
.cy-content { padding: 15px; color: #0ff; border-top: 1px dashed #030; line-height: 1.5; text-shadow: 0 0 2px #0ff; }
.cy-item[open] .cy-content { border-top-color: rgba(255,0,255,0.3); }`,
    jsCode: ``
  },

  // 4. Glassmorphism Accordion
  {
    _id: "fq4",
    title: "Glassmorphism Accordion",
    slug: "glassmorphism-accordion",
    description: "Frosted glass expanding panels floating on a gradient background.",
    category: "FAQ Accordions",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["faq", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="fq-gl">
    <h2 style="color:#fff; text-align:center; margin-bottom:40px;">Got Questions?</h2>
    <details class="gl-item">
      <summary class="gl-sum">Is there a free trial available?</summary>
      <div class="gl-content">Absolutely. We offer a full-featured 14-day free trial so you can thoroughly evaluate our platform.</div>
    </details>
    <details class="gl-item">
      <summary class="gl-sum">Can I cancel my subscription anytime?</summary>
      <div class="gl-content">Yes, you can cancel your subscription from your account dashboard with just two clicks. No hidden fees.</div>
    </details>
    <details class="gl-item">
      <summary class="gl-sum">What payment methods do you accept?</summary>
      <div class="gl-content">We accept all major credit cards, PayPal, and Apple Pay.</div>
    </details>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.fq-gl { max-width: 800px; width: 100%; }
.gl-item { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; margin-bottom: 15px; color: #fff; overflow: hidden; transition: 0.3s; }
.gl-sum { padding: 20px; cursor: pointer; list-style: none; font-weight: 600; font-size: 1.1rem; position: relative; }
.gl-sum::-webkit-details-marker { display: none; }
.gl-sum::after { content: '↓'; position: absolute; right: 20px; transition: 0.3s; }
.gl-item[open] .gl-sum::after { transform: rotate(180deg); }
.gl-item[open] { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.4); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.gl-content { padding: 0 20px 20px; line-height: 1.6; opacity: 0.9; }`,
    jsCode: ``
  },

  // 5. Brutalist Accordion
  {
    _id: "fq5",
    title: "Brutalist Accordion",
    slug: "brutalist-accordion",
    description: "Thick borders, high contrast, and loud typography.",
    category: "FAQ Accordions",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["faq", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-br">
  <h2>FAQ.</h2>
  <details class="br-item" name="br-faq">
    <summary class="br-sum">HOW DOES IT WORK? <span class="br-icon">+</span></summary>
    <div class="br-content">YOU CLICK. WE DELIVER. IT'S THAT SIMPLE. NO OVERCOMPLICATED WORKFLOWS.</div>
  </details>
  <details class="br-item" name="br-faq">
    <summary class="br-sum">IS IT FAST? <span class="br-icon">+</span></summary>
    <div class="br-content">FASTER THAN ANYTHING YOU'VE EVER USED. WE STRIPPED ALL THE BLOAT.</div>
  </details>
  <details class="br-item" name="br-faq">
    <summary class="br-sum">WHERE ARE YOU LOCATED? <span class="br-icon">+</span></summary>
    <div class="br-content">WE ARE EVERYWHERE. FULLY REMOTE, FULLY DISTRIBUTED.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 80px 20px; display: flex; justify-content: center; }
.fq-br { max-width: 800px; width: 100%; }
.fq-br h2 { font-size: 4rem; font-weight: 900; margin: 0 0 30px; color: #000; letter-spacing: -2px; }
.br-item { border: 4px solid #000; background: #fff; margin-bottom: 20px; box-shadow: 8px 8px 0 #000; transition: 0.1s; }
.br-sum { padding: 20px; font-size: 1.5rem; font-weight: 900; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; background: #fff; transition: 0.2s; }
.br-sum::-webkit-details-marker { display: none; }
.br-icon { font-size: 2rem; }
.br-item:hover { transform: translate(-4px, -4px); box-shadow: 12px 12px 0 #000; }
.br-item[open] { background: #facc15; }
.br-item[open] .br-sum { background: #000; color: #fff; }
.br-item[open] .br-icon { transform: rotate(45deg); }
.br-content { padding: 20px; font-weight: 800; font-size: 1.1rem; border-top: 4px solid #000; line-height: 1.4; }`,
    jsCode: ``
  },

  // 6. Neumorphic Accordion
  {
    _id: "fq6",
    title: "Neumorphic Accordion",
    slug: "neumorphic-accordion",
    description: "Soft UI design with extruded titles that inset upon opening.",
    category: "FAQ Accordions",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["faq", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-neu">
  <h2 style="text-align:center; color:#4a5568; margin-bottom:40px;">Common Questions</h2>
  <details class="neu-item" name="neu-faq">
    <summary class="neu-sum">What frameworks are supported?</summary>
    <div class="neu-content">Since these are pure HTML and CSS components, they are framework agnostic. You can use them in React, Vue, Svelte, Angular, or plain HTML.</div>
  </details>
  <details class="neu-item" name="neu-faq">
    <summary class="neu-sum">Do you offer technical support?</summary>
    <div class="neu-content">Premium users get access to our private Discord channel where our engineers assist directly with integration issues.</div>
  </details>
  <details class="neu-item" name="neu-faq">
    <summary class="neu-sum">Are updates included?</summary>
    <div class="neu-content">Yes, all future updates and new batches are included for lifetime license holders.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 80px 20px; display: flex; justify-content: center; }
.fq-neu { max-width: 700px; width: 100%; }
.neu-item { margin-bottom: 25px; border-radius: 15px; overflow: hidden; }
.neu-sum { padding: 20px 25px; cursor: pointer; list-style: none; font-weight: bold; color: #4a5568; background: #e0e5ec; border-radius: 15px; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; position: relative; }
.neu-sum::-webkit-details-marker { display: none; }
.neu-sum::after { content: '+'; position: absolute; right: 25px; font-size: 1.5rem; color: #3182ce; }
.neu-item[open] .neu-sum { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); border-radius: 15px 15px 0 0; color: #2b6cb0; }
.neu-item[open] .neu-sum::after { content: '-'; }
.neu-content { padding: 20px 25px; background: #e0e5ec; color: #718096; line-height: 1.6; border-radius: 0 0 15px 15px; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.4), inset -4px -4px 8px rgba(255,255,255,0.4); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Accordion
  {
    _id: "fq7",
    title: "Dark Mode Glow Accordion",
    slug: "dark-mode-glow-accordion",
    description: "Deep dark layout where the active accordion glows neon blue.",
    category: "FAQ Accordions",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["faq", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-dg">
  <h2 style="text-align:center; color:#f8fafc; margin-bottom:40px;">Support Center</h2>
  <details class="dg-item" name="dg-faq">
    <summary class="dg-sum">How do I reset my password? <span class="arrow">▼</span></summary>
    <div class="dg-content">Click 'Forgot Password' on the login screen. You will receive an email with a secure link to reset your credentials.</div>
  </details>
  <details class="dg-item" name="dg-faq">
    <summary class="dg-sum">What is the API rate limit? <span class="arrow">▼</span></summary>
    <div class="dg-content">The standard tier allows for 1000 requests per minute. Pro tiers offer up to 10,000 requests per minute.</div>
  </details>
  <details class="dg-item" name="dg-faq">
    <summary class="dg-sum">Is my data encrypted? <span class="arrow">▼</span></summary>
    <div class="dg-content">All data is encrypted at rest using AES-256 and in transit using TLS 1.3.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 80px 20px; display: flex; justify-content: center; }
.fq-dg { max-width: 800px; width: 100%; }
.dg-item { background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; margin-bottom: 15px; transition: 0.3s; position: relative; z-index: 1; }
.dg-sum { padding: 20px; cursor: pointer; list-style: none; font-weight: 600; color: #cbd5e1; display: flex; justify-content: space-between; align-items: center; }
.dg-sum::-webkit-details-marker { display: none; }
.arrow { transition: 0.3s; color: #64748b; font-size: 0.8rem; }
.dg-item:hover { border-color: #334155; }
.dg-item[open] { border-color: #3b82f6; box-shadow: 0 0 20px rgba(59,130,246,0.15); background: #020617; }
.dg-item[open] .dg-sum { color: #fff; }
.dg-item[open] .arrow { transform: rotate(180deg); color: #3b82f6; }
.dg-content { padding: 0 20px 20px; color: #94a3b8; line-height: 1.6; border-top: 1px solid #1e293b; margin-top: 10px; padding-top: 15px; }`,
    jsCode: ``
  },

  // 8. Offset Card Accordion
  {
    _id: "fq8",
    title: "Offset Card Accordion",
    slug: "offset-card-accordion",
    description: "Modern layout where each FAQ is an independent floating card.",
    category: "FAQ Accordions",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["faq", "card", "shadow", "modern"],
    isPremium: false,
    views: 33400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-oc">
  <h2 style="color:#0f172a; margin-bottom:40px;">FAQs</h2>
  <details class="oc-item">
    <summary class="oc-sum">Can I upgrade later? <span class="oc-icon"></span></summary>
    <div class="oc-content">Yes, you can upgrade your plan at any time. Your billing will be pro-rated automatically.</div>
  </details>
  <details class="oc-item">
    <summary class="oc-sum">Do you provide invoices? <span class="oc-icon"></span></summary>
    <div class="oc-content">A VAT compliant invoice is generated automatically for every transaction and sent to your email.</div>
  </details>
  <details class="oc-item">
    <summary class="oc-sum">How do I cancel? <span class="oc-icon"></span></summary>
    <div class="oc-content">Go to your account settings and click 'Cancel Subscription'. Your access will remain until the end of your billing cycle.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 80px 20px; display: flex; justify-content: center; }
.fq-oc { max-width: 750px; width: 100%; }
.oc-item { background: #fff; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03); transition: 0.3s; }
.oc-item:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); transform: translateY(-2px); }
.oc-sum { padding: 25px; cursor: pointer; list-style: none; font-weight: 700; color: #1e293b; font-size: 1.1rem; display: flex; justify-content: space-between; align-items: center; }
.oc-sum::-webkit-details-marker { display: none; }
.oc-icon { width: 24px; height: 24px; border-radius: 50%; background: #f1f5f9; display: flex; justify-content: center; align-items: center; position: relative; }
.oc-icon::before, .oc-icon::after { content: ''; position: absolute; background: #64748b; transition: 0.3s; }
.oc-icon::before { width: 10px; height: 2px; }
.oc-icon::after { height: 10px; width: 2px; }
.oc-item[open] .oc-icon { background: #ec4899; }
.oc-item[open] .oc-icon::before { background: #fff; transform: rotate(180deg); }
.oc-item[open] .oc-icon::after { background: #fff; transform: rotate(90deg); opacity: 0; }
.oc-item[open] .oc-sum { color: #ec4899; }
.oc-content { padding: 0 25px 25px; color: #64748b; line-height: 1.6; }`,
    jsCode: ``
  },

  // 9. Split Layout FAQ
  {
    _id: "fq9",
    title: "Split Layout FAQ",
    slug: "split-layout-faq",
    description: "Header text on the left, accordion list on the right.",
    category: "FAQ Accordions",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["faq", "split", "layout", "clean"],
    isPremium: true,
    views: 45100,
    downloads: 12700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-sl">
  <div class="sl-left">
    <h2>Questions?</h2>
    <p>We've got answers. If you can't find what you're looking for, feel free to contact our support team.</p>
    <a href="#">Contact Support</a>
  </div>
  <div class="sl-right">
    <details class="sl-item">
      <summary class="sl-sum">What is the onboarding process?</summary>
      <div class="sl-content">Once you sign up, you'll receive a welcome email with a link to schedule a 30-minute kickoff call with an account manager.</div>
    </details>
    <details class="sl-item">
      <summary class="sl-sum">Can I add team members?</summary>
      <div class="sl-content">Yes, the Pro plan allows up to 5 team members, while the Enterprise plan allows unlimited seats.</div>
    </details>
    <details class="sl-item">
      <summary class="sl-sum">Do you have an API?</summary>
      <div class="sl-content">Yes, we provide a comprehensive REST API. Documentation is available in your user dashboard.</div>
    </details>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 80px 5%; display: flex; justify-content: center; }
.fq-sl { display: flex; max-width: 1200px; width: 100%; gap: 60px; }
.sl-left { flex: 1; }
.sl-left h2 { font-size: 3rem; margin: 0 0 20px; color: #0f172a; letter-spacing: -1px; }
.sl-left p { font-size: 1.1rem; color: #64748b; line-height: 1.6; margin-bottom: 30px; max-width: 400px; }
.sl-left a { color: #3b82f6; font-weight: 600; text-decoration: none; border-bottom: 2px solid #3b82f6; padding-bottom: 2px; }
.sl-right { flex: 1.5; }
.sl-item { border-bottom: 1px solid #e2e8f0; }
.sl-sum { padding: 30px 0; cursor: pointer; list-style: none; font-size: 1.25rem; font-weight: 600; color: #1e293b; display: flex; justify-content: space-between; align-items: center; }
.sl-sum::-webkit-details-marker { display: none; }
.sl-sum::after { content: '→'; font-size: 1.5rem; transition: 0.3s; color: #94a3b8; }
.sl-item[open] .sl-sum::after { transform: rotate(90deg); color: #3b82f6; }
.sl-content { padding: 0 0 30px 0; color: #475569; font-size: 1.05rem; line-height: 1.7; max-width: 90%; }
@media (max-width: 768px) { .fq-sl { flex-direction: column; gap: 40px; } }`,
    jsCode: ``
  },

  // 10. Floating Bubble Accordion
  {
    _id: "fq10",
    title: "Floating Bubble Accordion",
    slug: "floating-bubble-accordion",
    description: "Playful design with heavily rounded pill-shaped accordions.",
    category: "FAQ Accordions",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["faq", "pill", "rounded", "playful"],
    isPremium: false,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fq-fb">
  <details class="fb-item">
    <summary class="fb-sum">How do I change my avatar?</summary>
    <div class="fb-content">Navigate to your profile settings, click on your current picture, and upload a new JPG or PNG file.</div>
  </details>
  <details class="fb-item">
    <summary class="fb-sum">Where are my saved items?</summary>
    <div class="fb-content">Look for the bookmark icon in the top right corner of the navigation bar. All your saved content lives there.</div>
  </details>
  <details class="fb-item">
    <summary class="fb-sum">Is there a dark mode?</summary>
    <div class="fb-content">Yes! You can toggle dark mode using the moon icon in the footer, or set it to sync with your system preferences.</div>
  </details>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #eef2f6; padding: 80px 20px; display: flex; justify-content: center; }
.fq-fb { max-width: 650px; width: 100%; display: flex; flex-direction: column; gap: 15px; }
.fb-item { background: #fff; border-radius: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); transition: 0.3s; overflow: hidden; }
.fb-sum { padding: 20px 30px; cursor: pointer; list-style: none; font-weight: 600; color: #334155; font-size: 1.05rem; }
.fb-sum::-webkit-details-marker { display: none; }
.fb-sum:hover { background: #f8fafc; color: #0f172a; }
.fb-item[open] { background: #3b82f6; color: #fff; box-shadow: 0 10px 25px rgba(59,130,246,0.3); }
.fb-item[open] .fb-sum { color: #fff; background: transparent; }
.fb-item[open] .fb-sum:hover { background: rgba(255,255,255,0.1); }
.fb-content { padding: 0 30px 25px; line-height: 1.6; font-size: 0.95rem; opacity: 0.9; }`,
    jsCode: ``
  }
];
