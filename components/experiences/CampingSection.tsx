'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Tent } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const campingImages = [
  '/images/experiences.png',
  '/images/tent1.jpeg',
  '/images/tent3.jpeg',
  '/images/island2.png',
  '/images/camp1.jpg',
  '/images/views1.jpg',
  '/images/views2.jpg',
  '/images/views3.jpg',
  '/images/camp7.png',
  '/images/camp8.png',
  '/images/island.png',
  

];

const campingPrices = [
  { name: '1-Seater Tent with Breakfast', price: 'Ksh 2,000' },
  { name: '2-Seater Tent with Breakfast', price: 'Ksh 4,000' },
  { name: '3-Seater Tent with Breakfast', price: 'Ksh 6,000' },
  { name: '4-Seater Tent with Breakfast', price: 'Ksh 8,000' },
];

export default function CampingSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      {/* Hero Section with Full Image Carousel */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Image Carousel */}
        <div className="absolute inset-0 group">
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {campingImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 relative h-full"
                >
                  <Image
                    src={image}
                    alt={`Camping experience ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" strokeWidth={2} />
          </button>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10" />
        </div>

        {/* Page Title - Positioned at Bottom */}
        <div className="relative z-20 flex h-full items-end px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  <Tent className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
                </div>
              </motion.div>

              {/* Title */}
              <h1 className="font-serif text-6xl lg:text-7xl xl:text-9xl font-bold text-white leading-none mb-4">
                Camping
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-white/90 font-light max-w-2xl">
                Experience outdoor adventure by the Sagana River
              </p>
            </motion.div>
          </div>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-8 right-8 z-20 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
          <span className="text-white text-sm font-medium">
            {campingImages.length} Photos
          </span>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#f5f1e8] py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
              Price per night
            </h2>
            <p className="text-gray-600 text-lg">
              All rates include breakfast and camping facilities
            </p>
          </motion.div>

          {/* Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {campingPrices.map((item, index) => (
              <div
                key={item.name}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-6 lg:px-10 lg:py-8 gap-4 ${
                  index !== campingPrices.length - 1 ? 'border-b border-gray-200' : ''
                } hover:bg-mimosa-50 transition-colors duration-300`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-mimosa-100 rounded-full flex items-center justify-center">
                    <Tent className="w-6 h-6 text-mimosa-600" strokeWidth={2} />
                  </div>
                  <span className="text-lg lg:text-xl font-medium text-gray-800">
                    {item.name}
                  </span>
                </div>
                <span className="text-2xl lg:text-3xl font-bold text-gray-900 sm:text-right">
                  {item.price}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Experience nature at its finest with our well-equipped camping facilities. 
              Each package includes access to shared amenities, clean washrooms, and a delicious breakfast.
            </p>

            <Link
              href="#booking"
              className="inline-block rounded-full bg-gray-900 px-12 py-4 text-lg font-semibold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book your camping experience
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
              What's included
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your camping experience comes with everything you need for a comfortable stay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Tent Setup', 
                description: 'Spacious and well-maintained tents with comfortable sleeping arrangements',
                icon: '🏕️'
              },
              { 
                title: 'Breakfast Included', 
                description: 'Start your day with a delicious Kenyan breakfast',
                icon: '🍳'
              },
              { 
                title: 'Clean Facilities', 
                description: 'Access to clean washrooms and shower facilities',
                icon: '🚿'
              },
              { 
                title: 'Campfire Area', 
                description: 'Enjoy evenings around the communal campfire',
                icon: '🔥'
              },
              { 
                title: 'Security', 
                description: '24/7 security personnel for your peace of mind',
                icon: '🛡️'
              },
              { 
                title: 'Scenic Views', 
                description: 'Wake up to stunning views of the Sagana River',
                icon: '🏞️'
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}