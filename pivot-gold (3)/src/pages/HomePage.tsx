import React from 'react';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { ProductCard } from '../components/ProductCard';
import { BrandStory } from '../components/BrandStory';
import { Newsletter } from '../components/Newsletter';
import { SocialSection } from '../components/SocialSection';
import { SEOSection } from '../components/SEOSection';
import { products } from '../data/products';
import { Language, Product } from '../types';
import { motion } from 'motion/react';

interface HomePageProps {
  lang: Language;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, onAddToCart, onViewDetails }) => {
  const sectionTitles = {
    TR: { bestSellers: 'En Çok Satanlar', campaign: 'Özel Teklif', wedding: 'Düğün Koleksiyonunda %20 İndirim', shopNow: 'Şimdi İncele' },
    EN: { bestSellers: 'Best Sellers', campaign: 'Special Offer', wedding: '20% Off Wedding Collection', shopNow: 'Shop Now' },
    DE: { bestSellers: 'Bestseller', campaign: 'Sonderangebot', wedding: '20% Rabatt auf die Hochzeitskollektion', shopNow: 'Jetzt einkaufen' },
    AR: { bestSellers: 'الأكثر مبيعاً', campaign: 'عرض خاص', wedding: 'خصم 20% على مجموعة الزفاف', shopNow: 'تسوق الآن' }
  };

  return (
    <main>
      <Hero lang={lang} />
      
      <SEOSection lang={lang} />
      
      <Categories lang={lang} />

      {/* Best Sellers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-zinc-900 mb-4">
              {sectionTitles[lang].bestSellers}
            </h2>
            <div className="w-20 h-[1px] bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {products.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                lang={lang}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1920"
              alt="Campaign"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-xs uppercase tracking-[0.4em] mb-4 block">
                  {sectionTitles[lang].campaign}
                </span>
                <h3 className="text-4xl md:text-6xl font-serif mb-8">
                  {sectionTitles[lang].wedding}
                </h3>
                <button className="px-12 py-4 bg-white text-zinc-900 font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-white transition-all">
                  {sectionTitles[lang].shopNow}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <BrandStory lang={lang} />
      
      <SocialSection lang={lang} />
      
      <Newsletter lang={lang} />
    </main>
  );
};
