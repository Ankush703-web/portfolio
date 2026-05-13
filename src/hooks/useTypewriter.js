import { useState, useEffect } from 'react';

export function useTypewriter(text, speed = 40, delay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let timeout;
    let i = 0;

    timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

export function useMultiTypewriter(lines) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(true);
  }, []);

  useEffect(() => {
    if (!started || currentLine >= lines.length) return;
    const line = lines[currentLine];

    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= line.text.length) {
          setCurrentText(line.text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setVisibleLines(prev => [...prev, { ...line, text: line.text }]);
          setCurrentText('');
          setCurrentLine(c => c + 1);
        }
      }, line.type === 'cmd' ? 60 : 20);
      return () => clearInterval(interval);
    }, currentLine === 0 ? line.delay : 0);

    return () => clearTimeout(startTimeout);
  }, [started, currentLine, lines]);

  return { visibleLines, currentLine, currentText, lines };
}
