import React from 'react';
import { Language } from '../types';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const content = {
    TR: {
      about: 'Pivot Gold, 1984\'ten beri mücevher sanatını zarafetle buluşturuyor.',
      links: [
        { title: 'Kurumsal', items: ['Hakkımızda', 'Mağazalarımız', 'Kariyer', 'İletişim'] },
        { title: 'Müşteri Hizmetleri', items: ['Sıkça Sorulan Sorular', 'Kargo ve Teslimat', 'İade ve Değişim', 'Garanti Koşulları'] },
        { title: 'Kategoriler', items: ['Yüzük', 'Kolye', 'Bilezik', 'Küpe', 'Pırlanta'] }
      ],
      contact: 'İletişim',
      rights: '© 2026 Pivot Gold. Tüm hakları saklıdır.'
    },
    EN: {
      about: 'Pivot Gold has been bringing jewelry art together with elegance since 1984.',
      links: [
        { title: 'Corporate', items: ['About Us', 'Our Stores', 'Careers', 'Contact'] },
        { title: 'Customer Service', items: ['FAQ', 'Shipping and Delivery', 'Returns and Exchanges', 'Warranty Conditions'] },
        { title: 'Categories', items: ['Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Diamonds'] }
      ],
      contact: 'Contact',
      rights: '© 2026 Pivot Gold. All rights reserved.'
    },
    DE: {
      about: 'Pivot Gold bringt seit 1984 Schmuckkunst mit Eleganz zusammen.',
      links: [
        { title: 'Unternehmen', items: ['Über uns', 'Unsere Filialen', 'Karriere', 'Kontakt'] },
        { title: 'Kundenservice', items: ['FAQ', 'Versand und Lieferung', 'Rückgabe und Umtausch', 'Garantiebedingungen'] },
        { title: 'Kategorien', items: ['Ringe', 'Halsketten', 'Armbänder', 'Ohrringe', 'Diamanten'] }
      ],
      contact: 'Kontakt',
      rights: '© 2026 Pivot Gold. Alle Rechte vorbehalten.'
    },
    AR: {
      about: 'تجمع بيفوت جولد للمجوهرات الفاخرة بين فن المجوهرات والأناقة منذ عام 1984.',
      links: [
        { title: 'الشركة', items: ['معلومات عنا', 'متاجرنا', 'الوظائف', 'اتصل بنا'] },
        { title: 'خدمة العملاء', items: ['الأسئلة الشائعة', 'الشحن والتوصيل', 'الإرجاع والاستبدال', 'شروط الضمان'] },
        { title: 'الفئات', items: ['خواتم', 'قلادات', 'أساور', 'أقراط', 'ألماس'] }
      ],
      contact: 'اتصل بنا',
      rights: '© 2026 بيفوت جولد للمجوهرات الفاخرة. جميع الحقوق محفوظة.'
    }
  };

  return (
    <footer className="bg-zinc-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 ${lang === 'AR' ? 'text-right' : ''}`}>
          {/* Brand Info */}
          <div className={`lg:col-span-2 ${lang === 'AR' ? 'lg:order-last' : ''}`}>
            <h2 className="text-3xl font-serif tracking-widest gold-text-gradient mb-6 uppercase">PIVOT GOLD</h2>
            <p className={`text-zinc-400 font-light leading-relaxed mb-8 max-w-sm ${lang === 'AR' ? 'ml-auto' : ''}`}>
              {content[lang].about}
            </p>
            <div className={`flex space-x-4 ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <a href="https://www.instagram.com/pivot_gold?igsh=aWQxOGRiNmludmpm&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-800 rounded-full hover:border-gold hover:text-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/905526487383" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-800 rounded-full hover:border-[#25D366] hover:text-[#25D366] transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="https://pivotgold.etsy.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-800 rounded-full hover:border-[#F1641E] hover:text-[#F1641E] transition-all">
                <ExternalLink size={18} />
              </a>
              <a href="https://www.facebook.com/share/1C2qSMzrdM/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-800 rounded-full hover:border-gold hover:text-gold transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {content[lang].links.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-gold">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-light">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 ${lang === 'AR' ? 'md:flex-row-reverse' : ''}`}>
          <p className="text-zinc-500 text-xs font-light">
            {content[lang].rights}
          </p>
          <div className={`flex items-center space-x-6 ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="Paypal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};
