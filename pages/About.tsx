import React from 'react';
import { Award, HeartPulse } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen">
      
      {/* Hero Header */}
      <div className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Clinic Interior" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest block mb-4">Our Legacy</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Diagnosis. Prevention. <br/><span className="text-gold-500 italic">Treatment.</span></h1>
          <p className="text-xl text-white max-w-2xl font-medium leading-relaxed">
            Hair4Life® is a specialized clinic dedicated to the diagnosis, prevention, and treatment of hair loss and scalp disorders, delivering advanced, result-oriented solutions.
          </p>
        </div>
      </div>

      {/* The Doctor Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-sm overflow-hidden border border-white/5 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                  alt="Dhirenbhai Kansara" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-10 -left-10 w-full h-full border border-gold-500/20 z-0 hidden lg:block"></div>
              <div className="absolute -bottom-10 -right-10 bg-dark-900 p-6 border border-white/10 z-20 max-w-xs">
                <p className="font-serif text-gold-400 italic text-lg">"We don't just transplant hair; we restore self-belief."</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="font-serif text-4xl text-white">Expertise & Experience</h2>
              <div className="space-y-6 text-white leading-relaxed font-medium">
                <p>
                  At Hair4Life®, we believe hair loss is not just a cosmetic concern but a medical and emotional issue. Our approach is centered around accurate diagnosis, ethical treatment plans, and long-term results rather than quick fixes.
                </p>
                <p>
                  Our team consists of trained professionals with extensive experience in hair restoration and scalp health. Every treatment plan is customized based on individual hair type, degree of hair loss, and lifestyle factors.
                </p>
                <p>
                   We combine clinical research with modern equipment to deliver consistent and natural-looking results, ensuring that our patients receive treatment on par with global standards.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-gold-500/10 rounded-full text-gold-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-white uppercase tracking-wide">Accurate Diagnosis</span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-gold-500/10 rounded-full text-gold-400">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-white uppercase tracking-wide">Ethical Care</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;