import React from 'react';
import { Language } from '../types';

interface BrandStoryProps {
  lang: Language;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ lang }) => {
  const content: Record<Language, { tag: string; title: string; text1: string; text2: string; cta: string }> = {
    TR: { tag: "1984'TEN BERİ", title: 'ZANAAT VE MİRAS', text1: 'Pivot Gold mücevher sanatını geleneksel zanaatkarlıkla modern tasarımı birleştirerek sunar.', text2: 'Püskül Yüzük koleksiyonumuz, 14 Ayar altın ve özgün emaye detaylarıyla tasarlanmıştır.', cta: 'HİKAYEMİZİ KEŞFET' },
    EN: { tag: 'SINCE 1984', title: 'CRAFT AND HERITAGE', text1: 'Pivot Gold offers the art of jewelry by combining traditional craftsmanship with modern design.', text2: 'Our Fringe Ring collection, crafted in 14K gold with unique enamel details.', cta: 'DISCOVER OUR STORY' },
    DE: { tag: 'SEIT 1984', title: 'HANDWERK UND ERBE', text1: 'Pivot Gold bietet Schmuckkunst durch Kombination von traditionellem Handwerk und modernem Design.', text2: 'Unsere Fransen-Ring Kollektion aus 14 Karat Gold mit einzigartigen Emaille-Details.', cta: 'UNSERE GESCHICHTE' },
    AR: { tag: 'منذ 1984', title: 'الحرفة والتراث', text1: 'تقدم بيفوت جولد فن المجوهرات من خلال الجمع بين الحرفية التقليدية والتصميم الحديث.', text2: 'مجموعة خواتم الشرابة المصنوعة من ذهب 14 قيراط مع تفاصيل مينا فريدة.', cta: 'اكتشف قصتنا' },
  };
  const c = content[lang] || content.TR;
  const isRTL = lang === 'AR';
  const expLabel = lang === 'TR' ? 'Yıllık Tecrübe' : lang === 'EN' ? 'Years of Experience' : lang === 'DE' ? 'Jahre Erfahrung' : 'سنوات من الخبرة';
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0', borderTop: '1px solid #ECECEC' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', direction: isRTL ? 'rtl' : 'ltr' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4/5', overflow: 'hidden', backgroundColor: '#F5F3EE' }}>
            <img src='/images/ring-gold-2.jpg' alt='Craftsmanship' style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div style={{ position: 'absolute', bottom: '-24px', right: isRTL ? 'auto' : '-24px', left: isRTL ? '-24px' : 'auto', backgroundColor: '#111111', padding: '24px 32px' }}>
            <p style={{ fontFamily: '"Oswald", sans-serif', fontSize: '36px', fontWeight: 500, color: '#B8962E', lineHeight: 1, margin: 0 }}>40+</p>
            <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginTop: '4px', marginBottom: 0 }}>{expLabel}</p>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8962E', marginBottom: '16px' }}>{c.tag}</p>
          <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '40px', fontWeight: 500, color: '#111111', textTransform: 'uppercase', letterSpacing: '0', marginBottom: '24px', lineHeight: '1.1' }}>{c.title}</h2>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#B8962E', marginBottom: '32px' }} />
          <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '15px', fontWeight: 300, color: '#6B6B6B', lineHeight: '1.8', marginBottom: '16px' }}>{c.text1}</p>
          <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '15px', fontWeight: 300, color: '#6B6B6B', lineHeight: '1.8', marginBottom: '40px' }}>{c.text2}</p>
          <a href='#' style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px', color: '#111111', textDecoration: 'none', borderBottom: '1px solid #111111', paddingBottom: '2px', textTransform: 'uppercase' }}>{c.cta}</a>
        </div>
      </div>
    </section>
  );
};
