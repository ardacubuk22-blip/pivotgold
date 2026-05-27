import React from 'react';
import { ShoppingCart, Search, Menu, X, Heart, Phone } from 'lucide-react';
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
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
          const onScroll = () => setIsScrolled(window.scrollY > 10);
          window.addEventListener('scroll', onScroll);
          return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const menuItems: Record<Language, string[]> = {
          TR: ['Yeni', 'Koleksiyonlar', 'Yuzuk', 'Kolye', 'Bilezik', 'Kupe', 'Pırlanta'],
          EN: ['New', 'Collections', 'Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Diamond'],
    };
    const menuRoutes = ['new', 'collections', 'ring', 'necklace', 'bracelet', 'earring', 'diamond'];
    const items = menuItems[lang] || menuItems.TR;

    const btnStyle: React.CSSProperties = { background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' };

    return (
          <header style={{
                  backgroundColor: isScrolled ? 'rgba(255,255,255,0.97)' : '#FFFFFF',
                  borderBottom: '1px solid #E8E0D0',
                  height: '64px',
                  position: 'sticky',
                  top: 0,
                  zIndex: 100,
                  width: '100%',
                  boxShadow: isScrolled ? '0 2px 20px rgba(184,150,46,0.1)' : 'none',
                  transition: 'all 0.3s ease'
          }}>
                  <div style={{ maxWidth: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
                    {/* Left icons */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '140px' }}>
                                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={btnStyle}>
                                          {isMenuOpen
                                                          ? React.createElement(X, { size: 22, strokeWidth: 1.5, color: '#111111' })
                                                          : React.createElement(Menu, { size: 22, strokeWidth: 1.5, color: '#111111' })}
                                        </button>button>
                                        <button style={btnStyle}>
                                          {React.createElement(Search, { size: 20, strokeWidth: 1.5, color: '#111111' })}
                                        </button>button>
                            </div>div>

                    {/* Center logo */}
                            <Link
                                        to='/'
                                        style={{
                                                      fontFamily: '"Oswald", sans-serif',
                                                      fontWeight: 600,
                                                      fontSize: '22px',
                                                      letterSpacing: '0.15em',
                                                      textTransform: 'uppercase',
                                                      color: '#111111',
                                                      textDecoration: 'none',
                                                      position: 'absolute',
                                                      left: '50%',
                                                      transform: 'translateX(-50%)',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      gap: '2px'
                                        }}
                                      >
                                      <span>PIVOT</span>span>
                                      <span style={{ color: '#B8962E' }}>GOLD</span>span>
                                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#B8962E', display: 'inline-block', marginLeft: '4px', marginBottom: '8px' }}></span>span>
                            </Link>Link>
                  
                    {/* Right icons */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '140px', justifyContent: 'flex-end' }}>
                                    <a href='tel:+905526487383' style={{ ...btnStyle, textDecoration: 'none' }}>
                                      {React.createElement(Phone, { size: 18, strokeWidth: 1.5, color: '#B8962E' })}
                                    </a>a>
                                    <select
                                                  value={lang}
                                                  onChange={(e) => setLang(e.target.value as Language)}
                                                  style={{
                                                                  background: 'transparent',
                                                                  border: '1px solid #E8E0D0',
                                                                  borderRadius: '2px',
                                                                  outline: 'none',
                                                                  cursor: 'pointer',
                                                                  fontFamily: '"Jost", sans-serif',
                                                                  fontSize: '12px',
                                                                  fontWeight: 500,
                                                                  color: '#111111',
                                                                  letterSpacing: '1px',
                                                                  padding: '4px 6px'
                                                  }}
                                                >
                                      {(['TR', 'EN'] as Language[]).map((l) => (
                                                                <option key={l} value={l}>{l}</option>option>
                                                              ))}
                                    </select>select>
                                    <button style={btnStyle}>
                                      {React.createElement(Heart, { size: 18, strokeWidth: 1.5, color: '#111111' })}
                                    </button>button>
                                    <button onClick={onCartClick} style={{ ...btnStyle, position: 'relative' }}>
                                      {React.createElement(ShoppingCart, { size: 20, strokeWidth: 1.5, color: '#111111' })}
                                      {cartCount > 0 && (
                          <span style={{
                                            position: 'absolute',
                                            top: '-7px',
                                            right: '-7px',
                                            backgroundColor: '#B8962E',
                                            color: '#FFFFFF',
                                            borderRadius: '50%',
                                            width: '18px',
                                            height: '18px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '10px',
                                            fontFamily: '"Jost", sans-serif',
                                            fontWeight: 700
                          }}>
                            {cartCount}
                          </span>span>
                                                )}
                                    </button>button>
                          </div>div>
                  </div>div>
          
            {/* Top bar - announcement */}
                <div style={{ display: 'none' }}></div>div>
          
            {/* Mobile/Desktop menu */}
            {isMenuOpen && (
                    <div style={{
                                position: 'fixed',
                                top: '64px',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: '#FFFFFF',
                                zIndex: 99,
                                padding: '32px 48px',
                                overflowY: 'auto'
                    }}>
                              <nav>
                                {items.map((item, i) => (
                                    <Link
                                                      key={item}
                                                      to={`/category/${menuRoutes[i]}`}
                                                      onClick={() => setIsMenuOpen(false)}
                                                      style={{
                                                                          display: 'flex',
                                                                          alignItems: 'center',
                                                                          justifyContent: 'space-between',
                                                                          fontFamily: '"Oswald", sans-serif',
                                                                          fontSize: '22px',
                                                                          fontWeight: 400,
                                                                          letterSpacing: '0.05em',
                                                                          textTransform: 'uppercase',
                                                                          color: '#111111',
                                                                          textDecoration: 'none',
                                                                          padding: '18px 0',
                                                                          borderBottom: '1px solid #ECECEC',
                                                                          transition: 'color 0.2s'
                                                      }}
                                                      onMouseEnter={e => (e.currentTarget.style.color = '#B8962E')}
                                                      onMouseLeave={e => (e.currentTarget.style.color = '#111111')}
                                                    >
                                      {item}
                                                    <span style={{ fontSize: '14px', color: '#B8962E' }}>→</span>span>
                                    </Link>Link>
                                  ))}
                              </nav>nav>
                              <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid #ECECEC' }}>
                                          <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', color: '#6B6B6B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                                            {lang === 'TR' ? 'Bizi Takip Edin' : 'Follow Us'}
                                          </p>p>
                                          <div style={{ display: 'flex', gap: '20px' }}>
                                                        <a href='https://www.instagram.com/pivot_gold' target='_blank' rel='noopener noreferrer'
                                                                          style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', color: '#111111', textDecoration: 'none', fontWeight: 500 }}>Instagram</a>a>
                                                        <a href='https://wa.me/905526487383' target='_blank' rel='noopener noreferrer'
                                                                          style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', color: '#111111', textDecoration: 'none', fontWeight: 500 }}>WhatsApp</a>a>
                                                        <a href='https://pivotgold.etsy.com' target='_blank' rel='noopener noreferrer'
                                                                          style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', color: '#111111', textDecoration: 'none', fontWeight: 500 }}>Etsy</a>a>
                                          </div>div>
                              </div>div>
                    </div>div>
                )}
          </header>header>
        );
};
</Link>
