import React from 'react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  lang: Language;
}

const categories = [
  { id: 'ring', name: { TR: 'Yüzük', EN: 'Rings', DE: 'Ringe', AR: 'خواتم' }, image: '/images/category-ring-1.jpg' },
  { id: 'earring', name: { TR: 'Küpe', EN: 'Earrings', DE: 'Ohrringe', AR: 'أقراط' }, image: '/images/category-ring-4.jpg' },
  { id: 'bracelet', name: { TR: 'Bilezik', EN: 'Bracelets', DE: 'Armbänder', AR: 'أساور' }, image: '/images/category-ring-3.jpg' },
  { id: 'necklace', name: { TR: 'Kolye', EN: 'Necklaces', DE: 'Halsketten', AR: 'قلادات' }, image: '/images/category-ring-6.jpg' },
  { id: 'diamond', name: { TR: 'Pırlanta', EN: 'Diamond', DE: 'Diamanten', AR: 'ألماس' }, image: '/images/category-ring-7.jpg' },
  { id: 'piercing', name: { TR: 'Piercing', EN: 'Piercing', DE: 'Piercing', AR: 'ثقب' }, image: '/images/category-ring-9.jpg' },
] as const;

export const Categories: React.FC<CategoriesProps> = ({ lang }) => {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '32px 0', borderBottom: '1px solid #ECECEC' }}>
      <div style={{ overflowX: 'auto', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
        <div style={{ display: 'flex', gap: '0', padding: '0 24px', minWidth: 'max-content' }}>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textDecoration: 'none', padding: '0 20px', flexShrink: 0, width: '180px' }}
            >
              <div style={{ width: '140px', height: '140px', overflow: 'hidden', backgroundColor: '#F5F3EE' }}>
                <img
                  src={cat.image}
                  alt={cat.name[lang]}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: '15px', fontWeight: 500, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>
                {cat.name[lang]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
