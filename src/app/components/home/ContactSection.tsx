import { ExternalLink, GitPullRequest as Github, Network as Linkedin, Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  const socials = [
    { icon: Github, label: "GitHub", handle: "@oisinfarrell00", link: "https://github.com/oisinfarrell00" },
    { icon: Linkedin, label: "LinkedIn", handle: "/in/oisinfarrell00", link: "https://www.linkedin.com/in/oisin-farrell/" },
    { icon: Mail, label: "Email", handle: "oisin.farrell2000@gmail.com", link: "mailto:oisin.farrell2000@gmail.com" }
  ];

  return (
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
