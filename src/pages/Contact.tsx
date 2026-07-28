
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { fadeUp } from '../lib/motion';

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

export function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    reset();
  };

  return (
    <div className="pt-24 md:pt-32">
      <section className="bg-background px-4 pt-8 pb-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.span
            {...fadeUp}
            className="block text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            {...fadeUp}
            className="mt-4 font-heading font-bold tracking-tight text-heading leading-[0.95] text-5xl sm:text-6xl md:text-7xl"
          >
            Let's start building.
          </motion.h1>
        </div>
      </section>

      <section className="bg-background px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
          <motion.form
            {...fadeUp}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-heading">Full Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-heading focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-heading">Email</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email' },
                  })}
                  className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-heading focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@company.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-heading">Phone</label>
                <input
                  {...register('phone')}
                  className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-heading focus:outline-none focus:border-accent transition-colors"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-heading">Project Type</label>
                <select
                  {...register('projectType', { required: 'Select a project type' })}
                  className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-heading focus:outline-none focus:border-accent transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>Select one</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="renovation">Renovation & Fit-Out</option>
                </select>
                {errors.projectType && <p className="mt-1.5 text-xs text-red-600">{errors.projectType.message}</p>}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-heading">Project Details</label>
              <textarea
                {...register('message', { required: 'Tell us a bit about your project' })}
                rows={5}
                className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-heading focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell us about your project — scope, timeline, location..."
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-white text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors disabled:opacity-60 w-fit"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={16} />
            </button>
          </motion.form>

          <motion.div {...fadeUp} className="flex flex-col gap-6">
            <div className="bg-surface rounded-2xl border border-border p-6">
              <span className="text-xs uppercase tracking-wider text-accent font-medium">
                Contact Details
              </span>
              <div className="mt-4 flex flex-col gap-4">
                <a href="tel:+2348149798764" className="flex items-center gap-3 text-sm text-heading hover:text-accent transition-colors">
                  <Phone size={16} className="text-accent shrink-0" />
                  +234 814 979 8764
                </a>
                <a href="mailto:hello@knostandco.com" className="flex items-center gap-3 text-sm text-heading hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent shrink-0" />
                  hello@knostandco.com
                </a>
                <span className="flex items-center gap-3 text-sm text-heading">
                  <MapPin size={16} className="text-accent shrink-0" />
                  Lagos, Nigeria
                </span>
              </div>
            </div>

            <div className="bg-heading rounded-2xl p-6 text-white">
              <span className="text-xs uppercase tracking-wider text-white/50 font-medium">
                Office Hours
              </span>
              <div className="mt-3 text-sm text-white/80 leading-relaxed">
                Monday – Friday: 8:00 AM – 6:00 PM<br />
                Saturday: 9:00 AM – 2:00 PM<br />
                Sunday: Closed
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}