import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { personal, education } from '../lib/data';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        label="01 / about"
        title="System Profile"
        subtitle="$ cat /etc/profile.d/ankush.conf"
      />

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <div className="terminal-dot bg-red-500/70" />
              <div className="terminal-dot bg-yellow-400/70" />
              <div className="terminal-dot bg-green-500/70" />
              <span className="ml-3 font-mono text-terminal-green/40 text-xs">profile.conf</span>
            </div>
            <div className="p-5 font-mono text-sm">
              <div className="mb-4">
                <span className="text-terminal-cyan">name</span>
                <span className="text-terminal-green/40 mx-2">=</span>
                <span className="text-terminal-amber">"{personal.name}"</span>
              </div>
              <div className="mb-4">
                <span className="text-terminal-cyan">role</span>
                <span className="text-terminal-green/40 mx-2">=</span>
                <span className="text-terminal-amber">"{personal.title}"</span>
              </div>
              <div className="mb-4">
                <span className="text-terminal-cyan">location</span>
                <span className="text-terminal-green/40 mx-2">=</span>
                <span className="text-terminal-amber">"{personal.location}"</span>
              </div>
              <div className="mb-4">
                <span className="text-terminal-cyan">email</span>
                <span className="text-terminal-green/40 mx-2">=</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-terminal-green hover:text-glow-sm transition-all"
                >
                  "{personal.email}"
                </a>
              </div>
              <div className="mb-6">
                <span className="text-terminal-cyan">focus</span>
                <span className="text-terminal-green/40 mx-2">=</span>
                <span className="text-terminal-amber">["AI", "Deep Learning", "Cybersecurity", "Computer Vision"]</span>
              </div>
              <div className="border-t border-terminal-green/10 pt-4">
                <div className="text-terminal-green/40 text-xs mb-2"># summary</div>
                <p className="text-terminal-green/70 text-xs leading-relaxed">
                  {personal.summary}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-2"
        >
          <div className="mb-3 font-mono text-xs text-terminal-green/40 tracking-widest uppercase">
            // education_log
          </div>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`hover-card p-4 ${
                  edu.status === 'active'
                    ? 'border-terminal-green/40'
                    : 'border-terminal-green/15'
                }`}
              >
                {edu.status === 'active' && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
                    <span className="font-mono text-xs text-terminal-green tracking-widest">ACTIVE</span>
                  </div>
                )}
                <div className="font-mono text-xs text-terminal-green/40 mb-1">{edu.year}</div>
                <div className="font-mono text-sm font-semibold text-terminal-green mb-1">
                  {edu.degree}
                </div>
                <div className="font-mono text-xs text-terminal-green/60 mb-2">
                  {edu.institute}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-terminal-green/40">CGPA:</span>
                  <span className={`font-mono text-xs font-semibold ${
                    edu.status === 'active' ? 'text-terminal-cyan' : 'text-terminal-amber'
                  }`}>
                    {edu.cgpa}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
