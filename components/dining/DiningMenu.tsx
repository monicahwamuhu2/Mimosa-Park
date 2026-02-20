'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Coffee, Utensils, Wine, Soup, ChefHat, Salad } from 'lucide-react';
import { useState } from 'react';

const menuData = {
  breakfast: {
    title: 'Breakfast',
    icon: Coffee,
    signature: [
      {
        name: 'Traditional Breakfast',
        description: 'Brewed African Tea or Coffee, Fruit Cuts, Arrow roots, Sweet Potatoes, Maize on Cob, Fried Pigeon Peas, Grilled Tomato',
        price: 900,
      },
      {
        name: 'Mimosa Breakfast Platter',
        description: 'Brewed African Tea/Coffee, A glass of fresh juice, Beef mini Steak, or Chicken Breast, Home Fries or French Fries, Two Sausages, Two Fried Eggs & Grilled Tomato',
        price: 900,
      },
      {
        name: 'County Breakfast',
        description: 'Brewed African Tea/Coffee, 2 Eggs, Sausage, Liver or Gizzard, Sweet Potatoes, Andazi, Fruits Cuts, Steamed Vegs',
        price: 1200,
      },
    ],
    light: [
      { name: 'Beef Samosa (Pair)', price: 150 },
      { name: 'Choma Sausage', price: 150 },
      { name: 'Eggs (Any Style)', price: 150 },
      { name: 'Two Grilled Sausage', price: 150 },
      { name: 'Andazi', price: 50 },
      { name: 'Cereals', price: 200 },
      { name: 'Bacon', price: 350 },
    ],
  },
  beverages: {
    title: 'Beverages',
    icon: Wine,
    hot: [
      {
        name: 'Mimosa Uji Power',
        description: 'Arrow Roots, Sweet Potatoes, Cassava, Cashew Nuts, milk, Sugar or Honey',
        price: 350,
      },
      { name: 'Healthy Porridge', price: 250 },
      { name: 'Brewed African Tea | Black Tea | Hot Chocolate With Milk | Masala Tea', price: 150 },
      { name: 'Brewed Black Coffee | Hot Chocolate no Milk', price: 100 },
      { name: 'Hot Water with Lemon', price: 100 },
      { name: 'Special Ginger Tea', price: 200 },
      { name: 'Herbal Tea', description: 'Request your server what is available', price: 200 },
      { name: 'Mimosa Dawa', price: 250 },
    ],
    cold: [
      { name: 'Tropical Juice', price: 200 },
      { name: 'Glass of Milk', price: 200 },
      { name: 'Iced Tea', price: 200 },
      { name: 'Fruit Smoothies', price: 300 },
      { name: 'Fresh Juice', price: 350 },
      { name: 'Milk Shake', price: 350 },
      {
        name: 'Special Health Juice',
        description: 'Make Your Favorite with Carrot, Apples, Beetroot, Celery, Ginger, Watermelon, Pineapple, Mint, Spinach',
        price: 350,
      },
    ],
  },
  starters: {
    title: 'Starters',
    icon: Soup,
    soups: [
      { name: 'Bone Soup', price: 100 },
      { name: 'Vegetable Soup', price: 300 },
      { name: 'Goat Pepper Soup', price: 300 },
      { name: 'Chicken Soup', price: 300 },
      { name: 'Bone Marrow Soup', price: 350 },
    ],
    bites: [
      { name: 'Chicken Wings', description: 'BBQ Sweet Chilli or Dry', price: 400 },
      { name: 'Sauteed Gizzard or Liver', price: 400 },
      { name: 'Meat Ball', description: 'Sweet Chilli or Coconut Sauce', price: 400 },
      { name: 'Fish Fingers', price: 500 },
    ],
    salads: [
      {
        name: 'Avocado Thakwa',
        description: 'Medley of Avocado, Cucumber, Melon, Ripe Banana, Grapes, Lettuce',
        price: 350,
      },
      {
        name: 'Mimosa Chef Special Salad',
        description: 'Shredded Carrots, Cucumber, Tomato, White Cabbage, Red Cabbage',
        price: 350,
      },
      {
        name: 'Crispy Chicken Salad',
        description: 'Vegetables, avocado, sliced almonds, hardboiled eggs and a creamy Greek yogurt dressing',
        price: 350,
      },
    ],
  },
  mains: {
    title: 'Main Course',
    icon: ChefHat,
    fish: [
      { name: 'Whole Tilapia', description: 'Dry or Wet Fry, Coconut Cream & Poached', price: 950 },
      { name: 'Fish Fillet', description: 'Served with accompaniment of choice', price: 850 },
      { name: 'Fish Fingers', description: 'Served with accompaniment of choice', price: 850 },
    ],
    beef: [
      { name: 'Traditional Beef Stew', description: 'Slow Cooked Beef with Vegs', price: 500 },
      { name: 'Cow Boy T. Bone Steak', price: 1200 },
      { name: 'Pan Seared Beef Fillet', description: 'With mushroom sauce', price: 1300 },
      { name: 'Beef 1/2Kg', description: 'Dry/ wet fry', price: 750 },
      { name: 'Beef 1Kg', description: 'Dry/ wet fry', price: 1300 },
    ],
    goat: [
      { name: 'Grilled Lamb Chops', description: 'With mint sauce', price: 1200 },
      { name: 'Goat Meat 1/2Kg', description: 'Dry/ wet fry', price: 750 },
      { name: 'Goat Meat 1Kg', description: 'Dry/ wet fry', price: 1300 },
    ],
    chicken: [
      { name: 'Full Kienyeji Chicken', description: 'Dry/ wet fry', price: 2000 },
      { name: '1/2 Kienyeji Chicken', description: 'Dry/ wet fry', price: 1100 },
      { name: 'Chicken Bahati Full', price: 2800 },
      { name: 'Chicken Bahati 1/2', price: 1500 },
    ],
    pork: [
      { name: 'Pork Chops', description: 'Honey Glazed BBQ', price: 950 },
      { name: 'Pork 1/2Kg', description: 'Dry fry/ wet fry/ choma', price: 700 },
      { name: 'Pork 1Kg', description: 'Dry fry/ wet fry/ choma', price: 1200 },
      { name: 'Pork Spare Ribs', description: 'Honey glazed/ BBQ/ sweet n chilli', price: 1100 },
      { name: 'Pork Stir fry', price: 850 },
    ],
    burgers: [
      {
        name: 'Classic Beef Burger',
        description: 'Beef patty, lettuce, tomato, cucumber, fried egg, cheese, bacon',
        price: 750,
      },
      {
        name: 'Classic Chicken Burger',
        description: 'Double chicken breast, lettuce, tomato, cucumber, fried egg, cheese, bacon',
        price: 750,
      },
      {
        name: 'Mimosa Chicken Sandwich',
        description: 'Tripled deck with cocktail spread, beef, chicken, bacon, tomato, lettuce',
        price: 850,
      },
      {
        name: 'Vegetable Sandwich',
        description: 'Marinated grilled carrot, egg plant, onions, courgettes',
        price: 750,
      },
    ],
  },
  accompaniments: {
    title: 'Accompaniments',
    icon: Salad,
    items: [
      { name: 'Kachumbari', price: 150 },
      { name: 'White Ugali', price: 100 },
      { name: 'Brown Ugali', price: 150 },
      { name: 'White Chapati', price: 80 },
      { name: 'Brown Chapati', price: 100 },
      { name: 'Mukimo', price: 300 },
      { name: 'Matoke', price: 300 },
      { name: 'Plain Rice', price: 150 },
      { name: 'Veg Rice', price: 200 },
      { name: 'Pilau Plain', price: 250 },
      { name: 'Chinese Rice', price: 350 },
      { name: 'Beef Pilau', price: 450 },
      { name: 'Chicken Pilau', price: 450 },
      { name: 'Mashed Potatoes', price: 200 },
      { name: 'French Fries', price: 250 },
      { name: 'Masala Chips', price: 350 },
      { name: 'Pousin Chips', price: 350 },
      { name: 'Sauteed Potatoes', price: 350 },
      { name: 'Lyonnaise Potatoes', price: 350 },
      { name: 'Spinach', price: 100 },
      { name: 'Steamed Cabbage', price: 100 },
      { name: 'Mixed Greens', price: 150 },
      { name: 'Assorted Veg', price: 200 },
      { name: 'Fried Njahi', price: 350 },
      { name: 'Garden Peas Stew', price: 350 },
    ],
  },
};

