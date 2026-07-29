
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import image1 from "../../src/assets/h10.jpg";
import image2 from "../../src/assets/h8.jpg";
import image3 from "../../src/assets/civil.jpg";
import image4 from "../../src/assets/fitout people.jpg";

const services = [
  {
    title: "Commercial Construction",
    description:
      "Offices, retail, and mixed-use developments built to spec and on schedule.",
    to: "/services#commercial",
    image: image1
  },
  {
    title: "Industrial Facilities",
    description:
      "Warehouses, plants, and manufacturing facilities engineered for scale.",
    to: "/services#industrial",
    image: image2
  },
  {
    title: "Infrastructure & Civil Works",
    description:
      "Roads, bridges, and large-scale infrastructure for public and private clients.",
    to: "/services#infrastructure",
    image: image3
  },
  {
    title: "Renovation & Fit-Out",
    description:
      "Reconfiguring and upgrading existing commercial spaces with minimal disruption.",
    to: "/services#renovation",
    image: image4
  },
];

export function Services() {
  return (
    <section className="bg-background px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <span className="text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium">
          What We Do
        </span>
        <h2 className="mt-4 font-heading font-semibold text-3xl md:text-5xl text-heading max-w-2xl">
          Built for the projects that matter most.
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.to}
              className="group flex flex-col border border-border hover:border-accent/40 transition-colors"
            >
              <div className="aspect-4/3 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-lg text-heading font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-body leading-relaxed flex-1">
                  {service.description}
                </p>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent">
                  Learn More
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
