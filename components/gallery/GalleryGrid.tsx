'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  // Pool Images
  { src: '/images/pool1.jpg', alt: 'Swimming pool view 1', category: 'pool' },
  { src: '/images/pool2.jpg', alt: 'Pool area 2', category: 'pool', tall: true },
  { src: '/images/pool3.jpg', alt: 'Pool view 3', category: 'pool' },
  { src: '/images/pool4.jpg', alt: 'Pool area 4', category: 'pool', wide: true },
  { src: '/images/pool5.jpg', alt: 'Pool view 5', category: 'pool' },
  
  // Rooms
  { src: '/images/room1.png', alt: 'Room interior 1', category: 'rooms', tall: true },
  { src: '/images/room2.png', alt: 'Room interior 2', category: 'rooms' },
  { src: '/images/room3.png', alt: 'Room interior 3', category: 'rooms' },
  { src: '/images/room4.png', alt: 'Room interior 4', category: 'rooms' },
  
  // Lounge & Common Areas
  { src: '/images/lounge.jpg', alt: 'Lounge area', category: 'facilities' },
  { src: '/images/lounge2.jpg', alt: 'Lounge view 2', category: 'facilities', tall: true },
  { src: '/images/gazebo.jpg', alt: 'Gazebo area', category: 'facilities' },
  { src: '/images/mangotree.jpg', alt: 'Mango tree seating', category: 'facilities' },
  
  // Camping & Tents
  { src: '/images/tent1.jpeg', alt: 'Tent camping 1', category: 'camping' },
  { src: '/images/tent3.jpeg', alt: 'Tent setup', category: 'camping' },
  { src: '/images/camp1.jpg', alt: 'Camping area 1', category: 'camping', wide: true },
  { src: '/images/camp2.jpg', alt: 'Camp site 2', category: 'camping' },
  { src: '/images/camp3.jpg', alt: 'Camping view 3', category: 'camping', tall: true },
  { src: '/images/camp4.jpg', alt: 'Camp area 4', category: 'camping' },
  { src: '/images/camp5.jpg', alt: 'Camping spot 5', category: 'camping' },
  { src: '/images/camp6.jpg', alt: 'Camp site 6', category: 'camping' },
  { src: '/images/camp7.png', alt: 'Camping area 7', category: 'camping' },
  { src: '/images/camp8.png', alt: 'Camp view 8', category: 'camping' },
  
  // Island Views
  { src: '/images/island.png', alt: 'Island view', category: 'nature', wide: true },
  { src: '/images/island2.png', alt: 'Island area 2', category: 'nature' },
  
  // Scenic Views
  { src: '/images/views1.jpg', alt: 'River view', category: 'nature', tall: true },
  { src: '/images/views2.jpg', alt: 'Scenic view 2', category: 'nature' },
  { src: '/images/views3.jpg', alt: 'Nature view', category: 'nature' },
  
  // Grounds & Exterior
  { src: '/images/grounds.jpg', alt: 'Resort grounds', category: 'exterior', wide: true },
  { src: '/images/grounds2.jpg', alt: 'Grounds view 2', category: 'exterior' },
  { src: '/images/hero.jpg', alt: 'Resort exterior', category: 'exterior', tall: true },
  
  // Activities & People
  { src: '/images/people.jpeg', alt: 'Guests enjoying activities', category: 'activities' },
  { src: '/images/experiences.png', alt: 'Experience activities', category: 'activities' },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'pool', name: 'Swimming Pool' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'camping', name: 'Camping' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'nature', name: 'Nature & Views' },
    { id: 'exterior', name: 'Grounds' },
    { id: 'activities', name: 'Activities' },
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f5f1e8] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-normal text-gray-900 mb-6 leading-tight">
              Discover the beauty of every moment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our stunning collection of moments captured at Mimosa Park & Island Camp
            </p>
            <p className="text-lg text-mimosa-600 font-medium">
              {filteredImages.length} {filter === 'all' ? 'Photos' : `${categories.find(c => c.id === filter)?.name} Photos`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                className={`break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg ${
                  image.tall ? 'aspect-[3/4]' : image.wide ? 'aspect-[21/9]' : 'aspect-[4/3]'
                }`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Image Label on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f5f1e8] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
              Ready to experience the ultimate resort retreat?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Book your stay and create your own beautiful memories at Mimosa Park
            </p>
            <Link
              href="#booking"
              className="inline-block rounded-full bg-gray-900 px-12 py-4 text-lg font-semibold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book your stay
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-10 h-10" strokeWidth={2} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={2} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={2} />
          </button>

          {/* Image */}
          <div className="relative w-full h-full flex items-center justify-center p-12">
            <div className="relative max-w-7xl max-h-full w-full h-full">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Image Info */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white text-sm mb-2">{filteredImages[selectedImage].alt}</p>
            <div className="text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm inline-block">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}