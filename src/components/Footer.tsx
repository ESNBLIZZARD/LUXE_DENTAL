import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-ink text-luxury-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
              Ready for your <br />
              <span className="italic text-luxury-accent">Best Smile?</span>
            </h2>
            <p className="text-stone-400 text-lg mb-10 max-w-md">
              Join the thousands of patients who have transformed their lives through our premium oral design.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a 
                href="https://care-pulse-iota-eight.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn relative flex items-center justify-center gap-2 bg-luxury-accent text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-colors duration-300"
              >
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 bg-white rounded-t-full transition-all duration-1000 ease-out group-hover/btn:w-[150%] group-hover/btn:h-[300%]" />
                <span className="relative z-10 group-hover/btn:text-luxury-ink transition-colors duration-300">Book Appointment</span>
                <div className="relative z-10 w-4 h-4 overflow-hidden group-hover/btn:text-luxury-ink transition-colors duration-300 flex-shrink-0">
                  <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover/btn:translate-x-full" />
                  <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out -translate-x-full group-hover/btn:translate-x-0" />
                </div>
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn relative flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-colors duration-300"
              >
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 bg-white/10 rounded-t-full transition-all duration-1000 ease-out group-hover/btn:w-[150%] group-hover/btn:h-[300%]" />
                <span className="relative z-10 transition-colors duration-300">View Gallery</span>
                <div className="relative z-10 w-4 h-4 overflow-hidden transition-colors duration-300 flex-shrink-0">
                  <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover/btn:translate-x-full" />
                  <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out -translate-x-full group-hover/btn:translate-x-0" />
                </div>
              </motion.button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-12 pt-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-accent mb-6">Contact Us</p>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+1234567890" className="flex items-center gap-3 text-stone-300 hover:text-luxury-accent transition-colors">
                    <Phone size={16} /> 123 Luxury Way, Oral City
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@luxedental.com" className="flex items-center gap-3 text-stone-300 hover:text-luxury-accent transition-colors">
                    <Mail size={16} /> hello@luxedental.com
                  </a>
                </li>
                <li className="text-stone-500 text-sm mt-6">
                  Mon – Fri: 8am – 7pm <br />
                  Sat: 10am – 4pm
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-accent mb-6">Explore</p>
              <ul className="space-y-3">
                {['Cosmetic Dentistry', 'Dental Implants', 'Invisalign', 'Veneers', 'About Us', 'Smile Gallery'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-stone-300 hover:text-luxury-accent transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-luxury-ink border border-white/10 rounded-full flex items-center justify-center font-serif text-sm font-bold">L</div>
            <span className="font-serif text-xl tracking-tight">LUXE<span className="text-luxury-accent italic">DENTAL</span></span>
          </div>

          <p className="text-[10px] text-stone-500 uppercase tracking-widest">
            © {currentYear} LuxeDental Group. All Rights Reserved. <span className="mx-4 text-white/5">|</span> Privacy Policy
          </p>

          <div className="flex gap-6">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-luxury-accent hover:border-luxury-accent transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
