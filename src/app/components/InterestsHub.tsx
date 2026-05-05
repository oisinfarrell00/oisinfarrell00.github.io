import { Link, useParams } from "react-router";
import { ChevronLeft, ExternalLink, FileText, TrendingUp, BookOpen } from "lucide-react";

export function InterestsHub() {
  const { topic } = useParams();

  const topicData: Record<string, any> = {
    "economic-theory": {
      title: "Economic Theory",
      icon: TrendingUp,
      description: "Exploring mechanism design, game theory, and market structures",
      entries: [
        {
          id: "game-theory-market-design",
          title: "Game Theory in Market Design",
          date: "Apr 18, 2026",
          type: "Essay",
          excerpt: "How auction theory informs spectrum allocation and ad markets",
          status: "Published"
        },
        {
          id: "matching-markets",
          title: "Two-Sided Matching Markets",
          date: "Apr 10, 2026",
          type: "Notes",
          excerpt: "Gale-Shapley algorithm and applications to labor markets",
          status: "Draft"
        },
        {
          id: "information-asymmetry",
          title: "Information Asymmetry and Adverse Selection",
          date: "Mar 28, 2026",
          type: "Essay",
          excerpt: "Akerlof's Market for Lemons and modern applications",
          status: "Published"
        }
      ]
    },
    "political-analysis": {
      title: "Political Analysis",
      icon: FileText,
      description: "Intersection of economics, institutions, and political systems",
      entries: [
        {
          id: "public-choice",
          title: "Public Choice Economics",
          date: "Apr 15, 2026",
          type: "Essay",
          excerpt: "Applying economic analysis to political decision-making",
          status: "Published"
        },
        {
          id: "institutional-design",
          title: "Constitutional Political Economy",
          date: "Apr 02, 2026",
          type: "Notes",
          excerpt: "Buchanan's framework for analyzing institutional rules",
          status: "Published"
        }
      ]
    },
    "reading-archive": {
      title: "Reading Archive",
      icon: BookOpen,
      description: "Curated notes and reflections from technical literature",
      entries: [
        {
          id: "idea-factory",
          title: "The Idea Factory - Jon Gertner",
          date: "Apr 12, 2026",
          type: "Book Notes",
          excerpt: "Bell Labs and the golden age of industrial research",
          status: "Complete"
        },
        {
          id: "designing-data-intensive",
          title: "Designing Data-Intensive Applications - Martin Kleppmann",
          date: "Mar 20, 2026",
          type: "Book Notes",
          excerpt: "Distributed systems patterns and trade-offs",
          status: "Complete"
        }
      ]
    },
    "curated-media": {
      title: "Curated Media",
      icon: FileText,
      description: "Lectures, talks, and long-form interviews",
      entries: [
        {
          id: "systems-thinking-47",
          title: "Systems Thinking Podcast #47",
          date: "Apr 10, 2026",
          type: "Podcast",
          excerpt: "Conversation with Donella Meadows on leverage points",
          status: "Reviewed"
        },
        {
          id: "lex-fridman-carmack",
          title: "John Carmack on Software Engineering",
          date: "Mar 15, 2026",
          type: "Interview",
          excerpt: "Lex Fridman podcast - systems programming and optimization",
          status: "Reviewed"
        }
      ]
    }
  };

  const currentTopic = topicData[topic || ""] || topicData["economic-theory"];
  const Icon = currentTopic.icon;

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-16 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] -z-10" />

      <Link
        to="/"
        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-16 transition-colors inline-flex"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Return to Switchboard
      </Link>

      <div className="mb-20">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            <div>
              <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">CHANNEL ACTIVE</div>
              <h1 className="text-5xl mb-3" style={{ fontWeight: 600 }}>{currentTopic.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{currentTopic.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="text-xs text-muted-foreground font-mono mb-2">TOTAL ENTRIES</div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-mono">{currentTopic.entries.length}</span>
              <span className="text-sm text-muted-foreground">documents</span>
            </div>
          </div>
          <div className="border border-border rounded-lg p-6 bg-card">
            <div className="text-xs text-muted-foreground font-mono mb-2">LAST UPDATED</div>
            <div className="text-2xl font-mono">{currentTopic.entries[0]?.date}</div>
          </div>
          <div className="border border-border rounded-lg p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
            <div className="text-xs text-accent font-mono mb-2">STATUS</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xl">Active Research</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {currentTopic.entries.map((entry: any, idx: number) => (
          <Link
            key={entry.id}
            to={`/essay/${entry.id}`}
            className="group block border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 bg-card relative"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="p-8">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 border border-border rounded flex items-center justify-center font-mono text-sm text-muted-foreground group-hover:border-accent group-hover:text-accent transition-all flex-shrink-0">
                    {String(idx + 1).padStart(2, '0')}
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
        ))}
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6">
        <div className="p-8 bg-gradient-to-br from-card to-muted/20 border border-border rounded-lg">
          <div className="text-xs text-muted-foreground font-mono mb-4 uppercase tracking-wider">Archive Statistics</div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-4xl font-mono mb-1">
                {currentTopic.entries.filter((e: any) => e.status === "Published" || e.status === "Complete" || e.status === "Reviewed").length}
              </div>
              <div className="text-sm text-muted-foreground">Published</div>
            </div>
            <div>
              <div className="text-4xl font-mono mb-1">
                {currentTopic.entries.filter((e: any) => e.status === "Draft").length}
              </div>
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
                  <div className="h-full bg-accent rounded-full" style={{ width: '85%' }} />
                </div>
                <span className="text-xs font-mono text-accent">85%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Avg. Depth</span>
              <span className="text-sm font-mono">~15 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
