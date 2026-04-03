import React from 'react';
import { motion } from 'motion/react';
import { Language, Product } from '../types';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  lang: Language;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, lang, onAddToCart, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 mb-4">
        <img
          src={product.image}
          alt={product.name[lang]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
          <button
            onClick={() => onViewDetails(product)}
            className="p-3 bg-white text-zinc-900 rounded-full hover:bg-gold hover:text-white transition-colors shadow-lg"
          >
            <Eye size={20} />
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="p-3 bg-white text-zinc-900 rounded-full hover:bg-gold hover:text-white transition-colors shadow-lg"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="text-center px-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-1">
          {product.category[lang]}
        </p>
        <h3 className="font-serif text-lg text-zinc-800 mb-2 group-hover:text-gold transition-colors">
          {product.name[lang]}
        </h3>
        <p className="text-gold font-medium tracking-wider">
          {product.price.toLocaleString('tr-TR')} ₺
        </p>
        
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full py-2 border border-zinc-200 text-[10px] uppercase tracking-widest font-bold hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all"
        >
          {lang === 'TR' ? 'Sepete Ekle' : lang === 'EN' ? 'Add to Cart' : lang === 'DE' ? 'In den Warenkorb' : 'أضف إلى السلة'}
        </button>
      </div>
    </motion.div>
  );
};
