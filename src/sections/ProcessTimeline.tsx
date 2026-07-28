// src/sections/ProcessTimeline.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ClipboardList, Ruler, HardHat, ShieldCheck, KeyRound } from 'lucide-react';
import { fadeUp } from '../lib/motion';

const steps = [
  { icon: ClipboardList, title: 'Consultation', description: 'We assess scope, site, and budget before a single plan is drawn.' },
  { icon: Ruler, title: 'Design & Planning', description: 'Engineering, permitting, and scheduling locked in before ground breaks.' },
  { icon: HardHat, title: 'Construction', description: 'Managed execution with consistent site oversight and reporting.' },
  { icon: ShieldCheck, title: 'Quality Review', description: 'Every phase inspected against spec before moving to the next.' },
  { icon: KeyRound, title: 'Handover', description: 'Final walkthrough, documentation, and a clean, on-schedule handoff.' },
];

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.7', 'end 0.4'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="bg-surface px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.span
          {...fadeUp}
          className="block text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium text-center"
        >
          How We Work
        </motion.span>
        <motion.h2
          {...fadeUp}
          className="mt-4 font-heading font-bold text-3xl md:text-5xl text-heading text-center"
        >
          From first call to final handover.
        </motion.h2>

        <div ref={ref} className="relative mt-20 pl-12 md:pl-16">
          <div className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-5 top-2 w-px bg-accent origin-top"
          />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' as const }}
                  className="relative"
                >
                  <div className="absolute -left-12 md:-left-16 top-0 h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-body">
                    Step 0{i + 1}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-semibold text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-body leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}