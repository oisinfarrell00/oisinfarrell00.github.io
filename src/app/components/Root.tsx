import { Outlet, Link, useLocation } from "react-router";
import { GlobalSearch } from "./GlobalSearch";
import { SystemStatus } from "./SystemStatus";

export function Root() {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const path = location.pathname;
    if (path === "/") return ["Home"];
    if (path.startsWith("/essay/")) return ["Home", "Essays", "Deep Dive"];
    if (path.startsWith("/interests/")) {
      const topic = path.split("/")[2];
      return ["Home", "Interests", topic.charAt(0).toUpperCase() + topic.slice(1)];
    }
    return ["Home"];
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
          <nav className="flex items-center gap-2 font-mono text-sm">
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {idx > 0 && <span className="text-muted-foreground opacity-40">/</span>}
                <span className={`transition-colors ${
                  idx === breadcrumbs.length - 1
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground cursor-pointer"
                }`}>
                  {crumb}
                </span>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <SystemStatus />
            <div className="w-px h-6 bg-border" />
            <GlobalSearch />
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
