import { motion } from 'motion/react';
import { Coffee, Music, Tv2, Wind, Armchair } from 'lucide-react';

export default function PatientExperience() {
  const perks = [
    { icon: <Armchair size={24} />, name: 'Massage Chairs', desc: 'Ergonomic treatment chairs with integrated massage.' },
    { icon: <Music size={24} />, name: 'Noise-Cancelling', desc: 'Bose headphones to escape into your world.' },
    { icon: <Tv2 size={24} />, name: 'Entertainment', desc: 'Netflix & chill while we perfect your smile.' },
    { icon: <Wind size={24} />, name: 'Aromatherapy', desc: 'Calming scents to soothe your senses from the moment you enter.' },
    { icon: <Coffee size={24} />, name: 'Luxury Lounge', desc: 'Premium refreshment bar with curated organic selections.' },
  ];

  return (
    <section id="experience" className="py-24 bg-luxury-ink text-luxury-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block">
              Redefining Comfort
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
              Dentistry, <br />
              <span className="italic text-luxury-accent">Uniquely Elevated.</span>
            </h2>
            <p className="text-stone-400 text-lg mb-10 leading-relaxed max-w-xl">
              We've replaced clinical coldness with boutique warmth. Every detail of our studio 
              is designed to provide a sensory experience that removes anxiety and replaces it with calm.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {perks.map((perk) => (
                <div key={perk.name} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-luxury-white/5 flex items-center justify-center text-luxury-accent shrink-0 border border-luxury-white/10">
                    {perk.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">{perk.name}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-[40px] overflow-hidden bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Dental Lounge"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-ink/60 to-transparent" />
            </div>
            
            {/* Absolute badge */}
            <div className="absolute -bottom-6 -left-6 glass text-luxury-ink p-8 rounded-3xl max-w-[240px]">
              <p className="font-serif text-4xl text-luxury-accent mb-2">5★</p>
              <p className="text-sm font-bold uppercase tracking-widest leading-snug">
                Hospitality-Grade Patient Experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
