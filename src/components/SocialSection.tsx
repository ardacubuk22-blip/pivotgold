import React from 'react';
import { Language } from '../types';
import { MessageCircle, ExternalLink, ArrowRight, ShieldCheck, Award, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

interface SocialSectionProps {
  lang: Language;
}

export const SocialSection: React.FC<SocialSectionProps> = ({ lang }) => {
  const content = {
    TR: {
      title: 'Bize Ulaşın & Alışveriş Yapın',
      whatsapp: {
        title: 'WhatsApp Destek',
        desc: 'Sorularınız için bize anında ulaşın.',
        button: 'Mesaj Gönder'
      },
      etsy: {
        title: 'Etsy Mağazamız',
        desc: 'Özel koleksiyonlarımızı Etsy üzerinden keşfedin.',
        button: 'Mağazayı Gez'
      },
      facebook: {
        title: 'Facebook Sayfamız',
        desc: 'Bizi Facebook\'ta takip edin ve güncel kalın.',
        button: 'Takip Et'
      }
    },
    EN: {
      title: 'Contact Us & Shop',
      whatsapp: {
        title: 'WhatsApp Support',
        desc: 'Reach out to us instantly for your questions.',
        button: 'Send Message'
      },
      etsy: {
        title: 'Our Etsy Shop',
        desc: 'Discover our exclusive collections on Etsy.',
        button: 'Visit Shop'
      },
      facebook: {
        title: 'Facebook Page',
        desc: 'Follow us on Facebook and stay updated.',
        button: 'Follow Us'
      }
    },
    DE: {
      title: 'Kontakt & Shop',
      whatsapp: {
        title: 'WhatsApp Support',
        desc: 'Kontaktieren Sie uns sofort bei Fragen.',
        button: 'Nachricht senden'
      },
      etsy: {
        title: 'Unser Etsy-Shop',
        desc: 'Entdecken Sie unsere exklusiven Kollektionen auf Etsy.',
        button: 'Shop besuchen'
      },
      facebook: {
        title: 'Facebook-Seite',
        desc: 'Folgen Sie uns auf Facebook und bleiben Sie auf dem Laufenden.',
        button: 'Folge uns'
      }
    },
    AR: {
      title: 'اتصل بنا وتسوق',
      whatsapp: {
        title: 'دعم واتساب',
        desc: 'تواصل معنا فوراً لأسئلتك.',
        button: 'أرسل رسالة'
      },
      etsy: {
        title: 'متجرنا على Etsy',
        desc: 'اكتشف مجموعاتنا الحصرية على Etsy.',
        button: 'زيارة المتجر'
      },
      facebook: {
        title: 'صفحة فيسبوك',
        desc: 'تابعنا على فيسبوك وابق على اطلاع.',
        button: 'تابعنا'
      }
    }
  };

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-zinc-900 mb-4">
            {content[lang].title}
          </h2>
          <div className="w-20 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${lang === 'AR' ? 'rtl' : 'ltr'}`}>
          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-sm border border-zinc-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500"
          >
            <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <MessageCircle size={40} className="text-[#25D366]" />
            </div>
            <h3 className="text-2xl font-serif mb-4">{content[lang].whatsapp.title}</h3>
            <p className="text-zinc-500 font-light mb-8 max-w-xs">
              {content[lang].whatsapp.desc}
            </p>
            <a
              href="https://wa.me/905526487383"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#25D366] group-hover:translate-x-2 transition-transform duration-300"
            >
              <span>{content[lang].whatsapp.button}</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Facebook Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-12 rounded-sm border border-zinc-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500"
          >
            <div className="w-20 h-20 bg-[#1877F2]/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Facebook size={40} className="text-[#1877F2]" />
            </div>
            <h3 className="text-2xl font-serif mb-4">{content[lang].facebook.title}</h3>
            <p className="text-zinc-500 font-light mb-8 max-w-xs">
              {content[lang].facebook.desc}
            </p>
            <a
              href="https://www.facebook.com/share/1C2qSMzrdM/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#1877F2] group-hover:translate-x-2 transition-transform duration-300"
            >
              <span>{content[lang].facebook.button}</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Etsy Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-12 rounded-sm border border-zinc-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500"
          >
            <div className="w-20 h-20 bg-[#F1641E]/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <ExternalLink size={40} className="text-[#F1641E]" />
            </div>
            <h3 className="text-2xl font-serif mb-4">{content[lang].etsy.title}</h3>
            <p className="text-zinc-500 font-light mb-8 max-w-xs">
              {content[lang].etsy.desc}
            </p>
            <div className="flex items-center space-x-4 mb-8 text-[10px] uppercase tracking-widest text-zinc-400">
              <div className="flex items-center space-x-1">
                <ShieldCheck size={12} className="text-gold" />
                <span>{lang === 'TR' ? 'Güvenli' : lang === 'EN' ? 'Secure' : lang === 'DE' ? 'Sicher' : 'آمن'}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award size={12} className="text-gold" />
                <span>{lang === 'TR' ? 'Orijinal' : lang === 'EN' ? 'Authentic' : lang === 'DE' ? 'Authentisch' : 'أصلي'}</span>
              </div>
            </div>
            <a
              href="https://pivotgold.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#F1641E] group-hover:translate-x-2 transition-transform duration-300"
            >
              <span>{content[lang].etsy.button}</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
