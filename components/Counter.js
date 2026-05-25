'use client';
import { useState, useEffect, useRef } from 'react';

export default function Counter({ target, label, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      setCount(Math.round(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center py-6 px-4">
      <div className="font-mono text-3xl md:text-4xl font-bold text-brand leading-none">
        {count.toLocaleString()}{target > 5 ? suffix : ''}
      </div>
      <div className="text-xs font-medium text-gray-400 mt-2 tracking-wide">{label}</div>
    </div>
  );
}
