"use client";

import { ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PremiumPage() {
  return (
    <div className="relative py-20 overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto bg-card border border-border p-8 sm:p-12 rounded-2xl shadow-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-success/10 border border-success/20 rounded-full text-xs font-bold text-success mb-6 uppercase tracking-wider mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            100% Free Launch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            All UI Templates Are <br />
            <span className="gradient-text-animated">Now Free!</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            We want to support the developer community. For our launch phase, we have disabled all paid plans. Every template, including advanced layouts and interactive dashboards, is 100% free to use and customize.
          </p>

          <Link href="/designs" className="btn-primary py-3 px-8 rounded-xl font-bold text-sm inline-block">
            Start Downloading Code
          </Link>

          {/* Guarantee statement */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-success" />
            <span>No credit card required. MIT Licensed for personal and commercial usage.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
