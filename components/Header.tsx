
import React, { useState, useEffect } from 'react';
import { Mountain, Sun, Moon, Menu, X, Phone } from 'lucide-react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services 🛠️', href: '#services' },
    { name: 'Impact 💥', href: '#impact' },
    { name: 'Contact Us 📞', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-5 bg-[#0a0a14]/90 backdrop-blur-2xl border-b border-white/10' 
          : 'py-10 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Larger Logo Area */}
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="relative">
            <Mountain className="w-10 h-10 text-[#FB4F14] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
            <div className="absolute -inset-3 bg-[#FB4F14]/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-orbitron font-black text-2xl md:text-3xl text-white tracking-tighter uppercase">Mile High 🏔️</span>
            <span className="font-orbitron font-bold text-[11px] md:text-xs text-[#FB4F14] tracking-[0.3em] uppercase">Salvage Supply 🚛</span>
          </div>
        </div>

        {/* Scaled Up Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-orbitron text-[13px] font-bold tracking-[0.2em] text-white/80 hover:text-[#FB4F14] transition-all relative group uppercase"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#FB4F14] transition-all group-hover:w-full" />
            </a>
          ))}
          
          <div className="h-6 w-px bg-white/10" />

          <a 
            href="tel:7207440391" 
            className="flex items-center gap-3 font-orbitron text-base font-black text-[#FB4F14] tracking-widest hover:scale-110 transition-transform bg-[#FB4F14]/5 px-6 py-3 rounded-sm border border-[#FB4F14]/20"
          >
            <Phone size={16} fill="currentColor" />
            720.744.0391
          </a>

          <button 
            onClick={onToggleTheme}
            className="p-3 rounded-sm bg-white/5 hover:bg-[#FB4F14]/20 border border-white/10 hover:border-[#FB4F14]/40 transition-all text-white"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <a href="tel:7207440391" className="text-[#FB4F14] p-3 bg-white/5 rounded-sm border border-white/10">
             <Phone size={24} fill="currentColor" />
          </a>
          <button 
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Expansion */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a14] border-b border-white/10 p-10 lg:hidden animate-in slide-in-from-top duration-300 backdrop-blur-3xl">
          <div className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-orbitron text-xl font-bold tracking-[0.2em] text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:7207440391" 
              className="font-orbitron text-2xl font-black tracking-widest text-[#FB4F14] flex items-center gap-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone size={24} fill="currentColor" />
              720.744.0391
            </a>
            <button 
              onClick={() => { onToggleTheme(); setMobileMenuOpen(false); }}
              className="flex items-center gap-4 font-orbitron text-sm font-bold tracking-widest text-white border border-white/10 p-4 rounded-sm"
            >
              {theme === 'dark' ? 'LIGHT MODE ☀️' : 'DARK MODE 🌙'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
