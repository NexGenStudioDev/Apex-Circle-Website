import { useState, useMemo } from 'react';
import EventCard from '@/components/cards/EventCard';
import FilterBar from '@/components/ui/FilterBar';
import eventsData from '@/data/events.json';

const categories = ['All', 'Hackathon', 'Workshop', 'Meetup', 'Conference'];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'All') return eventsData;
    return eventsData.filter((event) => event.type === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-24">
          <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
            // Operation_Schedule
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
            Protocol <br /> <span className="text-slate-500">Events</span>
          </h1>
          <div className="mt-8 md:mt-12 overflow-x-auto pb-4 scrollbar-hide">
            <FilterBar
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              accentColor="primary"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-48">
          {filteredEvents.map((event) => (
            <EventCard  event={event} />
          ))}
        </div>

     

        {/* Past Events Archive */}
        <section className="mb-24 md:mb-48">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">
              Past <span className="text-slate-500">Operations</span>
            </h2>
            <button className="w-fit text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
              View Archives
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center font-brutal text-lg md:text-xl"
              >
                ARCHIVE_{i + 1}
              </div>
            ))}
          </div>
        </section>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No events found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
