import { motion } from 'framer-motion';

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'gradient-button',
    secondary: 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-2 border-primary-light dark:border-primary-dark font-semibold px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300',
    outline: 'bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
