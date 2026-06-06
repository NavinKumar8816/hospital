import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Clock, 
  Phone, 
  HeartPulse, 
  Activity, 
  CheckCircle, 
  Ambulance, 
  Baby, 
  PhoneCall, 
  MapPin, 
  ShieldCheck, 
  Gauge
} from 'lucide-react';

export default function TraumaSpecial() {
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  // Compressed list of 4 highly critical features to reduce vertical height & scroll clutter
  const emergencyFeatures = [
    {
      icon: Ambulance,
      title: '24×7 Ambulance Fleet',
      desc: 'Active emergency transport vehicles deployed internally inside Kudra for lightning-fast transit stabilization with on-board oxygen kits.',
      theme: {
        iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
        glow: 'shadow-rose-100 group-hover:shadow-rose-200'
      }
    },
    {
      icon: ShieldAlert,
      title: 'State-of-the-Art Trauma Bay',
      desc: 'Immediate emergency triage resuscitation chambers fitted with shadowless operational light domes and critical care telemetry setups.',
      theme: {
        iconBg: 'bg-red-50 text-red-600 border-red-100',
        glow: 'shadow-red-100 group-hover:shadow-red-200'
      }
    },
    {
      icon: Activity,
      title: '24/7 ICU & Ventilator Bed Support',
      desc: 'Equipped with multi-channel vital monitors, advanced invasive ventilators, and continuous proctoring by nursing staff.',
      theme: {
        iconBg: 'bg-indigo-50 text-indigo-650 border-indigo-100',
        glow: 'shadow-indigo-100 group-hover:shadow-indigo-200'
      }
    },
    {
      icon: Baby,
      title: 'NICU Incubator Incubation Support',
      desc: 'Sterilized Level-II neonatological warmers, phototherapy panels, and pediatric critical care staff alert for immediate stabilization.',
      theme: {
        iconBg: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100',
        glow: 'shadow-fuchsia-100 group-hover:shadow-fuchsia-200'
      }
    }
  ];

  // Streamlined 4-step golden-hour emergency process timeline
  const timelineSteps = [
    {
      step: 'Step 1',
      title: 'Emergency Intake Call',
      desc: 'Direct dispatch triage officer answers instantly, preparing telemetry and ambulance queues.',
      timeLabel: '0 - 2 Mins',
      icon: PhoneCall,
      bgColor: 'from-rose-500 to-rose-600'
    },
    {
      step: 'Step 2',
      title: 'Ambulance Dispatch',
      desc: 'Immediate team launch equipped with on-board oxygen and trauma technician supports.',
      timeLabel: '2 - 5 Mins',
      icon: Ambulance,
      bgColor: 'from-amber-500 to-amber-600'
    },
    {
      step: 'Step 3',
      title: 'Rapid Assessment',
      desc: 'In-transit vitals streamed straight to our emergency surgeons in Sakari Mod.',
      timeLabel: '5 - 15 Mins',
      icon: Activity,
      bgColor: 'from-blue-500 to-purple-600'
    },
    {
      step: 'Step 4',
      title: 'Critical Surgery / OT',
      desc: 'Direct bypass into advanced operating theatre suites omitting any waiting-room hold.',
      timeLabel: '15+ Mins',
      icon: HeartPulse,
      bgColor: 'from-emerald-500 to-teal-500'
    }
  ];

  const handleScrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="trauma" 
      className="py-16 md:py-20 bg-gradient-to-b from-slate-900 via-[#0a0f24] to-[#040817] text-white relative overflow-hidden scroll-mt-[130px]"
    >
      {/* Decorative gradients */}
      <div className="absolute top-[15%] left-[-10%] w-[450px] h-[450px] rounded-full bg-brand-purple/10 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[450px] h-[450px] rounded-full bg-rose-500/10 filter blur-3xl pointer-events-none animate-pulse" />

      {/* Grid line background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3341550c_1px,transparent_1px),linear-gradient(to_bottom,#3341550c_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-12">
        
        {/* ================= SECTION TITLE ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-450 text-[10px] font-black uppercase tracking-widest font-heading shadow-md">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
            <span>Kudra&apos;s Highway Emergency Hotline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading leading-tight text-white">
            24×7 Trauma Center & Emergency Care
          </h2>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Immediate medical attention when every second matters. Our level-1 responsive trauma unit is located directly on the Highway transit corridor, preserving vital life-support pathways.
          </p>
        </div>

        {/* ================= COMPRESSED SPLIT INFRASTRUCTURE LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left illustration image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-[2rem] opacity-25 filter blur-xl pointer-events-none" />
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-950/40 p-2 backdrop-blur-xl shadow-2xl z-10">
              <div className="relative rounded-[1.65rem] overflow-hidden h-[300px] md:h-[350px]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85 z-10 pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                  alt="Mata Bhagyamani Devi Hospital 24x7 Emergency Trauma Center & Surgical ICU Unit in Kudra Kaimur Bihar" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />

                {/* Status Badging */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-rose-600/90 border border-rose-500 backdrop-blur text-[8.5px] font-black tracking-widest uppercase text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    Bypass Ready
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-20 text-left space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <Gauge className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-300 uppercase font-black">Under 90s Response Speed Ratio</span>
                  </div>
                  <p className="text-slate-350 text-xs font-light">
                    Located centrally at Kudra on the National Highway route supporting urgent high-risk surgical stabilizers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right compressed features list */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {emergencyFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 hover:bg-white/10 transition-all duration-300 text-left flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${feat.theme.iconBg}`}>
                          <IconComponent className="w-4.5 h-4.5 animate-pulse" />
                        </div>
                        <span className="text-[7.5px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded-md">
                          INTAKE LEVEL-{idx + 1}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-black text-white font-heading">
                        {feat.title}
                      </h4>

                      <p className="text-slate-450 text-[11px] leading-relaxed font-semibold line-clamp-3">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ================= COMPRESSED INTERACTIVE TIMELINE ================= */}
        <div className="pt-6 border-t border-white/5 space-y-8">
          <div className="text-center space-y-1.5">
            <span className="text-[9px] font-black uppercase text-rose-450 tracking-wider">Triage Triage Pathway</span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading">How Our Golden Hour Emergency Triage Works</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timelineSteps.map((step, sIdx) => {
              const StepIcon = step.icon;
              const isSelected = activeTimelineStep === sIdx;
              return (
                <div
                  key={sIdx}
                  onClick={() => setActiveTimelineStep(sIdx)}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative h-[145px] flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-slate-900 border-rose-500/30' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest">{step.step}</span>
                      <span className="text-[8px] font-mono text-slate-450 bg-white/5 px-2 py-0.5 rounded-md font-extrabold">{step.timeLabel}</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-black text-white font-heading flex items-center gap-1.5">
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center text-white bg-gradient-to-br ${step.bgColor}`}>
                        <StepIcon className="w-3 h-3" />
                      </div>
                      <span>{step.title}</span>
                    </h4>

                    <p className="text-slate-400 text-[10.5px] leading-normal font-semibold">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= TRUST CHECKLIST ================= */}
        <div className="py-4 px-6 rounded-2xl bg-white/5 border border-white/5 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 max-w-4xl mx-auto shadow-inner text-center">
          <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest font-heading border-b sm:border-r border-white/10 pr-0 sm:pr-6 py-0.5 whitespace-nowrap">
            Trauma Guarantees
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-6 text-xs font-bold text-slate-300">
            {['24/7 Red Alert Desk', 'Highway Rapid Transit', 'Immediate ICU Admission', 'Certified Surgeons Advisory'].map((item, id) => (
              <div key={id} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/10 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= COMPRESSED EMERGENCY CTA ================= */}
        <div className="relative rounded-[2rem] bg-gradient-to-r from-rose-600 via-[#e11d48] to-[#be123c] p-6 text-center overflow-hidden border border-white/10 shadow-xl max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none animate-pulse" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1 max-w-xl">
              <span className="bg-white/15 text-white text-[8.5px] font-black uppercase tracking-widest px-2.5 py-1 rounded-xl inline-block leading-none">
                🚨 ROAD TRAUMA & AMBULANCE DESK DIRECT LINE
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white font-heading tracking-tight leading-tight">
                Need Immediate Medical Assistance?
              </h3>
              <p className="text-xs text-rose-100 font-light leading-relaxed">
                Our red triage desk is open continuously 24 hours a day, 365 days a year. Call our medical technicians immediately for ambulance coordinates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:7250853234"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white text-rose-600 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-slate-50 transition-all font-heading"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                <span>Call Emergency: 7250853234</span>
              </a>

              <button
                onClick={() => handleScrollToElement('contact')}
                className="w-full sm:w-auto px-4.5 py-3.5 rounded-xl bg-black/20 hover:bg-black/35 border border-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
