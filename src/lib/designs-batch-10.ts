import { Design } from "./designs-data";

export const BATCH_10_DESIGNS: Design[] = [
  // 1. Standard Confirmation Modal
  {
    _id: "m1",
    title: "Standard Confirmation Modal",
    slug: "standard-confirmation-modal",
    description: "A clean, functional modal for destructive actions or important confirmations.",
    category: "Modal",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["modal", "confirmation", "alert", "standard"],
    isPremium: false,
    views: 9500,
    downloads: 3800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="modal-overlay">
  <div class="modal-card">
    <div class="modal-icon warning">
      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
    </div>
    <div class="modal-content">
      <h3>Delete Account</h3>
      <p>Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
    </div>
    <div class="modal-actions">
      <button class="btn-cancel">Cancel</button>
      <button class="btn-danger">Delete</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #e2e8f0; }
.modal-overlay { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.6); display: flex; justify-content: center; align-items: center; padding: 1rem; }
.modal-card { background: #fff; border-radius: 12px; padding: 1.5rem; max-width: 400px; width: 100%; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); display: flex; flex-direction: column; }
.modal-icon { width: 48px; height: 48px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-bottom: 1rem; }
.warning { background: #fee2e2; color: #ef4444; }
h3 { margin: 0 0 0.5rem 0; color: #0f172a; font-size: 1.2rem; }
p { margin: 0 0 1.5rem 0; color: #64748b; font-size: 0.95rem; line-height: 1.5; }
.modal-actions { display: flex; justify-content: flex-end; gap: 0.8rem; }
button { padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: 500; cursor: pointer; transition: 0.2s; border: none; font-size: 0.95rem; }
.btn-cancel { background: #fff; color: #475569; border: 1px solid #cbd5e1; }
.btn-cancel:hover { background: #f8fafc; color: #0f172a; }
.btn-danger { background: #ef4444; color: #fff; }
.btn-danger:hover { background: #dc2626; }`,
    jsCode: ``
  },

  // 2. Subscription/Pricing Modal
  {
    _id: "m2",
    title: "Upgrade Subscription Modal",
    slug: "upgrade-subscription-modal",
    description: "A modal designed to prompt users to upgrade their plan to access a restricted feature.",
    category: "Modal",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    tags: ["modal", "pricing", "upgrade", "subscription"],
    isPremium: true,
    views: 8200,
    downloads: 3000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="modal-overlay">
  <div class="upgrade-modal">
    <button class="close-btn">×</button>
    <div class="u-header">
      <div class="pro-badge">PRO FEATURE</div>
      <h2>Upgrade to Pro</h2>
      <p>You've reached the limit of your free plan. Upgrade to unlock advanced analytics and unlimited projects.</p>
    </div>
    <ul class="u-features">
      <li>✓ Unlimited Projects</li>
      <li>✓ Advanced Analytics Dashboard</li>
      <li>✓ Priority 24/7 Support</li>
      <li>✓ Custom Domain</li>
    </ul>
    <button class="u-btn">Upgrade Now for $15/mo</button>
    <div class="u-footer"><a href="#">View all pricing plans</a></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e5e7eb; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); display: flex; justify-content: center; align-items: center; padding: 1rem; }
.upgrade-modal { background: #fff; border-radius: 16px; padding: 2.5rem; max-width: 450px; width: 100%; position: relative; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); text-align: center; }
.close-btn { position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; color: #9ca3af; cursor: pointer; }
.close-btn:hover { color: #111827; }
.pro-badge { display: inline-block; background: #fef08a; color: #854d0e; font-size: 0.75rem; font-weight: bold; padding: 4px 12px; border-radius: 20px; letter-spacing: 1px; margin-bottom: 1rem; }
h2 { margin: 0 0 1rem 0; color: #111827; font-size: 1.8rem; }
p { color: #6b7280; line-height: 1.5; margin-bottom: 2rem; }
.u-features { list-style: none; padding: 0; margin: 0 0 2rem 0; text-align: left; background: #f9fafb; padding: 1.5rem; border-radius: 12px; }
.u-features li { margin-bottom: 0.8rem; color: #374151; font-weight: 500; }
.u-features li:last-child { margin-bottom: 0; }
.u-btn { width: 100%; padding: 1rem; background: #3b82f6; color: #fff; border: none; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 14px rgba(59,130,246,0.4); }
.u-btn:hover { background: #2563eb; transform: translateY(-2px); }
.u-footer { margin-top: 1.5rem; }
.u-footer a { color: #6b7280; font-size: 0.9rem; text-decoration: none; }
.u-footer a:hover { color: #3b82f6; text-decoration: underline; }`,
    jsCode: ``
  },

  // 3. Cookie Consent Bottom Modal
  {
    _id: "m3",
    title: "Cookie Consent Banner",
    slug: "cookie-consent-banner",
    description: "A non-intrusive modal/banner that slides up from the bottom for GDPR cookie consent.",
    category: "Modal",
    thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
    tags: ["modal", "cookie", "consent", "banner"],
    isPremium: false,
    views: 7100,
    downloads: 2400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="cookie-modal">
  <div class="c-content">
    <div class="c-icon">🍪</div>
    <div class="c-text">
      <h4>We value your privacy</h4>
      <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
    </div>
  </div>
  <div class="c-actions">
    <button class="c-btn-outline">Customize</button>
    <button class="c-btn-outline">Reject All</button>
    <button class="c-btn-solid">Accept All</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #f4f4f5; height: 100vh; position: relative; overflow: hidden; }
.cookie-modal { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: #fff; max-width: 900px; width: calc(100% - 40px); border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; gap: 2rem; border: 1px solid #e4e4e7; animation: slideUp 0.5s ease-out; }
@keyframes slideUp { from { transform: translate(-50%, 100%); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
.c-content { display: flex; align-items: flex-start; gap: 1rem; flex: 1; }
.c-icon { font-size: 2rem; }
h4 { margin: 0 0 0.5rem 0; color: #18181b; }
p { margin: 0; color: #52525b; font-size: 0.9rem; line-height: 1.5; }
.c-actions { display: flex; gap: 0.8rem; }
button { padding: 0.8rem 1.2rem; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; font-size: 0.9rem; white-space: nowrap; }
.c-btn-outline { background: #fff; border: 1px solid #d4d4d8; color: #3f3f46; }
.c-btn-outline:hover { background: #f4f4f5; color: #18181b; }
.c-btn-solid { background: #18181b; border: 1px solid #18181b; color: #fff; }
.c-btn-solid:hover { background: #27272a; }
@media (max-width: 800px) { .cookie-modal { flex-direction: column; align-items: flex-start; } .c-actions { width: 100%; display: grid; grid-template-columns: 1fr 1fr 1fr; } }
@media (max-width: 500px) { .c-actions { grid-template-columns: 1fr; } }`,
    jsCode: ``
  },

  // 4. Newsletter Popup Modal
  {
    _id: "m4",
    title: "Newsletter Split Popup",
    slug: "newsletter-split-popup",
    description: "A marketing popup with an image on one side and a subscription form on the other.",
    category: "Modal",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["modal", "newsletter", "popup", "marketing"],
    isPremium: true,
    views: 6500,
    downloads: 2100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="modal-overlay">
  <div class="nl-modal">
    <button class="close-btn">×</button>
    <div class="nl-img" style="background-image: url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80')"></div>
    <div class="nl-content">
      <h2>Get 20% Off Your First Order</h2>
      <p>Sign up for our newsletter to receive exclusive offers, fresh arrivals, and insider-only discounts.</p>
      <form class="nl-form">
        <input type="email" placeholder="Enter your email address" required />
        <button type="submit">Reveal My Code</button>
      </form>
      <div class="nl-footer">No thanks, I prefer paying full price.</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #e5e5e5; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center; padding: 1rem; }
.nl-modal { background: #fff; border-radius: 12px; overflow: hidden; max-width: 800px; width: 100%; display: flex; position: relative; box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
.close-btn { position: absolute; top: 1rem; right: 1rem; background: #fff; border: none; font-size: 1.5rem; width: 32px; height: 32px; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer; z-index: 10; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.nl-img { flex: 1; background-size: cover; background-position: center; min-height: 400px; }
.nl-content { flex: 1.2; padding: 3rem; display: flex; flex-direction: column; justify-content: center; }
h2 { margin: 0 0 1rem 0; font-size: 2rem; color: #111; line-height: 1.2; }
p { color: #666; line-height: 1.6; margin-bottom: 2rem; }
.nl-form { display: flex; flex-direction: column; gap: 1rem; }
input { padding: 1rem; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; outline: none; }
input:focus { border-color: #111; }
.nl-form button { padding: 1rem; background: #111; color: #fff; border: none; border-radius: 6px; font-weight: bold; font-size: 1rem; cursor: pointer; }
.nl-form button:hover { background: #333; }
.nl-footer { margin-top: 1.5rem; text-align: center; color: #888; font-size: 0.85rem; text-decoration: underline; cursor: pointer; }
@media (max-width: 700px) { .nl-modal { flex-direction: column; } .nl-img { min-height: 200px; } .nl-content { padding: 2rem; } }`,
    jsCode: ``
  },

  // 5. Feedback/Rating Modal
  {
    _id: "m5",
    title: "Star Rating Feedback",
    slug: "star-rating-feedback",
    description: "A compact modal to gather user feedback and a star rating after an action.",
    category: "Modal",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tags: ["modal", "feedback", "rating", "stars"],
    isPremium: false,
    views: 5900,
    downloads: 1800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="modal-overlay">
  <div class="feedback-modal">
    <div class="f-header">
      <h3>How did we do?</h3>
      <button class="close-btn">×</button>
    </div>
    <p>Please let us know how your support experience was.</p>
    
    <div class="stars-container">
      <span class="star active">★</span>
      <span class="star active">★</span>
      <span class="star active">★</span>
      <span class="star active">★</span>
      <span class="star">★</span>
    </div>
    
    <textarea placeholder="Tell us more about your experience (optional)..."></textarea>
    <button class="submit-btn">Submit Feedback</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f3f4f6; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); display: flex; justify-content: center; align-items: center; padding: 1rem; }
.feedback-modal { background: #fff; border-radius: 12px; padding: 2rem; max-width: 400px; width: 100%; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
.f-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
h3 { margin: 0; color: #111827; font-size: 1.25rem; }
.close-btn { background: none; border: none; font-size: 1.5rem; color: #9ca3af; cursor: pointer; padding: 0; line-height: 1; }
p { color: #6b7280; font-size: 0.95rem; margin-bottom: 1.5rem; }
.stars-container { display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem; }
.star { font-size: 2.5rem; color: #e5e7eb; cursor: pointer; transition: 0.2s; }
.star.active { color: #fbbf24; }
textarea { width: 100%; box-sizing: border-box; height: 100px; padding: 1rem; border: 1px solid #d1d5db; border-radius: 8px; resize: none; font-family: inherit; margin-bottom: 1.5rem; outline: none; }
textarea:focus { border-color: #3b82f6; }
.submit-btn { width: 100%; background: #111827; color: #fff; border: none; padding: 1rem; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.submit-btn:hover { background: #374151; }`,
    jsCode: ``
  },

  // 6. Success/Confetti Modal
  {
    _id: "m6",
    title: "Success Payment Modal",
    slug: "success-payment-modal",
    description: "A celebratory modal shown after a successful payment or action completion.",
    category: "Modal",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tags: ["modal", "success", "payment", "celebration"],
    isPremium: false,
    views: 6300,
    downloads: 2000,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="modal-overlay">
  <div class="success-modal">
    <div class="icon-circle">
      <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <h2>Payment Successful!</h2>
    <p>Thank you for your purchase. Your receipt has been sent to your email address.</p>
    
    <div class="receipt-details">
      <div class="r-row"><span>Amount Paid:</span> <strong>$149.00</strong></div>
      <div class="r-row"><span>Transaction ID:</span> <strong>TXN-847291A</strong></div>
    </div>
    
    <button class="s-btn">Go to Dashboard</button>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #e2e8f0; }
.modal-overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.8); display: flex; justify-content: center; align-items: center; padding: 1rem; }
.success-modal { background: #fff; border-radius: 16px; padding: 3rem 2rem; max-width: 400px; width: 100%; text-align: center; position: relative; overflow: hidden; }
.success-modal::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 8px; background: #10b981; }
.icon-circle { width: 80px; height: 80px; background: #d1fae5; color: #10b981; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin: 0 auto 1.5rem; }
h2 { margin: 0 0 1rem 0; color: #0f172a; font-size: 1.8rem; }
p { color: #64748b; line-height: 1.5; margin-bottom: 2rem; }
.receipt-details { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: left; margin-bottom: 2rem; }
.r-row { display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.95rem; }
.r-row:last-child { margin-bottom: 0; }
.r-row span { color: #64748b; }
.r-row strong { color: #0f172a; }
.s-btn { width: 100%; background: #10b981; color: #fff; border: none; padding: 1rem; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.2s; }
.s-btn:hover { background: #059669; }`,
    jsCode: ``
  },

  // 7. Multi-step Onboarding Modal
  {
    _id: "m7",
    title: "Multi-Step Onboarding",
    slug: "multi-step-onboarding",
    description: "A modal with built-in progress tracking for onboarding or complex setups.",
    category: "Modal",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    tags: ["modal", "onboarding", "multi-step", "progress"],
    isPremium: true,
    views: 5100,
    downloads: 1600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="modal-overlay">
  <div class="onboard-modal">
    <div class="progress-bar">
      <div class="fill" style="width: 33%;"></div>
    </div>
    
    <div class="o-content">
      <div class="step-indicator">Step 1 of 3</div>
      <h2>Set up your profile</h2>
      <p>Add a photo and some details about yourself so your team can recognize you.</p>
      
      <div class="upload-area">
        <div class="u-icon">📷</div>
        <span>Upload Avatar</span>
      </div>
      <input type="text" placeholder="Full Name" class="o-input" />
      <input type="text" placeholder="Job Title" class="o-input" />
    </div>
    
    <div class="o-actions">
      <button class="o-btn-back">Skip</button>
      <button class="o-btn-next">Continue →</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f3f4f6; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; padding: 1rem; }
.onboard-modal { background: #fff; border-radius: 12px; width: 100%; max-width: 500px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.progress-bar { height: 6px; background: #e5e7eb; width: 100%; }
.fill { height: 100%; background: #4f46e5; transition: width 0.3s ease; }
.o-content { padding: 2.5rem; }
.step-indicator { color: #4f46e5; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem; }
h2 { margin: 0 0 1rem 0; color: #111827; }
p { color: #6b7280; margin-bottom: 2rem; line-height: 1.5; }
.upload-area { border: 2px dashed #d1d5db; border-radius: 50%; width: 100px; height: 100px; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0 auto 2rem; cursor: pointer; color: #6b7280; font-size: 0.8rem; }
.u-icon { font-size: 2rem; margin-bottom: 5px; }
.o-input { width: 100%; padding: 1rem; border: 1px solid #d1d5db; border-radius: 8px; margin-bottom: 1rem; box-sizing: border-box; outline: none; font-size: 1rem; }
.o-input:focus { border-color: #4f46e5; }
.o-actions { display: flex; justify-content: space-between; padding: 1.5rem 2.5rem; background: #f9fafb; border-top: 1px solid #e5e7eb; }
button { padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: bold; cursor: pointer; border: none; font-size: 1rem; }
.o-btn-back { background: transparent; color: #6b7280; }
.o-btn-back:hover { background: #e5e7eb; color: #111827; }
.o-btn-next { background: #4f46e5; color: #fff; }
.o-btn-next:hover { background: #4338ca; }`,
    jsCode: ``
  },

  // 8. Glassmorphism Modal
  {
    _id: "m8",
    title: "Floating Glass Modal",
    slug: "floating-glass-modal",
    description: "A translucent glass modal overlaying a complex background.",
    category: "Modal",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["modal", "glassmorphism", "blur", "translucent"],
    isPremium: true,
    views: 7500,
    downloads: 2400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-bg">
  <div class="modal-overlay">
    <div class="glass-modal">
      <h2>Connect Wallet</h2>
      <p>Select your preferred wallet provider to authenticate.</p>
      
      <div class="wallet-opts">
        <button class="w-btn"><img src="https://cryptologos.cc/logos/metamask-mtm-logo.png?v=029" width="24" /> MetaMask</button>
        <button class="w-btn"><img src="https://cryptologos.cc/logos/walletconnect-wtc-logo.png?v=029" width="24" /> WalletConnect</button>
        <button class="w-btn"><img src="https://cryptologos.cc/logos/coinbase-coin-logo.png?v=029" width="24" /> Coinbase Wallet</button>
      </div>
      
      <div class="g-footer">New to Web3? <a href="#">Learn about wallets</a></div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; overflow: hidden; }
.glass-bg { height: 100vh; background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899); position: relative; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.2); display: flex; justify-content: center; align-items: center; padding: 1rem; }
.glass-modal { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 24px; padding: 3rem; max-width: 400px; width: 100%; text-align: center; color: #fff; box-shadow: 0 25px 50px rgba(0,0,0,0.2); }
h2 { margin: 0 0 1rem 0; font-size: 1.8rem; font-weight: 800; }
p { color: rgba(255,255,255,0.8); margin-bottom: 2rem; }
.wallet-opts { display: flex; flex-direction: column; gap: 1rem; }
.w-btn { background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); padding: 1rem; border-radius: 12px; color: #fff; font-weight: bold; font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: 0.2s; }
.w-btn:hover { background: rgba(255, 255, 255, 0.25); transform: translateY(-2px); }
.g-footer { margin-top: 2rem; font-size: 0.9rem; color: rgba(255,255,255,0.6); }
.g-footer a { color: #fff; font-weight: bold; text-decoration: none; }`,
    jsCode: ``
  },

  // 9. Dark Cyberpunk Terminal Modal
  {
    _id: "m9",
    title: "Cyberpunk Terminal Modal",
    slug: "cyberpunk-terminal-modal",
    description: "A dark, glowing terminal style modal for warning or destructive actions.",
    category: "Modal",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["modal", "cyberpunk", "terminal", "dark"],
    isPremium: true,
    views: 4200,
    downloads: 1100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="modal-overlay">
  <div class="cyber-modal">
    <div class="c-header">
      <span>root@sys:~#</span>
      <button class="c-close">[X]</button>
    </div>
    <div class="c-body">
      <h3 class="glitch">WARNING: OVERRIDE INITIATED</h3>
      <p>> You are about to format the primary drive.</p>
      <p>> All local data will be purged.</p>
      <p>> Proceed with operation?</p>
      
      <div class="c-actions">
        <button class="c-btn">ABORT</button>
        <button class="c-btn danger">EXECUTE</button>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Courier New', Courier, monospace; background: #111; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; padding: 1rem; }
.cyber-modal { background: #050505; border: 1px solid #0f0; max-width: 500px; width: 100%; box-shadow: 0 0 20px rgba(0,255,0,0.2); }
.c-header { background: #0f0; color: #000; padding: 0.5rem 1rem; display: flex; justify-content: space-between; font-weight: bold; }
.c-close { background: none; border: none; color: #000; font-family: inherit; font-weight: bold; cursor: pointer; font-size: 1rem; }
.c-body { padding: 2rem; color: #0f0; }
h3 { margin: 0 0 1.5rem 0; color: #f00; text-shadow: 0 0 10px #f00; font-size: 1.2rem; letter-spacing: 2px; }
p { margin: 0 0 0.5rem 0; line-height: 1.5; }
.c-actions { display: flex; gap: 1rem; margin-top: 2rem; }
.c-btn { flex: 1; background: transparent; border: 1px solid #0f0; color: #0f0; font-family: inherit; font-size: 1rem; font-weight: bold; padding: 0.8rem; cursor: pointer; transition: 0.2s; }
.c-btn:hover { background: #0f0; color: #000; }
.c-btn.danger { border-color: #f00; color: #f00; }
.c-btn.danger:hover { background: #f00; color: #000; box-shadow: 0 0 15px #f00; }`,
    jsCode: ``
  },

  // 10. Brutalist Warning Modal
  {
    _id: "m10",
    title: "Brutalist Warning Box",
    slug: "brutalist-warning-box",
    description: "Loud, high-contrast brutalist design. Impossible to ignore.",
    category: "Modal",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["modal", "brutalist", "warning", "loud"],
    isPremium: true,
    views: 4800,
    downloads: 1350,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="modal-overlay">
  <div class="brutal-modal">
    <div class="b-tag">ATTENTION</div>
    <h2>UNSAVED CHANGES</h2>
    <p>If you leave now, everything you just did is gone forever. Dead. Erased.</p>
    <div class="b-actions">
      <button class="b-btn white">LEAVE ANYWAY</button>
      <button class="b-btn black">SAVE & STAY</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e5e5e5; font-family: monospace; }
.modal-overlay { position: fixed; inset: 0; background: rgba(255,255,255,0.5); backdrop-filter: blur(5px); display: flex; justify-content: center; align-items: center; padding: 1rem; }
.brutal-modal { background: #fef08a; border: 4px solid #000; padding: 3rem; max-width: 500px; width: 100%; box-shadow: 16px 16px 0 #000; position: relative; }
.b-tag { position: absolute; top: -16px; left: 20px; background: #ef4444; color: #fff; padding: 4px 12px; border: 4px solid #000; font-weight: 900; font-size: 1.2rem; }
h2 { margin: 0 0 1rem 0; font-size: 3rem; font-weight: 900; text-transform: uppercase; line-height: 1; }
p { font-size: 1.2rem; font-weight: bold; margin-bottom: 2.5rem; line-height: 1.4; }
.b-actions { display: flex; gap: 1rem; }
.b-btn { flex: 1; border: 4px solid #000; padding: 1rem; font-family: inherit; font-size: 1.2rem; font-weight: 900; cursor: pointer; text-transform: uppercase; transition: 0.1s; box-shadow: 4px 4px 0 #000; }
.b-btn:active { transform: translate(4px, 4px); box-shadow: 0 0 0 #000; }
.white { background: #fff; color: #000; }
.black { background: #000; color: #fff; }
@media (max-width: 500px) { .b-actions { flex-direction: column; } }`,
    jsCode: ``
  }
];
