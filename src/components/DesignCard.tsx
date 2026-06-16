import Link from "next/link";
import { Eye, Download, ShieldCheck } from "lucide-react";
import { Design } from "@/lib/designs-data";
import ClientIframe from "./ClientIframe";

interface DesignCardProps {
  design: Design;
}

export default function DesignCard({ design }: DesignCardProps) {
  return (
    <div className="design-card group flex flex-col h-full">
      <Link href={`/designs/${design.slug}`} className="relative block aspect-video overflow-hidden bg-card">
        <div className="w-[200%] h-[200%] transform scale-50 origin-top-left transition-transform duration-500 group-hover:scale-[0.52]">
          <ClientIframe
            src={`/api/preview/${design.slug}`}
            className="w-full h-full border-0 pointer-events-none"
          />
        </div>
        <div className="absolute top-3 right-3 bg-success text-[#0a0a0f] font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1 shadow-lg">
          Free Template
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-xs font-semibold py-1.5 px-3 bg-primary text-white rounded-md shadow-md">
            View Live Code
          </span>
        </div>
      </Link>

      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {design.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {new Date(design.createdAt).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          <Link href={`/designs/${design.slug}`} className="block">
            <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors leading-snug line-clamp-1">
              {design.title}
            </h3>
          </Link>
        </div>

        <div className="border-t border-border mt-4 pt-4 flex items-center justify-between text-xs text-muted-foreground font-medium">
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4" />
            <span>{design.views.toLocaleString()} views</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Download className="w-4 h-4" />
            <span>{design.downloads.toLocaleString()} downloads</span>
          </div>
        </div>
      </div>
    </div>
  );
}
