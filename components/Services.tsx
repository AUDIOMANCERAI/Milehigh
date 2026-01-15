
import React from 'react';
import { Sofa, Trash2, Home, Building2, Package, Archive, ChevronRight } from 'lucide-react';
import { Theme } from '../types';

interface ServicesProps {
  theme: Theme;
}

const services = [
  {
    icon: <Sofa size={32} />,
    title: "🛋️ FURNITURE & BULKY",
    description: "Heavy lifting of couches, appliances, and oversized items handled by professional units."
  },
  {
    icon: <Trash2 size={32} />,
    title: "🗑️ HOUSEHOLD JUNK",
    description: "Swift extraction of general debris, broken items, and daily clutter from your residence."
  },
  {
    icon: <Archive size={32} />,
    title: "📦 STORAGE CLEANOUTS",
    description: "Complete clearing of garages, attics, and basements. No item left behind."
  },
  {
    icon: <Home size={32} />,
    title: "🏢 RESIDENTIAL RENTALS",
    description: "Post-tenant cleanup and apartment cleanouts designed for property managers."
  },
  {
    icon: <Building2 size={32} />,
    title: "🏬 COMMERCIAL SPACE",
    description: "Office, retail, and warehouse equipment removal with minimal business disruption."
  },
  {
    icon: <Package size={32} />,
    title: "🏠 FULL PROPERTY REMOVAL",
    description: "Comprehensive cleanouts for estate sales or full-scale renovation readiness."
  }
];

const Services: React.FC<ServicesProps> = ({ theme }) => {
  return (
    <section id="services" className="relative py-32 px-6 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-orbitron text-sm font-bold tracking-[0.4em] text-[#FB4F14] mb-4 uppercase">Anything. Anywhere. <span className="crisp-emoji">📍</span></h2>
            <h3 className={`font-orbitron text-4xl md:text-6xl font-black tracking-tight transition-colors duration-700 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              PICKED UP <span className="opacity-30">FAST. <span className="crisp-emoji">🏃‍♂️</span></span>
            </h3>
          </div>
          <p className={`max-w-md font-light leading-relaxed transition-colors duration-700 ${theme === 'dark' ? 'text-white/50' : 'text-slate-600'}`}>
            We pick up unwanted items directly from your home or business — no lifting required. Most pickups completed within 24 hours. <span className="crisp-emoji">🕒</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const [emoji, ...titleText] = service.title.split(' ');
            return (
              <div 
                key={index} 
                className={`group relative p-8 rounded-sm transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10 hover:bg-[#FB4F14]/5 hover:border-[#FB4F14]/30' 
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-xl hover:border-[#FB4F14]/30'
                }`}
              >
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#FB4F14]/0 group-hover:border-[#FB4F14]/40 transition-all duration-500 rounded-tr-sm" />
                
                <div className="mb-6 text-[#FB4F14] group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(251,79,20,0.5)] transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h4 className={`font-orbitron font-bold text-lg mb-4 tracking-wider group-hover:text-[#FB4F14] transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  <span className="crisp-emoji mr-2">{emoji}</span>
                  {titleText.join(' ')}
                </h4>
                
                <p className={`text-sm leading-relaxed mb-6 font-light transition-colors duration-700 ${
                  theme === 'dark' ? 'text-white/50' : 'text-slate-500'
                }`}>
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#FB4F14] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    ESTIMATING... <span className="crisp-emoji">🤖</span> <div className="w-2 h-2 rounded-full bg-[#FB4F14] animate-pulse" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#FB4F14] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
