"use client";

import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup"; // HTML
import { Copy, Check, Terminal, FileCode, Paintbrush } from "lucide-react";

interface CodeViewerProps {
  html: string;
  css: string;
  js: string;
  isPremium: boolean;
}

export default function CodeViewer({ html, css, js, isPremium }: CodeViewerProps) {
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [activeTab]);

  const getCodeContent = () => {
    switch (activeTab) {
      case "html":
        return html;
      case "css":
        return css;
      case "js":
        return js;
    }
  };

  const getLanguageClass = () => {
    switch (activeTab) {
      case "html":
        return "language-markup";
      case "css":
        return "language-css";
      case "js":
        return "language-javascript";
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCodeContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-viewer flex flex-col relative">
      <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-border">
        <div className="flex bg-border/40 p-0.5 rounded-lg">
          <button
            onClick={() => setActiveTab("html")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
              activeTab === "html" ? "bg-primary text-white" : "text-muted hover:text-white"
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            HTML
          </button>
          <button
            onClick={() => setActiveTab("css")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
              activeTab === "css" ? "bg-primary text-white" : "text-muted hover:text-white"
            }`}
          >
            <Paintbrush className="w-3.5 h-3.5" />
            CSS
          </button>
          <button
            onClick={() => setActiveTab("js")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
              activeTab === "js" ? "bg-primary text-white" : "text-muted hover:text-white"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            JS
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 py-1.5 px-3 bg-border/40 text-xs font-semibold text-white hover:bg-border rounded-lg border border-border transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-success" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy Code
            </>
          )}
        </button>
      </div>

      <div className="relative">
        <pre className={getLanguageClass()}>
          <code className={getLanguageClass()}>{getCodeContent()}</code>
        </pre>
      </div>
    </div>
  );
}
