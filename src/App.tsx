import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { ProductDetail } from './components/ProductDetail';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Language, Product, CartItem } from './types';

// Announcement bar component
const AnnouncementBar: React.FC<{ lang: Language }> = ({ lang }) => {
    const messages = lang === 'TR'
      ? ['Ucretsiz Kargo: 500 TL uzeri siparislerde', '14 Ayar & 18 Ayar Altin Garantisi', 'Yeni Koleksiyon Geldi!', 'Instagram: @pivot_gold']
          : ['Free Shipping Over 500 TRY', '14K & 18K Gold Guarantee', 'New Collection Available!', 'Instagram: @pivot_gold'];
    const [idx, setIdx] = useState(0);

    useEffect(() => {
          const t = setInterval(() => setIdx(p => (p + 1) % messages.length), 3500);
          return () => clearInterval(t);
    }, [lang]);

    return (
          <div style={{ backgroundColor: '#111111', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 400, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center', transition: 'opacity 0.5s' }}>
                            <span style={{ color: '#B8962E', marginRight: '8px' }}>&#9670;</span>span>
                    {messages[idx]}
                            <span style={{ color: '#B8962E', marginLeft: '8px' }}>&#9670;</span>span>
                  </p>p>
          </div>div>
        );
};

export default function App() {
    const [lang, setLang] = useState<Language>('TR');
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
        const savedCart = localStorage.getItem('pivotgold_cart');
        if (savedCart) {
                try { setCartItems(JSON.parse(savedCart)); } catch (e) { console.error('Cart parse error', e); }
        }
  }, []);

  useEffect(() => {
        localStorage.setItem('pivotgold_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
        setCartItems(prev => {
                const existing = prev.find(item => item.id === product.id);
                if (existing) {
                          return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
                }
                return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
        setCartItems(prev =>
                prev.map(item => {
                          if (item.id === id) {
                                      const newQty = Math.max(1, item.quantity + delta);
                                      return { ...item, quantity: newQty };
                          }
                          return item;
                })
                         );
  };

  const removeFromCart = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
        <Router>
              <div className={`min-h-screen bg-white selection:bg-gold/30 ltr`} dir="ltr">
                      <AnnouncementBar lang={lang} />
                      <Header lang={lang} setLang={setLang} cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
                      <Routes>
                                <Route
                                              path="/"
                                              element={<HomePage lang={lang} onAddToCart={addToCart} onViewDetails={setSelectedProduct} />}
                                            />
                                <Route
                                              path="/category/:categoryName"
                                              element={<CategoryPage lang={lang} onAddToCart={addToCart} onViewDetails={setSelectedProduct} />}
                                            />
                                <Route
                                              path="/checkout"
                                              element={<CheckoutPage lang={lang} cartItems={cartItems} />}
                                            />
                      </Routes>Routes>
                      <Footer lang={lang} />
                      <Cart
                                  isOpen={isCartOpen}
                                  onClose={() => setIsCartOpen(false)}
                                  lang={lang}
                                  items={cartItems}
                                  onUpdateQuantity={updateQuantity}
                                  onRemove={removeFromCart}
                                />
                      <ProductDetail
                                  product={selectedProduct}
                                  lang={lang}
                                  onClose={() => setSelectedProduct(null)}
                                  onAddToCart={(p) => { addToCart(p); setSelectedProduct(null); }}
                                />
                      <FloatingWhatsApp lang={lang} />
              </div>div>
        </Router>Router>
      );
}
</Router>
