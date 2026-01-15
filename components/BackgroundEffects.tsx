
import React, { useEffect, useRef } from 'react';
import { Theme } from '../types';

interface BackgroundEffectsProps {
  theme: Theme;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; velocity: number; opacity: number }[] = [];

    const createParticles = () => {
      particles = [];
      const count = theme === 'dark' ? 150 : 80;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (theme === 'dark' ? 1.5 : 2),
          velocity: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        ctx.fillStyle = theme === 'dark' 
          ? `rgba(255, 255, 255, ${p.opacity})` 
          : `rgba(251, 79, 20, ${p.opacity * 0.3})`;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.velocity;
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-700 ${theme === 'dark' ? 'bg-[#0a0a14]' : 'bg-slate-50'}`}>
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Dynamic Nebula Colors */}
      <div className={`absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full blur-[120px] transition-all duration-1000 ${
        theme === 'dark' ? 'bg-orange-600/10' : 'bg-orange-400/5'
      }`} />
      <div className={`absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full blur-[100px] transition-all duration-1000 ${
        theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-200/20'
      }`} />

      {/* Grid Pattern with theme-based contrast */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:60px_60px] transition-opacity duration-1000 ${
        theme === 'dark' ? 'opacity-[0.03]' : 'opacity-[0.06]'
      }`} />
    </div>
  );
};

export default BackgroundEffects;
