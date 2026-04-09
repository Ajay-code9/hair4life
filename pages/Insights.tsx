import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';
import { blogPosts, featuredBlogPost, newsItems } from '../data/articles';
import GalleryMarqueeStrip from '../components/GalleryMarqueeStrip';

const Insights: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-gold-500/20 border border-gold-500/30 text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            News + Articles
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">News & Articles</h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-serif italic font-medium">
            Stay informed with Hair4Life clinic news, announcements, and educational articles from our clinical team.
          </p>
        </div>

        <GalleryMarqueeStrip label="Moments & milestones" className="my-12 md:my-16" />

        {/* News strip */}
        <section className="mb-24">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white">Clinic News</h2>
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-gold-400 hidden sm:inline">
              Latest from the clinic
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-4">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 group-hover:text-gold-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed mb-8 font-medium">{item.excerpt}</p>
                  <Link
                    to={`/news/${item.id}`}
                    className="inline-flex items-center gap-2 text-gold-500 text-xs font-black uppercase tracking-widest group/link"
                  >
                    Read full story
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Articles grid */}
        <section className="mb-24">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white">Articles & Guides</h2>
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-gold-400 hidden sm:inline">
              Advice from our clinical team
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-dark-950/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-gold-500" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-gold-500" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 group-hover:text-gold-500 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed mb-8 font-medium">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gold-500" />
                      </div>
                      <span className="text-xs font-bold text-slate-300">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all group/btn"
                      aria-label={`Read ${post.title}`}
                    >
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured article highlight */}
        <section className="mt-32 bg-dark-900/30 border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
            <img
              src={featuredBlogPost.image}
              alt={featuredBlogPost.title}
              className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-4 py-1 bg-gold-500 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
              Featured article
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">{featuredBlogPost.title}</h2>
            <p className="text-white text-lg mb-10 leading-relaxed font-medium">{featuredBlogPost.excerpt}</p>
            <Link
              to="/blog/featured"
              className="inline-flex items-center gap-3 bg-white text-dark-950 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-all duration-500"
            >
              Read article
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Insights;

