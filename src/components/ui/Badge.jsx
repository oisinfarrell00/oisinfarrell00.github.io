export function Badge({ children, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark border border-primary-light/20 dark:border-primary-dark/20',
    accent: 'bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/20 dark:border-accent-dark/20',
    default: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
