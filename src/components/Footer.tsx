import React from 'react';
import { Language } from '../types';
import { Instagram, Facebook, MessageCircle, ExternalLink, MapPin, Phone, Mail } from 'lucide-react';

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
    address: string; phone: string; email: string;
};

const content: Record<Language, FooterContent> = {
    TR: {
          col1Title: 'Pivot Gold',
          col1Links: [
            { label: 'Hakk\u0131m\u0131zda', href: '#' },
            { label: 'Ma\u011fazalar\u0131m\u0131z', href: '#' },
            { label: 'Toptan & Franchise', href: '#' },
            { label: '\u0130leti\u015fim', href: '#' },
            { label: 'Favoriler', href: '#' },
                ],
          col2Title: 'Koleksiyonlar',
          col2Links: [
            { label: 'Y\u00fczukler', href: '/category/ring' },
            { label: 'Kolye & Zincir', href: '/category/necklace' },
            { label: 'Bilezikler', href: '/category/bracelet' },
            { label: 'K\u00fcpeler', href: '/category/earring' },
            { label: 'P\u0131rlanta', href: '/category/diamond' },
                ],
          col3Title: 'M\u00fc\u015fteri Hizmetleri',
          col3Links: [
            { label: 'Sipari\u015f & \u0130ade', href: '#' },
            { label: 'Bak\u0131m & Onar\u0131m', href: '#' },
            { label: 'Y\u00fczuk \u00d6l\u00e7\u00fcs\u00fc Rehberi', href: '#' },
            { label: 'P\u0131rlanta Rehberi', href: '#' },
                ],
          col4Title: 'Yasal',
          col4Links: [
            { label: '\u00dcyelik S\u00f6zle\u015fmesi', href: '#' },
            { label: 'Mesafeli Sat\u0131\u015f', href: '#' },
            { label: 'Gizlilik & \u00c7erez', href: '#' },
            { label: 'H\u00fck\u00fcm & Ko\u015fullar', href: '#' },
                ],
          newsletter: 'B\u00fclten',
          newsletterSub: 'Yeni tasar\u0131mlardan ilk siz haberdar olun',
          emailPlaceholder: 'E-posta adresiniz',
          subscribeBtn: 'Abone Ol',
          rights: '2026 Pivot Gold. T\u00fcm haklar\u0131 sakl\u0131d\u0131r.',
          address: 'Istanbul, Turkey',
          phone: '+90 552 648 73 83',
          email: 'info@pivotgold.com',
    },
    EN: {
          col1Title: 'Pivot Gold',
          col1Links: [
            { label: 'About Us', href: '#' },
            { label: 'Our Stores', href: '#' },
            { label: 'Wholesale & Franchise', href: '#' },
            { label: 'Contact', href: '#' },
            { label: 'Wishlist', href: '#' },
                ],
          col2Title: 'Collections',
          col2Links: [
            { label: 'Rings', href: '/category/ring' },
            { label: 'Necklaces & Chains', href: '/category/necklace' },
            { label: 'Bracelets', href: '/category/bracelet' },
            { label: 'Earrings', href: '/category/earring' },
            { label: 'Diamond', href: '/category/diamond' },
                ],
          col3Title: 'Customer Service',
          col3Links: [
            { label: 'Order & Return Policy', href: '#' },
            { label: 'Repair & Care', href: '#' },
            { label: 'Ring Size Guide', href: '#' },
            { label: 'Diamond Guide', href: '#' },
                ],
          col4Title: 'Legal',
          col4Links: [
            { label: 'Membership Agreement', href: '#' },
            { label: 'Distance Sales Agreement', href: '#' },
            { label: 'Privacy & Cookie Policy', href: '#' },
            { label: 'Terms & Conditions', href: '#' },
                ],
          newsletter: 'Newsletter',
          newsletterSub: 'Be the first to know about new collections',
          emailPlaceholder: 'Your email address',
          subscribeBtn: 'Subscribe',
          rights: '2026 Pivot Gold. All rights reserved.',
          address: 'Istanbul, Turkey',
          phone: '+90 552 648 73 83',
          email: 'info@pivotgold.com',
    },
};

const colStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '12px' };
const titleStyle: React.CSSProperties = { fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' };
const linkStyle: React.CSSProperties = { fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.02em' };

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
          <footer style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
            {/* Gold top border */}
                  <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #B8962E, #D4AF5A, #B8962E, transparent)' }} />

            {/* Contact bar */}
                  <div style={{ backgroundColor: '#111111', padding: '20px 48px', display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    {[
            { icon: React.createElement(MapPin, { size: 14, strokeWidth: 1.5, color: '#B8962E' }), text: c.address },
            { icon: React.createElement(Phone, { size: 14, strokeWidth: 1.5, color: '#B8962E' }), text: c.phone },
            { icon: React.createElement(Mail, { size: 14, strokeWidth: 1.5, color: '#B8962E' }), text: c.email },
                    ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  {item.icon}
                                              <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>{item.text}</span>span>
                                </div>div>
                              ))}
                  </div>div>

            {/* Main footer content */}
                  <div style={{ padding: '72px 48px 56px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 280px', gap: '40px' }}>
                    {cols.map((col) => (
                      <div key={col.title} style={colStyle}>
                                    <p style={titleStyle}>
                                                    <span style={{ width: '16px', height: '1px', backgroundColor: '#B8962E', display: 'inline-block' }}></span>span>
                                      {col.title}
                                    </p>p>
                        {col.links.map((l) => (
                                      <a
                                                        key={l.label}
                                                        href={l.href}
                                                        style={linkStyle}
                                                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#B8962E'; }}
                                                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
                                                      >
                                        {l.label}
                                      </a>a>
                                    ))}
                      </div>div>
                    ))}
                  
                    {/* Newsletter */}
                          <div style={colStyle}>
                                    <p style={titleStyle}>
                                                <span style={{ width: '16px', height: '1px', backgroundColor: '#B8962E', display: 'inline-block' }}></span>span>
                                      {c.newsletter}
                                    </p>p>
                                    <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', marginBottom: '16px', lineHeight: '1.7' }}>{c.newsletterSub}</p>p>
                                    <div style={{ display: 'flex' }}>
                                                <input
                                                                type='email'
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                placeholder={c.emailPlaceholder}
                                                                style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', flex: 1, padding: '11px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRight: 'none', color: '#FFFFFF', outline: 'none', letterSpacing: '0.05em' }}
                                                              />
                                                <button
                                                                style={{ fontFamily: '"Jost", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', background: '#B8962E', color: '#111111', border: 'none', padding: '11px 16px', cursor: 'pointer', transition: 'background 0.3s' }}
                                                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#D4AF5A'; }}
                                                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#B8962E'; }}
                                                              >
                                                  {c.subscribeBtn}
                                                </button>button>
                                    </div>div>
                          
                            {/* Social icons */}
                                    <div style={{ display: 'flex', gap: '14px', marginTop: '24px' }}>
                                      {[
            { href: 'https://www.instagram.com/pivot_gold', icon: React.createElement(Instagram, { size: 18, strokeWidth: 1.5 }) },
            { href: 'https://www.facebook.com/share/1C2qSMzrdM/', icon: React.createElement(Facebook, { size: 18, strokeWidth: 1.5 }) },
            { href: 'https://wa.me/905526487383', icon: React.createElement(MessageCircle, { size: 18, strokeWidth: 1.5 }) },
            { href: 'https://pivotgold.etsy.com', icon: React.createElement(ExternalLink, { size: 18, strokeWidth: 1.5 }) },
                        ].map((s, i) => (
                                        <a
                                                          key={i}
                                                          href={s.href}
                                                          target='_blank'
                                                          rel='noopener noreferrer'
                                                          style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)', transition: 'all 0.3s' }}
                                                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#B8962E'; (e.currentTarget as HTMLElement).style.color = '#B8962E'; }}
                                                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
                                                        >
                                          {s.icon}
                                        </a>a>
                                      ))}
                                    </div>div>
                          </div>div>
                  </div>div>
          
            {/* Bottom bar */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>
                          {'\u00A9'} {c.rights}
                        </p>p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                                  <img src='https://cdn.worldvectorlogo.com/logos/visa-10.svg' alt='Visa' style={{ height: '14px', opacity: 0.35, filter: 'grayscale(1) invert(1)' }} />
                                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png' alt='Mastercard' style={{ height: '20px', opacity: 0.35, filter: 'grayscale(1)' }} />
                                  <img src='https://cdn.worldvectorlogo.com/logos/paypal-3.svg' alt='PayPal' style={{ height: '14px', opacity: 0.35, filter: 'grayscale(1) invert(1)' }} />
                        </div>div>
                </div>div>
          </footer>footer>
        );
};
</a>
