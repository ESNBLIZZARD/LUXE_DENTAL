import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-luxury-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-luxury-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block">
              Curated Treatments
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-luxury-ink leading-tight">
              A New Standard <br />
              <span className="italic">of Oral Design</span>
            </h2>
          </div>
          <p className="text-luxury-gray max-w-sm text-sm leading-relaxed">
            We blend artistry with clinical precision to provide life-changing results 
            through advanced cosmetic and restorative dentistry.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-stone-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-luxury-ink">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <div className="px-2">
                <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-accent mb-2">
                  {service.category}
                </p>
                <h3 className="text-2xl font-serif text-luxury-ink mb-3 group-hover:text-luxury-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-luxury-gray text-xs leading-relaxed opacity-80 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
