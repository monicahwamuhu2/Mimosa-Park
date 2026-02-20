import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.mimosaparkislandcamp.org', priority: 1 },
    { url: 'https://www.mimosaparkislandcamp.org/accommodation', priority: 0.8 },
    { url: 'https://www.mimosaparkislandcamp.org/dining', priority: 0.8 },
    { url: 'https://www.mimosaparkislandcamp.org/drinks', priority: 0.7 },
    { url: 'https://www.mimosaparkislandcamp.org/experiences', priority: 0.8 },
    { url: 'https://www.mimosaparkislandcamp.org/gallery', priority: 0.7 },
    { url: 'https://www.mimosaparkislandcamp.org/contact', priority: 0.6 },
    { url: 'https://www.mimosaparkislandcamp.org/getting-here', priority: 0.6 },
  ]
}