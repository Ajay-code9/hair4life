import React from 'react';
import { motion } from 'motion/react';
import { Activity, AlertCircle, BookOpenText, Brain, Dna, Pill, Scissors, ShieldCheck, Stethoscope, Utensils } from 'lucide-react';
import VisitingCardSection from '../components/VisitingCardSection';

const terminology = [
  {
    term: 'Alopecia',
    description:
      'Alopecia simply means hair loss. It can happen in one area (like front or crown), in small patches (alopecia areata), on the full scalp (alopecia totalis), or across the body (alopecia universalis).',
  },
  {
    term: 'Anagen',
    description: 'This is the active growth phase of hair. It usually lasts around 2 to 7 years, and a longer anagen phase generally means better hair length and density.',
  },
  { term: 'Catagen', description: 'A short transition stage between growth (anagen) and rest (telogen). During this phase, the follicle starts shrinking and prepares for shedding.' },
  { term: 'Telogen', description: 'This is the resting phase of the hair cycle and usually lasts about 3 months. At the end of this stage, old hair sheds and a new cycle begins.' },
  {
    term: 'Telogen Effluvium',
    description:
      'A condition where many hairs enter the telogen (resting) phase too early, causing visible shedding. It is commonly triggered by stress, fever, anemia, surgery, crash dieting, or nutrition gaps.',
  },
  { term: 'Cortex', description: 'The cortex is the main inner part of each hair strand. It contributes most of the hair’s strength, thickness, texture, and natural color.' },
  {
    term: 'Bonding',
    description: 'A cosmetic technique where extra synthetic or human hair is attached to your natural hair/scalp. It is mainly used to add temporary volume or coverage.',
  },
  {
    term: 'DHT (Dihydrotestosterone)',
    description:
      'DHT is a hormone made from testosterone through the 5-alpha reductase enzyme. In genetically sensitive people, high DHT activity can shrink follicles and cause pattern thinning.',
  },
  {
    term: 'Female Pattern Baldness (FPB)',
    description:
      'A common hair-loss pattern in women with gradual thinning over the top and crown. The front hairline is often preserved, and causes usually involve genetics, hormones, and age.',
  },
  { term: 'Frontal Alopecia', description: 'Hair loss mainly seen in the frontal hairline area. It can look like widening from the front or visible reduction in density near the forehead.' },
  {
    term: 'Hypothyroid-Related Hair Loss',
    description: 'When thyroid hormone levels are low, hair can become dry, brittle, and thinner. Hair quality may change, and shedding may increase if thyroid imbalance is not managed.',
  },
  {
    term: 'Male Pattern Baldness',
    description:
      'The most common male hair-loss pattern, usually starting with receding temples and/or crown thinning. It is progressive in nature and strongly linked to genetics and hormones.',
  },
  {
    term: 'Senescent Alopecia',
    description: 'Age-related hair thinning seen in both men and women. Hair strands become finer over time, and overall density gradually reduces.',
  },
  { term: 'Temporal Recession', description: 'Hair loss at the temple corners. This zone is often one of the most stubborn and may need targeted planning for visible improvement.' },
  {
    term: 'Traction Alopecia',
    description: 'Hair loss caused by repeated pulling force from tight hairstyles like braids, ponytails, buns, or extensions. If this continues long-term, follicles can get permanently damaged.',
  },
  {
    term: 'Vellus Hair',
    description: 'Very fine, soft, lightly pigmented “peach-fuzz” hair. In thinning areas, thicker terminal hairs may gradually become vellus-like over time.',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen">
      <section className="relative pt-40 pb-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bgimages/bgimg1.jpg"
            alt="Hair4Life clinic – consultation"
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

      <section className="py-24 border-b border-white/5 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
        <div className="pointer-events-none absolute -top-24 left-0 w-80 h-80 rounded-full bg-gold-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-72 rounded-full bg-gold-500/10 blur-[110px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="space-y-6 lg:col-span-1 relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-gold-300 border border-gold-500/35 bg-gold-500/10 shadow-[0_8px_24px_rgba(0,133,84,0.15)]">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                Why it happens
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                What Causes Hair Loss?
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Shedding 50 to 100 hairs daily can be normal when new growth continues at the same time. Noticeable thinning appears when growth and shedding cycles are disrupted,
                follicles miniaturize, or follicles are replaced by scar tissue.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The exact cause may vary by patient and often includes a combination of heredity, hormonal shifts, medical conditions, medication side effects, stress events,
                and grooming practices.
              </p>
              <div className="h-[1px] w-28 bg-gradient-to-r from-gold-500/70 to-transparent" />
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {[
                {
                  icon: <Dna className="w-5 h-5" />,
                  title: 'Family History',
                  text: 'Genetic pattern baldness in men and women.',
                  image: '/images/bgimages/cause1.svg',
                },
                {
                  icon: <AlertCircle className="w-5 h-5" />,
                  title: 'Hormones',
                  text: 'Pregnancy, menopause, thyroid, and androgen shifts.',
                  image: '/images/bgimages/cause2.svg',
                },
                {
                  icon: <ShieldCheck className="w-5 h-5" />,
                  title: 'Medical Triggers',
                  text: 'Autoimmune issues, scalp infections, anemia, skin disorders.',
                  image: '/images/bgimages/cause3.svg',
                },
                {
                  icon: <BookOpenText className="w-5 h-5" />,
                  title: 'External Factors',
                  text: 'Medication, stress events, nutrition, and traction hairstyles.',
                  image: '/images/bgimages/cause4.svg',
                },
              ].map((item, idx) => (
                <article
                  key={item.title}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.06] via-dark-900/35 to-dark-950/70 shadow-[0_18px_45px_rgba(0,0,0,0.45)] hover:border-gold-500/55 hover:bg-white/[0.04] hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(0,133,84,0.2)] transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(0,133,84,0.18),transparent_55%)]" />
                  <div className="relative h-40 sm:h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/88 via-dark-950/15 to-transparent" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-dark-950/50 backdrop-blur-md text-gold-300 text-[10px] font-black uppercase tracking-[0.18em] shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold-500/15 border border-gold-500/40">
                          {item.icon}
                        </span>
                        <span>{item.title}</span>
                      </span>
                      <span className="text-gold-200/55 font-serif text-xl leading-none">0{idx + 1}</span>
                    </div>
                  </div>
                  <div className="p-5 relative z-10">
                    <p className="text-slate-200 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-white/5 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,133,84,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(0,133,84,0.08),transparent_55%)] opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-gold-500 text-xs font-black uppercase tracking-[0.25em]">Patient Education</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-4">Hair Loss Terminology</h2>
              <p className="text-slate-300 mt-4 max-w-3xl">
                A quick glossary to help you follow clinical discussions, diagnosis notes, and treatment planning without getting lost in jargon.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">
              <span>From A to Z</span>
              <span className="mt-1 text-gold-400">Key words, plain language</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {terminology.map((item, idx) => (
              <article
                key={item.term}
                className="group relative flex flex-col gap-2 p-5 md:p-6 rounded-2xl border border-white/10 bg-dark-900/70 hover:border-gold-500/45 hover:bg-dark-900/90 transition-all duration-400 shadow-[0_14px_38px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_50px_rgba(0,133,84,0.2)]"
              >
                <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-gold-500/15 border border-gold-500/40 text-[11px] font-black text-gold-200 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
                  {idx + 1}
                </div>
                <h3 className="flex items-center gap-3 text-white text-lg font-black">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold-500/15 text-xs font-black text-gold-300 border border-gold-500/40">
                    {item.term.charAt(0)}
                  </span>
                  <span>{item.term}</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,200,150,0.12),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(54,158,255,0.10),transparent_42%)]" />
        <div className="pointer-events-none absolute top-6 left-10 w-2 h-2 rounded-full bg-gold-400/30 animate-pulse" />
        <div className="pointer-events-none absolute top-20 right-24 w-1.5 h-1.5 rounded-full bg-cyan-300/35 animate-pulse" />
        <div className="pointer-events-none absolute bottom-12 right-1/3 w-1.5 h-1.5 rounded-full bg-gold-300/30 animate-pulse" />

        <div className="pointer-events-none absolute right-0 top-0 hidden lg:block h-full w-[30%]">
          <img
            src="/images/bgimages/docwriting.jpg"
            alt=""
            className="h-full w-full object-cover opacity-[0.09] blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-dark-950/20 to-dark-950" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                title: 'Major Cause Categories',
                items: [
                  {
                    icon: Dna,
                    label: 'Heredity',
                    text: 'Heredity and age-related pattern changes.',
                    tip: 'Family genetics can set your baseline risk.',
                  },
                  {
                    icon: Activity,
                    label: 'Hormones',
                    text: 'Hormonal changes: pregnancy, menopause, thyroid imbalance.',
                    tip: 'Hormonal shifts can trigger temporary or progressive thinning.',
                  },
                  {
                    icon: Stethoscope,
                    label: 'Medical',
                    text: 'Medical conditions: alopecia areata, infections, autoimmune and scarring disorders.',
                    tip: 'Underlying medical causes need targeted diagnosis first.',
                  },
                  {
                    icon: Pill,
                    label: 'Medication',
                    text: 'Medication side effects: cancer therapy, blood pressure, mood, hormonal medications.',
                    tip: 'Some medicines affect hair cycle timing and density.',
                  },
                ],
              },
              {
                title: 'Other Common Triggers',
                items: [
                  {
                    icon: ShieldCheck,
                    label: 'Recovery',
                    text: 'Post-fever or post-surgery telogen shedding.',
                    tip: 'Post-illness shedding is common and often reversible.',
                  },
                  {
                    icon: Utensils,
                    label: 'Nutrition',
                    text: 'Sudden weight loss and nutritional deficiencies.',
                    tip: 'Protein, iron, and micronutrient deficits impact growth.',
                  },
                  {
                    icon: Brain,
                    label: 'Stress',
                    text: 'Severe emotional stress or shock events.',
                    tip: 'Stress can push follicles into early resting phase.',
                  },
                  {
                    icon: Scissors,
                    label: 'Hairstyles',
                    text: 'Tight hairstyles, repeated traction, and inflammatory hair procedures.',
                    tip: 'Constant pulling can cause traction alopecia over time.',
                  },
                ],
              },
            ].map((panel, panelIdx) => (
              <motion.div
                key={panel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.65, delay: panelIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[26px] p-[1px] bg-gradient-to-br from-cyan-300/35 via-gold-500/30 to-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              >
                <div className="relative h-full rounded-[25px] border border-white/10 bg-dark-900/45 backdrop-blur-md p-6 md:p-8 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(0,200,150,0.16),transparent_55%)]" />
                  <h3 className="text-2xl md:text-3xl font-black mb-4 bg-gradient-to-r from-white via-white to-cyan-200/80 bg-clip-text text-transparent">
                    {panel.title}
                  </h3>
                  <div className="h-[2px] w-36 bg-gradient-to-r from-gold-400 via-cyan-300/80 to-transparent mb-6 animate-pulse" />
                  <ul className="space-y-4">
                    {panel.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li
                          key={`${panel.title}-${item.label}`}
                          className="group/item relative flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-3 transition-all duration-300 hover:translate-x-1 hover:border-gold-500/35 hover:bg-white/[0.04]"
                        >
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold-400/40 bg-gold-500/12 text-gold-300 transition-all duration-300 group-hover/item:shadow-[0_0_16px_rgba(0,200,150,0.35)]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-white text-sm font-bold">{item.label}</p>
                            <p className="text-[#b0c4d4] text-sm leading-relaxed">{item.text}</p>
                          </div>
                          <span className="pointer-events-none absolute -top-10 left-11 whitespace-nowrap rounded-lg border border-white/15 bg-dark-950/90 px-2.5 py-1 text-[11px] text-cyan-100 opacity-0 translate-y-1 transition-all duration-250 group-hover/item:opacity-100 group-hover/item:translate-y-0">
                            {item.tip}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <VisitingCardSection title="Clinic Visiting Card" />
    </div>
  );
};

export default About;