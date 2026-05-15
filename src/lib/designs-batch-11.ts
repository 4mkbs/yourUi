import { Design } from "./designs-data";

export const BATCH_11_DESIGNS: Design[] = [
  // 1. Standard SaaS User Management Table
  {
    _id: "dt1",
    title: "SaaS User Management Table",
    slug: "saas-user-management-table",
    description: "A clean, highly readable table for managing users, featuring status badges and action menus.",
    category: "Data Tables",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tags: ["table", "saas", "dashboard", "users"],
    isPremium: false,
    views: 9200,
    downloads: 3500,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="table-container">
  <div class="table-header">
    <h2>Team Members</h2>
    <button class="btn-primary">Add Member</button>
  </div>
  <div class="table-wrapper">
    <table class="saas-table">
      <thead>
        <tr>
          <th>User</th>
          <th>Role</th>
          <th>Status</th>
          <th>Last Login</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="user-info">
              <img src="https://i.pravatar.cc/150?u=1" alt="Avatar" />
              <div>
                <span class="name">Sarah Jenkins</span>
                <span class="email">sarah@example.com</span>
              </div>
            </div>
          </td>
          <td>Admin</td>
          <td><span class="badge active">Active</span></td>
          <td>2 hours ago</td>
          <td><button class="action-btn">⋮</button></td>
        </tr>
        <tr>
          <td>
            <div class="user-info">
              <img src="https://i.pravatar.cc/150?u=2" alt="Avatar" />
              <div>
                <span class="name">Michael Chen</span>
                <span class="email">michael@example.com</span>
              </div>
            </div>
          </td>
          <td>Editor</td>
          <td><span class="badge offline">Offline</span></td>
          <td>1 day ago</td>
          <td><button class="action-btn">⋮</button></td>
        </tr>
        <tr>
          <td>
            <div class="user-info">
              <img src="https://i.pravatar.cc/150?u=3" alt="Avatar" />
              <div>
                <span class="name">Elena Rodriguez</span>
                <span class="email">elena@example.com</span>
              </div>
            </div>
          </td>
          <td>Viewer</td>
          <td><span class="badge pending">Pending</span></td>
          <td>Never</td>
          <td><button class="action-btn">⋮</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; background: #f8fafc; padding: 2rem; color: #0f172a; }
.table-container { max-width: 1000px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; overflow: hidden; }
.table-header { padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; }
.table-header h2 { margin: 0; font-size: 1.2rem; }
.btn-primary { background: #3b82f6; color: #fff; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: 500; cursor: pointer; }
.btn-primary:hover { background: #2563eb; }
.table-wrapper { overflow-x: auto; }
.saas-table { width: 100%; border-collapse: collapse; text-align: left; }
.saas-table th { background: #f8fafc; padding: 1rem 1.5rem; color: #64748b; font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0; }
.saas-table td { padding: 1rem 1.5rem; border-bottom: 1px solid #e2e8f0; color: #334155; vertical-align: middle; }
.saas-table tr:last-child td { border-bottom: none; }
.saas-table tr:hover td { background: #f8fafc; }
.user-info { display: flex; align-items: center; gap: 1rem; }
.user-info img { width: 40px; height: 40px; border-radius: 50%; }
.user-info .name { display: block; font-weight: 600; color: #0f172a; }
.user-info .email { display: block; font-size: 0.85rem; color: #64748b; }
.badge { padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }
.badge.active { background: #dcfce7; color: #166534; }
.badge.offline { background: #f1f5f9; color: #475569; }
.badge.pending { background: #fef08a; color: #854d0e; }
.action-btn { background: none; border: none; color: #94a3b8; font-size: 1.2rem; cursor: pointer; padding: 5px; border-radius: 4px; }
.action-btn:hover { background: #e2e8f0; color: #0f172a; }`,
    jsCode: ``
  },

  // 2. E-commerce Order History Table
  {
    _id: "dt2",
    title: "E-commerce Order History",
    slug: "ecommerce-order-history",
    description: "A compact table tailored for showing past orders, statuses, and total amounts.",
    category: "Data Tables",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tags: ["table", "ecommerce", "orders", "history"],
    isPremium: false,
    views: 7800,
    downloads: 2700,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="order-table-box">
  <h3>Recent Orders</h3>
  <table class="order-table">
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Date</th>
        <th>Status</th>
        <th>Total</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>#ORD-9842</strong></td>
        <td>Oct 24, 2026</td>
        <td><span class="status shipped">Shipped</span></td>
        <td>$145.00</td>
        <td><a href="#">View</a></td>
      </tr>
      <tr>
        <td><strong>#ORD-9841</strong></td>
        <td>Oct 22, 2026</td>
        <td><span class="status delivered">Delivered</span></td>
        <td>$89.99</td>
        <td><a href="#">View</a></td>
      </tr>
      <tr>
        <td><strong>#ORD-9840</strong></td>
        <td>Oct 20, 2026</td>
        <td><span class="status cancelled">Cancelled</span></td>
        <td>$24.50</td>
        <td><a href="#">View</a></td>
      </tr>
    </tbody>
  </table>
</div>`,
    cssCode: `body { margin: 0; font-family: sans-serif; background: #fff; padding: 2rem; display: flex; justify-content: center; }
.order-table-box { width: 100%; max-width: 800px; border: 1px solid #eaeaea; border-radius: 8px; padding: 1.5rem; }
h3 { margin-top: 0; margin-bottom: 1.5rem; color: #111; }
.order-table { width: 100%; border-collapse: collapse; text-align: left; }
.order-table th { padding: 1rem 0; border-bottom: 2px solid #111; color: #666; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }
.order-table td { padding: 1rem 0; border-bottom: 1px solid #eaeaea; color: #333; }
.order-table tr:last-child td { border-bottom: none; }
.status { padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; }
.shipped { background: #e0f2fe; color: #0284c7; }
.delivered { background: #dcfce7; color: #166534; }
.cancelled { background: #fee2e2; color: #dc2626; }
.order-table a { color: #111; text-decoration: underline; font-weight: bold; }
.order-table a:hover { color: #2563eb; }`,
    jsCode: ``
  },

  // 3. Dark Mode Crypto Portfolio Table
  {
    _id: "dt3",
    title: "Crypto Portfolio Dashboard",
    slug: "crypto-portfolio-dashboard",
    description: "A dark theme data table showing coin holdings, price changes, and sparklines.",
    category: "Data Tables",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["table", "crypto", "dark", "portfolio"],
    isPremium: true,
    views: 8500,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="crypto-table-wrap">
  <div class="c-header">Your Portfolio</div>
  <table class="c-table">
    <thead>
      <tr>
        <th>Asset</th>
        <th>Balance</th>
        <th>Price</th>
        <th>24h Change</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="coin-cell">
            <span class="c-icon btc">₿</span>
            <div>
              <div class="c-name">Bitcoin</div>
              <div class="c-ticker">BTC</div>
            </div>
          </div>
        </td>
        <td>
          <div class="bal-val">$34,500.00</div>
          <div class="bal-coin">0.52 BTC</div>
        </td>
        <td>$66,346.15</td>
        <td class="positive">+2.45%</td>
      </tr>
      <tr>
        <td>
          <div class="coin-cell">
            <span class="c-icon eth">Ξ</span>
            <div>
              <div class="c-name">Ethereum</div>
              <div class="c-ticker">ETH</div>
            </div>
          </div>
        </td>
        <td>
          <div class="bal-val">$12,450.00</div>
          <div class="bal-coin">3.5 ETH</div>
        </td>
        <td>$3,557.14</td>
        <td class="negative">-1.12%</td>
      </tr>
    </tbody>
  </table>
</div>`,
    cssCode: `body { margin: 0; background: #0f172a; font-family: 'Inter', sans-serif; color: #f8fafc; padding: 2rem; display: flex; justify-content: center; }
.crypto-table-wrap { width: 100%; max-width: 900px; background: #1e293b; border-radius: 16px; padding: 2rem; border: 1px solid #334155; }
.c-header { font-size: 1.5rem; font-weight: bold; margin-bottom: 2rem; color: #fff; }
.c-table { width: 100%; border-collapse: collapse; text-align: left; }
.c-table th { padding-bottom: 1rem; color: #94a3b8; font-weight: normal; font-size: 0.9rem; border-bottom: 1px solid #334155; }
.c-table td { padding: 1.5rem 0; border-bottom: 1px solid #334155; }
.c-table tr:last-child td { border-bottom: none; padding-bottom: 0; }
.coin-cell { display: flex; align-items: center; gap: 1rem; }
.c-icon { width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; font-weight: bold; color: #fff; }
.btc { background: #f59e0b; }
.eth { background: #6366f1; }
.c-name { font-weight: bold; color: #fff; }
.c-ticker { color: #94a3b8; font-size: 0.85rem; }
.bal-val { font-weight: bold; color: #fff; }
.bal-coin { color: #94a3b8; font-size: 0.85rem; }
.positive { color: #10b981; font-weight: bold; }
.negative { color: #ef4444; font-weight: bold; }`,
    jsCode: ``
  },

  // 4. Minimalist Invoice Table
  {
    _id: "dt4",
    title: "Minimalist Invoice Table",
    slug: "minimalist-invoice-table",
    description: "A super clean table designed specifically for rendering invoices or receipts.",
    category: "Data Tables",
    thumbnail: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?w=800&q=80",
    tags: ["table", "invoice", "minimalist", "clean"],
    isPremium: false,
    views: 6500,
    downloads: 1800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="invoice-container">
  <table class="inv-table">
    <thead>
      <tr>
        <th style="width: 50%;">Description</th>
        <th style="text-align: right;">Qty</th>
        <th style="text-align: right;">Price</th>
        <th style="text-align: right;">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Web Design Services</td>
        <td class="r">1</td>
        <td class="r">$1,500.00</td>
        <td class="r">$1,500.00</td>
      </tr>
      <tr>
        <td>Frontend Development</td>
        <td class="r">40</td>
        <td class="r">$50.00</td>
        <td class="r">$2,000.00</td>
      </tr>
      <tr>
        <td>Server Hosting (1 yr)</td>
        <td class="r">1</td>
        <td class="r">$120.00</td>
        <td class="r">$120.00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="r">Subtotal</td>
        <td class="r">$3,620.00</td>
      </tr>
      <tr>
        <td colspan="3" class="r">Tax (5%)</td>
        <td class="r">$181.00</td>
      </tr>
      <tr class="total-row">
        <td colspan="3" class="r">Total Due</td>
        <td class="r">$3,801.00</td>
      </tr>
    </tfoot>
  </table>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: 'Helvetica Neue', sans-serif; padding: 4rem 2rem; display: flex; justify-content: center; }
.invoice-container { width: 100%; max-width: 800px; }
.inv-table { width: 100%; border-collapse: collapse; text-align: left; }
.inv-table th { border-bottom: 2px solid #000; padding: 1rem 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; color: #000; }
.inv-table td { border-bottom: 1px solid #eaeaea; padding: 1rem 0; color: #333; }
.r { text-align: right; }
.inv-table tfoot td { border-bottom: none; padding: 0.5rem 0; color: #666; }
.inv-table tfoot tr:first-child td { padding-top: 2rem; }
.total-row td { font-size: 1.2rem; font-weight: bold; color: #000; border-top: 2px solid #000; padding-top: 1rem; margin-top: 1rem; }`,
    jsCode: ``
  },

  // 5. Kanban-style Board Table
  {
    _id: "dt5",
    title: "Kanban Task List Table",
    slug: "kanban-task-list-table",
    description: "A table that looks like a task list, featuring priority flags and assignees.",
    category: "Data Tables",
    thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
    tags: ["table", "tasks", "kanban", "dashboard"],
    isPremium: true,
    views: 7100,
    downloads: 2300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="task-table-wrap">
  <table class="task-table">
    <thead>
      <tr>
        <th>Task</th>
        <th>Project</th>
        <th>Priority</th>
        <th>Assignee</th>
      </tr>
    </thead>
    <tbody>
      <tr class="task-row">
        <td>
          <div class="task-title">Design new landing page</div>
          <div class="task-meta">Due: Tomorrow</div>
        </td>
        <td><span class="tag proj">Marketing</span></td>
        <td><span class="tag high">High</span></td>
        <td><img src="https://i.pravatar.cc/100?img=5" class="avatar" alt="user"/></td>
      </tr>
      <tr class="task-row">
        <td>
          <div class="task-title">Fix navigation bug on mobile</div>
          <div class="task-meta">Due: Oct 28</div>
        </td>
        <td><span class="tag proj">Engineering</span></td>
        <td><span class="tag med">Medium</span></td>
        <td><img src="https://i.pravatar.cc/100?img=6" class="avatar" alt="user"/></td>
      </tr>
    </tbody>
  </table>
</div>`,
    cssCode: `body { margin: 0; background: #f3f4f6; font-family: sans-serif; padding: 3rem; display: flex; justify-content: center; }
.task-table-wrap { width: 100%; max-width: 900px; }
.task-table { width: 100%; border-collapse: separate; border-spacing: 0 0.5rem; text-align: left; }
.task-table th { padding: 0 1.5rem 0.5rem; color: #6b7280; font-size: 0.85rem; font-weight: normal; }
.task-row { background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-radius: 8px; transition: 0.2s; cursor: pointer; }
.task-row:hover { transform: translateX(5px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.task-row td { padding: 1rem 1.5rem; border: none; }
.task-row td:first-child { border-top-left-radius: 8px; border-bottom-left-radius: 8px; border-left: 4px solid #3b82f6; }
.task-row td:last-child { border-top-right-radius: 8px; border-bottom-right-radius: 8px; }
.task-title { font-weight: bold; color: #111827; margin-bottom: 4px; }
.task-meta { font-size: 0.8rem; color: #9ca3af; }
.tag { padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: bold; }
.proj { background: #f3f4f6; color: #4b5563; }
.high { background: #fee2e2; color: #ef4444; }
.med { background: #fef3c7; color: #d97706; }
.avatar { width: 32px; height: 32px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 1px #e5e7eb; }`,
    jsCode: ``
  },

  // 6. Glassmorphism Transactions Table
  {
    _id: "dt6",
    title: "Glassmorphism Transactions",
    slug: "glassmorphism-transactions",
    description: "A translucent table showing financial transactions, blending into a colorful background.",
    category: "Data Tables",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["table", "glassmorphism", "finance", "transactions"],
    isPremium: true,
    views: 6900,
    downloads: 2200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="glass-bg">
  <div class="glass-table-wrap">
    <h3>Recent Transactions</h3>
    <table class="g-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Today, 2:45 PM</td>
          <td>Stripe Payout</td>
          <td class="g-pos">+$4,250.00</td>
        </tr>
        <tr>
          <td>Yesterday</td>
          <td>AWS Cloud Hosting</td>
          <td class="g-neg">-$124.50</td>
        </tr>
        <tr>
          <td>Oct 20</td>
          <td>Apple Store Subscription</td>
          <td class="g-neg">-$14.99</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
    cssCode: `body { margin: 0; font-family: 'Inter', sans-serif; overflow: hidden; }
.glass-bg { height: 100vh; background: linear-gradient(45deg, #10b981, #3b82f6); display: flex; justify-content: center; align-items: center; padding: 2rem; }
.glass-table-wrap { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; padding: 2rem; width: 100%; max-width: 800px; color: #fff; box-shadow: 0 25px 50px rgba(0,0,0,0.2); }
h3 { margin: 0 0 1.5rem 0; font-size: 1.5rem; }
.g-table { width: 100%; border-collapse: collapse; text-align: left; }
.g-table th { padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.2); font-weight: 500; color: rgba(255,255,255,0.8); }
.g-table td { padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
.g-table tr:last-child td { border-bottom: none; }
.g-pos { color: #dcfce7; font-weight: bold; }
.g-neg { color: #fee2e2; }`,
    jsCode: ``
  },

  // 7. Leaderboard/Ranking Table
  {
    _id: "dt7",
    title: "Gaming Leaderboard Table",
    slug: "gaming-leaderboard-table",
    description: "A competitive leaderboard table featuring ranks, avatars, and score progress bars.",
    category: "Data Tables",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    tags: ["table", "leaderboard", "ranking", "gaming"],
    isPremium: false,
    views: 8100,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="leaderboard-wrap">
  <div class="l-header">Global Rankings</div>
  <table class="l-table">
    <tbody>
      <tr class="top-3">
        <td class="rank">🥇 1</td>
        <td class="player">
          <img src="https://i.pravatar.cc/100?img=11" alt="P1"/>
          <strong>Faker_01</strong>
        </td>
        <td class="score">
          <div class="score-bar"><div class="fill" style="width: 100%;"></div></div>
          <span>9,850</span>
        </td>
      </tr>
      <tr class="top-3">
        <td class="rank">🥈 2</td>
        <td class="player">
          <img src="https://i.pravatar.cc/100?img=12" alt="P2"/>
          <strong>NoobMaster</strong>
        </td>
        <td class="score">
          <div class="score-bar"><div class="fill" style="width: 85%;"></div></div>
          <span>8,420</span>
        </td>
      </tr>
      <tr>
        <td class="rank">4</td>
        <td class="player">
          <img src="https://i.pravatar.cc/100?img=14" alt="P4"/>
          <span>CasualGamer</span>
        </td>
        <td class="score">
          <div class="score-bar"><div class="fill" style="width: 50%;"></div></div>
          <span>5,100</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
    cssCode: `body { margin: 0; background: #1f2937; font-family: sans-serif; padding: 4rem 2rem; display: flex; justify-content: center; }
.leaderboard-wrap { width: 100%; max-width: 700px; background: #111827; border-radius: 16px; overflow: hidden; border: 1px solid #374151; }
.l-header { background: #374151; color: #fff; padding: 1.5rem; font-size: 1.2rem; font-weight: bold; text-align: center; text-transform: uppercase; letter-spacing: 2px; }
.l-table { width: 100%; border-collapse: collapse; }
.l-table td { padding: 1rem 1.5rem; border-bottom: 1px solid #1f2937; color: #d1d5db; }
.top-3 { background: rgba(59,130,246,0.1); }
.rank { font-weight: bold; font-size: 1.2rem; width: 60px; }
.player { display: flex; align-items: center; gap: 1rem; }
.player img { width: 40px; height: 40px; border-radius: 50%; border: 2px solid #374151; }
.player strong { color: #fff; font-size: 1.1rem; }
.score { width: 200px; text-align: right; }
.score-bar { height: 6px; background: #374151; border-radius: 3px; margin-bottom: 5px; overflow: hidden; }
.score-bar .fill { height: 100%; background: #3b82f6; }
.score span { font-weight: bold; color: #fff; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 8. Complex Expandable Row Table
  {
    _id: "dt8",
    title: "Expandable Details Table",
    slug: "expandable-details-table",
    description: "A data table where clicking a row reveals hidden details and quick actions underneath.",
    category: "Data Tables",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    tags: ["table", "expandable", "accordion", "complex"],
    isPremium: true,
    views: 5900,
    downloads: 1850,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="exp-table-wrap">
  <table class="exp-table">
    <thead>
      <tr>
        <th>Server Name</th>
        <th>IP Address</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="main-row">
        <td>production-web-01</td>
        <td>192.168.1.100</td>
        <td><span class="status healthy">Healthy</span></td>
      </tr>
      <tr class="details-row">
        <td colspan="3">
          <div class="details-content">
            <p><strong>CPU Usage:</strong> 42%</p>
            <p><strong>RAM Usage:</strong> 12GB / 32GB</p>
            <button class="reboot-btn">Reboot Server</button>
          </div>
        </td>
      </tr>
      <tr class="main-row">
        <td>database-main-01</td>
        <td>192.168.1.101</td>
        <td><span class="status warning">High Load</span></td>
      </tr>
      <tr class="details-row">
        <td colspan="3">
          <div class="details-content">
            <p><strong>CPU Usage:</strong> 98%</p>
            <p><strong>RAM Usage:</strong> 60GB / 64GB</p>
            <button class="reboot-btn">Optimize Queries</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: sans-serif; padding: 4rem 2rem; display: flex; justify-content: center; }
.exp-table-wrap { width: 100%; max-width: 800px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
.exp-table { width: 100%; border-collapse: collapse; text-align: left; }
.exp-table th { background: #f9fafb; padding: 1rem; border-bottom: 1px solid #e5e7eb; color: #4b5563; font-size: 0.9rem; }
.main-row { cursor: pointer; transition: 0.2s; }
.main-row:hover { background: #f9fafb; }
.main-row td { padding: 1rem; border-bottom: 1px solid #e5e7eb; color: #111827; }
.status { padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; }
.healthy { background: #dcfce7; color: #166534; }
.warning { background: #fef08a; color: #854d0e; }
.details-row { display: none; background: #f3f4f6; }
.details-content { padding: 1.5rem; border-bottom: 1px solid #e5e7eb; }
.details-content p { margin: 0 0 0.5rem 0; color: #4b5563; font-size: 0.9rem; }
.reboot-btn { margin-top: 1rem; background: #111827; color: #fff; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }`,
    jsCode: `document.querySelectorAll('.main-row').forEach(row => {
  row.addEventListener('click', () => {
    const details = row.nextElementSibling;
    if(details.style.display === 'table-row') {
      details.style.display = 'none';
    } else {
      details.style.display = 'table-row';
    }
  });
});`
  },

  // 9. Brutalist Scoreboard Table
  {
    _id: "dt9",
    title: "Brutalist Scoreboard",
    slug: "brutalist-scoreboard",
    description: "A loud, raw, unstyled-looking table with massive borders and extreme contrast.",
    category: "Data Tables",
    thumbnail: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    tags: ["table", "brutalist", "scoreboard", "contrast"],
    isPremium: true,
    views: 4700,
    downloads: 1200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="brutal-table-wrap">
  <div class="b-title">RESULTS.TXT</div>
  <table class="b-table">
    <thead>
      <tr>
        <th>TEAM</th>
        <th>WINS</th>
        <th>LOSSES</th>
      </tr>
    </thead>
    <tbody>
      <tr class="b-row highlight">
        <td>RED DRAGONS</td>
        <td>12</td>
        <td>0</td>
      </tr>
      <tr class="b-row">
        <td>BLUE SHARKS</td>
        <td>8</td>
        <td>4</td>
      </tr>
      <tr class="b-row">
        <td>GREEN VIPERS</td>
        <td>2</td>
        <td>10</td>
      </tr>
    </tbody>
  </table>
</div>`,
    cssCode: `body { margin: 0; background: #facc15; font-family: monospace; padding: 4rem 2rem; display: flex; justify-content: center; }
.brutal-table-wrap { width: 100%; max-width: 600px; border: 5px solid #000; background: #fff; box-shadow: 15px 15px 0 #000; }
.b-title { background: #000; color: #fff; padding: 1rem; font-size: 2rem; font-weight: 900; text-transform: uppercase; border-bottom: 5px solid #000; }
.b-table { width: 100%; border-collapse: collapse; text-align: left; }
.b-table th { padding: 1rem; font-size: 1.5rem; font-weight: 900; border-bottom: 5px solid #000; border-right: 5px solid #000; }
.b-table th:last-child { border-right: none; }
.b-row td { padding: 1.5rem 1rem; font-size: 1.5rem; font-weight: bold; border-bottom: 5px solid #000; border-right: 5px solid #000; }
.b-row td:last-child { border-right: none; }
.b-table tr:last-child td { border-bottom: none; }
.highlight { background: #fbcfe8; }
.b-row:hover { background: #000; color: #fff; }`,
    jsCode: ``
  },

  // 10. Web3 NFT Leaderboard Table
  {
    _id: "dt10",
    title: "NFT Collection Stats Table",
    slug: "nft-collection-stats-table",
    description: "A dark, glowing table designed to display NFT collection volumes, floor prices, and supply.",
    category: "Data Tables",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["table", "web3", "nft", "crypto"],
    isPremium: false,
    views: 4500,
    downloads: 1300,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="nft-table-container">
  <h2>Top Collections <span>(24h)</span></h2>
  <table class="nft-table">
    <thead>
      <tr>
        <th>Collection</th>
        <th>Volume</th>
        <th>Floor Price</th>
        <th>Sales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="col-info">
            <img src="https://i.pravatar.cc/100?img=21" alt="NFT" />
            <span>CyberPunks</span>
          </div>
        </td>
        <td><span class="eth-icon">Ξ</span> 1,245.50 <span class="up">+12%</span></td>
        <td><span class="eth-icon">Ξ</span> 45.2</td>
        <td>342</td>
      </tr>
      <tr>
        <td>
          <div class="col-info">
            <img src="https://i.pravatar.cc/100?img=22" alt="NFT" />
            <span>Ape Yacht Club</span>
          </div>
        </td>
        <td><span class="eth-icon">Ξ</span> 980.20 <span class="down">-5%</span></td>
        <td><span class="eth-icon">Ξ</span> 32.1</td>
        <td>156</td>
      </tr>
    </tbody>
  </table>
</div>`,
    cssCode: `body { margin: 0; background: #09090b; font-family: 'Inter', sans-serif; color: #fff; padding: 4rem 2rem; display: flex; justify-content: center; }
.nft-table-container { width: 100%; max-width: 900px; }
h2 { font-size: 1.8rem; margin-bottom: 2rem; display: flex; align-items: baseline; gap: 10px; }
h2 span { font-size: 1rem; color: #a1a1aa; font-weight: normal; }
.nft-table { width: 100%; border-collapse: collapse; text-align: left; background: #18181b; border-radius: 12px; overflow: hidden; border: 1px solid #27272a; }
.nft-table th { padding: 1.5rem; color: #a1a1aa; font-weight: 500; border-bottom: 1px solid #27272a; background: #09090b; }
.nft-table td { padding: 1.5rem; border-bottom: 1px solid #27272a; font-weight: bold; }
.nft-table tr:last-child td { border-bottom: none; }
.nft-table tr:hover { background: #27272a; cursor: pointer; }
.col-info { display: flex; align-items: center; gap: 1rem; }
.col-info img { width: 48px; height: 48px; border-radius: 12px; }
.eth-icon { color: #8b5cf6; font-weight: normal; margin-right: 4px; }
.up { color: #10b981; font-size: 0.8rem; margin-left: 8px; }
.down { color: #ef4444; font-size: 0.8rem; margin-left: 8px; }`,
    jsCode: ``
  }
];
