import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// Cache this API route heavily (SSG for API)
export const revalidate = 86400; // 24 hours

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const resolvedParams = await params;
  const design = await prisma.design.findUnique({
    where: { slug: resolvedParams.slug },
    select: { htmlCode: true, cssCode: true }
  });

  if (!design) {
    return new NextResponse("Not found", { status: 404 });
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { 
            margin: 0; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            min-height: 100vh; 
            background: transparent;
            overflow: hidden;
          }
          ${design.cssCode || ""}
        </style>
      </head>
      <body>
        ${design.htmlCode || ""}
      </body>
    </html>
  `;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=31536000",
    },
  });
}
