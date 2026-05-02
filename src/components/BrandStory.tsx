import React from 'react';
import { Language } from '../types';

interface BrandStoryProps {
    lang: Language;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ lang }) => {
    const content = {
          TR: {
                  title: 'Zanaat ve Miras',
                  subtitle: '1984\'ten Beri Pivot Gold',
                  text1: 'Pivot Gold, özel tasarım mücevher sanatını geleneksel zanaatkarlıkla modern tasarımı birleştirerek sunar. Her bir parçamız, ustalarımızın ellerinde hayat bulan eşsiz bir hikayedir.',
                  text2: 'Püskül Yüzük koleksiyonumuz, 14 Ayar altın ve özgün emaye detaylarıyla tasarlanmış, kadınlığın gücünü ve zarafetini yansıtan özel bir koleksiyondur. Her renk, farklı bir duyguyu temsil eder.'
          },
          EN: {
                  title: 'Craft and Heritage',
                  subtitle: 'Pivot Gold Since 1984',
                  text1: 'Pivot Gold offers the art of jewelry by combining traditional craftsmanship with modern design. Each of our pieces is a unique story brought to life in the hands of our masters.',
                  text2: 'Our Fringe Ring collection, crafted in 14K gold with unique enamel details, reflects the power and elegance of femininity. Each color represents a different emotion.'
          },
          DE: {
                  title: 'Handwerk und Erbe',
                  subtitle: 'Pivot Gold seit 1984',
                  text1: 'Pivot Gold bietet die Kunst des Schmucks durch die Kombination von traditioneller Handwerkskunst mit modernem Design. Jedes unserer Stücke ist eine einzigartige Geschichte, die in den Händen unserer Meister zum Leben erweckt wird.',
                  text2: 'Unsere Fransen-Ring Kollektion, aus 14 Karat Gold mit einzigartigen Emaille-Details gefertigt, spiegelt die Kraft und Eleganz der Weiblichkeit wider. Jede Farbe repräsentiert eine andere Emotion.'
          },
          AR: {
                  title: 'الحرفة والتراث',
                  subtitle: 'بيفوت جولد منذ عام 1984',
                  text1: 'تقدم بيفوت جولد فن المجوهرات من خلال الجمع بين الحرفية التقليدية والتصميم الحديث. كل قطعة من قطعنا هي قصة فريدة تنبض بالحياة بين أيدي أساتذتنا.',
                  text2: 'مجموعة خواتم الشرابة لدينا، المصنوعة من ذهب 14 قيراط مع تفاصيل مينا فريدة، تعكس قوة وأناقة الأنوثة. كل لون يمثل عاطفة مختلفة.'
          }
    };

    return (
          <section className="py-24 bg-zinc-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${lang === 'AR' ? 'text-right' : ''}`}>
                                  <div className={`relative ${lang === 'AR' ? 'lg:order-2' : ''}`}>
                                              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                                                            <img
                                                                              src="/images/ring-gold-2.jpg"
                                                                              alt="Craftsmanship"
                                                                              className="w-full h-full object-cover"
                                                                            />
                                              </div>div>
                                              <div className={`absolute -bottom-8 bg-white p-8 shadow-xl hidden md:block ${lang === 'AR' ? '-left-8' : '-right-8'}`}>
                                                            <p className="text-gold font-serif italic text-4xl">40+</p>p>
                                                            <p className="text-[10px] uppercase tracking-widest text-zinc-400">
                                                              {lang === 'TR' ? 'Yıllık Tecrübe' : lang === 'EN' ? 'Years of Experience' : lang === 'DE' ? 'Jahre Erfahrung' : 'سنوات من الخبرة'}
                                                            </p>p>
                                              </div>div>
                                  </div>div>
                        
                                  <div className="space-y-8">
                                              <div>
                                                            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
                                                              {content[lang].subtitle}
                                                            </span>span>
                                                            <h2 className="text-5xl font-serif text-zinc-900 mb-6">
                                                              {content[lang].title}
                                                            </h2>h2>
                                                            <div className={`w-20 h-[1px] bg-gold mb-8 ${lang === 'AR' ? 'ml-auto' : ''}`}></div>div>
                                              </div>div>
                                              <p className="text-zinc-600 font-light leading-relaxed text-lg">
                                                {content[lang].text1}
                                              </p>p>
                                              <p className="text-zinc-600 font-light leading-relaxed text-lg">
                                                {content[lang].text2}
                                              </p>p>
                                              <button className="px-10 py-4 border border-gold text-gold font-medium tracking-widest uppercase text-xs hover:bg-gold hover:text-white transition-all">
                                                {lang === 'TR' ? 'Hikayemizi Keşfedin' : lang === 'EN' ? 'Discover Our Story' : lang === 'DE' ? 'Entdecken Sie unsere Geschichte' : 'اكتشف قصتنا'}
                                              </button>button>
                                  </div>div>
                        </div>div>
                </div>div>
          </section>section>
        );
};</section>
