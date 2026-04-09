import React from 'react';
import { GALLERY_MARQUEE_IMAGES } from '../data/galleryMarquee';

export interface GalleryMarqueeStripProps {
  /** Optional label above the strip */
  label?: string;
  className?: string;
}

/**
 * Full-bleed horizontal marquee (content moves right → left).
 * Duplicates the image row for a seamless loop; uses `animate-marquee` from `index.html` Tailwind config.
 */
const GalleryMarqueeStrip: React.FC<GalleryMarqueeStripProps> = ({
  label = 'Clinic highlights',
  className = '',
}) => {
  const track = [...GALLERY_MARQUEE_IMAGES, ...GALLERY_MARQUEE_IMAGES];

  return (
    <section
      className={`relative left-1/2 -translate-x-1/2 w-screen max-w-[100vw] overflow-hidden border-y border-white/10 bg-dark-900/40 py-6 sm:py-8 ${className}`}
      aria-label={label}
    >
      {label ? (
        <p className="text-center text-[10px] font-black uppercase tracking-[0.35em] text-gold-500 mb-4 sm:mb-5 px-4">
          {label}
        </p>
      ) : null}
      <div className="relative overflow-hidden">
        <div
          className="flex w-max motion-reduce:animate-none animate-marquee items-center gap-4 sm:gap-5 px-4"
          style={{ animationDuration: '42s' }}
        >
          {track.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="h-24 w-36 sm:h-28 sm:w-44 md:h-32 md:w-52 shrink-0 overflow-hidden rounded-xl border-2 border-gold-500/45 bg-dark-950 shadow-[0_4px_20px_rgba(0,0,0,0.35)] ring-1 ring-white/15"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryMarqueeStrip;
