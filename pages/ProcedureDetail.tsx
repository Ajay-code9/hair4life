import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

type BrandTabKey = 'whyChoose' | 'mission' | 'vision';

const brandTabs: {
  key: BrandTabKey;
  label: string;
  title: string;
  intro: string;
  paragraphs: string[];
  points: string[];
}[] = [
  {
    key: 'whyChoose',
    label: 'Why Choose',
    title: 'Why Choose Hair4Life?',
    intro:
      'At Hair4Life, we combine medical precision, artistic planning, and honest guidance so every patient can make confident decisions.',
    paragraphs: [
      'While many quality surgeons offer restoration, our facility is focused on FUI (Follicular Unit Implantation) with personal attention at every step.',
      'We explain benefits, limitations, and expected outcomes in a warm, professional setting so you can choose what is right for you.',
      'Large chains often pass marketing and infrastructure costs to patients. Our reputation is built primarily through outcomes, referrals, and trust.',
      'Whether you choose treatment now or later, patient education remains our priority. We focus on realistic, natural-looking outcomes without pressure.',
    ],
    points: [
      'Client-centered consultations with experts and surgeons',
      'Clinical and non-clinical options under one roof',
      'No false promises, no high-pressure selling',
      'Safety, transparency, and budget-conscious planning',
    ],
  },
  {
    key: 'mission',
    label: 'Our Mission',
    title: 'Our Mission',
    intro:
      'Hair 4 Life is committed to educating and improving the lives of people affected by hair loss.',
    paragraphs: [
      'We work to normalize hair loss across society and the medical community by spreading awareness and practical guidance.',
      'Because hair loss impacts confidence, identity, and daily life, we provide effective treatment pathways and supportive resources.',
      'Our complete range of hair and skin services combines technology, art, and science to deliver the best achievable results.',
      'We stay transparent in every recommendation: no unrealistic claims, only honest planning for natural outcomes.',
    ],
    points: [
      'Awareness-first, education-led approach',
      'Support that addresses emotional and practical concerns',
      'Integrated hair + skin services',
      'Ethical communication with outcome-focused care',
    ],
  },
  {
    key: 'vision',
    label: 'Our Vision',
    title: 'Our Vision',
    intro:
      'Our vision is to offer cost-effective, premium-quality hair and skin solutions through continuous research and innovation.',
    paragraphs: [
      'We aim to grow by understanding each client deeply and delivering effective, personalized solutions.',
      'By reducing stigma and negativity around hair and skin concerns, we help patients regain confidence and improve well-being.',
      'We are committed to sustainable growth, clinical excellence, and a positive, harmonious care environment.',
    ],
    points: [
      'Research-driven innovation in every stage of care',
      'Premium quality with practical affordability',
      'Positive impact on individuals and society',
      'Long-term excellence with responsible growth',
    ],
  },
];

