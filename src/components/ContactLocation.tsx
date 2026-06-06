import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, Compass, ShieldAlert, ExternalLink, Mail, Info } from 'lucide-react';

export default function ContactLocation() {
  
  // Real geographical distances of regional Kaimur and Bihar hubs
  const transitDistances = [
    { location: 'Mohania (Kaimur Line)', distance: '14 Km', timeSlot: '12-15 Mins' },
    { location: 'Bhabua District HQ', distance: '18 Km', timeSlot: '18-20 Mins' },
    { location: 'Sasaram (Rohtas Line)', distance: '32 Km', timeSlot: '25-30 Mins' },
    { location: 'Dehri On Sone', distance: '50 Km', timeSlot: '45-50 Mins' }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-white relative overflow-hidden scroll-mt-[130px]">
      
      {/* Absolute decorative gradient circles */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-brand-pink-light/30 filter blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-brand-purple-light/20 filter blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple-light border border-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-4 h-4 text-brand-purple" />
            <span>Regional Emergency Geography</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-heading text-slate-900 leading-tight">
            Emergency Dispatch & Location Command
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
            Ideally situated at Sakari Mod, Kudra, our facility manages immediate emergency, trauma surgical bypass pathways for the entire Kaimur district along the national highway network.
          </p>
        </div>

        {/* Outer Contact Grid with geometric balance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Critical Command Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Main Physical Terminal Address */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 relative flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-purple-light text-brand-purple">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#002d62] text-sm uppercase tracking-wide leading-none">Main Campus Terminal</h4>
                    <p className="text-xs text-slate-500 font-semibold mt-1">Sakari Mod, Kudra</p>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Opposite Sakari Police check-post, near the Kudra flyover bypass, District Kaimur, Bihar, PIN: 821108
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/50 text-[10px] text-slate-400 font-mono flex items-center justify-between">
                  <a 
                    href="https://maps.app.goo.gl/iWHUkY4b66UiYGHz6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-rose-505 hover:underline transition-colors flex items-center gap-1 select-none"
                  >
                    <MapPin className="w-3 h-3 text-rose-500 hover:animate-ping shrink-0" />
                    <span>GPS Coordinates: 25.0471° N, 83.6190° E</span>
                  </a>
                  <span className="font-bold text-brand-purple">NH-2 corridor</span>
                </div>
              </div>

              {/* Card 2: Emergency Response Lines */}
              <div className="p-6 rounded-2xl bg-rose-50/25 border border-rose-100 relative flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-rose-100/65 text-rose-600">
                    <Phone className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-rose-800 text-sm uppercase tracking-wide leading-none">24/7 Red Dispatch Hotline</h4>
                    <p className="text-xs text-rose-600 font-bold mt-1">Ambulance & Trauma OT</p>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Call our continuous trauma coordinator for immediate life savings, cardiac arrests, or vehicular trauma cases.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/50">
                  <a 
                    href="tel:+917250853234"
                    className="flex items-center justify-between text-xs font-bold text-rose-600 hover:text-rose-700 min-h-[44px]"
                  >
                    <span>CALL HOTLINE: 7250853234</span>
                    <ExternalLink className="w-3.5 h-3.5 text-rose-500" />
                  </a>
                </div>
              </div>

              {/* Card 3: OPD Consult Hour */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#002d62] text-sm uppercase tracking-wide leading-none">OPD Clinician Calendars</h4>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Regular Diagnostic Visits</p>
                  <p className="text-xs text-slate-400 mt-2">
                    Monday - Saturday: 09:00 AM - 06:00 PM <br />
                    Sundays: Emergency admissions only
                  </p>
                </div>
              </div>

              {/* Card 4: General Emails */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#14b8a6]/10 text-[#14b8a6]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#002d62] text-sm uppercase tracking-wide leading-none font-heading">Digital Communications</h4>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Queries & Medical Reports</p>
                  <div className="text-xs text-slate-400 mt-2 min-h-[44px] flex flex-col justify-center">
                    <a 
                      href="mailto:jhunu1201@gmail.com" 
                      className="text-indigo-600 font-bold hover:underline hover:text-indigo-800 transition-colors block"
                    >
                      jhunu1201@gmail.com
                    </a>
                    <span className="text-[10px] text-slate-400 mt-0.5">Response window within 12 hours</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Geographical Distance Benchmarking indicator tables */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
              <h4 className="font-bold text-sm tracking-wide uppercase text-slate-300 border-b border-white/10 pb-2 mb-3.5 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-brand-pink" />
                <span>Regional Ambulance Transit Proximity Index</span>
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {transitDistances.map((item, index) => (
                  <div key={index} className="flex flex-col border-r border-white/5 last:border-0 pr-2">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold truncate">
                      {item.location}
                    </span>
                    <span className="text-sm font-extrabold text-white mt-1">
                      {item.distance}
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold mt-0.5">
                      {item.timeSlot} EMS
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Block: Premium Visual Geographic compass GPS HUD card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-medical-blue to-brand-purple opacity-25 blur-xl animate-pulse" />
            
            <div className="relative h-full min-h-[350px] glass-card rounded-2xl p-6 border border-white/40 shadow-2xl flex flex-col justify-between text-left overflow-hidden">
              
              {/* Map Terminal Top banner HUD */}
              <div className="flex items-center justify-between border-b border-purple-100 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-brand-purple animate-spin" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-widest font-heading">
                    Kaimur GPS Radar Active
                  </span>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-600 font-bold font-mono px-2 py-0.5 rounded border border-emerald-200">
                  ONLINE
                </span>
              </div>

              {/* Live Interactive Google Map with responsive aspect handling */}
              <div className="my-3 flex-1 min-h-[220px] rounded-xl overflow-hidden border border-purple-100 shadow-inner relative group/map">
                <iframe 
                  title="Mata Bhagyamani Devi Hospital Google Maps Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3370339893452!2d83.61661627588047!3d25.047116515880572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398dbbc1edebfadb%3A0xe5a3637e193ebd66!2sMata%20Bhagyamani%20Devi%20Hospital!5e0!3m2!1sen!2sin!4v1717658763529!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[220px] filter saturate-102 hover:saturate-105 transition-all duration-300 rounded-xl"
                />
              </div>

              {/* Quick instructions and warnings */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-orange-100/40 border border-orange-200/50 text-[11px] text-orange-850 flex items-start gap-2.5 leading-relaxed">
                  <Info className="w-4 h-4 text-orange-700 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Accident Corridor Guard:</strong> Sakari Mod Kudra coordinates are positioned exactly on the high-speed GT Road sector where heavy vehicles transit continuously. Keep this GPS HUD saved for rapid alignment.
                  </p>
                </div>

                <a 
                  href="https://maps.app.goo.gl/iWHUkY4b66UiYGHz6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#002d62] hover:bg-brand-purple text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                  <span>Navigate via Google Maps Directions</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
