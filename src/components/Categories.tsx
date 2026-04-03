import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  lang: Language;
}

export const Categories: React.FC<CategoriesProps> = ({ lang }) => {
  const categories = [
    {
      id: 'rings',
      slug: 'yüzük',
      name: { TR: 'Yüzükler', EN: 'Rings', DE: 'Ringe', AR: 'خواتم' },
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'necklaces',
      slug: 'kolye',
      name: { TR: 'Kolyeler', EN: 'Necklaces', DE: 'Halsketten', AR: 'قلادات' },
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'bracelets',
      slug: 'bilezik',
      name: { TR: 'Bilezikler', EN: 'Bracelets', DE: 'Armbänder', AR: 'أساور' },
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'earrings',
      slug: 'küpe',
      name: { TR: 'Küpeler', EN: 'Earrings', DE: 'Ohrringe', AR: 'أقراط' },
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const titles = {
    TR: 'Kategoriler',
    EN: 'Categories',
    DE: 'Kategorien',
    AR: 'الفئات'
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-zinc-900 mb-4">
            {titles[lang]}
          </h2>
          <div className="w-20 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className="group relative h-96 overflow-hidden cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="h-full w-full"
              >
                <img
                  src={cat.image}
                  alt={cat.name[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-2xl font-serif tracking-widest uppercase mb-4">
                    {cat.name[lang]}
                  </h3>
                  <div className="w-0 group-hover:w-12 h-[1px] bg-white transition-all duration-500"></div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

