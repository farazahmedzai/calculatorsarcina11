import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const routeMap: Record<string, string> = {
  "/": "Acasă",
  "/calculator-sarcina": "Calculator Sarcină",
  "/planificare-pensie": "Planificare Pensie",
  "/tipuri-pensii": "Tipuri de Pensii",
  "/legislatie-resurse": "Legislație și Resurse",
  "/blog": "Blog",
};

export function BreadcrumbNavigation() {
  const [location] = useLocation();
  
  // Don't show breadcrumbs on homepage
  if (location === "/") {
    return null;
  }

  const pathSegments = location.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Acasă", href: "/" }
  ];

  // Build breadcrumb path
  let currentPath = "";
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;
    
    // Handle blog post pages
    if (segment === "blog" && pathSegments.length > 1) {
      breadcrumbs.push({
        label: "Blog",
        href: "/blog"
      });
      return;
    }
    
    if (pathSegments[0] === "blog" && index > 0) {
      breadcrumbs.push({
        label: "Articol",
        href: currentPath,
        isActive: isLast
      });
      return;
    }

    const label = routeMap[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbs.push({
      label,
      href: currentPath,
      isActive: isLast
    });
  });

  // Generate JSON-LD structured data for breadcrumbs
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://calculatorsarcina.com${item.href}`
    }))
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd, null, 2)
        }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav 
        aria-label="Breadcrumb"
        className="bg-slate-50 border-b border-slate-200 py-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />
                )}
                {item.isActive ? (
                  <span 
                    className="text-slate-900 font-medium"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href}>
                    <span className="text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center">
                      {index === 0 && <Home className="w-4 h-4 mr-1" />}
                      {item.label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}