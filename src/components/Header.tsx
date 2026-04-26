import React from 'react';
import { ShoppingCart, Globe, Menu, X } from 'lucide-react';
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
          TR: ['Yüzük', 'Kolye', 'Bilezik', 'Küpe', 'Pırlanta', 'Etsy'],
          EN: ['Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Diamonds', 'Etsy'],
          DE: ['Ringe', 'Halsketten', 'Armbänder', 'Ohrringe', 'Diamanten', 'Etsy'],
          AR: ['خواتم', 'قلادات', 'أساور', 'أقراط', 'ألماس', 'إتسي'],
    };

    const menuRoutes = ['ring', 'necklace', 'bracelet', 'earring', 'diamond', 'etsy'];
    const items = menuItems[lang] || menuItems.TR;

    const languages: Language[] = ['TR', 'EN', 'DE', 'AR'];

    return (
          <header className="nav-luxury sticky top-0 z-50">
            {/* Main header */}
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                  {/* Logo */}
                        <Link
                                    to="/"
                                    className="font-serif text-2xl text-[#2C2C2C]"
                                    style={{ fontWeight: 300, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                                  >
                                  Pivot<span style={{ color: '#B8962E' }}>Gold</span>span>
                        </Link>Link>
                
                  {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                          {items.slice(0, 5).map((item, i) => (
                        <Link
                                        key={i}
                                        to={`/category/${menuRoutes[i]}`}
                                        className="text-[#2C2C2C] hover:text-[#B8962E] transition-colors duration-200"
                                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}
                                      >
                          {item}
                        </Link>Link>
                      ))}
                        </nav>nav>
                
                  {/* Right actions */}
                        <div className="flex items-center gap-5">
                          {/* Language selector */}
                                  <div className="hidden md:flex items-center gap-1">
                                              <Globe size={13} color="#8C7B6B" />
                                              <select
                                                              value={lang}
                                                              onChange={(e) => setLang(e.target.value as Language)}
                                                              className="bg-transparent text-[#8C7B6B] border-none outline-none cursor-pointer"
                                                              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em' }}
                                                            >
                                                {languages.map((l) => (
                                                                              <option key={l} value={l}>{l}</option>option>
                                                                            ))}
                                              </select>select>
                                  </div>div>
                        
                          {/* Cart */}
                                  <button
                                                onClick={onCartClick}
                                                className="relative flex items-center gap-1 text-[#2C2C2C] hover:text-[#B8962E] transition-colors"
                                              >
                                              <ShoppingCart size={18} strokeWidth={1.5} />
                                    {cartCount > 0 && (
                                                              <span className="badge-gold absolute -top-2 -right-2">
                                                                {cartCount}
                                                              </span>span>
                                              )}
                                  </button>button>
                        
                          {/* Mobile menu toggle */}
                                  <button
                                                className="md:hidden text-[#2C2C2C]"
                                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                              >
                                    {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
                                  </button>button>
                        </div>div>
                </div>div>
          
            {/* Mobile menu */}
                <AnimatePresence>
                  {isMenuOpen && (
                      <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="md:hidden bg-[#FAF7F2] border-t border-[#E8DDD0] overflow-hidden"
                                  >
                                  <div className="px-6 py-6 flex flex-col gap-5">
                                    {items.map((item, i) => (
                                                    <Link
                                                                        key={i}
                                                                        to={`/category/${menuRoutes[i]}`}
                                                                        className="text-[#2C2C2C] hover:text-[#B8962E] transition-colors"
                                                                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                                                                        onClick={() => setIsMenuOpen(false)}
                                                                      >
                                                      {item}
                                                    </Link>Link>
                                                  ))}
                                                <div className="flex gap-3 pt-3 border-t border-[#E8DDD0]">
                                                  {languages.map((l) => (
                                                      <button
                                                                            key={l}
                                                                            onClick={() => { setLang(l); setIsMenuOpen(false); }}
                                                                            className={`text-xs font-medium transition-colors ${lang === l ? 'text-[#B8962E]' : 'text-[#8C7B6B] hover:text-[#B8962E]'}`}
                                                                            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}
                                                                          >
                                                        {l}
                                                      </button>button>
                                                    ))}
                                                </div>div>
                                  </div>div>
                      </motion.div>motion.div>
                    )}
                </AnimatePresence>AnimatePresence>
          </header>header>
        );
};</header>
