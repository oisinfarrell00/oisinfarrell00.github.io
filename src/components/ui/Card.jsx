import { motion } from 'framer-motion';

export function Card({ children, className = '', ...props }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`glass-card overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
