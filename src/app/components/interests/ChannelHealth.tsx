interface ChannelHealthProps {
  entries: Array<{ status: string }>, totalEntries?: number, numEntriesForCategory?: number;
}

export function ChannelHealth({ entries, totalEntries, numEntriesForCategory }: ChannelHealthProps) {
  const publishedCount = entries?.filter(
    (e: any) => e.status === "Published" || e.status === "Complete" || e.status === "Reviewed"
  ).length;

  const draftCount = entries?.filter((e: any) => e.status === "Draft").length;

  return (
    <div className="mt-16 grid grid-cols-2 gap-6">
      <div className="p-8 bg-gradient-to-br from-card to-muted/20 border border-border rounded-lg">
        <div className="text-xs text-muted-foreground font-mono mb-4 uppercase tracking-wider">Archive Statistics</div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-4xl font-mono mb-1">{publishedCount}</div>
            <div className="text-sm text-muted-foreground">Published</div>
          </div>
          <div>
            <div className="text-4xl font-mono mb-1">{draftCount}</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-lg">
        <div className="text-xs text-accent font-mono mb-4 uppercase tracking-wider">Channel Health</div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Activity Level</span>
            <div className="flex items-center gap-2">
              <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: `${Math.round(((numEntriesForCategory ?? 0) / (totalEntries || 1)) * 100)}%` }} />
              </div>
              <span className="text-xs font-mono text-accent">{Math.round(((numEntriesForCategory ?? 0) / (totalEntries || 1)) * 100)}%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Avg. Depth</span>
            <span className="text-sm font-mono">~15 min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}
