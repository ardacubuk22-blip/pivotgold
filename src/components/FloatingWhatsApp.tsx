import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const phoneNumber = '905526487383';
  const message = {
    TR: 'Merhaba, bilgi almak istiyorum.',
    EN: 'Hello, I would like to get information.',
    DE: 'Hallo, ich möchte Informationen erhalten.',
    AR: 'مرحباً، أود الحصول على معلومات.'
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message[lang])}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed bottom-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors ${
        lang === 'AR' ? 'left-8' : 'right-8'
      }`}
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </motion.a>
  );
};
