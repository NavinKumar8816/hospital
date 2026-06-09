import {
  Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Stethoscope,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DOCTORS } from '../data';
import { Doctor } from '../types';

interface DoctorsListProps {
  onSelectDoctor: (doctorName: string) => void;
}

export default function DoctorsList({ onSelectDoctor }: DoctorsListProps) {
  const { t } = useTranslation();
  const [selectedDoctorProfile, setSelectedDoctorProfile] = useState<Doctor | null>(null);

  // Map doctors to curated professional photo URLs to provide real private hospital aesthetics
  const doctorPhotos: Record<string, string> = {
    'dr1': 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600', // Sanjay Kumar
    'dr2': '/images/doctor/DrRitaKumari.png', // Rita Kumari
    'dr3': 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600', // Avadhesh Kumar
    'dr4': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600', // Brajesh Kumar
    'dr5': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600', // Mohit Sharan
    'dr6': 'https://images.unsplash.com/photo-1582750433449-64c024716c07?auto=format&fit=crop&q=80&w=600', // S.K. Singh
    'dr7': 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=600'  // Anchal Kumari
  };

  // Curated detailed clinical backgrounds to display in the view profile modal
  const doctorBios: Record<string, string> = {
    'dr1': 'Dr. Sanjay Kumar is recognized as Kaimur’s leading practitioner of child healthcare. Over his illustrious 14+ year career, he has optimized newborn clinical protocols, managed acute respiratory pediatric distress, and guided community immunization workflows with utmost precision.',
    'dr2': 'Dr. Rita Kumari delivers top-tier gynae research and surgical care. Specializing in high-threat pregnancy, pain-free labor suites, and minimally invasive diagnostic laparoscopy, she ensures every mother and baby can experience maximum care and clinical safety.',
    'dr3': 'With nearly two decades of intensive operative practice, Dr. Avadhesh Kumar is a benchmark surgeon in abdominal tissue corrections. He has successfully completed thousands of painless laparoscopic appendectomies and keyhole gallbladder repairs.',
    'dr4': 'Dr. Brajesh Kumar provides ultimate bone stability interventions. He thrives in reconstructing severe complex poly-trauma orthopedic fractures, utilizing advanced internal fixation components and customized patient skeletal rehab paths.',
    'dr5': 'Bringing a rigorous academic clinical background, Dr. Mohit Sharan is known for precise systemic diagnostic triage. He supervises our continuous general inpatient wards and handles complex multiorgan virus infection panels.',
    'dr6': 'Dr. S.K. Singh delivers tailored diabetes care programs. Using computerized glucose charts, endocrine diagnostics, and targeted customized diet charts, he helps patients achieve lifestyle reversal and stave off secondary diabetic foot complications.',
    'dr7': 'Dr. Anchal Kumari focuses on absolute hygiene and precision in dental surgery. From specialized pediatric root canal treatment paths to modern aesthetic smile alignments, she provides pain-free, specialized oral medicine.'
  };

  const trustIndicators = [
    { label: t('doctors.experiencedDoctors'), desc: t('doctors.experiencedDocsDesc') },
    { label: t('doctors.multiSpeciality'), desc: t('doctors.multiSpecialityDesc') },
    { label: t('doctors.emergencySupport'), desc: t('doctors.emergencySupportDesc') },
    { label: t('doctors.patientCare'), desc: t('doctors.patientCareDesc') }
  ];

  return (
    <section id="doctors" className="py-16 md:py-20 bg-white relative overflow-hidden scroll-mt-[130px]">
      
      {/* Soft branding gradients representing safety and comfort */}
      <div className="absolute top-[10%] right-[-12%] w-[450px] h-[450px] rounded-full bg-brand-pink-light/35 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[12%] left-[-12%] w-[500px] h-[500px] rounded-full bg-brand-purple-light/25 filter blur-3xl pointer-events-none animate-pulse" />
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple-light border border-brand-purple/15 text-xs text-brand-purple font-extrabold uppercase tracking-widest font-heading shadow-sm"
          >
            <Stethoscope className="w-3.5 h-3.5 text-brand-purple animate-pulse" />
            <span>{t('doctors.senior')}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading leading-tight"
          >
            {t('doctors.title')}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-650 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t('doctors.description')}
          </motion.p>
        </div>

        {/* ================= 4-COLUMN CRITICAL TRUST INDICATORS OVERVIEW ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {trustIndicators.map((ti, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-150/60 shadow-sm text-left flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-slate-900 font-extrabold text-[12px] leading-tight font-heading uppercase tracking-wide">
                  {ti.label}
                </h4>
                <p className="text-slate-450 text-[10px] leading-snug font-medium">
                  {ti.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= DOCTORS PROFILE GRID (Premium Custom Horizontal Swipe on Mobile / Grid on Desktop) ================= */}
        <motion.div 
          className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pb-6 lg:pb-0 scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none"
        >
          {DOCTORS.map((doctor, idx) => {
            const photoUrl = doctorPhotos[doctor.id] || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600';
            
            // Status CSS parameters for clinical triage indicator bar
            const statusConfig = {
              'Available Today': { label: t('doctors.activeInClinic'), styles: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
              'In Surgery': { label: t('doctors.inOperationRoom'), styles: 'bg-rose-50 text-rose-750 border-rose-200' },
              'On Call': { label: t('doctors.emergencyResponder'), styles: 'bg-indigo-50 text-indigo-750 border-indigo-200' },
              'Next Available: Tomorrow': { label: t('doctors.nextDutyTomorrow'), styles: 'bg-slate-50 text-slate-550 border-slate-200' }
            }[doctor.status];

            return (
              <motion.div
                key={doctor.id}
                id={`doctor-card-${doctor.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.45) }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[2.25rem] bg-white border border-slate-200/60 hover:border-brand-purple/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-[520px] text-left flex-shrink-0 w-[280px] xs:w-[310px] sm:w-[340px] lg:w-full snap-center"
              >
                
                <div>
                  {/* Portrait Block with Hover Zoom & Status Pill */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                    
                    {/* Shadowed top backdrop gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 pointer-events-none" />
                    
                    {/* Real stock photo for ultimate private hospital trust */}
                    <img 
                      src={photoUrl} 
                      alt={doctor.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                    />

                    {/* Status Pill overlay */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest border backdrop-blur-md shadow-sm ${statusConfig.styles}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {statusConfig.label}
                      </span>
                    </div>

                    {/* Experience Badge overlay */}
                    <div className="absolute bottom-4 right-4 z-20">
                      <span className="px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-white text-[9px] font-black tracking-wider uppercase border border-white/10 shadow-lg flex items-center gap-1">
                        <Award className="w-3 h-3 text-amber-300" />
                        {doctor.experience.replace(' in Dedicated Pediatric Care', '').replace(' in High-Risk Maternity Care', '').replace(' in Advanced Operative Surgery', '').replace(' in Joint & Trauma Reconstructions', '').replace(' in Critical Medicine & OPD Checks', '').replace(' in Endocrine Care & Management', '').replace(' in Advanced Oral Medicine', '')}
                      </span>
                    </div>

                    {/* License Badge */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-white/95 backdrop-blur shadow text-[8px] font-mono font-bold text-slate-800 px-2 py-0.5 rounded-md border border-slate-200">
                        REG #CMC-{String(doctor.id).toUpperCase()}
                      </span>
                    </div>

                  </div>

                  {/* Body details */}
                  <div className="p-6 pb-2">
                    {/* Department Tag */}
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#7c3aed] mb-1 inline-block">
                      {doctor.speciality}
                    </span>

                    {/* Doctor Name */}
                    <h3 className="text-md font-black text-slate-950 font-heading leading-tight group-hover:text-brand-purple transition-colors">
                      {doctor.name}
                    </h3>

                    {/* Qualification Area */}
                    <p className="text-[11.5px] font-semibold text-slate-500 mt-1 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-medical-blue flex-shrink-0" />
                      <span className="line-clamp-1">{doctor.education}</span>
                    </p>

                    {/* Timing */}
                    <div className="mt-3.5 flex items-center gap-1 text-slate-450">
                      <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="text-[10.5px] font-medium truncate">{doctor.availability}</span>
                    </div>

                    {/* Services bullet checkmarks */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100/80">
                      <span className="text-[8.5px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                        Area of Expertise
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {doctor.services?.slice(0, 4).map((srv, sIdx) => (
                          <div 
                            key={sIdx}
                            className="flex items-center gap-1.5 text-slate-600 text-[10px] font-bold"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="truncate">{srv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Actions Bottom buttons */}
                <div className="px-6 pb-6 pt-2 bg-gradient-to-t from-slate-50/50 to-transparent flex items-center gap-2">
                  
                  {/* View Details modal launcher */}
                  <button
                    onClick={() => setSelectedDoctorProfile(doctor)}
                    className="flex-1 py-3 px-4 rounded-xl border border-slate-200 hover:border-brand-purple/20 bg-white hover:bg-slate-50 text-slate-700 hover:text-brand-purple text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center"
                  >
                    {t('doctors.viewProfile')}
                  </button>

                  {/* Consultation selector trigger straight to booking forms */}
                  <button
                    onClick={() => onSelectDoctor(doctor.name)}
                    className="flex-[1.4] py-3 px-4 rounded-xl bg-gradient-to-r from-medical-blue to-brand-purple text-white hover:shadow-md hover:shadow-brand-purple/15 text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t('common.bookAppointment')}</span>
                  </button>

                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Quality Guarantee Board at Section Bottom */}
        <div className="mt-20 p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative overflow-hidden shadow-xl text-left max-w-5xl mx-auto border border-white/5">
          {/* Ambient overlay */}
          <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
            <Stethoscope className="w-56 h-56" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[9px] font-black uppercase tracking-widest inline-block">
              ✦ 24/7 Clinical Emergency On-Call Board
            </span>
            <h4 className="text-lg md:text-xl font-extrabold text-slate-100 font-heading">
              Need immediate surgical consultation?
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Our complete team of junior surgical residents, pediatrician staff nurses, and intensive care anesthesiologists are stationed round-the-clock inside Sakari Mod, Kudra for high-speed golden hour entries.
            </p>
          </div>

          <div className="mt-6 pt-3 relative z-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-350">
              <span>📍 Sakari Mod, Kudra, Bihar</span>
              <span className="w-1 h-3 bg-white/20" />
              <span>📞 Helpline: 7250853234</span>
            </div>
            
            <a 
              href="#appointment"
              className="py-2.5 px-5 rounded-xl bg-white text-slate-950 text-[10px] font-extrabold uppercase tracking-wider hover:bg-slate-100 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Consult Duty Surgeon Now</span>
              <ChevronRight className="w-4 h-4 text-brand-purple" />
            </a>
          </div>
        </div>

      </div>

      {/* ================= DYNAMIC DETAILED PROFILE MODAL ================= */}
      <AnimatePresence>
        {selectedDoctorProfile && (
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
              className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 text-left"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedDoctorProfile(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-50 border border-slate-150 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Top Profile Frame */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6 border-b border-slate-100 pb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-50 border-2 border-[#7c3aed] flex-shrink-0 shadow-lg">
                  <img 
                    src={doctorPhotos[selectedDoctorProfile.id] || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600'} 
                    alt={selectedDoctorProfile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="block text-[9px] text-[#7c3aed] font-black uppercase tracking-widest mb-0.5">
                    {selectedDoctorProfile.speciality}
                  </span>
                  <h3 className="text-xl font-black text-slate-950 font-heading">
                    {selectedDoctorProfile.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-bold mt-1">
                    {selectedDoctorProfile.education} — {selectedDoctorProfile.experience}
                  </p>
                </div>
              </div>

              {/* Bio block */}
              <div className="space-y-4 text-xs md:text-sm text-slate-650 leading-relaxed font-semibold">
                
                <div>
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider mb-2 font-heading">
                    Clinical Background & Specialty Overview
                  </h4>
                  <p className="text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {doctorBios[selectedDoctorProfile.id] || 'This senior board consultant coordinates multi-speciality patient evaluations, implementing modern evidence-based surgical or medicinal diagnostics to assure fast and painless recovery cycles.'}
                  </p>
                </div>

                {/* Services checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-2xl">
                    <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-indigo-800 mb-2.5 font-heading">
                      Provided Services
                    </h4>
                    <ul className="space-y-1.5 text-xs text-indigo-950">
                      {selectedDoctorProfile.services?.map((srv, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl">
                    <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-emerald-800 mb-2.5 font-heading">
                      Consultation Standards
                    </h4>
                    <ul className="space-y-1.5 text-xs text-emerald-950">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>Ayushman PM-JAY Cashless Eligible</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>Pre-Op Diagnostic Screening</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>Post-Consultation Free Followups</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Availability info */}
                <div className="space-y-1.5">
                  <h4 className="font-bold text-slate-900 font-heading text-xs">Timing & Scheduling:</h4>
                  <p className="text-[#555] flex items-center gap-1.5 text-xs">
                    <Clock className="w-4 h-4 text-[#7c3aed]" />
                    <span>In-Clinic Hours: <strong>{selectedDoctorProfile.availability}</strong></span>
                  </p>
                  <p className="text-slate-400 text-[11px]">
                    * Note: Hospital emergency rooms are active 24/7. To consult during non-OPD hours, please connect with the Chief Medical Officer at Sakari Mod desk.
                  </p>
                </div>

              </div>

              {/* Footer row buttons */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <button 
                  onClick={() => setSelectedDoctorProfile(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[10px] uppercase tracking-wider cursor-pointer"
                >
                  Close Profile
                </button>

                <button 
                  onClick={() => {
                    setSelectedDoctorProfile(null);
                    onSelectDoctor(selectedDoctorProfile.name);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-medical-blue to-brand-purple text-white font-extrabold text-[10px] uppercase tracking-wider cursor-pointer"
                >
                  Confirm Appointment Booking
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
