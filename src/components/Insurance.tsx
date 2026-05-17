import { motion } from 'motion/react';
import { ShieldCheck, CreditCard, HeartHandshake, BadgeCheck, ArrowRight } from 'lucide-react';

export default function Insurance() {
  const items = [
    { icon: <ShieldCheck />, title: 'Insurance-Friendly', desc: 'We accept most major PPO insurance plans and handle all direct billing.' },
    { icon: <CreditCard />, title: 'Flexible Financing', desc: '0% Interest payment plans and affordable monthly options.' },
    { icon: <BadgeCheck />, title: 'Luxe Membership', desc: 'Exclusive benefits for patients without traditional insurance.' },
    { icon: <HeartHandshake />, title: 'Transparent Pricing', desc: 'Clear, upfront quotes for all treatments. No hidden fees.' },
  ];

  return (
    <section className="py-24 bg-luxury-bg">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[48px] p-12 md:p-20 relative overflow-hidden border-luxury-accent/10 shadow-2xl shadow-luxury-accent/5">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-luxury-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block">
                Financing & Care
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-ink mb-8 leading-tight">
                Premium Care, <br />
                <span className="italic">Made Accessible.</span>
              </h2>
              <p className="text-luxury-gray text-lg mb-10 leading-relaxed">
                We believe world-class dentistry should be within reach. Our patient advocacy team 
                works tirelessly to maximize your benefits and create personalized financing plans.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn relative flex items-center justify-center gap-2 bg-luxury-ink text-luxury-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-colors duration-300 w-fit"
              >
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 bg-luxury-accent rounded-t-full transition-all duration-1000 ease-out group-hover/btn:w-[150%] group-hover/btn:h-[300%]" />
                <span className="relative z-10 transition-colors duration-300">Check Your Coverage</span>
                <div className="relative z-10 w-4 h-4 overflow-hidden transition-colors duration-300 flex-shrink-0">
                  <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover/btn:translate-x-full" />
                  <ArrowRight size={16} className="absolute inset-0 transition-transform duration-1000 ease-in-out -translate-x-full group-hover/btn:translate-x-0" />
                </div>
              </motion.button>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-luxury-accent/10 flex items-center justify-center text-luxury-accent mb-6">
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-xl text-luxury-ink mb-3">{item.title}</h4>
                  <p className="text-luxury-gray text-xs leading-relaxed opacity-80">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
