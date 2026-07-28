// src/sections/About.tsx
import { Link } from 'react-router-dom';
import aboutImg from '../assets/about.jpg';

const credentials = [
  'Licensed & Fully Insured',
  'Safety-First Site Standards',
  'Dedicated Project Management',
];

export function About() {
  return (
    <section className="bg-surface px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="aspect-4/5 w-full overflow-hidden">
          <img
            src={aboutImg}
            alt="Knost & Co. team on site"
            className="h-full w-full object-contain object-fit"
          />
        </div>

        <div>
          <span className="text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium">
            Who We Are
          </span>
          <h2 className="mt-4 font-heading font-semibold text-3xl md:text-5xl text-heading leading-[1.1]">
            Built on precision. Backed by experience.
          </h2>

          <p className="mt-6 text-base text-body leading-relaxed">
            Knost & Co. delivers commercial, industrial, and infrastructure projects with the
            discipline of a firm that's built its reputation on getting the details right, not
            just the big picture.
          </p>
          <p className="mt-4 text-base text-body leading-relaxed">
            From first blueprint to final handover, our teams manage every stage with the same
            standard: clear communication, rigorous safety practices, and delivery you can set
            your schedule around.
          </p>

          <ul className="mt-8 space-y-3">
            {credentials.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-heading">
                <span className="h-1.5 w-1.5 bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="mt-10 inline-block px-6 py-3 border border-heading/20 text-heading text-sm font-medium tracking-wide hover:bg-heading hover:text-white transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}