import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Heart,
  Sparkles,
  Shield,
  SunMedium,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import { SITE } from '../config/site';

const highlights = [
  {
    title: 'Truly custom systems',
    body:
      'We design real-hair wigs and hair systems around your comfort, lifestyle, and the look you want—especially when treatment has taken a part of you that felt deeply personal.',
  },
  {
    title: '100% real human hair',
    body:
      'Premium quality hair that moves, shines, and styles like your own—so you can step back into daily life with a natural feel, not a “costume.”',
  },
  {
    title: 'Gentle on confidence',
    body:
      'Looking like yourself again can ease the emotional weight of change. We take time to listen, adjust the fit, and support you with patience and respect.',
  },
  {
    title: 'Easy to live with',
    body:
      'Lightweight, secure options that work for everyday wear—whether you are resting at home, visiting loved ones, or returning to work when you feel ready.',
  },
];

const pillars = [
  {
    icon: Sparkles,
    title: '100% real human hair',
    desc: 'Natural movement, colour, and texture—chosen to complement you.',
  },
  {
    icon: Heart,
    title: 'Custom fit & design',
    desc: 'Personalised base size, density, and style so the result feels like yours.',
  },
  {
    icon: SunMedium,
    title: 'Natural, soft appearance',
    desc: 'Thoughtful hairline and parting design for a believable, gentle look.',
  },
  {
    icon: Shield,
    title: 'Discreet, private care',
    desc: 'Quiet consultations and a team that understands sensitive seasons of life.',
  },
];

const OncologyHairSupport: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0f12] text-slate-200 overflow-x-hidden">
      {/* Decorative ribbon */}
      <div
        className="pointer-events-none fixed -right-24 top-24 z-0 h-[420px] w-[420px] opacity-[0.12]"
        aria-hidden
      >
        <svg viewBox="0 0 200 320" className="h-full w-full text-pink-400" fill="currentColor">
          <path d="M100 0 C140 60 180 120 100 320 C20 120 60 60 100 0Z" />
        </svg>
      </div>

      <section className="relative z-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-950/25 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-pink-500/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.28em] text-pink-200">
              Compassionate care
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-[0_8px_30px_rgba(236,72,153,0.45)]"
            >
              30% off for cancer patients
            </motion.span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="min-w-0">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.35rem] xl:text-7xl font-medium text-white leading-[1.08] tracking-tight text-balance">
                Attractive, affordable{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-200 to-white">
                  real hair
                </span>{' '}
                wigs & systems—especially for you
              </h1>
              <p className="mt-6 text-lg md:text-xl text-pink-100/90 font-medium leading-relaxed max-w-xl">
                Hair4Life™ creates custom real-hair solutions for people who have lost precious hair during
                chemotherapy. We are here to restore more than hair—we walk beside you with empathy, dignity,
                and care.
              </p>
              <p className="mt-4 text-sm text-slate-400 italic max-w-lg">
                Your journey, our support.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-gold-600 px-10 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_16px_40px_rgba(16,185,129,0.35)] hover:brightness-110 transition-all"
                >
                  Free private consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white hover:border-pink-400/40 hover:bg-pink-500/10 transition-all"
                >
                  <Phone className="h-4 w-4 text-pink-300" />
                  Call {SITE.phoneDisplay}
                </a>
              </div>

              <p className="mt-6 text-[11px] text-slate-500 max-w-md leading-relaxed">
                The 30% reduction is our way of easing access for patients in active or recent oncology-related
                hair loss. Eligibility and documentation may be reviewed at consultation; offer applies to select
                wig and hair-system packages as advised by our team.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full pb-14 lg:sticky lg:top-28 lg:self-start"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-pink-500/20 via-transparent to-emerald-500/20 blur-2xl" />
              <div className="relative flex max-h-[min(72dvh,640px)] w-full items-start justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#12161c]/60 shadow-[0_40px_100px_rgba(0,0,0,0.55)] ring-1 ring-pink-500/20">
                <img
                  src="/images/bgimages/CANCER.svg"
                  alt="Hair4Life oncology hair support — compassionate real-hair solutions"
                  className="h-auto w-full max-h-[min(72dvh,640px)] object-contain object-top"
                  width={900}
                  height={700}
                  decoding="async"
                />
                <div className="pointer-events-none absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0c0f12]/90 via-[#0c0f12]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-2 left-0 right-0 mx-auto w-max max-w-[calc(100%-1rem)] md:left-4 md:right-auto md:mx-0 rounded-2xl border border-pink-400/30 bg-pink-950/90 backdrop-blur-md px-4 py-2.5 shadow-xl sm:px-5 sm:py-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-200">Hair4Life™</p>
                <p className="text-xs text-white font-semibold mt-0.5">Complete hair solutions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Empathy band */}
      <section className="relative z-10 border-y border-pink-500/15 bg-gradient-to-r from-pink-950/40 via-[#12161c] to-emerald-950/30 py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="w-10 h-10 text-pink-400 mx-auto mb-5 opacity-90" strokeWidth={1.25} />
          <p className="font-serif text-2xl md:text-3xl text-white/95 leading-snug">
            We know this chapter can feel overwhelming. There is no rush and no judgment—only a calm space to
            choose what helps{' '}
            <span className="text-pink-200 italic">you</span> feel like yourself again.
          </p>
        </div>
      </section>

      {/* Bullet highlights */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">
              What we offer
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-white font-medium">
              Built for comfort, confidence, and everyday life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-white/8 bg-white/[0.03] p-8 hover:border-emerald-500/25 hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-100 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative z-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-10 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {pillars.map(({ icon: Icon, title, desc }, idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  className="text-center sm:text-left"
                >
                  <div className="inline-flex rounded-2xl bg-pink-500/15 p-4 text-pink-300 ring-1 ring-pink-400/25 mb-5 mx-auto sm:mx-0">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 pb-28">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-pink-500/30 bg-gradient-to-br from-pink-600/90 via-rose-700/85 to-[#0c4c3a] p-10 md:p-14 text-center shadow-[0_30px_80px_rgba(236,72,153,0.25)]">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)] pointer-events-none" />
            <div className="relative">
              <p className="text-white/90 text-[10px] font-black uppercase tracking-[0.35em] mb-4">
                30% off — oncology patients
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-medium mb-4">
                Take the first gentle step
              </h2>
              <p className="text-white/85 max-w-xl mx-auto mb-10 text-base leading-relaxed">
                Book a free, private consultation. We will discuss options, timelines, and pricing with complete
                transparency—so you can decide what feels right.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-rose-900 px-10 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-pink-50 transition-colors shadow-lg"
              >
                Schedule consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OncologyHairSupport;
