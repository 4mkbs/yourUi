"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { Moon, Sun, LayoutGrid, Code, Play, Save, Send } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { saveDesignDraft, submitDesignForReview } from "@/app/actions/designs";

export default function CreateDesignPage() {
  const { status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [htmlCode, setHtmlCode] = useState('<button class="button" id="myBtn">\n  Button\n</button>');
  const [cssCode, setCssCode] = useState('.button {\n  cursor: pointer;\n  padding: 10px 20px;\n  border-radius: 8px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  font-weight: bold;\n}');
  const [jsCode, setJsCode] = useState('document.getElementById("myBtn").addEventListener("click", () => {\n  alert("Button clicked!");\n});');

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const [isSaving, setIsSaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewMode, setPreviewMode] = useState<"light" | "dark">("light");
  
  const [leftWidth, setLeftWidth] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setLeftWidth(Math.max(20, Math.min(80, newWidth)));
    };

    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const srcDoc = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: sans-serif; background-color: transparent; }
            ${cssCode}
          </style>
        </head>
        <body>
          ${htmlCode}
          <script>
            try {
              ${jsCode}
            } catch (err) {
              console.error(err);
            }
          </script>
        </body>
      </html>
    `;
  }, [htmlCode, cssCode, jsCode]);

  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      await saveDesignDraft({ html: htmlCode, css: cssCode, js: jsCode });
      showToast("Draft saved successfully!", "success");
    } catch (err) {
      console.error(err);
      showToast("Failed to save draft.", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSubmitReview = async () => {
    setIsSubmitting(true);
    try {
      await submitDesignForReview({ html: htmlCode, css: cssCode, js: jsCode });
      showToast("Design submitted for review!", "success");
    } catch (err) {
      console.error(err);
      showToast("Failed to submit design.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-background select-none">
      {/* Editor Main Area */}
      <div 
        className="flex-1 flex flex-col lg:flex-row overflow-hidden border-t border-border relative"
        ref={containerRef}
      >
        {isDragging && <div className="absolute inset-0 z-50 cursor-col-resize" />}
        
        {/* Left Side: Preview area */}
        <div 
          className="flex flex-col border-r border-border relative transition-colors duration-300"
          style={{ width: `${leftWidth}%`, backgroundColor: previewMode === "light" ? "#e8e8e8" : "#0d0d14" }}
        >
          <div className="absolute top-4 right-4 flex items-center gap-3 bg-white/80 dark:bg-black/80 backdrop-blur px-3 py-1.5 rounded-xl border border-border shadow-sm text-sm font-medium text-muted-foreground z-10">
            <span>{previewMode === "light" ? "#e8e8e8" : "#0d0d14"}</span>
            <div 
              className="w-10 h-5 bg-muted/20 rounded-full flex items-center p-0.5 shadow-inner cursor-pointer transition-colors"
              onClick={() => setPreviewMode(previewMode === "light" ? "dark" : "light")}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm flex items-center justify-center transition-transform duration-300 ${previewMode === "dark" ? "translate-x-5" : "translate-x-0"}`}>
                {previewMode === "light" ? (
                  <Moon className="w-2.5 h-2.5 text-muted-foreground" />
                ) : (
                  <Sun className="w-2.5 h-2.5 text-black" />
                )}
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-center p-0 overflow-auto w-full h-full relative">
            <iframe 
              srcDoc={srcDoc}
              title="preview"
              className="w-full h-full border-none bg-transparent"
              sandbox="allow-scripts"
            />
          </div>
        </div>

        {/* Drag Handle */}
        <div 
          className="w-1 hover:w-1.5 active:w-1.5 cursor-col-resize bg-border hover:bg-primary active:bg-primary transition-all z-40 flex-shrink-0"
          onMouseDown={() => setIsDragging(true)}
        />

        {/* Right Side: Code Editor */}
        <div 
          className="flex flex-col bg-[#151515]"
          style={{ width: `calc(${100 - leftWidth}% - 4px)` }}
        >
          {/* Tabs */}
          <div className="flex border-b border-white/5 bg-[#1a1a24]">
            <button
              onClick={() => setActiveTab("html")}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors ${
                activeTab === "html" ? "bg-[#151515] text-primary border-t-2 border-primary" : "text-muted-foreground hover:text-white"
              }`}
            >
              <span className="text-[#e34c26] font-black">5</span> HTML
            </button>
            <button
              onClick={() => setActiveTab("css")}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors ${
                activeTab === "css" ? "bg-[#151515] text-primary border-t-2 border-primary" : "text-muted-foreground hover:text-white"
              }`}
            >
              <span className="text-[#264de4] font-black">3</span> CSS
            </button>
            <button
              onClick={() => setActiveTab("js")}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors ${
                activeTab === "js" ? "bg-[#151515] text-primary border-t-2 border-primary" : "text-muted-foreground hover:text-white"
              }`}
            >
              <span className="text-[#f7df1e] font-black">JS</span> JS
            </button>
          </div>

          {/* Editor TextArea */}
          <div className="flex-1 relative p-4">
            {/* Line numbers dummy */}
            <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-white/5 bg-[#151515] text-muted-foreground text-xs text-right pr-3 pt-4 font-mono select-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="mb-1 opacity-50">{i + 1}</div>
              ))}
            </div>
            
            <textarea
              className="w-full h-full bg-transparent text-[#d4d4d4] font-mono text-sm leading-relaxed outline-none resize-none pl-12"
              value={activeTab === "html" ? htmlCode : activeTab === "css" ? cssCode : jsCode}
              onChange={(e) => {
                if (activeTab === "html") setHtmlCode(e.target.value);
                else if (activeTab === "css") setCssCode(e.target.value);
                else setJsCode(e.target.value);
              }}
              spellCheck={false}
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="h-16 border-t border-border bg-[#0d0d14] flex items-center justify-between px-6 shrink-0">
        <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors">
          <LayoutGrid className="w-4 h-4" />
          Change type
        </button>

        <div className="flex items-center gap-4">
          <button 
            onClick={handleSaveDraft}
            disabled={isSaving}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors px-4 py-2 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {isSaving ? "Saving..." : "Save as a draft"}
          </button>
          <button 
            onClick={handleSubmitReview}
            disabled={isSubmitting}
            className="btn-primary flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? "Submitting..." : "Submit for review"}
          </button>
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
