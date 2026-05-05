import { EssaySection } from "./EssaySection";

export function EssayContent() {
  return (
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

        <EssaySection id="introduction" number={1} title="Introduction">
          <p className="essay-text mb-6">
            The study of market microstructure examines the process and outcomes of exchanging assets under explicit trading rules. At its core, it investigates how trading mechanisms affect price discovery, liquidity, and market efficiency. This essay explores the fundamental mechanisms through which liquidity providers operate in modern electronic markets.
          </p>
          <p className="essay-text mb-6">
            Liquidity provision represents a critical function in financial markets, enabling the continuous matching of buyers and sellers while minimizing price impact. Market makers, high-frequency trading firms, and other liquidity providers deploy sophisticated strategies to manage inventory risk while extracting value from the bid-ask spread.
          </p>
          <p className="essay-text">
            Understanding these dynamics requires examining both theoretical models and empirical evidence from contemporary trading venues. We begin by establishing a theoretical framework grounded in inventory management and adverse selection models.
          </p>
        </EssaySection>

        <EssaySection id="theoretical-framework" number={2} title="Theoretical Framework">
          <p className="essay-text mb-6">
            The canonical models of market microstructure rest on two primary pillars: inventory management and information asymmetry. The Garman (1976) model introduced the concept of inventory-based market making, where dealers adjust quotes dynamically to manage their position risk.
          </p>
          <p className="essay-text mb-6">
            In contrast, the Glosten-Milgrom (1985) framework emphasizes adverse selection, where market makers must account for the possibility of trading with informed participants. The spread compensates for both inventory holding costs and the risk of trading against superior information.
          </p>
          <p className="essay-text">
            Modern market making synthesizes these perspectives, with practitioners employing real-time risk management systems that incorporate both inventory constraints and signal processing to detect informed order flow.
          </p>
        </EssaySection>

        <EssaySection id="empirical-evidence" number={3} title="Empirical Evidence">
          <p className="essay-text mb-6">
            Recent empirical studies utilizing exchange-provided data reveal the operational reality of high-frequency market making. Analysis of order-level data demonstrates that successful market makers maintain tight inventory controls, typically reverting to neutral positions within seconds or minutes.
          </p>
          <p className="essay-text">
            The spread earned by liquidity providers has compressed dramatically with electronic trading, from multiple basis points to fractions of a basis point in liquid instruments. This compression reflects both technological advancement and intense competition among market participants.
          </p>
        </EssaySection>

        <EssaySection id="case-studies" number={4} title="Case Studies">
          <p className="essay-text">
            Examination of specific market events, such as the Flash Crash of 2010, illuminates the fragility that can emerge when liquidity provision is concentrated among a small number of algorithmic participants. These case studies underscore the systemic importance of robust market making frameworks.
          </p>
        </EssaySection>

        <EssaySection id="synthesis" number={5} title="Synthesis & Implications">
          <p className="essay-text">
            The evolution of market microstructure reflects broader trends in financial markets: technological acceleration, regulatory adaptation, and the persistent tension between efficiency and stability. Policymakers must balance the benefits of tight spreads and deep liquidity against the risks of fragility during stress periods.
          </p>
        </EssaySection>

        <EssaySection id="conclusion" number={6} title="Conclusion">
          <p className="essay-text">
            Market microstructure continues to evolve as trading technology advances and market participants develop increasingly sophisticated strategies. The fundamental tension between liquidity provision and risk management remains central to understanding modern financial markets.
          </p>
        </EssaySection>
      </div>
    </article>
  );
}
