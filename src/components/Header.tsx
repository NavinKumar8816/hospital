import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  ShieldAlert, 
  Heart, 
  Plus, 
  Menu, 
  X, 
  MapPin, 
  Award, 
  Lock, 
  BookOpen, 
  Image as ImageIcon, 
  ExternalLink, 
  Check, 
  CheckCircle,
  Clock,
  ArrowRight,
  MessageSquare,
  GraduationCap
} from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [nursingModalOpen, setNursingModalOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [activePhotoCategory, setActivePhotoCategory] = useState<'all' | 'critical' | 'care' | 'tech'>('all');
  const [selectedPhotoFullscreen, setSelectedPhotoFullscreen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setAboutModalOpen(false);
        setNursingModalOpen(false);
        setGalleryModalOpen(false);
        setSelectedPhotoFullscreen(null);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navItems = [
    { label: 'Home', desktopLabel: 'Home', id: 'home' },
    { label: 'About', desktopLabel: 'About', id: 'about' },
    { label: 'Doctors', desktopLabel: 'Doctors', id: 'doctors' },
    { label: 'Departments', desktopLabel: 'Services', id: 'services' },
    { label: 'Trauma Center', desktopLabel: 'Trauma', id: 'trauma', badge: 'RED' },
    { label: 'Facilities', desktopLabel: 'Facilities', id: 'facilities' },
    { label: 'Ayushman Bharat', desktopLabel: 'Ayushman', id: 'ayushman', badge: 'FREE' },
    { label: 'Gallery', desktopLabel: 'Gallery', id: 'gallery' },
    { label: 'Contact', desktopLabel: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (item: typeof navItems[number]) => {
    setMobileMenuOpen(false);
    onNavigate(item.id);
  };

  // Premium Hospital Gallery Items
  const galleryPhotos = [
    {
      url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800',
      title: 'Our Specialist Senior Board',
      desc: 'Top emergency physicians and chief gynaecologists during daily medical briefing.',
      category: 'care'
    },
    {
      url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      title: 'Advanced Surgical ICU Wards',
      desc: 'Multiparameter patient monitors and high-frequency critical ventilator networks.',
      category: 'critical'
    },
    {
      url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
      title: 'Neonatal Incubator Intensive Care',
      desc: 'Level-II sterile incubation systems providing warmth for critical newborns.',
      category: 'critical'
    },
    {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      title: 'State-of-the-Art Radiology Suite',
      desc: 'High-frequency digital imaging and processing unit for immediate diagnostics.',
      category: 'tech'
    },
    {
      url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&q=80&w=800',
      title: 'Sakari Mod Building Facade',
      desc: 'Mata Bhagyamani Devi Hospital premise built with robust disaster-resistant plan.',
      category: 'tech'
    },
    {
      url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800',
      title: 'Maternity Labor & Delivery Room',
      desc: 'Fully sterilised clinical suite for painless deliveries and neonatal resuscitation.',
      category: 'care'
    }
  ];

  const filteredPhotos = activePhotoCategory === 'all' 
    ? galleryPhotos 
    : galleryPhotos.filter(p => p.category === activePhotoCategory);

  return (
    <>
      {/* ================= HEADER WRAPPER (TOPPING BOTH TOP BAR AND MAIN NAV) ================= */}
      <motion.header 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 flex flex-col"
      >
        
        {/* ================= 1. PREMIUM SLIM TOP INFORMATION BAR (DESKTOP ONLY) ================= */}
        <div className="hidden md:flex w-full bg-[#070e24] text-white py-2 px-4 md:px-8 text-[11px] font-semibold tracking-wide items-center justify-between gap-y-2 gap-x-4 border-b border-white/5 relative z-50 shadow-md">
          {/* Left: 24x7 indicators */}
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
            </span>
            <span className="text-white uppercase tracking-widest font-heading font-black">
              🔴 24×7 Emergency Trauma Center
            </span>
          </div>

          {/* Center Address */}
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-brand-pink" />
            <span className="font-medium">📍 Sakari Mod, Kudra, Kaimur, Bihar</span>
          </div>

          {/* Right: Emergency Hotline Call */}
          <div className="flex items-center">
            <a 
              href="tel:+917250853234" 
              className="flex items-center gap-1.5 text-rose-300 hover:text-rose-200 transition-all duration-300 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-rose-500/30"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse text-rose-405" />
              <span className="font-extrabold tracking-wide">📞 Emergency Helpline: 7250853234</span>
            </a>
          </div>
        </div>

        {/* ================= 2. MOBILE CONTINUOUS EMERGENCY NEWS TICKER (MOBILE ONLY) ================= */}
        <div className="flex md:hidden w-full bg-[#070e24] text-white h-9 items-center overflow-hidden border-b border-white/5 relative z-50 shadow-md select-none">
          <style>{`
            @keyframes mobileTickerScroll {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
            .animate-mobile-ticker-scroll {
              display: flex;
              width: max-content;
              animation: mobileTickerScroll 22s linear infinite;
              will-change: transform;
            }
          `}</style>
          <div className="animate-mobile-ticker-scroll flex items-center whitespace-nowrap text-[11px] font-bold tracking-wide gap-8 px-4">
            {/* Loop Segment 1 */}
            <div className="flex items-center gap-8 shrink-0">
              <span className="flex items-center gap-1.5 text-rose-400 uppercase font-black shrink-0">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse inline-block" />
                🚑 24×7 Emergency Services Available
              </span>
              <span className="text-slate-500 shrink-0 select-none">|</span>
              <span className="text-teal-400 font-extrabold shrink-0">🏥 Ayushman Bharat Supported</span>
              <span className="text-slate-500 shrink-0 select-none">|</span>
              <span className="text-pink-400 font-extrabold shrink-0">❤️ ICU • NICU Available</span>
              <span className="text-slate-500 shrink-0 select-none">|</span>
              <span className="text-yellow-450 font-extrabold shrink-0">🚑 Ambulance Service Available</span>
              <span className="text-slate-500 shrink-0 select-none">|</span>
              <a href="tel:+917250853234" className="text-rose-300 font-black hover:underline flex items-center gap-1 shrink-0">
                📞 Emergency Helpline: 7250853234
              </a>
            </div>
            {/* Loop Segment 2 (Duplicate for Seamless Scroll) */}
            <div className="flex items-center gap-8 shrink-0">
              <span className="flex items-center gap-1.5 text-rose-400 uppercase font-black shrink-0">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse inline-block" />
                🚑 24×7 Emergency Services Available
              </span>
              <span className="text-slate-500 shrink-0 select-none">|</span>
              <span className="text-teal-400 font-extrabold shrink-0">🏥 Ayushman Bharat Supported</span>
              <span className="text-slate-500 shrink-0 select-none">|</span>
              <span className="text-pink-400 font-extrabold shrink-0">❤️ ICU • NICU Available</span>
              <span className="text-slate-500 shrink-0 select-none">|</span>
              <span className="text-yellow-450 font-extrabold shrink-0">🚑 Ambulance Service Available</span>
              <span className="text-slate-500 shrink-0 select-none">|</span>
              <a href="tel:+917250853234" className="text-rose-300 font-black hover:underline flex items-center gap-1 shrink-0">
                📞 Emergency Helpline: 7250853234
              </a>
            </div>
          </div>
        </div>

        {/* ================= 3. MAIN NAVBAR ================= */}
        <div className="w-full px-2 md:px-5 xl:px-6 py-2 md:py-3 relative">
          <nav 
            id="main-nav"
            className={`w-full max-w-[1800px] mx-auto rounded-3xl transition-all duration-500 ease-in-out border overflow-visible ${
              isScrolled 
                ? 'bg-white/85 backdrop-blur-xl border-slate-200/60 shadow-xl py-2 md:py-3 px-3 md:px-5 xl:px-6' 
                : 'bg-white/95 md:bg-white/80 md:backdrop-blur-md border-white/40 shadow-lg py-2.5 md:py-4 px-3 md:px-5 xl:px-6'
            }`}
          >
            <div className="flex items-center justify-between gap-3 xl:gap-4 animate-fade-in overflow-visible">
              
              {/* LEFT SECTION: Premium Logo Area (Mother + Child + Medical Cross - Sized responsive) */}
              <div 
                id="nav-logo"
                onClick={() => {
                  onNavigate('overview');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2.5 md:gap-3 cursor-pointer group select-none ml-1 md:ml-0 shrink-0"
              >
                {/* Embedded Symbol Composition: Mother, Child, Medical Cross (Mobile-First 20% Slim size) */}
                <div className="relative w-[38px] h-[38px] md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-tr from-[#1e40af] via-[#5b21b6] to-[#db2777] shadow-lg shadow-[#5b21b6]/20 transition-transform duration-500 group-hover:scale-105 shrink-0">
                  <div className="absolute inset-0 bg-white/10 rounded-xl md:rounded-2xl filter blur-[1px]" />
                  {/* Heart for motherly compassion */}
                  <Heart className="w-5.5 h-5.5 md:w-7 md:h-7 text-[#ffe4e6] fill-[#ffe4e6]/10 absolute opacity-30 animate-pulse" />
                  {/* Bold clinical plus for medicine */}
                  <Plus className="w-3.5 h-3.5 md:w-5 md:h-5 text-white stroke-[3] relative z-10 translate-x-[-0.5px]" />
                  {/* Emoji baby graphic overlay representing child */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-4.5 h-4.5 md:-bottom-1 md:-right-1 md:w-6 md:h-6 rounded-full bg-brand-pink text-white flex items-center justify-center border md:border-2 border-white shadow-md z-20 shrink-0">
                    <span className="text-[8px] md:text-[10px] leading-none select-none">🤱</span>
                  </div>
                </div>

                <div className="flex flex-col text-left justify-center">
                  <span className="text-13px xs:text-sm md:text-base font-black tracking-tight text-slate-950 uppercase font-heading leading-tight group-hover:text-brand-purple transition-colors duration-300">
                    Mata Bhagyamani
                  </span>
                  <span className="text-[10px] xs:text-[11px] md:text-xs font-black text-brand-purple tracking-widest uppercase mt-0.5 leading-none">
                    Devi Hospital
                  </span>
                  <span className="text-[7.5px] xs:text-[9px] font-extrabold text-slate-400 tracking-wider uppercase mt-0.5 leading-none">
                    Care • Compassion • Trust
                  </span>
                  <span className="text-[8px] xs:text-[9px] text-emerald-600 font-bold mt-0.5 leading-none flex items-center gap-1">
                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Kudra, Kaimur
                  </span>
                </div>
              </div>

              {/* CENTER SECTION: Navigation Array */}
              <div className="hidden lg:flex min-w-0 flex-1 items-center justify-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-full bg-slate-100/60 border border-slate-200/40 mx-2 xl:mx-3 max-w-[620px] xl:max-w-[700px] 2xl:max-w-[760px]">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleItemClick(item)}
                      className={`relative shrink-0 px-2.5 xl:px-3 py-2 rounded-full text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.05em] transition-all duration-300 cursor-pointer whitespace-nowrap ${
                        isActive 
                          ? 'text-white' 
                          : 'text-slate-650 hover:text-slate-950 hover:bg-white/80'
                      }`}
                      title={item.label}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeHeaderTab"
                          className="absolute inset-0 bg-gradient-to-r from-medical-blue to-brand-purple rounded-full shadow-md shadow-brand-purple/10"
                          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                          style={{ zIndex: -1 }}
                        />
                      )}
                      
                      <span className="block">{item.desktopLabel}</span>
                      
                      {item.badge && (
                        <span className={`absolute -top-1.5 -right-1 text-[8px] font-black px-1.5 py-0.5 rounded-md ${
                          item.badge === 'RED' ? 'bg-rose-550 text-rose-600 animate-pulse bg-rose-50' : 'bg-teal-50 text-teal-600'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* RIGHT SECTION: CTA, Cashless Badge & Mobile Toggle */}
              <div className="flex shrink-0 items-center justify-end gap-3 overflow-visible">
                
                {/* Premium Purple Glow Nursing College Redirect Card with Admissions Open Badge */}
                <motion.button
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('nursing-college')}
                  className="hidden md:flex shrink-0 items-center gap-1.5 px-3 xl:px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-[#6d28d9] to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white text-[10px] font-black uppercase tracking-[0.08em] transition-all duration-300 cursor-pointer shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 relative overflow-visible whitespace-nowrap"
                >
                  <GraduationCap className="w-4 h-4 text-purple-100" />
                  <span className="whitespace-nowrap">🎓 Nursing College</span>
                  <motion.span
                    animate={{ y: [0, -2, 0], boxShadow: ['0 10px 24px rgba(236, 72, 153, 0.28)', '0 14px 32px rgba(249, 115, 22, 0.42)', '0 10px 24px rgba(236, 72, 153, 0.28)'] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-3 right-0 z-30 flex items-center gap-1 rounded-full bg-gradient-to-r from-[#ec4899] via-[#f97316] to-[#facc15] px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-white ring-2 ring-white shadow-lg shadow-orange-400/40 whitespace-nowrap"
                  >
                    <GraduationCap className="h-3 w-3 text-white" />
                    <motion.span
                      animate={{ opacity: [1, 0.35, 1], scale: [1, 0.82, 1] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.8 }}
                      className="text-[9px] leading-none text-white"
                    >
                      ●
                    </motion.span>
                    <span>Admissions Open 2026</span>
                  </motion.span>
                </motion.button>

                {/* Government Trust Badge (Cashless Available / Ayushman Bharat CTA) */}
                <motion.button
                  whileHover={{ y: -1.5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('ayushman')}
                  className="hidden xl:flex shrink-0 items-center gap-2 px-2.5 xl:px-3 py-1.5 rounded-2xl bg-gradient-to-br from-teal-55 to-emerald-50/10 border border-teal-250 text-teal-800 text-[10px] font-black uppercase tracking-[0.08em] transition-all cursor-pointer shadow-sm text-left whitespace-nowrap"
                >
                  <Award className="w-4 h-4 text-teal-600 flex-shrink-0 animate-pulse" />
                  <span>Ayushman Bharat</span>
                </motion.button>

                {/* Mobile Menu Icon Toggle */}
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  id="mobile-menu-toggle"
                  className="lg:hidden p-2 rounded-2xl text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer bg-slate-50 border border-slate-200"
                >
                  {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
                </button>

              </div>

            </div>
          </nav>
        </div>

      </motion.header>

      {/* ================= 3. MOBILE SLIDING DRAWER ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Smooth Fade-in Backdrop carrying blur overlay (Outside Click closes) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#070e24]/70 backdrop-blur-md z-45 lg:hidden"
            />

            {/* Slide-in Drawer from the right hand side */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              id="mobile-drawer"
              className="fixed top-0 right-0 w-full max-w-[340px] md:max-w-[400px] h-full bg-white/95 backdrop-blur-xl z-50 p-6 shadow-3xl border-l border-slate-100 flex flex-col justify-between lg:hidden"
            >
              {/* Top Row: Brand Info + Close Button */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 shadow-sm">
                      <Heart className="w-5 h-5 text-white animate-pulse" />
                    </div>
                    <div className="flex flex-col text-left leading-none">
                      <span className="text-xs font-black text-slate-900 tracking-tight uppercase">Mata Bhagyamani</span>
                      <span className="text-[10px] font-bold text-indigo-755 uppercase mt-0.5">Devi Hospital & College</span>
                    </div>
                  </div>

                  {/* Close Icon inside Drawer */}
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2.5 rounded-full bg-slate-50 border border-slate-205 text-slate-800 hover:bg-slate-100 transition-all cursor-pointer min-h-[44px] min-w-[44px]"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Navigation Items (Active Highlighted) */}
                <div className="flex flex-col gap-1.5 max-h-[50vh] overflow-y-auto pr-1">
                  {navItems.map((item, idx) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleItemClick(item)}
                        className={`w-full h-12 px-4 rounded-2xl text-left text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between border ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-700 border-indigo-200 shadow-sm font-black' 
                            : 'text-slate-650 hover:bg-slate-50 border-transparent hover:border-slate-100'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {isActive && <span className="w-2 h-2 rounded-full bg-indigo-650 animate-ping" />}
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className={`text-[8px] font-black px-2 py-0.5 rounded ${
                            item.badge === 'RED' ? 'bg-rose-100 text-rose-600 animate-pulse' : 'bg-teal-50 text-teal-650'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Row: Large Tactile Assistance Callouts (min-height 48px) */}
              <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
                {/* 1. Admissions Quick Anchor Button */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('nursing-college');
                  }}
                  className="w-full h-[52px] rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-purple-600/15 cursor-pointer"
                >
                  <GraduationCap className="w-4.5 h-4.5" />
                  <span>🎓 Admissions College: Open</span>
                </button>

                {/* 2. 24x7 Ambulance Quick Hotwire */}
                <a 
                  href="tel:+917250853234"
                  className="w-full h-[48px] px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-center text-xs font-bold text-white flex items-center justify-center gap-2 shadow-md shadow-rose-200 cursor-pointer"
                >
                  <Phone className="w-4.5 h-4.5" />
                  <span>Ambulance: 7250853234</span>
                </a>

                {/* 3. WhatsApp Help */}
                <a 
                  href="https://wa.me/919470826108?text=Hello%20Mata%20Bhagyamani%20Devi%20Hospital%2C%20I%20would%20like%20to%20consult%20a%20doctor."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-[48px] px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-center text-xs font-bold text-white flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4.5 h-4.5" />
                  <span>WhatsApp Doctor Chat</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('appointment');
                  }}
                  className="w-full h-[48px] px-4 rounded-xl bg-[#0f172a] text-center text-xs font-bold text-white shadow-md cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= 4. ABOUT HOSPITAL COMPREHENSIVE MODAL ================= */}
      <AnimatePresence>
        {aboutModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 text-left"
            >
              <button 
                onClick={() => setAboutModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-50 border border-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-inner">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] text-brand-purple font-extrabold uppercase tracking-widest">Corporate Profile</span>
                  <h3 className="text-xl font-black text-slate-900 font-heading">Mata Bhagyamani Devi Hospital</h3>
                </div>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                <p>
                  Established at a strategic central location in <strong>Sakari Mod, Kudra (Kaimur, Bihar)</strong>, Mata Bhagyamani Devi Hospital has evolved as the region’s premier healthcare hub. We serve over 15,000 families with multi-specialty support.
                </p>
                <p>
                  Our legacy thrives on providing <strong>24/7 Level-1 trauma centers</strong>, trauma intensive care (ICU), infant critical protection (NICU), and professional surgical operations under one roof. We emphasize patient recovery above everything else.
                </p>

                {/* Mission metrics */}
                <div className="grid grid-cols-2 gap-4 my-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 leading-tight">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">Patient-First Care</h4>
                      <p className="text-[11px] text-slate-400">Compassionate, reliable bedside checkups.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">Modern Diagnostic Tech</h4>
                      <p className="text-[11px] text-slate-400">Color Doppler Ultrasound and Digital X-Ray desk.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">Government Empanelled</h4>
                      <p className="text-[11px] text-slate-400">Zero-deposit PM-JAY treatment for families.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">Nursing College Partner</h4>
                      <p className="text-[11px] text-slate-400">Equipped for elite medical research and labs.</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-xs">
                  For support files, custom reports, or institutional collaborations, reach out to our chief clinical desk or administrative team at Sakari Mod.
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setAboutModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= 5. NURSING COLLEGE COOPERATIVE DRAWER ================= */}
      <AnimatePresence>
        {nursingModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 text-left"
            >
              <button 
                onClick={() => setNursingModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-50 border border-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shadow-inner">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] text-brand-purple font-extrabold uppercase tracking-widest">Cooperative Training Center</span>
                  <h3 className="text-xl font-black text-slate-900 font-heading">Nursing College Partner Institution</h3>
                </div>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-slate-650 leading-relaxed font-semibold">
                <p>
                  Mata Bhagyamani Devi Hospital acts as the official clinical training ground for our empanelled <strong>School & College of Nursing</strong>. Students acquire rigorous bedside medical experience, surgical observation, and trauma practice under direct mentorship.
                </p>
                
                <div className="p-4 bg-purple-50 border border-purple-100 rounded-2xl text-purple-950 flex flex-col gap-2.5">
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-purple-800 flex items-center gap-1.5 font-heading">
                    <span>Clinical Capabilities for Nurse Trainees</span>
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 leading-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5" />
                      <span>Dedicated GNM & B.Sc Nursing internship rotations.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5" />
                      <span>Interactive ICU monitoring and emergency patient stabilization.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5" />
                      <span>Direct mentoring under senior pediatricians & general practitioners.</span>
                    </li>
                    <li className="flex items-start gap-2 leading-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5" />
                      <span>Advanced simulation labs inside Kudra health campus.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-slate-900 font-heading">Admission & Internships desk:</h4>
                  <p className="text-[#555]">
                    Our partner college delivers accredited GNM, B.Sc. Nursing, and Healthcare Assistant certified diplomas. Graduates from our system are operating inside renowned healthcare units across India.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setNursingModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider cursor-pointer font-heading"
                >
                  Close Info Desk
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= 6. CLINICAL PHOTO IMAGE GALLERY LIGHTBOX ================= */}
      <AnimatePresence>
        {galleryModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 text-left"
            >
              {/* Close Button */}
              <button 
                onClick={() => setGalleryModalOpen(false)}
                className="absolute top-4 right-4 p-2.5 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-50 border border-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shadow-inner">
                  <ImageIcon className="w-5.5 h-5.5" />
                </div>
                <div>
                  <span className="block text-[10px] text-teal-600 font-extrabold uppercase tracking-widest">Interactive Portfolio</span>
                  <h3 className="text-xl font-black text-slate-900 font-heading">Our Clinical & Infrastructure Gallery</h3>
                </div>
              </div>

              {/* Filtering bar inside gallery */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: 'all', label: 'All Photos' },
                  { id: 'critical', label: 'Trauma & Critical Units' },
                  { id: 'care', label: 'Patient Support' },
                  { id: 'tech', label: 'Technical & Building' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActivePhotoCategory(cat.id as any)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activePhotoCategory === cat.id 
                        ? 'bg-slate-950 text-white' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-650'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Photos Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredPhotos.map((photo, pIdx) => (
                  <motion.div
                    layout
                    whileHover={{ scale: 1.02 }}
                    key={pIdx}
                    onClick={() => setSelectedPhotoFullscreen(photo.url)}
                    className="group relative rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-slate-100 border border-slate-200 shadow-sm cursor-zoom-in"
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-xs font-black text-white">{photo.title}</span>
                      <span className="text-[10px] text-slate-350 line-clamp-2 mt-1">{photo.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Optional Empty state */}
              {filteredPhotos.length === 0 && (
                <div className="text-center py-10">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block">No photos indexed in this category yet</span>
                </div>
              )}

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>📍 Photorecord system is updated live.</span>
                <button 
                  onClick={() => setGalleryModalOpen(false)}
                  className="px-5 py-2 rounded-xl bg-slate-950 hover:bg-slate-855 text-white font-bold cursor-pointer"
                >
                  Close Gallery
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Photo Lightbox Sub-Modal */}
      <AnimatePresence>
        {selectedPhotoFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhotoFullscreen(null)}
            className="fixed inset-0 bg-slate-950/95 z-55 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedPhotoFullscreen(null)}
              className="absolute top-6 right-6 p-2 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedPhotoFullscreen} 
              alt="Clinical Lightbox" 
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border-2 border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
