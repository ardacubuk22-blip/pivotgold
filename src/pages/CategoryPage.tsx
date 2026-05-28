import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Language, Product } from '../types';

interface CategoryPageProps {
  lang: Language;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ lang, onAddToCart, onViewDetails }) => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const filteredProducts = products.filter(p => {
    if (!categoryName || categoryName.toLowerCase() === 'all') return true;
    return Object.values(p.category).some(cat => cat.toLowerCase() === categoryName.toLowerCase());
  });

  const titles: Record<Language, string> = {
    TR: 'Koleksiyonlar',
    EN: 'Collections',
  };

  const backText: Record<Language, string> = {
    TR: 'Geri',
    EN: 'Back',
  };

  const emptyText: Record<Language, string> = {
    TR: 'Bu kategoride ürün bulunamadı.',
    EN: 'No products found in this category.',
  };

  const categoryTitle = categoryName && categoryName.toLowerCase() !== 'all'
    ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    : titles[lang];

  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '56px' }}>
      {/* Page Header */}
      <div style={{ borderBottom: '1px solid #ECECEC', padding: '32px 24px 24px' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: '"Jost", sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            color: '#6B6B6B',
            textDecoration: 'none',
            marginBottom: '20px',
          }}
        >
          {'←'} {backText[lang]}
        </Link>
        <h1 style={{
          fontFamily: '"Oswald", sans-serif',
          fontSize: '28px',
          fontWeight: 500,
          color: '#111111',
          textTransform: 'uppercase',
          letterSpacing: '0',
          margin: 0,
        }}>
          {categoryTitle}
        </h1>
        <p style={{
          fontFamily: '"Jost", sans-serif',
          fontSize: '13px',
          fontWeight: 300,
          color: '#6B6B6B',
          marginTop: '6px',
        }}>
          {filteredProducts.length} {lang === 'TR' ? 'ürün' : 'products'}
        </p>
      </div>

      {/* Product Grid */}
      <div style={{ padding: '32px 24px 64px' }}>
        {filteredProducts.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '24px 16px',
          }}>
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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '96px 24px',
          }}>
            <p style={{
              fontFamily: '"Jost", sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: '#6B6B6B',
            }}>
              {emptyText[lang]}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CategoryPage;
