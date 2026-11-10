import React, { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Clock, Award, Users, Sparkles } from 'lucide-react';
import { SPECIALTIES } from '../data/clinicData';

interface HeroProps {
  onSelectSpecialtyForBooking: (specialtyId: string) => void;
  onExploreSpecialties: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectSpecialtyForBooking,
  onExploreSpecialties
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(SPECIALTIES[0].id);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectSpecialtyForBooking(selectedSpecialty);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/50 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Subtle background ambient circles */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 rounded-full bg-sky-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and Booking Quick-Launcher */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Multi-Discipline Outpatient Excellence</span>
            </div>

            {/* Headline with balanced text */}
            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.15] text-balance">
              Thoughtful healthcare engineered around your comfort and clinical precision.
            </h1>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              NEXTR Apex Health brings world-class medical specialists, advanced diagnostic imaging, and personalized treatment pathways into an architectural environment designed for healing, clarity, and peace of mind.
            </p>

            {/* Interactive Quick Appointment Launcher */}
            <form
              onSubmit={handleQuickBook}
              className="p-3 sm:p-4 bg-white rounded-2xl shadow-sm border border-slate-200/80 max-w-xl space-y-3"
            >
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">
                Explore Care & Availability
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                <div className="sm:col-span-7">
                  <label htmlFor="hero-specialty" className="sr-only">
                    Select Clinical Specialty
                  </label>
                  <select
                    id="hero-specialty"
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full h-11 px-3.5 text-sm bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  >
                    {SPECIALTIES.map((spec) => (
                      <option key={spec.id} value={spec.id}>
                        {spec.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-5">
                  <button
                    type="submit"
                    className="w-full h-11 px-4 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Voucher</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-slate-500 px-1 pt-1 border-t border-slate-100">
                <span>Instant confirmation voucher</span>
                <span className="hidden sm:inline">·</span>
                <span>Zero wait consultation</span>
                <span className="hidden sm:inline">·</span>
                <span>Demo mode</span>
              </div>
            </form>

            {/* Direct Action Link */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreSpecialties}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors group cursor-pointer"
              >
                <span>Browse All 6 Clinical Specialties</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-16/10 sm:aspect-16/11 lg:aspect-4/3">
              <img
                src="/src/assets/images/hero_modern_clinic_reception_1794223859800.jpg"
                alt="NEXTR Apex Health modern clinic reception pavilion with calming natural lighting and patient lounge"
                loading="eager"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Scrim overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />

              {/* Feature highlight on bottom of image */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-xl border border-white/40 shadow-sm flex items-center justify-between gap-3 text-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">Patient Navigation Pavilion</p>
                    <p className="text-[11px] text-slate-500">Acoustic glass suites & garden views</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60 whitespace-nowrap">
                  Level 1 East
                </span>
              </div>
            </div>

            {/* Floating verification marker */}
            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg shadow-md border border-slate-200 text-slate-800 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Accredited Care Standards</span>
            </div>
          </div>
        </div>

        {/* Adjacency Proof Bar: Full-Width KPI & Capability Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-teal-700">
              <Award className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Clinical Board</span>
            </div>
            <p className="font-display text-2xl font-bold text-slate-900 tabular-nums">100%</p>
            <p className="text-xs text-slate-500">Board certified specialist physicians</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-teal-700">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Consultation Time</span>
            </div>
            <p className="font-display text-2xl font-bold text-slate-900 tabular-nums">45 Min</p>
            <p className="text-xs text-slate-500">Unhurried initial diagnostic evaluation</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-teal-700">
              <Users className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Experience Rating</span>
            </div>
            <p className="font-display text-2xl font-bold text-slate-900 tabular-nums">99.2%</p>
            <p className="text-xs text-slate-500">Simulated patient satisfaction score</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-teal-700">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Diagnostics</span>
            </div>
            <p className="font-display text-2xl font-bold text-slate-900 tabular-nums">Same-Day</p>
            <p className="text-xs text-slate-500">3T MRI, digital ultrasound & labs</p>
          </div>
        </div>
      </div>
    </section>
  );
};
