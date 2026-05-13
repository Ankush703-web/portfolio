import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'certifications', label: 'certs' },
  { id: 'contact', label: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map(n => document.getElementById(n.id));
      let current = 'about';
      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 200) {
          current = section.id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-sm border-b border-terminal-green/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="font-display text-terminal-green text-sm font-bold tracking-widest text-glow hover:opacity-80 transition-opacity"
        >
          ankush<span className="text-terminal-cyan">@</span>naik
          <span className="animate-blink text-terminal-green ml-0.5">_</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              onClick={() => scrollTo(item.id)}
              className={`nav-link font-mono text-xs tracking-widest uppercase transition-all ${
                active === item.id ? 'text-terminal-green text-glow-sm' : 'text-terminal-green/50'
              }`}
            >
              {active === item.id && (
                <span className="text-terminal-green/60 mr-1">&gt;</span>
              )}
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-terminal-green font-mono text-xs border border-terminal-green/30 px-2 py-1"
        >
          {menuOpen ? '[x]' : '[=]'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/95 border-b border-terminal-green/20"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left font-mono text-xs tracking-widest uppercase py-2 border-b border-terminal-green/10 ${
                    active === item.id
                      ? 'text-terminal-green text-glow-sm'
                      : 'text-terminal-green/50'
                  }`}
                >
                  <span className="text-terminal-green/40 mr-2">$</span>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
