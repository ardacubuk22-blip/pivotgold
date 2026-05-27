import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface HeroProps {
    lang: Language;
}

type LangMap = { TR: string; EN: string };

const slides: Array<{ image: string; subtitle: LangMap; heading: LangMap; cta: LangMap; link: string; accent: string }> = [
  {
        image: '/images/category-ring-2.jpg',
        subtitle: { TR: 'YEN\u0130 KOLEKS\u0130YON 2025', EN: 'NEW COLLECTION 2025' },
        heading: { TR: 'ALTIN\u0130N\n\u015e\u0130\u0130R\u0130 SANATTA', EN: 'THE POETRY\nOF GOLD' },
        cta: { TR: 'KE\u015eFET', EN: 'DISCOVER' },
        link: '/category/new',
        accent: '#B8962E',
  },
  {
        image: '/images/category-ring-4.jpg',
        subtitle: { TR: 'EL \u0130\u015e\u0130 ZANATKARL\u0130K', EN: 'HANDCRAFTED MASTERY' },
        heading: { TR: 'P\u0130RLANTA\nKOLEKS\u0130YONU', EN: 'DIAMOND\nCOLLECTION' },
        cta: { TR: 'INCELE', EN: 'EXPLORE' },
        link: '/category/diamond',
        accent: '#C8A84B',
  },
  {
        image: '/images/category-ring-5.jpg',
        subtitle: { TR: '14 AYAR ALTIN', EN: '14K GOLD JEWELRY' },
        heading: { TR: 'PIVOT GOLD\nMARKASI', EN: 'PIVOT GOLD\nBRAND' },
        cta: { TR: 'KOLEKS\u0130YONU G\u00d6R', EN: 'VIEW COLLECTION' },
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
            {/* Background images */}
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
                              <img
                                            src={s.image}
                                            alt={s.heading[lang]}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                                          />
                              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%)' }} />
                    </div>div>
                  ))}
          
            {/* Gold line decoration top */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #B8962E, #D4AF5A, #B8962E, transparent)', zIndex: 10 }} />
          
            {/* Main content */}
                <div style={{
                    position: 'absolute',
                    bottom: '100px',
                    left: '80px',
                    zIndex: 10,
                    opacity: transitioning ? 0 : 1,
                    transform: transitioning ? 'translateY(20px)' : 'translateY(0)',
                    transition: 'all 0.6s ease',
                    maxWidth: '600px',
          }}>
                        <p style={{
                      fontFamily: '"Jost", sans-serif',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#B8962E',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
          }}>
                                  <span style={{ display: 'inline-block', width: '40px', height: '1px', backgroundColor: '#B8962E' }}></span>span>
                          {slide.subtitle[lang]}
                        </p>p>
                        <h1 style={{
                      fontFamily: '"Oswald", sans-serif',
                      fontSize: 'clamp(40px, 6vw, 72px)',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      lineHeight: '1.05',
                      marginBottom: '32px',
                      whiteSpace: 'pre-line',
          }}>
                          {slide.heading[lang]}
                        </h1>h1>
                        <Link
                                    to={slide.link}
                                    style={{
                                                  display: 'inline-flex',
                                                  alignItems: 'center',
                                                  gap: '12px',
                                                  fontFamily: '"Jost", sans-serif',
                                                  fontSize: '12px',
                                                  fontWeight: 600,
                                                  letterSpacing: '0.2em',
                                                  color: '#111111',
                                                  textDecoration: 'none',
                                                  textTransform: 'uppercase',
                                                  backgroundColor: '#B8962E',
                                                  padding: '14px 32px',
                                                  transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={e => {
                                                  (e.currentTarget as HTMLElement).style.backgroundColor = '#D4AF5A';
                                                  (e.currentTarget as HTMLElement).style.letterSpacing = '0.25em';
                                    }}
                                    onMouseLeave={e => {
                                                  (e.currentTarget as HTMLElement).style.backgroundColor = '#B8962E';
                                                  (e.currentTarget as HTMLElement).style.letterSpacing = '0.2em';
                                    }}
                                  >
                          {slide.cta[lang]}
                                  <span style={{ fontSize: '16px' }}>\u2192</span>span>
                        </Link>Link>
                </div>div>
          
            {/* Slide counter - right side */}
                <div style={{ position: 'absolute', right: '40px', bottom: '100px', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                  {slides.map((_, i) => (
                      <button
                                    key={i}
                                    onClick={() => { setTransitioning(true); setTimeout(() => { setCurrent(i); setTransitioning(false); }, 300); }}
                                    style={{
                                                    width: i === current ? '2px' : '2px',
                                                    height: i === current ? '40px' : '20px',
                                                    background: i === current ? '#B8962E' : 'rgba(255,255,255,0.4)',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.4s ease',
                                                    padding: 0,
                                    }}
                                  />
                    ))}
                        <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginTop: '8px', letterSpacing: '0.1em' }}>
                          {String(current + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
                        </span>span>
                </div>div>
          
            {/* Bottom marquee */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '44px',
                    backgroundColor: 'rgba(184,150,46,0.95)',
                    zIndex: 10,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
          }}>
                        <div style={{
                      display: 'flex',
                      gap: '60px',
                      animation: 'marquee 25s linear infinite',
                      whiteSpace: 'nowrap',
          }}>
                          {[...Array(3)].map((_, i) => (
                        <span key={i} style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.25em', color: '#111111', textTransform: 'uppercase' }}>
                                      ISTANBUL &mdash; ANKARA &mdash; IZMIR &mdash; DUBAI &mdash; LONDON &mdash; NORTH CYPRUS &mdash; FREE SHIPPING OVER 500\u20BA &mdash; 14K &amp; 18K GOLD &mdash; CERTIFIED DIAMONDS &mdash; SINCE 1984 &nbsp;&nbsp;&nbsp;
                        </span>span>
                      ))}
                        </div>div>
                </div>div>
          
                <style>{`
                        @keyframes marquee {
                                  0% { transform: translateX(0); }
                                            100% { transform: translateX(-33.333%); }
                                                    }
                                                          `}</style>style>
          </section>section>
        );
};
</div>
