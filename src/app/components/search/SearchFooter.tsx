export function SearchFooter() {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-muted/20">
      <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
        <span>↑↓ Navigate</span>
        <span>↵ Select</span>
        <span>ESC Close</span>
      </div>
      <div className="text-xs text-muted-foreground">Type to search...</div>
    </div>
  );
}
