import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-black shadow-lg shadow-primary/20">
                YI
              </span>
              <span>Your<span className="text-primary font-semibold">UI</span></span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curated database of beautiful, responsive frontend components, layout designs, and source code.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/designs" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  All Designs
                </Link>
              </li>
              <li>
                <Link href="/designs?category=Landing+Page" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Landing Pages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Blog & SEO Articles
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Usage Docs
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Get Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Monetization</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Integrate custom banner ads, sponsor slots, or become an affiliate creator.
            </p>
            <div className="flex gap-2">
              <span className="text-xs px-2.5 py-1 bg-border rounded-full text-muted-foreground font-medium">AdSense Ready</span>
              <span className="text-xs px-2.5 py-1 bg-border rounded-full text-muted-foreground font-medium">Affiliates</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} YourUI. Built for UI Creators. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
