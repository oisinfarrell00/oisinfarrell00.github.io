import { Hash } from "lucide-react";

interface EssaySectionProps {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}

export function EssaySection({ id, number, title, children }: EssaySectionProps) {
  return (
    <section id={id} className="mb-20">
      <h2 className="flex items-center gap-4 text-3xl mb-8 group relative">
        <a href={`#${id}`} className="absolute -left-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <Hash className="w-6 h-6 text-accent" />
        </a>
        <span className="text-xs font-mono text-muted-foreground">{String(number).padStart(2, '0')}</span>
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}
