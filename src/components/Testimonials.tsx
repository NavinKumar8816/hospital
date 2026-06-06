import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ramesh Singh',
      relation: 'Father of Patient',
      location: 'Kudra, Kaimur',
      treatment: 'Emergency Trauma Recovery',
      quote: 'My son was admitted immediately to the trauma ward after a road emergency near Sakari Mod. The level-1 emergency response team operated on him without delaying for paperwork. Their 24/7 ICU vigilance saved his life.',
      rating: 5,
      avatar: 'RS',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-100'
    },
    {
      name: 'Sunita Devi',
      relation: 'Self',
      location: 'Mohania, Kaimur',
      treatment: 'Ayushman Cashless Delivery',
      quote: 'We completed my delivery under the Ayushman Bharat card. The Arogya Mitra desk did the entire biometric registration with no upfront deposit. The ward was sterilised, and the nursing staff cared for my baby beautifully.',
      rating: 5,
      avatar: 'SD',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100'
    },
    {
      name: 'Dr. Akhilesh Pandey',
      relation: 'Guardian',
      location: 'Sasaram, Bihar',
      treatment: 'Advanced ICU Treatment',
      quote: 'As a retired professional, I was critical of regional healthcare. But Mata Bhagyamani Devi Hospital completely exceeded my expectations. Their advanced ventilators, color doppler, and continuous nurse proctors are outstanding.',
      rating: 5,
      avatar: 'AP',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-100'
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-20 bg-gradient-to-b from-white via-indigo-50/10 to-white relative overflow-hidden scroll-mt-[130px]"
    >
      {/* Visual neon light detailings */}
      <div className="absolute top-[25%] left-[-10%] w-96 h-96 rounded-full bg-indigo-50/70 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 rounded-full bg-pink-50/50 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-150 text-indigo-700 text-xs font-black uppercase tracking-widest font-heading shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-pink-500" />
            <span>Voices of Healing & Gratitude</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading leading-tight">
            Patient Stories & Family Testimonials
          </h2>

          <p className="text-slate-650 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Nothing makes us prouder than the stories of recovery, newborn births, and successful emergency stabilizers shared by families we are empanelled to treat.
          </p>
        </div>

        {/* Testimonials horizontal flex/grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-[2.25rem] bg-white border border-slate-200/50 hover:border-brand-purple/20 shadow-sm hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between h-[340px] relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-pink-50 pointer-events-none transition-colors duration-300" />

              <div className="space-y-4">
                {/* Rating Stars row */}
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Patient Quote */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold italic">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Patient User Info card bottom row */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0c4ea3] to-[#702082] text-white flex items-center justify-center font-black text-xs shadow-md">
                  {test.avatar}
                </div>
                <div className="leading-tight text-left">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 font-heading">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold mt-0.5 uppercase tracking-wide">
                    {test.relation} • <span className="text-slate-500">{test.location}</span>
                  </p>
                  <span className={`inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border mt-1.5 ${test.badgeColor}`}>
                    {test.treatment}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Patient Stat summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-[11px] font-bold text-slate-500">
            <Heart className="w-3.5 h-3.5 text-rose-500 animate-pulse fill-rose-50" />
            <span>Rated <strong>4.9/5 Stars Selected</strong> based on 1,200+ local medical reviews.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
