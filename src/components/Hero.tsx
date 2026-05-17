import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const avatarIds = [
  '1544005313-94ff6a96bbe3',
  '1438761681033-6461ffad8d80',
  '1494790108377-be9c29b29330',
  '1507003211169-0a1dd7228f2d'
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Cinematic Image/Overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Dental Interior"
          className="w-full h-full object-cover opacity-40 translate-z-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-bg via-transparent to-luxury-bg" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-luxury-accent/10 text-luxury-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-8 border border-luxury-accent/20">
              Welcome to the future of dentistry
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-serif font-medium leading-[1.1] text-luxury-ink mb-8"
          >
            Luxury Dental Care <br />
            <span className="text-luxury-accent italic">Designed Around You.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-luxury-gray max-w-2xl mb-12 leading-relaxed"
          >
            Experience a new standard of oral design. Modern dentistry with advanced technology, 
            painless treatments, and a spa-inspired patient journey that redefines the dental visit.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn relative flex items-center justify-center gap-2 bg-luxury-ink text-luxury-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-colors duration-300"
            >
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 bg-luxury-accent rounded-t-full transition-all duration-1000 ease-out group-hover/btn:w-[150%] group-hover/btn:h-[300%]" />
              <span className="relative z-10 transition-colors duration-300">Book Your Visit</span>
              <div className="relative z-10 w-4 h-4 overflow-hidden transition-colors duration-300 flex-shrink-0">
                <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover/btn:translate-x-full" />
                <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out -translate-x-full group-hover/btn:translate-x-0" />
              </div>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn relative flex items-center gap-2 text-sm border-b border-luxury-ink py-1 font-bold uppercase tracking-widest hover:text-luxury-accent hover:border-luxury-accent transition-all"
            >
              <span className="relative z-10 transition-colors duration-300">Free Smile Consultation</span>
              <div className="relative z-10 w-3.5 h-3.5 overflow-hidden transition-colors duration-300 flex-shrink-0">
                <ArrowRight size={14} className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover/btn:translate-x-full" />
                <ArrowRight size={14} className="absolute inset-0 transition-transform duration-1000 ease-in-out -translate-x-full group-hover/btn:translate-x-0" />
              </div>
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-wrap items-center gap-8 border-t border-luxury-accent/10 pt-10"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatarIds.map((id) => (
                  <div key={id} className="w-10 h-10 rounded-full border-2 border-luxury-bg bg-stone-200 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=100`} 
                      alt="Reviewer" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-luxury-accent mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Join 10,000+ Happy Patients
                </p>
              </div>
            </div>

            <div className="hidden md:flex gap-10">
              <div className="text-center">
                <p className="text-2xl font-serif text-luxury-accent">4.9★</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Rating</p>
              </div>
              <div className="text-center border-l border-luxury-accent/20 pl-10">
                <p className="text-2xl font-serif text-luxury-accent">98%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Patient Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating UI Elements for high-end look */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ 
          opacity: 1,
          x: 0,
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          x: { delay: 1, duration: 1 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden lg:block absolute right-[10%] top-[25%] glass p-6 rounded-2xl shadow-2xl z-20 max-w-[240px]"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <Star size={16} fill="currentColor" />
          </div>
          <div>
            <p className="text-xs font-bold">Same-Day Results</p>
            <p className="text-[10px] opacity-60 italic">Advanced Digital CAD/CAM</p>
          </div>
        </div>
        <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
          <div className="h-full w-[85%] bg-luxury-accent" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-luxury-accent to-transparent" />
      </motion.div>
    </section>
  );
}

