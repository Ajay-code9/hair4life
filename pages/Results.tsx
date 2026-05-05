import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { positiveReviews } from '../data/positiveReviews';
import { SITE } from '../config/site';

interface Result {
  id: string;
  category: string;
  grafts: string;
  timeframe: string;
  imageBefore: string;
  imageAfter: string;
  imageFit?: 'cover' | 'contain';
  viewMode?: 'compare' | 'collage';
  detailTitle?: string;
  techniqueLabel?: string;
  ageLabel?: string;
  description: string;
}

/** Split so two marquee rows never show the same reviewers at once */
const reviewMarqueeMid = Math.ceil(positiveReviews.length / 2);
const positiveReviewsRow1 = positiveReviews.slice(0, reviewMarqueeMid);
const positiveReviewsRow2 = positiveReviews.slice(reviewMarqueeMid);

const results: Result[] = [
  {
    id: '1',
    category: 'Hair Transplant',
    grafts: '3000 Grafts',
    timeframe: '12 Months',
    imageBefore: '/images/beforeafter/before1.svg',
    imageAfter: '/images/beforeafter/after1.svg',
    imageFit: 'contain',
    description: 'Complete frontal restoration using H4L® FUE (Follicular Unit Extraction) sapphire technique to create a dense, natural hairline.'
  },
  {
    id: '2',
    category: 'Crown Area',
    grafts: '4000 Grafts',
    timeframe: '14 Months',
    imageBefore: '/images/beforeafter/beforecrown.svg',
    imageAfter: '/images/beforeafter/aftercrown.svg',
    imageFit: 'contain',
    description: 'Advanced vertex coverage. Using DHI to ensure maximum density in the crown area.'
  },
  {
    id: '3',
    category: 'Beard Precision Study',
    grafts: '2100 Grafts',
    timeframe: 'Dual-Angle View',
    imageBefore: '/images/beforeafter/beard1.svg',
    imageAfter: '/images/beforeafter/beard2.svg',
    viewMode: 'collage',
    detailTitle: 'Beard Craftsmanship Details',
    techniqueLabel: 'Design Precision',
    ageLabel: 'Execution Quality',
    description: 'These two side-profile views of the same client highlight how precisely the beard line, density flow, and angle matching were executed for a balanced, natural masculine finish.'
  }
];

