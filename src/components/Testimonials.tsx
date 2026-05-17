import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-luxury-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block">
            Patient Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-luxury-ink">
            Kind Words from <br />
            <span className="italic">Our Community.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-luxury-white p-10 rounded-[40px] shadow-sm border border-stone-100 flex flex-col h-full relative"
            >
              <Quote className="absolute top-8 right-10 text-luxury-accent/10" size={48} />
              
              <div className="flex text-luxury-accent mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-luxury-ink text-lg font-serif italic mb-10 grow leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-luxury-accent/20">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-luxury-ink">{testimonial.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-accent">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
