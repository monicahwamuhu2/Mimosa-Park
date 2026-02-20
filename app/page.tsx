import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import WelcomeSection from '@/components/home/WelcomeSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ResortDetailsSection from '@/components/home/ResortDetailsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ActivitiesSection from '@/components/home/ActivitiesSection';


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <FeaturesSection />
        <ResortDetailsSection />
        <TestimonialsSection />
        <ActivitiesSection />
        
      </main>
      <Footer />
    </>
  );
}