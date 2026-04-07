import React from 'react';
import { AlertCircle, BookOpenText, Dna, ShieldCheck } from 'lucide-react';
import VisitingCardSection from '../components/VisitingCardSection';

const terminology = [
  {
    term: 'Alopecia',
    description:
      'General term for hair loss. It can be localized (front/top), patchy (alopecia areata), across the scalp (alopecia totalis), or body-wide (alopecia universalis).',
  },
  {
    term: 'Anagen',
    description: 'Active growth phase of hair, usually lasting 2 to 7 years based on genetics and health factors.',
  },
  { term: 'Catagen', description: 'Short transition phase between growth (anagen) and rest (telogen).' },
  { term: 'Telogen', description: 'Resting phase of the cycle, typically around 3 months.' },
  {
    term: 'Telogen Effluvium',
    description:
      'Increased shedding when more follicles enter telogen early; commonly linked with stress, fever, anemia, surgery, or nutritional imbalance.',
  },
  { term: 'Cortex', description: 'Main structure of the hair shaft; contributes most of hair weight, texture, and color.' },
  {
    term: 'Bonding',
    description: 'Technique where extra synthetic or human strands are attached to natural hair/scalp for cosmetic volume.',
  },
  {
    term: 'DHT (Dihydrotestosterone)',
    description:
      'A hormone derived from testosterone through 5-alpha reductase; strongly linked to genetic male-pattern thinning.',
  },
  {
    term: 'Female Pattern Baldness (FPB)',
    description:
      'Progressive thinning in women, often over top/crown with preserved frontal hairline; influenced by genetics, hormones, and age.',
  },
  { term: 'Frontal Alopecia', description: 'Hair loss concentrated in the frontal hairline region.' },
  {
    term: 'Hypothyroid-Related Hair Loss',
    description: 'Low thyroid hormone can trigger thinning, dryness, brittleness, and change in hair quality.',
  },
  {
    term: 'Male Pattern Baldness',
    description:
      'Most common male hair-loss pattern with receding temples and/or crown thinning, often progressive and genetically driven.',
  },
  {
    term: 'Senescent Alopecia',
    description: 'Age-related diffuse reduction in hair diameter and overall density in both men and women.',
  },
  { term: 'Temporal Recession', description: 'Hair loss at temple corners; one of the most stubborn zones to restore.' },
  {
    term: 'Traction Alopecia',
    description: 'Loss from repeated pulling force due to tight hairstyles, braids, ponytails, or certain extensions.',
  },
  {
    term: 'Vellus Hair',
    description: 'Fine, lightly pigmented "peach-fuzz" hair lacking a strong central medulla.',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen">
      <section className="relative pt-40 pb-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2200"
            alt="Hair and scalp consultation"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold-400 text-xs font-black uppercase tracking-[0.25em] block mb-5">Knowledge Center</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">
            About Hair Loss
            <br />
            <span className="text-gold-500 italic">Understand Before You Treat</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl font-medium leading-relaxed">
            Hair loss is not one single diagnosis. It is a group of conditions with different causes, patterns, and treatment paths. This page simplifies the core medical terms and causes so patients can make informed decisions.
          </p>
        </div>
      </section>

      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-white">What Causes Hair Loss?</h2>
              <p className="text-slate-300 leading-relaxed">
                Shedding 50 to 100 hairs daily can be normal when new growth continues at the same time. Noticeable thinning appears when growth and shedding cycles are disrupted, follicles miniaturize, or follicles are replaced by scar tissue.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The exact cause may vary by patient and often includes a combination of heredity, hormonal shifts, medical conditions, medication side effects, stress events, and grooming practices.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Dna className="w-5 h-5" />, title: 'Family History', text: 'Genetic pattern baldness in men and women.' },
                { icon: <AlertCircle className="w-5 h-5" />, title: 'Hormones', text: 'Pregnancy, menopause, thyroid, and androgen shifts.' },
                { icon: <ShieldCheck className="w-5 h-5" />, title: 'Medical Triggers', text: 'Autoimmune issues, scalp infections, anemia, skin disorders.' },
                { icon: <BookOpenText className="w-5 h-5" />, title: 'External Factors', text: 'Medication, stress events, nutrition, and traction hairstyles.' },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 text-gold-400 flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-gold-500 text-xs font-black uppercase tracking-[0.25em]">Patient Education</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4">Hair Loss Terminology</h2>
            <p className="text-slate-300 mt-4 max-w-3xl">
              A quick glossary to help you understand clinical discussions, diagnosis notes, and treatment planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {terminology.map((item) => (
              <article key={item.term} className="p-6 bg-dark-900/60 border border-white/10 rounded-2xl hover:border-gold-500/40 transition-colors">
                <h3 className="text-white text-lg font-black mb-2">{item.term}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
              <h3 className="text-2xl font-black text-white mb-4">Major Cause Categories</h3>
              <ul className="space-y-3 text-slate-300">
                <li>Heredity and age-related pattern changes</li>
                <li>Hormonal changes: pregnancy, menopause, thyroid imbalance</li>
                <li>Medical conditions: alopecia areata, infections, autoimmune and scarring disorders</li>
                <li>Medication side effects: cancer therapy, blood pressure, mood, hormonal medications</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
              <h3 className="text-2xl font-black text-white mb-4">Other Common Triggers</h3>
              <ul className="space-y-3 text-slate-300">
                <li>Post-fever or post-surgery telogen shedding</li>
                <li>Sudden weight loss and nutritional deficiencies</li>
                <li>Severe emotional stress or shock events</li>
                <li>Tight hairstyles, repeated traction, and inflammatory hair procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <VisitingCardSection title="Clinic Visiting Card" />
    </div>
  );
};

export default About;