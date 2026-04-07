import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Zap, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

const procedureCategories = [
  {
    title: "Diagnostic & Care",
    description: "The essential first step in your journey. We use advanced technology to understand your unique hair profile.",
    icon: <Microscope className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1579152276502-545a248a9931?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Overview", path: "/procedures/overview" },
      { name: "Advanced Hair Check Solution", path: "/procedures/hair-check" },
      { name: "Advanced Laser Therapy", path: "/procedures/laser-therapy" },
    ]
  },
  {
    title: "Strand-by-Strand & Programs",
    description: "Our signature restoration programs designed for maximum density and natural integration.",
    icon: <Zap className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1620331713240-ed6d53b52e4c?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Strand-by-Strand the Ultimate ®", path: "/procedures/ultimate" },
      { name: "Strand-by-Strand Cosmetic®", path: "/procedures/cosmetic" },
      { name: "Hair4Life Flashpoints", path: "/procedures/flashpoints" },
      { name: "Hair4Life Home Care Program", path: "/procedures/home-program" },
      { name: "Hair & Scalp Fitness Program (H4L-FP)", path: "/procedures/fitness-program" },
      { name: "Hair4Life Supernatural", path: "/procedures/supernatural" },
    ]
  },
  {
    title: "Advanced Solutions",
    description: "Targeted solutions for specific hair loss patterns and comprehensive restoration needs.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Hair4Life Complete", path: "/procedures/complete" },
      { name: "Male Pattern Baldness", path: "/procedures/male-baldness" },
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
            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 bg-gold-500 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-dark-950 transition-all duration-500 shadow-[0_20px_40px_rgba(0,133,84,0.3)]"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procedures;
