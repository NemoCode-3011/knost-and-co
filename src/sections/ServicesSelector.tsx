
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { fadeUp } from "../lib/motion";
import { services } from "../data/services";

export function ServicesSelector() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);

  return (
    <section className="bg-background px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.span
          {...fadeUp}
          className="block text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium"
        >
          What We Do
        </motion.span>
        <motion.h2
          {...fadeUp}
          className="mt-4 font-heading font-semibold text-3xl md:text-5xl text-heading max-w-2xl"
        >
          Every stage of the build, covered.
        </motion.h2>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-[280px_1fr_360px] gap-8 mt-14">
          <div className="flex flex-col gap-2">
            {services.map((service, i) => (
              <button
                key={service.title}
                onClick={() => setActive(i)}
                className={`text-left px-5 py-4 rounded-xl transition-all ${
                  active === i
                    ? "bg-linear-to-br from-heading to-heading/90 text-white shadow-lg shadow-heading/10"
                    : "bg-surface text-heading hover:bg-heading/5 rounded-xl"
                }`}
              >
                <span className="text-xs uppercase tracking-wider opacity-60">
                  Service 0{i + 1}
                </span>
                <div className="mt-1 font-heading font-semibold text-base">
                  {service.title}
                </div>
                <div
                  className={`mt-0.5 text-xs ${active === i ? "text-white/60" : "text-body"}`}
                >
                  {service.subtitle}
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="aspect-4/5 w-full overflow-hidden rounded-2xl"
            >
              <img
                src={services[active].image}
                alt={services[active].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-accent/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-heading text-2xl font-semibold text-heading">
                {services[active].title}
              </h3>
              <p className="mt-4 text-sm text-body leading-relaxed">
                {services[active].description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {services[active].points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-heading"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 bg-accent shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors">
                Get In Touch
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile accordion */}
        <div className="flex flex-col gap-3 lg:hidden mt-10">
          {services.map((service, i) => {
            const isOpen = mobileOpen === i;
            return (
              <div key={service.title} className="border border-border">
                <button
                  onClick={() => setMobileOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <div>
                    <span className="text-xs uppercase tracking-wider text-body">
                      Service 0{i + 1}
                    </span>
                    <div className="mt-1 font-heading font-semibold text-base text-heading">
                      {service.title}
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-heading transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6">
                        <div className="aspect-4/3 w-full overflow-hidden mb-4">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-body leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="mt-4 flex flex-col gap-2.5">
                          {service.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-sm text-heading"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 bg-accent shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
