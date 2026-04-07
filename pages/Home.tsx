import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Microscope, Palette, HeartHandshake } from 'lucide-react';
import YouTubeVideoCard from '../components/YouTubeVideoCard';
import VisitingCardSection from '../components/VisitingCardSection';
import { SITE } from '../config/site';
import { Testimonial } from '../types';
import { openWhatsApp, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../components/WhatsAppFloat';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Anonymous Patient',
    role: 'Hair Restoration',
    quote: "I was struggling with hair loss for years and tried many treatments with no results. Hair4Life gave me hope again. The treatment was explained clearly and the results were natural.",
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '2',
    name: 'Verified Client',
    role: 'FUI® Transplant',
    quote: "The staff at Hair4Life is very professional and supportive. I felt comfortable throughout the treatment process, and the improvement in my hair density is noticeable.",
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '3',
    name: 'Consultation Client',
    role: 'Diagnostic Service',
    quote: "I appreciated the honest consultation. They did not push unnecessary treatments and guided me properly based on my condition.",
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

const coreValues = [
  {
    id: 'precision',
    title: 'Precision',
    subtitle: 'Sapphire Micro-Grafting',
    description: 'Every follicle is placed with mathematical exactness to mimic natural growth patterns.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200',
    icon: <Microscope className="w-6 h-6" />
  },
  {
    id: 'artistry',
    title: 'Artistry',
    subtitle: 'Facial Framing Design',
    description: 'We don’t just fill gaps; we sculpt a hairline that complements your unique facial structure.',
    image: 'https://images.unsplash.com/photo-1566083043913-5097522c2de3?auto=format&fit=crop&q=80&w=1200',
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: 'comfort',
    title: 'Comfort',
    subtitle: 'Painless Experience',
    description: 'A sanctuary of care where advanced anesthesia ensures you relax throughout the procedure.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-dark-950 text-slate-300 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start py-20 md:py-24">
        {/* Background Image with Slow Zoom & Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=2560" 
            alt="Advanced Hair Restoration" 
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

        {/* Mobile Stacked Cards - Sticky Stacking Effect */}
        <div className="lg:hidden flex flex-col">
          {coreValues.map((value, index) => (
             <div 
               key={value.id} 
               className="sticky top-0 h-[100dvh] flex flex-col justify-end overflow-hidden shadow-[0_-20px_40px_rgba(0,0,0,0.8)]"
               style={{ zIndex: index + 1 }}
             >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={value.image} 
                    alt={value.title} 
                    className="w-full h-full object-cover opacity-60 grayscale"
                  />
                  {/* Darker overlays for better text readability on mobile */}
                  <div className="absolute inset-0 bg-dark-950/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="relative w-full p-8 pb-32 z-10">
                   <div className="flex items-center gap-4 mb-6 text-gold-400">
                      <div className="p-3 bg-gold-500/10 rounded-full border border-gold-500/20 backdrop-blur-sm">
                        {value.icon}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.25em]">{value.subtitle}</span>
                   </div>
                   <h3 className="font-serif text-6xl text-white mb-6 leading-tight">{value.title}</h3>
                   <p className="text-white text-lg font-medium leading-relaxed max-w-md opacity-90">{value.description}</p>
                </div>

                {/* Large Index Number */}
                <div className="absolute top-24 right-8 text-white/5 font-serif text-8xl font-bold">0{index + 1}</div>
                
                {/* Decorative Line at Top to emphasize the overlap */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
             </div>
          ))}
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
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Surgeon at work" 
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
                    <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="Clinic Interior" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" alt="Medical Equipment" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-square rounded-3xl overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="Consultation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" alt="Treatment" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
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

      {/* Stats Section - Minimalist */}
      <section className="py-24 border-y border-white/5 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { label: "Satisfied Clients", value: "5000+" },
              { label: "Google Rating", value: "4.9" },
              { label: "Years Experience", value: "15+" },
              { label: "Success Rate", value: "99%" }
            ].map((stat, idx) => (
              <div key={idx} className="group cursor-default text-center px-4 py-8 hover:bg-white/5 transition-colors duration-500">
                <div className="font-serif text-4xl md:text-6xl text-white mb-4 group-hover:text-gold-400 transition-colors duration-500">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
              </div>
            ))}
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

      <VisitingCardSection
        title="Keep Our Visiting Card Handy"
        subtitle="As this section enters view, the card flips from back to front. Hover to pause auto-flip, and click to flip anytime."
      />

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