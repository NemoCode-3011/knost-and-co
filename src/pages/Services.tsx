
import { motion } from 'motion/react';
import { fadeUp } from '../lib/motion';
import { ServicesScrollSection } from '../sections/ServicesScrollSection';
import { ProcessTimeline } from '../sections/ProcessTimeline';
import { CTABanner } from '../sections/CTA';

export function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="bg-background px-4 pt-8 pb-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.span
            {...fadeUp}
            className="block text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium"
          >
            Our Services
          </motion.span>
          <motion.h1
            {...fadeUp}
            className="mt-4 font-heading font-bold tracking-tight text-heading leading-[0.95] text-5xl sm:text-6xl md:text-7xl"
          >
            Built for scale.
            <br />
            Managed with care.
          </motion.h1>
        </div>
      </section>

      <ServicesScrollSection />
      <ProcessTimeline />
      <CTABanner />
    </div>
  );
}