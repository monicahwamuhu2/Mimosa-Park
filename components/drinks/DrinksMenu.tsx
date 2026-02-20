'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const drinksData = {
  softDrinks: {
    title: 'Soft Drinks',
    items: [
      { name: 'Mineral Water 1L', price: 100 },
      { name: 'Dasani 500ml', price: 100 },
      { name: 'Dasani 1L', price: 150 },
      { name: 'Tonic Water', price: 150 },
      { name: 'Lemonade', price: 100 },
      { name: 'Soda', price: 100 },
      { name: 'Novida', price: 150 },
      { name: 'Delmonte', price: 400 },
      { name: 'Minute Maid 500ml', price: 150 },
      { name: 'Minute Maid 1L', price: 300 },
    ],
  },
  energyDrinks: {
    title: 'Energy Drinks',
    items: [
      { name: 'Predator', price: 100 },
      { name: 'RedBull', price: 300 },
      { name: 'Monster Energy', price: 350 },
    ],
  },
  mocktails: {
    title: 'Mocktails',
    items: [
      { name: 'Pinacolada', description: 'Pineapple Juice, Coconut Cream, Soda', price: 400 },
      { name: 'Mimosa Breeze', description: 'Lemon, Grenadine Syrup, Sugar Syrup, Blue Curacao, Soda', price: 400 },
      { name: 'Blue Lagoon', description: 'Lemon, Blue Curacao, Sugar Syrup, Soda', price: 400 },
    ],
  },
  cocktails: {
    title: 'Cocktails',
    items: [
      { name: 'Gin & Tonic', price: 700 },
      { name: 'Jagerbull', price: 800 },
      { name: 'Adios Mimosa', price: 1000 },
      { name: 'Jamaican Sunrise', price: 1000 },
      { name: 'Long Island', price: 1000 },
      { name: 'Old Fashion', price: 1000 },
      { name: 'Pain Killer', price: 1000 },
      { name: 'Pink Lady', price: 1000 },
      { name: 'Tequilla Sunrise', price: 1000 },
      { name: 'Mimosa Special', price: 1200 },
      { name: 'Whiskey Sour', price: 1200 },
      { name: 'Gachagua', price: 1500 },
    ],
  },
  wine: {
    title: 'Wine',
    byGlass: [
      { name: 'Casabuena Red / White by glass', price: 300 },
    ],
    byBottle: [
      { name: 'Caprice Red / White', price: 1500 },
      { name: 'Casabuena Red / White', price: 1500 },
      { name: 'Chamdor Red / White', price: 1500 },
      { name: 'Robertson Red / White', price: 2000 },
      { name: '4th Street Red / White', price: 2000 },
      { name: 'Cellar Cask Red / White', price: 2000 },
      { name: 'Drostdy Hof Red / White', price: 2000 },
      { name: 'Four Cousins Red / White', price: 2000 },
      { name: 'Rosso Nobile Chocolate', price: 3000 },
      { name: 'Nederberg Red / White', price: 3200 },
    ],
  },
  gin: {
    title: 'Gin',
    items: [
      { name: 'Gilbeys 350ml', price: 1200 },
      { name: 'Gilbeys 750ml', price: 2500 },
      { name: 'Best Gin', price: 1600 },
      { name: "Gordon's Dry 750ml | Gordon's Pink", price: 3500 },
      { name: "Gordon's Dry 1L", price: 4000 },
      { name: 'Tanqueray Royale | Tanqueray Sevilla | Tanqueray London Gin Rangpur', price: 4000 },
      { name: 'Tanqueray No Ten', price: 6000 },
    ],
  },
  beer: {
    title: 'Beer',
    bottles: [
      { name: 'Classics', description: 'Tusker Lager | Guinness Smooth | Pilsner | White Cap | Balozi', price: 300 },
      { name: 'Flavoured', description: 'Snapp | Pineapple Punch | Black Ice', price: 300 },
      { name: 'Ciders', description: 'Savannah Dry | Hunters | Manyata | King Fisher', price: 300 },
      { name: 'Tusker', description: 'Tusker Cider | Tusker Lite | Tusker Malt | Tusker Ndimu', price: 300 },
      { name: 'Heineken', price: 330 },
      { name: 'Windhoek', price: 350 },
    ],
    cans: [
      { name: 'Gin-Based (Pre-mixed)', description: "Gordon's Pink | Gordon's Tonic", price: 300 },
      { name: 'Flavoured', description: 'Black Ice | Pineapple Punch | Snapp | Guarana', price: 300 },
      { name: 'Guinness | Tusker Cider | Tusker Lite | Tusker Malt | White Cap', price: 350 },
      { name: 'Heineken', price: 400 },
    ],
  },
  rum: {
    title: 'Rum',
    items: [
      { name: 'Captain Morgan Gold', price: 1800 },
      { name: 'Captain Morgan Spiced', price: 3000 },
    ],
  },
  vodka: {
    title: 'Vodka',
    items: [
      { name: 'Smirnoff 750ml', price: 2500 },
      { name: 'Smirnoff 1L', price: 3000 },
      { name: 'Ciroc 750ml', price: 7000 },
    ],
  },
  brandy: {
    title: 'Brandy',
    items: [
      { name: 'Richot 350ml', price: 1100 },
      { name: 'Richot 750ml', price: 2200 },
      { name: 'Viceroy 350ml', price: 1300 },
      { name: 'Viceroy 750ml', price: 2500 },
    ],
  },
  tequilla: {
    title: 'Tequilla',
    items: [
      { name: 'Camino Gold', price: 3500 },
      { name: 'Don Julio Reposado', price: 10500 },
      { name: 'Don Julio Anejo', price: 12500 },
    ],
  },
  whiskey: {
    title: 'Whiskey',
    items: [
      { name: 'Best Whiskey', price: 1800 },
      { name: 'Hunters Choice', price: 2000 },
      { name: 'Black & White 375ml', price: 1200 },
      { name: 'Black & White 750ml', price: 2000 },
      { name: 'Black & White 1L', price: 2500 },
      { name: 'Red Label 375ml', price: 2000 },
      { name: 'Red Label 750ml', price: 3500 },
      { name: 'Red Label 1L', price: 4000 },
      { name: 'Jameson 750ml', price: 3800 },
      { name: 'Ballentines 750ml', price: 3800 },
      { name: 'Southern Comfort 750ml', price: 4000 },
      { name: 'Black Label 375ml', price: 2800 },
      { name: 'Black Label 750ml', price: 5500 },
      { name: 'Black Label 1L', price: 7000 },
      { name: 'Jack Daniels 375ml', price: 2800 },
      { name: 'Jack Daniels 750ml', price: 5500 },
      { name: 'Jack Daniels 1L', price: 7000 },
      { name: 'Double Black 1L', price: 8500 },
      { name: 'Green Label 750ml', price: 10500 },
      { name: 'Singleton 12 Years', price: 7500 },
      { name: 'Singleton 15 Years', price: 10000 },
      { name: 'Glenfiddich 12 Years', price: 9500 },
      { name: 'Glenfiddich 15 Years', price: 11500 },
      { name: 'Gold Reserve 750ml', price: 11500 },
    ],
  },
  cognac: {
    title: 'Cognac',
    items: [
      { name: 'Martel 750ml', price: 8500 },
      { name: 'Hennesy 750ml', price: 8500 },
      { name: 'Martel V.S.O.P', price: 13000 },
    ],
  },
};

