
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/motion';

const testimonials = [
  {
    quote: 'Knost & Co. managed our warehouse expansion end to end. Clear updates every step, and they hit the handover date without a single slip.',
    name: 'Adaeze Okonkwo',
    role: 'Operations Director, Lagos',
  },
  {
    quote: 'We brought them in for a tight-deadline commercial fit-out. The site stayed organized and safe the entire time, and the quality held up under inspection.',
    name: 'Tunde Bakare',
    role: 'Facilities Manager',
  },
  {
    quote: 'Professional from the first site visit to final sign-off. They explained every phase clearly and never left us guessing where the project stood.',
    name: 'Grace Eze',
    role: 'Property Developer',
  },
];

export function Testimonials() {
  return (
    <section className="bg-background px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.span
          {...fadeUp}
          className="block text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium"
        >
          What Clients Say
        </motion.span>
        <motion.h2
          {...fadeUp}
          className="mt-4 font-heading font-semibold text-3xl md:text-5xl text-heading max-w-2xl"
        >
          Trusted by the people we've built for.
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} {...fadeUp} className="border-t border-border pt-6">
              <Quote size={24} className="text-accent" strokeWidth={1.5} />
              <p className="mt-4 text-base text-heading/90 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-6">
                <div className="text-sm font-semibold text-heading">{t.name}</div>
                <div className="text-xs text-body mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}