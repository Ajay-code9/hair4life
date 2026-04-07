import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts, featuredBlogPost } from '../data/articles';

function getPost(slug: string | undefined) {
  if (!slug) return null;
  if (slug === 'featured') return featuredBlogPost;
  return blogPosts.find((p) => p.id === slug) ?? null;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark-950 text-white p-8 pt-32">
        <h1 className="text-3xl font-black mb-4">Article not found</h1>
        <Link to="/blog" className="text-gold-500 hover:underline font-bold uppercase tracking-widest text-xs">
          Back to journal
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-dark-950 min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gold-500 text-xs font-black uppercase tracking-widest mb-12 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          The Hair Journal
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6">
          <span className="px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full">{post.category}</span>
          <span className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-gold-500" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-gold-500" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">{post.title}</h1>

        <div className="flex items-center gap-3 mb-12 pb-12 border-b border-white/10">
          <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gold-500" />
          </div>
          <span className="text-sm font-bold text-slate-300">{post.author}</span>
        </div>

        <div className="aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-medium">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-dark-950 transition-all"
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
