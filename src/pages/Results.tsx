import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Filter, X, ChevronLeft, ChevronRight, Shield, BadgeCheck } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const Results: React.FC = () => {
  const [galleryRef, galleryInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [baRef, baInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filters = ['All', 'Interior', 'Exterior', 'Headlights', 'Trim'];

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/6873123/pexels-photo-6873123.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Exterior',
      caption: 'Exterior cleanup with a sharp final finish'
    },
    {
      src: 'https://images.pexels.com/photos/6873100/pexels-photo-6873100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Interior',
      caption: 'Interior reset with vacuum, wipe-down, and refresh'
    },
    {
      src: 'https://images.pexels.com/photos/6873122/pexels-photo-6873122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Headlights',
      caption: 'Headlight restoration for better clarity and cleaner front-end look'
    },
    {
      src: 'https://images.pexels.com/photos/6873008/pexels-photo-6873008.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Trim',
      caption: 'Trim and plastic restoration for faded exterior surfaces'
    },
    {
      src: 'https://images.pexels.com/photos/6873015/pexels-photo-6873015.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Interior',
      caption: 'Console, dash, and detail work cleaned up and mission ready'
    },
    {
      src: 'https://images.pexels.com/photos/6872176/pexels-photo-6872176.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      category: 'Exterior',
      caption: 'Wash, dry, and wheel detail with a patrol-ready finish'
    }
  ];

  const beforeAfterSlides = [
    {
      before: 'https://images.pexels.com/photos/6872176/pexels-photo-6872176.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      after: 'https://images.pexels.com/photos/6873008/pexels-photo-6873008.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      caption: 'Exterior cleanup and finish upgrade'
    },
    {
      before: 'https://images.pexels.com/photos/6873100/pexels-photo-6873100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      after: 'https://images.pexels.com/photos/6873015/pexels-photo-6873015.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      caption: 'Interior reset with a cleaner and sharper cabin'
    },
    {
      before: 'https://images.pexels.com/photos/6873122/pexels-photo-6873122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      after: 'https://images.pexels.com/photos/6873123/pexels-photo-6873123.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      caption: 'Front-end improvement with restored clarity and shine'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      rating: 5,
      text: 'Absolutely amazing results. My SUV looked way cleaner and sharper when they finished.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'David Thompson',
      rating: 5,
      text: 'Professional from start to finish. They came out and handled my truck the right way.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'Lisa Wang',
      rating: 5,
      text: 'Super convenient and the interior looked and smelled brand new after the service.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      name: 'Robert Johnson',
      rating: 5,
      text: 'They brought the look of the vehicle back to life. Clean work and worth every dollar.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    }
  ];

  const filteredImages = useMemo(
    () => (activeFilter === 'All' ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)),
    [activeFilter]
  );

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % beforeAfterSlides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + beforeAfterSlides.length) % beforeAfterSlides.length);

  // ---------- Skeletons ----------
  const BoxShimmer = ({ className = '' }: { className?: string }) => (
    <div className={`animate-pulse bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 ${className}`} />
  );

  const GalleryCardSkeleton = () => (
    <div className="rounded-2xl overflow-hidden border border-blue-400/10 bg-slate-950">
      <BoxShimmer className="h-64 w-full" />
    </div>
  );

  const TestimonialSkeleton = ({ delay = 0 }: { delay?: number }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-blue-400/10 p-6 bg-slate-950"
    >
      <div className="flex items-center gap-4 mb-4">
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

  const BeforeAfterSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="relative">
        <BoxShimmer className="h-64 w-full rounded-2xl" />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">BEFORE</div>
      </div>
      <div className="relative">
        <BoxShimmer className="h-64 w-full rounded-2xl" />
        <div className="absolute top-4 left-4 bg-white text-slate-950 px-3 py-1 rounded-full text-sm font-semibold">AFTER</div>
      </div>
      <BoxShimmer className="h-4 w-2/3 rounded mx-auto col-span-full" />
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 bg-black text-white">
      <style>{`
        @keyframes bluePulse { 0%,100% { box-shadow: 0 0 0 rgba(59,130,246,0); } 50% { box-shadow: 0 0 30px rgba(59,130,246,.28); } }
        .results-card { background: rgba(15,23,42,0.72); border: 1px solid rgba(59,130,246,0.12); }
        .results-card-hover:hover { background: rgba(30,41,59,0.9); }
        .results-glow { animation: bluePulse 3s ease-in-out infinite; }
        .results-overlay::before{
          content:""; position:absolute; inset:0;
          background:
            linear-gradient(120deg, rgba(59,130,246,.14), transparent 42%),
            repeating-linear-gradient(120deg, transparent 0 16px, rgba(255,255,255,.03) 16px 32px);
          pointer-events:none;
        }
      `}</style>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-black via-slate-950 to-black border-b border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-[0.12em] uppercase text-white">
              Results Division
            </h1>
            <p className="text-xl text-white/70 mb-8">Case files showing the work we deliver in the field</p>
            <div className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-flex items-center gap-3 text-lg font-semibold shadow-[0_0_25px_rgba(59,130,246,.35)] results-glow">
              <BadgeCheck className="h-6 w-6" />
              <span>Patrol-grade finishes delivered on site</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filterable Gallery */}
      <section ref={galleryRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={galleryInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-[0.08em]">Evidence Gallery</h2>
            <p className="text-xl text-white/70 mb-8">Browse results by service type</p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 border ${
                    activeFilter === filter
                      ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_16px_rgba(59,130,246,.35)]'
                      : 'bg-slate-950 border-blue-400/10 text-white/80 hover:bg-slate-900'
                  }`}
                >
                  <Filter className="inline h-4 w-4 mr-2" />
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {!galleryInView
                ? Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={`gsk-${i}`}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <GalleryCardSkeleton />
                    </motion.div>
                  ))
                : filteredImages.map((image) => (
                    <motion.div
                      key={`${image.src}-${activeFilter}`}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="cursor-pointer group"
                      onClick={() => setLightboxImage(image.src)}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-blue-400/10 bg-slate-950 results-overlay">
                        <img
                          src={image.src}
                          alt={image.caption}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-100" />
                        <div className="absolute top-4 left-4">
                          <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold tracking-wide uppercase inline-flex items-center gap-1">
                            <Shield className="h-3 w-3" />
                            {image.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-sm text-white/90 font-medium">{image.caption}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Before/After */}
      <section ref={baRef} className="py-16 bg-slate-950 border-y border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-[0.08em]">Before & After</h2>
            <p className="text-xl text-white/70">Clear transformations from mobile service calls</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {!baInView ? (
              <BeforeAfterSkeleton />
            ) : (
              <>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                >
                  <div className="relative">
                    <img src={beforeAfterSlides[currentSlide].before} alt="Before detailing" className="w-full h-64 object-cover rounded-2xl border border-blue-400/10" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">BEFORE</div>
                  </div>
                  <div className="relative">
                    <img src={beforeAfterSlides[currentSlide].after} alt="After detailing" className="w-full h-64 object-cover rounded-2xl border border-blue-400/10" />
                    <div className="absolute top-4 left-4 bg-white text-slate-950 px-3 py-1 rounded-full text-sm font-semibold">AFTER</div>
                  </div>
                </motion.div>

                <p className="text-center text-lg text-white/80 mb-6">{beforeAfterSlides[currentSlide].caption}</p>

                <div className="flex justify-center items-center gap-4">
                  <button onClick={prevSlide} className="bg-slate-900 hover:bg-slate-800 border border-blue-400/10 text-white p-2 rounded-full transition-colors">
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <div className="flex gap-2">
                    {beforeAfterSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-blue-500' : 'bg-slate-600'}`}
                      />
                    ))}
                  </div>

                  <button onClick={nextSlide} className="bg-slate-900 hover:bg-slate-800 border border-blue-400/10 text-white p-2 rounded-full transition-colors">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-[0.08em]">Driver Statements</h2>
            <p className="text-xl text-white/70">What clients say after the job is done</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {!testimonialsInView
              ? [0, 1, 2, 3].map((i) => <TestimonialSkeleton key={`tsk-${i}`} delay={i * 0.08} />)
              : testimonials.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ y: 30, opacity: 0 }}
                    animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <TestimonialCard {...t} />
                  </motion.div>
                ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImage} alt="Gallery image" className="max-w-full max-h-full object-contain rounded-2xl border border-blue-400/10" />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 bg-slate-950/80 border border-blue-400/10 text-white p-2 rounded-full hover:bg-slate-900 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Results;