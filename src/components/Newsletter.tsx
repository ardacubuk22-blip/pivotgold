import React, { useState } from 'react';
import { Language } from '../types';

interface NewsletterProps {
  lang: Language;
}

export const Newsletter: React.FC<NewsletterProps> = ({ lang }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const content: Record<Language, { tag: string; title: string; sub: string; placeholder: string; btn: string; success: string }> = {
    TR: {
      tag: 'BÜLTEN',
      title: 'YENİ KOLEKSİYONLARDAN\nHABERDAR OLUN',
      sub: "Pivot Gold'un yeni tasarımlarını, özel kampanyalarını ve indirimlerini ilk öğrenenler arasında olun.",
      placeholder: 'E-posta adresiniz',
      btn: 'ABONE OL',
      success: 'Abone olduğunuz için teşekkürler!',
    },
    EN: {
      tag: 'NEWSLETTER',
      title: 'STAY UPDATED WITH\nNEW COLLECTIONS',
      sub: "Be among the first to discover Pivot Gold's new designs, exclusive campaigns, and special discounts.",
      placeholder: 'Your email address',
      btn: 'SUBSCRIBE',
      success: 'Thank you for subscribing!',
    },
  };

  const c = content[lang] || content.TR;

  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#111111',
      padding: '100px 48px',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #B8962E, transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #B8962E, transparent)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(184,150,46,0.06) 0%, transparent 70%)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.3em', color: '#B8962E', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span style={{ display: 'inline-block', width: '30px', height: '1px', backgroundColor: '#B8962E' }}></span>
          {c.tag}
          <span style={{ display: 'inline-block', width: '30px', height: '1px', backgroundColor: '#B8962E' }}></span>
        </p>
        <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '36px', fontWeight: 500, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: '1.15', marginBottom: '20px', whiteSpace: 'pre-line' }}>
          {c.title}
        </h2>
        <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '40px' }}>
          {c.sub}
        </p>

        {submitted ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '16px 32px', border: '1px solid #B8962E' }}>
            <span style={{ color: '#B8962E', fontSize: '18px' }}>{String.fromCharCode(10003)}</span>
            <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '14px', color: '#B8962E', letterSpacing: '0.1em' }}>{c.success}</span>
          </div>
        ) : (
          <div style={{ display: 'flex', maxWidth: '480px', margin: '0 auto' }}>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={c.placeholder}
              style={{ flex: 1, fontFamily: '"Jost", sans-serif', fontSize: '13px', padding: '14px 20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.2)', borderRight: 'none', color: '#FFFFFF', outline: 'none', letterSpacing: '0.05em' }}
            />
            <button
              onClick={() => { if (email) setSubmitted(true); }}
              style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', backgroundColor: '#B8962E', color: '#111111', border: 'none', padding: '14px 28px', cursor: 'pointer', transition: 'background 0.3s, transform 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#D4AF5A'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#B8962E'; }}
            >
              {c.btn}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
