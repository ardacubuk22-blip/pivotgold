import React from 'react';
import { ShoppingCart, Search, Menu, X, Heart } from 'lucide-react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  cartCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems: Record<Language, string[]> = {
    TR: ['Yeni', 'Kategoriler', 'Koleksiyon', 'Piercing', 'Design House'],
    EN: ['New', 'Categories', 'Collection', 'Piercing', 'Design House'],
    DE: ['Neu', 'Kategorien', 'Kollektion', 'Piercing', 'Design House'],
    AR: ['جديد', 'الفئات', 'المجموعة', 'ثقب', 'بيت التصميم'],
  };
  const menuRoutes = ['new', 'categories', 'collection', 'piercing', 'design-house'];
  const items = menuItems[lang] || menuItems.TR;

  const btnStyle: React.CSSProperties = { background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' };

  return (
    <header style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #ECECEC', height: '56px', position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
      <div style={{ maxWidth: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        {/* Left icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '120px' }}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={btnStyle}>
            {isMenuOpen
              ? React.createElement(X, { size: 20, strokeWidth: 1.5, color: '#111111' })
              : React.createElement(Menu, { size: 20, strokeWidth: 1.5, color: '#111111' })}
          </button>
          <button style={btnStyle}>
            {React.createElement(Search, { size: 18, strokeWidth: 1.5, color: '#111111' })}
          </button>
        </div>

        {/* Center logo */}
        <Link
          to='/'
          style={{ fontFamily: '"Jost", sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111111', textDecoration: 'none', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
        >
          PIVOT<span style={{ color: '#B8962E' }}>GOLD</span>
        </Link>

        {/* Right icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '120px', justifyContent: 'flex-end' }}>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Language)}
            style={{ background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer', fontFamily: '"Jost", sans-serif', fontSize: '13px', color: '#111111', letterSpacing: '0.5px' }}
          >
            {(['TR', 'EN', 'DE', 'AR'] as Language[]).map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
          <button style={btnStyle}>
            {React.createElement(Heart, { size: 18, strokeWidth: 1.5, color: '#111111' })}
          </button>
          <button onClick={onCartClick} style={{ ...btnStyle, position: 'relative' }}>
            {React.createElement(ShoppingCart, { size: 18, strokeWidth: 1.5, color: '#111111' })}
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '-6px', right: '-6px', backgroundColor: '#B8962E', color: '#FFFFFF', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontFamily: '"Jost", sans-serif', fontWeight: 600 }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div style={{ position: 'fixed', top: '56px', left: 0, right: 0, bottom: 0, backgroundColor: '#FFFFFF', zIndex: 99, padding: '24px', overflowY: 'auto' }}>
          <nav>
            {items.map((item, i) => (
              <Link
                key={item}
                to={`/category/${menuRoutes[i]}`}
                onClick={() => setIsMenuOpen(false)}
                style={{ display: 'block', fontFamily: '"Jost", sans-serif', fontSize: '18px', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#111111', textDecoration: 'none', padding: '16px 0', borderBottom: '1px solid #ECECEC' }}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
