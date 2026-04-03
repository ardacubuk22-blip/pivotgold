import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language, CartItem } from '../types';
import { Truck, Store, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CheckoutPageProps {
  lang: Language;
  cartItems: CartItem[];
}

type DeliveryMethod = 'home' | 'store' | 'whatsapp';
type CheckoutStep = 'method' | 'payment' | 'success';

// Shopier store URL - User will provide this, using a placeholder for now
const SHOPIER_STORE_URL = 'https://www.shopier.com/PivotGold';

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ lang, cartItems }) => {
  const [step, setStep] = useState<CheckoutStep>('method');
  const [method, setMethod] = useState<DeliveryMethod>('home');

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleShopierRedirect = () => {
    // In a real app, you might want to send the cart data to your server first
    // to create a specific Shopier payment link, but for now we redirect to the store.
    window.open(SHOPIER_STORE_URL, '_blank');
    setStep('success');
  };

  const content = {
    TR: {
      title: 'Alışveriş Yöntemi',
      subtitle: 'Siparişinizi nasıl teslim almak istersiniz?',
      paymentTitle: 'Güvenli Ödeme (Shopier)',
      paymentSubtitle: 'Ödemenizi Shopier üzerinden güvenle tamamlayabilirsiniz.',
      paymentInfo: 'Butona tıkladığınızda Shopier mağazamıza yönlendirileceksiniz. Ödemenizi orada tamamladıktan sonra siparişiniz işleme alınacaktır.',
      summary: 'Sipariş Özeti',
      total: 'Toplam',
      next: 'Ödemeye Geç',
      complete: 'Shopier ile Güvenli Öde',
      success: 'Siparişiniz Hazırlanıyor!',
      successDesc: 'Shopier üzerinden ödemenizi tamamladıysanız, siparişiniz onaylanacaktır. En kısa sürede sizinle iletişime geçeceğiz.',
      whatsappSuccess: 'Siparişim hakkında bilgi almak istiyorum',
      contactUs: 'WhatsApp ile Bilgi Ver',
      backHome: 'Ana Sayfaya Dön',
      methods: {
        home: {
          title: 'Adrese Teslim',
          desc: 'Sigortalı kargo ile kapınıza kadar teslimat.'
        },
        store: {
          title: 'Mağazadan Teslim',
          desc: 'Ürününüzü mağazamızdan randevu ile teslim alın.'
        },
        whatsapp: {
          title: 'WhatsApp ile Sipariş',
          desc: 'Müşteri temsilcimizle görüşerek sipariş verin.'
        }
      }
    },
    EN: {
      title: 'Shopping Method',
      subtitle: 'How would you like to receive your order?',
      paymentTitle: 'Secure Payment (Shopier)',
      paymentSubtitle: 'You can complete your payment securely via Shopier.',
      paymentInfo: 'When you click the button, you will be redirected to our Shopier store. Your order will be processed after you complete the payment there.',
      summary: 'Order Summary',
      total: 'Total',
      next: 'Proceed to Payment',
      complete: 'Pay Securely with Shopier',
      success: 'Order is being Prepared!',
      successDesc: 'If you have completed your payment via Shopier, your order will be confirmed. We will contact you soon.',
      whatsappSuccess: 'I want to get information about my order',
      contactUs: 'Inform via WhatsApp',
      backHome: 'Back to Home',
      methods: {
        home: {
          title: 'Home Delivery',
          desc: 'Delivery to your door with insured cargo.'
        },
        store: {
          title: 'Store Pickup',
          desc: 'Pick up your product from our store by appointment.'
        },
        whatsapp: {
          title: 'Order via WhatsApp',
          desc: 'Place an order by talking to our representative.'
        }
      }
    },
    DE: {
      title: 'Einkaufsmethode',
      subtitle: 'Wie möchten Sie Ihre Bestellung erhalten?',
      paymentTitle: 'Sichere Zahlung (Shopier)',
      paymentSubtitle: 'Sie können Ihre Zahlung sicher über Shopier abschließen.',
      paymentInfo: 'Wenn Sie auf die Schaltfläche klicken, werden Sie zu unserem Shopier-Shop weitergeleitet. Ihre Bestellung wird bearbeitet, nachdem Sie dort die Zahlung abgeschlossen haben.',
      summary: 'Bestellübersicht',
      total: 'Gesamt',
      next: 'Weiter zur Zahlung',
      complete: 'Sicher bezahlen mit Shopier',
      success: 'Bestellung wird vorbereitet!',
      successDesc: 'Wenn Sie Ihre Zahlung über Shopier abgeschlossen haben, wird Ihre Bestellung bestätigt. Wir werden Sie bald kontaktieren.',
      whatsappSuccess: 'Ich möchte Informationen zu meiner Bestellung erhalten',
      contactUs: 'Per WhatsApp informieren',
      backHome: 'Zurück zur Startseite',
      methods: {
        home: {
          title: 'Heimlieferung',
          desc: 'Lieferung an Ihre Tür mit versicherter Fracht.'
        },
        store: {
          title: 'Abholung im Geschäft',
          desc: 'Holen Sie Ihr Produkt nach Terminvereinbarung in unserem Geschäft ab.'
        },
        whatsapp: {
          title: 'Bestellung über WhatsApp',
          desc: 'Geben Sie eine Bestellung auf, indem Sie mit unserem Vertreter sprechen.'
        }
      }
    },
    AR: {
      title: 'طريقة التسوق',
      subtitle: 'كيف ترغب في استلام طلبك؟',
      paymentTitle: 'دفع آمن (Shopier)',
      paymentSubtitle: 'يمكنك إتمام عملية الدفع بأمان عبر Shopier.',
      paymentInfo: 'عند النقر على الزر، سيتم توجيهك إلى متجر Shopier الخاص بنا. سيتم معالجة طلبك بعد إتمام عملية الدفع هناك.',
      summary: 'ملخص الطلب',
      total: 'المجموع',
      next: 'المتابعة للدفع',
      complete: 'ادفع بأمان مع Shopier',
      success: 'جاري تحضير الطلب!',
      successDesc: 'إذا كنت قد أكملت عملية الدفع عبر Shopier، فسيتم تأكيد طلبك. سنتصل بك قريباً.',
      whatsappSuccess: 'أريد الحصول على معلومات حول طلبي',
      contactUs: 'أخبرنا عبر واتساب',
      backHome: 'العودة إلى الرئيسية',
      methods: {
        home: {
          title: 'التوصيل للمنزل',
          desc: 'التوصيل إلى باب منزلك مع شحن مؤمن.'
        },
        store: {
          title: 'الاستلام من المتجر',
          desc: 'استلم منتجك من متجرنا بموعد مسبق.'
        },
        whatsapp: {
          title: 'الطلب عبر واتساب',
          desc: 'قم بتقديم طلب من خلال التحدث مع ممثلنا.'
        }
      }
    }
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8"
        >
          <div className="flex justify-center">
            <CheckCircle2 size={80} className="text-gold" />
          </div>
          <h1 className="text-4xl font-serif text-zinc-900">{content[lang].success}</h1>
          <p className="text-zinc-500 font-light">{content[lang].successDesc}</p>
          
          <div className="flex flex-col space-y-4 pt-4">
            <a 
              href={`https://wa.me/905526487383?text=${encodeURIComponent(content[lang].whatsappSuccess)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 px-12 py-4 bg-green-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-all"
            >
              <MessageCircle size={18} />
              <span>{content[lang].contactUs}</span>
            </a>

            <Link 
              to="/" 
              className="inline-block px-12 py-4 border border-zinc-200 text-zinc-900 font-bold uppercase tracking-widest text-xs hover:bg-zinc-50 transition-all"
            >
              {content[lang].backHome}
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Methods or Payment */}
          <div className="space-y-12">
            {step === 'method' ? (
              <>
                <div>
                  <h1 className="text-4xl font-serif text-zinc-900 mb-4">{content[lang].title}</h1>
                  <p className="text-zinc-500 font-light">{content[lang].subtitle}</p>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => setMethod('home')}
                    className={`w-full p-6 text-left border-2 transition-all flex items-center space-x-6 ${
                      method === 'home' ? 'border-gold bg-white shadow-lg' : 'border-zinc-200 bg-transparent hover:border-zinc-300'
                    } ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}
                  >
                    <div className={`p-4 rounded-full ${method === 'home' ? 'bg-gold text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                      <Truck size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-zinc-900 uppercase tracking-widest text-sm mb-1">
                        {content[lang].methods.home.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-light leading-relaxed">
                        {content[lang].methods.home.desc}
                      </p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setMethod('store')}
                    className={`w-full p-6 text-left border-2 transition-all flex items-center space-x-6 ${
                      method === 'store' ? 'border-gold bg-white shadow-lg' : 'border-zinc-200 bg-transparent hover:border-zinc-300'
                    } ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}
                  >
                    <div className={`p-4 rounded-full ${method === 'store' ? 'bg-gold text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                      <Store size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-zinc-900 uppercase tracking-widest text-sm mb-1">
                        {content[lang].methods.store.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-light leading-relaxed">
                        {content[lang].methods.store.desc}
                      </p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setMethod('whatsapp')}
                    className={`w-full p-6 text-left border-2 transition-all flex items-center space-x-6 ${
                      method === 'whatsapp' ? 'border-gold bg-white shadow-lg' : 'border-zinc-200 bg-transparent hover:border-zinc-300'
                    } ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}
                  >
                    <div className={`p-4 rounded-full ${method === 'whatsapp' ? 'bg-gold text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                      <MessageCircle size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-zinc-900 uppercase tracking-widest text-sm mb-1">
                        {content[lang].methods.whatsapp.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-light leading-relaxed">
                        {content[lang].methods.whatsapp.desc}
                      </p>
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <div>
                  <h1 className="text-4xl font-serif text-zinc-900 mb-4">{content[lang].paymentTitle}</h1>
                  <p className="text-zinc-500 font-light">{content[lang].paymentSubtitle}</p>
                </div>

                <div className="bg-white p-8 border border-zinc-200 rounded-sm space-y-6">
                  <div className="flex items-center space-x-4 text-gold mb-4">
                    <CheckCircle2 size={32} />
                    <p className="text-sm font-medium text-zinc-900">
                      {content[lang].paymentSubtitle}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">
                    {content[lang].paymentInfo}
                  </p>
                  <div className="p-4 bg-zinc-50 rounded-sm border border-zinc-100">
                    <img 
                      src="https://www.shopier.com/images/shopier-logo.png" 
                      alt="Shopier" 
                      className="h-8 object-contain mx-auto opacity-70"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Side: Summary */}
          <div className="bg-white p-8 lg:p-12 shadow-xl rounded-sm h-fit">
            <h2 className="text-2xl font-serif text-zinc-900 mb-8 border-b border-zinc-100 pb-4">
              {content[lang].summary}
            </h2>
            
            <div className="space-y-6 mb-12">
              {cartItems.map((item) => (
                <div key={item.id} className={`flex justify-between items-center ${lang === 'AR' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center space-x-4 ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-zinc-100 overflow-hidden rounded-sm">
                      <img src={item.image} alt={item.name[lang]} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-900">{item.name[lang]}</p>
                      <p className="text-xs text-zinc-400">x{item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-zinc-900">
                    {(item.price * item.quantity).toLocaleString('tr-TR')} ₺
                  </p>
                </div>
              ))}
            </div>

            <div className={`flex justify-between items-center pt-6 border-t border-zinc-100 mb-8 ${lang === 'AR' ? 'flex-row-reverse' : ''}`}>
              <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">
                {content[lang].total}
              </span>
              <span className="text-3xl font-serif text-zinc-900">
                {total.toLocaleString('tr-TR')} ₺
              </span>
            </div>

            {step === 'method' ? (
              <button 
                onClick={() => setStep('payment')}
                className="w-full py-5 gold-gradient text-white font-bold uppercase tracking-[0.2em] text-xs hover:shadow-2xl transition-all flex items-center justify-center space-x-4"
              >
                <span>{content[lang].next}</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button 
                onClick={handleShopierRedirect}
                className="w-full py-5 gold-gradient text-white font-bold uppercase tracking-[0.2em] text-xs hover:shadow-2xl transition-all flex items-center justify-center space-x-4"
              >
                <span>{content[lang].complete}</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


