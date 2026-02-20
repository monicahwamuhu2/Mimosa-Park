'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const slides = [
  { src: '/images/hero.jpg',       category: 'Welcome' },
  { src: '/images/grounds.jpg',    category: 'Grounds' },
  { src: '/images/pool1.jpg',      category: 'Pool' },
  { src: '/images/pool2.jpg',      category: 'Pool' },
  { src: '/images/pool3.jpg',      category: 'Pool' },
  { src: '/images/pool4.jpg',      category: 'Pool' },
  { src: '/images/pool5.jpg',      category: 'Pool' },
  { src: '/images/lounge.jpg',     category: 'Lounge' },
  { src: '/images/lounge2.jpg',    category: 'Lounge' },
  { src: '/images/gazebo.jpg',     category: 'Gazebo' },
  { src: '/images/mangotree.jpg',  category: 'Grounds' },
  { src: '/images/grounds2.jpg',   category: 'Grounds' },
  { src: '/images/island.png',     category: 'Island' },
  { src: '/images/island2.png',    category: 'Island' },
  { src: '/images/views1.jpg',     category: 'Nature' },
  { src: '/images/views2.jpg',     category: 'Nature' },
  { src: '/images/views3.jpg',     category: 'Nature' },
  { src: '/images/camp1.jpg',      category: 'Camping' },
  { src: '/images/camp2.jpg',      category: 'Camping' },
  { src: '/images/camp3.jpg',      category: 'Camping' },
  { src: '/images/tent1.jpeg',     category: 'Camping' },
];

const INTERVAL = 5000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  // Progress bar tick
  useEffect(() => {
    setProgress(0);
    const tick = setInterval(() => {
      setProgress(prev => Math.min(prev + 100 / (INTERVAL / 50), 100));
    }, 50);
    return () => clearInterval(tick);
  }, [current]);

  const goTo = (index: number) => {
    setCurrent(index);
    setProgress(0);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].category}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Subtle vignette — dark bottom, very light top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-8 lg:px-16 pb-10 flex flex-col gap-6">

        {/* Brand + tagline */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight"
          >
            <span className="text-[#fbbf24]">MiMosa</span>
            <span className="text-white"> Park </span>
            <span className="text-white/70">&amp;</span>
            <span className="text-[#4ade80]"> Island Camp</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="mt-2 text-xs lg:text-sm text-white/70 tracking-[0.25em] uppercase font-light"
          >
            Experience Nature&apos;s Harmony
          </motion.p>
        </div>

        {/* Bottom row: dot nav + counter + progress */}
        <div className="flex items-center gap-6">

          {/* Dot navigation */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="group flex items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-500 ${
                    idx === current
                      ? 'w-6 h-1.5 bg-white'
                      : 'w-1.5 h-1.5 bg-white/40 group-hover:bg-white/70'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Slide counter */}
          <span className="text-white/40 text-xs tracking-widest tabular-nums">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>

          {/* Progress bar */}
          <div className="flex-1 max-w-[160px] h-px bg-white/20 overflow-hidden rounded-full">
            <div
              className="h-full bg-white/80 transition-none rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Current category label */}
          <AnimatePresence mode="wait">
            <motion.span
              key={slides[current].category}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.4 }}
              className="text-white/50 text-xs tracking-widest uppercase hidden sm:block"
            >
              {slides[current].category}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}