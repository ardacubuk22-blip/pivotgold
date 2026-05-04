import { Product } from '../types';

export const products: Product[] = [
  {
        id: '1',
        name: {
                TR: 'Kırmızı Emaye Püskül Yüzük',
                EN: 'Red Enamel Fringe Ring',
                DE: 'Roter Emaille Fransen-Ring',
                AR: 'خاتم شرابة بمينا أحمر'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 38500,
        image: '/images/ring-red-4.jpg',
        images: [
                '/images/ring-red-1.jpg',
                '/images/ring-red-2.jpg',
                '/images/ring-red-3.jpg',
                '/images/ring-red-4.jpg',
                '/images/ring-red-5.jpg',
                '/images/ring-red-6.jpg',
                '/images/ring-red-7.jpg',
                '/images/ring-red-8.jpg',
              ],
        description: {
                TR: 'Canlı kırmızı emaye çubuklarıyla süslenmiş 14 Ayar altın yüzük. Modern ve özgün tasarımıyla her kıyafete uyum sağlar.',
                EN: '14K gold ring adorned with vibrant red enamel bars. Its modern and unique design complements every outfit.',
                DE: '14-Karat-Goldring mit lebhaften roten Emaillestäben. Sein modernes und einzigartiges Design passt zu jedem Outfit.',
                AR: 'خاتم ذهب عيار 14 قيراط مزين بقضبان مينا حمراء نابضة بالحياة. تصميمه العصري والفريد يناسب كل إطلالة.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Kırmızı Emaye Püskül Detay', 'Ayarlanabilir Beden', 'El İşçiliği'],
                EN: ['14K Gold', 'Red Enamel Fringe Detail', 'Adjustable Size', 'Handcrafted'],
                DE: ['14 Karat Gold', 'Rotes Emaille Fransen-Detail', 'Verstellbare Größe', 'Handgefertigt'],
                AR: ['ذهب عيار 14 قيراط', 'تفاصيل شرابة مينا حمراء', 'مقاس قابل للتعديل', 'صنع يدوي']
        }
  },
  {
        id: '2',
        name: {
                TR: 'Lacivert Emaye Püskül Yüzük',
                EN: 'Navy Enamel Fringe Ring',
                DE: 'Marine Emaille Fransen-Ring',
                AR: 'خاتم شرابة بمينا كحلي'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 38500,
        image: '/images/ring-blue-1.jpg',
        images: [
                '/images/ring-blue-1.jpg',
                '/images/ring-blue-2.jpg',
                '/images/ring-blue-3.jpg',
                '/images/ring-blue-4.jpg',
                '/images/ring-blue-5.jpg',
                '/images/ring-blue-6.jpg',
                '/images/ring-blue-7.jpg',
                '/images/ring-blue-8.jpg',
              ],
        description: {
                TR: 'Derin lacivert emaye çubuklarıyla tasarlanmış zarif 14 Ayar altın yüzük. Sofistike ve çarpıcı bir kombinasyon.',
                EN: 'Elegant 14K gold ring designed with deep navy enamel bars. A sophisticated and striking combination.',
                DE: 'Eleganter 14-Karat-Goldring mit tiefen Marineblau-Emaillestäben. Eine anspruchsvolle und auffällige Kombination.',
                AR: 'خاتم ذهب عيار 14 قيراط أنيق مصمم بقضبان مينا كحلية عميقة. مزيج راقٍ ولافت للنظر.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Lacivert Emaye Püskül Detay', 'Ayarlanabilir Beden', 'El İşçiliği'],
                EN: ['14K Gold', 'Navy Enamel Fringe Detail', 'Adjustable Size', 'Handcrafted'],
                DE: ['14 Karat Gold', 'Marine Emaille Fransen-Detail', 'Verstellbare Größe', 'Handgefertigt'],
                AR: ['ذهب عيار 14 قيراط', 'تفاصيل شرابة مينا كحلية', 'مقاس قابل للتعديل', 'صنع يدوي']
        }
  },
  {
        id: '3',
        name: {
                TR: 'Yeşil Emaye Püskül Yüzük',
                EN: 'Green Enamel Fringe Ring',
                DE: 'Grüner Emaille Fransen-Ring',
                AR: 'خاتم شرابة بمينا أخضر'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 38500,
        image: '/images/ring-green-1.jpg',
        images: [
                '/images/ring-green-1.jpg',
                '/images/ring-green-2.jpg',
                '/images/ring-green-3.jpg',
              ],
        description: {
                TR: 'Canlı zümrüt yeşili emaye çubuklarıyla süslenmiş 14 Ayar altın yüzük. Doğanın tazeliğini parmaklarınıza taşıyın.',
                EN: '14K gold ring adorned with vibrant emerald green enamel bars. Bring the freshness of nature to your fingers.',
                DE: '14-Karat-Goldring mit lebhaften smaragdgrünen Emaillestäben. Bringen Sie die Frische der Natur an Ihre Finger.',
                AR: 'خاتم ذهب عيار 14 قيراط مزين بقضبان مينا خضراء زمردية نابضة. أحضر نضارة الطبيعة إلى أصابعك.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Yeşil Emaye Püskül Detay', 'Ayarlanabilir Beden', 'El İşçiliği'],
                EN: ['14K Gold', 'Green Enamel Fringe Detail', 'Adjustable Size', 'Handcrafted'],
                DE: ['14 Karat Gold', 'Grünes Emaille Fransen-Detail', 'Verstellbare Größe', 'Handgefertigt'],
                AR: ['ذهب عيار 14 قيراط', 'تفاصيل شرابة مينا خضراء', 'مقاس قابل للتعديل', 'صنع يدوي']
        }
  },
  {
        id: '4',
        name: {
                TR: 'Altın Püskül Yüzük',
                EN: 'Gold Fringe Ring',
                DE: 'Gold Fransen-Ring',
                AR: 'خاتم شرابة ذهبي'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 42000,
        image: '/images/ring-gold-4.jpg',
        images: [
                '/images/ring-gold-1.jpg',
                '/images/ring-gold-2.jpg',
                '/images/ring-gold-3.jpg',
                '/images/ring-gold-4.jpg',
                '/images/ring-gold-5.jpg',
                '/images/ring-gold-6.jpg',
                '/images/ring-gold-7.jpg',
                '/images/ring-gold-8.jpg',
              ],
        description: {
                TR: 'Saf altın Püskül çubuklarıyla işlenmiş premium 14 Ayar yüzük. Zamansız zarafetin ve lüksün sembolü.',
                EN: 'Premium 14K ring crafted with pure gold fringe bars. A symbol of timeless elegance and luxury.',
                DE: 'Premium 14-Karat-Ring, gefertigt mit reinen Goldfransen. Ein Symbol zeitloser Eleganz und Luxus.',
                AR: 'خاتم ذهب عيار 14 قيراط مميز مصنوع بقضبان شرابة ذهبية خالصة. رمز الأناقة والفخامة الخالدة.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Altın Püskül Detay', 'Ayarlanabilir Beden', 'El İşçiliği'],
                EN: ['14K Gold', 'Gold Fringe Detail', 'Adjustable Size', 'Handcrafted'],
                DE: ['14 Karat Gold', 'Gold Fransen-Detail', 'Verstellbare Größe', 'Handgefertigt'],
                AR: ['ذهب عيار 14 قيراط', 'تفاصيل شرابة ذهبية', 'مقاس قابل للتعديل', 'صنع يدوي']
        }
  },
  {
        id: '5',
        name: {
                TR: 'Pırlanta Püskül Yüzük',
                EN: 'Diamond Fringe Ring',
                DE: 'Diamant Fransen-Ring',
                AR: 'خاتم شرابة ألماسي'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 68000,
        image: '/images/ring-diamond-1.jpg',
        images: [
                '/images/ring-diamond-1.jpg',
                '/images/ring-diamond-2.jpg',
                '/images/ring-diamond-3.jpg',
                '/images/ring-diamond-4.jpg',
                '/images/ring-diamond-5.jpg',
                '/images/ring-diamond-6.jpg',
                '/images/ring-diamond-7.jpg',
                '/images/ring-diamond-8.jpg',
              ],
        description: {
                TR: 'Pırlanta taşlarıyla kaplanmış lüks püskül çubuklara sahip 14 Ayar altın yüzük. En özel anlara layık benzersiz tasarım.',
                EN: '14K gold ring with luxury fringe bars encrusted with diamonds. A unique design worthy of the most special moments.',
                DE: '14-Karat-Goldring mit luxuriösen, mit Diamanten besetzten Fransen. Ein einzigartiges Design für die besonderen Momente.',
                AR: 'خاتم ذهب عيار 14 قيراط مع قضبان شرابة فاخرة مرصعة بالألماس. تصميم فريد يليق بأكثر اللحظات تميزاً.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Pırlanta Kakmalı Püskül', 'Ayarlanabilir Beden', 'Sertifikalı Pırlanta'],
                EN: ['14K Gold', 'Diamond-Encrusted Fringe', 'Adjustable Size', 'Certified Diamonds'],
                DE: ['14 Karat Gold', 'Diamantbesetzte Fransen', 'Verstellbare Größe', 'Zertifizierte Diamanten'],
                AR: ['ذهب عيار 14 قيراط', 'شرابة مرصعة بالألماس', 'مقاس قابل للتعديل', 'ألماس معتمد']
        }
  },
  {
        id: '6',
        name: {
                TR: 'Kırmızı Emaye Püskül Yüzük - Özel Seri',
                EN: 'Red Enamel Fringe Ring - Special Edition',
                DE: 'Roter Emaille Fransen-Ring - Sonderedition',
                AR: 'خاتم شرابة بمينا أحمر - إصدار خاص'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 41500,
        image: '/images/ring-red-9.jpg',
        images: [
                '/images/ring-red-9.jpg',
                '/images/ring-red-10.jpg',
                '/images/ring-red-11.jpg',
                '/images/ring-red-12.jpg',
                '/images/ring-red-13.jpg',
                '/images/ring-red-14.jpg',
                '/images/ring-red-15.jpg',
                '/images/ring-red-16.jpg',
              ],
        description: {
                TR: 'Özel seri kırmızı emaye tasarımıyla dikkat çekici bir yüzük. Sınırlı üretim, sonsuz zarafet.',
                EN: 'An eye-catching ring with a special edition red enamel design. Limited production, endless elegance.',
                DE: 'Ein auffälliger Ring mit einem Sonderedition roten Emaille-Design. Limitierte Produktion, grenzenlose Eleganz.',
                AR: 'خاتم لافت للنظر بتصميم مينا حمراء من إصدار خاص. إنتاج محدود، أناقة لا حدود لها.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Özel Seri Kırmızı Emaye', 'Ayarlanabilir Beden', 'Sınırlı Üretim'],
                EN: ['14K Gold', 'Special Edition Red Enamel', 'Adjustable Size', 'Limited Edition'],
                DE: ['14 Karat Gold', 'Sonderedition Rotes Emaille', 'Verstellbare Größe', 'Limitierte Auflage'],
                AR: ['ذهب عيار 14 قيراط', 'مينا حمراء إصدار خاص', 'مقاس قابل للتعديل', 'إصدار محدود']
        }
  },
  {
        id: '7',
        name: {
                TR: 'Lacivert Emaye Püskül Yüzük - Premium',
                EN: 'Navy Enamel Fringe Ring - Premium',
                DE: 'Marine Emaille Fransen-Ring - Premium',
                AR: 'خاتم شرابة بمينا كحلي - بريميوم'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 44000,
        image: '/images/ring-blue-9.jpg',
        images: [
                '/images/ring-blue-9.jpg',
                '/images/ring-blue-10.jpg',
                '/images/ring-blue-11.jpg',
                '/images/ring-blue-12.jpg',
                '/images/ring-blue-13.jpg',
                '/images/ring-blue-14.jpg',
                '/images/ring-blue-15.jpg',
                '/images/ring-blue-16.jpg',
              ],
        description: {
                TR: 'Premium koleksiyondan derin mavi emaye püskül yüzük. Denizin derinliklerinden ilham alan tasarım.',
                EN: 'Deep blue enamel fringe ring from the premium collection. A design inspired by the depths of the sea.',
                DE: 'Tiefblauer Emaille Fransering aus der Premium-Kollektion. Ein Design inspiriert von den Tiefen des Meeres.',
                AR: 'خاتم شرابة مينا أزرق عميق من المجموعة المميزة. تصميم مستوحى من أعماق البحار.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Premium Lacivert Emaye', 'Ayarlanabilir Beden', 'El İşçiliği'],
                EN: ['14K Gold', 'Premium Navy Enamel', 'Adjustable Size', 'Handcrafted'],
                DE: ['14 Karat Gold', 'Premium Marine Emaille', 'Verstellbare Größe', 'Handgefertigt'],
                AR: ['ذهب عيار 14 قيراط', 'مينا كحلية مميزة', 'مقاس قابل للتعديل', 'صنع يدوي']
        }
  },
  {
        id: '8',
        name: {
                TR: 'Pırlanta Püskül Yüzük - Lüks Seri',
                EN: 'Diamond Fringe Ring - Luxury Series',
                DE: 'Diamant Fransen-Ring - Luxusserie',
                AR: 'خاتم شرابة ألماسي - سلسلة فاخرة'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 75000,
        image: '/images/ring-diamond-9.jpg',
        images: [
                '/images/ring-diamond-9.jpg',
                '/images/ring-diamond-10.jpg',
                '/images/ring-diamond-11.jpg',
                '/images/ring-diamond-12.jpg',
                '/images/ring-diamond-13.jpg',
                '/images/ring-diamond-14.jpg',
                '/images/ring-diamond-15.jpg',
              ],
        description: {
                TR: 'Lüks seri pırlanta püskül yüzük, mükemmelliğin ve zarafetin doruk noktası.',
                EN: 'Luxury series diamond fringe ring, the pinnacle of perfection and elegance.',
                DE: 'Luxusserie Diamant-Fransering, der Gipfel der Perfektion und Eleganz.',
                AR: 'خاتم شرابة ألماسي من السلسلة الفاخرة، قمة الكمال والأناقة.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Lüks Pırlanta Kakma', 'Ayarlanabilir Beden', 'Sertifikalı Pırlanta'],
                EN: ['14K Gold', 'Luxury Diamond Inlay', 'Adjustable Size', 'Certified Diamonds'],
                DE: ['14 Karat Gold', 'Luxus Diamanteinlage', 'Verstellbare Größe', 'Zertifizierte Diamanten'],
                AR: ['ذهب عيار 14 قيراط', 'تطعيم ألماس فاخر', 'مقاس قابل للتعديل', 'ألماس معتمد']
        }
  },
  {
        id: '9',
        name: {
                TR: 'Altın Püskül Yüzük - Klasik',
                EN: 'Gold Fringe Ring - Classic',
                DE: 'Gold Fransen-Ring - Klassisch',
                AR: 'خاتم شرابة ذهبي - كلاسيكي'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 45000,
        image: '/images/ring-gold-9.jpg',
        images: [
                '/images/ring-gold-9.jpg',
                '/images/ring-gold-10.jpg',
                '/images/ring-gold-11.jpg',
                '/images/ring-gold-12.jpg',
              ],
        description: {
                TR: 'Klasik koleksiyondan saf altın püskül yüzük. Asaletin en sade ifadesi.',
                EN: 'Pure gold fringe ring from the classic collection. The most refined expression of nobility.',
                DE: 'Reiner Goldfransen-Ring aus der klassischen Kollektion. Der raffinierteste Ausdruck von Adel.',
                AR: 'خاتم شرابة ذهب خالص من المجموعة الكلاسيكية. أرقى تعبير عن النبل.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Klasik Altın Püskül', 'Ayarlanabilir Beden', 'El İşçiliği'],
                EN: ['14K Gold', 'Classic Gold Fringe', 'Adjustable Size', 'Handcrafted'],
                DE: ['14 Karat Gold', 'Klassische Goldfransen', 'Verstellbare Größe', 'Handgefertigt'],
                AR: ['ذهب عيار 14 قيراط', 'شرابة ذهبية كلاسيكية', 'مقاس قابل للتعديل', 'صنع يدوي']
        }
  },
  {
        id: '10',
        name: {
                TR: 'Kırmızı Emaye Püskül Yüzük - Koleksiyon',
                EN: 'Red Enamel Fringe Ring - Collection',
                DE: 'Roter Emaille Fransen-Ring - Kollektion',
                AR: 'خاتم شرابة بمينا أحمر - مجموعة'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 39500,
        image: '/images/ring-red-17.jpg',
        images: [
                '/images/ring-red-17.jpg',
                '/images/ring-red-18.jpg',
                '/images/ring-red-19.jpg',
                '/images/ring-red-20.jpg',
                '/images/ring-red-21.jpg',
                '/images/ring-red-22.jpg',
                '/images/ring-red-23.jpg',
                '/images/ring-red-24.jpg',
              ],
        description: {
                TR: 'Koleksiyon serisinden özenle tasarlanmış kırmızı emaye püskül yüzük.',
                EN: 'Carefully designed red enamel fringe ring from the collection series.',
                DE: 'Sorgfältig gestalteter roter Emaille Fransering aus der Kollektion.',
                AR: 'خاتم شرابة مينا حمراء مصمم بعناية من سلسلة المجموعة.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Koleksiyon Kırmızı Emaye', 'Ayarlanabilir Beden', 'El İşçiliği'],
                EN: ['14K Gold', 'Collection Red Enamel', 'Adjustable Size', 'Handcrafted'],
                DE: ['14 Karat Gold', 'Kollektion Rotes Emaille', 'Verstellbare Größe', 'Handgefertigt'],
                AR: ['ذهب عيار 14 قيراط', 'مينا حمراء من المجموعة', 'مقاس قابل للتعديل', 'صنع يدوي']
        }
  },
  {
        id: '11',
        name: {
                TR: 'Pırlanta Püskül Yüzük - Prestige',
                EN: 'Diamond Fringe Ring - Prestige',
                DE: 'Diamant Fransen-Ring - Prestige',
                AR: 'خاتم شرابة ألماسي - بريستيج'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 72000,
        image: '/images/ring-diamond-5.jpg',
        images: [
                '/images/ring-diamond-1.jpg',
                '/images/ring-diamond-2.jpg',
                '/images/ring-diamond-3.jpg',
                '/images/ring-diamond-4.jpg',
                '/images/ring-diamond-5.jpg',
                '/images/ring-diamond-6.jpg',
              ],
        description: {
                TR: 'Prestige koleksiyonundan pırlanta kakmalı püskül yüzük. Lüksün yeni tanımı.',
                EN: 'Diamond-encrusted fringe ring from the Prestige collection. A new definition of luxury.',
                DE: 'Diamantbesetzter Fransering aus der Prestige-Kollektion. Eine neue Definition von Luxus.',
                AR: 'خاتم شرابة مرصع بالألماس من مجموعة بريستيج. تعريف جديد للفخامة.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Prestige Pırlanta Kakma', 'Ayarlanabilir Beden', 'GIA Sertifikalı'],
                EN: ['14K Gold', 'Prestige Diamond Inlay', 'Adjustable Size', 'GIA Certified'],
                DE: ['14 Karat Gold', 'Prestige Diamanteinlage', 'Verstellbare Größe', 'GIA-zertifiziert'],
                AR: ['ذهب عيار 14 قيراط', 'تطعيم ألماس بريستيج', 'مقاس قابل للتعديل', 'معتمد من GIA']
        }
  },
  {
        id: '12',
        name: {
                TR: 'Altın Püskül Yüzük - Signature',
                EN: 'Gold Fringe Ring - Signature',
                DE: 'Gold Fransen-Ring - Signature',
                AR: 'خاتم شرابة ذهبي - سيغنتشر'
        },
        category: {
                TR: 'Yüzük',
                EN: 'Ring',
                DE: 'Ring',
                AR: 'خاتم'
        },
        price: 48000,
        image: '/images/ring-gold-6.jpg',
        images: [
                '/images/ring-gold-4.jpg',
                '/images/ring-gold-5.jpg',
                '/images/ring-gold-6.jpg',
                '/images/ring-gold-7.jpg',
                '/images/ring-gold-8.jpg',
              ],
        description: {
                TR: 'Signature koleksiyonundan eşsiz altın püskül tasarımı. PivotGold imzasının en özel ifadesi.',
                EN: 'Unique gold fringe design from the Signature collection. The most special PivotGold expression.',
                DE: 'Einzigartiges Goldfransen-Design aus der Signature-Kollektion. Der besonderste PivotGold-Ausdruck.',
                AR: 'تصميم شرابة ذهبية فريدة من مجموعة سيغنتشر. أكثر تعبير خاص عن توقيع PivotGold.'
        },
        details: {
                TR: ['14 Ayar Altın', 'Signature Altın Püskül', 'Ayarlanabilir Beden', 'Özel Ambalaj'],
                EN: ['14K Gold', 'Signature Gold Fringe', 'Adjustable Size', 'Special Packaging'],
                DE: ['14 Karat Gold', 'Signature Goldfransen', 'Verstellbare Größe', 'Spezialverpackung'],
                AR: ['ذهب عيار 14 قيراط', 'شرابة ذهبية سيغنتشر', 'مقاس قابل للتعديل', 'تغليف خاص']
        }
  }
  ];
