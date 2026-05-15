import React from 'react';
import { Language } from '../types';

interface NewsletterProps {
  lang: Language;
}

export const Newsletter: React.FC<NewsletterProps> = ({ lang }) => {
  const content: Record<Language, { title: string; subtitle: string; placeholder: string; button: string }> = {
    TR: { title: 'IŞILTIMIZDAN HABERDAR OLUN', subtitle: 'Yeni koleksiyonlar ve özel teklifler için bültenimize abone olun.', placeholder: 'E-posta adresiniz', button: 'ABONE OL' },
    EN: { title: 'STAY INFORMED OF OUR SPARKLE', subtitle: 'Subscribe to our newsletter for new collections and special offers.', placeholder: 'Your email address', button: 'SUBSCRIBE' },
    DE: { title: 'BLEIBEN SIE ÜBER UNSEREN GLANZ INFORMIERT', subtitle: 'Abonnieren Sie unseren Newsletter für neue Kollektionen.', placeholder: 'Ihre E-Mail-Adresse', button: 'ABONNIEREN' },
    AR: { title: 'ابق على اطلاع ببريقنا', subtitle: 'اشترك في نشرتنا الإخبارية للحصول على المجموعات الجديدة.', placeholder: 'عنوان بريدك الإلكتروني', button: 'اشتراك' },
  };
  const c = content[lang] || content.TR;
  const [email, setEmail] = React.useState('');
  const isRTL = lang === 'AR';

  return (
    <section style={{ backgroundColor: '#F5F3EE', padding: '64px 0', borderTop: '1px solid #ECECEC' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px', textAlign: 'center', direction: isRTL ? 'rtl' : 'ltr' }}>
        <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '24px', fontWeight: 500, color: '#111111', textTransform: 'uppercase', letterSpacing: '0', marginBottom: '12px' }}>
          {c.title}
        </h2>
        <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14px', fontWeight: 300, color: '#6B6B6B', lineHeight: '1.6', marginBottom: '32px' }}>
          {c.subtitle}
        </p>
        <div style={{ display: 'flex', gap: '0', maxWidth: '480px', margin: '0 auto' }}>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={c.placeholder}
            style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', flex: 1, padding: '12px 16px', background: '#FFFFFF', border: '1px solid #ECECEC', borderRight: 'none', color: '#111111', outline: 'none' }}
          />
          <button
            style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase', background: '#111111', color: '#FFFFFF', border: 'none', padding: '12px 24px', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            {c.button}
          </button>
        </div>
      </div>
    </section>
  );
};
