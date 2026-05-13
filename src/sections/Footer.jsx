export default function Footer() {
  return (
    <footer className="border-t border-terminal-green/10 py-8 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-terminal-green/30">
          <span className="text-terminal-green/50">ankush@naik</span>
          <span className="text-terminal-green/20 mx-2">~</span>
          <span>Built with Vite + React + Framer Motion</span>
        </div>
        <div className="font-mono text-xs text-terminal-green/20">
          © 2025 Ankush Uday Naik
          <span className="animate-blink text-terminal-green/40 ml-1">_</span>
        </div>
      </div>
    </footer>
  );
}
