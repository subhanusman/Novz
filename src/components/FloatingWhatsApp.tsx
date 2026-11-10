import React from 'react';
import { CLINIC_CONTACT } from '../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Quick WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 print:hidden"
    >
      <a
        href={CLINIC_CONTACT.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit NEXTR on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
      >
        {/* Subtle breathing pulse ring */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        {/* Recognizable WhatsApp SVG Icon */}
        <svg
          className="w-6 h-6 fill-current shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.777.978-.953 1.18-.175.201-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.678-1.631-.929-2.233-.244-.587-.492-.507-.678-.517-.175-.009-.376-.009-.577-.009-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.08 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.718.311 1.279.497 1.716.636.721.23 1.377.197 1.896.12.578-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.175-1.429-.075-.126-.276-.201-.577-.351zM12.042 21.848h-.007a9.78 9.78 0 0 1-4.992-1.375l-.358-.213-3.712.973.99-3.619-.233-.371a9.783 9.783 0 0 1-1.503-5.214c0-5.412 4.407-9.817 9.824-9.817 2.624 0 5.09 1.023 6.946 2.88 1.856 1.858 2.877 4.326 2.876 6.953 0 5.414-4.408 9.822-9.824 9.822zm8.337-18.175A11.72 11.72 0 0 0 12.042 0C5.402 0 .004 5.397 0 12.038a11.69 11.69 0 0 0 1.79 6.223L0 24l5.892-1.545a11.72 11.72 0 0 0 6.143 1.717h.005c6.638 0 12.038-5.399 12.042-12.042 0-3.217-1.253-6.242-3.528-8.517z" />
        </svg>

        {/* Visible text strictly 'Visit' on sm and up, compact on small mobile */}
        <span className="hidden sm:inline font-semibold text-sm tracking-wide">
          {CLINIC_CONTACT.whatsAppCtaText}
        </span>
      </a>
    </aside>
  );
};
