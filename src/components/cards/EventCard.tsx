import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Event } from '@/types';
import { Link } from 'react-router-dom';

interface EventCardProps {
  event: Event;
  index?: number;
}
export default function EventCard({ event }: EventCardProps) {
  return (
    <Link to={`/hackathons`} className="group relative bg-white/[0.02] border border-white/10 hover:border-primary transition-all duration-500 overflow-hidden">

  {/* IMAGE */}
  <div className="aspect-[16/10] overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(0,255,0,0.1)] transition-shadow duration-500">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
      referrerPolicy="no-referrer"
    />

    {/* Glitch Overlay */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-primary animate-glitch-line" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary animate-glitch-line-delayed" />
    </div>

    {/* TYPE */}
    <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1">
      {event.type}
    </div>

    {/* STATUS */}
    <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-white/20 text-white">
      {event.status || "Upcoming"}
    </div>
  </div>

  {/* CONTENT */}
  <div className="p-8">

    {/* META */}
    <div className="flex flex-wrap items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">
      <div className="flex items-center gap-1.5">
        <Calendar size={12} className="text-primary" />
        {event.date}
      </div>

      <div className="flex items-center gap-1.5">
        <MapPin size={12} className="text-primary" />
        {event.location}
      </div>

      {/* DURATION */}
      {event.duration && (
        <span className="border border-white/10 px-2 py-1">
          {event.duration}
        </span>
      )}
    </div>

    {/* TITLE */}
    <h3 className="text-2xl font-brutal tracking-tight mb-4 group-hover:text-primary transition-colors">
      {event.title}
    </h3>

    {/* DESCRIPTION */}
    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
      {event.description}
    </p>

    {/* TAGS */}
    <div className="flex flex-wrap gap-2 mb-6">
      {event.tags?.map((tag: string, i: number) => (
        <span
          key={i}
          className="text-[10px] uppercase tracking-widest border border-white/10 px-2 py-1 text-slate-400"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* FOOTER */}
    <div className="flex items-center justify-between">

      {/* SEATS */}
      {event.seats && (
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">
          {event.seats} Seats Left
        </span>
      )}

      {/* CTA */}
      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors">
        Register Now <ArrowUpRight size={14} />
      </button>
    </div>
  </div>
</Link>
  );
}
