import React, { useState, useEffect } from 'react';
import { Maximize2, X, Check, MapPin, Building, Sparkles } from 'lucide-react';
import { FACILITIES, Facility } from '../data/clinicData';

export const FacilitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeFacilityModal, setActiveFacilityModal] = useState<Facility | null>(null);

  const categories = ['All', 'Diagnostic', 'Consultation', 'Lounge', 'Recovery'];

  const filteredFacilities = selectedCategory === 'All'
    ? FACILITIES
    : FACILITIES.filter((f) => f.category === selectedCategory);

  // Accessible keyboard listener for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeFacilityModal) {
        setActiveFacilityModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeFacilityModal]);

  return (
    <section id="facilities" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
              Physical Environment
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              Architectural wellness engineered for calm, privacy, and precision diagnostics.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Explore our state-of-the-art clinical spaces, from ambient low-stress diagnostic imaging suites to soundproof, sunlit consultation pods.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shrink-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden flex flex-col hover:border-slate-300 hover:shadow-md transition-all"
            >
              {/* Image with zoom affordance & keyboard focus */}
              <div
                role="button"
                tabIndex={0}
                aria-label={`View larger image of ${facility.title}`}
                className="relative aspect-16/10 bg-slate-100 overflow-hidden cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                onClick={() => setActiveFacilityModal(facility)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveFacilityModal(facility);
                  }
                }}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 backdrop-blur-xs text-slate-700 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-xs">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span className="font-medium drop-shadow-sm">{facility.location}</span>
                </div>
              </div>

              {/* Facility Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider mb-1">
                    {facility.category} Suite
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {facility.description}
                  </p>
                </div>

                {/* Features checklist */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {facility.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeFacilityModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="facility-lightbox-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveFacilityModal(null);
            }}
          >
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700 relative">
              <button
                type="button"
                onClick={() => setActiveFacilityModal(null)}
                className="absolute top-3.5 right-3.5 z-10 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-200 hover:text-white bg-slate-900/70 rounded-full hover:bg-slate-900 transition-colors cursor-pointer"
                aria-label="Close Facility View"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-16/10 max-h-[55vh] bg-slate-950">
                <img
                  src={activeFacilityModal.image}
                  alt={activeFacilityModal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                      {activeFacilityModal.category} Wing
                    </span>
                    <h3 id="facility-lightbox-title" className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                      {activeFacilityModal.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <Building className="w-4 h-4 text-slate-600" />
                    <span>{activeFacilityModal.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeFacilityModal.description}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Key Architectural & Clinical Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {activeFacilityModal.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                        <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
