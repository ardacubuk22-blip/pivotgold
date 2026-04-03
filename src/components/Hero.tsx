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
      campaign: 'Yeni Sezon Koleksiyonu'
    },
    EN: {
      title: 'The Purest Form of Elegance',
      subtitle: 'Exclusive Jewelry Collection',
      cta: 'Explore Collection',
      campaign: 'New Season Collection'
    },
    DE: {
      title: 'Die reinste Form der Eleganz',
      subtitle: 'Exklusive Schmuckkollektion',
      cta: 'Kollektion entdecken',
      campaign: 'Neue Saison-Kollektion'
    },
    AR: {
      title: 'أنقى صور الأناقة',
      subtitle: 'مجموعة مجوهرات حصرية',
      cta: 'اكتشف المجموعة',
      campaign: 'مجموعة الموسم الجديد'
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col lg:flex-row items-center pt-20">
        {/* Text Content - Left Side */}
        <div className="flex-1 z-10 py-12 lg:py-0 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={lang === 'AR' ? 'text-right' : ''}
          >
            <span className="inline-block text-gold font-bold tracking-[0.6em] uppercase text-[10px] mb-8 border-b border-gold/30 pb-2">
              {content[lang].campaign}
            </span>
            
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 text-zinc-900 tracking-tighter">
              {content[lang].title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>
            
            <p className="text-lg text-zinc-500 mb-12 font-light tracking-widest max-w-md leading-relaxed">
              {content[lang].subtitle}
            </p>
            
            <div className={`flex ${lang === 'AR' ? 'justify-end' : ''}`}>
              <Link 
                to="/category/koleksiyonlar"
                className="group relative px-12 py-5 bg-zinc-900 text-white font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:bg-gold"
              >
                <span className="relative z-10">{content[lang].cta}</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Image Content - Right Side (Half Page) */}
        <div className="flex-1 relative h-[60vh] lg:h-[80vh] w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="h-full w-full relative rounded-sm overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Jewelry"
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
          
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/20 hidden lg:block"></div>
        </div>
      </div>

      {/* Vertical Branding */}
      <div className="absolute left-8 bottom-24 hidden xl:block">
        <span className="text-[10px] uppercase tracking-[1em] text-zinc-300 font-bold rotate-90 origin-left">
          PIVOT GOLD LUXURY
        </span>
      </div>
    </section>
  );
};



