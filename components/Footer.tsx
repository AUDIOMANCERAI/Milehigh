
import React from 'react';
import { Mountain, Twitter, Linkedin, Github } from 'lucide-react';
import { Theme } from '../types';

interface FooterProps {
  theme: Theme;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`relative py-20 px-6 border-t transition-colors duration-700 ${
      theme === 'dark' ? 'border-white/5 bg-[#0a0a14]' : 'border-slate-200 bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
           <div>
              <div className="flex items-center gap-3 mb-6">
                <Mountain className="w-8 h-8 text-[#FB4F14]" />
                <div className="flex flex-col leading-none">
                  <span className={`font-orbitron font-black text-2xl tracking-tighter uppercase transition-colors duration-700 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>Mile High <span className="crisp-emoji">🏔️</span></span>
                  <span className="font-orbitron font-bold text-xs text-[#FB4F14] tracking-[0.2em] uppercase">Salvage Supply <span className="crisp-emoji">🚛</span></span>
                </div>
              </div>
              <p className={`text-xs font-light leading-loose max-w-xl transition-colors duration-700 ${
                theme === 'dark' ? 'text-white/40' : 'text-slate-500'
              }`}>
                We provide fast junk removal, furniture pickup, donation hauling, and eco-friendly disposal services for homes and businesses. Our team specializes in same-day and next-day pickups, responsible recycling of electronics and batteries, and donating usable items whenever possible. Colorado's premier extraction unit. <span className="crisp-emoji">🦾</span>
              </p>
           </div>
           <div className="flex flex-col lg:items-end gap-6">
              <div className="flex gap-4">
                <a href="#" className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  theme === 'dark' ? 'border-white/10 text-white/40 hover:text-[#FB4F14] hover:border-[#FB4F14]' : 'border-slate-200 text-slate-400 hover:text-[#FB4F14] hover:border-[#FB4F14]'
                }`}><Twitter size={18} /></a>
                <a href="#" className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  theme === 'dark' ? 'border-white/10 text-white/40 hover:text-[#FB4F14] hover:border-[#FB4F14]' : 'border-slate-200 text-slate-400 hover:text-[#FB4F14] hover:border-[#FB4F14]'
                }`}><Linkedin size={18} /></a>
                <a href="#" className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  theme === 'dark' ? 'border-white/10 text-white/40 hover:text-[#FB4F14] hover:border-[#FB4F14]' : 'border-slate-200 text-slate-400 hover:text-[#FB4F14] hover:border-[#FB4F14]'
                }`}><Github size={18} /></a>
              </div>
              <div className={`font-orbitron text-[10px] tracking-[0.4em] transition-colors duration-700 ${
                theme === 'dark' ? 'text-white/20' : 'text-slate-400'
              }`}>
                SYSTEM STATUS: OPTIMIZED <span className="crisp-emoji">✅</span>
              </div>
           </div>
        </div>

        <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 ${
          theme === 'dark' ? 'border-white/5' : 'border-slate-200'
        }`}>
          <p className={`text-[9px] font-medium tracking-[0.3em] uppercase transition-colors duration-700 ${
            theme === 'dark' ? 'text-white/30' : 'text-slate-400'
          }`}>
            © 2024 MILE HIGH SALVAGE SUPPLY. NO HEAVY LIFTING REQUIRED. <span className="crisp-emoji">📦</span>
          </p>
          <div className="flex gap-8">
            <a href="#" className={`text-[9px] font-bold tracking-widest hover:text-[#FB4F14] transition-colors ${
              theme === 'dark' ? 'text-white/20' : 'text-slate-400'
            }`}>PRIVACY_PROTOCOLS <span className="crisp-emoji">🔒</span></a>
            <a href="#" className={`text-[9px] font-bold tracking-widest hover:text-[#FB4F14] transition-colors ${
              theme === 'dark' ? 'text-white/20' : 'text-slate-400'
            }`}>TERMS_OF_SERVICE <span className="crisp-emoji">📜</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
