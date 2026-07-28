import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck,} from "lucide-react";
import heroImage from "../assets/hero5.jpg";
import heroDetailImage from "../assets/cw1.webp";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <motion.img
        src={heroImage}
        alt="Knost & Co. construction site"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" as const }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-37 pb-16 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
            className="block text-xs uppercase tracking-[0.25em] text-white/70"
          >
            Commercial · Industrial · Infrastructure
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: "easeOut" as const,
            }}
            className="mt-5 font-heading font-bold tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-white"
          >
            Engineering
            <br />
            Tomorrow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
            className="mt-6 max-w-md text-base md:text-lg text-white/80 leading-relaxed"
          >
            Delivering commercial, industrial, and infrastructure projects
            across Nigeria and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.65,
              ease: "easeOut" as const,
            }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects"
              className="rounded-full border border-white/40 px-7 py-4 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Numbered callout + inset detail image, bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" as const }}
          className="mt-16 md:mt-24 flex items-end justify-between gap-6"
        >
          <div className="flex items-start gap-4 max-w-sm">
            <span className="font-heading text-3xl md:text-4xl text-white/40">
              01
            </span>
            <div className="pt-1">
              <p className="text-sm text-white/70 leading-relaxed">
                Every project managed end-to-end — from first blueprint to final
                handover.
              </p>
              <div className="mt-4 flex divide-x divide-white/20">
                {[
                  { value: "15+", label: "Years" },
                  { value: "120+", label: "Projects" },
                ].map((stat) => (
                  <div key={stat.label} className="px-4 first:pl-0">
                    <div className="font-heading text-xl md:text-2xl text-white">
                      {stat.value}
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-white/50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block relative w-48 lg:w-64 aspect-4/3 rounded-xl overflow-hidden shadow-2xl shadow-black/40 border-2 border-white/10 shrink-0">
            <img
              src={heroDetailImage}
              alt="Knost & Co. project detail"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-heading/80 backdrop-blur-sm rounded-full px-3 py-1.5">
              <ShieldCheck size={12} className="text-accent" />
              <span className="text-[10px] text-white font-medium">
                Licensed
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
