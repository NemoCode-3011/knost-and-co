import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { UtilityBar } from './UtilityBar';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function NavBar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;
  const linkColor = transparent ? 'text-white' : 'text-heading';
  const navBg = transparent ? 'bg-transparent' : 'bg-background border-b border-border';

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${navBg}`}>
        <UtilityBar visible={!scrolled} />
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20 md:h-24'}`}>
            <Link to="/">
              <Logo variant={transparent ? 'light' : 'dark'} />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium tracking-wide transition-colors ${linkColor} opacity-80 hover:opacity-100`}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className={`hidden md:inline-flex items-center rounded-full border px-6 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                  transparent
                    ? 'border-white/50 text-white hover:bg-white/10'
                    : 'border-heading/20 text-heading hover:bg-heading/5'
                }`}
              >
                Start a Project
              </Link>

              <button
                onClick={() => setMenuOpen(true)}
                className={`md:hidden ${linkColor}`}
                aria-label="Open menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-heading flex flex-col">
          <div className="flex items-center justify-between px-4 h-20">
            <Logo variant="light" />
            <button onClick={() => setMenuOpen(false)} className="text-white" aria-label="Close menu">
              <X size={26} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-3xl md:text-5xl text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full px-8 py-3 bg-accent text-white text-sm font-medium tracking-wide"
            >
              Start a Project
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}