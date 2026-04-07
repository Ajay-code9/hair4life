import React, { useEffect, useState } from 'react';
import { SITE } from '../config/site';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Sequence of animations
    // 1. Initial wait (0-500ms)
    // 2. Line draws (500ms-2000ms)
    // 3. Exit starts (2500ms)
    
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500); // 2500ms + 1000ms transition duration

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-950 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="relative z-10 p-8 flex flex-col items-center">
        <img
          src={SITE.logoUrl}
          alt={SITE.logoAlt}
          width={280}
          height={72}
          className="h-16 sm:h-20 md:h-24 w-auto max-w-[min(85vw,320px)] object-contain mb-6 animate-slide-up delay-100 drop-shadow-xl"
          decoding="async"
        />

        {/* Drawing Line */}
        <div className="h-[2px] bg-gold-500 w-0 mx-auto animate-draw-line delay-500"></div>

        <div className="mt-4 text-center overflow-hidden">
          <p className="text-gold-500/80 text-xs font-bold uppercase tracking-[0.4em] animate-slide-up delay-700">
             Redefining Confidence
          </p>
        </div>
      </div>

      {/* Background Texture for Preloader */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>
    </div>
  );
};

export default Preloader;