import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "@/components/cards/ProjectCard";
import FilterBar from "@/components/ui/FilterBar";
import projectsData from "@/data/projects.json";
import { 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  Globe2, 
  Network, 
  Rocket, 
  Zap, 
  Search, 
  Star, 
  Layers, 
  Activity,
  Filter,
  Terminal,
  Database,
  Cloud,
  Cpu as CpuIcon
} from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

const categories = ["All", "Web3", "AI", "SaaS", "DevTools", "Mobile"];

// Simple CountUp component for stats
const CountUp = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredProjects = useMemo(() => {
    return projectsData.filter(p => p.featured).slice(0, 3);
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projectsData.length };
    projectsData.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="pt-32 md:pt-56 pb-32 md:pb-56 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-mono text-sm mb-6 block tracking-[0.3em] uppercase opacity-80">
              // System_Archives
            </span>
            <h1 className="text-6xl sm:text-8xl md:text-[12rem] lg:text-[15rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
              Core <br /> <span className="text-slate-500">Systems</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
              Explore projects built by the Apex community. A decentralized directory of high-performance protocols and applications.
            </p>
          </motion.div>

          {/* Enhanced Filter & Search Bar */}
          <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/5 pb-12">
            <div className="flex-1 overflow-x-auto scrollbar-hide">
              <FilterBar
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                accentColor="secondary"
              />
            </div>
            
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-secondary transition-colors" size={18} />
              <input 
                type="text"
                placeholder="Search protocols..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 px-12 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-secondary focus:bg-white/[0.05] transition-all"
              />
            </div>
          </div>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-12 md:gap-24 mb-32 md:mb-56">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State Improvement */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 border border-dashed border-white/10 bg-white/[0.01] mb-32"
          >
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-secondary/20">
              <Filter className="text-secondary" size={32} />
            </div>
            <h3 className="text-3xl font-brutal uppercase tracking-tighter mb-4">No Systems Found</h3>
            <p className="text-slate-500 text-lg max-w-md mx-auto font-medium">
              We couldn't find any projects matching your criteria. Try adjusting your filters or search query.
            </p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-10 text-secondary font-black uppercase tracking-widest text-[10px] hover:underline"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}

        {/* NEW SECTION: Project Categories Overview */}
        <section className="mb-32 md:mb-56">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-brutal uppercase tracking-tighter">Category <span className="text-slate-500">Overview</span></h2>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveCategory(cat)}
                className={`p-8 border border-white/10 text-left transition-all group ${activeCategory === cat ? 'bg-secondary border-secondary' : 'bg-white/[0.02] hover:border-secondary/50'}`}
              >
                <div className={`text-[10px] font-black uppercase tracking-widest mb-4 ${activeCategory === cat ? 'text-black' : 'text-slate-500'}`}>
                  {cat === "All" ? "Total" : cat}
                </div>
                <div className={`text-4xl font-brutal tracking-tighter ${activeCategory === cat ? 'text-black' : 'text-white'}`}>
                  {categoryCounts[cat] || 0}
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* NEW SECTION: Top Projects / Featured Spotlight */}
        <section className="mb-32 md:mb-56">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-secondary font-mono text-sm mb-6 block tracking-widest uppercase">// Elite_Tier</span>
            <h2 className="text-5xl md:text-9xl font-brutal tracking-tighter uppercase leading-none">Featured <br /> <span className="text-slate-500">Spotlight</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredProjects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-black border border-white/10 p-10 hover:border-secondary transition-all duration-500 flex flex-col"
              >
                <div className="absolute top-8 right-8 text-secondary opacity-20 group-hover:opacity-100 transition-opacity">
                  <Star size={32} fill="currentColor" />
                </div>
                <div className="text-secondary font-mono text-xs mb-8 tracking-widest uppercase">[{project.category}]</div>
                <h3 className="text-4xl font-brutal uppercase tracking-tighter mb-6 group-hover:text-secondary transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-1">{project.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{project.team}</div>
                  <a href={project.demoUrl} className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NEW SECTION: Tech Stack Showcase */}
        <section className="mb-32 md:mb-56 py-32 border-y border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-secondary font-mono text-sm mb-6 block tracking-widest uppercase">// Technology_Matrix</span>
              <h2 className="text-5xl md:text-7xl font-brutal tracking-tighter uppercase leading-none mb-10">Powering the <br /> <span className="text-slate-500">Ecosystem</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed uppercase font-medium max-w-md">
                Our community leverages cutting-edge technologies to build resilient, scalable, and innovative protocols.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { name: "React", icon: Layers },
                { name: "Node.js", icon: Terminal },
                { name: "Solidity", icon: Database },
                { name: "Python", icon: Activity },
                { name: "Rust", icon: CpuIcon },
                { name: "TensorFlow", icon: Cloud },
              ].map((tech, i) => (
                <motion.div 
                  key={tech.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-white/5 bg-white/[0.01] flex flex-col items-center justify-center text-center group hover:border-secondary/30 transition-all"
                >
                  <tech.icon className="text-slate-500 group-hover:text-secondary mb-4 transition-colors" size={24} />
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Ecosystem Stats - Upgraded */}
        <section className="mb-32 md:mb-56 py-32 md:py-48 bg-white/[0.01] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 text-center relative z-10">
            {[
              { label: "Total Contributions", value: "25k+", icon: Code2 },
              { label: "Open Source Repos", value: "120+", icon: Globe2 },
              { label: "Active Builders", value: "1.2k+", icon: Network },
              { label: "Protocol Forks", value: "450+", icon: Cpu },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="w-16 h-16 bg-secondary/5 flex items-center justify-center mx-auto mb-8 border border-secondary/10 group-hover:bg-secondary/10 group-hover:scale-110 transition-all">
                  <stat.icon className="text-secondary" size={28} />
                </div>
                <div className="text-5xl sm:text-7xl md:text-9xl font-brutal tracking-tighter mb-6 text-secondary group-hover:scale-105 transition-transform">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Roadmap / Next Steps - Improved */}
        <section className="mb-32 md:mb-56">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-secondary font-mono text-sm mb-6 block tracking-widest uppercase">// Future_Protocol</span>
            <h2 className="text-5xl md:text-9xl font-brutal tracking-tighter uppercase leading-none">System <br /> <span className="text-slate-500">Roadmap</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { phase: "Phase 01", title: "Core Hardening", desc: "Optimizing protocol performance and security audits.", progress: 100 },
              { phase: "Phase 02", title: "Ecosystem Expansion", desc: "Integrating multi-chain support and cross-protocol bridges.", progress: 65 },
              { phase: "Phase 03", title: "Mass Adoption", desc: "Launching consumer-facing applications and global marketing.", progress: 15 },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 md:p-14 border border-white/10 bg-white/[0.02] hover:border-secondary/50 transition-all group relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-[60px] translate-x-16 -translate-y-16 group-hover:bg-secondary/10 transition-colors" />
                <div className="text-secondary font-mono text-lg md:text-xl mb-6">[{step.phase}]</div>
                <h4 className="text-3xl md:text-4xl font-brutal uppercase tracking-tighter mb-6 group-hover:text-secondary transition-colors">{step.title}</h4>
                <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">{step.desc}</p>
                
                {/* Progress Indicator */}
                <div className="mt-auto">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                    <span className="text-slate-500">Status</span>
                    <span className="text-secondary">{step.progress}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${step.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-secondary"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Submit Project CTA */}
        <section className="mb-32 md:mb-56 reveal-item">
          <div className="max-w-6xl mx-auto bg-secondary p-20 md:p-32 text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-[20s] linear" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-6xl md:text-9xl font-brutal tracking-tighter leading-[0.8] text-black uppercase mb-16">
                Built with <br /> <span className="text-black/40">Apex?</span>
              </h2>
              <p className="text-black font-bold max-w-xl mx-auto mb-16 text-lg md:text-xl">
                Showcase your protocol to the global network of architects and visionaries. Join the elite tier of builders.
              </p>
              <Magnetic strength={0.4}>
                <button className="bg-black text-white px-20 py-10 font-black uppercase tracking-[0.2em] text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-black/50">
                  Submit Project
                </button>
              </Magnetic>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
