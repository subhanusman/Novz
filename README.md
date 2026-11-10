# NEXTR Apex Health — Multi-Specialty Clinic Website Demo

A multi-specialty outpatient healthcare clinic demonstration website built for **NEXTR Digital Solutions & Services**.

## Overview

**NEXTR Apex Health** showcases modern, patient-first healthcare web design and interactive digital scheduling. The project is a **100% static frontend application** with zero backend, database, or external tracking dependencies, designed for high-performance deployment on modern edge platforms.

### Key Capabilities

- **Interactive Clinical Specialties**: Explore 6 distinct clinical divisions (Cardiology, Neurology, Orthopedics, Pediatrics, Dermatology, and Internal Medicine) with key focus conditions and in-house diagnostic procedures.
- **Physician Faculty Directory**: Fictional specialist profiles with filterable specialties, clinical bios, education credentials, philosophy of care, and direct appointment booking triggers.
- **State-of-the-Art Facilities Gallery**: Architectural photography of reception pavilions, private acoustic consultation pods, and advanced 3T MRI imaging suites with interactive full-resolution lightbox viewing.
- **Interactive Appointment Booking & Local Voucher Pass**:
  - Choice between in-person campus visits and encrypted telehealth video consultations.
  - Department and physician selector.
  - Interactive 14-day calendar picker and time slot selection (morning, afternoon, evening).
  - Client-side form validation without sensitive protected health information (PHI).
  - Immediate local consultation voucher generation featuring an official-style pass, unique Reference ID (`APX-2026-XXXX`), simulated digital check-in QR code, print view, and `.ics` calendar sync download.
- **Patient Experience & Outcomes**: 4-stage patient journey roadmap and quantified patient case narratives.
- **Searchable FAQ Accordion**: Instant text search and category filters addressing common clinic policies and appointment details.
- **Campus Location & Inquiries**: Operating hours schedule, transit & parking guide, email inquiries, and direct WhatsApp concierge action.

---

## Brand & Contact Parameters

- **Brand**: NEXTR Apex Health
- **Company**: NEXTR Digital Solutions & Services
- **Email**: nextrsolutions@gmail.com
- **WhatsApp**: [Visit NEXTR](https://wa.me/923239943441) (Visible action text: `Visit`)
- **Footer Credit**: `Developed by NEXTR Digital Solutions & Services`

*Note: All physician profiles, testimonials, and vouchers are simulated demonstration personas. No real medical advice or care is administered.*

---

## Technical Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";`)
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & Outfit (Google Fonts)
- **Architecture**: Static Single Page Application (SPA), zero server-side requirements

---

## Production Build & Static Deployment

This project compiles to pure static HTML, CSS, JavaScript, and optimized media assets in the `dist/` directory, compatible with any high-performance static hosting environment.

### Production Build

```bash
# 1. Install dependencies
npm install

# 2. Compile optimized production bundle
npm run build
```

The output files will be generated in the `dist` folder:
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node runtime**: 20+

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server on port 3000
npm run dev

# Compile production build
npm run build

# Preview production build locally
npm run preview
```

---

## License & Credits

Developed by **NEXTR Digital Solutions & Services**.
