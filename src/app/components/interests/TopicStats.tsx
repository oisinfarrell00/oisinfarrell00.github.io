interface TopicStatsProps {
  entryCount: number;
  lastUpdated: string;
  status?: string;
}

export function TopicStats({ entryCount, lastUpdated, status }: TopicStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-6 mt-10">
      <div className="border border-border rounded-lg p-6 bg-card">
        <div className="text-xs text-muted-foreground font-mono mb-2">TOTAL ENTRIES</div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-mono">{entryCount}</span>
          <span className="text-sm text-muted-foreground">documents</span>
        </div>
      </div>
      <div className="border border-border rounded-lg p-6 bg-card">
        <div className="text-xs text-muted-foreground font-mono mb-2">LAST UPDATED</div>
        <div className="text-2xl font-mono">{lastUpdated}</div>
      </div>
      <div className="border border-border rounded-lg p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
        <div className="text-xs text-accent font-mono mb-2">STATUS</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xl">{status??""}</span>
        </div>
      </div>
    </div>
  );
}
