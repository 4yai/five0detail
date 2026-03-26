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

      {/* ORIGINAL CONTENT (unchanged) */}
      {/* ... all your sections stay exactly as-is ... */}

      {/* UNDER CONSTRUCTION OVERLAY (navbar still usable) */}
      <div className="fixed inset-x-0 bottom-0 top-20 z-[900] flex items-center justify-center backdrop-blur-xl bg-black/70">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-[0.2em] uppercase text-white mb-6">
            UNDER CONSTRUCTION
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-6">
            Site is currently being finalized
          </p>
          <div className="inline-block px-6 py-3 border border-blue-500/30 rounded-xl bg-blue-600/10 text-blue-400 font-semibold tracking-wide">
            COMING SOON
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Results;