"use client";

import { useEffect, useRef, useState } from "react";

export default function ClientIframe({ src, className }: { src: string, className?: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Yield to main thread to prevent Total Blocking Time (TBT) spikes
          setTimeout(() => {
            setShouldLoad(true);
          }, 300);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" } // Only load when within 100px of viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center bg-[#0a0a0f]">
      {!shouldLoad && (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground animate-pulse text-xs">
          Loading Preview...
        </div>
      )}
      {shouldLoad && (
        <iframe
          src={src}
          sandbox="allow-scripts"
          tabIndex={-1}
          className={className}
        />
      )}
    </div>
  );
}
