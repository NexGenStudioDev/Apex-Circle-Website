import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Hexagon, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },

  // 👇 Discovery & Trust
  { name: 'About', path: '/about' },
  { name: 'Community', path: '/community' },

  // 👇 Engagement
  { name: 'Events', path: '/events' },

  // 👇 Proof / Work
  { name: 'Projects', path: '/projects' },
  { name: 'Gallery', path: '/gallery' },

  // 👇 People (last)
  { name: 'Team', path: '/team' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 px-6 py-8',
        scrolled ? 'py-4' : 'py-8',
      )}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-4 md:px-6 py-3 rounded-full',
          scrolled
            ? 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl'
            : 'bg-transparent',
        )}
      >
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Zap className="text-black" size={16} fill="currentColor" />
          </div>
          <span className="text-sm font-brutal uppercase tracking-widest hidden sm:inline-block">
            APEX <span className="text-primary">CIRCLE</span>
          </span>
          <span className="text-sm font-brutal uppercase tracking-widest sm:hidden">APEX</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-primary whitespace-nowrap',
                location.pathname === link.path ? 'text-primary' : 'text-slate-400',
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-px h-4 bg-white/10 mx-1 xl:mx-2" />
          <Link
            to="/contact"
            className="text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-colors whitespace-nowrap"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link
            to="/contact"
            className="text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20 px-4 py-2 rounded-full hover:bg-primary hover:text-black transition-all"
          >
            Join
          </Link>
          <button
            className="text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[-1] bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col pt-32 px-6 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-4xl sm:text-5xl font-brutal uppercase tracking-tighter transition-colors block py-2',
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-slate-700 hover:text-white',
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <Link
                  to="/contact"
                  className="bg-primary text-black font-black uppercase tracking-widest text-sm py-5 rounded-none text-center block hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Initialize Connection
                </Link>
              </motion.div>
            </div>

            <div className="mt-auto pt-12 flex justify-between items-center">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                © 2026 APEX CIRCLE
              </div>
              <div className="flex gap-4">
                {['TW', 'GH', 'LI'].map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary cursor-pointer"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
