'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Coffee, Wine, Soup, ChefHat, Sandwich, Salad, type LucideIcon } from 'lucide-react';
import { useState } from 'react';

/* -------------------------------------------------------------------------- */
/*  MENU DATA                                                                  */
/*  To edit the menu: change a price, name or description below. To add an     */
/*  item, copy a line inside the relevant group. To add a whole group, copy a  */
/*  { title, cols, items } block. Everything renders automatically.            */
/*                                                                             */
/*  cols = how many columns the items sit in (1 reads best for long           */
/*  descriptions, 2-3 for short name+price items).                            */
/* -------------------------------------------------------------------------- */
interface MenuItem {
  name: string;
  description?: string;
  price: number;
}
interface MenuGroup {
  title: string;
  cols: 1 | 2 | 3;
  items: MenuItem[];
}
interface MenuSection {
  key: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  groups: MenuGroup[];
}

const menuData: MenuSection[] = [
  {
    key: 'breakfast',
    title: 'Breakfast',
    tagline: 'Start your day right',
    icon: Coffee,
    groups: [
      {
        title: 'Signature Breakfast',
        cols: 1,
        items: [
          {
            name: 'Mimosa Signature Breakfast',
            description:
              'Arrow roots / Sweet Potatoes, Samosa / Sausage, Toast, Brewed Tea / Coffee / Chocolate, Fried Spinach / Steamed Cabbage, Fruit Cuts',
            price: 600,
          },
          {
            name: 'Continental Breakfast',
            description:
              'Brewed African Tea / Coffee, 2 Eggs, Sausage / Samosa, Cereals, Sweet Potatoes / Arrow Roots, Bacon, Fresh Juice, Steamed Vegs',
            price: 1000,
          },
        ],
      },
      {
        title: 'Snacks',
        cols: 3,
        items: [
          { name: 'Beef Samosa (Pair)', price: 150 },
          { name: 'Choma Sausage', price: 150 },
          { name: 'Eggs (Any Style)', price: 150 },
          { name: 'Chapatti', price: 100 },
          { name: 'Two Grilled Sausage', price: 150 },
          { name: 'Steamed Nduma or Ngwaci', price: 150 },
          { name: 'Andazi (Pair)', price: 100 },
          { name: 'Cereals', price: 200 },
          { name: 'Bacon', price: 350 },
          { name: 'Fish Fingers', price: 500 },
          { name: 'Chicken Wings', price: 600 },
          { name: 'Tri-Samosa Chips', price: 450 },
        ],
      },
    ],
  },
  {
    key: 'beverages',
    title: 'Beverages',
    tagline: 'Refresh and energize',
    icon: Wine,
    groups: [
      {
        title: 'Hot Beverages',
        cols: 2,
        items: [
          {
            name: 'Mimosa Uji Power',
            description: 'Arrow Roots, Sweet Potatoes, Cassava, Cashew Nuts, milk, Sugar or Honey',
            price: 350,
          },
          { name: 'Brewed African Tea', price: 150 },
          { name: 'Black Tea / Coffee / Chocolate', price: 100 },
          { name: 'Brewed Kenyan White Coffee', price: 150 },
          { name: 'Hot Chocolate With Milk', price: 150 },
          { name: 'Hot Chocolate Without Milk', price: 100 },
          { name: 'Milo With Milk', price: 150 },
          { name: 'Milo Without Milk', price: 100 },
          { name: 'Special Ginger Tea', price: 200 },
          { name: 'Spicy Tea (Masala)', price: 150 },
          { name: 'Mimosa Dawa', price: 250 },
          { name: 'Hot Water with Lemon', price: 100 },
          { name: 'Herbal Tea', description: 'Request your server what is available', price: 200 },
          { name: 'Healthy Porridge', price: 250 },
        ],
      },
      {
        title: 'Cold Beverages',
        cols: 2,
        items: [
          { name: 'Healthy Fresh Juice', price: 350 },
          {
            name: 'Tropical Juice',
            description: 'Pineapple, Melon, Orange, Cocktail',
            price: 350,
          },
          {
            name: 'Special Health Juices',
            description:
              'Make your favourite with Carrot, Apples, Beetroot, Celery, Ginger, Watermelon, Pineapple, Mint, Spinach',
            price: 350,
          },
          { name: 'Glass of Milk', price: 200 },
          { name: 'Iced Tea', price: 200 },
          { name: 'Fruit Smoothies', price: 300 },
          { name: 'Milk Shakes', price: 350 },
        ],
      },
    ],
  },
  {
    key: 'starters',
    title: 'Starters',
    tagline: 'A great way to begin',
    icon: Soup,
    groups: [
      {
        title: 'Hot Starters',
        cols: 2,
        items: [
          { name: 'Mimosa Special Soup', description: 'Beef broth served with buns', price: 350 },
          { name: 'Tomato Soup', description: 'Served with croutons', price: 300 },
          { name: 'Cream of Butternut with Ginger', price: 300 },
          { name: 'Cream of Carrot & Ginger Soup', price: 300 },
          { name: 'Chicken Soup', price: 400 },
          { name: 'Bone Soup', price: 100 },
        ],
      },
      {
        title: 'Salads (Cold Starters)',
        cols: 1,
        items: [
          {
            name: 'Green Garden Salad',
            description: 'Medley of Avocado, Cucumber, Melon, Ripe Banana, Grapes, Lettuce',
            price: 350,
          },
          {
            name: 'Mimosa Chef Special Salad',
            description: 'Shredded Carrots, Cucumber, Tomato, White Cabbage, Red Cabbage',
            price: 500,
          },
          {
            name: 'Crispy Chicken Salad',
            description:
              'Vegetables, avocado, sliced almonds, hard-boiled eggs and a creamy Greek yogurt dressing',
            price: 600,
          },
        ],
      },
    ],
  },
  {
    key: 'mains',
    title: 'Main Course',
    tagline: 'Our signature dishes',
    icon: ChefHat,
    groups: [
      {
        title: 'Fish Corner',
        cols: 1,
        items: [
          { name: 'Whole Tilapia', description: 'Dry or Wet Fry, Coconut Cream & Poached', price: 950 },
          { name: 'Fish Fillet', description: 'With choice of accompaniment', price: 850 },
          { name: 'Fish Fingers', description: 'With accompaniment', price: 850 },
        ],
      },
      {
        title: 'Beef Corner',
        cols: 1,
        items: [
          { name: 'Traditional Beef Stew', description: 'Slow cooked beef with vegs', price: 500 },
          { name: 'Cow Boy T-Bone Steak', price: 1200 },
          { name: 'Pan Seared Beef Fillet', description: 'With mushroom sauce', price: 1300 },
          { name: 'Beef 1/2 Kg', description: 'Dry or Wet Fry', price: 700 },
          { name: 'Beef 1 Kg', description: 'Dry or Wet Fry', price: 1300 },
        ],
      },
      {
        title: 'Goat Corner',
        cols: 1,
        items: [
          { name: 'Marinated Grilled Lamb Chops', description: 'With mint sauce', price: 1200 },
          { name: 'Goat Meat 1/2 Kg', description: 'Dry or Wet Fry or Roasted', price: 750 },
          { name: 'Goat Meat 1 Kg', description: 'Dry or Wet Fry or Roasted', price: 1400 },
        ],
      },
      {
        title: 'Kienyeji Chicken',
        cols: 1,
        items: [
          { name: 'Full Kienyeji Chicken', description: 'Dry or Wet Fry', price: 2000 },
          { name: 'Half Kienyeji Chicken', description: 'Dry or Wet Fry', price: 1100 },
          { name: 'Chicken Bahati Full', price: 2800 },
          { name: 'Chicken Bahati Half', price: 1500 },
        ],
      },
      {
        title: 'Capon Corner',
        cols: 1,
        items: [
          { name: 'Full Capon', description: 'BBQ or Grilled or Dry or Wet Fry', price: 1500 },
          { name: 'Half Capon', description: 'BBQ or Grilled or Dry or Wet Fry', price: 800 },
        ],
      },
      {
        title: 'Pork Corner',
        cols: 1,
        items: [
          { name: 'Pork Chops', description: 'Honey glazed BBQ', price: 950 },
          { name: 'Pork 1/2 Kg', description: 'Dry or Wet Fry or Choma', price: 700 },
          { name: 'Pork 1 Kg', description: 'Dry or Wet Fry or Choma', price: 1300 },
          {
            name: 'Pork Spare Ribs',
            description: 'Honey glazed or BBQ or Sweet n Chilli',
            price: 1100,
          },
          { name: 'Pork Spare Ribs (Plain)', price: 950 },
          { name: 'Pork Stir Fry', price: 950 },
        ],
      },
    ],
  },
  {
    key: 'kids',
    title: 'Kids Corner',
    tagline: 'Burgers & sandwiches for all ages',
    icon: Sandwich,
    groups: [
      {
        title: 'Burgers',
        cols: 1,
        items: [
          {
            name: 'Classic Beef Burger',
            description: 'Beef patty, lettuce, tomato, cucumber, fried egg, cheese, bacon',
            price: 750,
          },
          {
            name: 'Classic Chicken Burger',
            description: 'Double chicken breast, lettuce, tomato, cucumber, fried egg, cheese, bacon',
            price: 850,
          },
        ],
      },
      {
        title: 'Sandwiches',
        cols: 1,
        items: [
          {
            name: 'Mimosa Signature Sandwich',
            description: 'Triple deck with cocktail spread, beef, chicken, bacon, tomato, lettuce',
            price: 850,
          },
          {
            name: 'Vegetable Sandwich',
            description: 'Marinated grilled carrot, egg plant, onions, courgettes',
            price: 750,
          },
        ],
      },
    ],
  },
  {
    key: 'accompaniments',
    title: 'Accompaniments',
    tagline: 'Complete your meal',
    icon: Salad,
    groups: [
      {
        title: 'Accompaniments',
        cols: 3,
        items: [
          { name: 'French Fries', price: 250 },
          { name: 'Masala Chips', price: 350 },
          { name: 'Sauteed Potatoes', price: 350 },
          { name: 'Lyonnaise Potatoes', price: 350 },
          { name: 'Mukimo', price: 300 },
          { name: 'Vegetable Rice', price: 200 },
          { name: 'Ugali', price: 100 },
          { name: 'Pilau Plain', price: 250 },
          { name: 'Beef / Chicken Pilau', price: 450 },
          { name: 'Chinese Rice', price: 350 },
          { name: 'Mashed Potatoes', price: 200 },
          { name: 'Matoke', price: 300 },
          { name: 'Rice', price: 150 },
          { name: 'White Chapatti', price: 80 },
          { name: 'Pousin Chips', price: 350 },
        ],
      },
      {
        title: 'Health Corner',
        cols: 3,
        items: [
          { name: 'Assorted Vegetables', price: 200 },
          { name: 'Kachumbari', price: 150 },
          { name: 'Mixed Greens', price: 150 },
          { name: 'Spinach', price: 100 },
          { name: 'Steamed Cabbage', price: 100 },
          { name: 'Fried Njahi', price: 350 },
          { name: 'Garden Peas Stew', price: 350 },
          { name: 'Brown Ugali', price: 150 },
          { name: 'Brown Chapatti', price: 100 },
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

export default function DiningMenu() {
  const [activeSection, setActiveSection] = useState(menuData[0].key);

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
            src="/images/food.jpg"
            alt="Dining at Mimosa Park"
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
                Our Menu
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-light max-w-2xl">
                Authentic Kenyan cuisine prepared with fresh local ingredients
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky section nav */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {menuData.map((section) => {
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
          {menuData.map((section) => (
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
                    <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                      {group.title}
                    </h3>
                    <div className={`grid ${colClass[group.cols]} gap-4`}>
                      {group.items.map((item, idx) => (
                        <div
                          key={idx}
                          className={`bg-white rounded-xl hover:shadow-lg transition-shadow ${
                            item.description
                              ? 'p-6'
                              : 'p-4 flex justify-between items-center'
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