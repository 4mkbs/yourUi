"use client";

import { useState } from "react";
import { User, Sparkles, Download, Eye, Layout, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { MOCK_DESIGNS } from "@/lib/designs-data";
import DesignCard from "@/components/DesignCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const user = {
    name: session?.user?.name || "User",
    email: session?.user?.email || "No email",
    role: "Developer",
    plan: "Free Member",
    createdAt: new Date().toISOString(),
  };

  const downloadedDesigns = MOCK_DESIGNS.slice(0, 2);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Welcome banner */}
      <div className="relative rounded-2xl overflow-hidden glass p-6 sm:p-8 border border-white/5 bg-gradient-to-br from-card via-card to-primary/5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Welcome back, {user.name}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-xl text-success">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-sm font-bold uppercase tracking-wider">{user.plan}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card & Settings info */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Membership Details
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm py-2.5 border-b border-border">
                <span className="text-muted-foreground">Status</span>
                <span className="text-success font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Active
                </span>
              </div>
              <div className="flex justify-between items-center text-sm py-2.5 border-b border-border">
                <span className="text-muted-foreground">Current Plan</span>
                <span className="text-white font-semibold">Free Tier</span>
              </div>
              <div className="flex justify-between items-center text-sm py-2.5 border-b border-border">
                <span className="text-muted-foreground">Member Since</span>
                <span className="text-white font-semibold">
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm py-2.5">
                <span className="text-muted-foreground">Billing Period</span>
                <span className="text-white font-semibold">Free</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <Link
                href="/settings"
                className="w-full py-2.5 btn-primary text-white text-xs font-semibold rounded-lg border border-transparent transition-colors text-center"
              >
                Edit Profile & Settings
              </Link>
              <Link
                href="/designs"
                className="w-full py-2.5 bg-border hover:bg-border-hover text-white text-xs font-semibold rounded-lg border border-border transition-colors text-center"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </div>

        {/* Templates list download logs */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Your Recent Downloads</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {downloadedDesigns.map((design) => (
                <DesignCard key={design._id} design={design} />
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <Layout className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="text-base font-semibold text-white mb-1">Need customized templates?</h4>
            <p className="text-xs text-muted-foreground max-w-md mx-auto mb-4">
              Submit requests for custom UI sections or component designs. Our team creates new layouts weekly!
            </p>
            <button
              onClick={() => showToast("Redirecting to design requests portal...", "success")}
              className="btn-primary text-xs py-2 px-4 rounded-lg"
            >
              Request Custom Component
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div 
        className={`fixed top-24 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border transition-all duration-500 transform ${
          toast.show ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        } ${
          toast.type === "success" ? "bg-success/10 border-success/20 text-success" : "bg-danger/10 border-danger/20 text-danger"
        }`}
      >
        {toast.type === "success" ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        )}
        <p className="text-sm font-semibold text-white">{toast.message}</p>
      </div>
    </div>
  );
}
