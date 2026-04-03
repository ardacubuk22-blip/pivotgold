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
      text2: 'Kişiye özel altın ve lüks takı tasarımı konusunda uzmanlaşmış ekibimizle, en değerli anlarınıza eşlik etmek için buradayız. Pırlantanın ışıltısını ve altının asaletini Pivot Gold farkıyla keşfedin.'
    },
    EN: {
      title: 'Craft and Heritage',
      subtitle: 'Pivot Gold Since 1984',
      text1: 'Pivot Gold offers the art of jewelry by combining traditional craftsmanship with modern design. Each of our pieces is a unique story brought to life in the hands of our masters.',
      text2: 'Based on quality and trust, we are here to accompany your most precious moments. Discover the sparkle of diamonds and the nobility of gold with the Pivot Gold difference.'
    },
    DE: {
      title: 'Handwerk und Erbe',
      subtitle: 'Pivot Gold seit 1984',
      text1: 'Pivot Gold bietet die Kunst des Schmucks durch die Kombination von traditioneller Handwerkskunst mit modernem Design. Jedes unserer Stücke ist eine einzigartige Geschichte, die in den Händen unserer Meister zum Leben erweckt wird.',
      text2: 'Basierend auf Qualität und Vertrauen sind wir hier, um Ihre wertvollsten Momente zu begleiten. Entdecken Sie den Glanz von Diamanten und den Adel von Gold mit dem Pivot Gold-Unterschied.'
    },
    AR: {
      title: 'الحرفة والتراث',
      subtitle: 'بيفوت جولد منذ عام 1984',
      text1: 'تقدم بيفوت جولد فن المجوهرات من خلال الجمع بين الحرفية التقليدية والتصميم الحديث. كل قطعة من قطعنا هي قصة فريدة تنبض بالحياة بين أيدي أساتذتنا.',
      text2: 'بناءً على الجودة والثقة، نحن هنا لمرافقة أثمن لحظاتكم. اكتشفوا بريق الألماس ونبل الذهب مع بيفوت جولد.'
    }
  };

  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${lang === 'AR' ? 'text-right' : ''}`}>
          <div className={`relative ${lang === 'AR' ? 'lg:order-2' : ''}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80&w=800"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className={`absolute -bottom-8 bg-white p-8 shadow-xl hidden md:block ${lang === 'AR' ? '-left-8' : '-right-8'}`}>
              <p className="text-gold font-serif italic text-4xl">40+</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-400">
                {lang === 'TR' ? 'Yıllık Tecrübe' : lang === 'EN' ? 'Years of Experience' : lang === 'DE' ? 'Jahre Erfahrung' : 'سنوات من الخبرة'}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
                {content[lang].subtitle}
              </span>
              <h2 className="text-5xl font-serif text-zinc-900 mb-6">
                {content[lang].title}
              </h2>
              <div className={`w-20 h-[1px] bg-gold mb-8 ${lang === 'AR' ? 'ml-auto' : ''}`}></div>
            </div>
            
            <p className="text-zinc-600 font-light leading-relaxed text-lg">
              {content[lang].text1}
            </p>
            <p className="text-zinc-600 font-light leading-relaxed text-lg">
              {content[lang].text2}
            </p>

            <button className="px-10 py-4 border border-gold text-gold font-medium tracking-widest uppercase text-xs hover:bg-gold hover:text-white transition-all">
              {lang === 'TR' ? 'Hikayemizi Keşfedin' : lang === 'EN' ? 'Discover Our Story' : lang === 'DE' ? 'Entdecken Sie unsere Geschichte' : 'اكتشف قصتنا'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
