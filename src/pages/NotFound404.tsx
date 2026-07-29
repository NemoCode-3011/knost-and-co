
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-24">
      <span className="font-heading font-bold text-heading/10 text-[30vw] leading-none select-none">
        404
      </span>
      <h1 className="-mt-8 font-heading font-bold text-3xl md:text-5xl text-heading">
        Page not found.
      </h1>
      <p className="mt-4 text-base text-body max-w-sm">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </div>
  );
}