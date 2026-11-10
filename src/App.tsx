/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClinicIntro } from './components/ClinicIntro';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { PhysiciansSection } from './components/PhysiciansSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AppointmentBooking } from './components/AppointmentBooking';
import { PatientExperience } from './components/PatientExperience';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [preselectedSpecialtyId, setPreselectedSpecialtyId] = useState<string | null>(null);
  const [preselectedDoctorId, setPreselectedDoctorId] = useState<string | null>(null);
  const [selectedDoctorModalId, setSelectedDoctorModalId] = useState<string | null>(null);

  const scrollToBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSpecialties = () => {
    const specEl = document.getElementById('specialties');
    if (specEl) {
      specEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSpecialtyForBooking = (specialtyId: string) => {
    setPreselectedSpecialtyId(specialtyId);
    setPreselectedDoctorId(null);
    scrollToBooking();
  };

  const handleSelectDoctorForBooking = (doctorId: string) => {
    setPreselectedDoctorId(doctorId);
    scrollToBooking();
  };

  const handleOpenBooking = () => {
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        <Hero
          onSelectSpecialtyForBooking={handleSelectSpecialtyForBooking}
          onExploreSpecialties={scrollToSpecialties}
        />

        <ClinicIntro />

        <SpecialtiesSection
          onSelectSpecialtyForBooking={handleSelectSpecialtyForBooking}
          onViewDoctorProfile={(doctorId) => setSelectedDoctorModalId(doctorId)}
        />

        <PhysiciansSection
          onSelectDoctorForBooking={handleSelectDoctorForBooking}
          selectedDoctorModalId={selectedDoctorModalId}
          onCloseDoctorModal={() => setSelectedDoctorModalId(null)}
          onOpenDoctorModal={(doctorId) => setSelectedDoctorModalId(doctorId)}
        />

        <FacilitiesSection />

        <AppointmentBooking
          initialSpecialtyId={preselectedSpecialtyId}
          initialDoctorId={preselectedDoctorId}
          onClearPreselect={() => {
            setPreselectedSpecialtyId(null);
            setPreselectedDoctorId(null);
          }}
        />

        <PatientExperience />

        <FAQSection />

        <ContactSection />
      </main>

      <Footer />

      {/* Permanently visible Floating WhatsApp button */}
      <FloatingWhatsApp />
    </div>
  );
}
