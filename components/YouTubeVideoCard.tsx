import React, { useMemo } from 'react';
import { ExternalLink } from 'lucide-react';

export interface YouTubeVideoCardProps {
  title: string;
  id: string;
  /** First embed can load earlier for above-the-fold */
  priority?: boolean;
}

/**
 * Uses YouTube’s own embed player as the preview. The iframe shows the real video
 * thumbnail + play button from YouTube (works when direct i.ytimg.com <img> requests
 * are blocked by extensions / privacy tools).
 */
const YouTubeVideoCard: React.FC<YouTubeVideoCardProps> = ({ title, id, priority }) => {
  const embedSrc = useMemo(() => {
    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
    });
    return `https://www.youtube.com/embed/${encodeURIComponent(id)}?${params.toString()}`;
  }, [id]);

  const watchUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;

  return (
    <div className="group/card flex flex-col h-full">
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-gold-500/40 via-white/10 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.45)] flex-1 flex flex-col">
        <div className="rounded-2xl overflow-hidden bg-black border border-white/10 flex flex-col flex-1">
          <div className="aspect-video w-full relative bg-black">
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src={embedSrc}
              title={title}
              loading={priority ? 'eager' : 'lazy'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="p-5 flex flex-col gap-3 flex-1 border-t border-white/5 bg-dark-950">
            <h3 className="text-white font-serif text-lg md:text-xl leading-snug group-hover/card:text-gold-400 transition-colors">
              {title}
            </h3>
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gold-500 hover:text-white transition-colors w-fit"
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden />
              Open on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideoCard;
