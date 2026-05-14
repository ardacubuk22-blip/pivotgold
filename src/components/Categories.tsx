import React from 'react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface CategoriesProps {
    lang: Language;
}

const categories = [
  {
        id: 'ring',
        name: { TR: 'Yüzük', EN: 'Rings', DE: 'Ringe', AR: 'خواتم' },
        image: '/images/category-ring-1.jpg',
  },
  {
        id: 'earring',
        name: { TR: 'Küpe', EN: 'Earrings', DE: 'Ohrringe', AR: 'أقراط' },
        image: '/images/category-ring-4.jpg',
  },
  {
        id: 'bracelet',
        name: { TR: 'Bilezik', EN: 'Bracelets', DE: 'Armbänder', AR: 'أساور' },
        image: '/images/category-ring-3.jpg',
  },
  {
        id: 'necklace',
        name: { TR: 'Kolye', EN: 'Necklaces', DE: 'Halsketten', AR: 'قلادات' },
        image: '/images/category-ring-6.jpg',
  },
  {
        id: 'diamond',
        name: { TR: 'Pırlanta', EN: 'Diamond', DE: 'Diamanten', AR: 'ألماس' },
        image: '/images/category-ring-7.jpg',
  },
  {
        id: 'piercing',
        name: { TR: 'Piercing', EN: 'Piercing', DE: 'Piercing', AR: 'ثقب' },
        image: '/images/category-ring-9.jpg',
  },
  ];

export const Categories: React.FC<CategoriesProps> = ({ lang }) => {
    return (
          <section style={{
                  backgroundColor: '#FFFFFF',
                  padding: '32px 0',
                  borderBottom: '1px solid #ECECEC',
          }}>
            {/* Scrollable category strip like Kismet */}
                  <div style={{
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    WebkitOverflowScrolling: 'touch',
          }}
                            className="hide-scrollbar"
                          >
                          <div style={{
                                      display: 'flex',
                                      gap: '0',
                                      padding: '0 24px',
                                      minWidth: 'max-content',
                          }}>
                            {categories.map((cat) => (
                                        <Link
                                                        key={cat.id}
                                                        to={`/category/${cat.id}`}
                                                        style={{
                                                                          display: 'flex',
                                                                          flexDirection: 'column',
                                                                          alignItems: 'center',
                                                                          gap: '12px',
                                                                          textDecoration: 'none',
                                                                          padding: '0 20px',
                                                                          flexShrink: 0,
                                                                          width: '180px',
                                                        }}
                                                      >
                                                      <div style={{
                                                                        width: '140px',
                                                                        height: '140px',
                                                                        overflow: 'hidden',
                                                                        backgroundColor: '#F5F3EE',
                                                      }}>
                                                                      <img
                                                                                          src={cat.image}
                                                                                          alt={cat.name[lang]}
                                                                                          style={{
                                                                                                                width: '100%',
                                                                                                                height: '100%',
                                                                                                                objectFit: 'cover',
                                                                                                                objectPosition: 'center',
                                                                                                                transition: 'transform 0.4s ease',
                                                                                            }}
                                                                                          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                                                                                          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                                                                                        />
                                                      </div>div>
                                                      <span style={{
                                                                        fontFamily: '"Oswald", sans-serif',
                                                                        fontSize: '24px',
                                                                        fontWeight: 500,
                                                                        color: '#111111',
                                                                        textTransform: 'uppercase',
                                                                        letterSpacing: '0',
                                                                        textAlign: 'center',
                                                      }}>
                                                        {cat.name[lang]}
                                                      </span>span>
                                        </Link>Link>
                                      ))}
                          </div>div>
                  </div>div>
          </section>section>
        );
};
</div>import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  lang: Language;
}

export const Categories: React.FC<CategoriesPropsh> = ({ lang }) => {
  const categories = [
    {
      id: 'rings',
      slug: 'yüzük',
      name: { TR: 'Yüzükler', EN: 'Rings', DE: 'Ringe', AR: 'خواتم' },
            image: '/images/category-ring-1.jpg'
    },
    {
      id: 'necklaces',
      slug: 'kolye',
      name: { TR: 'Kolyeler', EN: 'Necklaces', DE: 'Halsketten', AR: 'قلادات' },
            image: '/images/category-ring-6.jpg'
    },
    {
      id: 'bracelets',
      slug: 'bilezik',
      name: { TR: 'Bilezikler', EN: 'Bracelets', DE: 'Armbänder', AR: 'أساور' },
            image: '/images/category-ring-3.jpg'
    },
    {
      id: 'earrings',
      slug: 'küpe',
      name: { TR: 'Küpeler', EN: 'Earrings', DE: 'Ohrringe', AR: 'أقراط' },
            image: '/images/category-ring-4.jpg'
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

