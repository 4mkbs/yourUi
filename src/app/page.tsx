import Link from "next/link";
import Search from "@/components/Search";
import DesignCard from "@/components/DesignCard";
import { CATEGORIES } from "@/lib/designs-data";
import prisma from "@/lib/db";
import { Sparkles, ArrowRight, ShieldCheck, Flame, Cpu, Layout, Smartphone, LayoutGrid, Users, ShoppingBag, Globe, CheckCircle2, User } from "lucide-react";
import MiniElementsGrid from "@/components/MiniElementsGrid";

export const revalidate = 3600; // SSG/ISR: Cache this page and revalidate every 1 hour

const TAGS_ROW_1 = ["Buttons", "Navbars", "Footers", "Hero Sections", "Pricing Tables", "Testimonials", "Cards", "Modals", "Forms"];
const TAGS_ROW_2 = ["Checkboxes", "Toggles", "Dropdowns", "Accordions", "Tabs", "Tooltips", "Badges", "Loaders", "Sliders"];
const TAGS_ROW_3 = ["Avatars", "Breadcrumbs", "Pagination", "Steppers", "Alerts", "Progress Bars", "Spinners", "Carousels", "Skeletons"];

const CREATORS_1 = ["@alexui", "@sarah_dev", "@johndoe", "@ui_master", "@webninja", "@frontend_queen", "@pixel_perfect", "@css_wizard", "@react_pro"];
const CREATORS_2 = ["@design_guru", "@code_ninja", "@ui_ux_expert", "@web_dev", "@frontend_dev", "@ui_designer", "@web_designer", "@creative_coder", "@code_artist"];
const CREATORS_3 = ["@ux_researcher", "@product_designer", "@web_developer", "@fullstack_dev", "@software_engineer", "@ui_engineer", "@frontend_engineer", "@web_creator", "@digital_artist"];

const BUILD_CATEGORIES = [
  { name: "SaaS Application", desc: "Dashboards, pricing, settings", icon: Layout },
  { name: "E-Commerce", desc: "Product pages, carts, checkouts", icon: ShoppingBag },
  { name: "Portfolio", desc: "Hero sections, galleries, contact", icon: User },
  { name: "Landing Page", desc: "Features, testimonials, CTA", icon: Globe },
];

const MarqueeRow = ({ items, direction = "left", isCreators = false }: { items: string[], direction?: "left" | "right", isCreators?: boolean }) => {
  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap mb-4 py-2" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
      <div className={`flex w-max gap-4 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="px-5 py-3 bg-card border border-border rounded-xl text-sm font-semibold text-muted-foreground hover:text-white hover:border-primary/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all cursor-pointer flex items-center gap-3">
            {isCreators ? (
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-[10px] text-white">
                {item.charAt(1).toUpperCase()}
              </div>
            ) : (
              <Sparkles className="w-4 h-4 text-primary/50" />
            )}
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  const latestDesigns = await prisma.design.findMany({
    take: 8,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      createdAt: true,
      views: true,
      downloads: true,
      isPremium: true,
    }
  });

  const miniElements = await prisma.design.findMany({
    where: {
      category: {
        in: ["Buttons", "Checkboxes", "Toggles", "Loaders", "Spinners"]
      }
    },
    take: 15,
    orderBy: { views: "desc" },
    select: {
      id: true,
      slug: true,
    }
  });

  return (
    <div className="relative pb-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary mb-6 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-warning" />
          Join over 300,000 developers building faster
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1] animate-fade-in-up">
          Stunning UI Components & <br />
          <span className="gradient-text-animated">Source Code Vault</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Premium, fully responsive, copy-paste layouts, templates, and full-stack modules. Save weeks of design and coding time.
        </p>

        {/* Search component */}
        <Search />

        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Browse by Element</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Navbar", "Hero", "Features", "Pricing", "Footer", "Login"].map((tag) => (
              <Link
                key={tag}
                href={`/designs?category=${encodeURIComponent(tag)}`}
                className="px-4 py-2 bg-[#12121a] hover:bg-[#1a1a28] border border-white/5 hover:border-primary/30 rounded-xl text-sm font-medium transition-all text-white shadow-sm"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MiniElementsGrid designs={miniElements} />

      {/* Big Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 pt-12 border-t border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col gap-3">
            <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter">7,357</div>
            <div className="text-base font-semibold text-muted-foreground flex items-center gap-2 md:justify-start justify-center">
              <LayoutGrid className="w-5 h-5 text-primary" /> Community-made UI elements
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter">100%</div>
            <div className="text-base font-semibold text-muted-foreground flex items-center gap-2 md:justify-start justify-center">
              <CheckCircle2 className="w-5 h-5 text-success" /> Free for personal & commercial use
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter">329,840</div>
            <div className="text-base font-semibold text-muted-foreground flex items-center gap-2 md:justify-start justify-center">
              <Users className="w-5 h-5 text-accent" /> Contributors to the community
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Tag Marquee */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Browse by Tag</h2>
          <p className="text-sm text-muted-foreground mt-2">Discover thousands of components curated by categories</p>
        </div>
        <MarqueeRow items={TAGS_ROW_1} direction="left" />
        <MarqueeRow items={TAGS_ROW_2} direction="right" />
        <MarqueeRow items={TAGS_ROW_3} direction="left" />
      </section>


      {/* Latest UI Uploads */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Cpu className="w-8 h-8 text-accent" />
              Latest UI Uploads
            </h2>
            <p className="text-sm text-muted-foreground mt-2">Recently published source files from the community</p>
          </div>
          <Link href="/designs" className="hidden sm:flex text-sm font-semibold text-primary hover:text-primary-hover items-center gap-1 px-4 py-2 bg-primary/10 rounded-xl transition-colors">
            Browse all templates
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestDesigns.map((design) => (
            <DesignCard key={design.id} design={design as any} />
          ))}
        </div>
      </section>

      {/* Browse by what you are building */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Browse by what you are building</h2>
          <p className="text-sm text-muted-foreground mt-2">Jumpstart your specific project with tailored collections</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUILD_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link key={i} href={`/designs?category=${encodeURIComponent(cat.name)}`} className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:border-primary/40 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/10 transition-colors" />
                <div className="w-12 h-12 rounded-xl bg-[#1a1a24] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">{cat.desc}</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Top Creators Marquee */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Top Creators</h2>
          <p className="text-sm text-muted-foreground mt-2">The brilliant minds behind the world's best components</p>
        </div>
        <MarqueeRow items={CREATORS_1} direction="right" isCreators={true} />
        <MarqueeRow items={CREATORS_2} direction="left" isCreators={true} />
        <MarqueeRow items={CREATORS_3} direction="right" isCreators={true} />
      </section>

    </div>
  );
}
