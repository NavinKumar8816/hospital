import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export default function StickyBottomEmergencyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-10px_25px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 h-16 divide-x divide-slate-100">
        
        {/* ACTION 1: CALL NOW */}
        <a 
          href="tel:+917250853234" 
          className="flex flex-col items-center justify-center gap-1 hover:bg-rose-50/40 active:bg-rose-50 transition-colors select-none group min-h-[48px]"
        >
          <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Phone className="w-4 h-4 fill-rose-600 animate-pulse" />
          </div>
          <span className="text-[10px] font-black text-rose-750 uppercase tracking-wider font-sans leading-none">
            Call Now
          </span>
        </a>

        {/* ACTION 2: WHATSAPP */}
        <a 
          href="https://wa.me/919470826108?text=EMERGENCY%20SUPPORT%20REQUIRED%2520AT%2520MATA%2520BHAGYAMANI%2520DEVI%2520HOSPITAL" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 hover:bg-emerald-50/40 active:bg-emerald-50 transition-colors select-none group min-h-[48px]"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
          </div>
          <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider font-sans leading-none">
            WhatsApp
          </span>
        </a>

        {/* ACTION 3: DIRECTIONS */}
        <a 
          href="https://maps.app.goo.gl/iWHUkY4b66UiYGHz6" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 hover:bg-indigo-50/40 active:bg-indigo-50 transition-colors select-none group min-h-[48px]"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-50 text-[#002d62] flex items-center justify-center group-hover:scale-105 transition-transform">
            <MapPin className="w-4 h-4 text-[#cb2d6f] shrink-0" />
          </div>
          <span className="text-[10px] font-black text-slate-800 uppercase tracking-wider font-sans leading-none">
            Directions
          </span>
        </a>

      </div>
    </div>
  );
}
