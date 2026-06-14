import { Design } from "./designs-data";

export const BATCH_12_DESIGNS: Design[] = [
  // 1. 3D Pushable Button
  {
    _id: "b1",
    title: "3D Pushable Button",
    slug: "3d-pushable-button",
    description: "A fun, tactile 3D button that physically depresses when clicked.",
    category: "Buttons",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["button", "3d", "push", "tactile"],
    isPremium: false,
    views: 12500,
    downloads: 5200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="btn-container">
  <button class="pushable">
    <span class="shadow"></span>
    <span class="edge"></span>
    <span class="front">
      Click Me
    </span>
  </button>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e5e7eb; font-family: sans-serif; }
.btn-container { padding: 2rem; }
.pushable { position: relative; background: transparent; padding: 0; border: none; cursor: pointer; outline-offset: 4px; transition: filter 250ms; }
.shadow { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px; background: hsl(0deg 0% 0% / 0.25); will-change: transform; transform: translateY(2px); transition: transform 600ms cubic-bezier(.3, .7, .4, 1); }
.edge { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px; background: linear-gradient(to left, hsl(340deg 100% 16%) 0%, hsl(340deg 100% 32%) 8%, hsl(340deg 100% 32%) 92%, hsl(340deg 100% 16%) 100%); }
.front { display: block; position: relative; padding: 12px 42px; border-radius: 12px; font-size: 1.25rem; color: white; background: hsl(345deg 100% 47%); will-change: transform; transform: translateY(-4px); transition: transform 600ms cubic-bezier(.3, .7, .4, 1); }
.pushable:hover { filter: brightness(110%); }
.pushable:hover .front { transform: translateY(-6px); transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5); }
.pushable:active .front { transform: translateY(-2px); transition: transform 34ms; }
.pushable:hover .shadow { transform: translateY(4px); transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5); }
.pushable:active .shadow { transform: translateY(1px); transition: transform 34ms; }`,
    jsCode: ``
  },

  // 2. Neumorphic Soft Button
  {
    _id: "b2",
    title: "Neumorphic Soft Button",
    slug: "neumorphic-soft-button",
    description: "A soft, extruded UI button using neumorphism design principles.",
    category: "Buttons",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["button", "neumorphism", "soft", "ui"],
    isPremium: false,
    views: 9800,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="btn-container">
  <button class="neu-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
    Analytics
  </button>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; font-family: 'Inter', sans-serif; }
.neu-btn { background: #e0e5ec; color: #4b5563; font-family: inherit; font-size: 1rem; font-weight: 600; padding: 1rem 2rem; border-radius: 1rem; border: none; outline: none; cursor: pointer; display: flex; align-items: center; gap: 0.8rem; box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5); transition: 0.2s ease-in-out; }
.neu-btn:hover { color: #3b82f6; }
.neu-btn:active { box-shadow: inset 6px 6px 10px 0 rgba(163,177,198, 0.5), inset -6px -6px 10px 0 rgba(255,255,255, 0.5); color: #3b82f6; }
svg { transition: 0.2s; }
.neu-btn:hover svg { stroke: #3b82f6; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Glitch Button
  {
    _id: "b3",
    title: "Cyberpunk Glitch Button",
    slug: "cyberpunk-glitch-button",
    description: "A high-tech cyberpunk button with CSS glitch animations on hover.",
    category: "Buttons",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["button", "cyberpunk", "glitch", "neon"],
    isPremium: true,
    views: 14200,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="btn-container">
  <button class="cybr-btn">
    AVAILABLE NOW<span aria-hidden>_</span>
    <span aria-hidden class="cybr-btn__glitch">AVAILABLE NOW_</span>
  </button>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #000; font-family: 'Orbitron', sans-serif; }
.cybr-btn { --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%)); --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%); --primary-hue: 0; --primary-lightness: 50; --color: hsl(0, 0%, 100%); --font-size: 26px; --shadow-primary-hue: 180; --label-size: 9px; --shadow-secondary-hue: 60; --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%); --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%); --border: 4px; --shimmy-distance: 5; --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%); --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%); --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%); --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0); --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0); --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%); --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%); font-family: 'Cyber', sans-serif; color: var(--color); cursor: pointer; background: transparent; text-transform: uppercase; font-size: var(--font-size); outline: transparent; letter-spacing: 2px; position: relative; font-weight: 700; border: 0; min-width: 300px; height: 75px; line-height: 75px; transition: background 0.2s; }
.cybr-btn:hover { --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%)); }
.cybr-btn:active { --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.6%)); }
.cybr-btn:after, .cybr-btn:before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; clip-path: var(--clip); z-index: -1; }
.cybr-btn:before { background: var(--shadow-primary); transform: translate(var(--border), 0); }
.cybr-btn:after { background: var(--primary); }
.cybr-btn__glitch { position: absolute; top: calc(var(--border) * -1); left: calc(var(--border) * -1); right: calc(var(--border) * -1); bottom: calc(var(--border) * -1); background: var(--shadow-primary); text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary); clip-path: var(--clip); animation: glitch 2s infinite; display: none; }
.cybr-btn:hover .cybr-btn__glitch { display: block; }
@keyframes glitch { 0% { clip-path: var(--clip-one); } 2%, 8% { clip-path: var(--clip-two); transform: translate(calc(var(--shimmy-distance) * -1%), 0); } 6% { clip-path: var(--clip-two); transform: translate(calc(var(--shimmy-distance) * 1%), 0); } 9% { clip-path: var(--clip-two); transform: translate(0, 0); } 10% { clip-path: var(--clip-three); transform: translate(calc(var(--shimmy-distance) * 1%), 0); } 13% { clip-path: var(--clip-three); transform: translate(0, 0); } 14%, 21% { clip-path: var(--clip-four); transform: translate(calc(var(--shimmy-distance) * 1%), 0); } 25% { clip-path: var(--clip-five); transform: translate(calc(var(--shimmy-distance) * 1%), 0); } 30% { clip-path: var(--clip-five); transform: translate(calc(var(--shimmy-distance) * -1%), 0); } 35%, 45% { clip-path: var(--clip-six); transform: translate(calc(var(--shimmy-distance) * -1%)); } 40% { clip-path: var(--clip-six); transform: translate(calc(var(--shimmy-distance) * 1%)); } 50% { clip-path: var(--clip-six); transform: translate(0, 0); } 55% { clip-path: var(--clip-seven); transform: translate(calc(var(--shimmy-distance) * 1%), 0); } 60% { clip-path: var(--clip-seven); transform: translate(0, 0); } 31%, 61%, 100% { clip-path: var(--clip-four); } }`,
    jsCode: ``
  },

  // 4. Gradient Border Button
  {
    _id: "b4",
    title: "Animated Gradient Border",
    slug: "animated-gradient-border-button",
    description: "A sleek dark button with a rotating, glowing gradient border.",
    category: "Buttons",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    tags: ["button", "gradient", "border", "animated"],
    isPremium: false,
    views: 11000,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="btn-container">
  <button class="gradient-btn">
    <span class="btn-text">Start Free Trial</span>
  </button>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #09090b; font-family: 'Inter', sans-serif; }
.gradient-btn { position: relative; padding: 4px; border-radius: 12px; border: none; background: transparent; cursor: pointer; overflow: hidden; outline: none; }
.gradient-btn::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: conic-gradient(from 0deg, transparent 0 340deg, #ec4899 360deg); animation: rotate 2s linear infinite; z-index: 1; }
.gradient-btn::after { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: conic-gradient(from 180deg, transparent 0 340deg, #3b82f6 360deg); animation: rotate 2s linear infinite; z-index: 1; }
@keyframes rotate { 100% { transform: rotate(360deg); } }
.btn-text { position: relative; display: block; background: #09090b; padding: 16px 32px; border-radius: 8px; color: #fff; font-size: 1.1rem; font-weight: 600; z-index: 2; transition: background 0.3s ease; }
.gradient-btn:hover .btn-text { background: #18181b; }`,
    jsCode: ``
  },

  // 5. Brutalist Drop Shadow Button
  {
    _id: "b5",
    title: "Brutalist Drop Shadow",
    slug: "brutalist-drop-shadow-button",
    description: "A loud, high-contrast brutalist button with a hard drop shadow that compresses on click.",
    category: "Buttons",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["button", "brutalist", "shadow", "bold"],
    isPremium: false,
    views: 8900,
    downloads: 2700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="btn-container">
  <button class="brutalist-btn">
    EXPLORE NOW
  </button>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #fef08a; font-family: 'Courier New', Courier, monospace; }
.brutalist-btn { background: #ef4444; color: #fff; font-family: inherit; font-size: 1.5rem; font-weight: 900; letter-spacing: 2px; padding: 1.2rem 3rem; border: 4px solid #000; box-shadow: 8px 8px 0 #000; cursor: pointer; text-transform: uppercase; transition: all 0.1s ease; }
.brutalist-btn:hover { background: #dc2626; }
.brutalist-btn:active { transform: translate(4px, 4px); box-shadow: 4px 4px 0 #000; }`,
    jsCode: ``
  },

  // 6. Glassmorphism Button
  {
    _id: "b6",
    title: "Glassmorphism Button",
    slug: "glassmorphism-button",
    description: "A translucent button that blurs the background behind it.",
    category: "Buttons",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["button", "glass", "blur", "translucent"],
    isPremium: true,
    views: 10500,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-bg">
  <button class="glass-btn">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    Get Started
  </button>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.glass-bg { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: linear-gradient(45deg, #f43f5e, #8b5cf6, #3b82f6); background-size: 200% 200%; animation: bgAnim 10s ease infinite; }
@keyframes bgAnim { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.glass-btn { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.4); color: #fff; padding: 1rem 2rem; border-radius: 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
.glass-btn:hover { background: rgba(255, 255, 255, 0.3); transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0,0,0,0.15); }
.glass-btn:active { transform: translateY(0); }`,
    jsCode: ``
  },

  // 7. Liquid/Gooey Hover Button
  {
    _id: "b7",
    title: "Liquid Gooey Button",
    slug: "liquid-gooey-button",
    description: "A button with a fluid, gooey hover effect using SVG filters.",
    category: "Buttons",
    thumbnail: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&q=80",
    tags: ["button", "liquid", "gooey", "animation"],
    isPremium: true,
    views: 13000,
    downloads: 4500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="btn-container">
  <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
      </filter>
    </defs>
  </svg>
  
  <button class="goo-btn">
    Hover Me
    <span class="bubbles">
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
    </span>
  </button>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #0f172a; font-family: 'Inter', sans-serif; }
.goo-btn { position: relative; padding: 1.2rem 3rem; font-size: 1.2rem; font-weight: bold; color: #fff; background: #8b5cf6; border: none; border-radius: 30px; cursor: pointer; outline: none; z-index: 1; transition: 0.2s; filter: url('#goo'); }
.goo-btn:hover { background: #7c3aed; }
.bubbles { position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: -1; }
.bubble { position: absolute; background: #8b5cf6; border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.goo-btn:hover .bubble:nth-child(1) { width: 30px; height: 30px; transform: translate(-200%, -150%); }
.goo-btn:hover .bubble:nth-child(2) { width: 40px; height: 40px; transform: translate(150%, -200%); }
.goo-btn:hover .bubble:nth-child(3) { width: 35px; height: 35px; transform: translate(180%, 100%); }
.goo-btn:hover .bubble:nth-child(4) { width: 25px; height: 25px; transform: translate(-180%, 150%); }`,
    jsCode: ``
  },

  // 8. Loading Spinner Button
  {
    _id: "b8",
    title: "Submit to Loading Button",
    slug: "submit-loading-button",
    description: "A button that seamlessly transitions into a loading spinner upon click.",
    category: "Buttons",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["button", "loading", "spinner", "interactive"],
    isPremium: false,
    views: 8500,
    downloads: 3300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="btn-container">
  <button class="load-btn" onclick="this.classList.toggle('loading')">
    <span class="btn-text">Submit Data</span>
    <span class="spinner"></span>
  </button>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f8fafc; font-family: 'Inter', sans-serif; }
.load-btn { position: relative; background: #2563eb; color: #fff; border: none; border-radius: 8px; width: 160px; height: 50px; font-size: 1rem; font-weight: bold; cursor: pointer; transition: 0.3s; display: flex; justify-content: center; align-items: center; overflow: hidden; }
.load-btn:hover { background: #1d4ed8; }
.btn-text { transition: 0.3s; opacity: 1; transform: translateY(0); }
.spinner { position: absolute; width: 24px; height: 24px; border: 3px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: #fff; opacity: 0; transform: translateY(20px); transition: 0.3s; animation: spin 1s linear infinite; animation-play-state: paused; }
@keyframes spin { to { transform: rotate(360deg); } }
.load-btn.loading { width: 50px; border-radius: 25px; pointer-events: none; }
.load-btn.loading .btn-text { opacity: 0; transform: translateY(-20px); }
.load-btn.loading .spinner { opacity: 1; transform: translateY(0); animation-play-state: running; }`,
    jsCode: ``
  },

  // 9. Swipe-to-Confirm Button
  {
    _id: "b9",
    title: "Swipe to Confirm",
    slug: "swipe-to-confirm-button",
    description: "A mobile-friendly button requiring a swipe gesture to trigger an action.",
    category: "Buttons",
    thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    tags: ["button", "swipe", "confirm", "mobile"],
    isPremium: true,
    views: 7400,
    downloads: 2100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="btn-container">
  <div class="swipe-btn">
    <div class="s-bg"></div>
    <div class="s-text">Swipe to Pay $49.00</div>
    <div class="s-thumb">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #fff; font-family: 'Inter', sans-serif; }
.swipe-btn { position: relative; width: 300px; height: 60px; background: #f1f5f9; border-radius: 30px; border: 1px solid #cbd5e1; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.s-bg { position: absolute; top: 0; left: 0; height: 100%; width: 0; background: #10b981; transition: width 0.1s; }
.s-text { position: relative; z-index: 1; color: #64748b; font-weight: bold; pointer-events: none; transition: 0.3s; }
.s-thumb { position: absolute; top: 5px; left: 5px; width: 50px; height: 50px; background: #fff; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.2); display: flex; justify-content: center; align-items: center; color: #10b981; cursor: grab; transition: transform 0.1s; z-index: 2; }
.s-thumb:active { cursor: grabbing; }`,
    jsCode: `const thumb = document.querySelector('.s-thumb');
const bg = document.querySelector('.s-bg');
const text = document.querySelector('.s-text');
const container = document.querySelector('.swipe-btn');

let isDragging = false;
let startX = 0;
const maxDrag = container.offsetWidth - thumb.offsetWidth - 10;

thumb.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  let moveX = e.clientX - startX;
  if (moveX < 0) moveX = 0;
  if (moveX > maxDrag) moveX = maxDrag;
  
  thumb.style.transform = \`translateX(\${moveX}px)\`;
  bg.style.width = \`\${moveX + 50}px\`;
  
  if(moveX > maxDrag * 0.5) {
    text.style.color = '#fff';
  } else {
    text.style.color = '#64748b';
  }
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  const currentTransform = thumb.style.transform.replace(/[^0-9.]/g, '');
  
  if (currentTransform >= maxDrag * 0.9) {
    thumb.style.transform = \`translateX(\${maxDrag}px)\`;
    bg.style.width = '100%';
    text.innerText = "Confirmed!";
    text.style.color = '#fff';
  } else {
    thumb.style.transform = 'translateX(0)';
    bg.style.width = '0';
    text.style.color = '#64748b';
  }
});`
  },

  // 10. Elegant Magnetic Button
  {
    _id: "b10",
    title: "Magnetic Hover Button",
    slug: "magnetic-hover-button",
    description: "An elegant, minimalist button that follows the cursor slightly when hovered.",
    category: "Buttons",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    tags: ["button", "magnetic", "elegant", "minimalist"],
    isPremium: true,
    views: 9100,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="btn-container">
  <button class="magnetic-btn">
    <span class="m-text">Our Portfolio</span>
  </button>
</div>`,
    cssCode: `body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #e0e5ec; font-family: 'Helvetica', sans-serif; }
.magnetic-btn { position: relative; width: 150px; height: 150px; border-radius: 50%; border: 1px solid #111; background: transparent; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: transform 0.2s cubic-bezier(0.1, 0.7, 1.0, 0.1); overflow: hidden; }
.magnetic-btn::before { content: ''; position: absolute; bottom: -100%; left: 0; width: 100%; height: 100%; background: #111; border-radius: 50%; transition: 0.4s cubic-bezier(0.1, 0.7, 0.1, 1.0); z-index: -1; }
.magnetic-btn:hover::before { bottom: 0; border-radius: 0; }
.m-text { color: #111; font-weight: 500; font-size: 1.1rem; transition: 0.3s; pointer-events: none; }
.magnetic-btn:hover .m-text { color: #fff; }`,
    jsCode: `const mBtn = document.querySelector('.magnetic-btn');
const mText = document.querySelector('.m-text');

mBtn.addEventListener('mousemove', (e) => {
  const rect = mBtn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  mBtn.style.transform = \`translate(\${x * 0.3}px, \${y * 0.3}px)\`;
  mText.style.transform = \`translate(\${x * 0.2}px, \${y * 0.2}px)\`;
});

mBtn.addEventListener('mouseleave', () => {
  mBtn.style.transform = 'translate(0, 0)';
  mText.style.transform = 'translate(0, 0)';
});`
  }
];
