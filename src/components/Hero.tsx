import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

const heroImages = [
  '/images/ring-diamond-1.jpg',
  '/images/ring-red-4.jpg',
  '/images/ring-blue-1.jpg',
  '/images/ring-gold-4.jpg',
  '/images/ring-green-1.jpg',
];

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: '#000' }}>
      {heroImages.map((src, i) => (
        <div key={i} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: current === i ? 1 : 0, transition: 'opacity 1.2s ease-in-out', zIndex: current === i ? 1 : 0 }}>
          <img src={src} alt="PivotGold" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </div>
      ))}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.6rem', zIndex: 10 }}>
        {heroImages.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: current === i ? '2rem' : '0.5rem', height: '0.5rem', borderRadius: '999px', background: current === i ? '#B8962E' : 'rgba(255,255,255,0.6)', border: 'none', cursor: 'pointer', transition: 'all 0.4s ease', padding: 0 }} />
        ))}
      </div>
    </section>
  );
};
