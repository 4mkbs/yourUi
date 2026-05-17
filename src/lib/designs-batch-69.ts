import { Design } from "./designs-data";

export const BATCH_69_DESIGNS: Design[] = [
  // 1. Classic Split Form
  {
    _id: "cf1",
    title: "Classic Split Form",
    slug: "classic-split-form",
    description: "Standard layout with contact information on the left and the form on the right.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["contact", "form", "classic", "split"],
    isPremium: false,
    views: 31200,
    downloads: 8500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-cl">
  <div class="cf-c-info">
    <h2>Get in touch</h2>
    <p>We'd love to hear from you. Our friendly team is always here to chat.</p>
    <div class="cf-c-details">
      <div class="cf-c-item">
        <span class="icon">📍</span>
        <div>
          <strong>Office</strong>
          <span>123 Innovation Drive, Tech City, TC 10101</span>
        </div>
      </div>
      <div class="cf-c-item">
        <span class="icon">📧</span>
        <div>
          <strong>Email</strong>
          <span>hello@yourui.com</span>
        </div>
      </div>
      <div class="cf-c-item">
        <span class="icon">📞</span>
        <div>
          <strong>Phone</strong>
          <span>+1 (555) 123-4567</span>
        </div>
      </div>
    </div>
  </div>
  <form class="cf-c-form">
    <div class="cf-c-row">
      <div class="cf-c-group">
        <label>First name</label>
        <input type="text" placeholder="John" required />
      </div>
      <div class="cf-c-group">
        <label>Last name</label>
        <input type="text" placeholder="Doe" required />
      </div>
    </div>
    <div class="cf-c-group">
      <label>Email</label>
      <input type="email" placeholder="john@example.com" required />
    </div>
    <div class="cf-c-group">
      <label>Message</label>
      <textarea rows="4" placeholder="How can we help you?" required></textarea>
    </div>
    <button type="submit" class="cf-c-btn">Send message</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 60px 20px; display: flex; justify-content: center; }
.cf-cl { display: flex; max-width: 1000px; width: 100%; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); }
.cf-c-info { flex: 1; background: #0f172a; color: #fff; padding: 50px; }
.cf-c-info h2 { margin: 0 0 15px; font-size: 2rem; }
.cf-c-info p { color: #94a3b8; margin: 0 0 40px; line-height: 1.6; }
.cf-c-details { display: flex; flex-direction: column; gap: 30px; }
.cf-c-item { display: flex; gap: 15px; align-items: flex-start; }
.cf-c-item .icon { font-size: 1.5rem; }
.cf-c-item strong { display: block; margin-bottom: 5px; font-weight: 600; }
.cf-c-item span { color: #cbd5e1; font-size: 0.95rem; }
.cf-c-form { flex: 1.2; padding: 50px; display: flex; flex-direction: column; gap: 20px; }
.cf-c-row { display: flex; gap: 20px; }
.cf-c-group { display: flex; flex-direction: column; gap: 8px; flex: 1; }
.cf-c-group label { font-size: 0.9rem; font-weight: 600; color: #334155; }
.cf-c-form input, .cf-c-form textarea { padding: 12px 15px; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; font-size: 1rem; outline: none; transition: 0.2s; }
.cf-c-form input:focus, .cf-c-form textarea:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.cf-c-btn { margin-top: 10px; padding: 15px; background: #3b82f6; color: #fff; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: 0.2s; }
.cf-c-btn:hover { background: #2563eb; }
@media (max-width: 768px) { .cf-cl { flex-direction: column; } .cf-c-row { flex-direction: column; } .cf-c-info, .cf-c-form { padding: 30px; } }`,
    jsCode: ``
  },

  // 2. Minimal Centered Form
  {
    _id: "cf2",
    title: "Minimal Centered Form",
    slug: "minimal-centered-form",
    description: "Clean, distraction-free form focused entirely on user input.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["contact", "form", "minimal", "clean"],
    isPremium: false,
    views: 28500,
    downloads: 7200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-mn">
  <div class="cf-m-head">
    <h2>Say Hello</h2>
    <p>Drop us a line and we'll get back to you shortly.</p>
  </div>
  <form class="cf-m-form">
    <input type="text" placeholder="Name" required />
    <input type="email" placeholder="Email" required />
    <textarea rows="5" placeholder="Message" required></textarea>
    <button type="submit">Send</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #ffffff; padding: 80px 20px; display: flex; justify-content: center; }
.cf-mn { max-width: 500px; width: 100%; }
.cf-m-head { text-align: center; margin-bottom: 40px; }
.cf-m-head h2 { margin: 0 0 10px; font-size: 2.5rem; color: #111; letter-spacing: -1px; }
.cf-m-head p { margin: 0; color: #666; font-size: 1.1rem; }
.cf-m-form { display: flex; flex-direction: column; gap: 20px; }
.cf-m-form input, .cf-m-form textarea { width: 100%; box-sizing: border-box; padding: 15px 0; border: none; border-bottom: 1px solid #ddd; font-family: inherit; font-size: 1.1rem; outline: none; transition: 0.3s; background: transparent; }
.cf-m-form input:focus, .cf-m-form textarea:focus { border-bottom-color: #111; }
.cf-m-form button { margin-top: 20px; padding: 15px 40px; background: #111; color: #fff; border: none; border-radius: 30px; font-size: 1rem; font-weight: 600; cursor: pointer; align-self: center; transition: 0.3s; }
.cf-m-form button:hover { background: #333; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }`,
    jsCode: ``
  },

  // 3. Cyberpunk Terminal Form
  {
    _id: "cf3",
    title: "Cyberpunk Terminal Form",
    slug: "cyberpunk-terminal-form",
    description: "Hacker aesthetic contact form resembling a command line interface.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["contact", "cyberpunk", "terminal", "neon"],
    isPremium: true,
    views: 26500,
    downloads: 6800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-cy">
  <div class="cy-f-header">
    <span>[ ROOT_ACCESS ]</span>
    <span>EXEC: SEND_MSG.EXE</span>
  </div>
  <form class="cy-form">
    <div class="cy-input-group">
      <label>> IDENTIFIER:</label>
      <input type="text" placeholder="ENTER_NAME" required />
    </div>
    <div class="cy-input-group">
      <label>> COMM_LINK:</label>
      <input type="email" placeholder="ENTER_EMAIL" required />
    </div>
    <div class="cy-input-group">
      <label>> PAYLOAD:</label>
      <textarea rows="4" placeholder="ENTER_DATA..." required></textarea>
    </div>
    <button type="submit" class="cy-btn">[ TRANSMIT ]</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.cf-cy { background: rgba(0,20,0,0.8); border: 1px solid #0f0; max-width: 600px; width: 100%; box-shadow: 0 0 20px rgba(0,255,0,0.1), inset 0 0 10px rgba(0,255,0,0.1); position: relative; }
.cf-cy::after { content: ''; position: absolute; bottom: -1px; right: -1px; width: 20px; height: 20px; border-bottom: 3px solid #0ff; border-right: 3px solid #0ff; }
.cy-f-header { background: #0f0; color: #000; padding: 10px 20px; display: flex; justify-content: space-between; font-weight: bold; }
.cy-form { padding: 30px; display: flex; flex-direction: column; gap: 20px; }
.cy-input-group { display: flex; flex-direction: column; gap: 5px; }
.cy-input-group label { color: #0f0; font-weight: bold; text-shadow: 0 0 5px #0f0; }
.cy-form input, .cy-form textarea { background: transparent; border: 1px solid #030; color: #0ff; padding: 10px; font-family: inherit; font-size: 1rem; outline: none; transition: 0.2s; text-shadow: 0 0 5px #0ff; }
.cy-form input:focus, .cy-form textarea:focus { border-color: #f0f; box-shadow: inset 0 0 10px rgba(255,0,255,0.2); }
.cy-btn { background: transparent; color: #f0f; border: 1px solid #f0f; padding: 15px; font-family: inherit; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: 0.2s; text-shadow: 0 0 5px #f0f; box-shadow: 0 0 10px rgba(255,0,255,0.2); margin-top: 10px; }
.cy-btn:hover { background: #f0f; color: #000; box-shadow: 0 0 20px rgba(255,0,255,0.5); }`,
    jsCode: ``
  },

  // 4. Glassmorphism Floating Form
  {
    _id: "cf4",
    title: "Glassmorphism Floating Form",
    slug: "glassmorphism-floating-form",
    description: "Frosted glass contact form floating over a gradient background.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["contact", "glassmorphism", "blur", "modern"],
    isPremium: true,
    views: 35100,
    downloads: 9900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <div class="cf-gl">
    <h2>Contact Us</h2>
    <form class="gl-form">
      <div class="gl-input-box">
        <input type="text" placeholder="Name" required />
      </div>
      <div class="gl-input-box">
        <input type="email" placeholder="Email" required />
      </div>
      <div class="gl-input-box">
        <textarea rows="4" placeholder="Message" required></textarea>
      </div>
      <button type="submit" class="gl-btn">Submit</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; background: linear-gradient(135deg, #10b981, #3b82f6, #6366f1); }
.cf-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; padding: 40px; width: 100%; max-width: 450px; color: #fff; box-shadow: 0 15px 35px rgba(0,0,0,0.2); text-align: center; }
.cf-gl h2 { margin: 0 0 30px; font-weight: 600; letter-spacing: 1px; text-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.gl-form { display: flex; flex-direction: column; gap: 20px; }
.gl-input-box input, .gl-input-box textarea { width: 100%; box-sizing: border-box; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; padding: 15px; color: #fff; font-family: inherit; font-size: 1rem; outline: none; transition: 0.3s; }
.gl-input-box input::placeholder, .gl-input-box textarea::placeholder { color: rgba(255,255,255,0.6); }
.gl-input-box input:focus, .gl-input-box textarea:focus { border-color: #fff; background: rgba(255,255,255,0.1); }
.gl-btn { background: #fff; color: #3b82f6; border: none; padding: 15px; border-radius: 10px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.3s; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.gl-btn:hover { background: #f8fafc; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }`,
    jsCode: ``
  },

  // 5. Brutalist Bold Form
  {
    _id: "cf5",
    title: "Brutalist Bold Form",
    slug: "brutalist-bold-form",
    description: "High contrast, loud typography, and sharp edges.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["contact", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 22800,
    downloads: 5400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-br">
  <h2>TALK TO US.</h2>
  <form class="br-form">
    <div class="br-group">
      <label>WHO ARE YOU?</label>
      <input type="text" required />
    </div>
    <div class="br-group">
      <label>WHERE CAN WE REACH YOU?</label>
      <input type="email" required />
    </div>
    <div class="br-group">
      <label>WHAT'S ON YOUR MIND?</label>
      <textarea rows="5" required></textarea>
    </div>
    <button type="submit" class="br-btn">SEND IT -></button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; display: flex; justify-content: center; padding: 60px 20px; }
.cf-br { background: #fff; border: 6px solid #000; padding: 40px; max-width: 500px; width: 100%; box-shadow: 15px 15px 0 #facc15; }
.cf-br h2 { margin: 0 0 30px; font-size: 3rem; font-weight: 900; text-transform: uppercase; line-height: 1; color: #000; }
.br-form { display: flex; flex-direction: column; gap: 25px; }
.br-group { display: flex; flex-direction: column; gap: 5px; }
.br-group label { font-weight: 900; font-size: 1.1rem; color: #000; }
.br-group input, .br-group textarea { border: 3px solid #000; padding: 15px; font-family: inherit; font-size: 1.1rem; outline: none; background: #f4f4f5; transition: 0.1s; }
.br-group input:focus, .br-group textarea:focus { background: #fff; box-shadow: 4px 4px 0 #000; }
.br-btn { background: #000; color: #fff; border: none; padding: 20px; font-weight: 900; font-size: 1.2rem; cursor: pointer; transition: 0.1s; text-transform: uppercase; margin-top: 10px; }
.br-btn:hover { background: #3b82f6; }
.br-btn:active { transform: translate(4px, 4px); box-shadow: -4px -4px 0 #000; }`,
    jsCode: ``
  },

  // 6. Neumorphic Soft Form
  {
    _id: "cf6",
    title: "Neumorphic Soft Form",
    slug: "neumorphic-soft-form",
    description: "Soft UI design with inset inputs and extruded buttons.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["contact", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 24300,
    downloads: 6100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-neu">
  <h2>Contact</h2>
  <form class="neu-form">
    <div class="neu-input">
      <input type="text" placeholder="Full Name" required />
    </div>
    <div class="neu-input">
      <input type="email" placeholder="Email Address" required />
    </div>
    <div class="neu-input">
      <textarea rows="4" placeholder="Your Message" required></textarea>
    </div>
    <button type="submit" class="neu-btn">Send Message</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.cf-neu { background: #e0e5ec; padding: 50px; border-radius: 30px; box-shadow: 20px 20px 60px rgba(163,177,198,0.6), -20px -20px 60px rgba(255,255,255,0.5); max-width: 400px; width: 100%; text-align: center; }
.cf-neu h2 { color: #4a5568; margin: 0 0 30px; font-weight: bold; font-size: 2rem; }
.neu-form { display: flex; flex-direction: column; gap: 25px; }
.neu-input input, .neu-input textarea { width: 100%; box-sizing: border-box; background: #e0e5ec; border: none; padding: 15px 20px; border-radius: 15px; box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); color: #4a5568; font-family: inherit; font-size: 1rem; outline: none; }
.neu-input input::placeholder, .neu-input textarea::placeholder { color: #a0aec0; }
.neu-btn { background: #e0e5ec; color: #3182ce; font-weight: bold; font-size: 1rem; padding: 15px; border: none; border-radius: 15px; box-shadow: 5px 5px 10px rgba(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5); cursor: pointer; transition: 0.2s; margin-top: 10px; }
.neu-btn:hover { box-shadow: inset 5px 5px 10px rgba(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255,0.5); color: #2b6cb0; }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Form
  {
    _id: "cf7",
    title: "Dark Mode Glow Form",
    slug: "dark-mode-glow-form",
    description: "Deep dark mode form with neon glowing inputs on focus.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["contact", "dark", "glow", "gradient"],
    isPremium: true,
    views: 31400,
    downloads: 8800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-dg">
  <h2>Let's Connect</h2>
  <form class="dg-form">
    <div class="dg-group">
      <input type="text" placeholder="Name" required />
    </div>
    <div class="dg-group">
      <input type="email" placeholder="Email" required />
    </div>
    <div class="dg-group">
      <textarea rows="4" placeholder="Message" required></textarea>
    </div>
    <button type="submit" class="dg-btn">Send Message</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.cf-dg { background: #0f172a; padding: 40px; border-radius: 20px; border: 1px solid #1e293b; max-width: 450px; width: 100%; position: relative; overflow: hidden; z-index: 1; }
.cf-dg::before { content: ''; position: absolute; top: -50px; left: -50px; right: -50px; height: 100px; background: radial-gradient(ellipse, rgba(59,130,246,0.3) 0%, transparent 70%); z-index: -1; }
.cf-dg h2 { color: #f8fafc; margin: 0 0 30px; font-weight: 700; text-align: center; }
.dg-form { display: flex; flex-direction: column; gap: 20px; }
.dg-group input, .dg-group textarea { width: 100%; box-sizing: border-box; background: #020617; border: 1px solid #1e293b; padding: 15px; border-radius: 10px; color: #f8fafc; font-family: inherit; outline: none; transition: 0.3s; }
.dg-group input:focus, .dg-group textarea:focus { border-color: #3b82f6; box-shadow: 0 0 15px rgba(59,130,246,0.3); }
.dg-btn { background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; border: none; padding: 15px; border-radius: 10px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.3s; margin-top: 10px; }
.dg-btn:hover { box-shadow: 0 0 20px rgba(99,102,241,0.5); transform: translateY(-2px); }`,
    jsCode: ``
  },

  // 8. Floating Label Form
  {
    _id: "cf8",
    title: "Floating Label Form",
    slug: "floating-label-form",
    description: "Material design inspired form where labels float above inputs on focus.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["contact", "floating", "label", "material"],
    isPremium: false,
    views: 33400,
    downloads: 9100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-fl">
  <h2>Contact Support</h2>
  <form class="fl-form">
    <div class="fl-group">
      <input type="text" id="fl-name" required placeholder=" " />
      <label for="fl-name">Full Name</label>
    </div>
    <div class="fl-group">
      <input type="email" id="fl-email" required placeholder=" " />
      <label for="fl-email">Email Address</label>
    </div>
    <div class="fl-group">
      <textarea id="fl-msg" rows="4" required placeholder=" "></textarea>
      <label for="fl-msg">How can we help?</label>
    </div>
    <button type="submit" class="fl-btn">Submit Request</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.cf-fl { background: #fff; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); max-width: 450px; width: 100%; }
.cf-fl h2 { margin: 0 0 30px; color: #0f172a; font-weight: 700; }
.fl-form { display: flex; flex-direction: column; gap: 25px; }
.fl-group { position: relative; }
.fl-group input, .fl-group textarea { width: 100%; box-sizing: border-box; padding: 15px 15px 15px 10px; border: none; border-bottom: 2px solid #cbd5e1; background: #f8fafc; font-family: inherit; font-size: 1rem; outline: none; transition: 0.3s; border-radius: 4px 4px 0 0; }
.fl-group label { position: absolute; left: 10px; top: 15px; color: #64748b; font-size: 1rem; pointer-events: none; transition: 0.2s ease all; }
.fl-group input:focus, .fl-group textarea:focus { border-bottom-color: #3b82f6; background: #eff6ff; }
.fl-group input:focus ~ label, .fl-group input:not(:placeholder-shown) ~ label, .fl-group textarea:focus ~ label, .fl-group textarea:not(:placeholder-shown) ~ label { top: -10px; left: 0; font-size: 0.8rem; color: #3b82f6; font-weight: 600; }
.fl-btn { background: #0f172a; color: #fff; border: none; padding: 15px; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: 0.2s; margin-top: 10px; }
.fl-btn:hover { background: #3b82f6; }`,
    jsCode: ``
  },

  // 9. Multi-Step Interactive Form (Visual Only)
  {
    _id: "cf9",
    title: "Multi-Step Form (Visual)",
    slug: "multi-step-form-visual",
    description: "Visual representation of a multi-step contact wizard.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["contact", "wizard", "step", "interactive"],
    isPremium: true,
    views: 45100,
    downloads: 12700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-ms">
  <div class="ms-header">
    <div class="ms-step active">1. Info</div>
    <div class="ms-line"></div>
    <div class="ms-step">2. Project</div>
    <div class="ms-line"></div>
    <div class="ms-step">3. Done</div>
  </div>
  <div class="ms-body">
    <h3>Personal Information</h3>
    <p>Let's start with the basics.</p>
    <div class="ms-group">
      <label>Name</label>
      <input type="text" placeholder="Jane Doe" />
    </div>
    <div class="ms-group">
      <label>Email</label>
      <input type="email" placeholder="jane@company.com" />
    </div>
  </div>
  <div class="ms-footer">
    <button class="ms-btn-ghost" disabled>Back</button>
    <button class="ms-btn-primary">Next Step</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.cf-ms { background: #fff; border-radius: 16px; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1); border: 1px solid #eaeaea; max-width: 500px; width: 100%; overflow: hidden; }
.ms-header { display: flex; align-items: center; justify-content: space-between; padding: 30px; background: #f8fafc; border-bottom: 1px solid #eaeaea; }
.ms-step { font-size: 0.9rem; font-weight: 600; color: #94a3b8; }
.ms-step.active { color: #3b82f6; }
.ms-line { flex: 1; height: 2px; background: #e2e8f0; margin: 0 15px; }
.ms-body { padding: 40px 30px; }
.ms-body h3 { margin: 0 0 5px; color: #0f172a; }
.ms-body p { margin: 0 0 25px; color: #64748b; font-size: 0.95rem; }
.ms-group { margin-bottom: 20px; }
.ms-group label { display: block; margin-bottom: 8px; font-size: 0.9rem; font-weight: 600; color: #334155; }
.ms-group input { width: 100%; box-sizing: border-box; padding: 12px 15px; border: 1px solid #cbd5e1; border-radius: 8px; outline: none; transition: 0.2s; }
.ms-group input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.ms-footer { padding: 20px 30px; border-top: 1px solid #eaeaea; display: flex; justify-content: space-between; background: #f8fafc; }
.ms-btn-ghost { background: transparent; border: none; color: #94a3b8; font-weight: 600; cursor: not-allowed; }
.ms-btn-primary { background: #0f172a; color: #fff; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.ms-btn-primary:hover { background: #3b82f6; }`,
    jsCode: ``
  },

  // 10. Compact Card Form
  {
    _id: "cf10",
    title: "Compact Card Form",
    slug: "compact-card-form",
    description: "Small footprint form ideal for sidebars, modals, or footers.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["contact", "compact", "card", "sidebar"],
    isPremium: false,
    views: 31500,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-cp">
  <div class="cp-head">
    <h3>Quick Question?</h3>
    <p>Ask us anything.</p>
  </div>
  <form class="cp-form">
    <input type="email" placeholder="Your email" required />
    <textarea rows="3" placeholder="Your question..." required></textarea>
    <button type="submit">Send</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.cf-cp { background: #fff; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); max-width: 320px; width: 100%; border: 1px solid #e2e8f0; }
.cp-head { margin-bottom: 20px; }
.cp-head h3 { margin: 0 0 5px; color: #0f172a; font-size: 1.2rem; font-weight: 700; }
.cp-head p { margin: 0; color: #64748b; font-size: 0.9rem; }
.cp-form { display: flex; flex-direction: column; gap: 12px; }
.cp-form input, .cp-form textarea { padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-family: inherit; font-size: 0.9rem; outline: none; background: #f8fafc; }
.cp-form input:focus, .cp-form textarea:focus { border-color: #3b82f6; background: #fff; }
.cp-form button { background: #3b82f6; color: #fff; border: none; padding: 10px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.cp-form button:hover { background: #2563eb; }`,
    jsCode: ``
  }
];
