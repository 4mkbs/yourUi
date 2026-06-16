# YourUI - Premium UI Component Library

YourUI is a state-of-the-art, premium UI component library and design catalog. Built with a modern tech stack, it provides highly responsive, interactive, and beautifully crafted UI components with dark mode support. Every component is displayed with live interactive previews alongside copyable source code (HTML, CSS, JS).

## 🚀 Features

- **Live Code Preview**: Dynamic sandbox environments (using iframes) to test and interact with UI elements live.
- **Vast Component Catalog**: 100+ components divided across multiple categories (Carousels, Cards, Navbars, Pricing, etc.).
- **Modern Dark-Mode Aesthetics**: Sleek, glassmorphism-inspired dark UI.
- **Code Viewer**: Easily switch between HTML, CSS, and JS tabs with one-click "Copy Code".
- **Dynamic Database Driven**: Complete backend integration using Supabase and Prisma.
- **Authentication**: Seamless Google and GitHub OAuth login via NextAuth.

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS 4
- **Backend/Database**: PostgreSQL (via Supabase), Prisma ORM
- **Authentication**: NextAuth.js (Auth.js) v5 with PrismaAdapter
- **Code Highlighting**: Prism.js
- **Package Manager**: pnpm

## 📦 Getting Started

Follow these steps to set up the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/yourui.git
cd yourui
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Set up Environment Variables
Create a `.env.local` file in the root directory and add your credentials:
```env
# Auth Secret
AUTH_SECRET="your_auth_secret_here"

# OAuth Credentials
AUTH_GITHUB_ID="your_github_id"
AUTH_GITHUB_SECRET="your_github_secret"
AUTH_GOOGLE_ID="your_google_id"
AUTH_GOOGLE_SECRET="your_google_secret"

# Supabase / Prisma DB
DATABASE_URL="postgresql://user:password@aws-pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://user:password@aws-pooler.supabase.com:5432/postgres"
```

### 4. Database Setup & Prisma Client
Push the schema to your database and generate the Prisma Client:
```bash
npx prisma db push
pnpm exec prisma generate
```
*(Optional)* You can seed the database with initial designs by running:
```bash
pnpm exec tsx prisma/seed.ts
```

### 5. Run the Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to explore YourUI.

## 📄 License
This project is licensed under the MIT License.
