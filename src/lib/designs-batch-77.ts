import { Design } from "./designs-data";

export const BATCH_77_DESIGNS: Design[] = [
  // 1. Classic Split Contact Form
  {
    _id: "cf1",
    title: "Classic Split Form",
    slug: "classic-split-form",
    description: "Standard layout with contact info on the left and form on the right.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["contact", "form", "classic", "split"],
    isPremium: false,
    views: 52100,
    downloads: 15400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-cl">
  <div class="cf-c-info">
    <h2>Get in touch</h2>
    <p>We'd love to hear from you. Fill out the form and our team will get back to you within 24 hours.</p>
    <div class="cf-c-details">
      <p>📍 123 Innovation Drive, Tech City</p>
      <p>📧 hello@yourui.com</p>
      <p>📞 +1 (555) 123-4567</p>
    </div>
  </div>
  <form class="cf-c-form" onsubmit="event.preventDefault()">
    <div class="cf-c-row">
      <div class="cf-c-group">
        <label>First Name</label>
        <input type="text" placeholder="John" required />
      </div>
      <div class="cf-c-group">
        <label>Last Name</label>
        <input type="text" placeholder="Doe" required />
      </div>
    </div>
    <div class="cf-c-group">
      <label>Email Address</label>
      <input type="email" placeholder="john@example.com" required />
    </div>
    <div class="cf-c-group">
      <label>Message</label>
      <textarea rows="5" placeholder="How can we help?" required></textarea>
    </div>
    <button type="submit" class="cf-c-btn">Send Message</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 80px 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cf-cl { display: flex; background: #fff; border-radius: 20px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); max-width: 1000px; width: 100%; overflow: hidden; }
.cf-c-info { flex: 1; background: #0f172a; color: #fff; padding: 50px; }
.cf-c-info h2 { font-size: 2.5rem; margin: 0 0 15px; }
.cf-c-info p { color: #94a3b8; line-height: 1.6; margin: 0 0 40px; font-size: 1.1rem; }
.cf-c-details p { color: #cbd5e1; margin-bottom: 20px; display: flex; align-items: center; gap: 15px; font-size: 1.05rem; }
.cf-c-form { flex: 1.2; padding: 50px; display: flex; flex-direction: column; gap: 20px; }
.cf-c-row { display: flex; gap: 20px; }
.cf-c-group { display: flex; flex-direction: column; gap: 8px; flex: 1; }
.cf-c-group label { color: #475569; font-weight: 500; font-size: 0.95rem; }
.cf-c-group input, .cf-c-group textarea { padding: 14px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; font-size: 1rem; transition: 0.2s; outline: none; background: #f8fafc; }
.cf-c-group input:focus, .cf-c-group textarea:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); background: #fff; }
.cf-c-group textarea { resize: vertical; }
.cf-c-btn { margin-top: 10px; background: #3b82f6; color: #fff; border: none; padding: 16px; border-radius: 8px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: 0.3s; }
.cf-c-btn:hover { background: #2563eb; }
@media (max-width: 768px) { .cf-cl { flex-direction: column; } .cf-c-row { flex-direction: column; gap: 20px; } }`,
    jsCode: ``
  },

  // 2. Minimal Centered Form
  {
    _id: "cf2",
    title: "Minimal Centered Form",
    slug: "minimal-centered-form",
    description: "Ultra-clean, single-column contact form focused on simplicity.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["contact", "minimal", "clean", "centered"],
    isPremium: false,
    views: 41200,
    downloads: 12100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-mn">
  <h2>Say Hello</h2>
  <p>Fill out the form below to reach out.</p>
  <form onsubmit="event.preventDefault()">
    <input type="text" placeholder="Name" required />
    <input type="email" placeholder="Email" required />
    <textarea rows="4" placeholder="Message" required></textarea>
    <button type="submit">Submit ➔</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.cf-mn { max-width: 500px; width: 100%; text-align: center; }
.cf-mn h2 { font-size: 3rem; color: #111; margin: 0 0 10px; letter-spacing: -1px; }
.cf-mn p { color: #666; font-size: 1.1rem; margin: 0 0 40px; }
.cf-mn form { display: flex; flex-direction: column; gap: 20px; }
.cf-mn input, .cf-mn textarea { width: 100%; box-sizing: border-box; padding: 16px 0; border: none; border-bottom: 2px solid #eaeaea; font-family: inherit; font-size: 1.2rem; transition: 0.3s; outline: none; background: transparent; }
.cf-mn input:focus, .cf-mn textarea:focus { border-bottom-color: #111; }
.cf-mn textarea { resize: none; margin-bottom: 20px; }
.cf-mn button { align-self: flex-start; background: transparent; color: #111; border: none; padding: 0; font-size: 1.5rem; font-weight: 700; cursor: pointer; transition: 0.2s; }
.cf-mn button:hover { transform: translateX(10px); color: #3b82f6; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Terminal Form
  {
    _id: "cf3",
    title: "Cyberpunk Terminal Form",
    slug: "cyberpunk-terminal-form",
    description: "Hacker-themed contact interface with neon accents.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["contact", "cyberpunk", "terminal", "neon"],
    isPremium: true,
    views: 35500,
    downloads: 9400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-cy">
  <div class="cy-head">SECURE_COMM_CHANNEL [ONLINE]</div>
  <form onsubmit="event.preventDefault()">
    <div class="cy-group">
      <label>> IDENTIFIER:</label>
      <input type="text" placeholder="GUEST_01" required />
    </div>
    <div class="cy-group">
      <label>> ENCRYPTED_ROUTING (EMAIL):</label>
      <input type="email" placeholder="user@node.net" required />
    </div>
    <div class="cy-group">
      <label>> DATA_PAYLOAD:</label>
      <textarea rows="4" placeholder="Enter message sequence..." required></textarea>
    </div>
    <button type="submit" class="cy-btn">[ TRANSMIT_DATA ]</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 80px 20px; display: flex; justify-content: center; }
.cf-cy { background: rgba(0,20,0,0.8); border: 1px solid #0f0; padding: 40px; max-width: 600px; width: 100%; box-shadow: 0 0 20px rgba(0,255,0,0.1) inset; position: relative; }
.cf-cy::before, .cf-cy::after { content: ''; position: absolute; width: 15px; height: 15px; border: 2px solid #0f0; }
.cf-cy::before { top: -2px; left: -2px; border-right: none; border-bottom: none; }
.cf-cy::after { bottom: -2px; right: -2px; border-left: none; border-top: none; }
.cy-head { color: #0f0; font-weight: bold; border-bottom: 1px dashed #0f0; padding-bottom: 15px; margin-bottom: 30px; letter-spacing: 1px; }
.cy-group { margin-bottom: 25px; }
.cy-group label { display: block; color: #0aa; margin-bottom: 10px; font-weight: bold; }
.cf-cy input, .cf-cy textarea { width: 100%; box-sizing: border-box; background: rgba(0,255,0,0.05); border: 1px solid #055; color: #0f0; padding: 12px; font-family: inherit; font-size: 1rem; outline: none; transition: 0.2s; resize: vertical; }
.cf-cy input:focus, .cf-cy textarea:focus { border-color: #0f0; background: rgba(0,255,0,0.1); box-shadow: 0 0 10px rgba(0,255,0,0.2); }
.cf-cy input::placeholder, .cf-cy textarea::placeholder { color: #055; }
.cy-btn { width: 100%; background: transparent; border: 1px solid #f0f; color: #f0f; padding: 15px; font-family: inherit; font-size: 1.2rem; font-weight: bold; cursor: pointer; transition: 0.2s; }
.cy-btn:hover { background: rgba(255,0,255,0.2); box-shadow: 0 0 15px #f0f; text-shadow: 0 0 5px #f0f; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Contact Form
  {
    _id: "cf4",
    title: "Glassmorphism Contact Form",
    slug: "glassmorphism-contact-form",
    description: "Frosted glass form floating over a vibrant background.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["contact", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 48900,
    downloads: 14200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="cf-gl">
    <h2>Contact Us</h2>
    <form onsubmit="event.preventDefault()">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows="4" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.cf-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 50px 40px; max-width: 500px; width: 100%; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.cf-gl h2 { color: #fff; margin: 0 0 30px; font-size: 2rem; text-align: center; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.cf-gl form { display: flex; flex-direction: column; gap: 20px; }
.cf-gl input, .cf-gl textarea { width: 100%; box-sizing: border-box; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; padding: 16px; color: #fff; font-family: inherit; font-size: 1rem; outline: none; transition: 0.3s; resize: vertical; }
.cf-gl input::placeholder, .cf-gl textarea::placeholder { color: rgba(255,255,255,0.6); }
.cf-gl input:focus, .cf-gl textarea:focus { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.5); }
.cf-gl button { background: #fff; color: #8b5cf6; border: none; padding: 16px; border-radius: 12px; font-size: 1.1rem; font-weight: 700; cursor: pointer; transition: 0.3s; margin-top: 10px; }
.cf-gl button:hover { background: rgba(255,255,255,0.9); box-shadow: 0 10px 20px rgba(0,0,0,0.1); transform: translateY(-2px); }`,
    jsCode: ``
  },

  // 5. Brutalist Contact Form
  {
    _id: "cf5",
    title: "Brutalist Contact Form",
    slug: "brutalist-contact-form",
    description: "Loud, high-contrast brutalist form with thick black borders.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["contact", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 34800,
    downloads: 7900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-br">
  <h2>WRITE TO US</h2>
  <form onsubmit="event.preventDefault()">
    <label>NAME</label>
    <input type="text" required />
    <label>EMAIL</label>
    <input type="email" required />
    <label>MESSAGE</label>
    <textarea rows="5" required></textarea>
    <button type="submit">SUBMIT</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.cf-br { background: #facc15; border: 8px solid #000; padding: 40px; max-width: 600px; width: 100%; box-shadow: 15px 15px 0 #000; }
.cf-br h2 { font-size: 3.5rem; font-weight: 900; margin: 0 0 30px; border-bottom: 8px solid #000; padding-bottom: 10px; letter-spacing: -2px; }
.cf-br form { display: flex; flex-direction: column; }
.cf-br label { font-size: 1.5rem; font-weight: 900; margin-bottom: 5px; }
.cf-br input, .cf-br textarea { width: 100%; box-sizing: border-box; background: #fff; border: 4px solid #000; padding: 15px; font-family: inherit; font-size: 1.2rem; margin-bottom: 25px; outline: none; transition: 0.1s; resize: vertical; box-shadow: 4px 4px 0 #000; }
.cf-br input:focus, .cf-br textarea:focus { background: #e5e5e5; transform: translate(2px, 2px); box-shadow: 2px 2px 0 #000; }
.cf-br button { background: #3b82f6; color: #fff; border: 6px solid #000; padding: 20px; font-size: 2rem; font-weight: 900; cursor: pointer; transition: 0.1s; box-shadow: 8px 8px 0 #000; }
.cf-br button:hover { transform: translate(4px, 4px); box-shadow: 4px 4px 0 #000; background: #000; color: #facc15; }`,
    jsCode: ``
  },

  // 6. Neumorphic Contact Form
  {
    _id: "cf6",
    title: "Neumorphic Contact Form",
    slug: "neumorphic-contact-form",
    description: "Soft UI design with inset input fields and extruded button.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["contact", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 36300,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-neu">
  <h2>Drop a line</h2>
  <form onsubmit="event.preventDefault()">
    <input type="text" placeholder="Name" required />
    <input type="email" placeholder="Email" required />
    <textarea rows="4" placeholder="Message" required></textarea>
    <button type="submit">Send</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.cf-neu { background: #e0e5ec; padding: 50px; border-radius: 30px; box-shadow: 20px 20px 40px rgba(163,177,198,0.6), -20px -20px 40px rgba(255,255,255,0.5); max-width: 500px; width: 100%; text-align: center; }
.cf-neu h2 { color: #4a5568; font-size: 2rem; margin: 0 0 30px; }
.cf-neu form { display: flex; flex-direction: column; gap: 25px; }
.cf-neu input, .cf-neu textarea { width: 100%; box-sizing: border-box; background: #e0e5ec; border: none; padding: 20px; border-radius: 15px; font-family: inherit; font-size: 1rem; color: #4a5568; outline: none; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); resize: vertical; transition: 0.2s; }
.cf-neu input:focus, .cf-neu textarea:focus { box-shadow: inset 8px 8px 16px rgba(163,177,198,0.7), inset -8px -8px 16px rgba(255,255,255,0.6); }
.cf-neu input::placeholder, .cf-neu textarea::placeholder { color: #a0aec0; }
.cf-neu button { padding: 20px; border-radius: 15px; border: none; background: #e0e5ec; color: #3182ce; font-weight: bold; font-size: 1.2rem; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; margin-top: 10px; }
.cf-neu button:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); color: #2b6cb0; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Form
  {
    _id: "cf7",
    title: "Dark Mode Glow Form",
    slug: "dark-mode-glow-form",
    description: "Deep dark layout with glowing neon edges on focus.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["contact", "dark", "glow", "gradient"],
    isPremium: true,
    views: 44400,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-dg">
  <h2>Contact Support</h2>
  <form onsubmit="event.preventDefault()">
    <div class="dg-group">
      <input type="text" placeholder="Name" required />
    </div>
    <div class="dg-group">
      <input type="email" placeholder="Email" required />
    </div>
    <div class="dg-group">
      <textarea rows="4" placeholder="Describe your issue..." required></textarea>
    </div>
    <button type="submit" class="dg-btn">Submit Ticket</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.cf-dg { background: #0f172a; padding: 50px; border-radius: 24px; border: 1px solid #1e293b; max-width: 500px; width: 100%; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
.cf-dg h2 { color: #f8fafc; font-size: 2rem; margin: 0 0 30px; text-align: center; }
.cf-dg form { display: flex; flex-direction: column; gap: 20px; }
.dg-group { position: relative; }
.dg-group::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: #8b5cf6; transition: 0.3s; box-shadow: 0 0 10px #8b5cf6; }
.dg-group:focus-within::after { width: 100%; }
.cf-dg input, .cf-dg textarea { width: 100%; box-sizing: border-box; background: #1e293b; border: 1px solid transparent; padding: 16px; border-radius: 8px 8px 0 0; color: #fff; font-family: inherit; font-size: 1rem; outline: none; transition: 0.3s; resize: vertical; }
.cf-dg input::placeholder, .cf-dg textarea::placeholder { color: #64748b; }
.dg-btn { background: #8b5cf6; color: #fff; border: none; padding: 16px; border-radius: 8px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: 0.3s; margin-top: 10px; box-shadow: 0 4px 15px rgba(139,92,246,0.3); }
.dg-btn:hover { background: #7c3aed; box-shadow: 0 6px 20px rgba(139,92,246,0.5); }`,
    jsCode: ``
  },

  // 8. Floating Label Form
  {
    _id: "cf8",
    title: "Floating Label Form",
    slug: "floating-label-form",
    description: "Modern form where placeholders smoothly transition into labels.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["contact", "floating", "label", "animation"],
    isPremium: false,
    views: 47500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-fl">
  <h2>Send Message</h2>
  <form onsubmit="event.preventDefault()">
    <div class="fl-group">
      <input type="text" id="fl-name" placeholder=" " required />
      <label for="fl-name">Full Name</label>
    </div>
    <div class="fl-group">
      <input type="email" id="fl-email" placeholder=" " required />
      <label for="fl-email">Email Address</label>
    </div>
    <div class="fl-group">
      <textarea id="fl-msg" rows="4" placeholder=" " required></textarea>
      <label for="fl-msg">Message</label>
    </div>
    <button type="submit" class="fl-btn">Send ➔</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.cf-fl { background: #fff; padding: 50px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); max-width: 500px; width: 100%; border: 1px solid #e2e8f0; }
.cf-fl h2 { color: #0f172a; margin: 0 0 40px; font-size: 2rem; }
.cf-fl form { display: flex; flex-direction: column; gap: 30px; }
.fl-group { position: relative; }
.cf-fl input, .cf-fl textarea { width: 100%; box-sizing: border-box; border: none; border-bottom: 2px solid #cbd5e1; padding: 10px 0; font-family: inherit; font-size: 1.1rem; color: #0f172a; outline: none; background: transparent; transition: 0.3s; resize: vertical; }
.cf-fl label { position: absolute; left: 0; top: 12px; color: #94a3b8; font-size: 1.1rem; pointer-events: none; transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.cf-fl input:focus, .cf-fl textarea:focus { border-bottom-color: #3b82f6; }
.cf-fl input:focus ~ label, .cf-fl input:not(:placeholder-shown) ~ label,
.cf-fl textarea:focus ~ label, .cf-fl textarea:not(:placeholder-shown) ~ label { top: -20px; font-size: 0.85rem; color: #3b82f6; font-weight: 600; }
.fl-btn { align-self: flex-start; background: #0f172a; color: #fff; border: none; padding: 16px 32px; border-radius: 8px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: 0.3s; margin-top: 10px; }
.fl-btn:hover { background: #3b82f6; box-shadow: 0 4px 10px rgba(59,130,246,0.3); }`,
    jsCode: ``
  },

  // 9. Single-Line Chat-Style Form
  {
    _id: "cf9",
    title: "Chat-Style Single Line Form",
    slug: "chat-style-single-line-form",
    description: "Compact single-line input suitable for minimal landing pages.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["contact", "chat", "inline", "minimal"],
    isPremium: true,
    views: 43100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-sl">
  <h2>Have a project in mind?</h2>
  <form class="sl-form" onsubmit="event.preventDefault()">
    <div class="sl-input-wrap">
      <input type="email" placeholder="Enter your email to start a conversation..." required />
      <button type="submit" class="sl-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"/></svg>
      </button>
    </div>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 150px 20px; display: flex; justify-content: center; }
.cf-sl { max-width: 700px; width: 100%; text-align: center; }
.cf-sl h2 { font-size: 2.5rem; color: #111; margin: 0 0 40px; letter-spacing: -1px; }
.sl-form { position: relative; max-width: 600px; margin: 0 auto; }
.sl-input-wrap { display: flex; align-items: center; background: #f4f4f5; border-radius: 50px; padding: 8px; border: 2px solid transparent; transition: 0.3s; }
.sl-input-wrap:focus-within { border-color: #111; background: #fff; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
.sl-input-wrap input { flex: 1; border: none; background: transparent; padding: 15px 20px; font-size: 1.1rem; outline: none; font-family: inherit; color: #111; }
.sl-input-wrap input::placeholder { color: #a1a1aa; }
.sl-btn { background: #111; color: #fff; border: none; width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer; transition: 0.2s; }
.sl-btn:hover { background: #3b82f6; transform: scale(1.05); }`,
    jsCode: ``
  },

  // 10. Modal/Card Popup Form
  {
    _id: "cf10",
    title: "Modal Card Form",
    slug: "modal-card-form",
    description: "Form styled to look like an overlay modal or popup card.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["contact", "modal", "card", "popup"],
    isPremium: false,
    views: 40500,
    downloads: 11000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-md">
  <div class="md-header">
    <div class="md-icon">💬</div>
    <div>
      <h3 class="md-title">New Message</h3>
      <p class="md-subtitle">To: Support Team</p>
    </div>
  </div>
  <form class="md-form" onsubmit="event.preventDefault()">
    <input type="text" placeholder="Subject" required />
    <textarea rows="6" placeholder="Type your message here..." required></textarea>
    <div class="md-actions">
      <button type="button" class="md-cancel">Cancel</button>
      <button type="submit" class="md-send">Send</button>
    </div>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; padding: 100px 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.cf-md { background: #fff; border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); max-width: 500px; width: 100%; overflow: hidden; }
.md-header { background: #f8fafc; padding: 20px 30px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 15px; }
.md-icon { font-size: 2rem; background: #e0e7ff; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center; border-radius: 50%; }
.md-title { margin: 0; font-size: 1.2rem; color: #0f172a; }
.md-subtitle { margin: 4px 0 0; font-size: 0.9rem; color: #64748b; }
.md-form { padding: 30px; display: flex; flex-direction: column; gap: 20px; }
.md-form input, .md-form textarea { width: 100%; box-sizing: border-box; border: 1px solid #cbd5e1; padding: 14px; border-radius: 8px; font-family: inherit; font-size: 1rem; outline: none; transition: 0.2s; resize: vertical; background: #fcfcfc; }
.md-form input:focus, .md-form textarea:focus { border-color: #3b82f6; background: #fff; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.md-actions { display: flex; justify-content: flex-end; gap: 15px; margin-top: 10px; }
.md-cancel { background: transparent; color: #64748b; border: none; padding: 12px 20px; font-weight: 600; cursor: pointer; border-radius: 8px; transition: 0.2s; }
.md-cancel:hover { background: #f1f5f9; color: #0f172a; }
.md-send { background: #3b82f6; color: #fff; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 6px rgba(59,130,246,0.2); }
.md-send:hover { background: #2563eb; }`,
    jsCode: ``
  }
];
