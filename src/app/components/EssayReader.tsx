import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, Hash } from "lucide-react";

export function EssayReader() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "theoretical-framework", title: "Theoretical Framework" },
    { id: "empirical-evidence", title: "Empirical Evidence" },
    { id: "case-studies", title: "Case Studies" },
    { id: "synthesis", title: "Synthesis & Implications" },
    { id: "conclusion", title: "Conclusion" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1600px] mx-auto flex">
        <aside className="w-80 border-r border-border sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto bg-muted/20">
          <div className="p-8">
            <Link
              to="/"
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-10 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="mb-10 pb-8 border-b border-border">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <div className="text-[10px] text-accent font-mono uppercase tracking-wider">Document Type: Essay</div>
              </div>
              <h2 className="text-xl mb-3 leading-tight">Market Microstructure and Liquidity Provision</h2>
              <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                <span>Apr 24, 2026</span>
                <span>·</span>
                <span>18 min</span>
                <span>·</span>
                <span className="text-accent">v2.1.0</span>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Navigation</div>
                <div className="text-xs text-muted-foreground font-mono">{sections.length} sections</div>
              </div>
              <nav className="space-y-1">
                {sections.map((section, idx) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(section.id);
                    }}
                    className={`group/nav flex items-center gap-3 px-3 py-2.5 text-sm rounded transition-all ${
                      activeSection === section.id
                        ? "bg-accent/10 text-accent border-l-2 border-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-l-2 border-transparent"
                    }`}
                  >
                    <span className="text-xs font-mono opacity-50">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="flex-1">{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mb-4">Metadata</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Category</span>
                  <span className="px-2 py-0.5 bg-accent/10 text-accent rounded text-xs font-mono">Economic Theory</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-xs font-mono">Published</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Read Time</span>
                  <span className="font-mono text-xs">~18 minutes</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Word Count</span>
                  <span className="font-mono text-xs">3,247</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <article className="flex-1 max-w-4xl mx-auto px-16 py-16 relative">
          <div className="absolute top-32 right-0 w-64 h-64 bg-accent/5 blur-[100px] -z-10" />

          <div className="prose-essay">
            <div className="mb-16 pb-12 border-b border-border">
              <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded text-xs font-mono text-accent mb-6">
                DEEP DIVE ANALYSIS
              </div>
              <h1 className="text-5xl mb-6 leading-tight" style={{ fontWeight: 600 }}>
                Market Microstructure and Liquidity Provision
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                An examination of the mechanisms through which liquidity providers operate in modern electronic markets, exploring both theoretical frameworks and empirical evidence.
              </p>
            </div>

            <section id="introduction" className="mb-20">
              <h2 className="flex items-center gap-4 text-3xl mb-8 group relative">
                <a href="#introduction" className="absolute -left-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Hash className="w-6 h-6 text-accent" />
                </a>
                <span className="text-xs font-mono text-muted-foreground">01</span>
                Introduction
              </h2>
              <p className="essay-text mb-6">
                The study of market microstructure examines the process and outcomes of exchanging assets under explicit trading rules. At its core, it investigates how trading mechanisms affect price discovery, liquidity, and market efficiency. This essay explores the fundamental mechanisms through which liquidity providers operate in modern electronic markets.
              </p>
              <p className="essay-text mb-6">
                Liquidity provision represents a critical function in financial markets, enabling the continuous matching of buyers and sellers while minimizing price impact. Market makers, high-frequency trading firms, and other liquidity providers deploy sophisticated strategies to manage inventory risk while extracting value from the bid-ask spread.
              </p>
              <p className="essay-text">
                Understanding these dynamics requires examining both theoretical models and empirical evidence from contemporary trading venues. We begin by establishing a theoretical framework grounded in inventory management and adverse selection models.
              </p>
            </section>

            <section id="theoretical-framework" className="mb-20">
              <h2 className="flex items-center gap-4 text-3xl mb-8 group relative">
                <a href="#theoretical-framework" className="absolute -left-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Hash className="w-6 h-6 text-accent" />
                </a>
                <span className="text-xs font-mono text-muted-foreground">02</span>
                Theoretical Framework
              </h2>
              <p className="essay-text mb-6">
                The canonical models of market microstructure rest on two primary pillars: inventory management and information asymmetry. The Garman (1976) model introduced the concept of inventory-based market making, where dealers adjust quotes dynamically to manage their position risk.
              </p>
              <p className="essay-text mb-6">
                In contrast, the Glosten-Milgrom (1985) framework emphasizes adverse selection, where market makers must account for the possibility of trading with informed participants. The spread compensates for both inventory holding costs and the risk of trading against superior information.
              </p>
              <p className="essay-text">
                Modern market making synthesizes these perspectives, with practitioners employing real-time risk management systems that incorporate both inventory constraints and signal processing to detect informed order flow.
              </p>
            </section>

            <section id="empirical-evidence" className="mb-20">
              <h2 className="flex items-center gap-4 text-3xl mb-8 group relative">
                <a href="#empirical-evidence" className="absolute -left-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Hash className="w-6 h-6 text-accent" />
                </a>
                <span className="text-xs font-mono text-muted-foreground">03</span>
                Empirical Evidence
              </h2>
              <p className="essay-text mb-6">
                Recent empirical studies utilizing exchange-provided data reveal the operational reality of high-frequency market making. Analysis of order-level data demonstrates that successful market makers maintain tight inventory controls, typically reverting to neutral positions within seconds or minutes.
              </p>
              <p className="essay-text">
                The spread earned by liquidity providers has compressed dramatically with electronic trading, from multiple basis points to fractions of a basis point in liquid instruments. This compression reflects both technological advancement and intense competition among market participants.
              </p>
            </section>

            <section id="case-studies" className="mb-20">
              <h2 className="flex items-center gap-4 text-3xl mb-8 group relative">
                <a href="#case-studies" className="absolute -left-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Hash className="w-6 h-6 text-accent" />
                </a>
                <span className="text-xs font-mono text-muted-foreground">04</span>
                Case Studies
              </h2>
              <p className="essay-text">
                Examination of specific market events, such as the Flash Crash of 2010, illuminates the fragility that can emerge when liquidity provision is concentrated among a small number of algorithmic participants. These case studies underscore the systemic importance of robust market making frameworks.
              </p>
            </section>

            <section id="synthesis" className="mb-20">
              <h2 className="flex items-center gap-4 text-3xl mb-8 group relative">
                <a href="#synthesis" className="absolute -left-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Hash className="w-6 h-6 text-accent" />
                </a>
                <span className="text-xs font-mono text-muted-foreground">05</span>
                Synthesis & Implications
              </h2>
              <p className="essay-text">
                The evolution of market microstructure reflects broader trends in financial markets: technological acceleration, regulatory adaptation, and the persistent tension between efficiency and stability. Policymakers must balance the benefits of tight spreads and deep liquidity against the risks of fragility during stress periods.
              </p>
            </section>

            <section id="conclusion" className="mb-20">
              <h2 className="flex items-center gap-4 text-3xl mb-8 group relative">
                <a href="#conclusion" className="absolute -left-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Hash className="w-6 h-6 text-accent" />
                </a>
                <span className="text-xs font-mono text-muted-foreground">06</span>
                Conclusion
              </h2>
              <p className="essay-text">
                Market microstructure continues to evolve as trading technology advances and market participants develop increasingly sophisticated strategies. The fundamental tension between liquidity provision and risk management remains central to understanding modern financial markets.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
