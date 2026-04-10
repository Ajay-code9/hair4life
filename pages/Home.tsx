import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Microscope, Palette, HeartHandshake, Users, Award, Target } from 'lucide-react';
import { motion } from 'motion/react';
import YouTubeVideoCard from '../components/YouTubeVideoCard';
import VisitingCardSection from '../components/VisitingCardSection';
import { SITE } from '../config/site';
import { Testimonial } from '../types';
import { openWhatsApp, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../components/WhatsAppFloat';
import { positiveReviews } from '../data/positiveReviews';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Shah',
    role: 'Hair Restoration',
    quote: "For almost 3 years I was trying different options, but nothing gave consistent results. At Hair4Life, the guidance was practical and honest. My hairline now looks natural and I feel much more confident.",
    imageUrl: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '2',
    name: 'Priya Mehta',
    role: 'FUI® Transplant',
    quote: "Team bahut supportive tha from consultation to follow-up. Procedure smooth raha and recovery bhi expected time mein ho gayi. Density improvement clearly visible hai, especially at the front.",
    imageUrl: 'https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Diagnostic Service',
    quote: "Mujhe sabse achha laga ki consultation bilkul genuine tha. Unhone unnecessary treatment suggest nahi kiya and meri condition ke hisaab se clear plan diya. That built my trust immediately.",
    imageUrl: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

const coreValues = [
  {
    id: 'precision',
    title: 'Precision',
    subtitle: 'Sapphire Micro-Grafting',
    description: 'Every follicle is placed with mathematical exactness to mimic natural growth patterns.',
    image: '/images/bgimages/prcesion.jpg',
    icon: <Microscope className="w-6 h-6" />
  },
  {
    id: 'artistry',
    title: 'Artistry',
    subtitle: 'Facial Framing Design',
    description: 'We don’t just fill gaps; we sculpt a hairline that complements your unique facial structure.',
    image: '/images/bgimages/artistry.jpg',
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: 'comfort',
    title: 'Comfort',
    subtitle: 'Painless Experience',
    description: 'A sanctuary of care where advanced anesthesia ensures you relax throughout the procedure.',
    image: '/images/bgimages/anesthesia.jpg',
    icon: <HeartHandshake className="w-6 h-6" />
  }
];

const homeEducationVideos = [
  { title: 'Understanding FUE', id: '5_lENCaC0yQ' },
  { title: 'Clinic results & expectations', id: 'VF3WSaSICy0' },
  { title: 'Patient journey (Hair4Life)', id: '-O-WH8jSKck' },
] as const;

const homeStoryVideos = [
  { title: 'Patient journey: hair transplant', id: '5_lENCaC0yQ' },
  { title: 'Beard restoration & density', id: 'VF3WSaSICy0' },
] as const;

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileCoreStep, setMobileCoreStep] = useState(0);
  const mobileCoreRef = useRef<HTMLDivElement>(null);
  const touchStartYRef = useRef<number | null>(null);
  const mobileCoreStepLockUntilRef = useRef(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const isMobile = () => window.matchMedia('(max-width: 1023px)').matches;

    const isCoreSectionActive = () => {
      const node = mobileCoreRef.current;
      if (!node) return false;
      const rect = node.getBoundingClientRect();
      return rect.top <= 120 && rect.bottom >= window.innerHeight * 0.55;
    };

    const stepByDelta = (deltaY: number): boolean => {
      if (!isMobile() || !isCoreSectionActive()) return false;
      if (Math.abs(deltaY) < 20) return false;
      const now = Date.now();
      if (now < mobileCoreStepLockUntilRef.current) return false;

      if (deltaY > 0 && mobileCoreStep < 3) {
        setMobileCoreStep((prev) => Math.min(prev + 1, 3));
        mobileCoreStepLockUntilRef.current = now + 420;
        return true;
      }
      if (deltaY < 0 && mobileCoreStep > 0) {
        setMobileCoreStep((prev) => Math.max(prev - 1, 0));
        mobileCoreStepLockUntilRef.current = now + 420;
        return true;
      }
      return false;
    };

    const onWheel = (e: WheelEvent) => {
      const handled = stepByDelta(e.deltaY);
      if (handled) e.preventDefault();
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current == null) return;
      const currentY = e.touches[0]?.clientY ?? touchStartYRef.current;
      const delta = touchStartYRef.current - currentY;
      const handled = stepByDelta(delta);
      if (handled) {
        e.preventDefault();
        touchStartYRef.current = currentY;
      }
    };

    const onTouchEnd = () => {
      touchStartYRef.current = null;
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [mobileCoreStep]);

  return (
    <div className="bg-dark-950 text-slate-300 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start py-20 md:py-24">
        {/* Background Image with Slow Zoom & Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img 
            src="/images/bgimages/homehero-bg.jpg" 
            alt="Hair4Life clinic" 
            className="w-full h-full object-cover opacity-70 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          {/* Radial gradient for focus */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/10 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 md:pt-20 pb-12">
          <div className="max-w-4xl">
            {/* Animated Badge */}
            <div className={`inline-block mb-4 md:mb-6 px-4 py-1.5 border border-gold-500/30 rounded-full bg-gold-500/10 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.25em] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                Complete Hair Solutions
              </span>
            </div>

            {/* Staggered Heading with Reveal Effect */}
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-white mb-8 leading-[0.9] text-balance tracking-tight">
              <div className="reveal-container">
                <div className={`reveal-text delay-100 ${isVisible ? 'animate-slide-up' : ''}`}>Is Painless</div>
              </div>
              <div className="reveal-container">
                <div className={`reveal-text delay-200 ${isVisible ? 'animate-slide-up' : ''}`}>Hair Transplant</div>
              </div>
              <div className="reveal-container">
                <div className={`reveal-text delay-300 text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic pr-4 ${isVisible ? 'animate-slide-up' : ''}`}>A Reality?</div>
              </div>
            </h1>

            <p className={`text-xl md:text-2xl text-white mb-12 font-medium leading-relaxed max-w-2xl border-l-2 border-gold-500/50 pl-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Welcome to Hair4Life. We combine the latest technology, science, and cosmetology to deliver the best hair transplant treatments for your hair.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                to="/contact" 
                className="group relative px-10 py-5 bg-gold-500 text-white font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all shadow-[0_20px_40px_rgba(0,133,84,0.3)] hover:shadow-none rounded-full"
              >
                {/* Shimmer Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer" />
                
                <span className="relative z-10 group-hover:pr-4 transition-all">Request Consultation</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="absolute inset-0 flex items-center justify-center text-dark-900 font-black opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300">
                   Book Now
                </span>
              </Link>
              <Link 
                to="/procedures" 
                className="group px-10 py-5 bg-transparent border border-white/20 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/5 transition-all rounded-full"
              >
                Discover H4L® Therapies
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 opacity-70 animate-float">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 rotate-90 origin-center translate-y-12">Scroll</span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold-400 to-transparent"></div>
        </div>
      </section>

      {/* CORE VALUES - INTERACTIVE ACCORDION (Replaces Marquee) */}
      <section className="w-full bg-dark-950 border-y border-white/5">
        
        {/* Desktop Accordion */}
        <div className="hidden lg:flex h-[600px] w-full">
          {coreValues.map((value, index) => (
            <div 
              key={value.id} 
              className="group relative flex-1 hover:flex-[2.5] transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden border-r border-white/5 last:border-r-0 cursor-crosshair"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={value.image} 
                  alt={value.title} 
                  className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-dark-950/60 group-hover:bg-dark-950/20 transition-colors duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-90"></div>
              </div>

              {/* Vertical Text (Default State) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
                 <h2 className="text-white/20 font-serif text-8xl font-bold uppercase tracking-widest rotate-90 whitespace-nowrap">{value.title}</h2>
              </div>

              {/* Content (Hover State) */}
              <div className="absolute bottom-0 left-0 w-full p-12 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 z-10">
                <div className="flex items-center gap-4 mb-4 text-gold-400">
                  <div className="p-3 bg-gold-500/10 rounded-full border border-gold-500/20">
                     {value.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">{value.subtitle}</span>
                </div>
                <h3 className="font-serif text-5xl text-white mb-4 leading-tight">{value.title}</h3>
                <p className="text-white text-lg font-medium leading-relaxed max-w-md">{value.description}</p>
              </div>

              {/* Number Index */}
              <div className="absolute top-8 right-8 text-white/10 font-serif text-4xl group-hover:text-gold-500 group-hover:opacity-100 transition-colors duration-500">0{index + 1}</div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll-Stepped Stack */}
        <div ref={mobileCoreRef} className="lg:hidden relative h-[110dvh]">
          <div className="sticky top-0 h-[100dvh] overflow-hidden bg-dark-950">
            {coreValues.map((value, index) => {
              const activeIndex = Math.max(mobileCoreStep - 1, 0);
              const isActive = index === activeIndex;
              const isPassed = index < activeIndex;

              const baseOffset = index * 7;
              const collapsedY = 14 + index * 8;
              const activeY = index === 0 ? 0 : 6;
              const y = mobileCoreStep === 0 ? collapsedY : isActive ? activeY : isPassed ? -22 : 20 + baseOffset;
              const scale = mobileCoreStep === 0 ? 0.94 - index * 0.02 : isActive ? 1 : isPassed ? 0.965 : 0.93;
              const cardOpacity = mobileCoreStep === 0 ? 0.98 : 1;
              const contentOpacity = mobileCoreStep === 0 ? (index === 0 ? 1 : 0.18) : isActive ? 1 : isPassed ? 0.06 : 0.14;

              return (
                <div
                  key={value.id}
                  className="absolute inset-0 transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_-20px_40px_rgba(0,0,0,0.8)]"
                  style={{
                    zIndex: index + 1 + (isActive ? 8 : 0),
                    transform: `translateY(${y}dvh) scale(${scale})`,
                    opacity: cardOpacity,
                  }}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover opacity-100"
                    />
                    <div className="absolute inset-0 bg-dark-950/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/82 to-dark-950/28" />
                  </div>

                  <div
                    className="relative w-full p-8 pb-32 z-10 h-full flex flex-col justify-end transition-opacity duration-700"
                    style={{ opacity: contentOpacity }}
                  >
                    <div className="flex items-center gap-4 mb-6 text-gold-400">
                      <div className="p-3 bg-gold-500/10 rounded-full border border-gold-500/20 backdrop-blur-sm">
                        {value.icon}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.25em]">{value.subtitle}</span>
                    </div>
                    <h3 className="font-serif text-6xl text-white mb-6 leading-tight">{value.title}</h3>
                    <p className="text-white text-lg font-medium leading-relaxed max-w-md opacity-90">{value.description}</p>
                  </div>

                  <div className="absolute top-24 right-8 text-white/10 font-serif text-8xl font-bold">0{index + 1}</div>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy / Features Section */}
      <section className="py-32 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Image Cluster */}
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
                <img 
                  src="/images/bgimages/Philosophy.jpg" 
                  alt="Hair4Life clinic — our philosophy" 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-dark-900 border border-gold-500/20 p-8 flex flex-col justify-center items-center text-white z-20 hidden md:flex shadow-2xl group-hover:-translate-y-4 transition-transform duration-500">
                <span className="text-6xl font-serif text-gold-500 font-medium">15+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-center mt-2 text-slate-400">Years of<br/>Excellence</span>
              </div>

              {/* Decorative Border */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-white/5 z-0"></div>
            </div>
            
            <div className="space-y-16">
              <div>
                <h2 className="text-gold-400 text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                   <span className="w-12 h-[1px] bg-gold-500"></span>
                   Our Philosophy
                </h2>
                <h3 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">
                  More Than Just <br/><span className="italic text-slate-500">Hair Loss</span>
                </h3>
                <p className="text-white text-lg leading-relaxed font-medium">
                  Our mission is to destigmatize hair loss and ensure it is recognized as a serious condition impacting emotional and social well-being. At Hair 4 Life®, we are dedicated to improving lives by raising awareness and providing support.
                </p>
              </div>

              <div className="space-y-12">
                {[
                  {
                    title: "Research & Innovation",
                    desc: "We are at the forefront of researching innovative treatments, combining the latest in technology, science, and cosmetology."
                  },
                  {
                    title: "One-Stop Destination",
                    desc: "We offer a comprehensive range of services for both hair loss and skin care, creating a convenient destination for all beauty and wellness needs."
                  },
                  {
                    title: "Medical & Emotional Support",
                    desc: "We recognize hair loss as a multifaceted condition. Our approach provides support that goes beyond physical health."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-8 group cursor-default">
                    <div className="w-16 h-16 flex-shrink-0 border border-white/10 flex items-center justify-center group-hover:border-gold-500 group-hover:bg-gold-500/5 transition-all duration-500 relative overflow-hidden">
                      <span className="text-gold-400 font-serif text-2xl italic relative z-10">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-medium mb-3 group-hover:text-gold-400 transition-colors">{feature.title}</h4>
                      <p className="text-slate-200 leading-relaxed font-medium text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC EXPERIENCE - LUXURY SHOWCASE */}
      <section className="py-32 bg-dark-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="Clinic Interior" className="w-full h-full object-cover grayscale-0 lg:grayscale lg:hover:grayscale-0 max-lg:brightness-[1.06] max-lg:saturate-[1.08] transition-all duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" alt="Medical Equipment" className="w-full h-full object-cover grayscale-0 lg:grayscale lg:hover:grayscale-0 max-lg:brightness-[1.06] max-lg:saturate-[1.08] transition-all duration-1000" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-square rounded-3xl overflow-hidden border border-white/5">
                    <img src="/images/bgimages/docwriting.jpg" alt="Consultation" className="w-full h-full object-cover grayscale-0 lg:grayscale lg:hover:grayscale-0 max-lg:brightness-[1.06] max-lg:saturate-[1.08] transition-all duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" alt="Treatment" className="w-full h-full object-cover grayscale-0 lg:grayscale lg:hover:grayscale-0 max-lg:brightness-[1.06] max-lg:saturate-[1.08] transition-all duration-1000" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-12">
              <div>
                <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">The Experience</span>
                <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
                  A Sanctuary of <br/><span className="text-gold-500 italic">Medical Excellence</span>
                </h2>
                <p className="text-white text-lg font-medium leading-relaxed">
                  Located in the heart of Ahmedabad, Hair4Life Clinic offers a world-class environment where luxury meets cutting-edge medical science. Every detail of our clinic is designed for your comfort and privacy.
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  { title: "Private Consultation Suites", desc: "Discuss your journey in complete privacy with our senior consultants." },
                  { title: "State-of-the-Art OT", prev: "Our operation theaters are equipped with the latest Sapphire Micro-Grafting technology." },
                  { title: "Premium Recovery Lounge", desc: "Relax post-procedure in our luxury lounge with dedicated care staff." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5 group-hover:scale-150 transition-transform"></div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2 group-hover:text-gold-500 transition-colors">{item.title}</h4>
                      <p className="text-slate-200 text-sm font-medium leading-relaxed">{item.desc || item.prev}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Videos Section */}
      <section className="py-32 bg-dark-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-4 block">Clinic Insights</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Educational series</h2>
              <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                Clips from our YouTube channel—use the play button on the player, or open the video in a new tab.
              </p>
            </div>
            <Link
              to="/procedures"
              className="shrink-0 text-white hover:text-gold-400 uppercase tracking-widest text-xs font-bold border-b border-white/20 hover:border-gold-400 pb-2 transition-colors inline-flex items-center gap-2"
            >
              View all treatments
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {homeEducationVideos.map((video, idx) => (
              <YouTubeVideoCard key={video.id} title={video.title} id={video.id} priority={idx === 0} />
            ))}
          </div>
          <p className="mt-12 text-center">
            <a
              href={SITE.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors border-b border-gold-500/50 hover:border-white pb-1"
            >
              View all videos on YouTube
              <ArrowRight className="w-3 h-3" />
            </a>
          </p>
        </div>
      </section>

      {/* Stats — highlighted metrics */}
      <section className="relative py-28 md:py-32 border-y border-white/5 bg-dark-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-96 rounded-full bg-gold-500/5 blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <span className="inline-flex items-center gap-2 text-gold-400 text-[10px] font-black uppercase tracking-[0.35em] mb-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500 ring-2 ring-gold-500/30" />
              </span>
              Live trust signals
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-medium tracking-tight">
              Numbers that reflect real care
            </h2>
            <p className="mt-4 text-slate-400 text-sm md:text-base font-medium leading-relaxed">
              A quick snapshot of the community we serve and the standards we hold ourselves to.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                icon: Users,
                label: 'Satisfied Clients',
                value: '5000+',
                hint: 'Lives touched through consultations & care',
              },
              {
                icon: Star,
                label: 'Google Rating',
                value: '4.9',
                hint: 'From reviews across our listings',
              },
              {
                icon: Award,
                label: 'Years Experience',
                value: '15+',
                hint: 'Dedicated to hair restoration excellence',
              },
              {
                icon: Target,
                label: 'Success Rate',
                value: '99%',
                hint: 'Commitment to planned outcomes',
              },
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-dark-900/40 to-dark-950/80 p-6 md:p-8 text-center sm:text-left shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:border-gold-500/35 hover:shadow-[0_24px_60px_rgba(0,133,84,0.12)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-[100%] bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="inline-flex rounded-xl bg-gold-500/15 p-3 text-gold-400 ring-1 ring-gold-500/20 mb-5 mx-auto sm:mx-0 group-hover:bg-gold-500/25 group-hover:scale-105 transition-all duration-500">
                  <StatIcon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.75} aria-hidden />
                </div>
                <div className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gold-200/90 mb-2 group-hover:from-gold-100 group-hover:via-white group-hover:to-gold-300 transition-all duration-500">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gold-500/90 mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium group-hover:text-slate-400 transition-colors">
                  {stat.hint}
                </p>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant Cards */}
      <section className="py-32 bg-dark-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-gold-400 text-xs font-bold uppercase tracking-widest">Client Feedback</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mt-4">Voices of Confidence</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-dark-900/30 p-12 border border-white/5 hover:border-gold-500/30 transition-all duration-500 group flex flex-col hover:-translate-y-2">
                <div className="flex mb-8 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-white font-serif text-xl leading-relaxed italic mb-10 opacity-100 group-hover:opacity-100 transition-opacity flex-grow">"{t.quote}"</p>
                <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                  <div className="w-14 h-14 rounded-full p-1 border border-white/10 group-hover:border-gold-500 transition-colors">
                     <img src={t.imageUrl} alt={t.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase tracking-wider text-sm">{t.name}</div>
                    <div className="text-xs text-gold-500/80 mt-1">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-y border-white/10 bg-dark-900/40 overflow-hidden rounded-xl">
            <div
              className="flex w-max animate-marquee motion-reduce:animate-none items-stretch gap-4 py-4 px-4"
              style={{ animationDuration: '78s' }}
            >
              {[...positiveReviews, ...positiveReviews].map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="shrink-0 w-[290px] h-[142px] rounded-2xl border border-emerald-200/60 bg-[linear-gradient(135deg,#ffffff_0%,#f0fdf4_60%,#dcfce7_100%)] px-4 py-3 flex flex-col shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
                >
                  <p className="text-sm font-black text-slate-900 truncate">{review.name}</p>
                  <div className="flex items-center gap-1 text-gold-500 mt-2">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2 overflow-hidden">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Testimonials Section */}
      <section className="py-28 bg-dark-950 border-t border-white/5 relative">
        <div className="absolute bottom-0 right-0 w-[min(100%,480px)] h-64 bg-gold-500/5 rounded-tl-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 max-w-2xl mx-auto">
            <span className="text-gold-400 text-xs font-bold uppercase tracking-widest">Real stories</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-4">Watch their journey</h2>
            <p className="text-slate-400 font-medium">
              Official Hair4Life uploads—each player shows YouTube’s own preview; press play to watch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mt-14">
            {homeStoryVideos.map((video, idx) => (
              <YouTubeVideoCard key={`${video.id}-story-${idx}`} title={video.title} id={video.id} />
            ))}
          </div>
        </div>
      </section>

      <VisitingCardSection title="Keep Our Visiting Card Handy" />

      {/* CTA Section - Full width image */}
      <section className="relative py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2560" 
            alt="Confident Transformation" 
            className="w-full h-full object-cover opacity-80 fixed-bg"
          />
          <div className="absolute inset-0 bg-dark-950/20"></div>
          {/* Removed noise and blur for clarity */}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">Begin Your Legacy</h2>
          <p className="text-xl text-white mb-16 font-medium leading-relaxed">
            Your journey to a younger, more confident self begins with a conversation. <br className="hidden md:block"/>
            Visit us at Paldi, Ahmedabad for a world-class experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link 
              to="/contact" 
              className="group relative inline-block bg-white text-dark-950 font-bold uppercase tracking-widest px-12 py-6 overflow-hidden min-w-[200px]"
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shimmer" />
              <span className="relative z-10">Inquire Now</span>
            </Link>
            <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border border-[#25D366] text-[#25D366] font-bold uppercase tracking-widest px-12 py-6 hover:bg-[#25D366] hover:text-white transition-colors duration-300 min-w-[200px] flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="w-5 h-5">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
