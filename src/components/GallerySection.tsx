import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

interface GalleryPhoto {
  url: string;
  title: string;
  desc: string;
  category: string;
  heightClass: string; // for masonry layout
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Core Categories asked: Hospital Building, Reception, ICU, NICU, Operation Theatre, Doctors Team, Ambulance, Diagnostics, Patient Care, Infrastructure
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'building', label: 'Hospital Building' },
    { id: 'reception', label: 'Reception' },
    { id: 'icu', label: 'ICU' },
    { id: 'nicu', label: 'NICU' },
    { id: 'ot', label: 'Operation Theatre' },
    { id: 'doctors', label: 'Doctors Team' },
    { id: 'ambulance', label: 'Ambulance' },
    { id: 'diagnostics', label: 'Diagnostics' },
    { id: 'care', label: 'Patient Care' },
    { id: 'infrastructure', label: 'Infrastructure' }
  ];

  const galleryPhotos: GalleryPhoto[] = [
    {
      url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&q=80&w=800',
      title: 'Sakari Mod Building Facade',
      desc: 'Mata Bhagyamani Devi Hospital premise built with robust disaster-resistant plan.',
      category: 'building',
      heightClass: 'h-80'
    },
    {
      url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      title: 'Main Outpatient Admission Desk',
      desc: 'Fully modernized reception area for instant entry checks and doctor consultation routes.',
      category: 'reception',
      heightClass: 'h-96'
    },
    {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      title: 'Advanced Surgical ICU Wards',
      desc: 'Multiparameter patient monitors and high-frequency critical ventilator networks.',
      category: 'icu',
      heightClass: 'h-80'
    },
    {
      url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
      title: 'Neonatal Incubator Intensive Care',
      desc: 'Level-II sterile incubation systems providing warmth for critical newborns.',
      category: 'nicu',
      heightClass: 'h-96'
    },
    {
      url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800',
      title: 'Multi-Speciality Operation Theatre',
      desc: 'Sterile surgical rooms with advanced anatomical lights and life survival support.',
      category: 'ot',
      heightClass: 'h-80'
    },
    {
      url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
      title: 'Specialist Senior Surgeon Board',
      desc: 'Top emergency physicians and chief gynaecologists during daily medical briefing.',
      category: 'doctors',
      heightClass: 'h-96'
    },
    {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      title: '24×7 Trauma Critical Ambulance',
      desc: 'Advanced life support ambulances equipped with immediate cardiac oxygen arrays.',
      category: 'ambulance',
      heightClass: 'h-80'
    },
    {
      url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800',
      title: 'Clinical Diagnostics Lab',
      desc: 'High-frequency digital imaging and processing unit for immediate diagnostics.',
      category: 'diagnostics',
      heightClass: 'h-96'
    },
    {
      url: 'https://images.unsplash.com/photo-1544126592-807daf215ae5?auto=format&fit=crop&q=80&w=800',
      title: 'Pediatric Care & Consultations',
      desc: 'Fully sterilised clinical suite for painless deliveries and neonatal resuscitation.',
      category: 'care',
      heightClass: 'h-80'
    },
    {
      url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&q=80&w=800',
      title: 'Disaster Resistant Medical Layout',
      desc: 'Robust hospital structure planning providing extreme safety for over 100 beds.',
      category: 'infrastructure',
      heightClass: 'h-96'
    }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? galleryPhotos 
    : galleryPhotos.filter(p => p.category === activeCategory);

  return (
    <section 
      id="gallery" 
      className="py-20 bg-white relative overflow-hidden scroll-mt-[135px]"
    >
      {/* Background spot light detailing */}
      <div className="absolute top-[25%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-50/40 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-purple-50/40 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center space-y-12">
        
        {/* Title Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-150 text-teal-700 text-xs font-black uppercase tracking-widest font-sans shadow-xs">
            <ImageIcon className="w-3.5 h-3.5 text-teal-650 animate-pulse" />
            <span>Hospital Photo Tour</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-sans leading-tight">
            Our Clinical & Infrastructure Gallery
          </h2>

          <p className="text-slate-650 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            Take a visual walk through our active wards, high-frequency radiology suites, neonatology incubation setups, and medical team interactions in Kudra.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                activeCategory === cat.id 
                  ? 'bg-slate-950 text-white border-slate-950 shadow-md' 
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Layout Container */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-6 space-y-6 w-full pt-4">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                key={photo.title}
                onClick={() => setSelectedImage(photo.url)}
                className={`break-inside-avoid relative rounded-[2rem] overflow-hidden ${photo.heightClass} bg-slate-50 border border-slate-200/60 shadow-lg cursor-zoom-in flex flex-col justify-end group`}
              >
                {/* Visual vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <img 
                  src={photo.url} 
                  alt={`${photo.title} - ${photo.desc} - Mata Bhagyamani Devi Hospital Kudra Kaimur Bihar`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                />

                {/* Overlaid texts shown on hover */}
                <div className="p-6 text-left opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20 space-y-1 transform translate-y-3 group-hover:translate-y-0">
                  <div className="flex items-center gap-1 text-teal-400 text-[9px] font-black uppercase tracking-widest font-mono">
                    <ZoomIn className="w-3.5 h-3.5 animate-pulse" />
                    <span>View Lightbox</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-white font-sans">{photo.title}</h4>
                  <p className="text-[10px] text-slate-300 leading-relaxed font-semibold line-clamp-2">{photo.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state overlay */}
        {filteredPhotos.length === 0 && (
          <div className="py-12 bg-slate-50 rounded-3xl border border-slate-100">
            <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">No Photos indexed under this category yet</span>
          </div>
        )}

        {/* Fullscreen interactive image details */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-slate-950/95 z-55 flex items-center justify-center p-4 cursor-zoom-out"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-white bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
                title="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img 
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.92 }}
                src={selectedImage} 
                alt="Clinical Fullscreen Lightbox" 
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[85vh] object-contain rounded-[2rem] shadow-2xl border-2 border-white/10"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
