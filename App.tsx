
import React, { useState } from 'react';
import { Theme } from './types';
import BackgroundEffects from './components/BackgroundEffects';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import EcoSection from './components/EcoSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DiscountTicker from './components/DiscountTicker';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      theme === 'dark' ? 'bg-[#0a0a14] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <BackgroundEffects theme={theme} />
      <CustomCursor />
      
      <div className="relative z-10">
        <DiscountTicker theme={theme} />
        <Header theme={theme} onToggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <Services theme={theme} />
          <Stats theme={theme} />
          <EcoSection theme={theme} />
          <Contact theme={theme} />
        </main>

        <Footer theme={theme} />
      </div>

      {/* Theme-Aware Aesthetic Overlays */}
      <div className={`fixed top-0 bottom-0 left-0 w-px pointer-events-none transition-all duration-700 ${
        theme === 'dark' ? 'bg-gradient-to-b from-transparent via-white/5 to-transparent' : 'bg-gradient-to-b from-transparent via-black/5 to-transparent'
      }`} />
      <div className={`fixed top-0 bottom-0 right-0 w-px pointer-events-none transition-all duration-700 ${
        theme === 'dark' ? 'bg-gradient-to-b from-transparent via-white/5 to-transparent' : 'bg-gradient-to-b from-transparent via-black/5 to-transparent'
      }`} />
      
      {/* Decorative corner accents */}
      <div className={`fixed top-8 left-8 w-32 h-32 border-t border-l pointer-events-none rounded-tl-3xl transition-all duration-700 ${
        theme === 'dark' ? 'border-white/5' : 'border-black/5'
      }`} />
      <div className={`fixed bottom-8 right-8 w-32 h-32 border-b border-r pointer-events-none rounded-br-3xl transition-all duration-700 ${
        theme === 'dark' ? 'border-white/5' : 'border-black/5'
      }`} />
    </div>
  );
};

export default App;
