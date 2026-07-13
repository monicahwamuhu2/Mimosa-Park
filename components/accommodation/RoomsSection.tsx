'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Bed,
  Tent,
  Waves,
  Users2,
  GlassWater,
  Phone,
  ChevronLeft,
  ChevronRight,
  Mountain,
  Landmark,
  ShoppingBag,
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

/* -------------------------------------------------------------------------- */
/*  IMAGES                                                                     */
/*  Add any new photos to /public/images/ and list them here. The counter and */
/*  hero carousel update automatically from this array.                       */
/* -------------------------------------------------------------------------- */
const heroImages = [
  '/images/room1.png',
  '/images/room2.png',
  '/images/room3.png',
  '/images/room4.png',
  '/images/island.png',
  '/images/island2.png',
  '/images/camp1.jpg',
  '/images/camp7.png',
  '/images/camp8.png',
  '/images/tent1.jpeg',
  '/images/tent3.jpeg',
  '/images/views1.jpg',
  '/images/views2.jpg',
  '/images/views3.jpg',
  '/images/stdroom1.jpeg',
  '/images/stdroom2.jpeg',
  '/images/stdroom3.jpeg',
  '/images/cottage1.jpeg',
  '/images/cottage2.jpeg',
  '/images/cottage3.jpeg',
  '/images/cottage4.jpeg',
  '/images/cottage5.jpeg',
  '/images/cottage6.jpeg',
  '/images/cottage7.jpeg',
  '/images/deluxe.jpeg',
  '/images/deluxe1.1.jpeg',
  '/images/deluxe1.jpeg',
  '/images/deluxe2.jpeg',
  '/images/deluxe3.jpeg',
  '/images/deluxe4.jpeg',
  '/images/deluxe5.jpeg',
];

/* -------------------------------------------------------------------------- */
/*  ACCOMMODATION CATEGORY CARDS                                              */
/*  Each card is its own mini-carousel. Add/remove photos in the `images`      */
/*  array for that room type — they auto-rotate and swipe on mobile. The       */
/*  first image is what shows before it rotates.                              */
/* -------------------------------------------------------------------------- */
const categories = [
  {
    title: 'Standard & Family Rooms',
    images: ['/images/stdroom1.jpeg', '/images/stdroom2.jpeg', '/images/stdroom3.jpeg'],
    blurb: 'Comfortable en-suite rooms for singles, couples and families.',
    icon: Bed,
  },
  {
    title: 'Deluxe Rooms',
    images: [
      '/images/deluxe1.1.jpeg',
      '/images/deluxe1.jpeg',
      '/images/deluxe2.jpeg',
      '/images/deluxe3.jpeg',
      '/images/deluxe4.jpeg',
      '/images/deluxe5.jpeg',
    ],
    blurb: 'Extra space and premium finishes for a more indulgent stay.',
    icon: Bed,
  },
  {
    title: 'Luxury Tented Cottages',
    images: [
      '/images/cottage1.jpeg',
      '/images/cottage2.jpeg',
      '/images/cottage3.jpeg',
      '/images/cottage4.jpeg',
      '/images/cottage5.jpeg',
      '/images/cottage6.jpeg',
      '/images/cottage7.jpeg',
    ],
    blurb: 'Immersive riverside cottages blending comfort with the bush.',
    icon: Tent,
  },
  {
    title: 'Camping',
    images: ['/images/tent1.jpeg', '/images/tent3.jpeg', '/images/camp1.jpg', '/images/camp7.png', '/images/camp8.png'],
    blurb: 'Pitch by the Sagana River for a true outdoor adventure.',
    icon: Tent,
  },
];

/* -------------------------------------------------------------------------- */
/*  PRICING DATA                                                               */
/*  Residents are in KES (BO/BB/HB/FB). Non-residents in USD (BB/HB/FB).       */
/*  To change a price, just edit the number here.                             */
/* -------------------------------------------------------------------------- */
type ResidentRates = { BO: number; BB: number; HB: number; FB: number };
type NonResidentRates = { BB: number; HB: number; FB: number };

