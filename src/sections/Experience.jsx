import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { experience } from '../lib/data';

const typeColors = {
  ai: { dot: 'bg-terminal-green', label: 'text-terminal-green', border: 'border-terminal-green/30' },
  cybersecurity: { dot: 'bg-terminal-red', label: 'text-terminal-red', border: 'border-terminal-red/30' },
  security: { dot: 'bg-terminal-red', label: 'text-terminal-red', border: 'border-terminal-red/30' },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        label="02 / experience"
        title="Work History"
        subtitle="$ git log --all --oneline"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-terminal-green/40 via-terminal-green/20 to-transparent" />

        <div className="space-y-8 pl-12 md:pl-16">
          {experience.map((exp, i) => {
            const colors = typeColors[exp.type] || typeColors.ai;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-[2.85rem] md:-left-[3.35rem] top-5 w-3 h-3 rounded-full ${colors.dot} border border-black`}
                  style={{ boxShadow: `0 0 8px currentColor` }}
                />

                <div className={`hover-card p-5 ${colors.border}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="font-display text-sm font-bold text-terminal-green tracking-wider">
                        {exp.company}
                      </div>
                      <div className={`font-mono text-xs mt-0.5 ${colors.label}`}>
                        {exp.role}
                      </div>
                    </div>
                    <div className="font-mono text-xs text-terminal-green/40 shrink-0">
                      {exp.period}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {exp.points.map((point, j) => (
                      <div key={j} className="flex gap-2 font-mono text-xs text-terminal-green/65">
                        <span className="text-terminal-green/30 shrink-0 mt-0.5">—</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
