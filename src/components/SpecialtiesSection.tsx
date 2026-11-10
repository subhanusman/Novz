import React, { useState } from 'react';
import {
  HeartPulse,
  Brain,
  Activity,
  Baby,
  Sparkles,
  Stethoscope,
  ChevronRight,
  Calendar,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { SPECIALTIES, PHYSICIANS } from '../data/clinicData';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking: (specialtyId: string) => void;
  onViewDoctorProfile: (doctorId: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyForBooking,
  onViewDoctorProfile,
}) => {
  const [activeSpecialtyId, setActiveSpecialtyId] = useState(SPECIALTIES[0].id);

  const activeSpecialty = SPECIALTIES.find((s) => s.id === activeSpecialtyId) || SPECIALTIES[0];
  const leadDoctor = PHYSICIANS.find((d) => d.id === activeSpecialty.leadPhysicianId);

  const getSpecialtyIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Baby':
        return <Baby className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Stethoscope className="w-5 h-5" />;
    }
  };

  return (
    <section id="specialties" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
              Clinical Departments
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              Comprehensive specialty care delivered by dedicated clinical leaders.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Select a department below to explore conditions treated, advanced diagnostic modalities, and physician consult availability.
            </p>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            <span>6 Dedicated Divisions</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Same-Day Testing</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Direct Referrals</span>
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {SPECIALTIES.map((spec) => {
            const isActive = spec.id === activeSpecialtyId;
            return (
              <button
                key={spec.id}
                onClick={() => setActiveSpecialtyId(spec.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-teal-700 text-white border-teal-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-teal-300 hover:bg-slate-100/70'
                }`}
              >
                <span className={isActive ? 'text-teal-200' : 'text-teal-600'}>
                  {getSpecialtyIcon(spec.iconName)}
                </span>
                <span>{spec.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Specialty Deep-Dive Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10 mb-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Overview, conditions, and procedures */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs text-teal-700 font-semibold uppercase tracking-wider">
                <span>{activeSpecialty.badge}</span>
                <span aria-hidden="true">·</span>
                <span>Outpatient Specialty Unit</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {activeSpecialty.name}
              </h3>

              <p className="text-base text-slate-700 leading-relaxed">
                {activeSpecialty.detailedOverview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                {/* Conditions Treated */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Key Conditions Evaluated</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {activeSpecialty.conditions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-teal-500 font-bold leading-tight">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diagnostic Procedures */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-sky-600" />
                    <span>In-House Diagnostics</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {activeSpecialty.procedures.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sky-500 font-bold leading-tight">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectSpecialtyForBooking(activeSpecialty.id)}
                  className="px-5 py-3 sm:py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="hidden sm:inline">Book Consultation in {activeSpecialty.name.split('&')[0]}</span>
                  <span className="sm:hidden">Book {activeSpecialty.badge}</span>
                </button>
              </div>
            </div>

            {/* Right 5 cols: Department Lead Doctor Card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200/90 space-y-4">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Clinical Division Lead
              </div>

              {leadDoctor && (
                <>
                  <div className="flex items-center gap-4">
                    <img
                      src={leadDoctor.photo}
                      alt={leadDoctor.name}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-2xs"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-display font-bold text-base text-slate-900">
                        {leadDoctor.name}
                      </h4>
                      <p className="text-xs text-teal-700 font-medium">
                        {leadDoctor.role}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {leadDoctor.experienceYears} Years Clinical Experience
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 italic bg-white p-3 rounded-lg border border-slate-200/60 leading-relaxed">
                    "{leadDoctor.philosophy}"
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Education:</span>
                      <span className="font-medium text-slate-800 text-right">{leadDoctor.education}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Consultation Days:</span>
                      <span className="font-medium text-slate-800">{leadDoctor.consultationDays.join(', ')}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Languages:</span>
                      <span className="font-medium text-slate-800">{leadDoctor.languages.join(', ')}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2.5">
                    <button
                      type="button"
                      onClick={() => onViewDoctorProfile(leadDoctor.id)}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1 cursor-pointer py-1.5"
                    >
                      <span>View Full Profile</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectSpecialtyForBooking(activeSpecialty.id)}
                      className="text-xs font-semibold px-3 py-1.5 min-h-[36px] bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-lg cursor-pointer transition-colors"
                    >
                      Select Doctor
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Overview Grid of all 6 Specialties for quick scanning */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              onClick={() => setActiveSpecialtyId(spec.id)}
              className={`p-5 rounded-2xl bg-white border cursor-pointer transition-all hover:shadow-md ${
                spec.id === activeSpecialtyId
                  ? 'border-teal-500 ring-2 ring-teal-500/10'
                  : 'border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  {getSpecialtyIcon(spec.iconName)}
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  {spec.badge}
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                {spec.name}
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                {spec.shortDescription}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                <span className="text-teal-700 font-semibold flex items-center gap-1">
                  <span>Explore department</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-slate-400">
                  {spec.conditions.length} Focus Areas
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
