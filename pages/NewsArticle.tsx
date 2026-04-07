import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { newsItems } from '../data/articles';

const NewsArticle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = newsItems.find((n) => n.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark-950 text-white p-8 pt-32">
        <h1 className="text-3xl font-black mb-4">Story not found</h1>
        <Link to="/news" className="text-gold-500 hover:underline font-bold uppercase tracking-widest text-xs">
          Back to news
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-dark-950 min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-gold-500 text-xs font-black uppercase tracking-widest mb-12 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Clinic news
        </Link>

        <span className="inline-block px-3 py-1 bg-gold-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
          {item.category}
        </span>

        <div className="flex items-center gap-2 text-slate-500 text-xs mb-6">
          <Calendar className="w-3 h-3" />
          {item.date}
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">{item.title}</h1>

        <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 mb-12">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <p className="text-xl text-slate-300 font-serif italic mb-10 leading-relaxed">{item.excerpt}</p>

        <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-medium">
          {item.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-dark-950 transition-all"
          >
            Contact the clinic
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NewsArticle;
