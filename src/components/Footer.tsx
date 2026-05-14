import React from 'react';
import { Language } from '../types';
import { Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';

interface FooterProps {
    lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
    const content = {
          TR: {
                  col1Title: 'Pivot Gold',
                  col1Links: [
                    { label: 'Hakkımızda', href: '#' },
                    { label: 'Mağazalar', href: '#' },
                    { label: 'Toptan & Franchise', href: '#' },
                    { label: 'İletişim', href: '#' },
                    { label: 'Favoriler', href: '#' },
                          ],
                  col2Title: 'Piercing',
                  col2Links: [
                    { label: 'Tasarımlar', href: '#' },
                    { label: 'Piercing S.S.S', href: '#' },
                    { label: 'Randevunuzu Planlayın', href: '#' },
                    { label: 'Piercing Bakım Spreyi', href: '#' },
                    { label: 'Piercing Bakım Talimatları', href: '#' },
                          ],
                  col3Title: 'Müşteri İlişkileri',
                  col3Links: [
                    { label: 'Sipariş & İade Prosedürü', href: '#' },
                    { label: 'Bakım & Onarım Prosedürü', href: '#' },
                    { label: 'Yüzük Ölçüsü Hesaplama', href: '#' },
                    { label: 'Pırlantanın Anatomisi', href: '#' },
                          ],
                  col4Title: 'Yasal',
                  col4Links: [
                    { label: 'Üyelik Sözleşmesi', href: '#' },
                    { label: 'Mesafeli Satış Sözleşmesi', href: '#' },
                    { label: 'Gizlilik ve Çerez Politikası', href: '#' },
                    { label: 'Aydınlatma Metni', href: '#' },
                    { label: 'Hüküm & Koşullar', href: '#' },
                          ],
                  newsletter: 'Bülten',
                  newsletterSub: 'Yeni tasarımlardan ilk siz haberdar olun',
                  emailPlaceholder: 'E-postanız',
                  subscribeBtn: 'Abone ol',
                  rights: '© 2026 Pivot Gold',
          },
          EN: {
                  col1Title: 'Pivot Gold',
                  col1Links: [
                    { label: 'About Us', href: '#' },
                    { label: 'Stores', href: '#' },
                    { label: 'Wholesale & Franchise', href: '#' },
                    { label: 'Contact', href: '#' },
                    { label: 'Wishlist', href: '#' },
                          ],
                  col2Title: 'Piercing',
                  col2Links: [
                    { label: 'Designs', href: '#' },
                    { label: 'Piercing FAQ', href: '#' },
                    { label: 'Book Appointment', href: '#' },
                    { label: 'Aftercare Spray', href: '#' },
                    { label: 'Aftercare Instructions', href: '#' },
                          ],
                  col3Title: 'Customer Relations',
                  col3Links: [
                    { label: 'Order & Return Policy', href: '#' },
                    { label: 'Repair & Care', href: '#' },
                    { label: 'Ring Size Guide', href: '#' },
                    { label: 'Diamond Anatomy', href: '#' },
                          ],
                  col4Title: 'Legal',
                  col4Links: [
                    { label: 'Membership Agreement', href: '#' },
                    { label: 'Distance Sales Agreement', href: '#' },
                    { label: 'Privacy & Cookie Policy', href: '#' },
                    { label: 'KVKK', href: '#' },
                    { label: 'Terms & Conditions', href: '#' },
                          ],
                  newsletter: 'Newsletter',
                  newsletterSub: 'Be the first to know about new designs',
                  emailPlaceholder: 'Your email',
                  subscribeBtn: 'Subscribe',
                  rights: '© 2026 Pivot Gold',
          },
          DE: {
                  col1Title: 'Pivot Gold',
                  col1Links: [
                    { label: 'Über uns', href: '#' },
                    { label: 'Filialen', href: '#' },
                    { label: 'Großhandel & Franchise', href: '#' },
                    { label: 'Kontakt', href: '#' },
                    { label: 'Favoriten', href: '#' },
                          ],
                  col2Title: 'Piercing',
                  col2Links: [
                    { label: 'Designs', href: '#' },
                    { label: 'Piercing FAQ', href: '#' },
                    { label: 'Termin buchen', href: '#' },
                    { label: 'Pflegespray', href: '#' },
                    { label: 'Pflegeanleitung', href: '#' },
                          ],
                  col3Title: 'Kundenservice',
                  col3Links: [
                    { label: 'Bestellung & Rückgabe', href: '#' },
                    { label: 'Reparatur & Pflege', href: '#' },
                    { label: 'Ringgrößenrechner', href: '#' },
                    { label: 'Diamant-Anatomie', href: '#' },
                          ],
                  col4Title: 'Rechtliches',
                  col4Links: [
                    { label: 'Mitgliedschaftsvertrag', href: '#' },
                    { label: 'Fernabsatzvertrag', href: '#' },
                    { label: 'Datenschutz & Cookies', href: '#' },
                    { label: 'Datenschutzerklärung', href: '#' },
                    { label: 'AGB', href: '#' },
                          ],
                  newsletter: 'Newsletter',
                  newsletterSub: 'Als Erste über neue Designs informiert werden',
                  emailPlaceholder: 'Ihre E-Mail',
                  subscribeBtn: 'Abonnieren',
                  rights: '© 2026 Pivot Gold',
          },
          AR: {
                  col1Title: 'بيفوت جولد',
                  col1Links: [
                    { label: 'معلومات عنا', href: '#' },
                    { label: 'متاجرنا', href: '#' },
                    { label: 'الجملة والامتياز', href: '#' },
                    { label: 'اتصل بنا', href: '#' },
                    { label: 'المفضلة', href: '#' },
                          ],
                  col2Title: 'ثقب',
                  col2Links: [
                    { label: 'التصاميم', href: '#' },
                    { label: 'أسئلة شائعة', href: '#' },
                    { label: 'احجز موعداً', href: '#' },
                    { label: 'بخاخ العناية', href: '#' },
                    { label: 'تعليمات العناية', href: '#' },
                          ],
                  col3Title: 'خدمة العملاء',
                  col3Links: [
                    { label: 'سياسة الطلب والإرجاع', href: '#' },
                    { label: 'الإصلاح والعناية', href: '#' },
                    { label: 'مقاس الخاتم', href: '#' },
                    { label: 'تشريح الماس', href: '#' },
                          ],
                  col4Title: 'قانوني',
                  col4Links: [
                    { label: 'اتفاقية العضوية', href: '#' },
                    { label: 'اتفاقية البيع عن بعد', href: '#' },
                    { label: 'سياسة الخصوصية', href: '#' },
                    { label: 'الإفصاح', href: '#' },
                    { label: 'الشروط والأحكام', href: '#' },
                          ],
                  newsletter: 'النشرة الإخبارية',
                  newsletterSub: 'كن أول من يعرف التصاميم الجديدة',
                  emailPlaceholder: 'بريدك الإلكتروني',
                  subscribeBtn: 'اشتراك',
                  rights: '© 2026 بيفوت جولد',
          },
    };
  
    const c = content[lang] || content.TR;
    const [email, setEmail] = React.useState('');
  
    const colStyle = {
          display: 'flex' as const,
          flexDirection: 'column' as const,
          gap: '12px',
    };
  
    const titleStyle = {
          fontFamily: '"Jost", sans-serif',
          fontSize: '13px',
          fontWeight: 600 as const,
          letterSpacing: '0.5px',
          textTransform: 'uppercase' as const,
          color: '#FFFFFF',
          marginBottom: '8px',
    };
  
    const linkStyle = {
          fontFamily: '"Jost", sans-serif',
          fontSize: '13px',
          fontWeight: 300 as const,
          color: 'rgba(255,255,255,0.7)',
          textDecoration: 'none',
          transition: 'color 0.2s',
    };
  
    return (
          <footer style={{ backgroundColor: '#111111', color: '#FFFFFF' }}>
            {/* Main footer content */}
                  <div style={{
                    maxWidth: '100%',
                    padding: '64px 48px 48px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 300px',
                    gap: '40px',
          }}>
                    {/* Col 1 */}
                            <div style={colStyle}>
                                        <p style={titleStyle}>{c.col1Title}</p>p>
                              {c.col1Links.map(l => (
                        <a key={l.label} href={l.href} style={linkStyle}
                                        onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                      >{l.label}</a>a>
                      ))}
            </div>div>
                    {/* Col 2 */}
                          <div style={colStyle}>
                                    <p style={titleStyle}>{c.col2Title}</p>p>
                            {c.col2Links.map(l => (
                        <a key={l.label} href={l.href} style={linkStyle}
                                        onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                      >{l.label}</a>a>
                      ))}
                          </div>div>
                    {/* Col 3 */}
                          <div style={colStyle}>
                                    <p style={titleStyle}>{c.col3Title}</p>p>
                            {c.col3Links.map(l => (
                        <a key={l.label} href={l.href} style={linkStyle}
                                        onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                      >{l.label}</a>a>
                      ))}
                          </div>div>
                    {/* Col 4 */}
                          <div style={colStyle}>
                                    <p style={titleStyle}>{c.col4Title}</p>p>
                            {c.col4Links.map(l => (
                        <a key={l.label} href={l.href} style={linkStyle}
                                        onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                      >{l.label}</a>a>
                      ))}
                          </div>div>
                    {/* Newsletter */}
                          <div style={colStyle}>
                                    <p style={titleStyle}>{c.newsletter}</p>p>
                                    <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>
                                      {c.newsletterSub}
                                    </p>p>
                                    <div style={{ display: 'flex' }}>
                                                <input
                                                                type="email"
                                                                value={email}
                                                                onChange={e => setEmail(e.target.value)}
                                                                placeholder={c.emailPlaceholder}
                                                                style={{
                                                                                  fontFamily: '"Jost", sans-serif',
                                                                                  fontSize: '13px',
                                                                                  flex: 1,
                                                                                  padding: '10px 12px',
                                                                                  background: 'rgba(255,255,255,0.1)',
                                                                                  border: '1px solid rgba(255,255,255,0.2)',
                                                                                  borderRight: 'none',
                                                                                  color: '#FFFFFF',
                                                                                  outline: 'none',
                                                                }}
                                                              />
                                                <button style={{
                          fontFamily: '"Jost", sans-serif',
                          fontSize: '13px',
                          fontWeight: 500,
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                          background: '#FFFFFF',
                          color: '#111111',
                          border: 'none',
                          padding: '10px 16px',
                          cursor: 'pointer',
          }}>
                                                  {c.subscribeBtn}
                                                </button>button>
                                    </div>div>
                            {/* Social icons */}
                                    <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                                                <a href="https://www.instagram.com/pivot_gold" target="_blank" rel="noopener noreferrer"
                                                                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                                                                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                                                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                                              >
                                                              <Instagram size={18} strokeWidth={1.5} />
                                                </a>a>
                                                <a href="https://www.facebook.com/share/1C2qSMzrdM/" target="_blank" rel="noopener noreferrer"
                                                                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                                                                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                                                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                                              >
                                                              <Facebook size={18} strokeWidth={1.5} />
                                                </a>a>
                                                <a href="https://wa.me/905526487383" target="_blank" rel="noopener noreferrer"
                                                                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                                                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                                              >
                                                              <MessageCircle size={18} strokeWidth={1.5} />
                                                </a>a>
                                                <a href="https://pivotgold.etsy.com" target="_blank" rel="noopener noreferrer"
                                                                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                                                                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                                                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                                              >
                                                              <ExternalLink size={18} strokeWidth={1.5} />
                                                </a>a>
                                    </div>div>
                          </div>div>
                  </div>div>
          
            {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    padding: '20px 48px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
          }}>
                        <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}>
                          {c.rights}
                        </p>p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                  <img src="https://cdn.worldvectorlogo.com/logos/visa-10.svg" alt="Visa" style={{ height: '14px', opacity: 0.4, filter: 'grayscale(1) invert(1)' }} />
                                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" style={{ height: '20px', opacity: 0.4, filter: 'grayscale(1)' }} />
                                  <img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" alt="PayPal" style={{ height: '14px', opacity: 0.4, filter: 'grayscale(1) invert(1)' }} />
                        </div>div>
                </div>div>
          </footer>footer>
        );
};
</a>import React from 'react';
import { Language } from '../types';
import { Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';

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
      rights: '© 2026 Pivot Gold. Tüm hakları saklıdır.'
    },
    EN: {
      about: 'Pivot Gold has been bringing jewelry art together with elegance since 1984.',
      links: [
        { title: 'Corporate', items: ['About Us', 'Our Stores', 'Careers', 'Contact'] },
        { title: 'Customer Service', items: ['FAQ', 'Shipping and Delivery', 'Returns and Exchanges', 'Warranty Conditions'] },
        { title: 'Categories', items: ['Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Diamonds'] }
      ],
      rights: '© 2026 Pivot Gold. All rights reserved.'
    },
    DE: {
      about: 'Pivot Gold bringt seit 1984 Schmuckkunst mit Eleganz zusammen.',
      links: [
        { title: 'Unternehmen', items: ['Über uns', 'Unsere Filialen', 'Karriere', 'Kontakt'] },
        { title: 'Kundenservice', items: ['FAQ', 'Versand und Lieferung', 'Rückgabe und Umtausch', 'Garantiebedingungen'] },
        { title: 'Kategorien', items: ['Ringe', 'Halsketten', 'Armbänder', 'Ohrringe', 'Diamanten'] }
      ],
      rights: '© 2026 Pivot Gold. Alle Rechte vorbehalten.'
    },
    AR: {
      about: 'تجمع بيفوت جولد للمجوهرات الفاخرة بين فن المجوهرات والأناقة منذ عام 1984.',
      links: [
        { title: 'الشركة', items: ['معلومات عنا', 'متاجرنا', 'الوظائف', 'اتصل بنا'] },
        { title: 'خدمة العملاء', items: ['الأسئلة الشائعة', 'الشحن والتوصيل', 'الإرجاع والاستبدال', 'شروط الضمان'] },
        { title: 'الفئات', items: ['خواتم', 'قلادات', 'أساور', 'أقراط', 'ألماس'] }
      ],
      rights: '© 2026 بيفوت جولد للمجوهرات الفاخرة. جميع الحقوق محفوظة.'
    }
  };

  return (
    <footer className="bg-zinc-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 ${lang === 'AR' ? 'text-right' : ''}`}>
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

        <div className={`pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 ${lang === 'AR' ? 'md:flex-row-reverse' : ''}`}>
          <p className="text-zinc-500 text-xs font-light">
            {content[lang].rights}
          </p>
          <div className={`flex items-center space-x-6 ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <img src="https://cdn.worldvectorlogo.com/logos/visa-10.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" alt="Paypal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};
