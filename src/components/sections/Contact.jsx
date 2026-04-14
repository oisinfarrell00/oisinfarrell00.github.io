import { useState } from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { Mail, Code2, Briefcase, CheckCircle, Send } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { GradientText } from "../animations/GradientText";
import { Button } from "../ui/Button";

export function Contact() {
  const [state, handleSubmit] = useForm("xlgadrza");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Code2,
      href: "https://github.com/oisinfarrell00",
      label: "GitHub",
      color: "hover:text-slate-900 dark:hover:text-slate-100",
    },
    {
      icon: Briefcase,
      href: "https://www.linkedin.com/in/oisin-farrell/",
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:contact@oisinfarrell.com",
      label: "Email",
      color: "hover:text-red-600 dark:hover:text-red-400",
    },
  ];

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 text-center"
            >
              <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2 gradient-text">
                Message Sent!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Thanks for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <Button
                onClick={() => window.location.reload()}
                variant="primary"
              >
                Send Another Message
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <GradientText>Touch</GradientText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-purple-600 dark:from-primary-dark dark:to-pink-500 mx-auto mb-8" />
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={state.submitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </Button>

                {/* Error Message */}
                {state.errors && state.errors.length > 0 && (
                  <p className="text-red-500 text-sm text-center">
                    Oops! There was an error sending your message. Please try
                    again.
                  </p>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.4}>
            <div className="space-y-6">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 transition-all hover:shadow-lg ${social.color}`}
                    >
                      <social.icon size={24} />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8">
                <h4 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                  Location
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Dublin, Ireland
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
