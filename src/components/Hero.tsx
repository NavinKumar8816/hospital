import {
    Activity,
    ArrowRight,
    Award,
    Calendar,
    Clock,
    GraduationCap,
    Heart,
    MessageSquare,
    Phone,
    ShieldAlert,
    Sparkles,
    Stethoscope
} from 'lucide-react';
import { motion } from 'motion/react';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

function HeroComponent({ onNavigate }: HeroProps) {
  const { t } = useTranslation();
  const [livePulse, setLivePulse] = useState(true);

  // Gentle pulsing live indicator
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePulse(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:py-24 overflow-hidden bg-[#fafbfc] scroll-mt-[135px] group/hero"
    >
      {/* ----------------- 1. PREMIUM MEDICAL BACKGROUND ATMOSPHERE ----------------- */}
      {/* self-contained animation styles for ECG sweep, glowing pulses, and custom particle drift */}
      <style>{`
        @keyframes ecgSweep {
          0% { stroke-dashoffset: 2400; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes subtleFloating {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(4deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes pulseConcentric {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes ecgLineFlow {
          0% { stroke-dashoffset: 1600; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes ecgPulseBullet {
          0% { stroke-dashoffset: 1600; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-ecg-path {
          stroke-dasharray: 1200;
          stroke-dashoffset: 2400;
          animation: ecgSweep 8s linear infinite;
        }
        .animate-subtle-float {
          animation: subtleFloating 6s ease-in-out infinite;
        }
        .animate-radar-ring {
          animation: pulseConcentric 4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .animate-ecg-flow {
          stroke-dasharray: 180 800;
          animation: ecgLineFlow 6s linear infinite;
        }
        .animate-ecg-bullet {
          stroke-dasharray: 6 1594;
          animation: ecgPulseBullet 4s linear infinite;
        }
        .animate-ecg-bullet-delayed {
          stroke-dasharray: 6 1594;
          animation: ecgPulseBullet 4s linear infinite;
          animation-delay: -2s;
        }
        .ecg-line-glow {
          filter: drop-shadow(0 0 3px rgba(219, 39, 119, 0.55)) drop-shadow(0 0 8px rgba(124, 58, 237, 0.35));
          transition: filter 0.4s ease-in-out, stroke-width 0.4s ease-in-out;
        }
        .group\/hero:hover .ecg-line-glow {
          filter: drop-shadow(0 0 6px rgba(219, 39, 119, 0.9)) drop-shadow(0 0 16px rgba(124, 58, 237, 0.65));
          stroke-width: 3.5px;
        }
      `}</style>

      {/* Subtle Premium Medical Gradient Mesh (Moving Layers) */}
      <motion.div 
        animate={{ 
          background: [
            "radial-gradient(100%_100%_at_50%_0%,#f0f4ff 0%,#f8fafc 50%,#ffffff 100%)",
            "radial-gradient(105%_105%_at_48%_5%,#ecfeff 0%,#f8fafc 55%,#ffffff 100%)",
            "radial-gradient(100%_100%_at_50%_0%,#f0f4ff 0%,#f8fafc 50%,#ffffff 100%)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none" 
      />
      
      {/* Background Floating Glow Orbs in brand-specific medical hues */}
      <div className="absolute top-1/10 left-1/12 w-[520px] h-[520px] rounded-full bg-blue-100/50 mix-blend-multiply filter blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/12 right-1/12 w-[550px] h-[550px] rounded-full bg-purple-100/50 mix-blend-screen filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-50/40 rounded-full filter blur-3xl pointer-events-none" />

      {/* Modern Subtle Medical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_50%,#000_75%,transparent_100%)] pointer-events-none z-0" />

      {/* High-fidelity Pulsating Live Grid Radar points */}
      <div className="absolute inset-0 pointer-events-none z-5 hidden md:block">
        {/* Radar Point 1 - Top Center Left */}
        <div className="absolute top-[18%] left-[45%] w-3 h-3">
          <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative block w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
        </div>
        
        {/* Radar Point 2 - Center Left near text */}
        <div className="absolute top-[52%] left-[4%] w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-blue-400 opacity-60 animate-ping" />
          <span className="relative block w-2 h-2 rounded-full bg-blue-500" />
        </div>

        {/* Radar Point 3 - Bottom Center Right */}
        <div className="absolute bottom-[22%] left-[38%] w-2.5 h-2.5">
          <span className="absolute inset-0 rounded-full bg-purple-400 opacity-60 animate-ping" />
          <span className="relative block w-2.5 h-2.5 rounded-full bg-purple-500" />
        </div>
      </div>

      {/* SVG Heartbeat Wave Overlays (Dual active layers for high realism) */}
      <div className="absolute bottom-12 md:bottom-20 left-0 w-full opacity-18 pointer-events-none z-10 select-none">
        <svg className="w-full h-28 text-rose-500" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path 
            className="stroke-current fill-none stroke-[2.5] animate-ecg-path" 
            d="M0,50 L250,50 L270,50 L280,20 L290,80 L300,50 L310,50 L320,50 L330,30 L340,70 L350,50 L650,50 L670,10 L695,95 L710,35 L720,55 L730,50 L950,50 M950,50 L970,30 L980,70 L990,50 L1200,50" 
          />
        </svg>
      </div>

      <div className="absolute bottom-8 md:bottom-16 left-0 w-full opacity-12 pointer-events-none z-10 select-none">
        <svg className="w-full h-24 text-rose-600" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path 
            className="stroke-current fill-none stroke-[1.5] animate-ecg-path" 
            style={{ animationDelay: '-4s' }}
            d="M0,50 L150,50 L170,50 L180,25 L190,75 L200,50 L210,50 L220,50 L230,35 L240,65 L250,50 L550,50 L570,15 L595,90 L610,40 L620,60 L630,50 L850,50 M850,50 L870,25 L880,75 L890,50 L1200,50" 
          />
        </svg>
      </div>

      {/* Drifting Background Clinical Icons Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        
        {/* Particle 1: Loving Heart Floating */}
        <motion.div
          animate={{ y: [0, -18, 0], x: [0, 10, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[16%] left-[8%] p-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-rose-100 shadow-md shadow-rose-100/30 text-rose-500 hidden md:flex items-center gap-1.5"
        >
          <Heart className="w-4.5 h-4.5 fill-rose-500/20" />
          <span className="text-[9px] font-black text-rose-700 uppercase tracking-widest font-mono">LIVE PM</span>
        </motion.div>

        {/* Particle 2: Glowing Plus Symbol */}
        <motion.div
          animate={{ y: [0, -22, 0], rotate: [0, 20, 0], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-[46%] left-[26%] text-blue-400 opacity-25 text-4xl hidden md:block select-none font-extralight tracking-tight"
        >
          ✦
        </motion.div>

        {/* Particle 3: Compassionate Stethoscope */}
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute top-[65%] left-[6%] p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-blue-100 shadow-md shadow-blue-100/25 text-blue-500 hidden md:block"
        >
          <Stethoscope className="w-5 h-5 text-blue-600" />
        </motion.div>

        {/* Particle 4: Active Pulse Wave Monitor */}
        <motion.div
          animate={{ y: [0, 14, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 2.0 }}
          className="absolute top-[25%] right-[48%] p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-100 shadow-md text-purple-600 hidden md:block"
        >
          <Activity className="w-4.5 h-4.5 text-[#7c3aed]" />
        </motion.div>

        {/* Particle 5: Clinical Trust Clock */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[28%] left-[45%] p-2 rounded-xl bg-slate-50/60 border border-slate-200/50 text-slate-405 hidden md:block opacity-60"
        >
          <Clock className="w-4 h-4" />
        </motion.div>

        {/* Particle 6: Clinical Rating Spark */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[14%] right-[22%] p-2 rounded-full bg-purple-50 text-purple-500 hidden md:block"
        >
          <Sparkles className="w-4.5 h-4.5" />
        </motion.div>
      </div>

      {/* ----------------- 2. CONTAINER ----------------- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
          
          {/* ================= LEFT SIDE: EMOTIONAL BRAND CONTENT ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col space-y-7 relative"
          >
            {/* Trusted Healthcare Badge */}
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-blue-900 font-sans">
                  {t('hero.badge')}
                </span>
              </span>
            </div>

            {/* Heading Statement */}
            <div className="space-y-3">
              <h1 className="text-[clamp(2.4rem,7vw,3.2rem)] md:text-[clamp(3rem,4vw,4.5rem)] lg:text-[clamp(4rem,5vw,6rem)] font-black text-slate-950 tracking-tight font-sans leading-tight relative">
                {t('hero.titleLine1')} <br />
                <span className="relative inline-flex items-center">
                  <span className="bg-gradient-to-r from-[#1e40af] via-[#7c3aed] to-[#db2777] bg-clip-text text-transparent">
                    {t('hero.titleLine2')}
                  </span>
                  
                  {/* Premium Brand-Integrated ECG Line Launcher */}
                  <span className="absolute left-[101%] top-1/2 -translate-y-1/2 ml-2 w-[1800px] h-20 pointer-events-none z-[-1] overflow-visible hidden sm:block">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 1600 80" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="premium-ecg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#db2777" />
                          <stop offset="40%" stopColor="#c084fc" />
                          <stop offset="70%" stopColor="#818cf8" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>

                      {/* Base trail line - Low Opacity standard grid wire */}
                      <path
                        d="M 0 40 L 60 40 L 70 15 L 78 65 L 85 40 L 150 40 Q 180 25 210 40 L 260 40 L 270 5 L 278 75 L 285 40 L 450 40 Q 480 25 510 40 L 600 40 L 610 10 L 618 70 L 625 40 L 800 40 Q 830 25 860 40 L 980 40 L 990 0 L 998 80 L 1005 40 L 1150 40 Q 1180 25 1210 40 L 1380 40 L 1390 15 L 1398 65 L 1405 40 L 1600 40"
                        fill="none"
                        stroke="url(#premium-ecg-gradient)"
                        strokeWidth="1.5"
                        className="opacity-25"
                      />

                      {/* Premium Active Flow Wave */}
                      <path
                        d="M 0 40 L 60 40 L 70 15 L 78 65 L 85 40 L 150 40 Q 180 25 210 40 L 260 40 L 270 5 L 278 75 L 285 40 L 450 40 Q 480 25 510 40 L 600 40 L 610 10 L 618 70 L 625 40 L 800 40 Q 830 25 860 40 L 980 40 L 990 0 L 998 80 L 1005 40 L 1150 40 Q 1180 25 1210 40 L 1380 40 L 1390 15 L 1398 65 L 1405 40 L 1600 40"
                        fill="none"
                        stroke="url(#premium-ecg-gradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="ecg-line-glow animate-ecg-flow"
                      />

                      {/* Glowing Active Bullet Points */}
                      <path
                        d="M 0 40 L 60 40 L 70 15 L 78 65 L 85 40 L 150 40 Q 180 25 210 40 L 260 40 L 270 5 L 278 75 L 285 40 L 450 40 Q 480 25 510 40 L 600 40 L 610 10 L 618 70 L 625 40 L 800 40 Q 830 25 860 40 L 980 40 L 990 0 L 998 80 L 1005 40 L 1150 40 Q 1180 25 1210 40 L 1380 40 L 1390 15 L 1398 65 L 1405 40 L 1600 40"
                        fill="none"
                        stroke="#db2777"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        className="animate-ecg-bullet"
                      />

                      <path
                        d="M 0 40 L 60 40 L 70 15 L 78 65 L 85 40 L 150 40 Q 180 25 210 40 L 260 40 L 270 5 L 278 75 L 285 40 L 450 40 Q 480 25 510 40 L 600 40 L 610 10 L 618 70 L 625 40 L 800 40 Q 830 25 860 40 L 980 40 L 990 0 L 998 80 L 1005 40 L 1150 40 Q 1180 25 1210 40 L 1380 40 L 1390 15 L 1398 65 L 1405 40 L 1600 40"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        className="animate-ecg-bullet-delayed"
                      />

                      {/* Anchor Pulse Joint point */}
                      <circle cx="0" cy="40" r="4.5" fill="#db2777" />
                      <circle cx="0" cy="40" r="10" fill="#db2777" className="animate-ping opacity-35" />
                    </svg>
                  </span>
                </span>
              </h1>
              
              {/* Elegant Subheading */}
              <h2 className="text-[18px] xs:text-[20px] sm:text-lg md:text-xl font-bold uppercase tracking-widest text-[#7c3aed] font-sans">
                {t('hero.subtitle')}
              </h2>
            </div>

            {/* Patient Centered Emotionally Connecting Description */}
            <p className="text-slate-650 text-[15px] sm:text-[16px] md:text-base leading-relaxed max-w-xl font-medium">
              {t('hero.description')}
            </p>

            {/* Call To Action Interaction Deck */}
            <div className="flex flex-col gap-4 w-full items-start">
              
              {/* Main row for standard clinical action buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 items-center w-full">
                {/* PRIMARY: Book appointment */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('appointment')}
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-black text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-blue-500/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('common.bookAppointment')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>

                {/* SECONDARY: Emergency Phone Caller */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+917250853234"
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-2xl bg-white hover:bg-rose-50 border-2 border-rose-250 hover:border-rose-405 text-rose-600 font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Phone className="w-4 h-4 text-rose-500 animate-pulse" />
                  <span>{t('common.emergencyCall')}</span>
                </motion.a>

                {/* TERTIARY: WhatsApp desk */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/919470826108?text=Hello%20Mata%20Bhagyamani%20Devi%20Hospital%2C%20I%20would%20like%2520to%20consult%20a%20clinical%20officer."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-2xl bg-white hover:bg-emerald-50 border border-emerald-250 hover:border-emerald-450 text-emerald-700 font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span>{t('hero.whatsAppConsult')}</span>
                </motion.a>
              </div>

              {/* FOURTH CTA: Explore Nursing College (Premium highly highlighted glowing gradient design with active indicator) */}
              <motion.button
                id="hero-explore-college"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.03, y: -2, boxShadow: "0 15px 35px rgba(217, 70, 239, 0.35)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('nursing-college')}
                className="w-full sm:w-auto min-h-[58px] px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-purple-705 via-fuchsia-600 to-indigo-700 text-white shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-fuchsia-500/35 border-2 border-purple-400/30 hover:border-pink-300/60 transition-all duration-300 flex items-center justify-between sm:justify-start gap-4 cursor-pointer relative overflow-hidden group select-none ml-0 text-left"
              >
                {/* Embedded active light glass reflection line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                <div className="flex items-center gap-3">
                  {/* Premium gold-shield style icon container with glow */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-300 text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-amber-500/10 group-hover:scale-108 transition-transform duration-300 ring-2 ring-white/20">
                    <GraduationCap className="w-5.5 h-5.5 text-slate-950 stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col text-left leading-tight">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[12.5px] sm:text-[13px] font-black uppercase tracking-widest text-white leading-none">
                        {t('hero.exploreCollege')}
                      </span>
                      <span className="inline-flex items-center py-0.5 px-2 bg-amber-400 text-slate-950 text-[8.5px] font-black uppercase tracking-wider rounded-full shadow-sm animate-pulse shrink-0">
                        {t('hero.admissionsOpen')}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[9.5px] text-fuchsia-100 font-bold tracking-wide mt-1.5 whitespace-nowrap">
                      {t('hero.collegePromise')}
                    </span>
                  </div>
                </div>

                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 ml-4 group-hover:bg-white/30 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5" />
                </div>
              </motion.button>

            </div>

            {/* Trust Metrics Horizontal Tray with Microanimations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200/60 w-full max-w-2xl">
              
              <div className="flex flex-col text-left">
                <span className="text-xl md:text-2xl font-black text-rose-600 font-sans leading-none">24×7</span>
                <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest mt-1.5">{t('hero.emergency')}</span>
              </div>

              <div className="flex flex-col text-left border-l border-slate-200/80 pl-4">
                <span className="text-xl md:text-2xl font-black text-blue-800 font-sans leading-none">15+</span>
                <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest mt-1.5">{t('hero.specialities')}</span>
              </div>

              <div className="flex flex-col text-left border-l border-slate-200/80 pl-4">
                <span className="text-xl md:text-2xl font-black text-[#7c3aed] font-sans leading-none">ICU•NICU</span>
                <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest mt-1.5">{t('hero.clinicalBeds')}</span>
              </div>

              <div className="flex flex-col text-left border-l border-slate-200/80 pl-4">
                <span className="text-xl md:text-2xl font-black text-emerald-600 font-sans leading-none">100%</span>
                <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest mt-1.5">{t('hero.ayushmanTreatment')}</span>
              </div>

            </div>

          </motion.div>

          {/* ================= RIGHT SIDE: PREMIUM COOPERATIVE HEALHCARE COLLAGE ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[490px] md:min-h-[560px] w-full z-20"
          >
            {/* Ambient Radial Glowing background under layout */}
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-blue-105 via-purple-105 to-pink-50 filter blur-3xl opacity-55 z-0 pointer-events-none" />

            {/* COLLAGE WRAPPER FRAMEWORK WITH DEPTH OVERLAYS */}
            <div className="relative w-full max-w-[420px] md:max-w-[480px] aspect-[4/4.5] flex items-center justify-center z-10">
              
              {/* COLLAGE IMAGE 1: Top Back - Professional Doctor Care Scene (Top) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[2%] left-[16%] w-[62%] aspect-square rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl z-20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
                  alt="Compassionate healthcare clinical assistance"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </motion.div>

              {/* COLLAGE IMAGE 2: Bottom Left - Mother and Infant Newborn (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute bottom-[10%] left-0 w-[50%] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl z-30 ring-4 ring-pink-100/20"
              >
                <img 
                  src="https://images.pexels.com/photos/9426607/pexels-photo-9426607.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mother carrying newborn baby - Mata Bhagyamani Devi Hospital neonatal care"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-left">
                  <span className="block text-[8px] font-mono tracking-widest text-[#ffe4e6] uppercase font-bold animate-pulse">{t('hero.motherChild')}</span>
                  <p className="text-[11px] font-black text-white leading-tight">{t('hero.neonatalWards')}</p>
                </div>
              </motion.div>

              {/* COLLAGE IMAGE 3: Bottom Right - Doctor Consultation Desk (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute bottom-[16%] right-0 w-[53%] aspect-[4/3] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl z-10"
              >
                <img 
                  src="https://images.pexels.com/photos/14558560/pexels-photo-14558560.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Doctor taking patient's blood pressure - Mata Bhagyamani Devi Hospital clinical care"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />
              </motion.div>

              {/* ================= 4 FLOATING GLASSMORPHIC TRUST CARDS (FLANKING COLLAGE ELEGANTLY) ================= */}
              
              {/* TRUST CARD A: 24/7 Emergency (Flanking Top Left area) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-[8%] -left-6 py-2.5 px-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-rose-250 hover:border-rose-400 shadow-xl z-40 flex items-center gap-2 max-w-[170px]"
              >
                <div className="w-7 h-7 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-[8px] font-black text-rose-500 uppercase tracking-widest">{t('hero.levelTrauma')}</span>
                  <span className="text-[10px] font-bold text-slate-800">24×7 {t('hero.emergency')}</span>
                </div>
              </motion.div>

              {/* TRUST CARD B: ICU / NICU Equipped (Flanking Center Right area) */}
              <motion.div
                animate={{ x: [0, -4, 0], y: [0, 4, 0] }}
                transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-[35%] -right-6 py-2.5 px-3.5 rounded-2xl bg-white/85 backdrop-blur-md border border-blue-200 hover:border-blue-400 shadow-xl z-40 flex items-center gap-2 max-w-[175px]"
              >
                <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-[8px] font-black text-blue-600 uppercase tracking-widest">{t('hero.criticalCare')}</span>
                  <span className="text-[10px] font-bold text-slate-800">{t('hero.icuNicuEquipped')}</span>
                </div>
              </motion.div>

              {/* TRUST CARD C: 100% Ayushman Bharat (Flanking Bottom Left area) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-[2%] -left-4 py-2.5 px-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-teal-220 hover:border-teal-400 shadow-xl z-40 flex items-center gap-2 max-w-[190px]"
              >
                <div className="w-7 h-7 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-[8px] font-black text-teal-600 uppercase tracking-widest">{t('hero.govtPmjay')}</span>
                  <span className="text-[10px] font-bold text-slate-800 text-ellipsis break-all whitespace-nowrap">{t('hero.cashlessSupport')}</span>
                </div>
              </motion.div>

              {/* TRUST CARD D: 15+ Specialities (Flanking Bottom Right area) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 2.0 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-[8%] -right-6 py-2.5 px-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-200 hover:border-purple-400 shadow-xl z-40 flex items-center gap-2 max-w-[165px]"
              >
                <div className="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-[8px] font-black text-purple-600 uppercase tracking-widest">{t('hero.clinicalDepth')}</span>
                  <span className="text-[10px] font-bold text-slate-800">15+ {t('hero.specialities')}</span>
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

const Hero = memo(HeroComponent);

export default Hero;
