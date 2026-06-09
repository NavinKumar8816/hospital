import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, CheckCircle } from 'lucide-react';

interface AboutHospitalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutHospitalModal({ isOpen, onClose }: AboutHospitalModalProps) {
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 leading-tight">
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
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
