import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface HeroProps {
    lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
    const content = {
          TR: {
                  title: 'Zarafetin En Saf Hali',
                  subtitle: 'Özel Tasarım Mücevher & Kişiye Özel Altın Takı Koleksiyonu',
                  cta: 'Koleksiyonu Keşfet',
                  campaign: 'Yeni Sezon Koleksiyonu',
          },
          EN: {
                  title: 'The Purest Form of Elegance',
                  subtitle: 'Custom Fine Jewelry & Personalized Gold Collection',
                  cta: 'Explore Collection',
                  campaign: 'New Season Collection',
          },
          DE: {
                  title: 'Die Reinste Form der Eleganz',
                  subtitle: 'Individueller Schmuck & Personalisierte Goldkollektion',
                  cta: 'Kollektion Entdecken',
                  campaign: 'Neue Saison Kollektion',
          },
          AR: {
                  title: 'أنقى أشكال الأناقة',
                  subtitle: 'مجوهرات مخصصة وتشكيلة ذهبية شخصية',
                  cta: 'استكشف المجموعة',
                  campaign: 'مجموعة الموسم الجديد',
          },
    };

    const { title, subtitle, cta, campaign } = content[lang] || content.TR;

    return (
          <section className="relative bg-[#F5F0E8] overflow-hidden">
            {/* Announcement bar */}
                <div className="announcement-bar">
                        <span className="accent-line"></span>span>
                  {campaign}
                        <span className="accent-line"></span>span>
                </div>div>
          
                <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
                  {/* Left: Text */}
                        <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, ease: 'easeOut' }}
                                    className="flex flex-col items-start"
                                  >
                                  <p className="category-tag mb-6">PivotGold Fine Jewelry</p>p>
                                  <h1
                                                className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-[#2C2C2C] mb-6"
                                                style={{ fontWeight: 300, letterSpacing: '0.02em' }}
                                              >
                                    {title}
                                  </h1>h1>
                                  <div className="divider-gold mb-6" style={{ margin: '0 0 1.5rem 0' }}></div>div>
                                  <p
                                                className="text-[#8C7B6B] mb-10 leading-relaxed"
                                                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.85rem', letterSpacing: '0.05em', maxWidth: '420px' }}
                                              >
                                    {subtitle}
                                  </p>p>
                                  <div className="flex gap-4 flex-wrap">
                                              <Link to="/category/ring" className="btn-luxury-filled">
                                                {cta}
                                              </Link>Link>
                                              <Link to="/category/ring" className="btn-luxury">
                                                {lang === 'TR' ? 'Yüzükler' : lang === 'EN' ? 'Rings' : lang === 'DE' ? 'Ringe' : 'خواتم'}
                                              </Link>Link>
                                  </div>div>
                        </motion.div>motion.div>
                
                  {/* Right: Featured image */}
                        <motion.div
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
                                    className="relative"
                                  >
                                  <div className="relative overflow-hidden bg-[#EDE7D9]" style={{ aspectRatio: '4/5' }}>
                                              <img
                                                              src="/images/ring-fringe-2.jpg"
                                                              alt="PivotGold Featured Ring"
                                                              className="w-full h-full object-cover"
                                                              style={{ objectPosition: 'center' }}
                                                            />
                                    {/* Elegant corner detail */}
                                              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#B8962E] opacity-60"></div>div>
                                              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#B8962E] opacity-60"></div>div>
                                  </div>div>
                          {/* Tag below image */}
                                  <div className="mt-4 flex items-center gap-3">
                                              <span className="category-tag">14K Gold</span>span>
                                              <span className="w-1 h-1 rounded-full bg-[#B8962E]"></span>span>
                                              <span className="category-tag">
                                                {lang === 'TR' ? 'Püskül Yüzük' : lang === 'EN' ? 'Fringe Ring' : lang === 'DE' ? 'Fransen-Ring' : 'خاتم الشرابة'}
                                              </span>span>
                                  </div>div>
                        </motion.div>motion.div>
                </div>div>
          
            {/* Bottom scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
                        <div className="w-px h-12 bg-[#B8962E]"></div>div>
                        <span style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#B8962E', textTransform: 'uppercase' }}>Scroll</span>span>
                </div>div>
          </section>section>
        );
};</section>
