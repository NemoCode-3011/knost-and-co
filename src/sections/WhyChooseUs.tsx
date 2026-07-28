
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Users } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/motion';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Proven Track Record',
    description: 'Over a decade of delivering commercial and industrial projects across Nigeria without compromising on quality.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Every project runs on a schedule we set and hold ourselves to — no surprises, no excuses at handover.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Management',
    description: 'A single point of contact managing your project end-to-end, so nothing falls through the cracks.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.span
          {...fadeUp}
          className="block text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium"
        >
          Why Choose Us
        </motion.span>

        <motion.h2
          {...fadeUp}
          className="mt-4 font-heading font-semibold text-3xl md:text-5xl text-heading max-w-2xl"
        >
          What sets Knost & Co. apart.
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div key={reason.title} {...fadeUp} className="border-t border-border pt-6">
                <Icon size={28} className="text-accent" strokeWidth={1.5} />
                <h3 className="mt-4 font-heading text-lg text-heading font-semibold">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-body leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}