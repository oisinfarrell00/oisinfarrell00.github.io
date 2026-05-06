import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface EssayMetadata {
  title: string;
  date: string;
  type: string;
  status: string;
  category: string;
  wordCount: number;
  readTime: number;
}

interface EssaySidebarProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  metadata?: EssayMetadata;
}

export function EssaySidebar({ sections, activeSection, onSectionClick, metadata }: EssaySidebarProps) {
  // Default values if no metadata provided
  const title = metadata?.title || "Market Microstructure and Liquidity Provision";
  const date = metadata?.date || "Apr 24, 2026";
  const type = metadata?.type || "Essay";
  const readTime = metadata?.readTime || 0;
  const category = metadata?.category || "Economic Theory";
  const status = metadata?.status || "Published";
  const wordCount = metadata?.wordCount || 0;

  return (
    <aside className="w-80 border-r border-border sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto bg-muted/20">
      <div className="p-8">
        <Link
          to="/"
          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-10 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-10 pb-8 border-b border-border">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="text-[10px] text-accent font-mono uppercase tracking-wider">Document Type: {type}</div>
          </div>
          <h2 className="text-xl mb-3 leading-tight">{title}</h2>
          <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
            <span>{date}</span>
            <span>·</span>
            <span>{readTime} min</span>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Navigation</div>
            <div className="text-xs text-muted-foreground font-mono">{sections.length} sections</div>
          </div>
          <nav className="space-y-1">
            {sections.map((section, idx) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionClick(section.id);
                }}
                className={`group/nav flex items-center gap-3 px-3 py-2.5 text-sm rounded transition-all ${
                  activeSection === section.id
                    ? "bg-accent/10 text-accent border-l-2 border-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-l-2 border-transparent"
                }`}
              >
                <span className="text-xs font-mono opacity-50">{String(idx + 1).padStart(2, '0')}</span>
                <span className="flex-1">{section.title}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mb-4">Metadata</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Category</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent rounded text-xs font-mono">{category}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  status === 'Published' || status === 'Complete' || status === 'Reviewed'
                    ? 'bg-green-500'
                    : 'bg-yellow-500'
                }`} />
                <span className="text-xs font-mono">{status}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Read Time</span>
              <span className="font-mono text-xs">~{readTime} {readTime === 1 ? 'minute' : 'minutes'}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Word Count</span>
              <span className="font-mono text-xs">{wordCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
