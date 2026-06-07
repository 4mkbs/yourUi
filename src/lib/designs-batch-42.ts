import { Design } from "./designs-data";

export const BATCH_42_DESIGNS: Design[] = [
  // 1. Classic Center Modal
  {
    _id: "md1",
    title: "Classic Center Modal",
    slug: "classic-center-modal",
    description: "A standard, clean centered modal dialog with backdrop blur.",
    category: "Modals",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["modal", "dialog", "classic", "popup"],
    isPremium: false,
    views: 24500,
    downloads: 7100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="md-classic-wrap">
  <label for="md-classic-toggle" class="md-btn">Open Modal</label>
  <input type="checkbox" id="md-classic-toggle" class="md-toggle" />
  
  <div class="md-overlay">
    <div class="md-classic-box">
      <div class="md-header">
        <h3>Confirm Action</h3>
        <label for="md-classic-toggle" class="md-close">×</label>
      </div>
      <div class="md-body">
        <p>Are you sure you want to proceed with this action? This cannot be undone.</p>
      </div>
      <div class="md-footer">
        <label for="md-classic-toggle" class="md-cancel">Cancel</label>
        <button class="md-confirm">Proceed</button>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.md-classic-wrap { position: relative; }
.md-btn { padding: 12px 24px; background: #3b82f6; color: #fff; border-radius: 8px; cursor: pointer; font-weight: 600; display: inline-block; transition: 0.2s; }
.md-btn:hover { background: #2563eb; }
.md-toggle { display: none; }
.md-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(4px); display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: 0.3s; z-index: 1000; }
.md-toggle:checked ~ .md-overlay { opacity: 1; visibility: visible; }
.md-classic-box { background: #fff; width: 100%; max-width: 450px; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); transform: translateY(20px) scale(0.95); transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); opacity: 0; }
.md-toggle:checked ~ .md-overlay .md-classic-box { transform: translateY(0) scale(1); opacity: 1; }
.md-header { padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
.md-header h3 { margin: 0; color: #0f172a; font-size: 1.2rem; }
.md-close { font-size: 24px; color: #94a3b8; cursor: pointer; transition: 0.2s; line-height: 1; }
.md-close:hover { color: #0f172a; }
.md-body { padding: 20px; color: #475569; line-height: 1.5; font-size: 0.95rem; }
.md-body p { margin: 0; }
.md-footer { padding: 20px; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; gap: 10px; background: #f8fafc; border-radius: 0 0 12px 12px; }
.md-cancel { padding: 10px 20px; background: #fff; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer; color: #334155; font-weight: 500; transition: 0.2s; }
.md-cancel:hover { background: #f1f5f9; }
.md-confirm { padding: 10px 20px; background: #3b82f6; border: none; border-radius: 6px; cursor: pointer; color: #fff; font-weight: 500; transition: 0.2s; }
.md-confirm:hover { background: #2563eb; }`,
    jsCode: ``
  },

  // 2. Cyberpunk Modal
  {
    _id: "md2",
    title: "Cyberpunk Modal",
    slug: "cyberpunk-modal",
    description: "Neon borders, glitch effects, and high contrast for dark UIs.",
    category: "Modals",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["modal", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 18200,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="md-cy-wrap">
  <label for="md-cy-toggle" class="md-cy-btn">INITIALIZE</label>
  <input type="checkbox" id="md-cy-toggle" class="md-cy-toggle" />
  
  <div class="md-cy-overlay">
    <div class="md-cy-box">
      <div class="md-cy-header">
        <span>SYSTEM_ALERT</span>
        <label for="md-cy-toggle" class="md-cy-close">[X]</label>
      </div>
      <div class="md-cy-body">
        <p>BREACH DETECTED IN SECTOR 7. IMMEDIATE EVACUATION REQUIRED.</p>
      </div>
      <div class="md-cy-footer">
        <label for="md-cy-toggle" class="md-cy-cancel">ABORT</label>
        <button class="md-cy-confirm">ENGAGE</button>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.md-cy-btn { padding: 12px 24px; background: #111; color: #0ff; border: 1px solid #0ff; cursor: pointer; font-weight: bold; letter-spacing: 2px; display: inline-block; box-shadow: 0 0 10px rgba(0,255,255,0.2); transition: 0.2s; }
.md-cy-btn:hover { background: #0ff; color: #000; box-shadow: 0 0 20px #0ff; }
.md-cy-toggle { display: none; }
.md-cy-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: 0.3s; z-index: 1000; }
.md-cy-toggle:checked ~ .md-cy-overlay { opacity: 1; visibility: visible; }
.md-cy-box { background: #0a0a0a; width: 100%; max-width: 500px; border: 2px solid #0ff; box-shadow: inset 0 0 20px rgba(0,255,255,0.2), 0 0 20px rgba(0,255,255,0.2); transform: scale(0.9) skewX(-2deg); opacity: 0; transition: 0.3s; position: relative; }
.md-cy-box::before { content: ''; position: absolute; top: -2px; left: -2px; width: 20px; height: 20px; border-top: 2px solid #f0f; border-left: 2px solid #f0f; }
.md-cy-box::after { content: ''; position: absolute; bottom: -2px; right: -2px; width: 20px; height: 20px; border-bottom: 2px solid #f0f; border-right: 2px solid #f0f; }
.md-cy-toggle:checked ~ .md-cy-overlay .md-cy-box { transform: scale(1) skewX(0); opacity: 1; animation: glitch 0.3s ease; }
@keyframes glitch { 0% { transform: translate(2px, 2px); } 50% { transform: translate(-2px, -2px); filter: hue-rotate(90deg); } 100% { transform: translate(0, 0); } }
.md-cy-header { padding: 15px 20px; border-bottom: 1px dashed #0ff; display: flex; justify-content: space-between; color: #f0f; font-weight: bold; background: rgba(0,255,255,0.05); }
.md-cy-close { cursor: pointer; color: #0ff; transition: 0.2s; }
.md-cy-close:hover { color: #f0f; text-shadow: 0 0 10px #f0f; }
.md-cy-body { padding: 30px 20px; color: #ccc; text-transform: uppercase; line-height: 1.6; }
.md-cy-footer { padding: 15px 20px; border-top: 1px dashed #0ff; display: flex; justify-content: flex-end; gap: 15px; }
.md-cy-cancel { padding: 10px 20px; border: 1px solid #333; color: #888; cursor: pointer; transition: 0.2s; }
.md-cy-cancel:hover { border-color: #f0f; color: #f0f; }
.md-cy-confirm { padding: 10px 20px; background: #0ff; border: none; color: #000; font-weight: bold; cursor: pointer; transition: 0.2s; }
.md-cy-confirm:hover { background: #f0f; box-shadow: 0 0 15px #f0f; }`,
    jsCode: ``
  },

  // 3. Bottom Sheet Modal
  {
    _id: "md3",
    title: "Bottom Sheet Modal",
    slug: "bottom-sheet-modal",
    description: "Mobile-friendly modal that slides up from the bottom of the screen.",
    category: "Modals",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["modal", "mobile", "sheet", "slide"],
    isPremium: false,
    views: 26100,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="md-btm-wrap">
  <label for="md-btm-toggle" class="md-btm-btn">Share Options</label>
  <input type="checkbox" id="md-btm-toggle" class="md-btm-toggle" />
  
  <div class="md-btm-overlay">
    <div class="md-btm-box">
      <div class="md-btm-drag"></div>
      <h3>Share this post</h3>
      <div class="md-btm-grid">
        <div class="md-btm-item">📱 Copy Link</div>
        <div class="md-btm-item">🐦 Twitter</div>
        <div class="md-btm-item">📘 Facebook</div>
        <div class="md-btm-item">✉️ Email</div>
      </div>
      <label for="md-btm-toggle" class="md-btm-close-btn">Close</label>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.md-btm-btn { padding: 12px 24px; background: #0f172a; color: #fff; border-radius: 30px; cursor: pointer; font-weight: 600; display: inline-block; }
.md-btm-toggle { display: none; }
.md-btm-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); display: flex; align-items: flex-end; opacity: 0; visibility: hidden; transition: 0.3s; z-index: 1000; }
.md-btm-toggle:checked ~ .md-btm-overlay { opacity: 1; visibility: visible; }
.md-btm-box { background: #fff; width: 100%; padding: 20px; border-radius: 20px 20px 0 0; transform: translateY(100%); transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1); box-sizing: border-box; }
.md-btm-toggle:checked ~ .md-btm-overlay .md-btm-box { transform: translateY(0); }
.md-btm-drag { width: 40px; height: 5px; background: #cbd5e1; border-radius: 5px; margin: 0 auto 20px auto; }
.md-btm-box h3 { margin: 0 0 20px 0; color: #0f172a; text-align: center; font-size: 1.1rem; }
.md-btm-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }
.md-btm-item { padding: 15px; background: #f8fafc; border-radius: 12px; text-align: center; color: #334155; font-weight: 500; cursor: pointer; transition: 0.2s; }
.md-btm-item:hover { background: #f1f5f9; }
.md-btm-close-btn { display: block; width: 100%; padding: 15px; background: #f1f5f9; text-align: center; border-radius: 12px; color: #ef4444; font-weight: bold; cursor: pointer; transition: 0.2s; box-sizing: border-box; }
.md-btm-close-btn:hover { background: #fee2e2; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Modal
  {
    _id: "md4",
    title: "Glassmorphism Modal",
    slug: "glassmorphism-modal",
    description: "Frosted glass dialog floating over an animated gradient background.",
    category: "Modals",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["modal", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 20100,
    downloads: 5900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <label for="md-gl-toggle" class="md-gl-btn">Upgrade Plan</label>
  <input type="checkbox" id="md-gl-toggle" class="md-gl-toggle" />
  
  <div class="md-gl-overlay">
    <div class="md-gl-box">
      <h2>Unlock Pro</h2>
      <p>Get access to all premium features, unlimited storage, and priority support.</p>
      <div class="md-gl-actions">
        <label for="md-gl-toggle" class="md-gl-cancel">Maybe Later</label>
        <button class="md-gl-confirm">Upgrade Now</button>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; box-sizing: border-box; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.md-gl-btn { padding: 12px 24px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.4); border-radius: 30px; color: #fff; font-weight: bold; cursor: pointer; transition: 0.3s; display: inline-block; }
.md-gl-btn:hover { background: rgba(255,255,255,0.3); }
.md-gl-toggle { display: none; }
.md-gl-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.3); backdrop-filter: blur(8px); display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: 0.3s; z-index: 1000; }
.md-gl-toggle:checked ~ .md-gl-overlay { opacity: 1; visibility: visible; }
.md-gl-box { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); width: 100%; max-width: 400px; padding: 40px 30px; border-radius: 20px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); text-align: center; color: #fff; transform: translateY(30px); opacity: 0; transition: 0.4s ease-out; box-sizing: border-box; }
.md-gl-toggle:checked ~ .md-gl-overlay .md-gl-box { transform: translateY(0); opacity: 1; }
.md-gl-box h2 { margin: 0 0 15px 0; font-size: 1.8rem; }
.md-gl-box p { margin: 0 0 30px 0; color: rgba(255,255,255,0.8); line-height: 1.5; }
.md-gl-actions { display: flex; gap: 15px; justify-content: center; }
.md-gl-cancel { padding: 12px 20px; background: rgba(255,255,255,0.1); border-radius: 8px; color: #fff; cursor: pointer; transition: 0.2s; border: 1px solid transparent; }
.md-gl-cancel:hover { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.3); }
.md-gl-confirm { padding: 12px 20px; background: #fff; color: #3b82f6; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.md-gl-confirm:hover { box-shadow: 0 0 15px rgba(255,255,255,0.5); transform: translateY(-2px); }`,
    jsCode: ``
  },

  // 5. Brutalist Modal
  {
    _id: "md5",
    title: "Brutalist Modal",
    slug: "brutalist-modal",
    description: "Thick borders, harsh offset shadows, and bold typography.",
    category: "Modals",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["modal", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 13200,
    downloads: 3300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="md-br-wrap">
  <label for="md-br-toggle" class="md-br-btn">READ RULES</label>
  <input type="checkbox" id="md-br-toggle" class="md-br-toggle" />
  
  <div class="md-br-overlay">
    <div class="md-br-box">
      <div class="md-br-header">
        <h2>ATTENTION</h2>
      </div>
      <div class="md-br-body">
        <ul>
          <li>NO SPAM</li>
          <li>NO SELF PROMOTION</li>
          <li>BE RESPECTFUL</li>
        </ul>
      </div>
      <div class="md-br-footer">
        <label for="md-br-toggle" class="md-br-accept">I AGREE</label>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.md-br-btn { padding: 15px 30px; background: #facc15; border: 4px solid #000; color: #000; font-weight: 900; font-size: 1.1rem; cursor: pointer; box-shadow: 6px 6px 0 #000; transition: 0.1s; display: inline-block; }
.md-br-btn:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 #000; }
.md-br-toggle { display: none; }
.md-br-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: 0.2s; z-index: 1000; }
.md-br-toggle:checked ~ .md-br-overlay { opacity: 1; visibility: visible; }
.md-br-box { background: #fff; width: 100%; max-width: 400px; border: 4px solid #000; box-shadow: 12px 12px 0 #000; transform: scale(0.9); opacity: 0; transition: 0.2s; }
.md-br-toggle:checked ~ .md-br-overlay .md-br-box { transform: scale(1); opacity: 1; }
.md-br-header { padding: 20px; border-bottom: 4px solid #000; background: #ef4444; color: #fff; }
.md-br-header h2 { margin: 0; font-weight: 900; letter-spacing: 2px; }
.md-br-body { padding: 20px; font-weight: bold; font-size: 1.1rem; }
.md-br-body ul { margin: 0; padding-left: 20px; }
.md-br-body li { margin-bottom: 10px; }
.md-br-footer { padding: 20px; border-top: 4px solid #000; display: flex; justify-content: flex-end; }
.md-br-accept { padding: 10px 25px; background: #22c55e; border: 4px solid #000; color: #000; font-weight: 900; cursor: pointer; transition: 0.1s; box-shadow: 4px 4px 0 #000; }
.md-br-accept:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #000; }
.md-br-accept:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #000; }`,
    jsCode: ``
  },

  // 6. Neumorphic Modal
  {
    _id: "md6",
    title: "Neumorphic Modal",
    slug: "neumorphic-modal",
    description: "Soft UI dialog that smoothly extrudes from the background.",
    category: "Modals",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["modal", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 15300,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="md-neu-wrap">
  <label for="md-neu-toggle" class="md-neu-btn">Settings</label>
  <input type="checkbox" id="md-neu-toggle" class="md-neu-toggle" />
  
  <div class="md-neu-overlay">
    <div class="md-neu-box">
      <h3>Preferences</h3>
      <p>Customize your experience.</p>
      <div class="md-neu-actions">
        <label for="md-neu-toggle" class="md-neu-close">Close</label>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.md-neu-btn { padding: 15px 30px; background: #e0e5ec; color: #4a5568; border-radius: 12px; cursor: pointer; font-weight: bold; display: inline-block; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.md-neu-btn:hover { color: #3182ce; }
.md-neu-toggle { display: none; }
.md-neu-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(224, 229, 236, 0.8); display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: 0.3s; z-index: 1000; }
.md-neu-toggle:checked ~ .md-neu-overlay { opacity: 1; visibility: visible; }
.md-neu-box { background: #e0e5ec; width: 100%; max-width: 350px; padding: 40px; border-radius: 20px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); text-align: center; transform: scale(0.9); opacity: 0; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-sizing: border-box; }
.md-neu-toggle:checked ~ .md-neu-overlay .md-neu-box { transform: scale(1); opacity: 1; }
.md-neu-box h3 { margin: 0 0 10px 0; color: #2d3748; }
.md-neu-box p { margin: 0 0 30px 0; color: #718096; }
.md-neu-close { padding: 12px 30px; background: #e0e5ec; color: #e53e3e; border-radius: 8px; cursor: pointer; font-weight: bold; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); display: inline-block; transition: 0.2s; }
.md-neu-close:hover { color: #c53030; }`,
    jsCode: ``
  },

  // 7. Side Drawer Modal
  {
    _id: "md7",
    title: "Side Drawer Modal",
    slug: "side-drawer-modal",
    description: "A panel that slides in from the right edge, often used for navigation or filters.",
    category: "Modals",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["modal", "drawer", "sidebar", "slide"],
    isPremium: false,
    views: 22100,
    downloads: 6300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="md-sd-wrap">
  <label for="md-sd-toggle" class="md-sd-btn">Open Menu</label>
  <input type="checkbox" id="md-sd-toggle" class="md-sd-toggle" />
  
  <div class="md-sd-overlay">
    <div class="md-sd-box">
      <div class="md-sd-header">
        <h3>Navigation</h3>
        <label for="md-sd-toggle" class="md-sd-close">×</label>
      </div>
      <div class="md-sd-body">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.md-sd-btn { padding: 12px 24px; background: #1e293b; color: #fff; border-radius: 6px; cursor: pointer; font-weight: 500; display: inline-block; }
.md-sd-toggle { display: none; }
.md-sd-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); opacity: 0; visibility: hidden; transition: 0.3s; z-index: 1000; }
.md-sd-toggle:checked ~ .md-sd-overlay { opacity: 1; visibility: visible; }
.md-sd-box { position: absolute; top: 0; right: 0; width: 300px; height: 100%; background: #fff; transform: translateX(100%); transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1); display: flex; flex-direction: column; box-shadow: -5px 0 15px rgba(0,0,0,0.1); }
.md-sd-toggle:checked ~ .md-sd-overlay .md-sd-box { transform: translateX(0); }
.md-sd-header { padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
.md-sd-header h3 { margin: 0; color: #0f172a; }
.md-sd-close { font-size: 28px; cursor: pointer; color: #64748b; line-height: 1; transition: 0.2s; }
.md-sd-close:hover { color: #ef4444; }
.md-sd-body { padding: 20px; display: flex; flex-direction: column; gap: 10px; }
.md-sd-body a { padding: 12px; background: #f1f5f9; color: #334155; text-decoration: none; border-radius: 8px; font-weight: 500; transition: 0.2s; }
.md-sd-body a:hover { background: #3b82f6; color: #fff; }`,
    jsCode: ``
  },

  // 8. Success Alert Modal
  {
    _id: "md8",
    title: "Success Alert Modal",
    slug: "success-alert-modal",
    description: "A friendly pop-up confirming a successful action with an animated icon.",
    category: "Modals",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["modal", "success", "alert", "clean"],
    isPremium: true,
    views: 19600,
    downloads: 5500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="md-sc-wrap">
  <label for="md-sc-toggle" class="md-sc-btn">Save Changes</label>
  <input type="checkbox" id="md-sc-toggle" class="md-sc-toggle" />
  
  <div class="md-sc-overlay">
    <div class="md-sc-box">
      <div class="md-sc-icon">✓</div>
      <h2>Success!</h2>
      <p>Your profile has been updated successfully.</p>
      <label for="md-sc-toggle" class="md-sc-close">Continue</label>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.md-sc-btn { padding: 12px 24px; background: #10b981; color: #fff; border-radius: 8px; cursor: pointer; font-weight: 600; display: inline-block; transition: 0.2s; }
.md-sc-btn:hover { background: #059669; }
.md-sc-toggle { display: none; }
.md-sc-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.4); display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: 0.3s; z-index: 1000; }
.md-sc-toggle:checked ~ .md-sc-overlay { opacity: 1; visibility: visible; }
.md-sc-box { background: #fff; width: 100%; max-width: 350px; padding: 40px 30px; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); text-align: center; transform: scale(0.8) translateY(20px); opacity: 0; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-sizing: border-box; }
.md-sc-toggle:checked ~ .md-sc-overlay .md-sc-box { transform: scale(1) translateY(0); opacity: 1; }
.md-sc-icon { width: 60px; height: 60px; background: #d1fae5; color: #10b981; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 30px; font-weight: bold; margin: 0 auto 20px auto; }
.md-sc-toggle:checked ~ .md-sc-overlay .md-sc-icon { animation: pop 0.5s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both; }
@keyframes pop { 0% { transform: scale(0); } 100% { transform: scale(1); } }
.md-sc-box h2 { margin: 0 0 10px 0; color: #0f172a; }
.md-sc-box p { margin: 0 0 30px 0; color: #64748b; font-size: 0.95rem; line-height: 1.5; }
.md-sc-close { padding: 12px 30px; background: #10b981; color: #fff; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; display: inline-block; }
.md-sc-close:hover { background: #059669; transform: translateY(-2px); }`,
    jsCode: ``
  },

  // 9. Danger Warning Modal
  {
    _id: "md9",
    title: "Danger Warning Modal",
    slug: "danger-warning-modal",
    description: "A red-themed alert dialog emphasizing a destructive or irreversible action.",
    category: "Modals",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["modal", "danger", "alert", "warning"],
    isPremium: false,
    views: 18800,
    downloads: 4700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="md-dg-wrap">
  <label for="md-dg-toggle" class="md-dg-btn">Delete Account</label>
  <input type="checkbox" id="md-dg-toggle" class="md-dg-toggle" />
  
  <div class="md-dg-overlay">
    <div class="md-dg-box">
      <div class="md-dg-icon">!</div>
      <h2>Delete Account?</h2>
      <p>All your data will be permanently removed. This action cannot be undone.</p>
      <div class="md-dg-actions">
        <label for="md-dg-toggle" class="md-dg-cancel">Keep Account</label>
        <button class="md-dg-confirm">Yes, Delete</button>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.md-dg-btn { padding: 12px 24px; background: transparent; border: 1px solid #ef4444; color: #ef4444; border-radius: 8px; cursor: pointer; font-weight: 600; display: inline-block; transition: 0.2s; }
.md-dg-btn:hover { background: #fef2f2; }
.md-dg-toggle { display: none; }
.md-dg-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: 0.3s; z-index: 1000; }
.md-dg-toggle:checked ~ .md-dg-overlay { opacity: 1; visibility: visible; }
.md-dg-box { background: #fff; width: 100%; max-width: 400px; padding: 30px; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2); text-align: center; transform: scale(0.9); opacity: 0; transition: 0.3s; border-top: 6px solid #ef4444; box-sizing: border-box; }
.md-dg-toggle:checked ~ .md-dg-overlay .md-dg-box { transform: scale(1); opacity: 1; animation: shake 0.4s ease; }
@keyframes shake { 0%, 100% {transform: translateX(0)} 25% {transform: translateX(-5px)} 75% {transform: translateX(5px)} }
.md-dg-icon { width: 50px; height: 50px; border: 3px solid #ef4444; color: #ef4444; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; font-weight: bold; margin: 0 auto 15px auto; }
.md-dg-box h2 { margin: 0 0 10px 0; color: #0f172a; }
.md-dg-box p { margin: 0 0 25px 0; color: #64748b; font-size: 0.95rem; line-height: 1.5; }
.md-dg-actions { display: flex; flex-direction: column; gap: 10px; }
.md-dg-confirm { padding: 12px; background: #ef4444; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.md-dg-confirm:hover { background: #dc2626; }
.md-dg-cancel { padding: 12px; background: #f1f5f9; color: #475569; border-radius: 6px; font-weight: 500; cursor: pointer; transition: 0.2s; }
.md-dg-cancel:hover { background: #e2e8f0; }`,
    jsCode: ``
  },

  // 10. Minimal Gradient Modal
  {
    _id: "md10",
    title: "Gradient Glow Modal",
    slug: "gradient-glow-modal",
    description: "A dark theme modal with a subtle, colorful glowing border effect.",
    category: "Modals",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["modal", "gradient", "dark", "glow"],
    isPremium: true,
    views: 17400,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="md-gw-wrap">
  <label for="md-gw-toggle" class="md-gw-btn">New Feature</label>
  <input type="checkbox" id="md-gw-toggle" class="md-gw-toggle" />
  
  <div class="md-gw-overlay">
    <div class="md-gw-box">
      <div class="md-gw-content">
        <h3>Introducing AI Assist</h3>
        <p>Generate components instantly with our new AI-powered tools directly in your dashboard.</p>
        <label for="md-gw-toggle" class="md-gw-close">Try it out</label>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.md-gw-btn { padding: 12px 24px; background: #1e293b; color: #fff; border: 1px solid #334155; border-radius: 8px; cursor: pointer; font-weight: 600; display: inline-block; transition: 0.2s; }
.md-gw-btn:hover { border-color: #ec4899; box-shadow: 0 0 10px rgba(236,72,153,0.3); }
.md-gw-toggle { display: none; }
.md-gw-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: 0.4s; z-index: 1000; }
.md-gw-toggle:checked ~ .md-gw-overlay { opacity: 1; visibility: visible; }
.md-gw-box { width: 100%; max-width: 400px; padding: 2px; border-radius: 16px; background: linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6); transform: translateY(20px); opacity: 0; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-sizing: border-box; box-shadow: 0 15px 30px rgba(0,0,0,0.5), 0 0 20px rgba(236,72,153,0.3); }
.md-gw-toggle:checked ~ .md-gw-overlay .md-gw-box { transform: translateY(0); opacity: 1; }
.md-gw-content { background: #0f172a; padding: 40px 30px; border-radius: 14px; text-align: center; }
.md-gw-content h3 { margin: 0 0 15px 0; color: #f8fafc; font-size: 1.5rem; background: linear-gradient(90deg, #ec4899, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.md-gw-content p { margin: 0 0 30px 0; color: #94a3b8; line-height: 1.6; }
.md-gw-close { padding: 12px 30px; background: #fff; color: #0f172a; border-radius: 30px; font-weight: bold; cursor: pointer; display: inline-block; transition: 0.2s; }
.md-gw-close:hover { transform: scale(1.05); }`,
    jsCode: ``
  }
];
