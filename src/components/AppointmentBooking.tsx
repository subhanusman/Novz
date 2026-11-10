import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  CheckCircle2,
  Printer,
  Download,
  AlertCircle,
  Video,
  Building2,
  Stethoscope,
  RefreshCw,
  QrCode,
  ShieldCheck
} from 'lucide-react';
import { SPECIALTIES, PHYSICIANS, CLINIC_CONTACT, Physician } from '../data/clinicData';

interface AppointmentBookingProps {
  initialSpecialtyId?: string | null;
  initialDoctorId?: string | null;
  onClearPreselect?: () => void;
}

export interface BookingVoucherData {
  voucherId: string;
  patientName: string;
  patientEmail: string;
  contactPreference: string;
  visitType: 'in-person' | 'virtual';
  specialtyName: string;
  doctorName: string;
  doctorRole: string;
  doctorPhoto: string;
  appointmentDate: string;
  appointmentTime: string;
  roomLocation: string;
  reasonForVisit: string;
  issuedAt: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  initialSpecialtyId,
  initialDoctorId,
  onClearPreselect
}) => {
  // Booking Form State
  const [visitType, setVisitType] = useState<'in-person' | 'virtual'>('in-person');
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>(
    initialSpecialtyId || SPECIALTIES[0].id
  );
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(
    initialDoctorId || 'first-available'
  );

  // Calendar dates (next 14 days)
  const [availableDates, setAvailableDates] = useState<{ dateStr: string; dayName: string; dayNumber: number; isWeekend: boolean }[]>([]);
  const [selectedDateStr, setSelectedDateStr] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:00 AM');

  // Visitor fields
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [reasonForVisit, setReasonForVisit] = useState('Comprehensive Health Evaluation');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [contactMode, setContactMode] = useState('Email');

  // Status & Validation
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [voucher, setVoucher] = useState<BookingVoucherData | null>(null);

  // Generate 14-day calendar
  useEffect(() => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      const dayNumber = d.getDate();
      const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const isWeekend = d.getDay() === 0 || d.getDay() === 6;
      dates.push({ dateStr, dayName, dayNumber, isWeekend });
    }
    setAvailableDates(dates);
    if (dates.length > 0) {
      setSelectedDateStr(dates[0].dateStr);
    }
  }, []);

  // Update selection if passed from outside
  useEffect(() => {
    if (initialSpecialtyId) {
      setSelectedSpecialtyId(initialSpecialtyId);
    }
    if (initialDoctorId) {
      setSelectedDoctorId(initialDoctorId);
      const doc = PHYSICIANS.find((d) => d.id === initialDoctorId);
      if (doc) {
        setSelectedSpecialtyId(doc.specialtyId);
      }
    }
  }, [initialSpecialtyId, initialDoctorId]);

  // Doctors in current specialty
  const specialtyDoctors = PHYSICIANS.filter((d) => d.specialtyId === selectedSpecialtyId);

  // Time slots
  const morningSlots = ['08:30 AM', '09:15 AM', '10:00 AM', '11:15 AM'];
  const afternoonSlots = ['01:30 PM', '02:15 PM', '03:00 PM', '03:45 PM'];
  const eveningSlots = ['04:30 PM', '05:15 PM'];

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!patientName.trim()) {
      errors.name = 'Please provide your full name.';
    } else if (patientName.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }

    if (!patientEmail.trim()) {
      errors.email = 'Please provide a contact email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientEmail)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!selectedDateStr) {
      errors.date = 'Please choose an appointment date.';
    }

    if (!selectedTimeSlot) {
      errors.time = 'Please pick a consultation time.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate instant local verification
    setTimeout(() => {
      const specialty = SPECIALTIES.find((s) => s.id === selectedSpecialtyId) || SPECIALTIES[0];
      let doctor: Physician | undefined;
      if (selectedDoctorId === 'first-available') {
        doctor = specialtyDoctors[0] || PHYSICIANS[0];
      } else {
        doctor = PHYSICIANS.find((d) => d.id === selectedDoctorId) || PHYSICIANS[0];
      }

      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const voucherData: BookingVoucherData = {
        voucherId: `APX-2026-${randomSuffix}`,
        patientName: patientName.trim(),
        patientEmail: patientEmail.trim(),
        contactPreference: contactMode,
        visitType: visitType,
        specialtyName: specialty.name,
        doctorName: doctor.name,
        doctorRole: doctor.role,
        doctorPhoto: doctor.photo,
        appointmentDate: selectedDateStr,
        appointmentTime: selectedTimeSlot,
        roomLocation: visitType === 'in-person' ? 'Pavilion Level 2, Suite 204' : 'Secure Virtual Video Room (Encrypted Link)',
        reasonForVisit: reasonForVisit,
        issuedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };

      setVoucher(voucherData);
      setIsSubmitting(false);
      if (onClearPreselect) onClearPreselect();
    }, 400);
  };

  const handleResetBooking = () => {
    setVoucher(null);
    setPatientName('');
    setPatientEmail('');
    setReasonForVisit('Comprehensive Health Evaluation');
    setAdditionalNotes('');
    setFormErrors({});
  };

  // Client-side .ics calendar file generator
  const handleDownloadCalendar = () => {
    if (!voucher) return;
    const title = `Consultation: ${voucher.doctorName} (${voucher.specialtyName})`;
    const location = voucher.visitType === 'in-person' ? CLINIC_CONTACT.address : 'NEXTR Apex Telehealth Portal';
    const description = `Simulated healthcare consultation at NEXTR Apex Health. Reference: ${voucher.voucherId}. Patient: ${voucher.patientName}.`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//NEXTR Digital Solutions & Services//Apex Health Demo//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `NEXTR_Apex_Health_${voucher.voucherId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintVoucher = () => {
    window.print();
  };

  return (
    <section id="booking" className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
            Interactive Reservation
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Schedule your personalized consultation with immediate local confirmation.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Select your clinical department, preferred physician, appointment type, and time. This local demonstration generates an official-styled consultation voucher pass with zero sensitive data stored.
          </p>
        </div>

        {/* Voucher View or Booking Form */}
        {voucher ? (
          <div className="max-w-2xl mx-auto">
            {/* Confirmation Banner */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="text-xs sm:text-sm text-emerald-950 font-medium">
                Simulated booking successful! Your local consultation voucher pass is ready below.
              </div>
            </div>

            {/* Official-looking Printable Voucher Card */}
            <div
              id="printable-voucher"
              className="bg-white rounded-3xl border-2 border-teal-600 shadow-xl overflow-hidden relative"
            >
              {/* Card Header Strip */}
              <div className="bg-teal-700 text-white p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-teal-200 block">
                    Official Demonstration Consultation Pass
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
                    NEXTR Apex Health
                  </h3>
                  <p className="text-[11px] sm:text-xs text-teal-100 mt-0.5">
                    {CLINIC_CONTACT.address}
                  </p>
                </div>
                <div className="sm:text-right pt-2 sm:pt-0 border-t border-teal-600/60 sm:border-t-0">
                  <span className="text-[10px] uppercase font-bold text-teal-300 block">Voucher ID</span>
                  <span className="font-mono text-base sm:text-lg font-bold tracking-wider text-white">
                    {voucher.voucherId}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-8 space-y-5 sm:space-y-6">
                {/* Physician & Visit Mode */}
                <div className="flex items-center gap-3.5 sm:gap-4 pb-5 sm:pb-6 border-b border-slate-100">
                  <img
                    src={voucher.doctorPhoto}
                    alt={voucher.doctorName}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border border-slate-200 shadow-2xs"
                  />
                  <div>
                    <span className="text-[11px] sm:text-xs font-semibold text-teal-700 uppercase tracking-wider">
                      {voucher.specialtyName}
                    </span>
                    <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-tight mt-0.5">
                      {voucher.doctorName}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {voucher.doctorRole}
                    </p>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 py-1 sm:py-2">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block uppercase font-medium">Date</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-0.5 truncate">
                      {voucher.appointmentDate}
                    </span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block uppercase font-medium">Time Slot</span>
                    <span className="text-xs sm:text-sm font-bold text-teal-700 block mt-0.5">
                      {voucher.appointmentTime}
                    </span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block uppercase font-medium">Mode</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-0.5 capitalize">
                      {voucher.visitType}
                    </span>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block uppercase font-medium">Fee</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-700 block mt-0.5">
                      Demo ($0)
                    </span>
                  </div>
                </div>

                {/* Patient & Location info */}
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 bg-slate-50/80 p-3.5 sm:p-4 rounded-xl border border-slate-200/70">
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200/50 gap-0.5">
                    <span className="text-slate-500">Patient Full Name:</span>
                    <span className="font-semibold text-slate-900">{voucher.patientName}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200/50 gap-0.5">
                    <span className="text-slate-500">Contact Email:</span>
                    <span className="font-semibold text-slate-900">{voucher.patientEmail}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200/50 gap-0.5">
                    <span className="text-slate-500">Consultation Location:</span>
                    <span className="font-semibold text-teal-800">{voucher.roomLocation}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 gap-0.5">
                    <span className="text-slate-500">Clinical Focus:</span>
                    <span className="font-semibold text-slate-900">{voucher.reasonForVisit}</span>
                  </div>
                </div>

                {/* Simulated QR Code & Barcode Footnote */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-dashed border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 text-white p-2 rounded-xl flex items-center justify-center shrink-0">
                      <QrCode className="w-8 h-8 sm:w-10 sm:h-10 text-teal-300" />
                    </div>
                    <div className="text-left text-xs text-slate-500">
                      <p className="font-semibold text-slate-900">Digital Check-In QR</p>
                      <p className="text-[11px]">Scan at kiosk on Pavilion Level 1</p>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-teal-50 text-teal-800 text-[11px] font-semibold border border-teal-200">
                      Simulated Local Pass
                    </span>
                    <p className="text-[10px] text-slate-400 mt-1">Issued: {voucher.issuedAt}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrintVoucher}
                    className="px-4 py-2.5 min-h-[44px] text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Printer className="w-3.5 h-3.5 text-teal-600" />
                    <span>Print Voucher</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadCalendar}
                    className="px-4 py-2.5 min-h-[44px] text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5 text-teal-600" />
                    <span>Add to Calendar (.ics)</span>
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleResetBooking}
                  className="px-4 py-2.5 min-h-[44px] text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Book Another</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Multi-Step Interactive Booking Form */
          <form
            onSubmit={handleBookingSubmit}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto space-y-8"
          >
            {/* Step 1: Visit Type & Department */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                  <span>Select Consultation Mode & Department</span>
                </h3>
                <span className="text-xs text-slate-500">Step 1 of 4</span>
              </div>

              {/* Visit Mode Switcher */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setVisitType('in-person')}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                    visitType === 'in-person'
                      ? 'border-teal-600 bg-teal-50/50 ring-2 ring-teal-500/10'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${visitType === 'in-person' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">In-Person Campus Visit</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Consultation in private acoustic suite with same-day imaging access
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setVisitType('virtual')}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                    visitType === 'virtual'
                      ? 'border-teal-600 bg-teal-50/50 ring-2 ring-teal-500/10'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${visitType === 'virtual' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Encrypted Video Triage</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Telehealth consultation via secure browser link without software install
                    </p>
                  </div>
                </button>
              </div>

              {/* Department Dropdown */}
              <div className="pt-2">
                <label htmlFor="booking-specialty" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Clinical Specialty / Department
                </label>
                <select
                  id="booking-specialty"
                  value={selectedSpecialtyId}
                  onChange={(e) => {
                    setSelectedSpecialtyId(e.target.value);
                    setSelectedDoctorId('first-available');
                  }}
                  className="w-full h-12 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors"
                >
                  {SPECIALTIES.map((spec) => (
                    <option key={spec.id} value={spec.id}>
                      {spec.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 2: Physician Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                  <span>Choose Medical Specialist</span>
                </h3>
                <span className="text-xs text-slate-500">Step 2 of 4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* First Available Specialist Option */}
                <button
                  type="button"
                  onClick={() => setSelectedDoctorId('first-available')}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                    selectedDoctorId === 'first-available'
                      ? 'border-teal-600 bg-teal-50/50 ring-2 ring-teal-500/10'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">First Available Specialist</h4>
                    <p className="text-[11px] text-slate-500">Earliest available appointment slot</p>
                  </div>
                </button>

                {/* Specific Physicians in this Specialty */}
                {specialtyDoctors.map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setSelectedDoctorId(doc.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                      selectedDoctorId === doc.id
                        ? 'border-teal-600 bg-teal-50/50 ring-2 ring-teal-500/10'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <img
                      src={doc.photo}
                      alt={doc.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{doc.name}</h4>
                      <p className="text-[11px] text-slate-500">{doc.role.split('&')[0]}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Date & Time Picker */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                  <span>Date & Preferred Time Slot</span>
                </h3>
                <span className="text-xs text-slate-500">Step 3 of 4</span>
              </div>

              {/* Horizontal Scrollable Date Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Date
                </label>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {availableDates.map((item) => {
                    const isSelected = selectedDateStr === item.dateStr;
                    return (
                      <button
                        key={item.dateStr}
                        type="button"
                        onClick={() => setSelectedDateStr(item.dateStr)}
                        className={`p-2.5 rounded-xl border flex flex-col items-center min-w-[70px] transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`text-[10px] uppercase font-semibold ${isSelected ? 'text-teal-200' : 'text-slate-400'}`}>
                          {item.dayName}
                        </span>
                        <span className="font-display text-lg font-bold tabular-nums">
                          {item.dayNumber}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Time Slot
                </label>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {[...morningSlots, ...afternoonSlots, ...eveningSlots].map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-teal-600 text-white border-teal-600 shadow-2xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <span className="tabular-nums">{slot}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Patient Visitor Information */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold">4</span>
                  <span>Visitor Details & Voucher Generation</span>
                </h3>
                <span className="text-xs text-slate-500">Step 4 of 4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="patient-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="patient-name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className={`w-full h-11 pl-10 pr-3 text-sm bg-slate-50 border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors ${
                        formErrors.name ? 'border-red-400' : 'border-slate-200'
                      }`}
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {formErrors.name && (
                    <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="patient-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Contact Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="patient-email"
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className={`w-full h-11 pl-10 pr-3 text-sm bg-slate-50 border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors ${
                        formErrors.email ? 'border-red-400' : 'border-slate-200'
                      }`}
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {formErrors.email && (
                    <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="reason-visit" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Purpose of Visit
                  </label>
                  <select
                    id="reason-visit"
                    value={reasonForVisit}
                    onChange={(e) => setReasonForVisit(e.target.value)}
                    className="w-full h-11 px-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors"
                  >
                    <option value="Comprehensive Health Evaluation">Comprehensive Health Evaluation</option>
                    <option value="Specialist Second Opinion">Specialist Second Opinion</option>
                    <option value="Symptom & Diagnostic Review">Symptom & Diagnostic Review</option>
                    <option value="Routine Preventative Screening">Routine Preventative Screening</option>
                    <option value="Post-Hospital Recovery Guidance">Post-Hospital Recovery Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Notification Channel Preference
                  </label>
                  <div className="flex items-center gap-2 pt-1">
                    {['Email', 'SMS Alert', 'WhatsApp'].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setContactMode(mode)}
                        className={`flex-1 py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                          contactMode === mode
                            ? 'bg-teal-50 border-teal-500 text-teal-800 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="visit-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Optional Comments / Accessibility Requests
                </label>
                <textarea
                  id="visit-notes"
                  rows={2}
                  placeholder="e.g. Wheelchair assistance required, prefer morning slot"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Privacy and demo disclosure note */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800">Local Demonstration Privacy Protocol:</span>{' '}
                  No protected health information (PHI) is transmitted or stored on remote databases. Submitting generates a local client-side confirmation voucher.
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-500 hidden sm:inline">
                Instant digital voucher pass generated on submission
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Generating Voucher...</span>
                  </>
                ) : (
                  <>
                    <CalendarIcon className="w-4 h-4" />
                    <span>Confirm & Generate Voucher</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
