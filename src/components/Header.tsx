import React from 'react';
import { ShoppingCart, Globe, Menu, X, ExternalLink, ShieldCheck, Truck, Award } from 'lucide-react';
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
    AR: ['خواتم', 'قلادات', 'أساور', 'أقراط', 'ألماس', 'إتسي']
  };

  const externalLinks: Record<string, string> = {
    'Etsy': 'https://pivotgold.etsy.com',
    'إتسي': 'https://pivotgold.etsy.com'
  };

  const categoryMap: Record<string, string> = {
    'Yüzük': 'yüzük', 'Ring': 'ring', 'Ringe': 'ringe', 'خواتم': 'خواتم',
    'Kolye': 'kolye', 'Necklace': 'necklace', 'Halsketten': 'halsketten', 'قلادات': 'قلادات',
    'Bilezik': 'bilezik', 'Bracelet': 'bracelet', 'Armbänder': 'armbänder', 'أساور': 'أساور',
    'Küpe': 'küpe', 'Earring': 'earring', 'Ohrringe': 'ohrringe', 'أقراط': 'أقراط',
    'Pırlanta': 'pırlanta', 'Diamonds': 'diamonds', 'Diamanten': 'diamanten', 'ألماس': 'ألماس'
  };

  const etsyLabels = {
    TR: 'Etsy Mağazamız',
    EN: 'Our Etsy Shop',
    DE: 'Unser Etsy-Shop',
    AR: 'متجرنا على Etsy'
  };

  const trustBadges = {
    TR: [
      { icon: ShieldCheck, text: 'Güvenli Ödeme' },
      { icon: Award, text: 'Orijinallik Garantisi' },
      { icon: Truck, text: 'Hızlı Teslimat' }
    ],
    EN: [
      { icon: ShieldCheck, text: 'Secure Payment' },
      { icon: Award, text: 'Authenticity Guarantee' },
      { icon: Truck, text: 'Fast Delivery' }
    ],
    DE: [
      { icon: ShieldCheck, text: 'Sichere Zahlung' },
      { icon: Award, text: 'Echtheitsgarantie' },
      { icon: Truck, text: 'Schnelle Lieferung' }
    ],
    AR: [
      { icon: ShieldCheck, text: 'دفع آمن' },
      { icon: Award, text: 'ضمان الأصالة' },
      { icon: Truck, text: 'توصيل سريع' }
    ]
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar with Trust Badges */}
      <div className="bg-zinc-900 text-white py-2 text-[10px] uppercase tracking-[0.2em] font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-between items-center">
          <div className="hidden sm:flex items-center space-x-8">
            {trustBadges[lang].map((badge, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <badge.icon size={12} className="text-gold" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="opacity-60">{lang === 'TR' ? 'Ücretsiz Kargo' : lang === 'EN' ? 'Free Shipping' : lang === 'DE' ? 'Kostenloser Versand' : 'شحن مجاني'}</span>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl md:text-3xl font-serif tracking-[0.2em] gold-text-gradient cursor-pointer uppercase">PIVOT GOLD</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden md:flex space-x-8 ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {menuItems[lang].map((item) => {
                const isExternal = externalLinks[item];
                if (isExternal) {
                  return (
                    <a
                      key={item}
                      href={isExternal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-zinc-600 hover:text-gold transition-colors tracking-wide uppercase"
                    >
                      {item}
                    </a>
                  );
                }
                const categorySlug = categoryMap[item];
                return (
                  <Link
                    key={item}
                    to={`/category/${categorySlug || item.toLowerCase()}`}
                    className="text-sm font-medium text-zinc-600 hover:text-gold transition-colors tracking-wide uppercase"
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className={`flex items-center space-x-6 ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {/* Etsy Link */}
              <a 
                href="https://pivotgold.etsy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden lg:flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-gold transition-colors"
              >
                <span>{etsyLabels[lang]}</span>
                <ExternalLink size={14} />
              </a>

            {/* Language Switcher */}
            <div className={`flex items-center space-x-2 border-r border-zinc-200 pr-4 ${lang === 'AR' ? 'border-r-0 border-l pl-4 pr-0' : ''}`}>
              <button
                onClick={() => setLang('TR')}
                className={`flex items-center space-x-1 transition-opacity ${lang === 'TR' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <span className="text-[10px] font-bold">TR</span>
                <img src="https://flagcdn.com/w20/tr.png" alt="TR" className="w-4 h-3 object-cover rounded-sm" />
              </button>
              <button
                onClick={() => setLang('EN')}
                className={`flex items-center space-x-1 transition-opacity ${lang === 'EN' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <span className="text-[10px] font-bold">EN</span>
                <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-4 h-3 object-cover rounded-sm" />
              </button>
              <button
                onClick={() => setLang('DE')}
                className={`flex items-center space-x-1 transition-opacity ${lang === 'DE' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <span className="text-[10px] font-bold">DE</span>
                <img src="https://flagcdn.com/w20/de.png" alt="DE" className="w-4 h-3 object-cover rounded-sm" />
              </button>
              <button
                onClick={() => setLang('AR')}
                className={`flex items-center space-x-1 transition-opacity ${lang === 'AR' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <span className="text-[10px] font-bold">AR</span>
                <img src="https://flagcdn.com/w20/sa.png" alt="AR" className="w-4 h-3 object-cover rounded-sm" />
              </button>
            </div>

            {/* Cart */}
            <button 
              onClick={onCartClick}
              className="relative p-2 text-zinc-600 hover:text-gold transition-colors"
            >
              <ShoppingCart size={22} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-gold text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-zinc-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {menuItems[lang].map((item) => {
                const isExternal = externalLinks[item];
                if (isExternal) {
                  return (
                    <a
                      key={item}
                      href={isExternal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-4 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-gold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  );
                }
                const categorySlug = categoryMap[item];
                return (
                  <Link
                    key={item}
                    to={`/category/${categorySlug || item.toLowerCase()}`}
                    className="block px-3 py-4 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-gold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

