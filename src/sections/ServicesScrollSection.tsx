
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '../data/services';
import { fadeUp } from '../lib/motion';

export function ServicesScrollSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-background px-4 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.span
          {...fadeUp}
          className="block text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium"
        >
          What We Do
        </motion.span>
        <motion.h2
          {...fadeUp}
          className="mt-4 font-heading font-bold text-3xl md:text-5xl text-heading max-w-2xl"
        >
          Every stage of the build, covered.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: scrolling list */}
          <div>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                onViewportEnter={() => setActive(i)}
                viewport={{ amount: 0, margin: '-45% 0px -45% 0px' }}
                className="min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center border-t border-border first:border-t-0 py-10 lg:py-0"
              >
                <span className="text-xs uppercase tracking-wider text-body">
                  Service 0{i + 1}
                </span>
                <h3
                  className={`mt-2 font-heading font-semibold transition-colors ${
                    active === i ? 'text-heading text-2xl md:text-3xl' : 'text-heading/40 text-xl md:text-2xl'
                  }`}
                >
                  {service.title}
                </h3>
                <p className={`mt-3 text-sm max-w-sm leading-relaxed transition-colors ${
                  active === i ? 'text-body' : 'text-body/40'
                }`}>
                  {service.description}
                </p>

                {/* Mobile-only inline image, no pin/crossfade on small screens */}
                <div className="lg:hidden mt-6 rounded-2xl overflow-hidden aspect-4/3">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                </div>
                <ul className="lg:hidden mt-4 flex flex-col gap-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-heading">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right: sticky pinned image + description, desktop only */}
          <div className="hidden lg:block relative">
            <div className="sticky top-28 h-[70vh] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={services[active].image}
                    alt={services[active].title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-heading/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <ul className="flex flex-col gap-2.5">
                      {services[active].points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-white">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}