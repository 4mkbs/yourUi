"use client";

import { useEffect, useRef, useState } from "react";
import { RefreshCw, Play, Laptop, Smartphone } from "lucide-react";

interface LivePreviewProps {
  html: string;
  css: string;
  js: string;
}

export default function LivePreview({ html, css, js }: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [key, setKey] = useState(0);

  const srcDoc = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Live Preview</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          try {
            ${js}
          } catch (err) {
            console.error('JS Execution Error:', err);
          }
        </script>
      </body>
    </html>
  `;

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col border border-border rounded-xl bg-card/50 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-border">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-danger/80" />
          <div className="w-3 h-3 rounded-full bg-warning/80" />
          <div className="w-3 h-3 rounded-full bg-success/80" />
          <span className="text-xs text-muted-foreground ml-2 font-medium">Live Preview</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-border/40 p-0.5 rounded-lg">
            <button
              onClick={() => setDevice("desktop")}
              className={`p-1.5 rounded-md transition-colors ${
                device === "desktop" ? "bg-primary text-white" : "text-muted hover:text-white"
              }`}
              title="Desktop View"
            >
              <Laptop className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDevice("mobile")}
              className={`p-1.5 rounded-md transition-colors ${
                device === "mobile" ? "bg-primary text-white" : "text-muted hover:text-white"
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleRefresh}
            className="p-1.5 rounded-lg bg-border/40 text-muted hover:text-white hover:bg-border transition-all"
            title="Refresh Sandbox"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-[#f8fafc] flex justify-center items-center p-4 min-h-[400px] overflow-hidden relative">
        <iframe
          key={key}
          ref={iframeRef}
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          className={`w-full border-0 transition-all duration-300 bg-white shadow-xl ${
            device === "mobile" ? "max-w-[375px] h-[600px] rounded-2xl border-8 border-slate-900" : "h-[500px] rounded-lg"
          }`}
        />
      </div>
    </div>
  );
}
