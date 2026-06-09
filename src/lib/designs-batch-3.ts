import { Design } from "./designs-data";

export const BATCH_3_DESIGNS: Design[] = [
  // 1. Analytics Overview
  {
    _id: "d1",
    title: "Analytics Overview Dashboard",
    slug: "analytics-overview-dashboard",
    description: "A clean, data-heavy dashboard with metric cards and a placeholder for a large chart.",
    category: "Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["dashboard", "analytics", "charts", "metrics"],
    isPremium: false,
    views: 8400,
    downloads: 3100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="dash-container">
  <aside class="sidebar">
    <div class="logo">Analytica</div>
    <nav>
      <a href="#" class="active">Overview</a>
      <a href="#">Reports</a>
      <a href="#">Settings</a>
    </nav>
  </aside>
  <main class="main-content">
    <header>
      <h2>Dashboard Overview</h2>
      <button class="export-btn">Export Data</button>
    </header>
    <div class="metrics-grid">
      <div class="metric-card">
        <h3>Total Revenue</h3>
        <p class="value">$45,231</p>
        <p class="trend positive">+12.5% from last month</p>
      </div>
      <div class="metric-card">
        <h3>Active Users</h3>
        <p class="value">2,845</p>
        <p class="trend positive">+5.2% from last month</p>
      </div>
      <div class="metric-card">
        <h3>Bounce Rate</h3>
        <p class="value">42.3%</p>
        <p class="trend negative">-2.1% from last month</p>
      </div>
    </div>
    <div class="chart-container">
      <h3>Revenue Over Time</h3>
      <div class="fake-chart">
        <div class="bar" style="height: 40%"></div>
        <div class="bar" style="height: 60%"></div>
        <div class="bar" style="height: 30%"></div>
        <div class="bar" style="height: 80%"></div>
        <div class="bar" style="height: 50%"></div>
        <div class="bar" style="height: 90%"></div>
        <div class="bar" style="height: 70%"></div>
      </div>
    </div>
  </main>
</div>`,
    cssCode: `body { margin: 0; background: #f8fafc; font-family: 'Inter', sans-serif; color: #334155; }
.dash-container { display: flex; height: 100vh; overflow: hidden; }
.sidebar { width: 250px; background: #fff; border-right: 1px solid #e2e8f0; padding: 1.5rem; }
.logo { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 2rem; }
.sidebar nav a { display: block; padding: 0.75rem 1rem; color: #64748b; text-decoration: none; border-radius: 0.5rem; margin-bottom: 0.5rem; font-weight: 500; }
.sidebar nav a.active, .sidebar nav a:hover { background: #f1f5f9; color: #0f172a; }
.main-content { flex: 1; padding: 2rem; overflow-y: auto; }
header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
h2 { margin: 0; color: #0f172a; }
.export-btn { background: #fff; border: 1px solid #cbd5e1; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; font-weight: 600; }
.metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
.metric-card { background: #fff; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.metric-card h3 { margin: 0 0 0.5rem 0; font-size: 0.875rem; color: #64748b; text-transform: uppercase; }
.value { font-size: 2rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem 0; }
.trend { font-size: 0.875rem; margin: 0; }
.trend.positive { color: #10b981; }
.trend.negative { color: #ef4444; }
.chart-container { background: #fff; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.chart-container h3 { margin: 0 0 1.5rem 0; color: #0f172a; }
.fake-chart { height: 200px; display: flex; align-items: flex-end; justify-content: space-between; gap: 10px; padding-top: 20px; border-bottom: 1px solid #e2e8f0; }
.bar { flex: 1; background: #3b82f6; border-radius: 4px 4px 0 0; opacity: 0.8; transition: 0.3s; }
.bar:hover { opacity: 1; background: #2563eb; }`,
    jsCode: ``
  },

  // 2. E-commerce Sales Dashboard
  {
    _id: "d2",
    title: "E-Commerce Sales Dashboard",
    slug: "ecommerce-sales-dashboard",
    description: "Focuses on recent orders and quick stats for a store manager.",
    category: "Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["dashboard", "ecommerce", "sales", "orders"],
    isPremium: true,
    views: 7200,
    downloads: 2400,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="store-dash">
  <div class="topbar">
    <div class="search"><input type="text" placeholder="Search orders..." /></div>
    <div class="user-profile">Store Admin</div>
  </div>
  <div class="content-area">
    <div class="stats-row">
      <div class="stat-box">
        <div class="label">Today's Sales</div>
        <div class="num">$1,240.50</div>
      </div>
      <div class="stat-box">
        <div class="label">Pending Orders</div>
        <div class="num">14</div>
      </div>
    </div>
    <div class="table-card">
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#ORD-001</td>
            <td>Alice Smith</td>
            <td>$120.00</td>
            <td><span class="badge success">Shipped</span></td>
          </tr>
          <tr>
            <td>#ORD-002</td>
            <td>Bob Johnson</td>
            <td>$45.50</td>
            <td><span class="badge pending">Processing</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f3f4f6; font-family: sans-serif; }
.store-dash { display: flex; flex-direction: column; height: 100vh; }
.topbar { height: 60px; background: #fff; border-bottom: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center; padding: 0 2rem; }
.search input { padding: 0.5rem 1rem; border: 1px solid #d1d5db; border-radius: 20px; outline: none; width: 250px; }
.content-area { padding: 2rem; flex: 1; }
.stats-row { display: flex; gap: 1.5rem; margin-bottom: 2rem; }
.stat-box { flex: 1; background: #fff; padding: 1.5rem; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.label { color: #6b7280; font-size: 0.875rem; margin-bottom: 0.5rem; }
.num { font-size: 1.5rem; font-weight: bold; color: #111827; }
.table-card { background: #fff; padding: 1.5rem; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.table-card h3 { margin-top: 0; }
table { width: 100%; border-collapse: collapse; text-align: left; }
th { padding: 1rem 0; color: #6b7280; font-size: 0.875rem; border-bottom: 1px solid #e5e7eb; }
td { padding: 1rem 0; border-bottom: 1px solid #f3f4f6; color: #374151; }
.badge { padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.75rem; font-weight: bold; }
.badge.success { background: #d1fae5; color: #065f46; }
.badge.pending { background: #fef3c7; color: #92400e; }`,
    jsCode: ``
  },

  // 3. Crypto Portfolio
  {
    _id: "d3",
    title: "Crypto Portfolio Dashboard",
    slug: "crypto-portfolio-dashboard",
    description: "Dark mode dashboard for tracking cryptocurrency assets.",
    category: "Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80",
    tags: ["dashboard", "crypto", "dark", "finance"],
    isPremium: true,
    views: 9500,
    downloads: 3200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="crypto-dash">
  <div class="main-panel">
    <div class="balance-card">
      <h2>Total Balance</h2>
      <div class="amount">$124,560.00</div>
      <div class="change positive">+2.4% Today</div>
    </div>
    <div class="assets">
      <h3>Your Assets</h3>
      <div class="asset-item">
        <div class="asset-info"><span class="icon">₿</span> Bitcoin</div>
        <div class="asset-val">$65,240 <span class="change positive">+1.2%</span></div>
      </div>
      <div class="asset-item">
        <div class="asset-info"><span class="icon" style="color:#627eea">♦</span> Ethereum</div>
        <div class="asset-val">$3,420 <span class="change negative">-0.8%</span></div>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #0a0a0a; color: #fff; font-family: 'Inter', sans-serif; padding: 2rem; display: flex; justify-content: center; }
.crypto-dash { width: 100%; max-width: 600px; }
.balance-card { background: linear-gradient(135deg, #1e1b4b, #312e81); padding: 2rem; border-radius: 20px; text-align: center; margin-bottom: 2rem; box-shadow: 0 10px 30px rgba(49,46,129,0.3); }
.balance-card h2 { margin: 0 0 1rem 0; font-size: 1rem; color: #94a3b8; font-weight: 500; }
.amount { font-size: 3rem; font-weight: 800; margin-bottom: 0.5rem; }
.change { font-weight: bold; font-size: 0.9rem; }
.change.positive { color: #10b981; }
.change.negative { color: #ef4444; }
.assets h3 { font-size: 1.2rem; margin-bottom: 1.5rem; }
.asset-item { background: #111; border: 1px solid #222; border-radius: 12px; padding: 1.2rem; display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; transition: 0.2s; }
.asset-item:hover { background: #1a1a1a; border-color: #333; }
.asset-info { display: flex; align-items: center; gap: 10px; font-weight: 600; }
.icon { font-size: 1.5rem; color: #f59e0b; }
.asset-val { text-align: right; font-weight: 600; }
.asset-val span { display: block; font-size: 0.8rem; margin-top: 4px; }`,
    jsCode: ``
  },

  // 4. Kanban Project Management
  {
    _id: "d4",
    title: "Kanban Project Board",
    slug: "kanban-project-board",
    description: "A drag-and-drop style kanban board interface for task management.",
    category: "Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    tags: ["dashboard", "kanban", "project", "tasks"],
    isPremium: false,
    views: 6100,
    downloads: 1800,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="board-wrapper">
  <div class="board-header">
    <h2>Website Redesign</h2>
    <button class="add-btn">+ Add Task</button>
  </div>
  <div class="columns">
    <div class="column">
      <div class="col-header">To Do <span>2</span></div>
      <div class="task-card">Design Homepage UI</div>
      <div class="task-card">Write Copywriting</div>
    </div>
    <div class="column">
      <div class="col-header">In Progress <span>1</span></div>
      <div class="task-card">Set up Next.js Project</div>
    </div>
    <div class="column">
      <div class="col-header">Review <span>1</span></div>
      <div class="task-card">Logo Variations</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #e2e8f0; font-family: sans-serif; }
.board-wrapper { padding: 2rem; height: 100vh; box-sizing: border-box; display: flex; flex-direction: column; }
.board-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
h2 { margin: 0; color: #1e293b; }
.add-btn { background: #3b82f6; color: #fff; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; cursor: pointer; }
.columns { display: flex; gap: 1.5rem; flex: 1; overflow-x: auto; }
.column { background: #f1f5f9; min-width: 300px; border-radius: 8px; padding: 1rem; display: flex; flex-direction: column; gap: 1rem; }
.col-header { font-weight: bold; color: #475569; display: flex; justify-content: space-between; align-items: center; }
.col-header span { background: #cbd5e1; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; }
.task-card { background: #fff; padding: 1rem; border-radius: 6px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); cursor: pointer; border: 1px solid #e2e8f0; transition: 0.2s; }
.task-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.05); }`,
    jsCode: ``
  },

  // 5. Healthcare Patient
  {
    _id: "d5",
    title: "Healthcare Patient Dashboard",
    slug: "healthcare-patient-dashboard",
    description: "Minimalist dashboard showing patient vitals and upcoming appointments.",
    category: "Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    tags: ["dashboard", "health", "medical", "clean"],
    isPremium: true,
    views: 4500,
    downloads: 1200,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="health-dash">
  <h2>Patient Portal</h2>
  <div class="vitals">
    <div class="vital-card">
      <div class="icon">❤️</div>
      <div class="info">
        <span class="label">Heart Rate</span>
        <span class="val">72 bpm</span>
      </div>
    </div>
    <div class="vital-card">
      <div class="icon">🩸</div>
      <div class="info">
        <span class="label">Blood Pressure</span>
        <span class="val">120/80</span>
      </div>
    </div>
  </div>
  <div class="appointments">
    <h3>Upcoming Appointments</h3>
    <div class="appt-card">
      <div class="date">Oct<br><strong>24</strong></div>
      <div class="details">
        <h4>Dr. Sarah Jenkins</h4>
        <p>General Checkup • 10:00 AM</p>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: 'Inter', sans-serif; padding: 2rem; color: #333; }
.health-dash { max-width: 800px; margin: 0 auto; }
h2 { color: #2563eb; margin-top: 0; border-bottom: 2px solid #eff6ff; padding-bottom: 1rem; }
.vitals { display: flex; gap: 1.5rem; margin: 2rem 0; }
.vital-card { flex: 1; display: flex; align-items: center; gap: 1rem; background: #eff6ff; padding: 1.5rem; border-radius: 16px; }
.vital-card .icon { font-size: 2rem; background: #fff; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center; border-radius: 12px; box-shadow: 0 4px 6px rgba(37,99,235,0.1); }
.info .label { display: block; font-size: 0.85rem; color: #64748b; font-weight: 600; text-transform: uppercase; }
.info .val { font-size: 1.5rem; font-weight: 800; color: #1e293b; }
.appointments h3 { color: #1e293b; margin-bottom: 1rem; }
.appt-card { display: flex; align-items: center; gap: 1.5rem; border: 1px solid #e2e8f0; padding: 1rem; border-radius: 12px; }
.date { background: #2563eb; color: #fff; text-align: center; padding: 0.5rem 1rem; border-radius: 8px; line-height: 1.2; }
.date strong { font-size: 1.5rem; }
.details h4 { margin: 0 0 0.25rem 0; color: #1e293b; }
.details p { margin: 0; color: #64748b; font-size: 0.9rem; }`,
    jsCode: ``
  },

  // 6. Server Monitoring
  {
    _id: "d6",
    title: "Server Monitoring Dashboard",
    slug: "server-monitoring-dashboard",
    description: "Dark-themed operations dashboard displaying server metrics.",
    category: "Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["dashboard", "server", "devops", "dark"],
    isPremium: false,
    views: 5800,
    downloads: 1600,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="server-dash">
  <div class="header">
    <h2>Cluster Status</h2>
    <span class="status online">● All Systems Operational</span>
  </div>
  <div class="grid">
    <div class="node">
      <h3>Node-Alpha</h3>
      <div class="meter"><div class="fill" style="width: 45%;"></div></div>
      <p>CPU: 45%</p>
    </div>
    <div class="node warning">
      <h3>Node-Beta</h3>
      <div class="meter"><div class="fill bg-warn" style="width: 85%;"></div></div>
      <p>CPU: 85%</p>
    </div>
    <div class="node">
      <h3>Database-Main</h3>
      <div class="meter"><div class="fill" style="width: 30%;"></div></div>
      <p>CPU: 30%</p>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #0f172a; font-family: monospace; color: #f8fafc; padding: 2rem; }
.server-dash { max-width: 900px; margin: 0 auto; }
.header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; padding-bottom: 1rem; margin-bottom: 2rem; }
h2 { margin: 0; }
.status { background: rgba(16, 185, 129, 0.1); color: #10b981; padding: 0.5rem 1rem; border-radius: 4px; font-weight: bold; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
.node { background: #1e293b; padding: 1.5rem; border-radius: 8px; border: 1px solid #334155; }
.node h3 { margin-top: 0; color: #94a3b8; }
.meter { height: 8px; background: #0f172a; border-radius: 4px; overflow: hidden; margin-bottom: 0.5rem; }
.fill { height: 100%; background: #3b82f6; }
.bg-warn { background: #f59e0b; }
.node.warning { border-color: #f59e0b; }
p { margin: 0; font-size: 0.9rem; color: #cbd5e1; }`,
    jsCode: ``
  },

  // 7. Social Media Metrics
  {
    _id: "d7",
    title: "Social Media Metrics Grid",
    slug: "social-media-metrics-grid",
    description: "Bento-grid style dashboard for tracking social performance.",
    category: "Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["dashboard", "social", "metrics", "bento"],
    isPremium: true,
    views: 8100,
    downloads: 2900,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="bento-dash">
  <div class="bento-item main">
    <h4>Total Followers</h4>
    <h2>145.2K</h2>
    <div class="chart-line"></div>
  </div>
  <div class="bento-item">
    <h4>Engagement</h4>
    <h2>5.4%</h2>
  </div>
  <div class="bento-item dark">
    <h4>New Posts</h4>
    <h2>12</h2>
  </div>
  <div class="bento-item wide">
    <h4>Top Performing Post</h4>
    <p>"10 Tips for UI Design in 2026" - 12k Likes</p>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fafafa; font-family: sans-serif; padding: 2rem; display: flex; justify-content: center; }
.bento-dash { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; max-width: 600px; width: 100%; }
.bento-item { background: #fff; border-radius: 24px; padding: 1.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: center; }
.main { grid-column: span 2; padding: 2.5rem; }
.wide { grid-column: span 2; }
.dark { background: #111; color: #fff; }
.dark h4 { color: #888; }
h4 { margin: 0 0 0.5rem 0; font-weight: 500; color: #666; font-size: 0.9rem; text-transform: uppercase; }
h2 { margin: 0; font-size: 2.5rem; font-weight: 800; }
.chart-line { height: 4px; background: linear-gradient(90deg, #3b82f6, #8b5cf6); border-radius: 2px; margin-top: 1rem; width: 100%; position: relative; }
.chart-line::after { content: ''; position: absolute; right: 0; top: -4px; width: 12px; height: 12px; background: #8b5cf6; border-radius: 50%; }
p { margin: 0; font-weight: bold; color: #333; }`,
    jsCode: ``
  },

  // 8. SaaS Billing
  {
    _id: "d8",
    title: "SaaS Billing Dashboard",
    slug: "saas-billing-dashboard",
    description: "Account settings dashboard showing current plan and usage.",
    category: "Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    tags: ["dashboard", "billing", "saas", "account"],
    isPremium: false,
    views: 4200,
    downloads: 1100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="billing-dash">
  <h2>Billing & Usage</h2>
  <div class="plan-card">
    <div class="plan-header">
      <div>
        <h3>Pro Plan</h3>
        <p>$29 / month</p>
      </div>
      <button class="upgrade-btn">Upgrade</button>
    </div>
    <div class="usage">
      <div class="usage-label"><span>API Requests</span> <span>8,500 / 10,000</span></div>
      <div class="progress-bg"><div class="progress-fill" style="width: 85%"></div></div>
    </div>
  </div>
  <h3>Recent Invoices</h3>
  <div class="invoice-list">
    <div class="invoice"><span>Oct 1, 2026</span> <span>$29.00</span> <a href="#">Download</a></div>
    <div class="invoice"><span>Sep 1, 2026</span> <span>$29.00</span> <a href="#">Download</a></div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #fff; font-family: 'Inter', sans-serif; padding: 2rem; color: #111; }
.billing-dash { max-width: 600px; margin: 0 auto; }
h2 { border-bottom: 1px solid #eee; padding-bottom: 1rem; margin-bottom: 2rem; }
.plan-card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; }
.plan-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
.plan-header h3 { margin: 0; font-size: 1.25rem; }
.plan-header p { margin: 0; color: #6b7280; }
.upgrade-btn { background: #111; color: #fff; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: bold; }
.usage-label { display: flex; justify-content: space-between; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem; }
.progress-bg { height: 8px; background: #f3f4f6; border-radius: 4px; overflow: hidden; }
.progress-fill { height: 100%; background: #3b82f6; }
h3 { font-size: 1.1rem; margin-bottom: 1rem; }
.invoice-list { border: 1px solid #e5e7eb; border-radius: 8px; }
.invoice { display: flex; justify-content: space-between; padding: 1rem; border-bottom: 1px solid #e5e7eb; font-size: 0.9rem; }
.invoice:last-child { border-bottom: none; }
.invoice a { color: #3b82f6; text-decoration: none; font-weight: 500; }`,
    jsCode: ``
  },

  // 9. LMS Student
  {
    _id: "d9",
    title: "LMS Student Dashboard",
    slug: "lms-student-dashboard",
    description: "Education portal dashboard showing course progress.",
    category: "Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    tags: ["dashboard", "education", "lms", "learning"],
    isPremium: true,
    views: 3900,
    downloads: 850,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="lms-dash">
  <div class="welcome">Welcome back, Alex! 👋</div>
  <div class="course-list">
    <div class="course-card">
      <div class="thumbnail bg-purple">UI</div>
      <div class="course-info">
        <h4>Advanced UI Design</h4>
        <div class="progress-bar"><div class="fill" style="width: 70%"></div></div>
        <p>70% Complete</p>
      </div>
      <button class="resume-btn">Resume</button>
    </div>
    <div class="course-card">
      <div class="thumbnail bg-blue">JS</div>
      <div class="course-info">
        <h4>JavaScript Mastery</h4>
        <div class="progress-bar"><div class="fill" style="width: 15%"></div></div>
        <p>15% Complete</p>
      </div>
      <button class="resume-btn">Resume</button>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #f8fafc; font-family: sans-serif; padding: 2rem; display: flex; justify-content: center; }
.lms-dash { width: 100%; max-width: 700px; }
.welcome { font-size: 1.5rem; font-weight: bold; color: #0f172a; margin-bottom: 2rem; }
.course-card { background: #fff; padding: 1.2rem; border-radius: 16px; display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.thumbnail { width: 60px; height: 60px; border-radius: 12px; display: flex; justify-content: center; align-items: center; font-weight: 900; color: #fff; font-size: 1.2rem; }
.bg-purple { background: linear-gradient(135deg, #a855f7, #7e22ce); }
.bg-blue { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
.course-info { flex: 1; }
h4 { margin: 0 0 0.5rem 0; color: #1e293b; }
.progress-bar { height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden; margin-bottom: 0.25rem; }
.fill { height: 100%; background: #10b981; }
.course-info p { margin: 0; font-size: 0.8rem; color: #64748b; }
.resume-btn { background: #f1f5f9; color: #0f172a; border: none; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.resume-btn:hover { background: #e2e8f0; }`,
    jsCode: ``
  },

  // 10. Fintech Budget
  {
    _id: "d10",
    title: "Personal Budget Dashboard",
    slug: "personal-budget-dashboard",
    description: "Fintech dashboard with circular progress rings for expense tracking.",
    category: "Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    tags: ["dashboard", "budget", "fintech", "money"],
    isPremium: false,
    views: 6600,
    downloads: 2100,
    author: "YourUI",
    createdAt: new Date().toISOString(),
    htmlCode: `<div class="budget-dash">
  <div class="ring-container">
    <div class="ring">
      <div class="inner">
        <span class="lbl">Spent</span>
        <span class="amt">$1,250</span>
      </div>
    </div>
  </div>
  <div class="expenses">
    <h3>Top Expenses</h3>
    <div class="exp-item">
      <div class="exp-icon">🛒</div>
      <div class="exp-name">Groceries</div>
      <div class="exp-val">$450</div>
    </div>
    <div class="exp-item">
      <div class="exp-icon">🎬</div>
      <div class="exp-name">Entertainment</div>
      <div class="exp-val">$120</div>
    </div>
  </div>
</div>`,
    cssCode: `body { margin: 0; background: #0f172a; font-family: 'Inter', sans-serif; color: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.budget-dash { background: #1e293b; padding: 2.5rem; border-radius: 24px; width: 320px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
.ring-container { display: flex; justify-content: center; margin-bottom: 2.5rem; }
.ring { width: 160px; height: 160px; border-radius: 50%; background: conic-gradient(#10b981 0% 65%, #334155 65% 100%); display: flex; justify-content: center; align-items: center; }
.inner { width: 140px; height: 140px; border-radius: 50%; background: #1e293b; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.lbl { color: #94a3b8; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }
.amt { font-size: 1.8rem; font-weight: 800; color: #fff; margin-top: 5px; }
h3 { margin: 0 0 1.5rem 0; font-size: 1.1rem; color: #f8fafc; }
.exp-item { display: flex; align-items: center; margin-bottom: 1rem; }
.exp-icon { width: 40px; height: 40px; background: #334155; border-radius: 10px; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; margin-right: 1rem; }
.exp-name { flex: 1; font-weight: 500; color: #e2e8f0; }
.exp-val { font-weight: 800; color: #fff; }`,
    jsCode: ``
  }
];
