import { useRef } from "react";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Trophy, Users, Calendar, MapPin, ArrowUpRight, CheckCircle2, MessageSquare, Code2, Globe2, Lightbulb } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const hackathons = [
  {
    id: "h1",
    title: "Apex Genesis 2026",
    tagline: "Building the Decentralized Future",
    date: "May 15-17, 2026",
    location: "San Francisco / Hybrid",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070",
    status: "Registration Open"
  }
];

const sponsors = [
  { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024" },
  { name: "Polygon", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=024" },
  { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=024" },
  { name: "Chainlink", logo: "https://cryptologos.cc/logos/chainlink-link-logo.png?v=024" },
  { name: "Filecoin", logo: "https://cryptologos.cc/logos/filecoin-fil-logo.png?v=024" },
  { name: "The Graph", logo: "https://cryptologos.cc/logos/the-graph-grt-logo.png?v=024" },
];

export default function Hackathons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".reveal-item", {
      scrollTrigger: {
        trigger: ".reveal-item",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-32">
      {/* Hero Section */}
      <section className="px-6 mb-24 md:mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-white/10 mb-12 md:mb-16 group">
            <img 
              src={hackathons[0].image} 
              alt={hackathons[0].title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 right-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 backdrop-blur-sm">
                  {hackathons[0].status}
                </span>
              </motion.div>
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-brutal tracking-tighter leading-[0.85] uppercase mb-6">
                {hackathons[0].title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl leading-relaxed">
                {hackathons[0].tagline}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            <div className="p-8 md:p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <Calendar className="text-primary mb-6 group-hover:scale-110 transition-transform" size={28} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-3">// Dates</span>
              <div className="text-2xl md:text-3xl font-brutal uppercase tracking-tighter">{hackathons[0].date}</div>
            </div>
            <div className="p-8 md:p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <MapPin className="text-primary mb-6 group-hover:scale-110 transition-transform" size={28} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-3">// Location</span>
              <div className="text-2xl md:text-3xl font-brutal uppercase tracking-tighter">{hackathons[0].location}</div>
            </div>
            <div className="sm:col-span-2 md:col-span-1 flex items-center justify-center p-8 md:p-10 border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              <Magnetic strength={0.3}>
                <button className="relative z-10 w-full md:w-auto bg-primary text-black px-14 py-7 font-black uppercase tracking-widest text-base hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.3)]">
                  Register Now
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* About Hackathon */}
      <section className="px-6 mb-32 md:mb-56">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
          <div className="reveal-item">
            <span className="text-primary font-mono text-sm mb-6 block tracking-widest uppercase">// Mission_Brief</span>
            <h2 className="text-5xl md:text-8xl font-brutal tracking-tighter leading-[0.9] uppercase mb-10">
              The <span className="text-slate-500">Genesis</span> <br /> Protocol
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-16 font-medium">
              Apex Genesis is more than a hackathon. It's a high-intensity operation to deploy next-generation decentralized systems. We're looking for architects, engineers, and visionaries to push the boundaries of what's possible.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="p-8 border-l-2 border-primary/30 bg-white/[0.01]">
                <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-6">Problem Statements</h4>
                <ul className="space-y-4 text-base text-slate-400 font-medium">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary" /> Scalable L2 Solutions</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary" /> Privacy-Preserving DeFi</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary" /> Decentralized Identity</li>
                </ul>
              </div>
              <div className="p-8 border-l-2 border-secondary/30 bg-white/[0.01]">
                <h4 className="text-secondary font-black uppercase tracking-widest text-xs mb-6">Tracks</h4>
                <ul className="space-y-4 text-base text-slate-400 font-medium">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-secondary" /> Infrastructure</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-secondary" /> User Experience</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-secondary" /> Social Impact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 reveal-item">
            <div className="aspect-square bg-white/[0.03] border border-white/10 p-8 md:p-12 flex flex-col justify-end group hover:border-primary transition-all duration-500">
              <Trophy className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} md:size={48} />
              <div className="text-3xl md:text-5xl font-brutal tracking-tighter mb-2">$50k+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Total Prize Pool</div>
            </div>
            <div className="aspect-square bg-white/[0.03] border border-white/10 p-8 md:p-12 flex flex-col justify-end group hover:border-primary transition-all duration-500">
              <Users className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} md:size={48} />
              <div className="text-3xl md:text-5xl font-brutal tracking-tighter mb-2">500+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Participants</div>
            </div>
            <div className="aspect-square bg-white/[0.03] border border-white/10 p-8 md:p-12 flex flex-col justify-end group hover:border-primary transition-all duration-500">
              <Zap className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} md:size={48} />
              <div className="text-3xl md:text-5xl font-brutal tracking-tighter mb-2">48H</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Intensive Build</div>
            </div>
            <div className="aspect-square bg-white/[0.03] border border-white/10 p-8 md:p-12 flex flex-col justify-end group hover:border-primary transition-all duration-500">
              <MessageSquare className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} md:size={48} />
              <div className="text-3xl md:text-5xl font-brutal tracking-tighter mb-2">20+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Expert Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Why Participate */}
      <section className="px-6 mb-32 md:mb-56 reveal-item">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-2xl">
              <span className="text-primary font-mono text-sm mb-6 block tracking-widest uppercase">// Protocol_Advantages</span>
              <h2 className="text-5xl md:text-8xl font-brutal tracking-tighter leading-[0.9] uppercase">
                Why <span className="text-slate-500">Participate?</span>
              </h2>
            </div>
            <p className="text-slate-400 font-medium max-w-sm">
              Accelerate your journey from idea to deployment with world-class resources and network.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Globe2, title: "Global Network", desc: "Connect with elite developers and founders from the world's leading decentralized ecosystems." },
              { icon: Code2, title: "Direct Mentorship", desc: "Get 1-on-1 technical guidance from core protocol engineers and security auditors." },
              { icon: Lightbulb, title: "Venture Funding", desc: "Top projects gain direct access to our incubator program and seed funding network." },
            ].map((item, i) => (
              <div key={i} className="p-10 border border-white/10 bg-white/[0.01] hover:border-primary transition-all group">
                <div className="w-16 h-16 bg-primary/5 flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl font-brutal uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 mb-32 md:mb-56 py-32 md:py-48 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 md:mb-32">
            <span className="text-primary font-mono text-sm mb-6 block tracking-widest uppercase">// Mission_Schedule</span>
            <h2 className="text-6xl md:text-9xl font-brutal tracking-tighter uppercase leading-none">Operation <br /> <span className="text-primary">Timeline</span></h2>
          </div>
          <div className="space-y-0">
            {[
              { time: "09:00 AM", event: "Check-in & Breakfast", date: "Day 1", type: "Logistics" },
              { time: "11:00 AM", event: "Opening Ceremony", date: "Day 1", type: "Main Event" },
              { time: "12:00 PM", event: "Hacking Starts", date: "Day 1", type: "Protocol Start" },
              { time: "02:00 PM", event: "Workshop: Advanced ZK", date: "Day 2", type: "Technical" },
              { time: "12:00 PM", event: "Submission Deadline", date: "Day 3", type: "Protocol End" },
              { time: "04:00 PM", event: "Closing & Awards", date: "Day 3", type: "Main Event" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-16 border-b border-white/5 py-10 md:py-14 group hover:bg-white/[0.01] transition-all px-4">
                <div className="flex flex-col">
                  <div className="text-2xl md:text-3xl font-mono text-slate-500 group-hover:text-primary transition-colors w-40 shrink-0">{item.time}</div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-700 mt-2">{item.type}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl font-brutal uppercase tracking-tighter mb-2 group-hover:translate-x-2 transition-transform duration-500">{item.event}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">{item.date}</span>
                </div>
                <div className="hidden sm:flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-white/10 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                  <ArrowUpRight className="text-slate-700 group-hover:text-primary transition-colors" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="px-6 mb-48 reveal-item">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-mono text-sm mb-12 block tracking-widest uppercase">// Backed_By_The_Best</span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-16 items-center">
            {sponsors.map((sponsor, i) => (
              <div key={i} className="group flex flex-col items-center gap-4">
                <div className="relative w-full aspect-square max-w-[120px] flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain opacity-40 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 group-hover:text-primary transition-colors">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="px-6 reveal-item">
        <div className="max-w-6xl mx-auto bg-primary p-20 md:p-32 text-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-[20s] linear" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/20 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-9xl font-brutal tracking-tighter leading-[0.8] text-black uppercase mb-16 relative z-10">
              Ready to <br /> <span className="text-black/40">Deploy?</span>
            </h2>
            <Magnetic strength={0.4}>
              <button className="relative z-10 bg-black text-white px-20 py-10 font-black uppercase tracking-[0.2em] text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-black/50">
                Initialize Registration
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
