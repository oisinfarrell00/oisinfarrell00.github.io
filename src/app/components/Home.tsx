import { Link } from "react-router";
import { ArrowRight, Calendar, ExternalLink, GitPullRequest as Github, Network as Linkedin, Bird as Twitter, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

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

const coreStack = [
  { category: "Languages", items: ["Java", "TypeScript", "Python", "SQL", "JavaScript"] },
  { category: "System Architecture", items: ["Microservices", "Event Sourcing", "DDD", "RESTful APIs"] },
  { category: "Core Frameworks", items: ["Spring Boot", "React", "Node.js", "Express"] },
  { category: "Infrastructure", items: ["Kubernetes", "Azure", "Docker", "CI/CD (GitHub Actions)"] },
  { category: "Data Systems", items: ["PostgreSQL", "Redis", "Kafka", "Elasticsearch"] },
  { category: "Reliability & Specs", items: ["JUnit", "TDD", "SonarQube", "Swagger / OpenAPI"] },
  { category: "Environment & Auth", items: ["Linux", "Git", "JWT / OAuth2", "Agile Methodologies"] }
];

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

  const socials = [
    { icon: Github, label: "GitHub", handle: "@oisinfarrell00", link: "https://github.com/oisinfarrell00" },
    { icon: Linkedin, label: "LinkedIn", handle: "/in/oisinfarrell00", link: "https://www.linkedin.com/in/oisin-farrell/" },
    { icon: Mail, label: "Email", handle: "oisin.farrell2000@gmail.com", link: "mailto:oisin.farrell2000@gmail.com" }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-16 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] -z-10" />

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

      <section className="mb-32">
        <div className="flex items-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-sm animate-pulse" />
            <h2 className="text-2xl font-mono">CONTACT_INTERFACE</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-2 space-y-6">
            <div className="border border-border rounded-lg p-8 bg-gradient-to-br from-card to-muted/20">
              <div className="mb-6">
                <div className="text-xs text-accent font-mono uppercase tracking-wider mb-2">Connect</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Open to discussing technology, economics, politics, and Irish history over a beer.
                </p>
              </div>

              <div className="space-y-3">
                {socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 border border-border rounded hover:border-accent hover:bg-accent/5 transition-all"
                    >
                      <div className="w-10 h-10 border border-border rounded flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium group-hover:text-accent transition-colors">{social.label}</div>
                        <div className="text-xs text-muted-foreground font-mono">{social.handle}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-muted/20">
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-3">Response Time</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-mono">24-48</span>
                <span className="text-sm text-muted-foreground">hours</span>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="border border-border rounded-lg p-8 bg-card">
              <div className="mb-6">
                <div className="text-xs text-accent font-mono uppercase tracking-wider mb-2">Send Message</div>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:border-accent focus:bg-muted/50 outline-none transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:border-accent focus:bg-muted/50 outline-none transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:border-accent focus:bg-muted/50 outline-none transition-all text-sm"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-muted/30 border border-border rounded focus:border-accent focus:bg-muted/50 outline-none transition-all text-sm resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-xs text-muted-foreground font-mono">
                    {formStatus === 'success' && <span className="text-green-500">✓ Message sent successfully</span>}
                    {formStatus === 'error' && <span className="text-destructive">✗ Failed to send. Please try again.</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="group flex items-center gap-2 px-6 py-3 bg-accent text-white rounded hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-sm font-medium">
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
