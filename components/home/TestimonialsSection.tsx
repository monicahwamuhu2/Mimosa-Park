'use client';

import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Definitely a five star place, this place has lot to offer from amazing views of river sagana to the amazing landscaping of the hotel. They have ample space for team building and other events, they offer great nyama choma and a swimming pool.",
    author: "Wycliffe Mugambi",
    rating: 5,
  },
  {
    quote: "Beautiful space outside the city. Happy you hosted bikers from nairobi for their Ubuntu 2026 ride. Food is great and ambience too.",
    author: "Natasha Kathryn",
    rating: 5,
  },
  {
    quote: "Its such a rendezvous place, with very high profile hospitality capacity. Memorable experience.",
    author: "Jkamur",
    rating: 5,
  },
  {
    quote: "An expansive recreation establishment with very beautiful vistas of River Sagana and the surrounding terrain. Excellent food and responsive service staff.",
    author: "Dr. Esbon Gakuo",
    rating: 5,
  },
  {
    quote: "The Hotel is open 24 hrs. Fresh food, quality service, clean maintained gardens, enough parking space, approximately 100 meters from the tarmac.",
    author: "JOHN NDUNGU",
    rating: 5,
  },
  {
    quote: "It's a cool place with beautiful scenery. Also it can be a great place for wedding photoshoots. Welcome and have a cool adventure.",
    author: "Thee_r.x.y",
    rating: 4,
  },
  {
    quote: "Just perfect for the GCA SCOUTS. THANKS FOR GIVING US THE CHANCE.",
    author: "Mikeglenn Gaichuru",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://framerusercontent.com/images/s7rujRNHtJBd1suNFe6p1ODOWgQ.jpg?width=1280&height=671')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-12 lg:mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-4xl lg:text-5xl font-normal text-white mb-4"
        >
          Guest Experiences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/80 text-lg max-w-2xl mx-auto"
        >
          Hear from our valued guests about their memorable moments at Mimosa Park
        </motion.p>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Carousel Container */}
        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 px-6 lg:px-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_90%] sm:flex-[0_0_60%] lg:flex-[0_0_45%] xl:flex-[0_0_35%] min-w-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-2xl h-full hover:scale-[1.02] transition-transform duration-300 flex flex-col">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? 'fill-mimosa-400 text-mimosa-400'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="flex-grow mb-6">
                      <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>

                    {/* Author */}
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-900 font-semibold text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Verified Guest
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="relative z-10 text-center mt-12 lg:mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-white/60 text-sm"
        >
          <Star className="w-4 h-4 fill-mimosa-400 text-mimosa-400" />
          <span>Average Rating: 4.9/5 from {testimonials.length} guests</span>
          <Star className="w-4 h-4 fill-mimosa-400 text-mimosa-400" />
        </motion.div>
      </div>
    </section>
  );
}