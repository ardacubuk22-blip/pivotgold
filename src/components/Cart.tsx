import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, CartItem } from '../types';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, lang, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const labels = {
    TR: {
      title: 'Alışveriş Sepetim',
      empty: 'Sepetiniz henüz boş.',
      subtotal: 'Ara Toplam',
      checkout: 'Ödemeye Geç',
      continue: 'Alışverişe Devam Et'
    },
    EN: {
      title: 'My Shopping Cart',
      empty: 'Your cart is empty.',
      subtotal: 'Subtotal',
      checkout: 'Checkout',
      continue: 'Continue Shopping'
    },
    DE: {
      title: 'Mein Warenkorb',
      empty: 'Ihr Warenkorb ist noch leer.',
      subtotal: 'Zwischensumme',
      checkout: 'Zur Kasse',
      continue: 'Weiter einkaufen'
    },
    AR: {
      title: 'سلة تسوقي',
      empty: 'سلتك فارغة حالياً.',
      subtotal: 'المجموع الفرعي',
      checkout: 'إتمام الشراء',
      continue: 'مواصلة التسوق'
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: lang === 'AR' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: lang === 'AR' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed top-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col ${lang === 'AR' ? 'left-0' : 'right-0'}`}
          >
            <div className={`p-6 border-b border-zinc-100 flex justify-between items-center ${lang === 'AR' ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center space-x-3 ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <ShoppingBag size={20} className="text-gold" />
                <h2 className="text-xl font-serif text-zinc-900">{labels[lang].title}</h2>
              </div>
              <button onClick={onClose} className="p-2 text-zinc-400 hover:text-zinc-900">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-400 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-light">{labels[lang].empty}</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={item.id} className={`flex space-x-4 ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-24 h-32 bg-zinc-100 rounded-sm overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name[lang]} className="w-full h-full object-cover" />
                      </div>
                      <div className={`flex-1 flex flex-col justify-between py-1 ${lang === 'AR' ? 'text-right' : ''}`}>
                        <div>
                          <div className={`flex justify-between items-start ${lang === 'AR' ? 'flex-row-reverse' : ''}`}>
                            <h3 className="font-serif text-lg text-zinc-900 leading-tight">
                              {item.name[lang]}
                            </h3>
                            <button 
                              onClick={() => onRemove(item.id)}
                              className="text-zinc-300 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">
                            {item.category[lang]}
                          </p>
                        </div>
                        
                        <div className={`flex justify-between items-end ${lang === 'AR' ? 'flex-row-reverse' : ''}`}>
                          <div className={`flex items-center border border-zinc-200 rounded-sm ${lang === 'AR' ? 'flex-row-reverse' : ''}`}>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 hover:text-gold transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 hover:text-gold transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="text-gold font-medium">
                            {(item.price * item.quantity).toLocaleString('tr-TR')} ₺
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-zinc-100 bg-zinc-50">
                <div className={`flex justify-between items-center mb-6 ${lang === 'AR' ? 'flex-row-reverse' : ''}`}>
                  <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">
                    {labels[lang].subtotal}
                  </span>
                  <span className="text-2xl font-serif text-zinc-900">
                    {total.toLocaleString('tr-TR')} ₺
                  </span>
                </div>
                <Link 
                  to="/checkout"
                  onClick={onClose}
                  className="block w-full py-5 gold-gradient text-white text-center font-bold uppercase tracking-[0.2em] text-xs hover:shadow-xl transition-all mb-4"
                >
                  {labels[lang].checkout}
                </Link>
                <button 
                  onClick={onClose}
                  className="w-full py-2 text-zinc-400 hover:text-zinc-900 text-[10px] uppercase tracking-widest font-bold transition-colors"
                >
                  {labels[lang].continue}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