const navLinks = [
  { label: 'Soft Drinks', href: '#softdrinks' },
  { label: 'Energy Drinks', href: '#energy-drinks' },
  { label: 'Mocktails', href: '#mocktails' },
  { label: 'Cocktails', href: '#cocktails' },
  { label: 'Wine', href: '#wine' },
  { label: 'Gin', href: '#gin' },
  { label: 'Beer', href: '#beer' },
  { label: 'Rum', href: '#rum' },
  { label: 'Vodka', href: '#vodka' },
  { label: 'Tequilla', href: '#tequilla' },
  { label: 'Cognac', href: '#cognac' },
  { label: 'Whiskey', href: '#whiskey' },
];

interface MenuItem {
  name: string;
  description?: string;
  price: number;
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-lg font-semibold text-gray-900 pr-4">{item.name}</h4>
        <span className="text-xl font-bold text-mimosa-600 whitespace-nowrap">
          Ksh {item.price.toLocaleString()}
        </span>
      </div>
      {item.description && (
        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
      )}
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-2">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
}

export default function DrinksMenu() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="https://framerusercontent.com/images/w9W5rBwEVl8glffglTrAPJsbX9M.jpg"
          alt="Drinks menu hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end pb-16 px-8 lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl lg:text-8xl font-normal text-white lowercase tracking-wide"
          >
            drinks
          </motion.h1>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 overflow-x-auto">
        <div className="flex gap-0 px-4 lg:px-8 min-w-max">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-4 text-sm font-medium text-gray-600 hover:text-mimosa-600 whitespace-nowrap transition-colors border-b-2 border-transparent hover:border-mimosa-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 space-y-20">

          {/* SOFT DRINKS */}
          <div id="softdrinks" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Soft Drinks" subtitle="Refreshing non-alcoholic options" />
              <div className="space-y-4">
                {drinksData.softDrinks.items.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ENERGY DRINKS */}
          <div id="energy-drinks" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Energy Drinks" />
              <div className="space-y-4">
                {drinksData.energyDrinks.items.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* MOCKTAILS */}
          <div id="mocktails" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Mocktails" subtitle="Delicious alcohol-free cocktails" />
              <div className="space-y-4">
                {drinksData.mocktails.items.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* COCKTAILS */}
          <div id="cocktails" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Cocktails" subtitle="Expertly crafted signature cocktails" />
              <div className="space-y-4">
                {drinksData.cocktails.items.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* WINE */}
          <div id="wine" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Wine" subtitle="Curated selection of wines" />
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">By Glass</h3>
              <div className="space-y-4 mb-10">
                {drinksData.wine.byGlass.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">By Bottle</h3>
              <div className="space-y-4">
                {drinksData.wine.byBottle.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* GIN */}
          <div id="gin" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Gin" subtitle="Premium gin selection" />
              <div className="space-y-4">
                {drinksData.gin.items.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* BEER */}
          <div id="beer" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Beer" subtitle="Cold and refreshing" />
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Beer Bottles</h3>
              <div className="space-y-4 mb-10">
                {drinksData.beer.bottles.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Beer Cans</h3>
              <div className="space-y-4">
                {drinksData.beer.cans.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* RUM */}
          <div id="rum" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Rum" />
              <div className="space-y-4">
                {drinksData.rum.items.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* VODKA */}
          <div id="vodka" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Vodka" />
              <div className="space-y-4">
                {drinksData.vodka.items.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* BRANDY */}
          <div id="brandy" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Brandy" />
              <div className="space-y-4">
                {drinksData.brandy.items.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* TEQUILLA */}
          <div id="tequilla" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Tequilla" />
              <div className="space-y-4">
                {drinksData.tequilla.items.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* WHISKEY */}
          <div id="whiskey" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Whiskey" subtitle="An extensive collection of fine whiskeys" />
              <div className="space-y-4">
                {drinksData.whiskey.items.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* COGNAC */}
          <div id="cognac" className="scroll-mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader title="Cognac" subtitle="Premium cognac selection" />
              <div className="space-y-4">
                {drinksData.cognac.items.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}