import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

interface Result {
  id: string;
  category: string;
  grafts: string;
  timeframe: string;
  imageBefore: string;
  imageAfter: string;
  description: string;
}

const results: Result[] = [
  {
    id: '1',
    category: 'Hair Transplant',
    grafts: '3500 Grafts',
    timeframe: '12 Months',
    imageBefore: 'https://images.unsplash.com/photo-1620331713240-ed6d53b52e4c?auto=format&fit=crop&q=80&w=800',
    imageAfter: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800',
    description: 'Complete frontal restoration using H4L® FUE (Follicular Unit Extraction) sapphire technique to create a dense, natural hairline.'
  },
  {
    id: '2',
    category: 'Beard Restoration',
    grafts: '2100 Grafts',
    timeframe: '8 Months',
    imageBefore: 'https://images.unsplash.com/photo-1595152452543-e5cca283f588?auto=format&fit=crop&q=80&w=800',
    imageAfter: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800',
    description: 'Correction of patchy beard growth. High density implementation for a full, masculine look.'
  },
  {
    id: '3',
    category: 'Crown Area',
    grafts: '4000 Grafts',
    timeframe: '14 Months',
    imageBefore: 'https://images.unsplash.com/photo-1614913501099-36916c683c31?auto=format&fit=crop&q=80&w=800',
    imageAfter: 'https://images.unsplash.com/photo-1614913501460-6c9c7f683615?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced vertex coverage. Using DHI to ensure maximum density in the crown area.'
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
                  <BeforeAfterSlider 
                    beforeImage={item.imageBefore} 
                    afterImage={item.imageAfter} 
                  />
                </div>
                <div className="lg:col-span-4 space-y-8">
                  <h3 className="text-3xl font-black text-white leading-tight">Transformation Details</h3>
                  <p className="text-white text-lg leading-relaxed font-serif italic font-medium">"{item.description}"</p>
                  <div className="pt-8 grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                      <span className="block text-gold-500 text-[10px] font-black uppercase tracking-widest mb-2">Technique</span>
                      <span className="text-white font-bold">Sapphire FUE</span>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                      <span className="block text-gold-500 text-[10px] font-black uppercase tracking-widest mb-2">Patient Age</span>
                      <span className="text-white font-bold">34 Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
          </div>
        </div>
      </div>

    </div>
  );
};

export default Results;
