import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CampingSection from '../../components/experiences/CampingSection';

export default function ExperiencesPage() {
  return (
    <>
      <Header />
      <main>
        <CampingSection />
      </main>
      <Footer />
    </>
  );
}