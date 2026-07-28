
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../lib/motion';

export function CTABanner() {
  return (
    <section className="bg-heading px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl flex flex-col items-start lg:flex-row lg:items-end lg:justify-between gap-8">
        <motion.h2
          {...fadeUp}
          className="font-heading font-semibold text-3xl md:text-5xl text-white max-w-xl leading-[1.1]"
        >
          Have a project in mind? Let's build it right.
        </motion.h2>

        <motion.div {...fadeUp}>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}