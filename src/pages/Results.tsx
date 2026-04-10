import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TestimonialCard from '../components/TestimonialCard';

const Results: React.FC = () => {
  const [galleryRef, galleryInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [baRef, baInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 sm:pt-32 bg-black text-white"
    >

      {/* YOUR NORMAL PAGE CONTENT STAYS HERE */}

      {/* FIXED UNDER CONSTRUCTION OVERLAY */}
      <div className="fixed inset-x-0 bottom-0 top-[120px] sm:top-[140px] z-[900] flex items-center justify-center backdrop-blur-xl bg-black/70">
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