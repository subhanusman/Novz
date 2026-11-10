import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, ShieldAlert } from 'lucide-react';
import { FAQS } from '../data/clinicData';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Appointments', 'Consultations', 'Billing & Insurance', 'Clinic Policies'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
            Questions & Answers
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Frequently asked questions about our clinical care and demonstration.
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Find immediate answers regarding appointment scheduling, virtual visits, and demonstration parameters.
          </p>
        </div>

        {/* Search Bar & Categories */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search topics (e.g. appointment, vouchers, telemedicine, insurance)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-2xl text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 shadow-2xs"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white border-teal-700'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <span className={`p-1 rounded-full text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-teal-600' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150"
                    >
                      <p>{faq.answer}</p>
                      <span className="inline-block mt-3 text-[11px] font-semibold text-teal-700">
                        Category: {faq.category}
                      </span>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
              <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">No matching questions found</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for general keywords like "appointment", "doctor", or "voucher".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-3 px-3 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Emergency Disclaimer Notice */}
        <div className="mt-10 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Medical Emergency Notice:</span> This website is a demonstration prototype for NEXTR Digital Solutions & Services and does not provide active emergency medical monitoring. In the event of a medical emergency, call 911 or your local emergency line immediately.
          </div>
        </div>
      </div>
    </section>
  );
};
