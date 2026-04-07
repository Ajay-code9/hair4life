import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../config/site';

const Privacy: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-gold-500 text-xs font-black uppercase tracking-widest hover:text-white transition-colors">
          ← Home
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl text-white mt-8 mb-10">Privacy Policy</h1>
        <div className="space-y-6 text-slate-300 leading-relaxed font-medium text-sm md:text-base">
          <p>
            Hair4Life Clinic respects your privacy. This page describes how we handle information you share when you use
            our website, contact forms, phone, WhatsApp, or visit our clinic in Ahmedabad.
          </p>
          <p>
            <strong className="text-white">Information we collect:</strong> name, phone number, email, appointment preferences,
            and messages you send us. Clinical records from in-person visits are maintained separately under medical practice
            rules.
          </p>
          <p>
            <strong className="text-white">How we use it:</strong> to respond to enquiries, schedule consultations, and
            improve our services. We do not sell your personal data.
          </p>
          <p>
            <strong className="text-white">Cookies &amp; analytics:</strong> our site may use basic cookies or similar
            technologies required for the page to function. Third-party embeds (for example maps or video) follow their
            own providers’ policies.
          </p>
          <p>
            <strong className="text-white">Contact:</strong> for privacy-related questions, reach us at{' '}
            <a href={`mailto:${SITE.email}`} className="text-gold-400 hover:underline">
              {SITE.email}
            </a>{' '}
            or call {SITE.phoneDisplay}.
          </p>
          <p className="text-slate-500 text-sm">Last updated: April 2026.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
