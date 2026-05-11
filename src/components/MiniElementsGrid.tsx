import Link from "next/link";
import { Rocket } from "lucide-react";

interface MiniElementsGridProps {
  designs?: any[];
}

export default function MiniElementsGrid({ designs = [] }: MiniElementsGridProps) {
  // We want to fill the grid nicely, so we only use up to 15 items.
  const displayDesigns = designs.slice(0, 15);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {displayDesigns.map((design) => (
          <Link 
            key={design.id} 
            href={`/designs/${design.slug}`} 
            className="group relative bg-[#0f0f13] border border-white/5 rounded-xl flex items-center justify-center p-0 hover:border-primary/50 transition-colors overflow-hidden h-[120px]"
          >
            <iframe
              srcDoc={`
                <!DOCTYPE html>
                <html>
                  <head>
                    <style>
                      /* Ensure the body acts as a dark canvas and centers the element */
                      body { 
                        margin: 0; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        height: 100vh; 
                        background: transparent;
                        overflow: hidden;
                      }
                      /* Inject design CSS */
                      ${design.cssCode}
                    </style>
                  </head>
                  <body>
                    ${design.htmlCode}
                  </body>
                </html>
              `}
              sandbox="allow-scripts"
              tabIndex={-1}
              className="w-[200%] h-[200%] border-0 pointer-events-none transform scale-50 origin-center"
            />
          </Link>
        ))}

      </div>

      {/* Fade overlay & Button */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent flex items-end justify-center pb-8 pointer-events-none">
        <Link href="/designs" className="pointer-events-auto bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all hover:scale-105">
          <Rocket className="w-4 h-4" />
          Browse all elements
        </Link>
      </div>
    </div>
  );
}
