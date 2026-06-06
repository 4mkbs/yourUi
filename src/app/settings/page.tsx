"use client";

import { useState, useEffect } from "react";
import { User, Award, Mail, Settings as SettingsIcon, BarChart3 } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SettingsPage() {
  const { data: session, status } = useSession();
  
  if (status === "unauthenticated") {
    redirect("/login");
  }

  const [activeTab, setActiveTab] = useState("Profile");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    company: "",
    twitter: "",
    website: "",
    bio: "",
  });

  const [emailPrefs, setEmailPrefs] = useState({ marketing: true, community: true });
  const [passwords, setPasswords] = useState({ current: "", newPass: "" });
  const [stats, setStats] = useState({ posts: 0, favorites: 0, score: 0 });
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const { getProfile, getEmailPreferences, getUserStats } = await import("@/app/actions/profile");
        const profile = await getProfile();
        if (profile) {
          setFormData({
            name: profile.name || session?.user?.name || "",
            location: profile.location || "",
            company: profile.company || "",
            twitter: profile.twitter || "",
            website: profile.website || "",
            bio: profile.bio || "",
          });
        }
        
        const prefs = await getEmailPreferences();
        if (prefs) setEmailPrefs(prefs);

        const st = await getUserStats();
        if (st) setStats(st);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    if (session?.user) {
      loadData();
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const { updateProfile } = await import("@/app/actions/profile");
      await updateProfile(formData);
      showToast("Profile updated successfully!", "success");
    } catch (error) {
      console.error("Failed to update profile:", error);
      showToast("Failed to update profile.", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveEmail = async () => {
    setIsSaving(true);
    try {
      const { updateEmailPreferences } = await import("@/app/actions/profile");
      await updateEmailPreferences(emailPrefs);
      showToast("Email preferences saved!", "success");
    } catch (e) {
      showToast("Failed to save email preferences.", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const { changePassword } = await import("@/app/actions/profile");
      await changePassword(passwords.current, passwords.newPass);
      showToast("Password updated successfully!", "success");
      setPasswords({ current: "", newPass: "" });
    } catch (error: any) {
      showToast(error.message || "Failed to update password.", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    setIsSaving(true);
    try {
      const { deleteAccount } = await import("@/app/actions/profile");
      await deleteAccount();
      showToast("Account deleted.", "success");
      const { signOut } = await import("next-auth/react");
      await signOut({ callbackUrl: "/" });
    } catch (e) {
      showToast("Failed to delete account.", "error");
      setIsSaving(false);
    }
  };

  const sidebarLinks = [
    { name: "Profile", icon: User },
    { name: "Achievements", icon: Award },
    { name: "Email", icon: Mail },
    { name: "Account", icon: SettingsIcon },
    { name: "Stats", icon: BarChart3 },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-8 min-h-[80vh]">
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-4">
          Settings
        </h2>
        <nav className="space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.name;
            return (
              <button
                key={link.name}
                onClick={() => setActiveTab(link.name)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-all font-medium ${
                  isActive
                    ? "bg-card border border-border text-white shadow-sm"
                    : "text-muted-foreground hover:text-white hover:bg-card-hover border border-transparent"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} />
                {link.name}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="mb-6 border-b border-border pb-6">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {activeTab === "Profile" && "Personal Information"}
            {activeTab === "Achievements" && "Your Achievements"}
            {activeTab === "Email" && "Email Preferences"}
            {activeTab === "Account" && "Account Settings"}
            {activeTab === "Stats" && "Stats"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {activeTab === "Profile" && "This information will be displayed publicly on your profile."}
            {activeTab === "Achievements" && "Badges and milestones you've unlocked."}
            {activeTab === "Email" && "Manage your email notifications and subscriptions."}
            {activeTab === "Account" && "Manage your account security and deletion."}
            {activeTab === "Stats" && "Overview of your content performance."}
          </p>
        </div>

        {activeTab === "Profile" && (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-muted-foreground" />
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0d0d14] border border-border rounded-xl text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0d0d14] border border-border rounded-xl text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0d0d14] border border-border rounded-xl text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  Twitter Handle
                </label>
                <input
                  type="text"
                  value={formData.twitter}
                  onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0d0d14] border border-border rounded-xl text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  Website
                </label>
                <input
                  type="text"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0d0d14] border border-border rounded-xl text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  Bio
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0d0d14] border border-border rounded-xl text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end gap-4 border-b border-border pb-8">
              <button
                type="button"
                className="px-6 py-2.5 text-sm font-semibold text-white bg-transparent border border-border rounded-xl hover:bg-card-hover transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="btn-primary px-6 py-2.5 text-sm font-semibold rounded-xl transition-all disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "Save changes"}
              </button>
            </div>

            {/* Profile Completion Bar */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-white">Profile completion</span>
                <span className="text-sm font-bold text-white">17%</span>
              </div>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden mb-3">
                <div className="h-full bg-primary rounded-full" style={{ width: "17%" }}></div>
              </div>
              <p className="text-xs text-muted-foreground">
                Missing: Location, Company, Twitter, Blog, Bio
              </p>
            </div>
          </form>
        )}

        {activeTab === "Achievements" && (
          <div className="border border-border rounded-2xl bg-card/30 p-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No achievements yet</h3>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Keep contributing designs and interacting with the community to unlock badges.
            </p>
          </div>
        )}

        {activeTab === "Email" && (
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Email Subscriptions</h3>
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={emailPrefs.marketing}
                    onChange={(e) => setEmailPrefs({ ...emailPrefs, marketing: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-border bg-transparent text-primary focus:ring-primary" 
                  />
                  <div>
                    <p className="text-white text-sm font-medium">Marketing emails</p>
                    <p className="text-muted-foreground text-xs">Receive news about new templates and platform updates.</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={emailPrefs.community}
                    onChange={(e) => setEmailPrefs({ ...emailPrefs, community: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-border bg-transparent text-primary focus:ring-primary" 
                  />
                  <div>
                    <p className="text-white text-sm font-medium">Community activity</p>
                    <p className="text-muted-foreground text-xs">Get notified when someone comments or likes your designs.</p>
                  </div>
                </label>
              </div>
              <button 
                onClick={handleSaveEmail} 
                disabled={isSaving}
                className="btn-primary mt-6 px-6 py-2.5 text-sm font-semibold rounded-xl disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "Save preferences"}
              </button>
            </div>
          </div>
        )}

        {activeTab === "Account" && (
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Change Password</h3>
              <form className="space-y-4" onSubmit={handleChangePassword}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Current Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={passwords.current}
                    onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0d0d14] border border-border rounded-xl text-white outline-none focus:border-primary text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">New Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={passwords.newPass}
                    onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0d0d14] border border-border rounded-xl text-white outline-none focus:border-primary text-sm" 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSaving}
                  className="btn-primary px-6 py-2.5 text-sm font-semibold rounded-xl mt-2 disabled:opacity-50"
                >
                  {isSaving ? "Updating..." : "Update Password"}
                </button>
              </form>
            </div>

            <div className="border border-danger/30 bg-danger/5 rounded-xl p-6">
              <h3 className="text-danger font-bold mb-2">Danger Zone</h3>
              <p className="text-muted-foreground text-sm mb-4">Once you delete your account, there is no going back. Please be certain.</p>
              <button 
                onClick={() => setShowDeleteModal(true)}
                disabled={isSaving}
                className="bg-danger hover:bg-danger/90 text-white font-semibold py-2.5 px-6 rounded-xl text-sm transition-colors disabled:opacity-50"
              >
                {isSaving ? "Deleting..." : "Delete Account"}
              </button>
            </div>
          </div>
        )}

        {activeTab === "Stats" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0d0d14] border border-border rounded-xl p-5">
                <h4 className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">Total Posts</h4>
                <div className="text-3xl font-bold text-white">{stats.posts}</div>
              </div>
              <div className="bg-[#0d0d14] border border-border rounded-xl p-5">
                <h4 className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">Total Favorites</h4>
                <div className="text-3xl font-bold text-white">{stats.favorites}</div>
              </div>
              <div className="bg-[#0d0d14] border border-border rounded-xl p-5">
                <h4 className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">Score</h4>
                <div className="text-3xl font-bold text-white">{stats.score}</div>
              </div>
            </div>

            <div className="bg-[#0d0d14] border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-1">Favorites Over Time</h3>
              <p className="text-xs text-muted-foreground mb-8">Total favorites over the last 30 days</p>
              
              <div className="relative h-64 border-l border-b border-border/50 pl-4 pb-6 flex items-end">
                {/* Y-axis labels */}
                <div className="absolute left-[-20px] h-full flex flex-col justify-between py-6 text-xs text-muted-foreground">
                  <span>4</span>
                  <span>3</span>
                  <span>2</span>
                  <span>1</span>
                  <span>0</span>
                </div>
                
                {/* Chart Line Dummy */}
                <div className="w-full flex items-end justify-between relative">
                  <div className="absolute w-full h-[1px] bg-primary/80 bottom-0 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                  
                  {/* Point */}
                  <div className="absolute right-8 bottom-[-4px] w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20 z-10 group cursor-pointer">
                    {/* Tooltip */}
                    <div className="absolute bottom-6 right-0 translate-x-1/2 bg-[#1a1a24] border border-border px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      <p className="text-xs text-muted-foreground mb-1">{new Date().toLocaleDateString()}</p>
                      <p className="text-xs font-bold text-white">0 favorites</p>
                    </div>
                  </div>
                </div>

                {/* X-axis labels */}
                <div className="absolute bottom-[-24px] left-4 right-0 flex justify-between text-[10px] text-muted-foreground overflow-hidden">
                  <span>{new Date(Date.now() - 30 * 86400000).toLocaleDateString()}</span>
                  <span>{new Date(Date.now() - 20 * 86400000).toLocaleDateString()}</span>
                  <span>{new Date(Date.now() - 10 * 86400000).toLocaleDateString()}</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

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
        <p className="text-sm font-semibold">{toast.message}</p>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowDeleteModal(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-[#111116] border border-danger/20 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
            <div className="p-6 sm:p-8">
              <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center mb-6 border border-danger/20">
                <svg className="w-6 h-6 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Delete Account</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                This action cannot be undone. All your designs, profile data, and settings will be permanently erased from our servers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button 
                  onClick={() => setShowDeleteModal(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-transparent border border-border hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    setShowDeleteModal(false);
                    handleDeleteAccount();
                  }}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-danger hover:bg-danger/90 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                >
                  Yes, delete account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
