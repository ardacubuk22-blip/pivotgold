import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface HeroProps {
    lang: Language;
}

const heroImages = [
    '/images/ring-diamond-1.jpg',
    '/images/ring-red-4.jpg',
    '/images/ring-blue-1.jpg',
    '/images/ring-gold-4.jpg',
    '/images/ring-green-1.jpg',
];

export const Hero: React.FC<HeroProps> = ({ lang }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const content = {
        TR: {
            title: 'Zarafetin En Saf Hali',
            subtitle: 'Özel Tasarım Püskül Yüzük Koleksiyonu — 14 Ayar Altın ile İşlenmiş',
            cta: 'Koleksiyonu Keşfet',
            campaign: 'Yeni Sezon — Püskül Yüzük Koleksiyonu',
        },
        EN: {
            title: 'The Purest Form of Elegance',
            subtitle: 'Custom Fringe Ring Collection — Crafted in 14K Gold',
            cta: 'Explore Collection',
            campaign: 'New Season — Fringe Ring Collection',
        },
        DE: {
            title: 'Die Reinste Form der Eleganz',
            subtitle: 'Individuelle Fransen-Ring Kollektion — Aus 14 Karat Gold',
            cta: 'Kollektion Entdecken',
            campaign: 'Neue Saison — Fransen-Ring Kollektion',
        },
        AR: {
            title: 'أنقى أشكال الأناقة',
            subtitle: 'مجموعة خواتم الشرابة المخصصة — مصنوعة من ذهب 14 قيراط',
            cta: 'استكشف المجموعة',
            campaign: 'موسم جديد — مجموعة خواتم الشرابة',
        },
    };

    const { title, subtitle, cta, campaign } = content[lang] || content.TR;

    return (
        <section className="relative bg-[#F5F0E8] overflow-hidden">
            {/* Announcement bar */}
            <div className="announcement-bar">
                <span className="accent-line"></span>
                {campaign}
                <span className="accent-line"></span>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="flex flex-col items-start"
                >
                    <p className="category-tag mb-6">PivotGold Fine Jewelry</p>
                    <h1
                        className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-[#2C2C2C] mb-6"
                        style={{ fontWeight: 300, letterSpacing: '0.02em' }}
                    >
                        {title}
                    </h1>
                    <div className="divider-gold mb-6" style={{ margin: '0 0 1.5rem 0' }}></div>
                    <p
                        className="text-[#8C7B6B] mb-10 leading-relaxed"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.85rem', letterSpacing: '0.05em', maxWidth: '420px' }}
                    >
                        {subtitle}
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Link to="/category/ring" className="btn-luxury-filled">
                            {cta}
                        </Link>
                        <Link to="/category/ring" className="btn-luxury">
                            {lang === 'TR' ? 'Yüzükler' : lang === 'EN' ? 'Rings' : lang === 'DE' ? 'Ringe' : 'خواتم'}
                        </Link>
                    </div>
                    {/* Color dots */}
                    <div className="flex items-center gap-3 mt-8">
                        {['#C0392B', '#1A237E', '#2E7D32', '#B8962E', '#F5F0E8'].map((color, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentImage(i)}
                                className="w-4 h-4 rounded-full border transition-all duration-300"
                                style={{
                                    backgroundColor: color,
                                    borderColor: currentImage === i ? '#B8962E' : 'transparent',
                                    transform: currentImage === i ? 'scale(1.3)' : 'scale(1)',
                                    boxShadow: currentImage === i ? '0 0 0 2px #FAF7F2, 0 0 0 3px #B8962E' : 'none',
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Right: Featured image with slideshow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative overflow-hidden bg-[#EDE7D9]" style={{ aspectRatio: '4/5' }}>
                        {heroImages.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt="PivotGold Featured Ring"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                                style={{ objectPosition: 'center', opacity: currentImage === i ? 1 : 0 }}
                            />
                        ))}
                        {/* Elegant corner detail */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#B8962E] opacity-60"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#B8962E] opacity-60"></div>
                    </div>
                    {/* Tag below image */}
                    <div className="mt-4 flex items-center gap-3">
                        <span className="category-tag">14K Gold</span>
                        <span className="w-1 h-1 rounded-full bg-[#B8962E]"></span>
                        <span className="category-tag">
                            {lang === 'TR' ? 'Püskül Yüzük Koleksiyonu' : lang === 'EN' ? 'Fringe Ring Collection' : lang === 'DE' ? 'Fransen-Ring Kollektion' : 'مجموعة خاتم الشرابة'}
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Bottom scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
                <div className="w-px h-12 bg-[#B8962E]"></div>
                <span style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.2em', color: '#B8962E', textTransform: 'uppercase' }}>
                    Scroll
                </span>
            </div>
        </section>
    );
};
