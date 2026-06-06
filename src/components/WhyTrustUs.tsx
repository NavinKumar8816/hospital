import React from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  ShieldAlert, 
  Activity, 
  Users, 
  Cpu, 
  Award, 
  Ambulance, 
  Heart, 
  Check 
} from 'lucide-react';

export default function WhyTrustUs() {
  const trustPoints = [
    {
      title: '24×7 Emergency Services',
      desc: 'Active on-site triage experts, emergency medical rooms, and critical life support diagnostics operational through day & night.',
      icon: Clock,
      color: 'from-rose-500 to-red-600',
      bglight: 'bg-rose-50 border-rose-100 text-rose-600'
    },
    {
      title: 'Trauma Center',
      desc: 'Advanced Golden Hour resuscitation facilities stationed straight on the Kudra National Highway corridor to address urgent polytrauma cases.',
      icon: ShieldAlert,
      color: 'from-red-500 to-rose-700',
      bglight: 'bg-red-50 border-red-100 text-red-600'
    },
    {
      title: 'ICU / ICCU / NICU Support',
      desc: 'Continuous multi-parameter wireless monitoring, pediatric warm incubators, and intensive telemetry boards for critical patients.',
      icon: Activity,
      color: 'from-[#0c4ea3] to-[#4d3091]',
      bglight: 'bg-blue-50 border-blue-100 text-[#0c4ea3]'
    },
    {
      title: 'Experienced Medical Team',
      desc: 'Elite physicians, chief surgeons, maternal gynaecologist leaders, and pediatric staff registered under state council boards.',
      icon: Users,
      color: 'from-[#4d3091] to-[#702082]',
      bglight: 'bg-indigo-50 border-indigo-100 text-indigo-700'
    },
    {
      title: 'Digital Diagnostics',
      desc: 'Equipped with digital high-frequency X-Ray machines, Color Doppler Ultrasound imaging, and automated fast-processing Pathology.',
      icon: Cpu,
      color: 'from-amber-500 to-orange-600',
      bglight: 'bg-amber-50 border-amber-100 text-amber-700'
    },
    {
      title: 'Ayushman Bharat Support',
      desc: 'Empaneled centrally under the PM-JAY scheme, delivering up to ₹5 Lakh cashless surgery benefits seamlessly.',
      icon: Award,
      color: 'from-emerald-500 to-teal-600',
      bglight: 'bg-emerald-50 border-emerald-100 text-emerald-700'
    },
    {
      title: 'Ambulance Service',
      desc: 'Rapid on-call emergency dispatch ambulances equipped with full mobile oxygen delivery facilities, stationed internally.',
      icon: Ambulance,
      color: 'from-pink-500 to-rose-600',
      bglight: 'bg-pink-50 border-pink-100 text-pink-600'
    },
    {
      title: 'Patient-Centered Care',
      desc: 'Humble, compassionate nursing, hygienic sanitised wards, and comfortable resting zones with complete transparent care logs.',
      icon: Heart,
      color: 'from-[#be123c] to-[#702082]',
      bglight: 'bg-red-50 border-rose-150 text-[#be123c]'
    }
  ];

  return (
    <section 
      id="why-trust-us" 
      className="py-16 md:py-20 bg-gradient-to-b from-white via-indigo-50/10 to-white relative overflow-hidden scroll-mt-[135px]"
    >
      {/* Background spot light detailing */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-50/70 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-pink-50/50 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-black uppercase tracking-widest font-heading shadow-xs">
            <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
            <span>Core Pillars of Commitment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading leading-tight">
            Why Local Families Trust Our Care
          </h2>

          <p className="text-slate-650 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Providing around-the-clock medical security and professional tertiary treatment for Kudra, Kaimur, and surrounding communities with compassionate bedside excellence.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, idx) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="p-6 rounded-[2rem] bg-white border border-slate-200/50 hover:border-indigo-200 shadow-sm hover:shadow-xl transition-all duration-350 text-left flex flex-col justify-between group relative overflow-hidden h-[240px]"
              >
                {/* Visual side glow bar */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-indigo-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-inner ${point.bglight}`}>
                      <IconComponent className="w-5.5 h-5.5 stroke-[2.2]" />
                    </div>
                    {/* Tiny sequential numbering */}
                    <span className="text-[9px] font-black text-slate-300 group-hover:text-slate-400 font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-md font-black text-slate-950 group-hover:text-[#0c4ea3] transition-colors font-heading tracking-tight leading-tight">
                    {point.title}
                  </h3>

                  <p className="text-slate-500 text-[11.5px] leading-relaxed font-semibold line-clamp-3">
                    {point.desc}
                  </p>
                </div>

                <div className="border-t border-slate-50 pt-2.5 flex items-center gap-1.5 text-[9.5px] text-slate-400 font-bold uppercase tracking-wider font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified Capability</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
