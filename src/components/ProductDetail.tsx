import React, { useState } from 'react';
import { Language, Product } from '../types';
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';

interface ProductDetailProps {
    product: Product | null;
    lang: Language;
    onClose: () => void;
    onAddToCart: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, lang, onClose, onAddToCart }) => {
    const [activeImage, setActiveImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);

    if (!product) return null;

    const images = product.images && product.images.length > 0 ? product.images : [product.image];

    const labels: Record<Language, {
          addToCart: string; description: string; details: string;
          shipping: string; ret: string; warranty: string;
    }> = {
          TR: { addToCart: 'Sepete Ekle', description: 'Açıklama', details: 'Ürün Özellikleri', shipping: 'Ücretsiz Sigortalı Kargo', ret: '14 Gün İçinde İade', warranty: 'Ömür Boyu Bakım Garantisi' },
          EN: { addToCart: 'Add to Cart', description: 'Description', details: 'Product Details', shipping: 'Free Insured Shipping', ret: '14 Days Return', warranty: 'Lifetime Maintenance Warranty' },
          DE: { addToCart: 'In den Warenkorb', description: 'Beschreibung', details: 'Produktdetails', shipping: 'Kostenloser versicherter Versand', ret: '14 Tage Rückgaberecht', warranty: 'Lebenslange Wartungsgarantie' },
          AR: { addToCart: 'أضف إلى السلة', description: 'الوصف', details: 'تفاصيل المنتج', shipping: 'شحن مؤمن مجاني', ret: 'إرجاع خلال 14 يوماً', warranty: 'ضمان صيانة مدى الحياة' },
    };

    const L = labels[lang] || labels.TR;
    const isRTL = lang === 'AR';
    const name = product.name[lang] || product.name.TR;
    const description = product.description?.[lang] || product.description?.TR || '';
    const formattedPrice = new Intl.NumberFormat('tr-TR').format(product.price);

    const colorOptions = [
      { color: '#C4956A', label: 'Rose Gold' },
      { color: '#E8C96A', label: lang === 'TR' ? 'Sarı Altın' : lang === 'EN' ? 'Yellow Gold' : lang === 'DE' ? 'Gelbgold' : 'ذهب أصفر' },
      { color: '#E8E8E8', label: lang === 'TR' ? 'Beyaz Altın' : lang === 'EN' ? 'White Gold' : lang === 'DE' ? 'Weißgold' : 'ذهب أبيض' },
        ];

    return (
          <>
            {/* Backdrop */}
                <div
                          onClick={onClose}
                          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 100 }}
                        />
          
            {/* Modal */}
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: '900px',
                    maxHeight: '90vh',
                    backgroundColor: '#FFFFFF',
                    zIndex: 101,
                    overflowY: 'auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    direction: isRTL ? 'rtl' : 'ltr',
          }}>
                  {/* Close button */}
                        <button
                                    onClick={onClose}
                                    style={{
                                                  position: 'absolute',
                                                  top: '16px',
                                                  [isRTL ? 'left' : 'right']: '16px',
                                                  background: 'none',
                                                  border: 'none',
                                                  cursor: 'pointer',
                                                  color: '#6B6B6B',
                                                  zIndex: 10,
                                                  padding: '4px',
                                                  display: 'flex',
                                    }}
                                  >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                                  </svg>svg>
                        </button>button>
                
                  {/* Left: Image */}
                        <div style={{ backgroundColor: '#F5F3EE', position: 'relative', overflow: 'hidden' }}>
                                  <div style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden' }}>
                                              <img
                                                              src={images[activeImage]}
                                                              alt={name}
                                                              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                            />
                                  </div>div>
                        
                          {/* Thumbnails */}
                          {images.length > 1 && (
                        <div style={{ display: 'flex', gap: '8px', padding: '12px', justifyContent: 'center' }}>
                          {images.map((img, i) => (
                                          <button
                                                              key={i}
                                                              onClick={() => setActiveImage(i)}
                                                              style={{
                                                                                    width: '48px',
                                                                                    height: '48px',
                                                                                    overflow: 'hidden',
                                                                                    border: i === activeImage ? '2px solid #111111' : '2px solid transparent',
                                                                                    padding: 0,
                                                                                    cursor: 'pointer',
                                                                                    backgroundColor: 'transparent',
                                                              }}
                                                            >
                                                            <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                          </button>button>
                                        ))}
                        </div>div>
                                  )}
                        </div>div>
                
                  {/* Right: Info */}
                        <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '20px', textAlign: isRTL ? 'right' : 'left' }}>
                          {/* Name & Price */}
                                  <div>
                                              <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 300, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                                                {product.category[lang]}
                                              </p>p>
                                              <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '24px', fontWeight: 500, color: '#111111', textTransform: 'uppercase', margin: '0 0 12px' }}>
                                                {name}
                                              </h2>h2>
                                              <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 300, color: '#6B6B6B', marginBottom: '4px' }}>
                                                {lang === 'TR' ? 'Normal fiyat' : lang === 'EN' ? 'Regular price' : lang === 'DE' ? 'Normalpreis' : 'السعر العادي'}
                                              </p>p>
                                              <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '20px', fontWeight: 300, color: '#111111', margin: 0 }}>
                                                {formattedPrice} TL
                                              </p>p>
                                  </div>div>
                        
                          {/* Color selector */}
                                  <div>
                                              <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', fontWeight: 500, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                                                {colorOptions[selectedColor].label}
                                              </p>p>
                                              <div style={{ display: 'flex', gap: '8px' }}>
                                                {colorOptions.map((opt, i) => (
                            <button
                                                key={i}
                                                onClick={() => setSelectedColor(i)}
                                                title={opt.label}
                                                style={{
                                                                      width: '28px',
                                                                      height: '28px',
                                                                      borderRadius: '50%',
                                                                      backgroundColor: opt.color,
                                                                      border: i === selectedColor ? '2px solid #111111' : '1.5px solid rgba(0,0,0,0.15)',
                                                                      cursor: 'pointer',
                                                                      padding: 0,
                                                                      boxShadow: i === selectedColor ? '0 0 0 2px #FFFFFF, 0 0 0 3px #111111' : 'none',
                                                                      transition: 'all 0.2s',
                                                }}
                                              />
                          ))}
                                              </div>div>
                                  </div>div>
                        
                          {/* Add to cart */}
                                  <button
                                                onClick={() => onAddToCart(product)}
                                                style={{
                                                                width: '100%',
                                                                padding: '14px 24px',
                                                                backgroundColor: '#111111',
                                                                color: '#FFFFFF',
                                                                fontFamily: '"Jost", sans-serif',
                                                                fontSize: '13px',
                                                                fontWeight: 500,
                                                                letterSpacing: '0.5px',
                                                                textTransform: 'uppercase',
                                                                border: 'none',
                                                                cursor: 'pointer',
                                                }}
                                              >
                                    {L.addToCart}
                                  </button>button>
                        
                          {/* Description */}
                          {description && (
                        <div style={{ borderTop: '1px solid #ECECEC', paddingTop: '20px' }}>
                                      <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', fontWeight: 500, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                                        {L.description}
                                      </p>p>
                                      <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 300, color: '#6B6B6B', lineHeight: '1.6' }}>
                                        {description}
                                      </p>p>
                        </div>
                                  )}
                        
                          {/* Trust badges */}
                                  <div style={{ borderTop: '1px solid #ECECEC', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {[
            { Icon: Truck, text: L.shipping },
            { Icon: RotateCcw, text: L.ret },
            { Icon: ShieldCheck, text: L.warranty },
                        ].map(({ Icon, text }) => (
                                        <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                          {React.createElement(Icon, { size: 16, strokeWidth: 1.5, color: '#6B6B6B' })}
                                                        <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', fontWeight: 300, color: '#6B6B6B' }}>{text}</span>span>
                                        </div>
                                      ))}
                                  </div>
                        </div>
                </div>
          </>>
    
