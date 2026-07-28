// src/components/Logo.tsx
import logoDark from '../assets/knostlogo.png';
import logoLight from '../assets/knostlogo-2.png';

type LogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const src = variant === 'dark' ? logoDark : logoLight;

  return (
    <div className={`relative h-12 md:h-16 w-44 md:w-56 shrink-0 overflow-hidden ${className}`}>
      <img
        src={src}
        alt="Knost & Co. Construction"
        className="absolute top-1/2 left-1/2 h-28 md:h-36 w-auto -translate-x-1/2 -translate-y-1/2 scale-[0.7] md:scale-[0.68]"
      />
    </div>
  );
}