const procedureData: Record<string, any> = {
  'overview': {
    title: 'Hair4Life Program Overview',
    subtitle: 'Complete hair and skin solutions under one roof',
    description: 'Hair4Life combines diagnosis, prevention, treatment, salon support, and maintenance programs so patients can manage hair and skin concerns through one coordinated care model, including H4L® FUE (Follicular Unit Extraction), H4L® FUI (Follicular Unit Implantation), and H4L® NMHR (Non Medical Hair Replacement).',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    features: ['Scalp Analysis', 'Hair Density Check', 'Personalized Consultation', 'Medical History Review'],
  },
  'hair-check': {
    title: 'H4L® Hair Check',
    subtitle: 'The modern way to measure and manage hair loss',
    description: 'H4L® Hair Check helps quantify hair fall, breakage, density, and treatment response, giving patients and doctors a practical baseline before and during therapy.',
    image: '/images/bgimages/HairCheck.svg',
    features: ['High-Res Digital Imaging', 'Growth Tracking', 'Density Mapping', 'Follicle Health Assessment'],
    commonIssue:
      'Many patients notice shedding but cannot tell if it is stress shedding, pattern hair loss, breakage, or scalp inflammation.',
    howItHelps:
      'Hair Check builds a baseline with photos, density mapping, and follicle-level review so treatment is chosen on data, not guesswork.',
    bestFor: ['Unclear cause of hair fall', 'Early thinning or widening partition', 'Monitoring response to treatment over time'],
  },
  'laser-therapy': {
    title: 'H4L® Laser Therapy',
    subtitle: 'Low-level light support for pattern hair loss',
    description: 'Low-level laser therapy is a non-invasive light-based treatment used as part of plans for androgenetic alopecia (pattern balding) in men and women.',
    image: '/images/bgimages/Laser-Therapy.svg',
    features: ['FDA Cleared Technology', 'Painless Treatment', 'No Side Effects', 'Improved Scalp Health'],
    commonIssue:
      'Pattern hair loss can progress slowly, and many people want a non-invasive option before surgery.',
    howItHelps:
      'Low-level laser sessions support follicles during growth phase and are often used as part of a wider medical plan for androgenetic alopecia.',
    bestFor: ['Male or female pattern thinning', 'Patients avoiding invasive procedures', 'Supportive therapy with medical treatment'],
  },
  'ultimate': {
    title: 'H4L® FUI',
    subtitle: 'Follicular Unit Implantation for natural density',
    description: 'H4L® FUI stands for Follicular Unit Implantation. It focuses on natural angle, density distribution, and hairline planning to deliver balanced and realistic restoration outcomes.',
    image: '/images/bgimages/FUI.svg',
    features: ['Natural Hairline Design', 'Minimal Recovery Time', 'Permanent Results', 'Expert Surgical Team'],
    commonIssue:
      'Advanced recession or crown loss often needs graft placement that looks natural in angle, direction, and density.',
    howItHelps:
      'FUI focuses on follicular unit implantation planning with recipient-site design to restore coverage while maintaining a natural look.',
    bestFor: ['Established hairline recession', 'Visible frontal/crown thinning', 'Patients seeking long-term surgical correction'],
  },
  'cosmetic': {
    title: 'H4L® NMHR',
    subtitle: 'Non Medical Hair Replacement for immediate coverage',
    description: 'H4L® NMHR stands for Non Medical Hair Replacement. It provides cosmetic coverage options for suitable candidates seeking immediate visual improvement without surgery.',
    image: '/images/bgimages/NMHR.svg',
    heroObjectPosition: 'center 22%',
    features: ['Immediate Results', 'Non-Surgical', 'Custom Matched', 'Lifestyle Compatible'],
    commonIssue:
      'Some patients need instant cosmetic coverage but are not ready for surgery, or do not have enough donor support.',
    howItHelps:
      'NMHR uses custom non-medical replacement systems matched to hair texture and shade for immediate visual density.',
    bestFor: ['Diffuse thinning with scalp show-through', 'Immediate appearance upgrade', 'Candidates not opting for surgery'],
  },
  'flashpoints': {
    title: 'H4L® PRP',
    subtitle: 'Scalp-support therapy for selected cases',
    description: 'H4L® PRP is used in selected treatment plans to support scalp environment and complement medical or procedural hair restoration pathways.',
    image: '/images/bgimages/prp.svg',
    features: ['No Chemicals', 'Reusable Hair', 'Natural Integration', 'Volume & Length'],
    commonIssue:
      'In early-to-moderate thinning, follicles may weaken before complete loss, leading to reduced density and weaker shafts.',
    howItHelps:
      'PRP is used as a regenerative support option in selected cases to improve scalp environment and complement broader treatment plans.',
    bestFor: ['Early pattern hair loss', 'Post-procedure support plans', 'Patients wanting non-surgical adjuvant therapy'],
  },
  'home-program': {
    title: 'Hair4Life Home Care Program',
    subtitle: 'Professional care in the comfort of your home',
    description: 'A comprehensive suite of professional-grade products and devices designed to maintain and enhance your hair health between clinic visits.',
    image: '/images/bgimages/Home-Care.svg',
    features: ['Professional Products', 'Easy to Use', 'Continuous Support', 'Proven Results'],
    commonIssue:
      'Clinic results can fade if daily care is inconsistent or products are mismatched to scalp type.',
    howItHelps:
      'Home Care Program extends clinic strategy with guided routines, timing, and product pairing for day-to-day maintenance.',
    bestFor: ['Long-term maintenance', 'Busy patients needing structure', 'Protecting gains between clinic visits'],
  },
  'fitness-program': {
    title: 'Hair & Scalp Fitness Program (H4L®-FP)',
    subtitle: 'Holistic approach to hair health',
    description: 'A structured program combining clinical treatments, nutrition, and specialized products to optimize the "fitness" of your hair and scalp.',
    image: '/images/bgimages/Scalp-Fitness.svg',
    features: ['Nutritional Guidance', 'Clinical Scalp Care', 'Exercise for Scalp', 'Progress Monitoring'],
    commonIssue:
      'Hair quality may decline due to combined lifestyle factors such as nutrition gaps, stress load, and poor scalp hygiene.',
    howItHelps:
      'This program combines scalp protocols, nutrition direction, and periodic monitoring so multiple root factors are addressed together.',
    bestFor: ['Lifestyle-related thinning', 'Scalp quality improvement goals', 'Patients preferring holistic structured plans'],
  },
  'supernatural': {
    title: 'H4L® Blend',
    subtitle: 'Combined strategy for continuity and confidence',
    description: 'H4L® Blend combines suitable clinical and cosmetic options in one plan for patients needing staged or mixed restoration goals.',
    image: '/images/bgimages/Blend.svg',
    features: ['Undetectable Base', 'Natural Growth Pattern', 'Breathable Design', 'Custom Styled'],
    commonIssue:
      'Some cases need both medical/surgical support and cosmetic enhancement to reach realistic visual goals.',
    howItHelps:
      'H4L Blend combines selected clinical and cosmetic pathways in stages, improving continuity from treatment to day-to-day appearance.',
    bestFor: ['Mixed pattern loss', 'Staged restoration journeys', 'Patients wanting balanced clinical + cosmetic planning'],
  },
  'complete': {
    title: 'Hair4Life Complete',
    subtitle: 'The total hair restoration package',
    description: 'Our most comprehensive solution combining multiple technologies and treatments for those seeking the absolute best possible outcome.',
    image: '/images/bgimages/Complete.svg',
    features: ['Multi-Tech Approach', 'Priority Support', 'Full Journey Management', 'Guaranteed Excellence'],
    commonIssue:
      'Complex or high-grade loss usually needs more than one approach and tighter follow-up across phases.',
    howItHelps:
      'Hair4Life Complete unifies assessment, procedure planning, adjunct therapies, and maintenance into one coordinated roadmap.',
    bestFor: ['Comprehensive end-to-end management', 'Higher-grade or multi-zone hair loss', 'Patients seeking a single integrated plan'],
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
    image: '/images/bgimages/Women-Procedure.svg',
    features: ['Female Pattern Analysis', 'Hormonal Hair-Loss Guidance', 'Scalp Nutrition Planning', 'Privacy-Focused Consultations'],
    commonIssue:
      'Women often present with diffuse thinning, partition widening, postpartum shedding, or hormone-linked changes that need privacy-focused evaluation.',
    howItHelps:
      'Women Procedure maps female-pattern presentation and combines medical guidance, scalp care, and practical continuity planning.',
    bestFor: ['Female pattern thinning', 'Postpartum or hormonal shedding', 'Patients needing discreet consultation workflows'],
  },
  'skincare': {
    title: 'H4L® Skincare',
    subtitle: 'Comprehensive skin wellness under expert supervision',
    description: 'Targeted skincare protocols and clinic-led procedures to improve skin quality, texture balance, and confidence with personalized recommendations.',
    image: '/images/bgimages/Skincare.svg',
    features: ['Clinical Skin Assessment', 'Texture & Tone Programs', 'Personalized Procedure Plan', 'Post-Treatment Support'],
    commonIssue:
      'Patients with uneven tone, texture irregularity, acne marks, or age-related changes often need guided, staged correction.',
    howItHelps:
      'Skincare protocols start with clinical assessment and then combine procedure selection with post-care to improve outcomes safely.',
    bestFor: ['Texture and tone concerns', 'Scar and ageing support plans', 'Medical-grade supervised skin routines'],
  },
  'products': {
    title: 'H4L® Products',
    subtitle: 'Doctor-guided daily care for hair regrowth support',
    description: 'Hair4Life has a special affiliation with HLCC (Hair Loss Control Clinic) for selected hair-care products and support systems. We offer keratin-based H4L® Fibers for instant cosmetic density in seconds, along with clinic-guided home-care products formulated for men and women dealing with thinning, breakage, and damaged hair. These plans are built to complement in-clinic therapies through a practical multi-therapeutic approach, including options such as iGrow laser support where suitable.',
    image: '/images/bgimages/Products.svg',
    features: ['HLCC Affiliate Product Support', 'H4L® Keratin Fibers for Instant Coverage', 'Doctor-Designed Hair Regrowth Essentials', 'Paraben-Free, Nature-Derived Formulations'],
    commonIssue:
      'Wrong over-the-counter products can worsen dryness, breakage, and scalp imbalance, especially in active hair-loss phases.',
    howItHelps:
      'H4L Products are selected to support in-clinic protocols with daily-use regimens, including instant coverage and maintenance essentials.',
    bestFor: ['Daily home support', 'Breakage and scalp imbalance', 'Patients combining clinic + at-home treatment'],
  },
  'salon-services': {
    title: 'H4L® Salon Services',
    subtitle: 'Styling and care with clinical understanding',
    description: 'We make every salon session as memorable as it is practical. Our team blends modern styling trends with hair-health-friendly methods so clients can look sharp while maintaining scalp and hair quality.',
    image: '/images/bgimages/Salon-services.svg',
    features: ['Trend-Aligned Styling', 'Scalp-Safe Service Protocols', 'Hair-Health Friendly Products', 'Personalized Care Experience'],
    commonIssue:
      'Frequent heat, harsh products, and aggressive styling can increase breakage and worsen perceived thinning.',
    howItHelps:
      'Salon Services align styling with scalp-safe methods so grooming goals are met without ignoring long-term hair health.',
    bestFor: ['Regular styling users', 'Hair shaft protection needs', 'Clients wanting cosmetic care with clinical awareness'],
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
  const [activeBrandTab, setActiveBrandTab] = useState<BrandTabKey>('whyChoose');
  const activeBrandContent = brandTabs.find((tab) => tab.key === activeBrandTab) ?? brandTabs[0];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark-950 text-white p-4 pt-24">
        <h1 className="text-4xl font-black mb-4">Procedure Not Found</h1>
        <p className="text-slate-400 mb-8 text-center max-w-md">That treatment page may have moved. See all options on our procedures page.</p>
        <Link to="/procedures" className="text-gold-500 hover:underline font-bold uppercase tracking-widest text-xs">View all procedures</Link>
      </div>
    );
  }

  const journeySteps = [
    { step: '01', title: 'Consultation', desc: 'A thorough clinical assessment of your hair loss pattern and health history.' },
    { step: '02', title: 'Design', desc: 'Custom hairline design and treatment planning tailored to your facial structure.' },
    { step: '03', title: 'Procedure', desc: 'Execution of the chosen treatment in our state-of-the-art clinical environment.' },
    { step: '04', title: 'Aftercare', desc: 'Comprehensive follow-up and maintenance program to ensure long-term success.' },
  ];

  return (
    <div className="bg-dark-950 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover opacity-40 animate-slow-zoom"
            style={data.heroObjectPosition ? { objectPosition: data.heroObjectPosition } : undefined}
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

              {(data.commonIssue || data.howItHelps || data.bestFor) && (
                <div className="grid grid-cols-1 gap-4">
                  {data.commonIssue && (
                    <div className="rounded-2xl border border-rose-200/20 bg-rose-500/5 p-5">
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-rose-300 mb-2">Common Issue</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{data.commonIssue}</p>
                    </div>
                  )}
                  {data.howItHelps && (
                    <div className="rounded-2xl border border-emerald-300/25 bg-emerald-500/5 p-5">
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300 mb-2">How This Helps</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{data.howItHelps}</p>
                    </div>
                  )}
                  {Array.isArray(data.bestFor) && data.bestFor.length > 0 && (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gold-400 mb-3">Best For</h3>
                      <ul className="space-y-2">
                        {data.bestFor.map((point: string, idx: number) => (
                          <li key={`${point}-${idx}`} className="flex items-start gap-2 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

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
                <div className="flex flex-wrap gap-2 mb-6">
                  {brandTabs.map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveBrandTab(tab.key)}
                      className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                        activeBrandTab === tab.key
                          ? 'bg-gold-500 text-white border-gold-500'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:border-gold-500/40 hover:text-gold-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{activeBrandContent.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {activeBrandContent.intro}
                </p>

                <div className="space-y-3">
                  {activeBrandContent.paragraphs.map((para) => (
                    <p key={para} className="text-sm text-slate-400 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeBrandContent.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm text-slate-300 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
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
              {journeySteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.95, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="relative group p-8 bg-dark-900/50 border border-white/5 rounded-3xl hover:border-gold-400/80 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.35),0_18px_36px_rgba(34,197,94,0.18)] transition-all"
                >
                  <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gold-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-5xl font-serif text-gold-500/25 mb-6 group-hover:text-gold-300 transition-colors">{item.step}</div>
                  <h4 className="text-xl font-black text-white mb-4">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcedureDetail;
