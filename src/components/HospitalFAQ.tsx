import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Activity, Heart, Shield, Calendar, PhoneCall } from 'lucide-react';

interface FAQItem {
  id: string;
  q: string;
  a: string;
  category: string;
  icon: React.ReactNode;
}

export default function HospitalFAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'emergency',
      category: 'Emergency Services',
      icon: <PhoneCall className="w-4 h-4 text-rose-500" />,
      q: 'Are emergency and trauma care services available 24/7?',
      a: 'Yes, absolutely. Mata Bhagyamani Devi Hospital features a fully designated Level-1 24×7 Trauma Wing & Emergency Department in Kudra, Kaimur. Our clinical emergency specialists, surgical teams, and life support staff remain on high alert 365 days a year to administer critical care with zero administrative delays.'
    },
    {
      id: 'ayushman',
      category: 'Ayushman Bharat (PM-JAY)',
      icon: <Shield className="w-4 h-4 text-emerald-500" />,
      q: 'Does the hospital provide cashless treatments under Ayushman Bharat Yojana?',
      a: 'We are an officially empanelled hospital under the Ayushman Bharat PM-JAY scheme in Bihar. Qualified cardholders can receive 100% cashless diagnostics, general ward admission, major and minor surgeries, intensive treatments, and pre/post-operative medicines. Our in-house Arogya Mitra assistance desk in Kudra is always ready to guide you through biometric authorizations.'
    },
    {
      id: 'appointment',
      category: 'Appointments',
      icon: <Calendar className="w-4 h-4 text-blue-500" />,
      q: 'How can I schedule an appointment with consulting physicians?',
      a: 'Patients can schedule consults swiftly via our online token/appointment desk on this website, call our central reception desk at +91 7250853234 or +91 9110996491, or simply drop in. We assign patient consultation slots quickly to ensure minimal wait times in our premium waiting lounge.'
    },
    {
      id: 'ambulance',
      category: 'Cardiac Ambulance',
      icon: <Activity className="w-4 h-4 text-amber-500" />,
      q: 'Does the hospital provide emergency ambulance services across Kaimur and nearby regions?',
      a: 'Yes, we operate a 24-hour cardiac and life-support ambulance dispatch network. We provide rapid pickup coverage across Kudra, Bhabua, Mohania, Sasaram, Chenari, Kochas, Dehri-on-Sone, and nearby rural clinical quadrants. To coordinate a critical emergency pickup, please call +91 7250853234.'
    },
    {
      id: 'icu',
      category: 'ICU & NICU Wards',
      icon: <Heart className="w-4 h-4 text-pink-500" />,
      q: 'What types of critical care ICU and NICU units are available?',
      a: 'Mata Bhagyamani Devi Hospital houses a modern, sterile Intensive Care Unit (ICU) and Neonatal ICU (NICU) built with high-grade multi-channel patient monitors, pediatric warmers, reliable surgical ventilators, and direct bedside oxygenation lines. Wards are supervised around-the-clock by specialized clinical nurses and consulting cardiologists/pediatricians.'
    }
  ];

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section 
      id="hospital-faq" 
      className="py-16 md:py-20 bg-gradient-to-b from-white via-[#faf9ff] to-white relative overflow-hidden scroll-mt-[130px]"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[10%] right-[-10%] w-72 h-72 rounded-full bg-purple-50/70 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-10%] w-72 h-72 rounded-full bg-teal-50/50 filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 w-full text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-black uppercase tracking-widest font-heading shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
            <span>Patient Knowledge Base</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-heading leading-tight">
            Frequently Asked Questions (FAQs)
          </h2>
          
          <p className="text-sm text-slate-500 font-medium">
            Find immediate answers regarding clinical services, patient consultations, insurance coverage, and 24/7 care support near Kudra, Kaimur & Sasaram regions.
          </p>
        </div>

        {/* FAQs Interactive List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:border-slate-205 transition-all duration-300"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100/50">
                      {faq.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9.5px] font-black uppercase tracking-widest text-[#6d28d9] mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-905 leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                  </div>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <ChevronDown 
                      className={`w-4 h-4 text-slate-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-slate-50 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
