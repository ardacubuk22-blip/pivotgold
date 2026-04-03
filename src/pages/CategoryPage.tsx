import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Language, Product } from '../types';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  lang: Language;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ lang, onAddToCart, onViewDetails }) => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const filteredProducts = products.filter(p => {
    if (!categoryName || categoryName.toLowerCase() === 'koleksiyonlar') return true;
    // Check if categoryName matches any of the category translations
    return Object.values(p.category).some(cat => cat.toLowerCase() === categoryName.toLowerCase());
  });

  const titles = {
    TR: 'Koleksiyonlar',
    EN: 'Collections',
    DE: 'Kollektionen',
    AR: 'المجموعات'
  };

  const categoryTitle = categoryName && categoryName.toLowerCase() !== 'koleksiyonlar' 
    ? categoryName 
    : titles[lang];

  const backText = {
    TR: 'Geri',
    EN: 'Back',
    DE: 'Zurück',
    AR: 'عودة'
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-zinc-500 hover:text-gold transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-widest font-bold">{backText[lang]}</span>
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl font-serif text-zinc-900 mb-4 capitalize">
              {categoryTitle}
            </h1>
            <div className="w-20 h-[1px] bg-gold mx-auto"></div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                lang={lang}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-zinc-400 font-light">
              {lang === 'TR' ? 'Bu kategoride ürün bulunamadı.' : lang === 'EN' ? 'No products found in this category.' : lang === 'DE' ? 'Keine Produkte in dieser Kategorie gefunden.' : 'لم يتم العثور على منتجات في هذه الفئة.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
