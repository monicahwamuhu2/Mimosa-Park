'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CupSoda, Wine, Beer, GlassWater, Martini, type LucideIcon } from 'lucide-react';
import { useState } from 'react';

/* -------------------------------------------------------------------------- */
/*  DRINKS DATA                                                                */
/*  To edit: change a price, name or description below. To add a drink, copy   */
/*  an item line inside the relevant group. To add a whole group, copy a       */
/*  { title, cols, items } block. Everything renders automatically.            */
/*                                                                             */
/*  cols = number of columns (3 reads best for short name+price lists,         */
/*  1 for items that carry a description like mocktails).                      */
/* -------------------------------------------------------------------------- */
interface DrinkItem {
  name: string;
  description?: string;
  price: number;
}
interface DrinkGroup {
  title: string;
  cols: 1 | 2 | 3;
  note?: string;
  items: DrinkItem[];
}
interface DrinkSection {
  key: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  groups: DrinkGroup[];
}

const drinksData: DrinkSection[] = [
  {
    key: 'soft',
    title: 'Soft Drinks',
    tagline: 'Sodas, juices, water & energy',
    icon: CupSoda,
    groups: [
      {
        title: 'Soft Drinks',
        cols: 3,
        items: [
          { name: 'Soda', price: 100 },
          { name: 'Delmonte', price: 400 },
          { name: 'Minute Maid 1Ltr', price: 300 },
          { name: 'Minute Maid 500ml', price: 150 },
          { name: 'Pet Soda 500ml', price: 150 },
          { name: 'Mineral Water 1Ltr', price: 150 },
          { name: 'Mineral Water 500ml', price: 100 },
          { name: 'Dasani 1Ltr', price: 150 },
          { name: 'Dasani 500ml', price: 100 },
          { name: 'Lemonade', price: 100 },
          { name: 'Novida', price: 150 },
          { name: 'Tonic Water', price: 150 },
        ],
      },
      {
        title: 'Energy Drinks',
        cols: 3,
        items: [
          { name: 'Monster Energy', price: 350 },
          { name: 'Red Bull', price: 300 },
          { name: 'Predator', price: 100 },
        ],
      },
    ],
  },
  {
    key: 'wine',
    title: 'Wine',
    tagline: 'By the glass and by the bottle',
    icon: Wine,
    groups: [
      {
        title: 'Wine by the Glass',
        cols: 3,
        note: 'All glasses Ksh 300',
        items: [
          { name: '4th Street Red', price: 300 },
          { name: 'Cella Cask White', price: 300 },
        ],
      },
      {
        title: 'Wine by the Bottle',
        cols: 2,
        items: [
          { name: '4th Street Red / White', price: 2000 },
          { name: 'Cella Cask Red / White', price: 2000 },
          { name: 'Drostdy Hof Red / White', price: 2000 },
          { name: 'Asconi Pastrol', price: 3000 },
          { name: 'Nederberg Red / White', price: 3200 },
          { name: 'Caprice Red / White', price: 1500 },
          { name: 'Casabuena Red / White', price: 1500 },
          { name: 'Chamdor Red / White', price: 1500 },
          { name: 'Four Cousins Red / White', price: 2000 },
          { name: 'Robertson Red / White', price: 2000 },
          { name: 'Rosso Nobile Chocolate', price: 3000 },
        ],
      },
    ],
  },
  {
    key: 'beer',
    title: 'Beer',
    tagline: 'Bottles & cans',
    icon: Beer,
    groups: [
      {
        title: 'Beer Bottles',
        cols: 3,
        items: [
          { name: 'Heineken', price: 350 },
          { name: 'Balozi', price: 300 },
          { name: 'Black Ice', price: 300 },
          { name: 'Guinness', price: 300 },
          { name: 'Guinness Smooth', price: 300 },
          { name: 'King Fisher', price: 300 },
          { name: 'Hunters Dry', price: 300 },
          { name: 'Hunters Gold', price: 300 },
          { name: 'Manyatta', price: 300 },
          { name: 'Pilsner', price: 300 },
          { name: 'Pineapple Punch', price: 300 },
          { name: 'Snapp', price: 300 },
          { name: 'Tusker Cider', price: 300 },
          { name: 'Tusker Lager', price: 300 },
          { name: 'Tusker Lite', price: 300 },
          { name: 'Tusker Malt', price: 300 },
          { name: 'Tusker Ndimu', price: 300 },
          { name: 'White Cap', price: 300 },
          { name: 'Savanna Dry', price: 350 },
          { name: 'Windhoek', price: 250 },
        ],
      },
      {
        title: 'Beer Cans',
        cols: 3,
        items: [
          { name: 'Balozi', price: 350 },
          { name: 'Black Ice', price: 300 },
          { name: 'Gordons Pink', price: 300 },
          { name: 'Gordons Tonic', price: 300 },
          { name: 'Guarana', price: 300 },
          { name: 'Guinness', price: 350 },
          { name: 'Heineken', price: 400 },
          { name: 'Pineapple Punch', price: 300 },
          { name: 'Snapp', price: 300 },
          { name: 'Tusker Cider', price: 350 },
          { name: 'Tusker Lager', price: 350 },
          { name: 'Tusker Lite', price: 350 },
          { name: 'Tusker Malt', price: 350 },
          { name: 'White Cap', price: 350 },
          { name: 'Manyatta', price: 300 },
        ],
      },
    ],
  },
  {
    key: 'spirits',
    title: 'Spirits',
    tagline: 'Cognac, whisky, gin, vodka, brandy, tequila & rum',
    icon: GlassWater,
    groups: [
      {
        title: 'Cognac',
        cols: 3,
        items: [
          { name: 'Martel VS 700ml', price: 8500 },
          { name: 'Hennessy VS 700ml', price: 8500 },
          { name: 'Martel V.S.O.P', price: 13000 },
        ],
      },
      {
        title: 'Whisky',
        cols: 3,
        items: [
          { name: 'Black Label 1 litre', price: 7000 },
          { name: 'Jack Daniels 1 litre', price: 7000 },
          { name: 'Double Black 1 litre', price: 9000 },
          { name: 'Singleton 12 Years', price: 8000 },
          { name: 'Singleton 15 Years', price: 10000 },
          { name: 'Glenfiddich 12 Yrs', price: 10000 },
          { name: 'Glenfiddich 15 Yrs', price: 12500 },
          { name: 'Gold Reserve 750ml', price: 11500 },
          { name: 'Green Label 750ml', price: 10500 },
          { name: 'Black Label 750ml', price: 5500 },
          { name: 'Jack Daniels 750ml', price: 5500 },
          { name: 'Jameson 750ml', price: 4000 },
          { name: 'Ballantines 750ml', price: 3800 },
          { name: 'Red Label 1 litre', price: 4000 },
          { name: 'Red Label 750ml', price: 3500 },
          { name: 'Southern Comfort 750ml', price: 4000 },
          { name: 'Black & White 1 litre', price: 2500 },
          { name: 'Black & White 750ml', price: 2000 },
          { name: 'Hunter Choice 750ml', price: 2000 },
          { name: 'Best Whisky', price: 1800 },
        ],
      },
      {
        title: 'Whisky (375ml)',
        cols: 3,
        items: [
          { name: 'Black Label 375ml', price: 2800 },
          { name: 'Jack Daniels 375ml', price: 2800 },
          { name: 'Red Label 375ml', price: 2000 },
          { name: 'Black & White 375ml', price: 1200 },
        ],
      },
      {
        title: 'Gin (750ml)',
        cols: 3,
        items: [
          { name: 'Tanqueray Ten', price: 6000 },
          { name: 'Tanqueray Royale', price: 4000 },
          { name: 'Tanqueray Sevilla', price: 4000 },
          { name: 'Tanqueray London Gin', price: 4000 },
          { name: 'Tanqueray Rangpur', price: 4000 },
          { name: 'Gordons Dry 1 litre', price: 4000 },
          { name: 'Gordons Dry 750ml', price: 3500 },
          { name: 'Gordons Pink', price: 3500 },
          { name: 'Gilbeys', price: 2500 },
          { name: 'Best Gin', price: 1600 },
        ],
      },
      {
        title: 'Gin (350ml)',
        cols: 3,
        items: [{ name: 'Gilbeys', price: 1200 }],
      },
      {
        title: 'Vodka (750ml)',
        cols: 3,
        items: [
          { name: 'Ciroc Vodka', price: 7000 },
          { name: 'Smirnoff Vodka 1 litre', price: 3000 },
          { name: 'Smirnoff Vodka 750ml', price: 2500 },
        ],
      },
      {
        title: 'Brandy',
        cols: 3,
        items: [
          { name: 'Viceroy 750ml', price: 2500 },
          { name: 'Richot 750ml', price: 2200 },
          { name: 'Viceroy 350ml', price: 1300 },
          { name: 'Richot 350ml', price: 1100 },
        ],
      },
      {
        title: 'Tequila',
        cols: 3,
        items: [
          { name: 'Don Julio Anejo', price: 12500 },
          { name: 'Don Julio Reposado', price: 10500 },
          { name: 'Camino Gold / Clear', price: 3500 },
        ],
      },
      {
        title: 'Rum',
        cols: 3,
        items: [
          { name: 'Captain Morgan Spiced', price: 3000 },
          { name: 'Captain Morgan Gold', price: 2000 },
        ],
      },
    ],
  },
  {
    key: 'cocktails',
    title: 'Cocktails & Mocktails',
    tagline: 'Mixed and shaken to order',
    icon: Martini,
    groups: [
      {
        title: 'Cocktails',
        cols: 2,
        items: [
          { name: 'Old Fashion', price: 1000 },
          { name: 'Painkiller', price: 1000 },
          { name: 'Whisky Sour', price: 1200 },
          { name: 'Pink Lady', price: 1000 },
          { name: 'Jamaican Sunrise', price: 1000 },
          { name: 'Gachagua', price: 1500 },
          { name: 'Mimosa Special', price: 1200 },
          { name: 'Jagerbull', price: 800 },
          { name: 'Tequila Sunrise', price: 1000 },
          { name: 'Adios Mimosa', price: 1000 },
          { name: 'Gin & Tonic', price: 700 },
          { name: 'Long Island', price: 1000 },
        ],
      },
      {
        title: 'Mocktails',
        cols: 1,
        items: [
          {
            name: 'Pinacolada',
            description: 'Pineapple juice, coconut cream, soda',
            price: 400,
          },
          {
            name: 'Mimosa Breeze',
            description: 'Lemon, grenadine syrup, sugar syrup, blue curacao, soda',
            price: 400,
          },
          {
            name: 'Blue Lagoon',
            description: 'Lemon, blue curacao, sugar syrup, soda',
            price: 400,
          },
        ],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */
const colClass: Record<1 | 2 | 3, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
};

export default function DrinksMenu() {
  const [activeSection, setActiveSection] = useState(drinksData[0].key);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/drinks.jpg"
            alt="Drinks at Mimosa Park"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 flex h-full items-end px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="mx-auto max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none mb-4">
                Drinks Menu
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-light max-w-2xl">
                Sodas, wines, beers, spirits and signature cocktails
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky section nav */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {drinksData.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.key}
                  onClick={() => scrollToSection(section.key)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeSection === section.key
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-[#f5f1e8] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 space-y-20">
          {drinksData.map((section) => (
            <div key={section.key} id={section.key} className="scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-10">{section.tagline}</p>

                {section.groups.map((group, gi) => (
                  <div key={group.title} className={gi !== section.groups.length - 1 ? 'mb-10' : ''}>
                    <div className="flex flex-wrap items-baseline gap-3 mb-6">
                      <h3 className="text-2xl font-serif font-semibold text-gray-800">
                        {group.title}
                      </h3>
                      {group.note && (
                        <span className="text-sm font-medium text-mimosa-600">{group.note}</span>
                      )}
                    </div>
                    <div className={`grid ${colClass[group.cols]} gap-4`}>
                      {group.items.map((item, idx) => (
                        <div
                          key={idx}
                          className={`bg-white rounded-xl hover:shadow-lg transition-shadow ${
                            item.description ? 'p-6' : 'p-4 flex justify-between items-center'
                          }`}
                        >
                          {item.description ? (
                            <>
                              <div className="flex justify-between items-start mb-2 gap-4">
                                <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                                <span className="text-xl font-bold text-mimosa-600 whitespace-nowrap">
                                  Ksh {item.price.toLocaleString()}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </>
                          ) : (
                            <>
                              <span className="font-medium text-gray-900">{item.name}</span>
                              <span className="font-bold text-mimosa-600 whitespace-nowrap">
                                Ksh {item.price.toLocaleString()}
                              </span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}