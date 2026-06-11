import type { LucideIcon } from "lucide-react";

interface TopicHeaderProps {
  title: string;
  icon: LucideIcon;
  description: string;
}

export function TopicHeader({ title, icon, description }: TopicHeaderProps) {
  const Icon = icon;

  return (
    <div className="mb-20">
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-start gap-6">
          <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg">
            <Icon className="w-8 h-8 text-accent" />
          </div>
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">CHANNEL ACTIVE</div>
            <h1 className="text-5xl mb-3" style={{ fontWeight: 600 }}>{title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
