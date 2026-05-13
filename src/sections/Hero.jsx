import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personal, terminalLines } from '../lib/data';

function TerminalBoot() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      setDone(true);
      return;
    }

    const line = terminalLines[currentLine];
    const baseDelay = currentLine === 0 ? line.delay : 200;
    let i = 0;
    let typingInterval;

    const startTimeout = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (i <= line.text.length) {
          setCurrentText(line.text.slice(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
          setVisibleLines(prev => [...prev, line]);
          setCurrentText('');
          setCurrentLine(c => c + 1);
        }
      }, line.type === 'cmd' ? 55 : 18);
    }, baseDelay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(typingInterval);
    };
  }, [currentLine]);

  const getLineColor = (type) => {
    switch (type) {
      case 'cmd': return 'text-terminal-green';
      case 'output': return 'text-terminal-green/70';
      case 'status': return 'text-terminal-cyan/80';
      case 'cursor': return 'text-terminal-green';
      default: return 'text-terminal-green/60';
    }
  };

  const getPrompt = (type) => {
    if (type === 'cmd') return <span className="text-terminal-amber mr-1">$</span>;
    if (type === 'output') return <span className="text-terminal-green/30 mr-1">&nbsp;&nbsp;</span>;
    if (type === 'status') return <span className="text-terminal-cyan/30 mr-1">&nbsp;&nbsp;</span>;
    return null;
  };

  return (
    <div className="font-mono text-sm leading-7 min-h-[220px]">
      {visibleLines.map((line, i) => (
        <div key={i} className={`flex ${getLineColor(line.type)}`}>
          {getPrompt(line.type)}
          <span>{line.text}</span>
        </div>
      ))}
      {currentLine < terminalLines.length && (
        <div className={`flex ${getLineColor(terminalLines[currentLine]?.type)}`}>
          {getPrompt(terminalLines[currentLine]?.type)}
          <span>{currentText}</span>
          <span className="animate-blink">█</span>
        </div>
      )}
      {done && (
        <div className="text-terminal-green flex">
          <span className="text-terminal-amber mr-1">$</span>
          <span className="animate-blink">█</span>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative pt-20 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Identity */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <span className="font-mono text-xs tracking-widest text-terminal-green/50 uppercase">
              &gt; initializing profile...
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-terminal-green leading-tight mb-2"
            style={{
              textShadow: '0 0 20px rgba(0,255,65,0.5), 0 0 40px rgba(0,255,65,0.2)',
            }}
          >
            ANKUSH
            <br />
            <span className="text-terminal-cyan" style={{ textShadow: '0 0 20px rgba(0,212,255,0.5)' }}>
              UDAY NAIK
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {['AI Engineer', 'Ethical Hacker', 'Computer Vision', 'Deep Learning'].map((tag, i) => (
              <span
                key={tag}
                className="skill-tag text-xs"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-terminal-green/60 font-mono text-sm leading-relaxed max-w-lg mb-8"
          >
            {personal.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs border border-terminal-green/40 text-terminal-green px-4 py-2 hover:bg-terminal-green hover:text-black transition-all duration-200 tracking-widest uppercase"
            >
              github_profile
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs border border-terminal-cyan/40 text-terminal-cyan px-4 py-2 hover:bg-terminal-cyan hover:text-black transition-all duration-200 tracking-widest uppercase"
            >
              linkedin
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="font-mono text-xs border border-terminal-green/20 text-terminal-green/60 px-4 py-2 hover:border-terminal-green/50 hover:text-terminal-green transition-all duration-200 tracking-widest uppercase"
            >
              contact
            </a>
          </motion.div>
        </div>

        {/* Right: Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="terminal-window border-glow">
            <div className="terminal-titlebar">
              <div className="terminal-dot bg-red-500/70" />
              <div className="terminal-dot bg-yellow-400/70" />
              <div className="terminal-dot bg-green-500/70" />
              <span className="ml-3 font-mono text-terminal-green/40 text-xs">
                ankush@kali-linux: ~
              </span>
            </div>
            <div className="p-5">
              <TerminalBoot />
            </div>
          </div>

          {/* Status badges */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              { label: 'M.Sc. AI', value: 'Goa University', color: 'green' },
              { label: 'Ethical Hacker', value: 'InlignX Global', color: 'cyan' },
              { label: 'Projects', value: '5+ Built', color: 'amber' },
              { label: 'Certifications', value: '20+ Earned', color: 'green' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="terminal-window px-3 py-2"
              >
                <div className={`font-mono text-xs ${
                  item.color === 'cyan' ? 'text-terminal-cyan/60'
                  : item.color === 'amber' ? 'text-terminal-amber/60'
                  : 'text-terminal-green/60'
                }`}>
                  {item.label}
                </div>
                <div className={`font-mono text-xs font-semibold mt-0.5 ${
                  item.color === 'cyan' ? 'text-terminal-cyan'
                  : item.color === 'amber' ? 'text-terminal-amber'
                  : 'text-terminal-green'
                }`}>
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="font-mono text-xs text-terminal-green/30 tracking-widest">scroll_down</span>
        <div className="w-px h-12 bg-gradient-to-b from-terminal-green/40 to-transparent" />
      </motion.div>
    </section>
  );
}
