import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  Stethoscope, 
  Baby, 
  Heart, 
  Scissors, 
  Bone, 
  Smile, 
  Activity, 
  Scan, 
  Monitor, 
  FlaskConical, 
  Truck, 
  Sparkles, 
  HeartPulse, 
  Syringe, 
  Award, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  X,
  HelpCircle
} from 'lucide-react';

// Custom interface matching our premium department objects
interface DepartmentItem {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<any>;
  shortDesc: string;
  services: string[];
  theme: {
    color: string;
    iconBg: string;
    badge: string;
    glow: string;
    borderGlow: string;
  };
}

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  // The 17 specific departments explicitly requested by the user
  const DEPARTMENTS: DepartmentItem[] = [
    {
      id: 'trauma',
      name: 'Trauma Center',
      category: 'Critical Response',
      icon: ShieldAlert,
      shortDesc: '24/7 high-integrity trauma unit geared for immediate life stabilization during golden hours.',
      services: ['Accident Care', 'Emergency Surgery', 'Critical Care Support', 'Polytrauma Unit'],
      theme: {
        color: 'text-red-500',
        iconBg: 'bg-red-50 text-red-650 border border-red-100',
        badge: 'bg-red-50 text-red-700 border-red-105',
        glow: 'hover:shadow-red-500/15',
        borderGlow: 'group-hover:border-red-300'
      }
    },
    {
      id: 'gen-med',
      name: 'General Medicine',
      category: 'Clinical OPD',
      icon: Stethoscope,
      shortDesc: 'Comprehensive primary health reviews, chronic lifestyle management, and routine consults.',
      services: ['Chronic Illness Management', 'Geriatric Consultation', 'Infectious Diseases', 'Executive Checkups'],
      theme: {
        color: 'text-indigo-600',
        iconBg: 'bg-indigo-50 text-indigo-650 border border-indigo-100',
        badge: 'bg-indigo-50 text-indigo-700 border-indigo-105',
        glow: 'hover:shadow-indigo-500/15',
        borderGlow: 'group-hover:border-indigo-300'
      }
    },
    {
      id: 'child',
      name: 'Child Specialist',
      category: 'Pediatric Care',
      icon: Baby,
      shortDesc: 'Expert infant nutrition checklists, neonatal assessments, and friendly pediatrics counsel.',
      services: ['Newborn Care', 'Vaccination Coaching', 'Pediatric Consultations', 'Growth Assessments'],
      theme: {
        color: 'text-pink-600',
        iconBg: 'bg-pink-50 text-pink-600 border border-pink-100',
        badge: 'bg-pink-50 text-pink-700 border-pink-105',
        glow: 'hover:shadow-pink-500/15',
        borderGlow: 'group-hover:border-pink-300'
      }
    },
    {
      id: 'women',
      name: 'Women & Maternity Care',
      category: 'Maternity OPD',
      icon: Heart,
      shortDesc: 'Sterilized labor environments, postnatal screening maps, and painless baby birth suites.',
      services: ['Pregnancy Care', 'Normal Delivery Suite', 'C-Section Operative Support', 'Gynecology Scans'],
      theme: {
        color: 'text-rose-600',
        iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
        badge: 'bg-rose-50 text-rose-700 border-rose-105',
        glow: 'hover:shadow-rose-500/15',
        borderGlow: 'group-hover:border-rose-300'
      }
    },
    {
      id: 'surgery',
      name: 'General Surgery',
      category: 'Surgical Services',
      icon: Scissors,
      shortDesc: 'Advanced laparoscopic interventions, abdominal tissue resets, and modern sterile procedures.',
      services: ['Laparoscopic Surgery', 'Hernia & Appendix', 'Gastrointestinal Surgery', 'Post-Op Monitoring'],
      theme: {
        color: 'text-violet-600',
        iconBg: 'bg-violet-50 text-violet-650 border border-violet-100',
        badge: 'bg-violet-50 text-violet-700 border-violet-105',
        glow: 'hover:shadow-violet-500/15',
        borderGlow: 'group-hover:border-violet-300'
      }
    },
    {
      id: 'ortho',
      name: 'Orthopedic Department',
      category: 'Surgical Services',
      icon: Bone,
      shortDesc: 'Complete skeletal fracture reductions, arthritic care suites, and joint rehabilitation pathways.',
      services: ['Fracture Splinting & Plasters', 'Arthritis Evaluation', 'Spinal Trauma Stabilizations', 'Advanced Physiotherapy'],
      theme: {
        color: 'text-amber-600',
        iconBg: 'bg-amber-50 text-amber-600 border border-amber-100',
        badge: 'bg-amber-50 text-amber-700 border-amber-105',
        glow: 'hover:shadow-amber-500/15',
        borderGlow: 'group-hover:border-amber-300'
      }
    },
    {
      id: 'dental',
      name: 'Dental Care',
      category: 'Specialized Care',
      icon: Smile,
      shortDesc: 'Specialized root canal treatment paths, trauma extractions, and pediatric aesthetics.',
      services: ['Root Canal Treatment', 'Painless Tooth Extracts', 'Bridges & Crown Repair', 'Dental Diagnostics'],
      theme: {
        color: 'text-emerald-600',
        iconBg: 'bg-emerald-50 text-emerald-650 border border-emerald-100',
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-105',
        glow: 'hover:shadow-emerald-500/15',
        borderGlow: 'group-hover:border-emerald-300'
      }
    },
    {
      id: 'diabetology',
      name: 'Diabetology',
      category: 'Specialized Care',
      icon: Activity,
      shortDesc: 'Continuous glucose charting programs, diabetic foot care, and customized nutrient maps.',
      services: ['Continuous Glucose Tracker', 'HbA1c Profile Titrations', 'Diabetic Neuropathy Scans', 'Lifestyle Coaching'],
      theme: {
        color: 'text-blue-600',
        iconBg: 'bg-blue-50 text-blue-650 border border-blue-100',
        badge: 'bg-blue-50 text-blue-700 border-blue-105',
        glow: 'hover:shadow-blue-500/15',
        borderGlow: 'group-hover:border-blue-300'
      }
    },
    {
      id: 'xray',
      name: 'Digital X-Ray',
      category: 'Diagnostics',
      icon: Scan,
      shortDesc: 'High-frequency digital skeletal imagery systems providing crystal reports with low exposures.',
      services: ['Chest & Joint Radiograms', 'Contrast Examinations', 'Low Radiation Screenings', 'Immediate Digitization'],
      theme: {
        color: 'text-blue-700',
        iconBg: 'bg-[#eef2ff] text-indigo-705 border border-indigo-100',
        badge: 'bg-[#eef2ff] text-indigo-705 border-indigo-105',
        glow: 'hover:shadow-indigo-500/15',
        borderGlow: 'group-hover:border-indigo-300'
      }
    },
    {
      id: 'ultrasound',
      name: 'Ultrasound',
      category: 'Diagnostics',
      icon: Monitor,
      shortDesc: 'High-integrity Color Doppler evaluations and obstetrical prenatal maternal scans.',
      services: ['Color Doppler Studies', 'Prenatal Sound Scanning', 'Abdominal Sonographies', 'Pelvic Organ Assessments'],
      theme: {
        color: 'text-cyan-600',
        iconBg: 'bg-cyan-50 text-cyan-650 border border-cyan-100',
        badge: 'bg-cyan-50 text-cyan-700 border-cyan-105',
        glow: 'hover:shadow-cyan-500/15',
        borderGlow: 'group-hover:border-cyan-300'
      }
    },
    {
      id: 'pathology',
      name: 'Pathology',
      category: 'Diagnostics',
      icon: FlaskConical,
      shortDesc: 'Biochemistry panels, hematology analyses, and immediate pathological testing kits.',
      services: ['Complete Hematology', 'Biochemistry Controls', 'Immunoassays', 'Urinary Cytology Desk'],
      theme: {
        color: 'text-teal-600',
        iconBg: 'bg-teal-50 text-teal-650 border border-teal-100',
        badge: 'bg-teal-50 text-teal-700 border-teal-105',
        glow: 'hover:shadow-teal-500/15',
        borderGlow: 'group-hover:border-teal-300'
      }
    },
    {
      id: 'emergency-ops',
      name: 'Emergency Services',
      category: 'Critical Response',
      icon: Truck,
      shortDesc: 'Active 24/7 emergency response fleet with specialized medical responders on call.',
      services: ['24/7 Ambulance Fleet', 'Oxygen System Beds', 'Paramedic Interventions', 'Critical Transfers'],
      theme: {
        color: 'text-rose-600',
        iconBg: 'bg-rose-50 text-rose-650 border border-rose-100',
        badge: 'bg-rose-50 text-rose-700 border-rose-105',
        glow: 'hover:shadow-rose-500/15',
        borderGlow: 'group-hover:border-rose-300'
      }
    },
    {
      id: 'icu',
      name: 'ICU',
      category: 'Critical Response',
      icon: Activity,
      shortDesc: 'Continuous multi-channel telemetry monitoring and advanced surgical ventilation support beds.',
      services: ['Continuous Patient Telemetry', 'Advanced Ventilation Units', 'Immediate Inotropic Controls', 'Dedicated Nurse Support'],
      theme: {
        color: 'text-sky-700',
        iconBg: 'bg-sky-50 text-sky-655 border border-sky-100',
        badge: 'bg-sky-50 text-sky-700 border-sky-105',
        glow: 'hover:shadow-sky-500/15',
        borderGlow: 'group-hover:border-sky-300'
      }
    },
    {
      id: 'nicu',
      name: 'NICU',
      category: 'Pediatric Care',
      icon: Sparkles,
      shortDesc: 'Clean, level-II warm incubator systems for early protective support of preemies.',
      services: ['Premature Protection Beds', 'Infant Phototherapy', 'Neonatal Critical Vents', 'Thermal Ink Warmth'],
      theme: {
        color: 'text-fuchsia-600',
        iconBg: 'bg-fuchsia-50 text-fuchsia-650 border border-fuchsia-100',
        badge: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-105',
        glow: 'hover:shadow-fuchsia-500/15',
        borderGlow: 'group-hover:border-fuchsia-300'
      }
    },
    {
      id: 'iccu',
      name: 'ICCU',
      category: 'Critical Response',
      icon: HeartPulse,
      shortDesc: 'Intensive Coronary Unit utilizing advanced systems for stabilization of heart attacks.',
      services: ['Myocardial Protection', 'Continuous Heart Telemetry', 'Defibrillator Fleet', 'Post-Cardiac Attack Care'],
      theme: {
        color: 'text-red-500',
        iconBg: 'bg-red-50 text-red-650 border border-red-100',
        badge: 'bg-red-50 text-red-700 border-red-100',
        glow: 'hover:shadow-red-500/15',
        borderGlow: 'group-hover:border-red-300'
      }
    },
    {
      id: 'vaccination-center',
      name: 'Vaccination Center',
      category: 'Clinical OPD',
      icon: Syringe,
      shortDesc: 'Accredited newborn immunological checks, pediatric safety schedules, and booster doses.',
      services: ['Pediatric Vaccinations', 'Hepatitis & BCG Doses', 'Polio Immunizations', 'Adult Protective Boosters'],
      theme: {
        color: 'text-purple-600',
        iconBg: 'bg-purple-50 text-purple-650 border border-purple-100',
        badge: 'bg-purple-50 text-purple-700 border-purple-105',
        glow: 'hover:shadow-purple-500/15',
        borderGlow: 'group-hover:border-purple-300'
      }
    },
    {
      id: 'adv-ot',
      name: 'Advance Operation Theatre',
      category: 'Surgical Services',
      icon: Award,
      shortDesc: 'Advanced shadowless surgical lighting systems and isolated HEPA air ventilation lines.',
      services: ['Laparoscopic Camera Towers', 'Isolated HEPA Ventilation', 'Shadowless Halogen Lights', 'Precision Anesthesia Desk'],
      theme: {
        color: 'text-emerald-700',
        iconBg: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-105',
        glow: 'hover:shadow-emerald-500/15',
        borderGlow: 'group-hover:border-emerald-300'
      }
    }
  ];

  // Premium filtering categories
  const filterCategories = [
    { label: 'All Departments', value: 'all' },
    { label: 'Critical Care', value: 'Critical Response' },
    { label: 'Surgical Units', value: 'Surgical Services' },
    { label: 'Clinical OPD', value: 'Clinical OPD' },
    { label: 'Diagnostics & Labs', value: 'Diagnostics' },
    { label: 'Specialized Medicine', value: 'Specialized Care' }
  ];

  // Filtering + Searching logic
  const filteredDepartments = DEPARTMENTS.filter(dept => {
    const matchesCategory = activeCategory === 'all' || dept.category === activeCategory;
    const matchesQuery = 
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.services.some(srv => srv.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesQuery;
  });

  // Action helper to scroll seamlessly to the appointment portal
  const handleBookService = () => {
    const element = document.getElementById('appointment');
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="services" 
      className="py-16 md:py-20 bg-gradient-to-b from-white via-indigo-50/20 to-purple-50/15 relative overflow-hidden scroll-mt-[130px]"
    >
      
      {/* Decorative Brand Spotlights */}
      <div className="absolute top-1/4 left-[-8%] w-[500px] h-[500px] rounded-full bg-brand-pink-light/50 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-8%] w-[550px] h-[550px] rounded-full bg-brand-purple-light/40 filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* ================= SECTION TITLE ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pink-light border border-brand-pink-dark/15 text-xs text-brand-purple font-extrabold uppercase tracking-widest font-heading shadow-sm"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple" />
            <span>Expert Multi-Speciality Clinic & Trauma</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading leading-tight"
          >
            Medical Departments & Specialized Care
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-650 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light"
          >
            Comprehensive healthcare services for women, children, families and emergency patients under one roof. Fitted with ultra-modern lifesaving consoles at Kudra, Bihar.
          </motion.p>
        </div>

        {/* ================= FILTERING & PLUSH CONTROLS ================= */}
        <div className="flex flex-col xl:flex-row gap-5 items-center justify-between mb-12 bg-white/70 backdrop-blur-xl p-4.5 rounded-[1.75rem] border border-slate-200/50 shadow-md">
          
          {/* Custom Tabs Slider row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0 w-full xl:w-auto scrollbar-none">
            {filterCategories.map((cat, index) => {
              const worksActive = activeCategory === cat.value;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveCategory(cat.value);
                    setActiveCardId(null);
                  }}
                  className={`px-4.5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    worksActive 
                      ? 'bg-gradient-to-r from-medical-blue to-brand-purple text-white shadow-md shadow-brand-purple/10' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-350 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Elegant search filter with icon integration */}
          <div className="relative w-full xl:w-96">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4 text-brand-purple" />
            </div>
            <input
              type="text"
              placeholder="Search departments, ICU parameters, diagnostic tests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:border-brand-purple hover:border-slate-350 shadow-inner-sm transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* ================= DEPARTMENTS RESPONSIVE GRID (4 cols desktop, 2 cols tablet, 1 col mobile) ================= */}
        <AnimatePresence mode="popLayout">
          {filteredDepartments.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-24 bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-dashed border-slate-200 p-8"
            >
              <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-base font-black text-slate-800">No departments match your query</h3>
              <p className="text-slate-450 text-xs mt-1 max-w-md mx-auto font-light">
                Please search for generic terms such as "pregnancy", "blood checkup", "ICU", "X-Ray" or try clearing your active category tags.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-6 px-5 py-2.5 rounded-xl bg-slate-905 hover:bg-slate-800 text-white font-extrabold text-[10px] uppercase tracking-wider transition-all cursor-pointer"
              >
                Reset Search Filters
              </button>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="flex lg:grid lg:grid-cols-4 gap-6 items-stretch overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pb-6 lg:pb-0 scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none"
            >
              {filteredDepartments.map((dept, idx) => {
                const IconComponent = dept.icon;
                const isExplicitMobileFlipped = activeCardId === dept.id;

                return (
                  <motion.div
                    key={dept.id}
                    layout="position"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.4) }}
                    className={`group relative rounded-[2.25rem] bg-white/80 backdrop-blur-md border border-slate-200/55 shadow-lg ${dept.theme.glow} transition-all duration-500 overflow-hidden text-left flex flex-col justify-between p-6 cursor-pointer h-[320px] flex-shrink-0 w-[270px] xs:w-[290px] sm:w-[320px] lg:w-full snap-center`}
                    onClick={() => {
                      // Support mobile click toggles for services flip state
                      setActiveCardId(isExplicitMobileFlipped ? null : dept.id);
                    }}
                  >
                    
                    {/* Top slim medical decorative strip */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-blue to-brand-purple opacity-40 group-hover:opacity-100 transition-opacity" />

                    {/* Standard/Default Card Face layout */}
                    <div className="flex flex-col justify-between h-full relative z-10">
                      
                      <div>
                        {/* Header and tag representation */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner ${dept.theme.iconBg} ${dept.theme.borderGlow}`}>
                            <IconComponent className="w-5.5 h-5.5 stroke-[2] animate-pulse" />
                          </div>
                          <span className={`text-[8.5px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border ${dept.theme.badge}`}>
                            {dept.category}
                          </span>
                        </div>

                        {/* Title of Department */}
                        <h3 className="text-[15px] font-black tracking-tight text-slate-950 font-heading mb-2 group-hover:text-brand-purple transition-colors leading-snug">
                          {dept.name}
                        </h3>

                        {/* Short informative introductory deck */}
                        <p className="text-slate-500 text-[11px] leading-relaxed font-semibold line-clamp-4">
                          {dept.shortDesc}
                        </p>
                      </div>

                      {/* Bottom action bar */}
                      <div className="pt-4 border-t border-slate-100/80 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-450 group-hover:text-brand-purple transition-colors">
                        <span className="flex items-center gap-1">
                          <Plus className="w-3.5 h-3.5 animate-spin-slow text-brand-purple" />
                          Available Services
                        </span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-slate-400 group-hover:text-brand-purple" />
                      </div>

                    </div>

                    {/* ================= DYNAMIC SLIDING FROSTED OVERLAY FOR AVAILABLE SERVICES ================= */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br from-[#060b1e]/98 via-indigo-950/98 to-[#0b1535]/98 text-white p-6 z-20 flex flex-col justify-between transition-all duration-500 ease-in-out transform ${
                        isExplicitMobileFlipped ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                      }`}
                    >
                      {/* Overlay Top: Header & Close Tag for mobile usability */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 font-heading">
                            Active Services
                          </span>
                        </div>
                        {/* Close sign explicitly visual for phone taps */}
                        <span className="text-[8px] font-bold bg-white/10 px-2 py-0.5 rounded text-slate-300 md:hidden">
                          Tap Close
                        </span>
                      </div>

                      {/* Diagnostic list items with green checkmarks */}
                      <div className="flex-1 py-4 flex flex-col justify-center gap-2.5">
                        <h4 className="text-[12.5px] font-bold text-slate-200 tracking-tight leading-none mb-1 font-heading">
                          {dept.name}
                        </h4>
                        
                        <ul className="space-y-2">
                          {dept.services.map((srv, sIdx) => (
                            <li 
                              key={sIdx} 
                              className="text-xs text-slate-300 flex items-start gap-2 font-medium"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className="leading-tight">{srv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom row Booking Action directly scrolls to appointments */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Avoid triggering flip toggles on the card container
                          handleBookService();
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-[10px] text-white font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md group/btn cursor-pointer"
                      >
                        <span>Book This Department</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= GOVT SCHEME CALLOUT (AYUSHMAN COOPERATIVE) ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 p-8 rounded-[2.5rem] bg-gradient-to-r from-teal-50/70 via-teal-100/10 to-teal-50/75 border border-teal-200/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm text-left max-w-5xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center shadow-lg transform rotate-3 flex-shrink-0">
              <Award className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h4 className="text-slate-900 font-extrabold text-base font-heading">
                Looking for PM-JAY Cashless Family Treatment?
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed max-w-xl font-medium">
                Mata Bhagyamani Devi Hospital supports 100% cashless treatment of multi-speciality procedures for Ayushman cardholders under Central & State directives.
              </p>
            </div>
          </div>

          <button 
            onClick={handleBookService}
            className="px-6 py-3 rounded-2xl bg-[#0d9488] hover:bg-[#0f766e] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer flex-shrink-0"
          >
            <span>Verify Card Elegibility</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
