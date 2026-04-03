import React from 'react';
import { Language } from '../types';
import { Mail } from 'lucide-react';

interface NewsletterProps {
  lang: Language;
}

export const Newsletter: React.FC<NewsletterProps> = ({ lang }) => {
  const content = {
    TR: {
      title: 'Işıltımızdan Haberdar Olun',
      subtitle: 'Yeni koleksiyonlar ve özel teklifler için bültenimize abone olun.',
      placeholder: 'E-posta adresiniz',
      button: 'Abone Ol'
    },
    EN: {
      title: 'Stay Informed of Our Sparkle',
      subtitle: 'Subscribe to our newsletter for new collections and special offers.',
      placeholder: 'Your email address',
      button: 'Subscribe'
    },
    DE: {
      title: 'Bleiben Sie über unseren Glanz informiert',
      subtitle: 'Abonnieren Sie unseren Newsletter für neue Kollektionen und Sonderangebote.',
      placeholder: 'Ihre E-Mail-Adresse',
      button: 'Abonnieren'
    },
    AR: {
      title: 'ابق على اطلاع ببريقنا',
      subtitle: 'اشترك في نشرتنا الإخبارية للحصول على المجموعات الجديدة والعروض الخاصة.',
      placeholder: 'عنوان بريدك الإلكتروني',
      button: 'اشتراك'
    }
  };

  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className={`max-w-3xl mx-auto px-4 text-center ${lang === 'AR' ? 'text-right' : ''}`}>
        <Mail size={40} className="mx-auto text-gold mb-6" strokeWidth={1} />
        <h2 className="text-4xl font-serif text-zinc-900 mb-4">
          {content[lang].title}
        </h2>
        <p className="text-zinc-500 font-light mb-10">
          {content[lang].subtitle}
        </p>
        
        <form className={`flex flex-col sm:flex-row gap-4 ${lang === 'AR' ? 'sm:flex-row-reverse' : ''}`} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder={content[lang].placeholder}
            className={`flex-1 px-6 py-4 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-gold transition-colors text-sm ${lang === 'AR' ? 'text-right' : ''}`}
          />
          <button className="px-10 py-4 bg-zinc-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-gold transition-all">
            {content[lang].button}
          </button>
        </form>
      </div>
    </section>
  );
};
