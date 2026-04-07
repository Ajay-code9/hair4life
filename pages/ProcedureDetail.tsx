import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Award, Users } from 'lucide-react';

const procedureData: Record<string, any> = {
  'overview': {
    title: 'Hair4Life Program Overview',
    subtitle: 'Complete hair and skin solutions under one roof',
    description: 'Hair4Life combines diagnosis, prevention, treatment, salon support, and maintenance programs so patients can manage hair and skin concerns through one coordinated care model.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    features: ['Scalp Analysis', 'Hair Density Check', 'Personalized Consultation', 'Medical History Review'],
  },
  'hair-check': {
    title: 'H4L® Hair Check',
    subtitle: 'The modern way to measure and manage hair loss',
    description: 'H4L® Hair Check helps quantify hair fall, breakage, density, and treatment response, giving patients and doctors a practical baseline before and during therapy.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=1200',
    features: ['High-Res Digital Imaging', 'Growth Tracking', 'Density Mapping', 'Follicle Health Assessment'],
  },
  'laser-therapy': {
    title: 'H4L® Laser Therapy',
    subtitle: 'Low-level light support for pattern hair loss',
    description: 'Low-level laser therapy is a non-invasive light-based treatment used as part of plans for androgenetic alopecia (pattern balding) in men and women.',
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=1200',
    features: ['FDA Cleared Technology', 'Painless Treatment', 'No Side Effects', 'Improved Scalp Health'],
  },
  'ultimate': {
    title: 'H4L® FUI',
    subtitle: 'Precision implant planning for natural density',
    description: 'H4L® FUI focuses on natural angle, density distribution, and hairline planning to deliver balanced and realistic restoration outcomes.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200',
    features: ['Natural Hairline Design', 'Minimal Recovery Time', 'Permanent Results', 'Expert Surgical Team'],
  },
  'cosmetic': {
    title: 'H4L® NMHR',
    subtitle: 'Non-medical hair replacement for immediate coverage',
    description: 'H4L® NMHR provides cosmetic coverage options for suitable candidates seeking immediate visual improvement without surgery.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
    features: ['Immediate Results', 'Non-Surgical', 'Custom Matched', 'Lifestyle Compatible'],
  },
  'flashpoints': {
    title: 'H4L® PRP',
    subtitle: 'Scalp-support therapy for selected cases',
    description: 'H4L® PRP is used in selected treatment plans to support scalp environment and complement medical or procedural hair restoration pathways.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200',
    features: ['No Chemicals', 'Reusable Hair', 'Natural Integration', 'Volume & Length'],
  },
  'home-program': {
    title: 'Hair4Life Home Care Program',
    subtitle: 'Professional care in the comfort of your home',
    description: 'A comprehensive suite of professional-grade products and devices designed to maintain and enhance your hair health between clinic visits.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200',
    features: ['Professional Products', 'Easy to Use', 'Continuous Support', 'Proven Results'],
  },
  'fitness-program': {
    title: 'Hair & Scalp Fitness Program (H4L®-FP)',
    subtitle: 'Holistic approach to hair health',
    description: 'A structured program combining clinical treatments, nutrition, and specialized products to optimize the "fitness" of your hair and scalp.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
    features: ['Nutritional Guidance', 'Clinical Scalp Care', 'Exercise for Scalp', 'Progress Monitoring'],
  },
  'supernatural': {
    title: 'H4L® Blend',
    subtitle: 'Combined strategy for continuity and confidence',
    description: 'H4L® Blend combines suitable clinical and cosmetic options in one plan for patients needing staged or mixed restoration goals.',
    image: 'https://images.unsplash.com/photo-1595475243692-39282099167a?auto=format&fit=crop&q=80&w=1200',
    features: ['Undetectable Base', 'Natural Growth Pattern', 'Breathable Design', 'Custom Styled'],
  },
  'complete': {
    title: 'Hair4Life Complete',
    subtitle: 'The total hair restoration package',
    description: 'Our most comprehensive solution combining multiple technologies and treatments for those seeking the absolute best possible outcome.',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1200',
    features: ['Multi-Tech Approach', 'Priority Support', 'Full Journey Management', 'Guaranteed Excellence'],
  },
  'male-baldness': {
    title: 'Skin4Life',
    subtitle: 'Integrated skin, beard, and aesthetic support',
    description: 'Skin4Life covers dermatology-oriented services, beard-focused procedures, and supportive aesthetic care to complement full personal wellness goals.',
    image: 'https://images.unsplash.com/photo-1503910368127-b4420c7ff609?auto=format&fit=crop&q=80&w=1200',
    features: ['DHT Blocking', 'Stage-Specific Care', 'Preventative Options', 'Restorative Surgery'],
  },
  'women-procedure': {
    title: 'H4L® Women Procedure',
    subtitle: 'Specialized solutions for female hair concerns',
    description: 'Dedicated assessment and treatment pathways for women facing thinning, widening partitions, post-partum hair fall, or hormonal hair-loss patterns.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200',
    features: ['Female Pattern Analysis', 'Hormonal Hair-Loss Guidance', 'Scalp Nutrition Planning', 'Privacy-Focused Consultations'],
  },
  'skincare': {
    title: 'H4L® Skincare',
    subtitle: 'Comprehensive skin wellness under expert supervision',
    description: 'Targeted skincare protocols and clinic-led procedures to improve skin quality, texture balance, and confidence with personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200',
    features: ['Clinical Skin Assessment', 'Texture & Tone Programs', 'Personalized Procedure Plan', 'Post-Treatment Support'],
  },
  'products': {
    title: 'H4L® Products',
    subtitle: 'Doctor-guided daily care for hair regrowth support',
    description: 'Hair4Life has a special affiliation with HLCC (Hair Loss Control Clinic) for selected hair-care products and support systems. We offer keratin-based H4L® Fibers for instant cosmetic density in seconds, along with clinic-guided home-care products formulated for men and women dealing with thinning, breakage, and damaged hair. These plans are built to complement in-clinic therapies through a practical multi-therapeutic approach, including options such as iGrow laser support where suitable.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200',
    features: ['HLCC Affiliate Product Support', 'H4L® Keratin Fibers for Instant Coverage', 'Doctor-Designed Hair Regrowth Essentials', 'Paraben-Free, Nature-Derived Formulations'],
  },
  'salon-services': {
    title: 'H4L® Salon Services',
    subtitle: 'Styling and care with clinical understanding',
    description: 'We make every salon session as memorable as it is practical. Our team blends modern styling trends with hair-health-friendly methods so clients can look sharp while maintaining scalp and hair quality.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=1200',
    features: ['Trend-Aligned Styling', 'Scalp-Safe Service Protocols', 'Hair-Health Friendly Products', 'Personalized Care Experience'],
    pricingTable: [
      { no: '1', service: 'H4L® Hair Cut', men: 'Rs. 300', women: 'Rs. 500' },
      { no: '2', service: 'H4L® Change of Style', men: 'Rs. 350', women: 'Rs. 600' },
      { no: '3', service: 'H4L® Kids Cut', men: 'Rs. 200', women: 'Rs. 200' },
      { no: '4', service: 'H4L® Fringes', men: '-', women: 'Rs. 200' },
      { no: '5', service: 'H4L® Hair Wash with Conditioner', men: 'Rs. 150', women: 'Rs. 250' },
      { no: '6', service: 'H4L® Hair Spa', men: 'Rs. 500', women: 'Rs. 800' },
      { no: '7', service: 'H4L® Relaxation Head Oil Massage', men: 'Rs. 300', women: 'Rs. 400' },
      { no: '8', service: 'H4L® Relaxation Head Oil Massage (with wash)', men: 'Rs. 350', women: 'Rs. 500' },
      { no: '9', service: 'H4L® Straightening', men: '-', women: 'Rs. 5000' },
      { no: '10', service: 'H4L® Smoothening', men: '-', women: 'Rs. 6000' },
      { no: '11', service: 'H4L® Curles', men: '-', women: 'Rs. 600' },
      { no: '12', service: 'H4L® Temporary Straightening', men: '-', women: 'Rs. 650' },
      { no: '13', service: 'H4L® Global Color', men: 'Rs. 1200', women: 'Rs. 2500' },
      { no: '14', service: 'H4L® Streaking', men: '-', women: 'Rs. 175 p/strip' },
    ],
  }
};

const ProcedureDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = id ? procedureData[id] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark-950 text-white p-4 pt-24">
        <h1 className="text-4xl font-black mb-4">Procedure Not Found</h1>
        <p className="text-slate-400 mb-8 text-center max-w-md">That treatment page may have moved. See all options on our procedures page.</p>
        <Link to="/procedures" className="text-gold-500 hover:underline font-bold uppercase tracking-widest text-xs">View all procedures</Link>
      </div>
    );
  }

  return (
    <div className="bg-dark-950 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover opacity-40 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-gold-500/20 border border-gold-500/30 text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6 animate-fade-in">
              Professional Procedure
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight animate-slide-up">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-gold-400 font-serif italic animate-slide-up delay-100">
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-black text-white mb-6">About the Procedure</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  {data.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-gold-500/50 transition-colors group">
                    <CheckCircle2 className="w-6 h-6 text-gold-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-10">
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-gold-500 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-dark-900 transition-all duration-500 group"
                >
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-dark-900/50 border border-white/5 p-10 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-gold-500/20 transition-colors"></div>
                <h3 className="text-2xl font-black text-white mb-8">Why Choose Hair4Life?</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Safety First</h4>
                      <p className="text-sm text-slate-400">All procedures are performed in medical-grade environments with strict safety protocols.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Latest Technology</h4>
                      <p className="text-sm text-slate-400">We invest in the world's most advanced hair restoration technologies for superior results.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Expert Team</h4>
                      <p className="text-sm text-slate-400">Our specialists have decades of combined experience in hair restoration surgery and care.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/5">
                  <Users className="w-8 h-8 text-gold-500 mx-auto mb-4" />
                  <div className="text-2xl font-black text-white">15k+</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Happy Clients</div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/5">
                  <Award className="w-8 h-8 text-gold-500 mx-auto mb-4" />
                  <div className="text-2xl font-black text-white">25+</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Awards Won</div>
                </div>
              </div>
            </div>
          </div>

          {data.pricingTable && (
            <div className="mt-24">
              <div className="text-center mb-10">
                <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Salon Menu</span>
                <h2 className="text-4xl font-black text-white mb-4">H4L® Salon Services Price Guide</h2>
                <p className="text-slate-400 max-w-3xl mx-auto">
                  Transparent service pricing for men and women. Final recommendations may vary by hair length, texture, and treatment goals.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-gold-500 font-black">No</th>
                        <th className="px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-gold-500 font-black">Service</th>
                        <th className="px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-gold-500 font-black">Men</th>
                        <th className="px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-gold-500 font-black">Women</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.pricingTable.map((row: { no: string; service: string; men: string; women: string }) => (
                        <tr key={row.no} className="border-b border-slate-100 last:border-0 hover:bg-gold-50/30 transition-colors">
                          <td className="px-6 py-4 text-slate-900 font-bold">{row.no}</td>
                          <td className="px-6 py-4 text-slate-900 font-medium">{row.service}</td>
                          <td className="px-6 py-4 text-slate-700">{row.men}</td>
                          <td className="px-6 py-4 text-slate-700">{row.women}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Treatment Journey */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">The Process</span>
              <h2 className="text-4xl font-black text-white">Your Treatment Journey</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "A thorough clinical assessment of your hair loss pattern and health history." },
                { step: "02", title: "Design", desc: "Custom hairline design and treatment planning tailored to your facial structure." },
                { step: "03", title: "Procedure", desc: "Execution of the chosen treatment in our state-of-the-art clinical environment." },
                { step: "04", title: "Aftercare", desc: "Comprehensive follow-up and maintenance program to ensure long-term success." }
              ].map((item, idx) => (
                <div key={idx} className="relative group p-8 bg-dark-900/50 border border-white/5 rounded-3xl hover:border-gold-400/80 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.35),0_18px_36px_rgba(34,197,94,0.18)] transition-all">
                  <div className="text-5xl font-serif text-gold-500/25 mb-6 group-hover:text-gold-300 transition-colors">{item.step}</div>
                  <h4 className="text-xl font-black text-white mb-4">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcedureDetail;
