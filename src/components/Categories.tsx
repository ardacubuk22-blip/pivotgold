import React from 'react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  lang: Language;
}

const categories = [
  { id: 'ring', name: { TR: 'Yüzuk', EN: 'Rings' }, image: '/images/category-ring-1.jpg', count: { TR: '120+ Ürn', EN: '120+ Items' } },
  { id: 'earring', name: { TR: 'Küpe', EN: 'Earrings' }, image: '/images/category-ring-4.jpg', count: { TR: '85+ Ürn', EN: '85+ Items' } },
  { id: 'bracelet', name: { TR: 'Bilezik', EN: 'Bracelets' }, image: '/images/category-ring-3.jpg', count: { TR: '60+ Ürn', EN: '60+ Items' } },
  { id: 'necklace', name: { TR: 'Kolye', EN: 'Necklaces' }, image: '/images/category-ring-6.jpg', count: { TR: '75+ Ürn', EN: '75+ Items' } },
  { id: 'diamond', name: { TR: 'Pırlanta', EN: 'Diamond' }, image: '/images/category-ring-7.jpg', count: { TR: '40+ Ürn', EN: '40+ Items' } },
  { id: 'new', name: { TR: 'Yeni', EN: 'New In' }, image: '/images/category-ring-2.jpg', count: { TR: 'Yeni', EN: 'New' } },
] as const;

export const Categories: React.FC<CategoriesProps> = ({ lang }) => {
  return (
    <section style={{ backgroundColor: '#FAFAF8', padding: '40px 0', borderBottom: '1px solid #ECECEC' }}>
      <div style={{ overflowX: 'auto', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
        <div style={{ display: 'flex', gap: '0', padding: '0 32px', minWidth: 'max-content', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textDecoration: 'none', padding: '0 24px', flexShrink: 0, width: '160px' }}
            >
              <div
                style={{ width: '120px', height: '120px', overflow: 'hidden', backgroundColor: '#F0EBE0', borderRadius: '50%', border: '2px solid transparent', transition: 'border-color 0.3s, transform 0.3s', position: 'relative' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#B8962E'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'transparent'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
              >
                <img
                  src={cat.image}
                  alt={cat.name[lang]}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: '13px', fontWeight: 500, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
                  {cat.name[lang]}
                </span>
                <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '10px', color: '#B8962E', letterSpacing: '0.1em', fontWeight: 400, marginTop: '2px', display: 'block' }}>
                  {cat.count[lang]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
