import React, { useEffect, useRef, useState } from 'react';

interface VisitingCardSectionProps {
  title?: string;
  subtitle?: string;
}

const VisitingCardSection: React.FC<VisitingCardSectionProps> = ({
  title = 'Official Visiting Card',
  subtitle = 'Your pocket introduction to Hair4Life—credentials, services, and how to reach us, presented in one refined digital card.',
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isFrontVisible, setIsFrontVisible] = useState(false); // Start from backside.
  const [isHovered, setIsHovered] = useState(false);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasEnteredView) {
            setHasEnteredView(true);
            setIsFrontVisible(true); // Smooth initial flip: back -> front.
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasEnteredView]);

  useEffect(() => {
    if (!hasEnteredView || isHovered) return;

    const timer = window.setTimeout(() => {
      setIsFrontVisible((prev) => !prev);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [hasEnteredView, isHovered, isFrontVisible]);

  const handleFlip = () => {
    setIsFrontVisible((prev) => !prev);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    // Subtle physical tilt for 3D feel.
    const tiltY = (px - 0.5) * 10;
    const tiltX = (0.5 - py) * 8;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const cardTransform = `rotateX(${tilt.x}deg) rotateY(${isFrontVisible ? 180 : 0}deg) rotateZ(${tilt.y * 0.12}deg)`;

  return (
    <section ref={sectionRef} className="py-24 border-t border-white/5 bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold-400 text-xs font-black uppercase tracking-[0.3em]">Brand Identity</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-4">{title}</h2>
          <p className="text-slate-400 text-base md:text-lg font-medium font-serif italic leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Match visiting card SVG viewBox (~1325×810) — 16:9 was too wide and caused side letterboxing */}
        <div className="w-full max-w-[min(100%,680px)] sm:max-w-[720px] mx-auto">
          <div
            className="relative w-full aspect-[1325/810] [perspective:1800px] cursor-pointer select-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={handleFlip}
            role="button"
            aria-label="Flip visiting card"
          >
            <div
              aria-hidden
              className={`absolute -inset-4 rounded-[28px] blur-2xl transition-all duration-500 ${
                isHovered ? 'bg-gold-500/20 opacity-100 scale-100' : 'bg-gold-500/10 opacity-70 scale-95'
              }`}
            />
            <div
              aria-hidden
              className="absolute inset-x-[8%] -bottom-5 h-8 rounded-full bg-black/60 blur-md transition-all duration-500"
              style={{ transform: `scale(${isHovered ? 1.04 : 0.98})` }}
            />
            <div
              className="absolute inset-0 rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] will-change-transform"
              style={{ transform: cardTransform }}
            >
              {/* Back side (default visible) */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <img
                  src="/images/visitingcard-back.svg"
                  alt="Hair4Life visiting card back side"
                  className="w-full h-full object-contain rounded-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
                  decoding="async"
                />
              </div>

              {/* Front side */}
              <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <img
                  src="/images/visitingcard-front.svg"
                  alt="Hair4Life visiting card front side"
                  className="w-full h-full object-contain rounded-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
                  decoding="async"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-dark-950/90 border border-white/15 text-[9px] font-black uppercase tracking-[0.18em] text-gold-400 backdrop-blur-sm shadow-[0_10px_25px_rgba(0,0,0,0.65)]">
              Tap to view details
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitingCardSection;
