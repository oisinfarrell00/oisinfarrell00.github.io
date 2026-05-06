import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xlgadrza', {
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

  return (
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
  );
}
