
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
        
        // Follower delay logic via smooth CSS transitions or requestAnimationFrame
        followerRef.current.style.left = `${clientX}px`;
        followerRef.current.style.top = `${clientY}px`;
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractable = target.closest('button, a, input, textarea, [role="button"]');
      setIsHovering(!!isInteractable);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`custom-cursor hidden md:block pointer-events-none ${isHovering ? 'cursor-active' : ''}`} 
        style={{ left: '-100px', top: '-100px', transform: 'translate(-50%, -50%)' }} 
      />
      <div 
        ref={followerRef} 
        className={`custom-cursor-follower hidden md:block pointer-events-none ${isHovering ? 'opacity-0 scale-150' : 'opacity-50'}`} 
        style={{ left: '-100px', top: '-100px', transform: 'translate(-50%, -50%)' }} 
      />
    </>
  );
};

export default CustomCursor;
