import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  imageFit?: 'cover' | 'contain';
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  imageFit = 'cover',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const activePointerIdRef = useRef<number | null>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    activePointerIdRef.current = e.pointerId;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
    activePointerIdRef.current = null;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerIdRef.current === e.pointerId) {
      stopDragging();
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerIdRef.current === e.pointerId) {
      stopDragging();
    }
  };

  useEffect(() => {
    const handleGlobalUp = () => stopDragging();
    window.addEventListener('pointerup', handleGlobalUp);
    return () => {
      window.removeEventListener('pointerup', handleGlobalUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-dark-950 select-none group touch-none ${
        isDragging ? 'cursor-col-resize' : 'cursor-ew-resize'
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className={`absolute inset-0 w-full h-full ${imageFit === 'contain' ? 'object-contain object-center' : 'object-cover'}`}
        referrerPolicy="no-referrer"
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className={`absolute inset-0 w-full h-full filter grayscale opacity-90 ${imageFit === 'contain' ? 'object-contain object-center' : 'object-cover'}`}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 z-20 w-1 bg-gold-500 shadow-[0_0_20px_rgba(0,133,84,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-gold-500">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-gold-500 rounded-full"></div>
            <div className="w-0.5 h-3 bg-gold-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 z-10 px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
        {beforeLabel}
      </div>
      <div className="absolute bottom-6 right-6 z-10 px-4 py-2 bg-gold-500 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
        {afterLabel}
      </div>

      {/* Instructions Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="bg-dark-950/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-gold-400">
          Slide to compare
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
