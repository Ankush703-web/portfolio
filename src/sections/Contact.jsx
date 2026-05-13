import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { personal } from '../lib/data';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        label="06 / contact"
        title="Open Channel"
        subtitle="$ ping ankush --protocol=message"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Terminal output */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="terminal-window"
        >
          <div className="terminal-titlebar">
            <div className="terminal-dot bg-red-500/70" />
            <div className="terminal-dot bg-yellow-400/70" />
            <div className="terminal-dot bg-green-500/70" />
            <span className="ml-3 font-mono text-terminal-green/40 text-xs">contact.sh</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-4">
            <div>
              <span className="text-terminal-amber">$</span>
              <span className="text-terminal-green ml-2">echo $CONTACT_INFO</span>
            </div>

            <div className="pl-4 space-y-3">
              <div>
                <div className="text-terminal-green/40 text-xs mb-1">// email</div>
                <button
                  onClick={copyEmail}
                  className="text-terminal-green hover:text-glow transition-all text-xs flex items-center gap-2 group"
                >
                  {personal.email}
                  <span className="text-terminal-green/30 group-hover:text-terminal-green/70 text-xs">
                    {copied ? '[copied!]' : '[copy]'}
                  </span>
                </button>
              </div>

              <div>
                <div className="text-terminal-green/40 text-xs mb-1">// phone</div>
                <a href={`tel:${personal.phone}`} className="text-terminal-green/80 hover:text-terminal-green text-xs transition-colors">
                  {personal.phone}
                </a>
              </div>

              <div>
                <div className="text-terminal-green/40 text-xs mb-1">// github</div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-cyan hover:text-cyan-glow text-xs transition-all"
                >
                  {personal.github.replace('https://', '')}
                </a>
              </div>

              <div>
                <div className="text-terminal-green/40 text-xs mb-1">// linkedin</div>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-cyan hover:text-cyan-glow text-xs transition-all"
                >
                  {personal.linkedin.replace('https://', '')}
                </a>
              </div>

              <div>
                <div className="text-terminal-green/40 text-xs mb-1">// location</div>
                <span className="text-terminal-green/60 text-xs">{personal.location}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-terminal-green/10">
              <span className="text-terminal-amber">$</span>
              <span className="text-terminal-green ml-2">
                <span className="animate-blink">█</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col justify-center"
        >
          <div className="font-mono text-xs text-terminal-green/40 mb-4 tracking-widest">
            // collaboration_request
          </div>
          <h3 className="font-display text-xl font-bold text-terminal-green mb-4 text-glow">
            Open to Opportunities
          </h3>
          <p className="font-mono text-sm text-terminal-green/60 leading-relaxed mb-6">
            Currently pursuing M.Sc. in Artificial Intelligence at Goa University while working as an Ethical Hacker Intern. Available for research collaborations, AI/ML projects, and cybersecurity consultations.
          </p>

          <div className="space-y-3">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 font-mono text-xs border border-terminal-green/40 text-terminal-green px-5 py-3 hover:bg-terminal-green hover:text-black transition-all duration-200 group w-fit"
            >
              <span className="text-terminal-green/50 group-hover:text-black transition-colors">&gt;</span>
              send_email()
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-xs border border-terminal-cyan/30 text-terminal-cyan px-5 py-3 hover:bg-terminal-cyan hover:text-black transition-all duration-200 group w-fit"
            >
              <span className="text-terminal-cyan/50 group-hover:text-black transition-colors">&gt;</span>
              view_github()
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
