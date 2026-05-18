import { Design } from "./designs-data";

export const BATCH_87_DESIGNS: Design[] = [
  // 1. Classic Split Form
  {
    _id: "cf1",
    title: "Classic Split Contact Form",
    slug: "classic-split-contact-form",
    description: "Standard layout with company information on the left and a contact form on the right.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["contact", "form", "classic", "split"],
    isPremium: false,
    views: 45200,
    downloads: 12500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-cl">
  <div class="cf-info">
    <h2>Get in touch</h2>
    <p>We'd love to hear from you. Our friendly team is always here to chat.</p>
    <div class="cf-details">
      <div class="cf-item">
        <strong>Email</strong>
        <span>hello@yourui.com</span>
      </div>
      <div class="cf-item">
        <strong>Office</strong>
        <span>100 Component St, Web City</span>
      </div>
      <div class="cf-item">
        <strong>Phone</strong>
        <span>+1 (555) 000-0000</span>
      </div>
    </div>
  </div>
  <form class="cf-form">
    <div class="cf-row">
      <div class="cf-group">
        <label>First name</label>
        <input type="text" placeholder="Jane" />
      </div>
      <div class="cf-group">
        <label>Last name</label>
        <input type="text" placeholder="Smith" />
      </div>
    </div>
    <div class="cf-group">
      <label>Email</label>
      <input type="email" placeholder="jane@example.com" />
    </div>
    <div class="cf-group">
      <label>Message</label>
      <textarea placeholder="How can we help?" rows="4"></textarea>
    </div>
    <button type="submit">Send message</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 100px 20px; display: flex; justify-content: center; }
.cf-cl { display: flex; max-width: 1000px; width: 100%; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.cf-info { flex: 1; background: #0f172a; color: #fff; padding: 60px 40px; }
.cf-info h2 { margin: 0 0 15px; font-size: 2rem; }
.cf-info p { color: #94a3b8; line-height: 1.6; margin: 0 0 40px; }
.cf-details { display: flex; flex-direction: column; gap: 30px; }
.cf-item strong { display: block; font-size: 1.1rem; margin-bottom: 5px; }
.cf-item span { color: #94a3b8; }
.cf-form { flex: 1.5; padding: 60px 40px; }
.cf-row { display: flex; gap: 20px; }
.cf-row .cf-group { flex: 1; }
.cf-group { margin-bottom: 25px; }
.cf-group label { display: block; font-weight: 600; color: #334155; margin-bottom: 8px; font-size: 0.95rem; }
.cf-group input, .cf-group textarea { width: 100%; box-sizing: border-box; padding: 12px 15px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; font-family: inherit; transition: 0.2s; outline: none; }
.cf-group input:focus, .cf-group textarea:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.cf-form button { width: 100%; padding: 15px; background: #3b82f6; color: #fff; border: none; border-radius: 8px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: 0.2s; }
.cf-form button:hover { background: #2563eb; }
@media (max-width: 800px) { .cf-cl { flex-direction: column; } .cf-row { flex-direction: column; gap: 0; } }`,
    jsCode: ``
  },

  // 2. Minimal Clean Form
  {
    _id: "cf2",
    title: "Minimal Clean Form",
    slug: "minimal-clean-form",
    description: "Stripped back contact form using only bottom borders for inputs.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["contact", "form", "minimal", "clean"],
    isPremium: false,
    views: 38100,
    downloads: 10400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<form class="cf-mn">
  <h2>Say Hello.</h2>
  <div class="mn-group">
    <input type="text" placeholder="Your Name" required />
  </div>
  <div class="mn-group">
    <input type="email" placeholder="Your Email" required />
  </div>
  <div class="mn-group">
    <textarea placeholder="Your Message" rows="3" required></textarea>
  </div>
  <button type="submit">Send &rarr;</button>
</form>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.cf-mn { max-width: 500px; width: 100%; }
.cf-mn h2 { font-size: 3rem; margin: 0 0 50px; color: #000; letter-spacing: -1px; }
.mn-group { margin-bottom: 40px; }
.mn-group input, .mn-group textarea { width: 100%; box-sizing: border-box; border: none; border-bottom: 2px solid #eee; padding: 10px 0; font-size: 1.2rem; font-family: inherit; outline: none; transition: 0.3s; background: transparent; }
.mn-group input:focus, .mn-group textarea:focus { border-bottom-color: #000; }
.cf-mn button { background: none; border: none; font-size: 1.5rem; font-weight: bold; padding: 0; cursor: pointer; display: flex; align-items: center; transition: 0.2s; }
.cf-mn button:hover { transform: translateX(10px); }`,
    jsCode: ``
  },

  // 3. Cyberpunk Terminal Form
  {
    _id: "cf3",
    title: "Cyberpunk Terminal Form",
    slug: "cyberpunk-terminal-form",
    description: "Hacker-style contact form resembling a command line interface.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["contact", "form", "cyberpunk", "terminal"],
    isPremium: true,
    views: 31200,
    downloads: 8200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-cy">
  <div class="cy-head">ESTABLISHING SECURE CONNECTION... OK.</div>
  <form class="cy-form">
    <div class="cy-group">
      <label>> ALIAS_</label>
      <input type="text" placeholder="Enter handle" />
    </div>
    <div class="cy-group">
      <label>> COMM_LINK_</label>
      <input type="text" placeholder="Enter email address" />
    </div>
    <div class="cy-group">
      <label>> DATA_PAYLOAD_</label>
      <textarea rows="4" placeholder="Type message..."></textarea>
    </div>
    <button type="submit">[ TRANSMIT ]</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #050505; padding: 100px 20px; display: flex; justify-content: center; }
.cf-cy { width: 100%; max-width: 600px; border: 2px solid #0f0; background: rgba(0,20,0,0.8); padding: 30px; box-shadow: 0 0 20px rgba(0,255,0,0.1); }
.cy-head { color: #0f0; border-bottom: 1px dashed #0f0; padding-bottom: 20px; margin-bottom: 30px; font-weight: bold; letter-spacing: 1px; }
.cy-group { margin-bottom: 30px; }
.cy-group label { display: block; color: #0f0; font-weight: bold; margin-bottom: 10px; }
.cy-group input, .cy-group textarea { width: 100%; box-sizing: border-box; background: transparent; border: 1px solid #055; color: #0aa; padding: 10px; font-family: inherit; outline: none; transition: 0.2s; }
.cy-group input:focus, .cy-group textarea:focus { border-color: #0f0; box-shadow: 0 0 10px rgba(0,255,0,0.2); color: #0f0; }
.cy-form button { background: transparent; color: #0f0; border: 2px solid #0f0; padding: 10px 20px; font-family: inherit; font-weight: bold; cursor: pointer; transition: 0.2s; letter-spacing: 2px; }
.cy-form button:hover { background: #0f0; color: #000; box-shadow: 0 0 15px #0f0; }`,
    jsCode: ``
  },

  // 4. Glassmorphism Form
  {
    _id: "cf4",
    title: "Glassmorphism Contact Form",
    slug: "glassmorphism-contact-form",
    description: "Frosted glass form floating over a colorful background.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["contact", "form", "glassmorphism", "blur"],
    isPremium: true,
    views: 47100,
    downloads: 13900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="gl-bg">
  <form class="cf-gl">
    <h3>Send us a message</h3>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <textarea placeholder="Your message..." rows="4"></textarea>
    <button type="submit">Send Message</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.gl-bg { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #f43f5e, #8b5cf6, #3b82f6); }
.cf-gl { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; padding: 40px; width: 100%; max-width: 450px; display: flex; flex-direction: column; gap: 20px; }
.cf-gl h3 { margin: 0 0 10px; color: #fff; font-size: 1.8rem; font-weight: 600; text-align: center; }
.cf-gl input, .cf-gl textarea { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; padding: 15px; color: #fff; font-family: inherit; font-size: 1rem; outline: none; transition: 0.3s; }
.cf-gl input::placeholder, .cf-gl textarea::placeholder { color: rgba(255,255,255,0.6); }
.cf-gl input:focus, .cf-gl textarea:focus { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.5); }
.cf-gl button { background: #fff; color: #8b5cf6; border: none; padding: 15px; border-radius: 12px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.3s; margin-top: 10px; }
.cf-gl button:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }`,
    jsCode: ``
  },

  // 5. Brutalist Contact
  {
    _id: "cf5",
    title: "Brutalist Contact Form",
    slug: "brutalist-contact-form",
    description: "High contrast, aggressive form design with huge inputs.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["contact", "form", "brutalist", "bold"],
    isPremium: false,
    views: 30500,
    downloads: 6900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<form class="cf-br">
  <h2>YELL AT US</h2>
  <input type="text" placeholder="WHO ARE YOU?" />
  <textarea placeholder="WHAT DO YOU WANT?" rows="3"></textarea>
  <button type="submit">SUBMIT</button>
</form>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; padding: 100px 20px; display: flex; justify-content: center; }
.cf-br { background: #facc15; border: 8px solid #000; box-shadow: 15px 15px 0 #000; padding: 50px; width: 100%; max-width: 600px; display: flex; flex-direction: column; gap: 30px; }
.cf-br h2 { margin: 0; font-size: 4rem; font-weight: 900; line-height: 1; text-transform: uppercase; }
.cf-br input, .cf-br textarea { width: 100%; box-sizing: border-box; border: 4px solid #000; padding: 20px; font-size: 1.5rem; font-weight: bold; font-family: inherit; background: #fff; outline: none; }
.cf-br input:focus, .cf-br textarea:focus { background: #000; color: #fff; }
.cf-br input:focus::placeholder, .cf-br textarea:focus::placeholder { color: #555; }
.cf-br button { background: #000; color: #fff; border: 4px solid #000; padding: 20px; font-size: 2rem; font-weight: 900; cursor: pointer; transition: 0.1s; }
.cf-br button:active { transform: translate(5px, 5px); box-shadow: none; }`,
    jsCode: ``
  },

  // 6. Neumorphic Contact
  {
    _id: "cf6",
    title: "Neumorphic Contact Form",
    slug: "neumorphic-contact-form",
    description: "Soft UI form with pressed inner shadows for inputs.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80",
    tags: ["contact", "form", "neumorphism", "soft"],
    isPremium: false,
    views: 34200,
    downloads: 7800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<form class="cf-neu">
  <h2>Contact</h2>
  <div class="neu-input">
    <input type="text" placeholder="Name" />
  </div>
  <div class="neu-input">
    <input type="email" placeholder="Email" />
  </div>
  <div class="neu-input">
    <textarea placeholder="Message" rows="4"></textarea>
  </div>
  <button type="submit" class="neu-btn">Send</button>
</form>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e0e5ec; padding: 100px 20px; display: flex; justify-content: center; }
.cf-neu { background: #e0e5ec; padding: 50px; border-radius: 30px; box-shadow: 12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px rgba(255,255,255,0.5); width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 30px; }
.cf-neu h2 { margin: 0; color: #4a5568; text-align: center; font-size: 2rem; }
.neu-input { border-radius: 15px; box-shadow: inset 6px 6px 10px rgba(163,177,198,0.5), inset -6px -6px 10px rgba(255,255,255,0.8); padding: 5px; }
.neu-input input, .neu-input textarea { width: 100%; box-sizing: border-box; background: transparent; border: none; padding: 15px; font-size: 1rem; color: #4a5568; outline: none; font-family: inherit; }
.neu-btn { background: #e0e5ec; border: none; padding: 15px; border-radius: 15px; box-shadow: 6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.5); font-size: 1.1rem; font-weight: bold; color: #718096; cursor: pointer; transition: 0.2s; }
.neu-btn:active { box-shadow: inset 4px 4px 8px rgba(163,177,198,0.6), inset -4px -4px 8px rgba(255,255,255,0.5); }`,
    jsCode: ``
  },

  // 7. Dark Mode Glow Form
  {
    _id: "cf7",
    title: "Dark Glow Contact Form",
    slug: "dark-glow-contact-form",
    description: "Deep dark UI where inputs glow neon blue when focused.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["contact", "form", "dark", "glow"],
    isPremium: true,
    views: 42100,
    downloads: 11900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<form class="cf-dg">
  <h2>Let's talk</h2>
  <div class="dg-group">
    <input type="text" required />
    <label>Name</label>
  </div>
  <div class="dg-group">
    <input type="email" required />
    <label>Email</label>
  </div>
  <div class="dg-group">
    <textarea required rows="4"></textarea>
    <label>Message</label>
  </div>
  <button type="submit">Send Message</button>
</form>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #020617; padding: 100px 20px; display: flex; justify-content: center; }
.cf-dg { background: #0f172a; padding: 50px; border-radius: 20px; border: 1px solid #1e293b; width: 100%; max-width: 450px; }
.cf-dg h2 { color: #f8fafc; margin: 0 0 40px; font-size: 2rem; }
.dg-group { position: relative; margin-bottom: 40px; }
.dg-group input, .dg-group textarea { width: 100%; box-sizing: border-box; background: transparent; border: none; border-bottom: 2px solid #334155; padding: 10px 0; font-size: 1.1rem; color: #fff; outline: none; transition: 0.3s; font-family: inherit; }
.dg-group label { position: absolute; left: 0; top: 10px; color: #64748b; transition: 0.3s; pointer-events: none; font-size: 1.1rem; }
.dg-group input:focus, .dg-group textarea:focus, .dg-group input:valid, .dg-group textarea:valid { border-bottom-color: #3b82f6; box-shadow: 0 10px 10px -10px rgba(59,130,246,0.5); }
.dg-group input:focus ~ label, .dg-group textarea:focus ~ label, .dg-group input:valid ~ label, .dg-group textarea:valid ~ label { top: -20px; font-size: 0.8rem; color: #3b82f6; }
.cf-dg button { width: 100%; background: transparent; border: 2px solid #3b82f6; color: #3b82f6; padding: 15px; border-radius: 8px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: 0.3s; }
.cf-dg button:hover { background: #3b82f6; color: #fff; box-shadow: 0 0 20px rgba(59,130,246,0.4); }`,
    jsCode: ``
  },

  // 8. Floating Label Form
  {
    _id: "cf8",
    title: "Floating Label Form",
    slug: "floating-label-contact-form",
    description: "Clean white form where labels smoothly float above inputs when typed.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["contact", "form", "floating", "animation"],
    isPremium: false,
    views: 48500,
    downloads: 13800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<form class="cf-fl">
  <h2>Contact Support</h2>
  <div class="fl-wrap">
    <input type="text" id="name" required placeholder=" " />
    <label for="name">Full Name</label>
  </div>
  <div class="fl-wrap">
    <input type="email" id="email" required placeholder=" " />
    <label for="email">Email Address</label>
  </div>
  <div class="fl-wrap">
    <textarea id="msg" required placeholder=" " rows="4"></textarea>
    <label for="msg">How can we help?</label>
  </div>
  <button type="submit">Submit Request</button>
</form>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f1f5f9; padding: 100px 20px; display: flex; justify-content: center; }
.cf-fl { background: #fff; padding: 50px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); width: 100%; max-width: 500px; }
.cf-fl h2 { margin: 0 0 30px; color: #0f172a; }
.fl-wrap { position: relative; margin-bottom: 25px; }
.fl-wrap input, .fl-wrap textarea { width: 100%; box-sizing: border-box; padding: 25px 15px 10px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; outline: none; transition: 0.2s; font-family: inherit; }
.fl-wrap label { position: absolute; left: 15px; top: 18px; color: #94a3b8; transition: 0.2s; pointer-events: none; }
.fl-wrap input:focus, .fl-wrap textarea:focus { border-color: #3b82f6; }
.fl-wrap input:focus ~ label, .fl-wrap input:not(:placeholder-shown) ~ label,
.fl-wrap textarea:focus ~ label, .fl-wrap textarea:not(:placeholder-shown) ~ label { top: 8px; font-size: 0.75rem; color: #3b82f6; font-weight: 600; }
.cf-fl button { width: 100%; padding: 15px; background: #0f172a; color: #fff; border: none; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; margin-top: 10px; }
.cf-fl button:hover { background: #334155; }`,
    jsCode: ``
  },

  // 9. Side Image Form
  {
    _id: "cf9",
    title: "Side Image Form",
    slug: "side-image-contact-form",
    description: "A wide card with an image block on the left and form on the right.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["contact", "form", "image", "split"],
    isPremium: false,
    views: 39200,
    downloads: 10800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-si">
  <div class="si-img"></div>
  <form class="si-form">
    <h2>Ready to start?</h2>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <button>Let's go</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; padding: 100px 20px; display: flex; justify-content: center; }
.cf-si { display: flex; max-width: 900px; width: 100%; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.si-img { flex: 1; background: url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80') center/cover; }
.si-form { flex: 1; padding: 60px; display: flex; flex-direction: column; gap: 20px; justify-content: center; }
.si-form h2 { margin: 0 0 10px; color: #1e293b; font-size: 2.2rem; }
.si-form input { padding: 15px; border: 2px solid #f1f5f9; border-radius: 10px; font-size: 1rem; outline: none; transition: 0.2s; }
.si-form input:focus { border-color: #3b82f6; }
.si-form button { padding: 15px; background: #3b82f6; color: #fff; border: none; border-radius: 10px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.2s; margin-top: 10px; }
.si-form button:hover { background: #2563eb; }
@media (max-width: 768px) { .cf-si { flex-direction: column; } .si-img { height: 200px; } .si-form { padding: 40px 20px; } }`,
    jsCode: ``
  },

  // 10. Single Line Step Form
  {
    _id: "cf10",
    title: "Single Line Form",
    slug: "single-line-contact-form",
    description: "A wide, single-row form meant for quick newsletter signups or simple messages.",
    category: "Contact Forms",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["contact", "form", "inline", "minimal"],
    isPremium: true,
    views: 40500,
    downloads: 11500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cf-sl">
  <h2>Keep in touch</h2>
  <form class="sl-wrap">
    <input type="text" placeholder="Your name" />
    <input type="email" placeholder="Your email" />
    <button>Subscribe</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; padding: 100px 20px; display: flex; justify-content: center; }
.cf-sl { max-width: 800px; width: 100%; text-align: center; }
.cf-sl h2 { font-size: 2.5rem; color: #0f172a; margin: 0 0 40px; }
.sl-wrap { display: flex; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 50px; padding: 10px; gap: 10px; }
.sl-wrap input { flex: 1; border: none; background: transparent; padding: 15px 20px; font-size: 1rem; outline: none; }
.sl-wrap input:first-child { border-right: 1px solid #e2e8f0; }
.sl-wrap button { background: #0f172a; color: #fff; border: none; padding: 0 30px; border-radius: 40px; font-weight: bold; cursor: pointer; transition: 0.2s; white-space: nowrap; }
.sl-wrap button:hover { background: #3b82f6; }
@media (max-width: 600px) { .sl-wrap { flex-direction: column; border-radius: 20px; padding: 20px; } .sl-wrap input:first-child { border-right: none; border-bottom: 1px solid #e2e8f0; } .sl-wrap button { padding: 15px; margin-top: 10px; } }`,
    jsCode: ``
  }
];
