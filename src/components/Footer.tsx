import React from 'react';
import { Stethoscope, Mail, MessageSquare, Shield, ArrowUp } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                NEXTR Apex Health
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              A modern multi-specialty healthcare clinic demonstration created by NEXTR Digital Solutions & Services. Featuring comprehensive specialty workflows, physician directories, and interactive local voucher booking.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <a
                href={`mailto:${CLINIC_CONTACT.email}`}
                className="text-teal-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{CLINIC_CONTACT.email}</span>
              </a>

              <a
                href={CLINIC_CONTACT.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 flex items-center gap-1.5 font-medium transition-colors"
                aria-label="Visit NEXTR WhatsApp Support"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{CLINIC_CONTACT.whatsAppCtaText}</span>
              </a>
            </div>
          </div>

          {/* Clinical Specialties Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">
              Specialties
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  Cardiology & Vascular
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  Neurology & Brain Health
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  Orthopedics & Joint Care
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  Pediatrics & Family Care
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  Dermatology & Skin Health
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  Internal Medicine
                </a>
              </li>
            </ul>
          </div>

          {/* Clinic Navigation */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Care Model
                </a>
              </li>
              <li>
                <a href="#physicians" className="hover:text-white transition-colors">
                  Fictional Physician Faculty
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Facilities & Diagnostic Suites
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Appointment Voucher Generator
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Patient Experience & Stories
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Demonstration Terms */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">
              Demo Disclosure
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              This website is an interactive demonstration prototype developed for portfolio and technical showcase purposes. All physician profiles, patient reviews, and medical vouchers are fictional simulations.
            </p>
            <div className="flex items-center gap-1.5 text-slate-300 text-[11px] pt-1">
              <Shield className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>No Medical Advice Provided</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with EXACT REQUIRED FOOTER CREDIT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div className="text-center sm:text-left">
            <p className="font-medium text-slate-300">
              {CLINIC_CONTACT.footerCredit}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              © {new Date().getFullYear()} {CLINIC_CONTACT.brandName}. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
