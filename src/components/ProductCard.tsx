import React from 'react';
import { motion } from 'motion/react';
import { Language, Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    product: Product;
    lang: Language;
    onAddToCart: (product: Product) => void;
    onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, lang, onAddToCart, onViewDetails }) => {
    const name = product.name[lang] || product.name.TR;
    const category = product.category[lang] || product.category.TR;
    const formattedPrice = new Intl.NumberFormat('tr-TR').format(product.price);

    return (
          <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="product-card group cursor-pointer"
                  onClick={() => onViewDetails(product)}
                >
            {/* Image container */}
                <div className="relative overflow-hidden bg-[#F5F0E8]" style={{ aspectRatio: '3/4' }}>
                        <img
                                    src={product.image}
                                    alt={name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ objectPosition: 'center' }}
                                  />
                  {/* Hover overlay with add to cart */}
                        <div className="absolute inset-0 bg-[#2C2C2C] bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                                  <button
                                                onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                                                className="flex items-center gap-2 bg-[#FAF7F2] text-[#2C2C2C] px-5 py-2.5 text-xs tracking-widest uppercase font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                                                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em' }}
                                              >
                                              <ShoppingCart size={13} strokeWidth={1.5} />
                                    {lang === 'TR' ? 'Sepete Ekle' : lang === 'EN' ? 'Add to Cart' : lang === 'DE' ? 'In den Warenkorb' : 'أضف للسلة'}
                                  </button>button>
                        </div>div>
                </div>div>
          
            {/* Product info */}
                <div className="pt-4 pb-2 px-1">
                        <p className="category-tag mb-1.5">{category}</p>p>
                        <h3
                                    className="text-[#2C2C2C] mb-2 leading-snug"
                                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '1.05rem', letterSpacing: '0.02em' }}
                                  >
                          {name}
                        </h3>h3>
                        <p className="price-luxury">
                          {formattedPrice} <span style={{ fontSize: '0.8rem', color: '#8C7B6B', fontFamily: 'Montserrat', fontWeight: 400 }}>₺</span>span>
                        </p>p>
                </div>div>
          </motion.div>motion.div>
        );
};</motion.div>
