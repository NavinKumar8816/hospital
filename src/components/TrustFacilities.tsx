import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  ShieldAlert, 
  Heart, 
  Sparkles, 
  Award, 
  Plus, 
  Stethoscope, 
  CheckCircle2, 
  Flame, 
  Syringe,
  FlaskConical,
  Monitor,
  Zap,
  Check,
  Clock,
  ArrowUpRight,
  TrendingUp,
  UserCheck
} from 'lucide-react';

interface FacilityItem {
  name: string;
  description: string;
  highlight: string;
  icon: React.ComponentType<any>;
  themeColor: string; // Tailwind class colors
  bgLight: string;
}

export default function TrustFacilities() {
  const [patients, setPatients] = useState(0);
  const [deliveries, setDeliveries] = useState(0);
  const [services, setServices] = useState(0);
  const [ayushman, setAyushman] = useState(0);

  // Smooth numeric roll-up upon component mount/view
  useEffect(() => {
    let start = 0;
    const patientsTarget = 5000;
    const deliveriesTarget = 1000;
    const servicesTarget = 15;
    const ayushmanTarget = 100;
    
    const duration = 1500; // ms
    const stepTime = 30; // ms
    const steps = duration / stepTime;
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setPatients(patientsTarget);
        setDeliveries(deliveriesTarget);
        setServices(servicesTarget);
        setAyushman(ayushmanTarget);
        clearInterval(interval);
      } else {
        const progress = currentStep / steps;
        // Ease out quadratic progress formula
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        setPatients(Math.round(easeOutQuad * patientsTarget));
        setDeliveries(Math.round(easeOutQuad * deliveriesTarget));
        setServices(Math.round(easeOutQuad * servicesTarget));
        setAyushman(Math.round(easeOutQuad * ayushmanTarget));
      }
    }, stepTime);
    
    return () => clearInterval(interval);
  }, []);

  const facilities: FacilityItem[] = [
    {
      name: 'Ambulance Service',
      description: 'Swift, fully-equipped 24/7 responder ambulances equipped with onboard oxygen beds and critical pre-hospital assistance.',
      highlight: '24×7 Active Fleet',
      icon: Flame,
      themeColor: 'text-rose-500 bg-rose-50 border-rose-100 group-hover:border-rose-300',
      bgLight: 'from-rose-50/20 via-white to-white'
    },
    {
      name: 'Digital X-Ray',
      description: 'High-frequency digital radiography for immediate structural imaging with strictly optimized low radiation exposure.',
      highlight: 'High-Frequency imaging',
      icon: Zap,
      themeColor: 'text-indigo-500 bg-indigo-50 border-indigo-100 group-hover:border-indigo-300',
      bgLight: 'from-indigo-50/20 via-white to-white'
    },
    {
      name: 'Pathology Lab',
      description: 'Fully automated diagnostic lab analyzing critical hematology, biochemistry, and pathological blood metrics rapidly.',
      highlight: 'Rapid Diagnostic Desk',
      icon: FlaskConical,
      themeColor: 'text-teal-500 bg-teal-50 border-teal-100 group-hover:border-teal-300',
      bgLight: 'from-teal-50/20 via-white to-white'
    },
    {
      name: 'Ultrasound',
      description: 'High-resolution Obstetrical, pelvic and Color Doppler evaluations safeguarding prenatal and maternal safety lines.',
      highlight: 'Color Doppler Suite',
      icon: Monitor,
      themeColor: 'text-cyan-500 bg-cyan-50 border-cyan-100 group-hover:border-cyan-300',
      bgLight: 'from-cyan-50/20 via-white to-white'
    },
    {
      name: 'Trauma Center',
      description: '24/7 dedicated emergency theater equipped for neural, abdominal, and major orthopedic golden-hour interventions.',
      highlight: 'Level-1 Emergency Desk',
      icon: ShieldAlert,
      themeColor: 'text-red-500 bg-red-50 border-red-100 group-hover:border-red-300',
      bgLight: 'from-red-50/20 via-white to-white'
    },
    {
      name: 'ICU',
      description: 'Motorized intensive therapy units with continuous nursing monitors, multiparameter telemetry, and emergency vents.',
      highlight: '12 Ventilator Beds',
      icon: Activity,
      themeColor: 'text-blue-600 bg-blue-50 border-blue-100 group-hover:border-blue-300',
      bgLight: 'from-blue-50/20 via-white to-white'
    },
    {
      name: 'NICU',
      description: 'Sterile baby incubators, pediatric monitors, and thermal therapy protective lanes for premature new-born protection.',
      highlight: 'Specialized Infant Care',
      icon: Sparkles,
      themeColor: 'text-pink-500 bg-pink-50 border-pink-100 group-hover:border-pink-300',
      bgLight: 'from-pink-50/20 via-white to-white'
    },
    {
      name: 'ICCU',
      description: 'Intensive Coronary Care unit utilizing modern defibrillator devices and automated telemetry for cardiac attacks.',
      highlight: 'Myocardial Stabilization',
      icon: Heart,
      themeColor: 'text-rose-600 bg-rose-50 border-rose-100 group-hover:border-rose-300',
      bgLight: 'from-rose-50/20 via-white to-white'
    },
    {
      name: 'Vaccination',
      description: 'Universal pediatric immunization schedules conducted under expert guidance to protect children against epidemics.',
      highlight: 'Immunization Center',
      icon: Syringe,
      themeColor: 'text-purple-500 bg-purple-50 border-purple-100 group-hover:border-purple-300',
      bgLight: 'from-purple-50/20 via-white to-white'
    },
    {
      name: 'Emergency Care',
      description: 'Swift triage system ensuring critical trauma entries receive immediate medical attention without upfront paperwork.',
      highlight: 'Golden Hour Priority',
      icon: Stethoscope,
      themeColor: 'text-violet-500 bg-violet-50 border-violet-100 group-hover:border-violet-300',
      bgLight: 'from-violet-50/20 via-white to-white'
    },
    {
      name: 'General Ward',
      description: 'Comfortable, highly hygienic, and spacious inpatient suites with active nursing support buttons and fresh lounges.',
      highlight: 'Sterile Safe Lounges',
      icon: CheckCircle2,
      themeColor: 'text-emerald-500 bg-emerald-50 border-emerald-100 group-hover:border-emerald-300',
      bgLight: 'from-emerald-50/20 via-white to-white'
    },
    {
      name: 'Advance OT',
      description: 'Highly sterile central operation suite equipped with shadowless clinical lamps and continuous anesthetic consoles.',
      highlight: 'Surgical Excellence Suite',
      icon: Award,
      themeColor: 'text-amber-500 bg-amber-50 border-amber-100 group-hover:border-amber-300',
      bgLight: 'from-amber-50/20 via-white to-white'
    }
  ];

  const trustBadges = [
    '✓ Ayushman Bharat Empanelled',
    '✓ Government Recognized Facility',
    '✓ Multi-Speciality Hospital',
    '✓ Trauma Center',
    '✓ Emergency Response Available'
  ];

  return (
    <section 
      id="facilities" 
      className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-white border-t border-slate-100/85 scroll-mt-[130px]"
    >
      {/* Decorative Fluid Vector Decors */}
      <div className="absolute top-[8%] left-[-10%] w-[450px] h-[450px] rounded-full bg-brand-pink/15 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-purple-light/45 filter blur-3xl pointer-events-none" />
      
      {/* Structural grid line map backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f00f_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f00f_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* ================= SECTION TITLE & INTRO ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple-light border border-brand-purple/15 text-xs text-brand-purple font-extrabold uppercase tracking-widest font-heading shadow-sm"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple animate-pulse" />
            <span>Credible Medical Care Destinations</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading leading-tight"
          >
            Trusted Healthcare Infrastructure
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-650 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light"
          >
            Providing advanced medical care, emergency support and specialized treatment under one roof. At Kudra, Mata Bhagyamani Devi Hospital ensures superior safety lanes for every critical case.
          </motion.p>
        </div>

        {/* ================= TRUST STATISTICS MOUNTED (COUNT-UP) ================= */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 mb-20">
          
          {/* Stat Item 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass-card p-5.5 rounded-2xl text-center flex flex-col justify-between border-white/60 shadow-lg shadow-indigo-150/5 relative"
          >
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-[#7c3aed] font-heading leading-tight">
                {patients ? `${patients}+` : '0'}
              </span>
              <p className="text-xs font-black text-slate-800 uppercase tracking-wide mt-2 font-heading">
                Patients Treated
              </p>
            </div>
            <span className="block text-[10px] text-slate-400 mt-2 font-medium">Safe clinical records</span>
          </motion.div>

          {/* Stat Item 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card p-5.5 rounded-2xl text-center flex flex-col justify-between border-white/60 shadow-lg shadow-indigo-150/5 relative"
          >
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-[#db2777] font-heading leading-tight">
                {deliveries ? `${deliveries}+` : '0'}
              </span>
              <p className="text-xs font-black text-slate-800 uppercase tracking-wide mt-2 font-heading">
                Successful Deliveries
              </p>
            </div>
            <span className="block text-[10px] text-slate-400 mt-2 font-medium">Empathetic pediatric care</span>
          </motion.div>

          {/* Stat Item 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="glass-card p-5.5 rounded-2xl text-center col-span-2 md:col-span-1 flex flex-col justify-between border-white/60 shadow-lg shadow-indigo-150/5 relative ring-2 ring-rose-100"
          >
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-rose-600 font-heading leading-tight flex items-center justify-center gap-1">
                24×7
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block" />
              </span>
              <p className="text-xs font-black text-slate-800 uppercase tracking-wide mt-2 font-heading">
                Emergency Care
              </p>
            </div>
            <span className="block text-[10px] text-rose-500 font-bold mt-2 font-mono">Trauma Desk Active</span>
          </motion.div>

          {/* Stat Item 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="glass-card p-5.5 rounded-2xl text-center flex flex-col justify-between border-white/60 shadow-lg shadow-indigo-150/5 relative"
          >
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-indigo-600 font-heading leading-tight">
                {services ? `${services}+` : '0'}
              </span>
              <p className="text-xs font-black text-slate-800 uppercase tracking-wide mt-2 font-heading">
                Medical Services
              </p>
            </div>
            <span className="block text-[10px] text-slate-400 mt-2 font-medium">Fully operational wards</span>
          </motion.div>

          {/* Stat Item 5 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="glass-card p-5.5 rounded-2xl text-center flex flex-col justify-between border-white/60 shadow-lg shadow-indigo-150/5 relative"
          >
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-emerald-600 font-heading leading-tight">
                {ayushman ? `${ayushman}%` : '0%'}
              </span>
              <p className="text-xs font-black text-slate-800 uppercase tracking-wide mt-2 font-heading">
                Ayushman PM-JAY
              </p>
            </div>
            <span className="block text-[10px] text-emerald-600 font-bold mt-2 font-medium">100% Cashless support</span>
          </motion.div>

        </div>

        {/* ================= PREMIUM REALS GRID (FACILITIES SHOWCASE) ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {facilities.map((fac, idx) => {
            const IconComponent = fac.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: idx * 0.05 } }
                }}
                whileHover={{ y: -6 }}
                className={`glass-card p-6.5 rounded-[2.25rem] border-white/60 shadow-lg text-left bg-gradient-to-br ${fac.bgLight} hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-slate-100 flex flex-col justify-between`}
              >
                {/* Floating graphic overlay */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-50/40 paths to-transparent rounded-bl-full pointer-events-none opacity-40 transition-transform duration-500 group-hover:scale-110" />

                <div>
                  {/* Icon Panel container with theme color properties */}
                  <div className="flex items-center justify-between mb-4.5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-108 group-hover:rotate-3 shadow-inner ${fac.themeColor}`}>
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    {/* Glowing highlight indicator */}
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-pink absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Header Highlight metric */}
                  <span className="block text-[9px] font-extrabold uppercase tracking-widest text-[#7c3aed] font-mono mb-1">
                    {fac.highlight}
                  </span>

                  {/* Title */}
                  <h3 className="text-md font-black text-slate-950 font-heading mb-2 leading-tight group-hover:text-medical-blue transition-colors duration-200">
                    {fac.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-[11.5px] leading-relaxed font-semibold">
                    {fac.description}
                  </p>
                </div>

                {/* Micro Action link */}
                <div className="mt-5 flex items-center justify-between text-[10px] font-extrabold text-[#7c3aed] uppercase tracking-wider">
                  <span>Immediate Availability</span>
                  <ArrowUpRight className="w-4 h-4 text-[#7c3aed] opacity-60 group-hover:translate-x-1.5 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= TRUST BADGES BAR ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex flex-wrap gap-4 items-center justify-center"
        >
          {trustBadges.map((badge, idx) => (
            <div 
              key={idx}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-white/80 border border-teal-200/60 shadow-sm text-xs font-bold text-teal-850 hover:bg-teal-50 transition-colors duration-300"
            >
              <Check className="w-4.5 h-4.5 text-teal-650 flex-shrink-0 stroke-[3]" />
              <span className="font-heading tracking-tight">{badge.replace('✓ ', '')}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
