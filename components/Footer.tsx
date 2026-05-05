import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SITE } from '../config/site';
import { clinicDirectionsHref } from '../utils/clinicDirections';
import { buildNewsletterMailto, buildNewsletterWhatsAppText, openWhatsAppMessage } from '../utils/contactOutreach';

const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterThanks, setNewsletterThanks] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    openWhatsAppMessage(buildNewsletterWhatsAppText(newsletterEmail.trim()));
    setNewsletterThanks(true);
  };
  const BrandLogoSmall = () => (
    <img
      src={SITE.logoUrl}
      alt={SITE.logoAlt}
      width={180}
      height={48}
      className="h-8 md:h-10 w-auto max-h-11 object-contain object-left drop-shadow-lg"
      decoding="async"
    />
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-white/5 text-white py-24 relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <BrandLogoSmall />
            </Link>
            <p className="text-sm font-medium leading-relaxed max-w-xs text-white">
              Ahmedabad's premier destination for advanced hair restoration and scalp care. We combine medical expertise with artistic vision to restore your confidence.
            </p>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-dark-900/60 px-4 py-3">
              <img
                src="/images/isologo.webp"
                alt="ISO 9001:2015 Certified Clinic"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-[0.18em] font-black text-gold-400">ISO Certified</p>
                <p className="text-xs font-semibold text-white">ISO 9001:2015 Certified Clinic</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 border border-white/5"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 border border-white/5"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 border border-white/5"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Explore</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link to="/about-hair-loss" className="hover:text-gold-400 transition-colors">About Hair Loss</Link></li>
              <li><Link to="/procedures" className="hover:text-gold-400 transition-colors">Procedures</Link></li>
              <li><Link to="/results" className="hover:text-gold-400 transition-colors">Results</Link></li>
              <li><Link to="/insights" className="hover:text-gold-400 transition-colors">News & Articles</Link></li>
              <li><Link to="/team" className="hover:text-gold-400 transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Connect</h3>
            <ul className="space-y-6 text-sm font-light">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-all">
                  <MapPin className="h-4 w-4 text-gold-500" />
                </div>
                <a
                  href={clinicDirectionsHref()}
                  className="group-hover:text-white transition-colors leading-relaxed text-slate-300 hover:text-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500/60 rounded-sm"
                  aria-label="Open directions to Hair4Life Clinic"
                >
                  {SITE.addressLine1},<br />
                  {SITE.addressLine2},<br />
                  {SITE.addressLine3}
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-all">
                  <span className="text-gold-500 text-[10px] font-black">HRS</span>
                </div>
                <span className="group-hover:text-white transition-colors">
                  {SITE.officeHoursDisplay}
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-all">
                  <Phone className="h-4 w-4 text-gold-500" />
                </div>
                <div className="leading-relaxed">
                  <a href={`tel:${SITE.phoneTel}`} className="block group-hover:text-white transition-colors hover:text-gold-400">
                    {SITE.phoneDisplay}
                  </a>
                  <a href={`tel:${SITE.phoneSecondaryTel}`} className="block text-xs text-slate-400 hover:text-gold-400 transition-colors">
                    {SITE.phoneSecondaryDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-all">
                  <Mail className="h-4 w-4 text-gold-500" />
                </div>
                <a href={`mailto:${SITE.email}`} className="group-hover:text-white transition-colors hover:text-gold-400 break-all">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-dark-900/50 p-8 rounded-3xl border border-white/5">
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">Newsletter</h3>
            <p className="text-xs text-white mb-6 leading-relaxed font-medium">
              Add your email—we open WhatsApp with a ready message. You can also send the same request by email.
            </p>
            {newsletterThanks ? (
              <div className="space-y-3">
                <p className="text-xs text-gold-400 font-bold leading-relaxed">
                  WhatsApp should have opened. Didn’t work?{' '}
                  <a href={buildNewsletterMailto(newsletterEmail.trim())} className="underline hover:text-white">
                    Email signup
                  </a>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setNewsletterThanks(false);
                    setNewsletterEmail('');
                  }}
                  className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
                >
                  Use another email
                </button>
              </div>
            ) : (
              <form className="space-y-3" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-500 transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-gold-500 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-dark-950 transition-all duration-500"
                >
                  Subscribe via WhatsApp
                </button>
                <a
                  href={newsletterEmail.trim() ? buildNewsletterMailto(newsletterEmail.trim()) : undefined}
                  className={`block w-full text-center py-2 text-[10px] font-bold uppercase tracking-widest border border-white/10 rounded-xl transition-colors ${
                    newsletterEmail.trim()
                      ? 'text-gold-400 hover:bg-white/5'
                      : 'text-slate-600 pointer-events-none'
                  }`}
                  onClick={(e) => {
                    if (!newsletterEmail.trim()) e.preventDefault();
                  }}
                >
                  Or use email only
                </a>
              </form>
            )}
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white uppercase tracking-[0.2em] font-black">
            © {currentYear} Hair4Life Clinic. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-white uppercase tracking-[0.2em] font-black">
            <Link to="/privacy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;