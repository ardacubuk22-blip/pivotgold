import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: {
      TR: 'Pırlanta Tektaş Yüzük',
      EN: 'Diamond Solitaire Ring',
      DE: 'Diamant-Solitär-Ring',
      AR: 'خاتم ألماس سوليتير'
    },
    category: {
      TR: 'Yüzük',
      EN: 'Ring',
      DE: 'Ring',
      AR: 'خاتم'
    },
    price: 45900,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: '18 Ayar Beyaz Altın, 0.50 Karat pırlanta ile zarafetin simgesi.',
      EN: '18K White Gold, a symbol of elegance with 0.50 carat diamond.',
      DE: '18 Karat Weißgold, ein Symbol der Eleganz mit 0,50 Karat Diamant.',
      AR: 'ذهب أبيض عيار 18 قيراط، رمز للأناقة مع ألماس 0.50 قيراط.'
    },
    details: {
      TR: ['18 Ayar Beyaz Altın', '0.50 Karat Pırlanta', 'G Renk, VS1 Berraklık', 'Sertifikalı Ürün'],
      EN: ['18K White Gold', '0.50 Carat Diamond', 'G Color, VS1 Clarity', 'Certified Product'],
      DE: ['18 Karat Weißgold', '0,50 Karat Diamant', 'G Farbe, VS1 Reinheit', 'Zertifiziertes Produkt'],
      AR: ['ذهب أبيض عيار 18 قيراط', 'ألماس 0.50 قيراط', 'لون G، وضوح VS1', 'منتج معتمد']
    }
  },
  {
    id: '2',
    name: {
      TR: 'Altın Baget Kolye',
      EN: 'Gold Baguette Necklace',
      DE: 'Goldene Baguette-Halskette',
      AR: 'قلادة باجيت ذهبية'
    },
    category: {
      TR: 'Kolye',
      EN: 'Necklace',
      DE: 'Halskette',
      AR: 'قلادة'
    },
    price: 12400,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: 'Modern ve şık tasarımıyla her anınıza eşlik edecek baget kesim kolye.',
      EN: 'Baguette cut necklace that will accompany your every moment with its modern and stylish design.',
      DE: 'Halskette im Baguette-Schliff, die Sie in jedem Moment mit ihrem modernen und stilvollen Design begleitet.',
      AR: 'قلادة بقصة باجيت سترافقك في كل لحظة بتصميمها العصري والأنيق.'
    },
    details: {
      TR: ['14 Ayar Sarı Altın', 'Baget Kesim Zirkon', '45 cm Zincir Boyu'],
      EN: ['14K Yellow Gold', 'Baguette Cut Zircon', '45 cm Chain Length'],
      DE: ['14 Karat Gelbgold', 'Zirkonia im Baguette-Schliff', '45 cm Kettenlänge'],
      AR: ['ذهب أصفر عيار 14 قيراط', 'زركون بقصة باجيت', 'طول السلسلة 45 سم']
    }
  },
  {
    id: '3',
    name: {
      TR: 'İnci Küpe Seti',
      EN: 'Pearl Earring Set',
      DE: 'Perlenohrring-Set',
      AR: 'طقم أقراط لؤلؤ'
    },
    category: {
      TR: 'Küpe',
      EN: 'Earring',
      DE: 'Ohrring',
      AR: 'أقراط'
    },
    price: 8750,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: 'Doğal incilerin eşsiz parlaklığı ile tasarlanmış klasik küpeler.',
      EN: 'Classic earrings designed with the unique brilliance of natural pearls.',
      DE: 'Klassische Ohrringe, entworfen mit dem einzigartigen Glanz natürlicher Perlen.',
      AR: 'أقراط كلاسيكية مصممة ببريق اللؤلؤ الطبيعي الفريد.'
    },
    details: {
      TR: ['Doğal Tatlı Su İncisi', '925 Ayar Gümüş Üzeri Altın Kaplama', 'Antialerjik'],
      EN: ['Natural Freshwater Pearl', 'Gold Plated over 925 Sterling Silver', 'Antiallergic'],
      DE: ['Natürliche Süßwasserperle', 'Vergoldet auf 925er Sterlingsilber', 'Antiallergisch'],
      AR: ['لؤلؤ طبيعي من المياه العذبة', 'مطلي بالذهب فوق فضة إسترليني عيار 925', 'مضاد للحساسية']
    }
  },
  {
    id: '4',
    name: {
      TR: 'Safir Taşlı Bilezik',
      EN: 'Sapphire Stone Bracelet',
      DE: 'Saphir-Stein-Armband',
      AR: 'سوار بحجر الياقوت'
    },
    category: {
      TR: 'Bilezik',
      EN: 'Bracelet',
      DE: 'Armband',
      AR: 'سوار'
    },
    price: 28600,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: 'Derin mavi safir taşları ve pırlanta detayları ile göz kamaştıran bilezik.',
      EN: 'Dazzling bracelet with deep blue sapphire stones and diamond details.',
      DE: 'Prachtvolles Armband mit tiefblauen Saphiren und Diamantdetails.',
      AR: 'سوار مبهر بأحجار الياقوت الأزرق العميق وتفاصيل من الألماس.'
    },
    details: {
      TR: ['18 Ayar Beyaz Altın', 'Doğal Safir Taşları', 'Pırlanta Süslemeli'],
      EN: ['18K White Gold', 'Natural Sapphire Stones', 'Diamond Embellished'],
      DE: ['18 Karat Weißgold', 'Natürliche Saphire', 'Mit Diamanten besetzt'],
      AR: ['ذهب أبيض عيار 18 قيراط', 'أحجار ياقوت طبيعية', 'مزين بالألماس']
    }
  },
  {
    id: '5',
    name: {
      TR: 'Minimalist Altın Yüzük',
      EN: 'Minimalist Gold Ring',
      DE: 'Minimalistischer Goldring',
      AR: 'خاتم ذهبي بسيط'
    },
    category: {
      TR: 'Yüzük',
      EN: 'Ring',
      DE: 'Ring',
      AR: 'خاتم'
    },
    price: 5200,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: 'Günlük kullanım için ideal, zarif ve ince altın yüzük.',
      EN: 'Elegant and thin gold ring, ideal for daily use.',
      DE: 'Eleganter und dünner Goldring, ideal für den täglichen Gebrauch.',
      AR: 'خatم ذهبي أنيق ورقيق، مثالي للاستخدام اليومي.'
    },
    details: {
      TR: ['14 Ayar Sarı Altın', 'Minimal Tasarım', 'Hafif ve Konforlu'],
      EN: ['14K Yellow Gold', 'Minimal Design', 'Light and Comfortable'],
      DE: ['14 Karat Gelbgold', 'Minimalistisches Design', 'Leicht und komfortabel'],
      AR: ['ذهب أصفر عيار 14 قيراط', 'تصميم بسيط', 'خفيف ومريح']
    }
  },
  {
    id: '6',
    name: {
      TR: 'Zümrüt Damla Kolye',
      EN: 'Emerald Drop Necklace',
      DE: 'Smaragd-Tropfen-Halskette',
      AR: 'قلادة زمرد على شكل قطرة'
    },
    category: {
      TR: 'Kolye',
      EN: 'Necklace',
      DE: 'Halskette',
      AR: 'قلادة'
    },
    price: 34200,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: 'Asaletin rengi yeşil zümrüt ile tasarlanmış damla formlu kolye.',
      EN: 'Drop-shaped necklace designed with green emerald, the color of nobility.',
      DE: 'Tropfenförmige Halskette mit grünem Smaragd, der Farbe des Adels.',
      AR: 'قلادة على شكل قطرة مصممة بالزمرد الأخضر، لون النبلاء.'
    },
    details: {
      TR: ['18 Ayar Sarı Altın', 'Doğal Zümrüt', 'Pırlanta Çerçeveli'],
      EN: ['18K Yellow Gold', 'Natural Emerald', 'Diamond Framed'],
      DE: ['18 Karat Gelbgold', 'Natürlicher Smaragd', 'Mit Diamantrahmen'],
      AR: ['ذهب أصفر عيار 18 قيراط', 'زمرد طبيعي', 'مؤطر بالألماس']
    }
  },
  {
    id: '7',
    name: {
      TR: 'Pırlanta Su Yolu Bileklik',
      EN: 'Diamond Tennis Bracelet',
      DE: 'Diamant-Tennisarmband',
      AR: 'سوار تنس ألماس'
    },
    category: {
      TR: 'Bilezik',
      EN: 'Bracelet',
      DE: 'Armband',
      AR: 'سوار'
    },
    price: 68000,
    image: 'https://images.unsplash.com/photo-1599643477372-97427d897f1c?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: 'Sonsuz ışıltı sunan, tam tur pırlantalarla bezeli klasik su yolu bileklik.',
      EN: 'Classic tennis bracelet adorned with full-circle diamonds, offering eternal sparkle.',
      DE: 'Klassisches Tennisarmband mit rundum besetzten Diamanten, das ewigen Glanz bietet.',
      AR: 'سوار تنس كلاسيكي مزين بالألماس الكامل، يوفر بريقاً أبدياً.'
    },
    details: {
      TR: ['18 Ayar Beyaz Altın', '3.00 Karat Pırlanta', 'F-G Renk, VS Berraklık'],
      EN: ['18K White Gold', '3.00 Carat Diamond', 'F-G Color, VS Clarity'],
      DE: ['18 Karat Weißgold', '3,00 Karat Diamant', 'F-G Farbe, VS Reinheit'],
      AR: ['ذهب أبيض عيار 18 قيراط', 'ألماس 3.00 قيراط', 'لون F-G، وضوح VS']
    }
  },
  {
    id: '8',
    name: {
      TR: 'Yakut Taşlı Altın Küpe',
      EN: 'Ruby Gold Earrings',
      DE: 'Rubin-Goldohrringe',
      AR: 'أقراط ذهبية بالياقوت'
    },
    category: {
      TR: 'Küpe',
      EN: 'Earring',
      DE: 'Ohrring',
      AR: 'أقراط'
    },
    price: 15600,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: 'Tutkunun rengi kırmızı yakut taşlarıyla tasarlanmış zarif küpeler.',
      EN: 'Elegant earrings designed with red ruby stones, the color of passion.',
      DE: 'Elegante Ohrringe mit roten Rubinen, der Farbe der Leidenschaft.',
      AR: 'أقراط أنيقة مصممة بأحجار الياقوت الأحمر، لون الشغف.'
    },
    details: {
      TR: ['14 Ayar Sarı Altın', 'Doğal Yakut Taşları', 'Minimalist Tasarım'],
      EN: ['14K Yellow Gold', 'Natural Ruby Stones', 'Minimalist Design'],
      DE: ['14 Karat Gelbgold', 'Natürliche Rubine', 'Minimalistisches Design'],
      AR: ['ذهب أصفر عيار 14 قيراط', 'أحجار ياقوت طبيعية', 'تصميم بسيط']
    }
  },
  {
    id: '9',
    name: {
      TR: 'Zincir Altın Kolye',
      EN: 'Gold Chain Necklace',
      DE: 'Goldene Kette',
      AR: 'سلسلة ذهبية'
    },
    category: {
      TR: 'Kolye',
      EN: 'Necklace',
      DE: 'Halskette',
      AR: 'قلادة'
    },
    price: 9200,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b13b24424a?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: 'Her kıyafetle uyum sağlayan, modern ve zamansız altın zincir kolye.',
      EN: 'Modern and timeless gold chain necklace that complements every outfit.',
      DE: 'Moderne und zeitlose goldene Kette, die jedes Outfit ergänzt.',
      AR: 'سلسلة ذهبية عصرية وخالدة تكمل كل إطلالة.'
    },
    details: {
      TR: ['14 Ayar Sarı Altın', 'Hollow Zincir Tasarımı', '60 cm Uzunluk'],
      EN: ['14K Yellow Gold', 'Hollow Chain Design', '60 cm Length'],
      DE: ['14 Karat Gelbgold', 'Hohlkettendesign', '60 cm Länge'],
      AR: ['ذهب أصفر عيار 14 قيراط', 'تصميم سلسلة مجوفة', 'طول 60 سم']
    }
  },
  {
    id: '10',
    name: {
      TR: 'Vintage Safir Yüzük',
      EN: 'Vintage Sapphire Ring',
      DE: 'Vintage-Saphir-Ring',
      AR: 'خاتم ياقوت عتيق'
    },
    category: {
      TR: 'Yüzük',
      EN: 'Ring',
      DE: 'Ring',
      AR: 'خاتم'
    },
    price: 22400,
    image: 'https://images.unsplash.com/photo-1588444839158-440a64efd146?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: 'Antika esintili tasarımıyla büyüleyici bir safir ve pırlanta yüzük.',
      EN: 'A charming sapphire and diamond ring with an antique-inspired design.',
      DE: 'Ein bezaubernder Saphir- und Diamantring mit antik inspiriertem Design.',
      AR: 'خاتم ساحر من الياقوت والألماس بتصميم مستوحى من الطراز العتيق.'
    },
    details: {
      TR: ['18 Ayar Beyaz Altın', 'Oval Kesim Safir', 'Pırlanta Halo Detayı'],
      EN: ['18K White Gold', 'Oval Cut Sapphire', 'Diamond Halo Detail'],
      DE: ['18 Karat Weißgold', 'Saphir im Ovalschliff', 'Diamant-Halo-Detail'],
      AR: ['ذهب أبيض عيار 18 قيراط', 'ياقوت بقصة بيضاوية', 'تفاصيل هالة من الألماس']
    }
  },
  {
    id: '11',
    name: {
      TR: 'İnci Gerdanlık',
      EN: 'Pearl Choker',
      DE: 'Perlen-Choker',
      AR: 'عقد لؤلؤ ضيق'
    },
    category: {
      TR: 'Kolye',
      EN: 'Necklace',
      DE: 'Halskette',
      AR: 'قلادة'
    },
    price: 18900,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: 'Seçkin incilerle hazırlanan, asalet ve zarafet dolu bir gerdanlık.',
      EN: 'A choker full of nobility and elegance, prepared with distinguished pearls.',
      DE: 'Ein Choker voller Adel und Eleganz, gefertigt aus erlesenen Perlen.',
      AR: 'عقد ضيق مليء بالنبلاء والأناقة، معد من لآلئ متميزة.'
    },
    details: {
      TR: ['Akoya İncileri', '14 Ayar Altın Klips', 'El Yapımı'],
      EN: ['Akoya Pearls', '14K Gold Clasp', 'Handmade'],
      DE: ['Akoya-Perlen', '14 Karat Goldverschluss', 'Handgefertigt'],
      AR: ['لآلئ أكويا', 'مشبك ذهب عيار 14 قيراط', 'صناعة يدوية']
    }
  },
  {
    id: '12',
    name: {
      TR: 'Pırlanta Halka Küpe',
      EN: 'Diamond Hoop Earrings',
      DE: 'Diamant-Creolen',
      AR: 'أقراط حلقية مرصعة بالألماس'
    },
    category: {
      TR: 'Küpe',
      EN: 'Earring',
      DE: 'Ohrring',
      AR: 'أقراط'
    },
    price: 31200,
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=800',
    description: {
      TR: 'Işıltınızı her açıdan yansıtan, pırlantalı şık halka küpeler.',
      EN: 'Stylish diamond hoop earrings that reflect your sparkle from every angle.',
      DE: 'Stilvolle Diamant-Creolen, die Ihren Glanz aus jedem Blickwinkel widerspiegeln.',
      AR: 'أقراط حلقية أنيقة مرصعة بالألماس تعكس بريقك من كل زاوية.'
    },
    details: {
      TR: ['18 Ayar Beyaz Altın', '1.20 Karat Pırlanta', 'İç ve Dış Pırlanta Dizimi'],
      EN: ['18K White Gold', '1.20 Carat Diamond', 'Inside and Outside Diamond Setting'],
      DE: ['18 Karat Weißgold', '1,20 Karat Diamant', 'Diamantbesatz innen und außen'],
      AR: ['ذهب أبيض عيار 18 قيراط', 'ألماس 1.20 قيراط', 'ترصيع الألماس من الداخل والخارج']
    }
  }
];
