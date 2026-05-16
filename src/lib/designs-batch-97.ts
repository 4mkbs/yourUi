import { Design } from "./designs-data";

export const BATCH_97_DESIGNS: Design[] = [
  // 1. Classic Split Contact
  {
    _id: "contact1",
    title: "Classic Split Contact Form",
    slug: "classic-split-contact-form",
    description: "Standard layout with contact information on the left and the form on the right.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["contact", "form", "split", "classic"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="contact-cl-wrap">
  <div class="contact-cl">
    <div class="cl-info">
      <h2>Get in touch</h2>
      <p>We'd love to hear from you. Please fill out this form or shoot us an email.</p>
      <div class="cl-details">
        <p><strong>Email:</strong> hello@yourui.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Office:</strong> 123 Design Street, NY 10001</p>
      </div>
    </div>
    <form class="cl-form">
      <div class="cl-row">
        <div class="cl-group">
          <label>First Name</label>
          <input type="text" placeholder="John" />
        </div>
        <div class="cl-group">
          <label>Last Name</label>
          <input type="text" placeholder="Doe" />
        </div>
      </div>
      <div class="cl-group">
        <label>Email</label>
        <input type="email" placeholder="john@example.com" />
      </div>
      <div class="cl-group">
        <label>Message</label>
        <textarea rows="4" placeholder="How can we help?"></textarea>
      </div>
      <button type="submit" class="cl-btn">Send Message</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; }
.contact-cl-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
.contact-cl { background: #fff; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); display: flex; max-width: 1000px; width: 100%; overflow: hidden; }
.cl-info { background: #0f172a; color: #f8fafc; padding: 50px; flex: 1; display: flex; flex-direction: column; justify-content: center; }
.cl-info h2 { margin: 0 0 15px; font-size: 2.5rem; }
.cl-info p { color: #94a3b8; font-size: 1.1rem; line-height: 1.6; margin: 0 0 40px; }
.cl-details p { color: #cbd5e1; margin: 0 0 15px; font-size: 1rem; }
.cl-details strong { color: #fff; }
.cl-form { padding: 50px; flex: 1; display: flex; flex-direction: column; gap: 20px; }
.cl-row { display: flex; gap: 20px; }
.cl-group { display: flex; flex-direction: column; gap: 8px; flex: 1; }
.cl-group label { font-size: 0.9rem; font-weight: 600; color: #334155; }
.cl-group input, .cl-group textarea { padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; font-size: 1rem; outline: none; transition: 0.2s; }
.cl-group input:focus, .cl-group textarea:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.cl-btn { background: #3b82f6; color: #fff; border: none; padding: 15px; border-radius: 8px; font-weight: bold; font-size: 1.05rem; cursor: pointer; transition: 0.2s; margin-top: 10px; }
.cl-btn:hover { background: #2563eb; }
@media (max-width: 768px) { .contact-cl { flex-direction: column; } .cl-row { flex-direction: column; } }`,
    jsCode: ``
  },

  // 2. Minimal Clean Form
  {
    _id: "contact2",
    title: "Minimal Clean Form",
    slug: "minimal-clean-form",
    description: "Stripped back single column form with understated borders.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["contact", "minimal", "clean", "simple"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="contact-mn-wrap">
  <form class="contact-mn">
    <h2>Let's talk</h2>
    <div class="mn-group">
      <input type="text" placeholder="Name" />
    </div>
    <div class="mn-group">
      <input type="email" placeholder="Email" />
    </div>
    <div class="mn-group">
      <textarea rows="3" placeholder="Message"></textarea>
    </div>
    <button type="submit" class="mn-btn">Submit</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; }
.contact-mn-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.contact-mn { width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 30px; }
.contact-mn h2 { font-size: 2.5rem; font-weight: 400; margin: 0 0 20px; color: #111; letter-spacing: -1px; }
.mn-group input, .mn-group textarea { width: 100%; padding: 15px 0; border: none; border-bottom: 1px solid #e5e5e5; font-family: inherit; font-size: 1.1rem; outline: none; transition: 0.2s; background: transparent; }
.mn-group input:focus, .mn-group textarea:focus { border-bottom-color: #111; }
.mn-btn { background: #111; color: #fff; border: none; padding: 15px 30px; font-size: 1.1rem; cursor: pointer; transition: 0.2s; align-self: flex-start; }
.mn-btn:hover { background: #555; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Terminal Form
  {
    _id: "contact3",
    title: "Cyberpunk Terminal Contact",
    slug: "cyberpunk-terminal-contact",
    description: "Hacker-themed contact form with neon borders and terminal text.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["contact", "cyberpunk", "neon", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="contact-cy-wrap">
  <form class="contact-cy">
    <div class="cy-head">>> INIT_COMMS_LINK</div>
    <div class="cy-group">
      <label>> ID_STRING:</label>
      <input type="text" placeholder="Enter handle..." />
    </div>
    <div class="cy-group">
      <label>> ENCRYPTED_DATA:</label>
      <textarea rows="4" placeholder="Enter payload..."></textarea>
    </div>
    <button type="submit" class="cy-btn">EXECUTE_SEND</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; color: #0f0; }
.contact-cy-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.contact-cy { background: rgba(0,20,0,0.9); padding: 40px; border: 2px solid #0f0; box-shadow: 0 0 20px rgba(0,255,0,0.2); width: 100%; max-width: 500px; display: flex; flex-direction: column; gap: 25px; position: relative; }
.contact-cy::before { content: ''; position: absolute; top: -2px; left: -2px; right: -2px; bottom: -2px; background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,0,0.1) 10px, rgba(0,255,0,0.1) 20px); pointer-events: none; z-index: -1; }
.cy-head { font-weight: bold; font-size: 1.2rem; border-bottom: 1px dashed #0f0; padding-bottom: 10px; margin-bottom: 10px; text-shadow: 0 0 5px #0f0; }
.cy-group { display: flex; flex-direction: column; gap: 10px; }
.cy-group label { font-weight: bold; opacity: 0.8; }
.cy-group input, .cy-group textarea { background: #000; border: 1px solid #050; color: #0f0; padding: 12px; font-family: inherit; font-size: 1rem; outline: none; transition: 0.2s; }
.cy-group input:focus, .cy-group textarea:focus { border-color: #0f0; box-shadow: 0 0 10px rgba(0,255,0,0.3); }
.cy-group input::placeholder, .cy-group textarea::placeholder { color: #050; }
.cy-btn { background: transparent; color: #0f0; border: 2px solid #0f0; padding: 15px; font-family: inherit; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.2s; text-shadow: 0 0 5px #0f0; box-shadow: 0 0 10px rgba(0,255,0,0.2); }
.cy-btn:hover { background: #0f0; color: #000; box-shadow: 0 0 20px #0f0; text-shadow: none; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Contact Form
  {
    _id: "contact4",
    title: "Glassmorphism Contact Form",
    slug: "glassmorphism-contact-form",
    description: "Frosted glass card hovering over a vibrant background.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["contact", "glassmorphism", "blur", "gradient"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="contact-gl-wrap">
  <form class="contact-gl">
    <h2>Drop us a line</h2>
    <div class="gl-group">
      <input type="text" placeholder="Your Name" />
    </div>
    <div class="gl-group">
      <input type="email" placeholder="Your Email" />
    </div>
    <div class="gl-group">
      <textarea rows="4" placeholder="Your Message"></textarea>
    </div>
    <button type="submit" class="gl-btn">Send Note</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.contact-gl-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); padding: 20px; }
.contact-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; padding: 40px; width: 100%; max-width: 450px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); color: #fff; display: flex; flex-direction: column; gap: 20px; }
.contact-gl h2 { margin: 0 0 10px; font-size: 2rem; font-weight: 800; text-align: center; }
.gl-group input, .gl-group textarea { width: 100%; padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: #fff; font-family: inherit; font-size: 1rem; outline: none; transition: 0.2s; box-sizing: border-box; }
.gl-group input::placeholder, .gl-group textarea::placeholder { color: rgba(255,255,255,0.6); }
.gl-group input:focus, .gl-group textarea:focus { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.5); }
.gl-btn { background: #fff; color: #8b5cf6; border: none; padding: 15px; border-radius: 12px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.2s; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.gl-btn:hover { background: #f8fafc; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }`,
    jsCode: ``
  },

  // 5. Brutalist Contact Block
  {
    _id: "contact5",
    title: "Brutalist Contact Block",
    slug: "brutalist-contact-block",
    description: "Aggressive, high-contrast form with massive typography and thick borders.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["contact", "brutalist", "bold", "retro"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="contact-br-wrap">
  <div class="contact-br">
    <h2>HOLLER AT US.</h2>
    <form class="br-form">
      <input type="text" placeholder="NAME" />
      <input type="email" placeholder="EMAIL" />
      <textarea rows="5" placeholder="WHAT'S UP?"></textarea>
      <button type="submit">SUBMIT</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.contact-br-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.contact-br { background: #facc15; border: 6px solid #000; box-shadow: 15px 15px 0 #000; padding: 50px; width: 100%; max-width: 600px; box-sizing: border-box; }
.contact-br h2 { margin: 0 0 40px; font-size: clamp(2rem, 5vw, 4rem); font-weight: 900; line-height: 1; letter-spacing: -2px; color: #000; }
.br-form { display: flex; flex-direction: column; gap: 20px; }
.br-form input, .br-form textarea { width: 100%; padding: 20px; border: 4px solid #000; background: #fff; font-family: inherit; font-size: 1.2rem; font-weight: bold; color: #000; outline: none; box-sizing: border-box; }
.br-form input::placeholder, .br-form textarea::placeholder { color: #888; font-weight: 900; text-transform: uppercase; }
.br-form input:focus, .br-form textarea:focus { background: #e5e5e5; }
.br-form button { background: #000; color: #fff; border: 4px solid #000; padding: 20px; font-size: 1.5rem; font-weight: 900; cursor: pointer; text-transform: uppercase; transition: 0.1s; }
.br-form button:hover { background: #fff; color: #000; box-shadow: 5px 5px 0 #000; transform: translate(-5px, -5px); }`,
    jsCode: ``
  },

  // 6. Dark Mode Glow Form
  {
    _id: "contact6",
    title: "Dark Glow Contact",
    slug: "dark-glow-contact",
    description: "Deep dark background with inputs that glow on focus.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["contact", "dark", "glow", "form"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="contact-dg-wrap">
  <form class="contact-dg">
    <h2>Contact Support</h2>
    <div class="dg-group">
      <input type="email" placeholder="Email Address" />
    </div>
    <div class="dg-group">
      <textarea rows="4" placeholder="Describe your issue..."></textarea>
    </div>
    <button type="submit" class="dg-btn">Send Request</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; }
.contact-dg-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.contact-dg { background: #0f172a; border: 1px solid #1e293b; border-radius: 16px; padding: 40px; width: 100%; max-width: 450px; display: flex; flex-direction: column; gap: 25px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.contact-dg h2 { margin: 0 0 10px; font-size: 1.8rem; font-weight: 700; color: #f8fafc; text-align: center; }
.dg-group input, .dg-group textarea { width: 100%; padding: 15px; border-radius: 8px; border: 1px solid #334155; background: #020617; color: #f8fafc; font-family: inherit; font-size: 1rem; outline: none; transition: 0.3s; box-sizing: border-box; }
.dg-group input::placeholder, .dg-group textarea::placeholder { color: #64748b; }
.dg-group input:focus, .dg-group textarea:focus { border-color: #3b82f6; box-shadow: 0 0 15px rgba(59,130,246,0.3); }
.dg-btn { background: transparent; border: 1px solid #3b82f6; color: #3b82f6; padding: 15px; border-radius: 8px; font-weight: bold; font-size: 1.05rem; cursor: pointer; transition: 0.3s; margin-top: 10px; }
.dg-btn:hover { background: #3b82f6; color: #fff; box-shadow: 0 0 20px rgba(59,130,246,0.4); }`,
    jsCode: ``
  },

  // 7. Neumorphic Contact Form
  {
    _id: "contact7",
    title: "Neumorphic Soft Contact",
    slug: "neumorphic-soft-contact",
    description: "Soft UI form with embossed container and inset inputs.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["contact", "neumorphism", "soft", "3d"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="contact-neu-wrap">
  <form class="contact-neu">
    <h2>Say Hello</h2>
    <div class="neu-group">
      <input type="text" placeholder="Name" />
    </div>
    <div class="neu-group">
      <input type="email" placeholder="Email" />
    </div>
    <div class="neu-group">
      <textarea rows="4" placeholder="Message"></textarea>
    </div>
    <button type="submit" class="neu-btn">Send</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; }
.contact-neu-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.contact-neu { background: #e0e5ec; padding: 50px; border-radius: 30px; box-shadow: 16px 16px 32px rgba(163,177,198,0.6), -16px -16px 32px rgba(255,255,255,0.5); width: 100%; max-width: 450px; display: flex; flex-direction: column; gap: 25px; box-sizing: border-box; }
.contact-neu h2 { margin: 0 0 10px; color: #4a5568; text-align: center; font-size: 2rem; }
.neu-group input, .neu-group textarea { width: 100%; padding: 15px 20px; border-radius: 15px; border: none; background: #e0e5ec; box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); color: #4a5568; font-family: inherit; font-size: 1rem; outline: none; transition: 0.2s; box-sizing: border-box; }
.neu-group input::placeholder, .neu-group textarea::placeholder { color: #a0aec0; }
.neu-group input:focus, .neu-group textarea:focus { box-shadow: inset 8px 8px 16px rgba(163,177,198,0.7), inset -8px -8px 16px rgba(255,255,255,0.6); }
.neu-btn { padding: 15px; border-radius: 15px; border: none; font-weight: bold; font-size: 1.1rem; color: #4a5568; background: #e0e5ec; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); cursor: pointer; transition: 0.2s; margin-top: 10px; }
.neu-btn:active { box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6), inset -6px -6px 12px rgba(255,255,255,0.5); color: #3182ce; }`,
    jsCode: ``
  },

  // 8. Centered Floating Form Card
  {
    _id: "contact8",
    title: "Floating Form Card",
    slug: "floating-form-card",
    description: "Compact contact card floating over a solid or gradient background.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["contact", "card", "floating", "clean"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="contact-fc-wrap">
  <div class="contact-fc">
    <div class="fc-head">
      <h3>Contact Us</h3>
      <p>We'll get back to you within 24 hours.</p>
    </div>
    <form class="fc-form">
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <textarea rows="3" placeholder="Your Message"></textarea>
      <button type="submit">Submit Request</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; }
.contact-fc-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.contact-fc { background: #fff; border-radius: 20px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); width: 100%; max-width: 400px; overflow: hidden; }
.fc-head { background: #3b82f6; padding: 30px; color: #fff; text-align: center; }
.fc-head h3 { margin: 0 0 10px; font-size: 1.5rem; }
.fc-head p { margin: 0; font-size: 0.95rem; opacity: 0.9; }
.fc-form { padding: 30px; display: flex; flex-direction: column; gap: 20px; }
.fc-form input, .fc-form textarea { padding: 12px 15px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: inherit; font-size: 0.95rem; outline: none; transition: 0.2s; background: #f8fafc; }
.fc-form input:focus, .fc-form textarea:focus { border-color: #3b82f6; background: #fff; }
.fc-form button { background: #0f172a; color: #fff; border: none; padding: 15px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.fc-form button:hover { background: #334155; }`,
    jsCode: ``
  },

  // 9. Two-Column Grid Form
  {
    _id: "contact9",
    title: "Two-Column Grid Form",
    slug: "two-column-grid-form",
    description: "Compact form using CSS grid for side-by-side inputs.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["contact", "grid", "two-column", "layout"],
    isPremium: true,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="contact-gr-wrap">
  <form class="contact-gr">
    <h2>Book an Appointment</h2>
    <div class="gr-grid">
      <div class="gr-item">
        <label>First Name</label>
        <input type="text" />
      </div>
      <div class="gr-item">
        <label>Last Name</label>
        <input type="text" />
      </div>
      <div class="gr-item full">
        <label>Email Address</label>
        <input type="email" />
      </div>
      <div class="gr-item full">
        <label>Additional Notes</label>
        <textarea rows="4"></textarea>
      </div>
    </div>
    <button type="submit" class="gr-btn">Confirm Booking</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.contact-gr-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.contact-gr { width: 100%; max-width: 600px; padding: 40px; border: 1px solid #eaeaea; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
.contact-gr h2 { margin: 0 0 30px; font-size: 2rem; color: #111; }
.gr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
.gr-item { display: flex; flex-direction: column; gap: 8px; }
.gr-item.full { grid-column: 1 / -1; }
.gr-item label { font-size: 0.9rem; font-weight: 500; color: #555; }
.gr-item input, .gr-item textarea { padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none; transition: 0.2s; }
.gr-item input:focus, .gr-item textarea:focus { border-color: #111; }
.gr-btn { width: 100%; background: #111; color: #fff; border: none; padding: 16px; border-radius: 6px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.2s; }
.gr-btn:hover { background: #333; }
@media (max-width: 500px) { .gr-grid { grid-template-columns: 1fr; } }`,
    jsCode: ``
  },

  // 10. Subscription Minimal Form
  {
    _id: "contact10",
    title: "Minimal Subscription Input",
    slug: "minimal-subscription-input",
    description: "Ultra-minimal single input form for newsletters or waitlists.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["contact", "subscription", "minimal", "newsletter"],
    isPremium: false,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="contact-sb-wrap">
  <div class="contact-sb">
    <h2>Join the Waitlist</h2>
    <p>Be the first to know when we launch.</p>
    <form class="sb-form">
      <input type="email" placeholder="name@example.com" required />
      <button type="submit">Join →</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fafafa; }
.contact-sb-wrap { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
.contact-sb { text-align: center; max-width: 500px; width: 100%; }
.contact-sb h2 { font-size: 2.5rem; font-weight: 800; color: #111; margin: 0 0 10px; letter-spacing: -1px; }
.contact-sb p { font-size: 1.1rem; color: #666; margin: 0 0 30px; }
.sb-form { display: flex; gap: 10px; position: relative; }
.sb-form input { flex: 1; padding: 18px 25px; border-radius: 50px; border: 1px solid #ddd; font-family: inherit; font-size: 1.1rem; outline: none; transition: 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
.sb-form input:focus { border-color: #111; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.sb-form button { position: absolute; right: 8px; top: 8px; bottom: 8px; background: #111; color: #fff; border: none; padding: 0 25px; border-radius: 40px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.sb-form button:hover { background: #333; transform: translateX(-2px); }
@media (max-width: 500px) { .sb-form { flex-direction: column; } .sb-form button { position: static; padding: 18px; margin-top: 10px; } }`,
    jsCode: ``
  }
];
