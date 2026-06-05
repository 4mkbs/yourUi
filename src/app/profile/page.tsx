"use client";

import { useState, useEffect } from "react";
import { Settings, Plus, LayoutGrid, Eye, Heart, Filter, ChevronDown, Code } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getUserDesigns } from "@/app/actions/designs";

type Design = {
  id: string;
  html: string;
  css: string;
  js: string;
  createdAt: Date;
  status: string;
};

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const [activeTab, setActiveTab] = useState("Posts");
  const tabs = ["Posts", "Variations", "In Review", "Rejected", "Drafts"];
  
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);

  const name = session?.user?.name || "User";
  const initial = name.charAt(0).toUpperCase();

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await getUserDesigns(activeTab);
        setDesigns(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [activeTab]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 min-h-[80vh]">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-6">
          <div className="w-32 h-32 rounded-2xl bg-success flex items-center justify-center text-white text-6xl font-bold shadow-lg">
            {initial}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">{name}</h1>
            <p className="text-muted-foreground mt-1">
              {name.split(" ")[0].toLowerCase()}_{Math.floor(Math.random() * 9000) + 1000}
            </p>
            <Link 
              href="/settings"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium text-white hover:bg-card transition-colors"
            >
              <Settings className="w-4 h-4" />
              Settings
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">{activeTab === "Posts" ? designs.length : 0}</span> posts
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span className="text-white font-bold">0</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            <span className="text-white font-bold">0</span>
          </div>
        </div>
      </div>

      {/* Tabs & Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "bg-white/10 text-white"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
            Favorites
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            Any Theme
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {loading ? (
        <div className="py-16 text-center text-muted-foreground">Loading designs...</div>
      ) : designs.length === 0 ? (
        /* Empty State */
        <div className="border border-border rounded-2xl bg-card/30 p-16 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 mb-6 rounded-xl border-2 border-dashed border-border flex items-center justify-center text-muted-foreground">
            <LayoutGrid className="w-8 h-8 opacity-50" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">No {activeTab} Yet</h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm leading-relaxed">
            Looks like you haven't made any {activeTab.toLowerCase()} yet. Don't worry, just click the 'Create' button and let the universe know you're out there.
          </p>
          <Link 
            href="/create"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95"
          >
            <Plus className="w-5 h-5" />
            Create
          </Link>
        </div>
      ) : (
        /* Designs Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design) => (
            <div key={design.id} className="group border border-border rounded-xl bg-card overflow-hidden hover:border-white/20 transition-all">
              <div className="h-48 bg-[#e8e8e8] relative flex items-center justify-center overflow-hidden">
                <iframe
                  title="preview"
                  className="w-full h-full border-none pointer-events-none"
                  sandbox="allow-scripts"
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <style>${design.css}</style>
                      </head>
                      <body style="margin:0; display:flex; align-items:center; justify-content:center; min-height:100vh; background: transparent;">
                        ${design.html}
                        <script>
                          try {
                            ${design.js}
                          } catch(e) {}
                        </script>
                      </body>
                    </html>
                  `}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 text-black px-4 py-2 rounded-lg font-semibold text-sm backdrop-blur flex items-center gap-2 shadow-xl">
                    <Code className="w-4 h-4" /> View Code
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium text-sm">Untitled Design</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(design.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {design.status.replace("_", " ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
