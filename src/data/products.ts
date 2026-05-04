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
