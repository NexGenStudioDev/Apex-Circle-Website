import { useState, useMemo } from "react";
import { motion } from "motion/react"; // Added motion for animations
import GalleryGrid from "@/components/sections/GalleryGrid";
import FilterBar from "@/components/ui/FilterBar";
import galleryData from "@/data/gallery.json";
import { Play, Camera, Film, Image as ImageIcon } from "lucide-react"; // Added more icons

const categories = ["All", "Hackathon", "Workshop", "Meetup", "Community"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-32 md:pt-56 pb-32 md:pb-56 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Enhanced typography and motion */}
        <header className="mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-mono text-sm mb-6 block tracking-[0.3em] uppercase opacity-80">
              // Visual_Logs
            </span>
            <h1 className="text-6xl sm:text-8xl md:text-[12rem] lg:text-[15rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-12 md:mb-20">
              Protocol <br /> 
              <span className="text-slate-500 inline-block hover:text-primary transition-colors duration-700 cursor-default">
                Gallery
              </span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 md:mt-20 overflow-x-auto pb-6 scrollbar-hide"
          >
            <FilterBar
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              accentColor="primary"
            />
          </motion.div>
        </header>

        {/* Gallery Grid - Logic preserved, UI enhanced in component */}
        <GalleryGrid items={filteredGallery} />

        {/* Video Highlights - Upgraded with hover glow and animations */}
        <section className="mt-32 md:mt-64 mb-32 md:mb-64">
          <div className="text-center mb-20 md:mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-mono text-sm mb-6 block tracking-[0.3em] uppercase opacity-80">// Motion_Archives</span>
              <h2 className="text-5xl md:text-9xl font-brutal tracking-tighter uppercase leading-none">
                Video <br /> <span className="text-slate-500">Highlights</span>
              </h2>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "Global Hackathon 2025", duration: "03:45", thumb: "https://picsum.photos/seed/vid1/800/450" },
              { title: "Protocol Launch Event", duration: "02:12", thumb: "https://picsum.photos/seed/vid2/800/450" },
            ].map((video, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative aspect-video bg-black border border-white/10 overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-700"
              >
                {/* Video Thumbnail with subtle dark overlay */}
                <img 
                  src={video.thumb} 
                  alt={video.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Play Button Animation */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100 scale-150" />
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 relative z-10">
                      <Play className="text-primary fill-primary ml-1 group-hover:scale-110 transition-transform" size={32} />
                    </div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 border-2 border-primary/50 rounded-full animate-ping opacity-0 group-hover:opacity-20" />
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/80 to-transparent z-30">
                  <h4 className="text-2xl md:text-4xl font-brutal uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors duration-500">{video.title}</h4>
                  <div className="flex items-center gap-3">
                    <Film size={14} className="text-primary" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">{video.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Behind the Scenes - Improved grid and interactions */}
        <section className="mb-32 md:mb-64 py-32 md:py-48 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="text-center mb-20 md:mb-32 relative z-10">
            <span className="text-primary font-mono text-sm mb-6 block tracking-[0.3em] uppercase opacity-80">// Raw_Protocol</span>
            <h2 className="text-5xl md:text-9xl font-brutal tracking-tighter uppercase leading-none">
              Behind the <br /> <span className="text-slate-500">Scenes</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ rotate: i % 2 === 0 ? 2 : -2, scale: 1.05 }}
                className="aspect-square bg-black border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden group shadow-xl hover:shadow-primary/10 hover:border-primary/30"
              >
                <img 
                  src={`https://picsum.photos/seed/bts${i + 10}/600/600`} 
                  alt="BTS" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Empty State - Enhanced UI */}
        {filteredGallery.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 border border-dashed border-white/10 bg-white/[0.01]"
          >
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
              <ImageIcon className="text-slate-500" size={32} />
            </div>
            <h3 className="text-3xl font-brutal uppercase tracking-tighter mb-4">No Archives Found</h3>
            <p className="text-slate-500 text-lg max-w-md mx-auto font-medium">
              The visual logs for <span className="text-primary">"{activeCategory}"</span> are currently encrypted or unavailable.
            </p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-10 px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
