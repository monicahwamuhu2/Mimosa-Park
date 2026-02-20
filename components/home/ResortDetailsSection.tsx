'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const details = [
  { label: 'Location', value: 'Sagana, Kenya' },
  { label: 'Rooms', value: 'x rooms/ cottages' },
  { label: 'Swimming Pool', value: 'xm by xm' },
  { label: 'Camp Ground', value: 'x capacity' },
  { label: 'Events Ground', value: 'x capacity' },
];

const carouselImages = [
  { src: '/images/lounge.jpg', alt: 'Mimosa Lounge View 1' },
  { src: '/images/lounge2.jpg', alt: 'Mimosa Lounge View 2' },
  { src: '/images/pool1.jpg', alt: 'Swimming Pool View 1' },
  { src: '/images/pool2.jpg', alt: 'Swimming Pool View 2' },
  { src: '/images/pool3.jpg', alt: 'Swimming Pool View 3' },
  { src: '/images/views1.jpg', alt: 'Resort Views 1' },
  { src: '/images/views2.jpg', alt: 'Resort Views 2' },
  { src: '/images/views3.jpg', alt: 'Resort Views 3' },
];

export default function ResortDetailsSection() {
  // Single declaration with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#f5f1e8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image Carousel and Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Carousel Container */}
            <div className="relative group">
              {/* Embla Carousel */}
              <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
                <div className="flex">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] min-w-0 relative aspect-[4/3]"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Reserve Button */}
            <div className="flex justify-start">
              <Link
                href="#booking"
                className="inline-block rounded-full border-2 border-gray-900 px-10 py-4 text-base font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Reserve your stay
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Details Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2 className="font-serif text-4xl font-normal text-gray-900 lg:text-5xl xl:text-6xl mb-12 leading-tight">
              Resort details at a glance
            </h2>

            {/* Details List */}
            <div className="space-y-0 rounded-xl overflow-hidden shadow-lg">
              {details.map((detail, index) => (
                <div
                  key={detail.label}
                  className="flex items-center justify-between py-6 px-8 bg-[#9d9080] text-white hover:bg-[#8a7d6e] transition-colors duration-300"
                  style={{
                    marginBottom: index < details.length - 1 ? '1px' : '0',
                  }}
                >
                  <span className="font-serif text-lg font-light">
                    {detail.label}
                  </span>
                  <span className="font-serif text-lg font-light">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}