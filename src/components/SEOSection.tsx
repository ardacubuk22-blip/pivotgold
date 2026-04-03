import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface SEOSectionProps {
  lang: Language;
}

export const SEOSection: React.FC<SEOSectionProps> = ({ lang }) => {
  const content = {
    TR: {
      title: 'Pivot Gold | Özel Tasarım Mücevher & Lüks Altın Takılar',
      text: 'Pivot Gold, modern ve zamansız tasarımları bir araya getiren özel mücevher markasıdır. Ünlü tasarım çizgilerinden ilham alınarak hazırlanan koleksiyonlarımız, kişiye özel üretim seçenekleriyle benzersiz bir deneyim sunar. Altın, pırlanta ve değerli taşlarla hazırlanan ürünlerimiz, kalite ve estetiği bir araya getirir.',
      keywords: ['özel tasarım mücevher', 'kişiye özel altın', 'lüks takı', 'designer jewelry', 'custom gold jewelry']
    },
    EN: {
      title: 'Pivot Gold | Custom Design Jewelry & Luxury Gold Jewelry',
      text: 'Pivot Gold is an exclusive jewelry brand that combines modern and timeless designs. Our collections, inspired by famous design lines, offer a unique experience with custom production options. Our products, prepared with gold, diamonds, and precious stones, bring together quality and aesthetics.',
      keywords: ['designer jewelry', 'custom gold jewelry', 'luxury jewelry', 'bespoke gold', 'fine jewelry']
    },
    DE: {
      title: 'Pivot Gold | Maßgeschneiderter Schmuck & Luxus-Goldschmuck',
      text: 'Pivot Gold ist eine exklusive Schmuckmarke, die modernes und zeitloses Design verbindet. Unsere Kollektionen, inspiriert von berühmten Designlinien, bieten ein einzigartiges Erlebnis mit individuellen Produktionsoptionen. Unsere mit Gold, Diamanten und Edelsteinen hergestellten Produkte vereinen Qualität und Ästhetik.',
      keywords: ['Designer-Schmuck', 'individueller Goldschmuck', 'Luxusschmuck', 'maßgeschneidertes Gold', 'feiner Schmuck']
    },
    AR: {
      title: 'Pivot Gold | مجوهرات بتصميم خاص ومجوهرات ذهبية فاخرة',
      text: 'Pivot Gold هي علامة تجارية حصرية للمجوهرات تجمع بين التصاميم الحديثة والخالدة. تقدم مجموعاتنا، المستوحاة من خطوط التصميم الشهيرة، تجربة فريدة مع خيارات إنتاج مخصصة. منتجاتنا، المحضرة من الذهب والألماس والأحجار الكريمة، تجمع بين الجودة والجمال.',
      keywords: ['مجوهرات مصممة', 'مجوهرات ذهبية مخصصة', 'مجوهرات فاخرة', 'ذهب مفصل', 'مجوهرات راقية']
    }
  };

  return (
    <section className="py-20 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto text-center ${lang === 'AR' ? 'rtl' : 'ltr'}`}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-zinc-900 mb-8 leading-relaxed">
            {content[lang].title}
          </h2>
          <p className="text-lg text-zinc-600 font-light leading-relaxed mb-12">
            {content[lang].text}
          </p>
          
          {/* Hidden keywords for SEO but visible enough for users if they look */}
          <div className="flex flex-wrap justify-center gap-4">
            {content[lang].keywords.map((keyword, idx) => (
              <span key={idx} className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold border border-zinc-200 px-3 py-1 rounded-full">
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
