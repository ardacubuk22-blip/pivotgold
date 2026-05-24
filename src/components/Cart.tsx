import React, { useState } from 'react';
import { Language, CartItem } from '../types';
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

    const labels: Record<Language, { title: string; empty: string; subtotal: string; checkout: string; continue: string }> = {
          TR: { title: 'Alışveriş Sepetim', empty: 'Sepetiniz henüz boş.', subtotal: 'Ara Toplam', checkout: 'Ödemeye Geç', continue: 'Alışverişe Devam Et' },
          EN: { title: 'My Shopping Cart', empty: 'Your cart is empty.', subtotal: 'Subtotal', checkout: 'Checkout', continue: 'Continue Shopping' },
          DE: { title: 'Mein Warenkorb', empty: 'Ihr Warenkorb ist noch leer.', subtotal: 'Zwischensumme', checkout: 'Zur Kasse', continue: 'Weiter einkaufen' },
          AR: { title: 'سلة تسوقي', empty: 'سلتك فارغة حالياً.', subtotal: 'المجموع الفرعي', checkout: 'إتمام الشراء', continue: 'مواصلة التسوق' },
    };

    const L = labels[lang] || labels.TR;
    const isRTL = lang === 'AR';
    const formattedTotal = new Intl.NumberFormat('tr-TR').format(total);

    if (!isOpen) return null;

    return (
          <>
            {/* Overlay */}
                <div
                          onClick={onClose}
                          style={{
                                      position: 'fixed', inset: 0,
                                      backgroundColor: 'rgba(0,0,0,0.4)',
                                      zIndex: 100,
                          }}
                        />
          
            {/* Drawer */}
                <div
                          style={{
                                      position: 'fixed',
                                      top: 0,
                                      [isRTL ? 'left' : 'right']: 0,
                                      height: '100%',
                                      width: '100%',
                                      maxWidth: '420px',
                                      backgroundColor: '#FFFFFF',
                                      zIndex: 101,
                                      display: 'flex',
                                      flexDirection: 'column',
                                      boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
                          }}
                        >
                  {/* Header */}
                        <div style={{
                                    padding: '20px 24px',
                                    borderBottom: '1px solid #ECECEC',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: isRTL ? 'row-reverse' : 'row',
                        }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B8962E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                                              </svg>svg>
                                              <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '18px', fontWeight: 500, color: '#111111', textTransform: 'uppercase', margin: 0 }}>
                                                {L.title}
                                              </h2>h2>
                                  </div>div>
                                  <button
                                                onClick={onClose}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#6B6B6B', display: 'flex', alignItems: 'center' }}
                                              >
                                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                                              </svg>svg>
                                  </button>button>
                        </div>div>
                
                  {/* Items */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                          {items.length === 0 ? (
                                      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', color: '#6B6B6B' }}>
                                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ECECEC" strokeWidth="1">
                                                                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                                                    </svg>svg>
                                                    <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14px', fontWeight: 300 }}>{L.empty}</p>p>
                                      </div>div>
                                    ) : (
                                      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                        {items.map((item) => (
                                                        <div key={item.id} style={{ display: 'flex', gap: '16px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                                          {/* Image */}
                                                                          <div style={{ width: '80px', height: '100px', backgroundColor: '#F5F3EE', overflow: 'hidden', flexShrink: 0 }}>
                                                                                              <img src={item.image} alt={item.name[lang]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                                          </div>div>
                                                        
                                                          {/* Info */}
                                                                          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: isRTL ? 'right' : 'left' }}>
                                                                                              <div>
                                                                                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                                                                                                                            <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14px', fontWeight: 400, color: '#111111', margin: 0, lineHeight: '1.4' }}>
                                                                                                                                              {item.name[lang]}
                                                                                                                                              </p>p>
                                                                                                                                            <button
                                                                                                                                                                        onClick={() => onRemove(item.id)}
                                                                                                                                                                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: '#CCCCCC', flexShrink: 0, display: 'flex' }}
                                                                                                                                                                      >
                                                                                                                                                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                                                                                                                                                                  <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
                                                                                                                                                                        </svg>svg>
                                                                                                                                              </button>button>
                                                                                                                      </div>div>
                                                                                                                    <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 300, color: '#6B6B6B', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                                                                                                      {item.category[lang]}
                                                                                                                      </p>p>
                                                                                                </div>div>
                                                                          
                                                                            {/* Qty + Price */}
                                                                                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                                                                                                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ECECEC', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                                                                                                                            <button onClick={() => onUpdateQuantity(item.id, -1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 10px', color: '#111111', fontFamily: '"Jost", sans-serif', fontSize: '16px' }}>−</button>button>
                                                                                                                                            <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 400, color: '#111111', width: '28px', textAlign: 'center' }}>{item.quantity}</span>span>
                                                                                                                                            <button onClick={() => onUpdateQuantity(item.id, 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 10px', color: '#111111', fontFamily: '"Jost", sans-serif', fontSize: '16px' }}>+</button>button>
                                                                                                                      </div>div>
                                                                                                                    <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14px', fontWeight: 400, color: '#111111', margin: 0 }}>
                                                                                                                      {new Intl.NumberFormat('tr-TR').format(item.price * item.quantity)} TL
                                                                                                                      </p>p>
                                                                                                </div>div>
                                                                          </div>div>
                                                        </div>div>
                                                      ))}
                                      </div>div>
                                  )}
                        </div>div>
                
                  {/* Footer */}
                  {items.length > 0 && (
                                    <div style={{ borderTop: '1px solid #ECECEC', padding: '20px 24px' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                                              <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 500, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{L.subtotal}</span>span>
                                                              <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '16px', fontWeight: 400, color: '#111111' }}>{formattedTotal} TL</span>span>
                                                </div>div>
                                                <Link
                                                                to="/checkout"
                                                                onClick={onClose}
                                                                style={{
                                                                                  display: 'block',
                                                                                  width: '100%',
                                                                                  padding: '14px 24px',
                                                                                  backgroundColor: '#111111',
                                                                                  color: '#FFFFFF',
                                                                                  fontFamily: '"Jost", sans-serif',
                                                                                  fontSize: '13px',
                                                                                  fontWeight: 500,
                                                                                  letterSpacing: '0.5px',
                                                                                  textTransform: 'uppercase',
                                                                                  textAlign: 'center',
                                                                                  textDecoration: 'none',
                                                                                  boxSizing: 'border-box',
                                                                }}
                                                              >
                                                  {L.checkout}
                                                </Link>Link>
                                                <button
                                                                onClick={onClose}
                                                                style={{
                                                                                  display: 'block',
                                                                                  width: '100%',
                                                                                  padding: '12px 24px',
                                                                                  backgroundColor: 'transparent',
                                                                                  color: '#111111',
                                                                                  fontFamily: '"Jost", sans-serif',
                                                                                  fontSize: '12px',
                                                                                  fontWeight: 400,
                                                                                  letterSpacing: '0.5px',
                                                                                  textTransform: 'uppercase',
                                                                                  textAlign: 'center',
                                                                                  border: 'none',
                                                                                  cursor: 'pointer',
                                                                                  marginTop: '8px',
                                                                                  textDecoration: 'underline',
                                                                }}
                                                              >
                                                  {L.continue}
                                                </button>button>
                                    </div>
                        )}
                </div>
          </>
        );
