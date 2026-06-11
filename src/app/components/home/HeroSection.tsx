export function HeroSection() {
  return (
    <section className="mb-32 relative">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded text-xs font-mono text-accent mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Systematic Engineer & Thinker
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-6xl mb-6 tracking-tight" style={{ fontWeight: 600 }}>
            Oisín Farrell
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-mono leading-relaxed">
            Building awesome shit<br />
            <span className="text-accent">×</span> Exploring general economics<br />
            <span className="text-accent">×</span> Enjoying Irish history
          </p>
        </div>
        <div className="border border-border rounded p-6 bg-muted/20 font-mono text-xs space-y-2">
          <div className="text-muted-foreground">SYSTEM_UPTIME</div>
          <div className="text-2xl">99.97%</div>
          <div className="text-muted-foreground mt-3">ACTIVE_PROJECTS</div>
          <div className="text-2xl">12</div>
        </div>
      </div>
    </section>
  );
}
