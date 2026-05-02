import { Design } from "./designs-data";

export const BATCH_5_DESIGNS: Design[] = [
  // 1. Multi-Step Registration Form
  {
    _id: "r1",
    title: "Multi-Step Wizard Registration",
    slug: "multi-step-wizard-registration",
    description: "A comprehensive multi-step signup flow with a progress indicator for complex onboardings.",
    category: "Registration Form",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tags: ["registration", "wizard", "multi-step", "onboarding"],
    isPremium: true,
    views: 8900,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="wizard-wrapper">
  <div class="wizard-card">
    <div class="progress-container">
      <div class="progress-bar"><div class="fill" style="width: 33%"></div></div>
      <div class="steps">
        <span class="active">Account</span>
        <span>Profile</span>
        <span>Finish</span>
      </div>
    </div>
    <h2>Create your account</h2>
    <p>Let's start with your basic information.</p>
    <form class="step-form">
      <div class="input-group">
        <label>Email Address</label>
        <input type="email" placeholder="you@example.com" />
      </div>
      <div class="input-group">
        <label>Password</label>
        <input type="password" placeholder="Min 8 characters" />
      </div>
      <div class="actions">
        <button type="button" class="btn-secondary" disabled>Back</button>
        <button type="button" class="btn-primary">Next Step</button>
      </div>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f8fafc; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.wizard-wrapper { width: 100%; max-width: 500px; padding: 1rem; }
.wizard-card { background: #fff; padding: 2.5rem; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); }
.progress-container { margin-bottom: 2rem; }
.progress-bar { height: 6px; background: #e2e8f0; border-radius: 3px; margin-bottom: 0.5rem; overflow: hidden; }
.fill { height: 100%; background: #3b82f6; transition: 0.3s; }
.steps { display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 500; color: #94a3b8; }
.steps .active { color: #3b82f6; font-weight: 700; }
h2 { margin: 0 0 0.5rem 0; color: #0f172a; font-size: 1.5rem; }
p { color: #64748b; margin-bottom: 2rem; font-size: 0.95rem; }
.input-group { margin-bottom: 1.25rem; }
label { display: block; font-size: 0.85rem; font-weight: 600; color: #334155; margin-bottom: 6px; }
input { width: 100%; box-sizing: border-box; padding: 0.8rem 1rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; outline: none; transition: 0.2s; }
input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.actions { display: flex; justify-content: space-between; margin-top: 2rem; }
button { padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; border: none; }
.btn-secondary { background: #f1f5f9; color: #94a3b8; }
.btn-secondary:not([disabled]):hover { background: #e2e8f0; color: #334155; }
.btn-primary { background: #3b82f6; color: #fff; }
.btn-primary:hover { background: #2563eb; }`,
    jsCode: ``
  },

  // 2. Minimal Split-Screen Signup
  {
    _id: "r2",
    title: "Minimal Split-Screen Signup",
    slug: "minimal-split-screen-signup",
    description: "A stark white and image-based split screen layout focusing on high conversion.",
    category: "Registration Form",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["registration", "split-screen", "minimal", "clean"],
    isPremium: false,
    views: 6500,
    downloads: 1800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="split-reg">
  <div class="form-side">
    <div class="form-inner">
      <div class="brand">Lumina</div>
      <h1>Start your journey</h1>
      <p class="subtitle">Join thousands of creators building the future.</p>
      
      <form>
        <div class="row">
          <div class="col">
            <label>First Name</label>
            <input type="text" placeholder="John" />
          </div>
          <div class="col">
            <label>Last Name</label>
            <input type="text" placeholder="Doe" />
          </div>
        </div>
        <div class="field">
          <label>Email Address</label>
          <input type="email" placeholder="john@example.com" />
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" placeholder="Create a strong password" />
        </div>
        <button type="submit" class="submit-btn">Create Account</button>
      </form>
      <p class="login-link">Already have an account? <a href="#">Log in</a></p>
    </div>
  </div>
  <div class="img-side"></div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; }
.split-reg { display: flex; min-height: 100vh; }
.form-side { flex: 1; display: flex; justify-content: center; align-items: center; padding: 2rem; }
.form-inner { width: 100%; max-width: 440px; }
.brand { font-size: 1.5rem; font-weight: 900; letter-spacing: 1px; margin-bottom: 3rem; }
h1 { font-size: 2.5rem; font-weight: 800; margin: 0 0 0.5rem 0; color: #111; }
.subtitle { color: #666; font-size: 1.1rem; margin-bottom: 2rem; }
.row { display: flex; gap: 1rem; margin-bottom: 1rem; }
.col { flex: 1; }
.field { margin-bottom: 1rem; }
label { display: block; font-size: 0.85rem; font-weight: 600; color: #444; margin-bottom: 8px; }
input { width: 100%; box-sizing: border-box; padding: 1rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; outline: none; transition: border-color 0.2s; background: #fafafa; }
input:focus { border-color: #111; background: #fff; }
.submit-btn { width: 100%; padding: 1.2rem; background: #111; color: #fff; border: none; border-radius: 4px; font-weight: bold; font-size: 1rem; cursor: pointer; margin-top: 1rem; transition: 0.2s; }
.submit-btn:hover { background: #333; }
.login-link { text-align: center; margin-top: 2rem; color: #666; }
.login-link a { color: #111; font-weight: bold; text-decoration: none; }
.img-side { flex: 1; background: url('https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=1200') center/cover; }
@media (max-width: 800px) { .img-side { display: none; } }`,
    jsCode: ``
  },

  // 3. Modal Popup Signup
  {
    _id: "r3",
    title: "Glassmorphism Modal Signup",
    slug: "glassmorphism-modal-signup",
    description: "A floating registration modal with a heavy blur effect, perfect for popups or overlays.",
    category: "Registration Form",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["registration", "modal", "glassmorphism", "overlay"],
    isPremium: false,
    views: 5400,
    downloads: 1600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="bg-layer">
  <div class="modal">
    <button class="close-btn">×</button>
    <h2>Join the Club</h2>
    <p>Unlock exclusive content and community features.</p>
    <div class="social-login">
      <button class="apple-btn"> Continue with Apple</button>
    </div>
    <div class="divider"><span>Or use email</span></div>
    <form>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="password" placeholder="Create Password" required />
      <button type="submit" class="submit">Sign Up</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.bg-layer { height: 100vh; background: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600') center/cover; display: flex; justify-content: center; align-items: center; padding: 1rem; }
.modal { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px); border: 1px solid rgba(255, 255, 255, 0.3); padding: 2.5rem; border-radius: 24px; width: 100%; max-width: 380px; position: relative; box-shadow: 0 25px 50px rgba(0,0,0,0.2); color: #fff; text-align: center; }
.close-btn { position: absolute; top: 1rem; right: 1.5rem; background: none; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; opacity: 0.7; }
.close-btn:hover { opacity: 1; }
h2 { margin: 0 0 0.5rem 0; font-size: 1.8rem; font-weight: 700; }
p { color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 2rem; }
.apple-btn { width: 100%; background: #000; color: #fff; border: none; padding: 0.9rem; border-radius: 12px; font-weight: 600; cursor: pointer; font-size: 1rem; }
.divider { display: flex; align-items: center; margin: 1.5rem 0; color: rgba(255,255,255,0.6); font-size: 0.8rem; }
.divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid rgba(255,255,255,0.2); }
.divider span { padding: 0 10px; }
form { display: flex; flex-direction: column; gap: 1rem; }
input { background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 1rem; border-radius: 12px; outline: none; font-size: 0.95rem; }
input::placeholder { color: rgba(255,255,255,0.5); }
input:focus { border-color: rgba(255,255,255,0.5); background: rgba(0,0,0,0.3); }
.submit { background: #fff; color: #000; border: none; padding: 1rem; border-radius: 12px; font-weight: bold; cursor: pointer; transition: 0.2s; margin-top: 0.5rem; }
.submit:hover { background: #eee; transform: translateY(-2px); }`,
    jsCode: ``
  },

  // 4. SaaS Trial Registration
  {
    _id: "r4",
    title: "SaaS Trial Registration",
    slug: "saas-trial-registration",
    description: "A conversion-optimized signup form with trust badges and feature highlights.",
    category: "Registration Form",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["registration", "saas", "trial", "conversion"],
    isPremium: true,
    views: 7100,
    downloads: 2200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="saas-reg">
  <div class="benefits">
    <h1>Start your 14-day free trial</h1>
    <p>No credit card required. Setup in 2 minutes.</p>
    <ul class="feature-list">
      <li><span>✓</span> Unlimited projects and workspaces</li>
      <li><span>✓</span> Priority 24/7 customer support</li>
      <li><span>✓</span> Advanced analytics and reporting</li>
      <li><span>✓</span> Custom domain integration</li>
    </ul>
    <div class="trust">
      <p>Trusted by 10,000+ companies</p>
      <div class="logos">
        <span>ACME</span><span>Global</span><span>TechCorp</span>
      </div>
    </div>
  </div>
  <div class="form-wrapper">
    <form class="saas-form">
      <div class="row">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="text" placeholder="Company Name" />
      <input type="email" placeholder="Work Email" />
      <input type="password" placeholder="Create Password" />
      <button class="cta-btn">Create Free Account</button>
      <p class="terms">By registering, you agree to our <a href="#">Terms</a> & <a href="#">Privacy Policy</a>.</p>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #0f172a; color: #fff; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.saas-reg { max-width: 1000px; width: 100%; display: flex; align-items: center; gap: 4rem; padding: 2rem; box-sizing: border-box; }
.benefits { flex: 1; }
h1 { font-size: 2.5rem; line-height: 1.2; margin: 0 0 1rem 0; font-weight: 800; }
.benefits > p { font-size: 1.1rem; color: #94a3b8; margin-bottom: 2rem; }
.feature-list { list-style: none; padding: 0; margin: 0 0 3rem 0; }
.feature-list li { margin-bottom: 1rem; display: flex; align-items: center; gap: 10px; color: #e2e8f0; }
.feature-list span { color: #10b981; font-weight: bold; }
.trust p { color: #64748b; font-size: 0.9rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.logos { display: flex; gap: 1.5rem; color: #475569; font-weight: 800; font-size: 1.2rem; }
.form-wrapper { flex: 1; max-width: 450px; }
.saas-form { background: #1e293b; padding: 2.5rem; border-radius: 16px; border: 1px solid #334155; display: flex; flex-direction: column; gap: 1rem; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
.row { display: flex; gap: 1rem; }
input { width: 100%; padding: 1rem; background: #0f172a; border: 1px solid #334155; border-radius: 8px; color: #fff; outline: none; box-sizing: border-box; transition: 0.2s; }
input:focus { border-color: #3b82f6; box-shadow: 0 0 0 2px rgba(59,130,246,0.2); }
.cta-btn { background: #3b82f6; color: #fff; border: none; padding: 1.2rem; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; margin-top: 0.5rem; }
.cta-btn:hover { background: #2563eb; transform: translateY(-2px); }
.terms { text-align: center; font-size: 0.8rem; color: #64748b; margin-top: 1rem; }
.terms a { color: #3b82f6; text-decoration: none; }
@media (max-width: 800px) { .saas-reg { flex-direction: column; } .benefits { text-align: center; } .feature-list li { justify-content: center; } .logos { justify-content: center; } }`,
    jsCode: ``
  },

  // 5. Dark Mode Developer Signup
  {
    _id: "r5",
    title: "Developer Portal Registration",
    slug: "developer-portal-registration",
    description: "A developer-focused dark registration form featuring OAuth buttons for GitHub and GitLab.",
    category: "Registration Form",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["registration", "developer", "dark", "code"],
    isPremium: false,
    views: 4800,
    downloads: 1350,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dev-signup">
  <div class="dev-card">
    <div class="icon-header">{" "}</div>
    <h2>Join the Dev Network</h2>
    <p>Sign up to get access to API keys and SDKs.</p>
    
    <div class="oauth-buttons">
      <button class="gh-btn">Auth with GitHub</button>
      <button class="gl-btn">Auth with GitLab</button>
    </div>
    
    <div class="divider"><span>OR REGISTER LOCALLY</span></div>
    
    <form>
      <div class="input-line">
        <label>username</label>
        <input type="text" placeholder="dev_guru_99" />
      </div>
      <div class="input-line">
        <label>email</label>
        <input type="email" placeholder="dev@example.com" />
      </div>
      <div class="input-line">
        <label>password</label>
        <input type="password" placeholder="********" />
      </div>
      <button class="submit-cmd">sudo register</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #09090b; color: #e4e4e7; font-family: 'Fira Code', monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.dev-card { width: 100%; max-width: 400px; padding: 2rem; background: #18181b; border: 1px solid #27272a; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.icon-header { font-size: 2rem; color: #10b981; font-weight: bold; margin-bottom: 1rem; }
h2 { margin: 0 0 0.5rem 0; font-size: 1.5rem; color: #fff; }
p { color: #a1a1aa; font-size: 0.9rem; margin-bottom: 2rem; }
.oauth-buttons { display: flex; flex-direction: column; gap: 0.75rem; }
.oauth-buttons button { padding: 0.8rem; border-radius: 6px; font-family: inherit; font-weight: bold; font-size: 0.9rem; cursor: pointer; transition: 0.2s; border: none; color: #fff; }
.gh-btn { background: #24292e; } .gh-btn:hover { background: #000; }
.gl-btn { background: #e24329; } .gl-btn:hover { background: #fc6d26; }
.divider { margin: 2rem 0; text-align: center; position: relative; }
.divider::before { content: ''; position: absolute; left: 0; top: 50%; width: 100%; height: 1px; background: #27272a; }
.divider span { background: #18181b; padding: 0 10px; position: relative; z-index: 1; color: #71717a; font-size: 0.8rem; }
.input-line { margin-bottom: 1.25rem; }
label { display: block; color: #10b981; margin-bottom: 0.5rem; font-size: 0.85rem; }
input { width: 100%; box-sizing: border-box; background: #09090b; border: 1px solid #27272a; color: #e4e4e7; padding: 0.8rem; border-radius: 4px; font-family: inherit; outline: none; }
input:focus { border-color: #10b981; }
.submit-cmd { width: 100%; padding: 1rem; background: #10b981; color: #000; border: none; border-radius: 4px; font-family: inherit; font-weight: bold; cursor: pointer; margin-top: 1rem; transition: 0.2s; }
.submit-cmd:hover { background: #34d399; }`,
    jsCode: ``
  },

  // 6. Newsletter/Beta Waitlist Signup
  {
    _id: "r6",
    title: "Beta Waitlist Signup",
    slug: "beta-waitlist-signup",
    description: "A compact, single-row signup form perfect for newsletter subscriptions or beta waitlists.",
    category: "Registration Form",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["registration", "waitlist", "newsletter", "compact"],
    isPremium: false,
    views: 3900,
    downloads: 1200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="waitlist-card">
  <h2>Get early access</h2>
  <p>Join 10,000+ creators getting weekly design resources and early product updates.</p>
  <form class="waitlist-form">
    <input type="email" placeholder="name@example.com" required />
    <button type="submit">Join Waitlist</button>
  </form>
  <div class="note">No spam. Unsubscribe anytime.</div>
</div>`,
    cssCode: `body { margin: 0; background: #fdf2f8; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.waitlist-card { background: #fff; padding: 3rem; border-radius: 24px; box-shadow: 0 20px 40px rgba(236,72,153,0.1); width: 100%; max-width: 450px; text-align: center; border: 1px solid #fce7f3; }
h2 { color: #831843; font-size: 2rem; margin: 0 0 1rem 0; font-weight: 800; letter-spacing: -1px; }
p { color: #be185d; margin-bottom: 2.5rem; line-height: 1.5; font-size: 1.05rem; }
.waitlist-form { display: flex; gap: 0.5rem; background: #fdf2f8; padding: 0.5rem; border-radius: 99px; border: 1px solid #fbcfe8; transition: 0.3s; }
.waitlist-form:focus-within { border-color: #f472b6; box-shadow: 0 0 0 4px rgba(244,114,182,0.2); }
input { flex: 1; background: transparent; border: none; padding: 0.8rem 1rem; outline: none; font-size: 1rem; color: #831843; }
input::placeholder { color: #f472b6; }
button { background: #ec4899; color: #fff; border: none; padding: 0.8rem 1.5rem; border-radius: 99px; font-weight: bold; cursor: pointer; transition: 0.2s; white-space: nowrap; }
button:hover { background: #db2777; }
.note { margin-top: 1.5rem; font-size: 0.8rem; color: #f472b6; }
@media (max-width: 500px) { .waitlist-form { flex-direction: column; border-radius: 12px; } button { border-radius: 8px; } }`,
    jsCode: ``
  },

  // 7. E-commerce Account Creation
  {
    _id: "r7",
    title: "E-Commerce Customer Registration",
    slug: "ecommerce-customer-registration",
    description: "A detailed account creation form for an online store, featuring a toggle for newsletter subscription.",
    category: "Registration Form",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tags: ["registration", "ecommerce", "store", "account"],
    isPremium: true,
    views: 5200,
    downloads: 1450,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="store-reg">
  <h2>Create Account</h2>
  <p>Track orders, save products, and speed up checkout.</p>
  <form>
    <div class="grid-2">
      <div class="field"><label>First Name</label><input type="text" /></div>
      <div class="field"><label>Last Name</label><input type="text" /></div>
    </div>
    <div class="field"><label>Email Address</label><input type="email" /></div>
    <div class="field"><label>Create Password</label><input type="password" /></div>
    
    <div class="checkbox-area">
      <label class="check-label">
        <input type="checkbox" checked />
        <span>Subscribe to VENDRE newsletter for 10% off your first order.</span>
      </label>
    </div>
    
    <button class="submit-btn">Register</button>
  </form>
</div>`,
    cssCode: `body { margin: 0; background: #fafafa; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; color: #111; }
.store-reg { background: #fff; border: 1px solid #eee; padding: 3rem; max-width: 500px; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
h2 { margin: 0 0 0.5rem 0; font-size: 2rem; font-weight: normal; }
p { color: #666; margin-bottom: 2rem; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.field { margin-bottom: 1.5rem; }
label { display: block; font-size: 0.85rem; color: #444; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }
input[type="text"], input[type="email"], input[type="password"] { width: 100%; padding: 1rem; border: 1px solid #ccc; outline: none; font-size: 1rem; box-sizing: border-box; transition: border-color 0.2s; }
input:focus { border-color: #111; }
.checkbox-area { margin-bottom: 2rem; padding-top: 1rem; border-top: 1px solid #eee; }
.check-label { display: flex; align-items: flex-start; gap: 10px; cursor: pointer; text-transform: none; letter-spacing: normal; color: #555; }
.check-label input { margin-top: 4px; }
.submit-btn { width: 100%; background: #111; color: #fff; border: none; padding: 1.2rem; font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; transition: 0.2s; }
.submit-btn:hover { background: #333; }`,
    jsCode: ``
  },

  // 8. Creative Agency Creative Signup
  {
    _id: "r8",
    title: "Creative Agency Registration",
    slug: "creative-agency-registration",
    description: "An artistic signup form overlaying a beautiful masonry gallery, ideal for creative portfolios.",
    category: "Registration Form",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    tags: ["registration", "agency", "creative", "overlay"],
    isPremium: false,
    views: 4100,
    downloads: 1100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="creative-bg">
  <div class="glass-form-wrap">
    <h2>Become a member.</h2>
    <form>
      <input type="text" placeholder="Name" class="elegant-input" />
      <input type="email" placeholder="Email" class="elegant-input" />
      <button class="elegant-btn">Submit Request</button>
    </form>
    <a href="#" class="back-link">Return to portfolio</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Playfair Display', serif; }
.creative-bg { height: 100vh; background: url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600') center/cover; display: flex; justify-content: center; align-items: center; position: relative; }
.creative-bg::after { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.4); }
.glass-form-wrap { position: relative; z-index: 10; background: rgba(255,255,255,0.85); backdrop-filter: blur(15px); padding: 4rem; width: 100%; max-width: 400px; text-align: center; }
h2 { font-size: 2.5rem; color: #111; margin-top: 0; margin-bottom: 2.5rem; font-style: italic; }
form { display: flex; flex-direction: column; gap: 1.5rem; }
.elegant-input { border: none; border-bottom: 1px solid #111; background: transparent; padding: 1rem 0; font-size: 1.1rem; outline: none; font-family: sans-serif; transition: 0.3s; }
.elegant-input:focus { border-bottom-width: 2px; }
.elegant-input::placeholder { color: #888; font-family: 'Playfair Display', serif; font-style: italic; }
.elegant-btn { margin-top: 1.5rem; background: transparent; border: 1px solid #111; color: #111; padding: 1rem; font-family: sans-serif; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; transition: 0.3s; font-size: 0.85rem; }
.elegant-btn:hover { background: #111; color: #fff; }
.back-link { display: inline-block; margin-top: 2rem; color: #555; text-decoration: none; font-family: sans-serif; font-size: 0.85rem; border-bottom: 1px solid transparent; transition: 0.3s; }
.back-link:hover { border-bottom-color: #555; color: #111; }`,
    jsCode: ``
  },

  // 9. Web3 DApp Signup
  {
    _id: "r9",
    title: "Web3 DApp Identity Setup",
    slug: "web3-dapp-identity-setup",
    description: "A registration form for a decentralized app, linking a crypto wallet to a username.",
    category: "Registration Form",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["registration", "web3", "dapp", "crypto"],
    isPremium: true,
    views: 4600,
    downloads: 1300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dapp-reg">
  <div class="dapp-card">
    <div class="status-badge">Wallet Connected: 0x71C...3A9</div>
    <h2>Setup Identity</h2>
    <p>Link a username to your wallet address to interact with the community.</p>
    <form>
      <div class="field">
        <label>Username</label>
        <div class="input-with-prefix">
          <span>@</span>
          <input type="text" placeholder="cryptoking" />
        </div>
      </div>
      <div class="field">
        <label>Email (Optional for notifications)</label>
        <input type="email" placeholder="email@domain.com" />
      </div>
      <button class="mint-btn">Mint Identity Profiler</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #0f0a1f; color: #fff; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.dapp-card { background: #1a1528; border: 1px solid #322b46; padding: 2.5rem; border-radius: 20px; width: 100%; max-width: 400px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
.status-badge { display: inline-block; background: rgba(16, 185, 129, 0.1); color: #10b981; padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; border: 1px solid rgba(16, 185, 129, 0.2); margin-bottom: 1.5rem; }
h2 { margin: 0 0 0.5rem 0; font-size: 1.8rem; font-weight: 700; color: #e9d5ff; }
p { color: #a78bfa; font-size: 0.95rem; margin-bottom: 2rem; line-height: 1.5; }
.field { margin-bottom: 1.5rem; }
label { display: block; color: #d8b4fe; font-size: 0.9rem; font-weight: 500; margin-bottom: 0.5rem; }
input { width: 100%; background: #0f0a1f; border: 1px solid #4c1d95; color: #fff; padding: 1rem; border-radius: 8px; outline: none; font-size: 1rem; box-sizing: border-box; transition: 0.2s; }
input:focus { border-color: #8b5cf6; box-shadow: 0 0 0 2px rgba(139,92,246,0.2); }
.input-with-prefix { display: flex; align-items: center; background: #0f0a1f; border: 1px solid #4c1d95; border-radius: 8px; overflow: hidden; transition: 0.2s; }
.input-with-prefix:focus-within { border-color: #8b5cf6; box-shadow: 0 0 0 2px rgba(139,92,246,0.2); }
.input-with-prefix span { padding: 1rem; color: #8b5cf6; font-weight: bold; background: rgba(139,92,246,0.1); border-right: 1px solid #4c1d95; }
.input-with-prefix input { border: none; box-shadow: none; }
.mint-btn { width: 100%; background: linear-gradient(135deg, #a855f7, #ec4899); color: #fff; border: none; padding: 1.2rem; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.3s; margin-top: 1rem; }
.mint-btn:hover { filter: brightness(1.1); transform: translateY(-2px); box-shadow: 0 10px 20px rgba(168, 85, 247, 0.3); }`,
    jsCode: ``
  },

  // 10. Fintech Secure Registration
  {
    _id: "r10",
    title: "Fintech Secure Registration",
    slug: "fintech-secure-registration",
    description: "A highly secure registration form tailored for financial applications, including a password strength meter.",
    category: "Registration Form",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["registration", "fintech", "finance", "secure"],
    isPremium: false,
    views: 6700,
    downloads: 2000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="fintech-reg">
  <div class="secure-box">
    <div class="shield-icon">🛡️</div>
    <h2>Open your secure account</h2>
    <p>Bank-level encryption protects your personal data.</p>
    <form>
      <div class="field">
        <label>Legal Full Name</label>
        <input type="text" placeholder="As it appears on your ID" />
      </div>
      <div class="field">
        <label>Email Address</label>
        <input type="email" placeholder="you@domain.com" />
      </div>
      <div class="field">
        <label>Secure Password</label>
        <input type="password" placeholder="Min 12 characters" />
        <div class="strength-meter">
          <div class="bar bar-1 active"></div>
          <div class="bar bar-2 active"></div>
          <div class="bar bar-3"></div>
          <div class="bar bar-4"></div>
        </div>
        <div class="strength-text">Password strength: <span>Medium</span></div>
      </div>
      <button class="auth-btn">Verify Identity & Register</button>
    </form>
    <div class="encryption-note">🔒 256-bit SSL Encryption</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f1f5f9; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.secure-box { background: #fff; padding: 3rem 2.5rem; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); width: 100%; max-width: 400px; border-top: 4px solid #10b981; }
.shield-icon { font-size: 2.5rem; margin-bottom: 1rem; text-align: center; }
h2 { color: #0f172a; margin: 0 0 0.5rem 0; font-size: 1.5rem; text-align: center; }
p { color: #64748b; font-size: 0.9rem; text-align: center; margin-bottom: 2rem; }
.field { margin-bottom: 1.5rem; }
label { display: block; font-size: 0.85rem; font-weight: 600; color: #334155; margin-bottom: 6px; }
input { width: 100%; box-sizing: border-box; padding: 0.8rem; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; outline: none; transition: 0.2s; }
input:focus { border-color: #10b981; box-shadow: 0 0 0 3px rgba(16,185,129,0.1); }
.strength-meter { display: flex; gap: 4px; margin-top: 8px; }
.bar { flex: 1; height: 4px; background: #e2e8f0; border-radius: 2px; }
.bar.active { background: #f59e0b; }
.strength-text { font-size: 0.75rem; color: #64748b; margin-top: 6px; text-align: right; }
.strength-text span { color: #f59e0b; font-weight: bold; }
.auth-btn { width: 100%; background: #10b981; color: #fff; border: none; padding: 1rem; border-radius: 6px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: 0.2s; margin-top: 1rem; }
.auth-btn:hover { background: #059669; }
.encryption-note { text-align: center; margin-top: 1.5rem; font-size: 0.75rem; color: #94a3b8; font-weight: 500; }`,
    jsCode: ``
  }
];
