import React from 'react';
import { Language } from '../types';

interface BrandStoryProps {
    lang: Language;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ lang }) => {
    const content: Record<Language, { tag: string; title: string; text1: string; text2: string; cta: string }> = {
          TR: {
                  tag: "1984'TEN BER\u0130",
                  title: 'ZANAAT VE M\u0130RAS',
                  text1: 'Pivot Gold, muc\u0306evher sanat\u0131n\u0131 geleneksel zanaaatkarl\u0131kla modern tasar\u0131m\u0131 birles\u0327tirerek sunar. Her parca, ustalar\u0131m\u0131z taraf\u0131ndan el ile islenmis\u0327tir.',
                  text2: 'Koleksiyonlar\u0131m\u0131z 14 Ayar ve 18 Ayar altin kullanilarak, sertifikal\u0131 p\u0131rlantalar ve ozgun tasar\u0131mlarla uretilmektedir.',
                  cta: 'H\u0130KAYEM\u0130Z\u0130 KE\u015eFET',
          },
          EN: {
                  tag: 'SINCE 1984',
                  title: 'CRAFT AND HERITAGE',
                  text1: 'Pivot Gold offers the finest jewelry art by combining traditional craftsmanship with contemporary design. Each piece is handcrafted by our master jewelers.',
                  text2: 'Our collections are crafted in 14K and 18K gold, featuring certified diamonds and unique original designs that stand the test of time.',
                  cta: 'DISCOVER OUR STORY',
          },
    };

    const c = content[lang] || content.TR;
    const stats = [
      { value: '40+', label: lang === 'TR' ? 'Y\u0131ll\u0131k Tecr\u00fcbe' : 'Years of Experience' },
      { value: '500+', label: lang === 'TR' ? '\u00dcrn Cesidi' : 'Product Varieties' },
      { value: '50K+', label: lang === 'TR' ? 'Mutlu Mu\u015fteri' : 'Happy Customers' },
        ];

    return (
          <section style={{ backgroundColor: '#FFFFFF', padding: '100px 0', borderTop: '1px solid #ECECEC' }}>
                  <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
                    {/* Image side */}
                            <div style={{ position: 'relative' }}>
                                        <div style={{ aspectRatio: '4/5', overflow: 'hidden', backgroundColor: '#F5F0E8' }}>
                                                      <img
                                                                      src='/images/ring-gold-2.jpg'
                                                                      alt='Craftsmanship'
                                                                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.8s ease' }}
                                                                      onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                                                                      onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                                                                    />
                                        </div>div>
                              {/* Stats overlay */}
                                        <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', backgroundColor: '#111111', padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                          {stats.map((stat) => (
                          <div key={stat.value} style={{ textAlign: 'center' }}>
                                            <p style={{ fontFamily: '"Oswald", sans-serif', fontSize: '28px', fontWeight: 500, color: '#B8962E', lineHeight: 1, margin: 0 }}>{stat.value}</p>p>
                                            <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '10px', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: '4px', marginBottom: 0 }}>{stat.label}</p>p>
                          </div>div>
                        ))}
                                        </div>div>
                            </div>div>

                    {/* Text side */}
                            <div>
                                      <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#B8962E', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                  <span style={{ display: 'inline-block', width: '30px', height: '1px', backgroundColor: '#B8962E' }}></span>span>
                                        {c.tag}
                                      </p>p>
                                      <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '48px', fontWeight: 500, color: '#111111', textTransform: 'uppercase', letterSpacing: '0', marginBottom: '28px', lineHeight: '1.05' }}>
                                        {c.title}
                                      </h2>h2>
                                      <div style={{ width: '50px', height: '2px', background: 'linear-gradient(90deg, #B8962E, #D4AF5A)', marginBottom: '36px' }} />
                                      <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '15px', fontWeight: 300, color: '#6B6B6B', lineHeight: '1.9', marginBottom: '20px' }}>{c.text1}</p>p>
                                      <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '15px', fontWeight: 300, color: '#6B6B6B', lineHeight: '1.9', marginBottom: '48px' }}>{c.text2}</p>p>
                                      <a
                                                    href='#'
                                                    style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: '10px',
                                                                    fontFamily: '"Jost", sans-serif',
                                                                    fontSize: '12px',
                                                                    fontWeight: 600,
                                                                    letterSpacing: '0.2em',
                                                                    color: '#FFFFFF',
                                                                    textDecoration: 'none',
                                                                    textTransform: 'uppercase',
                                                                    backgroundColor: '#111111',
                                                                    padding: '14px 32px',
                                                                    transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#B8962E'; }}
                                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#111111'; }}
                                                  >
                                        {c.cta}
                                                  <span style={{ fontSize: '16px' }}>\u2192</span>span>
                                      </a>a>
                            </div>div>
                  </div>div>
          </section>section>
        );
};
</div>
