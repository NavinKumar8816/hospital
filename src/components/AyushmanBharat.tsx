import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CreditCard, 
  ShieldCheck, 
  HeartPulse, 
  FileText, 
  Ambulance, 
  HeartHandshake, 
  Award, 
  ChevronRight, 
  Phone, 
  CheckCircle, 
  X, 
  HelpCircle, 
  Calendar,
  Lock,
  Sparkles,
  Info
} from 'lucide-react';

export default function AyushmanBharat() {
  const [currentQuizStep, setCurrentQuizStep] = useState(1);
  const [coverageLimit, setCoverageLimit] = useState(0);

  // Eligibility quiz answers state
  const [quizAnswers, setQuizAnswers] = useState({
    goldenCard: '',
    rationCard: '',
    familyIncome: ''
  });

  // Animated numbers count-up for ₹5,00,000 limit
  useEffect(() => {
    let start = 0;
    const end = 500000;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(end / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCoverageLimit(end);
        clearInterval(timer);
      } else {
        setCoverageLimit(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const handleQuizResponse = (key: string, value: string) => {
    setQuizAnswers(prev => ({ ...prev, [key]: value }));
    setCurrentQuizStep(prev => prev + 1);
  };

  const handleResetQuiz = () => {
    setCurrentQuizStep(1);
    setQuizAnswers({
      goldenCard: '',
      rationCard: '',
      familyIncome: ''
    });
  };

  // Helper to scroll smoothly to standard hospital sections
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
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

  // The 6 premium benefit cards explicitly asked for
  const benefits = [
    {
      icon: CreditCard,
      title: 'Cashless Treatment',
      desc: '100% free surgery, implant systems, room fees, pathology labs, and consultations with zero out-of-pocket stress.',
      tag: 'DIRECT PACKAGES'
    },
    {
      icon: ShieldCheck,
      title: 'Hospital Admission Support',
      desc: 'Dedicated on-site Arogya Mitra helpdesk coordinates biometric authorization, ticket setup, and document curation.',
      tag: 'FAST BEDS'
    },
    {
      icon: HeartPulse,
      title: 'Specialist Consultations',
      desc: 'Complete access to senior surgeons, child specialist nutritionists, and high-risk maternity care with no extra OPD fees.',
      tag: 'SENIOR OPD'
    },
    {
      icon: FileText,
      title: 'Treatment Coverage',
      desc: 'Comprehensive coverage stretching from pre-admission checks up to 15 days of post-discharge medications & support.',
      tag: 'MEDICINES INCLUDED'
    },
    {
      icon: Ambulance,
      title: 'Emergency Support',
      desc: 'Priority polytrauma stabilization, ICU ventilator support bays, and intensive diagnostic radiology scans fully covers.',
      tag: 'ON-CALL 24/7'
    },
    {
      icon: HeartHandshake,
      title: 'Affordable Healthcare',
      desc: 'Eliminates household medical debt for low-income families and Priority Cardholders in Bihar.',
      tag: 'SAFETY PROMISE'
    }
  ];

  // The 4-step modern eligibility process
  const timelineSteps = [
    {
      step: '01',
      title: 'Verify Ayushman Card',
      desc: 'Present your golden card or PHH ration card at our ground floor Arogya Mitra desk.',
      icon: CreditCard,
      badge: 'Golden Card Check'
    },
    {
      step: '02',
      title: 'Hospital Registration',
      desc: 'Receive immediate Biometric PM-JAY authorization and admission documentation.',
      icon: ShieldCheck,
      badge: 'Quick Biometrics'
    },
    {
      step: '03',
      title: 'Medical Assessment',
      desc: 'Our specialist panels examine and schedule precise laparoscopic, pediatric, or maternal surgeries.',
      icon: HeartPulse,
      badge: 'Consult Specialist'
    },
    {
      step: '04',
      title: 'Cashless Treatment',
      desc: 'Receive top-tier medical care, medicines, ICU beds, and operations with 100% cashless dispatch.',
      icon: Award,
      badge: 'Zero Billing Discharge'
    }
  ];

  return (
    <section 
      id="ayushman" 
      className="py-16 md:py-20 bg-gradient-to-b from-[#fdf4f5] via-white to-indigo-50/20 relative overflow-hidden scroll-mt-[130px]"
    >
      {/* Premium ambient decorative spotlights reflecting comfort and trust */}
      <div className="absolute top-[12%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-pink-light/60 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#e0e7ff]/60 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-16">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f8] border border-pink-200 text-[#db2777] text-xs font-black uppercase tracking-widest font-heading shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-pink-600 animate-pulse" />
            <span>Official Government Empaneled Hospital</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading leading-tight" id="ayushman-title">
            Ayushman Bharat & Cashless Treatment
          </h2>

          <p className="text-slate-650 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Quality healthcare should be accessible to everyone. Mata Bhagyamani Devi Hospital proudly supports Ayushman Bharat and provides eligible patients with cashless treatment benefits.
          </p>
        </div>

        {/* ================= SPLIT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Large Illustration / Family Healthcare Support Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing background border overlay */}
            <div className="absolute inset-x-0 -top-4 -bottom-4 bg-gradient-to-tr from-brand-pink-light via-brand-purple-light to-medical-blue rounded-[2.5rem] opacity-45 filter blur-2xl animate-pulse pointer-events-none" />

            {/* Main Rounded Portrait Container */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-[2.5rem] overflow-hidden p-3 bg-white/75 backdrop-blur-xl border border-white border-b-2 shadow-2xl z-10"
            >
              <div className="relative rounded-[2rem] overflow-hidden h-[380px] md:h-[430px] lg:h-[460px]">
                {/* Frosted vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent z-15 pointer-events-none" />
                
                {/* Premium Indian Family / Medical Support Photo */}
                <img 
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800" 
                  alt="Ayushman Bharat Cashless Treatment and Biometric Support at Mata Bhagyamani Devi Hospital, Kudra Bihar"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-103"
                />

                {/* Overlaid Gold Scheme Badge */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="flex items-center gap-1 bg-[#1a365d] border border-blue-400 text-white text-[9px] font-black tracking-widest px-3 py-1.5 rounded-xl uppercase shadow-md backdrop-blur">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    PM-JAY ACTIVE DESK
                  </span>
                </div>

                {/* Floating Govt Scheme Verified Pill */}
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <div className="bg-slate-950/75 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-left space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Empaneled Cashless Hospital</span>
                    </div>
                    <p className="text-white text-xs font-semibold leading-tight mt-0.5">
                      100% Zero-Cash admission for family surgical packages.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* FEATURED HIGHLIGHT CARD (Up to ₹5 Lakh Health Coverage with live counter) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 lg:-right-8 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6 rounded-3xl border border-white/10 shadow-2xl z-20 text-left max-w-[240px] space-y-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 shadow-inner">
                  <CreditCard className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">
                  Maximum Guarantee
                </span>
              </div>

              <div className="space-y-0.5">
                <p className="text-[10px] font-semibold text-slate-350">Approved Coverage Limit</p>
                <div className="text-2xl font-black text-white font-heading tracking-tight leading-none text-gradient bg-gradient-to-r from-blue-400 to-indigo-300">
                  ₹{coverageLimit.toLocaleString('en-IN')}
                </div>
                <p className="text-[8.5px] font-mono text-emerald-400 font-bold uppercase mt-1">
                  ★ Per Family / Every Year
                </p>
              </div>

              <div className="border-t border-white/5 pt-2 text-[9.5px] leading-relaxed text-slate-300 font-light">
                Ayushman Bharat Beneficiaries <strong>Welcome</strong> inside Sakari Mod, Kudra.
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Benefit Cards Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-left space-y-2">
              <span className="text-[#db2777] font-black text-xs uppercase tracking-widest font-heading block">
                Exclusive Package Benefits
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Comprehensive Treatment Protection
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200/50 hover:border-[#db2777]/20 hover:scale-101 transition-all duration-300 text-left flex flex-col justify-between h-[180px] shadow-sm hover:shadow-lg relative overflow-hidden group"
                  >
                    {/* Background glow strip on cards */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-indigo-500 opacity-20 group-hover:opacity-100 transition-opacity" />

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 text-[#db2777] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform animate-pulse">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[8px] font-black tracking-widest text-slate-450 uppercase border border-slate-100 px-2 py-0.5 rounded-md">
                          {benefit.tag}
                        </span>
                      </div>

                      <h4 className="text-sm font-black text-slate-900 font-heading group-hover:text-pink-600 transition-colors">
                        {benefit.title}
                      </h4>

                      <p className="text-slate-500 text-[11px] leading-relaxed font-semibold line-clamp-3">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ================= ISSUE 4: INLINE ELIGIBILITY CHECKER ================= */}
        <div className="max-w-3xl mx-auto pt-4 relative" id="eligibility-checker">
          
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-pink-light/30 via-indigo-50/20 to-pink-50/30 rounded-[3rem] filter blur-xl pointer-events-none" />

          {/* Inline Diagnostic Card Frame */}
          <div className="relative rounded-[2.5rem] bg-white border border-slate-200 p-6 md:p-8 shadow-xl text-left space-y-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-150 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-pink-50 border border-pink-100 text-[#db2777] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-md sm:text-lg font-black text-slate-900 font-heading">
                    Verify Your Ayushman Card Eligibility
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Official Instant PM-JAY Cashless intake Calculator
                  </p>
                </div>
              </div>

              {/* Step indicator pill */}
              <div className="text-right shrink-0">
                <span className="inline-block bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl font-mono text-[10px] font-black uppercase tracking-wider">
                  {currentQuizStep <= 3 ? `Question ${currentQuizStep} of 3` : 'Review Diagnostic'}
                </span>
              </div>
            </div>

            {/* Quiz Body */}
            <div className="min-h-[190px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {currentQuizStep === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-150 text-indigo-950 text-xs font-semibold leading-relaxed flex gap-2.5">
                      <Info className="w-4.5 h-4.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>The PM-JAY scheme provides completely free health cards (Golden Cards) to families in designated low-income or priority bands.</span>
                    </div>

                    <p className="text-slate-900 text-sm md:text-base font-black font-heading leading-snug">
                      Do you already own an active physical Ayushman Card (Golden Card) issued by the government?
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button 
                        onClick={() => handleQuizResponse('goldenCard', 'yes')}
                        className="py-3.5 px-5 rounded-2xl border-2 border-pink-200 hover:border-pink-300 bg-pink-50/20 text-[#cb2d6f] font-black text-xs uppercase cursor-pointer text-center hover:bg-pink-50/45 transition-all"
                      >
                        Yes, I have my Golden Card
                      </button>
                      <button 
                        onClick={() => handleQuizResponse('goldenCard', 'no')}
                        className="py-3.5 px-5 rounded-2xl border border-slate-205 text-slate-650 hover:bg-slate-50 font-bold text-xs uppercase cursor-pointer text-center transition-all bg-white"
                      >
                        No, I do not have it
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentQuizStep === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-slate-900 text-sm md:text-base font-black font-heading leading-snug">
                      Do you hold a Priority Householder (PHH) or Antyodaya Ration Card issued under Bihar State NFSA?
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button 
                        onClick={() => handleQuizResponse('rationCard', 'yes')}
                        className="py-3.5 px-5 rounded-2xl border-2 border-pink-200 hover:border-pink-300 bg-pink-50/20 text-[#cb2d6f] font-black text-xs uppercase cursor-pointer text-center hover:bg-pink-50/45 transition-all"
                      >
                        Yes, we own a Ration Card
                      </button>
                      <button 
                        onClick={() => handleQuizResponse('rationCard', 'no')}
                        className="py-3.5 px-5 rounded-2xl border border-slate-205 text-slate-650 hover:bg-slate-50 font-bold text-xs uppercase cursor-pointer text-center transition-all bg-white"
                      >
                        No ration card
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentQuizStep === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-slate-900 text-sm md:text-base font-black font-heading leading-snug">
                      What is the estimated total annual income of your household statement?
                    </p>

                    <div className="flex flex-col gap-2.5 pt-2">
                      <button 
                        onClick={() => handleQuizResponse('familyIncome', 'low')}
                        className="w-full py-4 px-5 rounded-2xl border border-slate-200 text-left hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all bg-white"
                      >
                        🟢 Less than ₹1,80,000 Per Year (Lower Economic Families)
                      </button>
                      <button 
                        onClick={() => handleQuizResponse('familyIncome', 'high')}
                        className="w-full py-4 px-5 rounded-2xl border border-slate-200 text-left hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all bg-white"
                      >
                        🔴 More than ₹1,80,000 Per Year
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentQuizStep > 3 && (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-5 text-left animate-fade-in"
                  >
                    {quizAnswers.goldenCard === 'yes' || quizAnswers.rationCard === 'yes' || quizAnswers.familyIncome === 'low' ? (
                      <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-250 space-y-2">
                        <p className="text-emerald-900 text-sm sm:text-base font-black font-heading flex items-center gap-1.5">
                          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span>Highly Likely Eligible Cashless!</span>
                        </p>
                        <p className="text-[12px] text-emerald-800 leading-relaxed font-semibold">
                          Excellent news! Based on your parameters, your household is qualified to obtain 100% cashless treatment at Mata Bhagyamani Devi Hospital under the PM-JAY central guidelines.
                        </p>
                      </div>
                    ) : (
                      <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
                        <p className="text-indigo-900 text-sm sm:text-base font-black font-heading flex items-center gap-1.5">
                          <Info className="w-5 h-5 text-indigo-600 shrink-0" />
                          <span>Advisory Manual Screening Needed</span>
                        </p>
                        <p className="text-[12px] text-indigo-805 leading-relaxed font-semibold">
                          While you might not have a direct card on-hand, you may still qualify through Bihar state pool allocations. Our Arogya Mitra desk will screen your state documents manually at Kudra for immediate confirmation.
                        </p>
                      </div>
                    )}

                    <div className="text-[11px] text-slate-500 font-semibold space-y-2 bg-slate-50 border border-slate-100 p-4 rounded-2xl">
                      <p className="text-slate-800 font-extrabold uppercase tracking-widest text-[9.5px]">
                        Required Intake Documents for Walk-ins:
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600">
                        <li>Ration Card (PHH / Antyodaya) or Ayushman official letter copy.</li>
                        <li>Aadhaar Card of the admitted patient.</li>
                        <li>Aadhaar-linked mobile phone (for OTP authorization).</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions Footer */}
            <div className="pt-4 border-t border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button 
                onClick={handleResetQuiz}
                className="w-full sm:w-auto px-4.5 py-3 rounded-xl border border-slate-205 text-slate-600 font-bold text-[10.5px] uppercase cursor-pointer hover:bg-slate-50 transition-all bg-white"
              >
                Reset Diagnostic
              </button>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                <a 
                  href="tel:7250853234"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#cb2d6f] to-indigo-650 text-white font-extrabold text-[10.5px] uppercase flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-white animate-pulse" />
                  <span>Call Helpdesk: 7250853234</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* ================= HOW IT WORKS PROCESS TIMELINE ================= */}
        <div className="pt-8 border-t border-slate-200/60 text-center space-y-10">
          
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-[#db2777] text-[10px] font-black uppercase tracking-widest">
              STEP-BY-STEP WORKFLOW
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight font-heading">
              How to Claim Your Cashless Medical Benefits
            </h3>
            <p className="text-xs text-slate-500 font-medium max-w-md mx-auto">
              Our hospitality coordinators are trained to bypass red tape, validating your family admission within minutes.
            </p>
          </div>

          {/* Timeline columns layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Connection slide indicator across row */}
            <div className="absolute top-[35%] left-0 right-0 h-0.5 bg-gradient-to-r from-pink-200 via-indigo-105 to-pink-200 -translate-y-1/2 z-0 hidden lg:block" />

            {timelineSteps.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={sIdx}
                  className="p-5.5 bg-white border border-slate-200/50 rounded-3xl text-left relative z-10 flex flex-col justify-between h-[210px] shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="space-y-4">
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold font-mono tracking-tighter text-indigo-100 group-hover:text-pink-100 transition-colors">
                        {step.step}
                      </span>
                      <span className="text-[9px] font-black text-[#db2777] bg-pink-50 border border-pink-100/50 px-2 py-0.5 rounded-md">
                        {step.badge}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-black font-heading text-slate-900 tracking-tight flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-105 text-indigo-600 flex items-center justify-center shrink-0">
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <span>{step.title}</span>
                    </h4>

                    <p className="text-slate-500 text-[11px] leading-relaxed font-semibold">
                      {step.desc}
                    </p>

                  </div>

                  <div className="pt-2 border-t border-slate-50 text-[8.5px] text-slate-400 font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>Hassle-Free</span>
                    <ChevronRight className="w-3 h-3 text-[#db2777]" />
                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* ================= TRUST BADGES ROW ================= */}
        <div className="py-5 px-6 rounded-[2rem] bg-indigo-50/50 border border-indigo-100/50 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 max-w-5xl mx-auto shadow-inner text-center">
          <div className="text-slate-500 text-[10.5px] font-black uppercase tracking-widest font-heading border-b sm:border-b-0 sm:border-r border-indigo-200/50 pr-0 sm:pr-8 py-0.5">
            Verified Assurances
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6">
            {[
              'Ayushman Bharat Supported',
              'Cashless Treatment Available',
              'Emergency Services',
              'Multi-Speciality Care',
              'Patient Assistance Available'
            ].map((highlight, hIdx) => (
              <div 
                key={hIdx}
                className="flex items-center gap-1.5 text-slate-700 text-xs font-bold"
              >
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CALL TO ACTION ================= */}
        <div className="p-8 md:p-10 text-center rounded-[2.5rem] bg-gradient-to-r from-[#eef2ff] via-white to-[#fdf2f8] border border-pink-200/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md text-left max-w-5xl mx-auto">
          
          <div className="space-y-1.5">
            <span className="text-[#db2777] font-black text-[9px] tracking-widest uppercase block">
              ✦ Online Arogya Triage Desk
            </span>
            <h3 className="text-slate-900 font-black text-xl sm:text-2xl font-heading tracking-tight leading-tight">
              Need Direct Admission Help?
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xl font-medium">
              Don’t let financial stress delay crucial surgeries. Our on-site Arogya Mitras are stationed directly on the ground floor to help guide your family through immediate cashless approvals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            
            <button 
              onClick={() => handleScrollToSection('eligibility-checker')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#cb2d6f] hover:bg-[#b02260] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <ShieldCheck className="w-4.5 h-4.5 animate-pulse" />
              <span>Verify Card Eligibility</span>
            </button>

            <button 
              onClick={() => handleScrollToSection('appointment')}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl border border-slate-200 text-slate-750 bg-white hover:bg-slate-50 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-xs"
            >
              Book Consultation
            </button>

            <a 
              href="tel:7250853234"
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-white animate-pulse" />
              <span>Call Helpdesk</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
