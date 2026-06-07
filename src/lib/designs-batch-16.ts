import { Design } from "./designs-data";

export const BATCH_16_DESIGNS: Design[] = [
  // 1. Glassmorphism Success Toast
  {
    _id: "al1",
    title: "Glass Success Toast",
    slug: "glass-success-toast",
    description: "A beautiful frosted glass notification that slides in to confirm an action.",
    category: "Alerts",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["alert", "toast", "glassmorphism", "success"],
    isPremium: false,
    views: 12400,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="toast-bg">
  <div class="glass-toast" id="toast">
    <div class="t-icon">✓</div>
    <div class="t-content">
      <strong>Success!</strong>
      <p>Your profile has been updated.</p>
    </div>
    <button class="t-close" onclick="document.getElementById('toast').style.display='none'">×</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.toast-bg { min-height: 100vh; background: linear-gradient(135deg, #3b82f6, #8b5cf6); display: flex; justify-content: center; align-items: center; }
.glass-toast { display: flex; align-items: center; gap: 15px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.4); padding: 15px 20px; border-radius: 12px; color: #fff; width: 320px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); animation: slideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
.t-icon { width: 30px; height: 30px; background: rgba(255,255,255,0.3); border-radius: 50%; display: flex; justify-content: center; align-items: center; font-weight: bold; }
.t-content strong { display: block; font-size: 1rem; margin-bottom: 2px; }
.t-content p { margin: 0; font-size: 0.85rem; color: rgba(255,255,255,0.9); }
.t-close { margin-left: auto; background: none; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; opacity: 0.7; transition: 0.2s; padding: 0; line-height: 1; }
.t-close:hover { opacity: 1; }`,
    jsCode: ``
  },

  // 2. Cyberpunk Warning Banner
  {
    _id: "al2",
    title: "Cyberpunk Warning",
    slug: "cyberpunk-warning-banner",
    description: "A loud, neon-lit warning banner with scanlines for sci-fi interfaces.",
    category: "Alerts",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["alert", "cyberpunk", "warning", "neon"],
    isPremium: true,
    views: 9500,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cyber-bg">
  <div class="cyber-alert">
    <div class="c-stripes"></div>
    <div class="c-text">
      <span class="blink">⚠</span> WARNING: UNAUTHORIZED ACCESS DETECTED
    </div>
    <button class="c-btn">OVERRIDE</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; }
.cyber-bg { min-height: 100vh; background: #050505; display: flex; justify-content: center; align-items: flex-start; padding-top: 50px; }
.cyber-alert { width: 90%; max-width: 600px; background: #1a0000; border: 2px solid #ff003c; position: relative; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 0 15px rgba(255,0,60,0.5); overflow: hidden; }
.c-stripes { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,0,60,0.1) 10px, rgba(255,0,60,0.1) 20px); pointer-events: none; z-index: 0; }
.c-text { color: #ff003c; font-weight: bold; font-size: 1.1rem; letter-spacing: 2px; z-index: 1; position: relative; text-shadow: 0 0 5px #ff003c; }
.blink { animation: blinker 1s linear infinite; }
@keyframes blinker { 50% { opacity: 0; } }
.c-btn { position: relative; z-index: 1; background: #ff003c; color: #000; border: none; padding: 8px 15px; font-weight: bold; font-family: 'Courier New', monospace; cursor: pointer; text-transform: uppercase; }
.c-btn:hover { background: #fff; color: #ff003c; box-shadow: 0 0 10px #ff003c; }`,
    jsCode: ``
  },

  // 3. Neumorphic Push Notification
  {
    _id: "al3",
    title: "Neumorphic Push",
    slug: "neumorphic-push-notification",
    description: "A soft, inset-shadow style notification card simulating a mobile push alert.",
    category: "Alerts",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["alert", "notification", "neumorphism", "soft"],
    isPremium: false,
    views: 8900,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-bg">
  <div class="neu-alert">
    <div class="n-header">
      <span class="n-app">Messages</span>
      <span class="n-time">Just now</span>
    </div>
    <div class="n-body">
      <strong>Sarah Connor</strong>
      <p>Are you ready for the presentation tomorrow?</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
.neu-bg { min-height: 100vh; background: #e0e5ec; display: flex; justify-content: center; align-items: center; }
.neu-alert { width: 320px; background: #e0e5ec; border-radius: 20px; padding: 20px; box-shadow: 9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5); }
.n-header { display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 12px; color: #9ca3af; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px; }
.n-body strong { display: block; color: #374151; font-size: 1.1rem; margin-bottom: 5px; }
.n-body p { margin: 0; color: #6b7280; font-size: 0.95rem; line-height: 1.4; }`,
    jsCode: ``
  },

  // 4. Brutalist Error Alert
  {
    _id: "al4",
    title: "Brutalist Error Banner",
    slug: "brutalist-error-banner",
    description: "A loud, high-contrast error message that demands immediate user attention.",
    category: "Alerts",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["alert", "brutalist", "error", "loud"],
    isPremium: true,
    views: 7600,
    downloads: 2100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="brutal-bg">
  <div class="brutal-alert">
    <div class="b-icon">X</div>
    <div class="b-text">
      <h2>FATAL ERROR.</h2>
      <p>Connection to the main database has been lost. Retry immediately.</p>
    </div>
    <button class="b-action">RETRY</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; }
.brutal-bg { min-height: 100vh; background: #facc15; display: flex; justify-content: center; align-items: center; padding: 20px; }
.brutal-alert { width: 100%; max-width: 500px; background: #fff; border: 4px solid #000; box-shadow: 8px 8px 0 #000; display: flex; align-items: center; padding: 15px; gap: 15px; }
.b-icon { width: 50px; height: 50px; background: #ef4444; color: #fff; display: flex; justify-content: center; align-items: center; font-size: 2rem; font-weight: 900; border: 4px solid #000; }
.b-text { flex: 1; }
.b-text h2 { margin: 0 0 5px 0; font-size: 1.2rem; font-weight: 900; text-transform: uppercase; }
.b-text p { margin: 0; font-weight: bold; font-size: 0.9rem; }
.b-action { background: #000; color: #fff; border: 2px solid #000; padding: 10px 15px; font-weight: 900; cursor: pointer; text-transform: uppercase; transition: 0.1s; }
.b-action:active { transform: translate(2px, 2px); }`,
    jsCode: ``
  },

  // 5. Floating Notification Stack
  {
    _id: "al5",
    title: "Dynamic Toast Stack",
    slug: "dynamic-toast-stack",
    description: "A javascript-controlled notification system where new alerts stack dynamically.",
    category: "Alerts",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    tags: ["alert", "toast", "stack", "dynamic"],
    isPremium: true,
    views: 15600,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="stack-bg">
  <button id="triggerBtn" class="trigger-btn">Show Notification</button>
  <div id="toast-container" class="toast-container"></div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.stack-bg { min-height: 100vh; background: #f8fafc; display: flex; justify-content: center; align-items: center; }
.trigger-btn { padding: 12px 24px; background: #0f172a; color: #fff; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
.toast-container { position: fixed; bottom: 20px; right: 20px; display: flex; flex-direction: column; gap: 10px; z-index: 1000; }
.toast-item { width: 300px; background: #fff; border-left: 4px solid #10b981; padding: 15px; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); animation: slideInRight 0.3s forwards, fadeOut 0.3s 3s forwards; display: flex; align-items: center; justify-content: space-between; }
@keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
@keyframes fadeOut { to { opacity: 0; transform: translateY(10px); } }
.toast-item strong { color: #0f172a; font-size: 0.95rem; }`,
    jsCode: `const btn = document.getElementById('triggerBtn');
const container = document.getElementById('toast-container');
let count = 1;

btn.addEventListener('click', () => {
  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = \`<strong>Update \${count} Saved</strong> <span>✓</span>\`;
  container.appendChild(toast);
  count++;
  
  // Remove element after animation ends (3.3s total)
  setTimeout(() => {
    if(container.contains(toast)) {
      container.removeChild(toast);
    }
  }, 3300);
});`
  },

  // 6. Minimalist Info Snackbar
  {
    _id: "al6",
    title: "Minimalist Snackbar",
    slug: "minimalist-snackbar",
    description: "A dark, highly minimal snackbar floating at the bottom center of the screen.",
    category: "Alerts",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["alert", "snackbar", "minimalist", "dark"],
    isPremium: false,
    views: 11200,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="snack-bg">
  <div class="snackbar">
    <span>Archived 3 items.</span>
    <button class="snack-undo">UNDO</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.snack-bg { min-height: 100vh; background: #fff; position: relative; }
.snackbar { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); background: #111827; color: #fff; padding: 12px 24px; border-radius: 30px; display: flex; align-items: center; gap: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); animation: floatUp 0.4s ease-out; }
@keyframes floatUp { from { bottom: -50px; opacity: 0; } to { bottom: 30px; opacity: 1; } }
.snackbar span { font-size: 0.9rem; }
.snack-undo { background: none; border: none; color: #60a5fa; font-weight: bold; font-size: 0.85rem; cursor: pointer; padding: 0; transition: 0.2s; }
.snack-undo:hover { color: #93c5fd; }`,
    jsCode: ``
  },

  // 7. Cookie Consent Banner
  {
    _id: "al7",
    title: "Cookie Consent Banner",
    slug: "cookie-consent-banner",
    description: "A fixed bottom banner for GDPR cookie consent with customizable options.",
    category: "Alerts",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["alert", "banner", "cookie", "gdpr"],
    isPremium: false,
    views: 13500,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cookie-bg">
  <div class="cookie-banner" id="cookieBanner">
    <div class="cb-text">
      <strong>🍪 We use cookies</strong>
      <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
    </div>
    <div class="cb-actions">
      <button class="cb-btn outline" onclick="document.getElementById('cookieBanner').style.display='none'">Reject All</button>
      <button class="cb-btn solid" onclick="document.getElementById('cookieBanner').style.display='none'">Accept All</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.cookie-bg { min-height: 100vh; background: #e2e8f0; position: relative; overflow: hidden; }
.cookie-banner { position: absolute; bottom: 0; left: 0; width: 100%; background: #fff; padding: 20px; box-sizing: border-box; box-shadow: 0 -10px 30px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; animation: slideUp 0.5s ease; border-top: 1px solid #e2e8f0; }
@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
.cb-text { max-width: 800px; }
.cb-text strong { display: block; font-size: 1.1rem; margin-bottom: 8px; color: #0f172a; }
.cb-text p { margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5; }
.cb-actions { display: flex; gap: 10px; margin-left: 20px; }
.cb-btn { padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; white-space: nowrap; font-size: 0.9rem; }
.outline { background: transparent; border: 1px solid #cbd5e1; color: #475569; }
.outline:hover { background: #f8fafc; }
.solid { background: #3b82f6; border: 1px solid #3b82f6; color: #fff; }
.solid:hover { background: #2563eb; }
@media (max-width: 768px) { .cookie-banner { flex-direction: column; align-items: flex-start; gap: 15px; } .cb-actions { margin-left: 0; width: 100%; } .cb-btn { flex: 1; } }`,
    jsCode: ``
  },

  // 8. E-commerce "Added to Cart" popup
  {
    _id: "al8",
    title: "Add to Cart Popup",
    slug: "add-to-cart-popup",
    description: "A rich notification showing the item just added to the user's shopping cart.",
    category: "Alerts",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    tags: ["alert", "ecommerce", "cart", "popup"],
    isPremium: true,
    views: 10100,
    downloads: 3500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cart-bg">
  <div class="cart-popup">
    <div class="cp-header">
      <span>✓ Added to Cart</span>
      <button class="cp-close">×</button>
    </div>
    <div class="cp-body">
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80" alt="Product">
      <div class="cp-info">
        <h3>Nike Air Zoom</h3>
        <p>Size: 10 | Color: Red</p>
        <strong>$120.00</strong>
      </div>
    </div>
    <div class="cp-footer">
      <button class="cp-btn outline">View Cart</button>
      <button class="cp-btn solid">Checkout</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.cart-bg { min-height: 100vh; background: #f3f4f6; display: flex; justify-content: flex-end; align-items: flex-start; padding: 20px; }
.cart-popup { width: 320px; background: #fff; border-radius: 12px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); overflow: hidden; animation: slideDown 0.3s ease; }
@keyframes slideDown { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
.cp-header { background: #10b981; color: #fff; padding: 12px 15px; display: flex; justify-content: space-between; align-items: center; font-weight: bold; font-size: 0.9rem; }
.cp-close { background: none; border: none; color: #fff; font-size: 1.2rem; cursor: pointer; padding: 0; }
.cp-body { padding: 15px; display: flex; gap: 15px; border-bottom: 1px solid #f3f4f6; }
.cp-body img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; }
.cp-info h3 { margin: 0 0 5px 0; font-size: 1rem; color: #111827; }
.cp-info p { margin: 0 0 5px 0; font-size: 0.8rem; color: #6b7280; }
.cp-info strong { font-size: 1rem; color: #111827; }
.cp-footer { padding: 15px; display: flex; gap: 10px; }
.cp-btn { flex: 1; padding: 10px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 0.9rem; transition: 0.2s; }
.cp-btn.outline { background: #fff; border: 1px solid #d1d5db; color: #374151; }
.cp-btn.outline:hover { background: #f9fafb; }
.cp-btn.solid { background: #111827; border: 1px solid #111827; color: #fff; }
.cp-btn.solid:hover { background: #374151; }`,
    jsCode: ``
  },

  // 9. Floating Action Alert
  {
    _id: "al9",
    title: "Floating Action Alert",
    slug: "floating-action-alert",
    description: "A compact alert with a call to action, perfect for system updates or app refreshes.",
    category: "Alerts",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    tags: ["alert", "update", "floating", "action"],
    isPremium: false,
    views: 8400,
    downloads: 2500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fa-bg">
  <div class="fa-alert">
    <div class="fa-icon">⚡</div>
    <div class="fa-text">New version available (v2.4.1)</div>
    <button class="fa-btn">Refresh</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.fa-bg { min-height: 100vh; background: #e5e7eb; display: flex; justify-content: center; align-items: flex-end; padding-bottom: 40px; }
.fa-alert { background: #1e40af; color: #fff; padding: 10px 15px; border-radius: 40px; display: flex; align-items: center; gap: 15px; box-shadow: 0 10px 25px rgba(30,64,175,0.4); animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
@keyframes popIn { from { transform: scale(0.8) translateY(20px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
.fa-icon { background: rgba(255,255,255,0.2); width: 28px; height: 28px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 0.9rem; }
.fa-text { font-size: 0.95rem; font-weight: 500; }
.fa-btn { background: #fff; color: #1e40af; border: none; padding: 6px 14px; border-radius: 20px; font-weight: bold; font-size: 0.85rem; cursor: pointer; transition: 0.2s; }
.fa-btn:hover { background: #dbeafe; }`,
    jsCode: ``
  },

  // 10. Isometric 3D Notification
  {
    _id: "al10",
    title: "Isometric Event Alert",
    slug: "isometric-event-alert",
    description: "A stylish 3D skewed notification card for calendar events or reminders.",
    category: "Alerts",
    thumbnail: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    tags: ["alert", "isometric", "3d", "event"],
    isPremium: true,
    views: 11800,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="iso-bg">
  <div class="iso-alert">
    <div class="iso-date">
      <span>OCT</span>
      <strong>24</strong>
    </div>
    <div class="iso-info">
      <h3>Design System Review</h3>
      <p>Starts in 15 minutes via Zoom</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.iso-bg { min-height: 100vh; background: #0f172a; display: flex; justify-content: center; align-items: center; perspective: 1000px; }
.iso-alert { width: 300px; background: #fff; border-radius: 12px; display: flex; overflow: hidden; transform: rotateX(20deg) rotateY(-20deg) rotateZ(5deg); box-shadow: -15px 15px 30px rgba(0,0,0,0.5); transition: 0.3s; cursor: pointer; }
.iso-alert:hover { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.3); }
.iso-date { background: #ef4444; color: #fff; padding: 15px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 60px; }
.iso-date span { font-size: 0.8rem; font-weight: bold; letter-spacing: 1px; }
.iso-date strong { font-size: 1.8rem; line-height: 1; }
.iso-info { padding: 15px; flex: 1; }
.iso-info h3 { margin: 0 0 5px 0; color: #0f172a; font-size: 1.1rem; }
.iso-info p { margin: 0; color: #64748b; font-size: 0.9rem; }`,
    jsCode: ``
  }
];
