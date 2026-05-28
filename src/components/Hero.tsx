import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface HeroProps {
  lang: Language;
}

type LangMap = { TR: string; EN: string };

const slides = [
  {
    image: '/images/category-ring-2.jpg',
    subtitle: { TR: 'YENİ KOLEKSİYON 2025', EN: 'NEW COLLECTION 2025' },
    heading: { TR: 'ALTINİN\nŞİİRİ SANATTA', EN: 'THE POETRY\nOF GOLD' },
    cta: { TR: 'KEşFET', EN: 'DISCOVER' },
    link: '/category/new',
    accent: '#B8962E',
  },
  {
    image: '/images/category-ring-4.jpg',
    subtitle: { TR: 'EL İŞİ ZANATKARLIK', EN: 'HANDCRAFTED MASTERY' },
    heading: { TR: 'PİRLANTA\nKOLEKSİYONU', EN: 'DIAMOND\nCOLLECTION' },
    cta: { TR: 'İNCELE', EN: 'EXPLORE' },
    link: '/category/diamond',
    accent: '#C8A84B',
  },
  {
    image: '/images/category-ring-5.jpg',
    subtitle: { TR: '14 AYAR ALTIN', EN: '14K GOLD JEWELRY' },
    heading: { TR: 'PIVOT GOLD\nMARKASI', EN: 'PIVOT GOLD\nBRAND' },
    cta: { TR: 'KOLEKSİYONU GÖR', EN: 'VIEW COLLECTION' },
    link: '/category/ring',
    accent: '#B8962E',
  },
];

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setTransitioning(false);
      }, 600);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section style={{ position: 'relative', width: '100%', height: 'calc(100vh - 64px)', overflow: 'hidden', background: '#0A0A0A', minHeight: '600px' }}>
      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            opacity: current === i ? 1 : 0,
            transition: 'opacity 1.4s cubic-bezier(0.4,0,0.2,1)',
            zIndex: current === i ? 1 : 0,
          }}
        >
          <img src={s.image} alt={s.heading[lang]} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%)' }} />
        </div>
      ))}

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #B8962E, #D4AF5A, #B8962E, transparent)', zIndex: 10 }} />

      <div style={{ position: 'absolute', bottom: '100px', left: '80px', zIndex: 10, opacity: transitioning ? 0 : 1, transform: transitioning ? 'translateY(20px)' : 'translateY(0)', transition: 'all 0.6s ease', maxWidth: '600px' }}>
        <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 500, color: '#B8962E', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ display: 'inline-block', width: '40px', height: '1px', backgroundColor: '#B8962E' }}></span>
          {slide.subtitle[lang]}
        </p>
        <h1 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 500, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: '1.05', marginBottom: '32px', whiteSpace: 'pre-line' }}>
          {slide.heading[lang]}
        </h1>
        <Link
          to={slide.link}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '14px 32px', backgroundColor: 'transparent', border: '1px solid #B8962E', color: '#FFFFFF', fontFamily: '"Oswald", sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', textDecoration: 'none' }}
        >
          {slide.cta[lang]}
          <span style={{ fontSize: '10px' }}>{String.fromCharCode(0x2192)}</span>
        </Link>
      </div>

      <div style={{ position: 'absolute', right: '40px', bottom: '100px', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: '2px', height: i === current ? '32px' : '16px', backgroundColor: i === current ? '#B8962E' : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease' }} />
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '48px', backgroundColor: '#B8962E', zIndex: 10, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 20s linear infinite' }}>
          {Array(6).fill(null).map((_, i) => (
            <span key={i} style={{ fontFamily: '"Jost", sans-serif', fontSize: '10px', fontWeight: 400, color: '#111111', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '0 32px' }}>
              {lang === 'TR' ? '14 AYAR ALTIN • EL İŞİ • SERBEST KARGO • 14 GÜN İADE •' : '14K GOLD • HANDCRAFTED • FREE SHIPPING • 14 DAY RETURN •'}
            </span>
          ))}
        </div>
      </div>

      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </section>
  );
};

export default Hero;
