import { useState, useEffect } from "react";
import { Search, Command } from "lucide-react";

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 px-4 py-2 bg-muted/30 border border-border rounded hover:bg-muted hover:border-accent/30 transition-all group"
      >
        <Search className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
        <span className="text-xs text-muted-foreground font-mono">Search documentation</span>
        <div className="flex items-center gap-1 ml-2 px-1.5 py-0.5 bg-background border border-border rounded text-[10px] font-mono text-muted-foreground">
          <Command className="w-2.5 h-2.5" />
          <span>K</span>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center pt-32 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-card border border-border rounded-lg shadow-2xl animate-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
              <Search className="w-5 h-5 text-accent" />
              <input
                autoFocus
                type="text"
                placeholder="Search documentation, essays, projects..."
                className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs font-mono text-muted-foreground hover:text-foreground px-2 py-1 border border-border rounded"
              >
                ESC
              </button>
            </div>

            <div className="p-3 max-h-96 overflow-y-auto">
              <div className="px-3 py-2 mb-2">
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Recent Searches</div>
              </div>

              {[
                { title: "Architecture patterns", category: "Documentation", icon: "DOC" },
                { title: "Economic theory notes", category: "Essays", icon: "ESS" },
                { title: "React optimization", category: "Projects", icon: "PRJ" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-3 px-3 py-3 hover:bg-accent/10 hover:border-l-2 hover:border-accent rounded cursor-pointer transition-all"
                >
                  <div className="w-8 h-8 border border-border rounded flex items-center justify-center text-[10px] font-mono text-muted-foreground group-hover:border-accent group-hover:text-accent transition-all flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm group-hover:text-accent transition-colors">{item.title}</div>
                    <div className="text-xs text-muted-foreground font-mono">{item.category}</div>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    ↵
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-muted/20">
              <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
              <div className="text-xs text-muted-foreground">Type to search...</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
