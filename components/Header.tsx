
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
          ? 'py-3 md:py-5 bg-[#0a0a14]/90 backdrop-blur-2xl border-b border-white/10' 
          : 'py-6 md:py-10 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2 md:gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="relative">
            <Mountain className="w-8 h-8 md:w-10 md:h-10 text-[#FB4F14] transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute -inset-2 bg-[#FB4F14]/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-orbitron font-black text-lg md:text-2xl text-white tracking-tighter uppercase whitespace-nowrap">Mile High <span className="crisp-emoji">🏔️</span></span>
            <span className="font-orbitron font-bold text-[9px] md:text-xs text-[#FB4F14] tracking-[0.2em] md:tracking-[0.3em] uppercase">Salvage Supply <span className="crisp-emoji">🚛</span></span>
          </div>
        </div>

        {/* Desktop Nav */}
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

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a href="tel:7207440391" className="text-[#FB4F14] p-2 bg-white/5 rounded-sm border border-white/10">
             <Phone size={20} fill="currentColor" />
          </a>
          <button 
            className="text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Expansion */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-0 h-screen bg-[#0a0a14]/95 backdrop-blur-3xl z-[60] flex flex-col items-center justify-center lg:hidden animate-in fade-in zoom-in duration-300">
          <button 
            className="absolute top-8 right-8 text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={40} />
          </button>
          
          <div className="flex flex-col gap-8 items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-orbitron text-3xl font-black tracking-[0.1em] text-white hover:text-[#FB4F14] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="w-16 h-px bg-[#FB4F14]/30 my-4" />
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
              className="mt-4 flex items-center gap-4 font-orbitron text-xs font-bold tracking-widest text-white border border-white/20 px-8 py-4 rounded-sm"
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
