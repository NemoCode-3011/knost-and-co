// src/pages/About.tsx
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutHeroImg from '../assets/hero4.jpg';
import aboutDetailImg from '../assets/wc34.jpg';
import { fadeUp, staggerContainer } from '../lib/motion';
import { CTABanner } from '../sections/CTA';

const values = [
  {
    number: '01',
    title: 'Precision',
    description: 'Every detail engineered and executed to spec, without shortcuts.',
  },
  {
    number: '02',
    title: 'Accountability',
    description: 'We manage what we promise — timelines, budgets, and outcomes.',
  },
  {
    number: '03',
    title: 'Partnership',
    description: 'Clear communication with clients from first blueprint to handover.',
  },
];

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '120+', label: 'Projects Completed' },
  { value: '80+', label: 'Skilled Team Members' },
  { value: 'Licensed', label: '& Fully Insured' },
];

export function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Full-bleed image hero, page-specific */}
      <section className="relative min-h-[80vh] md:min-h-[85vh] w-full overflow-hidden">
        <img
          src={aboutHeroImg}
          alt="Knost & Co. building"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/50" />

        {/* Meta row */}
       <div className="relative z-10 min-h-[80vh] md:min-h-[85vh] flex flex-col justify-end px-4 pb-14 md:pb-16 lg:px-12">
          <div className="text-sm text-white/70 leading-tight">
            <div>Work that holds up.</div>
            <div>Lagos, Nigeria</div>
          </div>
          <a href="tel:+234XXXXXXXXXX" className="hidden sm:block text-sm text-white/70 leading-tight text-right">
            <div>Call us</div>
            <div className="text-white">+234 XXX XXX XXXX</div>
          </a>
        </div>

        {/* Headline + CTA row */}
        <div className="relative z-10 h-full flex flex-col justify-end px-4 pb-10 md:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <motion.h1
              {...fadeUp}
              className="font-heading font-bold tracking-tight text-white leading-[0.9] text-5xl sm:text-6xl md:text-7xl">
              About Knost.
            </motion.h1>

            <motion.div {...fadeUp} className="flex items-center gap-4">
              <p className="hidden md:block max-w-55 text-sm text-white/70 leading-relaxed">
                A construction firm dedicated to delivering precision-built projects with a human standard.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-heading text-sm font-medium tracking-wide hover:bg-white/90 transition-colors shrink-0"
              >
                Start a Project
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story, two-column with rounded image continuing from hero */}
      <section className="bg-surface px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.h2
              {...fadeUp}
              className="font-heading font-bold text-3xl md:text-5xl text-heading leading-[1.1]"
            >
              We build better.
            </motion.h2>
            <motion.p {...fadeUp} className="mt-6 text-base text-body leading-relaxed max-w-lg">
              Knost & Co. was founded on a simple premise: construction firms should be judged
              by the projects they deliver, not the promises they make. Over more than a decade,
              that discipline has carried us from single commercial builds to large-scale
              industrial and infrastructure work across Nigeria.
            </motion.p>

            <div className="mt-12 border-t border-border pt-8">
              <motion.h3 {...fadeUp} className="font-heading text-xl font-semibold text-heading">
                Discipline & Delivery
              </motion.h3>
              <motion.p {...fadeUp} className="mt-3 text-sm text-body leading-relaxed max-w-md">
                We don't take on projects we can't manage properly. Every job — regardless of
                scale — gets the same standard of engineering rigor and transparent
                communication that's built our reputation.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="rounded-3xl overflow-hidden aspect-4/5 w-full shadow-xl shadow-heading/10"
          >
            <img
              src={aboutDetailImg}
              alt="Knost & Co. site detail"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values — ghost numbers, kept from before */}
      <section className="bg-background px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.h2 {...fadeUp} className="font-heading font-bold text-2xl md:text-4xl text-heading max-w-xl">
            What guides how we build.
          </motion.h2>

          <motion.div
            {...staggerContainer}
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
          >
            {values.map((value) => (
              <motion.div key={value.title} {...fadeUp} className="relative pt-4">
                <span className="absolute -top-6 left-0 font-heading font-bold text-7xl md:text-8xl text-heading/6 leading-none select-none pointer-events-none">
                  {value.number}
                </span>
                <div className="relative border-t border-border pt-15">
                  <h3 className="font-heading text-lg text-heading font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-body leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-6xl bg-heading rounded-2xl shadow-xl shadow-heading/20 px-6 py-8 md:px-12 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 md:px-4">
              <div className="font-heading font-bold text-3xl md:text-5xl text-white whitespace-nowrap">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] md:text-xs uppercase tracking-wider text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <CTABanner />
    </div>
  );
}