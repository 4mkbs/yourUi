import { Design } from "./designs-data";

export const BATCH_41_DESIGNS: Design[] = [
  // 1. Classic Underline Tabs
  {
    _id: "tb1",
    title: "Classic Underline Tabs",
    slug: "classic-underline-tabs",
    description: "Standard clean tabs with an animated underline for the active state.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["tabs", "classic", "underline", "navigation"],
    isPremium: false,
    views: 22100,
    downloads: 6500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tb-classic-wrap">
  <input type="radio" id="tab1" name="tb-classic" checked />
  <input type="radio" id="tab2" name="tb-classic" />
  <input type="radio" id="tab3" name="tb-classic" />
  
  <div class="tb-header">
    <label for="tab1">Account</label>
    <label for="tab2">Security</label>
    <label for="tab3">Notifications</label>
    <div class="tb-slider"></div>
  </div>
  
  <div class="tb-content">
    <div class="tb-panel" id="panel1">Update your personal account details here.</div>
    <div class="tb-panel" id="panel2">Change your password and 2FA settings.</div>
    <div class="tb-panel" id="panel3">Manage your email preferences.</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tb-classic-wrap { width: 100%; max-width: 400px; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.tb-classic-wrap input { display: none; }
.tb-header { display: flex; position: relative; border-bottom: 2px solid #e2e8f0; }
.tb-header label { flex: 1; text-align: center; padding: 12px 0; color: #64748b; font-weight: 500; cursor: pointer; transition: 0.3s; z-index: 2; }
.tb-slider { position: absolute; bottom: -2px; left: 0; width: 33.33%; height: 2px; background: #3b82f6; transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); z-index: 3; }
#tab1:checked ~ .tb-header label[for="tab1"],
#tab2:checked ~ .tb-header label[for="tab2"],
#tab3:checked ~ .tb-header label[for="tab3"] { color: #3b82f6; }
#tab1:checked ~ .tb-header .tb-slider { left: 0%; }
#tab2:checked ~ .tb-header .tb-slider { left: 33.33%; }
#tab3:checked ~ .tb-header .tb-slider { left: 66.66%; }
.tb-panel { display: none; padding: 20px 0 0 0; color: #475569; animation: fade 0.3s ease; }
@keyframes fade { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
#tab1:checked ~ .tb-content #panel1,
#tab2:checked ~ .tb-content #panel2,
#tab3:checked ~ .tb-content #panel3 { display: block; }`,
    jsCode: ``
  },

  // 2. Pill Tabs (Segmented Control)
  {
    _id: "tb2",
    title: "Pill Segmented Control",
    slug: "pill-segmented-control",
    description: "A compact pill-shaped tab system, great for toggles like Daily/Monthly pricing.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["tabs", "pill", "segmented", "toggle"],
    isPremium: false,
    views: 18900,
    downloads: 5200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tb-pill-wrap">
  <input type="radio" id="ptab1" name="tb-pill" checked />
  <input type="radio" id="ptab2" name="tb-pill" />
  
  <div class="tb-pill-header">
    <div class="tb-pill-bg"></div>
    <label for="ptab1">Monthly</label>
    <label for="ptab2">Yearly</label>
  </div>
  
  <div class="tb-pill-content">
    <div class="tb-p-panel" id="pp1">$19 / month</div>
    <div class="tb-p-panel" id="pp2">$190 / year (Save 15%)</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tb-pill-wrap { width: 100%; max-width: 300px; display: flex; flex-direction: column; align-items: center; gap: 20px; }
.tb-pill-wrap input { display: none; }
.tb-pill-header { position: relative; display: flex; background: #e2e8f0; padding: 4px; border-radius: 30px; width: 100%; }
.tb-pill-header label { flex: 1; text-align: center; padding: 10px 0; color: #64748b; font-weight: 600; cursor: pointer; z-index: 2; transition: 0.3s; border-radius: 26px; }
.tb-pill-bg { position: absolute; top: 4px; left: 4px; width: calc(50% - 4px); height: calc(100% - 8px); background: #fff; border-radius: 26px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); z-index: 1; }
#ptab1:checked ~ .tb-pill-header label[for="ptab1"],
#ptab2:checked ~ .tb-pill-header label[for="ptab2"] { color: #0f172a; }
#ptab1:checked ~ .tb-pill-header .tb-pill-bg { left: 4px; }
#ptab2:checked ~ .tb-pill-header .tb-pill-bg { left: 50%; }
.tb-p-panel { display: none; background: #fff; width: 100%; text-align: center; padding: 30px 20px; border-radius: 12px; box-sizing: border-box; box-shadow: 0 4px 6px rgba(0,0,0,0.05); font-weight: bold; color: #334155; animation: slideIn 0.3s ease; }
@keyframes slideIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
#ptab1:checked ~ .tb-pill-content #pp1,
#ptab2:checked ~ .tb-pill-content #pp2 { display: block; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Tabs
  {
    _id: "tb3",
    title: "Cyberpunk Tabs",
    slug: "cyberpunk-tabs",
    description: "Neon borders, angled clips, and glowing text for dark mode UIs.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["tabs", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 17500,
    downloads: 4600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tb-cy-wrap">
  <input type="radio" id="ctab1" name="tb-cy" checked />
  <input type="radio" id="ctab2" name="tb-cy" />
  
  <div class="tb-cy-header">
    <label for="ctab1">SYS_LOG</label>
    <label for="ctab2">NET_STAT</label>
  </div>
  
  <div class="tb-cy-content">
    <div class="tb-c-panel" id="cp1">CONNECTION_ESTABLISHED<br/>> WAITING FOR COMMAND...</div>
    <div class="tb-c-panel" id="cp2">PING: 12ms<br/>> PACKET_LOSS: 0%</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tb-cy-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; }
.tb-cy-wrap input { display: none; }
.tb-cy-header { display: flex; gap: 5px; }
.tb-cy-header label { padding: 10px 20px; background: #111; color: #555; border: 1px solid #333; border-bottom: none; cursor: pointer; text-transform: uppercase; font-weight: bold; letter-spacing: 1px; transition: 0.2s; clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%); }
#ctab1:checked ~ .tb-cy-header label[for="ctab1"],
#ctab2:checked ~ .tb-cy-header label[for="ctab2"] { background: rgba(0,255,255,0.1); color: #0ff; border-color: #0ff; text-shadow: 0 0 5px #0ff; box-shadow: inset 0 2px 10px rgba(0,255,255,0.2); }
.tb-c-panel { display: none; padding: 20px; background: rgba(0,255,255,0.05); border: 1px solid #0ff; color: #ccc; font-size: 0.9rem; box-shadow: 0 0 15px rgba(0,255,255,0.1); animation: glitch 0.2s ease; line-height: 1.5; }
@keyframes glitch { 0% { opacity: 0; transform: translateX(-5px); } 100% { opacity: 1; transform: translateX(0); } }
#ctab1:checked ~ .tb-cy-content #cp1,
#ctab2:checked ~ .tb-cy-content #cp2 { display: block; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Tabs
  {
    _id: "tb4",
    title: "Glassmorphism Tabs",
    slug: "glassmorphism-tabs",
    description: "Frosted glass tabs floating over a vibrant gradient background.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["tabs", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 19300,
    downloads: 5600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="tb-gl-wrap">
    <input type="radio" id="gltab1" name="tb-gl" checked />
    <input type="radio" id="gltab2" name="tb-gl" />
    <input type="radio" id="gltab3" name="tb-gl" />
    
    <div class="tb-gl-header">
      <label for="gltab1">Profile</label>
      <label for="gltab2">Friends</label>
      <label for="gltab3">Settings</label>
    </div>
    
    <div class="tb-gl-content">
      <div class="tb-g-panel" id="gp1">Your public profile details.</div>
      <div class="tb-g-panel" id="gp2">You have 12 online friends.</div>
      <div class="tb-g-panel" id="gp3">Theme: Glass UI (Active)</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; padding: 20px; box-sizing: border-box; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.tb-gl-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 10px; }
.tb-gl-wrap input { display: none; }
.tb-gl-header { display: flex; gap: 10px; }
.tb-gl-header label { flex: 1; text-align: center; padding: 12px; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; color: rgba(255,255,255,0.7); cursor: pointer; transition: 0.3s; font-weight: 500; }
#gltab1:checked ~ .tb-gl-header label[for="gltab1"],
#gltab2:checked ~ .tb-gl-header label[for="gltab2"],
#gltab3:checked ~ .tb-gl-header label[for="gltab3"] { background: rgba(255,255,255,0.25); color: #fff; border-color: rgba(255,255,255,0.5); box-shadow: 0 4px 15px rgba(0,0,0,0.1); transform: translateY(-2px); }
.tb-g-panel { display: none; padding: 30px; background: rgba(255,255,255,0.15); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.3); border-radius: 16px; color: #fff; box-shadow: 0 8px 32px rgba(0,0,0,0.1); animation: float 0.4s ease; text-align: center; }
@keyframes float { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
#gltab1:checked ~ .tb-gl-content #gp1,
#gltab2:checked ~ .tb-gl-content #gp2,
#gltab3:checked ~ .tb-gl-content #gp3 { display: block; }`,
    jsCode: ``
  },

  // 5. Brutalist Tabs
  {
    _id: "tb5",
    title: "Brutalist Tabs",
    slug: "brutalist-tabs",
    description: "Thick black borders, striking yellow active states, and harsh angles.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["tabs", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 14100,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tb-br-wrap">
  <input type="radio" id="brt1" name="tb-br" checked />
  <input type="radio" id="brt2" name="tb-br" />
  
  <div class="tb-br-header">
    <label for="brt1">INFO</label>
    <label for="brt2">SPECS</label>
  </div>
  
  <div class="tb-br-content">
    <div class="tb-b-panel" id="bp1">ITEM DETAILS GO HERE.</div>
    <div class="tb-b-panel" id="bp2">DIMENSIONS: 40x40x10.</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tb-br-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; }
.tb-br-wrap input { display: none; }
.tb-br-header { display: flex; gap: 0; }
.tb-br-header label { flex: 1; text-align: center; padding: 15px; background: #fff; border: 4px solid #000; border-bottom: none; cursor: pointer; font-weight: 900; font-size: 1.1rem; transition: 0.1s; z-index: 1; }
.tb-br-header label:first-child { border-right: 2px solid #000; }
.tb-br-header label:last-child { border-left: 2px solid #000; }
#brt1:checked ~ .tb-br-header label[for="brt1"],
#brt2:checked ~ .tb-br-header label[for="brt2"] { background: #facc15; transform: translateY(-4px); box-shadow: 4px 4px 0 #000; z-index: 2; border: 4px solid #000; }
.tb-b-panel { display: none; padding: 30px; background: #fff; border: 4px solid #000; box-shadow: 8px 8px 0 #000; font-weight: bold; font-size: 1.2rem; text-transform: uppercase; z-index: 3; position: relative; }
#brt1:checked ~ .tb-br-content #bp1,
#brt2:checked ~ .tb-br-content #bp2 { display: block; }`,
    jsCode: ``
  },

  // 6. Vertical Tabs
  {
    _id: "tb6",
    title: "Vertical Tabs",
    slug: "vertical-tabs",
    description: "Tabs aligned to the left, perfect for large settings menus.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["tabs", "vertical", "settings", "sidebar"],
    isPremium: false,
    views: 16800,
    downloads: 4300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tb-v-wrap">
  <input type="radio" id="vt1" name="tb-v" checked />
  <input type="radio" id="vt2" name="tb-v" />
  <input type="radio" id="vt3" name="tb-v" />
  
  <div class="tb-v-sidebar">
    <label for="vt1">General</label>
    <label for="vt2">Appearance</label>
    <label for="vt3">Advanced</label>
  </div>
  
  <div class="tb-v-content">
    <div class="tb-v-panel" id="vp1"><h3>General</h3><p>System settings here.</p></div>
    <div class="tb-v-panel" id="vp2"><h3>Appearance</h3><p>Dark mode enabled.</p></div>
    <div class="tb-v-panel" id="vp3"><h3>Advanced</h3><p>Developer options.</p></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tb-v-wrap { width: 100%; max-width: 600px; display: flex; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); min-height: 300px; }
.tb-v-wrap input { display: none; }
.tb-v-sidebar { width: 180px; background: #f1f5f9; display: flex; flex-direction: column; border-right: 1px solid #e2e8f0; padding: 15px 0; }
.tb-v-sidebar label { padding: 12px 20px; color: #64748b; font-weight: 500; cursor: pointer; transition: 0.2s; border-left: 3px solid transparent; }
.tb-v-sidebar label:hover { background: #e2e8f0; }
#vt1:checked ~ .tb-v-sidebar label[for="vt1"],
#vt2:checked ~ .tb-v-sidebar label[for="vt2"],
#vt3:checked ~ .tb-v-sidebar label[for="vt3"] { background: #fff; color: #3b82f6; border-left-color: #3b82f6; }
.tb-v-content { flex: 1; padding: 30px; }
.tb-v-panel { display: none; color: #334155; animation: slideRight 0.3s ease; }
.tb-v-panel h3 { margin-top: 0; color: #0f172a; }
@keyframes slideRight { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }
#vt1:checked ~ .tb-v-content #vp1,
#vt2:checked ~ .tb-v-content #vp2,
#vt3:checked ~ .tb-v-content #vp3 { display: block; }`,
    jsCode: ``
  },

  // 7. Neumorphic Tabs
  {
    _id: "tb7",
    title: "Neumorphic Tabs",
    slug: "neumorphic-tabs",
    description: "Soft UI tabs that depress into the background when selected.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["tabs", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 13900,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tb-neu-wrap">
  <input type="radio" id="nt1" name="tb-neu" checked />
  <input type="radio" id="nt2" name="tb-neu" />
  
  <div class="tb-neu-header">
    <label for="nt1">Music</label>
    <label for="nt2">Podcasts</label>
  </div>
  
  <div class="tb-neu-content">
    <div class="tb-n-panel" id="np1">Play your favorite tracks.</div>
    <div class="tb-n-panel" id="np2">Listen to daily news.</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tb-neu-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 20px; }
.tb-neu-wrap input { display: none; }
.tb-neu-header { display: flex; gap: 15px; }
.tb-neu-header label { flex: 1; text-align: center; padding: 15px; border-radius: 12px; color: #a0aec0; font-weight: bold; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
#nt1:checked ~ .tb-neu-header label[for="nt1"],
#nt2:checked ~ .tb-neu-header label[for="nt2"] { color: #3182ce; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
.tb-n-panel { display: none; padding: 30px; border-radius: 16px; color: #718096; text-align: center; box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }
#nt1:checked ~ .tb-neu-content #np1,
#nt2:checked ~ .tb-neu-content #np2 { display: block; }`,
    jsCode: ``
  },

  // 8. Folder Tabs
  {
    _id: "tb8",
    title: "Folder Tabs",
    slug: "folder-tabs",
    description: "Physical manila folder style tabs using CSS clip-path or border-radius tricks.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["tabs", "folder", "skeuomorphic", "files"],
    isPremium: false,
    views: 15400,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tb-fld-wrap">
  <input type="radio" id="ft1" name="tb-fld" checked />
  <input type="radio" id="ft2" name="tb-fld" />
  
  <div class="tb-fld-header">
    <label for="ft1">Documents</label>
    <label for="ft2">Images</label>
  </div>
  
  <div class="tb-fld-content">
    <div class="tb-f-panel" id="fp1">📄 File1.pdf<br/>📄 File2.docx</div>
    <div class="tb-f-panel" id="fp2">🖼️ Image1.png<br/>🖼️ Image2.jpg</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tb-fld-wrap { width: 100%; max-width: 400px; }
.tb-fld-wrap input { display: none; }
.tb-fld-header { display: flex; gap: 5px; margin-left: 10px; }
.tb-fld-header label { padding: 12px 25px; background: #cbd5e1; color: #64748b; font-weight: 600; cursor: pointer; border-radius: 12px 12px 0 0; transition: 0.2s; position: relative; bottom: -1px; }
#ft1:checked ~ .tb-fld-header label[for="ft1"],
#ft2:checked ~ .tb-fld-header label[for="ft2"] { background: #fff; color: #0f172a; z-index: 2; border-bottom: none; }
.tb-f-panel { display: none; padding: 30px; background: #fff; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); color: #334155; line-height: 1.8; position: relative; z-index: 1; }
#ft1:checked ~ .tb-fld-content #fp1,
#ft2:checked ~ .tb-fld-content #fp2 { display: block; }`,
    jsCode: ``
  },

  // 9. Floating Block Tabs
  {
    _id: "tb9",
    title: "Floating Block Tabs",
    slug: "floating-block-tabs",
    description: "The active tab becomes a distinct floating block over the content.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["tabs", "floating", "block", "modern"],
    isPremium: true,
    views: 18100,
    downloads: 5000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tb-blk-wrap">
  <input type="radio" id="bt1" name="tb-blk" checked />
  <input type="radio" id="bt2" name="tb-blk" />
  
  <div class="tb-blk-header">
    <label for="bt1">Code</label>
    <label for="bt2">Preview</label>
  </div>
  
  <div class="tb-blk-content">
    <div class="tb-bl-panel" id="blp1"><code>console.log('Hello');</code></div>
    <div class="tb-bl-panel" id="blp2">Hello</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tb-blk-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 15px; }
.tb-blk-wrap input { display: none; }
.tb-blk-header { display: flex; gap: 10px; background: #e2e8f0; padding: 5px; border-radius: 10px; }
.tb-blk-header label { flex: 1; text-align: center; padding: 10px; color: #64748b; font-weight: 600; cursor: pointer; border-radius: 8px; transition: 0.3s; }
#bt1:checked ~ .tb-blk-header label[for="bt1"],
#bt2:checked ~ .tb-blk-header label[for="bt2"] { background: #fff; color: #0f172a; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transform: translateY(-5px); }
.tb-bl-panel { display: none; padding: 40px 20px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center; color: #334155; }
#bt1:checked ~ .tb-blk-content #blp1,
#bt2:checked ~ .tb-blk-content #blp2 { display: block; }`,
    jsCode: ``
  },

  // 10. Gradient Outline Tabs
  {
    _id: "tb10",
    title: "Gradient Outline Tabs",
    slug: "gradient-outline-tabs",
    description: "Minimal dark tabs where the active tab gains a colorful gradient border.",
    category: "Tabs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["tabs", "gradient", "dark", "outline"],
    isPremium: true,
    views: 17200,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="tb-go-wrap">
  <input type="radio" id="got1" name="tb-go" checked />
  <input type="radio" id="got2" name="tb-go" />
  
  <div class="tb-go-header">
    <label for="got1">Overview</label>
    <label for="got2">Analytics</label>
  </div>
  
  <div class="tb-go-content">
    <div class="tb-go-panel" id="gop1">Dashboard overview content.</div>
    <div class="tb-go-panel" id="gop2">Traffic: 10,230 visits.</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #0f172a; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.tb-go-wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 20px; }
.tb-go-wrap input { display: none; }
.tb-go-header { display: flex; gap: 15px; }
.tb-go-header label { flex: 1; text-align: center; padding: 12px; color: #94a3b8; font-weight: 500; cursor: pointer; border-radius: 8px; border: 2px solid transparent; transition: 0.3s; position: relative; background: #1e293b; background-clip: padding-box; }
#got1:checked ~ .tb-go-header label[for="got1"],
#got2:checked ~ .tb-go-header label[for="got2"] { color: #fff; background-image: linear-gradient(#1e293b, #1e293b), linear-gradient(135deg, #ec4899, #8b5cf6); background-origin: border-box; border-color: transparent; }
.tb-go-panel { display: none; padding: 30px; background: #1e293b; border-radius: 12px; color: #cbd5e1; text-align: center; box-shadow: 0 10px 20px rgba(0,0,0,0.3); }
#got1:checked ~ .tb-go-content #gop1,
#got2:checked ~ .tb-go-content #gop2 { display: block; }`,
    jsCode: ``
  }
];
