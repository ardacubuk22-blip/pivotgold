import React, { useState } from 'react';
import { Language, Product } from '../types';
import { Heart } from 'lucide-react';

interface ProductCardProps {
      product: Product;
      lang: Language;
      onAddToCart: (product: Product) => void;
      onViewDetails: (product: Product) => void;
}

const colorDots = [
    { color: '#C4956A', label: 'Rose Gold' },
    { color: '#E8C96A', label: 'Sari Altin' },
    { color: '#E8E8E8', label: 'Beyaz Altin' },
    ];

const priceLabel: Record<Language, string> = {
      TR: 'Normal fiyat',
      EN: 'Regular price',
      DE: 'Normalpreis',
      AR: 'السعر العادي',
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, lang, onAddToCart, onViewDetails }) => {
      const [hovered, setHovered] = useState(false);
      const [wishlisted, setWishlisted] = useState(false);
      const name = product.name[lang] || product.name.TR;
      const formattedPrice = new Intl.NumberFormat('tr-TR').format(product.price);

      const handleWishlist = (e: React.MouseEvent) => {
              e.stopPropagation();
              setWishlisted((prev) => !prev);
      };

      return (
              <div
                        style={{ cursor: 'pointer', background: 'transparent' }}
                        onClick={() => onViewDetails(product)}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                      >
                    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#F5F3EE', aspectRatio: '3/4' }}>
                            <img
                                          src={product.image}
                                          alt={name}
                                          style={{
                                                          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center',
                                                          display: 'block', position: 'absolute', top: 0, left: 0,
                                                          opacity: hovered ? 0 : 1,
                                                          transition: 'opacity 0.4s ease',
                                          }}
                                        />
                            <button
                                          onClick={handleWishlist}
                                          style={{
                                                          position: 'absolute', top: '10px', right: '10px',
                                                          background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
                                                          opacity: hovered || wishlisted ? 1 : 0,
                                                          transition: 'opacity 0.2s', zIndex: 2,
                                          }}
                                        >
                                {React.createElement(Heart, {
                                                        size: 18,
                                                        strokeWidth: 1.5,
                                                        color: wishlisted ? '#B8962E' : '#111111',
                                                        fill: wishlisted ? '#B8962E' : 'none',
                                        })}
                            </button>button>
                    </div>div>
              
                    <div style={{ paddingTop: '12px', paddingBottom: '8px' }}>
                            <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14px', fontWeight: 400, color: '#111111', letterSpacing: '0', marginBottom: '4px', lineHeight: '1.4' }}>
                                {name}
                            </p>p>
                            <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', fontWeight: 300, color: '#6B6B6B', marginBottom: '2px' }}>
                                {priceLabel[lang]}
                            </p>p>
                            <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14px', fontWeight: 300, color: '#111111', marginBottom: '8px' }}>
                                {formattedPrice} TL
                            </p>p>
                            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                {colorDots.map((dot, i) => (
                                      <div
                                                        key={i}
                                                        title={dot.label}
                                                        style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: dot.color, border: '1.5px solid rgba(0,0,0,0.1)', cursor: 'pointer', flexShrink: 0 }}
                                                      />
                                    ))}
                            </div>div>
                    </div>div>
              </div>div>
            );
};
</div>