interface Room {
  name: string;
  note?: string;
  resident: ResidentRates;
  nonResident: NonResidentRates;
}

const roomGroups: { group: string; icon: typeof Bed; rooms: Room[] }[] = [
  {
    group: 'Standard & Family Rooms',
    icon: Bed,
    rooms: [
      {
        name: 'Standard Single Room',
        resident: { BO: 2500, BB: 3000, HB: 4200, FB: 5500 },
        nonResident: { BB: 30, HB: 42, FB: 55 },
      },
      {
        name: 'Standard Double Room',
        resident: { BO: 3000, BB: 4000, HB: 6500, FB: 9000 },
        nonResident: { BB: 40, HB: 65, FB: 90 },
      },
      {
        name: 'Family Room',
        note: 'Twin bed',
        resident: { BO: 4500, BB: 5500, HB: 8000, FB: 11000 },
        nonResident: { BB: 55, HB: 80, FB: 110 },
      },
    ],
  },
  {
    group: 'Deluxe Rooms',
    icon: Bed,
    rooms: [
      {
        name: 'Deluxe Single Room',
        resident: { BO: 3000, BB: 4000, HB: 5200, FB: 6500 },
        nonResident: { BB: 40, HB: 53, FB: 65 },
      },
      {
        name: 'Deluxe Double Room',
        resident: { BO: 4000, BB: 6000, HB: 8500, FB: 11000 },
        nonResident: { BB: 60, HB: 85, FB: 110 },
      },
      {
        name: 'Deluxe Family Room',
        note: 'Twin bed',
        resident: { BO: 6000, BB: 8000, HB: 10500, FB: 13000 },
        nonResident: { BB: 80, HB: 105, FB: 130 },
      },
    ],
  },
  {
    group: 'Luxury Tented Cottages',
    icon: Tent,
    rooms: [
      {
        name: 'Luxury Tented Cottage Single',
        resident: { BO: 5000, BB: 6000, HB: 7200, FB: 9000 },
        nonResident: { BB: 60, HB: 72, FB: 90 },
      },
      {
        name: 'Luxury Tented Cottage Double',
        resident: { BO: 6000, BB: 7000, HB: 9500, FB: 12500 },
        nonResident: { BB: 70, HB: 95, FB: 125 },
      },
    ],
  },
  {
    group: 'Camping',
    icon: Tent,
    rooms: [
      {
        name: 'Camping Tent Single',
        resident: { BO: 1500, BB: 2000, HB: 3500, FB: 5000 },
        nonResident: { BB: 20, HB: 35, FB: 50 },
      },
      {
        name: 'Camping Tents Double',
        resident: { BO: 2000, BB: 3000, HB: 5500, FB: 8500 },
        nonResident: { BB: 30, HB: 55, FB: 85 },
      },
    ],
  },
];

const rateLegend = [
  { code: 'BO', label: 'Bed Only' },
  { code: 'BB', label: 'Bed & Breakfast' },
  { code: 'HB', label: 'Half Board — Bed, Breakfast, Dinner or Lunch' },
  { code: 'FB', label: 'Full Board — Bed, Breakfast, Dinner & Lunch' },
];

const facilities = [
  { title: 'Swimming Pool', icon: Waves },
  { title: 'Conference Facility', icon: Users2 },
  { title: 'Bar & Restaurant', icon: GlassWater },
  { title: 'Wedding & Team-building Grounds', icon: Landmark },
];

const experiences = [
  { title: 'Nature Walks & Hiking', icon: Mountain, blurb: 'Explore scenic riverside trails and nearby hills.' },
  { title: 'Cultural Landmarks', icon: Landmark, blurb: 'Discover the heritage and hidden gems around Sagana.' },
  { title: 'Local Shopping', icon: ShoppingBag, blurb: 'Browse markets and artisan spots a short drive away.' },
];

