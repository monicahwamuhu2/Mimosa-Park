'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Accommodation', href: '/accommodation' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Dining Menu', href: '/dining' },
  { name: 'Drinks Menu', href: '/drinks' },
  { name: 'Getting Here', href: '/getting-here' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Only go transparent on the home page
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">Mimosa Park & Island Camp</span>
            <motion.div whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              <Image
                src="/images/logo.jpeg"
                alt="Mimosa Park"
                width={160}
                height={60}
                className="h-12 w-auto lg:h-14"
                priority
              />
            </motion.div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            className={`inline-flex items-center justify-center rounded-full p-2.5 transition-all duration-300 ${
              transparent
                ? 'text-white bg-black/30 backdrop-blur-sm border border-white/20'
                : 'text-gray-700 hover:text-mimosa-600 hover:bg-mimosa-50'
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium leading-6 rounded-lg transition-all duration-200 group"
              >
                {/* Hover background */}
                <span className={`absolute inset-0 rounded-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ${
                  transparent ? 'bg-white/10' : 'bg-mimosa-50'
                }`} />

                {/* Text */}
                <span className={`relative z-10 transition-colors duration-200 ${
                  transparent
                    ? isActive ? 'text-[#fbbf24]' : 'text-white/90 group-hover:text-white'
                    : isActive ? 'text-mimosa-600' : 'text-gray-700 group-hover:text-mimosa-600'
                }`}>
                  {item.name}
                </span>

                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full ${
                      transparent ? 'bg-[#fbbf24]' : 'bg-mimosa-500'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover underline (non-active) */}
                {!isActive && (
                  <span className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left ${
                    transparent ? 'bg-white/50' : 'bg-mimosa-300'
                  }`} />
                )}
              </Link>
            );
          })}
        </div>

        {/* Book Now — Desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            <Link
              href="#booking"
              className="rounded-full px-7 py-2.5 text-sm font-bold text-white shadow-lg bg-orange-500 hover:bg-orange-600 hover:shadow-orange-200 hover:shadow-xl transition-all duration-300"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl lg:hidden"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/images/logo.jpeg"
                    alt="Mimosa Park"
                    width={140}
                    height={50}
                    className="h-10 w-auto"
                  />
                </Link>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-mimosa-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Nav links */}
              <div className="mt-6 flow-root">
                <div className="space-y-1 py-4">
                  {navigation.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 group ${
                            isActive
                              ? 'bg-mimosa-50 text-mimosa-600 border border-mimosa-200'
                              : 'text-gray-700 hover:bg-mimosa-50 hover:text-mimosa-600 border border-transparent hover:border-mimosa-100'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            {/* Active dot */}
                            <span className={`mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                              isActive ? 'bg-mimosa-500' : 'bg-gray-300 group-hover:bg-mimosa-400'
                            }`} />
                            {item.name}
                          </div>
                          {/* Arrow on hover */}
                          <span className={`text-mimosa-400 transition-all duration-200 ${
                            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
                          }`}>
                            →
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <Link
                    href="#booking"
                    className="block w-full rounded-full bg-mimosa-500 px-8 py-4 text-center text-base font-bold text-white shadow-lg hover:bg-mimosa-600 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}