interface SearchItemProps {
  title: string;
  category: string;
  icon: string;
}

export function SearchItem({ title, category, icon }: SearchItemProps) {
  return (
    <div className="group flex items-center gap-3 px-3 py-3 hover:bg-accent/10 hover:border-l-2 hover:border-accent rounded cursor-pointer transition-all">
      <div className="w-8 h-8 border border-border rounded flex items-center justify-center text-[10px] font-mono text-muted-foreground group-hover:border-accent group-hover:text-accent transition-all flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm group-hover:text-accent transition-colors">{title}</div>
        <div className="text-xs text-muted-foreground font-mono">{category}</div>
      </div>
      <div className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        ↵
      </div>
    </div>
  );
}
