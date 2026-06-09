const fs = require('fs');

const categories = [
  "Landing Page", "Portfolio", "Dashboard", "Login Page",
  "Registration Form", "Pricing Table", "Hero Section", "Navbar",
  "Footer", "E-commerce", "Blog", "SaaS", "Agency"
];

const generated = [];
let idCounter = 5;

categories.forEach(cat => {
  for (let i = 1; i <= 10; i++) {
    // Generate some random looking unsplash images by varying the number
    const imgSeed = 1618000000000 + (idCounter * 1000000) + Math.floor(Math.random() * 1000000);
    generated.push(`  {
    _id: "${idCounter++}",
    title: "${cat} Template ${i}",
    slug: "${cat.toLowerCase().replace(/ /g, '-')}-template-${i}",
    description: "A highly customizable and responsive ${cat} template built with modern web standards. Perfect for your next big project.",
    category: "${cat}",
    thumbnail: "https://images.unsplash.com/photo-${imgSeed}?auto=format&fit=crop&w=800&q=80",
    tags: ["${cat.toLowerCase()}", "modern", "responsive", "clean"],
    isPremium: ${i % 3 === 0},
    views: ${Math.floor(Math.random() * 5000) + 100},
    downloads: ${Math.floor(Math.random() * 1000) + 50},
    author: "${["YourUI", "Alex Dev", "Sarah UI", "John Code"][Math.floor(Math.random() * 4)]}",
    createdAt: "${new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString()}",
    htmlCode: \`<div class="container">\\n  <h1>${cat} Design ${i}</h1>\\n  <p>Placeholder content for ${cat}. Edit HTML/CSS to customize.</p>\\n</div>\`,
    cssCode: \`body {\\n  font-family: sans-serif;\\n  background: #0a0a0f;\\n  color: #fff;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  min-height: 100vh;\\n  margin: 0;\\n}\\n.container {\\n  padding: 2rem;\\n  background: #12121a;\\n  border-radius: 12px;\\n  border: 1px solid #1e1e2e;\\n}\`,
    jsCode: \`console.log('${cat} Design ${i} loaded.');\`
  }`);
  }
});

let originalFile = fs.readFileSync('src/lib/designs-data.ts', 'utf8');

// Find the end of the MOCK_DESIGNS array
const arrayEndIndex = originalFile.lastIndexOf('];');

if (arrayEndIndex !== -1) {
  const newFileContent = originalFile.substring(0, arrayEndIndex) + ',\n' + generated.join(',\n') + '\n];\n';
  fs.writeFileSync('src/lib/designs-data.ts', newFileContent, 'utf8');
  console.log('Successfully generated 130 mock designs.');
} else {
  console.log('Error: Could not find MOCK_DESIGNS array end.');
}
