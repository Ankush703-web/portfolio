import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-2"
      >
        <span className="text-terminal-green/50 font-mono text-xs">//</span>
        <span className="text-terminal-green/60 font-mono text-xs tracking-widest uppercase">
          {label}
        </span>
        <div className="flex-1 border-t border-terminal-green/15" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-display text-2xl md:text-3xl font-bold text-terminal-green text-glow"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-2 text-terminal-green/50 font-mono text-sm"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
