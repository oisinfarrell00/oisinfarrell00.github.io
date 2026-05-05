export function CoreStackDisplay() {
  const coreStack = [
    { category: "Languages", items: ["Java", "TypeScript", "Python", "SQL", "JavaScript"] },
    { category: "System Architecture", items: ["Microservices", "Event Sourcing", "DDD", "RESTful APIs"] },
    { category: "Core Frameworks", items: ["Spring Boot", "React", "Node.js", "Express"] },
    { category: "Infrastructure", items: ["Kubernetes", "Azure", "Docker", "CI/CD (GitHub Actions)"] },
    { category: "Data Systems", items: ["PostgreSQL", "Redis", "Kafka", "Elasticsearch"] },
    { category: "Reliability & Specs", items: ["JUnit", "TDD", "SonarQube", "Swagger / OpenAPI"] },
    { category: "Environment & Auth", items: ["Linux", "Git", "JWT / OAuth2", "Agile Methodologies"] }
  ];

  return (
    <section className="mb-32">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-sm" />
          <h2 className="text-2xl font-mono">CORE_STACK</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="grid grid-cols-5 gap-4">
        {coreStack.map((stack, idx) => (
          <div key={idx} className="group border border-border rounded bg-gradient-to-br from-card to-muted/20 hover:border-accent transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-all" />
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-mono text-accent uppercase tracking-wider">{stack.category}</h3>
                <div className="w-6 h-6 border border-border rounded flex items-center justify-center text-[10px] font-mono text-muted-foreground group-hover:border-accent group-hover:text-accent transition-colors">
                  {stack.items.length}
                </div>
              </div>
              <ul className="space-y-2.5">
                {stack.items.map((item, iidx) => (
                  <li key={iidx} className="flex items-center gap-2 text-sm group/item">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground group-hover/item:bg-accent transition-colors" />
                    <span className="group-hover/item:text-accent transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
