
import React from 'react';
import { Zap } from 'lucide-react';
import { Theme } from '../types';

interface DiscountTickerProps {
  theme: Theme;
}

const DiscountTicker: React.FC<DiscountTickerProps> = ({ theme }) => {
  const tickerText = [
    { text: "MILITARY DISCOUNTS", emoji: "🎖️" },
    { text: "STUDENT SAVINGS", emoji: "🎓" },
    { text: "ELDERLY 65+", emoji: "👵" },
    { text: "SPECIAL EXTRACTION PRICING", emoji: "⚡" }
  ];
  
  return (
    <div className={`relative w-full overflow-hidden bg-transparent py-1 md:py-1.5 border-b z-50 transition-colors duration-500 ${
      theme === 'dark' ? 'border-white/5' : 'border-black/5'
    }`}>
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-2 md:mx-4 gap-6 md:gap-8">
              {tickerText.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 md:gap-2">
                  <span className={`crisp-emoji text-[10px] md:text-xs`}>{item.emoji}</span>
                  <span className={`font-orbitron font-bold text-[7px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase transition-colors duration-500 ${
                    theme === 'dark' ? 'text-white/60' : 'text-slate-900/60'
                  }`}>
                    {item.text}
                  </span>
                </div>
              ))}
              <Zap size={8} className="text-[#FB4F14] fill-current opacity-40" />
            </div>
          ))}
        </div>
      </div>
      
      <div className={`absolute inset-y-0 left-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-r transition-all duration-700 ${
        theme === 'dark' ? 'from-[#0a0a14] to-transparent' : 'from-slate-50 to-transparent'
      }`} />
      <div className={`absolute inset-y-0 right-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-l transition-all duration-700 ${
        theme === 'dark' ? 'from-[#0a0a14] to-transparent' : 'from-slate-50 to-transparent'
      }`} />
    </div>
  );
};

export default DiscountTicker;
