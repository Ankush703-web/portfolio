import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { certifications } from '../lib/data';

const typeColors = {
  ai: 'text-terminal-green border-terminal-green/30',
  security: 'text-terminal-red border-red-400/30',
  cloud: 'text-terminal-cyan border-terminal-cyan/30',
  iot: 'text-terminal-amber border-terminal-amber/30',
  science: 'text-terminal-green/70 border-terminal-green/20',
  dev: 'text-terminal-cyan/70 border-terminal-cyan/20',
};

const typeLabels = {
  ai: 'AI/ML',
  security: 'SEC',
  cloud: 'CLOUD',
  iot: 'IOT',
  science: 'SCI',
  dev: 'DEV',
};

export default function Certifications() {
  const [filter, setFilter] = useState('all');

  const types = ['all', 'ai', 'security', 'cloud', 'dev', 'iot'];
  const filtered = filter === 'all' ? certifications : certifications.filter(c => c.type === filter);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        label="05 / certifications"
        title="Certification Log"
        subtitle={`$ ls -1 ~/certs/ | wc -l  →  ${certifications.length} files found`}
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {types.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`font-mono text-xs px-3 py-1 border tracking-widest uppercase transition-all duration-200 ${
              filter === t
                ? 'border-terminal-green text-terminal-green bg-terminal-green/10'
                : 'border-terminal-green/15 text-terminal-green/35 hover:border-terminal-green/30 hover:text-terminal-green/60'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {filtered.map((cert, i) => {
          const colorClass = typeColors[cert.type] || typeColors.dev;
          return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.4) }}
              className={`hover-card p-3 group`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className={`font-mono text-xs border px-1.5 py-0.5 shrink-0 ${colorClass}`}>
                  {typeLabels[cert.type] || 'CERT'}
                </span>
              </div>
              <div className="font-mono text-xs text-terminal-green/80 leading-relaxed mb-1">
                {cert.name}
              </div>
              <div className="font-mono text-xs text-terminal-green/35">
                {cert.issuer}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 terminal-window p-4"
      >
        <div className="flex flex-wrap gap-6 font-mono text-xs">
          {[
            { label: 'total', val: certifications.length, color: 'text-terminal-green' },
            { label: 'ai/ml', val: certifications.filter(c => c.type === 'ai').length, color: 'text-terminal-green' },
            { label: 'security', val: certifications.filter(c => c.type === 'security').length, color: 'text-terminal-red' },
            { label: 'cloud', val: certifications.filter(c => c.type === 'cloud').length, color: 'text-terminal-cyan' },
            { label: 'dev', val: certifications.filter(c => c.type === 'dev').length, color: 'text-terminal-amber' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-terminal-green/40">{item.label}:</span>
              <span className={`font-bold ${item.color}`}>{item.val}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
