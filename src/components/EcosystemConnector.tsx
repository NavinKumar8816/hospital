import {
  ArrowRight,
  Building2,
  Check,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

interface EcosystemConnectorProps {
  onNavigateView?: (view: 'hospital' | 'college') => void;
}

export default function EcosystemConnector({ onNavigateView }: EcosystemConnectorProps) {
  
  // Custom router state transition using window events if props are omitted
  const handleNavigateToCollege = () => {
    if (onNavigateView) {
      onNavigateView('college');
    } else {
      const url = new URL(window.location.href);
      url.searchParams.set('view', 'college');
      url.hash = '';
      window.history.pushState({}, '', url.toString());
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToHospital = () => {
    if (onNavigateView) {
      onNavigateView('hospital');
    } else {
      const url = new URL(window.location.href);
      url.searchParams.delete('view');
      window.history.pushState({}, '', url.toString());
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Connection nodes for the animated bridge
  const bridgeSteps = [
    { label: 'Hospital', desc: 'Active multi-speciality environment', num: '01' },
    { label: 'Clinical Training', desc: 'Direct exposure in wards & ICU', num: '02' },
    { label: 'Real Patient Exposure', desc: 'Learn under senior consultants', num: '03' },
    { label: 'Professional Learning', desc: 'Frictionless theory & logic sync', num: '04' },
    { label: 'Healthcare Career', desc: '100% employment readiness outcome', num: '05' }
  ];

  return (
    <section 
      id="hospital-training" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#fafbfc] via-indigo-50/20 to-white text-left scroll-mt-24"
    >
      {/* Decorative Blueprint background mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f040_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f040_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
      
      {/* Visual background ambient blobs */}
      <div className="absolute top-[10%] left-[-15%] w-[500px] h-[500px] rounded-full bg-blue-100/30 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[500px] h-[500px] rounded-full bg-pink-100/30 filter blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-20">
        
        {/* ================= SECTION TITLE & HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-pink-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest font-heading shadow-xs select-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
            <span>Healthcare + Education Ecosystem</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight"
          >
            Where Quality Healthcare <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c4ea3] to-[#702082]">
              Meets Professional Education
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base leading-relaxed font-light max-w-xl mx-auto"
          >
            A high-fidelity academic partnership that embeds certified clinical trainees inside a busy Multi-Speciality Hospital to forge confident nursing experts.
          </motion.p>
        </div>

        {/* ================= MODERN SPLIT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">
          
          {/* LEFT SIDE: Premium Hospital Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="relative rounded-[2.5rem] bg-white border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex-1 flex flex-col justify-between overflow-hidden group">
              {/* Dynamic top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-[#0c4ea3] z-10" />
              
              {/* Image & Title Header */}
              <div className="space-y-6">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800"
                    alt="Mata Bhagyamani Devi Hospital Exterior"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-md bg-blue-600 border border-blue-400/30 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      ACTIVE CLINICAL ENVIRONMENT
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-slate-900">
                      Mata Bhagyamani Devi Hospital
                    </h3>
                  </div>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">
                    A prominent 100-bed multi-speciality tertiary healthcare venue equipped with intensive medical units, expert clinical departments, and general beds.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  {[
                    'Multi-Speciality Hospital',
                    'Trauma Center',
                    'Emergency Care',
                    'ICU / ICCU / NICU',
                    'Digital X-Ray',
                    'Ultrasound',
                    'Ayushman Bharat (Free Cashless Treatment)',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-slate-700 text-xs font-medium leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action indicators inside card */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-600 font-mono">
                <span>PREMIUM MEDICAL HUBS</span>
                <span className="text-slate-400">ESTD 2021</span>
              </div>
            </div>
          </motion.div>

          {/* INDEX 2: CENTER - PREMIUM CONNECTOR BRIDGE */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center py-6 lg:py-0 relative">
            
            {/* Visual background connector beam - Only on desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 -translate-y-1/2 -z-10 hidden lg:block opacity-35" />
            
            <div className="w-full h-full flex flex-col justify-between items-center bg-transparent relative space-y-6">
              
              {/* Premium sub-text header */}
              <div className="text-center px-4 space-y-1 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping inline-block mr-2" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-700 block font-mono">
                  LIVE CONNECTION FLOW
                </span>
                <p className="text-xs text-slate-500 italic max-w-xs mx-auto">
                  Pathways of raw expert knowledge
                </p>
              </div>

              {/* Animated Connection Stack */}
              <div className="w-full max-w-xs space-y-3.5 relative">
                
                {/* SVG Connecting Flow Line - Animating pulses */}
                <div className="absolute left-[34px] top-4 bottom-4 w-1 bg-slate-100 rounded-full overflow-hidden z-0">
                  <motion.div 
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
                    className="w-full h-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                  />
                </div>

                {bridgeSteps.map((step, idx) => {
                  const colors = idx === 0 
                    ? 'border-blue-200 text-blue-700 bg-blue-50' 
                    : idx === 4 
                      ? 'border-pink-200 text-pink-700 bg-pink-50' 
                      : 'border-slate-200 text-indigo-600 bg-indigo-50/40';

                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center gap-4 text-left p-2.5 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-xs group cursor-default relative z-10 hover:border-indigo-150 hover:bg-white"
                    >
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 font-mono text-xs font-black shadow-inner ${colors}`}>
                        {step.num}
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="text-xs font-black text-slate-900 group-hover:text-indigo-950 transition-colors uppercase tracking-tight">
                          {step.label}
                        </h4>
                        <p className="text-[10.5px] text-slate-550 leading-tight">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Large Display typography tag */}
              <div className="text-center pt-2 max-w-[240px]">
                <h4 className="text-sm font-black font-heading text-indigo-950 tracking-tight leading-snug">
                  Learning Through Real Healthcare Experience
                </h4>
                <p className="text-[10.5px] text-slate-400 mt-1 font-mono font-medium">
                  Direct Clinician Oversight
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Premium College Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="relative rounded-[2.5rem] bg-white border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex-1 flex flex-col justify-between overflow-hidden group">
              {/* Dynamic top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-600 to-[#702082] z-10" />
              
              {/* Image & Title Header */}
              <div className="space-y-6">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                    alt="RSM Nursing College Trainees"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-md bg-pink-600 border border-pink-400/30 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      PREMIER ACADEMIC TRUST
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-pink-50 text-pink-700 border border-pink-100">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-slate-900">
                      Ramdhari Singh Memorial College
                    </h3>
                  </div>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">
                    Our state-approved educational wing offering nursing diplomas & certs alongside robust clinical practice frameworks under regional medical council regulations.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  {[
                    'ANM Nursing Programs',
                    'Paramedical Programs (Lab & Plaster Tech)',
                    'Practical Hand-on Training Wards',
                    'Regular Clinical Rotating Exposures',
                    'Dedicated Career Development Cells',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-pink-50 text-pink-600 border border-pink-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-slate-700 text-xs font-medium leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action indicators inside card */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-pink-600 font-mono">
                <span>INC COMPLIANCE GUARANTEED</span>
                <span className="text-slate-400">ESTD 2024</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ================= MAIN HIGHLIGHT CENTER CARD ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative max-w-5xl mx-auto rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl border border-indigo-200 bg-gradient-to-tr from-[#020617] via-[#1e1b4b] to-[#111827] text-white"
        >
          {/* Ambient center globe shadow */}
          <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-black text-rose-450 uppercase tracking-widest font-mono bg-rose-500/10 px-2.5 py-1 rounded-md">
                Institutional Association
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight leading-tight uppercase">
                Hospital Attached Learning Environment
              </h3>
              <p className="text-pink-300 text-xs sm:text-sm font-bold">
                Ramdhari Singh Memorial Nursing College <span className="text-slate-350 font-normal">in association with</span> Mata Bhagyamani Devi Hospital
              </p>
              <p className="text-[#c7d2fe] text-xs sm:text-sm font-light leading-relaxed">
                Students gain practical knowledge through intense bedside exposure inside the fully active pathology, obstetric wards, and clinical surgical blocks of our attached 100-bed tertiary hospital setup.
              </p>
            </div>

            {/* Right side check marks */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3.5">
              <h4 className="text-[10px] font-black uppercase text-indigo-300 tracking-wider">
                ✓ Hospital Clinical Association
              </h4>
              
              <div className="space-y-2.5">
                {[
                  'Real Clinical Exposure',
                  'Practical Patient Interaction',
                  'Hospital-Based Learning',
                  'Experienced Healthcare Mentors',
                  'Career-Oriented Education'
                ].map((badge, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-550/20 text-emerald-400 border border-emerald-500/35 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-100 uppercase tracking-wide">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= CTA BUTTONS MODULE ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
          <button
            onClick={handleNavigateToHospital}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-101 shadow-lg shadow-blue-900/10 active:scale-98 cursor-pointer h-12"
          >
            <Building2 className="w-4 h-4 text-blue-200" />
            <span>Explore Hospital</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleNavigateToCollege}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-slate-205 hover:bg-slate-50 text-slate-800 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer h-12 hover:border-slate-350"
          >
            <GraduationCap className="w-4 h-4 text-pink-600" />
            <span>Explore Nursing College</span>
          </button>
        </div>

      </div>
    </section>
  );
}
