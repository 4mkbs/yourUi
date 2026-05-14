"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { LayoutGrid, Sparkles, Terminal, LogIn, Menu, X, LogOut, User, Plus, Bell, ChevronDown, Bookmark, Settings as SettingsIcon, MessageSquare, Bug, LogOut as LogOutIcon } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session } = useSession();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="glass sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white hover:opacity-95 transition-opacity">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black shadow-lg shadow-primary/20">
                YI
              </span>
              <span>Your<span className="text-primary font-semibold">UI</span></span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/designs" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-1.5">
                <LayoutGrid className="w-4 h-4" />
                Browse Designs
              </Link>
              {session && (
                <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <div className="flex items-center gap-4">
                <Link href="/create" className="btn-primary flex items-center gap-1.5 py-2 px-4 text-sm rounded-lg font-semibold">
                  <Plus className="w-4 h-4" />
                  Create
                </Link>
                <button className="text-muted-foreground hover:text-white transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <div className="relative" ref={dropdownRef}>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 bg-card hover:bg-card-hover border border-border px-3 py-1.5 rounded-xl transition-colors"
                  >
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-white font-medium">
                      {session.user?.name?.split(' ')[0]?.toLowerCase() || 'user'}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-success flex items-center justify-center text-white font-bold">
                      {session.user?.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-[#151515] border border-border rounded-xl shadow-xl overflow-hidden py-2 z-50">
                      <Link href="/dashboard" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-white/5 transition-colors">
                        <Sparkles className="w-4 h-4" />
                        Dashboard
                      </Link>
                      <Link href="/profile" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-white/5 transition-colors">
                        <User className="w-4 h-4" />
                        Your Profile
                      </Link>
                      <Link href="/profile" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-white/5 transition-colors">
                        <Bookmark className="w-4 h-4" />
                        Your Favorites
                      </Link>
                      <Link href="/settings" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-white/5 transition-colors">
                        <SettingsIcon className="w-4 h-4" />
                        Settings
                      </Link>
                      <div className="h-px bg-border my-2"></div>
                      <button onClick={() => setIsDropdownOpen(false)} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-white/5 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        Give feedback
                      </button>
                      <button onClick={() => setIsDropdownOpen(false)} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-white/5 transition-colors">
                        <Bug className="w-4 h-4" />
                        Report bug
                      </button>
                      <div className="px-3 py-2">
                        <Link href="https://discord.com" target="_blank" onClick={() => setIsDropdownOpen(false)} className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                          Join Discord
                        </Link>
                      </div>
                      <div className="h-px bg-border my-2"></div>
                      <button onClick={() => { setIsDropdownOpen(false); signOut(); }} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-white/5 transition-colors">
                        <LogOutIcon className="w-4 h-4" />
                        Log out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-1.5">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Link>
                <Link href="/designs" className="btn-primary flex items-center gap-1.5 py-2 px-4 text-sm rounded-lg">
                  Explore Templates
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-white hover:bg-card-hover focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/designs"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-card-hover"
          >
            Browse Designs
          </Link>
          <hr className="border-border my-2" />
          {session ? (
            <>
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-card-hover"
              >
                Dashboard
              </Link>
              <button
                onClick={() => { setIsOpen(false); signOut(); }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-card-hover"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-card-hover"
            >
              Sign In
            </Link>
          )}
          <Link
            href="/designs"
            onClick={() => setIsOpen(false)}
            className="block text-center btn-primary py-2 px-4 rounded-lg w-full text-base font-medium"
          >
            Explore Templates
          </Link>
        </div>
      )}
    </nav>
  );
}
