import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  Award as AwardIcon,
  BookOpen,
  BookOpenCheck,
  Briefcase,
  Building,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock,
  Compass,
  Download,
  GraduationCap,
  HeartPulse,
  HelpCircle,
  MapPin,
  Menu,
  MessageCircle,
  PhoneCall,
  PlayCircle,
  School,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import EcosystemConnector from './EcosystemConnector';
import { AdmissionProcess, AdmissionsOverview, TestimonialsSection } from './college/AdmissionsJourney';

interface CollegePageProps {
  onBackToHospital: () => void;
}

export default function NursingCollegePage({ onBackToHospital }: CollegePageProps) {
  const [activeTab, setActiveTab] = useState<string>('academic-hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProspectusOpen, setIsProspectusOpen] = useState(false);
  const [isAcademicsDropdownOpen, setIsAcademicsDropdownOpen] = useState(false);
  const [prospectusForm, setProspectusForm] = useState({ name: '', email: '', phone: '', course: 'anm' });
  const [prospectusSuccess, setProspectusSuccess] = useState(false);
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);

  // Filter Category State for Premium Faculty Section
  const [facultyCategory, setFacultyCategory] = useState<'all' | 'leadership' | 'nursing' | 'visiting'>('all');

  // State for Interactive Placements Pathway
  const [activePathwayStep, setActivePathwayStep] = useState<number>(0);

  // States for Hospital Navigation Banners and Box Highlights
  const [showFloatingHospitalBadge, setShowFloatingHospitalBadge] = useState(true);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = isScrolled ? 75 : 95;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const elPosition = elRect - bodyRect;
      const offsetPosition = elPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveTab(id);
    }
  };

  // Synchronize scroll offsets and active navigation highlight with high-performance Intersection Observer
  useEffect(() => {
    const handleScrollOffset = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScrollOffset, { passive: true });
    handleScrollOffset();

    const sectionIds = [
      'academic-hero',
      'overview',
      'courses',
      'hospital-training',
      'campus-life',
      'facilities',
      'faculty',
      'placement',
      'admissions-overview',
      'eligibility',
      'admissions-desk',
      'testimonials',
      'gallery',
      'contact'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // focused center observing window
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'patron') {
            setActiveTab('faculty');
          } else if (['admissions-overview', 'eligibility', 'admissions-desk', 'testimonials'].includes(id)) {
            setActiveTab('admissions-overview');
          } else {
            setActiveTab(id);
          }
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const patronEl = document.getElementById('patron');
    if (patronEl) observer.observe(patronEl);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollOffset);
    };
  }, []);

  // Eligibility Calculator state
  const [gender, setGender] = useState<string>('female');
  const [qualification, setQualification] = useState<string>('12th');
  const [stream, setStream] = useState<string>('arts');
  const [marks, setMarks] = useState<number>(65);
  const [eligibilityResult, setEligibilityResult] = useState<{
    eligible: boolean;
    course: string;
    reason: string;
    chance: string;
  } | null>(null);

  // Admissions Application state
  const [applyForm, setApplyForm] = useState({
    name: '',
    phone: '',
    course: 'anm',
    city: '',
    notes: ''
  });
  const [applySuccess, setApplySuccess] = useState(false);

  // Dynamic Syllabus modal
  const [selectedSyllabusCourse, setSelectedSyllabusCourse] = useState<string | null>(null);

  const courses = [
    {
      id: 'anm',
      title: 'ANM (Auxiliary Nurse Midwifery)',
      duration: '2 Years (Full-Time)',
      status: 'Admissions Open for Year 2026-27',
      eligibility: '10+2 Pass in any stream (Arts / Science / Commerce)',
      primaryAudience: 'Recommended for Female Candidates looking for direct job security',
      desc: 'Ground-up clinical certificate centered on maternal healthcare, rural pharmacology, vaccine logistics, sanitisation protocols, and child nutrition schemes.',
      syllabus: [
        'Anatomy & Physiology fundamentals',
        'Community Health & Rural Sanitation',
        'Primary Health Care Nursing (Prevention & First-Aid)',
        'Maternal & Neonatal Midwifery Operations',
        'Child Health & Immunization Schedules',
        'Ward Administration & Clinic Records Maintenance'
      ],
      careerProspects: 'Health Sub-Centres, Community Healthcare Workers (ANM), Govt National Rural Health Mission, Private Maternity clinics.',
      accent: 'pink',
      bgGradient: 'from-pink-500/10 to-rose-500/5',
      borderColor: 'border-pink-200'
    },
    {
      id: 'paramedical',
      title: 'Paramedical Certificate Programs',
      duration: '1 to 2 Years (Practical Intensive)',
      status: 'Admissions Open',
      eligibility: '10th Secondary or 10+2 Pass (Recognised board)',
      primaryAudience: 'All Candidates interested in laboratory and surgical assistance',
      desc: 'Direct hospital skills learning: medical lab assistance, wound dressing, radiography assistance, orthopaedic plaster setting, and ICU support.',
      syllabus: [
        'Basic Pathology & Sample Collection',
        'Surgical Dressings & Sterilisation Procedures',
        'Radiography & Eco-Telemetry Basics',
        'Therapeutic Assistantship & Emergency First-Aid',
        'Physiotherapy and Ward Duty Protocols',
        'Pharmacological Dispensing & Dosage Checks'
      ],
      careerProspects: 'Medical Lab Technicians, Radiology Assistants, Ward Administrators, Trauma dressing supervisors, Private Nursing Homes.',
      accent: 'blue',
      bgGradient: 'from-blue-500/10 to-indigo-505/5',
      borderColor: 'border-blue-200'
    },
    {
      id: 'gnm',
      title: 'GNM (General Nursing & Midwifery)',
      duration: '3 Years (Under Process/Future Expansion)',
      status: 'Proposed Expansion',
      eligibility: '10+2 with PCB (Science Stream and minimum 40% aggregate)',
      primaryAudience: 'Rigorous staff nursing education with advanced medical procedures',
      desc: 'Advanced technical diploma preparing candidates to act as critical care nursing staff, assisting surgical operations, administering complex therapies, and managing acute wards.',
      syllabus: [
        'Advanced Anatomy & Human Biological Systems',
        'Microbiology & Pathological Hazards',
        'Medical-Surgical Nursing (ICU & Operation Theatre setups)',
        'Obstetrics & Gynecological Emergency Support',
        'Mental Health & Therapeutic Nursing',
        'Pediatric Nursing & Neonatal Critical Care'
      ],
      careerProspects: 'Staff Nurse inside Govt Hospitals, Multi-Specialty private clinical chains, Nursing Superintendents, Emergency Medical Coordinators.',
      accent: 'purple',
      bgGradient: 'from-purple-500/10 to-violet-500/5',
      borderColor: 'border-purple-200'
    },
    {
      id: 'bsc',
      title: 'B.Sc. Nursing',
      duration: '4 Years (Future Core Degree Program)',
      status: 'Proposed Academic Wing',
      eligibility: '10+2 with Physics, Chemistry, Biology & English (Min 45% standard)',
      primaryAudience: 'Bachelors degree path for global research & healthcare leadership',
      desc: 'The gold-standard nursing degree combining medical science research, hospital staff administration, diagnostic analytics, and modern medical electronics usage.',
      syllabus: [
        'Clinical Biosciences & Biophysics',
        'Critical Therapeutic Nursing & Patient Logistics',
        'Epidemiology & Preventive Public Health Reforms',
        'Healthcare System Administration & Ethics',
        'Evidence-Based Research & Dissertation',
        'Trauma Center Code-Red Protocols'
      ],
      careerProspects: 'Clinical Nurse Researchers, Hospital Nursing Director, Global Health Educator, Critical Trauma Chief Assistant.',
      accent: 'indigo',
      bgGradient: 'from-indigo-500/10 to-purple-500/5',
      borderColor: 'border-indigo-200'
    }
  ];

  const collegeFacilities = [
    {
      title: 'Hostel Facility',
      desc: 'Safe, secure and comfortable accommodation available for students.',
      icon: Building2,
      stat: 'Safe Student Housing',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
      badge: '🏠 Safe & Secure'
    },
    {
      title: 'Scholarship Support',
      desc: 'Guidance and assistance available for eligible student scholarship programs.',
      icon: GraduationCap,
      stat: 'Financial Support Available',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
      badge: '🎓 Guidance Cell'
    },
    {
      title: 'Hospital-Based Clinical Training',
      desc: 'Practical learning and clinical exposure through Mata Bhagyamani Devi Hospital.',
      icon: Activity,
      stat: '100-Bed Partner Hospital',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800',
      badge: '🏥 Real Patient Exposure'
    },
    {
      title: 'Modern Science & Practical Labs',
      desc: 'Fully equipped simulation labs with anatomy skeletons, human body models, intravenous training arms, surgical sensors, and certified hygiene testing tools.',
      icon: Stethoscope,
      stat: 'INC Compliant Labs',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      badge: 'State Approved Labs'
    },
    {
      title: 'Modern Library',
      desc: 'Fully stocked reference bookshelves with latest Indian Nursing Council journals, WHO therapeutic guides, professional research pamphlets, and digital terminals.',
      icon: BookOpenCheck,
      stat: '5,000+ Reference Volumes',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
      badge: 'Silent Resource Wing'
    },
    {
      title: 'Smart Classrooms',
      desc: 'Modern climate-controlled lecture rooms featuring high-contrast interactive projection screens, sound-isolation acoustics, and custom wireless visual aids.',
      icon: School,
      stat: '100% Digital Projection',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800',
      badge: 'Tech-Enabled Suites'
    }
  ];

  const clinicalLearningVideos = [
    {
      title: 'Practical Nursing Training',
      description: 'Students build core bedside skills through supervised demonstrations, hands-on procedures, and faculty-guided practice.',
      duration: '4:32',
      category: 'Practical Training',
      src: '/videos/examination-hall-1.mp4',
      gradient: 'from-purple-600 via-indigo-600 to-blue-600'
    },
    {
      title: 'Viva Examination Session',
      description: 'A focused look at viva-style evaluation where students explain nursing concepts, clinical reasoning, and patient-care steps.',
      duration: '3:18',
      category: 'Viva Session',
      src: '/videos/examination-hall-2.mp4',
      gradient: 'from-blue-600 via-cyan-500 to-purple-600'
    },
    {
      title: 'Clinical Learning Experience',
      description: 'Hospital-attached learning moments that help students connect classroom knowledge with real healthcare environments.',
      duration: '5:06',
      category: 'Clinical Exposure',
      src: '/videos/exam3.mp4',
      gradient: 'from-pink-500 via-purple-600 to-indigo-600'
    }
  ];

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    
    let eligible = false;
    let course = 'ANM Program';
    let reason = '';
    let chance = 'Moderate';

    if (qualification === '10th') {
      eligible = true;
      course = 'Paramedical Certificate Programs';
      reason = 'You have cleared high school. You qualify to pursue medical support vocational training directly.';
      chance = 'Excellent Chance';
    } else {
      // 12th Pass
      if (gender === 'female') {
        eligible = true;
        course = 'ANM (Auxiliary Nurse Midwifery)';
        reason = 'Congratulations! You meet the standard government parameters for the ANM program (12th Pass). Excellent academic alignment.';
        chance = 'High Admission Probability (Admissions Open)';
      } else {
        // Male, 12th Pass
        eligible = true;
        course = 'Paramedical Certificate training';
        reason = 'As a male 12th graduate, you qualify heavily for Paramedical programs like radiography, labs, and ward assistantship.';
        chance = 'Highly Recommended';
      }
    }

    if (marks < 40) {
      eligible = false;
      reason = 'Your score is below 40%. A minimum score of 40-45% is required for competitive seats, but you can consult our counsellors for special consideration.';
      chance = 'Consultation Required';
    }

    setEligibilityResult({
      eligible,
      course,
      reason,
      chance
    });
  };

  const handleApplyForm = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setApplyForm({ name: '', phone: '', course: 'anm', city: '', notes: '' });
    }, 3000);
  };

  const handleProspectusFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProspectusSuccess(true);
    setTimeout(() => {
      setProspectusSuccess(false);
      setIsProspectusOpen(false);
      setProspectusForm({ name: '', email: '', phone: '', course: 'anm' });
    }, 3000);
  };

  const faqs = [
    {
      q: 'Who can apply for ANM?',
      a: 'The ANM (Auxiliary Nurse Midwifery) program is specifically open to female candidates who have successfully cleared their Intermediate (10+2) board examination from any recognized educational board. We welcome applications from all intellectual streams—including Science, Arts, and Commerce.'
    },
    {
      q: 'What is the eligibility criteria for admissions?',
      a: 'Candidates must be female, at least 17 years old on or before December 31st of the admission year, and have cleared Class 12 (10+2) with aggregate passing marks from recognized boards conforming to BNRC and INC standards. Physical fitness and a dedicated bedside interest are also required.'
    },
    {
      q: 'Is a hostel facility available on campus?',
      a: 'Yes, absolutely. We provide a highly secure, comfortable in-house female residency hostel within our locked campus compound. It includes round-the-clock supervisor wardens, premium CCTV security, dedicated quiet study rooms, wholesome dietary services, and 100% stable utility power backup.'
    },
    {
      q: 'How can I apply for admission?',
      a: 'Applying is simple and fast. You can fill out our Interactive Admissions Desk form on this page to lock your counseling booking, call our dedicated helpdesk directly at +91 7250853234 / +91 9110996491, or personally drop by our Sakari Mod campus office in Kudra for prompt on-spot eligibility evaluation.'
    },
    {
      q: 'What documents are required during the application process?',
      a: 'To complete enrollment audits, candidates must present their original and copies of: Class 10th and 12th Board Marksheets, Passing/Provisional Certificates, Transfer Certificate (SLC/CLC), Migration Permit, Aadhaar Identity Card, and 6 recent passport-sized color photographs.'
    },
    {
      q: 'Do students receive real hospital-based bedside training?',
      a: 'Yes! Bedside hospital training represents the very core of our curriculum. All students go through comprehensive, proctored clinical rotations totaling over 1,500 clinical hours directly on the live bedsides of our adjacent, partner 100-bed Mata Bhagyamani Devi Hospital.'
    },
    {
      q: 'Is Ramdhari Singh Memorial Nursing College affiliated and approved?',
      a: 'Yes! Ramdhari Singh Memorial Nursing College has received formal academic recognition. It is established following state government guidelines and aligned with key nursing council standards to prepare students for State Nursing Board registrations.'
    }
  ];

  return (
    <div id="premium-college-portal" className="min-h-screen bg-slate-50 relative flex flex-col font-sans selection:bg-purple-100 text-slate-800">
      
      {/* Dynamic Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:2rem_2rem] z-0 pointer-events-none" />
      <div className="w-full bg-[#1e1b4b] text-[#cbd5e1] py-1.5 px-4 md:px-8 text-[11px] font-bold text-center flex flex-row items-center justify-between gap-4 relative z-50 shadow-sm border-b border-white/5">
        <div className="hidden md:flex items-center gap-2">
          <span className="bg-pink-600 text-white font-black uppercase text-[8.5px] px-2 py-0.5 rounded animate-pulse">Admissions Open 2026</span>
          <span className="text-slate-300 text-[10.5px]">Secure your registered nursing career path with direct clinical hospital training.</span>
        </div>
        <div className="flex items-center gap-4 mx-auto md:mx-0 justify-center text-xs">
          <span className="text-pink-300 font-extrabold text-[10.5px]">Admission Helplines:</span>
          <a href="tel:+917250853234" className="text-white hover:text-pink-300 font-black transition-colors flex items-center gap-1">
            <PhoneCall className="w-3 h-3 text-pink-400" />
            <span>+91 7250853234</span>
          </a>
          <span className="text-slate-600">|</span>
          <a href="tel:+919110996491" className="text-white hover:text-pink-300 font-black transition-colors flex items-center gap-1">
            <span>+91 9110996491</span>
          </a>
        </div>
      </div>

      {/* Collegiate Sticky Glass Header */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ease-in-out border-b ${
          isScrolled 
            ? 'py-1 bg-white/85 backdrop-blur-xl border-slate-200/90 shadow-md' 
            : 'py-2 bg-white/95 backdrop-blur-md border-slate-100 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          
          {/* Left Wing Brand */}
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveTab('academic-hero');
            }}
            className="flex items-center gap-2 cursor-pointer group shrink-0"
          >
            <div className="h-14 w-14 md:h-16 md:w-16 rounded-xl bg-white border border-indigo-100 shadow-sm flex items-center justify-center overflow-hidden shrink-0 self-center">
              <img
                src="/images/logo/college-logo.png"
                alt="Ramdhari Singh Memorial Nursing College"
                className="h-full w-full object-contain object-center p-0 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="text-left leading-none min-w-0">
              <span className="block text-[8.5px] md:text-[9px] tracking-[0.15em] font-black uppercase bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">
                Ramdhari Singh Memorial
              </span>
              <span className="block text-sm md:text-base font-black text-slate-900 font-heading leading-tight uppercase whitespace-nowrap">
                Nursing College
              </span>
              <span className="block text-[8.5px] md:text-[9.2px] text-slate-500 font-bold mt-1 tracking-tight whitespace-nowrap">
                Building Future Healthcare Professionals
              </span>
            </div>
          </div>
          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 p-1 rounded-full border border-slate-200/50 relative">
            
            {/* Home */}
            <button
              onClick={() => scrollToSection('academic-hero')}
              className={`relative px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-200 outline-none select-none cursor-pointer text-left ${
                activeTab === 'academic-hero' ? 'text-white font-black' : 'text-slate-650 hover:text-slate-950'
              }`}
            >
              <span className="relative z-10">Home</span>
              {activeTab === 'academic-hero' && (
                <motion.div
                  layoutId="activeCollegeNav"
                  className="absolute inset-0 bg-indigo-700 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* About */}
            <button
              onClick={() => scrollToSection('overview')}
              className={`relative px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-200 outline-none select-none cursor-pointer text-left ${
                activeTab === 'overview' ? 'text-white font-black' : 'text-slate-655 hover:text-slate-950'
              }`}
            >
              <span className="relative z-10">About</span>
              {activeTab === 'overview' && (
                <motion.div
                  layoutId="activeCollegeNav"
                  className="absolute inset-0 bg-indigo-700 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Courses */}
            <button
              onClick={() => scrollToSection('courses')}
              className={`relative px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-200 outline-none select-none cursor-pointer text-left ${
                activeTab === 'courses' ? 'text-white font-black' : 'text-slate-655 hover:text-slate-950'
              }`}
            >
              <span className="relative z-10">Courses</span>
              {activeTab === 'courses' && (
                <motion.div
                  layoutId="activeCollegeNav"
                  className="absolute inset-0 bg-indigo-700 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Academics Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAcademicsDropdownOpen(true)}
              onMouseLeave={() => setIsAcademicsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsAcademicsDropdownOpen(!isAcademicsDropdownOpen)}
                className={`relative px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-205 outline-none select-none cursor-pointer text-left flex items-center gap-1 ${
                  ['faculty', 'campus-life', 'hospital-training', 'placement'].includes(activeTab) 
                    ? 'text-white font-black' 
                    : 'text-slate-655 hover:text-slate-950'
                }`}
              >
                <span className="relative z-10">Academics</span>
                <ChevronDown className="w-3.5 h-3.5 relative z-10 shrink-0" />
                {['faculty', 'campus-life', 'hospital-training', 'placement'].includes(activeTab) && (
                  <motion.div
                    layoutId="activeCollegeNav"
                    className="absolute inset-0 bg-indigo-700 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {isAcademicsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-44 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 p-1.5 shadow-xl z-50 overflow-hidden text-left"
                  >
                    {[
                      { id: 'faculty', label: 'Faculty' },
                      { id: 'campus-life', label: 'Campus Life' },
                      { id: 'hospital-training', label: 'Hospital Training' },
                      { id: 'placement', label: 'Career Support' }
                    ].map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => {
                          scrollToSection(subItem.id);
                          setIsAcademicsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 rounded-xl text-[9.5px] font-extrabold uppercase tracking-wider transition-colors duration-150 ${
                          activeTab === subItem.id 
                            ? 'bg-indigo-50 text-indigo-700 font-bold' 
                            : 'text-slate-650 hover:bg-slate-50 hover:text-slate-950'
                        }`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Facilities */}
            <button
              onClick={() => scrollToSection('facilities')}
              className={`relative px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-200 outline-none select-none cursor-pointer text-left ${
                activeTab === 'facilities' ? 'text-white font-black' : 'text-slate-655 hover:text-slate-950'
              }`}
            >
              <span className="relative z-10">Facilities</span>
              {activeTab === 'facilities' && (
                <motion.div
                  layoutId="activeCollegeNav"
                  className="absolute inset-0 bg-indigo-700 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Admissions */}
            <button
              onClick={() => scrollToSection('admissions-overview')}
              className={`relative px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-200 outline-none select-none cursor-pointer text-left ${
                activeTab === 'admissions-overview' ? 'text-white font-black' : 'text-slate-655 hover:text-slate-950'
              }`}
            >
              <span className="relative z-10">Admissions</span>
              {activeTab === 'admissions-overview' && (
                <motion.div
                  layoutId="activeCollegeNav"
                  className="absolute inset-0 bg-indigo-700 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Gallery */}
            <button
              onClick={() => scrollToSection('gallery')}
              className={`relative px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-200 outline-none select-none cursor-pointer text-left ${
                activeTab === 'gallery' ? 'text-white font-black' : 'text-slate-655 hover:text-slate-950'
              }`}
            >
              <span className="relative z-10">Gallery</span>
              {activeTab === 'gallery' && (
                <motion.div
                  layoutId="activeCollegeNav"
                  className="absolute inset-0 bg-indigo-700 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Contact */}
            <button
              onClick={() => scrollToSection('contact')}
              className={`relative px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-200 outline-none select-none cursor-pointer text-left ${
                activeTab === 'contact' ? 'text-white font-black' : 'text-slate-655 hover:text-slate-950'
              }`}
            >
              <span className="relative z-10">Contact</span>
              {activeTab === 'contact' && (
                <motion.div
                  layoutId="activeCollegeNav"
                  className="absolute inset-0 bg-indigo-700 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </nav>

          {/* Right side Action row - Button Cleanup Applied */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* Primary Button */}
            <button
              onClick={() => scrollToSection('admissions-desk')}
              className="px-4.5 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md shadow-pink-650/10 active:scale-98"
            >
              Apply Now
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => setIsProspectusOpen(true)}
              className="px-4 py-2 rounded-xl border border-slate-200 hover:border-slate-350 bg-white text-[10px] font-black text-slate-800 hover:bg-slate-50 uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm"
            >
              Download Prospectus
            </button>

            {/* Highly Animated Premium Return Link Box */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(99, 102, 241, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onBackToHospital}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0c4ea3] via-[#4d3091] to-[#702082] text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm select-none border border-white/10 relative overflow-hidden group transition-all"
              title="Return to Mata Bhagyamani Devi Hospital Hub"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <HeartPulse className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
              <span>Visit Mata Bhagyamani Hospital</span>
            </motion.button>
          </div>

          {/* Mobile responsive toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onBackToHospital}
              className="px-3.5 py-2 rounded-xl border border-[#0c4ea3]/20 bg-gradient-to-r from-blue-50 to-indigo-50 text-[10px] font-extrabold text-[#0c4ea3] flex items-center gap-2 cursor-pointer transition-all uppercase tracking-wider shadow-xs"
              title="Return to Mata Bhagyamani Devi Hospital View"
            >
              <HeartPulse className="w-3.5 h-3.5 text-pink-500 animate-pulse shrink-0" />
              <span>Hospital View</span>
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-755 hover:bg-slate-50 flex items-center justify-center cursor-pointer shadow-sm"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>

        {/* Mobile menu drawer overlay - Close automatically after click & correctly structured and styled */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden w-full border-t border-slate-100 bg-white px-4 py-5 space-y-4"
            >
              <div className="grid grid-cols-2 gap-2 text-left">
                {[
                  { id: 'academic-hero', label: 'Home' },
                  { id: 'overview', label: 'About College' },
                  { id: 'courses', label: 'Courses' },
                  { id: 'facilities', label: 'Facilities' },
                  { id: 'admissions-overview', label: 'Admissions' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'contact', label: 'Contact' },
                  { id: 'faculty', label: 'Faculty', sub: true },
                  { id: 'campus-life', label: 'Campus Life', sub: true },
                  { id: 'hospital-training', label: 'Hospital Training', sub: true },
                  { id: 'placement', label: 'Career Support', sub: true }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollToSection(item.id);
                    }}
                    className={`p-2.5 rounded-xl text-left text-[11px] font-black uppercase tracking-wider transition-all duration-150 ${
                      item.sub ? 'pl-5 opacity-90 border-l border-indigo-100 bg-indigo-50/20' : ''
                    } ${
                      activeTab === item.id || (item.id === 'admissions-overview' && activeTab === 'admissions-overview')
                        ? 'bg-indigo-700 text-white shadow-sm' 
                        : 'text-slate-655 hover:bg-slate-50'
                    }`}
                  >
                    {item.sub ? `• ${item.label}` : item.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 text-center">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollToSection('admissions-desk');
                    }}
                    className="w-full py-3 rounded-xl bg-pink-600 text-white font-extrabold text-[10px] uppercase tracking-wider cursor-pointer shadow-sm active:scale-98"
                  >
                    Apply Now
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsProspectusOpen(true);
                    }}
                    className="w-full py-3 rounded-xl border border-slate-205 bg-white text-slate-800 font-extrabold text-[10px] uppercase tracking-wider cursor-pointer shadow-sm"
                  >
                    Prospectus PDF
                  </button>
                </div>

                {/* Primary Return to Hospital view Mobile Link Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBackToHospital();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0c4ea3] via-[#4d3091] to-[#702082] text-white font-extrabold text-[10.5px] uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-indigo-900/20 mt-4 border border-white/10"
                >
                  <HeartPulse className="w-4 h-4 text-pink-400 animate-pulse shrink-0" />
                  <span>Visit Mata Bhagyamani Hospital</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* Interactive Main Body Content */}
      <main className="flex-1 w-full space-y-24 pb-36 md:pb-20 relative z-10">
              {/* ================= PREMIUM 3-COLUMN ACADEMIC HERO ================= */}
        <section id="academic-hero" className="relative pt-6 pb-10 md:py-24 bg-gradient-to-b from-indigo-50/50 via-purple-50/20 to-transparent overflow-hidden">
          
          {/* Visual ambience glow patterns */}
          <div className="absolute top-[5%] left-[2%] w-[450px] h-[450px] rounded-full bg-indigo-200/25 filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-[8%] right-[5%] w-[450px] h-[450px] rounded-full bg-pink-200/20 filter blur-3xl pointer-events-none" />

          {/* ================= DESKTOP HERO ONLY (md: and up) ================= */}
          <div className="hidden md:grid max-w-7xl mx-auto px-4 md:px-8 grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* LEFT SIDE: Premium College Building Display with Glass Frame */}
            <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, -12, 0] 
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-full group"
              >
                {/* Glowing Aura background */}
                <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500 via-pink-400 to-indigo-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Premium Glass Frame wrapper */}
                <div className="relative rounded-[2.5rem] bg-white/70 backdrop-blur-md p-3.5 border border-white/50 shadow-2xl overflow-hidden shadow-[0_20px_50px_rgba(99,102,241,0.15)] hover:shadow-[0_25px_60px_rgba(99,102,241,0.22)] transition-shadow duration-300">
                  <div className="relative h-[340px] md:h-[400px] rounded-[2rem] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600" 
                      alt="Ramdhari Singh Memorial Nursing College Premium Campus"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Dark gradient base banner overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/10 pointer-events-none" />
                    
                    {/* Glass label strip embedded within the image */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl text-left">
                      <p className="text-[10px] font-black uppercase text-pink-350 tracking-wider">RSM Campus Wing</p>
                      <h4 className="text-[11.5px] font-black text-white leading-tight font-heading mt-0.5">
                        High-Tech Modern Academic Block
                      </h4>
                    </div>

                    {/* Quality standard badge floating */}
                    <div className="absolute top-4 left-4 py-1.5 px-3 rounded-full bg-slate-950/70 border border-white/20 text-white text-[8.5px] font-black tracking-widest uppercase backdrop-blur-sm">
                      🏛️ STATE APPROVED
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CENTER: Main Academic Call-To-Action Segment */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-center space-y-6 flex flex-col items-center">
              
              {/* Premium Glow Admission Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 py-2 px-4.5 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-white hover:to-indigo-50 border border-indigo-200/80 text-indigo-800 rounded-full text-[11px] font-black uppercase tracking-widest shadow-sm select-none"
              >
                <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
                <span>Admissions Open 2026</span>
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block ml-1" />
              </motion.div>

              {/* Main Heading & Elegant Subheading */}
              <div className="space-y-4 max-w-xl">
                <motion.h1 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-[28px] xs:text-[34px] sm:text-5xl md:text-5.5xl font-black text-slate-900 tracking-tight font-heading leading-tight uppercase"
                >
                  Ramdhari Singh Memorial <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 block mt-1.5 animate-gradient">
                    Nursing College
                  </span>
                </motion.h1>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block"
                >
                  <p className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-[16px] xs:text-lg md:text-xl font-black tracking-tight uppercase font-heading">
                    Building Future Healthcare Professionals
                  </p>
                  <p className="text-slate-500 text-xs font-mono font-bold tracking-widest uppercase mt-1">
                    Learn • Train • Serve
                  </p>
                </motion.div>

                <p className="text-slate-600 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-lg mx-auto">
                  Professional nursing and paramedical education with practical hospital exposure and real clinical training.
                </p>
              </div>

              {/* High-Impact 3 Action Buttons Array */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full max-w-lg pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('admissions-desk');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-4.5 rounded-2xl bg-indigo-700 hover:bg-slate-950 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer hover:-translate-y-0.5 duration-200"
                >
                  <ClipboardCheck className="w-4.5 h-4.5 text-pink-400" />
                  <span>Apply for Admission</span>
                </button>

                <button
                  onClick={() => setIsProspectusOpen(true)}
                  className="w-full sm:w-auto px-6 py-4.5 rounded-2xl border border-indigo-200 hover:border-indigo-400 bg-white text-indigo-700 hover:bg-slate-50 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer hover:-translate-y-0.5 duration-200"
                >
                  <Download className="w-4.5 h-4.5 text-pink-500" />
                  <span>Download Prospectus</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('courses');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-4.5 rounded-2xl border border-slate-200 hover:border-indigo-500 bg-white text-slate-700 hover:text-indigo-700 hover:bg-indigo-50/30 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Alignment Indicators Grid */}
              <div className="w-full pt-4 max-w-lg">
                <div className="grid grid-cols-2 gap-y-3.5 gap-x-6 text-left border-t border-slate-200/80 pt-5 text-slate-800">
                  {[
                    "Hospital Attached Training",
                    "Practical Exposure",
                    "Experienced Faculty",
                    "Career-Focused Learning"
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3px]" />
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-black tracking-tight text-slate-850">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: Interactive Student Training Frame with Floating Entities */}
            <div className="lg:col-span-3 order-3 flex flex-col justify-center items-center lg:items-end w-full relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, 12, 0] 
                }}
                transition={{
                  duration: 6.4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.3
                }}
                className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-full group"
              >
                {/* Visual Glass floating border wrapper */}
                <div className="relative rounded-[2.5rem] bg-white/70 backdrop-blur-md p-3.5 border border-white/50 shadow-2xl overflow-hidden shadow-[0_20px_50px_rgba(219,39,119,0.12)]">
                  <div className="relative h-[340px] md:h-[400px] rounded-[2rem] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" 
                      alt="Student practice rsm nursing college"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Educational highlight labels */}
                    <div className="absolute bottom-4 left-4 right-4 space-y-2.5">
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          "Nursing Students",
                          "Clinical Practice",
                          "Laboratory Training",
                          "Hospital Learning"
                        ].map((labelStr, i) => (
                          <div 
                            key={i} 
                            className="bg-slate-950/75 border border-white/10 backdrop-blur-sm rounded-lg p-2 text-left"
                          >
                            <span className="text-[8.5px] leading-snug font-black tracking-tight text-white block uppercase">
                              {labelStr}
                            </span>
                            <span className="text-[7.5px] text-pink-400 font-extrabold uppercase tracking-widest block leading-none mt-0.5">
                              Live Rotation
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Absolute Elements */}
                {/* 1. Graduation Cap */}
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, -4, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 w-11 h-11 rounded-xl bg-white border border-slate-205/65 flex items-center justify-center text-indigo-700 shadow-lg"
                  title="Professional Degrees"
                >
                  <GraduationCap className="w-5.5 h-5.5" />
                </motion.div>

                {/* 2. Medical Cross */}
                <motion.div 
                  animate={{ y: [0, 15, 0], rotate: [0, 6, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-24 -right-3.5 w-11 h-11 rounded-xl bg-white border border-slate-205/65 flex items-center justify-center text-rose-600 shadow-lg"
                  title="MBD Attached Hospital"
                >
                  <HeartPulse className="w-5.5 h-5.5" />
                </motion.div>

                {/* 3. Nursing Symbol */}
                <motion.div 
                  animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.8 }}
                  className="absolute bottom-32 -left-4 w-11 h-11 rounded-xl bg-indigo-900 border border-indigo-800 text-pink-400 flex items-center justify-center shadow-lg"
                  title="State Nursing Council Approved"
                >
                  <Stethoscope className="w-5.5 h-5.5" />
                </motion.div>

                {/* 4. Certificate Icon */}
                <motion.div 
                  animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2 }}
                  className="absolute -bottom-3 -right-3.5 w-11 h-11 rounded-xl bg-white border border-slate-205/65 flex items-center justify-center text-emerald-500 shadow-lg"
                  title="INC Standards Compliant"
                >
                  <Award className="w-5.5 h-5.5" />
                </motion.div>

              </motion.div>
            </div>

          </div>

          {/* ================= MOBILE HERO ONLY (< md) ================= */}
          <div className="md:hidden max-w-7xl mx-auto px-4 py-2 flex flex-col gap-5 text-center items-center">
            
            {/* Sparkles Admission Badge */}
            <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/80 text-indigo-800 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm select-none">
              <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              <span>Admissions Open 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping inline-block ml-0.5" />
            </div>

            {/* Typography Stack */}
            <div className="space-y-3.5">
              <h1 className="text-[32px] sm:text-[38px] font-black text-slate-805 tracking-tight leading-tight uppercase">
                Ramdhari Singh Memorial <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 block mt-1 animate-gradient">
                  Nursing College
                </span>
              </h1>

              <div className="inline-block px-1">
                <p className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-[18px] xs:text-[19px] font-black tracking-tight uppercase leading-snug">
                  Building Future Healthcare Professionals
                </p>
                <p className="text-slate-400 text-[10px] font-mono font-bold tracking-widest uppercase mt-1">
                  Learn • Train • Serve
                </p>
              </div>

              <p className="text-slate-600 text-[15px] sm:text-[16px] font-medium leading-relaxed max-w-md mx-auto">
                Professional nursing and paramedical education with practical hospital exposure and real clinical training.
              </p>
            </div>

            {/* Vertically Stacked CTA Buttons with min-height: 50px */}
            <div className="flex flex-col gap-2.5 w-full">
              <button
                onClick={() => {
                  const el = document.getElementById('admissions-desk');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full h-[52px] rounded-2xl bg-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/15 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <ClipboardCheck className="w-4.5 h-4.5 text-pink-400" />
                <span>Apply for Admission</span>
              </button>

              <button
                onClick={() => setIsProspectusOpen(true)}
                className="w-full h-[52px] rounded-2xl border border-indigo-200 bg-white text-indigo-700 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-[0.98] transition-transform"
              >
                <Download className="w-4.5 h-4.5 text-pink-500" />
                <span>Download Prospectus</span>
              </button>
            </div>

            {/* Two Side-by-Side Hero Images Grid on Mobile */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {/* Image 1: Main Campus Building ("Home Page" Face of College) */}
              <div className="h-[180px] xs:h-[210px] sm:h-[260px] rounded-[1.5rem] overflow-hidden shadow-lg border border-indigo-100/40 relative">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600" 
                  alt="Ramdhari Singh Memorial College Campus Building"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[8px] font-black uppercase tracking-wider text-pink-305">RSM Campus Wing</span>
                  <p className="text-white text-[10px] font-bold leading-tight mt-0.5">Academic Building</p>
                </div>
              </div>

              {/* Image 2: Laboratory Training */}
              <div className="h-[180px] xs:h-[210px] sm:h-[260px] rounded-[1.5rem] overflow-hidden shadow-lg border border-indigo-100/40 relative">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" 
                  alt="Practical Nursing Practice RSM Nursing College"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[8px] font-black uppercase tracking-wider text-teal-300">Practical Labs</span>
                  <p className="text-white text-[10px] font-bold leading-tight mt-0.5">Live Ward Training</p>
                </div>
              </div>
            </div>

            {/* Benefits Section as 2-column Grid */}
            <div className="w-full border-t border-slate-200/60 pt-4.5 mt-1">
              <p className="text-[10px] font-bold text-indigo-800 uppercase tracking-widest mb-3.5 text-center">
                ✨ Core Selection Advantages
              </p>
              <div className="grid grid-cols-2 gap-2.5 text-left">
                {[
                  { text: "Hospital Attached Training", desc: "100+ Bed MBD Hospital" },
                  { text: "Hostel Facility", desc: "Safe, Secure & Disciplined" },
                  { text: "Scholarship Support", desc: "For Meritorious Students" },
                  { text: "Experienced Faculty", desc: "Elite Medical Educators" },
                  { text: "Career-Focused Learning", desc: "100% Placement Record" },
                  { text: "Practical Exposure", desc: "Daily Ward Rotations" }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-2 p-2.5 rounded-2xl bg-indigo-50/45 border border-indigo-100/20">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-150 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3px]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black tracking-tight text-slate-800 leading-tight">
                        {benefit.text}
                      </span>
                      <span className="text-[9px] font-bold text-indigo-650 leading-none mt-0.5">
                        {benefit.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= ABOUT COLLEGE / OVERVIEW ================= */}
        <section id="overview" className="max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24 text-left">
          <div className="bg-white rounded-[3rem] border border-slate-200/80 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-12 xl:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-indigo-50 border border-indigo-150 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                <School className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                <span>MEMORIAL EDUCATIONAL FOUNDATION</span>
              </div>
              <h2 className="text-3xl font-black text-slate-905 tracking-tight font-heading leading-tight">
                Culturing Integrity, Competence & Care
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Ramdhari Singh Memorial Nursing College was founded with a singular, noble mission: to elevate regional healthcare standards by delivering top-tier nursing and paramedical instruction. 
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                Approved by regulatory boards, our clinical curriculum is guided directly by executive physicians, preparing daughters of Kaimur with self-reliance, high-wage job opportunities, and robust nursing credentials.
              </p>
              <div className="flex items-center gap-3 bg-pink-50/50 p-4 rounded-2xl border border-pink-100">
                <span className="text-[9px] font-black uppercase text-pink-700 tracking-wider">INC & State Regulatory Alignment Approved Seats</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              </div>
            </div>

            <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Pristine Cultural Discipline",
                  desc: "High-integrity clinical standards, focus hours, and safe student-welfare hostel infrastructure.",
                  icon: Users,
                  color: "indigo"
                },
                {
                  title: "Clinical Staff Leadership",
                  desc: "Learn core ward management, drug administration ratios, and sterile wound dressings directly.",
                  icon: Award,
                  color: "pink"
                },
                {
                  title: "Kudra District Empowerment",
                  desc: "Generating self-reliant employment for women across Kaimur, Sasaram, and Varanasi corridors.",
                  icon: Compass,
                  color: "emerald"
                },
                {
                  title: "Associated 100-Bed Hospital",
                  desc: "Unmatched direct practical training inside active trauma, ICU, and maternal operation rooms.",
                  icon: Building,
                  color: "purple"
                }
              ].map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div key={idx} className="p-6 rounded-2.5xl bg-slate-50 border border-slate-150 hover:bg-white hover:border-indigo-100 transition-all flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-inner text-indigo-600">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-slate-950 font-heading leading-tight">{card.title}</h4>
                      <p className="text-slate-500 text-[11.5px] leading-relaxed font-semibold">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= PREMIUM HEALTHCARE EDUCATION ECOSYSTEM CONNECTOR SECTION ================= */}
        <EcosystemConnector onNavigateView={(view) => {
          if (view === 'hospital') {
            onBackToHospital();
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }} />

        {/* ================= PREMIUM COURSE CATALOG ================= */}
        <section id="courses" className="max-w-7xl mx-auto px-4 md:px-8 space-y-14 scroll-mt-24 text-left">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" />
              <span>INDIAN NURSING COUNCIL & STATE STANDARDS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight uppercase">
              Academic & Paramedical Pathway
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
              Ramdhari Singh Memorial offers recognized license-ready vocational certificates alongside proposed higher professional degrees designed to establish local healthcare self-reliance.
            </p>
          </div>

          {/* Premium Animated Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {courses.map((course) => {
              const isOpen = course.status.includes('Admissions Open');
              
              // Determine Custom Icon & Decorative Badging based on program ID
              let CourseIconComp = Stethoscope;
              let iconTheme = "bg-pink-50 text-pink-600 border-pink-100/80";
              let glowAccent = "hover:shadow-[0_20px_50px_rgba(219,39,119,0.18)]";
              let textAccentColor = "text-pink-600";
              let badgeStyle = "bg-pink-50 text-pink-700 border-pink-100";
              
              if (course.id === 'paramedical') {
                CourseIconComp = Activity;
                iconTheme = "bg-blue-50 text-blue-600 border-blue-100/80";
                glowAccent = "hover:shadow-[0_20px_50px_rgba(59,130,246,0.18)]";
                textAccentColor = "text-blue-600";
                badgeStyle = "bg-blue-50 text-blue-700 border-blue-100";
              } else if (course.id === 'gnm') {
                CourseIconComp = GraduationCap;
                iconTheme = "bg-purple-50 text-purple-600 border-purple-100/80";
                glowAccent = "hover:shadow-[0_20px_50px_rgba(139,92,246,0.18)]";
                textAccentColor = "text-purple-600";
                badgeStyle = "bg-purple-50 text-purple-700 border-purple-150";
              } else if (course.id === 'bsc') {
                CourseIconComp = Award;
                iconTheme = "bg-indigo-50 text-indigo-600 border-indigo-100/80";
                glowAccent = "hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)]";
                textAccentColor = "text-indigo-600";
                badgeStyle = "bg-indigo-50 text-indigo-700 border-indigo-150";
              }

              return (
                <motion.div 
                  key={course.id}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className={`relative p-[1.5px] rounded-[2.5rem] bg-gradient-to-br from-slate-200 via-slate-100/50 to-slate-300 group ${glowAccent} transition-all duration-300`}
                >
                  {/* Neon border glow overlay activated on hover */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  {/* Inner Premium Card Wrapper */}
                  <div className="h-full w-full bg-white rounded-[2.4rem] p-7 md:p-9 text-left flex flex-col justify-between relative overflow-hidden z-10">
                    
                    {/* Top glass bubble background styling */}
                    <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-slate-50 border border-slate-100/50 pointer-events-none group-hover:scale-110 group-hover:bg-indigo-50/10 transition-all duration-500" />
                    
                    <div className="space-y-6">
                      
                      {/* Section 1: Header Line Details */}
                      <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                        
                        {/* Course Icon Frame */}
                        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-inner ${iconTheme} group-hover:scale-105 transition-transform duration-300`}>
                          <CourseIconComp className="w-7 h-7" />
                        </div>

                        {/* Top Action / Status Badges */}
                        <div className="text-right space-y-1">
                          <span className={`inline-block text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full border ${badgeStyle}`}>
                            {course.status}
                          </span>
                          
                          {/* Active / Future tag indicating dynamic alignment with hospital standards */}
                          <p className="text-[9px] font-bold text-slate-400 block tracking-wider uppercase mt-1">
                            {isOpen ? "🟢 Direct Bedside Allocation" : "⏳ Strategic Vision Wing"}
                          </p>
                        </div>

                      </div>

                      {/* Section 2: Core Course Credentials & Metadata */}
                      <div className="space-y-4">
                        
                        {/* Title & Duration Label */}
                        <div className="space-y-1 text-left">
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>Routine: {course.duration}</span>
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight font-heading leading-tight group-hover:text-indigo-950 duration-200">
                            {course.title}
                          </h3>
                        </div>

                        {/* Short Description */}
                        <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-light mt-2">
                          {course.desc}
                        </p>

                        {/* Eligibility Glass Matrix container */}
                        <div className="bg-slate-50 border border-slate-150 p-4 rounded-2xl space-y-1.5 group-hover:bg-white group-hover:border-indigo-100 transition-colors duration-300">
                          <span className="text-[9px] font-black text-slate-450 uppercase block tracking-widest">
                            Academic Academic Standards (Eligibility)
                          </span>
                          <div className="flex items-center justify-between gap-3 text-[11.5px] leading-relaxed font-bold text-slate-750">
                            <span>{course.eligibility}</span>
                            <span className="text-[8.5px] bg-slate-900 text-white font-black uppercase px-2.5 py-0.5 rounded-md shrink-0 block">
                              GUIDELINE OK
                            </span>
                          </div>
                        </div>

                        {/* Sample Syllabus Curriculums */}
                        <div className="space-y-1.5">
                          <span className={`text-[9px] font-black uppercase tracking-widest block ${textAccentColor}`}>
                            🔬 PRIMARY CURRICULUM HIGHLIGHTS
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px] font-bold text-slate-600">
                            {course.syllabus.slice(0, 4).map((topic, offset) => (
                              <div key={offset} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 group-hover:bg-pink-500 duration-200" />
                                <span className="truncate">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>

                    {/* Section 3: Primary Career Segment Footer & Action buttons */}
                    <div className="pt-5 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      
                      <div className="text-left">
                        <span className="text-[8.5px] font-black text-slate-400 uppercase tracking-widest block">
                          TARGET PATHWAY
                        </span>
                        <p className="text-[10.5px] font-bold text-slate-800 leading-tight">
                          🎯 {course.primaryAudience.replace("Recommended for ", "").substring(0, 36)}...
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedSyllabusCourse(course.id)}
                        className={`w-full sm:w-auto px-5 py-3 rounded-xl border border-indigo-200 text-indigo-700 hover:bg-slate-950 hover:text-white hover:border-slate-950 text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer`}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Learn More Curriculum</span>
                      </button>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </section>

        {/* ================= HOSPITAL TRAINING & BEDSIDE PRACTICE SECTION ================= */}
        <section 
          id="hospital-training" 
          className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-[#fafbfc] to-white text-left scroll-mt-24 border-t border-slate-150"
        >
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c4ea308_1px,transparent_1px),linear-gradient(to_bottom,#0c4ea308_1px,transparent_1px)] bg-[size:3rem_3rem] z-0 pointer-events-none" />
          
          <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-50/50 filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-[30%] right-[-10%] w-[450px] h-[450px] rounded-full bg-pink-50/40 filter blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-16">
            
            {/* Header Block */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0c4ea3] text-xs font-black uppercase tracking-widest font-heading shadow-xs select-none"
              >
                <HeartPulse className="w-3.5 h-3.5 text-[#0c4ea3] animate-pulse" />
                <span>INTEGRATED CLINICAL EXPOSURE & CAPABILITIES</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight uppercase"
              >
                Hospital-Based <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c4ea3] to-[#702082]">
                  Clinical Training
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium"
              >
                To learn nursing, one must help real patients. Our campus is connected directly to Mata Bhagyamani Devi Hospital—a functioning d tertiary care hospital. Students don't practice inside sterile sandboxes; they experience authentic medical emergencies, live surgery preps, and nurse-led ward rounds.
              </motion.p>
            </div>

            {/* Modular Hospital Capabilities Box */}
            <div className="max-w-4xl mx-auto space-y-8 bg-white/60 backdrop-blur-md border border-slate-200 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
              <div className="space-y-4 text-center">
                <span className="text-[10px] font-black text-[#702082] tracking-widest uppercase font-mono block">
                  ★ ELIMINATING THEORETICAL ISOLATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-950 uppercase leading-tight">
                  Why Direct Hospital Practice Matters
                </h3>
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-semibold max-w-2xl mx-auto">
                  State regulatory guidelines advise a high percentage of bedside clinical hours for registration audits. By utilizing active clinic wards co-located inside the same compound, students observe authentic treatments first-hand.
                </p>
              </div>

              {/* Grid Check-Marks benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {[
                  {
                    label: "100 Proctored Bed Wards",
                    desc: "Complete operational wards covering OBG, Cardiology, Critical Care, and General Triage."
                  },
                  {
                    label: "1,500+ Mandated Bed Hours",
                    desc: "Trainees systematically cross-verify diagnostic plans with active clinicians."
                  },
                  {
                    label: "Real-Patient Case Files Logs",
                    desc: "Learn EMR-entry, patient vitals monitoring, and emergency cannula insertions on real patients."
                  }
                ].map((benefit, bIdx) => (
                  <div key={bIdx} className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl flex flex-col gap-3.5 items-start text-left">
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-150 text-indigo-700 flex items-center justify-center shrink-0 font-bold text-sm">
                      ✓
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold text-slate-905 uppercase font-heading">
                        {benefit.label}
                      </h4>
                      <p className="text-[11px] leading-relaxed text-slate-500">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Miniature badge detailing the partnership */}
              <div className="p-4 rounded-xl bg-indigo-50/40 border border-indigo-100 flex items-center justify-center gap-3 max-w-xl mx-auto text-left">
                <Stethoscope className="w-5 h-5 text-indigo-650 shrink-0" />
                <p className="text-[11px] font-bold text-slate-705 leading-snug">
                  Training co-supervised by practicing Surgeons and Physicians registered under National Council authorities.
                </p>
              </div>
            </div>

            {/* Three standard action buttons co-aligned with campus theme */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-6 border-t border-slate-100">
              
              <button
                onClick={() => {
                  const el = document.getElementById('admissions-desk');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98 cursor-pointer shadow-blue-800/10"
              >
                <ClipboardCheck className="w-4 h-4 text-white" />
                <span>Apply For Admission</span>
              </button>

              <button
                onClick={() => setIsProspectusOpen(true)}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-pink-600 animate-bounce" />
                <span>Download Prospectus</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Visit Campus</span>
              </button>

            </div>

          </div>
        </section>




        {/* ================= PREMIUM COLLEGE FACILITIES SECTION ================= */}
        <section id="facilities" className="max-w-7xl mx-auto px-4 md:px-8 space-y-16 scroll-mt-24 text-left">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 py-1 px-3 bg-indigo-50 border border-indigo-150 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
              <School className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              <span>INC STANDARDS APPROVED INFRASTRUCTURE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase leading-tight">
              Premium College Facilities
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
              Explore the advanced academic labs, quiet reference libraries, secure accommodations, and digital study ecosystems that shape our registered nursing experts.
            </p>
          </div>

          {/* Interactive Split Layout Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Side: Immersive Real College Infrastructure Photo Frame */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              
              <div 
                className="relative rounded-[2.8rem] bg-slate-100 p-4 border border-slate-150 shadow-2xl overflow-hidden group w-full aspect-square"
              >
                {/* Visual Glass Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-pink-500/10 mix-blend-overlay z-10 pointer-events-none" />
                
                {/* Live Slideshow Image Frame */}
                <div className="h-full w-full rounded-[2.2rem] overflow-hidden relative">
                  
                  {/* AnimatePresence for super smooth transitions of the real college photos */}
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeFacilityIndex}
                      src={collegeFacilities[activeFacilityIndex].image}
                      alt={collegeFacilities[activeFacilityIndex].title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Dynamic Gradient mapping */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent z-10" />

                  {/* Top Location indicator */}
                  <div className="absolute top-5 left-5 py-1.5 px-3.5 rounded-full bg-slate-950/75 text-white border border-white/10 text-[9px] font-black tracking-widest uppercase z-20">
                    📍 {collegeFacilities[activeFacilityIndex].badge}
                  </div>

                  {/* Active Information overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left z-25 space-y-2">
                    <span className="text-[10px] bg-indigo-600 text-white font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {collegeFacilities[activeFacilityIndex].stat}
                    </span>
                    <h4 className="text-xl font-black font-heading tracking-tight leading-tight mt-2 text-white">
                      {collegeFacilities[activeFacilityIndex].title} Infrastructure
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-light font-sans">
                      {collegeFacilities[activeFacilityIndex].desc}
                    </p>
                  </div>

                </div>

              </div>

              {/* Verified Trust Certificate Footnote */}
              <div className="bg-slate-50 border border-slate-150 p-5 rounded-2.5xl flex items-center justify-between gap-4">
                <div className="text-left space-y-0.5">
                  <span className="text-[9px] font-black text-emerald-700 uppercase tracking-wider block">Academic Verification</span>
                  <p className="text-xs font-bold text-slate-800 leading-tight">All modules fully certified under Kaimur Medical Guild audits.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

            </div>

            {/* Right Side: 8 Premium Animated Grid Cards for the Facilities */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {collegeFacilities.map((facility, idx) => {
                const FacilityIcon = facility.icon;
                const isSelected = activeFacilityIndex === idx;

                const glowTheme = idx % 3 === 0 
                  ? "hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)]" 
                  : idx % 3 === 1 
                    ? "hover:shadow-[0_20px_50px_rgba(219,39,119,0.18)]" 
                    : "hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)]";

                const accentColor = idx % 3 === 0 
                  ? "text-indigo-600 bg-indigo-50 border-indigo-100" 
                  : idx % 3 === 1 
                    ? "text-pink-600 bg-pink-50 border-pink-100" 
                    : "text-emerald-600 bg-emerald-50 border-emerald-100";

                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    onClick={() => setActiveFacilityIndex(idx)}
                    className={`cursor-pointer text-left relative p-[1.5px] rounded-[2rem] bg-gradient-to-br ${
                      isSelected 
                        ? 'from-indigo-500 via-purple-500 to-pink-500 shadow-xl' 
                        : 'from-slate-200 via-slate-100 to-slate-250'
                    } group ${glowTheme} transition-all duration-300`}
                  >
                    {/* Inner Content Wrapper */}
                    <div className="h-full w-full bg-white rounded-[1.9rem] p-6 text-left flex flex-col justify-between relative overflow-hidden">
                      
                      <div className="space-y-4">
                        
                        {/* Title row & custom dynamic badge */}
                        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
                          <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 shadow-inner ${accentColor}`}>
                            <FacilityIcon className="w-5.5 h-5.5" />
                          </div>
                          
                          <span className="text-[8px] font-black uppercase text-slate-450 tracking-widest bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 font-mono">
                            {facility.stat.split(" ")[0]}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h4 className="text-base font-black text-slate-900 group-hover:text-indigo-950 transition-colors leading-tight font-heading uppercase">
                            {facility.title}
                          </h4>
                          <p className="text-slate-500 text-[11px] leading-relaxed mt-1 font-semibold">
                            {facility.desc}
                          </p>
                        </div>

                      </div>

                      {/* Explore bottom buttons to trigger left photo showcase instantly */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block">
                          {facility.stat}
                        </span>
                        
                        <div className="text-[9.5px] font-black text-indigo-600 group-hover:text-pink-600 transition-colors flex items-center gap-1">
                          <span>Tour Live Area</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 duration-200" />
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </section>

        {/* ================= CAMPUS LIFE & ACADEMIC EXCELLENCE SECTION ================= */}
        <section 
          id="campus-life" 
          className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/15 to-white text-left scroll-mt-24 border-t border-slate-100"
        >
          {/* Blueprint mesh background matching the institute theme */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f030_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f030_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] z-0 pointer-events-none" />
          
          <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-purple-100/20 filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-100/20 filter blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-20">
            
            {/* Header Area */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-150 text-indigo-700 text-xs font-black uppercase tracking-widest font-heading shadow-xs select-none"
              >
                <ShieldCheck className="w-4 h-4 text-indigo-650 animate-pulse" />
                <span>Disciplined & Serious Academic Culture</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight uppercase"
              >
                Clinical Learning <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c4ea3] to-[#702082]">
                  In Action
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium"
              >
                Explore real practical training, viva examinations and hospital-based learning experiences.
              </motion.p>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-purple-50/90 via-white to-pink-50/90 p-5 shadow-[0_30px_90px_rgba(76,29,149,0.14)] sm:p-8 lg:p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500" />
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                className="mx-auto mb-10 max-w-4xl text-center"
              >
                <div className="mb-5 flex flex-wrap items-center justify-center gap-2.5">
                  {[
                    'Hospital Attached Campus',
                    'Practical Based Learning',
                    'Clinical Exposure',
                    'Experienced Faculty'
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3.5 py-2 text-[10px] font-black uppercase tracking-widest text-slate-700 shadow-sm backdrop-blur-md"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-pink-600" />
                      {badge}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-purple-700">
                  Academic Videos
                </span>
                <h3 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight text-slate-950 font-heading sm:text-4xl lg:text-5xl">
                  Clinical Learning In Action
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
                  Explore real practical training, viva examinations and hospital-based learning experiences.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {clinicalLearningVideos.map((video, videoIdx) => (
                  <motion.article
                    key={video.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: videoIdx * 0.08, type: 'spring', stiffness: 120, damping: 18 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/65 p-3 shadow-[0_24px_70px_rgba(59,7,100,0.14)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_34px_95px_rgba(168,85,247,0.28)]"
                  >
                    <div className={`absolute inset-x-5 top-5 h-24 rounded-full bg-gradient-to-r ${video.gradient} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-35`} />
                    <div className="relative overflow-hidden rounded-[1.45rem] bg-slate-950 shadow-2xl">
                      <video
                        src={video.src}
                        className="aspect-video w-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                      />
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-90">
                        <div className={`grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br ${video.gradient} text-white shadow-[0_18px_45px_rgba(15,23,42,0.35)] ring-4 ring-white/45 transition-transform duration-300 group-hover:scale-110`}>
                          <PlayCircle className="h-8 w-8" />
                        </div>
                      </div>
                      <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-800 shadow-sm backdrop-blur">
                          {video.duration}
                        </span>
                        <span className={`rounded-full bg-gradient-to-r ${video.gradient} px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-sm`}>
                          {video.category}
                        </span>
                      </div>
                    </div>
                    <div className="relative px-2 pb-3 pt-5">
                      <h4 className="text-lg font-black text-slate-950 font-heading sm:text-xl">
                        {video.title}
                      </h4>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                        {video.description}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4 text-[11px] font-black uppercase tracking-widest text-slate-500">
                        <span>Admissions Showcase</span>
                        <span className="text-purple-700">Real Learning</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

            </div>

            {/* STUDENT JOURNEY TIMELINE: Visual layout representing timeline requested */}
            <div className="space-y-10 border-t border-slate-100 pt-16">
              <div className="text-center space-y-2">
                <span className="text-[9.5px] font-black uppercase text-indigo-700 tracking-widest block font-mono">
                  OUR ROADMAP TO SUCCESS
                </span>
                <h3 className="text-2xl font-black font-heading text-slate-900 uppercase">
                  Academic & Professional Student Journey
                </h3>
                <p className="text-slate-400 text-xs max-w-md mx-auto">
                  A comprehensive timeline tracking how our student nurses progress from raw candidates to confident clinical experts.
                </p>
              </div>

              {/* Six Chronological Journey Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
                
                {/* Connecting arrow stream - Only on desktop */}
                <div className="absolute top-[34px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 -z-10 hidden md:block" />

                {[
                  {
                    num: "1",
                    phase: "Admission",
                    desc: "Rigorous vetting, certificate audits, and clinical interest checks.",
                    icon: "📝",
                    color: "bg-indigo-50 border-indigo-200 text-indigo-700"
                  },
                  {
                    num: "2",
                    phase: "Classroom Learning",
                    desc: "Syllabus reading, interactive video lecture slides, and medical case reviews.",
                    icon: "📚",
                    color: "bg-blue-50 border-blue-200 text-blue-700"
                  },
                  {
                    num: "3",
                    phase: "Practical Training",
                    desc: "Intravenous arm models training and diagnostic tools practice in simulation labs.",
                    icon: "🔬",
                    color: "bg-purple-50 border-purple-200 text-purple-700"
                  },
                  {
                    num: "4",
                    phase: "Examinations",
                    desc: "Structured viva practice, timed assessments, and practical clinical evaluation rounds.",
                    icon: "📝",
                    color: "bg-pink-50 border-pink-200 text-pink-700"
                  },
                  {
                    num: "5",
                    phase: "Clinical Exposure",
                    desc: "Direct bedsides rotations and consultant inspections inside functioning wards.",
                    icon: "🏥",
                    color: "bg-emerald-50 border-emerald-200 text-emerald-700"
                  },
                  {
                    num: "6",
                    phase: "Career Development",
                    desc: "Board filing, hospital recruiting registers support, and private job matching.",
                    icon: "🎓",
                    color: "bg-yellow-50 border-yellow-200 text-yellow-800"
                  }
                ].map((node, nIdx) => (
                  <motion.div 
                    key={nIdx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: nIdx * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs relative group duration-200"
                  >
                    {/* Circle marker index */}
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-sm font-black shadow-inner mb-3 shrink-0 ${node.color}`}>
                      {node.num}
                    </div>

                    <div className="space-y-1 w-full text-center">
                      <h4 className="text-xs font-black text-slate-900 group-hover:text-indigo-950 transition-colors uppercase tracking-tight">
                        {node.phase}
                      </h4>
                      <p className="text-[10.5px] leading-relaxed text-slate-500 font-medium">
                        {node.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CALL TO ACTION BUTTONS requested */}
            <div className="border-t border-slate-100 pt-16 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              
              <button
                onClick={() => {
                  const el = document.getElementById('admissions-desk');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98 cursor-pointer shadow-blue-800/10"
              >
                <ClipboardCheck className="w-4 h-4 text-white" />
                <span>Apply For Admission</span>
              </button>

              <button
                onClick={() => setIsProspectusOpen(true)}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-pink-600 animate-bounce" />
                <span>Download Prospectus</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Visit Campus</span>
              </button>

            </div>

          </div>
        </section>

        {/* ================= PATRON & VISION SECTION (FOUNDER SEGMENT) ================= */}
        <section 
          id="patron" 
          className="py-20 relative overflow-hidden bg-gradient-to-tr from-[#fbfcfe] via-[#f7f9fd] to-white text-left border-t border-slate-150"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f030_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f030_1px,transparent_1px)] bg-[size:2rem_2rem] z-0 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-50/50 filter blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-full text-[10px] font-black uppercase tracking-widest font-heading shadow-xs select-none">
                <Award className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>INSPIRING INSTITUTIONAL TRUST</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight uppercase">
                Patron & Vision
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
                The educational guiding light behind Ramdhari Singh Memorial Nursing College, molding students into compassionate healthcare leaders.
              </p>
            </div>

            {/* Soft Glassmorphism Card */}
            <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-[3rem] p-6 sm:p-10 lg:p-12 border border-white/80 shadow-xl overflow-hidden relative">
              {/* Gold visual highlight corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-tr-full pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* Profile Photo Area */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden p-2.5 bg-gradient-to-tr from-amber-205 via-indigo-200 to-indigo-700 shadow-xl border border-white">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-50 border border-slate-100">
                      <img 
                        src="/public/images/srijayendraprasadsingh1.png" 
                        alt="Shri Jayendra Prasad Singh"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                      />
                    </div>
                    {/* Tiny visual seal label */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 py-1 px-3.5 rounded-full bg-slate-950/90 border border-amber-400 text-amber-400 text-[8.5px] font-black tracking-widest uppercase shadow-md backdrop-blur-sm whitespace-nowrap">
                      PATRON
                    </div>
                  </div>
                </div>

                {/* Profile Message Description Area */}
                <div className="md:col-span-7 space-y-6 text-center md:text-left flex flex-col justify-center">
                  <div className="space-y-2">
                    <span className="text-[10px] sm:text-xs font-black uppercase text-amber-700 tracking-widest font-mono block">
                      FOUNDATIONAL GUIDANCE UNIT
                    </span>
                    <h3 className="text-2xl sm:text-3.5xl font-black font-heading text-slate-955 uppercase leading-snug tracking-tight">
                      Shri Jayendra Prasad Singh
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5 text-indigo-850 text-xs sm:text-sm font-bold font-heading">
                      <span className="bg-amber-100/70 border border-amber-200 text-amber-805 px-2.5 py-1 rounded-lg uppercase text-[10px] tracking-wider shrink-0 w-fit mx-auto md:mx-0">
                        Former Headmaster
                      </span>
                      <span className="hidden sm:inline text-slate-350">•</span>
                      <span className="text-slate-600 font-extrabold text-[11px] sm:text-xs tracking-wide uppercase">
                        Patron & Educational Visionary
                      </span>
                    </div>
                  </div>

                  <div className="relative pt-6 border-t border-slate-150">
                    <span className="absolute -top-4 -left-3 text-6xl text-amber-200/50 font-serif select-none pointer-events-none select-none">“</span>
                    <p className="italic text-slate-700 text-sm md:text-base leading-relaxed relative z-10 font-bold tracking-wide">
                      "Committed to empowering students through quality healthcare education, practical learning and community service."
                    </p>
                  </div>

                  {/* Bullet points emphasizing credibility & educational heritage */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 text-xs font-black text-slate-700">
                    <div className="flex items-center gap-2.5 justify-center md:justify-start">
                      <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-700">
                        <span className="text-xs font-black">✓</span>
                      </div>
                      <span className="text-[11px] text-slate-800 leading-none">
                        Educational Heritage & Vision
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 justify-center md:justify-start">
                      <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-700">
                        <span className="text-xs font-black">✓</span>
                      </div>
                      <span className="text-[11px] text-slate-800 leading-none">
                        Student-Centric Empowerment
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= PREMIUM FACULTY & LEADERSHIP SECTION ================= */}
        <section 
          id="faculty" 
          className="py-24 relative overflow-hidden bg-gradient-to-b from-[#fafbfc] via-indigo-50/10 to-white text-left scroll-mt-24 border-t border-slate-150"
        >
          {/* Blueprint mesh matching the academy styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f025_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f025_1px,transparent_1px)] bg-[size:3rem_3rem] z-0 pointer-events-none" />
          
          <div className="absolute top-[25%] left-[-15%] w-[500px] h-[500px] rounded-full bg-blue-50/40 filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-[25%] right-[-15%] w-[500px] h-[500px] rounded-full bg-pink-50/40 filter blur-3xl pointer-events-none animate-pulse" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-16">
            
            {/* Section Main Header Title */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-pink-55 border border-indigo-100 text-indigo-750 text-xs font-black uppercase tracking-widest font-heading shadow-xs select-none"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                <span>ACADEMIC LEADERS & DIRECT HOSPITAL CLINICIANS</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight uppercase animate-fade-in"
              >
                Faculty & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c4ea3] to-[#702082]">
                  Leadership Team
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-sm md:text-base leading-relaxed font-semibold max-w-2xl mx-auto text-center"
              >
                Every instructor is a certified academic mentor or practicing medical office proctor registered with national council authorities. We bridge raw theoretical rules with daily ward rounds inside Mata Bhagyamani Devi Hospital.
              </motion.p>
            </div>

            {/* ================= PRINCIPAL'S VISION CORNER (THE INSIGHT CENTRE) ================= */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl border border-indigo-150 bg-white"
            >
              {/* Internal abstract ambient curves */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-transparent to-transparent z-0 pointer-events-none" />
              <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-50/30 filter blur-3xl -z-10" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Principal Picture Box */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-full lg:h-80 rounded-[2.5rem] overflow-hidden group border border-slate-200/80 p-2 bg-slate-50 shadow-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500"
                      alt="Prof. Dr. Sila Shaw, Principal"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-102"
                    />
                    <div className="absolute bottom-5 left-5 right-5 z-20 bg-slate-900/85 backdrop-blur-md border border-white/10 p-3 rounded-xl text-center">
                      <p className="text-white text-xs font-black uppercase tracking-wider font-mono">
                        INC CHIEF REPRESENTATIVE_
                      </p>
                    </div>
                  </div>
                </div>

                {/* Principal Message Content Box */}
                <div className="lg:col-span-8 space-y-6 text-left">
                  
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="px-3 py-1 text-[9px] font-black tracking-widest uppercase bg-indigo-100/70 border border-indigo-200 text-indigo-700 h-6 flex items-center rounded-md w-fit">
                        ★ EXECUTIVE ACADEMIC HEAD
                      </span>
                      <span className="text-[11px] font-bold text-slate-400 font-mono">
                        REGULATED SEATS APPROVAL CELL
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-950 uppercase leading-snug">
                      Prof. Dr. Sila Shaw
                    </h3>
                    <p className="text-indigo-750 text-xs sm:text-sm font-black font-mono">
                      Dean of Clinical Studies & College Principal (Ph.D in Nursing, Former Member of Academic Council)
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -top-6 -left-4 text-7xl text-slate-100 font-serif select-none pointer-events-none select-none">“</span>
                    <p className="italic text-slate-650 text-xs sm:text-sm md:text-base leading-relaxed relative z-10 font-medium">
                      "At Ramdhari Singh Memorial College, we refuse to treat nursing as a simple course of textbook definitions. A nurse is a patient's ultimate guardian and a surgeon's secondary eyes. By attaching our certified academic college to an active 100-bed tertiary care hospital, we force our student trainees to work on real, live proctored bedsides. We cultivate strict discipline, deep surgical ethics, and absolute clinical competence, ensuring the daughters of Kaimur rise to high-paying careers in reputable medical setups."
                    </p>
                  </div>

                  {/* Bullet badges reinforcing trust */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                        <span className="text-xs font-bold font-mono">✓</span>
                      </div>
                      <span className="text-[11.5px] font-bold text-slate-700 leading-none">
                        18+ Years Medical Academic Experience
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                        <span className="text-xs font-bold font-mono">✓</span>
                      </div>
                      <span className="text-[11.5px] font-bold text-slate-700 leading-none">
                        Certified Bihar Nursing Council (INC) Registries
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                        <span className="text-xs font-bold font-mono">✓</span>
                      </div>
                      <span className="text-[11.5px] font-bold text-slate-700 leading-none">
                        1:10 Personalized Teacher-Student Mentoring Ratio
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                        <span className="text-xs font-bold font-mono">✓</span>
                      </div>
                      <span className="text-[11.5px] font-bold text-slate-700 leading-none">
                        Active Hospital Ward Supervisor Rounds
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>

            {/* ================= INTERACTIVE FILTER TAB BAR ================= */}
            <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-5">
              {[
                { id: 'all', label: 'All Educators & Clinical Clinicians' },
                { id: 'leadership', label: 'Executive College Leadership' },
                { id: 'nursing', label: 'Clinical Instructors & Nurse Trainers' },
                { id: 'visiting', label: 'Visiting Hospital MD Consultants' }
              ].map((tab) => {
                const isActive = facultyCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setFacultyCategory(tab.id as any)}
                    className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-tight transition-all duration-200 cursor-pointer border ${
                      isActive 
                        ? 'bg-gradient-to-tr from-indigo-900 to-[#702082] text-white border-transparent shadow-sm shadow-indigo-900/15 scale-102 font-extrabold' 
                        : 'bg-white text-slate-655 border-slate-205 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* ================= DYNAMIC HIGHLIGHTS GRID ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {[
                  {
                    id: 'sila',
                    name: 'Prof. Dr. Sila Shaw',
                    title: 'College Principal',
                    category: 'leadership',
                    credentials: 'Ph.D in Nursing • INC Alumnus • 18+ Yrs Exp',
                    specialties: 'Ethics, Pediatric Critical Care, Regional Audits',
                    tag: 'Academic Principal',
                    bio: 'Ensuring that every theoretical lecture remains linked with active intensive hospital bedside inspections.',
                    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
                  },
                  {
                    id: 'pushpa',
                    name: 'Mr. Abhishek Anand',
                    title: 'Vice Principal & Head (OBG Nursing)',
                    category: 'leadership',
                    credentials: 'B.Sc nursing (Obstetrics & Gynecology) • 10+ Yrs Exp',
                    specialties: 'Maternal Operative Care, Infant Resuscitation',
                    tag: 'Vice Principal',
                    bio: 'Providing critical obstetric and delivery care simulation guidance directly in active labor wards.',
                    image: 'public/images/viceprincipal1.png'
                  },
                  {
                    id: 'mary',
                    name: 'Sister Mary Kutty',
                    title: 'Lead Critical Nursing Instructor',
                    category: 'nursing',
                    credentials: 'B.Sc Nursing (Critical Bedside Training) • 9+ Yrs Exp',
                    specialties: 'Intravenous Cannulation, Sterile Operations',
                    tag: 'Primary Nurse Mentor',
                    bio: 'Directly mentoring first and second year trainees inside ICU cubicles and emergency triage cells.',
                    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400'
                  },
                  {
                    id: 'sanchita',
                    name: 'Ms. Sanchita Sen',
                    title: 'Practical Procedures Instructor',
                    category: 'nursing',
                    credentials: 'Post Basic B.Sc Nursing • Advanced Life Support Expert • 6+ Yrs Exp',
                    specialties: 'Cardiopulmonary Resuscitation, Patient Airways',
                    tag: 'Simulation Lead',
                    bio: 'Focusing on bedside mechanics, procedural logs, and live intravenous drug calculation layouts.',
                    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400'
                  },
                  {
                    id: 'r_k_singh',
                    name: 'Dr. R. K. Singh',
                    title: 'Chief Medical Consultant (Visiting Cardiology Mentor)',
                    category: 'visiting',
                    credentials: 'MD (Cardiology/Medicine) • Attending Surgeon at MBD Hospital',
                    specialties: 'ICU Telemetry Reader, Advanced ECG interpretation',
                    tag: 'Visiting Specialist MD',
                    bio: 'Bringing critical physician insights directly into the classroom to help students understand complex pathologies.',
                    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
                  },
                  {
                    id: 'smriti',
                    name: 'Dr. Smriti Roy',
                    title: 'Visiting Surgical Mentor & Gynecologist',
                    category: 'visiting',
                    credentials: 'MS (Obstetrics & Gynecology) • Consultant surgeon at MBD Hospital',
                    specialties: 'Operation Room Sterile Fields, Pathology Logs',
                    tag: 'Visiting MS Surgeon',
                    bio: 'Guiding clinical rounds inside operating theaters to nurture confident, high-wage operational nurses.',
                    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400'
                  }
                ]
                  .filter(member => facultyCategory === 'all' || member.category === facultyCategory)
                  .map((member, idx) => (
                    <motion.div
                      key={member.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 15 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 25 }}
                      whileHover={{ y: -6 }}
                      className="bg-white rounded-[2rem] border border-slate-200/80 p-5 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg duration-200 relative group"
                    >
                      {/* Interactive Visual Header inside card */}
                      <div className="space-y-4">
                        
                        {/* Profile Image with absolute label overlay */}
                        <div className="relative h-56 rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-white/10 text-white rounded-md text-[9px] font-black uppercase tracking-wider font-mono">
                              {member.tag}
                            </span>
                          </div>

                          <div className="absolute bottom-3 right-3">
                            <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-750 text-[8.5px] font-black uppercase tracking-tight">
                              INC AUDITED REGISTERED
                            </span>
                          </div>
                        </div>

                        {/* Text Fields */}
                        <div className="space-y-1.5 align-left text-left">
                          <h4 className="text-base sm:text-lg font-black text-slate-950 font-heading leading-tight tracking-tight uppercase group-hover:text-indigo-800 transition-colors duration-200">
                            {member.name}
                          </h4>
                          
                          <p className="text-indigo-750 font-bold text-xs font-mono tracking-tight leading-none">
                            {member.title}
                          </p>

                          <div className="text-[10px] font-bold text-slate-400 font-mono flex items-center gap-1">
                            <span className="shrink-0 text-amber-500">★</span>
                            <span>{member.credentials}</span>
                          </div>
                        </div>

                        <p className="text-slate-500 text-[11px] leading-relaxed text-left font-semibold">
                          {member.bio}
                        </p>

                      </div>

                      {/* Clinical specialties bottom banner */}
                      <div className="pt-4 mt-5 border-t border-slate-100 flex flex-col space-y-2 text-left">
                        <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                          Specialized Practice:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {member.specialties.split(', ').map((spec, sIdx) => (
                            <span 
                              key={sIdx}
                              className="px-2.5 py-1 rounded bg-slate-50 border border-slate-150 text-slate-655 text-[9.5px] font-extrabold"
                            >
                              • {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                    </motion.div>
                  ))
                }
              </AnimatePresence>
            </div>

            {/* TRUST INDICATORS SECTION HEADER requested: Experienced Educators, Healthcare Mentors, Clinical Trainers */}
            <div className="bg-gradient-to-r from-blue-50/40 via-purple-50/40 to-pink-50/40 border border-indigo-100 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left select-none max-w-5xl mx-auto shadow-xs">
              
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#0c4ea3] flex items-center justify-center border border-indigo-100 shrink-0 shadow-inner">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-tight text-slate-950">
                    Experienced Educators
                  </h4>
                  <p className="text-[10.5px] leading-relaxed text-slate-500">
                    Every full-time staff member holds recognized Masters or Postgraduate credentials in critical care nursing structures.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left border-t md:border-t-0 md:border-l border-slate-200/50 md:pl-6 pt-6 md:pt-0">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#702082] flex items-center justify-center border border-pink-100 shrink-0 shadow-inner">
                  <AwardIcon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-tight text-slate-950">
                    Healthcare Mentors
                  </h4>
                  <p className="text-[10.5px] leading-relaxed text-slate-500">
                    Students are personally backed by active proctors ensuring patient ethics, professional bedside manners, and INC standard test guides.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left border-t md:border-t-0 md:border-l border-slate-200/50 md:pl-6 pt-6 md:pt-0">
                <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0 shadow-inner">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-tight text-slate-950">
                    Clinical Trainers
                  </h4>
                  <p className="text-[10.5px] leading-relaxed text-slate-500">
                    Our training is co-supervised by active MS Surgeons & MD Cardiologists from our adjacent functioning medical hubs.
                  </p>
                </div>
              </div>

            </div>

            {/* THREE RECOMMENDED CTA MODULES: APppy for admission, Download Prospectus, Visit Campus */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-6 border-t border-slate-100">
              
              <button
                onClick={() => {
                  const el = document.getElementById('admissions-desk');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98 cursor-pointer shadow-blue-800/10"
              >
                <ClipboardCheck className="w-4 h-4 text-white" />
                <span>Apply For Admission</span>
              </button>

              <button
                onClick={() => setIsProspectusOpen(true)}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-pink-600 animate-bounce" />
                <span>Download Prospectus</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Visit Campus</span>
              </button>

            </div>

          </div>
        </section>

        {/* ================= PLACEMENT & CAREER DEVELOPMENT SECTION ================= */}
        <section 
          id="placement" 
          className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-left scroll-mt-24 border-t border-slate-150"
        >
          {/* Subtle mesh pattern matching the academy branding */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f030_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f030_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] z-0 pointer-events-none" />
          
          <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-violet-100/15 filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-100/15 filter blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-16">
            
            {/* Header Layout */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-150 text-emerald-850 text-xs font-black uppercase tracking-widest font-heading shadow-xs select-none"
              >
                <Activity className="w-3.5 h-3.5 text-emerald-650 animate-pulse" />
                <span>Priority Corporate Recruitment Portal Linked</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight uppercase"
              >
                Placement & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c4ea3] to-[#702082]">
                  Career Development
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium"
              >
                We do not let students start their clinical studies without a clear vision of their destination. Experience active job placement prep, 1-to-1 CV drafting assistance, and prioritized roster enrollment inside premier regional hospitals.
              </motion.p>
            </div>

            {/* ================= SECTION A: THE INTERACTIVE CAREER PATHWAY TRAIL ================= */}
            <div className="space-y-8 bg-white border border-slate-200/80 rounded-[3rem] p-6 sm:p-10 lg:p-12 shadow-md relative">
              <div className="absolute top-4 right-6 hidden sm:block">
                <span className="text-[10px] font-mono font-black text-slate-400">
                  REF_CODE: RSM-PATH-2026_
                </span>
              </div>

              {/* Header inside of Pathway container */}
              <div className="text-left max-w-xl space-y-2">
                <span className="text-[10px] font-black text-indigo-750 font-mono uppercase tracking-widest">
                  ★ GUIDING CLINICAL JOURNEYS STEP-BY-STEP
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase font-heading text-slate-900 leading-tight">
                  Student Professional Pathway Roadmap
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                  Track how our trainees progress chronologically from early inductees to fully qualified, high-wage Nursing Professionals. Click on each block below to explore outcomes:
                </p>
              </div>

              {/* Pathway Flow Layout: Desktop Horizontal / Mobile Vertical */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-stretch">
                
                {/* Steps left selector panel: 4 core states */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-3 shrink-0">
                  {[
                    {
                      id: 0,
                      label: "Student",
                      sub: "Phase 1: Basic Foundations",
                      indicatorColor: "border-blue-500 bg-blue-50 text-blue-800"
                    },
                    {
                      id: 1,
                      label: "Training",
                      sub: "Phase 2: Simulation Skills Labs",
                      indicatorColor: "border-purple-500 bg-purple-50 text-purple-800"
                    },
                    {
                      id: 2,
                      label: "Clinical Practice",
                      sub: "Phase 3: Active Hospital Rotations",
                      indicatorColor: "border-pink-500 bg-pink-50 text-pink-800"
                    },
                    {
                      id: 3,
                      label: "Healthcare Professional",
                      sub: "Phase 4: Board Licensed Nurse",
                      indicatorColor: "border-emerald-500 bg-emerald-50 text-emerald-800"
                    }
                  ].map((step, sIdx) => {
                    const isSelected = activePathwayStep === step.id;
                    return (
                      <div key={step.id} className="relative flex items-center">
                        {/* Connecting visual arrows between blocks in linear order */}
                        {sIdx > 0 && (
                          <div className="absolute -top-3 left-6 h-3 w-[2px] bg-slate-200 hidden lg:block" />
                        )}

                        <button
                          onClick={() => setActivePathwayStep(step.id)}
                          className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-4 relative group ${
                            isSelected 
                              ? 'bg-slate-900 border-slate-900 text-white shadow-md scale-101' 
                              : 'bg-slate-50 hover:bg-slate-100/50 border-slate-200 text-slate-800'
                          }`}
                        >
                          {/* Chronological Circle Indicator */}
                          <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-sm font-black shrink-0 ${
                            isSelected ? 'bg-indigo-750 border-white text-white' : 'bg-white border-slate-350 text-slate-800'
                          }`}>
                            0{step.id + 1}
                          </div>

                          <div className="space-y-0.5 pointer-events-none select-none">
                            <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight">
                              {step.label}
                            </h4>
                            <p className={`text-[10px] leading-tight ${isSelected ? 'text-slate-350' : 'text-slate-500'}`}>
                              {step.sub}
                            </p>
                          </div>

                          {/* Mini dynamic right arrow on selection */}
                          {isSelected && (
                            <div className="ml-auto animate-bounce-horizontal">
                              <ArrowRight className="w-4 h-4 text-emerald-400" />
                            </div>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Right display content pane detailing the active stage */}
                <div className="lg:col-span-8">
                  <AnimatePresence mode="wait">
                    {[
                      {
                        id: 0,
                        header: "PHASE 01 — CLASSROOM SCIENCE FOUNDATIONS",
                        title: "Induction to Professional Nursing Academics",
                        badge: "Freshman Entry Phase",
                        badgeColor: "bg-blue-50 border-blue-200 text-blue-800",
                        description: "Every student starts by solidifying clinical fundamentals, understanding biological terminology, learning medical ethics, and building textbook discipline. This prepares theoretical foundations under direct academic tutors.",
                        duration: "First Year Focus",
                        skills: ["Human Anatomy & Physiology", "Nursing Ethics & Code of Conduct", "Clinical Terminology", "Fever/Vital Measurements"],
                        parentAssurance: "✓ Zero clinical pressure: Students study theory safely without initial stress on proctored hospital floors."
                      },
                      {
                        id: 1,
                        header: "PHASE 02 — PROCEDURAL SIMULATION PRACTICUMS",
                        title: "Advanced Skill Labs & Training Competence",
                        badge: "Laboratory Skill Phase",
                        badgeColor: "bg-purple-50 border-purple-200 text-purple-800",
                        description: "Once classroom theory is solid, trainees enter specialized procedural simulation labs. Practicing emergency CPR, sterile fields setups, drug dose calculations, and intravenous needle insertion on high-tech training apparatus.",
                        duration: "Year 1.5 to Year 2 Focus",
                        skills: ["Intravenous Cannulation Practice", "Cardiopulmonary Resuscitation (CPR)", "Sterile Fields Setup", "Emergency Airways Cleansing"],
                        parentAssurance: "✓ Skill Mastery: Students verify their manual dexterity on modern dummy arm models before treating live patients."
                      },
                      {
                        id: 2,
                        header: "PHASE 03 — ACTIVE HOSPITAL BEDSIDE ROTATIONS",
                        title: "Real Patient Clinical Exposure at MBD Hospital",
                        badge: "Advanced Internship Phase",
                        badgeColor: "bg-pink-50 border-pink-200 text-pink-850",
                        description: "Trainees transition to the clinical floors of adjacent 100-bed Mata Bhagyamani Devi Hospital. Directly participating in surgical prep rounds, obstetrics wards, emergency triage boards, and monitoring real patient files.",
                        duration: "Year 2 to Year 3 Focus",
                        skills: ["Bedside Wound Irrigation", "Pre/Post-Operative Assisting", "Obstetrics Delivery Room support", "Physician Care Plan Implementation"],
                        parentAssurance: "✓ Direct Supervision: Students are closely proctored by senior registered clinical instructors. Zero unattended risks."
                      },
                      {
                        id: 3,
                        header: "PHASE 04 — REGISTERED CLINICIAN ONBOARDING",
                        title: "Career Guidance & Placement Assistance",
                        badge: "Career Graduation Phase",
                        badgeColor: "bg-emerald-50 border-emerald-205 text-emerald-850",
                        description: "Professional support for career development, interview preparation and healthcare employment opportunities.",
                        duration: "Licensing & Placement Phase",
                        skills: ["Interview Preparation", "Resume & Portfolio Drafting", "Mock Employment Panels", "Healthcare Work Opportunities"],
                        parentAssurance: "✓ Career Guidance & Placement Assistance: Professional support for career development, interview preparation and healthcare employment opportunities."
                      }
                    ].map((step) => {
                      if (step.id !== activePathwayStep) return null;
                      return (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          className="h-full bg-slate-50 border border-slate-200/60 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between space-y-6"
                        >
                          <div className="space-y-4">
                            {/* Tags and Badges Header */}
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
                              <span className="text-[9.5px] font-black text-indigo-705 tracking-widest uppercase font-mono">
                                {step.header}
                              </span>
                              <span className={`px-3 py-0.5 border text-[9px] font-black uppercase rounded-lg shrink-0 ${step.badgeColor}`}>
                                {step.badge}
                              </span>
                            </div>

                            {/* Core Description Column */}
                            <div className="space-y-2 text-left">
                              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold font-mono">
                                <Clock className="w-3.5 h-3.5 text-indigo-650" />
                                <span>{step.duration}</span>
                              </div>
                              <h4 className="text-lg sm:text-xl font-black text-slate-950 uppercase font-heading tracking-tight leading-snug">
                                {step.title}
                              </h4>
                              <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                                {step.description}
                              </p>
                            </div>

                            {/* Skills Tag Field */}
                            <div className="space-y-2 text-left pt-2">
                              <span className="text-[10px] font-black text-slate-400 tracking-wider uppercase block">
                                KEY SKILLS & PROCEDURES MASTERED:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {step.skills.map((sk, skIdx) => (
                                  <span 
                                    key={skIdx}
                                    className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-[10.5px] font-bold shadow-xs select-none"
                                  >
                                    • {sk}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Parental Peace of Mind Section */}
                          <div className="p-4 bg-emerald-50/70 border border-emerald-150 rounded-2xl flex items-center gap-3 mt-4">
                            <div className="text-emerald-700 shrink-0">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                              <span className="text-[9.5px] font-black text-emerald-850 uppercase tracking-wide block font-mono leading-none mb-1">
                                PARENTS' PEACE OF MIND GUARANTEE:
                              </span>
                              <p className="text-[11px] font-medium text-emerald-950 leading-normal">
                                {step.parentAssurance}
                              </p>
                            </div>
                          </div>

                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

              </div>

              {/* Graphical Linear Flow Indicator representing career pathway */}
              <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left select-none font-mono text-[10px] font-black text-slate-400">
                <span>CHRONOLOGICAL CARREER PROGRESSION:</span>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-800 font-extrabold bg-slate-50 border border-slate-200 py-2 px-4 rounded-xl">
                  <span>Student Nurse</span>
                  <span className="text-slate-400">→</span>
                  <span>Simulation Labs Training</span>
                  <span className="text-slate-400">→</span>
                  <span>Direct Hospital Rotations</span>
                  <span className="text-slate-400">→</span>
                  <span className="text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-150">Registered Nurse Licensure & Hire</span>
                </div>
              </div>

            </div>

            {/* ================= SECTION B: THE CAREER QUALITY HIGHLIGHTS GRID (5 REQUESTED BENEFTIS) ================= */}
            <div className="space-y-8">
              <div className="text-left space-y-2">
                <span className="text-[9.5px] font-black uppercase text-indigo-750 tracking-widest block font-mono">
                  ★ PROFESSIONAL GRADUATE SUPPORT
                </span>
                <h3 className="text-2xl font-black font-heading text-slate-900 uppercase">
                  Highlights & Key Placement Benefits
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm max-w-xl font-medium">
                  We prepare our nursing graduates for extreme competitive advantages by focusing heavily on direct clinical learning modules, priority hiring registers, and certification preps.
                </p>
              </div>

              {/* 5 Cards detailing requested highlights in premium hover-capable layouts */}
              <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 gap-6">
                
                {/* 1. Healthcare Career Guidance - size span 3 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="md:col-span-3 lg:col-span-4 p-6 bg-white border border-slate-200/80 rounded-3xl flex flex-col justify-between text-left shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center shadow-inner">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 align-left text-left">
                      <h4 className="text-xs font-black uppercase tracking-tight text-slate-950 font-heading">
                        Healthcare Career Guidance
                      </h4>
                      <p className="text-[11.5px] leading-relaxed text-slate-600 font-medium">
                        Customized 1-on-1 CV writing tutorials, mock interview training with practicing surgeons, and personalized mentoring through State Council Registry Board exam logistics, helping secure competitive, high-paying placements.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-black text-indigo-700 font-mono">
                    <span>INDIVIDUAL COACHING METRIC</span>
                    <span>✓ REGISTERED</span>
                  </div>
                </motion.div>

                {/* 2. Clinical Exposure - size span 3 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="md:col-span-3 lg:col-span-3 p-6 bg-white border border-slate-200/80 rounded-3xl flex flex-col justify-between text-left shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 text-pink-700 flex items-center justify-center shadow-inner">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 align-left text-left">
                      <h4 className="text-xs font-black uppercase tracking-tight text-slate-950 font-heading">
                        Clinical Exposure
                      </h4>
                      <p className="text-[11.5px] leading-relaxed text-slate-600 font-medium">
                        Continuous active rotations inside critical intensive care units (ICU), specialized maternity labor rooms, and trauma emergency suites. Unlocking real bedside case experience and diagnostic chart management experience.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-black text-pink-700 font-mono">
                    <span>100-BED TERTIARY HOSPITAL</span>
                    <span>✓ 1500+ HOURS</span>
                  </div>
                </motion.div>

                {/* 3. Internship Opportunities - size span 3 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="md:col-span-3 lg:col-span-3 p-6 bg-white border border-slate-200/80 rounded-3xl flex flex-col justify-between text-left shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-705 flex items-center justify-center shadow-inner">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 align-left text-left">
                      <h4 className="text-xs font-black uppercase tracking-tight text-slate-950 font-heading">
                        Internship Opportunities
                      </h4>
                      <p className="text-[11.5px] leading-relaxed text-slate-600 font-medium">
                        Guaranteed 6-month hands-on internships directly linked to medical operations lists. Build authentic healthcare working experience prior to licensing audits, elevating resume profiles dramatically.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-black text-emerald-700 font-mono">
                    <span>HANDS-ON PAID CLINICIAL WORK</span>
                    <span>✓ CERTIFIED</span>
                  </div>
                </motion.div>

                {/* 4. Hospital-Based Learning - size span 3 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="md:col-span-3 lg:col-span-5 p-6 bg-white border border-slate-200/80 rounded-3xl flex flex-col justify-between text-left shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-105 text-blue-700 flex items-center justify-center shadow-inner">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 align-left text-left">
                      <h4 className="text-xs font-black uppercase tracking-tight text-slate-950 font-heading">
                        Hospital-Based Learning
                      </h4>
                      <p className="text-[11.5px] leading-relaxed text-slate-600 font-medium">
                        Immediate integration inside Mata Bhagyamani Devi Hospital. Academic nursing lectures instantly map onto active cases. Trainees avoid artificial sandbox templates by monitoring actual patient records, learning diagnostic tools first-hand.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-black text-blue-700 font-mono">
                    <span>MATA BHAGYAMANI DEVI PARTNERSHIP</span>
                    <span>✓ ZERO DUST DUNCE CELLS</span>
                  </div>
                </motion.div>

                {/* 5. Professional Skill Development - size span 3 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="md:col-span-6 lg:col-span-5 p-6 bg-white border border-slate-200/80 rounded-3xl flex flex-col justify-between text-left shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 text-purple-700 flex items-center justify-center shadow-inner">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 align-left text-left">
                      <h4 className="text-xs font-black uppercase tracking-tight text-slate-950 font-heading">
                        Professional Skill Development
                      </h4>
                      <p className="text-[11.5px] leading-relaxed text-slate-600 font-medium">
                        Interactive workshops introducing advanced emergency cardiovascular support (ACLS), digital electronic medical records (EMR) charting systems, patient counseling ethics, and critical leadership modules to nurture executive nursing supervisors.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-black text-purple-700 font-mono">
                    <span>ACLS & LIFE SUPPORT WORKSHOPS</span>
                    <span>✓ EXPERT STAGES</span>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Structured CTAs matching existing template */}
            <div className="border-t border-slate-150 pt-16 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              
              <button
                onClick={() => {
                  const el = document.getElementById('admissions-desk');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98 cursor-pointer shadow-blue-800/10"
              >
                <ClipboardCheck className="w-4 h-4 text-white" />
                <span>Apply For Admission</span>
              </button>

              <button
                onClick={() => setIsProspectusOpen(true)}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-pink-600 animate-bounce" />
                <span>Download Prospectus</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 h-13 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Visit Campus</span>
              </button>

            </div>

          </div>
        </section>

        {/* ================= DETAILED ADMISSIONS WALKTHROUGH & PORTAL SECTION ================= */}
        <AdmissionsOverview />
        <AdmissionProcess />

        {/* ================= INTERACTIVE ELIGIBILITY INSTANT ESTIMATOR ================= */}
        <section id="eligibility" className="max-w-4xl mx-auto px-4 md:px-8 scroll-mt-24">
          
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden text-left grid grid-cols-1 md:grid-cols-12">
            
            {/* Left form inputs side */}
            <div className="md:col-span-7 p-6 md:p-10 space-y-6">
              
              <div className="space-y-2">
                <span className="text-pink-600 text-[10px] font-black uppercase tracking-widest block font-heading">
                  EVALUATE AND SUBMIT
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight font-heading leading-tight">
                  Interactive Candidate Eligibility Check
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Select your current credentials to immediately verify which accredited health programs you can secure registered enrollment for in Bihar.
                </p>
              </div>

              <form onSubmit={checkEligibility} className="space-y-4">
                
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Gender Selector */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-450 tracking-wider">Candidate Gender</label>
                    <select 
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs font-bold bg-white"
                    >
                      <option value="female">Female (Recommended for ANM)</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Prior Qualification */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-450 tracking-wider">Education Level</label>
                    <select 
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs font-bold bg-white"
                    >
                      <option value="12th">Passed 12th (Senior Sec)</option>
                      <option value="10th">Passed 10th (Secondary)</option>
                      <option value="grad">Graduate / Undergrad</option>
                    </select>
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Stream Selection */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-450 tracking-wider">12th Streams / Major</label>
                    <select 
                      value={stream}
                      disabled={qualification === '10th'}
                      onChange={(e) => setStream(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs font-bold bg-white disabled:bg-slate-100"
                    >
                      <option value="arts">Humanities / Arts</option>
                      <option value="pcb">Science (Physics / Chem / Biology)</option>
                      <option value="commerce">Commerce / Others</option>
                    </select>
                  </div>

                  {/* Marks range slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-black uppercase text-slate-450 tracking-wider">Aggregate Percentage</label>
                      <span className="text-xs font-extrabold text-indigo-700">{marks}%</span>
                    </div>
                    <input 
                      type="range"
                      min="35"
                      max="100"
                      value={marks}
                      onChange={(e) => setMarks(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-700"
                    />
                  </div>

                </div>

                <button 
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-indigo-700 hover:bg-indigo-805 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <ClipboardCheck className="w-4 h-4" />
                  <span>Verify Status Instantly</span>
                </button>

              </form>

            </div>

            {/* Right instant result feedback panel representing real-time checking */}
            <div className="md:col-span-5 bg-gradient-to-b from-indigo-950 to-slate-950 text-white p-6 md:p-10 flex flex-col justify-between relative overflow-hidden">
              
              <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] rounded-full bg-purple-500/10 filter blur-3xl pointer-events-none" />
              
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-bold text-pink-400 tracking-wider uppercase block">
                    BIHAR ADMISSIONS ALGORITHM
                  </span>
                  <h4 className="text-base font-black text-white font-heading mt-0.5">
                    Evaluation Matrix Result
                  </h4>
                </div>

                {!eligibilityResult ? (
                  <div className="py-8 space-y-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center animate-bounce">
                      <HelpCircle className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-slate-200">No calculation verified yet</h5>
                      <p className="text-[10.5px] text-slate-400 leading-normal font-light">
                        Select your aggregate parameters and click the verification button. Our system parses local seat criteria immediately.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-left">
                    
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        eligibilityResult.eligible ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                      }`}>
                        <CheckCircle2 className="w-5 h-5 stroke-[3]" />
                      </div>
                      <div>
                        <span className="text-[8.5px] font-bold uppercase text-slate-400 block leading-tight">ACCURATE OUTCOME</span>
                        <h5 className={`text-sm font-black font-heading ${
                          eligibilityResult.eligible ? 'text-emerald-400' : 'text-rose-400'
                        }`}>
                          {eligibilityResult.eligible ? 'APPROVED ALIGNMENT' : 'SPECIAL CASE ENHANCEMENT'}
                        </h5>
                      </div>
                    </div>

                    <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/10">
                      <p className="text-[10.5px] font-bold text-[#0c4ea3] leading-none">RECOMMENDED TRACK:</p>
                      <h6 className="text-sm font-black text-pink-400 leading-tight">
                        {eligibilityResult.course}
                      </h6>
                      <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                        {eligibilityResult.reason}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-bold">PROBABILITY CHANCE:</span>
                      <span className="text-white font-black bg-pink-600/45 border border-pink-500 px-2 py-0.5 rounded uppercase font-mono">
                        {eligibilityResult.chance}
                      </span>
                    </div>

                  </div>
                )}

              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-[9.5px] text-slate-400 leading-relaxed font-light">
                  ★ These calculations are for general guidelines. All admissions require strict verification of certificates during physical entry.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ================= HIGH CONVERTING CALLBACK FORM SECTION ================= */}
        <section id="admissions-desk" className="max-w-5xl mx-auto px-4 md:px-8">
          
          <div className="rounded-[3rem] bg-gradient-to-tr from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 md:p-14 text-white text-left grid grid-cols-1 lg:grid-cols-12 gap-10 border border-white/10 relative overflow-hidden shadow-2xl">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-pink-500/10 border border-pink-500/30 text-pink-300 rounded-full text-[9px] font-black uppercase tracking-widest">
                <Activity className="w-3.5 h-3.5 text-pink-500" />
                <span>ADMISSIONS CELL ALWAYS ON STANDBY</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2.5xl sm:text-3xl font-extrabold tracking-tight font-heading leading-tight text-white">
                  Speak Directly With Our Admissions Officer Today
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Don’t remain confused about course fees, hostel seat capacity, state curriculum recognition limits, or final internship guidelines. Leave physical contact coordinates and a representative will call in under 2 hours.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2.5xl p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Helpline Office Desk</span>
                    <a href="tel:7250853234" className="text-base font-black hover:underline text-white">
                      +91 7250853234
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Kudra Campus Office</span>
                    <span className="text-xs text-white font-medium">
                      Sakari Mod, Kudra, Kaimur District, Bihar - 821108
                    </span>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 relative">
              
              {!applySuccess ? (
                <form onSubmit={handleApplyForm} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-300 tracking-wider">Student full Name</label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Kumari Priya"
                        value={applyForm.name}
                        onChange={(e) => setApplyForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full p-3 rounded-xl bg-white/10 text-white text-xs border border-white/10 focus:border-pink-500 font-bold outline-none placeholder:text-slate-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-300 tracking-wider">Direct WhatsApp / Call Mobile</label>
                      <input 
                        type="tel"
                        required
                        placeholder="e.g. 725085xxxx"
                        value={applyForm.phone}
                        onChange={(e) => setApplyForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full p-3 rounded-xl bg-white/10 text-white text-xs border border-white/10 focus:border-pink-500 font-bold outline-none placeholder:text-slate-500"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-300 tracking-wider">Target Academic Course</label>
                      <select 
                        value={applyForm.course}
                        onChange={(e) => setApplyForm(prev => ({ ...prev, course: e.target.value }))}
                        className="w-full p-3 rounded-xl bg-slate-900 text-white text-xs border border-white/10 focus:border-pink-500 font-bold outline-none"
                      >
                        <option value="anm">ANM (Auxiliary Nurse Midwifery)</option>
                        <option value="paramedical">Paramedical Certificate training</option>
                        <option value="gnm">GNM (Proposed Extension)</option>
                        <option value="bsc">B.Sc. Nursing (Proposed Degree)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-300 tracking-wider">Hometown / City</label>
                      <input 
                        type="text"
                        placeholder="e.g. Kudra, Sasaram, Bhabua"
                        value={applyForm.city}
                        onChange={(e) => setApplyForm(prev => ({ ...prev, city: e.target.value }))}
                        className="w-full p-3 rounded-xl bg-white/10 text-white text-xs border border-white/10 focus:border-pink-500 font-bold outline-none placeholder:text-slate-500"
                      />
                    </div>

                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-slate-300 tracking-wider">Additional notes (Optional)</label>
                    <textarea 
                      rows={2}
                      placeholder="e.g. Requesting fee installment details & female hostel room occupancy status"
                      value={applyForm.notes}
                      onChange={(e) => setApplyForm(prev => ({ ...prev, notes: e.target.value }))}
                      className="w-full p-3 rounded-xl bg-white/10 text-white text-xs border border-white/10 focus:border-pink-500 font-bold outline-none placeholder:text-slate-500 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                  >
                    <Send className="w-4 h-4 animate-pulse" />
                    <span>Secure Priority Admissions Consultation</span>
                  </button>

                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white font-heading">
                      Admissions Request Logged!
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2 mx-auto max-w-sm">
                      Thank you, <strong>{applyForm.name}</strong>. Your coordinate metrics for the ANM / Paramedical wing have been locked. An academic officer will reach out directly on <strong>{applyForm.phone}</strong> dynamically.
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>

        </section>

        <TestimonialsSection />

        {/* ================= STUNNING CAMPUS GALLERY BRANDING ================= */}
        <section id="gallery" className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 scroll-mt-24 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-indigo-700 text-xs font-black uppercase tracking-widest font-heading block">
              ACADEMIC PICTURE SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Campus Life & Hospital Practice Gallery
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Inspect our real educational surroundings, interactive labs, and professional clinical rotations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Advanced Skill Simulation Lab",
                desc: "Equipped with interactive surgical simulation dolls for catheter and IV practice.",
                img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Active Maternity Ward Training",
                desc: "Undergraduates performing real-time infant welfare cataloging in the general ward.",
                img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Modern Reference Library",
                desc: "An extensive wing with global journals, diagnostic encyclopedias, and high-speed research terminals.",
                img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "State Inspection Board Review",
                desc: "Annual assessment of our training protocols by high-ranking healthcare representatives.",
                img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
              }
            ].map((media, idx) => (
              <div 
                key={idx}
                className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-[220px] overflow-hidden relative">
                  <img 
                    src={media.img} 
                    alt={media.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-[10px] font-black tracking-widest text-[#db2777] uppercase bg-white/95 px-2.5 py-1 rounded-full shadow-md">
                      VERIFIED CAMPUS PHOTO
                    </span>
                  </div>
                </div>
                <div className="p-5 text-left space-y-1">
                  <h4 className="text-xs font-heading font-black text-slate-955 tracking-tight">
                    {media.title}
                  </h4>
                  <p className="text-[11px] leading-relaxed text-slate-550 font-semibold">
                    {media.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CAMPUS GEOGRAPHY & CONTACT REACHOUT ================= */}
        <section id="contact" className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 scroll-mt-24 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-slate-900 rounded-[3rem] p-8 md:p-14 text-white border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/10 filter blur-3xl pointer-events-none" />
            
            <div className="lg:col-span-6 text-left space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-pink-400 text-xs font-black uppercase tracking-widest font-heading block">
                  LOCATE THE COLLEGE PREMISES & HELPLINES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading leading-tight text-white uppercase">
                  Ramdhari Singh Memorial Nursing College
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  Our nursing campus and residential hostel is co-located directly inside the premises of <strong>Mata Bhagyamani Devi Hospital</strong>. Tour the anatomy models, simulation deck, reference library, and meet our admissions officers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-pink-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h5 className="text-[10px] uppercase font-black text-slate-400 font-heading">Campus Location</h5>
                      <p className="text-[12px] leading-snug text-white font-bold mt-0.5">
                        Ramdhari Singh Memorial Nursing College, Kudra, Kaimur, Bihar - 821108
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-indigo-400 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h5 className="text-[10px] uppercase font-black text-slate-400 font-heading">Admissions Helpline</h5>
                      <div className="text-[12px] leading-snug text-white font-bold mt-0.5 space-y-1">
                        <a href="tel:+917250853234" className="hover:text-pink-400 block transition-colors">+91 7250853234</a>
                        <a href="tel:+919110996491" className="hover:text-pink-400 block transition-colors">+91 9110996491</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admission Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/5">
                <a 
                  href="tel:+917250853234" 
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-200" />
                  <span>📞 Call Now</span>
                </a>

                <a 
                  href="https://wa.me/917250853234?text=Hello%2c%20I%20am%20interested%20in%20admissions%20at%20Ramdhari%20Singh%20Memorial%20Nursing%20College.%20Please%20share%2520details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-250 animate-pulse" />
                  <span>💬 WhatsApp</span>
                </a>

                <button 
                  onClick={() => {
                    const el = document.getElementById('eligibility');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <ClipboardCheck className="w-3.5 h-3.5 text-pink-400" />
                  <span>📝 Apply Now</span>
                </button>

                <button 
                  onClick={() => setIsProspectusOpen(true)}
                  className="px-4 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-50 font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-indigo-600" />
                  <span>📥 Prospectus</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden min-h-[250px] md:min-h-[300px] border border-white/10">
              {/* Premium Google Maps Mockup Frame */}
              <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/15 flex items-center justify-center text-indigo-400 animate-pulse border border-indigo-500/30">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="space-y-1 max-w-sm">
                  <h4 className="text-xs font-black uppercase text-white font-heading">Official Geographic Coordinate</h4>
                  <p className="text-[11.5px] text-slate-400 leading-normal">
                    Located on NH-2 (Grand Trunk Road) intersection Sakari Mod Kudra. <br />
                    <span className="text-pink-400 font-mono font-bold text-[10px]">Plus Code: 2RR2+C74, Sakri, Bihar 821108</span>
                  </p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/iWHUkY4b66UiYGHz6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-black uppercase tracking-wider transition-all"
                >
                  Open in Google Maps Direct Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SUPPORT & FAQS SECTION ================= */}
        <section id="faq" className="max-w-4xl mx-auto px-4 md:px-8 space-y-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-indigo-700 text-xs font-black uppercase tracking-widest font-heading block">
              HAVE GENERAL QUESTIONS?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 text-left space-y-2 hover:border-slate-300 transition-all shadow-sm"
              >
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <h4 className="text-sm font-black text-slate-950 font-heading leading-snug">
                    {faq.q}
                  </h4>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm pl-7 leading-relaxed font-semibold">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </section>

      </main>

      {/* Collegiate Custom Academic Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 px-4 md:px-8 border-t border-slate-900 text-left relative z-10 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <School className="w-6 h-6 text-pink-500" />
              <span className="text-sm font-black text-white uppercase tracking-wider font-heading">
                Ramdhari Singh Memorial Nursing College
              </span>
            </div>
            <p className="text-[11.5px] leading-relaxed text-slate-400 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-300">
              Building Future Healthcare Professionals
            </p>
            <p className="text-xs text-white font-extrabold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Admissions: 2026 - 27 Open
            </p>
            <div className="pt-2">
              <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider mb-1">Associated Institution:</span>
              <p className="text-xs text-slate-300 font-bold flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Mata Bhagyamani Devi Hospital</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4 font-heading">
              Admissions Helpline
            </h4>
            <div className="space-y-2.5">
              <a href="tel:+917250853234" className="text-xs font-extrabold hover:text-white text-slate-300 flex items-center gap-2 transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-pink-500" />
                <span>+91 7250853234</span>
              </a>
              <a href="tel:+919110996491" className="text-xs font-extrabold hover:text-white text-slate-300 flex items-center gap-2 transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-pink-500" />
                <span>+91 9110996491</span>
              </a>
              <p className="text-[10.5px] leading-relaxed text-slate-500">
                Call us directly to check academic counseling slots or reserve on-spot registrations.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-400">
              <li><a href="#academic-hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#hospital-training" className="hover:text-white transition-colors">Hospital Training</a></li>
              <li><a href="#eligibility" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li className="pt-2 border-t border-slate-900">
                <button onClick={onBackToHospital} className="hover:text-white text-left cursor-pointer flex items-center gap-1.5 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Hospital General Portal</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4 font-heading">
              Official Campus Address
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              📍 Sakari Mod, Kudra, Kaimur District, Bihar - 821108 <br />
              (Directly inside the premises of Mata Bhagyamani Devi Hospital)
            </p>
            <div className="pt-2 border-t border-slate-900">
              <span className="text-[9.5px] text-slate-500 font-bold block uppercase tracking-wider mb-1">Tagline:</span>
              <p className="text-xs font-extrabold text-indigo-400 uppercase tracking-widest">
                Learn • Train • Serve
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-semibold">
          <p>© 2026 Ramdhari Singh Memorial Nursing College. All Rights Reserved.</p>
          <p>Affiliated inside Kaimur, Bihar | Associated with M.B.D. Hospital</p>
        </div>
      </footer>

      {/* ================= ACCREDITED COURSE SYLLABUS DISCIPLINE DIALOG / MODAL ================= */}
      <AnimatePresence>
        {selectedSyllabusCourse && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-white rounded-[2rem] p-6 md:p-8 max-w-xl w-full relative shadow-2xl border border-slate-100 text-left space-y-6"
            >
              
              <button 
                onClick={() => setSelectedSyllabusCourse(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-50 border border-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {(() => {
                const item = courses.find(c => c.id === selectedSyllabusCourse);
                if (!item) return null;
                return (
                  <div className="space-y-5">
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                        <BookOpenCheck className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-slate-950 font-heading">
                          {item.title} Course Curriculum
                        </h3>
                        <p className="text-[9.5px] text-slate-400 font-extrabold uppercase tracking-wider">
                          Certified Syllabus Standards • Duration: {item.duration}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-normal font-light">
                      Students acquire deep proficiency across the following primary academic and direct hospital bedside training structures:
                    </p>

                    <div className="space-y-2.5 bg-slate-50 p-4 rounded-xl border border-slate-150">
                      <h4 className="text-[10px] font-black uppercase text-indigo-750 tracking-wider">
                        Primary Curriculum Modules (By Year)
                      </h4>
                      <div className="space-y-2 text-xs font-bold text-slate-700">
                        {item.syllabus.map((syl, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5">
                            <span className="text-indigo-600 font-black">0{sIdx+1}.</span>
                            <span>{syl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                      <h4 className="text-[10px] font-black uppercase text-indigo-800 tracking-widest">
                        🎯 Key Career Placements Under this Certificate
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {item.careerProspects}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-2">
                      <span className="text-[9px] text-[#db2777] font-extrabold uppercase tracking-wide">
                        ★ attached with 100-bed hospital
                      </span>

                      <button
                        onClick={() => {
                          setSelectedSyllabusCourse(null);
                          setIsProspectusOpen(true);
                        }}
                        className="px-4 py-2 rounded-xl bg-indigo-700 hover:bg-indigo-805 text-white text-[10px] font-black uppercase tracking-wider cursor-pointer"
                      >
                        Download Prospectus
                      </button>
                    </div>

                  </div>
                );
              })()}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= GLOBAL PROSPECTUS REQUEST MODAL ================= */}
      <AnimatePresence>
        {isProspectusOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-55 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-white rounded-[2rem] p-6 md:p-8 max-w-md w-full relative shadow-2xl border border-slate-100 text-left space-y-6"
            >
              
              <button 
                onClick={() => {
                  setIsProspectusOpen(false);
                  setProspectusSuccess(false);
                }}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-50 border border-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 text-rose-600 flex items-center justify-center shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-950 font-heading">
                    Official Prospectus Access Catalog
                  </h3>
                  <p className="text-[9.5px] text-indigo-700 font-black uppercase tracking-wider">
                    Ramdhari Singh Admissions Office
                  </p>
                </div>
              </div>

              {!prospectusSuccess ? (
                <form onSubmit={handleProspectusFormSubmit} className="space-y-4">
                  
                  <p className="text-xs text-slate-600 leading-normal font-semibold">
                    Submit candidate academic coordinates to instantly generate download credentials for the dynamic course brochure, syllabus guidelines, and hostel pricing cards.
                  </p>

                  <div className="space-y-1">
                    <label className="text-[9.5px] font-black uppercase text-slate-450 tracking-wider">Student Name</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Priya Kumari"
                      value={prospectusForm.name}
                      onChange={(e) => setProspectusForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-1 focus:ring-indigo-500 font-bold outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    
                    <div className="space-y-1">
                      <label className="text-[9.5px] font-black uppercase text-slate-450 tracking-wider font-heading">Mobile Number</label>
                      <input 
                        type="tel"
                        required
                        placeholder="e.g. 725085xxxx"
                        value={prospectusForm.phone}
                        onChange={(e) => setProspectusForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-1 focus:ring-indigo-500 font-bold outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9.5px] font-black uppercase text-slate-450 tracking-wider">Target Course</label>
                      <select 
                        value={prospectusForm.course}
                        onChange={(e) => setProspectusForm(prev => ({ ...prev, course: e.target.value }))}
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-1 focus:ring-indigo-500 font-black bg-white outline-none"
                      >
                        <option value="anm">ANM (Hospital Attached)</option>
                        <option value="paramedical">Paramedical Certificate</option>
                      </select>
                    </div>

                  </div>

                  <div className="space-y-1">
                    <label className="text-[9.5px] font-black uppercase text-slate-450 tracking-wider">Email Address</label>
                    <input 
                      type="email"
                      required
                      placeholder="e.g. kumari.priya@gmail.com"
                      value={prospectusForm.email}
                      onChange={(e) => setProspectusForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-1 focus:ring-indigo-500 font-bold outline-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-indigo-700 hover:bg-slate-900 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                  >
                    <Download className="w-4 h-4 animate-bounce" />
                    <span>Download Interactive Prospectus</span>
                  </button>

                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-250 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900 font-heading">
                      Prospectus Access Link Dispatched!
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-2 max-w-sm mx-auto">
                      Congratulations <strong>{prospectusForm.name}</strong>. The prospectus credentials have been configured and sent to <strong>{prospectusForm.email}</strong>. Our counselors will reach out to schedule an orientation for the <strong>{prospectusForm.course.toUpperCase()}</strong> track on <strong>{prospectusForm.phone}</strong>.
                    </p>
                  </div>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= VISIT MATA BHAGYAMANI HOSPITAL PORTAL PROMPT CARD ================= */}
      <AnimatePresence>
        {showFloatingHospitalBadge && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 20, stiffness: 120, delay: 1 }}
            className="fixed bottom-20 md:bottom-6 right-6 z-35 w-[340px] max-w-[calc(100vw-32px)] bg-white/90 backdrop-blur-xl border border-[#0c4ea3]/20 shadow-[0_20px_50px_rgba(12,78,163,0.15)] rounded-2xl p-5 text-left text-slate-900 group"
          >
            {/* Ambient subtle glowing radar */}
            <div className="absolute -top-1 -left-1 w-[calc(100%+8px)] h-[calc(100%+8px)] rounded-2xl bg-gradient-to-r from-[#0c4ea3]/10 to-[#702082]/10 filter blur-md -z-10 animate-pulse" />

            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="inline-flex items-center gap-2 py-1 px-3 bg-blue-50/80 border border-blue-100 rounded-full text-[9px] font-black uppercase tracking-widest text-[#0c4ea3] shadow-xs">
                <HeartPulse className="w-3 h-3 text-pink-500 animate-pulse shrink-0" />
                <span>Active Clinical Campus Hub</span>
              </div>
              <button 
                onClick={() => setShowFloatingHospitalBadge(false)}
                className="p-1 rounded-lg bg-slate-100 hover:text-slate-750 hover:bg-slate-200 transition-all cursor-pointer border border-slate-200/50"
                title="Dismiss prompt"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Core Box Text & Showcase Content */}
            <div className="space-y-2 mb-4">
              <h4 className="text-sm font-black font-heading text-slate-950 uppercase tracking-tight leading-tight flex items-center gap-1.5">
                Visit Mata Bhagyamani Hospital
              </h4>
              <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
                Switch instantly to our main 100-bed multi-speciality tertiary care medical facility portal. Access OPD schedules, book consult tokens, and explore critical emergency medicine wings.
              </p>
            </div>

            {/* Interactive Showcase Statistics for the Hospital */}
            <div className="grid grid-cols-2 gap-2 mb-4 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
              <div className="text-left">
                <span className="text-[9px] font-bold text-slate-400 block uppercase leading-none font-mono">CAPABILITY</span>
                <span className="text-xs font-extrabold text-indigo-950">100 Beds Active</span>
              </div>
              <div className="text-left border-l border-slate-200 pl-2">
                <span className="text-[9px] font-bold text-slate-400 block uppercase leading-none font-mono">OPD CLINICS</span>
                <span className="text-xs font-extrabold text-[#702082]">Consult Doctors</span>
              </div>
            </div>

            {/* High Converting Action Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBackToHospital}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0c4ea3] via-[#4d3091] to-[#702082] text-white font-black text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md relative overflow-hidden transition-all group"
            >
              {/* Sliding glass shine effect */}
              <span className="absolute inset-x-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span>Enter Hospital Portal</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Bottom Admissions Quick bar for Mobile Screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-105 py-2.5 px-4 flex items-center justify-between gap-3 shadow-[0_-10px_25px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col text-left leading-none">
          <span className="text-[10px] font-extrabold uppercase text-pink-600 tracking-wider">Admissions 2026</span>
          <span className="text-[11px] font-bold text-slate-500 mt-1 whitespace-nowrap">ANM & GNM Seats Open</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const el = document.getElementById('admissions-desk');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3.5 py-2.5 h-[44px] rounded-xl bg-indigo-700 text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-sm whitespace-nowrap cursor-pointer min-w-[100px]"
          >
            <ClipboardCheck className="w-3.5 h-3.5 shrink-0 text-pink-400" />
            <span>Apply Now</span>
          </button>
          <button
            onClick={() => setIsProspectusOpen(true)}
            className="px-3.5 py-2.5 h-[44px] rounded-xl border border-indigo-200 bg-white text-indigo-700 font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all whitespace-nowrap cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 shrink-0 text-pink-500" />
            <span>Brochure</span>
          </button>
        </div>
      </div>

    </div>
  );
}

// Simple Helper Components for local usage
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499c-.198-.415-.818-.415-1.016 0L8.217 8.24l-5.23.76c-.457.066-.64.63-.309.95l3.784 3.69-1.002 5.21c-.088.455.39.8.795.584L11 16.945l4.545 2.39c.405.216.883-.13.795-.584l-1.002-5.21 3.784-3.69c.331-.32.148-.884-.31-.95l-5.228-.76-2.217-4.741H11.48z"
      />
    </svg>
  );
}
