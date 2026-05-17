import { motion } from 'motion/react';
import { TECH_ITEMS } from '../constants';
import { Cpu, ScanEye, Zap, Smile } from 'lucide-react';

const IconMap: Record<string, typeof Cpu> = {
  Cpu,
  ScanEye,
  Zap,
  Smile
};

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-luxury-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-luxury-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block">
            Future-Proof Dentistry
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-luxury-ink">
            Advanced Tech for <br />
            <span className="italic">Superior Outcomes.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {TECH_ITEMS.map((item, i) => {
            const Icon = IconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-full bg-white border border-stone-100 flex items-center justify-center text-luxury-ink group-hover:bg-luxury-accent group-hover:text-luxury-white transition-all duration-300 shadow-sm">
                    {Icon && <Icon size={28} strokeWidth={1.5} />}
                  </div>
                </div>
                <h3 className="font-serif text-xl text-luxury-ink mb-4">{item.title}</h3>
                <p className="text-luxury-gray text-sm leading-relaxed opacity-80">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Cinematic tech image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 rounded-[40px] overflow-hidden aspect-[21/9] relative grayscale hover:grayscale-0 transition-all duration-1000 bg-stone-200"
        >
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000"
            alt="Futuristic Dentistry"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-luxury-accent/10" />
        </motion.div>
      </div>
    </section>
  );
}
