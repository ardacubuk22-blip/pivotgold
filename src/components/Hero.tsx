import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface HeroProps {
      lang: Language;
}

const heroMedia = [
    { type: 'image', src: '/pivotgold/images/ring-diamond-1.jpg' },
    { type: 'image', src: '/pivotgold/images/ring-red-4.jpg' },
    { type: 'image', src: '/pivotgold/images/ring-blue-1.jpg' },
    { type: 'image', src: '/pivotgold/images/ring-gold-4.jpg' },
    { type: 'image', src: '/pivotgold/images/ring-green-1.jpg' },
    ];

export const Hero: React.FC<HeroProps> = ({ lang }) => {
      const [current, setCurrent] = useState(0);

      useEffect(() => {
              const interval = setInterval(() => {
                        setCurrent((prev) => (prev + 1) % heroMedia.length);
              }, 4000);
              return () => clearInterval(interval);
      }, []);

      return (
              <section
                        style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100vh',
                                    overflow: 'hidden',
                                    background: '#000',
                        }}
                      >
                  {heroMedia.map((item, i) => (
                                  <div
                                                key={i}
                                                style={{
                                                                position: 'absolute',
                                                                inset: 0,
                                                                opacity: current === i ? 1 : 0,
                                                                transition: 'opacity 1.2s ease-in-out',
                                                                zIndex: current === i ? 1 : 0,
                                                }}
                                              >
                                            <img
                                                            src={item.src}
                                                            alt="PivotGold"
                                                            style={{
                                                                              width: '100%',
                                                                              height: '100%',
                                                                              objectFit: 'cover',
                                                                              objectPosition: 'center',
                                                                              display: 'block',
                                                            }}
                                                          />
                                  </div>div>
                                ))}
              
                  {/* Navigation dots */}
                    <div
                                style={{
                                              position: 'absolute',
                                              bottom: '2rem',
                                              left: '50%',
                                              transform: 'translateX(-50%)',
                                              display: 'flex',
                                              gap: '0.6rem',
                                              zIndex: 10,
                                }}
                              >
                        {heroMedia.map((_, i) => (
                                            <button
                                                            key={i}
                                                            onClick={() => setCurrent(i)}
                                                            style={{
                                                                              width: current === i ? '2rem' : '0.5rem',
                                                                              height: '0.5rem',
                                                                              borderRadius: '999px',
                                                                              background: current === i ? '#B8962E' : 'rgba(255,255,255,0.6)',
                                                                              border: 'none',
                                                                              cursor: 'pointer',
                                                                              transition: 'all 0.4s ease',
                                                                              padding: 0,
                                                            }}
                                                          />
                                          ))}
                    </div>div>
              </section>section>
            );
};</section>
