import React, { useState } from 'react';
import { Language, Product } from '../types';

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
  };

  const L = labels[lang] || labels.TR;
  const name = product.name[lang] || product.name.TR;
  const description = product.description?.[lang] || product.description?.TR || '';
  const formattedPrice = new Intl.NumberFormat('tr-TR').format(product.price);

  const colorOptions = [
    { color: '#C4956A', label: 'Rose Gold' },
    { color: '#E8C96A', label: lang === 'TR' ? 'Sarı Altın' : 'Yellow Gold' },
    { color: '#E8E8E8', label: lang === 'TR' ? 'Beyaz Altın' : 'White Gold' },
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
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
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
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Left: Image Gallery */}
        <div style={{ backgroundColor: '#F5F3EE', position: 'relative' }}>
          <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
            <img
              src={images[activeImage]}
              alt={name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

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
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div style={{ padding: '48px 40px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Category & Name */}
          <div>
            {product.category && (
              <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 300, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
                {product.category[lang]}
              </p>
            )}
            <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '28px', fontWeight: 400, color: '#111111', textTransform: 'uppercase', lineHeight: '1.2', margin: 0 }}>
              {name}
            </h2>
          </div>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: '26px', fontWeight: 500, color: '#B8962E' }}>
              {formattedPrice} &#8378;
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '16px', fontWeight: 300, color: '#AAAAAA', textDecoration: 'line-through' }}>
                {new Intl.NumberFormat('tr-TR').format(product.originalPrice)} &#8378;
              </span>
            )}
          </div>

          {/* Color Options */}
          <div>
            <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 400, color: '#111111', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
              {colorOptions[selectedColor].label}
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {colorOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: opt.color,
                    border: i === selectedColor ? '2px solid #111111' : '2px solid #ECECEC',
                    cursor: 'pointer',
                    outline: 'none',
                    padding: 0,
                  }}
                  title={opt.label}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          {description && (
            <div>
              <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 400, color: '#111111', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                {L.description}
              </p>
              <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14px', fontWeight: 300, color: '#444444', lineHeight: '1.7', margin: 0 }}>
                {description}
              </p>
            </div>
          )}

          {/* Add to Cart */}
          <button
            onClick={() => { onAddToCart(product); onClose(); }}
            style={{
              padding: '14px 24px',
              backgroundColor: '#111111',
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Oswald", sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              width: '100%',
              marginTop: '8px',
            }}
          >
            {L.addToCart}
          </button>

          {/* Trust Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '8px', borderTop: '1px solid #ECECEC' }}>
            {[
              { icon: '&#128666;', text: L.shipping },
              { icon: '&#8635;', text: L.ret },
              { icon: '&#128737;', text: L.warranty },
            ].map((badge, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '14px', color: '#B8962E' }} dangerouslySetInnerHTML={{ __html: badge.icon }} />
                <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', fontWeight: 300, color: '#6B6B6B' }}>
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
