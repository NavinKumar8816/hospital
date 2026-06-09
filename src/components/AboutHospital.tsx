import { Award, CheckCircle2, Heart, Microscope, ShieldCheck } from 'lucide-react';

export default function AboutHospital() {
  return (
    <section 
      id="about" 
      className="py-16 md:py-20 bg-white relative overflow-hidden scroll-mt-[130px]"
    >
      {/* Visual background lights */}
      <div className="absolute top-1/3 left-[-5%] w-96 h-96 rounded-full bg-indigo-50/60 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-5%] w-96 h-96 rounded-full bg-pink-50/40 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Premium Visual Showcase Grid */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-purple-light via-pink-50 to-indigo-50 rounded-[2.5rem] opacity-70 filter blur-xl pointer-events-none" />
            
            <div className="relative rounded-[2.5rem] bg-white border border-slate-200/60 p-3 shadow-2xl z-10 overflow-hidden">
              <div className="relative rounded-[1.85rem] overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                  alt="Mata Bhagyamani Devi Hospital Emergency and Medical Clinic Wing in Kudra, Kaimur, Bihar"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />
                
                {/* Embedded Compassionate Seal */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-left">
                    <span className="block text-[8.5px] font-mono tracking-widest text-[#7c3aed] font-black uppercase">FOUNDATION TRUST</span>
                    <span className="text-xs font-bold text-white">Serving Kudra Since Inception</span>
                  </div>
                </div>
              </div>

              {/* Mini Stats Overlapping overlay */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl mt-3 text-center leading-none">
                <div>
                  <span className="text-xl font-extrabold text-[#0c4ea3]">100+</span>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase mt-1 leading-none">Operational Beds</span>
                </div>
                <div className="border-l border-slate-200 pl-1">
                  <span className="text-xl font-extrabold text-[#702082]">15k+</span>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase mt-1 leading-none">Families Served</span>
                </div>
                <div className="border-l border-slate-200 pl-1">
                  <span className="text-xl font-extrabold text-emerald-600">24/7</span>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase mt-1 leading-none">Trauma Care</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Sophisticated Corporate Copywriting */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-150 text-indigo-700 text-xs font-black uppercase tracking-widest font-heading shadow-xs">
                <Heart className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
                <span>Premier Healthcare Facility • Kudra</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading leading-tight">
                Empowered Clinical Care & Healing Atmosphere
              </h2>
            </div>

            <p className="text-slate-650 text-sm md:text-base leading-relaxed font-light">
              Established at a strategic central hub in <strong>Sakari Mod, Kudra (Kaimur, Bihar)</strong>, Mata Bhagyamani Devi Hospital has evolved as the region&apos;s premier healthcare hub. We emphasize high-integrity clinical practices, rapid recovery, and zero-deposit medical welfare diagnostics above everything else.
            </p>

            <p className="text-slate-650 text-xs md:text-sm leading-relaxed font-medium">
              Our advanced clinical campus integrates a state-of-the-art 100-bed multi-speciality tertiary facility with dedicated emergency rooms, modular operation suites, intensive coronary care (ICCU), level-II sterile incubation systems (NICU), and professional 24/7 dispatch ambulances.
            </p>

            {/* Structured Bullet Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/60 border border-slate-100 p-5 rounded-3xl">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900 font-heading uppercase tracking-tight">Patient-First Ethics</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Continuous proctored bedsides overseen by senior specialist doctors.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Microscope className="w-4.5 h-4.5 text-[#0c4ea3] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900 font-heading uppercase tracking-tight">Advanced Diagnostic Desk</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">High-definition Color Doppler Ultrasound and instant Digital X-Rays.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4.5 h-4.5 text-[#702082] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900 font-heading uppercase tracking-tight">PM-JAY Cashless Support</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">100% cashless support up to ₹5 Lakh benefits for cardholders.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-4.5 h-4.5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900 font-heading uppercase tracking-tight">Accredited Academic Base</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Direct attached training with Ramdhari Singh Memorial Nursing College.</p>
                </div>
              </div>
            </div>

            <div className="text-slate-500 text-[11px] font-semibold italic flex items-center gap-1.5 pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping" />
              <span>Registered under National Clinical Establishments Authorities.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
