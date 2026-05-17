import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PatientExperience from './components/PatientExperience';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import Insurance from './components/Insurance';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative">
        <Navbar />
        
        <main>
          <Hero />
          
          {/* Subtle separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
          
          <ServicesSection />
          
          <PatientExperience />
          
          <Technology />
          
          <Testimonials />
          
          <Insurance />
          
          {/* Final Emotional CTA Section */}
          <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="bg-stone-50 rounded-[64px] py-24 px-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-luxury-gold)_0%,_transparent_70%)] blur-3xl opacity-20" />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative z-10 max-w-3xl mx-auto"
                >
                  <span className="text-luxury-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-8 block">
                    Your Journey Starts Here
                  </span>
                  <h2 className="text-5xl md:text-8xl font-serif text-luxury-ink mb-10 leading-[1.1]">
                    Your Best Smile <br />
                    <span className="italic">Starts Today.</span>
                  </h2>
                  <p className="text-luxury-gray text-xl mb-12 leading-relaxed">
                    Schedule a visit to our boutique studio and experience the luxury of 
                    modern oral design. New patients receive a complimentary consultation.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn relative w-full sm:w-auto flex items-center justify-center gap-2 bg-luxury-ink text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs shadow-2xl shadow-luxury-ink/20 overflow-hidden transition-colors duration-300"
                    >
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 bg-luxury-accent rounded-t-full transition-all duration-1000 ease-out group-hover/btn:w-[150%] group-hover/btn:h-[300%]" />
                      <span className="relative z-10 transition-colors duration-300">Book Appointment</span>
                      <div className="relative z-10 w-4 h-4 overflow-hidden transition-colors duration-300 flex-shrink-0">
                        <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover/btn:translate-x-full" />
                        <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out -translate-x-full group-hover/btn:translate-x-0" />
                      </div>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn relative w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-stone-200 text-luxury-ink px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-colors duration-300"
                    >
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 bg-stone-50 rounded-t-full transition-all duration-1000 ease-out group-hover/btn:w-[150%] group-hover/btn:h-[300%]" />
                      <span className="relative z-10 transition-colors duration-300">Speak with an Expert</span>
                      <div className="relative z-10 w-4 h-4 overflow-hidden transition-colors duration-300 flex-shrink-0">
                        <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover/btn:translate-x-full" />
                        <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out -translate-x-full group-hover/btn:translate-x-0" />
                      </div>
                    </motion.button>
                  </div>
                  
                  <p className="mt-12 text-[10px] uppercase tracking-widest font-bold opacity-40">
                    Trusted by 10,000+ patients in the city
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        
        {/* Floating Mobile Sticky CTA */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-48px)] max-w-sm md:hidden">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn relative w-full bg-luxury-ink text-white py-5 rounded-full font-bold uppercase tracking-widest text-xs shadow-2xl flex items-center justify-center gap-3 overflow-hidden transition-colors duration-300"
          >
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 bg-luxury-accent rounded-t-full transition-all duration-1000 ease-out group-hover/btn:w-[150%] group-hover/btn:h-[300%]" />
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Book Now
            </span>
            <div className="relative z-10 w-4 h-4 overflow-hidden transition-colors duration-300 flex-shrink-0">
              <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover/btn:translate-x-full" />
              <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out -translate-x-full group-hover/btn:translate-x-0" />
            </div>
          </motion.button>
        </div>
      </div>
    </SmoothScroll>
  );
}
