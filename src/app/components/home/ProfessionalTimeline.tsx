export function ProfessionalTimeline() {
  const experience = [
    {
      year: "February 2026-Present",
      role: "Product Software Engineer",
      company: "Brightflag",
      highlights: ["Leverage AI to 3x output", "Developed internal tools to help automate manual processes, saving 5+ hours/week"]
    },
    {
      year: "November 2023 - January 2026",
      role: "Technology Consultant",
      company: "Ernst & Young (EY)",
      highlights: ["Built microservices that processed 3+ million annual transactions", "Scaled system to support 13k+ users"]
    },
    {
      year: "September 2018 - June 2023",
      role: "Maths Tutor",
      company: "JustMaths.ie",
      highlights: ["Broke down complex mathematical concepts for students", "Communicated effectively to improve student performance and confidence"]
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
