import { Design } from "./designs-data";

export const BATCH_9_DESIGNS: Design[] = [
  // 1. Standard Accordion FAQ
  {
    _id: "faq1",
    title: "Standard Accordion FAQ",
    slug: "standard-accordion-faq",
    description: "A clean, functional accordion-style FAQ. Clicking a question expands the answer smoothly.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tags: ["faq", "accordion", "standard", "clean"],
    isPremium: false,
    views: 9100,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="faq-container">
  <h2>Frequently Asked Questions</h2>
  <div class="faq-item active">
    <div class="faq-question">
      <h3>How does the billing work?</h3>
      <span class="icon">-</span>
    </div>
    <div class="faq-answer" style="display: block;">
      <p>We bill on a monthly or annual basis depending on your selected plan. You can cancel at any time, and you won't be charged for the next billing cycle.</p>
    </div>
  </div>
  <div class="faq-item">
    <div class="faq-question">
      <h3>Can I change my plan later?</h3>
      <span class="icon">+</span>
    </div>
    <div class="faq-answer">
      <p>Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Prorated charges will be applied automatically.</p>
    </div>
  </div>
  <div class="faq-item">
    <div class="faq-question">
      <h3>Do you offer refunds?</h3>
      <span class="icon">+</span>
    </div>
    <div class="faq-answer">
      <p>We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied, just contact support within 14 days of purchase.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; color: #0f172a; padding: 4rem 2rem; }
.faq-container { max-width: 800px; margin: 0 auto; }
h2 { font-size: 2.5rem; text-align: center; margin-bottom: 3rem; }
.faq-item { background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 1rem; overflow: hidden; transition: 0.3s; }
.faq-item:hover { border-color: #cbd5e1; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.faq-question { padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
.faq-question h3 { margin: 0; font-size: 1.1rem; font-weight: 600; color: #1e293b; }
.icon { font-size: 1.5rem; font-weight: 300; color: #64748b; transition: 0.3s; }
.faq-answer { padding: 0 1.5rem 1.5rem; display: none; color: #475569; line-height: 1.6; }
.active { border-color: #3b82f6; }
.active .icon { color: #3b82f6; }`,
    jsCode: `document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    const answer = parent.querySelector('.faq-answer');
    const icon = item.querySelector('.icon');
    
    // Close others
    document.querySelectorAll('.faq-item').forEach(other => {
      if(other !== parent) {
        other.classList.remove('active');
        other.querySelector('.faq-answer').style.display = 'none';
        other.querySelector('.icon').textContent = '+';
      }
    });

    // Toggle current
    if (parent.classList.contains('active')) {
      parent.classList.remove('active');
      answer.style.display = 'none';
      icon.textContent = '+';
    } else {
      parent.classList.add('active');
      answer.style.display = 'block';
      icon.textContent = '-';
    }
  });
});`
  },

  // 2. Split Layout FAQ
  {
    _id: "faq2",
    title: "Split Layout FAQ",
    slug: "split-layout-faq",
    description: "Categories on the left, answers on the right. Excellent for complex products with many questions.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    tags: ["faq", "split", "categories", "layout"],
    isPremium: true,
    views: 7400,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="split-faq">
  <div class="faq-sidebar">
    <h2>Help Center</h2>
    <ul class="faq-nav">
      <li class="active">Getting Started</li>
      <li>Billing & Pricing</li>
      <li>Security</li>
      <li>Integrations</li>
    </ul>
  </div>
  <div class="faq-content">
    <div class="category-section">
      <h3>Getting Started</h3>
      <div class="q-block">
        <h4>How do I install the widget?</h4>
        <p>Simply copy the script tag from your dashboard and paste it just before the closing body tag of your website.</p>
      </div>
      <div class="q-block">
        <h4>What frameworks do you support?</h4>
        <p>We officially support React, Vue, Svelte, and vanilla HTML/JS. Next.js and Nuxt wrappers are also provided.</p>
      </div>
      <div class="q-block">
        <h4>How do I invite team members?</h4>
        <p>Go to Settings > Team > Invite Members. Enter their email addresses and assign their roles.</p>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #fff; padding: 4rem 2rem; display: flex; justify-content: center; }
.split-faq { display: flex; max-width: 1000px; width: 100%; gap: 4rem; }
.faq-sidebar { flex: 1; }
.faq-sidebar h2 { font-size: 2rem; margin-top: 0; margin-bottom: 2rem; color: #111; }
.faq-nav { list-style: none; padding: 0; margin: 0; }
.faq-nav li { padding: 1rem; color: #666; cursor: pointer; border-radius: 8px; font-weight: 500; transition: 0.2s; }
.faq-nav li:hover { background: #f5f5f5; color: #111; }
.faq-nav li.active { background: #111; color: #fff; }
.faq-content { flex: 2; }
.category-section h3 { font-size: 1.5rem; margin-top: 0; margin-bottom: 2rem; color: #111; padding-bottom: 1rem; border-bottom: 1px solid #eaeaea; }
.q-block { margin-bottom: 2.5rem; }
.q-block h4 { font-size: 1.1rem; color: #111; margin: 0 0 0.5rem 0; }
.q-block p { color: #555; line-height: 1.6; margin: 0; }
@media (max-width: 700px) { .split-faq { flex-direction: column; gap: 2rem; } }`,
    jsCode: ``
  },

  // 3. Grid Search FAQ
  {
    _id: "faq3",
    title: "Searchable Knowledge Base Grid",
    slug: "searchable-knowledge-base-grid",
    description: "A prominent search bar combined with a grid of help categories.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
    tags: ["faq", "search", "grid", "knowledge-base"],
    isPremium: true,
    views: 6500,
    downloads: 2100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="kb-container">
  <div class="kb-header">
    <h1>How can we help you?</h1>
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input type="text" placeholder="Search for articles, guides, and troubleshooting..." />
    </div>
  </div>
  <div class="kb-grid">
    <div class="kb-card">
      <div class="k-icon">🚀</div>
      <h3>Getting Started</h3>
      <p>Quick start guides and basics.</p>
    </div>
    <div class="kb-card">
      <div class="k-icon">💳</div>
      <h3>Account & Billing</h3>
      <p>Manage subscriptions and payments.</p>
    </div>
    <div class="kb-card">
      <div class="k-icon">🔒</div>
      <h3>Security</h3>
      <p>Privacy, SSO, and compliance.</p>
    </div>
    <div class="kb-card">
      <div class="k-icon">⚙️</div>
      <h3>API & Developers</h3>
      <p>Endpoints, webhooks, and SDKs.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f9fafb; font-family: 'Helvetica Neue', sans-serif; padding: 4rem 2rem; }
.kb-container { max-width: 900px; margin: 0 auto; text-align: center; }
.kb-header { margin-bottom: 4rem; }
h1 { font-size: 2.5rem; color: #111827; margin-bottom: 2rem; }
.search-box { position: relative; max-width: 600px; margin: 0 auto; }
.search-icon { position: absolute; left: 20px; top: 50%; transform: translateY(-50%); font-size: 1.2rem; color: #9ca3af; }
.search-box input { width: 100%; padding: 1.5rem 1.5rem 1.5rem 3.5rem; font-size: 1.1rem; border: none; border-radius: 50px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); outline: none; box-sizing: border-box; transition: 0.3s; }
.search-box input:focus { box-shadow: 0 10px 30px rgba(59,130,246,0.15); }
.kb-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; text-align: left; }
.kb-card { background: #fff; padding: 2rem; border-radius: 12px; border: 1px solid #f3f4f6; transition: 0.3s; cursor: pointer; }
.kb-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); border-color: #e5e7eb; }
.k-icon { font-size: 2rem; margin-bottom: 1rem; }
.kb-card h3 { margin: 0 0 0.5rem 0; color: #111827; font-size: 1.1rem; }
.kb-card p { margin: 0; color: #6b7280; font-size: 0.9rem; line-height: 1.5; }`,
    jsCode: ``
  },

  // 4. Dark Mode Cyberpunk FAQ
  {
    _id: "faq4",
    title: "Cyberpunk Neon FAQ",
    slug: "cyberpunk-neon-faq",
    description: "A dark, glowing terminal-style FAQ section.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["faq", "cyberpunk", "dark", "neon"],
    isPremium: true,
    views: 4800,
    downloads: 1300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cyber-faq">
  <h2 class="glitch" data-text="SYS.QUERIES">SYS.QUERIES</h2>
  <div class="c-item">
    <div class="c-q">> HOW TO BYPASS MAINFRAME?</div>
    <div class="c-a">Access denied. Required security clearance: Level 5. Please contact system administrator.</div>
  </div>
  <div class="c-item">
    <div class="c-q">> IS THE API RATE LIMITED?</div>
    <div class="c-a">Affirmative. Standard protocol limits traffic to 10,000 requests per cycle to prevent network overload.</div>
  </div>
  <div class="c-item">
    <div class="c-q">> CAN I UPGRADE MY NEURAL LINK?</div>
    <div class="c-a">Hardware upgrades must be performed at authorized physical hubs. Software patches are pushed OTA nightly.</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #050505; color: #0f0; font-family: 'Courier New', Courier, monospace; padding: 4rem 2rem; display: flex; justify-content: center; }
.cyber-faq { max-width: 800px; width: 100%; }
h2 { font-size: 2rem; letter-spacing: 5px; text-shadow: 0 0 10px #0f0; border-bottom: 1px solid #0f0; padding-bottom: 1rem; margin-bottom: 3rem; }
.c-item { margin-bottom: 2rem; border-left: 2px solid #0f0; padding-left: 1rem; }
.c-q { font-weight: bold; font-size: 1.1rem; margin-bottom: 0.5rem; cursor: pointer; transition: text-shadow 0.2s; }
.c-q:hover { text-shadow: 0 0 8px #0f0; }
.c-a { color: #888; line-height: 1.5; padding-left: 1rem; }`,
    jsCode: `document.querySelectorAll('.c-q').forEach(q => {
  q.addEventListener('click', () => {
    const a = q.nextElementSibling;
    if(a.style.display === 'none' || !a.style.display) {
      a.style.display = 'block';
    } else {
      a.style.display = 'none';
    }
  });
});`
  },

  // 5. Floating Chat Bubble FAQ
  {
    _id: "faq5",
    title: "Chat Bubble FAQ",
    slug: "chat-bubble-faq",
    description: "Questions and answers styled like an SMS or messaging app conversation.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["faq", "chat", "message", "bubbles"],
    isPremium: false,
    views: 6200,
    downloads: 1800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="chat-faq">
  <div class="bubble q-bubble">Do you have a free tier?</div>
  <div class="bubble a-bubble">Yes! We have a completely free tier forever. It includes up to 3 projects and basic community support. 😊</div>
  
  <div class="bubble q-bubble">What happens if I exceed my usage limits?</div>
  <div class="bubble a-bubble">We'll send you an email warning when you hit 80%. If you exceed 100%, we'll pause operations until you upgrade or the next billing cycle begins.</div>
  
  <div class="bubble q-bubble">Can I get a refund?</div>
  <div class="bubble a-bubble">Of course. Just let us know within 14 days of your purchase and we'll process it immediately, no questions asked. 💸</div>
</div>`,
    cssCode: `body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #e5e5ea; padding: 4rem 1rem; display: flex; justify-content: center; }
.chat-faq { width: 100%; max-width: 500px; display: flex; flex-direction: column; gap: 10px; }
.bubble { max-width: 80%; padding: 12px 16px; border-radius: 20px; font-size: 1rem; line-height: 1.4; position: relative; }
.q-bubble { align-self: flex-end; background: #007aff; color: #fff; border-bottom-right-radius: 4px; margin-top: 1rem; }
.a-bubble { align-self: flex-start; background: #fff; color: #000; border-bottom-left-radius: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); }`,
    jsCode: ``
  },

  // 6. Glassmorphism FAQ Cards
  {
    _id: "faq6",
    title: "Glassmorphism FAQ Layout",
    slug: "glassmorphism-faq-layout",
    description: "Translucent frosted glass FAQ cards floating over a gradient background.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["faq", "glassmorphism", "gradient", "modern"],
    isPremium: true,
    views: 7900,
    downloads: 2600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-bg">
  <div class="glass-orb o1"></div>
  <div class="glass-orb o2"></div>
  <div class="g-faq-wrap">
    <h2>FAQ</h2>
    <div class="g-item">
      <h3>Is this template fully responsive?</h3>
      <p>Yes, every component is designed mobile-first and scales perfectly up to ultra-wide desktop monitors.</p>
    </div>
    <div class="g-item">
      <h3>Do I need to know React?</h3>
      <p>Not necessarily. We provide raw HTML/CSS/JS versions alongside React/Next.js specific versions.</p>
    </div>
    <div class="g-item">
      <h3>Are future updates free?</h3>
      <p>Absolutely. Once you purchase a license, you get lifetime access to all future updates and new components.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; overflow: hidden; }
.glass-bg { min-height: 100vh; background: #0f172a; position: relative; display: flex; justify-content: center; align-items: center; padding: 2rem; }
.glass-orb { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.6; }
.o1 { width: 400px; height: 400px; background: #10b981; top: 0; left: 0; }
.o2 { width: 500px; height: 500px; background: #3b82f6; bottom: 0; right: 0; }
.g-faq-wrap { position: relative; z-index: 10; width: 100%; max-width: 800px; }
h2 { color: #fff; font-size: 3rem; text-align: center; margin-bottom: 3rem; }
.g-item { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); padding: 2rem; border-radius: 16px; color: #fff; margin-bottom: 1.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transition: 0.3s; }
.g-item:hover { background: rgba(255, 255, 255, 0.1); transform: translateY(-3px); }
h3 { margin: 0 0 1rem 0; font-size: 1.2rem; color: #f8fafc; }
p { margin: 0; color: #cbd5e1; line-height: 1.6; }`,
    jsCode: ``
  },

  // 7. Minimalist Divider FAQ
  {
    _id: "faq7",
    title: "Minimalist Divider FAQ",
    slug: "minimalist-divider-faq",
    description: "A highly stripped-down FAQ using only typography and thin lines for separation.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["faq", "minimalist", "clean", "typography"],
    isPremium: false,
    views: 5600,
    downloads: 1700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="min-faq">
  <h2>Questions & Answers</h2>
  
  <div class="m-row">
    <h3>Where are you located?</h3>
    <p>Our main headquarters is in San Francisco, CA, but our team is fully distributed across 14 countries.</p>
  </div>
  
  <div class="m-row">
    <h3>Do you offer custom design services?</h3>
    <p>Currently, we only offer pre-built templates and components. We do not take on client-specific design work.</p>
  </div>
  
  <div class="m-row">
    <h3>What fonts are included?</h3>
    <p>We use open-source Google Fonts (Inter, Roboto, Space Grotesk) which are automatically imported in the CSS files.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding: 4rem 2rem; display: flex; justify-content: center; }
.min-faq { width: 100%; max-width: 700px; }
h2 { font-size: 2.5rem; font-weight: 300; margin-bottom: 3rem; color: #000; }
.m-row { border-bottom: 1px solid #000; padding: 2rem 0; }
.m-row:last-child { border-bottom: none; }
h3 { font-size: 1.2rem; margin: 0 0 1rem 0; color: #000; font-weight: bold; }
p { font-size: 1.05rem; color: #555; line-height: 1.6; margin: 0; }`,
    jsCode: ``
  },

  // 8. Toggle Button FAQ
  {
    _id: "faq8",
    title: "Interactive Toggle Buttons FAQ",
    slug: "interactive-toggle-buttons-faq",
    description: "Users click pill-shaped buttons to reveal the answer below them.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    tags: ["faq", "toggle", "buttons", "interactive"],
    isPremium: true,
    views: 4900,
    downloads: 1450,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="toggle-faq">
  <div class="t-item">
    <button class="t-btn">What is YourUI? <span class="arrow">↓</span></button>
    <div class="t-ans">YourUI is a premium component library designed to help developers build beautiful interfaces faster.</div>
  </div>
  <div class="t-item">
    <button class="t-btn">Do I need a license? <span class="arrow">↓</span></button>
    <div class="t-ans">Yes, for commercial projects you need to purchase a license. Personal and open-source projects are free to use.</div>
  </div>
  <div class="t-item">
    <button class="t-btn">How do I install it? <span class="arrow">↓</span></button>
    <div class="t-ans">There is no npm package to install. Simply copy the code provided and paste it into your project.</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #fafafa; padding: 4rem 2rem; display: flex; justify-content: center; }
.toggle-faq { width: 100%; max-width: 600px; }
.t-item { margin-bottom: 1rem; }
.t-btn { width: 100%; text-align: left; background: #fff; border: 1px solid #ddd; padding: 1.2rem 1.5rem; font-size: 1.1rem; font-weight: bold; color: #333; border-radius: 50px; cursor: pointer; display: flex; justify-content: space-between; transition: 0.2s; outline: none; }
.t-btn:hover { border-color: #999; }
.t-btn.open { background: #111; color: #fff; border-color: #111; }
.arrow { transition: transform 0.3s; }
.t-btn.open .arrow { transform: rotate(180deg); }
.t-ans { padding: 1.5rem; color: #555; line-height: 1.6; display: none; margin-top: 0.5rem; background: #fff; border-radius: 20px; border: 1px solid #eee; }`,
    jsCode: `document.querySelectorAll('.t-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const ans = btn.nextElementSibling;
    btn.classList.toggle('open');
    if(btn.classList.contains('open')) {
      ans.style.display = 'block';
    } else {
      ans.style.display = 'none';
    }
  });
});`
  },

  // 9. Web3/Crypto FAQ
  {
    _id: "faq9",
    title: "Web3 Dark Theme FAQ",
    slug: "web3-dark-theme-faq",
    description: "A dark theme FAQ with glowing purple accents suitable for crypto projects.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["faq", "web3", "crypto", "dark"],
    isPremium: false,
    views: 4500,
    downloads: 1100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="web3-faq">
  <h2>Protocol FAQ</h2>
  <div class="w-item">
    <h3>What is the total supply?</h3>
    <p>The maximum supply is hard-capped at 100,000,000 tokens. No additional tokens can ever be minted by the smart contract.</p>
  </div>
  <div class="w-item">
    <h3>How do I stake my tokens?</h3>
    <p>Connect your Web3 wallet, navigate to the Staking dashboard, select your pool, and approve the transaction. APY is dynamically calculated.</p>
  </div>
  <div class="w-item">
    <h3>Is the contract audited?</h3>
    <p>Yes. Our smart contracts have been thoroughly audited by CertiK and Hacken. Reports are available on our GitHub repository.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #0f0a1f; color: #fff; font-family: 'Inter', sans-serif; display: flex; justify-content: center; padding: 4rem 2rem; }
.web3-faq { width: 100%; max-width: 800px; }
h2 { color: #fff; font-size: 2.5rem; text-align: center; margin-bottom: 3rem; text-shadow: 0 0 20px rgba(139,92,246,0.5); }
.w-item { background: #1a1528; border: 1px solid #322b46; padding: 2rem; border-radius: 12px; margin-bottom: 1.5rem; position: relative; overflow: hidden; transition: 0.3s; }
.w-item:hover { border-color: #8b5cf6; box-shadow: 0 0 20px rgba(139,92,246,0.1); transform: translateX(5px); }
.w-item::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #8b5cf6; }
h3 { margin: 0 0 1rem 0; color: #e9d5ff; font-size: 1.2rem; }
p { margin: 0; color: #a78bfa; line-height: 1.6; }`,
    jsCode: ``
  },

  // 10. Brutalist High Contrast FAQ
  {
    _id: "faq10",
    title: "Brutalist Box FAQ",
    slug: "brutalist-box-faq",
    description: "Thick borders, high contrast colors, and large typography for a bold, retro-web aesthetic.",
    category: "FAQ",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["faq", "brutalist", "bold", "contrast"],
    isPremium: true,
    views: 5200,
    downloads: 1550,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="brutal-faq-wrap">
  <div class="b-head">WTF IS THIS?</div>
  
  <div class="b-q-box pink">
    <div class="bq">DO YOU OFFER SUPPORT?</div>
    <div class="ba">NO. YOU READ THE DOCS. IF IT BREAKS, YOU FIX IT. (Just kidding, email us).</div>
  </div>
  
  <div class="b-q-box yellow">
    <div class="bq">CAN I USE THIS FOR CLIENTS?</div>
    <div class="ba">YES. CHARGE THEM A LOT OF MONEY FOR IT.</div>
  </div>
  
  <div class="b-q-box blue">
    <div class="bq">IS THIS BUILT WITH TAILWIND?</div>
    <div class="ba">NO. PURE VANILLA CSS. LIKE THE GOOD OLD DAYS.</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e5e5e5; font-family: monospace; padding: 4rem 2rem; display: flex; justify-content: center; }
.brutal-faq-wrap { max-width: 700px; width: 100%; }
.b-head { font-size: 4rem; font-weight: 900; letter-spacing: -2px; margin-bottom: 2rem; }
.b-q-box { border: 4px solid #000; padding: 2rem; margin-bottom: 2rem; box-shadow: 8px 8px 0 #000; transition: transform 0.1s, box-shadow 0.1s; cursor: pointer; }
.b-q-box:hover { transform: translate(-4px, -4px); box-shadow: 12px 12px 0 #000; }
.pink { background: #fbcfe8; }
.yellow { background: #fef08a; }
.blue { background: #bfdbfe; }
.bq { font-size: 1.5rem; font-weight: 900; margin-bottom: 1rem; border-bottom: 4px solid #000; padding-bottom: 0.5rem; }
.ba { font-size: 1.2rem; font-weight: bold; line-height: 1.4; }`,
    jsCode: ``
  }
];
