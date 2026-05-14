import React from 'react';
import { ShoppingCart, Search, Menu, X, Heart } from 'lucide-react';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface HeaderProps {
      lang: Language;
      setLang: (lang: Language) => void;
      cartCount: number;
      onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, cartCount, onCartClick }) => {
      const [isMenuOpen, setIsMenuOpen] = React.useState(false);

      const menuItems = {
              TR: ['Yeni', 'Kategoriler', 'Koleksiyon', 'Piercing', 'Design House'],
              EN: ['New', 'Categories', 'Collection', 'Piercing', 'Design House'],
              DE: ['Neu', 'Kategorien', 'Kollektion', 'Piercing', 'Design House'],
              AR: ['جديد', 'الفئات', 'المجموعة', 'ثقب', 'بيت التصميم'],
      };
      const menuRoutes = ['new', 'categories', 'collection', 'piercing', 'design-house'];
      const items = menuItems[lang] || menuItems.TR;

      return (
              <header style={{
                        backgroundColor: '#FFFFFF',
                        borderBottom: '1px solid #ECECEC',
                        height: '56px',
                        position: 'sticky',
                        top: 0,
                        zIndex: 100,
                        width: '100%',
              }}>
                        <div style={{
                          maxWidth: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0 24px',
              }}>
                            {/* Left: hamburger + search */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '120px' }}>
                                                  <button
                                                                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                                                                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
                                                                  aria-label="Menu"
                                                                >
                                                      {isMenuOpen
                                                                        ? <X size={20} strokeWidth={1.5} color="#111111" />
                                                                        : <Menu size={20} strokeWidth={1.5} color="#111111" />
                                                      }
                                                  </button>button>
                                              <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }} aria-label="Search">
                                                          <Search size={18} strokeWidth={1.5} color="#111111" />
                                              </button>button>
                                    </div>div>
                        
                            {/* Center: Logo */}
                                <Link
                                              to="/"
                                              style={{
                                                              fontFamily: '"Jost", sans-serif',
                                                              fontWeight: 700,
                                                              fontSize: '18px',
                                                              letterSpacing: '0.1em',
                                                              textTransform: 'uppercase',
                                                              color: '#111111',
                                                              textDecoration: 'none',
                                                              position: 'absolute',
                                                              left: '50%',
                                                              transform: 'translateX(-50%)',
                                              }}
                                            >
                                          PIVOT<span style={{ color: '#B8962E' }}>GOLD</span>span>
                                </Link>Link>
                        
                            {/* Right: account, wishlist, cart */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '120px', justifyContent: 'flex-end' }}>
                                    {/* Language */}
                                          <select
                                                          value={lang}
                                                          onChange={(e) => setLang(e.target.value as Language)}
                                                          style={{
                                                                            background: 'transparent',
                                                                            border: 'none',
                                                                            outline: 'none',
                                                                            cursor: 'pointer',
                                                                            fontFamily: '"Jost", sans-serif',
                                                                            fontSize: '13px',
                                                                            color: '#111111',
                                                                            letterSpacing: '0.5px',
                                                          }}
                                                        >
                                              {(['TR','EN','DE','AR'] as Language[]).map(l => (
                                                                          <option key={l} value={l}>{l}</option>option>
                                                                        ))}
                                          </select>select>
                                          <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }} aria-label="Wishlist">
                                                      <Heart size={18} strokeWidth={1.5} color="#111111" />
                                          </button>button>
                                          <button
                                                          onClick={onCartClick}
                                                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', position: 'relative' }}
                                                          aria-label="Cart"
                                                        >
                                                      <ShoppingCart size={18} strokeWidth={1.5} color="#111111" />
                                              {cartCount > 0 && (
                                                                          <span style={{
                                                                                              position: 'absolute',
                                                                                              top: '-8px',
                                                                                              right: '-8px',
                                                                                              background: '#B8962E',
                                                                                              color: '#FFFFFF',
                                                                                              borderRadius: '50%',
                                                                                              width: '16px',
                                                                                              height: '16px',
                                                                                              fontSize: '10px',
                                                                                              display: 'flex',
                                                                                              alignItems: 'center',
                                                                                              justifyContent: 'center',
                                                                                              fontFamily: '"Jost", sans-serif',
                                                                                              fontWeight: 500,
                                                                          }}>
                                                                              {cartCount}
                                                                          </span>span>
                                                      )}
                                          </button>button>
                                </div>div>
                        </div>div>
              
                  {/* Desktop Nav (below header on hover) - shown in mobile as dropdown */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                                            style={{
                                                              backgroundColor: '#FFFFFF',
                                                              borderTop: '1px solid #ECECEC',
                                                              borderBottom: '1px solid #ECECEC',
                                                              overflow: 'hidden',
                                                              position: 'absolute',
                                                              top: '56px',
                                                              left: 0,
                                                              right: 0,
                                                              zIndex: 99,
                                            }}
                                          >
                                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                            {items.map((item, i) => (
                                                              <Link
                                                                                    key={i}
                                                                                    to={`/category/${menuRoutes[i]}`}
                                                                                    onClick={() => setIsMenuOpen(false)}
                                                                                    style={{
                                                                                                            fontFamily: '"Jost", sans-serif',
                                                                                                            fontSize: '14px',
                                                                                                            fontWeight: 500,
                                                                                                            letterSpacing: '0.5px',
                                                                                                            textTransform: 'uppercase',
                                                                                                            color: '#111111',
                                                                                                            textDecoration: 'none',
                                                                                        }}
                                                                                  >
                                                                  {item}
                                                              </Link>Link>
                                                            ))}
                                        </div>div>
                            </motion.div>motion.div>
                          )}
                    </AnimatePresence>AnimatePresence>
              
                  {/* Desktop horizontal nav */}
                    <nav style={{
                          display: 'none',
                          position: 'absolute',
                          top: '56px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          gap: '32px',
                          zIndex: 99,
              }}
                                className="md:!flex"
                              >
                        {items.map((item, i) => (
                                            <Link
                                                            key={i}
                                                            to={`/category/${menuRoutes[i]}`}
                                                            style={{
                                                                              fontFamily: '"Jost", sans-serif',
                                                                              fontSize: '14px',
                                                                              fontWeight: 500,
                                                                              letterSpacing: '0.5px',
                                                                              textTransform: 'uppercase',
                                                                              color: '#111111',
                                                                              textDecoration: 'none',
                                                                              padding: '12px 0',
                                                                              borderBottom: '2px solid transparent',
                                                                              transition: 'border-color 0.2s',
                                                            }}
                                                            onMouseEnter={e => (e.currentTarget.style.borderBottomColor = '#111111')}
                                                            onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'transparent')}
                                                          >
                                                {item}
                                            </Link>Link>
                                          ))}
                    </nav>nav>
              </header>header>
            );
};
</button>
