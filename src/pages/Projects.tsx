
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects, categories } from '../data/projects';
import { fadeUp } from '../lib/motion';
import { CTABanner } from '../sections/CTA';

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 md:pt-32">
      {/* Header */}
      <section className="bg-background px-4 pt-8 pb-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.span
            {...fadeUp}
            className="block text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium"
          >
            Our Work
          </motion.span>
          <motion.h1
            {...fadeUp}
            className="mt-4 font-heading font-bold tracking-tight text-heading leading-[0.95] text-5xl sm:text-6xl md:text-7xl"
          >
            Projects built to last.
          </motion.h1>
        </div>
      </section>

      {/* Filter pills */}
      <section className="bg-background px-4 pt-10 pb-4 md:px-8 lg:px-12">
        <motion.div {...fadeUp} className="mx-auto max-w-7xl flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors ${
                activeCategory === cat
                  ? 'bg-heading text-white'
                  : 'bg-surface text-heading border border-border hover:bg-heading/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Grid */}
      <section className="bg-background px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeOut' as const }}
                  className={project.size === 'large' ? 'sm:col-span-2' : ''}
                >
                  <Link to={`/projects/${project.id}`} className="group block">
                    <div
                      className={`w-full overflow-hidden rounded-2xl ${
                        project.size === 'large' ? 'aspect-16/10' : 'aspect-4/5'
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-accent font-medium">
                          {project.category} · {project.location}
                        </span>
                        <h3 className="mt-1 font-heading text-lg text-heading font-semibold">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={20}
                        className="mt-1 text-heading shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}