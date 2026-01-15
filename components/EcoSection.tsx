
import React from 'react';
import { Leaf, Recycle, Heart, ShieldCheck } from 'lucide-react';
import { Theme } from '../types';

interface EcoSectionProps {
  theme: Theme;
}

const EcoSection: React.FC<EcoSectionProps> = ({ theme }) => {
  const features = [
    { icon: <Heart size={24} />, title: "DONATIONS", emoji: "🤝", text: "Household items routed to organizations like the Salvation Army." },
    { icon: <Recycle size={24} />, title: "RECYCLING", emoji: "♻️", text: "Certified e-waste recycling for electronics and hazardous batteries." },
    { icon: <ShieldCheck size={24} />, title: "RESPONSIBLE", emoji: "✅", text: "Verified disposal at approved facilities to protect local ecosystems." },
  ];

  return (
    <section className={`relative py-32 px-6 overflow-hidden transition-colors duration-700 ${
      theme === 'dark' ? 'bg-emerald-950/10' : 'bg-emerald-50'
    }`}>
      <div className={`absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 blur-[120px] rounded-full pointer-events-none transition-colors duration-1000 ${
        theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-500/5'
      }`} />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-orbitron text-sm font-bold tracking-[0.4em] text-emerald-600 mb-4 uppercase">Sustainability Ops <span className="crisp-emoji">🌿</span></h2>
          <h3 className={`font-orbitron text-4xl md:text-5xl font-black mb-8 leading-tight transition-colors duration-700 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            GREEN & RESPONSIBLE <br/><span className="text-emerald-600">DISPOSAL <span className="crisp-emoji">🌎</span></span>
          </h3>
          <p className={`mb-12 text-lg font-light leading-relaxed transition-colors duration-700 ${
            theme === 'dark' ? 'text-white/60' : 'text-slate-600'
          }`}>
            We are committed to keeping reusable and recyclable items out of landfills whenever possible. When items can’t be donated, we ensure they’re disposed of properly and legally. <span className="crisp-emoji">🍃</span>
          </p>
          
          <div className="space-y-6">
            {features.map((f, i) => (
              <div 
                key={i} 
                className={`flex gap-6 items-start p-4 border transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/30' 
                    : 'bg-white border-slate-200 shadow-sm hover:border-emerald-500/30'
                }`}
              >
                <div className="text-emerald-600">{f.icon}</div>
                <div>
                  <h4 className={`font-orbitron text-xs font-bold mb-1 tracking-widest ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {f.title} <span className="crisp-emoji">{f.emoji}</span>
                  </h4>
                  <p className={`text-sm font-light ${
                    theme === 'dark' ? 'text-white/40' : 'text-slate-500'
                  }`}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-full h-full border border-emerald-500/20 rounded-full animate-[spin_30s_linear_infinite]" />
             <div className="absolute inset-10 border border-emerald-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
             <Leaf className="w-48 h-48 text-emerald-500/20 animate-pulse" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
             <div className={`font-orbitron text-7xl font-black transition-colors duration-700 ${
               theme === 'dark' ? 'text-white' : 'text-slate-900'
             }`}>0%</div>
             <div className="font-orbitron text-[10px] tracking-[0.4em] text-emerald-600">LANDFILL TARGET <span className="crisp-emoji">🎯</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoSection;
