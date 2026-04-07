import React from 'react';
import { team } from '../data/team';

const Team: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-gold-500/20 border border-gold-500/30 text-gold-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            Our Team
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">People Behind Hair4Life</h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-serif italic font-medium">
            A focused team combining medical training, surgical skill, and everyday patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden bg-dark-900">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
              </div>
              <div className="p-8">
                <h2 className="text-xl font-black text-white mb-1">{doctor.name}</h2>
                <p className="text-gold-400 text-sm font-bold uppercase tracking-[0.16em] mb-4">
                  {doctor.specialty}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Patients usually meet our core team across consultation, planning, surgery and follow-ups.
                  Photographs here are for orientation—your exact treatment team may vary by schedule.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

