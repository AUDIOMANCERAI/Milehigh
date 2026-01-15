
import React from 'react';
import { Clock, Shield, Star, Users } from 'lucide-react';
import { Theme } from '../types';

interface StatsProps {
  theme: Theme;
}

const stats = [
  { label: 'PICKUP WINDOW', emoji: '⏱️', value: '24', suffix: 'HR', icon: <Clock size={20}/> },
  { label: 'PRECISION RATING', emoji: '⭐', value: '99.9', suffix: '%', icon: <Star size={20}/> },
  { label: 'EXPERIENCE CORE', emoji: '🛡️', value: '15', suffix: 'YRS', icon: <Shield size={20}/> },
  { label: 'LOCAL PROS', emoji: '👥', value: '100', suffix: '%', icon: <Users size={20}/> },
];

const Stats: React.FC<StatsProps> = ({ theme }) => {
  return (
    <section id="impact" className={`relative py-24 px-6 border-y transition-colors duration-700 ${
      theme === 'dark' ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-slate-100/50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group flex flex-col items-center">
              <div className="text-[#FB4F14] mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
              <div className={`font-orbitron text-4xl md:text-6xl font-black mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {stat.value}<span className="text-[#FB4F14]">{stat.suffix}</span>
              </div>
              <div className={`font-orbitron text-[9px] md:text-[10px] font-bold tracking-[0.3em] group-hover:text-[#FB4F14] transition-colors uppercase flex items-center gap-1 ${
                theme === 'dark' ? 'text-white/40' : 'text-slate-500'
              }`}>
                {stat.label} <span className="crisp-emoji">{stat.emoji}</span>
              </div>
              <div className={`mt-4 w-8 h-[2px] transition-all duration-500 group-hover:w-full group-hover:bg-[#FB4F14] ${
                theme === 'dark' ? 'bg-white/10' : 'bg-slate-300'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
