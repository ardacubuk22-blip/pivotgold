import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface HeroProps {
  lang: Language;
}

type LangMap = { TR: string; EN: string; DE: string; AR: string };

const slides: Array<{ image: string; heading: LangMap; cta: LangMap; link: string }> = [
  {
    image: '/images/category-ring-2.jpg',
    heading: { TR: 'YENİ KOLEKSİYON', EN: 'NEW COLLECTION', DE: 'NEUE KOLLEKTION', AR: 'مجموعة جديدة' },
    cta: { TR: 'KEŞFET', EN: 'DISCOVER', DE: 'ENTDECKEN', AR: 'اكتشف' },
    link: '/category/new',
  },
  {
    image: '/images/category-ring-4.jpg',
    heading: { TR: 'ÖZEL TASARIM', EN: 'SPECIAL DESIGN', DE: 'SONDERDESIGN', AR: 'تصميم خاص' },
    cta: { TR: 'KEŞFET', EN: 'DISCOVER', DE: 'ENTDECKEN', AR: 'اكتشف' },
    link: '/category/collection',
  },
  {
    image: '/images/category-ring-5.jpg',
    heading: { TR: 'PIVOT GOLD', EN: 'PIVOT GOLD', DE: 'PIVOT GOLD', AR: 'بيفوت جولد' },
    cta: { TR: 'KEŞFET', EN: 'DISCOVER', DE: 'ENTDECKEN', AR: 'اكتشف' },
    link: '/category/ring',
  },
];

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ position: 'relative', width: '100%', height: 'calc(100vh - 56px)', overflow: 'hidden', background: '#000' }}>
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: current === i ? 1 : 0, transition: 'opacity 1.2s ease-in-out', zIndex: current === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.heading[lang]}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
        </div>
      ))}

      {/* Text - bottom right */}
      <div style={{ position: 'absolute', bottom: '80px', right: '80px', zIndex: 10, textAlign: 'right' }}>
        <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '21px', fontWeight: 500, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0', marginBottom: '12px' }}>
          {slides[current].heading[lang]}
        </h2>
        <Link
          to={slides[current].link}
          style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px', color: '#FFFFFF', textDecoration: 'none', borderBottom: '1px solid #FFFFFF', paddingBottom: '1px', textTransform: 'uppercase' }}
        >
          {slides[current].cta[lang]}
        </Link>
      </div>

      {/* Dot indicators */}
      <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{ width: current === i ? '24px' : '8px', height: '8px', borderRadius: '4px', background: current === i ? '#FFFFFF' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.4s ease', padding: 0 }}
          />
        ))}
      </div>
    </section>
  );
};
