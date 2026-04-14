import { Code2, Briefcase, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Code2, href: "https://github.com/oisinfarrell00", label: "GitHub" },
    {
      icon: Briefcase,
      href: "https://www.linkedin.com/in/oisin-farrell/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:contact@oisinfarrell.com", label: "Email" },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Oisin Farrell. All rights reserved.
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-sm font-medium">Back to top</span>
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
