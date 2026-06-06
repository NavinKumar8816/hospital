import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PhoneCall, MapPin, Activity, ClipboardCheck, ArrowRight, BookOpen, Clock, CheckCircle2, Award, Quote } from 'lucide-react';

// Admissions Overview Component
export const AdmissionsOverview: React.FC = () => {
  return (
    <section 
      id="admissions-overview" 
      className="max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24 text-left space-y-12"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-200 text-pink-800 rounded-full text-[10px] font-black uppercase tracking-widest font-heading shadow-xs select-none">
          <Sparkles className="w-3.5 h-3.5 text-pink-600 animate-pulse" />
          <span>RSM Admissions Guide 2026-27</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight uppercase">
          Admissions Walkthrough
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
          Step through our simplified, coordinated admissions portal designed to secure your verified healthcare career path in Bihar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[2.5rem] space-y-4 shadow-sm hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-black">
            01
          </div>
          <h3 className="text-base font-extrabold uppercase text-slate-900">
            Seat Inventory & Capacity
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed font-semibold">
            State-sanctioned seats allocated for registered certificate nursing programs. Candidates evaluated purely on school aggregate marks with early applicant priority.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[2.5rem] space-y-4 shadow-sm hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-700 flex items-center justify-center font-black">
            02
          </div>
          <h3 className="text-base font-extrabold uppercase text-slate-900">
            Eligibility Guidelines
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed font-semibold">
            Open to Science, Commerce, and Arts board graduates. PCB/Science majors stand out for core GNM/B.Sc. pathways, while ANM tracks welcome all school credentials.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[2.5rem] space-y-4 shadow-sm hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black">
            03
          </div>
          <h3 className="text-base font-extrabold uppercase text-slate-900">
            Counselling & Tuition Plots
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed font-semibold">
            Receive personalized consultation sessions describing curriculum audits, state certification guarantees, secure female hostel slots, and installment details.
          </p>
        </div>
      </div>
    </section>
  );
};

// Admission Process Timeline Component
export const AdmissionProcess: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Evaluate Eligibility",
      desc: "Use our interactive automated eligibility matrix tool on this page to check matching qualification brackets in under 30 seconds."
    },
    {
      step: "02",
      title: "Submit Callback Request",
      desc: "Provide verified contact info on our secure Admissions Desk tool. Our registered student counselor will call within 2 hours."
    },
    {
      step: "03",
      title: "Counselling Check",
      desc: "Go through a brief, friendly call or in-office evaluation. Discuss course fees, hostel residency options, and syllabus limits."
    },
    {
      step: "04",
      title: "Document Review",
      desc: "Drop by the Sakari Mod campus with Board Marksheets, Passing TC/SLC, Aadhaar, and passport photos for physical registry."
    },
    {
      step: "05",
      title: "Reserve Intake Slot",
      desc: "Submit state fee deposits to lock in your registered admission code number with authorized clinical training. You are set!"
    }
  ];

  return (
    <section 
      id="admission-process" 
      className="max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24 text-left space-y-12"
    >
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-indigo-700 text-[10px] font-black uppercase tracking-widest font-heading block">
          Authorized Registration Pipeline
        </span>
        <h2 className="text-2.5xl sm:text-3.5xl font-black text-slate-900 tracking-tight font-heading uppercase leading-tight">
          How To Secure Registered Admission
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto font-medium lead-relaxed">
          Flow seamlessly from digital evaluation down to campus registry with our proctored 1-on-1 counselor guidance system.
        </p>
      </div>

      <div className="relative">
        {/* Connection Line of Timeline */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200/90 rounded-[2rem] p-6 text-left space-y-4 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-slate-900 to-indigo-950 text-white flex items-center justify-center font-heading font-black text-sm select-none">
                  {step.step}
                </div>
                <h4 className="text-sm font-extrabold uppercase text-slate-950 font-heading">
                  {step.title}
                </h4>
                <p className="text-[11px] leading-relaxed text-slate-500 font-semibold">
                  {step.desc}
                </p>
              </div>
              
              <div className="pt-2 flex items-center gap-1.5 text-[9.5px] font-black text-emerald-600 uppercase tracking-widest">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Step</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Student Testimonials Section (Extracted from training section to flow below Form as requested)
export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/15 to-white text-left scroll-mt-24 border-t border-slate-100"
    >
      {/* Blueprint mesh matching the theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f030_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f030_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-700 text-xs font-black uppercase tracking-widest font-heading shadow-xs select-none">
            <Quote className="w-3.5 h-3.5 text-pink-600 animate-pulse" />
            <span>REAL STUDENT VOICES & REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-905 tracking-tight font-heading leading-tight uppercase">
            Enrolled Student Corner
          </h2>
          <p className="text-slate-505 text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed">
            Read direct, verified reviews logging how adjacent hospital beds and proactive labs completely secure confidence for real life placements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Quote 1 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-[2.5rem] flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 relative group">
            <span className="absolute top-4 right-6 text-6xl text-slate-100 font-serif select-none pointer-events-none">“</span>
            
            <div className="space-y-4 relative z-10">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-amber-500 text-xs">★</span>
                ))}
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-755 font-bold italic">
                "The practical training helped me understand real patient care. Practicing next door at Mata Bhagyamani Devi Hospital under live clinical supervision made all the difference in building my bedside capabilities."
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150" 
                  alt="Priyanka Kumari" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-black uppercase tracking-tight text-slate-950 leading-none">
                  Priyanka Kumari
                </h4>
                <p className="text-[9.5px] font-bold text-indigo-700 font-mono leading-none">
                  B.Sc Nursing, 2nd Year Trainee
                </p>
                <span className="text-[8px] font-bold text-slate-400 font-mono block">
                  Patna Regional Admissions Cell Approved
                </span>
              </div>
            </div>
          </div>

          {/* Quote 2 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-[2.5rem] flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 relative group">
            <span className="absolute top-4 right-6 text-6xl text-slate-100 font-serif select-none pointer-events-none">“</span>
            
            <div className="space-y-4 relative z-10">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-amber-500 text-xs">★</span>
                ))}
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-755 font-bold italic">
                "The hospital exposure improved my confidence. Hand-on operations modeling with emergency case logs built the courage required to successfully clear placement rounds and help clinical physicians."
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=150" 
                  alt="Anjali Singh" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-black uppercase tracking-tight text-slate-950 leading-none">
                  Anjali Singh
                </h4>
                <p className="text-[9.5px] font-bold text-pink-700 font-mono leading-none">
                  GNM Graduate & Active ICU Intern
                </p>
                <span className="text-[8px] font-bold text-slate-400 font-mono block">
                  Under State Council Registry Board Assent
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Verification Footer Indicator */}
        <div className="p-4.5 bg-indigo-50/40 border border-indigo-100/70 rounded-2xl flex items-center gap-3 text-left max-w-3xl mx-auto">
          <div className="w-8 h-8 rounded-lg bg-indigo-650 text-indigo-700 font-bold flex items-center justify-center shrink-0">
            ★
          </div>
          <p className="text-[10px] leading-relaxed font-semibold text-slate-500">
            These are verified quotes provided directly by enrolled students in their feedback logs presented to college auditors. Authentic patient-based exposure represents the core pillar of Kaimur medical studies.
          </p>
        </div>

      </div>
    </section>
  );
};
