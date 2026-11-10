import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Car,
  Compass
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubject, setInquirySubject] = useState('General Consultation Inquiry');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim() || !inquiryMessage.trim()) {
      setFormError('Please fill out all required fields.');
      return;
    }
    setFormError('');
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setInquiryName('');
    setInquiryEmail('');
    setInquiryMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
            Location & Inquiries
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Convenient campus access, direct digital support, and clinical liaison.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Reach out to our patient concierge team or plan your visit to our outpatient pavilion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 cols): Campus Location & Hours */}
          <div className="lg:col-span-7 space-y-6">
            {/* Campus Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                    Outpatient Medical Pavilion
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                    {CLINIC_CONTACT.brandName}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Pavilion Open Today</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">{CLINIC_CONTACT.address}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{CLINIC_CONTACT.campusDetails}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500">Official Electronic Mail:</span>
                    <p>
                      <a
                        href={`mailto:${CLINIC_CONTACT.email}`}
                        className="font-medium text-teal-700 hover:text-teal-800 underline underline-offset-2"
                      >
                        {CLINIC_CONTACT.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500">Direct Patient Concierge:</span>
                    <div className="mt-1">
                      <a
                        href={CLINIC_CONTACT.whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-2xs"
                        aria-label="Visit NEXTR WhatsApp Support"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{CLINIC_CONTACT.whatsAppCtaText}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Clinical Operating Schedule</span>
                </h4>
                <div className="space-y-2 text-xs">
                  {CLINIC_CONTACT.hours.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-white border border-slate-200/60"
                    >
                      <span className="font-medium text-slate-700">{h.days}</span>
                      <span className="font-semibold text-slate-900 tabular-nums">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-start gap-2 p-3 bg-white rounded-xl border border-slate-200/60">
                  <Car className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Valet & Reserved Parking</span>
                    <span>Complimentary parking garage directly adjacent to East Pavilion entrance.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white rounded-xl border border-slate-200/60">
                  <Building className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">ADA Compliant</span>
                    <span>Zero-barrier entryways, tactile braille signage, and wide elevator banks.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Demonstration Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="mb-6">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Contact Form
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                  Send a Clinic Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Have a question before scheduling? Submit an inquiry for demonstration verification.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-white rounded-xl border border-teal-200 text-center space-y-4">
                  <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-base">
                      Inquiry Received
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-900">{inquiryName}</span>. Your simulated inquiry regarding <span className="italic">{inquirySubject}</span> has been logged locally in demonstration mode.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-4 py-2 text-xs font-semibold text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
                      {formError}
                    </div>
                  )}

                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      placeholder="e.g. Michael Thorne"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full h-11 px-3.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Email
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      placeholder="e.g. michael@example.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full h-11 px-3.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Inquiry Category
                    </label>
                    <select
                      id="inquiry-subject"
                      value={inquirySubject}
                      onChange={(e) => setInquirySubject(e.target.value)}
                      className="w-full h-11 px-3 text-sm bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="General Consultation Inquiry">General Consultation Inquiry</option>
                      <option value="Medical Records Coordination">Medical Records Coordination</option>
                      <option value="Telehealth Technical Check">Telehealth Technical Check</option>
                      <option value="Insurance & Self-Pay Estimates">Insurance & Self-Pay Estimates</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inquiry-msg" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      id="inquiry-msg"
                      rows={3}
                      placeholder="Please enter your inquiry (demonstration mode)..."
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-semibold text-xs tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-teal-400" />
                    <span>Send Demo Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
