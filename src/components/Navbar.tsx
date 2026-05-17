import { motion } from 'motion/react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Technology', href: '#technology' },
    { name: 'Results', href: '#results' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12',
        isScrolled ? 'bg-luxury-bg/80 backdrop-blur-lg py-4 border-b border-luxury-accent/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-luxury-ink rounded-full flex items-center justify-center text-luxury-white font-serif text-xl font-bold transition-transform duration-500 group-hover:rotate-12">
            L
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-luxury-ink">
            LUXE<span className="text-luxury-accent italic">DENTAL</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-luxury-ink/70 hover:text-luxury-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-luxury-ink hover:text-luxury-accent transition-colors"
          >
            <Phone size={14} className="text-luxury-accent" />
            Book Now
          </a>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn relative flex items-center justify-center gap-2 bg-luxury-ink text-luxury-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold shadow-xl shadow-luxury-ink/10 overflow-hidden transition-colors duration-300"
          >
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 bg-luxury-accent rounded-t-full transition-all duration-1000 ease-out group-hover/btn:w-[150%] group-hover/btn:h-[300%]" />
            <span className="relative z-10 transition-colors duration-300">Free Consultation</span>
            <div className="relative z-10 w-3.5 h-3.5 overflow-hidden transition-colors duration-300 flex-shrink-0">
              <ArrowRight size={14} className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover/btn:translate-x-full" />
              <ArrowRight size={14} className="absolute inset-0 transition-transform duration-1000 ease-in-out -translate-x-full group-hover/btn:translate-x-0" />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-luxury-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-luxury-bg border-b border-luxury-accent/10 p-8 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif font-medium text-luxury-ink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 flex flex-col gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative w-full flex items-center justify-center gap-2 bg-luxury-accent text-luxury-white py-4 rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-colors duration-300"
            >
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 bg-luxury-ink rounded-t-full transition-all duration-1000 ease-out group-hover/btn:w-[150%] group-hover/btn:h-[300%]" />
              <span className="relative z-10 transition-colors duration-300">Book Appointment</span>
              <div className="relative z-10 w-4 h-4 overflow-hidden transition-colors duration-300 flex-shrink-0">
                <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover/btn:translate-x-full" />
                <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out -translate-x-full group-hover/btn:translate-x-0" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
