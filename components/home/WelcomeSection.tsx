'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function WelcomeSection() {
  return (
    <section className="bg-[#f5f1e8] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Part 1: Main Headline with Restaurant Image */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-gray-900 lg:text-5xl xl:text-6xl leading-tight">
              Welcome to a resort where every detail inspires relaxation
            </h2>
          </motion.div>

          {/* Right Column - Restaurant Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/img2.jpg"
                alt="Sagana Restaurant View"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Part 2: River Image with Description Text */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - River/Garden Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/views3.jpg"
                alt="River View at Mimosa Park"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Column - Description Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="font-serif text-lg text-gray-700 leading-relaxed lg:text-xl mb-8">
              Cradled along the river&apos;s edge in Sagana, Mimosa Park & Island Resort offers a retreat shaped by nature&apos;s rhythm, a place where calm water, lush greenery, and generous space come together. Thoughtfully designed for comfort and connection, the resort blends elegant interiors, sweeping views, and warm Kenyan hospitality to create an experience that feels both grounding and indulgent. Whether you&apos;re here to unwind, adventure, or mark a special moment, Mimosa Park & Island Resort is your serene escape in the heart of Sagana.
            </p>
            
            <Link 
              href="/gallery"
              className="inline-block rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              View Image Gallery
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}