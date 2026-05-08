import React from 'react';
            <div className={`flex space-x-4 ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <a href="https://www.instagram.com/pivot_gold?igsh=aWQxOGRiNmludmpm&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-800 rounded-full hover:border-gold hover:text-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/905526487383" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-800 rounded-full hover:border-[#25D366] hover:text-[#25D366] transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="https://pivotgold.etsy.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-800 rounded-full hover:border-[#F1641E] hover:text-[#F1641E] transition-all">
                <ExternalLink size={18} />
              </a>
              <a href="https://www.facebook.com/share/1C2qSMzrdM/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-800 rounded-full hover:border-gold hover:text-gold transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {content[lang].links.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-gold">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-light">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 ${lang === 'AR' ? 'md:flex-row-reverse' : ''}`}>
          <p className="text-zinc-500 text-xs font-light">
            {content[lang].rights}
          </p>
          <div className={`flex items-center space-x-6 ${lang === 'AR' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <img src="https://cdn.worldvectorlogo.com/logos/visa-10.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" alt="Paypal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};
