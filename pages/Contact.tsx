import React, { useState } from 'react';
import { Check } from 'lucide-react';
import {
  buildConsultationMailto,
  buildConsultationWhatsAppText,
  openWhatsAppMessage,
} from '../utils/contactOutreach';
import { SITE } from '../config/site';
import { clinicDirectionsHref } from '../utils/clinicDirections';
import VisitingCardSection from '../components/VisitingCardSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'consultation',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppMessage(buildConsultationWhatsAppText(formData));
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-dark-950 min-h-screen relative">
      {/* Page Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-10" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950 to-dark-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-gold-400 text-xs font-bold uppercase tracking-widest block mb-4">Get In Touch</span>
              <h1 className="font-serif text-5xl text-white mb-6">Plan Your Visit</h1>
              <p className="text-white leading-relaxed font-medium">
                Located in the heart of Paldi, Ahmedabad, our facility offers world-class amenities in a private and comfortable setting.
              </p>
            </div>

            <div className="space-y-8 border-t border-white/10 pt-8">
              <div className="flex items-start gap-6">
                 <span className="text-gold-400 font-serif text-2xl italic">01</span>
                 <div>
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Clinic Address</h3>
                    <a
                      href={clinicDirectionsHref()}
                      className="text-slate-500 font-light hover:text-gold-400 transition-colors inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500/60 rounded-sm"
                      aria-label="Open directions to Hair4Life Clinic in your maps app"
                    >
                      {SITE.addressLine1},<br/>
                      {SITE.addressLine2},<br/>
                      {SITE.addressLine3},<br/>
                      {SITE.addressLine4}
                    </a>
                 </div>
              </div>
              <div className="flex items-start gap-6">
                 <span className="text-gold-400 font-serif text-2xl italic">02</span>
                 <div>
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Contact</h3>
                    <p className="text-slate-500 font-light">
                      <a href={`tel:${SITE.phoneTel}`} className="hover:text-slate-300 transition-colors">{SITE.phoneDisplay}</a>
                      <br />
                      <span className="text-xs text-slate-600">Secondary: </span>
                      <a href={`tel:${SITE.phoneSecondaryTel}`} className="text-xs hover:text-slate-400 transition-colors">{SITE.phoneSecondaryDisplay}</a>
                      <br />
                      <span className="text-xs text-slate-600">Call or WhatsApp</span>
                    </p>
                 </div>
              </div>
              <div className="flex items-start gap-6">
                 <span className="text-gold-400 font-serif text-2xl italic">03</span>
                 <div>
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Digital</h3>
                    <p className="text-slate-500 font-light">{SITE.email}</p>
                 </div>
              </div>
              <div className="flex items-start gap-6">
                 <span className="text-gold-400 font-serif text-2xl italic">04</span>
                 <div>
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Office Hours</h3>
                    <p className="text-slate-500 font-light">
                      {SITE.officeHoursDisplay}
                    </p>
                 </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-80 mt-8 border border-white/10 rounded-sm overflow-hidden bg-dark-900">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.170167890832!2d72.56071947510372!3d23.01239887918099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e850174c348b5%3A0x98db44b1d2620e06!2sMahavir%20Towers!5e1!3m2!1sen!2sin!4v1769102883127!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hair4Life Clinic Location"
                    className="grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                ></iframe>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-dark-900/50 p-10 md:p-14 border border-white/5 relative">
              
              {submitted ? (
                <div className="text-center py-20 animate-fade-in">
                  <div className="w-20 h-20 border border-gold-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check className="h-8 w-8 text-gold-500" />
                  </div>
                  <h3 className="font-serif text-3xl text-white mb-4">WhatsApp opened</h3>
                  <p className="text-white mb-6 font-medium max-w-md mx-auto">
                    Thank you, {formData.name}. We opened WhatsApp with your details—tap Send there to complete your request.
                  </p>
                  <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
                    If WhatsApp did not open (popup blocked or desktop), use email instead:
                  </p>
                  <a
                    href={buildConsultationMailto(formData)}
                    className="inline-block mb-8 text-gold-400 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors border-b border-gold-400 pb-1"
                  >
                    Send via email
                  </a>
                  <div>
                  <button 
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-slate-500 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors border-b border-white/20 pb-1"
                  >
                    Edit and resend
                  </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-3xl text-white mb-10">Private Consultation Request</h2>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-gold-400 transition-colors">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-slate-700 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg placeholder-slate-700"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-gold-400 transition-colors">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-slate-700 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg placeholder-slate-700"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-gold-400 transition-colors">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-slate-700 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg placeholder-slate-700"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label htmlFor="service" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-gold-400 transition-colors">Interest</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-slate-700 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg appearance-none cursor-pointer"
                        >
                          <option value="consultation" className="bg-dark-900">General Consultation</option>
                          <option value="fue" className="bg-dark-900">Hair Transplant</option>
                          <option value="laser" className="bg-dark-900">Laser Treatment</option>
                          <option value="prp" className="bg-dark-900">PRP Therapy</option>
                          <option value="skin" className="bg-dark-900">Skin Aesthetics</option>
                          <option value="cosmetic" className="bg-dark-900">Hair Cosmetic/System</option>
                        </select>
                      </div>
                      <div className="group">
                        <label htmlFor="date" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-gold-400 transition-colors">Preferred Date</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-slate-700 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-gold-400 transition-colors">Notes (Optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-slate-700 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg resize-none placeholder-slate-700"
                        placeholder="Are you traveling from another city/country?..."
                      ></textarea>
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            className="w-full bg-gold-500 text-dark-950 font-bold uppercase tracking-widest py-5 hover:bg-white transition-all duration-300"
                        >
                            Confirm Request
                        </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <VisitingCardSection
        title="Take Our Card With You"
      />
    </div>
  );
};

export default Contact;