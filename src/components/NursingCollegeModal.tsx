import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NursingCollegeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NursingCollegeModal({ isOpen, onClose }: NursingCollegeModalProps) {
  const { t } = useTranslation();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 30 }}
            className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
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
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider cursor-pointer font-heading"
              >
                Close Info Desk
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
