import { MOCK_DESIGNS } from "@/lib/designs-data";
import LivePreview from "@/components/LivePreview";
import CodeViewer from "@/components/CodeViewer";
import { ArrowLeft, Download, Eye, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 3600; // SSG/ISR: Cache this individual page for 1 hour

interface DesignDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DesignDetailsPage({ params }: DesignDetailsProps) {
  const resolvedParams = await params;
  const design = MOCK_DESIGNS.find((d) => d.slug === resolvedParams.slug);

  if (!design) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Back navigation link */}
      <div className="mb-6">
        <Link
          href="/designs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all templates
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Title, Info details */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md">
              {design.category}
            </span>
            <span className="text-xs font-bold text-success uppercase tracking-wider bg-success/10 px-2.5 py-1 rounded-md">
              Free Download
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {design.title}
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            {design.description}
          </p>
        </div>

        {/* Action downloads block */}
        <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground pb-4 border-b border-border">
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                Views
              </span>
              <span className="font-semibold text-white">{design.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground pb-4 border-b border-border">
              <span className="flex items-center gap-1.5">
                <Download className="w-4 h-4" />
                Downloads
              </span>
              <span className="font-semibold text-white">{design.downloads.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground pb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Released
              </span>
              <span className="font-semibold text-white">
                {new Date(design.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <div className="space-y-3">
              <a
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                  `<!-- HTML -->\n${design.htmlCode}\n\n/* CSS */\n${design.cssCode}\n\n/* JS */\n${design.jsCode}`
                )}`}
                download={`${design.slug}.txt`}
                className="w-full btn-primary justify-center text-sm py-3 rounded-lg flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Code File
              </a>
              <p className="text-[10px] text-muted-foreground text-center">
                Free template licensed under MIT. Use directly for commercial websites.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Preview Iframe section */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">Interactive Sandbox</h2>
        <LivePreview html={design.htmlCode} css={design.cssCode} js={design.jsCode} />
      </div>

      {/* Code Editor Tabs section */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Source Code</h2>
        <CodeViewer
          html={design.htmlCode}
          css={design.cssCode}
          js={design.jsCode}
          isPremium={design.isPremium}
        />
      </div>

      {/* Ad placement bottom banner */}
      <div className="mt-16">
        <div className="w-full h-24 bg-card/40 border border-border rounded-xl flex items-center justify-center text-xs text-muted-foreground/60 tracking-widest uppercase font-medium">
          [ Sponsor Space / Ad Slot ]
        </div>
      </div>
    </div>
  );
}
