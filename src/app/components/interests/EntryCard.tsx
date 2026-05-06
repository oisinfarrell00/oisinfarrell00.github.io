import { Link } from "react-router";
import { ExternalLink, FileText } from "lucide-react";

interface EntryCardProps {
  entry: {
    id: string;
    title: string;
    date: string;
    type: string;
    excerpt: string;
    status: string;
  };
  index: number;
}

export function EntryCard({ entry, index }: EntryCardProps) {
  return (
    <Link
      to={`/essay/${entry.id}`}
      className="group block border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 bg-card relative"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-8">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 h-12 border border-border rounded flex items-center justify-center font-mono text-sm text-muted-foreground group-hover:border-accent group-hover:text-accent transition-all flex-shrink-0">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl group-hover:text-accent transition-colors">{entry.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{entry.excerpt}</p>
            </div>
          </div>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-6" />
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-border/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-mono text-muted-foreground">{entry.date}</span>
            </div>
            <div className="px-2 py-1 bg-muted/50 rounded text-xs font-mono text-muted-foreground">
              {entry.type}
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-mono ${
            entry.status === "Published" || entry.status === "Complete" || entry.status === "Reviewed"
              ? "bg-accent/10 text-accent border border-accent/20"
              : "bg-muted text-muted-foreground border border-border"
          }`}>
            {entry.status}
          </div>
        </div>
      </div>
    </Link>
  );
}
