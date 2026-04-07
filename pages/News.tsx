import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { newsItems } from '../data/articles';
import { buildNewsletterMailto, buildNewsletterWhatsAppText, openWhatsAppMessage } from '../utils/contactOutreach';

const News: React.FC = () => {
  const [email, setEmail] = useState('');
  const [signupNote, setSignupNote] = useState(false);

  const submitNewsWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    openWhatsAppMessage(buildNewsletterWhatsAppText(email.trim()));
    setSignupNote(true);
  };

  return (
    <div className="bg-dark-950 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-gold-500/20 border border-gold-500/30 text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            Latest Updates
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">Clinic News</h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-serif italic font-medium">
            Announcements, new services, and milestones at Hair4Life Clinic, Ahmedabad.
          </p>
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
                  Read Full Story
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-gold-500 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Stay in the loop</h2>
              <p className="text-white/80 text-lg mb-6">
                Enter your email and we’ll open WhatsApp with a signup message, or use plain email if you prefer.
              </p>
              <Link
                to="/contact"
                className="inline-flex text-center bg-white/20 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-dark-950 transition-all border border-white/30"
              >
                Full contact form
              </Link>
            </div>
            <div>
              {signupNote ? (
                <div className="space-y-4">
                  <p className="text-white font-medium leading-relaxed">
                    Check WhatsApp—tap Send to finish. No window?{' '}
                    <a href={buildNewsletterMailto(email.trim())} className="font-black underline hover:text-dark-950">
                      Open email instead
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSignupNote(false);
                      setEmail('');
                    }}
                    className="text-xs font-black uppercase tracking-widest text-white/80 hover:text-white underline"
                  >
                    Enter a different email
                  </button>
                </div>
              ) : (
                <form onSubmit={submitNewsWhatsApp} className="flex flex-col gap-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-white/20 border border-white/30 rounded-full px-8 py-5 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all"
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-white text-dark-950 px-8 py-5 rounded-full font-black uppercase tracking-widest hover:bg-dark-900 hover:text-white transition-all text-center"
                    >
                      WhatsApp signup
                    </button>
                    <a
                      href={email.trim() ? buildNewsletterMailto(email.trim()) : undefined}
                      onClick={(ev) => {
                        if (!email.trim()) ev.preventDefault();
                      }}
                      className={`flex-1 text-center border-2 border-white text-white px-8 py-5 rounded-full font-black uppercase tracking-widest transition-all ${
                        email.trim() ? 'hover:bg-white hover:text-dark-950' : 'opacity-50 pointer-events-none'
                      }`}
                    >
                      Email only
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
