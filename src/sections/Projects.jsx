import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../lib/data';

const filters = ['all', 'ai', 'security', 'dev'];

const typeConfig = {
  ai: { label: 'AI/ML', color: 'text-terminal-green', border: 'border-terminal-green/40', bg: 'bg-terminal-green/5' },
  security: { label: 'Security', color: 'text-terminal-red', border: 'border-terminal-red/40', bg: 'bg-red-500/5' },
  dev: { label: 'Dev', color: 'text-terminal-cyan', border: 'border-terminal-cyan/40', bg: 'bg-terminal-cyan/5' },
};

export default function Projects() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? projects : projects.filter(p => p.type === active);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        label="03 / projects"
        title="Project Index"
        subtitle="$ ls -la ~/projects/ --sort=date"
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`font-mono text-xs px-4 py-1.5 border tracking-widest uppercase transition-all duration-200 ${
              active === f
                ? 'border-terminal-green text-terminal-green bg-terminal-green/10 text-glow-sm'
                : 'border-terminal-green/20 text-terminal-green/40 hover:border-terminal-green/40 hover:text-terminal-green/70'
            }`}
          >
            {f === 'all' ? '[ all ]' : `[ ${f} ]`}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const cfg = typeConfig[project.type] || typeConfig.ai;
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className={`hover-card p-5 flex flex-col ${cfg.border} ${cfg.bg} relative overflow-hidden group`}
              >
                {/* Highlight glow */}
                {project.highlight && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-terminal-green/5 rounded-bl-full" />
                )}

                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className={`font-mono text-xs tracking-widest mb-1 ${cfg.color}`}>
                      {project.category}
                    </div>
                    <h3 className="font-display text-sm font-bold text-terminal-green leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-terminal-green/30 shrink-0">
                    {project.year}
                  </span>
                </div>

                {/* Description */}
                <p className="font-mono text-xs text-terminal-green/60 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Award badge */}
                {project.award && (
                  <div className="mb-3 px-2 py-1 border border-terminal-amber/40 bg-terminal-amber/5 font-mono text-xs text-terminal-amber">
                    ★ {project.award}
                  </div>
                )}

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map(tech => (
                    <span key={tech} className="skill-tag">{tech}</span>
                  ))}
                </div>

                {/* Hover line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity ${cfg.color}`} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
