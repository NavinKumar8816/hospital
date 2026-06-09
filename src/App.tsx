import { AnimatePresence, motion } from 'motion/react';
import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutHospital from './components/AboutHospital';
import AppointmentPortal from './components/AppointmentPortal';
import AyushmanBharat from './components/AyushmanBharat';
import ContactLocation from './components/ContactLocation';
import CuratedLanguageLocalizer from './components/CuratedLanguageLocalizer';
import DoctorsList from './components/DoctorsList';
import EmergencyWidget from './components/EmergencyWidget';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import Header from './components/Header';
import Hero from './components/Hero';
import HospitalFAQ from './components/HospitalFAQ';
import SEOMetadata from './components/SEOMetadata';
import ServicesGrid from './components/ServicesGrid';
import StickyBottomEmergencyBar from './components/StickyBottomEmergencyBar';
import Testimonials from './components/Testimonials';
import TraumaSpecial from './components/TraumaSpecial';
import TrustFacilities from './components/TrustFacilities';
import WhyTrustUs from './components/WhyTrustUs';

const NursingCollegePage = lazy(() => import('./components/NursingCollegePage'));

export default function App() {
  const { t, i18n } = useTranslation();
  const [currentView, setCurrentView] = useState<'hospital' | 'college'>('hospital');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [preselectedDoctor, setPreselectedDoctor] = useState<string>('');
  const [isSwitchingLanguage, setIsSwitchingLanguage] = useState(false);

  // Dynamically synchronize the state with query search params & hash changes
  useEffect(() => {
    const handleUrlStateSync = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get('view') === 'college' || window.location.hash === '#college' || window.location.hash === '#/college') {
        setCurrentView('college');
      } else {
        setCurrentView('hospital');
      }
    };

    handleUrlStateSync(); // run on initial mount

    window.addEventListener('popstate', handleUrlStateSync);
    window.addEventListener('hashchange', handleUrlStateSync);
    return () => {
      window.removeEventListener('popstate', handleUrlStateSync);
      window.removeEventListener('hashchange', handleUrlStateSync);
    };
  }, []);

  useEffect(() => {
    setIsSwitchingLanguage(true);
    const timeout = window.setTimeout(() => setIsSwitchingLanguage(false), 240);
    return () => window.clearTimeout(timeout);
  }, [i18n.language]);

  // Professional Scroll Spy using Intersection Observer
  useEffect(() => {
    if (currentView !== 'hospital') return;

    // List of section IDs to monitor
    const sectionIds = [
      'home',
      'about',
      'why-trust-us',
      'doctors',
      'services',
      'trauma',
      'facilities',
      'ayushman',
      'testimonials',
      'gallery',
      'appointment',
      'contact'
    ];

    const observerOptions = {
      root: null, // viewport
      rootMargin: '-135px 0px -40% 0px', // matches sticky header perfectly, ignoring top bar
      threshold: 0.15, // trigger when 15% is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Normalize matches to Header item expectations (e.g. why-trust-us -> home, testimonials -> home, etc if fallback is needed)
          const matchedId = entry.target.id;
          setActiveSection(matchedId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [currentView]);

  // Set view helper with pushState to update browser address bar
  const handleSetView = useCallback((view: 'hospital' | 'college') => {
    setCurrentView(view);
    const url = new URL(window.location.href);
    if (view === 'college') {
      url.searchParams.set('view', 'college');
      url.hash = ''; // clear hash
    } else {
      url.searchParams.delete('view');
    }
    window.history.pushState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Smooth-scroll navigational anchor connector - memoized to prevent re-creation
  const handleNavigate = useCallback((sectionId: string) => {
    if (sectionId === 'nursing-college-view' || sectionId === 'nursing-college') {
      handleSetView('college');
      return;
    }

    // Ensure we are back on the hospital view if they clicked standard hospital items
    if (currentView !== 'hospital') {
      handleSetView('hospital');
      // Delay navigation slightly so DOM updates and element is in layout tree
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 135; 
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          setActiveSection(sectionId);
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 120);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        // Offset scroll location slightly to account for the sticky glass header
        const offset = 135; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        setActiveSection(sectionId);
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [currentView, handleSetView]);

  // Wire physician selection click into the scheduler - memoized
  const handleSelectDoctor = useCallback((doctorName: string) => {
    setPreselectedDoctor(doctorName);
    // Smooth scroll straight down to priority appointments
    handleNavigate('appointment');
  }, [handleNavigate]);

  const handleClearPreselect = useCallback(() => {
    setPreselectedDoctor('');
  }, []);

  return (
    <>
      <SEOMetadata view={currentView} />
      <div className={`language-fade-shell ${isSwitchingLanguage ? 'is-switching-language' : ''}`}>
      <CuratedLanguageLocalizer />
      <Suspense
        fallback={
          <div className="min-h-screen luxury-gradient flex items-center justify-center px-4">
            <div className="rounded-3xl border border-white/40 bg-white/80 px-6 py-4 text-center shadow-lg backdrop-blur-md">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{t('common.loading')}</p>
            </div>
          </div>
        }
      >
        <AnimatePresence mode="wait">
        {currentView === 'college' ? (
          <motion.div
            key="college-portal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="min-h-screen pb-1"
          >
            <NursingCollegePage onBackToHospital={() => handleSetView('hospital')} />
          </motion.div>
        ) : (
          <motion.div
            key="hospital-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            id="hospital-brand-canvas" 
            className="min-h-screen relative flex flex-col luxury-gradient select-none"
          >
          {/* Premium Sticky Navigation System */}
          <Header activeSection={activeSection} onNavigate={handleNavigate} />

          {/* Main Sections Ordered in Storytelling Flow (Issue 3) */}
          <main className="flex-1 w-full pb-16 md:pb-0">
            
            {/* 1. Hero: Modern high-contrast display hero & Live Readiness desk */}
            <Hero onNavigate={handleNavigate} />

            {/* 2. New Inline About Hospital Section */}
            <AboutHospital />

            {/* 3. New 'Why Families Trust Us' Section */}
            <WhyTrustUs />

            {/* 4. Doctors: Senior Consultant doctors and clinic schedules */}
            <DoctorsList onSelectDoctor={handleSelectDoctor} />

            {/* 5. Medical Departments: Multi-speciality search clinical grid specs */}
            <ServicesGrid />

            {/* 6. Trauma: Life saving golden-hour timeline and trauma center segment */}
            <TraumaSpecial />

            {/* 7. Facilities & Infrastructure: State-Of-The-Art Premium Trust & Facilities Showcase */}
            <TrustFacilities />

            {/* 8. Ayushman: Interactive Gov PM-JAY Cashless eligibility desk */}
            <AyushmanBharat />

            {/* 9. Testimonials: Real Patient Review Logs */}
            <Testimonials />

            {/* 10. Gallery: Photographic Glimpse of Infrastructure */}
            <GallerySection />

            {/* 10.5. Hospital FAQs Section */}
            <HospitalFAQ />

            {/* 11. Integrated Consultation Booking Token Portal */}
            <AppointmentPortal 
              preselectedDoctor={preselectedDoctor} 
              onClearPreselect={handleClearPreselect} 
            />

            {/* 12. Small Nursing College CTA near the footer only */}
            <div className="bg-[#fcfaff] py-10 border-y border-purple-100 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-80 h-full bg-[radial-gradient(circle_at_top_right,rgba(109,40,217,0.06),transparent)] pointer-events-none" />
              <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 animate-fade-in">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/70 backdrop-blur border border-purple-150 p-6 sm:p-8 rounded-3xl shadow-sm">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#6d28d9] flex items-center justify-center border border-purple-100 shrink-0">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-purple-600 font-extrabold uppercase tracking-widest block mb-0.5">{t('hospital.academicWing')}</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 leading-tight">{t('hospital.collegeName')}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {t('hospital.collegeShort')}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavigate('nursing-college')}
                    className="w-full md:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#4d3091] to-[#702082] hover:shadow-lg transition-all text-white font-extrabold text-xs uppercase tracking-wider shrink-0 cursor-pointer text-center"
                  >
                    {t('common.visitCollegeWebsite')}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* 13. Contact: Geo EMS Index and physical contacts board */}
            <ContactLocation />

          </main>

          {/* Luxury Footer terminal copy */}
          <Footer onNavigate={handleNavigate} />

          {/* Global floating Emergency Access Systems */}
          <EmergencyWidget />

          {/* Sticky Bottom Emergency Quick Bar (Call, WhatsApp, Directions) for mobile touchscreens */}
          <StickyBottomEmergencyBar />
          </motion.div>
        )}
        </AnimatePresence>
      </Suspense>
      </div>
    </>
  );
}
