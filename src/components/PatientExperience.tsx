import React from 'react';
import {
  Compass,
  Clock,
  Sparkles,
  Heart,
  Quote,
  ShieldCheck,
  CheckCircle2,
  FileCheck2
} from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export const PatientExperience: React.FC = () => {
  const journeySteps = [
    {
      step: '01',
      title: 'Effortless Arrival & Check-In',
      description: 'Reserved valet parking and touchless digital kiosks guide you straight into a serene, light-filled lounge without traditional clipboard paperwork.'
    },
    {
      step: '02',
      title: 'Unhurried Clinical Discussion',
      description: 'Your physician dedicates 45 unhurried minutes to understand your medical history, symptoms, lifestyle factors, and specific health objectives.'
    },
    {
      step: '03',
      title: 'Same-Day In-House Diagnostics',
      description: 'If echocardiograms, 3T MRI, or blood panels are required, testing is performed in adjacent suites with rapid radiologist interpretation.'
    },
    {
      step: '04',
      title: 'Actionable Health Road Map',
      description: 'Leave with a unified care plan, transparent instructions, and ongoing communication with your dedicated care navigator.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
            The Patient Journey
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Reimagining the clinical visit from stressful uncertainty to calm clarity.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Every touchpoint at NEXTR Apex Health is engineered to respect your time, preserve your dignity, and provide transparent medical direction.
          </p>
        </div>

        {/* 4-Step Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {journeySteps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-3xl font-bold text-teal-600/40 block mb-3 tabular-nums">
                  {item.step}
                </span>
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center gap-1.5 text-xs text-teal-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero wait standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Patient Stories & Verified Testimonials */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                Patient Perspectives
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Outcomes that matter most to individuals and families
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs text-slate-400">
              Simulated Patient Reviews
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="text-teal-600 mb-3">
                    <Quote className="w-6 h-6 rotate-180 opacity-70" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-100/80 mb-4">
                    <span className="text-[10px] uppercase font-bold text-teal-800 tracking-wider block">
                      Clinical Outcome
                    </span>
                    <p className="text-xs text-teal-950 font-medium mt-0.5">
                      {testimonial.outcome}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.patientName}</h4>
                    <p className="text-slate-500 text-[11px]">{testimonial.city} · {testimonial.specialty}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 tabular-nums">
                    {testimonial.verifiedVisitDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinic Commitment Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h4 className="font-display text-lg font-bold text-white">
              The NEXTR Patient Care Charter
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We pledge open pricing estimates prior to consultation, transparent electronic note sharing, and dedicated care navigators who answer questions within business hours.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-300 shrink-0">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Full Privacy</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>On-Time Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
