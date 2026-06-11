import { Design } from "./designs-data";

export const BATCH_4_DESIGNS: Design[] = [
  // 1. Split Screen Login
  {
    _id: "l1",
    title: "Split Screen Illustration Login",
    slug: "split-screen-illustration-login",
    description: "A modern split-screen login page featuring a vibrant image on the left and a clean form on the right.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["login", "split-screen", "modern", "image"],
    isPremium: false,
    views: 8900,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="split-login">
  <div class="image-section">
    <div class="overlay-text">
      <h2>Join our creative<br>community today.</h2>
      <p>Over 50,000 designers and developers are already building the future with us.</p>
    </div>
  </div>
  <div class="form-section">
    <div class="form-container">
      <div class="logo">Brand.</div>
      <h3>Welcome back</h3>
      <p>Please enter your details to sign in.</p>
      
      <button class="social-btn">
        <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Sign in with Google
      </button>
      
      <div class="divider"><span>or sign in with email</span></div>
      
      <form>
        <div class="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div class="input-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" required />
        </div>
        <div class="options">
          <label><input type="checkbox"> Remember for 30 days</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" class="submit-btn">Sign In</button>
      </form>
      <p class="footer-text">Don't have an account? <a href="#">Sign up</a></p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #fff; }
.split-login { display: flex; height: 100vh; }
.image-section { flex: 1; background: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80') center/cover; position: relative; }
.image-section::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); }
.overlay-text { position: absolute; bottom: 4rem; left: 4rem; z-index: 10; color: #fff; }
.overlay-text h2 { font-size: 2.5rem; margin: 0 0 1rem 0; line-height: 1.2; }
.overlay-text p { font-size: 1.1rem; color: #e2e8f0; max-width: 400px; }
.form-section { flex: 1; display: flex; justify-content: center; align-items: center; background: #fff; }
.form-container { width: 100%; max-width: 400px; padding: 2rem; }
.logo { font-size: 1.5rem; font-weight: 900; margin-bottom: 2rem; }
h3 { font-size: 1.8rem; margin: 0 0 0.5rem 0; color: #0f172a; }
.form-container > p { color: #64748b; margin-bottom: 2rem; }
.social-btn { width: 100%; padding: 0.8rem; border: 1px solid #e2e8f0; background: #fff; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 10px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.social-btn:hover { background: #f8fafc; }
.divider { display: flex; align-items: center; text-align: center; margin: 1.5rem 0; color: #94a3b8; font-size: 0.85rem; }
.divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid #e2e8f0; }
.divider span { padding: 0 10px; }
.input-group { margin-bottom: 1.2rem; }
.input-group label { display: block; font-size: 0.85rem; font-weight: 500; color: #334155; margin-bottom: 6px; }
.input-group input { width: 100%; padding: 0.8rem; border: 1px solid #cbd5e1; border-radius: 8px; outline: none; transition: 0.2s; box-sizing: border-box; }
.input-group input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.options { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 1.5rem; }
.options a { color: #3b82f6; text-decoration: none; font-weight: 500; }
.submit-btn { width: 100%; padding: 0.9rem; background: #0f172a; color: #fff; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.submit-btn:hover { background: #1e293b; }
.footer-text { text-align: center; margin-top: 2rem; font-size: 0.9rem; color: #64748b; }
.footer-text a { color: #0f172a; font-weight: 600; text-decoration: none; }
@media (max-width: 900px) { .image-section { display: none; } }`,
    jsCode: ``
  },

  // 2. Minimalist Centered Login
  {
    _id: "l2",
    title: "Minimalist Centered Login",
    slug: "minimalist-centered-login",
    description: "A stark, highly contrasted black and white minimalist login card.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["login", "minimalist", "centered", "clean"],
    isPremium: false,
    views: 7400,
    downloads: 2800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="minimal-wrapper">
  <div class="login-card">
    <div class="logo-mark">●</div>
    <h2>Sign in</h2>
    <p>To continue to your dashboard</p>
    
    <form>
      <input type="email" placeholder="Email address" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Continue</button>
    </form>
    
    <div class="links">
      <a href="#">Create account</a>
      <a href="#">Reset password</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fafafa; font-family: -apple-system, BlinkMacSystemFont, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.login-card { background: #fff; padding: 3rem; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); width: 100%; max-width: 360px; text-align: center; border: 1px solid #eaeaea; }
.logo-mark { font-size: 3rem; color: #000; line-height: 1; margin-bottom: 1rem; }
h2 { margin: 0 0 0.5rem 0; color: #000; font-size: 1.5rem; font-weight: 700; }
p { color: #666; font-size: 0.9rem; margin-bottom: 2rem; }
form { display: flex; flex-direction: column; gap: 1rem; }
input { padding: 0.8rem 1rem; border: 1px solid #eaeaea; border-radius: 8px; font-size: 1rem; outline: none; transition: 0.2s; background: #fafafa; }
input:focus { border-color: #000; background: #fff; }
button { padding: 0.9rem; background: #000; color: #fff; border: none; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: 0.2s; margin-top: 0.5rem; }
button:hover { background: #333; }
.links { display: flex; justify-content: space-between; margin-top: 2rem; font-size: 0.85rem; }
.links a { color: #666; text-decoration: none; transition: 0.2s; }
.links a:hover { color: #000; text-decoration: underline; }`,
    jsCode: ``
  },

  // 3. Cyberpunk Terminal Login
  {
    _id: "l3",
    title: "Cyberpunk Terminal Login",
    slug: "cyberpunk-terminal-login",
    description: "A dark, hacker-themed terminal login prompt with a glowing green cursor and text.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["login", "terminal", "cyberpunk", "hacker"],
    isPremium: true,
    views: 4500,
    downloads: 1500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="terminal-login">
  <div class="terminal-window">
    <div class="header">
      <span>root@mainframe:~</span>
    </div>
    <div class="body">
      <p class="sys-msg">SYSTEM INITIALIZATION... OK.</p>
      <p class="sys-msg">SECURE CONNECTION ESTABLISHED.</p>
      <br>
      <form id="hacker-form">
        <div class="cmd-line">
          <span class="prompt">guest@mainframe:~$</span>
          <span>login</span>
        </div>
        <div class="cmd-line">
          <span class="prompt">Username:</span>
          <input type="text" value="admin" autocomplete="off" spellcheck="false" />
        </div>
        <div class="cmd-line">
          <span class="prompt">Password:</span>
          <input type="password" placeholder="********" autocomplete="off" />
        </div>
        <div class="cmd-line">
          <span class="prompt">guest@mainframe:~$</span>
          <button type="submit">execute_auth.sh</button>
        </div>
      </form>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #050505; font-family: 'Courier New', Courier, monospace; display: flex; justify-content: center; align-items: center; min-height: 100vh; color: #22c55e; }
.terminal-window { width: 100%; max-width: 600px; background: #0a0a0a; border: 1px solid #166534; border-radius: 8px; overflow: hidden; box-shadow: 0 0 20px rgba(34,197,94,0.1); }
.header { background: #166534; color: #000; padding: 0.5rem 1rem; font-weight: bold; }
.body { padding: 2rem; }
.sys-msg { margin: 0 0 0.5rem 0; opacity: 0.8; }
.cmd-line { display: flex; align-items: center; margin-bottom: 1rem; gap: 10px; }
.prompt { color: #16a34a; font-weight: bold; }
input { background: transparent; border: none; color: #22c55e; font-family: 'Courier New', Courier, monospace; font-size: 1rem; outline: none; width: 200px; }
input:focus { border-bottom: 1px solid #22c55e; }
input::placeholder { color: #166534; }
button { background: transparent; border: 1px solid #22c55e; color: #22c55e; font-family: 'Courier New', Courier, monospace; font-size: 1rem; padding: 0.2rem 0.5rem; cursor: pointer; transition: 0.2s; }
button:hover { background: #22c55e; color: #000; }`,
    jsCode: `document.getElementById('hacker-form').addEventListener('submit', (e) => { e.preventDefault(); alert('ACCESS GRANTED.'); });`
  },

  // 4. Floating Glassmorphism Login
  {
    _id: "l4",
    title: "Floating Glassmorphism Login",
    slug: "floating-glassmorphism-login",
    description: "A translucent glass card floating over a vibrant, colorful gradient background.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["login", "glassmorphism", "gradient", "colorful"],
    isPremium: false,
    views: 6800,
    downloads: 2400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-bg">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
  <div class="glass-form">
    <h2>Login</h2>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button>Sign In</button>
    <a href="#">Forgot Password?</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.glass-bg { height: 100vh; background: #0f172a; display: flex; justify-content: center; align-items: center; position: relative; overflow: hidden; }
.circle { position: absolute; border-radius: 50%; filter: blur(80px); }
.circle-1 { width: 300px; height: 300px; background: #ec4899; top: 10%; left: 20%; }
.circle-2 { width: 400px; height: 400px; background: #3b82f6; bottom: 10%; right: 20%; }
.glass-form { position: relative; z-index: 10; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.2); padding: 3rem; border-radius: 24px; width: 320px; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
h2 { color: #fff; margin: 0 0 2rem 0; font-size: 2rem; font-weight: 600; letter-spacing: 1px; }
input { width: 100%; box-sizing: border-box; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem; border-radius: 12px; margin-bottom: 1rem; color: #fff; font-size: 1rem; outline: none; transition: 0.3s; }
input::placeholder { color: rgba(255,255,255,0.5); }
input:focus { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); }
button { width: 100%; background: #fff; color: #000; border: none; padding: 1rem; border-radius: 12px; font-weight: bold; font-size: 1rem; cursor: pointer; margin-top: 1rem; transition: 0.3s; }
button:hover { background: rgba(255,255,255,0.8); }
a { display: block; margin-top: 1.5rem; color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.9rem; transition: 0.3s; }
a:hover { color: #fff; }`,
    jsCode: ``
  },

  // 5. Web3 Connect Wallet Login
  {
    _id: "l5",
    title: "Web3 Connect Wallet Login",
    slug: "web3-connect-wallet-login",
    description: "A dark-themed modal for connecting crypto wallets, displaying options in a responsive grid.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["login", "web3", "crypto", "wallet"],
    isPremium: true,
    views: 5100,
    downloads: 1650,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="web3-login-bg">
  <div class="wallet-modal">
    <div class="modal-header">
      <h2>Connect Wallet</h2>
      <button class="close-btn">×</button>
    </div>
    <p>Choose your preferred wallet to sign in to the dApp.</p>
    <div class="wallet-grid">
      <button class="wallet-option">
        <div class="icon mm"></div>
        <span>MetaMask</span>
      </button>
      <button class="wallet-option">
        <div class="icon wc"></div>
        <span>WalletConnect</span>
      </button>
      <button class="wallet-option">
        <div class="icon cb"></div>
        <span>Coinbase</span>
      </button>
      <button class="wallet-option">
        <div class="icon pt"></div>
        <span>Phantom</span>
      </button>
    </div>
    <div class="modal-footer">
      New to Web3? <a href="#">Learn about wallets</a>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #000; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.web3-login-bg { background: radial-gradient(circle at center, #1e1b4b, #000); width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; }
.wallet-modal { background: #18181b; border: 1px solid #27272a; border-radius: 20px; width: 100%; max-width: 400px; padding: 2rem; color: #fff; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
h2 { margin: 0; font-size: 1.5rem; font-weight: 700; }
.close-btn { background: none; border: none; color: #a1a1aa; font-size: 2rem; line-height: 1; cursor: pointer; padding: 0; }
.close-btn:hover { color: #fff; }
p { color: #a1a1aa; font-size: 0.95rem; margin-bottom: 2rem; }
.wallet-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.wallet-option { background: #27272a; border: 1px solid #3f3f46; border-radius: 12px; padding: 1.5rem 1rem; color: #fff; cursor: pointer; transition: 0.2s; display: flex; flex-direction: column; align-items: center; gap: 1rem; }
.wallet-option:hover { background: #3f3f46; transform: translateY(-2px); }
.icon { width: 40px; height: 40px; border-radius: 50%; }
.mm { background: linear-gradient(135deg, #f5841f, #ffb13b); }
.wc { background: linear-gradient(135deg, #3b99fc, #a8cbfb); }
.cb { background: #0052ff; }
.pt { background: linear-gradient(135deg, #ab9ff2, #534b8c); }
.wallet-option span { font-weight: 600; font-size: 0.9rem; }
.modal-footer { margin-top: 2rem; text-align: center; color: #a1a1aa; font-size: 0.85rem; border-top: 1px solid #27272a; padding-top: 1.5rem; }
.modal-footer a { color: #3b82f6; text-decoration: none; font-weight: 500; }`,
    jsCode: ``
  },

  // 6. Social Login Only
  {
    _id: "l6",
    title: "Social Login Gateway",
    slug: "social-login-gateway",
    description: "A fast, passwordless login screen that exclusively uses SSO/Social providers.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    tags: ["login", "social", "sso", "quick"],
    isPremium: false,
    views: 6200,
    downloads: 1800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="social-login-wrapper">
  <div class="card">
    <div class="icon-wrap">🚀</div>
    <h2>Sign in to App</h2>
    <p>Fast, secure, and passwordless.</p>
    
    <div class="btn-container">
      <button class="sso-btn">
        <span class="logo">G</span> Continue with Google
      </button>
      <button class="sso-btn">
        <span class="logo">A</span> Continue with Apple
      </button>
      <button class="sso-btn">
        <span class="logo">git</span> Continue with Github
      </button>
    </div>
    
    <div class="terms">
      By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f4f4f5; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.card { background: #fff; padding: 3rem 2rem; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); width: 100%; max-width: 340px; text-align: center; }
.icon-wrap { font-size: 3rem; margin-bottom: 1rem; }
h2 { margin: 0 0 0.5rem 0; color: #18181b; }
p { color: #71717a; margin-bottom: 2.5rem; font-size: 0.95rem; }
.btn-container { display: flex; flex-direction: column; gap: 1rem; }
.sso-btn { background: #fff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 0.8rem; font-size: 1rem; font-weight: 500; color: #3f3f46; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 12px; transition: 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.sso-btn:hover { background: #f4f4f5; }
.logo { font-weight: 800; font-family: monospace; }
.terms { margin-top: 2rem; font-size: 0.75rem; color: #a1a1aa; line-height: 1.5; }
.terms a { color: #71717a; text-decoration: underline; }`,
    jsCode: ``
  },

  // 7. E-commerce Checkout Login
  {
    _id: "l7",
    title: "E-Commerce Checkout Login",
    slug: "ecommerce-checkout-login",
    description: "A functional login screen designed for a checkout flow, offering a 'Guest Checkout' option.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tags: ["login", "ecommerce", "checkout", "guest"],
    isPremium: true,
    views: 4300,
    downloads: 1400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="checkout-login">
  <div class="steps">
    <span class="active">1. Login</span> &gt; <span>2. Shipping</span> &gt; <span>3. Payment</span>
  </div>
  <div class="split-box">
    <div class="box-left">
      <h2>Returning Customer</h2>
      <form>
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button class="btn-dark">Sign In & Continue</button>
      </form>
      <a href="#" class="forgot">Forgot Password?</a>
    </div>
    <div class="divider"></div>
    <div class="box-right">
      <h2>New to VENDRE?</h2>
      <p>Proceed to checkout and you will have an opportunity to create an account at the end.</p>
      <button class="btn-light">Continue as Guest</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; color: #111; }
.checkout-login { max-width: 800px; width: 100%; padding: 2rem; }
.steps { font-size: 0.85rem; color: #888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 3rem; text-align: center; }
.steps .active { color: #111; font-weight: bold; border-bottom: 2px solid #111; padding-bottom: 4px; }
.split-box { display: flex; gap: 3rem; align-items: stretch; }
.box-left, .box-right { flex: 1; display: flex; flex-direction: column; }
h2 { font-size: 1.5rem; margin-top: 0; margin-bottom: 1.5rem; }
form { display: flex; flex-direction: column; gap: 1rem; }
input { padding: 1rem; border: 1px solid #ddd; outline: none; font-size: 1rem; }
input:focus { border-color: #111; }
button { padding: 1rem; font-size: 1rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; border: none; }
.btn-dark { background: #111; color: #fff; }
.btn-dark:hover { background: #333; }
.forgot { text-align: center; margin-top: 1rem; color: #666; font-size: 0.85rem; text-decoration: underline; }
.divider { width: 1px; background: #eee; }
.box-right p { color: #666; line-height: 1.6; margin-bottom: 2rem; flex: 1; }
.btn-light { background: #fff; color: #111; border: 1px solid #111; }
.btn-light:hover { background: #f9f9f9; }
@media (max-width: 600px) { .split-box { flex-direction: column; } .divider { width: 100%; height: 1px; margin: 2rem 0; } }`,
    jsCode: ``
  },

  // 8. Dark Mode Neumorphism Login
  {
    _id: "l8",
    title: "Dark Neumorphism Login",
    slug: "dark-neumorphism-login",
    description: "A soft, 3D-extruded dark mode login interface utilizing neumorphic design principles.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
    tags: ["login", "neumorphism", "dark", "soft"],
    isPremium: false,
    views: 7800,
    downloads: 2600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-bg">
  <div class="neu-card">
    <div class="neu-icon">🔒</div>
    <h2>Authenticate</h2>
    <form>
      <div class="neu-input">
        <input type="text" placeholder="Username" />
      </div>
      <div class="neu-input">
        <input type="password" placeholder="Password" />
      </div>
      <button class="neu-btn">LOGIN</button>
    </form>
  </div>
</div>`,
    cssCode: `body { margin: 0; }
.neu-bg { background: #2a2c35; height: 100vh; display: flex; justify-content: center; align-items: center; font-family: sans-serif; }
.neu-card { width: 300px; padding: 2.5rem; border-radius: 20px; background: #2a2c35; box-shadow: 8px 8px 16px #202229, -8px -8px 16px #343641; text-align: center; }
.neu-icon { font-size: 2rem; width: 60px; height: 60px; margin: 0 auto 1.5rem auto; display: flex; justify-content: center; align-items: center; border-radius: 50%; background: #2a2c35; box-shadow: 4px 4px 8px #202229, -4px -4px 8px #343641; }
h2 { color: #a3a6b6; margin-bottom: 2rem; font-weight: 600; letter-spacing: 1px; }
.neu-input { border-radius: 10px; background: #2a2c35; box-shadow: inset 4px 4px 8px #202229, inset -4px -4px 8px #343641; margin-bottom: 1.5rem; padding: 2px; }
input { width: 100%; padding: 12px 15px; border: none; outline: none; background: transparent; color: #fff; font-size: 1rem; box-sizing: border-box; }
input::placeholder { color: #6b6e7f; }
.neu-btn { width: 100%; padding: 15px; border-radius: 10px; border: none; background: #2a2c35; color: #a3a6b6; font-size: 1rem; font-weight: bold; letter-spacing: 2px; cursor: pointer; box-shadow: 6px 6px 12px #202229, -6px -6px 12px #343641; transition: 0.2s; }
.neu-btn:active { box-shadow: inset 4px 4px 8px #202229, inset -4px -4px 8px #343641; color: #00bcd4; }`,
    jsCode: ``
  },

  // 9. Admin Dashboard Login
  {
    _id: "l9",
    title: "Corporate Admin Login",
    slug: "corporate-admin-login",
    description: "A professional, highly-structured login page designed for enterprise back-office dashboards.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    tags: ["login", "admin", "dashboard", "corporate"],
    isPremium: true,
    views: 3800,
    downloads: 1100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="admin-login">
  <div class="login-panel">
    <div class="brand-header">
      <div class="logo-sq"></div>
      <h1>AdminPortal</h1>
    </div>
    <div class="alert info">Internal Access Only</div>
    <form>
      <div class="field">
        <label>Corporate Email</label>
        <input type="email" value="admin@corp.com" />
      </div>
      <div class="field">
        <label>Admin Password</label>
        <input type="password" value="********" />
      </div>
      <div class="field row">
        <label><input type="checkbox" checked /> Remember device</label>
        <a href="#">SSO Login</a>
      </div>
      <button type="submit">Sign In to Dashboard</button>
    </form>
    <div class="footer">Secure connection verified. IP: 192.168.1.1</div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e2e8f0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.login-panel { background: #fff; width: 100%; max-width: 400px; padding: 2.5rem; border-radius: 6px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border-top: 4px solid #2563eb; }
.brand-header { display: flex; align-items: center; gap: 10px; margin-bottom: 2rem; }
.logo-sq { width: 30px; height: 30px; background: #2563eb; border-radius: 4px; }
h1 { margin: 0; font-size: 1.4rem; color: #1e293b; }
.alert { padding: 0.75rem; border-radius: 4px; font-size: 0.85rem; font-weight: 500; margin-bottom: 1.5rem; text-align: center; }
.alert.info { background: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe; }
.field { margin-bottom: 1.25rem; }
.field label { display: block; font-size: 0.85rem; font-weight: 600; color: #475569; margin-bottom: 6px; }
.field input[type="email"], .field input[type="password"] { width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 4px; outline: none; font-size: 0.95rem; box-sizing: border-box; }
.field input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px rgba(37,99,235,0.2); }
.field.row { display: flex; justify-content: space-between; align-items: center; }
.field.row label { display: flex; align-items: center; gap: 5px; margin: 0; font-weight: 400; }
.field.row a { color: #2563eb; text-decoration: none; font-size: 0.85rem; }
button { width: 100%; background: #2563eb; color: #fff; border: none; padding: 0.85rem; border-radius: 4px; font-weight: bold; cursor: pointer; transition: 0.2s; }
button:hover { background: #1d4ed8; }
.footer { margin-top: 2rem; text-align: center; font-size: 0.75rem; color: #94a3b8; }`,
    jsCode: ``
  },

  // 10. Animated SVG Background Login
  {
    _id: "l10",
    title: "Animated SVG Background Login",
    slug: "animated-svg-background-login",
    description: "A fun, creative login layout featuring moving abstract shapes behind a clean white container.",
    category: "Login Page",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["login", "animated", "svg", "creative"],
    isPremium: false,
    views: 6500,
    downloads: 1950,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="svg-login">
  <svg class="bg-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6366f1" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  <div class="login-card">
    <h2>Welcome</h2>
    <div class="input-line">
      <input type="text" placeholder="Username" />
    </div>
    <div class="input-line">
      <input type="password" placeholder="Password" />
    </div>
    <button>Log In</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e0e7ff; font-family: sans-serif; overflow: hidden; }
.svg-login { height: 100vh; display: flex; justify-content: center; align-items: center; position: relative; }
.bg-waves { position: absolute; bottom: 0; left: 0; width: 100%; height: auto; animation: wave 10s linear infinite alternate; z-index: 1; }
@keyframes wave { 0% { transform: translateX(0) scaleY(1); } 100% { transform: translateX(-50px) scaleY(1.2); } }
.login-card { background: #fff; padding: 3rem; border-radius: 20px; box-shadow: 0 15px 35px rgba(99,102,241,0.2); width: 300px; text-align: center; position: relative; z-index: 10; }
h2 { color: #4338ca; margin-top: 0; margin-bottom: 2rem; font-size: 2rem; }
.input-line { margin-bottom: 1.5rem; position: relative; }
input { width: 100%; border: none; border-bottom: 2px solid #c7d2fe; padding: 10px 5px; font-size: 1rem; outline: none; transition: 0.3s; box-sizing: border-box; }
input:focus { border-color: #4338ca; }
button { width: 100%; padding: 12px; border-radius: 30px; border: none; background: #4338ca; color: #fff; font-size: 1rem; font-weight: bold; cursor: pointer; transition: 0.3s; margin-top: 1rem; box-shadow: 0 5px 15px rgba(67,56,202,0.3); }
button:hover { background: #3730a3; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(67,56,202,0.4); }`,
    jsCode: ``
  }
];
