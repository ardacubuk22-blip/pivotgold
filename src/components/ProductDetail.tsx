import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Product } from '../types';
import { X, ShieldCheck, Truck, RotateCcw, CreditCard } from 'lucide-react';

interface ProductDetailProps {
  product: Product | null;
  lang: Language;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, lang, onClose, onAddToCart }) => {
  if (!product) return null;

  const labels = {
    TR: {
      addToCart: 'Sepete Ekle',
      description: 'Açıklama',
      details: 'Ürün Özellikleri',
      installments: 'Taksit Seçenekleri',
      installmentText: 'Kredi kartına 12 aya varan taksit imkanı.',
      shipping: 'Ücretsiz Sigortalı Kargo',
      return: '14 Gün İçinde İade',
      warranty: 'Ömür Boyu Bakım Garantisi'
    },
    EN: {
      addToCart: 'Add to Cart',
      description: 'Description',
      details: 'Product Details',
      installments: 'Installment Options',
      installmentText: 'Up to 12 months installment on credit cards.',
      shipping: 'Free Insured Shipping',
      return: '14 Days Return',
      warranty: 'Lifetime Maintenance Warranty'
    },
    DE: {
      addToCart: 'In den Warenkorb',
      description: 'Beschreibung',
      details: 'Produktdetails',
      installments: 'Ratenzahlungsoptionen',
      installmentText: 'Bis zu 12 Monatsraten auf Kreditkarten.',
      shipping: 'Kostenloser versicherter Versand',
      return: '14 Tage Rückgaberecht',
      warranty: 'Lebenslange Wartungsgarantie'
    },
    AR: {
      addToCart: 'أضف إلى السلة',
      description: 'الوصف',
      details: 'تفاصيل المنتج',
      installments: 'خيارات التقسيط',
      installmentText: 'تقسيط يصل إلى 12 شهراً على البطاقات الائتمانية.',
      shipping: 'شحن مؤمن مجاني',
      return: 'إرجاع خلال 14 يوماً',
      warranty: 'ضمان صيانة مدى الحياة'
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className={`relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl ${lang === 'AR' ? 'text-right' : ''}`}
        >
          <button
            onClick={onClose}
            className={`absolute top-4 p-2 text-zinc-400 hover:text-zinc-900 z-10 ${lang === 'AR' ? 'left-4' : 'right-4'}`}
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className={`bg-zinc-100 ${lang === 'AR' ? 'md:order-2' : ''}`}>
              <img
                src={product.image}
                alt={product.name[lang]}
                className="w-full h-full object-cover aspect-square md:aspect-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Info Section */}
            <div className="p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
                {product.category[lang]}
              </p>
              <h2 className="text-4xl font-serif text-zinc-900 mb-4">
                {product.name[lang]}
              </h2>
              <p className="text-2xl font-medium text-zinc-900 mb-8 tracking-wider">
                {product.price.toLocaleString('tr-TR')} ₺
              </p>

              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">
                    {labels[lang].description}
                  </h4>
                  <p className="text-zinc-600 font-light leading-relaxed">
                    {product.description[lang]}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">
                    {labels[lang].details}
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.details[lang].map((detail, idx) => (
                      <li key={idx} className={`text-xs text-zinc-500 flex items-center ${lang === 'AR' ? 'flex-row-reverse' : ''}`}>
                        <span className={`w-1 h-1 bg-gold rounded-full ${lang === 'AR' ? 'ml-2' : 'mr-2'}`}></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-sm">
                  <div className={`flex items-center space-x-3 text-zinc-700 mb-1 ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <CreditCard size={18} className="text-gold" />
                    <h4 className="text-xs font-bold uppercase tracking-wider">
                      {labels[lang].installments}
                    </h4>
                  </div>
                  <p className={`text-[11px] text-zinc-500 ${lang === 'AR' ? 'mr-7' : 'ml-7'}`}>
                    {labels[lang].installmentText}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onAddToCart(product)}
                className="w-full py-5 gold-gradient text-white font-bold uppercase tracking-[0.2em] text-xs hover:shadow-xl transition-all mb-8"
              >
                {labels[lang].addToCart}
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 border-t border-zinc-100 pt-8">
                <div className="text-center">
                  <Truck size={20} className="mx-auto text-gold mb-2" />
                  <p className="text-[9px] uppercase tracking-wider text-zinc-500">{labels[lang].shipping}</p>
                </div>
                <div className="text-center">
                  <RotateCcw size={20} className="mx-auto text-gold mb-2" />
                  <p className="text-[9px] uppercase tracking-wider text-zinc-500">{labels[lang].return}</p>
                </div>
                <div className="text-center">
                  <ShieldCheck size={20} className="mx-auto text-gold mb-2" />
                  <p className="text-[9px] uppercase tracking-wider text-zinc-500">{labels[lang].warranty}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
