
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: '-80px' },
  transition: { staggerChildren: 0.1 },
};