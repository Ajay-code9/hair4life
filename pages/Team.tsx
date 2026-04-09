import React from 'react';
import { team } from '../data/team';

const Team: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-gold-500/20 border border-gold-500/30 text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            Our Team
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">People Behind Hair4Life</h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-serif italic font-medium">
            Meet our founder and lead clinicians—surgery, dermatology, and patient care under one roof.
          </p>
        </div>

        <div className="space-y-12 md:space-y-14">
          {team.map((doctor) => (
            <article
              key={doctor.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(120%_140%_at_90%_0%,rgba(16,185,129,0.14),transparent_45%),radial-gradient(110%_130%_at_0%_100%,rgba(255,255,255,0.08),transparent_50%),linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_45%,rgba(0,0,0,0.12)_100%)] shadow-[0_28px_70px_rgba(0,0,0,0.4)] hover:border-gold-500/40 hover:shadow-[0_34px_90px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              <div className="pointer-events-none absolute -top-24 -right-16 h-52 w-52 rounded-full bg-gold-500/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl opacity-70" />
              <div className="p-6 sm:p-8 md:p-10 lg:p-11">
                {doctor.id === 'chandrashekhar-singh' ? (
                  <div className="flow-root">
                    <figure className="relative mx-auto mb-8 w-[min(100%,225px)] sm:w-[250px] md:float-left md:mx-0 md:mb-4 md:mr-8 lg:mr-10 shrink-0 rounded-[1.35rem] overflow-hidden border border-white/15 bg-dark-900 shadow-[0_16px_50px_rgba(0,0,0,0.45)] aspect-[3/4] max-h-[320px] md:max-h-none ring-1 ring-emerald-300/20">
                      <img
                        src={doctor.imageUrl}
                        alt={doctor.name}
                        className="h-full w-full object-cover object-top group-hover:scale-[1.06] transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-950/55 via-transparent to-transparent opacity-70" />
                    </figure>

                    <div className="min-w-0">
                      <h2 className="text-3xl md:text-[2.1rem] font-black tracking-tight text-white mb-2">{doctor.name}</h2>
                      <p className="inline-flex items-center rounded-full border border-gold-500/35 bg-gold-500/15 px-3.5 py-1 text-gold-200 text-[11px] font-bold uppercase tracking-[0.16em] mb-4">
                        {doctor.specialty}
                      </p>
                      {doctor.tagline && (
                        <p className="text-white/95 font-serif italic text-[1.75rem] leading-none md:text-[1.85rem] mb-6 border-l-2 border-gold-500/50 pl-4">
                          {doctor.tagline}
                        </p>
                      )}
                      {doctor.bio && (
                        <div className="space-y-4 mb-8">
                          {doctor.bio.map((para, i) => (
                            <p key={i} className="text-slate-300 text-sm md:text-base leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>
                      )}
                      {doctor.qualifications && (
                        <div className="mb-8">
                          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-500 mb-3">
                            Qualifications
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed">{doctor.qualifications}</p>
                        </div>
                      )}
                      {doctor.achievements && doctor.achievements.length > 0 && (
                        <div>
                          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-500 mb-3">
                            Achievements &amp; Awards
                          </h3>
                          <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm leading-relaxed">
                            {doctor.achievements.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
                    <figure className="relative md:col-span-4 lg:col-span-3 mx-auto md:mx-0 w-[min(100%,270px)] rounded-[1.35rem] overflow-hidden border border-gold-500/35 bg-dark-900 shadow-[0_16px_50px_rgba(0,0,0,0.45)] aspect-[3/4] ring-1 ring-white/10">
                      <img
                        src={doctor.imageUrl}
                        alt={doctor.name}
                        className="h-full w-full object-cover object-top group-hover:scale-[1.06] transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-950/45 via-transparent to-transparent opacity-70" />
                      <div className="pointer-events-none absolute inset-0 border border-white/10 rounded-2xl" />
                    </figure>

                    <div className="md:col-span-8 lg:col-span-9 min-w-0">
                      <h2 className="text-3xl md:text-[2.1rem] font-black tracking-tight text-white mb-2">{doctor.name}</h2>
                      <p className="inline-flex items-center rounded-full border border-gold-500/35 bg-gold-500/15 px-3.5 py-1 text-gold-200 text-[11px] font-bold uppercase tracking-[0.16em] mb-4">
                        {doctor.specialty}
                      </p>
                      {doctor.tagline && (
                        <p className="text-white/95 font-serif italic text-[1.75rem] leading-none md:text-[1.85rem] mb-6 border-l-2 border-gold-500/50 pl-4">
                          {doctor.tagline}
                        </p>
                      )}
                      {doctor.bio && (
                        <div className="space-y-4 mb-8">
                          {doctor.bio.map((para, i) => (
                            <p key={i} className="text-slate-300 text-sm md:text-base leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>
                      )}
                      {doctor.qualifications && (
                        <div className="mb-8">
                          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-500 mb-3">
                            Qualifications
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed">{doctor.qualifications}</p>
                        </div>
                      )}
                      {doctor.achievements && doctor.achievements.length > 0 && (
                        <div>
                          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-500 mb-3">
                            Achievements &amp; Awards
                          </h3>
                          <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm leading-relaxed">
                            {doctor.achievements.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
