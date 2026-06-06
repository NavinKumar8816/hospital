import React from 'react';
import { HeartPulse, Award, Shield, Phone, MapPin, Mail, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const linksSchema = [
    {
      title: 'Our Medical Services',
      items: [
        { label: 'Advanced Trauma Hub', id: 'trauma' },
        { label: 'OPD Clinical Specialities', id: 'services' },
        { label: 'Diagnostics & Ultrasound', id: 'services' },
        { label: 'Maternity & Neonatal ICU', id: 'services' }
      ]
    },
    {
      title: 'Ayushman PM-JAY Scheme',
      items: [
        { label: 'Cashless Eligibility Checker', id: 'ayushman' },
        { label: 'Required Documents list', id: 'ayushman' },
        { label: 'Arogya Mitra Desk timing', id: 'ayushman' },
        { label: 'Bihar Health Dept Empanelment', id: 'ayushman' }
      ]
    },
    {
      title: 'Consultations & Contact',
      items: [
        { label: 'Book Primary Appointment', id: 'appointment' },
        { label: 'Emergency Hotline: 24h', id: 'contact' },
        { label: 'Our Sakari Mod Location', id: 'contact' },
        { label: 'Medical Board Members', id: 'doctors' }
      ]
    }
  ];

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-8 border-t border-slate-900 relative overflow-hidden text-left">
      
      {/* Absolute ambient lights */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-brand-purple/10 filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-85 h-85 rounded-full bg-rose-500/5 filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top brand identity column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          <div className="lg:col-span-4 space-y-6">
            
            {/* Logo and brand name */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-medical-blue to-brand-purple shadow-md">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-widest uppercase font-heading text-slate-100">
                  Mata Bhagyamani Devi
                </span>
                <span className="text-[10px] font-bold text-brand-pink tracking-wider uppercase mt-0.5">
                  Hospital & Trauma Center
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Serving our community as the premier multi-speciality medical institution in Kudra, Kaimur district (Bihar). Fully empaneled under Ayushman Bharat to deliver world-class intensive care, maternity programs, and emergency surgeries.
            </p>

            {/* Accreditation details */}
            <div className="flex flex-col gap-2 pt-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-pink-dark" />
                <span>Govt of Bihar Registered Hospital: #0741</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-400" />
                <span>PM-JAY Cashless Eligible Facility</span>
              </div>
            </div>

          </div>

          {/* Links collections */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {linksSchema.map((collection, colIdx) => (
              <div key={colIdx} className="space-y-4">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-200">
                  {collection.title}
                </h4>
                <ul className="space-y-2.5">
                  {collection.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <button
                        onClick={() => onNavigate(item.id)}
                        className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                      >
                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-brand-pink group-hover:translate-x-0.5 transition-all" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom address lines & copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              Sakari Mod, Kudra, Kaimur, Bihar, PIN: 821108
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              General Line: +91 94708 26108
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              jhunu1201@gmail.com
            </span>
          </div>

          <p className="text-center md:text-right">
            © {currentYear} Mata Bhagyamani Devi Hospital. All Rights Reserved. Speciality Trauma and Surgical ICU Desk.
          </p>

        </div>

      </div>
    </footer>
  );
}
