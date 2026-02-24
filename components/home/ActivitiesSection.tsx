'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const activities = [
  {
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 48L24 24L32 32L48 16M48 16V28M48 16H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 56H20M28 56H32M40 56H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 40L28 36L32 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Hiking',
    link: '/experiences',
  },
  {
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="20" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 28H48M28 20V16M36 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="36" r="2" fill="currentColor"/>
        <circle cx="40" cy="36" r="2" fill="currentColor"/>
        <path d="M24 44H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Shopping',
    link: '/experiences',
  },
  {
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="24" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 24V20C20 17.7909 21.7909 16 24 16H40C42.2091 16 44 17.7909 44 20V24" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="36" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="40" cy="36" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M32 44V48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Cultural landmarks',
    link: '/experiences',
  },
];

export default function ActivitiesSection() {
  return (
    <section className="bg-[#e8e4dc] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl font-normal text-gray-800 lg:text-5xl leading-tight">
            Discover nearby hidden gems
          </h2>
        </motion.div>

        {/* Activities - Horizontal Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 mb-24">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link 
                href={activity.link}
                className="group flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {activity.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl lg:text-3xl font-normal text-gray-800 group-hover:text-gray-900 transition-colors">
                  {activity.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Divider Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gray-800/20 mb-20"
        />

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-normal text-gray-800 mb-8 leading-tight">
            Your luxurious getaway awaits
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of nature, comfort, and Kenyan hospitality at Mimosa Park & Island Camp
          </p>

          {/* CTA Button */}
          <a
            href="tel:+254741662514"
            className="inline-block rounded-full bg-gray-900 px-12 py-4 text-base lg:text-lg font-medium text-white shadow-lg hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book your stay now
          </a>
        </motion.div>
      </div>
    </section>
  );
}