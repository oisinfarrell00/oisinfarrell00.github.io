import { Activity } from "lucide-react";

export function SystemStatus() {
  const currentResearch = [
    "Distributed Systems Architecture",
    "Market Microstructure Analysis",
    "TypeScript Performance Optimization"
  ];

  return (
    <div className="group relative">
      <div className="flex items-center gap-2 px-3 py-2 border border-border rounded hover:border-accent/30 hover:bg-accent/5 transition-all cursor-pointer">
        <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />
        <span className="text-xs font-mono text-muted-foreground group-hover:text-accent transition-colors">
          {currentResearch.length} Active Topics
        </span>
      </div>

      <div className="absolute top-full right-0 mt-3 w-80 bg-card border border-border rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="p-4 border-b border-border bg-muted/20">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <div className="text-xs font-mono text-accent uppercase tracking-wider">System Status</div>
          </div>
          <div className="text-sm">Current Research Topics</div>
        </div>
        <div className="p-3">
          {currentResearch.map((topic, idx) => (
            <div key={idx} className="flex items-start gap-3 px-3 py-2.5 hover:bg-muted/30 rounded transition-colors">
              <div className="w-6 h-6 border border-border rounded flex items-center justify-center text-[10px] font-mono text-muted-foreground mt-0.5 flex-shrink-0">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <span className="text-sm leading-relaxed">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
