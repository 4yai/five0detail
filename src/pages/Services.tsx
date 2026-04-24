import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MessageSquare, Instagram, Clock, Shield } from 'lucide-react';

const BOOKING_LINK =
  'https://app.squareup.com/appointments/book/r9fqa859ot208j/LVJNFC13SX6J0/start';

const Services: React.FC = () => {
  const [packagesRef, packagesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [addonsRef, addonsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const sedanPackages = [
    {
      name: 'Patrol Package',
      price: 109,
      time: '1.5-2 hours',
      description:
        'A clean maintenance detail for sedans and coupes. Includes exterior wash, hand dry, wheels, tires, interior vacuum, surface wipe down, and streak-free windows.',
      popular: false,
      badge: 'WAX INCLUDED',
    },
    {
      name: 'Task Force',
      price: 149,
      time: '2.5-3 hours',
      description:
        'Our most balanced service. Includes everything in Patrol, plus deeper interior attention, cracks and crevices, light stain treatment, trim refresh, and gloss-enhancing spray protection.',
      popular: true,
      badge: 'MOST BOOKED',
    },
    {
      name: 'SWAT Detail',
      price: 199,
      time: '3-4 hours',
      description:
        'Built for vehicles that need a stronger reset. Includes everything in Task Force, plus carpet and seat extraction, stain treatment, enhanced protection, and extra detail work throughout.',
      popular: false,
      badge: 'BEST VALUE',
    },
  ];

  const truckPackages = [
    {
      name: 'Interceptor',
      price: 119,
      time: '1.5-2.5 hours',
      description:
        'A clean maintenance detail for trucks and SUVs. Includes exterior wash, hand dry, wheels, tires, interior vacuum, surface wipe down, and streak-free windows.',
      popular: false,
      badge: 'WAX INCLUDED',
    },
    {
      name: 'Task Force',
      price: 169,
      time: '2.5-3.5 hours',
      description:
        'Our most balanced truck and SUV service. Includes everything in Interceptor, plus deeper interior attention, cracks and crevices, light stain treatment, trim refresh, and gloss-enhancing spray protection.',
      popular: true,
      badge: 'MOST BOOKED',
    },
    {
      name: 'SWAT Detail',
      price: 219,
      time: '3.5-4.5 hours',
      description:
        'For larger vehicles that need a stronger reset. Includes everything in Task Force, plus carpet and seat extraction, stain treatment, enhanced protection, and extra detail work throughout.',
      popular: false,
      badge: 'BEST VALUE',
    },
  ];

  const addOns = [
    {
      name: 'Heavy Stain Extraction',
      price: '$40-$80',
      description: 'Targeted stain work for carpets, seats, and deeper interior problem areas.',
      comingSoon: false,
    },
    {
      name: 'Pet Hair Removal',
      price: '$25-$50',
      description: 'Extra removal work for embedded pet hair in carpets, seats, and cargo areas.',
      comingSoon: false,
    },
    {
      name: 'Night Vision Restore',
      price: '$50-$80',
      description: 'Headlight restoration to improve clarity and bring back a cleaner look.',
      comingSoon: false,
    },
    {
      name: '1-Step Paint Enhancement',
      price: '$100-$150',
      description: 'Machine polish service to improve gloss and reduce light swirls on paint.',
      comingSoon: false,
    },
    {
      name: 'Undercover Bay Detail',
      price: '$40-$60',
      description: 'Safe engine bay cleaning and plastic dressing for a cleaner under-hood appearance.',
      comingSoon: false,
    },
    {
      name: 'Ceramic Coating',
      price: null,
      description: 'Longer-term exterior protection and gloss boost.',
      comingSoon: true,
    },
  ];

  const CardSkeleton = ({ delay = 0 }: { delay?: number }) => (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-2xl p-6 bg-slate-950 border border-blue-400/10"
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="animate-pulse w-full h-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
      </div>
      <div className="relative">
        <div className="h-6 w-40 bg-white/10 rounded mb-4" />
        <div className="h-8 w-24 bg-white/10 rounded mb-2" />
        <div className="h-3 w-40 bg-white/10 rounded mb-6" />
        <div className="space-y-3 mb-8">
          <div className="h-3 w-full bg-white/10 rounded" />
          <div className="h-3 w-11/12 bg-white/10 rounded" />
          <div className="h-3 w-10/12 bg-white/10 rounded" />
          <div className="h-3 w-8/12 bg-white/10 rounded" />
        </div>
        <div className="h-11 w-full bg-white/10 rounded" />
      </div>
    </motion.div>
  );

  const AddonSkeleton = ({ delay = 0 }: { delay?: number }) => (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, delay }}
      className="bg-slate-950 border border-blue-400/10 p-6 rounded-lg"
    >
      <div className="animate-pulse">
        <div className="flex justify-between items-center mb-3">
          <div className="h-5 w-40 bg-white/10 rounded" />
          <div className="h-6 w-16 bg-white/10 rounded" />
        </div>
        <div className="h-3 w-full bg-white/10 rounded mb-2" />
        <div className="h-3 w-10/12 bg-white/10 rounded" />
      </div>
    </motion.div>
  );

  const PackageCard = ({
    pkg,
    index,
  }: {
    pkg: {
      name: string;
      price: number;
      time: string;
      description: string;
      popular: boolean;
      badge: string;
    };
    index: number;
  }) => (
    <motion.div
      key={pkg.name}
      initial={{ y: 30, opacity: 0 }}
      animate={packagesInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-2xl bg-slate-950 border border-blue-400/10 hover:bg-slate-900 transition-all px-6 pb-6 ${
        pkg.popular ? 'ring-2 ring-blue-500 pt-10' : 'pt-6'
      }`}
      whileHover={{ y: -5 }}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-[0_0_16px_rgba(59,130,246,.35)] whitespace-nowrap">
            Top Callout
          </span>
        </div>
      )}

      <div className="flex justify-end mb-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.08em] whitespace-nowrap ${
            pkg.badge === 'MOST BOOKED'
              ? 'border border-blue-300/30 bg-blue-500 text-white shadow-[0_0_18px_rgba(59,130,246,.28)]'
              : pkg.badge === 'BEST VALUE'
                ? 'border border-white/15 bg-white/10 text-blue-200'
                : 'border border-amber-300/30 bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 shadow-[0_0_18px_rgba(251,191,36,.28)]'
          }`}
        >
          {pkg.badge}
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-4 text-center text-white leading-tight">{pkg.name}</h3>

      <div className="text-center mb-6">
        <div className="text-sm text-white/60 mb-2">Starting at</div>
        <div className="text-3xl font-extrabold text-blue-400 mb-2">${pkg.price}</div>
        <div className="text-xs uppercase tracking-[0.12em] text-white/45">{pkg.time}</div>
      </div>

      <div className="mb-8 min-h-[170px]">
        <p className="text-sm leading-7 text-white/90 text-center">{pkg.description}</p>
      </div>

      <a
        href={BOOKING_LINK}
        target="_blank"
        rel="noreferrer"
        className="w-full inline-block text-center bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-lg font-semibold transition-colors shadow-[0_0_16px_rgba(59,130,246,.35)]"
      >
        Request Service
      </a>
    </motion.div>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 bg-black text-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-black via-slate-950 to-black border-b border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight uppercase">Packages & Dispatch</h1>
            <p className="text-white/70 mb-6">
              Mobile detailing on call in <span className="text-blue-400">Lawton, OK</span> and within a 60+ mile radius
            </p>
            <div className="bg-blue-500 text-white px-8 py-4 rounded-lg inline-flex items-center gap-3 text-lg font-semibold mb-4 shadow-[0_0_25px_rgba(59,130,246,.35)]">
              <Shield className="h-6 w-6" />
              <span>Don't want to leave home? Our unit comes to you!</span>
            </div>
            <div className="max-w-3xl mx-auto bg-slate-950 border border-blue-500/20 rounded-xl px-6 py-4">
              <p className="text-sm md:text-base text-white/85">
                <span className="font-bold text-blue-400">10% of proceeds</span> from every service go toward a law
                enforcement support charity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" ref={packagesRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={packagesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 uppercase">Choose Your Service Level</h2>
            <p className="text-xl text-white/70">Straightforward packages based on vehicle size and mission level</p>
          </motion.div>

          {!packagesInView ? (
            <>
              <div className="text-center mb-8">
                <div className="h-8 w-64 bg-white/10 rounded mx-auto animate-pulse" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                {[0, 1, 2].map((i) => (
                  <CardSkeleton key={`sedan-skel-${i}`} delay={i * 0.1} />
                ))}
              </div>

              <div className="text-center mb-8">
                <div className="h-8 w-64 bg-white/10 rounded mx-auto animate-pulse" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[0, 1, 2].map((i) => (
                  <CardSkeleton key={`truck-skel-${i}`} delay={i * 0.1} />
                ))}
              </div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={packagesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="mb-14"
              >
                <div className="relative max-w-4xl mx-auto bg-slate-950 border border-blue-500/20 rounded-2xl p-6 md:p-8 text-center overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="w-full h-full bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10" />
                  </div>

                  <div className="relative">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="h-px w-10 bg-blue-500/60" />
                      <span className="text-sm uppercase tracking-[0.12em] text-blue-400 font-semibold">
                        Quick Service Option
                      </span>
                      <div className="h-px w-10 bg-blue-500/60" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-3 uppercase">Express Wash</h3>

                    <p className="text-white/75 mb-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                      Built for maintenance between details. A fast reset for vehicles that need a cleaner look without
                      the time commitment of a larger service.
                    </p>

                    <div className="text-4xl font-extrabold text-blue-400 mb-4">$70</div>

                    <p className="text-sm text-white/80 mb-6">
                      Includes quick vacuum, interior wipe down, exterior wash, and air freshener finish.
                    </p>

                    <a
                      href={BOOKING_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-[0_0_16px_rgba(59,130,246,.35)]"
                    >
                      Book Express
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={packagesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center gap-4 mb-3">
                  <div className="h-px w-12 bg-blue-500/60" />
                  <h3 className="text-2xl md:text-3xl font-bold uppercase">Sedans & Coupes</h3>
                  <div className="h-px w-12 bg-blue-500/60" />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                {sedanPackages.map((pkg, index) => (
                  <PackageCard key={pkg.name} pkg={pkg} index={index} />
                ))}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={packagesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center gap-4 mb-3">
                  <div className="h-px w-12 bg-blue-500/60" />
                  <h3 className="text-2xl md:text-3xl font-bold uppercase">Trucks & SUVs</h3>
                  <div className="h-px w-12 bg-blue-500/60" />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {truckPackages.map((pkg, index) => (
                  <PackageCard key={pkg.name} pkg={pkg} index={index + 3} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Add-ons */}
      <section ref={addonsRef} className="py-16 bg-slate-950 border-y border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 uppercase">Special Ops Add-Ons</h2>
            <p className="text-xl text-white/70">Optional upgrades for problem areas, extra gloss, and deeper results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {!addonsInView
              ? Array.from({ length: 6 }).map((_, i) => <AddonSkeleton key={`addon-skel-${i}`} delay={0.1 + i * 0.06} />)
              : addOns.map((addon, index) => (
                  <motion.div
                    key={addon.name}
                    initial={{ y: 30, opacity: 0 }}
                    animate={addonsInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-black border border-blue-500/15 p-6 rounded-lg hover:bg-slate-900 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex justify-between items-center mb-3 gap-3">
                      <h3 className="text-lg font-semibold">{addon.name}</h3>
                      {addon.comingSoon ? (
                        <span className="text-sm font-bold uppercase tracking-[0.08em] text-blue-300 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
                          Coming Soon
                        </span>
                      ) : (
                        <span className="text-xl font-bold text-blue-400">+{addon.price}</span>
                      )}
                    </div>
                    <p className="text-white/70 text-sm">{addon.description}</p>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>

      {/* Contact / Info */}
      <section className="py-16 bg-slate-950 border-t border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 uppercase">Call Dispatch</h3>
              <a href="tel:6093649259" className="text-blue-400 hover:text-blue-300 text-lg font-medium">
                (609) 364-9259
              </a>
            </div>

            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 uppercase">Text Dispatch</h3>
              <a href="sms:6093649259" className="text-blue-400 hover:text-blue-300 text-lg font-medium">
                (609) 364-9259
              </a>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 uppercase">Hours of Operation</h3>
              <p className="text-white/70">Weekends: 7AM-7PM</p>
              <p className="text-white/70">Weekdays: By Call</p>
            </div>

            <div className="text-center">
              <Instagram className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 uppercase">Follow the Unit</h3>
              <div className="space-x-4">
                <a
                  href="https://www.instagram.com/five0detail"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Instagram
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-black border border-blue-500/15 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center uppercase">Service Policies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2 text-blue-400 uppercase">Booking Policy</h4>
                <p className="text-sm text-white/70">25% deposit required to secure your service window</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-400 uppercase">Patrol Radius</h4>
                <p className="text-sm text-white/70">60+ mile radius from Lawton, OK</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-400 uppercase">Weather Hold</h4>
                <p className="text-sm text-white/70">Services rescheduled for severe weather conditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;