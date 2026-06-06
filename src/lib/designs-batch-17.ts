import { Design } from "./designs-data";

export const BATCH_17_DESIGNS: Design[] = [
  // 1. Glassmorphism Contact Form
  {
    _id: "cf1",
    title: "Glass Contact Form",
    slug: "glass-contact-form",
    description: "A beautiful frosted glass contact form sitting over an animated gradient background.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["contact", "glassmorphism", "form", "gradient"],
    isPremium: false,
    views: 14200,
    downloads: 5100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-bg-cf">
  <div class="glass-contact">
    <h2>Get in Touch</h2>
    <p>We'd love to hear from you. Drop us a line below.</p>
    <form class="gc-form">
      <div class="gc-group">
        <input type="text" placeholder="Full Name" required>
      </div>
      <div class="gc-group">
        <input type="email" placeholder="Email Address" required>
      </div>
      <div class="gc-group">
        <textarea placeholder="Your Message" rows="4" required></textarea>
      </div>
      <button type="submit" class="gc-btn">Send Message</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; overflow: hidden; }
.glass-bg-cf { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(45deg, #f43f5e, #8b5cf6, #3b82f6); background-size: 200% 200%; animation: gradientAnim 5s ease infinite; padding: 20px; box-sizing: border-box; }
@keyframes gradientAnim { 0% {background-position: 0% 50%} 50% {background-position: 100% 50%} 100% {background-position: 0% 50%} }
.glass-contact { width: 100%; max-width: 450px; background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; padding: 2.5rem; box-shadow: 0 25px 50px rgba(0,0,0,0.2); color: #fff; }
.glass-contact h2 { margin: 0 0 10px 0; font-size: 2rem; font-weight: bold; }
.glass-contact p { margin: 0 0 25px 0; font-size: 0.95rem; color: rgba(255,255,255,0.8); }
.gc-group { margin-bottom: 20px; }
.gc-group input, .gc-group textarea { width: 100%; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.4); padding: 15px; border-radius: 10px; color: #fff; outline: none; font-family: 'Inter', sans-serif; transition: 0.3s; box-sizing: border-box; }
.gc-group input::placeholder, .gc-group textarea::placeholder { color: rgba(255,255,255,0.6); }
.gc-group input:focus, .gc-group textarea:focus { background: rgba(255,255,255,0.2); border-color: #fff; }
.gc-btn { width: 100%; background: #fff; color: #8b5cf6; border: none; padding: 15px; border-radius: 10px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.gc-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(0,0,0,0.2); }`,
    jsCode: ``
  },

  // 2. Minimalist Split Contact
  {
    _id: "cf2",
    title: "Split Layout Contact",
    slug: "split-layout-contact",
    description: "A clean corporate contact page with a large image/map on the left and form on the right.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["contact", "split", "minimalist", "corporate"],
    isPremium: true,
    views: 11500,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="split-cf">
  <div class="sc-image">
    <div class="sc-overlay">
      <h3>Headquarters</h3>
      <p>123 Minimalist Way<br>San Francisco, CA 94103</p>
      <p>+1 (555) 123-4567</p>
    </div>
  </div>
  <div class="sc-form-wrap">
    <h2>Send a Message</h2>
    <form class="sc-form">
      <div class="sc-row">
        <div class="sc-group"><label>First Name</label><input type="text" required></div>
        <div class="sc-group"><label>Last Name</label><input type="text" required></div>
      </div>
      <div class="sc-group"><label>Email Address</label><input type="email" required></div>
      <div class="sc-group"><label>Message</label><textarea rows="5" required></textarea></div>
      <button type="submit" class="sc-btn">Submit Request</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; }
.split-cf { display: flex; min-height: 100vh; }
.sc-image { flex: 1; background: url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80') center/cover; position: relative; }
.sc-overlay { position: absolute; bottom: 40px; left: 40px; background: #fff; padding: 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.sc-overlay h3 { margin: 0 0 15px 0; font-size: 1.5rem; color: #111; }
.sc-overlay p { margin: 0 0 10px 0; color: #555; line-height: 1.5; font-size: 0.95rem; }
.sc-form-wrap { flex: 1; padding: 5vw; display: flex; flex-direction: column; justify-content: center; }
.sc-form-wrap h2 { margin: 0 0 30px 0; font-size: 2.5rem; color: #111; }
.sc-row { display: flex; gap: 20px; }
.sc-group { margin-bottom: 25px; flex: 1; display: flex; flex-direction: column; }
.sc-group label { margin-bottom: 8px; font-size: 0.85rem; font-weight: bold; color: #444; letter-spacing: 1px; text-transform: uppercase; }
.sc-group input, .sc-group textarea { width: 100%; border: none; border-bottom: 2px solid #ddd; padding: 10px 0; font-size: 1rem; color: #111; outline: none; transition: 0.3s; background: transparent; }
.sc-group input:focus, .sc-group textarea:focus { border-bottom-color: #111; }
.sc-btn { background: #111; color: #fff; border: none; padding: 15px 30px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.3s; align-self: flex-start; }
.sc-btn:hover { background: #444; }
@media (max-width: 900px) { .split-cf { flex-direction: column; } .sc-image { min-height: 400px; } .sc-overlay { bottom: 20px; left: 20px; right: 20px; } }`,
    jsCode: ``
  },

  // 3. Neumorphic Contact Card
  {
    _id: "cf3",
    title: "Neumorphic Contact",
    slug: "neumorphic-contact-form",
    description: "A soft UI contact form using inset shadows for inputs.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["contact", "neumorphism", "soft", "form"],
    isPremium: false,
    views: 9400,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-bg-cf">
  <div class="neu-contact">
    <h2>Say Hello</h2>
    <form class="nc-form">
      <input type="text" class="nc-input" placeholder="Name">
      <input type="email" class="nc-input" placeholder="Email">
      <textarea class="nc-input" placeholder="Message" rows="4"></textarea>
      <button type="submit" class="nc-btn">Send</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; }
.neu-bg-cf { min-height: 100vh; background: #e0e5ec; display: flex; justify-content: center; align-items: center; padding: 20px; }
.neu-contact { width: 100%; max-width: 400px; background: #e0e5ec; border-radius: 30px; padding: 40px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); }
.neu-contact h2 { margin: 0 0 30px 0; color: #4a5568; text-align: center; font-size: 2rem; }
.nc-form { display: flex; flex-direction: column; gap: 25px; }
.nc-input { width: 100%; background: #e0e5ec; border: none; outline: none; padding: 15px 20px; border-radius: 15px; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.5), inset -6px -6px 12px rgba(255,255,255,0.5); color: #4a5568; font-size: 1rem; box-sizing: border-box; transition: 0.2s; }
.nc-input::placeholder { color: #a0aec0; }
.nc-input:focus { box-shadow: inset 8px 8px 16px rgba(163,177,198,0.6), inset -8px -8px 16px rgba(255,255,255,0.6); }
.nc-btn { width: 100%; background: #e0e5ec; border: none; color: #4299e1; padding: 15px; border-radius: 15px; font-weight: bold; font-size: 1.1rem; cursor: pointer; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); transition: 0.2s; }
.nc-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 4. Cyberpunk Secure Channel
  {
    _id: "cf4",
    title: "Cyberpunk Contact",
    slug: "cyberpunk-secure-contact",
    description: "A dark sci-fi themed contact form with neon borders and monospace fonts.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["contact", "cyberpunk", "neon", "dark"],
    isPremium: true,
    views: 13100,
    downloads: 4500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cyber-bg-cf">
  <div class="cyber-contact">
    <div class="cy-header">OPEN SECURE CHANNEL_</div>
    <form class="cy-form">
      <div class="cy-group">
        <label>ID_HANDLE:</label>
        <input type="text" required>
      </div>
      <div class="cy-group">
        <label>DATA_PAYLOAD:</label>
        <textarea rows="4" required></textarea>
      </div>
      <button type="submit" class="cy-btn">TRANSMIT</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; }
.cyber-bg-cf { min-height: 100vh; background: #050505; display: flex; justify-content: center; align-items: center; padding: 20px; }
.cyber-contact { width: 100%; max-width: 450px; background: #0a0a0a; border: 2px solid #0ff; padding: 30px; position: relative; box-shadow: 0 0 20px rgba(0,255,255,0.2); }
.cyber-contact::before { content: ''; position: absolute; top: -2px; left: -2px; width: 20px; height: 20px; border-top: 4px solid #f0f; border-left: 4px solid #f0f; }
.cyber-contact::after { content: ''; position: absolute; bottom: -2px; right: -2px; width: 20px; height: 20px; border-bottom: 4px solid #f0f; border-right: 4px solid #f0f; }
.cy-header { color: #0ff; font-size: 1.5rem; font-weight: bold; margin-bottom: 30px; text-shadow: 0 0 5px #0ff; letter-spacing: 2px; }
.cy-group { margin-bottom: 25px; }
.cy-group label { display: block; color: #f0f; margin-bottom: 8px; font-weight: bold; letter-spacing: 1px; text-shadow: 0 0 5px #f0f; }
.cy-group input, .cy-group textarea { width: 100%; background: #000; border: 1px solid #333; color: #fff; padding: 12px; font-family: 'Courier New', monospace; font-size: 1rem; outline: none; box-sizing: border-box; transition: 0.3s; }
.cy-group input:focus, .cy-group textarea:focus { border-color: #0ff; box-shadow: inset 0 0 10px rgba(0,255,255,0.2); }
.cy-btn { width: 100%; background: transparent; border: 2px solid #0ff; color: #0ff; padding: 15px; font-weight: bold; font-family: 'Courier New', monospace; font-size: 1.2rem; cursor: pointer; transition: 0.3s; letter-spacing: 3px; }
.cy-btn:hover { background: #0ff; color: #000; box-shadow: 0 0 20px #0ff; }`,
    jsCode: ``
  },

  // 5. Brutalist Contact Form
  {
    _id: "cf5",
    title: "Brutalist Contact",
    slug: "brutalist-contact-form",
    description: "A loud, high-contrast brutalist design with massive typography.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["contact", "brutalist", "loud", "contrast"],
    isPremium: true,
    views: 8600,
    downloads: 2400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="brutal-bg-cf">
  <div class="brutal-contact">
    <h1>TALK TO US.</h1>
    <form class="bc-form">
      <input type="text" placeholder="NAME" class="bc-input" required>
      <input type="email" placeholder="EMAIL" class="bc-input" required>
      <textarea placeholder="MESSAGE" class="bc-input" rows="5" required></textarea>
      <button type="submit" class="bc-btn">SUBMIT</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; }
.brutal-bg-cf { min-height: 100vh; background: #facc15; display: flex; justify-content: center; align-items: center; padding: 20px; }
.brutal-contact { width: 100%; max-width: 600px; background: #fff; border: 8px solid #000; padding: 40px; box-shadow: 20px 20px 0 #000; }
.brutal-contact h1 { margin: 0 0 30px 0; font-size: 4rem; font-weight: 900; line-height: 1; text-transform: uppercase; color: #000; }
.bc-form { display: flex; flex-direction: column; gap: 20px; }
.bc-input { width: 100%; background: #fff; border: 4px solid #000; padding: 15px; font-size: 1.2rem; font-weight: bold; outline: none; box-sizing: border-box; }
.bc-input:focus { background: #e5e5e5; }
.bc-input::placeholder { color: #888; text-transform: uppercase; }
.bc-btn { width: 100%; background: #ef4444; color: #fff; border: 6px solid #000; padding: 20px; font-size: 2rem; font-weight: 900; cursor: pointer; transition: 0.1s; box-shadow: 8px 8px 0 #000; }
.bc-btn:active { transform: translate(8px, 8px); box-shadow: 0 0 0 #000; }
@media (max-width: 600px) { .brutal-contact h1 { font-size: 3rem; } .bc-btn { font-size: 1.5rem; } }`,
    jsCode: ``
  },

  // 6. Floating Label Contact Form
  {
    _id: "cf6",
    title: "Floating Label Form",
    slug: "floating-label-contact-form",
    description: "A sleek form where labels elegantly float above the input field on focus.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["contact", "floating-label", "sleek", "modern"],
    isPremium: false,
    views: 12800,
    downloads: 4300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="float-bg-cf">
  <div class="float-contact">
    <h2>Contact Us</h2>
    <form class="fl-form">
      <div class="fl-group">
        <input type="text" id="name" required>
        <label for="name">Your Name</label>
      </div>
      <div class="fl-group">
        <input type="email" id="email" required>
        <label for="email">Email Address</label>
      </div>
      <div class="fl-group">
        <textarea id="msg" rows="4" required></textarea>
        <label for="msg">Message</label>
      </div>
      <button type="submit" class="fl-btn">Send</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f9fafb; }
.float-bg-cf { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.float-contact { width: 100%; max-width: 400px; background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.float-contact h2 { margin: 0 0 30px 0; color: #111827; text-align: center; }
.fl-form { display: flex; flex-direction: column; gap: 30px; }
.fl-group { position: relative; }
.fl-group input, .fl-group textarea { width: 100%; border: none; border-bottom: 2px solid #e5e7eb; padding: 10px 0; font-size: 1rem; color: #111827; outline: none; background: transparent; box-sizing: border-box; }
.fl-group textarea { resize: none; }
.fl-group label { position: absolute; top: 10px; left: 0; color: #9ca3af; font-size: 1rem; pointer-events: none; transition: 0.2s ease all; }
.fl-group input:focus, .fl-group textarea:focus { border-bottom-color: #3b82f6; }
.fl-group input:focus ~ label, .fl-group input:valid ~ label, .fl-group textarea:focus ~ label, .fl-group textarea:valid ~ label { top: -20px; font-size: 0.8rem; color: #3b82f6; font-weight: bold; }
.fl-btn { background: #3b82f6; color: #fff; border: none; padding: 15px; border-radius: 6px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; margin-top: 10px; }
.fl-btn:hover { background: #2563eb; }`,
    jsCode: ``
  },

  // 7. Dark Mode Terminal Form
  {
    _id: "cf7",
    title: "Terminal CLI Form",
    slug: "terminal-cli-contact-form",
    description: "A fun contact form disguised as a Unix terminal window.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["contact", "terminal", "cli", "dark"],
    isPremium: true,
    views: 10200,
    downloads: 3600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="term-bg-cf">
  <div class="term-contact">
    <div class="term-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="term-title">contact@server:~</span>
    </div>
    <div class="term-body">
      <p class="sys">System initialized. Awaiting input...</p>
      <form class="tm-form">
        <div class="tm-line">
          <span class="prompt">$ name:</span>
          <input type="text" class="tm-input" required autofocus>
        </div>
        <div class="tm-line">
          <span class="prompt">$ email:</span>
          <input type="email" class="tm-input" required>
        </div>
        <div class="tm-line align-top">
          <span class="prompt">$ msg:</span>
          <textarea class="tm-input" rows="3" required></textarea>
        </div>
        <button type="submit" class="tm-btn">$ ./send.sh<span class="cursor">_</span></button>
      </form>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #222; font-family: 'Courier New', Courier, monospace; }
.term-bg-cf { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.term-contact { width: 100%; max-width: 500px; background: #000; border-radius: 8px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
.term-header { background: #333; padding: 10px; display: flex; align-items: center; gap: 8px; }
.dot { width: 12px; height: 12px; border-radius: 50%; }
.red { background: #ff5f56; } .yellow { background: #ffbd2e; } .green { background: #27c93f; }
.term-title { color: #aaa; font-size: 0.9rem; margin-left: 20px; }
.term-body { padding: 20px; color: #27c93f; font-size: 1.1rem; }
.sys { color: #aaa; margin-top: 0; margin-bottom: 20px; }
.tm-form { display: flex; flex-direction: column; gap: 15px; }
.tm-line { display: flex; align-items: center; }
.align-top { align-items: flex-start; }
.prompt { color: #ffbd2e; margin-right: 10px; white-space: nowrap; }
.tm-input { background: transparent; border: none; color: #fff; font-family: 'Courier New', monospace; font-size: 1.1rem; outline: none; flex: 1; resize: none; }
.tm-btn { background: transparent; border: none; color: #3b82f6; font-family: 'Courier New', monospace; font-size: 1.1rem; cursor: pointer; text-align: left; padding: 0; margin-top: 15px; outline: none; }
.cursor { animation: blink 1s step-end infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`,
    jsCode: ``
  },

  // 8. Isometric Envelope Form
  {
    _id: "cf8",
    title: "Isometric Envelope",
    slug: "isometric-envelope-form",
    description: "A 3D skewed form that looks like a modern digital envelope.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    tags: ["contact", "isometric", "3d", "creative"],
    isPremium: true,
    views: 8900,
    downloads: 3000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="iso-bg-cf">
  <div class="iso-wrapper">
    <div class="iso-contact">
      <h2>Drop a Line</h2>
      <form class="io-form">
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; }
.iso-bg-cf { min-height: 100vh; display: flex; justify-content: center; align-items: center; perspective: 1000px; overflow: hidden; }
.iso-wrapper { transform: rotateX(20deg) rotateY(-20deg) rotateZ(10deg); transition: 0.5s; }
.iso-wrapper:hover { transform: rotateX(0) rotateY(0) rotateZ(0); }
.iso-contact { width: 350px; background: #fff; padding: 40px; border-radius: 12px; box-shadow: -20px 20px 40px rgba(0,0,0,0.15); border-right: 4px solid #cbd5e1; border-bottom: 4px solid #cbd5e1; }
.iso-contact h2 { margin: 0 0 25px 0; color: #0f172a; }
.io-form { display: flex; flex-direction: column; gap: 15px; }
.io-form input, .io-form textarea { width: 100%; background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 6px; font-family: 'Inter', sans-serif; outline: none; box-sizing: border-box; }
.io-form input:focus, .io-form textarea:focus { border-color: #3b82f6; }
.io-form button { background: #3b82f6; color: #fff; border: none; padding: 15px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 10px rgba(59,130,246,0.3); }
.io-form button:hover { background: #2563eb; transform: translateY(-2px); }`,
    jsCode: ``
  },

  // 9. Elegant Corporate Contact
  {
    _id: "cf9",
    title: "Elegant Corporate Form",
    slug: "elegant-corporate-form",
    description: "A highly professional form with dropdowns and clean separators for corporate sites.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tags: ["contact", "corporate", "elegant", "professional"],
    isPremium: false,
    views: 10500,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="corp-bg-cf">
  <div class="corp-contact">
    <div class="cp-header">
      <h2>Sales Inquiry</h2>
      <p>Fill out the form below and our enterprise team will contact you within 24 hours.</p>
    </div>
    <form class="cp-form">
      <div class="cp-row">
        <input type="text" placeholder="First Name" required>
        <input type="text" placeholder="Last Name" required>
      </div>
      <div class="cp-row">
        <input type="email" placeholder="Work Email" required>
        <input type="text" placeholder="Company Name" required>
      </div>
      <select class="cp-select" required>
        <option value="" disabled selected>Select Inquiry Type</option>
        <option value="enterprise">Enterprise Plan</option>
        <option value="partnership">Partnership</option>
        <option value="support">Technical Support</option>
      </select>
      <textarea placeholder="How can we help you?" rows="4" required></textarea>
      <button type="submit" class="cp-btn">Submit Inquiry</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #f3f4f6; }
.corp-bg-cf { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.corp-contact { width: 100%; max-width: 600px; background: #fff; padding: 50px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-top: 4px solid #111827; }
.cp-header { margin-bottom: 30px; border-bottom: 1px solid #e5e7eb; padding-bottom: 20px; }
.cp-header h2 { margin: 0 0 10px 0; color: #111827; font-size: 1.8rem; }
.cp-header p { margin: 0; color: #6b7280; font-size: 0.95rem; line-height: 1.5; }
.cp-form { display: flex; flex-direction: column; gap: 20px; }
.cp-row { display: flex; gap: 20px; }
.cp-row input { flex: 1; }
.cp-form input, .cp-form select, .cp-form textarea { width: 100%; border: 1px solid #d1d5db; padding: 12px 15px; border-radius: 4px; font-size: 0.95rem; color: #111827; outline: none; box-sizing: border-box; font-family: inherit; }
.cp-form input:focus, .cp-form select:focus, .cp-form textarea:focus { border-color: #111827; ring: 1px solid #111827; }
.cp-btn { background: #111827; color: #fff; border: none; padding: 15px; border-radius: 4px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; align-self: flex-end; width: 200px; }
.cp-btn:hover { background: #374151; }
@media (max-width: 600px) { .cp-row { flex-direction: column; gap: 20px; } .cp-btn { width: 100%; } .corp-contact { padding: 30px 20px; } }`,
    jsCode: ``
  },

  // 10. Multi-step Contact Wizard (Mockup)
  {
    _id: "cf10",
    title: "Multi-step Form",
    slug: "multi-step-contact-wizard",
    description: "A layout for a multi-step contact wizard with progress indicators.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    tags: ["contact", "wizard", "multi-step", "progress"],
    isPremium: true,
    views: 12100,
    downloads: 4000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="wiz-bg-cf">
  <div class="wiz-contact">
    <div class="w-progress">
      <div class="w-step active">1. Info</div>
      <div class="w-step">2. Details</div>
      <div class="w-step">3. Submit</div>
    </div>
    
    <div class="w-body">
      <h3>Basic Information</h3>
      <div class="w-group"><label>Name</label><input type="text"></div>
      <div class="w-group"><label>Email</label><input type="email"></div>
    </div>
    
    <div class="w-footer">
      <button class="w-btn outline">Cancel</button>
      <button class="w-btn solid">Next Step</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.wiz-bg-cf { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.wiz-contact { width: 100%; max-width: 500px; background: #fff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); overflow: hidden; }
.w-progress { display: flex; background: #f1f5f9; padding: 15px 20px; border-bottom: 1px solid #e2e8f0; }
.w-step { flex: 1; text-align: center; font-size: 0.85rem; font-weight: bold; color: #94a3b8; position: relative; }
.w-step.active { color: #3b82f6; }
.w-step.active::after { content: ''; position: absolute; bottom: -16px; left: 0; width: 100%; height: 3px; background: #3b82f6; }
.w-body { padding: 30px; }
.w-body h3 { margin: 0 0 20px 0; color: #0f172a; }
.w-group { margin-bottom: 20px; }
.w-group label { display: block; margin-bottom: 8px; font-size: 0.9rem; color: #475569; font-weight: 500; }
.w-group input { width: 100%; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; outline: none; box-sizing: border-box; }
.w-group input:focus { border-color: #3b82f6; ring: 2px solid rgba(59,130,246,0.2); }
.w-footer { padding: 20px 30px; background: #f8fafc; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; }
.w-btn { padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.outline { background: transparent; border: 1px solid #cbd5e1; color: #475569; }
.solid { background: #3b82f6; border: 1px solid #3b82f6; color: #fff; }
.solid:hover { background: #2563eb; }`,
    jsCode: ``
  }
];
