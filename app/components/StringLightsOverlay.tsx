'use client';

import { useEffect, useState } from 'react';

export default function StringLightsOverlay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const c = Math.max(12, Math.floor(w / 80));
      setCount(c);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', pointerEvents: 'none', zIndex: 60, opacity: 0.26 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#f59e0b',
            boxShadow: '0 0 12px rgba(245, 158, 11, 0.7)',
            transform: `translateY(${(i % 2) ? 2 : 0}px)`,
            animation: `twinkle ${2 + (i % 5) * 0.35}s ease-in-out infinite`
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
