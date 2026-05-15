import React from 'react';
import { Language } from '../types';
import { Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

type FooterLink = { label: string; href: string };
type FooterContent = {
  col1Title: string; col1Links: FooterLink[];
  col2Title: string; col2Links: FooterLink[];
  col3Title: string; col3Links: FooterLink[];
  col4Title: string; col4Links: FooterLink[];
  newsletter: string; newsletterSub: string;
  emailPlaceholder: string; subscribeBtn: string; rights: string;
};

const content: Record<Language, FooterContent> = {
  TR: {
    col1Title: 'Pivot Gold',
    col1Links: [{ label: 'Hakkımızda', href: '#' }, { label: 'Mağazalar', href: '#' }, { label: 'Toptan & Franchise', href: '#' }, { label: 'İletişim', href: '#' }, { label: 'Favoriler', href: '#' }],
    col2Title: 'Piercing',
    col2Links: [{ label: 'Tasarımlar', href: '#' }, { label: 'Piercing S.S.S', href: '#' }, { label: 'Randevunuzu Planlayın', href: '#' }, { label: 'Bakım Spreyi', href: '#' }, { label: 'Bakım Talimatları', href: '#' }],
    col3Title: 'Müşteri İlişkileri',
    col3Links: [{ label: 'Sipariş & İade', href: '#' }, { label: 'Bakım & Onarım', href: '#' }, { label: 'Yüzük Ölçüsü', href: '#' }, { label: 'Pırlantanın Anatomisi', href: '#' }],
    col4Title: 'Yasal',
    col4Links: [{ label: 'Üyelik Sözleşmesi', href: '#' }, { label: 'Mesafeli Satış', href: '#' }, { label: 'Gizlilik & Çerez', href: '#' }, { label: 'Aydınlatma Metni', href: '#' }, { label: 'Hüküm & Koşullar', href: '#' }],
    newsletter: 'Bülten', newsletterSub: 'Yeni tasarımlardan ilk siz haberdar olun', emailPlaceholder: 'E-postanız', subscribeBtn: 'Abone ol', rights: '2026 Pivot Gold',
  },
  EN: {
    col1Title: 'Pivot Gold',
    col1Links: [{ label: 'About Us', href: '#' }, { label: 'Stores', href: '#' }, { label: 'Wholesale & Franchise', href: '#' }, { label: 'Contact', href: '#' }, { label: 'Wishlist', href: '#' }],
    col2Title: 'Piercing',
    col2Links: [{ label: 'Designs', href: '#' }, { label: 'Piercing FAQ', href: '#' }, { label: 'Book Appointment', href: '#' }, { label: 'Aftercare Spray', href: '#' }, { label: 'Aftercare Instructions', href: '#' }],
    col3Title: 'Customer Relations',
    col3Links: [{ label: 'Order & Return Policy', href: '#' }, { label: 'Repair & Care', href: '#' }, { label: 'Ring Size Guide', href: '#' }, { label: 'Diamond Anatomy', href: '#' }],
    col4Title: 'Legal',
    col4Links: [{ label: 'Membership Agreement', href: '#' }, { label: 'Distance Sales Agreement', href: '#' }, { label: 'Privacy & Cookie Policy', href: '#' }, { label: 'KVKK', href: '#' }, { label: 'Terms & Conditions', href: '#' }],
    newsletter: 'Newsletter', newsletterSub: 'Be the first to know about new designs', emailPlaceholder: 'Your email', subscribeBtn: 'Subscribe', rights: '2026 Pivot Gold',
  },
  DE: {
    col1Title: 'Pivot Gold',
    col1Links: [{ label: 'Über uns', href: '#' }, { label: 'Filialen', href: '#' }, { label: 'Großhandel & Franchise', href: '#' }, { label: 'Kontakt', href: '#' }, { label: 'Favoriten', href: '#' }],
    col2Title: 'Piercing',
    col2Links: [{ label: 'Designs', href: '#' }, { label: 'Piercing FAQ', href: '#' }, { label: 'Termin buchen', href: '#' }, { label: 'Pflegespray', href: '#' }, { label: 'Pflegeanleitung', href: '#' }],
    col3Title: 'Kundenservice',
    col3Links: [{ label: 'Bestellung & Rückgabe', href: '#' }, { label: 'Reparatur & Pflege', href: '#' }, { label: 'Ringgrößenrechner', href: '#' }, { label: 'Diamant-Anatomie', href: '#' }],
    col4Title: 'Rechtliches',
    col4Links: [{ label: 'Mitgliedschaftsvertrag', href: '#' }, { label: 'Fernabsatzvertrag', href: '#' }, { label: 'Datenschutz & Cookies', href: '#' }, { label: 'Datenschutzerklärung', href: '#' }, { label: 'AGB', href: '#' }],
    newsletter: 'Newsletter', newsletterSub: 'Als Erste über neue Designs informiert werden', emailPlaceholder: 'Ihre E-Mail', subscribeBtn: 'Abonnieren', rights: '2026 Pivot Gold',
  },
  AR: {
    col1Title: 'بيفوت جولد',
    col1Links: [{ label: 'معلومات عنا', href: '#' }, { label: 'متاجرنا', href: '#' }, { label: 'الجملة والامتياز', href: '#' }, { label: 'اتصل بنا', href: '#' }, { label: 'المفضلة', href: '#' }],
    col2Title: 'ثقب',
    col2Links: [{ label: 'التصاميم', href: '#' }, { label: 'أسئلة شائعة', href: '#' }, { label: 'احجز موعداً', href: '#' }, { label: 'بخاخ العناية', href: '#' }, { label: 'تعليمات العناية', href: '#' }],
    col3Title: 'خدمة العملاء',
    col3Links: [{ label: 'سياسة الطلب والإرجاع', href: '#' }, { label: 'الإصلاح والعناية', href: '#' }, { label: 'مقاس الخاتم', href: '#' }, { label: 'تشريح الماس', href: '#' }],
    col4Title: 'قانوني',
    col4Links: [{ label: 'اتفاقية العضوية', href: '#' }, { label: 'اتفاقية البيع عن بعد', href: '#' }, { label: 'سياسة الخصوصية', href: '#' }, { label: 'الإفصاح', href: '#' }, { label: 'الشروط والأحكام', href: '#' }],
    newsletter: 'النشرة الإخبارية', newsletterSub: 'كن أول من يعرف التصاميم الجديدة', emailPlaceholder: 'بريدك الإلكتروني', subscribeBtn: 'اشتراك', rights: '2026 بيفوت جولد',
  },
};

const colStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '12px' };
const titleStyle: React.CSSProperties = { fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '8px' };
const linkStyle: React.CSSProperties = { fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' };

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const c = content[lang] || content.TR;
  const [email, setEmail] = React.useState('');

  const cols = [
    { title: c.col1Title, links: c.col1Links },
    { title: c.col2Title, links: c.col2Links },
    { title: c.col3Title, links: c.col3Links },
    { title: c.col4Title, links: c.col4Links },
  ];

  return (
    <footer style={{ backgroundColor: '#111111', color: '#FFFFFF' }}>
      <div style={{ padding: '64px 48px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 300px', gap: '40px' }}>
        {cols.map((col) => (
          <div key={col.title} style={colStyle}>
            <p style={titleStyle}>{col.title}</p>
            {col.links.map((l) => (
              <a key={l.label} href={l.href} style={linkStyle}>{l.label}</a>
            ))}
          </div>
        ))}
        <div style={colStyle}>
          <p style={titleStyle}>{c.newsletter}</p>
          <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>{c.newsletterSub}</p>
          <div style={{ display: 'flex' }}>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={c.emailPlaceholder} style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', flex: 1, padding: '10px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRight: 'none', color: '#FFFFFF', outline: 'none' }} />
            <button style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase', background: '#FFFFFF', color: '#111111', border: 'none', padding: '10px 16px', cursor: 'pointer' }}>{c.subscribeBtn}</button>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <a href='https://www.instagram.com/pivot_gold' target='_blank' rel='noopener noreferrer' style={{ color: 'rgba(255,255,255,0.7)' }}>
              {React.createElement(Instagram, { size: 18, strokeWidth: 1.5 })}
            </a>
            <a href='https://www.facebook.com/share/1C2qSMzrdM/' target='_blank' rel='noopener noreferrer' style={{ color: 'rgba(255,255,255,0.7)' }}>
              {React.createElement(Facebook, { size: 18, strokeWidth: 1.5 })}
            </a>
            <a href='https://wa.me/905526487383' target='_blank' rel='noopener noreferrer' style={{ color: 'rgba(255,255,255,0.7)' }}>
              {React.createElement(MessageCircle, { size: 18, strokeWidth: 1.5 })}
            </a>
            <a href='https://pivotgold.etsy.com' target='_blank' rel='noopener noreferrer' style={{ color: 'rgba(255,255,255,0.7)' }}>
              {React.createElement(ExternalLink, { size: 18, strokeWidth: 1.5 })}
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}>{'\u00A9'} {c.rights}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img src='https://cdn.worldvectorlogo.com/logos/visa-10.svg' alt='Visa' style={{ height: '14px', opacity: 0.4, filter: 'grayscale(1) invert(1)' }} />
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png' alt='Mastercard' style={{ height: '20px', opacity: 0.4, filter: 'grayscale(1)' }} />
          <img src='https://cdn.worldvectorlogo.com/logos/paypal-3.svg' alt='PayPal' style={{ height: '14px', opacity: 0.4, filter: 'grayscale(1) invert(1)' }} />
        </div>
      </div>
    </footer>
  );
};
