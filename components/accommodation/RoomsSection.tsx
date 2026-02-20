'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Users, User, Coffee, Utensils } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const roomImages = [
  '/images/room1.png',
  '/images/room2.png',
  '/images/room3.png',
  '/images/room4.png',
 
];

const roomPrices = [
  { 
    name: 'Half Board (Couple)', 
    description: 'Bed & Breakfast, Dinner',
    price: 'Ksh 6,000',
    icon: Users,
    meals: 2
  },
  { 
    name: 'Full Board (Couple)', 
    description: 'Bed & Breakfast, Dinner & Lunch',
    price: 'Ksh 9,000',
    icon: Users,
    meals: 3
  },
  { 
    name: 'Half Board (Single)', 
    description: 'Bed & Breakfast, Dinner',
    price: 'Ksh 5,000',
    icon: User,
    meals: 2
  },
  { 
    name: 'Full Board (Single)', 
    description: 'Bed & Breakfast, Dinner & Lunch',
    price: 'Ksh 7,500',
    icon: User,
    meals: 3
  },
  { 
    name: 'Bed & Breakfast (Single)', 
    description: 'Room with breakfast included',
    price: 'Ksh 3,000',
    icon: User,
    meals: 1
  },
  { 
    name: 'Bed & Breakfast (Couple)', 
    description: 'Room with breakfast included',
    price: 'Ksh 3,500',
    icon: Users,
    meals: 1
  },
];

export default function RoomsSection() {
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
              {roomImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 relative h-full"
                >
                  <Image
                    src={image}
                    alt={`Room view ${index + 1}`}
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
                  <Bed className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={1.5} />
                </div>
              </motion.div>

              {/* Title */}
              <h1 className="font-serif text-6xl lg:text-7xl xl:text-9xl font-bold text-white leading-none mb-4">
                Rooms
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-white/90 font-light max-w-2xl">
                Comfortable accommodation with stunning river views
              </p>
            </motion.div>
          </div>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-8 right-8 z-20 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
          <span className="text-white text-sm font-medium">
            {roomImages.length} Photos
          </span>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#f5f1e8] py-20 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
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
              Choose the perfect package for your stay
            </p>
          </motion.div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roomPrices.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    {/* Icon and Type */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-mimosa-100 rounded-full flex items-center justify-center group-hover:bg-mimosa-200 transition-colors">
                        <Icon className="w-6 h-6 text-mimosa-600" strokeWidth={2} />
                      </div>
                      <div className="flex gap-1">
                        {[...Array(item.meals)].map((_, i) => (
                          <Utensils key={i} className="w-4 h-4 text-mimosa-500" />
                        ))}
                      </div>
                    </div>

                    {/* Package Name */}
                    <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 text-sm">
                      {item.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-end justify-between border-t border-gray-200 pt-4">
                      <span className="text-3xl font-bold text-gray-900">
                        {item.price}
                      </span>
                      <span className="text-gray-500 text-sm">per night</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              All rooms feature comfortable beds, en-suite bathrooms, and beautiful views. 
              Meal packages include authentic Kenyan cuisine prepared fresh daily.
            </p>

            <Link
              href="#booking"
              className="inline-block rounded-full bg-gray-900 px-12 py-4 text-lg font-semibold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book your room now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Room Features */}
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
              Room amenities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every room is designed for comfort and equipped with modern amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Comfortable Beds', 
                description: 'Quality mattresses and fresh linens for a restful sleep',
                icon: '🛏️'
              },
              { 
                title: 'En-Suite Bathrooms', 
                description: 'Private bathrooms with hot water showers',
                icon: '🚿'
              },
              
              { 
                title: 'Fresh Meals', 
                description: 'Authentic Kenyan cuisine prepared with local ingredients',
                icon: '🍽️'
              },
              { 
                title: 'Free Wi-Fi', 
                description: 'Stay connected with complimentary internet access',
                icon: '📶'
              },
              { 
                title: '24/7 Service', 
                description: 'Friendly staff available round the clock',
                icon: '🔔'
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