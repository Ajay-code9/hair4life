import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Zap, ShieldCheck, CheckCircle2, Heart } from 'lucide-react';
import { SITE } from '../config/site';

const procedureCategories = [
  {
    title: "Diagnostic & Care",
    description: "The first step in every journey: objective scalp and hair analysis to choose the right treatment pathway.",
    icon: <Microscope className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1579152276502-545a248a9931?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "H4L® Hair Check", path: "/procedures/hair-check" },
      { name: "H4L® Laser Therapy", path: "/procedures/laser-therapy" },
      { name: "H4L® PRP", path: "/procedures/flashpoints" },
    ]
  },
  {
    title: "Restoration Programs",
    description: "Core clinical and cosmetic programs including H4L® FUE (Follicular Unit Extraction), H4L® FUI (Follicular Unit Implantation), and H4L® NMHR (Non Medical Hair Replacement).",
    icon: <Zap className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1620331713240-ed6d53b52e4c?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "H4L® FUI", path: "/procedures/ultimate" },
      { name: "H4L® NMHR", path: "/procedures/cosmetic" },
      { name: "H4L® Blend", path: "/procedures/supernatural" },
      { name: "H4L® Home Program", path: "/procedures/home-program" },
      { name: "Hair & Scalp Fitness Program", path: "/procedures/fitness-program" },
      { name: "H4L® Complete", path: "/procedures/complete" },
    ]
  },
  {
    title: "Hair & Skin Services",
    description: "Supportive services for grooming, scalp maintenance, and complete skin and beard-focused care.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "H4L® Women Procedure", path: "/procedures/women-procedure" },
      { name: "H4L® Skincare", path: "/procedures/skincare" },
      { name: "H4L® Products", path: "/procedures/products" },
      { name: "H4L® Salon Services", path: "/procedures/salon-services" },
    ]
  }
];

const Procedures: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen pt-40 md:pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <span className="inline-block px-4 py-1 bg-gold-500/20 border border-gold-500/30 text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            Our Expertise
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">World-Class Procedures</h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-serif italic font-medium">
            Discover our comprehensive range of hair restoration and scalp care solutions, tailored to your individual needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6">
          <Link
            to="/procedures/oncology-hair-support"
            className="group relative flex flex-col sm:flex-row sm:items-center gap-6 overflow-hidden rounded-3xl border border-pink-400/35 bg-gradient-to-br from-pink-950/80 via-[#1a1420] to-emerald-950/50 p-8 sm:p-10 text-left shadow-[0_24px_70px_rgba(236,72,153,0.15)] hover:border-pink-300/50 transition-all duration-500 hover:-translate-y-0.5"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pink-500/20 blur-3xl pointer-events-none group-hover:bg-pink-400/25 transition-colors" />
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-300 ring-1 ring-pink-400/30">
              <Heart className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div className="relative flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-pink-200">
                  Compassionate care
                </span>
                <span className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
                  30% off
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-pink-100 transition-colors">
                Oncology hair support
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed max-w-xl">
                Custom real-hair wigs and systems for patients navigating hair loss from treatment—with private
                consultations and dedicated empathy.
              </p>
            </div>
            <div className="relative flex shrink-0 items-center gap-2 text-pink-200 text-xs font-black uppercase tracking-[0.2em] sm:flex-col sm:items-end">
              <span className="whitespace-nowrap">Learn more</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {procedureCategories.map((category, idx) => (
            <div key={idx} className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4 sticky top-32">
                  <div className="w-20 h-20 bg-gold-500/10 rounded-3xl flex items-center justify-center text-gold-500 mb-8 border border-gold-500/20">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-black text-white mb-6">{category.title}</h2>
                  <p className="text-white leading-relaxed mb-8 font-medium">{category.description}</p>
                  <div className="aspect-video rounded-3xl overflow-hidden border border-white/5 mb-8">
                    <img src={category.image} alt={category.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="w-24 h-1 bg-gold-500/30"></div>
                </div>
                
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <Link 
                      key={itemIdx}
                      to={item.path}
                      className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="text-lg font-black text-white group-hover:text-gold-500 transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-40 bg-dark-900/50 border border-white/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Not sure which procedure is right for you?</h2>
            <p className="text-white text-lg mb-12 max-w-2xl mx-auto font-medium">
              Our experts are here to help. Schedule a comprehensive hair check and consultation to receive a personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-gold-500 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-dark-950 transition-all duration-500 shadow-[0_20px_40px_rgba(0,133,84,0.3)]"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={SITE.emiApplyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-6 rounded-full font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors duration-500 shadow-[0_18px_36px_rgba(16,185,129,0.35)]"
              >
                Apply Now - 0% EMI
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procedures;
