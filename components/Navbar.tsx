import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, Clock, ChevronDown } from 'lucide-react';
import { SITE } from '../config/site';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Hair Loss', path: '/about-hair-loss' },
    { name: 'Procedures', path: '/procedures', hasDropdown: true },
    { name: 'Our Team', path: '/team' },
    { name: 'Results', path: '/results' },
    { name: 'News & Articles', path: '/insights' },
  ];

  const procedures = [
    {
      category: "DIAGNOSTIC & CARE",
      items: [
        { name: "H4L® Hair Check", path: "/procedures/hair-check" },
        { name: "H4L® Laser Therapy", path: "/procedures/laser-therapy" },
        { name: "H4L® PRP", path: "/procedures/flashpoints" },
      ]
    },
    {
      category: "RESTORATION PROGRAMS",
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
      category: "HAIR & SKIN SERVICES",
      items: [
        { name: "H4L® Women Procedure", path: "/procedures/women-procedure" },
        { name: "H4L® Skincare", path: "/procedures/skincare" },
        { name: "H4L® Products", path: "/procedures/products" },
        { name: "H4L® Salon Services", path: "/procedures/salon-services" },
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;
  const [isProceduresOpen, setIsProceduresOpen] = useState(false);

  const BrandLogo = () => (
    <div className="flex items-center gap-3 md:gap-4 select-none group">
      <img
        src={SITE.logoUrl}
        alt={SITE.logoAlt}
        width={220}
        height={56}
        className="h-9 md:h-11 w-auto max-h-12 object-contain object-left drop-shadow-lg"
        decoding="async"
      />
      <div className="hidden sm:flex flex-col border-l border-white/20 pl-3 md:pl-4 min-w-0">
        <span className="text-white font-black text-xs md:text-sm tracking-[0.2em] uppercase leading-none truncate">Hair4Life</span>
        <span className="text-gold-500 font-black text-xs md:text-sm tracking-[0.2em] uppercase leading-none mt-1 truncate">Clinic</span>
        <span className="text-slate-500 text-[8px] uppercase tracking-widest mt-1 font-bold leading-tight">Advanced Hair Restoration</span>
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 w-full z-50 font-sans transition-all duration-500">
      {/* Top Information Bar - Only on Home */}
      {isHome && (
        <div className={`overflow-hidden transition-all duration-500 ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'} bg-dark-900/50 backdrop-blur-sm border-b border-white/5 text-[10px] md:text-xs font-medium tracking-wide text-slate-400 py-2 relative z-50`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            <div className="hidden md:flex items-center gap-6">
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                <MapPin className="w-3 h-3 text-gold-500" />
                {SITE.addressLine1}, Paldi, Ahmedabad
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                <Clock className="w-3 h-3 text-gold-500" />
                {SITE.officeHoursDisplay} (Except {SITE.officeClosedDay})
              </span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-8">
              {/* Mobile Location Abbreviated */}
              <span className="flex md:hidden items-center gap-1.5 hover:text-white transition-colors cursor-default">
                <MapPin className="w-3 h-3 text-gold-500" />
                Paldi, Ahmedabad
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 hover:text-white transition-colors group">
                  <Phone className="w-3 h-3 text-gold-500 group-hover:animate-pulse" />
                  <span className="font-bold text-white group-hover:text-gold-400">{SITE.phoneDisplay}</span>
                </a>
                <a
                  href={`tel:${SITE.phoneSecondaryTel}`}
                  className="text-[10px] text-slate-500 hover:text-slate-300 transition-colors sm:border-l sm:border-white/20 sm:pl-2"
                >
                  Alt: {SITE.phoneSecondaryDisplay}
                </a>
              </div>
              <a href={`mailto:${SITE.email}`} className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3 h-3 text-gold-500" />
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      )}

      <nav 
        className={`w-full transition-all duration-500 ease-in-out relative border-b border-transparent ${
          isOpen 
            ? 'bg-dark-950 border-white/10 py-3' 
            : scrolled 
              ? 'bg-dark-950/80 backdrop-blur-md border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
              : isHome 
                ? 'bg-transparent py-4 md:py-6' 
                : 'bg-dark-950/50 backdrop-blur-sm py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
          <div className="flex items-center gap-4 xl:gap-6">
            <div className="flex items-center flex-shrink-0">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="flex-shrink-0 flex items-center transform hover:scale-105 transition-transform duration-300"
              >
                <BrandLogo />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="flex items-center gap-5 xl:gap-8 2xl:gap-10 whitespace-nowrap">
              {navLinks.map((link) => (
                <div 
                  key={link.path} 
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setIsProceduresOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsProceduresOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`text-[10px] xl:text-xs uppercase tracking-[0.2em] font-extrabold transition-all duration-500 hover:text-gold-500 flex items-center gap-1.5 relative ${
                      isActive(link.path) || (link.hasDropdown && location.pathname.startsWith('/procedures')) ? 'text-gold-500' : 'text-white'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isProceduresOpen ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {link.hasDropdown && (
                    <div 
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-500 ${
                        isProceduresOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white rounded-2xl shadow-[0_24px_90px_rgba(0,0,0,0.38)] border border-slate-100 p-10 xl:p-12 w-[980px] xl:w-[1080px] grid grid-cols-3 gap-10 xl:gap-12">
                        {procedures.map((category, idx) => (
                          <div key={idx} className="space-y-7">
                            <h3 className="text-xs font-black text-gold-500 tracking-[0.2em] uppercase border-b border-gold-100 pb-4">
                              {category.category}
                            </h3>
                            <ul className="space-y-4">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link 
                                    to={item.path}
                                    onClick={() => setIsProceduresOpen(false)}
                                    className="text-dark-800 text-base font-bold leading-relaxed hover:text-gold-500 transition-colors block py-2.5 px-3.5 hover:bg-gold-50 rounded-lg"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              </div>
            </div>
              <Link
                to="/contact"
                className="hidden lg:inline-flex bg-gold-500 text-white px-6 xl:px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-dark-900 transition-all duration-500 shadow-[0_10px_20px_rgba(0,133,84,0.3)] hover:shadow-none transform hover:-translate-y-1 flex-shrink-0"
              >
                Contact Clinic
              </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gold-500 p-2 focus:outline-none transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 z-[-1] ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Mobile Menu Container */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-dark-950 border-b border-gold-500/40 transition-all duration-500 ease-in-out transform origin-top shadow-[0_40px_80px_rgba(0,0,0,0.9)] ${
            isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <div className="px-6 py-8 space-y-6 max-h-[85vh] overflow-y-auto relative font-sans bg-dark-950">
            {/* Premium Decorative Blobs - Reduced opacity for solid feel */}
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute top-20 -left-20 w-48 h-48 bg-gold-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 space-y-3">
              {navLinks.map((link) => (
                <div key={link.path} className="border-b border-white/5 last:border-0 pb-3 mb-3 last:pb-0 last:mb-0">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.path}
                      onClick={() => {
                        if (!link.hasDropdown) {
                          setIsOpen(false);
                        } else {
                          setIsProceduresOpen(!isProceduresOpen);
                        }
                      }}
                      className={`block py-2 text-xl font-extrabold tracking-tight transition-all duration-300 ${
                        isActive(link.path) || (link.hasDropdown && location.pathname.startsWith('/procedures'))
                          ? 'text-gold-400'
                          : 'text-white hover:text-gold-400'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <button 
                        onClick={() => setIsProceduresOpen(!isProceduresOpen)}
                        className="p-2 text-slate-400 hover:text-gold-400 transition-colors"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isProceduresOpen ? 'rotate-180 text-gold-400' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {link.hasDropdown && (
                    <div className={`grid grid-cols-1 gap-5 overflow-hidden transition-all duration-500 ease-in-out ${isProceduresOpen ? 'max-h-[1000px] opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
                      {procedures.map((category, idx) => (
                        <div key={idx} className="space-y-3 pl-5 border-l-2 border-gold-500/30">
                          <h4 className="text-[10px] font-black text-gold-500 tracking-[0.25em] uppercase">
                            {category.category}
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {category.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                to={item.path}
                                onClick={() => {
                                  setIsProceduresOpen(false);
                                  setIsOpen(false);
                                }}
                                className={`text-[15px] py-1.5 font-semibold transition-colors ${
                                  isActive(item.path) ? 'text-gold-400' : 'text-white/90 hover:text-gold-400'
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-6 relative z-10 border-t border-white/10">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gold-500 text-white px-6 py-5 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-dark-900 transition-all duration-500 shadow-[0_15px_35px_rgba(0,133,84,0.3)] active:scale-95"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;