'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const bgImages = [
  '/images/grounds.jpg',
  '/images/pool1.jpg',
  '/images/island.png',
  '/images/views1.jpg',
  '/images/camp1.jpg',
  '/images/lounge.jpg',
];

const features = [
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 40V15M40 40V15M10 15H40M15 15V10H35V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Restaurant',
    description: "A vibrant dining experience serving exquisite cuisine and signature dishes. Stylish ambiance perfect for family meals, romantic dinners, or casual gatherings overlooking the resort grounds.",
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 10V35M25 35L20 40M25 35L30 40M15 10V20M35 10V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Bar',
    description: "Signature cocktails, fine wines, and premium spirits served in a relaxed open-air setting. Unwind at the bar as the sun sets over the river — the perfect end to a perfect day.",
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 25H40M10 30H40M15 25V15M35 25V15M15 15H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Swimming Pool',
    description: "A spacious pool for adults and a safe shallow section for the little ones. Surrounded by loungers and lush greenery — the perfect place to cool off and unwind.",
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30L25 10L40 30M15 30V40H35V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Island & Camping',
    description: 'Spend a night under the stars on our private island. Tents, bonfires, and the peaceful rhythm of the river await — an unforgettable escape into nature.',
  },
];

export default function FeaturesSection() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setBgIndex(i => (i + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background image carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={bgImages[bgIndex]}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={bgIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-3xl font-normal text-white lg:text-4xl xl:text-[2.75rem] max-w-4xl mx-auto leading-snug">
            Discover the exceptional features that make our resort truly unforgettable
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`text-white px-6 lg:px-8 py-8 ${
                index < features.length - 1 ? 'lg:border-r border-white/20' : ''
              } ${
                index < 2 ? 'sm:border-r sm:border-white/20 lg:border-r' : ''
              } ${
                index === 2 ? 'sm:border-r-0 lg:border-r' : ''
              }`}
            >
              <div className="mb-6 text-mimosa-400">
                {feature.icon}
              </div>
              <h3 className="font-serif text-[1.75rem] font-normal mb-5 leading-tight">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-[0.95rem] font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}