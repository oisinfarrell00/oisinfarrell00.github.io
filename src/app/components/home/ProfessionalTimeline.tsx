export function ProfessionalTimeline() {
  const experience = [
    {
      year: "February 2026 - Present",
      role: "Full Stack Engineer",
      company: "Brightflag",
      highlights: [
        "Diagnosed and fixed a silent data-loss bug caused by Spring @Transactional/AOP proxy behaviour, JPA optimistic locking, and MySQL isolation edge cases",
        "Built an internal FreeMarker template testing tool, replacing full invoice test-runs with a live render workbench",
        "Application Security evangelist; completed 6 SecureFlag certifications (OWASP Top 10, secure coding, supply-chain security)"
      ]
    },
    {
      year: "October 2023 - January 2026",
      role: "Java Backend Developer",
      company: "Ernst & Young (EY)",
      highlights: [
        "Improved system performance (500ms → 30ms) using Azure Redis caching and AOP-based logging",
        "Built Spring Boot microservices processing 3M+ annual transactions across 13k+ users",
        "Implemented secure API architecture using JWT authentication and RBAC"
      ]
    },
    {
      year: "September 2018 - June 2023",
      role: "Maths Tutor",
      company: "JustMaths.ie",
      highlights: [
        "Broke down complex mathematical concepts for students",
        "Communicated effectively to improve student performance and confidence"
      ]
    }
  ];

  return (
    <section className="mb-32">
      <div className="flex items-center gap-4 mb-16">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-sm" />
          <h2 className="text-2xl font-mono">PROFESSIONAL_TIMELINE</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="relative">
        <div className="absolute left-6 top-4 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="group relative border border-border hover:border-accent transition-all duration-300 rounded bg-card hover:shadow-xl hover:shadow-accent/5 p-8 ml-16"
            >
              <div className="absolute -left-16 top-10 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full border-2 border-accent bg-background group-hover:bg-accent transition-colors" />
              </div>

              <div className="absolute -top-3 left-6 flex items-center">
                <span className="text-xs font-mono text-accent bg-card px-3 py-1 border border-accent rounded shadow-sm">
                  {exp.year}
                </span>
              </div>

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl mb-1 group-hover:text-accent transition-colors">{exp.role}</h3>
                  <div className="text-muted-foreground font-mono text-sm">{exp.company}</div>
                </div>
                <div className="w-8 h-8 border border-border rounded flex items-center justify-center text-xs font-mono text-muted-foreground group-hover:border-accent group-hover:text-accent transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              <div className="grid gap-2">
                {exp.highlights.map((highlight, hidx) => (
                  <div key={hidx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
