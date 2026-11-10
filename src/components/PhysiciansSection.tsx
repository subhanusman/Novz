import React, { useState, useEffect } from 'react';
import {
  Calendar,
  X,
  Award,
  BookOpen,
  Languages,
  Clock,
  CheckCircle2,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { PHYSICIANS, Physician } from '../data/clinicData';

interface PhysiciansSectionProps {
  onSelectDoctorForBooking: (doctorId: string) => void;
  selectedDoctorModalId: string | null;
  onCloseDoctorModal: () => void;
  onOpenDoctorModal: (doctorId: string) => void;
}

export const PhysiciansSection: React.FC<PhysiciansSectionProps> = ({
  onSelectDoctorForBooking,
  selectedDoctorModalId,
  onCloseDoctorModal,
  onOpenDoctorModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { label: 'All Specialties', value: 'all' },
    { label: 'Cardiology', value: 'cardiology' },
    { label: 'Neurology', value: 'neurology' },
    { label: 'Orthopedics', value: 'orthopedics' },
    { label: 'Pediatrics', value: 'pediatrics' },
    { label: 'Dermatology', value: 'dermatology' },
    { label: 'Internal Medicine', value: 'internal-medicine' },
  ];

  const filteredPhysicians = activeFilter === 'all'
    ? PHYSICIANS
    : PHYSICIANS.filter((doc) => doc.specialtyId === activeFilter);

  const activeModalDoctor = PHYSICIANS.find((d) => d.id === selectedDoctorModalId);

  // Accessible keyboard listener for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedDoctorModalId) {
        onCloseDoctorModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDoctorModalId, onCloseDoctorModal]);

  return (
    <section id="physicians" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
            Medical Faculty
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Meet our multidisciplinary medical specialists and clinical directors.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Dedicated physicians combining academic hospital experience with attentive outpatient care. Each physician profile below includes clinical background, areas of focus, and consultation availability.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <ShieldAlert className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Fictional Demonstration Profiles · Created for NEXTR Apex Health Showcase</span>
          </div>
        </div>

        {/* Specialty Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer border ${
                activeFilter === opt.value
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Physician Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhysicians.map((physician) => (
            <div
              key={physician.id}
              className="group bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col overflow-hidden"
            >
              {/* Doctor Photo & Tag */}
              <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                <img
                  src={physician.photo}
                  alt={physician.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-800 shadow-xs border border-white/60">
                  {physician.department.split('&')[0]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>{physician.experienceYears} Years Clinical Exp.</span>
                    <span className="text-teal-700 font-medium">In-Person & Virtual</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                    {physician.name}
                  </h3>

                  <p className="text-xs text-teal-800 font-medium mt-0.5 mb-3">
                    {physician.role}
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {physician.bio}
                  </p>

                  {/* Subspecialties unboxed text */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 mb-4 pb-4 border-b border-slate-100">
                    {physician.subspecialties.map((sub, idx) => (
                      <React.Fragment key={sub}>
                        <span className="font-medium text-slate-700">{sub}</span>
                        {idx < physician.subspecialties.length - 1 && (
                          <span className="text-slate-300" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenDoctorModal(physician.id)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer text-center"
                  >
                    View Biography
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectDoctorForBooking(physician.id)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-2xs flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consult</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Doctor Biography Modal */}
        {activeModalDoctor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="doctor-modal-name"
            onClick={(e) => {
              if (e.target === e.currentTarget) onCloseDoctorModal();
            }}
          >
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-5 sm:p-8 relative">
              {/* Close Button */}
              <button
                type="button"
                onClick={onCloseDoctorModal}
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close Doctor Details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-100">
                <img
                  src={activeModalDoctor.photo}
                  alt={activeModalDoctor.name}
                  className="w-20 h-20 rounded-2xl object-cover border border-slate-200 shadow-xs"
                />
                <div>
                  <div className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                    {activeModalDoctor.department}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    {activeModalDoctor.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {activeModalDoctor.role} · {activeModalDoctor.experienceYears} Years Practice
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="py-6 space-y-5 text-sm text-slate-700">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Professional Background
                  </h4>
                  <p className="leading-relaxed text-slate-600">
                    {activeModalDoctor.bio}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100">
                  <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-1">
                    Philosophy of Care
                  </h4>
                  <p className="text-xs sm:text-sm text-teal-950 italic leading-relaxed">
                    "{activeModalDoctor.philosophy}"
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-teal-600" />
                      <span>Medical Education</span>
                    </span>
                    <p className="text-slate-600">{activeModalDoctor.education}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Languages className="w-4 h-4 text-teal-600" />
                      <span>Consultation Languages</span>
                    </span>
                    <p className="text-slate-600">{activeModalDoctor.languages.join(', ')}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <span>Clinic Days</span>
                    </span>
                    <p className="text-slate-600">{activeModalDoctor.consultationDays.join(', ')}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-teal-600" />
                      <span>Consultation Tier</span>
                    </span>
                    <p className="text-slate-600">{activeModalDoctor.consultationFee}</p>
                  </div>
                </div>

                {/* Subspecialties */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Focus Areas & Subspecialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalDoctor.subspecialties.map((sub) => (
                      <span
                        key={sub}
                        className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200/60 font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Demonstration Disclaimer Note */}
                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900">
                  <p className="font-semibold">Demonstration Profile Notice</p>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    This profile is a demonstration persona configured for NEXTR Digital Solutions & Services. It does not represent active individual clinical licensing or medical diagnostics.
                  </p>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onCloseDoctorModal}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onCloseDoctorModal();
                    onSelectDoctorForBooking(activeModalDoctor.id);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book with {activeModalDoctor.name.split(',')[0]}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
