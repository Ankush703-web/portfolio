import { useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { skills } from '../lib/data';
import { useInView } from '../hooks/useInView';

const categoryConfig = {
  'AI / ML': { color: 'text-terminal-green', barColor: 'bg-terminal-green', icon: '>' },
  'Cybersecurity': { color: 'text-terminal-red', barColor: 'bg-red-400', icon: '#' },
  'Programming': { color: 'text-terminal-cyan', barColor: 'bg-terminal-cyan', icon: '$' },
  'Web / Systems': { color: 'text-terminal-amber', barColor: 'bg-terminal-amber', icon: '~' },
  'Cloud / Tools': { color: 'text-terminal-green/70', barColor: 'bg-terminal-green/70', icon: '%' },
};

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto" ref={ref}>
      <SectionHeader
        label="04 / skills"
        title="Technical Arsenal"
        subtitle="$ dpkg --list | grep -E 'ai|security|dev'"
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], catIdx) => {
          const cfg = categoryConfig[category] || categoryConfig['AI / ML'];
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="terminal-window p-5"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-terminal-green/10">
                <span className={`font-mono text-sm ${cfg.color}`}>{cfg.icon}</span>
                <span className={`font-mono text-xs font-semibold tracking-widest uppercase ${cfg.color}`}>
                  {category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.08 + i * 0.04 }}
                    className="skill-tag cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Visual skill meter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 terminal-window p-5"
      >
        <div className="font-mono text-xs text-terminal-green/40 mb-4 tracking-widest">
          // proficiency_matrix
        </div>
        <div className="space-y-3">
          {[
            { label: 'Deep Learning / Computer Vision', val: 88, color: 'bg-terminal-green' },
            { label: 'Python / PyTorch / TensorFlow', val: 90, color: 'bg-terminal-green' },
            { label: 'Cybersecurity / OWASP', val: 78, color: 'bg-red-400' },
            { label: 'Application Security Testing', val: 72, color: 'bg-red-400' },
            { label: 'Generative AI / VAE / GAN', val: 75, color: 'bg-terminal-cyan' },
            { label: 'React / Electron / Web Dev', val: 70, color: 'bg-terminal-amber' },
            { label: 'Reinforcement Learning', val: 68, color: 'bg-terminal-cyan' },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="font-mono text-xs text-terminal-green/60 w-52 shrink-0 hidden sm:block">
                {item.label}
              </div>
              <div className="font-mono text-xs text-terminal-green/60 sm:hidden flex-1">
                {item.label}
              </div>
              <div className="flex-1 sm:flex-initial sm:w-48 progress-bar">
                <motion.div
                  className={`progress-fill ${item.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.val}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                />
              </div>
              <span className="font-mono text-xs text-terminal-green/40 w-8 text-right shrink-0">
                {item.val}%
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
