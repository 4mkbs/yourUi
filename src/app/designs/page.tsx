import DesignCard from "@/components/DesignCard";
import Search from "@/components/Search";
import { CATEGORIES } from "@/lib/designs-data";
import prisma from "@/lib/db";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    filter?: string;
    page?: string;
  }>;
}

export default async function DesignsPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const q = resolvedParams.q?.toLowerCase() || "";
  const category = resolvedParams.category || "";
  const filter = resolvedParams.filter || "";
  const currentPage = parseInt(resolvedParams.page || "1", 10);
  const ITEMS_PER_PAGE = 24;

  // Query Prisma instead of filtering MOCK_DESIGNS locally
  const whereClause: any = {};

  if (q) {
    whereClause.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { description: { contains: q, mode: "insensitive" } },
      { tags: { has: q.toLowerCase() } },
    ];
  }

  if (category) {
    whereClause.category = { equals: category, mode: "insensitive" };
  }

  if (filter === "premium") {
    whereClause.isPremium = true;
  } else if (filter === "free") {
    whereClause.isPremium = false;
  }

  // Count total matching items for pagination
  const totalItems = await prisma.design.count({
    where: whereClause,
  });

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  
  // Fetch paginated data
  const paginatedDesigns = await prisma.design.findMany({
    where: whereClause,
    skip: (currentPage - 1) * ITEMS_PER_PAGE,
    take: ITEMS_PER_PAGE,
    orderBy: { createdAt: "desc" },
  });

  // Fetch distinct categories
  const distinctCats = await prisma.design.findMany({
    select: { category: true },
    distinct: ["category"],
  });
  const dbCategories = distinctCats.map(c => c.category).sort();

  return (
    <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-center max-w-3xl mx-auto mb-5">
        <h1 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">
          Explore Code Templates
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Filter through multiple design layout sets, copy pure code templates or download ZIP packages immediately.
        </p>
      </div>

      <div className="mb-6">
        <Search />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0 bg-card border border-border rounded-xl p-5">


          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Categories
            </h3>
            <div className="flex flex-col gap-1.5">
              <Link
                href="/designs"
                className={`text-sm py-1.5 px-2.5 rounded-md transition-colors ${
                  !category ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-white"
                }`}
              >
                All Categories
              </Link>
              {dbCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/designs?category=${encodeURIComponent(cat)}`}
                  className={`text-sm py-1.5 px-2.5 rounded-md transition-colors truncate ${
                    category.toLowerCase() === cat.toLowerCase()
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Designs List Grid */}
        <div className="flex-grow w-full">
          {paginatedDesigns.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {paginatedDesigns.map((design) => (
                  <DesignCard key={design.id} design={design as any} />
                ))}
              </div>
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  {currentPage > 1 && (
                    <Link
                      href={`/designs?page=${currentPage - 1}${q ? `&q=${q}` : ""}${category ? `&category=${category}` : ""}${filter ? `&filter=${filter}` : ""}`}
                      className="px-4 py-2 text-sm font-medium text-white bg-card border border-border rounded-lg hover:bg-card/80 transition-colors"
                    >
                      Previous
                    </Link>
                  )}
                  
                  <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </div>

                  {currentPage < totalPages && (
                    <Link
                      href={`/designs?page=${currentPage + 1}${q ? `&q=${q}` : ""}${category ? `&category=${category}` : ""}${filter ? `&filter=${filter}` : ""}`}
                      className="px-4 py-2 text-sm font-medium text-white bg-card border border-border rounded-lg hover:bg-card/80 transition-colors"
                    >
                      Next
                    </Link>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-card/45 border border-border rounded-xl">
              <p className="text-muted-foreground mb-4">No templates found matching your query.</p>
              <Link href="/designs" className="btn-primary inline-flex text-sm py-2 px-4">
                Reset Filters
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
