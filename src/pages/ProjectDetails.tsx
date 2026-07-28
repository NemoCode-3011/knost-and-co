
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { fadeUp } from "../lib/motion";
import { CTABanner } from "../sections/CTA";

export function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="pt-20 md:pt-24">
      {/* Full-bleed hero */}
      <section className="relative h-[60vh] min-h-105 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/40" />

        <div className="relative z-10 flex flex-col justify-between h-full px-4 pt-16 pb-8 md:px-8 md:pt-20 lg:px-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors w-fit "
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/70">
              {project.category} · {project.location}
            </span>
            <motion.h1
              {...fadeUp}
              className="mt-3 font-heading font-bold tracking-tight text-white leading-[0.95] text-4xl sm:text-5xl md:text-6xl max-w-2xl"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          <div>
            <motion.h2
              {...fadeUp}
              className="font-heading text-2xl font-semibold text-heading"
            >
              Project Overview
            </motion.h2>
            <motion.p
              {...fadeUp}
              className="mt-4 text-base text-body leading-relaxed max-w-2xl"
            >
              {project.description}
            </motion.p>

            <motion.h3
              {...fadeUp}
              className="mt-10 font-heading text-lg font-semibold text-heading"
            >
              Scope of Work
            </motion.h3>
            <motion.ul {...fadeUp} className="mt-4 flex flex-col gap-2.5">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-heading"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            {...fadeUp}
            className="bg-surface rounded-2xl border border-border p-6 h-fit"
          >
            <span className="text-xs uppercase tracking-wider text-accent font-medium">
              Project Details
            </span>
            <div className="mt-4 flex flex-col gap-4">
              {[
                { label: "Client", value: project.client },
                { label: "Location", value: project.location },
                { label: "Category", value: project.category },
                { label: "Year", value: project.year },
              ].map((detail) => (
                <div
                  key={detail.label}
                  className="border-t border-border pt-3 first:border-t-0 first:pt-0"
                >
                  <div className="text-[10px] uppercase tracking-wider text-body">
                    {detail.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-heading">
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 w-full justify-center rounded-full bg-accent px-6 py-3 text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              Start a Similar Project
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
