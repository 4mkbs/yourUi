import { Design } from "./designs-data";

export const BATCH_91_DESIGNS: Design[] = [
  // 1. Classic Toast Notification
  {
    _id: "not1",
    title: "Classic Toast Notification",
    slug: "classic-toast-notification",
    description: "Standard top-right toast with icon, title, message, and close button.",
    category: "Notifications",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["toast", "notification", "classic", "alert"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="not-cl">
  <div class="cl-icon success">✓</div>
  <div class="cl-content">
    <h4>Successfully saved!</h4>
    <p>Anyone with a link can now view this file.</p>
  </div>
  <button class="cl-close">×</button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.not-cl { background: #fff; width: 100%; max-width: 350px; border-radius: 8px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); padding: 15px; display: flex; align-items: flex-start; gap: 15px; border-left: 4px solid #10b981; animation: slideIn 0.3s ease-out; }
@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
.cl-icon.success { background: #d1fae5; color: #10b981; width: 24px; height: 24px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 0.8rem; font-weight: bold; flex-shrink: 0; }
.cl-content h4 { margin: 0 0 5px; color: #0f172a; font-size: 0.95rem; }
.cl-content p { margin: 0; color: #64748b; font-size: 0.85rem; line-height: 1.4; }
.cl-close { background: none; border: none; color: #94a3b8; font-size: 1.2rem; cursor: pointer; padding: 0; line-height: 1; margin-left: auto; transition: 0.2s; }
.cl-close:hover { color: #0f172a; }`,
    jsCode: ``
  },

  // 2. Minimal Clean Alert
  {
    _id: "not2",
    title: "Minimal Clean Alert",
    slug: "minimal-clean-alert",
    description: "Stripped back text-only alert with subtle styling.",
    category: "Notifications",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["alert", "minimal", "clean", "banner"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="not-mn">
  <span>System update scheduled for 02:00 AM UTC.</span>
  <a href="#">Learn more</a>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.not-mn { background: #f5f5f5; border: 1px solid #e5e5e5; padding: 15px 25px; border-radius: 40px; display: inline-flex; align-items: center; gap: 15px; font-size: 0.9rem; color: #333; }
.not-mn a { color: #000; font-weight: bold; text-decoration: none; border-bottom: 1px solid #000; transition: 0.2s; }
.not-mn a:hover { opacity: 0.6; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Alert
  {
    _id: "not3",
    title: "Cyberpunk System Alert",
    slug: "cyberpunk-system-alert",
    description: "Hacker-themed critical alert with neon red and scanlines.",
    category: "Notifications",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["alert", "cyberpunk", "neon", "glitch"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="not-cy">
  <div class="cy-icon">!</div>
  <div class="cy-text">CRITICAL BREACH DETECTED IN SECTOR 4</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; }
.not-cy { background: rgba(50,0,0,0.8); border: 2px solid #f00; padding: 20px 30px; display: inline-flex; align-items: center; gap: 20px; box-shadow: 0 0 15px rgba(255,0,0,0.5); position: relative; overflow: hidden; animation: glitch 2s infinite; }
@keyframes glitch { 0% { opacity: 1; } 5% { transform: translateX(-2px); } 10% { transform: translateX(2px); } 15% { transform: translateX(-2px); } 20% { transform: translateX(0); } }
.not-cy::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: repeating-linear-gradient(transparent 0, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px); pointer-events: none; }
.cy-icon { background: #f00; color: #000; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 1.2rem; }
.cy-text { color: #f00; font-weight: bold; letter-spacing: 2px; text-shadow: 0 0 5px #f00; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Notification
  {
    _id: "not4",
    title: "Glassmorphism Toast",
    slug: "glassmorphism-toast",
    description: "Frosted glass notification floating over a background.",
    category: "Notifications",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["toast", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="not-gl">
    <div class="gl-icon">💬</div>
    <div class="gl-content">
      <h4>New Message</h4>
      <p>Sarah sent you a document to review.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; padding: 100px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.not-gl { background: rgba(255,255,255,0.2); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 16px; padding: 20px; display: flex; align-items: center; gap: 15px; width: 100%; max-width: 350px; color: #fff; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
.gl-icon { font-size: 1.5rem; background: rgba(255,255,255,0.2); width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; }
.gl-content h4 { margin: 0 0 5px; font-weight: 600; font-size: 1rem; }
.gl-content p { margin: 0; font-size: 0.85rem; opacity: 0.9; }`,
    jsCode: ``
  },

  // 5. Brutalist Banner
  {
    _id: "not5",
    title: "Brutalist Alert Banner",
    slug: "brutalist-alert-banner",
    description: "High contrast, structural banner for critical info.",
    category: "Notifications",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["banner", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="not-br">
  <div class="br-tag">ALERT</div>
  <div class="br-msg">YOUR SUBSCRIPTION HAS EXPIRED.</div>
  <a href="#" class="br-btn">RENEW</a>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 50px 20px; display: flex; justify-content: center; }
.not-br { background: #facc15; border: 4px solid #000; box-shadow: 8px 8px 0 #000; width: 100%; max-width: 600px; display: flex; align-items: center; }
.br-tag { background: #000; color: #fff; padding: 15px; font-weight: 900; font-size: 1.2rem; }
.br-msg { padding: 15px; font-weight: 900; font-size: 1.1rem; flex: 1; }
.br-btn { background: #000; color: #fff; text-decoration: none; font-weight: 900; padding: 15px 20px; border-left: 4px solid #000; transition: 0.1s; }
.br-btn:hover { background: #fff; color: #000; border-left-color: #000; }
@media (max-width: 600px) { .not-br { flex-direction: column; text-align: center; } .br-btn { width: 100%; box-sizing: border-box; border-left: none; border-top: 4px solid #000; } }`,
    jsCode: ``
  },

  // 6. Neumorphic Alert
  {
    _id: "not6",
    title: "Neumorphic Soft Alert",
    slug: "neumorphic-soft-alert",
    description: "Soft UI embossed alert pill.",
    category: "Notifications",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["alert", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="not-neu">
  <span class="neu-icon">i</span>
  <span class="neu-text">Your preferences have been updated.</span>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.not-neu { background: #e0e5ec; padding: 15px 25px; border-radius: 30px; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); display: inline-flex; align-items: center; gap: 15px; }
.neu-icon { width: 24px; height: 24px; border-radius: 50%; background: #e0e5ec; box-shadow: inset 2px 2px 5px rgba(163,177,198,0.6), inset -2px -2px 5px rgba(255,255,255,0.5); display: flex; justify-content: center; align-items: center; color: #4a5568; font-weight: bold; font-style: italic; }
.neu-text { color: #718096; font-size: 0.95rem; font-weight: 500; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Toast
  {
    _id: "not7",
    title: "Dark Glow Notification",
    slug: "dark-glow-notification",
    description: "Deep dark toast with a glowing neon accent bar.",
    category: "Notifications",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["toast", "dark", "glow", "gradient"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="not-dg">
  <div class="dg-icon">⚡</div>
  <div class="dg-body">
    <h4>Deployment Successful</h4>
    <p>v2.4.1 is now live in production.</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.not-dg { background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; width: 100%; max-width: 350px; display: flex; align-items: center; gap: 15px; position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.not-dg::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #3b82f6; box-shadow: 0 0 15px #3b82f6; }
.dg-icon { font-size: 1.5rem; color: #3b82f6; text-shadow: 0 0 10px rgba(59,130,246,0.5); }
.dg-body h4 { margin: 0 0 5px; color: #f8fafc; font-size: 0.95rem; }
.dg-body p { margin: 0; color: #94a3b8; font-size: 0.85rem; }`,
    jsCode: ``
  },

  // 8. Stacked Notifications
  {
    _id: "not8",
    title: "Stacked Toast Container",
    slug: "stacked-toast-container",
    description: "Visual layout showing how multiple notifications stack.",
    category: "Notifications",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["toast", "stack", "list", "container"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="not-stack">
  <div class="st-toast" style="opacity: 0.5; transform: scale(0.9) translateY(20px);">
    <span>Backup completed.</span>
  </div>
  <div class="st-toast" style="opacity: 0.8; transform: scale(0.95) translateY(10px);">
    <span>New user registered.</span>
  </div>
  <div class="st-toast">
    <span>Payment received: $49.00</span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 100px 20px; display: flex; justify-content: center; align-items: flex-end; height: 50vh; }
.not-stack { display: flex; flex-direction: column; align-items: center; position: relative; width: 300px; height: 150px; }
.st-toast { position: absolute; bottom: 0; background: #fff; width: 100%; padding: 15px 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); color: #0f172a; font-size: 0.9rem; font-weight: 500; border: 1px solid #e2e8f0; transition: 0.3s; }`,
    jsCode: ``
  },

  // 9. Action Required Notification
  {
    _id: "not9",
    title: "Action Required Toast",
    slug: "action-required-toast",
    description: "Notification requiring user input (Accept/Decline).",
    category: "Notifications",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["toast", "action", "buttons", "interactive"],
    isPremium: false,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="not-act">
  <div class="act-body">
    <h4>Allow Cookies?</h4>
    <p>We use cookies to improve your experience.</p>
  </div>
  <div class="act-btns">
    <button class="act-deny">Decline</button>
    <button class="act-allow">Allow</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; padding: 100px 20px; display: flex; justify-content: center; }
.not-act { background: #fff; border-radius: 12px; padding: 20px; width: 100%; max-width: 320px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
.act-body { margin-bottom: 20px; text-align: center; }
.act-body h4 { margin: 0 0 5px; color: #0f172a; font-size: 1.1rem; }
.act-body p { margin: 0; color: #64748b; font-size: 0.9rem; }
.act-btns { display: flex; gap: 10px; }
.act-btns button { flex: 1; padding: 10px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: 0.2s; }
.act-deny { background: #f1f5f9; border: 1px solid #e2e8f0; color: #475569; }
.act-deny:hover { background: #e2e8f0; }
.act-allow { background: #0f172a; border: 1px solid #0f172a; color: #fff; }
.act-allow:hover { background: #334155; }`,
    jsCode: ``
  },

  // 10. Floating Action Bubble
  {
    _id: "not10",
    title: "Floating Notification Bubble",
    slug: "floating-notification-bubble",
    description: "Small circular indicator that expands on hover.",
    category: "Notifications",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["bubble", "floating", "hover", "indicator"],
    isPremium: true,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="not-fab">
  <div class="fab-icon">🔔<span class="fab-badge">3</span></div>
  <div class="fab-menu">
    <div class="fab-item">New comment on your post</div>
    <div class="fab-item">System update complete</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.not-fab { position: relative; }
.fab-icon { width: 50px; height: 50px; background: #3b82f6; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: #fff; font-size: 1.2rem; cursor: pointer; box-shadow: 0 4px 12px rgba(59,130,246,0.3); position: relative; }
.fab-badge { position: absolute; top: -5px; right: -5px; background: #ef4444; color: #fff; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; justify-content: center; align-items: center; border: 2px solid #fff; }
.fab-menu { position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(10px); background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; width: 250px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); opacity: 0; visibility: hidden; transition: 0.3s; padding: 10px; }
.not-fab:hover .fab-menu { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(15px); }
.fab-item { padding: 10px; font-size: 0.9rem; color: #475569; border-bottom: 1px solid #f1f5f9; }
.fab-item:last-child { border-bottom: none; }
.fab-item:hover { background: #f8fafc; border-radius: 6px; }`,
    jsCode: ``
  }
];
