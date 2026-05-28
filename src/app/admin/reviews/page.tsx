"use client";

import { useEffect, useState } from "react";
import { getReviewPendingDesigns, updateDesignStatus } from "@/app/actions/designs";
import { Check, X, Code, LayoutGrid } from "lucide-react";

type Design = {
  id: string;
  userEmail: string;
  html: string;
  css: string;
  js: string;
  createdAt: Date;
};

export default function AdminReviewsPage() {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  useEffect(() => {
    async function load() {
      try {
        const data = await getReviewPendingDesigns();
        setDesigns(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleAction = async (id: string, status: "approved" | "rejected") => {
    try {
      await updateDesignStatus(id, status);
      setDesigns((prev) => prev.filter((d) => d.id !== id));
      showToast(`Design ${status}!`, "success");
    } catch (err) {
      console.error(err);
      showToast("Failed to update status.", "error");
    }
  };

  if (loading) {
    return <div className="p-8 text-white">Loading reviews...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Pending Reviews</h1>

      {designs.length === 0 ? (
        <p className="text-muted-foreground">No designs pending review.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {designs.map((design) => (
            <div key={design.id} className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Submitted by: {design.userEmail}</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(design.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAction(design.id, "rejected")}
                    className="flex items-center gap-2 px-4 py-2 bg-danger/10 text-danger hover:bg-danger hover:text-white rounded-lg transition-colors font-medium text-sm"
                  >
                    <X className="w-4 h-4" /> Reject
                  </button>
                  <button
                    onClick={() => handleAction(design.id, "approved")}
                    className="flex items-center gap-2 px-4 py-2 bg-success/10 text-success hover:bg-success hover:text-white rounded-lg transition-colors font-medium text-sm"
                  >
                    <Check className="w-4 h-4" /> Approve
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Preview */}
                <div className="border border-border rounded-lg bg-white h-64 relative overflow-hidden">
                  <iframe
                    title="preview"
                    className="w-full h-full border-none"
                    sandbox="allow-scripts"
                    srcDoc={`
                      <!DOCTYPE html>
                      <html>
                        <head>
                          <style>${design.css}</style>
                        </head>
                        <body style="margin:0; display:flex; align-items:center; justify-content:center; min-height:100vh;">
                          ${design.html}
                          <script>
                            try {
                              ${design.js}
                            } catch(e) {}
                          </script>
                        </body>
                      </html>
                    `}
                  />
                </div>

                {/* Code snippets */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4" /> HTML
                    </h4>
                    <pre className="bg-[#151515] p-3 rounded-lg text-xs text-[#d4d4d4] font-mono overflow-auto max-h-32">
                      {design.html}
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4" /> CSS
                    </h4>
                    <pre className="bg-[#151515] p-3 rounded-lg text-xs text-[#d4d4d4] font-mono overflow-auto max-h-32">
                      {design.css}
                    </pre>
                  </div>
                  {design.js && (
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                        <Code className="w-4 h-4" /> JS
                      </h4>
                      <pre className="bg-[#151515] p-3 rounded-lg text-xs text-[#d4d4d4] font-mono overflow-auto max-h-32">
                        {design.js}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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