const Results: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen">
      
       {/* Header */}
       <div className="relative pt-48 pb-32 border-b border-white/5 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=2000" 
            alt="Confident Man" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-6"
          >
            Transformations Gallery
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 leading-none"
          >
            Our Results Speak <br/><span className="text-gold-500 italic font-serif">Louder Than Words</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white max-w-2xl font-serif italic leading-relaxed font-medium"
          >
             Our before-and-after cases demonstrate the effectiveness of our advanced hair restoration techniques and personalized treatment plans.
          </motion.p>
        </div>
      </div>

      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(0,133,84,0.14),transparent_45%),radial-gradient(circle_at_78%_80%,rgba(255,215,130,0.1),transparent_42%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-[2rem] border border-white/10 bg-dark-900/55 p-8 md:p-10 shadow-[0_20px_55px_rgba(0,0,0,0.35)]">
            <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] block mb-3">
              Welcome to Hair4Life
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight">
              Complete Hair Solutions
            </h2>
            <p className="text-slate-300 max-w-4xl leading-relaxed">
              We combine advanced hair and skin care under one roof—from H4L® Laser Therapy and H4L® Hair Check to
              H4L® Salon Services and Skin4Life™ support—delivered by expert teams in Ahmedabad and Mumbai in a warm,
              hygienic setting.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 gap-40">
          {results.map((item, idx) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
                <div>
                  <span className="text-gold-500 font-serif text-4xl italic mr-6">0{idx+1}</span>
                  <span className="text-white text-2xl font-black uppercase tracking-widest">{item.category}</span>
                </div>
                <div className="flex gap-8 mt-6 md:mt-0 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                  <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">{item.grafts}</span>
                  <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">{item.timeframe}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8">
                  {item.viewMode === 'collage' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[item.imageBefore, item.imageAfter].map((src, collageIdx) => (
                        <div
                          key={`${item.id}-collage-${collageIdx}`}
                          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-dark-900/40"
                        >
                          <img
                            src={src}
                            alt={`${item.category} portfolio view ${collageIdx + 1}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/45 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full border border-white/15 bg-black/45 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                            View {collageIdx + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <BeforeAfterSlider 
                      beforeImage={item.imageBefore} 
                      afterImage={item.imageAfter} 
                      imageFit={item.imageFit}
                    />
                  )}
                </div>
                <div className="lg:col-span-4 space-y-8">
                  <h3 className="text-3xl font-black text-white leading-tight">{item.detailTitle ?? 'Transformation Details'}</h3>
                  <p className="text-white text-lg leading-relaxed font-serif italic font-medium">"{item.description}"</p>
                  <div className="pt-8 grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                      <span className="block text-gold-500 text-[10px] font-black uppercase tracking-widest mb-2">{item.techniqueLabel ?? 'Technique'}</span>
                      <span className="text-white font-bold">{item.viewMode === 'collage' ? 'Line Symmetry & Density Control' : 'Sapphire FUE'}</span>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                      <span className="block text-gold-500 text-[10px] font-black uppercase tracking-widest mb-2">{item.ageLabel ?? 'Patient Age'}</span>
                      <span className="text-white font-bold">{item.viewMode === 'collage' ? 'Natural Side-Profile Finish' : '34 Years'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-40">
          <div className="text-center mb-10">
            <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] block mb-3">
              Google Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">What patients loved most</h2>
          </div>
          <div className="space-y-4">
            {[
              { row: 0, items: positiveReviewsRow1, duration: '88s', delay: '0s' },
              { row: 1, items: positiveReviewsRow2, duration: '102s', delay: '-18s' },
            ].map(({ row, items, duration, delay }) => (
              <div
                key={row}
                className="overflow-hidden rounded-2xl border border-white/10 bg-dark-900/30"
              >
                <div
                  className="flex w-max animate-marquee motion-reduce:animate-none items-stretch gap-4 py-4 px-4"
                  style={{ animationDuration: duration, animationDelay: delay }}
                >
                  {[...items, ...items].map((review, idx) => (
                    <div
                      key={`${review.id}-${row}-${idx}`}
                      className="shrink-0 w-[300px] h-[150px] rounded-2xl border border-emerald-200/60 bg-[linear-gradient(135deg,#ffffff_0%,#f0fdf4_60%,#dcfce7_100%)] p-4 flex flex-col shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
                    >
                      <p className="text-sm font-black text-slate-900 truncate">{review.name}</p>
                      <div className="flex items-center gap-1 text-gold-500 mt-2">
                        {[...Array(5)].map((_, starIdx) => (
                          <span key={starIdx}>★</span>
                        ))}
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed mt-2 overflow-hidden">
                        "{review.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transparency Note */}
        <div className="mt-40 bg-dark-900/50 border border-white/5 p-12 rounded-[3rem] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-20"></div>
             <div className="relative z-10">
               <h4 className="text-gold-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Transparency & Ethics</h4>
               <p className="text-slate-400 text-lg font-serif italic leading-relaxed max-w-4xl">
                  "All images displayed represent genuine treatment outcomes. No misleading enhancements or unrealistic representations are used. Results depend on multiple factors including age, hair type, and treatment method. We maintain the highest standards of medical ethics in showcasing our work."
               </p>
             </div>
        </div>

        <div className="mt-32 bg-gold-500 p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-noise opacity-30"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Ready to write your own story?</h3>
            <p className="text-white/80 text-xl mb-12 font-serif italic max-w-2xl mx-auto">
              Send us your photos on WhatsApp for a preliminary assessment and graft estimate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 bg-white text-dark-950 px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-dark-950 hover:text-white transition-all duration-500 shadow-2xl"
              >
                Start Assessment
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              </Link>
              <a
                href={SITE.emiApplyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-6 rounded-full font-black uppercase tracking-[0.18em] hover:bg-emerald-400 transition-colors duration-500 shadow-[0_18px_40px_rgba(16,185,129,0.35)]"
              >
                Apply Now - 0% EMI
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Results;
