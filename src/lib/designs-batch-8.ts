import { Design } from "./designs-data";

export const BATCH_8_DESIGNS: Design[] = [
  // 1. Standard 3-Column Grid
  {
    _id: "t1",
    title: "Standard 3-Column Testimonials",
    slug: "standard-3-column-testimonials",
    description: "A clean, highly readable grid of 3 testimonial cards featuring star ratings and user avatars.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tags: ["testimonials", "grid", "cards", "clean"],
    isPremium: false,
    views: 8200,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="test-grid-container">
  <div class="test-header">
    <h2>Loved by thousands of creators</h2>
    <p>Don't just take our word for it. See what our community has to say.</p>
  </div>
  <div class="test-grid">
    <div class="test-card">
      <div class="stars">★★★★★</div>
      <p class="quote">"This platform completely changed how I build websites. The component library is unmatched in quality and ease of use."</p>
      <div class="user-info">
        <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
        <div>
          <h4>Sarah Jenkins</h4>
          <span>Frontend Developer</span>
        </div>
      </div>
    </div>
    <div class="test-card">
      <div class="stars">★★★★★</div>
      <p class="quote">"I was able to launch my startup's landing page in just 2 days. The code is clean and perfectly responsive."</p>
      <div class="user-info">
        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
        <div>
          <h4>Michael Chen</h4>
          <span>Founder, TechFlow</span>
        </div>
      </div>
    </div>
    <div class="test-card">
      <div class="stars">★★★★★</div>
      <p class="quote">"An absolute lifesaver for freelance designers. I use these components on almost every client project now."</p>
      <div class="user-info">
        <img src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="User" />
        <div>
          <h4>Elena Rodriguez</h4>
          <span>UI/UX Designer</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; color: #0f172a; padding: 4rem 2rem; }
.test-grid-container { max-width: 1200px; margin: 0 auto; }
.test-header { text-align: center; margin-bottom: 4rem; }
.test-header h2 { font-size: 2.5rem; margin: 0 0 1rem; font-weight: 800; }
.test-header p { color: #64748b; font-size: 1.1rem; }
.test-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.test-card { background: #fff; padding: 2rem; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between; }
.stars { color: #f59e0b; margin-bottom: 1rem; font-size: 1.2rem; letter-spacing: 2px; }
.quote { color: #334155; font-size: 1rem; line-height: 1.6; font-style: italic; margin-bottom: 2rem; }
.user-info { display: flex; align-items: center; gap: 1rem; }
.user-info img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
.user-info h4 { margin: 0; font-size: 1rem; color: #0f172a; }
.user-info span { font-size: 0.85rem; color: #64748b; }`,
    jsCode: ``
  },

  // 2. Masonry Grid Testimonials
  {
    _id: "t2",
    title: "Masonry Wall Testimonials",
    slug: "masonry-wall-testimonials",
    description: "A dynamic, Pinterest-style masonry layout for displaying quotes of varying lengths.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["testimonials", "masonry", "wall", "grid"],
    isPremium: true,
    views: 7400,
    downloads: 2600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="masonry-wrap">
  <h2>Wall of Love</h2>
  <div class="masonry-grid">
    <div class="m-card">
      <p>"Incredible attention to detail. Saved me weeks of work."</p>
      <div class="author">- Alex D.</div>
    </div>
    <div class="m-card bg-dark">
      <p>"The best UI kit I have ever purchased. Every component is perfectly crafted, responsive, and easy to customize. Highly recommended for any serious developer."</p>
      <div class="author">- Sam K.</div>
    </div>
    <div class="m-card">
      <p>"My team's productivity skyrocketed after we adopted this library."</p>
      <div class="author">- Jessica W.</div>
    </div>
    <div class="m-card">
      <p>"Clean code, great docs, beautiful design. 10/10."</p>
      <div class="author">- David M.</div>
    </div>
    <div class="m-card">
      <p>"I love how easily I can integrate these into my Next.js projects without fighting the CSS."</p>
      <div class="author">- Rachel P.</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #fafafa; padding: 4rem 2rem; }
.masonry-wrap { max-width: 1000px; margin: 0 auto; text-align: center; }
h2 { font-size: 2.5rem; margin-bottom: 3rem; color: #111; }
.masonry-grid { column-count: 3; column-gap: 1.5rem; text-align: left; }
.m-card { background: #fff; padding: 1.5rem; border-radius: 12px; border: 1px solid #eaeaea; margin-bottom: 1.5rem; break-inside: avoid; display: inline-block; width: 100%; box-sizing: border-box; }
.bg-dark { background: #111; color: #fff; border: none; }
.bg-dark .author { color: #aaa; }
.m-card p { margin: 0 0 1rem 0; line-height: 1.5; font-size: 1.05rem; }
.author { font-weight: bold; color: #555; font-size: 0.9rem; }
@media (max-width: 800px) { .masonry-grid { column-count: 2; } }
@media (max-width: 500px) { .masonry-grid { column-count: 1; } }`,
    jsCode: ``
  },

  // 3. Large Single Quote Carousel
  {
    _id: "t3",
    title: "Large Single Quote Slider",
    description: "A prominent, centered single-quote display with interactive dot navigation.",
    slug: "large-single-quote-slider",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
    tags: ["testimonials", "slider", "carousel", "large"],
    isPremium: false,
    views: 6800,
    downloads: 2200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="quote-slider">
  <div class="quote-mark">"</div>
  <div class="slides">
    <div class="slide active">
      <h3>This framework allowed us to prototype our MVP in literally two days. The design aesthetic is exactly what we needed.</h3>
      <div class="slide-author">
        <strong>Jane Cooper</strong>
        <span>CEO, Startup Inc</span>
      </div>
    </div>
  </div>
  <div class="dots">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.quote-slider { max-width: 800px; text-align: center; padding: 2rem; position: relative; }
.quote-mark { font-size: 8rem; color: #f3f4f6; position: absolute; top: -40px; left: 50%; transform: translateX(-50%); z-index: -1; line-height: 1; font-family: serif; }
h3 { font-size: 2rem; font-weight: 300; line-height: 1.5; color: #111; margin-bottom: 2rem; }
.slide-author strong { display: block; font-size: 1.1rem; color: #111; margin-bottom: 4px; }
.slide-author span { color: #666; font-size: 0.9rem; }
.dots { margin-top: 3rem; display: flex; justify-content: center; gap: 8px; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: #e5e7eb; cursor: pointer; transition: 0.2s; }
.dot.active, .dot:hover { background: #111; }
@media (max-width: 600px) { h3 { font-size: 1.5rem; } }`,
    jsCode: ``
  },

  // 4. Dark Mode Neumorphic Cards
  {
    _id: "t4",
    title: "Dark Neumorphic Reviews",
    slug: "dark-neumorphic-reviews",
    description: "Soft, dark-themed neumorphic styling for customer reviews.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["testimonials", "dark", "neumorphism", "reviews"],
    isPremium: true,
    views: 4500,
    downloads: 1400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="neu-test-wrap">
  <div class="neu-card">
    <div class="neu-avatar"><img src="https://i.pravatar.cc/100?img=1" alt="avatar"/></div>
    <p>"Sleek, modern, and perfectly engineered. The dark mode components are flawless."</p>
    <h5>- Cyber Punk</h5>
  </div>
  <div class="neu-card">
    <div class="neu-avatar"><img src="https://i.pravatar.cc/100?img=2" alt="avatar"/></div>
    <p>"I've completely replaced my old UI framework. This is the future of web design."</p>
    <h5>- Neo Matrix</h5>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #2a2c35; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: sans-serif; padding: 2rem; }
.neu-test-wrap { display: flex; gap: 3rem; flex-wrap: wrap; justify-content: center; max-width: 900px; }
.neu-card { background: #2a2c35; padding: 3rem 2rem; border-radius: 20px; box-shadow: 8px 8px 16px #202229, -8px -8px 16px #343641; width: 300px; text-align: center; color: #a3a6b6; display: flex; flex-direction: column; align-items: center; }
.neu-avatar { width: 80px; height: 80px; border-radius: 50%; padding: 5px; background: #2a2c35; box-shadow: inset 4px 4px 8px #202229, inset -4px -4px 8px #343641; margin-bottom: 1.5rem; overflow: hidden; }
.neu-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 2px solid #2a2c35; box-sizing: border-box; }
p { font-style: italic; line-height: 1.6; margin-bottom: 1.5rem; }
h5 { margin: 0; color: #00bcd4; font-size: 1rem; }`,
    jsCode: ``
  },

  // 5. Glassmorphism Testimonial Cards
  {
    _id: "t5",
    title: "Glassmorphism Testimonials",
    slug: "glassmorphism-testimonials",
    description: "Translucent review cards overlaying a vibrant, colorful abstract background.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["testimonials", "glassmorphism", "gradient", "blur"],
    isPremium: true,
    views: 7100,
    downloads: 2500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-tests-bg">
  <div class="color-orb orb1"></div>
  <div class="color-orb orb2"></div>
  
  <div class="glass-grid">
    <div class="g-test-card">
      <div class="stars">★★★★★</div>
      <p>"Absolutely breathtaking visuals. It made our dashboard look like a million bucks."</p>
      <span>- UI Director, CreativeCo</span>
    </div>
    <div class="g-test-card">
      <div class="stars">★★★★★</div>
      <p>"The code quality is just as good as the design. Super easy to implement."</p>
      <span>- Lead Engineer, StartupX</span>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; }
.glass-tests-bg { min-height: 100vh; background: #0f172a; position: relative; display: flex; justify-content: center; align-items: center; padding: 2rem; overflow: hidden; }
.color-orb { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.7; }
.orb1 { width: 400px; height: 400px; background: #ec4899; top: 10%; left: 10%; }
.orb2 { width: 400px; height: 400px; background: #8b5cf6; bottom: 10%; right: 10%; }
.glass-grid { position: relative; z-index: 10; display: flex; gap: 2rem; max-width: 900px; width: 100%; flex-wrap: wrap; justify-content: center; }
.g-test-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 24px; padding: 2.5rem; color: #fff; width: 350px; box-shadow: 0 25px 50px rgba(0,0,0,0.2); }
.stars { color: #fcd34d; margin-bottom: 1rem; font-size: 1.2rem; }
p { font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; }
span { display: block; color: rgba(255,255,255,0.7); font-size: 0.9rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }`,
    jsCode: ``
  },

  // 6. Video Testimonial Thumbnails
  {
    _id: "t6",
    title: "Video Testimonial Thumbnails",
    slug: "video-testimonial-thumbnails",
    description: "Clickable video thumbnails simulating video reviews with a play button overlay.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tags: ["testimonials", "video", "media", "thumbnails"],
    isPremium: false,
    views: 5300,
    downloads: 1600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="video-tests">
  <h2>Hear it directly from them</h2>
  <div class="vid-grid">
    <div class="vid-card">
      <div class="vid-thumb" style="background-image: url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500')">
        <div class="play-btn">▶</div>
      </div>
      <div class="vid-info">
        <h4>Amanda R.</h4>
        <p>How YourUI saved her team 100+ hours.</p>
      </div>
    </div>
    <div class="vid-card">
      <div class="vid-thumb" style="background-image: url('https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500')">
        <div class="play-btn">▶</div>
      </div>
      <div class="vid-info">
        <h4>James T.</h4>
        <p>Building a SaaS platform from scratch.</p>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: sans-serif; padding: 4rem 2rem; text-align: center; }
h2 { font-size: 2rem; margin-bottom: 3rem; color: #111; }
.vid-grid { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; max-width: 1000px; margin: 0 auto; }
.vid-card { width: 350px; text-align: left; cursor: pointer; }
.vid-card:hover .play-btn { transform: scale(1.1); background: #2563eb; color: #fff; }
.vid-thumb { height: 200px; background-size: cover; background-position: center; border-radius: 12px; position: relative; display: flex; justify-content: center; align-items: center; margin-bottom: 1rem; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.vid-thumb::after { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.2); border-radius: 12px; transition: 0.2s; }
.vid-card:hover .vid-thumb::after { background: rgba(0,0,0,0.1); }
.play-btn { position: relative; z-index: 10; width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.5rem; color: #111; transition: 0.2s; box-shadow: 0 4px 10px rgba(0,0,0,0.2); padding-left: 5px; box-sizing: border-box; }
.vid-info h4 { margin: 0 0 0.5rem 0; color: #111; font-size: 1.1rem; }
.vid-info p { margin: 0; color: #666; font-size: 0.95rem; }`,
    jsCode: ``
  },

  // 7. Twitter/X Style Embedded Tweets
  {
    _id: "t7",
    title: "Social Media Embedded Mentions",
    slug: "social-media-embedded-mentions",
    description: "Testimonials styled to look exactly like embedded social media posts/tweets.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["testimonials", "social", "twitter", "tweet"],
    isPremium: true,
    views: 6200,
    downloads: 1900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="social-wall">
  <div class="tweet-card">
    <div class="t-header">
      <img src="https://i.pravatar.cc/100?img=3" alt="user" />
      <div class="t-user">
        <strong>Chris Dev</strong>
        <span>@chriscodes</span>
      </div>
      <div class="t-icon">𝕏</div>
    </div>
    <div class="t-body">
      Just deployed my new portfolio using @YourUI and it's blazing fast. The components are so easy to tweak with Tailwind. 🔥🚀
    </div>
    <div class="t-footer">
      10:42 AM · Oct 12, 2026
    </div>
  </div>
  
  <div class="tweet-card">
    <div class="t-header">
      <img src="https://i.pravatar.cc/100?img=4" alt="user" />
      <div class="t-user">
        <strong>Sarah Design</strong>
        <span>@sarah_ui</span>
      </div>
      <div class="t-icon">𝕏</div>
    </div>
    <div class="t-body">
      The attention to detail in the @YourUI animations is incredible. Saved me literally weeks of writing CSS keyframes. 10/10 recommend.
    </div>
    <div class="t-footer">
      2:15 PM · Oct 11, 2026
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; justify-content: center; padding: 4rem 1rem; }
.social-wall { display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; }
.tweet-card { background: #fff; width: 100%; max-width: 400px; border-radius: 16px; padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #e5e7eb; }
.t-header { display: flex; align-items: center; margin-bottom: 1rem; }
.t-header img { width: 48px; height: 48px; border-radius: 50%; margin-right: 12px; }
.t-user { flex: 1; display: flex; flex-direction: column; }
.t-user strong { color: #0f1419; font-size: 1rem; }
.t-user span { color: #536471; font-size: 0.9rem; }
.t-icon { color: #0f1419; font-size: 1.2rem; font-weight: bold; }
.t-body { font-size: 1.1rem; line-height: 1.5; color: #0f1419; margin-bottom: 1rem; }
.t-footer { color: #536471; font-size: 0.9rem; border-top: 1px solid #eff3f4; padding-top: 1rem; }`,
    jsCode: ``
  },

  // 8. Customer Story/Case Study Link
  {
    _id: "t8",
    title: "Case Study Split Card",
    slug: "case-study-split-card",
    description: "A large, split-layout card highlighting a specific customer success story.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    tags: ["testimonials", "case-study", "split", "story"],
    isPremium: false,
    views: 4800,
    downloads: 1300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="story-card">
  <div class="story-img"></div>
  <div class="story-content">
    <div class="label">Customer Story</div>
    <h3>"How FinTechX scaled to 1M users using our design system."</h3>
    <p>By adopting our UI components, the engineering team cut development time by 40% while maintaining a pixel-perfect interface.</p>
    <a href="#" class="read-more">Read full case study →</a>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: 'Inter', sans-serif; display: flex; justify-content: center; padding: 4rem 2rem; }
.story-card { display: flex; max-width: 900px; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.story-img { flex: 1; background: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800') center/cover; min-height: 300px; }
.story-content { flex: 1; padding: 3rem; display: flex; flex-direction: column; justify-content: center; }
.label { color: #3b82f6; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; margin-bottom: 1rem; }
h3 { margin: 0 0 1rem 0; font-size: 1.8rem; line-height: 1.3; color: #111827; }
p { color: #6b7280; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; }
.read-more { color: #111827; font-weight: bold; text-decoration: none; border-bottom: 2px solid #111827; align-self: flex-start; padding-bottom: 2px; transition: 0.2s; }
.read-more:hover { color: #3b82f6; border-color: #3b82f6; }
@media (max-width: 700px) { .story-card { flex-direction: column; } }`,
    jsCode: ``
  },

  // 9. Minimalist Text-Only
  {
    _id: "t9",
    title: "Minimalist Typography Reviews",
    slug: "minimalist-typography-reviews",
    description: "Stripped back, typography-first testimonials with no boxes or avatars.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    tags: ["testimonials", "typography", "minimalist", "clean"],
    isPremium: false,
    views: 3800,
    downloads: 950,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="typo-tests">
  <div class="typo-item">
    <blockquote>"The cleanest code I've ever seen in a UI kit."</blockquote>
    <cite>— Mark D., Senior Engineer</cite>
  </div>
  <div class="typo-item">
    <blockquote>"Beautiful design that instantly elevated our brand."</blockquote>
    <cite>— Lisa R., Creative Director</cite>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fafafa; font-family: 'Georgia', serif; display: flex; justify-content: center; padding: 5rem 2rem; }
.typo-tests { max-width: 800px; display: flex; flex-direction: column; gap: 4rem; text-align: center; }
blockquote { margin: 0; font-size: 2.5rem; line-height: 1.4; color: #111; font-style: italic; margin-bottom: 1.5rem; }
cite { font-family: sans-serif; font-size: 1rem; color: #666; font-style: normal; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
@media (max-width: 600px) { blockquote { font-size: 1.8rem; } }`,
    jsCode: ``
  },

  // 10. Brutalist Marquee Testimonials
  {
    _id: "t10",
    title: "Brutalist Marquee Reviews",
    slug: "brutalist-marquee-reviews",
    description: "A loud, high-contrast scrolling marquee of user feedback.",
    category: "Testimonials",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["testimonials", "brutalist", "marquee", "scrolling"],
    isPremium: true,
    views: 5400,
    downloads: 1700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="brutal-tests">
  <div class="b-header">USER FEEDBACK</div>
  <div class="b-marquee">
    <div class="b-track">
      <div class="b-msg">"10/10 WOULD BUY AGAIN" - DAVE ✸</div>
      <div class="b-msg">"INSANE QUALITY" - SARAH ✸</div>
      <div class="b-msg">"SAVED MY LAUNCH" - MIKE ✸</div>
      <!-- Duplicate for loop -->
      <div class="b-msg">"10/10 WOULD BUY AGAIN" - DAVE ✸</div>
      <div class="b-msg">"INSANE QUALITY" - SARAH ✸</div>
      <div class="b-msg">"SAVED MY LAUNCH" - MIKE ✸</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: monospace; overflow-x: hidden; }
.brutal-tests { padding: 4rem 0; border-top: 4px solid #000; border-bottom: 4px solid #000; background: #bef264; }
.b-header { font-size: 3rem; font-weight: 900; padding: 0 2rem; margin-bottom: 2rem; text-transform: uppercase; border-bottom: 4px solid #000; padding-bottom: 1rem; }
.b-marquee { overflow: hidden; white-space: nowrap; border-top: 4px solid #000; border-bottom: 4px solid #000; background: #000; color: #fff; padding: 1.5rem 0; }
.b-track { display: inline-block; animation: scroll 15s linear infinite; }
.b-msg { display: inline-block; font-size: 2.5rem; font-weight: 900; margin-right: 2rem; text-transform: uppercase; }
@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`,
    jsCode: ``
  }
];
