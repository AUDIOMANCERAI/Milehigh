
import React from 'react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';
import { Theme } from '../types';

interface ContactProps {
  theme: Theme;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-orbitron text-sm font-bold tracking-[0.4em] text-[#FB4F14] mb-4 uppercase">Communications <span className="crisp-emoji">📡</span></h2>
            <h3 className={`font-orbitron text-4xl md:text-6xl font-black mb-8 tracking-tight transition-colors duration-700 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              OPEN A <br /> CHANNEL <span className="crisp-emoji">🛸</span>
            </h3>
            <p className={`mb-12 max-w-md font-light leading-relaxed transition-colors duration-700 ${
              theme === 'dark' ? 'text-white/60' : 'text-slate-600'
            }`}>
              Dispatch units are ready for deployment. Connect with our logistics coordinators for site assessment and recovery planning. <span className="crisp-emoji">🦾</span>
            </p>

            <div className="space-y-8">
              <a href="tel:7207440391" className="flex items-center gap-6 group cursor-pointer">
                <div className={`w-12 h-12 rounded-sm border flex items-center justify-center text-[#FB4F14] group-hover:bg-[#FB4F14] group-hover:text-white transition-all duration-300 ${
                  theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <Phone size={20} />
                </div>
                <div>
                  <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${
                    theme === 'dark' ? 'text-white/40' : 'text-slate-400'
                  }`}>Direct Line <span className="crisp-emoji">📱</span></p>
                  <p className={`font-orbitron font-bold tracking-wider ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>(720) 744-0391</p>
                  <p className="text-[10px] font-black tracking-widest text-[#FB4F14] uppercase mt-1 animate-pulse">Ask for Mike or Camille <span className="crisp-emoji">👩‍🔧👨‍🔧</span></p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className={`w-12 h-12 rounded-sm border flex items-center justify-center text-[#FB4F14] group-hover:bg-[#FB4F14] group-hover:text-white transition-all duration-300 ${
                  theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${
                    theme === 'dark' ? 'text-white/40' : 'text-slate-400'
                  }`}>HQ Coordinates <span className="crisp-emoji">📍</span></p>
                  <p className={`font-orbitron font-bold tracking-wider ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>Denver Metro Ops / 39.7392° N</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className={`w-12 h-12 rounded-sm border flex items-center justify-center text-[#FB4F14] group-hover:bg-[#FB4F14] group-hover:text-white transition-all duration-300 ${
                  theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${
                    theme === 'dark' ? 'text-white/40' : 'text-slate-400'
                  }`}>Data Transmission <span className="crisp-emoji">📧</span></p>
                  <p className={`font-orbitron font-bold tracking-wider ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>ops@milehighsalvage.io</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute inset-0 blur-3xl pointer-events-none transition-colors duration-1000 ${
              theme === 'dark' ? 'bg-orange-600/10' : 'bg-orange-600/5'
            }`} />
            <form className={`relative border p-8 rounded-sm backdrop-blur-md transition-all duration-700 ${
              theme === 'dark' ? 'bg-white/5 border-white/10 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-[10px] font-bold tracking-widest uppercase mb-2 ${
                      theme === 'dark' ? 'text-white/40' : 'text-slate-400'
                    }`}>Subject Name <span className="crisp-emoji">👤</span></label>
                    <input type="text" className={`w-full border px-4 py-3 outline-none transition-all focus:border-[#FB4F14] ${
                      theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`} />
                  </div>
                  <div>
                    <label className={`block text-[10px] font-bold tracking-widest uppercase mb-2 ${
                      theme === 'dark' ? 'text-white/40' : 'text-slate-400'
                    }`}>Comm Address <span className="crisp-emoji">✉️</span></label>
                    <input type="email" className={`w-full border px-4 py-3 outline-none transition-all focus:border-[#FB4F14] ${
                      theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`} />
                  </div>
                </div>
                <div>
                  <label className={`block text-[10px] font-bold tracking-widest uppercase mb-2 ${
                    theme === 'dark' ? 'text-white/40' : 'text-slate-400'
                  }`}>Operation Details <span className="crisp-emoji">📝</span></label>
                  <textarea rows={4} className={`w-full border px-4 py-3 outline-none transition-all focus:border-[#FB4F14] resize-none ${
                    theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`} />
                </div>
                <button type="submit" className="w-full group relative px-10 py-4 bg-[#FB4F14] text-white font-orbitron font-black text-sm tracking-widest rounded-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-[#FB4F14]/40">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    SEND TRANSMISSION <span className="crisp-emoji">📤</span> <Send size={18} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
