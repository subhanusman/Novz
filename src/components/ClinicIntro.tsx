import React from 'react';
import { ShieldCheck, HeartHandshake, Microscope, CheckCircle2 } from 'lucide-react';

export const ClinicIntro: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
            The NEXTR Care Standard
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Designed for clarity, comfort, and clinical continuity across every stage of your health journey.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conventional healthcare often isolates symptoms into disjointed appointments. NEXTR Apex Health unifies leading diagnostic technology and collaborative physicians under one peaceful roof to eliminate confusion and delay.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-5">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Integrated Diagnostic Precision
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Our in-house 3T high-field MRI, digital ultrasonography, and rapid lab analysis ensure your specialist can review high-definition results during your appointment, preventing weeks of anxiety.
            </p>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Same-day imaging interpretation</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Unhurried, Respectful Consultations
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              We reject high-volume factory medicine. Every patient evaluation is allocated 30 to 45 dedicated minutes so our doctors can listen deeply, answer questions, and build lasting health partnerships.
            </p>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Dedicated 45-minute intake evaluations</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Restorative Biophilic Architecture
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Natural daylight, courtyard views, sound-insulated consultation pods, and calming interior greenspace reduce clinical stress and foster a tranquil, dignified setting for recovery.
            </p>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Engineered acoustic and visual calm</span>
            </div>
          </div>
        </div>

        {/* Multi-specialty collaboration highlight banner */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-50 border border-teal-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-teal-950">
              Cross-Specialty Medical Rounds
            </h4>
            <p className="text-xs sm:text-sm text-teal-800">
              When complex conditions span cardiology, neurology, or metabolism, our physicians collaborate directly on unified treatment strategies.
            </p>
          </div>
          <span className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white text-teal-900 border border-teal-200 shadow-2xs">
            Collaborative Outpatient Model
          </span>
        </div>
      </div>
    </section>
  );
};
