// src/components/Footer.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight} from 'lucide-react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Logo } from './Logo';
import { services } from '../data/services';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-heading overflow-hidden">
      <div className="px-4 py-16 md:px-8 md:py-20 lg:px-12 border-b border-white/10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-12">
          <div>
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              Delivering commercial, industrial, and infrastructure projects across Nigeria and beyond.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors">
                <FaLinkedin size={15} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors">
                <FaInstagram size={15} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors">
                <FaFacebook size={15} />
              </a>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
              Navigation
            </span>
            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-white/70 hover:text-white transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
              Services
            </span>
            <nav className="mt-5 flex flex-col gap-3">
              {services.slice(0, 4).map((service) => (
                <Link key={service.title} to="/services" className="text-sm text-white/70 hover:text-white transition-colors w-fit">
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
              Stay Updated
            </span>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Project updates and news, occasionally, never spam.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 min-w-0 rounded-full bg-white/5 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="shrink-0 h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accent/90 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+2348149798764" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <Phone size={14} />
                +234 814 979 8764
              </a>
              <a href="mailto:hello@knostandco.com" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <Mail size={14} />
                hello@knostandco.com
              </a>
              <span className="flex items-center gap-2.5 text-sm text-white/70">
                <MapPin size={14} />
                Lagos, Nigeria
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs text-white/40">
            © {new Date().getFullYear()} Knost & Co. All rights reserved.
          </span>
          <span className="text-xs text-white/40">
            Design & Development by Trilot Technologies
          </span>
        </div>
      </div>

      <div className="px-4 pt-6 pb-2 select-none pointer-events-none">
        <span className="block text-center font-heading font-bold text-white/[0.04] leading-none text-[14vw] whitespace-nowrap">
          KNOST & CO.
        </span>
      </div>
    </footer>
  );
}