export default function DiningMenu() {
  const [activeSection, setActiveSection] = useState('breakfast');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
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

      {/* Menu Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {Object.entries(menuData).map(([key, section]) => {
              const Icon = section.icon;
              return (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeSection === key
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

      {/* Menu Sections */}
      <section className="bg-[#f5f1e8] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 space-y-20">
          {/* BREAKFAST SECTION */}
          <div id="breakfast" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-2">
                Breakfast
              </h2>
              <p className="text-gray-600 mb-10">Start your day right</p>

              {/* Signature Breakfast */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Signature Breakfast
              </h3>
              <div className="space-y-4 mb-10">
                {menuData.breakfast.signature.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-mimosa-600">
                        Ksh {item.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Light Breakfast */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Light Breakfast
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuData.breakfast.light.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 flex justify-between items-center hover:shadow-lg transition-shadow"
                  >
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <span className="font-bold text-mimosa-600">
                      Ksh {item.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* BEVERAGES SECTION */}
          <div id="beverages" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-2">
                Beverages
              </h2>
              <p className="text-gray-600 mb-10">Refresh and energize</p>

              {/* Hot Beverages */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Hot Beverages
              </h3>
              <div className="space-y-4 mb-10">
                {menuData.beverages.hot.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-mimosa-600">
                        Ksh {item.price.toLocaleString()}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Cold Beverages */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Cold Beverages
              </h3>
              <div className="space-y-4">
                {menuData.beverages.cold.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-mimosa-600">
                        Ksh {item.price.toLocaleString()}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* STARTERS SECTION */}
          <div id="starters" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-2">
                Starters
              </h2>
              <p className="text-gray-600 mb-10">Begin your meal</p>

              {/* Organic Soups */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Organic Soup
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {menuData.starters.soups.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 flex justify-between items-center hover:shadow-lg transition-shadow"
                  >
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <span className="font-bold text-mimosa-600">
                      Ksh {item.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bites */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Bites
              </h3>
              <div className="space-y-4 mb-10">
                {menuData.starters.bites.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-mimosa-600">
                        Ksh {item.price.toLocaleString()}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Salads */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Salad
              </h3>
              <div className="space-y-4">
                {menuData.starters.salads.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-mimosa-600">
                        Ksh {item.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* MAINS SECTION */}
          <div id="mains" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-2">
                Main Course
              </h2>
              <p className="text-gray-600 mb-10">Our signature dishes</p>

              {/* Fish Corner */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Fish Corner
              </h3>
              <div className="space-y-4 mb-10">
                {menuData.mains.fish.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-mimosa-600">
                        Ksh {item.price.toLocaleString()}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Beef Corner */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Beef Corner
              </h3>
              <div className="space-y-4 mb-10">
                {menuData.mains.beef.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-mimosa-600">
                        Ksh {item.price.toLocaleString()}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Goat Corner */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Goat Corner
              </h3>
              <div className="space-y-4 mb-10">
                {menuData.mains.goat.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-mimosa-600">
                        Ksh {item.price.toLocaleString()}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Kienyeji Chicken */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Kienyeji Chicken
              </h3>
              <div className="space-y-4 mb-10">
                {menuData.mains.chicken.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-mimosa-600">
                        Ksh {item.price.toLocaleString()}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Pork Corner */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Pork Corner
              </h3>
              <div className="space-y-4 mb-10">
                {menuData.mains.pork.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-mimosa-600">
                        Ksh {item.price.toLocaleString()}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Burgers */}
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Burgers
              </h3>
              <div className="space-y-4">
                {menuData.mains.burgers.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-xl font-bold text-mimosa-600">
                        Ksh {item.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ACCOMPANIMENTS SECTION */}
          <div id="accompaniments" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 mb-2">
                Accompaniments
              </h2>
              <p className="text-gray-600 mb-10">Complete your meal</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuData.accompaniments.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 flex justify-between items-center hover:shadow-lg transition-shadow"
                  >
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <span className="font-bold text-mimosa-600">
                      Ksh {item.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}