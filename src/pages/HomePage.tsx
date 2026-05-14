import React, { useRef } from 'react';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { products } from '../data/products';
import { Language, Product } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HomePageProps {
    lang: Language;
    onAddToCart: (product: Product) => void;
    onViewDetails: (product: Product) => void;
}

const marqueeText = 'İSTANBUL — ANKARA — İZMİR — ANTALYA — BODRUM — ÇEŞME — DUBAI — BAHREYN — KUZEY KIBRIS — LONDON';

export const HomePage: React.FC<HomePageProps> = ({ lang, onAddToCart, onViewDetails }) => {
    const sliderRef1 = useRef<HTMLDivElement>(null);
    const sliderRef2 = useRef<HTMLDivElement>(null);

    const scroll = (ref: React.RefObject<HTMLDivElement>, dir: 'left' | 'right') => {
          if (ref.current) {
                  ref.current.scrollBy({ left: dir === 'right' ? 220 : -220, behavior: 'smooth' });
          }
    };

    const sectionTitles = {
          bestSellers: { TR: 'EN ÇOK SATANLAR', EN: 'BEST SELLERS', DE: 'BESTSELLER', AR: 'الأكثر مبيعاً' },
          icons: { TR: 'İKONLAR İLE TANIŞ', EN: 'MEET THE ICONS', DE: 'LERNE DIE IKONEN KENNEN', AR: 'تعرف على الأيقونات' },
          viewAll: { TR: 'Tümünü Gör', EN: 'View All', DE: 'Alle Anzeigen', AR: 'عرض الكل' },
          collection1: { TR: 'YENİ KOLEKSİYON', EN: 'NEW COLLECTION', DE: 'NEUE KOLLEKTION', AR: 'مجموعة جديدة' },
          collection2: { TR: 'ÖZEL SERİ', EN: 'SPECIAL SERIES', DE: 'SPEZIELLE SERIE', AR: 'سلسلة خاصة' },
          discover: { TR: 'KEŞFET', EN: 'DISCOVER', DE: 'ENTDECKEN', AR: 'اكتشف' },
          stores: { TR: 'MAĞAZALAR', EN: 'STORES', DE: 'FILIALEN', AR: 'المتاجر' },
          piercing: { TR: 'PİERCİNG', EN: 'PIERCING', DE: 'PIERCING', AR: 'ثقب' },
          customize: { TR: 'KİŞİSELLEŞTİRME', EN: 'CUSTOMIZATION', DE: 'PERSONALISIERUNG', AR: 'تخصيص' },
    };

    return (
          <main style={{ backgroundColor: '#FFFFFF' }}>
            {/* 1. HERO SLIDER */}
                  <Hero lang={lang} />

            {/* 2. CATEGORY STRIP */}
                  <Categories lang={lang} />

            {/* 3. PRODUCT SLIDER - BEST SELLERS */}
                  <section style={{ padding: '48px 0 32px', backgroundColor: '#FFFFFF' }}>
                            <div style={{ padding: '0 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <h2 style={{
                        fontFamily: '"Oswald", sans-serif',
                        fontSize: '21px',
                        fontWeight: 500,
                        color: '#111111',
                        textTransform: 'uppercase',
                        letterSpacing: '0',
          }}>
                                          {sectionTitles.bestSellers[lang]}
                                        </h2>h2>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                                      <button onClick={() => scroll(sliderRef1, 'left')} style={{ background: 'none', border: '1px solid #ECECEC', cursor: 'pointer', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                      <ChevronLeft size={16} strokeWidth={1.5} />
                                                      </button>button>
                                                      <button onClick={() => scroll(sliderRef1, 'right')} style={{ background: 'none', border: '1px solid #ECECEC', cursor: 'pointer', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                      <ChevronRight size={16} strokeWidth={1.5} />
                                                      </button>button>
                                        </div>div>
                            </div>div>
                    {/* Horizontal scroll */}
                            <div
                                        ref={sliderRef1}
                                        style={{
                                                      overflowX: 'auto',
                                                      scrollbarWidth: 'none',
                                                      padding: '0 24px',
                                        }}
                                      >
                                      <div style={{ display: 'flex', gap: '12px', width: 'max-content' }}>
                                        {products.slice(0, 8).map(product => (
                                                      <div key={product.id} style={{ width: '220px', flexShrink: 0 }}>
                                                                      <ProductCard
                                                                                          product={product}
                                                                                          lang={lang}
                                                                                          onAddToCart={onAddToCart}
                                                                                          onViewDetails={onViewDetails}
                                                                                        />
                                                      </div>div>
                                                    ))}
                                      </div>div>
                            </div>div>
                    {/* View All button - centered, Kismet style */}
                          <div style={{ textAlign: 'center', marginTop: '32px' }}>
                                    <button
                                                  onClick={() => window.location.href = '/category/ring'}
                                                  style={{
                                                                  fontFamily: '"Jost", sans-serif',
                                                                  fontSize: '13px',
                                                                  fontWeight: 500,
                                                                  letterSpacing: '0.5px',
                                                                  color: '#111111',
                                                                  background: 'none',
                                                                  border: 'none',
                                                                  borderBottom: '1px solid #111111',
                                                                  paddingBottom: '1px',
                                                                  cursor: 'pointer',
                                                                  textTransform: 'uppercase',
                                                  }}
                                                >
                                      {sectionTitles.viewAll[lang]}
                                    </button>button>
                          </div>div>
                  </section>section>
          
            {/* 4. EDITORIAL BANNERS - 2 col like Kismet */}
                <section style={{ padding: '0' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                                  <div style={{ position: 'relative', overflow: 'hidden', height: '480px' }}>
                                              <img
                                                              src="/images/category-ring-7.jpg"
                                                              alt={sectionTitles.collection1[lang]}
                                                              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }}
                                                              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                                                              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                                                            />
                                              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)' }} />
                                              <div style={{ position: 'absolute', bottom: '32px', left: '32px' }}>
                                                            <h3 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '21px', fontWeight: 500, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '8px' }}>
                                                              {sectionTitles.collection1[lang]}
                                                            </h3>h3>
                                                            <a href="/category/new" style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 500, color: '#FFFFFF', textDecoration: 'none', borderBottom: '1px solid #FFFFFF', paddingBottom: '1px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                                                              {sectionTitles.discover[lang]}
                                                            </a>a>
                                              </div>div>
                                  </div>div>
                                  <div style={{ position: 'relative', overflow: 'hidden', height: '480px' }}>
                                              <img
                                                              src="/images/category-ring-9.jpg"
                                                              alt={sectionTitles.collection2[lang]}
                                                              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }}
                                                              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                                                              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                                                            />
                                              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)' }} />
                                              <div style={{ position: 'absolute', bottom: '32px', left: '32px' }}>
                                                            <h3 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '21px', fontWeight: 500, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '8px' }}>
                                                              {sectionTitles.collection2[lang]}
                                                            </h3>h3>
                                                            <a href="/category/collection" style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 500, color: '#FFFFFF', textDecoration: 'none', borderBottom: '1px solid #FFFFFF', paddingBottom: '1px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                                                              {sectionTitles.discover[lang]}
                                                            </a>a>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* 5. PRODUCT SLIDER - ICONS */}
                <section style={{ padding: '48px 0 32px', backgroundColor: '#FFFFFF' }}>
                        <div style={{ padding: '0 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                  <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '21px', fontWeight: 500, color: '#111111', textTransform: 'uppercase' }}>
                                    {sectionTitles.icons[lang]}
                                  </h2>h2>
                                  <div style={{ display: 'flex', gap: '8px' }}>
                                              <button onClick={() => scroll(sliderRef2, 'left')} style={{ background: 'none', border: '1px solid #ECECEC', cursor: 'pointer', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <ChevronLeft size={16} strokeWidth={1.5} />
                                              </button>button>
                                              <button onClick={() => scroll(sliderRef2, 'right')} style={{ background: 'none', border: '1px solid #ECECEC', cursor: 'pointer', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <ChevronRight size={16} strokeWidth={1.5} />
                                              </button>button>
                                  </div>div>
                        </div>div>
                        <div ref={sliderRef2} style={{ overflowX: 'auto', scrollbarWidth: 'none', padding: '0 24px' }}>
                                  <div style={{ display: 'flex', gap: '12px', width: 'max-content' }}>
                                    {products.slice(4, 12).map(product => (
                          <div key={product.id} style={{ width: '220px', flexShrink: 0 }}>
                                          <ProductCard product={product} lang={lang} onAddToCart={onAddToCart} onViewDetails={onViewDetails} />
                          </div>div>
                        ))}
                                  </div>div>
                        </div>div>
                        <div style={{ textAlign: 'center', marginTop: '32px' }}>
                                  <button
                                                onClick={() => window.location.href = '/category/ring'}
                                                style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px', color: '#111111', background: 'none', border: 'none', borderBottom: '1px solid #111111', paddingBottom: '1px', cursor: 'pointer', textTransform: 'uppercase' }}
                                              >
                                    {sectionTitles.viewAll[lang]}
                                  </button>button>
                        </div>div>
                </section>section>
          
            {/* 6. SERVICE BLOCKS - 3 col like Kismet */}
                <section style={{ padding: '0' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0' }}>
                          {[
            { img: '/images/category-ring-2.jpg', title: sectionTitles.stores[lang], href: '/category/ring' },
            { img: '/images/category-ring-3.jpg', title: sectionTitles.piercing[lang], href: '/category/piercing' },
            { img: '/images/category-ring-5.jpg', title: sectionTitles.customize[lang], href: '/category/ring' },
                      ].map((block, i) => (
                                    <a key={i} href={block.href} style={{ position: 'relative', display: 'block', overflow: 'hidden', height: '400px', textDecoration: 'none' }}>
                                                  <img src={block.img} alt={block.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                                                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                                                                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                                                                  />
                                                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
                                                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', background: 'linear-gradient(transparent, rgba(0,0,0,0.5))' }}>
                                                                  <p style={{ fontFamily: '"Oswald", sans-serif', fontSize: '18px', fontWeight: 500, color: '#FFFFFF', textTransform: 'uppercase' }}>
                                                                    {block.title}
                                                                  </p>p>
                                                  </div>div>
  </a>a>
                                  ))}
        </div>
                </section>
          
            {/* 7. MARQUEE */}
                <div style={{ backgroundColor: '#111111', padding: '14px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        <div style={{ display: 'inline-flex', gap: '60px', animation: 'marquee-scroll 30s linear infinite' }}>
                          {[...Array(2)].map((_, i) => (
                        <span key={i} style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 400, color: '#FFFFFF', letterSpacing: '1px' }}>
                          {marqueeText}
                        </span>span>
                      ))}
                        </div>div>
                </div>div>
          
            {/* 8. NEWSLETTER */}
                <Newsletter lang={lang} />
          </main>main>
        );
};
</div>
