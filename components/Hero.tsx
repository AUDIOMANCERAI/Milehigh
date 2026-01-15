
import React, { useState, useEffect } from 'react';
import { Zap, ChevronRight, Recycle, Truck, ChevronUp, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const words = [
    { text: "HOMES", emoji: "🏘️" },
    { text: "APARTMENTS", emoji: "🏢" },
    { text: "BUSINESSES", emoji: "💼" },
    { text: "COMMERCIAL", emoji: "🏬" },
    { text: "INDUSTRIAL", emoji: "🏭" },
    { text: "EVERYTHING", emoji: "📦" }
  ];
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Hero Visual Ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] pointer-events-none opacity-20">
        <div className="absolute inset-0 border-[1px] border-[#FB4F14]/30 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-20 border-[1px] border-blue-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        
        <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] revolve-slow">
            <ChevronUp className="absolute top-0 left-1/2 -translate-x-1/2 text-[#FB4F14] w-8 h-8 opacity-40" />
            <ChevronUp className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180 text-[#FB4F14] w-8 h-8 opacity-40" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-sm bg-[#FB4F14]/10 border border-[#FB4F14]/20 text-[#FB4F14] text-[10px] font-bold tracking-[0.4em] uppercase mb-10 animate-in fade-in slide-in-from-bottom duration-700">
          <Truck size={14} fill="currentColor" />
          FAST • FRIENDLY • AFFORDABLE • PICKUP <span className="crisp-emoji">🚛</span>
        </div>

        <h1 className="font-orbitron text-5xl md:text-8xl font-black leading-tight tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
          FAST <span className="crisp-emoji">⚡</span>, ECO <span className="crisp-emoji">♻️</span> <br />
          <span className="opacity-80">PICKUP FOR </span>
          <span 
            className={`transition-all duration-300 inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FB4F14] via-[#FF6B35] to-emerald-400 ${
              isTransitioning ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
            }`}
          >
            {words[index].text} <span className="crisp-emoji align-middle ml-2">{words[index].emoji}</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto mb-14 font-light leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          Furniture, junk, donations, and electronics — picked up within 24 hours and disposed of responsibly. Advanced logistics for a cleaner footprint. <span className="crisp-emoji">🌎</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <a href="#contact" className="group relative px-12 py-6 bg-[#FB4F14] text-white font-orbitron font-black text-sm tracking-widest rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(251,79,20,0.4)]">
            <span className="relative z-10 flex items-center gap-2 uppercase">
              Contact Us <span className="crisp-emoji">📞</span> <ChevronRight size={18} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
          
          <a href="tel:7207440391" className="flex flex-col items-center px-10 py-5 bg-white/5 border border-white/10 font-orbitron rounded-sm backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FB4F14]/30 group relative">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">Schedule Pickup <span className="crisp-emoji">📅</span></span>
            <span className="flex items-center gap-2 text-base font-black text-[#FB4F14] tracking-widest mt-1">
              720.744.0391
            </span>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[0.3em] text-[#FB4F14] opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">ASK FOR MIKE OR CAMILLE <span className="crisp-emoji">👨‍🔧👩‍🔧</span></span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="flex flex-col items-center gap-2 font-orbitron text-[9px] tracking-[0.4em]">
          <span>SCROLL <span className="crisp-emoji">🖱️</span></span>
          <div className="w-px h-12 bg-gradient-to-b from-current to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