const included = [
  { title: 'En-Suite Comfort', description: 'Quality beds, fresh linens and private hot-water bathrooms.', icon: '🛏️' },
  { title: 'Fresh Meals', description: 'Authentic Kenyan cuisine prepared fresh daily.', icon: '🍽️' },
  { title: 'Free Wi-Fi', description: 'Stay connected with complimentary internet access.', icon: '📶' },
  { title: 'Scenic River Views', description: 'Wake up to the calm of the Sagana River.', icon: '🏞️' },
  { title: '24/7 Service & Security', description: 'Friendly staff and round-the-clock peace of mind.', icon: '🔔' },
  { title: 'Campfire Evenings', description: 'Gather around the communal campfire under the stars.', icon: '🔥' },
];

const PHONE = '+254741662514';

/* -------------------------------------------------------------------------- */
/*  CATEGORY CARD — each card is its own image carousel                        */
/* -------------------------------------------------------------------------- */
function CategoryCard({
  title,
  images,
  blurb,
  icon: Icon,
  index,
}: {
  title: string;
  images: string[];
  blurb: string;
  icon: typeof Bed;
  index: number;
}) {
  const [cardRef, cardApi] = useEmblaCarousel(
    { loop: true },
    // Stagger the autoplay so the four cards don't all flip at the same moment
    [Autoplay({ delay: 3500 + index * 600, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);

  const onDotClick = useCallback((i: number) => cardApi && cardApi.scrollTo(i), [cardApi]);

  // Keep the active dot in sync as the carousel moves
  useEffect(() => {
    if (!cardApi) return;
    const onSelect = () => setSelected(cardApi.selectedScrollSnap());
    onSelect();
    cardApi.on('select', onSelect);
    return () => {
      cardApi.off('select', onSelect);
    };
  }, [cardApi]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
    >
      <div className="relative h-56 w-full overflow-hidden">
        {/* Carousel */}
        <div className="overflow-hidden h-full" ref={cardRef}>
          <div className="flex h-full">
            {images.map((image, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 relative h-full">
                <Image
                  src={image}
                  alt={`${title} ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient + title overlay (sits above the carousel) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <Icon className="w-5 h-5" strokeWidth={2} />
          <h3 className="font-serif text-lg font-semibold">{title}</h3>
        </div>

        {/* Dots (only when there's more than one photo) */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => onDotClick(i)}
                aria-label={`View photo ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selected === i ? 'w-5 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed">{blurb}</p>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */
export default function RoomsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [residency, setResidency] = useState<'resident' | 'nonresident'>('resident');

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const isResident = residency === 'resident';

  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 group">
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {heroImages.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                  <Image
                    src={image}
                    alt={`Mimosa Park accommodation ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          </div>

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

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10" />
        </div>

        <div className="relative z-20 flex h-full items-end px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
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

              <h1 className="font-serif text-6xl lg:text-7xl xl:text-9xl font-bold text-white leading-none mb-4">
                Stay With Us
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-light max-w-2xl">
                Rooms, cottages and camping along the Sagana River
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
          <span className="text-white text-sm font-medium">{heroImages.length} Photos</span>
        </div>
      </section>

      {/* ===================== ACCOMMODATION CATEGORIES ===================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
              Where would you like to stay?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From cosy en-suite rooms to riverside tented cottages and open-air camping
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <CategoryCard
                key={cat.title}
                title={cat.title}
                images={cat.images}
                blurb={cat.blurb}
                icon={cat.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= PRICING ============================= */}
      <section className="bg-[#f5f1e8] py-20 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
              Rates per night
            </h2>
            <p className="text-gray-600 text-lg">Choose your rate — full details below</p>
          </motion.div>

          {/* Residency toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-white p-1.5 shadow-md">
              <button
                onClick={() => setResidency('resident')}
                className={`px-6 py-2.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ${
                  isResident ? 'bg-gray-900 text-white shadow' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Residents (KES)
              </button>
              <button
                onClick={() => setResidency('nonresident')}
                className={`px-6 py-2.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ${
                  !isResident ? 'bg-gray-900 text-white shadow' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Non-Residents (USD)
              </button>
            </div>
          </div>

          {/* Rate legend — shown first so guests understand the codes */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 bg-white rounded-2xl p-6 lg:p-8 shadow-sm"
          >
            <h4 className="font-serif text-lg font-semibold text-gray-900 mb-4">Rate types</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rateLegend.map((r) => (
                <div key={r.code} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-9 h-6 rounded-md bg-mimosa-100 text-mimosa-700 text-xs font-bold">
                    {r.code}
                  </span>
                  <span className="text-sm text-gray-600">{r.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Non-resident rates are quoted in US Dollars. Bed-Only (BO) applies to resident rates.
            </p>
          </motion.div>

          {/* Grouped room cards */}
          <div className="space-y-14">
            {roomGroups.map((group, gi) => {
              const GroupIcon = group.icon;
              return (
                <motion.div
                  key={group.group}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: gi * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-mimosa-100 rounded-full flex items-center justify-center">
                      <GroupIcon className="w-5 h-5 text-mimosa-600" strokeWidth={2} />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-gray-900">{group.group}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {group.rooms.map((room) => {
                      const rates = isResident
                        ? [
                            { code: 'BO', value: room.resident.BO },
                            { code: 'BB', value: room.resident.BB },
                            { code: 'HB', value: room.resident.HB },
                            { code: 'FB', value: room.resident.FB },
                          ]
                        : [
                            { code: 'BB', value: room.nonResident.BB },
                            { code: 'HB', value: room.nonResident.HB },
                            { code: 'FB', value: room.nonResident.FB },
                          ];

                      return (
                        <div
                          key={room.name}
                          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                        >
                          <div className="mb-4">
                            <h4 className="font-serif text-lg font-semibold text-gray-900">
                              {room.name}
                            </h4>
                            {room.note && (
                              <span className="text-xs text-gray-500">{room.note}</span>
                            )}
                          </div>

                          <div
                            className={`grid gap-2 ${
                              isResident ? 'grid-cols-4' : 'grid-cols-3'
                            }`}
                          >
                            {rates.map((rate) => (
                              <div
                                key={rate.code}
                                className="rounded-xl bg-[#f5f1e8] px-2 py-3 text-center"
                              >
                                <div className="text-[11px] font-bold tracking-wide text-mimosa-600 mb-1">
                                  {rate.code}
                                </div>
                                <div className="text-sm lg:text-base font-bold text-gray-900 leading-tight">
                                  {isResident
                                    ? `Ksh ${rate.value.toLocaleString()}`
                                    : `$${rate.value}`}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              To book, call us directly — our team will help you choose the right room and rate.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-10 py-4 text-lg font-semibold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" strokeWidth={2} />
              Call to book: {PHONE}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================= FACILITIES ============================= */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
              Our facilities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need for a relaxing stay, a celebration or a corporate retreat
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, index) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-mimosa-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-mimosa-600" strokeWidth={2} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900">{f.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCES / ACTIVITIES ===================== */}
      <section id="experiences" className="bg-[#e8e4dc] py-20 lg:py-32 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
              Experiences around Mimosa
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Make the most of your stay with adventures and hidden gems nearby
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-5 text-gray-700">
                    <Icon className="w-14 h-14" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-gray-800 mb-3">{exp.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs">{exp.blurb}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== WHAT'S INCLUDED ===================== */}
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
              What every stay includes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {included.map((feature, index) => (
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
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-3 rounded-full bg-mimosa-500 px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-mimosa-600 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" strokeWidth={2} />
              Book your stay now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}