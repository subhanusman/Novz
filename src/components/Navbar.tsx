import React, { useState } from 'react';
import { Menu, X, Calendar, MessageSquare, Shield, Stethoscope, ChevronRight } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Specialties', href: '#specialties' },
    { label: 'Physicians', href: '#physicians' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Patient Experience', href: '#experience' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Demonstration Ribbon */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-teal-900/60 text-teal-300 border border-teal-700/50">
              <Shield className="w-3 h-3 text-teal-400" />
              Interactive Healthcare Demonstration
            </span>
            <span className="hidden sm:inline text-slate-400">
              Created for NEXTR Digital Solutions & Services
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="hidden md:inline">Demonstration Data Only · No Real Medical Information Collected</span>
            <a
              href={CLINIC_CONTACT.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-medium transition-colors"
              title="Contact via WhatsApp"
            >
              <MessageSquare className="w-3 h-3" />
              <span>{CLINIC_CONTACT.whatsAppCtaText}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            aria-label="NEXTR Apex Health Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-sm group-hover:bg-teal-700 transition-colors">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-xl text-slate-900 tracking-tight leading-none group-hover:text-teal-700 transition-colors">
                NEXTR Apex Health
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-1">
                Multi-Specialty Care
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 border-transparent hover:border-teal-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* WhatsApp Link with exact text 'Visit' */}
            <a
              href={CLINIC_CONTACT.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 rounded-lg hover:bg-teal-100 transition-colors whitespace-nowrap flex items-center gap-1.5"
              aria-label="Visit NEXTR via WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-teal-600" />
              <span>{CLINIC_CONTACT.whatsAppCtaText}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3 py-2 min-h-[44px] text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 rounded-lg sm:hidden flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-800 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href={CLINIC_CONTACT.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-teal-800 bg-teal-50 border border-teal-200 rounded-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-teal-600" />
                <span>{CLINIC_CONTACT.whatsAppCtaText}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation Voucher</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
