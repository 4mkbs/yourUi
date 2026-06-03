"use client";

import Link from "next/link";
import { useState } from "react";
import { LogIn, Key, Mail, UserPlus, ArrowRight } from "lucide-react";
import { loginWithProvider, loginWithCredentials, registerWithCredentials } from "@/app/actions/auth";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-2xl tracking-tight text-white mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white font-black shadow-lg shadow-primary/20">
              YI
            </span>
            <span>Your<span className="text-primary font-semibold">UI</span></span>
          </Link>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            {isSignUp ? "Create your account" : "Unlock your design sandbox"}
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            {isSignUp ? "Join to access premium downloadable source code." : "Enter credentials to access premium downloadable source code."}
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
          <form action={isSignUp ? registerWithCredentials : loginWithCredentials} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-muted" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#0d0d14] border border-border rounded-xl text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Password
                </label>
                {!isSignUp && (
                  <a href="#" className="text-xs text-primary hover:underline">
                    Forgot Password?
                  </a>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key className="h-4 w-4 text-muted" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#0d0d14] border border-border rounded-xl text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary justify-center py-3 text-sm rounded-xl font-bold flex items-center gap-2"
            >
              {isSignUp ? (
                <>
                  <UserPlus className="w-4 h-4" />
                  Create Account
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  Sign In to Account
                </>
              )}
            </button>
          </form>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink mx-4 text-xs text-muted-foreground font-semibold uppercase tracking-wider">Or</span>
            <div className="flex-grow border-t border-border"></div>
          </div>

          <div className="space-y-3">
            <form action={loginWithProvider.bind(null, "github")}>
              <button
                type="submit"
                className="w-full py-3 bg-border/40 hover:bg-border text-white border border-border rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
              >
                Continue with GitHub
              </button>
            </form>
            <form action={loginWithProvider.bind(null, "google")}>
              <button
                type="submit"
                className="w-full py-3 bg-border/40 hover:bg-border text-white border border-border rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
              >
                Continue with Google
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary hover:underline font-semibold flex items-center justify-center gap-1 mt-1 mx-auto"
          >
            {isSignUp ? "Sign in instead" : "Create an account"}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </p>
      </div>
    </div>
  );
}
