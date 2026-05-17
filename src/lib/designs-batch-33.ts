import { Design } from "./designs-data";

export const BATCH_33_DESIGNS: Design[] = [
  // 1. Horizontal Numbered Stepper
  {
    _id: "stp1",
    title: "Classic Numbered Stepper",
    slug: "classic-numbered-stepper",
    description: "A standard horizontal step indicator with connecting lines, perfect for checkout flows.",
    category: "Steppers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stepper", "wizard", "horizontal", "checkout"],
    isPremium: false,
    views: 18500,
    downloads: 5200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="step-classic">
  <div class="step-item complete">
    <div class="step-circle">1</div>
    <div class="step-label">Cart</div>
  </div>
  <div class="step-line complete"></div>
  <div class="step-item active">
    <div class="step-circle">2</div>
    <div class="step-label">Shipping</div>
  </div>
  <div class="step-line"></div>
  <div class="step-item">
    <div class="step-circle">3</div>
    <div class="step-label">Payment</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.step-classic { display: flex; align-items: center; width: 100%; max-width: 400px; padding: 20px; background: #fff; border-radius: 12px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
.step-item { display: flex; flex-direction: column; align-items: center; position: relative; z-index: 2; width: 60px; }
.step-circle { width: 32px; height: 32px; border-radius: 50%; background: #e2e8f0; color: #64748b; display: flex; justify-content: center; align-items: center; font-weight: 600; font-size: 0.9rem; border: 2px solid #fff; box-shadow: 0 0 0 2px #e2e8f0; transition: 0.3s; }
.step-label { font-size: 0.75rem; font-weight: 600; color: #64748b; margin-top: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
.step-line { flex-grow: 1; height: 3px; background: #e2e8f0; margin: 0 -15px; position: relative; top: -12px; z-index: 1; transition: 0.3s; }
.step-item.complete .step-circle { background: #3b82f6; color: #fff; box-shadow: 0 0 0 2px #3b82f6; }
.step-item.complete .step-label { color: #3b82f6; }
.step-line.complete { background: #3b82f6; }
.step-item.active .step-circle { background: #fff; color: #3b82f6; box-shadow: 0 0 0 2px #3b82f6; }
.step-item.active .step-label { color: #0f172a; }`,
    jsCode: ``
  },

  // 2. Vertical Timeline Stepper
  {
    _id: "stp2",
    title: "Vertical Timeline Stepper",
    slug: "vertical-timeline-stepper",
    description: "A vertical step progression ideal for forms or history tracking.",
    category: "Steppers",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["stepper", "vertical", "timeline", "form"],
    isPremium: false,
    views: 15200,
    downloads: 4100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="step-vert">
  <div class="v-step complete">
    <div class="v-circle">✓</div>
    <div class="v-content">
      <h4>Account Details</h4>
      <p>Setup your login credentials.</p>
    </div>
  </div>
  <div class="v-step active">
    <div class="v-circle">2</div>
    <div class="v-content">
      <h4>Personal Info</h4>
      <p>Enter your contact information.</p>
    </div>
  </div>
  <div class="v-step">
    <div class="v-circle">3</div>
    <div class="v-content">
      <h4>Preferences</h4>
      <p>Select your interests.</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.step-vert { display: flex; flex-direction: column; max-width: 300px; padding: 20px; }
.v-step { display: flex; gap: 15px; position: relative; padding-bottom: 30px; }
.v-step:last-child { padding-bottom: 0; }
.v-step::after { content: ''; position: absolute; left: 15px; top: 32px; bottom: 0; width: 2px; background: #e2e8f0; }
.v-step:last-child::after { display: none; }
.v-step.complete::after { background: #10b981; }
.v-circle { width: 32px; height: 32px; border-radius: 50%; background: #f1f5f9; color: #94a3b8; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 0.9rem; z-index: 2; position: relative; }
.v-content h4 { margin: 0 0 5px 0; font-size: 0.95rem; color: #334155; }
.v-content p { margin: 0; font-size: 0.8rem; color: #94a3b8; }
.v-step.complete .v-circle { background: #10b981; color: #fff; }
.v-step.complete .v-content h4 { color: #10b981; }
.v-step.active .v-circle { background: #3b82f6; color: #fff; box-shadow: 0 0 0 4px #dbeafe; }
.v-step.active .v-content h4 { color: #0f172a; }`,
    jsCode: ``
  },

  // 3. Dot Progress Stepper
  {
    _id: "stp3",
    title: "Dot Progress Stepper",
    slug: "dot-progress-stepper",
    description: "A minimalist dot-based stepper often used in mobile onboarding screens.",
    category: "Steppers",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["stepper", "dots", "minimal", "onboarding"],
    isPremium: false,
    views: 17400,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="step-dots-wrap">
  <div class="step-dots">
    <div class="s-dot complete"></div>
    <div class="s-dot active"></div>
    <div class="s-dot"></div>
    <div class="s-dot"></div>
  </div>
  <div class="s-dot-label">Step 2 of 4</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.step-dots-wrap { display: flex; flex-direction: column; align-items: center; gap: 15px; background: #fff; padding: 20px 40px; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
.step-dots { display: flex; gap: 12px; align-items: center; }
.s-dot { width: 10px; height: 10px; border-radius: 50%; background: #e4e4e7; transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.s-dot.complete { background: #18181b; }
.s-dot.active { background: #18181b; width: 24px; border-radius: 5px; }
.s-dot-label { font-size: 0.85rem; font-weight: 600; color: #71717a; }`,
    jsCode: ``
  },

  // 4. Compact Pill Stepper
  {
    _id: "stp4",
    title: "Compact Pill Stepper",
    slug: "compact-pill-stepper",
    description: "A space-saving progress indicator showing steps inside a unified pill container.",
    category: "Steppers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stepper", "pill", "compact", "clean"],
    isPremium: false,
    views: 16100,
    downloads: 4300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="step-pill">
  <div class="p-seg complete">1</div>
  <div class="p-seg active">2</div>
  <div class="p-seg">3</div>
  <div class="p-seg">4</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.step-pill { display: flex; background: #e2e8f0; border-radius: 30px; overflow: hidden; padding: 4px; gap: 4px; width: 200px; }
.p-seg { flex: 1; text-align: center; padding: 6px 0; font-size: 0.85rem; font-weight: bold; color: #94a3b8; border-radius: 20px; transition: 0.3s; }
.p-seg.complete { background: #94a3b8; color: #fff; }
.p-seg.active { background: #fff; color: #0f172a; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }`,
    jsCode: ``
  },

  // 5. Neumorphic Stepper
  {
    _id: "stp5",
    title: "Neumorphic Stepper",
    slug: "neumorphic-stepper",
    description: "Soft UI stepper where completed steps are pressed inward.",
    category: "Steppers",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["stepper", "neumorphism", "soft", "3d"],
    isPremium: true,
    views: 13900,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="step-neu">
  <div class="n-item complete">1</div>
  <div class="n-line complete"></div>
  <div class="n-item active">2</div>
  <div class="n-line"></div>
  <div class="n-item">3</div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.step-neu { display: flex; align-items: center; padding: 20px 30px; border-radius: 20px; background: #e0e5ec; box-shadow: 8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.5); }
.n-item { width: 40px; height: 40px; border-radius: 50%; background: #e0e5ec; display: flex; justify-content: center; align-items: center; font-weight: bold; color: #a0aec0; box-shadow: 4px 4px 8px rgba(163,177,198,0.6), -4px -4px 8px rgba(255,255,255,0.5); transition: 0.3s; z-index: 2; }
.n-line { width: 50px; height: 6px; background: #e0e5ec; margin: 0 -5px; box-shadow: inset 2px 2px 4px rgba(163,177,198,0.4), inset -2px -2px 4px rgba(255,255,255,0.4); z-index: 1; transition: 0.3s; }
.n-item.complete { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); color: #4299e1; }
.n-line.complete { background: #4299e1; box-shadow: none; }
.n-item.active { color: #4299e1; border: 2px solid #e0e5ec; }`,
    jsCode: ``
  },

  // 6. Cyberpunk Stepper
  {
    _id: "stp6",
    title: "Cyberpunk Stepper",
    slug: "cyberpunk-stepper",
    description: "Terminal interface stepper with glowing neon elements.",
    category: "Steppers",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["stepper", "cyberpunk", "neon", "gaming"],
    isPremium: true,
    views: 14800,
    downloads: 3900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="step-cy">
  <div class="c-item complete">[01] INIT</div>
  <div class="c-line complete"></div>
  <div class="c-item active">[02] HACK</div>
  <div class="c-line"></div>
  <div class="c-item">[03] EXIT</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.step-cy { display: flex; align-items: center; border: 1px solid #333; padding: 15px 25px; background: #0a0a0a; position: relative; }
.step-cy::before { content: ''; position: absolute; top: -2px; left: -2px; width: 10px; height: 10px; border-top: 2px solid #0ff; border-left: 2px solid #0ff; }
.c-item { color: #444; font-weight: bold; font-size: 0.9rem; padding: 5px 10px; border: 1px dashed #333; }
.c-line { width: 30px; height: 2px; background: #333; border-top: 1px dashed #222; }
.c-item.complete { color: #0ff; border-color: #0ff; text-shadow: 0 0 5px #0ff; box-shadow: inset 0 0 10px rgba(0,255,255,0.2); }
.c-line.complete { background: #0ff; border-color: #0ff; box-shadow: 0 0 5px #0ff; }
.c-item.active { color: #f0f; border-color: #f0f; text-shadow: 0 0 5px #f0f; box-shadow: inset 0 0 10px rgba(255,0,255,0.2); animation: blink 1s infinite; }
@keyframes blink { 50% { border-color: transparent; } }`,
    jsCode: ``
  },

  // 7. Glassmorphism Stepper
  {
    _id: "stp7",
    title: "Glassmorphism Stepper",
    slug: "glassmorphism-stepper",
    description: "A beautiful frosted glass stepper floating over an animated gradient.",
    category: "Steppers",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["stepper", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 17700,
    downloads: 4800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="step-gl">
    <div class="g-item complete">✔</div>
    <div class="g-line complete"></div>
    <div class="g-item active">2</div>
    <div class="g-line"></div>
    <div class="g-item">3</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #10b981, #3b82f6, #6366f1); background-size: 200% 200%; animation: glassBg 10s ease infinite; }
@keyframes glassBg { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.step-gl { display: flex; align-items: center; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.3); padding: 20px 30px; border-radius: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.g-item { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.2); color: rgba(255,255,255,0.7); display: flex; justify-content: center; align-items: center; font-weight: bold; border: 1px solid rgba(255,255,255,0.2); z-index: 2; transition: 0.3s; }
.g-line { width: 40px; height: 2px; background: rgba(255,255,255,0.2); z-index: 1; transition: 0.3s; }
.g-item.complete { background: #fff; color: #3b82f6; border-color: #fff; box-shadow: 0 0 15px rgba(255,255,255,0.5); }
.g-line.complete { background: #fff; height: 3px; box-shadow: 0 0 10px rgba(255,255,255,0.5); }
.g-item.active { background: rgba(255,255,255,0.4); color: #fff; border-color: #fff; }`,
    jsCode: ``
  },

  // 8. Brutalist Stepper
  {
    _id: "stp8",
    title: "Brutalist Stepper",
    slug: "brutalist-stepper",
    description: "High contrast, bold fonts, and heavy borders for a striking UI.",
    category: "Steppers",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["stepper", "brutalist", "bold", "typography"],
    isPremium: false,
    views: 11500,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="step-br">
  <div class="b-item complete">STEP 1</div>
  <div class="b-sep">→</div>
  <div class="b-item active">STEP 2</div>
  <div class="b-sep">→</div>
  <div class="b-item">STEP 3</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.step-br { display: flex; align-items: center; gap: 10px; }
.b-item { padding: 10px 20px; border: 4px solid #000; background: #fff; color: #000; font-weight: 900; font-size: 1.1rem; box-shadow: 4px 4px 0 #000; transition: 0.1s; }
.b-sep { font-weight: 900; font-size: 1.5rem; color: #000; }
.b-item.complete { background: #000; color: #fff; text-decoration: line-through; box-shadow: 4px 4px 0 #a3a3a3; }
.b-item.active { background: #facc15; box-shadow: 6px 6px 0 #ef4444; transform: translate(-2px, -2px); }`,
    jsCode: ``
  },

  // 9. Icon Stepper
  {
    _id: "stp9",
    title: "Icon Progress Stepper",
    slug: "icon-progress-stepper",
    description: "Replaces standard numbers with descriptive icons for each step.",
    category: "Steppers",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["stepper", "icon", "navigation", "clean"],
    isPremium: false,
    views: 15100,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="step-icon">
  <div class="i-item complete">👤</div>
  <div class="i-line complete"></div>
  <div class="i-item active">💳</div>
  <div class="i-line"></div>
  <div class="i-item">📦</div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.step-icon { display: flex; align-items: center; width: 100%; max-width: 350px; }
.i-item { width: 44px; height: 44px; border-radius: 50%; background: #f1f5f9; border: 2px solid #e2e8f0; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; z-index: 2; transition: 0.3s; opacity: 0.5; }
.i-line { flex-grow: 1; height: 2px; background: #e2e8f0; margin: 0 -5px; z-index: 1; transition: 0.3s; }
.i-item.complete { opacity: 1; background: #10b981; border-color: #10b981; filter: grayscale(100%) brightness(200%); }
.i-line.complete { background: #10b981; }
.i-item.active { opacity: 1; background: #fff; border-color: #3b82f6; box-shadow: 0 0 0 4px #dbeafe; }`,
    jsCode: ``
  },

  // 10. Floating Label Stepper
  {
    _id: "stp10",
    title: "Floating Label Stepper",
    slug: "floating-label-stepper",
    description: "Compact stepper where labels hover above the progress nodes.",
    category: "Steppers",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["stepper", "floating", "label", "modern"],
    isPremium: true,
    views: 16800,
    downloads: 4500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="step-float">
  <div class="f-item complete">
    <span class="f-label">Cart</span>
    <div class="f-node"></div>
  </div>
  <div class="f-line complete"></div>
  <div class="f-item active">
    <span class="f-label">Pay</span>
    <div class="f-node"></div>
  </div>
  <div class="f-line"></div>
  <div class="f-item">
    <span class="f-label">Done</span>
    <div class="f-node"></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.step-float { display: flex; align-items: flex-end; width: 100%; max-width: 300px; padding-top: 30px; }
.f-item { display: flex; flex-direction: column; align-items: center; position: relative; z-index: 2; }
.f-label { position: absolute; top: -25px; font-size: 0.75rem; font-weight: 700; color: #94a3b8; text-transform: uppercase; transition: 0.3s; }
.f-node { width: 16px; height: 16px; border-radius: 50%; background: #fff; border: 3px solid #cbd5e1; transition: 0.3s; }
.f-line { flex-grow: 1; height: 3px; background: #cbd5e1; margin: 0 -2px; position: relative; bottom: 6px; z-index: 1; transition: 0.3s; }
.f-item.complete .f-node { background: #2563eb; border-color: #2563eb; }
.f-item.complete .f-label { color: #2563eb; }
.f-line.complete { background: #2563eb; }
.f-item.active .f-node { border-color: #2563eb; box-shadow: 0 0 0 4px #dbeafe; }
.f-item.active .f-label { color: #0f172a; top: -30px; }`,
    jsCode: ``
  }
];
