import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../config/site';

const Terms: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-gold-500 text-xs font-black uppercase tracking-widest hover:text-white transition-colors">
          ← Home
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl text-white mt-8 mb-10">Terms of Use</h1>
        <div className="space-y-6 text-slate-300 leading-relaxed font-medium text-sm md:text-base">
          <p>
            By using this website, you agree to these terms. If you do not agree, please do not use the site.
          </p>
          <p>
            <strong className="text-white">Medical information:</strong> content here is for general education only. It is
            not a substitute for an in-person examination or personalised medical advice. Always follow guidance from your
            treating doctor.
          </p>
          <p>
            <strong className="text-white">Results:</strong> outcomes of hair restoration vary by individual. Photographs
            and descriptions are illustrative and not a guarantee of your result.
          </p>
          <p>
            <strong className="text-white">Intellectual property:</strong> text, design, and branding on this site belong
            to Hair4Life Clinic unless otherwise noted. Unauthorised copying or commercial use is not permitted.
          </p>
          <p>
            <strong className="text-white">Limitation:</strong> we aim to keep the site accurate and available but do not
            warrant uninterrupted access or freedom from errors. Use of the site is at your own risk to the extent allowed
            by law.
          </p>
          <p>
            <strong className="text-white">Contact:</strong>{' '}
            <a href={`mailto:${SITE.email}`} className="text-gold-400 hover:underline">
              {SITE.email}
            </a>
            , {SITE.phoneDisplay} / {SITE.phoneSecondaryDisplay}.
          </p>
          <p className="text-slate-500 text-sm">Last updated: April 2026.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
