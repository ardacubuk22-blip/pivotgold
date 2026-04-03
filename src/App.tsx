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

export default function App() {
  const [lang, setLang] = useState<Language>('TR');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Load cart from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('luvia_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('luvia_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className={`min-h-screen bg-white selection:bg-gold/30 ${lang === 'AR' ? 'rtl' : 'ltr'}`} dir={lang === 'AR' ? 'rtl' : 'ltr'}>
        <Header 
          lang={lang} 
          setLang={setLang} 
          cartCount={cartCount} 
          onCartClick={() => setIsCartOpen(true)} 
        />

        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                lang={lang} 
                onAddToCart={addToCart} 
                onViewDetails={setSelectedProduct} 
              />
            } 
          />
          <Route 
            path="/category/:categoryName" 
            element={
              <CategoryPage 
                lang={lang} 
                onAddToCart={addToCart} 
                onViewDetails={setSelectedProduct} 
              />
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <CheckoutPage 
                lang={lang} 
                cartItems={cartItems} 
              />
            } 
          />
        </Routes>

        <Footer lang={lang} />

        {/* Overlays */}
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
          onAddToCart={(p) => {
            addToCart(p);
            setSelectedProduct(null);
          }}
        />

        <FloatingWhatsApp lang={lang} />
      </div>
    </Router>
  );
}
