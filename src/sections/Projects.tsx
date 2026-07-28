
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/motion';

import project1 from '../assets/h3.jpg';
import project2 from '../assets/ware.jpg';
import project3 from '../assets/bridge.jpg';

const projects = [
  {
    title: 'Lekki Commercial Complex',
    category: 'Commercial',
    image: project1,
    to: '/projects/lekki-commercial-complex',
  },
  {
    title: 'Apapa Industrial Warehouse',
    category: 'Industrial',
    image: project2,
    to: '/projects/apapa-industrial-warehouse',
  },
  {
    title: 'Third Mainland Access Upgrade',
    category: 'Infrastructure',
    image: project3,
    to: '/projects/third-mainland-access-upgrade',
  },
];

export function FeaturedProjects() {
  return (
    <section className="bg-surface px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.span
              {...fadeUp}
              className="block text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium"
            >
              Our Work
            </motion.span>
            <motion.h2
              {...fadeUp}
              className="mt-4 font-heading font-semibold text-3xl md:text-5xl text-heading max-w-2xl"
            >
              Projects that speak for themselves.
            </motion.h2>
          </div>

          <motion.div {...fadeUp}>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-heading border-b border-heading/30 pb-1 hover:border-heading transition-colors"
            >
              View All Projects
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...staggerContainer}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} {...fadeUp}>
              <Link to={project.to} className="group block">
                <div className="aspect-4/5 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-accent font-medium">
                      {project.category}
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
        </motion.div>

        <div className="mt-10 md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-heading border-b border-heading/30 pb-1"
          >
            View All Projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}