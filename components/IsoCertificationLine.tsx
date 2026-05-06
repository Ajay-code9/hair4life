import React from 'react';
import { SITE } from '../config/site';

/** Shared typography — tight on xs so long copy wraps cleanly without crowding the nav */
const textClassName =
  'font-black uppercase text-gold-500 leading-snug tracking-[0.12em] sm:tracking-[0.22em] md:tracking-[0.28em] text-[9px] sm:text-[10px]';

type Align = 'left' | 'center';

type Props = {
  align?: Align;
  className?: string;
  /** Optional ISO mark beside the line — works well in footer; navbar uses text-only. */
  withIsoMark?: boolean;
};

export const IsoCertificationLine: React.FC<Props> = ({
  align = 'left',
  className = '',
  withIsoMark = false,
}) => {
  const alignText = align === 'center' ? 'text-center' : 'text-left';

  if (!withIsoMark) {
    return (
      <p className={`${textClassName} ${alignText} max-w-[min(100%,18rem)] sm:max-w-[20rem] md:max-w-none ${className}`}>
        {SITE.isoCertificationLine}
      </p>
    );
  }

  return (
    <div
      className={`flex flex-wrap items-center gap-2.5 ${align === 'center' ? 'justify-center' : ''} ${className}`}
    >
      <img
        src="/images/isologo.webp"
        alt=""
        width={36}
        height={36}
        className="h-8 w-8 shrink-0 object-contain opacity-95"
        loading="lazy"
        decoding="async"
        aria-hidden
      />
      <p className={`${textClassName} ${alignText} min-w-0 flex-1 basis-[12rem]`}>
        {SITE.isoCertificationLine}
      </p>
    </div>
  );
};
