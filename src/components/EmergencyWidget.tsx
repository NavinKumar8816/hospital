import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ambulance, Phone, MessageSquare, MapPin, X, AlertTriangle } from 'lucide-react';

export default function EmergencyWidget() {
  const [mobileCardOpen, setMobileCardOpen] = useState(false);

  return (
    <>
      {/* 1. DESKTOP WIDGET: Pinned Bottom-Right, Glassmorphism with Red Accent */}
      <div className="hidden md:block fixed bottom-6 right-6 z-55">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ y: -4 }}
          className="bg-white/80 backdrop-blur-xl border border-rose-200/80 p-4.5 rounded-3xl shadow-2xl relative overflow-hidden flex items-center gap-4 max-w-sm"
        >
          {/* Subtle pulsating outer red glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent pointer-events-none" />

          {/* Pulsating Icon Container */}
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/20 relative z-10">
              <Ambulance className="w-6 h-6 animate-pulse" />
            </div>
            {/* Absolute rings behind for pulse animation style */}
            <span className="absolute inset-0 rounded-2xl bg-rose-500 opacity-20 animate-ping z-0" />
          </div>

          {/* Right Details */}
          <div className="flex flex-col text-left space-y-0.5">
            <span className="text-[9px] font-black text-rose-600 uppercase tracking-widest font-mono">
              24×7 Emergency Ambulance
            </span>
            <a 
              href="tel:+917250853234" 
              className="text-lg font-black text-slate-900 hover:text-rose-600 transition-colors tracking-tight leading-none"
            >
              7250853234
            </a>
            <div className="flex items-center gap-1.5 pt-1.5">
              <a 
                href="tel:+917250853234"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-[9px] font-black uppercase tracking-wider transition-all"
              >
                <Phone className="w-2.5 h-2.5 fill-white" />
                <span>Call Now</span>
              </a>
              <span className="text-[9px] font-extrabold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-100/50">
                ● Ambulance Status: Active
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. MOBILE WIDGET: Floating Circular Emergency Button on bottom right */}
      <div className="block md:hidden fixed bottom-6 right-6 z-55">
        <motion.button
          onClick={() => setMobileCardOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xl shadow-rose-600/30 relative cursor-pointer border-2 border-white ring-4 ring-rose-100"
        >
          <Ambulance className="w-6 h-6 animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
          </span>
        </motion.button>
      </div>

      {/* 3. MOBILE EMERGENCY CARD: Modal Overlay prompted on mobile click */}
      <AnimatePresence>
        {mobileCardOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-60 flex items-end justify-center p-4 md:hidden pointer-events-auto"
          >
            {/* Click backdrop to exit */}
            <div className="absolute inset-0" onClick={() => setMobileCardOpen(false)} />

            <motion.div
              initial={{ y: 80, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 80, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white rounded-[2.5rem] p-6 w-full max-w-sm relative z-10 border border-slate-100 shadow-2xl space-y-5 text-left pb-8"
            >
              {/* Swipe down pill indicator */}
              <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto -mt-2 mb-2" />

              <button
                onClick={() => setMobileCardOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 bg-slate-50 border border-slate-100 cursor-pointer"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center shadow-inner relative shrink-0">
                  <AlertTriangle className="w-5.5 h-5.5 animate-bounce" />
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white animate-pulse" />
                </div>
                <div>
                  <span className="block text-[9px] text-rose-500 font-black uppercase tracking-widest leading-none mb-1">
                    Emergency Command Center
                  </span>
                  <h4 className="text-base font-black text-slate-950 font-sans tracking-tight">
                    24×7 Rapid Ambulance Desk
                  </h4>
                </div>
              </div>

              {/* Informative text */}
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Need immediate level-1 clinical trauma support, burn dressing, pediatric emergency or zero-deposit PM-JAY Ayushman treatment? Our hotline is active continuously in Kudra.
              </p>

              {/* Action buttons */}
              <div className="grid grid-cols-1 gap-3">
                {/* 1. Call Now */}
                <a
                  href="tel:+917250853234"
                  className="w-full py-3.5 px-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-md shadow-rose-300/30 transition-all cursor-pointer text-center"
                >
                  <Phone className="w-4 h-4 fill-white animate-pulse" />
                  <span>Call 7250853234 Now</span>
                </a>

                {/* 2. WhatsApp Info */}
                <a
                  href="https://wa.me/919470826108?text=EMERGENCY%20SUPPORT%20REQUIRED%20AT%20MATA%20BHAGYAMANI%20DEVI%20HOSPITAL"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-emerald-50 border-2 border-emerald-250 text-emerald-700 font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp Consultant</span>
                </a>

                {/* 3. Directions */}
                <a
                  href="https://maps.google.com/?q=Mata+Bhagyamani+Devi+Hospital,+Sakari+Mod,+Kudra,+Kaimur,+Bihar"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#070e24] text-white hover:bg-slate-900 font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  <MapPin className="w-4 h-4 text-[#cb2d6f]" />
                  <span>Navigate Directions</span>
                </a>
              </div>

              {/* Footer */}
              <div className="text-center pt-2">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
                  📍 Sakari Mod, Kudra (Kaimur)
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
