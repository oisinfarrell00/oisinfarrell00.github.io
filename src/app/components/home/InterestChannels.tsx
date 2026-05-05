import { Link } from "react-router";
import { ArrowRight, Calendar } from "lucide-react";

export function InterestChannels() {
  const interests = [
    {
      title: "Economic Theory",
      slug: "economic-theory",
      latestEntry: "Game Theory in Market Design",
      date: "Apr 18, 2026",
      description: "Exploring mechanism design and auction theory"
    },
    {
      title: "Political Analysis",
      slug: "political-analysis",
      latestEntry: "Public Choice Economics",
      date: "Apr 15, 2026",
      description: "Intersection of economics and political systems"
    },
    {
      title: "Reading Archive",
      slug: "reading-archive",
      latestEntry: "The Idea Factory - Jon Gertner",
      date: "Apr 12, 2026",
      description: "Curated notes and reflections from technical literature"
    },
    {
      title: "Projects",
      slug: "curated-media",
      latestEntry: "Systems Thinking Podcast #47",
      date: "Apr 10, 2026",
      description: "Lectures, talks, and long-form interviews"
    }
  ];

  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-sm animate-pulse" />
          <h2 className="text-2xl font-mono">SWITCHBOARD_INTERESTS</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        <div className="text-xs font-mono text-muted-foreground">4 ACTIVE CHANNELS</div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {interests.map((interest, idx) => (
          <Link
            key={idx}
            to={`/interests/${interest.slug}`}
            className="group relative border border-border rounded overflow-hidden bg-card hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-all" />

            <div className="relative p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-border rounded flex items-center justify-center font-mono text-sm text-accent group-hover:border-accent group-hover:bg-accent/10 transition-all">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl group-hover:text-accent transition-colors">{interest.title}</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>

              <div className="mb-5 pb-5 border-b border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-3 bg-accent rounded-full" />
                  <div className="text-[10px] text-accent font-mono uppercase tracking-wider">Latest Entry</div>
                </div>
                <div className="text-sm font-medium ml-3">{interest.latestEntry}</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                  <Calendar className="w-3 h-3" />
                  <span>{interest.date}</span>
                </div>
                <div className="px-2 py-1 bg-muted/50 rounded text-[10px] font-mono text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-all">
                  ACTIVE
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">{interest.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
