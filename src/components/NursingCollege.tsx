import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  School, 
  ArrowRight, 
  HeartPulse, 
  X, 
  Calendar, 
  FileText, 
  CheckCircle, 
  Phone,
  Clock,
  Sparkles
} from 'lucide-react';

interface NursingCollegeProps {
  onNavigate: (sectionId: string) => void;
}

export default function NursingCollege({ onNavigate }: NursingCollegeProps) {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [applyForm, setApplyForm] = useState({
    name: '',
    phone: '',
    course: 'anm',
    qualification: '12th Pass',
    city: ''
  });
  const [applySuccess, setApplySuccess] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyForm.name || !applyForm.phone) return;
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setIsApplyOpen(false);
      setApplyForm({ name: '', phone: '', course: 'anm', qualification: '12th Pass', city: '' });
    }, 2500);
  };

  return (
    <section 
      id="nursing-college" 
      className="py-16 md:py-20 bg-gradient-to-b from-indigo-50/15 via-[#f5f3ff]/40 to-white relative overflow-hidden scroll-mt-[130px]"
    >
      {/* Visual background lights representing clinical/academic intersection */}
      <div className="absolute top-1/4 left-animate w-[450px] h-[450px] rounded-full bg-purple-100/40 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-55/30 mix-blend-multiply filter blur-3xl pointer-events-none" />

      {/* Decorative Blueprint mesh backings */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e10c_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e10c_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* ================= DUAL HUB BRAND CARD (GLASSMORPHISM) ================= */}
        <div className="relative rounded-[3rem] bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-12 lg:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Glass background spotlights */}
          <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-indigo-100/55 filter blur-2xl z-0 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-40 rounded-tl-full bg-purple-100/35 filter blur-3xl z-0 pointer-events-none" />

          {/* LEFT COLUMN: Educational Connection Graphics */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="relative rounded-[2rem] overflow-hidden p-2.5 bg-white border border-slate-200/50 shadow-xl max-w-lg mx-auto">
              
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                {/* Visual vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent z-15 pointer-events-none" />

                <img 
                  src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800" 
                  alt="Student Clinical Training Experience"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />

                {/* Overlaid Academic Seal badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="flex items-center gap-1.5 bg-[#4d3091] border border-purple-400 text-white text-[9px] font-black tracking-widest px-3 py-1.5 rounded-xl uppercase shadow-md leading-none">
                    <School className="w-3.5 h-3.5 text-pink-350" />
                    ACCREDITED WING
                  </span>
                </div>

                {/* Integrated Clinical Ecosystem overlay text */}
                <div className="absolute bottom-5 left-5 right-5 z-20 text-left">
                  <div className="bg-slate-950/75 backdrop-blur-md p-4 rounded-xl border border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5 text-pink-400 text-[10px] font-black uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                      <span>Attached Hospital Bedside Practice</span>
                    </div>
                    <p className="text-white text-xs font-semibold leading-tight mt-0.5">
                      1,500+ direct proctored medical rotation clinical hours inside 150-bed wards.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Copywriting text and Action controls */}
          <div className="w-full lg:w-1/2 text-left space-y-6 relative z-10">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-150 text-indigo-700 text-xs font-black uppercase tracking-widest font-heading shadow-xs">
                <GraduationCap className="w-4 h-4 text-[#702082]" />
                <span>Healthcare + Education Ecosystem</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading leading-tight">
                Mata Bhagyamani Devi Hospital & Ramdhari Singh Memorial Nursing College
              </h2>
            </div>

            <p className="text-slate-650 text-sm md:text-base leading-relaxed font-light">
              Students receive real clinical exposure, hospital-based practical learning and professional healthcare training through our integrated healthcare ecosystem. Learn diagnostics, triage routines, and major ICU/NICU operations under direct mentorship of active physicians.
            </p>

            {/* Bullet guarantees */}
            <div className="space-y-2.5">
              {[
                'Accredited community GNM & ANM certification pathways.',
                'Direct bedside clinical rotations inside 150-bed wards.',
                'Immediate career placement across top state medical hubs.'
              ].map((item, key) => (
                <div key={key} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* The Actions requested by Issue 8 */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4.5">
              
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('nursing-college')}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-[#0c4ea3] via-[#4d3091] to-[#702082] text-white font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-purple-200"
              >
                <span>Visit Nursing College</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsApplyOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-205 font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-4.5 h-4.5 text-[#702082]" />
                <span>Apply For Admission</span>
              </motion.button>

            </div>

          </div>

        </div>

      </div>

      {/* ================= PROFESSIONAL ADMISSION APPLICATION MODAL ================= */}
      <AnimatePresence>
        {isApplyOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-55 flex items-center justify-center p-4 cursor-normal"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-white rounded-[2rem] p-6 md:p-8 max-w-md w-full relative shadow-2xl border border-slate-100 text-left space-y-6"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsApplyOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-50 border border-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#702082] border border-purple-100 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 font-heading">
                    Admissions Application
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Ramdhari Singh Memorial Nursing College
                  </p>
                </div>
              </div>

              {applySuccess ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900">Application Submitted!</h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed font-semibold">
                    Our academic admissions registrar will call you on your phone within 2 hours with eligibility options.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest font-black text-slate-450 uppercase">Applicant Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter student's legal name"
                      value={applyForm.name}
                      onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                      className="w-full p-3.5 text-xs text-slate-900 placeholder:text-slate-400 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-purple-200 outline-none transition-all font-semibold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest font-black text-slate-450 uppercase">Mobile Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="10-digit primary phone number"
                      value={applyForm.phone}
                      onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                      className="w-full p-3.5 text-xs text-slate-900 placeholder:text-slate-400 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-purple-200 outline-none transition-all font-semibold font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest font-black text-slate-450 uppercase">Desired Course</label>
                      <select 
                        value={applyForm.course}
                        onChange={(e) => setApplyForm({ ...applyForm, course: e.target.value })}
                        className="w-full p-3.5 text-xs text-slate-750 border border-slate-202 rounded-xl bg-slate-50 focus:bg-white outline-none font-bold"
                      >
                        <option value="anm">ANM Diploma</option>
                        <option value="paramedical">Paramedical</option>
                        <option value="gnm">GNM Diploma (Upcoming)</option>
                        <option value="bsc">B.Sc Nursing (Upcoming)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest font-black text-slate-450 uppercase">Qualification</label>
                      <select 
                        value={applyForm.qualification}
                        onChange={(e) => setApplyForm({ ...applyForm, qualification: e.target.value })}
                        className="w-full p-3.5 text-xs text-slate-750 border border-slate-202 rounded-xl bg-slate-50 focus:bg-white outline-none font-bold"
                      >
                        <option value="12th Pass">12th Pass</option>
                        <option value="10th Pass">10th Pass</option>
                        <option value="Graduate">Graduate</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest font-black text-slate-450 uppercase">City / Town Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter city (e.g. Kudra, Mohania)"
                      value={applyForm.city}
                      onChange={(e) => setApplyForm({ ...applyForm, city: e.target.value })}
                      className="w-full p-3.5 text-xs text-slate-900 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none font-semibold"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#4d3091] to-[#702082] text-white font-extrabold text-[10px] tracking-widest uppercase shadow-md cursor-pointer hover:shadow-lg hover:shadow-purple-100 transition-all text-center"
                  >
                    Submit Admissions Form
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
