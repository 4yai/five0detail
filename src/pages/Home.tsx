import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Instagram,
  Siren,
  PaintBucket,
  Droplets,
  Shield,
  CarFront,
  Sparkles,
  ScanSearch
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const IG_URL = 'https://www.instagram.com/five0detail/';

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.12, triggerOnce: true });
  const [trustRef, trustInView] = useInView({ threshold: 0.12, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.12, triggerOnce: true });
  const [whyRef, whyInView] = useInView({ threshold: 0.12, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.12, triggerOnce: true });

  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop';
    img.onload = () => setHeroLoaded(true);
  }, []);

  const trustBadges = [
    { icon: MapPin, title: 'Oklahoma Mobile Unit', description: 'We come to you across Lawton and surrounding areas' },
    { icon: ShieldCheck, title: 'Insured & Reliable', description: 'Professional service with protected operations' },
    { icon: CheckCircle2, title: 'Mission Ready Finish', description: 'Sharp results with satisfaction first' }
  ];

  const services = [
    { icon: Droplets, title: 'Interior + Exterior Detail', description: 'Full inside and outside cleaning in one complete service' },
    { icon: PaintBucket, title: 'Plastic Restoration', description: 'Restore faded trim and exterior plastics for a cleaner look' },
    { icon: Siren, title: 'Headlight Restoration', description: 'Remove haze and oxidation to improve clarity and sharpen your front-end look' }
  ];

  const whyCards = [
    {
      icon: Shield,
      title: 'Reset Your Interior',
      description:
        'A proper detail clears out dust, grime, crumbs, and buildup so your cabin feels fresh, cleaner, and easier to maintain.'
    },
    {
      icon: CarFront,
      title: 'Protect Vehicle Value',
      description:
        'A clean, well-kept vehicle holds value better. Regular detailing helps preserve the condition buyers and owners notice first.'
    },
    {
      icon: Sparkles,
      title: 'A Clean Car Is A Good Car',
      description:
        'A sharp vehicle looks better, feels better to drive, and reflects pride of ownership. Clean paint, trim, and glass make a major difference.'
    },
    {
      icon: ScanSearch,
      title: 'Clay Bar Removes Paint Contaminants',
      description:
        'Clay barring pulls bonded contamination off the paint surface, helping remove the rough stuff that dulls finish and slowly damages paint over time.'
    }
  ];

  const testimonials = [
    {
      name: 'Alyssa M.',
      rating: 5,
      text: 'They pulled up to my driveway and made my SUV look brand new. Zero hassle and super friendly.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'Devon R.',
      rating: 5,
      text: 'Interior deep clean was insane. Stains gone, plastics conditioned, everything looks crisp.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'María C.',
      rating: 5,
      text: 'Great communication and the ceramic makes water fly off the paint. Worth it.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    }
  ];

  const BoxShimmer = ({ className = '' }: { className?: string }) => (
    <div className={`animate-pulse bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 ${className}`} />
  );

  const TrustSkeleton = ({ delay = 0 }: { delay?: number }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="text-center rounded-2xl p-6"
      style={{ background: 'rgba(15,23,42,0.72)', border: '1px solid rgba(59,130,246,0.12)' }}
    >
      <BoxShimmer className="h-10 w-10 rounded mx-auto mb-3" />
      <BoxShimmer className="h-4 w-28 rounded mx-auto mb-2" />
      <BoxShimmer className="h-3 w-40 rounded mx-auto" />
    </motion.div>
  );

  const ServiceSkeleton = ({ delay = 0 }: { delay?: number }) => (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, delay }}
      className="rounded-2xl p-6"
      style={{ background: 'rgba(15,23,42,0.72)', border: '1px solid rgba(59,130,246,0.12)' }}
    >
      <BoxShimmer className="h-12 w-12 rounded mb-3" />
      <BoxShimmer className="h-4 w-32 rounded mb-2" />
      <BoxShimmer className="h-3 w-10/12 rounded mb-2" />
      <BoxShimmer className="h-3 w-8/12 rounded" />
      <BoxShimmer className="h-8 w-28 rounded mt-5" />
    </motion.div>
  );

  const WhySkeleton = ({ delay = 0 }: { delay?: number }) => (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, delay }}
      className="rounded-2xl p-6"
      style={{ background: 'rgba(15,23,42,0.72)', border: '1px solid rgba(59,130,246,0.12)' }}
    >
      <BoxShimmer className="h-12 w-12 rounded mb-3" />
      <BoxShimmer className="h-4 w-40 rounded mb-3" />
      <BoxShimmer className="h-3 w-full rounded mb-2" />
      <BoxShimmer className="h-3 w-11/12 rounded mb-2" />
      <BoxShimmer className="h-3 w-9/12 rounded" />
    </motion.div>
  );

  const TestimonialSkeleton = ({ delay = 0 }: { delay?: number }) => (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, delay }}
      className="rounded-2xl p-6"
      style={{ background: 'rgba(15,23,42,0.72)', border: '1px solid rgba(59,130,246,0.12)' }}
    >
      <div className="flex items-center gap-3 mb-3">
        <BoxShimmer className="h-12 w-12 rounded-full" />
        <div className="flex-1">
          <BoxShimmer className="h-4 w-32 rounded mb-2" />
          <BoxShimmer className="h-3 w-20 rounded" />
        </div>
      </div>
      <BoxShimmer className="h-3 w-full rounded mb-2" />
      <BoxShimmer className="h-3 w-11/12 rounded mb-2" />
      <BoxShimmer className="h-3 w-9/12 rounded" />
    </motion.div>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-hidden bg-black text-white">
      <style>{`
        @keyframes bluePulse { 0%,100% { box-shadow: 0 0 0 rgba(59,130,246,0); } 50% { box-shadow: 0 0 32px rgba(59,130,246,.35); } }
        .cc-cta-glow { animation: bluePulse 3s ease-in-out infinite; }
        .cc-card { background: rgba(15,23,42,0.72); border: 1px solid rgba(59,130,246,0.12); }
        .cc-card-hover:hover { background: rgba(30,41,59,0.9); }
        .diagonal-overlay::before{
          content:""; position:absolute; inset:0;
          background:
            linear-gradient(120deg, rgba(59,130,246,.18), transparent 42%),
            repeating-linear-gradient(120deg, transparent 0 16px, rgba(255,255,255,.03) 16px 32px);
          pointer-events:none;
        }
      `}</style>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center">
        {!heroLoaded && <BoxShimmer className="absolute inset-0" />}
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setHeroLoaded(true)}
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-slate-950/75 to-black/90 diagonal-overlay" />

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={heroInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-5xl px-4 text-center pt-20 sm:pt-24"
        >
          <p className="inline-flex items-center gap-2 text-sm text-white/85 mb-4">
            <a href={IG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-90">
              <Instagram size={16} /> @five0detail
            </a>
          </p>

          <h1 className="leading-none tracking-widest uppercase">
            <span className="block text-[38px] sm:text-[48px] md:text-[60px] font-black text-white tracking-[0.12em] sm:tracking-[0.15em]">
              Five-0 Auto Detail
            </span>
            <span className="block mt-2 text-lg sm:text-2xl md:text-4xl font-extrabold text-white/90">
              Mobile Detailing • Oklahoma
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-2 sm:px-0">
            Police-inspired mobile detailing with sharp interior and exterior service brought straight to your driveway.
          </p>

          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-extrabold transition-all cc-cta-glow"
            >
              Request Service
            </Link>
            <Link
              to="/results"
              className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold border border-blue-400/20 bg-white/5 hover:bg-white/10 transition-all"
            >
              See Results
            </Link>
          </div>

          <div className="mt-4 sm:mt-5 px-3 sm:px-0">
            <p className="text-xs sm:text-sm md:text-base text-white/80 font-semibold leading-relaxed">
              <span className="text-blue-300">10% of proceeds donated</span> to OK Highway Patrol and Project K-9 Hero
            </p>
          </div>
        </motion.div>
      </section>

      {/* TRUST */}
      <section className="py-14 bg-black">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6" ref={trustRef}>
          {!trustInView
            ? [0, 1, 2].map((i) => <TrustSkeleton key={`trust-skel-${i}`} delay={i * 0.08} />)
            : trustBadges.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center rounded-2xl cc-card cc-card-hover p-6"
                >
                  <b.icon className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold">{b.title}</h3>
                  <p className="text-white/70">{b.description}</p>
                </motion.div>
              ))}
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servicesRef} className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold">Core Services</h2>
            <p className="text-white/70 mt-2">Focused detailing services with a police-inspired edge</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {!servicesInView
              ? [0, 1, 2].map((i) => <ServiceSkeleton key={`srv-skel-${i}`} delay={i * 0.08} />)
              : services.map((s, i) => (
                  <motion.div
                    key={`${s.title}-${i}`}
                    initial={{ y: 24, opacity: 0 }}
                    animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl cc-card cc-card-hover p-6"
                  >
                    <s.icon className="h-12 w-12 text-blue-400 mb-3" />
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="text-white/75">{s.description}</p>
                    <div className="mt-5">
                      <Link to="/services" className="inline-block text-blue-300 hover:text-blue-200 font-semibold">
                        View details
                      </Link>
                    </div>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>

      {/* WHY DETAILING MATTERS */}
      <section ref={whyRef} className="py-16 bg-slate-950 border-y border-blue-500/10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={whyInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold">Why Detailing Matters</h2>
            <p className="text-white/70 mt-2">A tactical breakdown of why keeping your vehicle clean actually matters</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {!whyInView
              ? [0, 1, 2, 3].map((i) => <WhySkeleton key={`why-skel-${i}`} delay={i * 0.08} />)
              : whyCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ y: 24, opacity: 0 }}
                    animate={whyInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl cc-card cc-card-hover p-6"
                  >
                    <card.icon className="h-12 w-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-white/75 leading-relaxed">{card.description}</p>
                  </motion.div>
                ))}
          </div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={whyInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 rounded-2xl cc-card p-6 md:p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Keep The Vehicle Sharp. Keep The Value Protected.</h3>
            <p className="text-white/75 max-w-3xl mx-auto leading-relaxed">
              Regular detailing is not just for looks. It helps reset your interior, preserve your paint, protect long-term value,
              and keep your vehicle looking like it is actually taken care of. A clean car is a good car, and a protected car lasts longer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialsRef} className="py-16 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold">Driver Reports</h2>
            <p className="text-white/70 mt-2">Real feedback from clients in the field</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {!testimonialsInView
              ? [0, 1, 2].map((i) => <TestimonialSkeleton key={`tst-skel-${i}`} delay={i * 0.08} />)
              : testimonials.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ y: 24, opacity: 0 }}
                    animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                  >
                    <TestimonialCard {...t} />
                  </motion.div>
                ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold">Service Area</h2>
            <p className="text-white/70 mt-2">Based in Lawton, Oklahoma and serving a 60+ mile patrol radius</p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl cc-card p-4 md:p-6">
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-950">
              <iframe
                title="Lawton Oklahoma service area map"
                src="https://www.google.com/maps?q=Lawton,OK&z=9&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="text-center mt-5">
              <p className="text-lg font-semibold">Lawton, OK based • 60+ mile service radius</p>
              <p className="text-white/70">Travel fees may apply for extended distance calls</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-blue-400/20 bg-white/5 hover:bg-white/10 transition"
            >
              <Instagram size={18} /> Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;